/* =========================================================================
 *  pdf-export.js  —  Експорт персонажа D&D 5e у PDF
 *  -------------------------------------------------------------------------
 *  Очікує, що ці глобалі вже визначено у character-creator.html
 *  (вони доступні з боку інлайн-скрипта, бо це класичні <script>):
 *      character, currentTab, switchTab,
 *      PDF_TEMPLATE_BASE64,
 *      runValidation,
 *      DND_CLASSES, DND_RACES, ARMOR_DATA, DND_FEATS,
 *      ABILITY_KEYS, ABILITY_LABELS,
 *      profBonus, finalAbility, abilityMod, fmtMod,
 *      calculateAC, maxHP, passivePerception,
 *      effectiveBackgroundName, backgroundBonusSkills,
 *      backgroundLanguagesText, backgroundToolsText, backgroundFeatureText,
 *      collectAllClassFeatures, getASIUnlockedLevels,
 *      normalizeASISelection, isASIValid, selectedFeats,
 *      weaponAttackInfo,
 *      getSpellSlots, getSpellById   (магія: комірки та довідник заклять)
 *  Експортує:  window.generatePDF()
 * ======================================================================= */
(function () {
    "use strict";

    // ---------------------------------------------------------------------
    // Конфіг
    // ---------------------------------------------------------------------

    // DejaVu Sans — єдиний TTF, що покриває одночасно латиницю, кирилицю,
    // цифри, "+", "-" та типографські знаки. Перевірено: CDN віддає
    // `Access-Control-Allow-Origin: *`, тому fetch із браузера працює.
    // (Старий URL віддавав СУБСЕТ Roboto, який містив ТІЛЬКИ кириличні
    // літери — без цифр і латиниці, через що STR/STRmod/ClassLevel
    // рендерилися як порожні квадрати .notdef.)
    const PDF_FONT_URL = "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf";

    // Поставте у true, щоб у консолі бачити список усіх імен полів PDF
    // та статистику заповнення — корисно під час нового мапування.
    const DEBUG_PDF = false;

    // Кеш у межах сесії — щоб повторні експорти не качали шаблон і шрифт.
    let _pdfTemplateBytes = null;
    let _fontBytes = null;

    // ---------------------------------------------------------------------
    // Утиліти
    // ---------------------------------------------------------------------

    async function fetchBytes(url) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Не вдалося завантажити ${url}: ${res.status}`);
        return new Uint8Array(await res.arrayBuffer());
    }

    function decodeBase64ToBytes(b64) {
        const bin = atob(b64);
        const out = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
        return out;
    }

    function setPdfStatus(text, isError = false) {
        const el = document.getElementById("pdf-status");
        if (!el) return;
        el.innerText = text || "";
        el.className =
            "text-xs mt-4 min-h-[1rem] " +
            (isError ? "text-red-600 font-semibold" : "text-slate-500");
    }

    // ---------------------------------------------------------------------
    // Основна функція генерації
    // ---------------------------------------------------------------------

    async function generatePDF() {
        const btn = document.getElementById("btn-download-pdf");
        const label = document.getElementById("btn-download-label");
        const icon = document.getElementById("btn-download-icon");

        try {
            // 0) Валідація: якщо обов'язкові поля не заповнені — не генеруємо.
            const errors = runValidation();
            if (errors.length > 0) {
                const firstTab = errors[0].tab;
                const summary = errors.slice(0, 5).map(e => `• ${e.message}`).join("\n");
                const wordForm = errors.length === 1 ? "а" : errors.length < 5 ? "и" : "ок";
                setPdfStatus(
                    `Заповніть обов'язкові поля перед генерацією PDF (${errors.length} помилк${wordForm}).\n${summary}`,
                    true
                );
                if (firstTab && firstTab !== currentTab) switchTab(firstTab);
                return;
            }

            if (btn) btn.disabled = true;
            if (icon) icon.innerText = "⏳";
            if (label) label.innerText = "Готуємо PDF...";
            setPdfStatus("Завантажуємо шаблон і кириличний шрифт...");

            // 1) Шаблон PDF (з вбудованого Base64) + кириличний TTF — паралельно.
            const pdfBytesPromise = _pdfTemplateBytes
                ? Promise.resolve(_pdfTemplateBytes)
                : Promise.resolve(decodeBase64ToBytes(PDF_TEMPLATE_BASE64))
                      .then(b => (_pdfTemplateBytes = b));
            const fontBytesPromise = _fontBytes
                ? Promise.resolve(_fontBytes)
                : fetchBytes(PDF_FONT_URL).then(b => (_fontBytes = b));
            const [pdfBytes, fontBytes] = await Promise.all([pdfBytesPromise, fontBytesPromise]);

            // 2) Завантажуємо PDF та реєструємо fontkit.
            const { PDFDocument } = PDFLib;
            const pdfDoc = await PDFDocument.load(pdfBytes);
            pdfDoc.registerFontkit(window.fontkit);

            // 3) Вбудовуємо шрифт. subset:true — у файл потрапляють тільки
            //    реально використані гліфи, тому розмір файлу не роздувається.
            const cyrFont = await pdfDoc.embedFont(fontBytes, { subset: true });

            const form = pdfDoc.getForm();
            if (DEBUG_PDF) {
                console.log("PDF form fields:", form.getFields().map(f => f.getName()));
            }

            // 4) ВИКОРИСТОВУЄМО ЕМБЕДЖЕНИЙ ШРИФТ ЯК ШРИФТ-ЗА-ЗАМОВЧУВАННЯМ
            //    форми. Це дописує наш шрифт у /DR (Default Resources) форми
            //    та використовує його у /DA. Без цього кроку pdf-lib не знає,
            //    яким шрифтом малювати appearance-стріми, і `setFontSize`
            //    впадає в "No /DA entry found for field …".
            form.updateFieldAppearances(cyrFont);

            // Допоміжні дані персонажа
            const cls = character.classId ? DND_CLASSES[character.classId] : null;
            const race = character.raceId ? DND_RACES[character.raceId] : null;
            const d = character.description;
            const lvl = character.level || 1;
            const pb = profBonus(lvl);

            // Журнал — допомагає швидко знайти проблемні поля під час DEBUG.
            const filled = [];
            const failed = [];

            /**
             * Авто-підбір розміру шрифту, щоб текст уміщувався у віджет.
             * Викликати ТІЛЬКИ після того, як /DA вже існує (тобто після
             * f.updateAppearances або form.updateFieldAppearances).
             */
            function fitFontSize(field, text, font, opts) {
                const widget = field.acroField.getWidgets()[0];
                if (!widget) return opts.maxSize;
                const rect = widget.getRectangle();
                const w = Math.max(1, rect.width - 4);
                const h = Math.max(1, rect.height - 4);
                let size = opts.maxSize;
                while (size >= opts.minSize) {
                    if (opts.multiline) {
                        const lineHeight = size * 1.15;
                        const linesAvailable = Math.max(1, Math.floor(h / lineHeight));
                        const charsPerLine = Math.max(1, Math.floor(w / (size * 0.5)));
                        const rawLines = String(text).split(/\r?\n/);
                        let total = 0;
                        rawLines.forEach(ln => total += Math.max(1, Math.ceil(ln.length / charsPerLine)));
                        if (total <= linesAvailable) return size;
                    } else {
                        let textWidth;
                        try { textWidth = font.widthOfTextAtSize(String(text), size); }
                        catch (_) { textWidth = String(text).length * size * 0.5; }
                        if (textWidth <= w) return size;
                    }
                    size -= 0.5;
                }
                return opts.minSize;
            }

            /**
             * Безпечно заповнює текстове поле із заданою назвою.
             *
             * Порядок операцій критичний:
             *   1) setText(value)
             *   2) updateAppearances(cyrFont)   ← створює appearance-стрім із нашим шрифтом
             *   3) setFontSize(N)               ← тепер легально (DA вже існує)
             *   4) updateAppearances(cyrFont)   ← перерендер під обраний розмір
             *
             * Якщо поля немає у шаблоні — мовчки ігноруємо.
             */
            function setTxt(name, value, opts = {}) {
                if (value === undefined || value === null || value === "") return;
                let f;
                try { f = form.getTextField(name); }
                catch (e) {
                    if (DEBUG_PDF) console.warn(`PDF: поле "${name}" не знайдено`);
                    failed.push({ name, reason: "missing" });
                    return;
                }
                const str = String(value);
                try {
                    f.setText(str);
                    // Перший пасс: гарантовано прописує DA з нашим шрифтом.
                    f.updateAppearances(cyrFont);

                    const isMulti = !!(f.isMultiline && f.isMultiline()) || !!opts.multiline;
                    const maxSize = opts.maxSize || (isMulti ? 10 : 11);
                    const minSize = opts.minSize || (isMulti ? 6 : 7);
                    const chosen = fitFontSize(f, str, cyrFont, { maxSize, minSize, multiline: isMulti });

                    try { f.setFontSize(chosen); } catch (_) { /* нкритично */ }
                    // Другий пасс: рендер під обраний розмір.
                    f.updateAppearances(cyrFont);
                    filled.push(name);
                } catch (e) {
                    console.warn(`PDF: не вдалося заповнити "${name}":`, e.message);
                    failed.push({ name, reason: e.message });
                }
            }

            // ============================================================
            // 5)  МАПУВАННЯ:  character → поля PDF
            //     Імена полів узяті дослівно з офіційного аркуша WotC 5e.
            //     Багато з них мають хвостові пробіли або нестандартний
            //     регістр ("Race ", "DEXmod ", "CHamod", "Wpn3 AtkBonus  ")
            //     — не редагувати!
            // ============================================================

            // --- Ідентифікація персонажа ---
            setTxt("CharacterName",   d.name);
            setTxt("CharacterName 2", d.name);
            setTxt("ClassLevel",      cls ? `${cls.name} ${lvl}` : "");
            setTxt("Background",      effectiveBackgroundName());
            setTxt("Race ",           race ? race.name : "");
            setTxt("Alignment",       d.alignment);
            setTxt("PlayerName",      "");
            setTxt("XP",              "0");

            // --- Шість характеристик ---
            setTxt("STR", String(finalAbility('str')));
            setTxt("DEX", String(finalAbility('dex')));
            setTxt("CON", String(finalAbility('con')));
            setTxt("INT", String(finalAbility('int')));
            setTxt("WIS", String(finalAbility('wis')));
            setTxt("CHA", String(finalAbility('cha')));

            // --- Модифікатори (увага: "DEXmod " і "CHamod" — оригінал WotC) ---
            setTxt("STRmod",  fmtMod(abilityMod('str')));
            setTxt("DEXmod ", fmtMod(abilityMod('dex')));
            setTxt("CONmod",  fmtMod(abilityMod('con')));
            setTxt("INTmod",  fmtMod(abilityMod('int')));
            setTxt("WISmod",  fmtMod(abilityMod('wis')));
            setTxt("CHamod",  fmtMod(abilityMod('cha')));

            // --- Рятункові кидки ---
            const isSt = (k) => cls && cls.savingThrows && cls.savingThrows.includes(k);
            const stVal = (k) => fmtMod(abilityMod(k) + (isSt(k) ? pb : 0));
            setTxt("ST Strength",     stVal('str'));
            setTxt("ST Dexterity",    stVal('dex'));
            setTxt("ST Constitution", stVal('con'));
            setTxt("ST Intelligence", stVal('int'));
            setTxt("ST Wisdom",       stVal('wis'));
            setTxt("ST Charisma",     stVal('cha'));

            // --- Бойові показники ---
            const acCalc = calculateAC();
            const hpMaxVal = cls ? maxHP() : 0;
            const hpCurVal = (character.inventory.hpCurrent !== null && character.inventory.hpCurrent !== "")
                ? character.inventory.hpCurrent
                : hpMaxVal;
            setTxt("ProfBonus",  `+${pb}`);
            setTxt("AC",         String(acCalc.ac));
            setTxt("Initiative", fmtMod(typeof initiativeBonus === "function" ? initiativeBonus() : abilityMod('dex')));
            setTxt("Speed", typeof speedDisplayString === "function" ? speedDisplayString() : (typeof calculateSpeed === "function" ? String(calculateSpeed()) : (race ? `${race.speed}` : "")));
            setTxt("HPMax",      cls ? String(hpMaxVal) : "");
            setTxt("HPCurrent",  cls ? String(hpCurVal) : "");
            setTxt("HDTotal",    cls ? `${lvl}${cls.hitDice.slice(cls.hitDice.indexOf('d'))}` : "");
            setTxt("HD",         cls ? `${lvl}${cls.hitDice.slice(cls.hitDice.indexOf('d'))}` : "");
            setTxt("Passive",    cls ? String(passivePerception()) : "");

            // --- Навички ---
            const SKILL_MAP = {
                "Акробатика":             { stat: "dex", field: "Acrobatics" },
                "Поводження з тваринами": { stat: "wis", field: "Animal" },
                "Атлетика":               { stat: "str", field: "Athletics" },
                "Обман":                  { stat: "cha", field: "Deception " },
                "Історія":                { stat: "int", field: "History " },
                "Проникливість":          { stat: "wis", field: "Insight" },
                "Залякування":            { stat: "cha", field: "Intimidation" },
                "Дослідження":            { stat: "int", field: "Investigation " },
                "Аркана":                 { stat: "int", field: "Arcana" },
                "Природа":                { stat: "int", field: "Nature" },
                "Уважність":              { stat: "wis", field: "Perception " },
                "Виступ":                 { stat: "cha", field: "Performance" },
                "Медицина":               { stat: "wis", field: "Medicine" },
                "Релігія":                { stat: "int", field: "Religion" },
                "Скритність":             { stat: "dex", field: "Stealth " },
                "Переконання":            { stat: "cha", field: "Persuasion" },
                "Спритність рук":         { stat: "dex", field: "SleightofHand" },
                "Виживання":              { stat: "wis", field: "Survival" }
            };
            const bgSkills = backgroundBonusSkills();
            const raceSkills = (typeof getRaceSkillProficiencies === "function") ? getRaceSkillProficiencies() : [];
            const chosenSkills = new Set([...(character.skills || []), ...bgSkills, ...raceSkills]);
            for (const [skillName, info] of Object.entries(SKILL_MAP)) {
                const proficient = chosenSkills.has(skillName);
                const value = abilityMod(info.stat) + (proficient ? pb : 0);
                setTxt(info.field, fmtMod(value));
            }

            // --- Особистість ---
            setTxt("PersonalityTraits ", d.traits);
            setTxt("Ideals",             d.ideals);
            setTxt("Bonds",              d.bonds);
            setTxt("Flaws",              d.flaws);

            // --- Володіння ---
            const profLines = [];
            if (cls) {
                profLines.push(`Броня: ${cls.armorProf}`);
                profLines.push(`Зброя: ${cls.weaponProf}`);
                profLines.push(`Рятунки: ${cls.savingThrowsLabel}`);
            }
            const allLanguages = [];
            if (race && race.languages) allLanguages.push(race.languages);
            const bgLangs = backgroundLanguagesText();
            if (bgLangs) allLanguages.push(`Передісторія: ${bgLangs}`);
            if (allLanguages.length) profLines.push(`Мови: ${allLanguages.join("; ")}`);
            const bgTools = backgroundToolsText();
            if (bgTools) profLines.push(`Інструменти: ${bgTools}`);
            
            // Add subclass proficiencies
            if (typeof getSubclassProficiencies === "function") {
                const subclassProfs = getSubclassProficiencies();
                if (subclassProfs.armor.length > 0) {
                    profLines.push(`Підклас (броня): ${subclassProfs.armor.join(", ")}`);
                }
                if (subclassProfs.weapons.length > 0) {
                    profLines.push(`Підклас (зброя): ${subclassProfs.weapons.join(", ")}`);
                }
            }

            if (chosenSkills.size) profLines.push(`Навички: ${[...chosenSkills].join(", ")}`);
            setTxt("ProficienciesLang", profLines.join("\n"), { multiline: true });

            // --- Особливості та риси ---
            const featLines = [];
            const allClassFeatures = collectAllClassFeatures().filter(f => f.level <= lvl);
            if (allClassFeatures.length) {
                featLines.push(`Вміння класу ${cls ? cls.name : ""}:`);
                allClassFeatures.forEach(f => featLines.push(`• [Рів.${f.level}] ${f.name}: ${f.desc}`));
            }
            
            // Add subclass features
            if (typeof getSubclassFeatures === "function") {
                const subclassFeatures = getSubclassFeatures();
                if (subclassFeatures.length > 0 && character.subclass) {
                    featLines.push(`\nОсобливості підкласу (${character.subclass}):`);
                    subclassFeatures.forEach(f => featLines.push(`• [Рів.${f.level}] ${f.name}: ${f.description}`));
                }
            }

            if (character.subclass) featLines.push(`\nПідклас: ${character.subclass}`);

            const asiLevels = getASIUnlockedLevels();
            if (asiLevels.length) {
                featLines.push("\nПідвищення характеристик / Риси:");
                asiLevels.forEach(l => {
                    const sel = normalizeASISelection(character.asiSelections[l]);
                    if (sel.kind === 'feat' && sel.featId) {
                        const feats = (typeof DND_FEATS !== "undefined") ? DND_FEATS : [];
                        const f = feats.find(x => x.id === sel.featId);
                        featLines.push(`• Рів.${l}: Риса — ${f ? f.name : sel.featId}`);
                    } else if (sel.kind === 'asi' && isASIValid(sel.allocations)) {
                        const parts = ABILITY_KEYS
                            .filter(k => (sel.allocations[k] || 0) > 0)
                            .map(k => `+${sel.allocations[k]} ${ABILITY_LABELS[k]}`);
                        featLines.push(`• Рів.${l}: ASI (${parts.join(", ")})`);
                    } else if (sel.kind === 'epic' && sel.epicBoonId) {
                        const boons = (typeof DND_EPIC_BOONS !== "undefined") ? DND_EPIC_BOONS : [];
                        const b = boons.find(x => x.id === sel.epicBoonId);
                        const extras = [];
                        if (b) {
                            ABILITY_KEYS.forEach(k => { if (b.bonuses && b.bonuses[k]) extras.push(`+${b.bonuses[k]} ${ABILITY_LABELS[k]}`); });
                            if (Array.isArray(b.bonusChoice) && b.bonusChoice.includes(sel.epicBoonAbility) && sel.epicBoonAbility) extras.push(`+1 ${ABILITY_LABELS[sel.epicBoonAbility]}`);
                            if (b.speedBonus) extras.push(`+${b.speedBonus} фт швидкості`);
                            if (b.hpBonus) extras.push(`+${b.hpBonus} ХП`);
                        }
                        const suffix = extras.length ? ` (${extras.join(", ")})` : "";
                        featLines.push(`• Рів.${l}: ✨ Епічний дарунок — ${b ? b.name : sel.epicBoonId}${suffix}`);
                    } else {
                        featLines.push(`• Рів.${l}: — ще не обрано —`);
                    }
                });
            }

            const chosenFeats = selectedFeats();
            if (chosenFeats.length) {
                featLines.push("\nРиси (Feats):");
                chosenFeats.forEach(f => featLines.push(`• ${f.name} (Рів.${f.level}): ${f.description}`));
            }

            if (race && race.traits) {
                featLines.push(`\nРасові риси (${race.name}):`);
                race.traits.forEach(t => featLines.push(`• ${t.name}: ${t.desc}`));
            }

            const bgFeat = backgroundFeatureText();
            if (bgFeat) {
                featLines.push(`\nРиса передісторії (${effectiveBackgroundName()}):`);
                featLines.push(`• ${bgFeat}`);
            }

            
            // Класові ресурси (повний набір: Лють, Канал Божественності, Ці тощо)
            if (typeof computeClassResources === "function") {
                const _mods = (typeof abilityMod === "function") ? {
                    str: abilityMod('str'), dex: abilityMod('dex'), con: abilityMod('con'),
                    int: abilityMod('int'), wis: abilityMod('wis'), cha: abilityMod('cha')
                } : {};
                const _pb = (typeof profBonus === "function") ? profBonus(character.level || 1) : 2;
                const _res = computeClassResources(character.classId, character.level || 1, _mods, _pb) || [];
                if (_res.length) {
                    featLines.push("\nКласові ресурси:");
                    _res.forEach(r => featLines.push(`• ${r.name}: ${r.value}${r.note ? " (" + r.note + ")" : ""}${r.recharge ? " [" + r.recharge + "]" : ""}`));
                }
            } else if (typeof getClassResource === "function") {
                const resource = getClassResource();
                if (resource) {
                    featLines.push(`\n${resource.name}: ${resource.amount}`);
                }
            }

            const featsText = featLines.join("\n");
            setTxt("Features and Traits", featsText, { multiline: true });
            setTxt("Feat+Traits",         featsText, { multiline: true });

            // --- Спорядження та валюта ---
            const inv = character.inventory || {};
            const eqLines = [];
            if (inv.armor && inv.armor !== "none" && typeof ARMOR_DATA !== "undefined" && ARMOR_DATA[inv.armor]) {
                eqLines.push(`Броня: ${ARMOR_DATA[inv.armor].name}`);
            }
            if (inv.shield) eqLines.push("Щит");
            const weaponRows = Array.isArray(inv.weaponList) ? inv.weaponList : [];
            if (weaponRows.length) {
                const lines = weaponRows.map(row => {
                    const info = weaponAttackInfo(row);
                    return info ? `• ${info.name} — ${info.attackBonus} до влучання, шкода: ${info.damageStr}` : null;
                }).filter(Boolean);
                if (lines.length) eqLines.push(`Зброя:\n${lines.join("\n")}`);
            }
            if (inv.weapons) eqLines.push(`Нотатки про зброю:\n${inv.weapons}`);
            if (inv.items)   eqLines.push(`Інвентар:\n${inv.items}`);
            if (eqLines.length) setTxt("Equipment", eqLines.join("\n\n"), { multiline: true });

            // --- ATTACKS & SPELLCASTING (до 3 слотів) ---
            // Зверни увагу: 2-й і 3-й слоти у PDF мають хвостові пробіли,
            // а "Wpn3 AtkBonus  " — ДВА пробіли наприкінці.
            const WEAPON_FIELDS = [
                { name: "Wpn Name",   atk: "Wpn1 AtkBonus",   dmg: "Wpn1 Damage" },
                { name: "Wpn Name 2", atk: "Wpn2 AtkBonus ",  dmg: "Wpn2 Damage " },
                { name: "Wpn Name 3", atk: "Wpn3 AtkBonus  ", dmg: "Wpn3 Damage " }
            ];
            weaponRows.slice(0, WEAPON_FIELDS.length).forEach((row, i) => {
                const info = weaponAttackInfo(row);
                if (!info) return;
                const slot = WEAPON_FIELDS[i];
                setTxt(slot.name, info.name);
                setTxt(slot.atk,  info.attackBonus);
                setTxt(slot.dmg,  info.damageStr);
            });

            setTxt("CP", String(inv.cp || 0));
            setTxt("SP", String(inv.sp || 0));
            setTxt("GP", String(inv.gp || 0));
            setTxt("PP", String(inv.pp || 0));

            // --- Зовнішність / опис ---
            setTxt("Age",    "");
            setTxt("Height", "");
            setTxt("Weight", "");
            setTxt("Eyes",   "");
            setTxt("Skin",   "");
            setTxt("Hair",   "");
            setTxt("Backstory", d.appearance || "");

            // --- ЗАКЛИНАННЯ (сторінка чаклування) ---
            // Імена полів узяті дослівно з шаблону 5E CharacterSheet.pdf
            // (реконструйовано за координатами /Rect). Увага на пробіли в назвах:
            // "SpellSaveDC  2" має ДВА пробіли, "SpellAtkBonus 2" — один.
            (function fillSpellcasting() {
                const sc = (cls && cls.spellcasting) ? cls.spellcasting : null;

                // Header stats + slots are class-caster only; granted/innate
                // spells (race/subclass/feat) are exported ALWAYS, even for
                // non-casters (e.g. Barbarian with the Faerie race).
                if (sc) {
                const ability = sc.ability;
                const abilityName = (typeof ABILITY_LABELS !== "undefined" && ABILITY_LABELS[ability]) || ability;
                const dc  = 8 + pb + abilityMod(ability);
                const atk = pb + abilityMod(ability);

                setTxt("Spellcasting Class 2",  cls.name);
                setTxt("SpellcastingAbility 2", abilityName);
                setTxt("SpellSaveDC  2",        String(dc));   // ДВА пробіли в імені поля!
                setTxt("SpellAtkBonus 2",       fmtMod(atk));

                // Комірки заклинань за рівнями 1–9 → SlotsTotal 19..27
                const slots = (typeof getSpellSlots === "function")
                    ? getSpellSlots(character.classId, lvl) : [];
                const SLOT_TOTAL_FIELDS = [
                    "SlotsTotal 19", "SlotsTotal 20", "SlotsTotal 21", "SlotsTotal 22", "SlotsTotal 23",
                    "SlotsTotal 24", "SlotsTotal 25", "SlotsTotal 26", "SlotsTotal 27"
                ];
                slots.forEach((n, i) => { if (n > 0) setTxt(SLOT_TOTAL_FIELDS[i], String(n)); });
                }

                // Рядки назв заклять за рівнями (візуальний порядок зверху вниз).
                // Ключ 0 = замовляння (cantrips), 1..9 = рівні заклять.
                const SPELL_LINE_FIELDS = {
                    0: ["Spells 1014","Spells 1016","Spells 1017","Spells 1018","Spells 1019","Spells 1020","Spells 1021","Spells 1022"],
                    1: ["Spells 1015","Spells 1023","Spells 1024","Spells 1025","Spells 1026","Spells 1027","Spells 1028","Spells 1029","Spells 1030","Spells 1031","Spells 1032","Spells 1033"],
                    2: ["Spells 1046","Spells 1034","Spells 1035","Spells 1036","Spells 1037","Spells 1038","Spells 1039","Spells 1040","Spells 1041","Spells 1042","Spells 1043","Spells 1044","Spells 1045"],
                    3: ["Spells 1048","Spells 1047","Spells 1049","Spells 1050","Spells 1051","Spells 1052","Spells 1053","Spells 1054","Spells 1055","Spells 1056","Spells 1057","Spells 1058","Spells 1059"],
                    4: ["Spells 1061","Spells 1060","Spells 1062","Spells 1063","Spells 1064","Spells 1065","Spells 1066","Spells 1067","Spells 1068","Spells 1069","Spells 1070","Spells 1071","Spells 1072"],
                    5: ["Spells 1074","Spells 1073","Spells 1075","Spells 1076","Spells 1077","Spells 1078","Spells 1079","Spells 1080","Spells 1081"],
                    6: ["Spells 1083","Spells 1082","Spells 1084","Spells 1085","Spells 1086","Spells 1087","Spells 1088","Spells 1089","Spells 1090"],
                    7: ["Spells 1092","Spells 1091","Spells 1093","Spells 1094","Spells 1095","Spells 1096","Spells 1097","Spells 1098","Spells 1099"],
                    8: ["Spells 10101","Spells 10100","Spells 10102","Spells 10103","Spells 10104","Spells 10105","Spells 10106"],
                    9: ["Spells 10108","Spells 10107","Spells 10109","Spells 101010","Spells 101011","Spells 101012","Spells 101013"]
                };

                const sp = character.spells || { cantrips: [], prepared: [] };
                const resolve = (id) => (typeof getSpellById === "function") ? getSpellById(id) : null;
                const nameFor = (s, isGranted) => {
                    if (!s) return "";
                    let name = s.name;
                    if (s.concentration) name += " (К)";
                    if (s.ritual) name += " (Р)";
                    if (isGranted) name += " *";  // Mark granted spells with asterisk
                    return name;
                };

                // Gather granted spells from race/subclass/feats
                const grantedSpells = (typeof getGrantedSpells === "function") ? getGrantedSpells() : [];
                const grantedIds = new Set(grantedSpells.map(g => g.id));

                // Замовляння (level 0) - merge chosen + granted
                const chosenCantrips = (sp.cantrips || []).map(resolve).filter(Boolean);
                const grantedCantrips = grantedSpells
                    .map(g => resolve(g.id))
                    .filter(s => s && s.level === 0);
                const allCantrips = [...grantedCantrips, ...chosenCantrips];
                allCantrips.slice(0, SPELL_LINE_FIELDS[0].length)
                    .forEach((s, i) => setTxt(SPELL_LINE_FIELDS[0][i], nameFor(s, grantedIds.has(s.id))));

                // Підготовлені закляття 1–9, згруповані за рівнем - merge chosen + granted
                const byLevel = {};

                // Add granted leveled spells
                grantedSpells.forEach(g => {
                    const s = resolve(g.id);
                    if (s && s.level >= 1) {
                        (byLevel[s.level] = byLevel[s.level] || []).push({ spell: s, isGranted: true });
                    }
                });

                // Add chosen prepared spells
                (sp.prepared || []).map(resolve).filter(Boolean).forEach(s => {
                    if (s.level >= 1) {
                        (byLevel[s.level] = byLevel[s.level] || []).push({ spell: s, isGranted: false });
                    }
                });

                for (let L = 1; L <= 9; L++) {
                    const fields = SPELL_LINE_FIELDS[L];
                    (byLevel[L] || []).slice(0, fields.length)
                        .forEach((item, i) => setTxt(fields[i], nameFor(item.spell, item.isGranted)));
                }
            })();

            // 6) Фінальний "запобіжник": ще раз перерендерити всі віджети
            //    нашим шрифтом — на випадок, якщо якесь поле ми не зачепили
            //    напряму, але воно вже має значення з PDF-шаблону.
            form.updateFieldAppearances(cyrFont);

            // 7) Зберігаємо PDF та віддаємо користувачу.
            const outBytes = await pdfDoc.save();
            const blob = new Blob([outBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const safeName = (d.name || "character")
                .replace(/[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ0-9_-]+/g, "_")
                .slice(0, 80);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${safeName || "character"}_DnD5e.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 5000);

            if (DEBUG_PDF) {
                console.log(`PDF: filled=${filled.length}, failed=${failed.length}`, { filled, failed });
            }
            setPdfStatus(`Готово! Заповнено ${filled.length} полів. Файл збережено.`);
        } catch (err) {
            console.error("Помилка генерації PDF:", err);
            setPdfStatus(
                `Помилка: ${err.message}. Перевірте, що шаблон PDF та шрифт доступні.`,
                true
            );
        } finally {
            const btn = document.getElementById("btn-download-pdf");
            const icon = document.getElementById("btn-download-icon");
            const label = document.getElementById("btn-download-label");
            if (btn) btn.disabled = false;
            if (icon) icon.innerText = "⬇️";
            if (label) label.innerText = "Завантажити PDF";
        }
    }

    // Експортуємо як глобал, щоб onclick="generatePDF()" з HTML працював.
    window.generatePDF = generatePDF;
})();
