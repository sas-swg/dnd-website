/* =========================================================================
 *  pdf-export.js  —  OFFLINE D&D 5e character export to PDF
 *  -------------------------------------------------------------------------
 *  No internet or CDN/libraries required.
 *  Custom PDF engine + embedded DejaVuSans font (supports Unicode).
 *  Font comes from dejavu-font.js as window.DEJAVU_SANS_BASE64.
 *
 *  Data taken from the same globals/helpers as before:
 *      character, runValidation, currentTab, switchTab,
 *      DND_CLASSES, DND_RACES, ARMOR_DATA, DND_FEATS, DND_EPIC_BOONS,
 *      ABILITY_KEYS, ABILITY_LABELS,
 *      profBonus, finalAbility, abilityMod, fmtMod,
 *      calculateAC, maxHP, passivePerception, initiativeBonus,
 *      speedDisplayString/calculateSpeed,
 *      effectiveBackgroundName, backgroundBonusSkills, getRaceSkillProficiencies,
 *      backgroundLanguagesText, backgroundToolsText, backgroundFeatureText,
 *      getSubclassProficiencies, collectAllClassFeatures, getSubclassFeatures,
 *      getASIUnlockedLevels, normalizeASISelection, isASIValid, selectedFeats,
 *      weaponAttackInfo, computeClassResources/getClassResource,
 *      getSpellSlots, getSpellById, getGrantedSpells
 *  Exports: window.generatePDF()
 * ======================================================================= */
(function () {
    "use strict";

    /* ====================================================================
     *  PART 1 — Mini PDF engine with embedded TrueType CID font.
     * ==================================================================== */
    function u16(d, o) { return (d[o] << 8) | d[o + 1]; }
    function i16(d, o) { const v = u16(d, o); return v & 0x8000 ? v - 0x10000 : v; }
    function u32(d, o) { return (d[o] * 0x1000000) + (d[o + 1] << 16) + (d[o + 2] << 8) + d[o + 3]; }

    function parseFont(bytes) {
        const numTables = u16(bytes, 4);
        const tables = {};
        let p = 12;
        for (let i = 0; i < numTables; i++) {
            const tag = String.fromCharCode(bytes[p], bytes[p + 1], bytes[p + 2], bytes[p + 3]);
            tables[tag] = { offset: u32(bytes, p + 8), length: u32(bytes, p + 12) };
            p += 16;
        }
        const unitsPerEm = u16(bytes, tables.head.offset + 18);
        const numGlyphs = u16(bytes, tables.maxp.offset + 4);
        const numHMetrics = u16(bytes, tables.hhea.offset + 34);
        const adv = new Uint16Array(numGlyphs);
        const hm = tables.hmtx.offset;
        let last = 0;
        for (let g = 0; g < numGlyphs; g++) {
            if (g < numHMetrics) last = u16(bytes, hm + g * 4);
            adv[g] = last;
        }
        const cmapOff = tables.cmap.offset;
        const nSub = u16(bytes, cmapOff + 2);
        let best = null, bestScore = -1;
        for (let i = 0; i < nSub; i++) {
            const platform = u16(bytes, cmapOff + 4 + i * 8);
            const encoding = u16(bytes, cmapOff + 6 + i * 8);
            const subOff = cmapOff + u32(bytes, cmapOff + 8 + i * 8);
            const fmt = u16(bytes, subOff);
            let score = -1;
            if (fmt === 12 && ((platform === 3 && encoding === 10) || platform === 0)) score = 4;
            else if (fmt === 4 && ((platform === 3 && encoding === 1) || platform === 0)) score = 3;
            else if (fmt === 12) score = 2;
            else if (fmt === 4) score = 1;
            if (score > bestScore) { bestScore = score; best = { fmt, subOff }; }
        }
        const map = new Map();
        if (best.fmt === 4) {
            const o = best.subOff;
            const segX2 = u16(bytes, o + 6);
            const segCount = segX2 / 2;
            const endO = o + 14;
            const startO = endO + segX2 + 2;
            const deltaO = startO + segX2;
            const rangeO = deltaO + segX2;
            for (let s = 0; s < segCount; s++) {
                const end = u16(bytes, endO + s * 2);
                const start = u16(bytes, startO + s * 2);
                const delta = i16(bytes, deltaO + s * 2);
                const rangeOffset = u16(bytes, rangeO + s * 2);
                for (let c = start; c <= end && c !== 0xffff; c++) {
                    let g;
                    if (rangeOffset === 0) g = (c + delta) & 0xffff;
                    else {
                        const gi = rangeO + s * 2 + rangeOffset + (c - start) * 2;
                        g = u16(bytes, gi);
                        if (g !== 0) g = (g + delta) & 0xffff;
                    }
                    if (g !== 0) map.set(c, g);
                }
            }
        } else {
            const o = best.subOff;
            const nGroups = u32(bytes, o + 12);
            let gp = o + 16;
            for (let i = 0; i < nGroups; i++) {
                const startChar = u32(bytes, gp);
                const endChar = u32(bytes, gp + 4);
                const startGid = u32(bytes, gp + 8);
                for (let c = startChar; c <= endChar; c++) map.set(c, startGid + (c - startChar));
                gp += 12;
            }
        }
        return { unitsPerEm, numGlyphs, adv, cmap: map };
    }

    const toHex4 = (n) => n.toString(16).padStart(4, "0").toUpperCase();
    const pdfNum = (n) => (Math.round(n * 100) / 100).toString();

    class MiniPDF {
        constructor(fontBytes) {
            this.font = parseFont(fontBytes);
            this.fontBytes = fontBytes;
            this.pages = [];
            this.used = new Map();
            this.cur = null;
        }
        addPage(w, h) { this.cur = { w, h, ops: [] }; this.pages.push(this.cur); return this.cur; }
        _glyphs(str) {
            const out = [];
            for (const ch of String(str)) {
                const cp = ch.codePointAt(0);
                const g = this.font.cmap.get(cp);
                if (g === undefined) continue;
                out.push(g);
                if (!this.used.has(g)) this.used.set(g, cp);
            }
            return out;
        }
        widthOf(str, size) {
            const upm = this.font.unitsPerEm; let w = 0;
            for (const ch of String(str)) {
                const g = this.font.cmap.get(ch.codePointAt(0));
                if (g === undefined) continue;
                w += this.font.adv[g];
            }
            return w * size / upm;
        }
        text(x, yTop, str, opts = {}) {
            const size = opts.size || 10;
            const color = opts.color || [0, 0, 0];
            const gids = this._glyphs(str);
            if (!gids.length) return;
            const hex = gids.map(toHex4).join("");
            const y = this.cur.h - yTop - size;
            this.cur.ops.push(
                `${pdfNum(color[0])} ${pdfNum(color[1])} ${pdfNum(color[2])} rg`,
                "BT", `/F1 ${pdfNum(size)} Tf`, `1 0 0 1 ${pdfNum(x)} ${pdfNum(y)} Tm`,
                `<${hex}> Tj`, "ET"
            );
        }
        rect(x, yTop, w, h, color) {
            const y = this.cur.h - yTop - h;
            this.cur.ops.push(`${pdfNum(color[0])} ${pdfNum(color[1])} ${pdfNum(color[2])} rg`,
                `${pdfNum(x)} ${pdfNum(y)} ${pdfNum(w)} ${pdfNum(h)} re`, "f");
        }
        line(x1, y1Top, x2, y2Top, width, color) {
            const y1 = this.cur.h - y1Top, y2 = this.cur.h - y2Top;
            this.cur.ops.push(`${pdfNum(color[0])} ${pdfNum(color[1])} ${pdfNum(color[2])} RG`,
                `${pdfNum(width)} w`, `${pdfNum(x1)} ${pdfNum(y1)} m ${pdfNum(x2)} ${pdfNum(y2)} l S`);
        }
        build() {
            const enc = (s) => { const o = []; for (let i = 0; i < s.length; i++) o.push(s.charCodeAt(i) & 0xff); return o; };
            const chunks = []; let len = 0;
            const push = (data) => { if (typeof data === "string") data = enc(data); chunks.push(data); len += data.length; };
            const objOffsets = []; let objNum = 0;
            const newObj = () => ++objNum;
            const catalogN = newObj(), pagesN = newObj();
            const pageNs = this.pages.map(() => newObj());
            const contentNs = this.pages.map(() => newObj());
            const fontN = newObj(), cidFontN = newObj(), fdN = newObj(), fontFileN = newObj(), toUniN = newObj();
            const startObj = (n) => { objOffsets[n] = len; push(`${n} 0 obj\n`); };
            const endObj = () => push("endobj\n");
            push("%PDF-1.7\n%\xe2\xe3\xcf\xd3\n");
            startObj(catalogN); push(`<< /Type /Catalog /Pages ${pagesN} 0 R >>\n`); endObj();
            startObj(pagesN); push(`<< /Type /Pages /Count ${this.pages.length} /Kids [${pageNs.map(n => `${n} 0 R`).join(" ")}] >>\n`); endObj();
            this.pages.forEach((pg, i) => {
                startObj(pageNs[i]);
                push(`<< /Type /Page /Parent ${pagesN} 0 R /MediaBox [0 0 ${pdfNum(pg.w)} ${pdfNum(pg.h)}] /Resources << /Font << /F1 ${fontN} 0 R >> >> /Contents ${contentNs[i]} 0 R >>\n`);
                endObj();
                const sbytes = enc(pg.ops.join("\n") + "\n");
                startObj(contentNs[i]); push(`<< /Length ${sbytes.length} >>\nstream\n`); push(sbytes); push("\nendstream\n"); endObj();
            });
            startObj(fontN);
            push(`<< /Type /Font /Subtype /Type0 /BaseFont /DejaVuSans /Encoding /Identity-H /DescendantFonts [${cidFontN} 0 R] /ToUnicode ${toUniN} 0 R >>\n`);
            endObj();
            const upm = this.font.unitsPerEm;
            const usedGids = [...this.used.keys()].sort((a, b) => a - b);
            const wParts = usedGids.map(g => `${g} [${Math.round(this.font.adv[g] * 1000 / upm)}]`);
            startObj(cidFontN);
            push(`<< /Type /Font /Subtype /CIDFontType2 /BaseFont /DejaVuSans /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ${fdN} 0 R /CIDToGIDMap /Identity /DW 500 /W [${wParts.join(" ")}] >>\n`);
            endObj();
            startObj(fdN);
            push(`<< /Type /FontDescriptor /FontName /DejaVuSans /Flags 32 /FontBBox [-1021 -463 1793 1232] /ItalicAngle 0 /Ascent 928 /Descent -236 /CapHeight 928 /StemV 80 /FontFile2 ${fontFileN} 0 R >>\n`);
            endObj();
            startObj(fontFileN);
            push(`<< /Length ${this.fontBytes.length} /Length1 ${this.fontBytes.length} >>\nstream\n`); push(this.fontBytes); push("\nendstream\n"); endObj();
            let bf = "";
            const entries = usedGids.map(g => `<${toHex4(g)}> <${toHex4(this.used.get(g))}>`);
            for (let i = 0; i < entries.length; i += 100) {
                const block = entries.slice(i, i + 100);
                bf += `${block.length} beginbfchar\n${block.join("\n")}\nendbfchar\n`;
            }
            const cmapStr = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n" + bf + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend\n";
            const cmapBytes = enc(cmapStr);
            startObj(toUniN); push(`<< /Length ${cmapBytes.length} >>\nstream\n`); push(cmapBytes); push("\nendstream\n"); endObj();
            const xrefStart = len;
            const total = objNum + 1;
            push(`xref\n0 ${total}\n`); push("0000000000 65535 f \n");
            for (let n = 1; n <= objNum; n++) push(`${String(objOffsets[n]).padStart(10, "0")} 00000 n \n`);
            push(`trailer\n<< /Size ${total} /Root ${catalogN} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`);
            const out = new Uint8Array(len); let off = 0;
            for (const c of chunks) { out.set(c, off); off += c.length; }
            return out;
        }
    }

    /* ====================================================================
     *  PART 2 — Layout layer (headings, cards, text).
     * ==================================================================== */
    const PAGE_W = 595.28, PAGE_H = 841.89, MARGIN = 42;
    const CONTENT_W = PAGE_W - 2 * MARGIN;
    const C = {
        forest: [0.078, 0.325, 0.176],
        forestHover: [0.086, 0.392, 0.204],
        beige: [0.957, 0.949, 0.925],
        text: [0.07, 0.07, 0.07],
        muted: [0.42, 0.42, 0.42],
        white: [1, 1, 1],
        line: [0.8, 0.8, 0.8],
    };

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
        el.className = "text-xs mt-4 min-h-[1rem] " + (isError ? "text-red-600 font-semibold" : "text-slate-500");
    }

    // Layout layer on top of MiniPDF — tracks cursor y top-to-bottom, paginates.
    function Layout(doc) {
        let y = MARGIN;
        const api = {
            get y() { return y; },
            newPage() { doc.addPage(PAGE_W, PAGE_H); y = MARGIN; },
            ensure(h) { if (y + h > PAGE_H - MARGIN) api.newPage(); },
            gap(h) { y += h; },
            wrapLines(text, size, maxW) {
                const out = [];
                String(text).split(/\r?\n/).forEach(rawLine => {
                    if (rawLine === "") { out.push(""); return; }
                    const words = rawLine.split(/\s+/).filter(Boolean);
                    let cur = "";
                    for (const w of words) {
                        const t = cur ? cur + " " + w : w;
                        if (doc.widthOf(t, size) > maxW && cur) { out.push(cur); cur = w; }
                        else cur = t;
                    }
                    out.push(cur);
                });
                return out;
            },
            title(text) {
                api.ensure(30);
                doc.text(MARGIN, y, text, { size: 18, color: C.forest });
                y += 28;
            },
            subtitle(text) {
                api.ensure(18);
                doc.text(MARGIN, y, text, { size: 10, color: C.muted });
                y += 20;
            },
            heading(text) {
                api.ensure(28);
                doc.rect(MARGIN, y, CONTENT_W, 20, C.forest);
                doc.text(MARGIN + 7, y + 4.5, text, { size: 11.5, color: C.white });
                y += 27;
            },
            para(text, opts = {}) {
                const size = opts.size || 9.5;
                const indent = opts.indent || 0;
                const lh = size * 1.42;
                const color = opts.color || C.text;
                const lines = api.wrapLines(text, size, CONTENT_W - indent);
                for (const ln of lines) {
                    api.ensure(lh);
                    if (ln) doc.text(MARGIN + indent, y, ln, { size, color });
                    y += lh;
                }
            },
            // Grid cards (e.g. stats): [{label, value}]
            cards(items, cols, opts = {}) {
                const cardH = opts.h || 38;
                const gutter = 6;
                const cw = (CONTENT_W - gutter * (cols - 1)) / cols;
                const rows = Math.ceil(items.length / cols);
                for (let r = 0; r < rows; r++) {
                    api.ensure(cardH + 6);
                    const rowY = y;
                    for (let cIdx = 0; cIdx < cols; cIdx++) {
                        const idx = r * cols + cIdx;
                        if (idx >= items.length) break;
                        const it = items[idx];
                        const bx = MARGIN + cIdx * (cw + gutter);
                        doc.rect(bx, rowY, cw, cardH, C.beige);
                        doc.text(bx + 7, rowY + 5, it.label, { size: 7.5, color: C.muted });
                        doc.text(bx + 7, rowY + 16, String(it.value), { size: 12, color: C.text });
                    }
                    y = rowY + cardH + 6;
                }
            },
            // Two-column key-value pairs
            kvRows(items, cols = 2) {
                const size = 9.5, lh = 16;
                const cw = CONTENT_W / cols;
                const rows = Math.ceil(items.length / cols);
                for (let r = 0; r < rows; r++) {
                    api.ensure(lh);
                    const rowY = y;
                    for (let cIdx = 0; cIdx < cols; cIdx++) {
                        const idx = r * cols + cIdx;
                        if (idx >= items.length) break;
                        const it = items[idx];
                        const bx = MARGIN + cIdx * cw;
                        doc.text(bx, rowY, it.label, { size, color: C.muted });
                        const lw = doc.widthOf(it.label + "  ", size);
                        doc.text(bx + lw, rowY, String(it.value), { size, color: C.text });
                    }
                    y = rowY + lh;
                }
            },
        };
        return api;
    }

    /* ====================================================================
     *  PART 3 — Character sheet generation.
     * ==================================================================== */
    function generatePDF() {
        const btn = document.getElementById("btn-download-pdf");
        const label = document.getElementById("btn-download-label");
        const icon = document.getElementById("btn-download-icon");
        try {
            if (typeof window.DEJAVU_SANS_BASE64 !== "string" || window.DEJAVU_SANS_BASE64.length < 1000) {
                setPdfStatus("Font not loaded (dejavu-font.js missing or not connected).", true);
                return;
            }
            const errors = (typeof runValidation === "function") ? runValidation() : [];
            if (errors.length > 0) {
                const firstTab = errors[0].tab;
                const summary = errors.slice(0, 5).map(e => `• ${e.message}`).join("\n");
                const wordForm = "";
                setPdfStatus(`Заповніть обов'язкові поля перед генерацією PDF (${errors.length} помилк${wordForm}).\n${summary}`, true);
                if (firstTab && typeof currentTab !== "undefined" && firstTab !== currentTab && typeof switchTab === "function") switchTab(firstTab);
                return;
            }
            if (btn) btn.disabled = true;
            if (icon) icon.innerText = "⏳";
            if (label) label.innerText = "Preparing PDF...";
            setPdfStatus("Generating PDF (offline)...");

            const fontBytes = decodeBase64ToBytes(window.DEJAVU_SANS_BASE64);
            const doc = new MiniPDF(fontBytes);
            const L = Layout(doc);
            L.newPage();

            // ---- Helper data ----
            const ch = (typeof character !== "undefined") ? character : {};
            const cls = (ch.classId && typeof DND_CLASSES !== "undefined") ? DND_CLASSES[ch.classId] : null;
            const race = (ch.raceId && typeof DND_RACES !== "undefined") ? DND_RACES[ch.raceId] : null;
            const d = ch.description || {};
            const lvl = ch.level || 1;
            const pb = (typeof profBonus === "function") ? profBonus(lvl) : 2;
            const safeMod = (k) => (typeof abilityMod === "function") ? abilityMod(k) : 0;
            const safeFmt = (n) => (typeof fmtMod === "function") ? fmtMod(n) : (n >= 0 ? `+${n}` : String(n));
            const fin = (k) => (typeof finalAbility === "function") ? finalAbility(k) : (d[k] || "");

            // ---- Header ----
            L.title(d.name || "Unnamed Hero");
            L.subtitle("Character Sheet • D&D 5e");

            const headerKv = [];
            if (cls) headerKv.push({ label: "Class & Level:", value: `${cls.name} ${lvl}` });
            if (ch.subclass) headerKv.push({ label: "Subclass:", value: ch.subclass });
            if (race) headerKv.push({ label: "Race:", value: race.name });
            const bgName = (typeof effectiveBackgroundName === "function") ? effectiveBackgroundName() : "";
            if (bgName) headerKv.push({ label: "Background:", value: bgName });
            if (d.alignment) headerKv.push({ label: "Alignment:", value: d.alignment });
            headerKv.push({ label: "Proficiency Bonus:", value: `+${pb}` });
            L.kvRows(headerKv, 2);
            L.gap(8);

            // ---- Ability Scores ----
            L.heading("Ability Scores");
            const ABILS = [["str", "STR"], ["dex", "DEX"], ["con", "CON"], ["int", "INT"], ["wis", "WIS"], ["cha", "CHA"]];
            L.cards(ABILS.map(([k, lab]) => ({ label: lab, value: `${fin(k)}  (${safeFmt(safeMod(k))})` })), 3, { h: 36 });
            L.gap(4);

            // ---- Saving Throws ----
            L.heading("Saving Throws");
            const isSt = (k) => cls && cls.savingThrows && cls.savingThrows.includes(k);
            L.kvRows(ABILS.map(([k, lab]) => ({
                label: lab.charAt(0) + lab.slice(1).toLowerCase() + (isSt(k) ? " ●" : ""),
                value: safeFmt(safeMod(k) + (isSt(k) ? pb : 0)),
            })), 3);
            L.gap(8);

            // ---- Combat Stats ----
            L.heading("Combat Stats");
            const acCalc = (typeof calculateAC === "function") ? calculateAC() : { ac: "—" };
            const hpMaxVal = (cls && typeof maxHP === "function") ? maxHP() : 0;
            const inv = ch.inventory || {};
            const hpCurVal = (inv.hpCurrent !== null && inv.hpCurrent !== undefined && inv.hpCurrent !== "") ? inv.hpCurrent : hpMaxVal;
            const hd = cls ? `${lvl}${cls.hitDice.slice(cls.hitDice.indexOf("d"))}` : "—";
            const speed = (typeof speedDisplayString === "function") ? speedDisplayString()
                : (typeof calculateSpeed === "function") ? String(calculateSpeed())
                    : (race ? `${race.speed}` : "—");
            const init = safeFmt((typeof initiativeBonus === "function") ? initiativeBonus() : safeMod("dex"));
            const passive = (cls && typeof passivePerception === "function") ? String(passivePerception()) : "—";
            L.cards([
                { label: "ARMOR CLASS (AC)", value: String(acCalc.ac) },
                { label: "INITIATIVE", value: init },
                { label: "SPEED", value: String(speed) },
                { label: "HP (MAX)", value: cls ? String(hpMaxVal) : "—" },
                { label: "CURRENT HP", value: cls ? String(hpCurVal) : "—" },
                { label: "HIT DICE", value: hd },
                { label: "PASSIVE PERCEPTION", value: passive },
                { label: "PROFICIENCY BONUS", value: `+${pb}` },
            ], 4, { h: 36 });
            L.gap(4);

            // ---- Skills ----
            const SKILLS = [
                ["Acrobatics", "dex"], ["Animal Handling", "wis"], ["Athletics", "str"],
                ["Deception", "cha"], ["History", "int"], ["Insight", "wis"], ["Intimidation", "cha"],
                ["Investigation", "int"], ["Arcana", "int"], ["Nature", "int"], ["Perception", "wis"],
                ["Performance", "cha"], ["Medicine", "wis"], ["Religion", "int"], ["Stealth", "dex"],
                ["Persuasion", "cha"], ["Sleight of Hand", "dex"], ["Survival", "wis"],
            ];
            const bgSkills = (typeof backgroundBonusSkills === "function") ? backgroundBonusSkills() : [];
            const raceSkills = (typeof getRaceSkillProficiencies === "function") ? getRaceSkillProficiencies() : [];
            const chosenSkills = new Set([...(ch.skills || []), ...bgSkills, ...raceSkills]);
            L.heading("Skills  (● — proficient)");
            L.kvRows(SKILLS.map(([name, stat]) => {
                const prof = chosenSkills.has(name);
                return { label: (prof ? "● " : "  ") + name, value: safeFmt(safeMod(stat) + (prof ? pb : 0)) };
            }), 2);
            L.gap(8);

            // ---- Attacks / weapons ----
            const weaponRows = Array.isArray(inv.weaponList) ? inv.weaponList : [];
            const atkLines = [];
            weaponRows.forEach(row => {
                const info = (typeof weaponAttackInfo === "function") ? weaponAttackInfo(row) : null;
                if (info) atkLines.push(`• ${info.name} — ${info.attackBonus} to hit, damage: ${info.damageStr}`);
            });
            if (atkLines.length) {
                L.heading("Attacks");
                atkLines.forEach(ln => L.para(ln, { indent: 6 }));
                L.gap(6);
            }

            // ---- Proficiencies & Languages ----
            const profLines = [];
            if (cls) {
                profLines.push(`Armor: ${cls.armorProf}`);
                profLines.push(`Weapons: ${cls.weaponProf}`);
                if (cls.savingThrowsLabel) profLines.push(`Saves: ${cls.savingThrowsLabel}`);
            }
            const allLanguages = [];
            if (race && race.languages) allLanguages.push(race.languages);
            const bgLangs = (typeof backgroundLanguagesText === "function") ? backgroundLanguagesText() : "";
            if (bgLangs) allLanguages.push(`Background: ${bgLangs}`);
            if (allLanguages.length) profLines.push(`Languages: ${allLanguages.join("; ")}`);
            const bgTools = (typeof backgroundToolsText === "function") ? backgroundToolsText() : "";
            if (bgTools) profLines.push(`Tools: ${bgTools}`);
            if (typeof getSubclassProficiencies === "function") {
                const sp = getSubclassProficiencies();
                if (sp.armor && sp.armor.length) profLines.push(`Subclass (armor): ${sp.armor.join(", ")}`);
                if (sp.weapons && sp.weapons.length) profLines.push(`Subclass (weapons): ${sp.weapons.join(", ")}`);
            }
            if (chosenSkills.size) profLines.push(`Skills: ${[...chosenSkills].join(", ")}`);
            if (profLines.length) {
                L.heading("Proficiencies & Languages");
                profLines.forEach(ln => L.para(ln));
                L.gap(6);
            }

            // ---- Features & Traits ----
            const featLines = [];
            const allClassFeatures = (typeof collectAllClassFeatures === "function") ? collectAllClassFeatures().filter(f => f.level <= lvl) : [];
            if (allClassFeatures.length) {
                featLines.push({ h: `Class features (${cls ? cls.name : ""}):` });
                allClassFeatures.forEach(f => featLines.push({ b: `• [Lv.${f.level}] ${f.name}: ${f.desc}` }));
            }
            if (typeof getSubclassFeatures === "function") {
                const sf = getSubclassFeatures();
                if (sf.length && ch.subclass) {
                    featLines.push({ h: `Subclass features (${ch.subclass}):` });
                    sf.forEach(f => featLines.push({ b: `• [Lv.${f.level}] ${f.name}: ${f.description}` }));
                }
            }
            const asiLevels = (typeof getASIUnlockedLevels === "function") ? getASIUnlockedLevels() : [];
            if (asiLevels.length) {
                featLines.push({ h: "Ability Score Improvements / Feats:" });
                asiLevels.forEach(l => {
                    const sel = (typeof normalizeASISelection === "function")
                        ? normalizeASISelection(ch.asiSelections ? ch.asiSelections[l] : null) : { kind: "none" };
                    if (sel.kind === "feat" && sel.featId) {
                        const feats = (typeof DND_FEATS !== "undefined") ? DND_FEATS : [];
                        const f = feats.find(x => x.id === sel.featId);
                        featLines.push({ b: `• Lv.${l}: Feat — ${f ? f.name : sel.featId}` });
                    } else if (sel.kind === "asi" && (typeof isASIValid === "function") && isASIValid(sel.allocations)) {
                        const parts = ABILITY_KEYS.filter(k => (sel.allocations[k] || 0) > 0).map(k => `+${sel.allocations[k]} ${ABILITY_LABELS[k]}`);
                        featLines.push({ b: `• Lv.${l}: ASI (${parts.join(", ")})` });
                    } else if (sel.kind === "epic" && sel.epicBoonId) {
                        const boons = (typeof DND_EPIC_BOONS !== "undefined") ? DND_EPIC_BOONS : [];
                        const b = boons.find(x => x.id === sel.epicBoonId);
                        featLines.push({ b: `• Lv.${l}: Epic Boon — ${b ? b.name : sel.epicBoonId}` });
                    } else {
                        featLines.push({ b: `• Lv.${l}: — not chosen yet —` });
                    }
                });
            }
            const chosenFeats = (typeof selectedFeats === "function") ? selectedFeats() : [];
            if (chosenFeats.length) {
                featLines.push({ h: "Feats:" });
                chosenFeats.forEach(f => featLines.push({ b: `• ${f.name} (Lv.${f.level}): ${f.description}` }));
            }
            if (race && race.traits) {
                featLines.push({ h: `Racial traits (${race.name}):` });
                race.traits.forEach(t => featLines.push({ b: `• ${t.name}: ${t.desc}` }));
            }
            const bgFeat = (typeof backgroundFeatureText === "function") ? backgroundFeatureText() : "";
            if (bgFeat) {
                featLines.push({ h: `Background feature (${bgName}):` });
                featLines.push({ b: `• ${bgFeat}` });
            }
            if (typeof computeClassResources === "function") {
                const mods = { str: safeMod("str"), dex: safeMod("dex"), con: safeMod("con"), int: safeMod("int"), wis: safeMod("wis"), cha: safeMod("cha") };
                const res = computeClassResources(ch.classId, lvl, mods, pb) || [];
                if (res.length) {
                    featLines.push({ h: "Class resources:" });
                    res.forEach(r => featLines.push({ b: `• ${r.name}: ${r.value}${r.note ? " (" + r.note + ")" : ""}${r.recharge ? " [" + r.recharge + "]" : ""}` }));
                }
            }
            if (featLines.length) {
                L.heading("Features & Traits");
                featLines.forEach(item => {
                    if (item.h) { L.gap(2); L.para(item.h, { color: C.forest, size: 9.5 }); }
                    else L.para(item.b, { indent: 8 });
                });
                L.gap(6);
            }

            // ---- Equipment & Currency ----
            const eqLines = [];
            if (inv.armor && inv.armor !== "none" && typeof ARMOR_DATA !== "undefined" && ARMOR_DATA[inv.armor]) eqLines.push(`Armor: ${ARMOR_DATA[inv.armor].name}`);
            if (inv.shield) eqLines.push("Shield");
            if (inv.weapons) eqLines.push(`Weapon notes: ${inv.weapons}`);
            if (inv.items) eqLines.push(`Inventory: ${inv.items}`);
            if (eqLines.length || inv.cp || inv.sp || inv.gp || inv.pp) {
                L.heading("Equipment & Currency");
                eqLines.forEach(ln => L.para(ln));
                const coins = [`Copper (CP): ${inv.cp || 0}`, `Silver (SP): ${inv.sp || 0}`, `Gold (GP): ${inv.gp || 0}`, `Platinum (PP): ${inv.pp || 0}`];
                L.gap(2);
                L.kvRows(coins.map(c => ({ label: c, value: "" })), 4);
                L.gap(6);
            }

            // ---- Spells ----
            const sc = (cls && cls.spellcasting) ? cls.spellcasting : null;
            const sp = ch.spells || { cantrips: [], prepared: [] };
            const resolve = (id) => (typeof getSpellById === "function") ? getSpellById(id) : null;
            const grantedSpells = (typeof getGrantedSpells === "function") ? getGrantedSpells() : [];
            const grantedIds = new Set(grantedSpells.map(g => g.id));
            const nameFor = (s, granted) => {
                if (!s) return "";
                let n = s.name;
                if (s.concentration) n += " (C)";
                if (s.ritual) n += " (R)";
                if (granted) n += " *";
                return n;
            };
            const hasSpellContent = sc || grantedSpells.length || (sp.cantrips && sp.cantrips.length) || (sp.prepared && sp.prepared.length);
            if (hasSpellContent) {
                L.heading("Spells");
                if (sc) {
                    const ability = sc.ability;
                    const abilityName = (typeof ABILITY_LABELS !== "undefined" && ABILITY_LABELS[ability]) || ability;
                    L.kvRows([
                        { label: "Spellcasting class:", value: cls.name },
                        { label: "Ability:", value: abilityName },
                        { label: "Save DC:", value: String(8 + pb + safeMod(ability)) },
                        { label: "Attack bonus:", value: safeFmt(pb + safeMod(ability)) },
                    ], 2);
                    const slots = (typeof getSpellSlots === "function") ? getSpellSlots(ch.classId, lvl) : [];
                    const slotItems = [];
                    slots.forEach((n, i) => { if (n > 0) slotItems.push({ label: `Lv.${i + 1} slots:`, value: String(n) }); });
                    if (slotItems.length) { L.gap(2); L.kvRows(slotItems, 3); }
                    L.gap(2);
                }
                const byLevel = {};
                grantedSpells.forEach(g => { const s = resolve(g.id); if (s) (byLevel[s.level] = byLevel[s.level] || []).push({ s, granted: true }); });
                (sp.cantrips || []).map(resolve).filter(Boolean).forEach(s => (byLevel[0] = byLevel[0] || []).push({ s, granted: grantedIds.has(s.id) }));
                (sp.prepared || []).map(resolve).filter(Boolean).forEach(s => (byLevel[s.level] = byLevel[s.level] || []).push({ s, granted: grantedIds.has(s.id) }));
                for (let lv = 0; lv <= 9; lv++) {
                    const arr = byLevel[lv];
                    if (!arr || !arr.length) continue;
                    const seen = new Set();
                    const names = arr.filter(it => { if (seen.has(it.s.id)) return false; seen.add(it.s.id); return true; }).map(it => nameFor(it.s, it.granted));
                    const heading = lv === 0 ? "Cantrips" : `Level ${lv}`;
                    L.para(`${heading}: ${names.join(", ")}`, { indent: 4 });
                }
                L.para("(C) — concentration, (R) — ritual, * — granted by race/subclass/feat", { size: 8, color: C.muted });
                L.gap(6);
            }

            // ---- Personality ----
            const persona = [];
            if (d.traits) persona.push(["Personality Traits", d.traits]);
            if (d.ideals) persona.push(["Ideals", d.ideals]);
            if (d.bonds) persona.push(["Bonds", d.bonds]);
            if (d.flaws) persona.push(["Flaws", d.flaws]);
            if (d.appearance) persona.push(["Appearance / Backstory", d.appearance]);
            if (persona.length) {
                L.heading("Personality");
                persona.forEach(([lab, val]) => {
                    L.gap(2);
                    L.para(lab + ":", { color: C.forest, size: 9.5 });
                    L.para(val, { indent: 6 });
                });
            }

            // ---- Save & Download ----
            const outBytes = doc.build();
            const blob = new Blob([outBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const safeName = (d.name || "character").replace(/[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ0-9_-]+/g, "_").slice(0, 80);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${safeName || "character"}_DnD5e.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 5000);
            setPdfStatus(`Done! Character sheet saved (${doc.pages.length} page(s)).`);
        } catch (err) {
            console.error("PDF generation error:", err);
            setPdfStatus(`Error: ${err.message}`, true);
        } finally {
            const b = document.getElementById("btn-download-pdf");
            const ic = document.getElementById("btn-download-icon");
            const lb = document.getElementById("btn-download-label");
            if (b) b.disabled = false;
            if (ic) ic.innerText = "⬇️";
            if (lb) lb.innerText = "Download PDF";
        }
    }

    window.generatePDF = generatePDF;
})();
