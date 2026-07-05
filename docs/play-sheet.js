'use strict';
// ===== Цифровий аркуш персонажа з вкладками (як у D&D Beyond) =====
// Залежить від: storage.js (DndStore), dnd-data.js (DND_CLASSES, DND_RACES, ALL_SKILLS, SKILL_ABILITY,
// ARMOR_DATA, DND_WEAPONS, ABILITY_KEYS, ABILITY_LABELS, getASILevels, DND_FEATS, DND_EPIC_BOONS, BACKGROUND_DATA),
// spells-data.js (DND_SPELLS, getSpellById), items-data.js (DND_MUNDANE_ITEMS, DND_MAGIC_ITEMS), play-i18n.js (PT).
(function () {
  var t = window.PT || function (k) { return k; };

  // ---------- Темна тема аркуша ----------
  (function initDarkTheme() {
    try {
      if (!document.getElementById('ps-dark-style')) {
        var st = document.createElement('style'); st.id = 'ps-dark-style';
        st.textContent = 'body.ps-dark{background:#0f172a}' +
          'body.ps-dark .bg-white{background:#1e293b !important}' +
          'body.ps-dark .bg-slate-50{background:#243244 !important}' +
          'body.ps-dark .bg-slate-100{background:#334155 !important}' +
          'body.ps-dark .text-slate-800,body.ps-dark .text-slate-700,body.ps-dark .text-slate-600{color:#e2e8f0 !important}' +
          'body.ps-dark .text-slate-500,body.ps-dark .text-slate-400{color:#94a3b8 !important}' +
          'body.ps-dark .border-slate-200,body.ps-dark .border-slate-300,body.ps-dark .border-slate-100{border-color:#334155 !important}' +
          'body.ps-dark input,body.ps-dark select,body.ps-dark textarea{background:#0f172a !important;color:#e2e8f0 !important;border-color:#334155 !important}' +
          'body.ps-dark .text-forest{color:#4ade80 !important}';
        document.head.appendChild(st);
      }
      if (localStorage.getItem('dnd_sheet_dark') === '1') document.body.classList.add('ps-dark');
    } catch (e) {}
  })();
  function toggleDarkTheme() {
    var on = document.body.classList.toggle('ps-dark');
    try { localStorage.setItem('dnd_sheet_dark', on ? '1' : '0'); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('#ps-dark') : null;
    if (b) toggleDarkTheme();
  });

  // ---------- Завантаження персонажа ----------
  var params = new URLSearchParams(location.search);
  var recId = params.get('char');
  var rec = window.DndStore ? DndStore.get('characters', recId) : null;
  if ((!rec || !rec.character) && window.DndStore && DndStore.getDraft) {
    var _d = DndStore.getDraft();
    if (_d && _d.character) rec = { id: (_d.savedId || 'draft'), character: _d.character };
  }
  var root = document.getElementById('ps-app');
  if (!root) return;
  if (!rec || !rec.character) {
    root.innerHTML =
      '<div class="text-center py-16 bg-white border border-dashed border-slate-300 rounded-md">' +
      '<p class="text-slate-600">' + esc(t('notFound')) + '</p>' +
      '<a href="play-character.html" class="inline-block mt-4 text-sm font-bold border-2 border-[#22C55E] bg-[#22C55E] text-white rounded-lg px-4 py-2 hover:bg-[#16a34a] transition">' + esc(t('backToList')) + '</a></div>';
    return;
  }
  var ch = rec.character;

  // ---------- Нормалізація полів (нові поля не ламають character-creator.html) ----------
  ch.inventory = ch.inventory || {};
  var inv = ch.inventory;
  if (inv.armor == null) inv.armor = 'none';
  if (inv.shield == null) inv.shield = false;
  if (!Array.isArray(inv.weaponList)) inv.weaponList = [];
  ['cp', 'sp', 'gp', 'pp'].forEach(function (k) { if (inv[k] == null) inv[k] = 0; });
  if (!Array.isArray(inv.itemsList)) inv.itemsList = []; // НОВЕ поле для довільних предметів
  if (typeof ch.playNotes !== 'string') ch.playNotes = ''; // НОВЕ поле для нотаток
  if (!ch.playState || typeof ch.playState !== 'object') ch.playState = {};
  if (!Array.isArray(ch.playState.slotsUsed)) ch.playState.slotsUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (!ch.playState.res || typeof ch.playState.res !== 'object') ch.playState.res = {}; // використані ресурси класу
  if (typeof ch.playState.tempHP !== 'number') ch.playState.tempHP = 0;
  if (!Array.isArray(ch.playState.conditions)) ch.playState.conditions = [];
  if (!ch.playState.deathSaves || typeof ch.playState.deathSaves !== 'object') ch.playState.deathSaves = { s: 0, f: 0 };
  // НОВІ поля playState (старі сейви без них працюють як раніше)
  if (typeof ch.playState.exhaustion !== 'number') ch.playState.exhaustion = 0; // рівень виснаження 0–6
  if (typeof ch.playState.hitDiceUsed !== 'number') ch.playState.hitDiceUsed = 0; // витрачені кістки хітів
  if (typeof ch.playState.concentration !== 'string') ch.playState.concentration = ''; // id активного concentration-закляття
  if (!Array.isArray(ch.playState.rollLog)) ch.playState.rollLog = []; // збережений журнал кидків (до 40)
  if (typeof ch.playState.concDC !== 'number') ch.playState.concDC = 0; // очікуваний рятунок концентрації (0 — немає)
  if (!Array.isArray(ch.playState.concQueue)) ch.playState.concQueue = ch.playState.concDC > 0 ? [ch.playState.concDC] : []; // черга DC рятунків концентрації (кілька ударів → кілька рятунків)
  if (typeof ch.playState.nextRollMode !== 'string') ch.playState.nextRollMode = ''; // '' | 'adv' | 'dis' — режим наступного кидка d20
  if (!Array.isArray(ch.playState.targetConds)) ch.playState.targetConds = []; // стани цілі для атак: 'prone'|'restrained'|'blinded'|'invisible'
  if (ch.playState.lastD20 !== null && typeof ch.playState.lastD20 !== 'object') ch.playState.lastD20 = null; // останній d20 (для натхнення після перезавантаження)
  if (typeof ch.playState.inspiration !== 'boolean') ch.playState.inspiration = false; // героїчне натхнення
  if (!ch.playState.hitDiceUsedByClass || typeof ch.playState.hitDiceUsedByClass !== 'object') ch.playState.hitDiceUsedByClass = {}; // витрачені кістки хітів за класами (мультиклас)
  // НОВІ поля (D&D Beyond-рівень; старі сейви мігруються значеннями за замовчуванням)
  if (!Array.isArray(ch.expertiseSkills)) ch.expertiseSkills = []; // навички з Expertise (2× бонус майстерності)
  if (!ch.customMods || typeof ch.customMods !== 'object') ch.customMods = {}; // довільні модифікатори (Manage Modifiers)
  if (!Array.isArray(ch.customSpells)) ch.customSpells = []; // homebrew-закляття
  if (typeof ch.playState.rageActive !== 'boolean') ch.playState.rageActive = false; // активна Лють (варвар)
  if (typeof ch.playState.critPending !== 'number') ch.playState.critPending = -1; // індекс зброї з очікуваним критом (nat20)
  if (typeof ch.avatarUrl !== 'string') ch.avatarUrl = ''; // портрет персонажа (URL або dataURL)
  // Міграція: старий бінарний стан «Виснаження» (індекс 14) → рівень виснаження 1
  (function migrateExhaustion() {
    var pos = ch.playState.conditions.indexOf(14);
    if (pos >= 0) {
      ch.playState.conditions.splice(pos, 1);
      if (!ch.playState.exhaustion) ch.playState.exhaustion = 1;
    }
  })();
  // «Не підготовлені (відомі)» — стабільна структура в ch.spells: реально переносимо id зі списку prepared
  ch.spells = ch.spells || {};
  if (!Array.isArray(ch.spells.cantrips)) ch.spells.cantrips = [];
  if (!Array.isArray(ch.spells.prepared)) ch.spells.prepared = [];
  if (!Array.isArray(ch.spells.unpreparedKnown)) ch.spells.unpreparedKnown = [];
  // Міграція зі старого тимчасового playState.unprepared
  if (Array.isArray(ch.playState.unprepared) && ch.playState.unprepared.length) {
    ch.playState.unprepared.forEach(function (id) {
      var pos = ch.spells.prepared.indexOf(id);
      if (pos >= 0) {
        ch.spells.prepared.splice(pos, 1);
        if (ch.spells.unpreparedKnown.indexOf(id) < 0) ch.spells.unpreparedKnown.push(id);
      }
    });
    ch.playState.unprepared = [];
  }
  // Інваріант: без дублікатів усередині списків і без перетину prepared ∩ unpreparedKnown
  // (prepared має пріоритет — якщо id є в обох, лишаємо тільки в prepared)
  (function dedupSpellLists() {
    function uniq(arr) {
      var seen = {};
      return arr.filter(function (id) { if (seen[id]) return false; seen[id] = true; return true; });
    }
    ch.spells.prepared = uniq(ch.spells.prepared);
    ch.spells.cantrips = uniq(ch.spells.cantrips);
    var prepSet = {};
    ch.spells.prepared.forEach(function (id) { prepSet[id] = true; });
    ch.spells.unpreparedKnown = uniq(ch.spells.unpreparedKnown).filter(function (id) { return !prepSet[id]; });
  })();
  // Міграція legacy-тексту inventory.items у структурований itemsList (одноразово)
  if (!inv.itemsMigrated && typeof inv.items === 'string' && inv.items.trim()) {
    inv.items.split(/[,;\n]+/).forEach(function (part) {
      var name = part.trim();
      if (!name) return;
      var qty = 1;
      var m = name.match(/^(.*?)\s*[x×(]\s*(\d+)\s*\)?$/i) || name.match(/^(\d+)\s*[x×]\s*(.+)$/i);
      if (m) {
        if (/^\d+$/.test(m[1])) { qty = parseInt(m[1]); name = m[2].trim(); }
        else { name = m[1].trim(); qty = parseInt(m[2]) || 1; }
      }
      if (name) inv.itemsList.push({ id: 'legacy_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6), name: name, qty: qty, weight: '', source: '', note: '' });
    });
    inv.itemsMigrated = true;
    inv.items = '';
  }
  // Канонічні поля предметів: type/weaponId/armorId/attunement (старий конструктор їх просто ігнорує)
  function classifyItemByName(name) {
    var n = String(name || '').toLowerCase().trim();
    if (!n) return { type: 'gear' };
    if (typeof DND_MAGIC_ITEMS !== 'undefined') {
      var mi = DND_MAGIC_ITEMS.find(function (m) { return String(m.name || '').toLowerCase() === n || String(m.englishName || '').toLowerCase() === n; });
      if (mi) return { type: 'magic', magicId: mi.id, rarity: mi.rarityUk || mi.rarity || '', attunementRequired: !!mi.attunement };
    }
    if (typeof ARMOR_DATA !== 'undefined') {
      var aid = Object.keys(ARMOR_DATA).find(function (id) {
        if (id === 'none') return false;
        var an = String(ARMOR_DATA[id].name || '').toLowerCase();
        return an === n || (n.length > 3 && (n.indexOf(an) >= 0 || an.indexOf(n) >= 0));
      });
      if (aid) return { type: 'armor', armorId: aid };
    }
    if (/^щит\b|^shield\b/.test(n)) return { type: 'shield' };
    if (typeof DND_WEAPONS !== 'undefined') {
      var w = DND_WEAPONS.find(function (x) {
        var wn = String(x.name || '').toLowerCase();
        return wn === n || (n.length > 3 && (wn.indexOf(n) >= 0 || n.indexOf(wn) >= 0));
      });
      if (w) return { type: 'weapon', weaponId: w.id };
    }
    return { type: 'gear' };
  }
  inv.itemsList.forEach(function (it) {
    if (it.type) return; // вже класифіковано
    var c = classifyItemByName(it.name);
    it.type = c.type;
    if (c.weaponId) it.weaponId = c.weaponId;
    if (c.armorId) it.armorId = c.armorId;
    if (c.magicId) it.magicId = c.magicId;
    if (c.rarity) it.rarity = c.rarity;
    if (c.attunementRequired) { it.attunementRequired = true; if (typeof it.attuned !== 'boolean') it.attuned = false; }
  });
  // Дедуплікація міграційних предметів: не більше одного shield_item / armor_<id> з однаковим id
  (function () {
    var seen = {};
    inv.itemsList = inv.itemsList.filter(function (it) {
      if (!it.id || !/^(shield_item$|armor_)/.test(String(it.id))) return true;
      if (seen[it.id]) return false;
      seen[it.id] = true;
      return true;
    });
  })();
  // Невідомий id броні у сейві (напр., зі старої/зовнішньої версії) — скидаємо на «немає»
  if (inv.armor !== 'none' && typeof ARMOR_DATA !== 'undefined' && !ARMOR_DATA[inv.armor]) inv.armor = 'none';
  // Міграція legacy: щит екіпіровано у конструкторі, але як предмета в інвентарі немає — додаємо
  if (inv.shield && !inv.itemsList.some(function (it) { return it.type === 'shield'; })) {
    inv.itemsList.push({ id: 'shield_item', name: t('addShieldItem'), qty: 1, type: 'shield', source: '', weight: '', note: '' });
  }
  // Міграція legacy: екіпірована броня з конструктора, але предмета немає — додаємо в інвентар
  if (inv.armor && inv.armor !== 'none' && typeof ARMOR_DATA !== 'undefined' && ARMOR_DATA[inv.armor] &&
      !inv.itemsList.some(function (it) { return it.type === 'armor' && it.armorId === inv.armor; })) {
    inv.itemsList.push({ id: 'armor_' + inv.armor, name: ARMOR_DATA[inv.armor].name, qty: 1, type: 'armor', armorId: inv.armor, source: '', weight: '', note: '' });
  }
  ch.description = ch.description || {};
  ch.proficiencies = ch.proficiencies || { languages: [], tools: [], weaponMasteries: [] };
  ch.spells = ch.spells || { cantrips: [], prepared: [] };

  function persist() { rec.character = ch; DndStore.save('characters', rec); }
  persist(); // зберігаємо нормалізацію/міграцію одразу

  // ---------- Утиліти ----------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtMod(m) { return m >= 0 ? '+' + m : String(m); }
  function profBonus(level) { return 2 + Math.floor((Math.max(1, Math.min(20, level || 1)) - 1) / 4); }
  function cls() { return ch.classId && typeof DND_CLASSES !== 'undefined' ? DND_CLASSES[ch.classId] : null; }
  function race() { return ch.raceId && typeof DND_RACES !== 'undefined' ? DND_RACES[ch.raceId] : null; }
  function subraceObj() {
    var r = race();
    if (!r || !r.subraces || !ch.subraceId) return null;
    return r.subraces.find(function (s) { return s.id === ch.subraceId; }) || null;
  }
  function subclassObj() {
    var c = cls();
    if (!c || !c.subclasses) return null;
    return c.subclasses.find(function (s) {
      return (s.id && s.id === ch.subclassId) || (s.name && s.name === ch.subclass);
    }) || null;
  }

  // ---------- Характеристики (як у character-creator.html) ----------
  var AK = typeof ABILITY_KEYS !== 'undefined' ? ABILITY_KEYS : ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  var AL = typeof ABILITY_LABELS !== 'undefined' ? ABILITY_LABELS : { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' };

  function normASI(raw) {
    if (!raw || typeof raw !== 'object') return { kind: 'asi', allocations: {}, featId: '', featAbility: '', epicBoonId: '', epicBoonAbility: '' };
    return {
      kind: raw.kind === 'feat' || raw.kind === 'epic' ? raw.kind : 'asi',
      allocations: raw.allocations || {},
      featId: raw.featId || '', featAbility: raw.featAbility || '',
      epicBoonId: raw.epicBoonId || '', epicBoonAbility: raw.epicBoonAbility || '',
    };
  }
  function unlockedASILevels() {
    if (!ch.classId || typeof getASILevels !== 'function') return [];
    return (getASILevels(ch.classId) || []).filter(function (l) { return l <= (ch.level || 1); });
  }
  function finalAbility(key) {
    var base = (ch.baseStats && ch.baseStats[key]) || 8;
    var total = base;
    var epicBonus = 0;
    var oa = ch.originASI;
    if (oa && oa.mode && oa.allocations) total += parseInt(oa.allocations[key]) || 0;
    var unlocked = {};
    unlockedASILevels().forEach(function (l) { unlocked[l] = true; });
    var feats = typeof DND_FEATS !== 'undefined' ? DND_FEATS : [];
    var boons = typeof DND_EPIC_BOONS !== 'undefined' ? DND_EPIC_BOONS : [];
    Object.keys(ch.asiSelections || {}).forEach(function (lvl) {
      if (!unlocked[parseInt(lvl)]) return;
      var sel = normASI(ch.asiSelections[lvl]);
      if (sel.kind === 'asi') {
        total += parseInt(sel.allocations[key]) || 0;
      } else if (sel.kind === 'feat' && sel.featId) {
        var f = feats.find(function (x) { return x.id === sel.featId; });
        if (f) {
          if (f.bonuses && f.bonuses[key]) total += f.bonuses[key];
          if (Array.isArray(f.bonusChoice) && f.bonusChoice.indexOf(key) >= 0 && sel.featAbility === key) total += 1;
        }
      } else if (sel.kind === 'epic' && sel.epicBoonId && parseInt(lvl) >= 19) {
        var b = boons.find(function (x) { return x.id === sel.epicBoonId; });
        if (b) {
          if (b.bonuses && b.bonuses[key]) epicBonus += b.bonuses[key];
          if (Array.isArray(b.bonusChoice) && b.bonusChoice.indexOf(key) >= 0 && sel.epicBoonAbility === key) epicBonus += 1;
        }
      }
    });
    // Стеля 20 для звичайних бонусів (ASI/раса/фіти); перевищення — тільки через epic boons (до 30)
    // Довільні модифікатори користувача додаються поверх (кламп 1–30)
    return Math.max(1, Math.min(30, Math.min(30, Math.min(20, total) + epicBonus) + cmAbility(key)));
  }
  function abilityMod(key) { return Math.floor((finalAbility(key) - 10) / 2); }
  // Володіння рятунками: клас + раса + фіти (напр., Resilient через f.saveProf / f.saveProfChoice)
  function saveProficiencies() {
    var out = {};
    var c = cls();
    ((c && c.savingThrows) || []).forEach(function (k) { out[k] = true; });
    var r = race();
    if (r && Array.isArray(r.saveProfs)) r.saveProfs.forEach(function (k) { out[k] = true; });
    // Рятунки з підраси (структуроване поле saveProfs)
    var sr = subraceObj();
    if (sr && Array.isArray(sr.saveProfs)) sr.saveProfs.forEach(function (k) { out[k] = true; });
    var unlocked = {};
    unlockedASILevels().forEach(function (l) { unlocked[l] = true; });
    Object.keys(ch.asiSelections || {}).forEach(function (lvl) {
      if (!unlocked[parseInt(lvl)]) return;
      var sel = normASI(ch.asiSelections[lvl]);
      if (sel.kind !== 'feat' || !sel.featId) return;
      var f = (typeof DND_FEATS !== 'undefined' ? DND_FEATS : []).find(function (x) { return x.id === sel.featId; });
      if (!f) return;
      if (Array.isArray(f.saveProf)) f.saveProf.forEach(function (k) { out[k] = true; });
      // Resilient-подібні фіти: обрана характеристика дає володіння рятунком
      if (Array.isArray(f.saveProfChoice) && sel.featAbility && f.saveProfChoice.indexOf(sel.featAbility) >= 0) out[sel.featAbility] = true;
    });
    return out;
  }
  // Довільні модифікатори користувача (Manage Modifiers): плоскі бонуси до похідних значень
  function cm(key) { return parseInt((ch.customMods || {})[key]) || 0; }
  function cmAbility(k) { return parseInt(((ch.customMods || {}).abilities || {})[k]) || 0; }
  // Expertise: подвійний бонус майстерності для обраних навичок (роуг 1/6, бард 3/10 тощо)
  function expertiseSet() {
    var out = {};
    (ch.expertiseSkills || []).forEach(function (s) { out[s] = true; });
    return out;
  }
  // Скільки навичок Expertise дає клас на поточному рівні (0 — клас не має Expertise)
  function expertiseLimit() {
    var lvl = ch.level || 1;
    var n = 0;
    var ids = multiclassEntries() ? multiclassEntries().map(function (e) { return e.classId; }) : [ch.classId];
    ids.forEach(function (id) {
      var clvl = classLevelFor(id) || lvl;
      if (id === 'rogue') n += clvl >= 6 ? 4 : 2;
      if (id === 'bard') n += clvl >= 10 ? 4 : clvl >= 3 ? 2 : 0;
      if (id === 'ranger') n += 0;
    });
    return n;
  }
  // Jack of All Trades (бард 2+): +⌊бонус майстерності / 2⌋ до перевірок без володіння та ініціативи
  function jackBonus() {
    var bardLvl = classLevelFor('bard') || (ch.classId === 'bard' ? (ch.level || 1) : 0);
    return bardLvl >= 2 ? Math.floor(profBonus(ch.level || 1) / 2) : 0;
  }
  function selectedFeats() {
    var out = [];
    var unlocked = {};
    unlockedASILevels().forEach(function (l) { unlocked[l] = true; });
    var feats = typeof DND_FEATS !== 'undefined' ? DND_FEATS : [];
    Object.keys(ch.asiSelections || {}).forEach(function (lvl) {
      if (!unlocked[parseInt(lvl)]) return;
      var sel = normASI(ch.asiSelections[lvl]);
      if (sel.kind !== 'feat' || !sel.featId) return;
      var f = feats.find(function (x) { return x.id === sel.featId; });
      if (f) out.push(f);
    });
    return out;
  }
  function selectedEpicBoon() {
    var unlocked = {};
    unlockedASILevels().forEach(function (l) { unlocked[l] = true; });
    var boons = typeof DND_EPIC_BOONS !== 'undefined' ? DND_EPIC_BOONS : [];
    var found = null;
    Object.keys(ch.asiSelections || {}).forEach(function (lvl) {
      if (!unlocked[parseInt(lvl)] || parseInt(lvl) < 19) return;
      var sel = normASI(ch.asiSelections[lvl]);
      if (sel.kind === 'epic' && sel.epicBoonId) {
        var b = boons.find(function (x) { return x.id === sel.epicBoonId; });
        if (b) found = b;
      }
    });
    return found;
  }

  // ---------- Похідні значення ----------
  function maxHP() {
    var c = cls();
    var hd = 8;
    if (c) { var m = String(c.hitDice).match(/d(\d+)/i); if (m) hd = parseInt(m[1]); }
    var conMod = abilityMod('con');
    var lvl = ch.level || 1;
    var hp = lvl <= 1 ? hd + conMod : hd + conMod + (lvl - 1) * (Math.floor(hd / 2) + 1 + conMod);
    selectedFeats().forEach(function (f) { if (f.hpBonusPerLevel) hp += f.hpBonusPerLevel * lvl; });
    var sub = subclassObj();
    if (sub && sub.hpBonusPerLevel) hp += sub.hpBonusPerLevel * lvl;
    // Расові бонуси хітів (напр., Hill Dwarf +1 HP/рівень) — структуроване поле hpBonusPerLevel
    var r = race();
    if (r && r.hpBonusPerLevel) hp += r.hpBonusPerLevel * lvl;
    var sr = subraceObj();
    if (sr && sr.hpBonusPerLevel) hp += sr.hpBonusPerLevel * lvl;
    var boon = selectedEpicBoon();
    if (boon && boon.hpBonus) hp += boon.hpBonus;
    hp = Math.max(1, hp);
    // Редакція 2024: виснаження НЕ зменшує максимум хітів
    return hp;
  }
  function currentHP() {
    var mx = maxHP();
    var cur = inv.hpCurrent;
    if (cur == null || isNaN(cur)) cur = mx;
    return Math.max(0, Math.min(mx, cur));
  }
  // Обтяження: предмети (поле weight) + екіпірована броня/щит + зброя + монети (50 = 1 фунт).
  // level: 0 — норма, 1 — навантажений (> 5×STR, швидкість −10), 2 — важко (> 10×STR, −20)
  function encumbranceInfo() {
    var items = 0;
    (inv.itemsList || []).forEach(function (it) {
      var w = parseFloat(String(it.weight || '').replace(',', '.'));
      if (!isNaN(w) && w > 0) items += w * (parseInt(it.qty) || 1);
    });
    var gear = 0;
    if (typeof ARMOR_DATA !== 'undefined' && inv.armor && ARMOR_DATA[inv.armor] && ARMOR_DATA[inv.armor].weight) gear += ARMOR_DATA[inv.armor].weight;
    if (inv.shield) gear += 6; // щит — 6 фунтів (PHB)
    (inv.weaponList || []).forEach(function (e) {
      var w = resolveWeapon(e);
      if (w && typeof w.weight === 'number') gear += w.weight;
    });
    var coins = Math.round(((inv.cp || 0) + (inv.sp || 0) + (inv.gp || 0) + (inv.pp || 0)) / 50 * 10) / 10;
    var total = Math.round((items + gear + coins) * 10) / 10;
    var str = finalAbility('str');
    var level = total > str * 10 ? 2 : total > str * 5 ? 1 : 0;
    return {
      items: Math.round(items * 10) / 10, gear: Math.round(gear * 10) / 10, coins: coins,
      total: total, capacity: str * 15, level: level, speedPenalty: level === 2 ? 20 : level === 1 ? 10 : 0,
    };
  }
  function calcAC() { return calcACBase() + cm('ac'); }
  function calcACBase() {
    var armorId = inv.armor || 'none';
    var armor = typeof ARMOR_DATA !== 'undefined' && ARMOR_DATA[armorId] ? ARMOR_DATA[armorId] : { type: 'none', base: 10, addDex: true, maxDex: null };
    var dex = abilityMod('dex'), con = abilityMod('con'), wis = abilityMod('wis');
    var r = race(), c = cls(), ac;
    if (r && r.acOverride && armorId === 'none') {
      ac = r.acOverride;
      if (inv.shield) ac += 2;
      return ac;
    }
    var sub = subclassObj();
    if (sub && sub.baseAC && armorId === 'none') {
      ac = sub.baseAC + dex;
      if (inv.shield) ac += 2;
      return ac;
    }
    // Unarmored Defense: barbarian може зі щитом; monk — ТІЛЬКИ без щита
    if (c && c.unarmoredDefense && armorId === 'none' && !(ch.classId === 'monk' && inv.shield)) {
      ac = c.unarmoredDefense === '10 + dex + con' ? 10 + dex + con : 10 + dex + wis;
      if (inv.shield) ac += 2;
      return ac;
    }
    if (armor.type === 'none') ac = 10 + dex;
    else if (armor.type === 'light') ac = armor.base + dex;
    else if (armor.type === 'medium') ac = armor.base + Math.min(dex, 2);
    else ac = armor.base;
    if (ch.fightingStyle === 'defense' && armor.type !== 'none') ac += 1;
    if (inv.shield) ac += 2;
    return ac;
  }
  // Ефективна швидкість: раса + довільний модифікатор − обтяження (−10/−20), потім виснаження (5+ → 0; 2+ → навпіл)
  function speedValue() {
    var r = race();
    var base = (r ? r.speed : 30) + cm('speed');
    var enc = Math.max(0, base - encumbranceInfo().speedPenalty);
    var exhLvl = ch.playState.exhaustion || 0;
    var scConds = (ch.playState && ch.playState.conditions) || [];
    if (scConds.indexOf(4) >= 0) return 0; // Grappled (4): швидкість 0
    return Math.max(0, enc - 5 * exhLvl);
  }
  function initiativeBonus() {
    var b = abilityMod('dex');
    selectedFeats().forEach(function (f) { if (f.initiativeBonus) b += f.initiativeBonus; });
    b += jackBonus(); // Jack of All Trades діє на ініціативу (перевірка без володіння)
    b += cm('initiative');
    return b;
  }
  function backgroundBonusSkills() {
    var bg = ch.description.background;
    if (bg === '__custom__') return ((ch.customBackground && ch.customBackground.skills) || []).slice();
    if (bg && typeof BACKGROUND_DATA !== 'undefined' && BACKGROUND_DATA[bg]) return (BACKGROUND_DATA[bg].skills || []).slice();
    return [];
  }
  function raceSkillProfs() {
    var out = [];
    var r = race();
    function addAll(a) { (a || []).forEach(function (s) { if (out.indexOf(s) < 0) out.push(s); }); }
    if (r) addAll(r.skillProficiencies);
    var sr = subraceObj();
    if (sr) addAll(sr.skillProficiencies);
    addAll(ch.raceSkillChoices);
    return out;
  }
  // Нормалізація назв навичок між мовами (uk-сторінка ↔ en-сторінка),
  // порядок у ALL_SKILLS однаковий в обох версіях dnd-data.js
  var SKILLS_UK = ['Акробатика', 'Поводження з тваринами', 'Аркана', 'Атлетика', 'Обман', 'Історія', 'Проникливість', 'Залякування', 'Дослідження', 'Медицина', 'Природа', 'Уважність', 'Виступ', 'Переконання', 'Релігія', 'Спритність рук', 'Непомітність', 'Виживання'];
  var SKILLS_EN = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'];
  function normalizeSkillName(s) {
    var skills = typeof ALL_SKILLS !== 'undefined' ? ALL_SKILLS : SKILLS_UK;
    if (skills.indexOf(s) >= 0) return s;
    var i = SKILLS_UK.indexOf(s);
    if (i < 0) i = SKILLS_EN.indexOf(s);
    return i >= 0 && skills[i] ? skills[i] : s;
  }
  function allSkillProfs() {
    var set = {};
    (ch.skills || []).concat(raceSkillProfs()).concat(backgroundBonusSkills()).forEach(function (s) { set[normalizeSkillName(s)] = true; });
    return set;
  }
  function passivePerceptionValue() {
    var profs = allSkillProfs();
    var skills = typeof ALL_SKILLS !== 'undefined' ? ALL_SKILLS : [];
    // Знаходимо навичку сприйняття за прив'язкою wis та назвою (uk: Уважність / en: Perception)
    var percName = skills.find(function (s) { return s === 'Уважність' || s === 'Perception'; });
    var has = percName ? !!profs[percName] : false;
    return 10 + abilityMod('wis') + (has ? profBonus(ch.level || 1) : 0);
  }

  // ---------- Бойові стилі (id -> назва/опис, обидві мови) ----------
  var FS_INFO = {
    archery: { uk: ['Стрільба', '+2 до кидків влучання дальнобійною зброєю.'], en: ['Archery', '+2 bonus to attack rolls with ranged weapons.'] },
    defense: { uk: ['Оборона', 'Поки на вас броня, ви отримуєте +1 до КЗ.'], en: ['Defense', 'While wearing armor, you gain +1 AC.'] },
    dueling: { uk: ['Дуелянт', 'Тримаючи одноручну зброю й нічого в іншій руці, ви отримуєте +2 до шкоди цією зброєю.'], en: ['Dueling', 'When wielding a one-handed weapon and nothing else, +2 to damage with that weapon.'] },
    great_weapon: { uk: ['Великозбройний бій', 'Кидаючи шкоду дворучною або універсальною зброєю, ви можете перекинути 1 та 2 на кубиках шкоди.'], en: ['Great Weapon Fighting', 'Reroll 1s and 2s on damage dice of two-handed or versatile weapons.'] },
    two_weapon: { uk: ['Бій двома зброями', 'Атакуючи другою зброєю, ви додаєте модифікатор характеристики до її шкоди.'], en: ['Two-Weapon Fighting', 'Add your ability modifier to the damage of the second attack.'] },
    protection: { uk: ['Захист', 'Реакцією, маючи щит, ви можете накласти перешкоду на атаку по союзнику поруч.'], en: ['Protection', 'As a reaction with a shield, impose disadvantage on an attack against a nearby ally.'] },
    blind: { uk: ['Сліпий бій', 'Ви маєте сліпозір 10 футів — бачите невидимих істот у цьому радіусі.'], en: ['Blind Fighting', 'You have blindsight within 10 feet, seeing invisible creatures in that radius.'] },
    interception: { uk: ['Перехоплення', 'Реакцією ви можете зменшити шкоду союзнику поруч на 1d10 + бонус майстерності.'], en: ['Interception', 'As a reaction, reduce damage to a nearby ally by 1d10 + proficiency bonus.'] },
    thrown: { uk: ['Метальна зброя', 'Ви можете дістати метальну зброю як частину атаки та отримуєте +2 до шкоди метальною зброєю.'], en: ['Thrown Weapon Fighting', 'Draw a thrown weapon as part of the attack and gain +2 to its damage.'] },
    unarmed: { uk: ['Беззбройний бій', 'Ваші беззбройні удари завдають 1d6 (1d8, якщо руки вільні від зброї та щита).'], en: ['Unarmed Fighting', 'Your unarmed strikes deal 1d6 (1d8 if both hands are free).'] },
  };
  function fightingStyleInfo() {
    var id = ch.fightingStyle;
    if (!id) return null;
    var lang = window.PS_LANG === 'en' ? 'en' : 'uk';
    var fs = FS_INFO[id];
    return fs ? { name: fs[lang][0], desc: fs[lang][1] } : { name: id, desc: '' };
  }

  // ---------- Володіння бронею (парсимо текст armorProf, uk/en) ----------
  function armorProfSet() {
    var c = cls();
    var s = ((c && c.armorProf) || '').toLowerCase();
    return {
      light: /легк|light|уся броня|all armor/.test(s),
      medium: /середн|medium/.test(s) || /уся броня|all armor/.test(s),
      heavy: /важк|heavy|уся броня|all armor/.test(s),
      shield: /щит|shield/.test(s),
    };
  }
  function isArmorProficient(armorId) {
    if (!armorId || armorId === 'none') return true;
    var a = typeof ARMOR_DATA !== 'undefined' ? ARMOR_DATA[armorId] : null;
    if (!a || a.type === 'none') return true;
    return !!armorProfSet()[a.type];
  }

  // ---------- Ресурси класу (Rage, Ki, тощо) ----------
  // recharge: 'short' — усі використання на короткому відпочинку;
  //           'short-one' — лише 1 використання на короткому (решта — на тривалому, правила 2024);
  //           'long' — тільки тривалий відпочинок
  function classResources() {
    var lvl = ch.level || 1;
    var out = [];
    var id = ch.classId;
    // Редакція 2024: Rage — 1 використання відновлюється на короткому відпочинку, усі — на тривалому
    if (id === 'barbarian') out.push({ key: 'rage', label: t('resRage'), max: lvl < 3 ? 2 : lvl < 6 ? 3 : lvl < 12 ? 4 : lvl < 17 ? 5 : 6, recharge: 'short-one' });
    if (id === 'monk' && lvl >= 2) out.push({ key: 'ki', label: t('resKi'), max: lvl, recharge: 'short' });
    if (id === 'sorcerer' && lvl >= 2) out.push({ key: 'sorc', label: t('resSorcPts'), max: lvl, recharge: 'long' });
    if (id === 'bard') out.push({ key: 'bardic', label: t('resBardic'), max: Math.max(1, abilityMod('cha')), recharge: lvl >= 5 ? 'short' : 'long' });
    // Редакція 2014: Channel Divinity (клірик 1 вик., 6+ — 2, 18+ — 3) і Wild Shape — повне відновлення на короткому відпочинку
    if (id === 'cleric') out.push({ key: 'channel', label: t('resChannel'), max: lvl >= 18 ? 4 : lvl >= 6 ? 3 : 2, recharge: 'short-one' });
    if (id === 'paladin' && lvl >= 3) out.push({ key: 'channel', label: t('resChannel'), max: lvl >= 11 ? 3 : 2, recharge: 'short-one' });
    if (id === 'paladin') out.push({ key: 'loh', label: t('resLayOnHands'), max: 5 * lvl, pool: true, recharge: 'long' });
    if (id === 'druid' && lvl >= 2) out.push({ key: 'wildshape', label: t('resWildShape'), max: lvl >= 17 ? 4 : lvl >= 6 ? 3 : 2, recharge: 'short-one' });
    if (id === 'fighter') {
      // Редакція 2014: Second Wind — 1 використання, відновлення на короткому/тривалому
      out.push({ key: 'secondwind', label: t('resSecondWind'), max: lvl >= 10 ? 4 : lvl >= 4 ? 3 : 2, recharge: 'short-one' });
      if (lvl >= 2) out.push({ key: 'actionsurge', label: t('resActionSurge'), max: lvl >= 17 ? 2 : 1, recharge: 'short' });
      var sub = subclassObj();
      if (sub && sub.id === 'battle_master' && lvl >= 3) {
        out.push({ key: 'superiority', label: t('resSuperiority'), max: lvl >= 15 ? 6 : lvl >= 7 ? 5 : 4, recharge: 'short' });
      }
    }
    return out;
  }
  function resUsed(key) { return Math.max(0, parseInt(ch.playState.res[key]) || 0); }
  function setResUsed(key, v, max) { ch.playState.res[key] = Math.max(0, Math.min(max, v)); persist(); }

  // ---------- Заклинання ----------
  var THIRD_SLOTS = {
    1: [0,0,0,0,0,0,0,0,0], 2: [0,0,0,0,0,0,0,0,0], 3: [2,0,0,0,0,0,0,0,0], 4: [3,0,0,0,0,0,0,0,0],
    5: [3,0,0,0,0,0,0,0,0], 6: [3,0,0,0,0,0,0,0,0], 7: [4,2,0,0,0,0,0,0,0], 8: [4,2,0,0,0,0,0,0,0],
    9: [4,2,0,0,0,0,0,0,0], 10: [4,3,0,0,0,0,0,0,0], 11: [4,3,0,0,0,0,0,0,0], 12: [4,3,0,0,0,0,0,0,0],
    13: [4,3,2,0,0,0,0,0,0], 14: [4,3,2,0,0,0,0,0,0], 15: [4,3,2,0,0,0,0,0,0], 16: [4,3,3,0,0,0,0,0,0],
    17: [4,3,3,0,0,0,0,0,0], 18: [4,3,3,0,0,0,0,0,0], 19: [4,3,3,1,0,0,0,0,0], 20: [4,3,3,1,0,0,0,0,0],
  };
  var FULL_SLOTS = {
    1: [2,0,0,0,0,0,0,0,0], 2: [3,0,0,0,0,0,0,0,0], 3: [4,2,0,0,0,0,0,0,0], 4: [4,3,0,0,0,0,0,0,0],
    5: [4,3,2,0,0,0,0,0,0], 6: [4,3,3,0,0,0,0,0,0], 7: [4,3,3,1,0,0,0,0,0], 8: [4,3,3,2,0,0,0,0,0],
    9: [4,3,3,3,1,0,0,0,0], 10: [4,3,3,3,2,0,0,0,0], 11: [4,3,3,3,2,1,0,0,0], 12: [4,3,3,3,2,1,0,0,0],
    13: [4,3,3,3,2,1,1,0,0], 14: [4,3,3,3,2,1,1,0,0], 15: [4,3,3,3,2,1,1,1,0], 16: [4,3,3,3,2,1,1,1,0],
    17: [4,3,3,3,2,1,1,1,1], 18: [4,3,3,3,3,1,1,1,1], 19: [4,3,3,3,3,2,1,1,1], 20: [4,3,3,3,3,2,2,1,1],
  };
  // Artificer — особливий half-caster: слоти вже з 1 рівня (округлення вгору)
  var ARTIFICER_SLOTS = {
    1: [2,0,0,0,0,0,0,0,0], 2: [2,0,0,0,0,0,0,0,0], 3: [3,0,0,0,0,0,0,0,0], 4: [3,0,0,0,0,0,0,0,0],
    5: [4,2,0,0,0,0,0,0,0], 6: [4,2,0,0,0,0,0,0,0], 7: [4,3,0,0,0,0,0,0,0], 8: [4,3,0,0,0,0,0,0,0],
    9: [4,3,2,0,0,0,0,0,0], 10: [4,3,2,0,0,0,0,0,0], 11: [4,3,3,0,0,0,0,0,0], 12: [4,3,3,0,0,0,0,0,0],
    13: [4,3,3,1,0,0,0,0,0], 14: [4,3,3,1,0,0,0,0,0], 15: [4,3,3,2,0,0,0,0,0], 16: [4,3,3,2,0,0,0,0,0],
    17: [4,3,3,3,1,0,0,0,0], 18: [4,3,3,3,1,0,0,0,0], 19: [4,3,3,3,2,0,0,0,0], 20: [4,3,3,3,2,0,0,0,0],
  };
  // Paladin / Ranger — 0 слотів на 1 рівні, слоти починаються з 2 рівня (офіційна таблиця)
  var PALADIN_RANGER_SLOTS = {
    1: [0,0,0,0,0,0,0,0,0], 2: [2,0,0,0,0,0,0,0,0], 3: [3,0,0,0,0,0,0,0,0], 4: [3,0,0,0,0,0,0,0,0],
    5: [4,2,0,0,0,0,0,0,0], 6: [4,2,0,0,0,0,0,0,0], 7: [4,3,0,0,0,0,0,0,0], 8: [4,3,0,0,0,0,0,0,0],
    9: [4,3,2,0,0,0,0,0,0], 10: [4,3,2,0,0,0,0,0,0], 11: [4,3,3,0,0,0,0,0,0], 12: [4,3,3,0,0,0,0,0,0],
    13: [4,3,3,1,0,0,0,0,0], 14: [4,3,3,1,0,0,0,0,0], 15: [4,3,3,2,0,0,0,0,0], 16: [4,3,3,2,0,0,0,0,0],
    17: [4,3,3,3,1,0,0,0,0], 18: [4,3,3,3,1,0,0,0,0], 19: [4,3,3,3,2,0,0,0,0], 20: [4,3,3,3,2,0,0,0,0],
  };
  function spellcastingInfo() {
    var c = cls();
    if (!c) return null;
    var sc = null;
    if (c.spellcasting) sc = c.spellcasting;
    else {
      var sub = subclassObj();
      if (sub && sub.spellcasting) sc = sub.spellcasting;
    }
    var casterClassId = ch.classId;
    // Мультиклас: якщо основний клас не заклинач — беремо характеристику першого spellcasting-класу
    if (!sc) {
      var mc = multiclassEntries();
      if (mc) for (var i = 0; i < mc.length; i++) {
        var cc = typeof DND_CLASSES !== 'undefined' ? DND_CLASSES[mc[i].classId] : null;
        if (cc && cc.spellcasting) { sc = cc.spellcasting; casterClassId = mc[i].classId; break; }
      }
    }
    if (!sc) return null;
    return { ability: sc.ability || 'int', type: sc.type || 'prepared', caster: sc.caster || null, classId: casterClassId };
  }
  function casterTier() {
    var c = cls();
    if (!c) return null;
    if (ch.classId === 'warlock') return 'pact';
    if (ch.classId === 'paladin' || ch.classId === 'ranger') return 'half';
    if (c.spellcasting) return c.spellcasting.caster || 'full';
    var sub = subclassObj();
    if (sub && sub.spellcasting) return sub.spellcasting.caster || 'third';
    return null;
  }
  // Мультикласова таблиця слотів: сумарний рівень заклинача за офіційною формулою.
  // full = повний рівень; half = половина (artificer — з округленням вгору); third = третина.
  // Warlock (pact) у формулу НЕ входить — його слоти рахуються окремо.
  function multiclassEntries() {
    var raw = Array.isArray(ch.classes) ? ch.classes : Array.isArray(ch.multiclass) ? ch.multiclass : null;
    if (!raw || raw.length < 2) return null;
    return raw.filter(function (e) { return e && e.classId && (parseInt(e.level) || 0) > 0; });
  }
  // Рівень у конкретному класі: для мультикласу — з ch.classes, інакше — загальний рівень
  function classLevelFor(classId) {
    var mc = multiclassEntries();
    if (mc) {
      var e = mc.find(function (x) { return x.classId === classId; });
      return e ? Math.max(1, parseInt(e.level) || 1) : 0;
    }
    return classId === ch.classId ? Math.max(1, ch.level || 1) : 0;
  }
  function multiclassCasterLevel(entries) {
    var total = 0;
    entries.forEach(function (e) {
      var lvl = parseInt(e.level) || 0;
      var c = typeof DND_CLASSES !== 'undefined' ? DND_CLASSES[e.classId] : null;
      if (!c || e.classId === 'warlock') return;
      var caster = null;
      if (e.classId === 'paladin' || e.classId === 'ranger') caster = 'half';
      else if (c.spellcasting) caster = c.spellcasting.caster || 'full';
      if (!caster) return;
      if (caster === 'full') total += lvl;
      else if (caster === 'half') total += e.classId === 'artificer' ? Math.ceil(lvl / 2) : Math.floor(lvl / 2);
      else if (caster === 'third') total += Math.floor(lvl / 3);
    });
    return total;
  }
  function spellSlots() {
    // Мультиклас: якщо ch.classes/ch.multiclass містить 2+ класи — рахуємо за сумарним рівнем
    var mc = multiclassEntries();
    if (mc) {
      var casterLvl = Math.max(0, Math.min(20, multiclassCasterLevel(mc)));
      var mcSlots = casterLvl > 0 ? (FULL_SLOTS[casterLvl] || [0,0,0,0,0,0,0,0,0]).slice() : [0,0,0,0,0,0,0,0,0];
      // Pact slots варлока додаються поверх (спільний пул used — обмеження поточної моделі)
      var wl = mc.find(function (e) { return e.classId === 'warlock'; });
      if (wl) {
        var wlvl = Math.max(1, Math.min(20, parseInt(wl.level) || 1));
        var pactLvl = wlvl >= 9 ? 5 : Math.ceil(wlvl / 2);
        var pactCount = wlvl >= 17 ? 4 : wlvl >= 11 ? 3 : wlvl >= 2 ? 2 : 1;
        mcSlots[pactLvl - 1] += pactCount;
      }
      return mcSlots;
    }
    var tier = casterTier();
    var lvl = Math.max(1, Math.min(20, ch.level || 1));
    if (!tier) return [0,0,0,0,0,0,0,0,0];
    if (tier === 'pact') {
      var slotLvl = lvl >= 9 ? 5 : Math.ceil(lvl / 2);
      var count = lvl >= 17 ? 4 : lvl >= 11 ? 3 : lvl >= 2 ? 2 : 1;
      var arr = [0,0,0,0,0,0,0,0,0];
      arr[slotLvl - 1] = count;
      return arr;
    }
    var table = tier === 'half'
      ? (ch.classId === 'artificer' ? ARTIFICER_SLOTS : PALADIN_RANGER_SLOTS)
      : tier === 'third' ? THIRD_SLOTS : FULL_SLOTS;
    return (table[lvl] || [0,0,0,0,0,0,0,0,0]).slice();
  }
  function spellDC() {
    var info = spellcastingInfo();
    return info ? 8 + profBonus(ch.level || 1) + abilityMod(info.ability) : null;
  }
  function spellAtkBonus() {
    var info = spellcastingInfo();
    return info ? profBonus(ch.level || 1) + abilityMod(info.ability) : null;
  }
  function spellById(id) {
    // Homebrew-закляття користувача мають пріоритет (id з префіксом custom_)
    var cs = (ch.customSpells || []).find(function (s) { return s.id === id; });
    if (cs) return cs;
    if (typeof getSpellById === 'function') return getSpellById(id);
    if (typeof DND_SPELLS !== 'undefined') return DND_SPELLS.find(function (s) { return s.id === id; }) || null;
    return null;
  }
  function cantripScale() {
    var lvl = ch.level || 1;
    return lvl >= 17 ? 4 : lvl >= 11 ? 3 : lvl >= 5 ? 2 : 1;
  }
  // ---- Структуровані метадані кидків для найуживаніших заклинань ----
  // kind: 'attack' | 'save' | 'none'; damage: [{n,d}]; heal: {n,d,addMod}; upcast: {n,d} додаткові кубики за кожен рівень слота вище базового
  var SPELL_ROLLS = {
    fire_bolt:        { kind: 'attack', damage: [{ n: 1, d: 10 }] },
    eldritch_blast:   { kind: 'attack', damage: [{ n: 1, d: 10 }] },
    ray_of_frost:     { kind: 'attack', damage: [{ n: 1, d: 8 }] },
    sacred_flame:     { kind: 'save', saveAb: 'dex', damage: [{ n: 1, d: 8 }] },
    toll_the_dead:    { kind: 'save', saveAb: 'wis', damage: [{ n: 1, d: 8 }, { n: 1, d: 12 }] },
    poison_spray:     { kind: 'save', saveAb: 'con', damage: [{ n: 1, d: 12 }] },
    magic_missile:    { kind: 'none', damage: [{ n: 3, d: 4 }], flatBonus: 3, upcast: { n: 1, d: 4, flat: 1 } },
    guiding_bolt:     { kind: 'attack', damage: [{ n: 4, d: 6 }], upcast: { n: 1, d: 6 } },
    burning_hands:    { kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 6 }], upcast: { n: 1, d: 6 } },
    thunderwave:      { kind: 'save', saveAb: 'con', damage: [{ n: 2, d: 8 }], upcast: { n: 1, d: 8 } },
    inflict_wounds:   { kind: 'attack', damage: [{ n: 3, d: 10 }], upcast: { n: 1, d: 10 } },
    scorching_ray:    { kind: 'attack', damage: [{ n: 2, d: 6 }] },
    shatter:          { kind: 'save', saveAb: 'con', damage: [{ n: 3, d: 8 }], upcast: { n: 1, d: 8 } },
    fireball:         { kind: 'save', saveAb: 'dex', damage: [{ n: 8, d: 6 }], upcast: { n: 1, d: 6 } },
    lightning_bolt:   { kind: 'save', saveAb: 'dex', damage: [{ n: 8, d: 6 }], upcast: { n: 1, d: 6 } },
    cure_wounds:      { kind: 'none', heal: { n: 1, d: 8, addMod: true }, upcastHeal: { n: 1, d: 8 } },
    healing_word:     { kind: 'none', heal: { n: 1, d: 4, addMod: true }, upcastHeal: { n: 1, d: 4 } },
    mass_cure_wounds: { kind: 'none', heal: { n: 3, d: 8, addMod: true }, upcastHeal: { n: 1, d: 8 } },
    mass_healing_word:{ kind: 'none', heal: { n: 1, d: 4, addMod: true }, upcastHeal: { n: 1, d: 4 } },
    prayer_of_healing:{ kind: 'none', heal: { n: 2, d: 8, addMod: true }, upcastHeal: { n: 1, d: 8 } },
    aura_of_vitality: { kind: 'none', heal: { n: 2, d: 6, addMod: false } },
    spiritual_weapon: { kind: 'attack', damage: [{ n: 1, d: 8 }], upcast: { n: 1, d: 8 } },
    // Замовляння (доповнення)
    acid_splash:      { kind: 'save', saveAb: 'dex', damage: [{ n: 1, d: 6 }] },
    shocking_grasp:   { kind: 'attack', damage: [{ n: 1, d: 8 }] },
    chill_touch:      { kind: 'attack', damage: [{ n: 1, d: 8 }] },
    produce_flame:    { kind: 'attack', damage: [{ n: 1, d: 8 }] },
    thorn_whip:       { kind: 'attack', damage: [{ n: 1, d: 6 }] },
    primal_savagery:  { kind: 'attack', damage: [{ n: 1, d: 10 }] },
    vicious_mockery:  { kind: 'save', saveAb: 'wis', damage: [{ n: 1, d: 4 }] },
    word_of_radiance: { kind: 'save', saveAb: 'con', damage: [{ n: 1, d: 6 }] },
    frostbite:        { kind: 'save', saveAb: 'con', damage: [{ n: 1, d: 6 }] },
    mind_sliver:      { kind: 'save', saveAb: 'int', damage: [{ n: 1, d: 6 }] },
    infestation:      { kind: 'save', saveAb: 'con', damage: [{ n: 1, d: 6 }] },
    thunderclap:      { kind: 'save', saveAb: 'con', damage: [{ n: 1, d: 6 }] },
    // 1 рівень (доповнення)
    hellish_rebuke:   { kind: 'save', saveAb: 'dex', damage: [{ n: 2, d: 10 }], upcast: { n: 1, d: 10 } },
    witch_bolt:       { kind: 'attack', damage: [{ n: 1, d: 12 }], upcast: { n: 1, d: 12 } },
    chromatic_orb:    { kind: 'attack', damage: [{ n: 3, d: 8 }], upcast: { n: 1, d: 8 } },
    ice_knife:        { kind: 'attack', damage: [{ n: 1, d: 10 }, { n: 2, d: 6 }], upcast: { n: 1, d: 6 }, upcastIndex: 1 }, // upcast масштабує область 2d6, а не дротик 1d10
    dissonant_whispers:{ kind: 'save', saveAb: 'wis', damage: [{ n: 3, d: 6 }], upcast: { n: 1, d: 6 } },
    ray_of_sickness:  { kind: 'attack', damage: [{ n: 2, d: 8 }], upcast: { n: 1, d: 8 } },
    tashas_caustic_brew:{ kind: 'save', saveAb: 'dex', damage: [{ n: 2, d: 4 }], upcast: { n: 2, d: 4 } },
    // 2 рівень (доповнення)
    moonbeam:         { kind: 'save', saveAb: 'con', damage: [{ n: 2, d: 10 }], upcast: { n: 1, d: 10 } },
    flaming_sphere:   { kind: 'save', saveAb: 'dex', damage: [{ n: 2, d: 6 }], upcast: { n: 1, d: 6 } },
    heat_metal:       { kind: 'none', damage: [{ n: 2, d: 8 }], upcast: { n: 1, d: 8 } },
    cloud_of_daggers: { kind: 'none', damage: [{ n: 4, d: 4 }], upcast: { n: 2, d: 4 } },
    melfs_acid_arrow: { kind: 'attack', damage: [{ n: 4, d: 4 }, { n: 2, d: 4 }], upcast: { n: 1, d: 4 }, upcastAll: true }, // RAW: і початкова, і подальша шкода зростають на 1d4
    tashas_mind_whip: { kind: 'save', saveAb: 'int', damage: [{ n: 3, d: 6 }] },
    dragons_breath:   { kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 6 }], upcast: { n: 1, d: 6 } },
    // 3 рівень (доповнення)
    vampiric_touch:   { kind: 'attack', damage: [{ n: 3, d: 6 }], upcast: { n: 1, d: 6 } },
    call_lightning:   { kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 10 }], upcast: { n: 1, d: 10 } },
    spirit_guardians: { kind: 'save', saveAb: 'wis', damage: [{ n: 3, d: 8 }], upcast: { n: 1, d: 8 } },
    // 4-6 рівень (доповнення)
    blight:           { kind: 'save', saveAb: 'con', damage: [{ n: 8, d: 8 }], upcast: { n: 1, d: 8 } },
    ice_storm:        { kind: 'save', saveAb: 'dex', damage: [{ n: 2, d: 8 }, { n: 4, d: 6 }], upcast: { n: 1, d: 8 } },
    phantasmal_killer:{ kind: 'save', saveAb: 'wis', damage: [{ n: 4, d: 10 }], upcast: { n: 1, d: 10 } },
    cone_of_cold:     { kind: 'save', saveAb: 'con', damage: [{ n: 8, d: 8 }], upcast: { n: 1, d: 8 } },
    flame_strike:     { kind: 'save', saveAb: 'dex', damage: [{ n: 4, d: 6 }, { n: 4, d: 6 }], upcast: { n: 1, d: 6 } },
    cloudkill:        { kind: 'save', saveAb: 'con', damage: [{ n: 5, d: 8 }], upcast: { n: 1, d: 8 } },
    chain_lightning:  { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 8 }] },
    disintegrate:     { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 6 }], flatBonus: 40, upcast: { n: 3, d: 6 } },
    harm:             { kind: 'save', saveAb: 'con', damage: [{ n: 14, d: 6 }] },
    heal:             { kind: 'none', heal: { n: 0, d: 0, flat: 70 }, upcastHealFlat: 10 },
    // Замовляння (третя партія)
    create_bonfire:   { kind: 'save', saveAb: 'dex', damage: [{ n: 1, d: 8 }] },
    magic_stone:      { kind: 'attack', damage: [{ n: 1, d: 6 }] },
    // 1 рівень (третя партія)
    chaos_bolt:       { kind: 'attack', damage: [{ n: 2, d: 8 }, { n: 1, d: 6 }], upcast: { n: 1, d: 6 } },
    arms_of_hadar:    { kind: 'save', saveAb: 'str', damage: [{ n: 2, d: 6 }], upcast: { n: 1, d: 6 } },
    catapult:         { kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 8 }], upcast: { n: 1, d: 8 } },
    earth_tremor:     { kind: 'save', saveAb: 'dex', damage: [{ n: 1, d: 6 }], upcast: { n: 1, d: 6 } },
    hail_of_thorns:   { kind: 'save', saveAb: 'dex', damage: [{ n: 1, d: 10 }], upcast: { n: 1, d: 10 } },
    searing_smite:    { kind: 'none', damage: [{ n: 1, d: 6 }], upcast: { n: 1, d: 6 } },
    thunderous_smite: { kind: 'none', damage: [{ n: 2, d: 6 }] },
    wrathful_smite:   { kind: 'none', damage: [{ n: 1, d: 6 }] },
    goodberry:        { kind: 'none', heal: { n: 0, d: 0, flat: 1 } },
    // 2 рівень (третя партія)
    aganazzars_scorcher:{ kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 8 }], upcast: { n: 1, d: 8 } },
    shadow_blade:     { kind: 'attack', damage: [{ n: 2, d: 8 }] },
    flame_blade:      { kind: 'attack', damage: [{ n: 3, d: 6 }], upcast: { n: 1, d: 6 } },
    branding_smite:   { kind: 'none', damage: [{ n: 2, d: 6 }], upcast: { n: 1, d: 6 } },
    // 3 рівень (третя партія)
    conjure_barrage:  { kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 8 }] },
    lightning_arrow:  { kind: 'attack', damage: [{ n: 4, d: 8 }], upcast: { n: 1, d: 8 } },
    melfs_minute_meteors:{ kind: 'save', saveAb: 'dex', damage: [{ n: 2, d: 6 }] },
    hunger_of_hadar:  { kind: 'none', damage: [{ n: 2, d: 6 }] },
    blinding_smite:   { kind: 'none', damage: [{ n: 3, d: 8 }] },
    // 4-5 рівень (третя партія)
    vitriolic_sphere: { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 4 }], upcast: { n: 2, d: 4 } },
    wall_of_fire:     { kind: 'save', saveAb: 'dex', damage: [{ n: 5, d: 8 }], upcast: { n: 1, d: 8 } },
    fire_shield:      { kind: 'none', damage: [{ n: 2, d: 8 }] },
    destructive_wave: { kind: 'save', saveAb: 'con', damage: [{ n: 5, d: 6 }, { n: 5, d: 6 }] },
    immolation:       { kind: 'save', saveAb: 'dex', damage: [{ n: 8, d: 6 }] },
    insect_plague:    { kind: 'save', saveAb: 'con', damage: [{ n: 4, d: 10 }], upcast: { n: 1, d: 10 } },
    banishing_smite:  { kind: 'none', damage: [{ n: 5, d: 10 }] },
    holy_weapon:      { kind: 'none', damage: [{ n: 2, d: 8 }] },
    // 6+ рівень (третя партія)
    sunbeam:          { kind: 'save', saveAb: 'con', damage: [{ n: 6, d: 8 }] },
    circle_of_death:  { kind: 'save', saveAb: 'con', damage: [{ n: 8, d: 6 }], upcast: { n: 2, d: 6 } },
    otilukes_freezing_sphere:{ kind: 'save', saveAb: 'con', damage: [{ n: 10, d: 6 }], upcast: { n: 1, d: 6 } },
    finger_of_death:  { kind: 'save', saveAb: 'con', damage: [{ n: 7, d: 8 }], flatBonus: 30 },
    delayed_blast_fireball:{ kind: 'save', saveAb: 'dex', damage: [{ n: 12, d: 6 }], upcast: { n: 1, d: 6 } },
    fire_storm:       { kind: 'save', saveAb: 'dex', damage: [{ n: 7, d: 10 }] },
    prismatic_spray:  { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 6 }] },
    crown_of_stars:   { kind: 'attack', damage: [{ n: 4, d: 12 }], upcast: { n: 2, d: 12 } },
    sunburst:         { kind: 'save', saveAb: 'con', damage: [{ n: 12, d: 6 }] },
    earthquake:       { kind: 'save', saveAb: 'dex', damage: [{ n: 5, d: 6 }] },
    incendiary_cloud: { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 8 }] },
    meteor_swarm:     { kind: 'save', saveAb: 'dex', damage: [{ n: 20, d: 6 }, { n: 20, d: 6 }] },
    psychic_scream:   { kind: 'save', saveAb: 'int', damage: [{ n: 14, d: 6 }] },
    power_word_heal:  { kind: 'none', heal: { n: 0, d: 0, flat: 700 } },
    mass_heal:        { kind: 'none', heal: { n: 0, d: 0, flat: 700 } },
    synaptic_static:  { kind: 'save', saveAb: 'int', damage: [{ n: 8, d: 6 }] },
    steel_wind_strike:{ kind: 'attack', damage: [{ n: 6, d: 10 }] },
    negative_energy_flood:{ kind: 'save', saveAb: 'con', damage: [{ n: 5, d: 12 }] },
    maelstrom:        { kind: 'save', saveAb: 'str', damage: [{ n: 6, d: 6 }] },
    storm_of_vengeance:{ kind: 'save', saveAb: 'con', damage: [{ n: 2, d: 6 }] },
    blade_of_disaster:{ kind: 'attack', damage: [{ n: 4, d: 12 }] },
    // Бафи зброї / шкода «при влучанні» (кубики без окремого касту атаки)
    divine_favor:     { kind: 'none', damage: [{ n: 1, d: 4 }] },
    hex:              { kind: 'none', damage: [{ n: 1, d: 6 }] },
    hunters_mark:     { kind: 'none', damage: [{ n: 1, d: 6 }] },
    zephyr_strike:    { kind: 'none', damage: [{ n: 1, d: 8 }] },
    ensnaring_strike: { kind: 'save', saveAb: 'str', damage: [{ n: 1, d: 6 }], upcast: { n: 1, d: 6 } },
    crusaders_mantle: { kind: 'none', damage: [{ n: 1, d: 4 }] },
    elemental_weapon: { kind: 'none', damage: [{ n: 1, d: 4 }] },
    spirit_shroud:    { kind: 'none', damage: [{ n: 1, d: 8 }] },
    tensers_transformation:{ kind: 'none', damage: [{ n: 2, d: 12 }] },
    staggering_smite: { kind: 'none', damage: [{ n: 4, d: 6 }] },
    // Шкода з рятунком (четверта партія)
    cordon_of_arrows: { kind: 'save', saveAb: 'dex', damage: [{ n: 1, d: 6 }] },
    dust_devil:       { kind: 'save', saveAb: 'str', damage: [{ n: 1, d: 8 }], upcast: { n: 1, d: 8 } },
    snillocs_snowball_swarm:{ kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 6 }], upcast: { n: 1, d: 6 } },
    spike_growth:     { kind: 'none', damage: [{ n: 2, d: 4 }] },
    phantasmal_force: { kind: 'save', saveAb: 'int', damage: [{ n: 1, d: 6 }] },
    bestow_curse:     { kind: 'save', saveAb: 'wis', damage: [{ n: 1, d: 8 }] },
    glyph_of_warding: { kind: 'save', saveAb: 'dex', damage: [{ n: 5, d: 8 }], upcast: { n: 1, d: 8 } },
    thunder_step:     { kind: 'save', saveAb: 'con', damage: [{ n: 3, d: 10 }], upcast: { n: 1, d: 10 } },
    wind_wall:        { kind: 'save', saveAb: 'str', damage: [{ n: 3, d: 8 }] },
    dimension_door:   { kind: 'none', damage: [{ n: 4, d: 6 }] },
    evards_black_tentacles:{ kind: 'save', saveAb: 'str', damage: [{ n: 3, d: 6 }] },
    black_tentacles:  { kind: 'save', saveAb: 'str', damage: [{ n: 3, d: 6 }] },
    mordenkainens_faithful_hound:{ kind: 'attack', damage: [{ n: 4, d: 8 }] },
    animate_objects:  { kind: 'attack', damage: [{ n: 1, d: 4 }], flatBonus: 4 },
    bigbys_hand:      { kind: 'attack', damage: [{ n: 4, d: 8 }], upcast: { n: 2, d: 8 } },
    arcane_hand:      { kind: 'attack', damage: [{ n: 4, d: 8 }], upcast: { n: 2, d: 8 } },
    conjure_volley:   { kind: 'save', saveAb: 'dex', damage: [{ n: 8, d: 8 }] },
    contact_other_plane:{ kind: 'none', damage: [{ n: 6, d: 6 }] },
    dawn:             { kind: 'save', saveAb: 'con', damage: [{ n: 4, d: 10 }] },
    dream:            { kind: 'none', damage: [{ n: 3, d: 6 }] },
    enervation:       { kind: 'save', saveAb: 'dex', damage: [{ n: 4, d: 8 }], upcast: { n: 1, d: 8 } },
    geas:             { kind: 'none', damage: [{ n: 5, d: 10 }] },
    transmute_rock:   { kind: 'save', saveAb: 'dex', damage: [{ n: 4, d: 8 }] },
    wall_of_light:    { kind: 'save', saveAb: 'con', damage: [{ n: 4, d: 8 }], upcast: { n: 1, d: 8 } },
    wrath_of_nature:  { kind: 'save', saveAb: 'dex', damage: [{ n: 3, d: 8 }] },
    blade_barrier:    { kind: 'save', saveAb: 'dex', damage: [{ n: 6, d: 10 }] },
    bones_of_the_earth:{ kind: 'save', saveAb: 'dex', damage: [{ n: 6, d: 6 }] },
    forbiddance:      { kind: 'none', damage: [{ n: 5, d: 10 }] },
    investiture_of_flame:{ kind: 'save', saveAb: 'dex', damage: [{ n: 4, d: 8 }] },
    investiture_of_ice:{ kind: 'save', saveAb: 'con', damage: [{ n: 4, d: 6 }] },
    investiture_of_stone:{ kind: 'save', saveAb: 'dex', damage: [{ n: 4, d: 6 }] },
    investiture_of_wind:{ kind: 'save', saveAb: 'con', damage: [{ n: 2, d: 10 }] },
    mental_prison:    { kind: 'save', saveAb: 'int', damage: [{ n: 5, d: 10 }] },
    wall_of_ice:      { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 6 }], upcast: { n: 2, d: 6 } },
    wall_of_thorns:   { kind: 'save', saveAb: 'dex', damage: [{ n: 7, d: 8 }], upcast: { n: 1, d: 8 } },
    mordenkainens_sword:{ kind: 'attack', damage: [{ n: 3, d: 10 }] },
    feeblemind:       { kind: 'save', saveAb: 'int', damage: [{ n: 4, d: 6 }] },
    tsunami:          { kind: 'save', saveAb: 'str', damage: [{ n: 6, d: 10 }] },
    prismatic_wall:   { kind: 'save', saveAb: 'dex', damage: [{ n: 10, d: 6 }] },
    weird:            { kind: 'save', saveAb: 'wis', damage: [{ n: 4, d: 10 }] },
    // Лікування (четверта партія)
    regenerate:       { kind: 'none', heal: { n: 4, d: 8 }, healBonus: 15 },
    soul_cage:        { kind: 'none', heal: { n: 2, d: 8 } },
    // Утиліти з кубиками в описі, які НЕ є шкодою/лікуванням — глушимо евристику
    guidance:         { kind: 'none', damage: [] },
    resistance:       { kind: 'none', damage: [] },
    bless:            { kind: 'none', damage: [] },
    false_life:       { kind: 'none', damage: [] },
    sleep:            { kind: 'save', saveAb: 'wis', damage: [] },
    color_spray:      { kind: 'save', saveAb: 'con', damage: [] },
    alter_self:       { kind: 'none', damage: [] },
    enhance_ability:  { kind: 'none', damage: [] },
    enlarge_reduce:   { kind: 'none', damage: [] },
    web:              { kind: 'save', saveAb: 'dex', damage: [] },
    confusion:        { kind: 'save', saveAb: 'wis', damage: [] },
    control_water:    { kind: 'none', damage: [] },
    heroes_feast:     { kind: 'none', damage: [] },
    time_stop:        { kind: 'none', damage: [] },
  };
  // Метадані кидків: спершу override-таблиця, інакше — евристика з опису.
  // Розділяємо: attack roll / save DC / damage roll / healing roll / масштабування.
  function spellRollInfo(sp) {
    var empty = { kind: 'none', damage: [], heal: null, upcast: null, upcastHeal: null, flatBonus: 0 };
    if (!sp) return empty;
    var ov = SPELL_ROLLS[sp.id];
    var desc = String(sp.description || '');
    var out;
    if (ov) {
      out = { kind: ov.kind, saveAb: ov.saveAb || null, damage: (ov.damage || []).slice(), heal: ov.heal || null, upcast: ov.upcast || null, upcastIndex: ov.upcastIndex || 0, upcastAll: !!ov.upcastAll, upcastHeal: ov.upcastHeal || null, upcastHealFlat: ov.upcastHealFlat || 0, healBonus: ov.healBonus || 0, flatBonus: ov.flatBonus || 0 };
    } else {
      var isHeal = /відновлю[єе]|відновлює кількість хітів|regains? (a number of )?hit points|regains? \d+/i.test(desc);
      var isSave = /рят(івний|унков)?\s*кид|saving throw|рятунк/i.test(desc);
      var isAtk = /кидок атаки|дальн(я|ьої) атак|spell attack|ближн(я|ьої) атак/i.test(desc);
      var re = /(\d+)[dк](\d+)/gi, seen = {}, dice = [], m;
      while ((m = re.exec(desc)) && dice.length < 3) {
        var key = m[1] + 'd' + m[2];
        if (seen[key]) continue;
        seen[key] = true;
        dice.push({ n: parseInt(m[1]), d: parseInt(m[2]) });
      }
      out = {
        kind: isAtk ? 'attack' : isSave ? 'save' : 'none',
        saveAb: null,
        damage: isHeal ? [] : dice,
        heal: isHeal && dice.length ? { n: dice[0].n, d: dice[0].d, addMod: /модифікатор|modifier/i.test(desc) } : null,
        upcast: null, upcastHeal: null, flatBonus: 0,
      };
    }
    // Масштабування замовлянь за рівнем персонажа (5/11/17).
    // Для замовлянь із кількома варіантами кубика (напр., Подзвін мертвим 1d8/1d12)
    // масштабуються ВСІ варіанти, а не лише перший.
    if (sp.level === 0 && out.damage.length) {
      var sc = cantripScale();
      if (sc > 1) out.damage = out.damage.map(function (o) { return { n: o.n * sc, d: o.d, scaled: true }; });
    }
    return out;
  }
  // Рівень останнього касту закляття (для синхронізації кнопок шкоди/лікування з upcast)
  function spellCastLevel(sp) {
    if (sp.level === 0) return 0; // замовляння ніколи не отримують upcast-рівень
    var last = (ch.playState.lastCastLv || {})[sp.id];
    return Math.max(sp.level, last || sp.level);
  }
  // Скидання lastCastLv для заклять, кастованих на конкретному рівні слота
  // (використовується, коли слот цього рівня вручну повертають у «вільні»)
  function clearLastCastAtLevel(castLv) {
    var map = ch.playState.lastCastLv || {};
    Object.keys(map).forEach(function (id) { if (map[id] === castLv) delete map[id]; });
  }
  // Чи масштабується конкретний кубик шкоди при upcast (item 11):
  // за замовчуванням — перший (індекс 0), інакше upcastIndex або upcastAll із SPELL_ROLLS
  function upcastApplies(ri, di) {
    if (!ri || !ri.upcast) return false;
    return !!ri.upcastAll || di === (ri.upcastIndex || 0);
  }
  // Шкода/лікування з урахуванням рівня слота (upcast)
  function scaledSpellDice(base, upcast, castLv, spellLv) {
    var extra = Math.max(0, (castLv || spellLv) - spellLv);
    if (!upcast || !extra) return { n: base.n, d: base.d, flat: 0 };
    return { n: base.n + upcast.n * extra, d: base.d, flat: (upcast.flat || 0) * extra };
  }
  // Концентрація: одне активне concentration-закляття за раз (дані зі spells-data, поле concentration)
  function handleConcentration(sp) {
    if (!sp) return;
    var isConc = sp.concentration === true ||
      (sp.concentration == null && /концентрація|concentration/i.test(String(sp.duration || ''))); // евристика — лише резерв
    if (!isConc) return;
    var prev = ch.playState.concentration;
    if (prev && prev !== sp.id) {
      var prevSp = spellById(prev);
      logRoll('⚠ ' + t('concentrationBroken') + (prevSp ? ': ' + prevSp.name : ''), t('concentrationReplacedBy') + ' «' + sp.name + '»', '!', 'spell');
    }
    ch.playState.concentration = sp.id;
  }
  // Каст замовляння (без слотів) — одразу кидаємо кубики шкоди/лікування, як і для заклять зі слотами
  function castCantrip(sp) {
    handleConcentration(sp);
    persist();
    logRoll(t('cast') + ': ' + sp.name, t('atWill'), '✔', 'spell');
    var ri = spellRollInfo(sp);
    if (ri.heal && ri.heal.flat) {
      logRoll(t('healRoll') + ': ' + sp.name, '—', ri.heal.flat, 'heal');
    } else if (ri.heal) {
      var hmod = (ri.heal.addMod ? abilityMod((spellcastingInfo() || { ability: 'wis' }).ability) : 0) + (ri.healBonus || 0);
      rollDamage(t('healRoll') + ': ' + sp.name, ri.heal.n + 'd' + ri.heal.d, hmod, { type: 'heal' });
    } else if (ri.damage.length) {
      rollDamage(t('spellDamageRoll') + ': ' + sp.name, ri.damage[0].n + 'd' + ri.damage[0].d, ri.flatBonus || 0, { type: 'spell' });
    }
    if (activeTab === 'spells') renderTab(); // оновлюємо банер концентрації
  }
  // Каст на конкретному рівні слота: списуємо саме цей слот і кидаємо масштабовані кубикии
  function castSpellAtLevel(sp, lv0) {
    var slots = spellSlots();
    var used = ch.playState.slotsUsed;
    if (!(slots[lv0] > 0 && (used[lv0] || 0) < slots[lv0])) {
      logRoll(t('cast') + ': ' + sp.name, t('noSlots'), '✖', 'spell');
      return;
    }
    used[lv0] = (used[lv0] || 0) + 1;
    // Запам'ятовуємо рівень касту: кнопки шкоди/лікування використовуватимуть саме його
    if (!ch.playState.lastCastLv) ch.playState.lastCastLv = {};
    ch.playState.lastCastLv[sp.id] = lv0 + 1;
    handleConcentration(sp);
    persist();
    logRoll(t('cast') + ': ' + sp.name, t('castUsedSlot') + ' ' + (lv0 + 1), '✔', 'spell');
    var ri = spellRollInfo(sp);
    var castLv = lv0 + 1;
    if (ri.heal && ri.heal.flat) {
      // Фіксоване лікування (без кубиків), напр. Heal: 70 + 10 за рівень слота вище базового
      var extraLv = Math.max(0, castLv - sp.level);
      var flatTotal = ri.heal.flat + (ri.upcastHealFlat || 0) * extraLv;
      logRoll(t('healRoll') + ': ' + sp.name, '—', flatTotal, 'heal');
    } else if (ri.heal) {
      var hd = scaledSpellDice(ri.heal, ri.upcastHeal, castLv, sp.level);
      var hmod = (ri.heal.addMod ? abilityMod((spellcastingInfo() || { ability: 'wis' }).ability) : 0) + hd.flat + (ri.healBonus || 0);
      rollDamage(t('healRoll') + ': ' + sp.name, hd.n + 'd' + hd.d, hmod, { type: 'heal' });
    } else if (ri.damage.length) {
      var dd = scaledSpellDice(ri.damage[0], upcastApplies(ri, 0) ? ri.upcast : null, castLv, sp.level);
      rollDamage(t('spellDamageRoll') + ': ' + sp.name, dd.n + 'd' + dd.d, (ri.flatBonus || 0) + dd.flat, { type: 'spell' });
    }
    // Миттєве оновлення кружечків слотів незалежно від активної вкладки
    renderHeader();
    renderTab();
  }
  // Вибір рівня слота для касту (для не-замовлянь)
  function openCastModal(sp) {
    if (!sp) return;
    if (sp.level === 0) { castCantrip(sp); return; }
    var slots = spellSlots();
    var used = ch.playState.slotsUsed;
    var opts = [];
    for (var lv = sp.level - 1; lv < 9; lv++) {
      if (slots[lv] > 0) opts.push({ lv0: lv, free: slots[lv] - (used[lv] || 0) });
    }
    if (!opts.length) { logRoll(t('cast') + ': ' + sp.name, t('noSlots'), '✖', 'spell'); return; }
    var avail = opts.filter(function (o) { return o.free > 0; });
    if (avail.length === 1 && avail[0].lv0 === sp.level - 1 && opts.length === 1) {
      castSpellAtLevel(sp, avail[0].lv0); // єдиний можливий варіант — без модалки
      return;
    }
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-sm" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('castAtLevel')) + ': ' + esc(sp.name) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="p-4 flex flex-col gap-2">' +
          opts.map(function (o) {
            var disabled = o.free <= 0;
            return '<button data-castlv="' + o.lv0 + '"' + (disabled ? ' disabled' : '') +
              ' class="flex items-center justify-between gap-2 border rounded-md px-3 py-2 text-sm font-bold transition ' +
              (disabled ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-700 hover:border-forest') + '">' +
              '<span>' + esc(t('slotLevel')) + ' ' + (o.lv0 + 1) + '</span>' +
              '<span class="font-mono text-xs ' + (disabled ? 'text-slate-300' : 'text-forest') + '">' + o.free + '/' + spellSlots()[o.lv0] + ' ' + esc(t('freeSlots')) + '</span></button>';
          }).join('') +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    Array.prototype.forEach.call(overlay.querySelectorAll('[data-castlv]'), function (b) {
      if (b.disabled) return;
      b.onclick = function () { close(); castSpellAtLevel(sp, parseInt(b.getAttribute('data-castlv'))); };
    });
  }

  // ---------- Зброя ----------
  function resolveWeapon(row) {
    if (!row) return null;
    if (row.kind === 'custom') {
      return { kind: 'custom', name: row.name || '—', damage: row.damage || '1d4', damageType: row.damageType || '', ability: row.ability || 'str', ranged: !!row.ranged };
    }
    var list = typeof DND_WEAPONS !== 'undefined' ? DND_WEAPONS : [];
    var w = list.find(function (x) { return x.id === row.weaponId; });
    // ВАЖЛИВО: передаємо id та category — без них перевірка володіння не працює
    return w ? { id: w.id, name: w.name, damage: w.damage, damageType: w.damageType, ability: w.ability, ranged: !!w.ranged, properties: w.properties, category: w.category, weight: w.weight } : null;
  }
  function weaponAbilityMod(w) {
    if (!w) return 0;
    if (w.ability === 'finesse' || (Array.isArray(w.properties) && w.properties.indexOf('finesse') >= 0)) {
      return Math.max(abilityMod('str'), abilityMod('dex'));
    }
    return abilityMod(w.ability === 'dex' ? 'dex' : w.ability === 'finesse' ? 'dex' : w.ability || 'str');
  }
  function hasProp(w, prop) { return Array.isArray(w && w.properties) && w.properties.indexOf(prop) >= 0; }
  // Володіння зброєю: структурована таблиця за id класу та id зброї — без текстових евристик
  var WEAPON_PROF_BY_CLASS = {
    barbarian: { simple: true, martial: true },
    fighter:   { simple: true, martial: true },
    paladin:   { simple: true, martial: true },
    ranger:    { simple: true, martial: true },
    bard:      { simple: true, extra: ['crossbowhand', 'longsword', 'rapier', 'shortsword'] },
    cleric:    { simple: true },
    warlock:   { simple: true },
    artificer: { simple: true },
    monk:      { simple: true, extra: ['shortsword'] },
    rogue:     { simple: true, extra: ['crossbowhand', 'longsword', 'rapier', 'shortsword'] },
    druid:     { extra: ['club', 'dagger', 'dart', 'javelin', 'mace', 'quarterstaff', 'scimitar', 'sickle', 'sling', 'spear'] },
    sorcerer:  { extra: ['dagger', 'dart', 'sling', 'quarterstaff', 'crossbowlight'] },
    wizard:    { extra: ['dagger', 'dart', 'sling', 'quarterstaff', 'crossbowlight'] },
  };
  // Підкласи, що додають володіння бойовою зброєю (ключ — classId:subclassId)
  var SUBCLASS_MARTIAL_PROF = { 'cleric:war': true, 'cleric:tempest': true, 'bard:valor': true };
  // Об'єднане володіння: основний клас + мультиклас (ch.classes / ch.multiclass, якщо є) + підклас
  function combinedWeaponProf() {
    var classIds = [ch.classId];
    // Підтримка мультикласу: масив id класів або об'єктів { classId }
    var extraClasses = ch.classes || ch.multiclass;
    if (Array.isArray(extraClasses)) {
      extraClasses.forEach(function (c) {
        var cid = typeof c === 'string' ? c : (c && c.classId);
        if (cid && classIds.indexOf(cid) < 0) classIds.push(cid);
      });
    }
    var merged = { simple: false, martial: false, extra: [] };
    classIds.forEach(function (cid) {
      var p = WEAPON_PROF_BY_CLASS[cid];
      if (!p) return;
      if (p.simple) merged.simple = true;
      if (p.martial) merged.martial = true;
      (p.extra || []).forEach(function (id) { if (merged.extra.indexOf(id) < 0) merged.extra.push(id); });
    });
    // Підклас основного класу може додати бойову зброю
    var sub = subclassObj();
    // Надійний ключ підкласу: sub.id може бути відсутнім, якщо підклас зматчився за назвою —
    // тоді пробуємо ch.subclassId, збережений у персонажі
    if (sub && (SUBCLASS_MARTIAL_PROF[ch.classId + ':' + (sub.id || '')] || SUBCLASS_MARTIAL_PROF[ch.classId + ':' + (ch.subclassId || '')])) merged.martial = true;
    // Риси (feats) можуть додавати володіння зброєю — готово до майбутніх даних:
    // { weaponProfSimple: true, weaponProfMartial: true, weaponProfExtra: ['longsword', ...] }
    selectedFeats().forEach(function (f) {
      if (f.weaponProfSimple) merged.simple = true;
      if (f.weaponProfMartial) merged.martial = true;
      (f.weaponProfExtra || []).forEach(function (id) { if (merged.extra.indexOf(id) < 0) merged.extra.push(id); });
    });
    return merged;
  }
  function isWeaponProficient(w) {
    if (!w) return false;
    if (w.kind === 'custom') return true; // власна зброя — вважаємо, що володіє
    var p = combinedWeaponProf();
    // category локалізована: uk «Проста»/«Бойова», en "Simple"/"Martial"
    var isSimple = w.category === 'Simple' || w.category === 'Проста';
    var isMartial = w.category === 'Martial' || w.category === 'Бойова';
    if (isSimple && p.simple) return true;
    if (isMartial && p.martial) return true;
    return !!(w.id && p.extra.indexOf(w.id) >= 0);
  }
  // Бонус влучання: модифікатор + майстерність (якщо володіє) + Стрільба (+2 дальнобійна)
  function weaponAttackBonus(w) {
    if (!w) return 0;
    var b = weaponAbilityMod(w);
    if (isWeaponProficient(w)) b += profBonus(ch.level || 1);
    if (ch.fightingStyle === 'archery' && w.ranged) b += 2;
    b += cm('attack');
    return b;
  }
  // Кількість атак за дію: Extra Attack (воїн 5/11/20 → 2/3/4; варвар/паладин/рейнджер/монах 5+ → 2)
  function attacksPerAction() {
    var n = 1;
    var entries = multiclassEntries() || [{ classId: ch.classId, level: ch.level || 1 }];
    entries.forEach(function (e) {
      var lvl = e.level || 0;
      if (e.classId === 'fighter') n = Math.max(n, lvl >= 20 ? 4 : lvl >= 11 ? 3 : lvl >= 5 ? 2 : 1);
      if (['barbarian', 'paladin', 'ranger', 'monk'].indexOf(e.classId) >= 0 && lvl >= 5) n = Math.max(n, 2);
      if (e.classId === 'bard') {
        var sub = subclassObj();
        if (sub && sub.id === 'valor' && lvl >= 6) n = Math.max(n, 2);
      }
    });
    return n;
  }
  // Бонус шкоди Люті (2014): +2 (1–8), +3 (9–15), +4 (16+) до ближніх атак STR-зброєю
  function rageDamageBonus() {
    var lvl = classLevelFor('barbarian') || (ch.classId === 'barbarian' ? (ch.level || 1) : 0);
    if (!lvl) return 0;
    return lvl >= 16 ? 4 : lvl >= 9 ? 3 : 2;
  }
  // Чи застосовується бонус Люті до цієї зброї: активна Лють + ближня атака з використанням Сили
  function rageApplies(w) {
    if (!ch.playState.rageActive || !w || w.ranged) return false;
    var usesStr = !(hasProp(w, 'finesse') && abilityMod('dex') > abilityMod('str')) && w.ability !== 'dex';
    return usesStr;
  }
  // Кістка бойових мистецтв монаха: d4 (1–4), d6 (5–10), d8 (11–16), d10 (17+)
  function martialArtsDie() {
    var lvl = classLevelFor('monk') || (ch.classId === 'monk' ? (ch.level || 1) : 0);
    if (!lvl) return null;
    return '1d' + (lvl >= 17 ? 10 : lvl >= 11 ? 8 : lvl >= 5 ? 6 : 4);
  }
  // Бонус шкоди: модифікатор + Дуелянт (+2 одноручна ближня) + Метальна зброя (+2 thrown) + Лють + довільні модифікатори
  function weaponDamageBonus(w) {
    if (!w) return 0;
    var b = weaponAbilityMod(w);
    if (ch.fightingStyle === 'dueling' && !w.ranged && !hasProp(w, 'two-handed')) b += 2;
    if (ch.fightingStyle === 'thrown' && hasProp(w, 'thrown')) b += 2;
    if (rageApplies(w)) b += rageDamageBonus();
    b += cm('damage');
    return b;
  }
  // Чи діє Великозбройний бій (перекидання 1 і 2 на кубиках шкоди)
  function weaponUsesGWF(w) {
    return ch.fightingStyle === 'great_weapon' && !w.ranged && (hasProp(w, 'two-handed') || hasProp(w, 'versatile'));
  }
  function weaponDamageRoll(w, opts) {
    if (!w) return;
    rollDamage(t('damageRoll') + ': ' + w.name, w.damage, weaponDamageBonus(w), { gwf: weaponUsesGWF(w), type: 'damage', crit: !!(opts && opts.crit) });
  }

  // ---------- Кидки кубиків ----------
// Журнал кидків: відновлюємо збережені записи з ch.playState.rollLog (item 15)
  var rollLog = (ch.playState.rollLog || []).map(function (r) {
    return { label: r.label, detail: r.detail, total: r.total, type: r.type || '', time: r.time ? new Date(r.time) : new Date() };
  });
  function d(sides) { return 1 + Math.floor(Math.random() * sides); }
  function logRoll(label, detail, total, type) {
  rollLog.unshift({ label: label, detail: detail, total: total, type: type || '', time: new Date() });
  if (rollLog.length > 40) rollLog.pop();
  // Опційне збереження останніх кидків (обмежено 40 записами, час — ISO-рядок)
  ch.playState.rollLog = rollLog.map(function (r) {
    return { label: r.label, detail: r.detail, total: r.total, type: r.type, time: r.time instanceof Date ? r.time.toISOString() : r.time };
  });
  persist();
  renderRollLog();
  }
  // Перешкода від виснаження: 1+ — перевірки характеристик і навичок; 3+ — атаки та рятунки
  // Редакція 2024: кожен рівень виснаження дає −2 до кожного кидка d20
  function exhaustionPenalty() {
    var exh = (ch.playState && ch.playState.exhaustion) || 0;
    return -2 * exh;
  }
  // Перешкода від активних станів (індекси CONDS): Blinded 0, Frightened 3, Poisoned 9, Prone 10, Restrained 11
  // opts.ability — ключ характеристики для рятунків (Restrained → перешкода на рятунки СПР)
  function conditionDisadvantage(kind, opts) {
    var conds = (ch.playState && ch.playState.conditions) || [];
    var has = function (i) { return conds.indexOf(i) >= 0; };
    var reasons = [];
    if (has(0) && kind === 'attack') reasons.push(t('condBlinded'));
    if (has(9) && (kind === 'attack' || kind === 'check' || kind === 'skill')) reasons.push(t('condPoisoned'));
    if (has(10) && kind === 'attack') reasons.push(t('condProne'));
    if (has(11) && (kind === 'attack' || (kind === 'save' && opts && opts.ability === 'dex'))) reasons.push(t('condRestrained'));
    if (has(3) && (kind === 'attack' || kind === 'check' || kind === 'skill')) reasons.push(t('condFrightened'));
    return reasons;
  }
  // Перевага від власних станів: Невидимий (6) — перевага на власні атаки
  function conditionAdvantage(kind) {
    var conds = (ch.playState && ch.playState.conditions) || [];
    var reasons = [];
    if (conds.indexOf(6) >= 0 && kind === 'attack') reasons.push(t('condInvisible'));
    return reasons;
  }
  // Стани ЦІЛІ (перемикачі біля кнопок атаки): Prone/Restrained/Blinded на цілі → перевага;
  // Invisible ціль → перешкода. Повертає { adv: [...], dis: [...] }
  function targetConditionMods(kind) {
    var out = { adv: [], dis: [] };
    if (kind !== 'attack') return out;
    var tc = (ch.playState && ch.playState.targetConds) || [];
    if (tc.indexOf('prone') >= 0) out.adv.push(t('targetPrefix') + ': ' + t('condProne'));
    if (tc.indexOf('restrained') >= 0) out.adv.push(t('targetPrefix') + ': ' + t('condRestrained'));
    if (tc.indexOf('blinded') >= 0) out.adv.push(t('targetPrefix') + ': ' + t('condBlinded'));
    if (tc.indexOf('invisible') >= 0) out.dis.push(t('targetPrefix') + ': ' + t('condInvisible'));
    return out;
  }
  // Головний кидок d20. opts: { advantage, disadvantage, ability, noMode (ігнорувати nextRollMode) }
  // Джерела переваги/перешкоди комбінуються за правилами: будь-яка перевага + будь-яка перешкода = звичайний кидок
  var lastD20 = ch.playState.lastD20 || null; // останній кидок для перекидання натхненням (переживає перезавантаження)
  function rollD20(label, mod, type, opts) {
    opts = opts || {};
    var advSources = [], disSources = [];
    if (opts.advantage) advSources.push(opts.advReason || t('advantage'));
    if (opts.disadvantage) disSources.push(t('disadvantage'));
    var exhPen = exhaustionPenalty();
    conditionDisadvantage(type, opts).forEach(function (rr) { disSources.push(rr); });
    conditionAdvantage(type).forEach(function (rr) { advSources.push(rr); });
    var tmods = targetConditionMods(type);
    tmods.adv.forEach(function (rr) { advSources.push(rr); });
    tmods.dis.forEach(function (rr) { disSources.push(rr); });
    // Ручний режим «наступний кидок»: споживається один раз
    if (!opts.noMode && ch.playState.nextRollMode) {
      if (ch.playState.nextRollMode === 'adv') advSources.push(t('nextRollManual'));
      else if (ch.playState.nextRollMode === 'dis') disSources.push(t('nextRollManual'));
      ch.playState.nextRollMode = '';
      persist();
      renderHeader();
    }
    var mode = advSources.length && disSources.length ? 'normal' : advSources.length ? 'adv' : disSources.length ? 'dis' : 'normal';
    var emod = mod + exhPen;
    var r = d(20), detail;
    if (mode !== 'normal') {
      var r2 = d(20);
      var pick = mode === 'adv' ? Math.max(r, r2) : Math.min(r, r2);
      var tag = mode === 'adv' ? t('advantage') : t('disadvantage');
      var src = (mode === 'adv' ? advSources : disSources).join(', ');
      detail = '2d20 (' + tag + (src && src !== tag ? ': ' + src : '') + '): [' + r + ', ' + r2 + '] → ' + pick + ' ' + (emod >= 0 ? '+ ' + emod : '− ' + Math.abs(emod)) + (exhPen ? ' (' + t('exhaustion') + ' ' + exhPen + ')' : '');
      r = pick;
    } else {
      var cancelled = advSources.length && disSources.length;
      detail = 'd20: ' + r + ' ' + (emod >= 0 ? '+ ' + emod : '− ' + Math.abs(emod)) + (exhPen ? ' (' + t('exhaustion') + ' ' + exhPen + ')' : '') + (cancelled ? ' (' + t('advDisCancel') + ')' : '');
    }
    var total = r + emod;
    // Природні 20 та 1 позначаються в журналі
    if (r === 20) detail += ' — 💥 20!';
    else if (r === 1) detail += ' — 💀 1';
    logRoll(label, detail, total, type || 'check');
    // Запам'ятовуємо параметри для перекидання натхненням (модифікатори перераховуються заново); зберігається у playState
    lastD20 = { label: label, mod: mod, type: type, opts: { advantage: opts.advantage, disadvantage: opts.disadvantage, ability: opts.ability, noMode: true } };
    ch.playState.lastD20 = lastD20;
    persist();
    renderRollLog(); // оновити кнопку натхнення
    return { roll: r, total: total };
  }
  // Використання героїчного натхнення: перекидає останній d20 з тими самими модифікаторами
  function useInspirationReroll() {
    if (!ch.playState.inspiration || !lastD20) return;
    ch.playState.inspiration = false;
    persist();
    renderHeader();
    logRoll('★ ' + t('inspiration'), t('inspirationRerollOf') + ' «' + lastD20.label + '»', '↻');
    var p = lastD20;
    lastD20 = null; // натхнення не можна ланцюжити на власний перекид
    rollD20('★ ' + p.label, p.mod, p.type, p.opts);
    lastD20 = null;
    ch.playState.lastD20 = null;
    persist();
    renderRollLog();
  }
  // opts: { gwf: перекидати 1 та 2 один раз, type: тип кидка для логу, crit: подвоїти КУБИКИ (nat 20) }
  function rollDamage(label, dice, mod, opts) {
    opts = opts || {};
    var m = String(dice).match(/(\d+)[dк](\d+)/i);
    var n = m ? parseInt(m[1]) : 1, sides = m ? parseInt(m[2]) : 6;
    if (opts.crit) { n *= 2; label = '💥 ' + label + ' (' + t('crit') + ')'; }
    var rolls = [], sum = 0, rerolled = false;
    for (var i = 0; i < n; i++) {
      var r = d(sides);
      if (opts.gwf && r <= 2) { r = d(sides); rerolled = true; }
      rolls.push(r); sum += r;
    }
    var total = sum + (mod || 0);
    var detail = n + 'd' + sides + ': [' + rolls.join(', ') + ']' + (mod ? (mod >= 0 ? ' + ' + mod : ' − ' + Math.abs(mod)) : '') + (rerolled ? ' (' + t('gwfNote') + ')' : '');
    logRoll(label, detail, total, opts.type || 'damage');
  }
  function renderRollLog() {
    var box = document.getElementById('ps-roll-log');
    if (!box) return;
    if (!rollLog.length) {
      box.innerHTML = '<p class="text-xs text-slate-500 py-2">' + esc(t('emptyLog')) + '</p>';
      return;
    }
    // Кнопка «Використати натхнення»: перекидає останній d20, якщо натхнення активне
    var inspHtml = (ch.playState.inspiration && lastD20)
      ? '<button id="ps-insp-reroll" class="w-full mb-2 text-xs font-bold border-2 border-amber-400 bg-amber-50 text-amber-800 rounded-lg px-3 py-1.5 hover:bg-amber-100 transition">★ ' + esc(t('useInspiration')) + ': «' + esc(lastD20.label) + '»</button>'
      : '';
    var TYPE_LABEL = { attack: t('typeAttack'), save: t('typeSave'), skill: t('typeSkill'), spell: t('typeSpell'), heal: t('typeHeal'), damage: t('typeDamage'), check: t('typeCheck') };
    var TYPE_COLOR = { attack: 'bg-red-50 text-red-700 border-red-200', save: 'bg-sky-50 text-sky-700 border-sky-200', skill: 'bg-amber-50 text-amber-700 border-amber-200', spell: 'bg-forest/10 text-forest border-forest/20', heal: 'bg-green-50 text-green-700 border-green-200', damage: 'bg-orange-50 text-orange-700 border-orange-200', check: 'bg-slate-50 text-slate-600 border-slate-200' };
    box.innerHTML = inspHtml + rollLog.map(function (r) {
      var chip = r.type && TYPE_LABEL[r.type]
        ? '<span class="inline-block text-[9px] font-bold uppercase border rounded px-1 py-px mr-1 align-middle ' + (TYPE_COLOR[r.type] || TYPE_COLOR.check) + '">' + esc(TYPE_LABEL[r.type]) + '</span>'
        : '';
      return '<div class="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100 last:border-0">' +
        '<div class="min-w-0"><div class="text-xs font-bold text-slate-700 truncate">' + chip + esc(r.label) + '</div>' +
        '<div class="text-[11px] text-slate-500 truncate">' + esc(r.detail) + '</div></div>' +
        '<div class="shrink-0 font-mono font-bold text-lg text-forest">' + r.total + '</div></div>';
    }).join('');
    var inspBtn = document.getElementById('ps-insp-reroll');
    if (inspBtn) inspBtn.onclick = useInspirationReroll;
  }

  // ---------- Шапка ----------
  function renderHeader() {
    var box = document.getElementById('ps-header');
    if (!box) return;
    var c = cls(), r = race();
    var name = ch.description.name || rec.name || '—';
    var meta = [r ? r.name : null, c ? c.name : null].filter(Boolean).join(' • ');
    var mx = maxHP(), cur = currentHP();
    box.innerHTML =
      '<div class="flex flex-wrap items-center justify-between gap-4">' +
        '<div class="min-w-0 flex items-center gap-3">' +
          // Портрет: клік — змінити URL зображення
          '<button id="ps-avatar" title="' + esc(t('avatar')) + '" class="shrink-0 w-14 h-14 rounded-full border-2 border-forest overflow-hidden bg-slate-100 flex items-center justify-center text-2xl hover:opacity-80 transition">' +
            (ch.avatarUrl ? '<img src="' + esc(ch.avatarUrl) + '" alt="' + esc(name) + '" class="w-full h-full object-cover" />' : '🧙') + '</button>' +
          '<div class="min-w-0">' +
          '<h1 class="font-heading text-2xl md:text-3xl font-bold text-forest leading-tight text-balance">' + esc(name) + '</h1>' +
          '<p class="text-sm text-slate-500 mt-0.5">' + esc(meta) + (meta ? ' • ' : '') + esc(t('level')) + ' ' +
            // Зміна рівня прямо на аркуші (кнопки − / +)
            '<button id="ps-lvl-dec" class="inline-flex w-5 h-5 items-center justify-center rounded border border-slate-300 text-xs font-bold text-slate-500 hover:border-forest align-middle" aria-label="−1 ' + esc(t('level')) + '">−</button> ' +
            '<span class="font-bold text-forest">' + (ch.level || 1) + '</span> ' +
            '<button id="ps-lvl-inc" class="inline-flex w-5 h-5 items-center justify-center rounded border border-slate-300 text-xs font-bold text-slate-500 hover:border-forest align-middle" aria-label="+1 ' + esc(t('level')) + '">+</button></p>' +
          '</div></div>' +
        '<div class="flex flex-wrap items-stretch gap-2">' +
          '<div class="bg-white border border-slate-200 rounded-md px-3 py-2 text-center shadow-sm">' +
            '<div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('ac')) + '</div>' +
            '<div id="ps-ac" class="font-mono font-bold text-2xl text-forest">' + calcAC() + '</div>' +
          '</div>' +
          '<div class="bg-white border border-slate-200 rounded-md px-3 py-2 text-center shadow-sm">' +
            '<div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('hp')) + (ch.playState.tempHP > 0 ? ' <span class="text-sky-600">+' + ch.playState.tempHP + ' ' + esc(t('tempHP')) + '</span>' : '') + '</div>' +
            '<div class="flex items-center gap-2 justify-center">' +
              '<button id="ps-hp-minus" class="w-7 h-7 rounded-md border border-slate-300 bg-white font-bold text-slate-600 hover:border-forest transition" aria-label="-1 HP">−</button>' +
              '<span class="font-mono font-bold text-2xl text-forest"><span id="ps-hp-cur">' + cur + '</span><span class="text-sm text-slate-400">/' + mx + '</span></span>' +
              '<button id="ps-hp-plus" class="w-7 h-7 rounded-md border border-slate-300 bg-white font-bold text-slate-600 hover:border-forest transition" aria-label="+1 HP">+</button>' +
            '</div>' +
            '<div class="flex items-center gap-1.5 mt-1.5">' +
              '<input id="ps-hp-amount" type="number" min="1" value="1" aria-label="' + esc(t('amount')) + '" class="w-14 border border-slate-300 rounded-lg px-1.5 py-1 text-xs font-mono bg-white text-center">' +
              '<button id="ps-hp-dmg" class="text-[11px] font-bold border border-red-300 text-red-600 rounded-lg px-2 py-1 hover:bg-red-50 transition">' + esc(t('applyDamage')) + '</button>' +
              '<button id="ps-hp-heal" class="text-[11px] font-bold border border-[#22C55E] text-forest rounded-lg px-2 py-1 hover:bg-green-50 transition">' + esc(t('applyHeal')) + '</button>' +
              '<button id="ps-hp-temp" class="text-[11px] font-bold border border-sky-300 text-sky-600 rounded-lg px-2 py-1 hover:bg-sky-50 transition">' + esc(t('tempHP')) + '</button>' +
            '</div>' +
          '</div>' +
          '<div class="bg-white border border-slate-200 rounded-md px-3 py-2 text-center shadow-sm">' +
            '<div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('initiative')) + '</div>' +
            '<button id="ps-init-roll" class="font-mono font-bold text-2xl text-forest hover:text-[#16a34a] transition" title="' + esc(t('roll')) + '">' + fmtMod(initiativeBonus()) + ' 🎲</button>' +
          '</div>' +
          '<div class="bg-white border border-slate-200 rounded-md px-3 py-2 text-center shadow-sm">' +
            '<div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('profBonus')) + '</div>' +
            '<div class="font-mono font-bold text-2xl text-forest">+' + profBonus(ch.level || 1) + '</div>' +
          '</div>' +
          '<div class="self-center flex flex-col gap-1.5">' +
            '<button id="ps-long-rest" class="text-sm font-bold border-2 border-[#22C55E] bg-[#22C55E] text-white rounded-lg px-3 py-2 hover:bg-[#16a34a] transition">' + esc(t('longRest')) + '</button>' +
            '<button id="ps-short-rest" class="text-xs font-bold border border-slate-300 bg-white text-slate-700 rounded-lg px-3 py-1.5 hover:border-forest transition">' + esc(t('shortRest')) + '</button>' +
            // Мультиклас: окрема кнопка на кожен пул кісток хітів (вибір типу кістки); один клас — одна кнопка
            hitDicePools().map(function (p, pi) {
              var left = p.total - p.used;
              return '<button data-hd-pool="' + pi + '" ' + (left <= 0 ? 'disabled ' : '') + 'class="text-xs font-bold border border-amber-300 bg-white text-amber-700 rounded-lg px-3 py-1.5 hover:bg-amber-50 transition disabled:opacity-40 disabled:cursor-not-allowed">🎲 ' + esc(t('hitDice')) + ' ' + left + 'd' + p.sides + '</button>';
            }).join('') +
            '<button id="ps-inspiration" aria-pressed="' + (ch.playState.inspiration ? 'true' : 'false') + '" class="text-xs font-bold border rounded-lg px-3 py-1.5 transition ' + (ch.playState.inspiration ? 'border-amber-400 bg-amber-100 text-amber-800 hover:bg-amber-200' : 'border-slate-300 bg-white text-slate-500 hover:border-amber-400') + '">★ ' + esc(t('inspiration')) + '</button>' +
            ((ch.playState.concQueue || []).length > 0 ? '<button id="ps-conc-save" class="text-xs font-bold border-2 border-red-400 bg-red-50 text-red-700 rounded-lg px-3 py-1.5 hover:bg-red-100 transition animate-pulse">' + esc(t('rollConcSave')) + ' (DC ' + ch.playState.concQueue[0] + (ch.playState.concQueue.length > 1 ? ', ×' + ch.playState.concQueue.length : '') + ')</button>' : '') +
            '<span class="inline-flex rounded-lg border border-slate-300 overflow-hidden" role="group" aria-label="' + esc(t('nextRollLabel')) + '">' +
              '<button data-rollmode="adv" aria-pressed="' + (ch.playState.nextRollMode === 'adv') + '" class="text-xs font-bold px-2.5 py-1.5 transition ' + (ch.playState.nextRollMode === 'adv' ? 'bg-[#22C55E] text-white' : 'bg-white text-slate-500 hover:bg-green-50') + '">' + esc(t('advShort')) + '</button>' +
              '<button data-rollmode="dis" aria-pressed="' + (ch.playState.nextRollMode === 'dis') + '" class="text-xs font-bold px-2.5 py-1.5 border-l border-slate-300 transition ' + (ch.playState.nextRollMode === 'dis' ? 'bg-red-500 text-white' : 'bg-white text-slate-500 hover:bg-red-50') + '">' + esc(t('disShort')) + '</button>' +
            '</span>' +
          '</div>' +
        '</div>' +
        // Панель інструментів: довільні модифікатори, експорт/імпорт JSON, друк; підказка Shift/Alt
        '<div class="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-100">' +
          '<button id="ps-custom-mods" class="text-[11px] font-bold border border-slate-300 bg-white text-slate-600 rounded-lg px-2.5 py-1 hover:border-forest transition">⚙ ' + esc(t('customMods')) + '</button>' +
          '<button id="ps-export" class="text-[11px] font-bold border border-slate-300 bg-white text-slate-600 rounded-lg px-2.5 py-1 hover:border-forest transition">⬇ ' + esc(t('exportJson')) + '</button>' +
          '<button id="ps-import" class="text-[11px] font-bold border border-slate-300 bg-white text-slate-600 rounded-lg px-2.5 py-1 hover:border-forest transition">⬆ ' + esc(t('importJson')) + '</button>' +
          '<button id="ps-print" class="text-[11px] font-bold border border-slate-300 bg-white text-slate-600 rounded-lg px-2.5 py-1 hover:border-forest transition">🖨 ' + esc(t('print')) + '</button>' +
          '<button id="ps-dark" class="text-[11px] font-bold border border-slate-300 bg-white text-slate-600 rounded-lg px-2.5 py-1 hover:border-forest transition">🌙 ' + esc(t('darkTheme')) + '</button>' +
          '<span class="text-[10px] text-slate-400 ml-auto">' + esc(t('advClick')) + '</span>' +
        '</div>' +
      '</div>';
    document.getElementById('ps-hp-minus').onclick = function () { applyDamage(1); };
    document.getElementById('ps-hp-plus').onclick = function () { applyHeal(1); };
    // Портрет: URL зображення через prompt (порожній — прибрати)
    var avatarBtn = document.getElementById('ps-avatar');
    if (avatarBtn) avatarBtn.onclick = function (ev) {
      // Shift+клік — вставити URL; звичайний клік — завантажити файл
      if (ev && ev.shiftKey) {
        var url = window.prompt(t('avatarUrlLbl'), ch.avatarUrl || '');
        if (url === null) return;
        ch.avatarUrl = url.trim();
        persist(); renderHeader();
        return;
      }
      var inp = document.createElement('input');
      inp.type = 'file'; inp.accept = 'image/*';
      inp.onchange = function () {
        var f = inp.files && inp.files[0];
        if (!f) return;
        if (f.size > 1500000) { window.alert(t('avatarTooLarge')); return; }
        var reader = new FileReader();
        reader.onload = function (e) { ch.avatarUrl = String(e.target.result || ''); persist(); renderHeader(); };
        reader.readAsDataURL(f);
      };
      inp.click();
    };
    // Зміна рівня на аркуші: перераховує все — HP, бонус майстерності, слоти, ресурси
    function changeLevel(delta) {
      var next = Math.max(1, Math.min(20, (ch.level || 1) + delta));
      if (next === ch.level) return;
      // Мультиклас: рівень додається/знімається з ПЕРШОГО класу (основного)
      var mc = multiclassEntries();
      if (mc && mc.length) {
        mc[0].level = Math.max(1, (mc[0].level || 1) + delta);
        ch.level = mc.reduce(function (s, e) { return s + (e.level || 0); }, 0);
      } else {
        ch.level = next;
      }
      logRoll(t('changeLevel'), t('levelChanged') + ': ' + ch.level, ch.level);
      persist();
      renderHeader();
      renderTab();
    }
    var lvlDec = document.getElementById('ps-lvl-dec');
    var lvlInc = document.getElementById('ps-lvl-inc');
    if (lvlDec) lvlDec.onclick = function () { changeLevel(-1); };
    if (lvlInc) lvlInc.onclick = function () { changeLevel(1); };
    // Панель інструментів
    var modsBtn = document.getElementById('ps-custom-mods');
    if (modsBtn) modsBtn.onclick = openCustomModsModal;
    var exportBtn = document.getElementById('ps-export');
    if (exportBtn) exportBtn.onclick = function () {
      // Експорт персонажа у файл JSON (повний запис зі станом)
      var blob = new Blob([JSON.stringify(rec, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (ch.description.name || 'character').replace(/[^\wа-яіїєґА-ЯІЇЄҐ-]+/g, '_') + '.json';
      a.click();
      URL.revokeObjectURL(a.href);
    };
    var importBtn = document.getElementById('ps-import');
    if (importBtn) importBtn.onclick = function () {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json,application/json';
      input.onchange = function () {
        var f = input.files && input.files[0];
        if (!f) return;
        var reader = new FileReader();
        reader.onload = function () {
          try {
            var data = JSON.parse(reader.result);
            var newCh = data.character || data; // приймаємо і повний запис, і сам character
            if (!newCh || !newCh.classId) throw new Error('bad');
            // Імпорт замінює поточного персонажа (зі збереженням id запису)
            rec.character = newCh;
            if (data.name) rec.name = data.name;
            DndStore.save('characters', rec);
            location.reload();
          } catch (e) {
            window.alert(t('importBad'));
          }
        };
        reader.readAsText(f);
      };
      input.click();
    };
    var printBtn = document.getElementById('ps-print');
    if (printBtn) printBtn.onclick = function () { window.print(); };
    document.getElementById('ps-init-roll').onclick = function () { rollD20(t('initiativeRoll'), initiativeBonus()); };
    document.getElementById('ps-long-rest').onclick = longRest;
    document.getElementById('ps-short-rest').onclick = shortRest;
    Array.prototype.forEach.call(box.querySelectorAll('[data-hd-pool]'), function (b) {
      b.onclick = function () { spendHitDie(parseInt(b.getAttribute('data-hd-pool'))); };
    });
    var concSaveBtn = document.getElementById('ps-conc-save');
    if (concSaveBtn) concSaveBtn.onclick = rollConcentrationSave;
    // Героїчне натхнення: перемикач наявності. Фактичне ВИКОРИСТАННЯ — кнопка перекиду в журналі кидків
    var inspBtn = document.getElementById('ps-inspiration');
    if (inspBtn) inspBtn.onclick = function () {
      if (ch.playState.inspiration) {
        ch.playState.inspiration = false;
        logRoll('★ ' + t('inspiration'), t('inspirationRemoved'), '−');
      } else {
        ch.playState.inspiration = true;
        logRoll('★ ' + t('inspiration'), t('inspirationGained'), '+');
      }
      persist();
      renderHeader();
      renderRollLog(); // показати/сховати кнопку перекиду
    };
    function amount() { var el = document.getElementById('ps-hp-amount'); return Math.max(1, parseInt(el && el.value) || 1); }
    document.getElementById('ps-hp-dmg').onclick = function () { applyDamage(amount()); };
    document.getElementById('ps-hp-heal').onclick = function () { applyHeal(amount()); };
    // Тимчасові хіти не додаються — береться більше значення; менше — тільки з підтвердженням
    document.getElementById('ps-hp-temp').onclick = function () {
      var val = amount();
      var cur = ch.playState.tempHP || 0;
      if (val < cur) {
        if (!window.confirm(t('tempHPReplaceConfirm') + ' (' + cur + ' → ' + val + ')')) {
          logRoll(t('tempHP'), t('tempHPKept') + ': ' + cur, cur);
          return;
        }
      }
      ch.playState.tempHP = Math.max(val, val < cur ? val : cur); // менше — лише після підтвердження
      persist();
      renderHeader();
    };
    // Перемикач «наступний кидок: перевага/перешкода» (повторний клік — вимкнути)
    Array.prototype.forEach.call(box.querySelectorAll('[data-rollmode]'), function (b) {
      b.onclick = function () {
        var m = b.getAttribute('data-rollmode');
        ch.playState.nextRollMode = ch.playState.nextRollMode === m ? '' : m;
        persist();
        renderHeader();
      };
    });
  }
  // Індекс стану «Непритомний» (Unconscious) у списку CONDS
  var COND_UNCONSCIOUS = 13;
  // Шкода: спершу з'їдає тимчасові хіти, решта — з поточних
  function applyDamage(n) {
    n = Math.max(0, n);
    var rawDamage = n; // повна отримана шкода (включно з поглинутою тимчасовими хітами) — для DC концентрації
    var temp = ch.playState.tempHP || 0;
    if (temp > 0) {
      var absorbed = Math.min(temp, n);
      ch.playState.tempHP = temp - absorbed;
      n -= absorbed;
    }
    var before = currentHP();
    inv.hpCurrent = Math.max(0, before - n);
    // Падіння до 0 HP: автоматично «Непритомний» + підказка про рятунки від смерті
    if (before > 0 && inv.hpCurrent === 0) {
      var conds = ch.playState.conditions = ch.playState.conditions || [];
      if (conds.indexOf(COND_UNCONSCIOUS) < 0) conds.push(COND_UNCONSCIOUS);
      logRoll(t('droppedToZero'), t('deathSavesHint'), '0', 'damage');
    }
    // Активна концентрація + отримана шкода → CON-рятунок з DC = max(10, floor(шкода/2)).
    // Кожен удар додає окремий DC у чергу — кілька ударів = кілька рятунків
    if (ch.playState.concentration && rawDamage > 0) {
      if (inv.hpCurrent === 0) {
        // Непритомність автоматично перериває концентрацію
        var csp0 = spellById(ch.playState.concentration);
        ch.playState.concentration = '';
        ch.playState.concDC = 0;
        ch.playState.concQueue = [];
        logRoll(t('concentrationBroken') + (csp0 ? ': ' + csp0.name : ''), t('droppedToZero'), '✖', 'spell');
      } else {
        var dcNew = Math.max(10, Math.floor(rawDamage / 2));
        ch.playState.concQueue.push(dcNew);
        ch.playState.concDC = ch.playState.concQueue[0]; // наступний у черзі (для сумісності зі старим полем)
        logRoll(t('concSavePrompt'), t('concSaveDCIs') + ' ' + dcNew + (ch.playState.concQueue.length > 1 ? ' (' + t('concSavesQueued') + ': ' + ch.playState.concQueue.length + ')' : ''), '?', 'save');
      }
    }
    persist();
    renderHeader();
    if (activeTab === 'extras' || activeTab === 'spells') renderTab();
  }
  // Рятунок концентрації: d20 + CON (+ майстерність за володіння CON-рятунком).
  // War Caster дає перевагу. Обробляє чергу DC по одному; провал скасовує решту черги
  function rollConcentrationSave() {
    var queue = ch.playState.concQueue || [];
    var dc = queue.length ? queue.shift() : (ch.playState.concDC || 10);
    var saves = saveProficiencies();
    var mod = abilityMod('con') + (saves.con ? profBonus(ch.level || 1) : 0);
    // Структурований прапорець advantageConcentration — основний; id — запасний варіант
    var hasWarCaster = selectedFeats().some(function (f) { return f.advantageConcentration || f.id === 'warcaster' || f.id === 'war_caster'; });
    var res = rollD20(t('concSaveRoll') + ' (DC ' + dc + ')', mod, 'save',
      hasWarCaster ? { advantage: true, advReason: t('warCasterAdv'), ability: 'con', noMode: true } : { ability: 'con', noMode: true });
    if (res.total >= dc) {
      logRoll(t('concSaveSuccess'), res.total + ' >= ' + dc, '✔', 'save');
      ch.playState.concDC = queue.length ? queue[0] : 0; // наступний DC у черзі (якщо є)
    } else {
      var csp = spellById(ch.playState.concentration);
      ch.playState.concentration = '';
      ch.playState.concQueue = []; // концентрацію вже втрачено — решта рятунків не потрібна
      ch.playState.concDC = 0;
      logRoll(t('concentrationBroken') + (csp ? ': ' + csp.name : ''), res.total + ' < ' + dc, '✖', 'spell');
    }
    persist();
    renderHeader();
    if (activeTab === 'spells') renderTab();
  }
  function applyHeal(n) {
    var mx = maxHP();
    var before = currentHP();
    inv.hpCurrent = Math.min(mx, before + Math.max(0, n));
    // Лікування з 0 HP: скидаємо рятунки від смерті та знімаємо «Непритомний»
    if (before === 0 && inv.hpCurrent > 0) {
      ch.playState.deathSaves = { s: 0, f: 0 };
      var conds = ch.playState.conditions = ch.playState.conditions || [];
      var ui = conds.indexOf(COND_UNCONSCIOUS);
      if (ui >= 0) conds.splice(ui, 1);
      logRoll(t('healedFromZero'), t('deathSavesReset'), '✔', 'heal');
    }
    persist();
    renderHeader();
    if (activeTab === 'extras') renderTab();
  }
  // Кістки хітів: пул за класами (мультиклас — різні типи кісток); одиночний клас — одна кістка
  function classHitDieSides(classId) {
    var c = typeof DND_CLASSES !== 'undefined' ? DND_CLASSES[classId] : null;
    if (c) { var m = String(c.hitDice).match(/d(\d+)/i); if (m) return parseInt(m[1]); }
    return 8;
  }
  function hitDieSides() { return classHitDieSides(ch.classId); }
  // Пули кісток хітів: [{classId, sides, total, used}]
  function hitDicePools() {
    var mc = multiclassEntries();
    var usedBy = ch.playState.hitDiceUsedByClass || {};
    if (mc) {
      return mc.map(function (e) {
        var total = Math.max(0, parseInt(e.level) || 0);
        return { classId: e.classId, sides: classHitDieSides(e.classId), total: total, used: Math.min(total, usedBy[e.classId] || 0) };
      });
    }
    // Одиночний клас: сумісність зі старим лічильником hitDiceUsed
    var total = Math.max(1, ch.level || 1);
    return [{ classId: ch.classId, sides: hitDieSides(), total: total, used: Math.min(total, ch.playState.hitDiceUsed || 0) }];
  }
  function hitDiceTotal() { return hitDicePools().reduce(function (s, p) { return s + p.total; }, 0); }
  // poolIndex — індекс пулу з hitDicePools() (вибір типу кістки для мультикласу);
  // без аргументу — пул з найбільшою кісткою
  function spendHitDie(poolIndex) {
    var all = hitDicePools();
    var pool = typeof poolIndex === 'number' ? all[poolIndex] : null;
    if (pool && pool.used >= pool.total) pool = null;
    if (!pool) {
      var pools = all.filter(function (p) { return p.used < p.total; });
      if (!pools.length) { logRoll(t('hitDice'), t('noHitDiceLeft'), '✖'); return; }
      pools.sort(function (a, b) { return b.sides - a.sides; });
      pool = pools[0];
    }
    if (multiclassEntries()) {
      var usedBy = ch.playState.hitDiceUsedByClass = ch.playState.hitDiceUsedByClass || {};
      usedBy[pool.classId] = (usedBy[pool.classId] || 0) + 1;
    } else {
      ch.playState.hitDiceUsed = (ch.playState.hitDiceUsed || 0) + 1;
    }
    var sides = pool.sides;
    var r = d(sides);
    var healed = Math.max(0, r + abilityMod('con'));
    logRoll(t('hitDieRoll'), 'd' + sides + ': ' + r + ' ' + (abilityMod('con') >= 0 ? '+ ' + abilityMod('con') : '− ' + Math.abs(abilityMod('con'))), healed, 'heal');
    applyHeal(healed); // applyHeal сам зробить persist + renderHeader
  }
  function longRest() {
    inv.hpCurrent = maxHP();
    ch.playState.slotsUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    ch.playState.res = {}; // всі ресурси класу відновлено
    ch.playState.tempHP = 0;
    ch.playState.deathSaves = { s: 0, f: 0 };
    ch.playState.lastCastLv = {}; // кнопки шкоди/лікування повертаються до базових кубиків
    ch.playState.concentration = ''; // концентрація спадає
    ch.playState.concDC = 0;
    ch.playState.concQueue = [];
    ch.playState.nextRollMode = '';
    ch.playState.targetConds = []; // стани цілі — бойовий контекст, скидаються на відпочинку
    ch.playState.rageActive = false; // Лють завершується
    ch.playState.critPending = -1;
    if (ch.playState.exhaustion > 0) ch.playState.exhaustion -= 1; // long rest знімає 1 рівень виснаження
    // Long rest повертає половину витрачених кісток хітів (мінімум 1) — рівномірно за пулами
    var recover = Math.max(1, Math.floor(hitDiceTotal() / 2));
    if (multiclassEntries()) {
      var usedBy = ch.playState.hitDiceUsedByClass || {};
      Object.keys(usedBy).forEach(function (cid) {
        if (recover <= 0) return;
        var back = Math.min(usedBy[cid] || 0, recover);
        usedBy[cid] -= back;
        recover -= back;
      });
    } else {
      var used = ch.playState.hitDiceUsed || 0;
      if (used > 0) ch.playState.hitDiceUsed = Math.max(0, used - recover);
    }
    persist();
    renderHeader();
    if (activeTab === 'spells' || activeTab === 'features' || activeTab === 'extras') renderTab();
    logRoll(t('longRest'), t('longRestDone'), '✔');
  }
  // Короткий відпочинок: 'short' — усі використання; 'short-one' — лише одне (2024);
  // слоти чаклуна (pact magic) теж відновлюються
  function shortRest() {
    classResources().forEach(function (r) {
      if (r.recharge === 'short') delete ch.playState.res[r.key];
      else if (r.recharge === 'short-one') {
        var used = ch.playState.res[r.key] || 0;
        if (used > 0) ch.playState.res[r.key] = used - 1;
      }
    });
    if (ch.classId === 'warlock') {
      ch.playState.slotsUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      ch.playState.lastCastLv = {}; // pact slots відновлено — скидаємо upcast-рівні кнопок
    }
    persist();
    renderHeader();
    if (activeTab === 'spells' || activeTab === 'features') renderTab();
    logRoll(t('shortRest'), t('shortRestDone'), '✔');
  }

  // ---------- Вкладки ----------
  var TABS = [
    { id: 'combat', label: '⚔ ' + t('combatMode') },
    { id: 'actions', label: t('tabActions') },
    { id: 'spells', label: t('tabSpells') },
    { id: 'inventory', label: t('tabInventory') },
    { id: 'features', label: t('tabFeatures') },
    { id: 'background', label: t('tabBackground') },
    { id: 'notes', label: t('tabNotes') },
    { id: 'extras', label: t('tabExtras') },
  ];
  var activeTab = 'actions';
  function renderTabsNav() {
    var nav = document.getElementById('ps-tabs');
    if (!nav) return;
    nav.innerHTML = TABS.map(function (tab) {
      var act = tab.id === activeTab;
      return '<button data-tab="' + tab.id + '" role="tab" aria-selected="' + act + '" class="whitespace-nowrap px-3 py-2.5 text-xs sm:text-sm font-bold tracking-wide transition border-b-2 ' +
        (act ? 'border-[#14532D] text-forest' : 'border-transparent text-slate-500 hover:text-forest hover:border-slate-300') + '">' + esc(tab.label) + '</button>';
    }).join('');
    Array.prototype.forEach.call(nav.querySelectorAll('button'), function (b) {
      b.onclick = function () { activeTab = b.getAttribute('data-tab'); renderTabsNav(); renderTab(); };
    });
  }
  function renderTab() {
    var box = document.getElementById('ps-tab-content');
    if (!box) return;
    if (activeTab === 'combat') box.innerHTML = tabCombat();
    else if (activeTab === 'actions') box.innerHTML = tabActions();
    else if (activeTab === 'spells') box.innerHTML = tabSpells();
    else if (activeTab === 'inventory') box.innerHTML = tabInventory();
    else if (activeTab === 'features') box.innerHTML = tabFeatures();
    else if (activeTab === 'background') box.innerHTML = tabBackground();
    else if (activeTab === 'notes') box.innerHTML = tabNotes();
    else box.innerHTML = tabExtras();
    bindTab(box);
  }
  function card(title, inner) {
    return '<section class="bg-white border border-slate-200 rounded-md shadow-sm p-4">' +
      '<h2 class="font-heading text-lg font-bold text-forest border-b border-slate-200 pb-2 mb-3">' + esc(title) + '</h2>' + inner + '</section>';
  }
  var btnSm = 'text-xs font-bold border border-slate-300 bg-white text-slate-700 rounded-lg px-2.5 py-1.5 hover:border-forest transition';
  var btnAccentSm = 'text-xs font-bold border-2 border-[#22C55E] bg-[#22C55E] text-white rounded-lg px-2.5 py-1.5 hover:bg-[#16a34a] transition';

  // Спільний список назв станів (індекси спільні для всіх вкладок)
  function condNamesList() {
    return window.PS_LANG === 'en'
      ? ['Blinded', 'Charmed', 'Deafened', 'Frightened', 'Grappled', 'Incapacitated', 'Invisible', 'Paralyzed', 'Petrified', 'Poisoned', 'Prone', 'Restrained', 'Stunned', 'Unconscious']
      : ['Засліплений', 'Зачарований', 'Оглухлий', 'Наляканий', 'Схоплений', 'Недієздатний', 'Невидимий', 'Паралізований', "Скам'янілий", 'Отруєний', 'Лежачий', 'Обплутаний', 'Приголомшений', 'Непритомний'];
  }
  // ---------- Вкладка БОЙОВИЙ РЕЖИМ: компактний мобільний екран — HP, AC, зброя, слоти, стани ----------
  function tabCombat() {
    var pb = profBonus(ch.level || 1);
    var mx = maxHP(), cur = currentHP();
    var hpPct = mx > 0 ? Math.round(cur / mx * 100) : 0;
    var statBox = function (label, value) {
      return '<div class="flex-1 min-w-[70px] bg-white border border-slate-200 rounded-md p-2 text-center">' +
        '<div class="text-[9px] font-bold uppercase text-slate-500">' + esc(label) + '</div>' +
        '<div class="font-mono font-bold text-xl text-forest">' + value + '</div></div>';
    };
    var topHtml = '<div class="flex flex-wrap gap-2">' +
      statBox(t('ac'), calcAC()) +
      statBox(t('initiative'), fmtMod(initiativeBonus())) +
      statBox(t('profBonus'), '+' + pb) +
      statBox(window.PS_LANG === 'en' ? 'Speed' : 'Швидкість', speedValue()) + '</div>' +
      // Смуга HP з великими кнопками для мобільного бою
      '<div class="mt-3 bg-white border border-slate-200 rounded-md p-3">' +
        '<div class="flex items-center justify-between mb-1.5"><span class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('hp')) + '</span>' +
        '<span class="font-mono font-bold text-forest">' + cur + ' / ' + mx + (ch.playState.tempHP > 0 ? ' <span class="text-sky-600 text-xs">+' + ch.playState.tempHP + '</span>' : '') + '</span></div>' +
        '<div class="h-3 rounded-full bg-slate-100 overflow-hidden"><div class="h-full rounded-full ' + (hpPct < 30 ? 'bg-red-500' : 'bg-forest') + '" style="width:' + hpPct + '%"></div></div>' +
        '<div class="flex gap-2 mt-2">' +
          '<button data-cb-hp="-5" class="flex-1 py-2 rounded-lg border border-red-300 bg-red-50 text-red-700 font-bold text-sm hover:bg-red-100 transition">−5</button>' +
          '<button data-cb-hp="-1" class="flex-1 py-2 rounded-lg border border-red-300 bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition">−1</button>' +
          '<button data-cb-hp="1" class="flex-1 py-2 rounded-lg border border-[#22C55E] bg-white text-forest font-bold text-sm hover:bg-green-50 transition">+1</button>' +
          '<button data-cb-hp="5" class="flex-1 py-2 rounded-lg border border-[#22C55E] bg-green-50 text-forest font-bold text-sm hover:bg-green-100 transition">+5</button>' +
        '</div></div>';

    // Зброя — великі кнопки
    var weapons = inv.weaponList.map(resolveWeapon).map(function (w, i) { return { w: w, i: i }; }).filter(function (x) { return !!x.w; });
    var wHtml = weapons.map(function (x) {
      var critHere = ch.playState.critPending === x.i;
      return '<div class="flex items-center gap-2">' +
        '<span class="flex-1 text-sm font-bold text-slate-700 truncate">' + esc(x.w.name) + '</span>' +
        '<button data-roll="watk" data-i="' + x.i + '" class="py-2 px-3 rounded-lg bg-[#22C55E] text-white text-sm font-bold hover:bg-[#16a34a] transition">🎲 ' + fmtMod(weaponAttackBonus(x.w)) + '</button>' +
        '<button data-roll="wdmg" data-i="' + x.i + '" class="py-2 px-3 rounded-lg border ' + (critHere ? 'border-amber-400 bg-amber-100 text-amber-800' : 'border-slate-300 bg-white text-slate-700') + ' text-sm font-bold hover:border-forest transition">' + (critHere ? '💥 ' : '') + esc(x.w.damage) + '</button></div>';
    }).join('');

    // Слоти заклять — компактні кружечки
    var slots = spellSlots();
    var used = ch.playState.slotsUsed;
    var slotsHtml = '';
    for (var lv = 0; lv < 9; lv++) {
      if (!slots[lv]) continue;
      var dots = '';
      for (var i = 0; i < slots[lv]; i++) {
        dots += '<button data-slot-lv="' + lv + '" data-slot-i="' + i + '" class="w-5 h-5 rounded-full border-2 transition ' + (i < (used[lv] || 0) ? 'bg-forest border-forest' : 'bg-white border-slate-300') + '"></button>';
      }
      slotsHtml += '<div class="flex items-center gap-2"><span class="w-5 text-[10px] font-bold text-slate-500">' + (lv + 1) + '</span><div class="flex gap-1 flex-wrap">' + dots + '</div></div>';
    }

    // Активні стани — компактні чипи (клік — зняти)
    var conds = ch.playState.conditions || [];
    var cnames = condNamesList();
    var condsHtml = conds.length
      ? conds.map(function (ci) {
          return '<button data-cond="' + ci + '" class="text-[11px] font-bold border border-red-300 bg-red-50 text-red-700 rounded px-2 py-1">✕ ' + esc(cnames[ci] || ('#' + ci)) + '</button>';
        }).join(' ')
      : '<p class="text-xs text-slate-400">—</p>';

    return topHtml +
      (wHtml ? '<div class="mt-3"></div>' + card(t('weaponAttacks'), '<div class="space-y-2">' + wHtml + '</div>') : '') +
      (slotsHtml ? '<div class="mt-3"></div>' + card(t('spellSlots'), '<div class="space-y-1.5">' + slotsHtml + '</div>') : '') +
      '<div class="mt-3"></div>' + card(t('conditions'), condsHtml);
  }

  // ---------- Вкладка ДІЇ ----------
  function tabActions() {
    var pb = profBonus(ch.level || 1);
    var c = cls();
    var saves = saveProficiencies();
    var abilitiesHtml = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">' + AK.map(function (k) {
      var mod = abilityMod(k) + jackBonus() + cm('checks');
      var saveProf = !!saves[k];
      var saveMod = abilityMod(k) + (saveProf ? pb : 0) + cm('saves');
      return '<div class="border border-slate-200 rounded-md p-3 flex items-center justify-between gap-2">' +
        '<div><div class="text-xs font-bold uppercase text-slate-500">' + esc(AL[k] || k) + '</div>' +
        '<div class="font-mono font-bold text-xl text-forest">' + finalAbility(k) + ' <span class="text-sm text-slate-500">(' + fmtMod(abilityMod(k)) + ')</span></div></div>' +
        '<div class="flex flex-col gap-1.5">' +
        '<button class="' + btnSm + '" data-roll="check" data-k="' + k + '">🎲 ' + esc(t('check')) + ' ' + fmtMod(mod) + '</button>' +
        '<button class="' + btnSm + (saveProf ? ' border-[#22C55E] text-forest' : '') + '" data-roll="save" data-k="' + k + '">🎲 ' + esc(t('save')) + ' ' + fmtMod(saveMod) + (saveProf ? ' ●' : '') + '</button>' +
        '</div></div>';
    }).join('') + '</div>';

    var profs = allSkillProfs();
    var exps = expertiseSet();
    var expLimit = expertiseLimit();
    var jack = jackBonus();
    var skills = typeof ALL_SKILLS !== 'undefined' ? ALL_SKILLS.slice() : [];
    // Підказка Expertise: класи з Expertise можуть позначити зіркою навички з володінням (2× бонус)
    var expHint = expLimit > 0
      ? '<p class="text-[11px] text-slate-500 mb-2">★ ' + esc(t('expertiseHint')) + ' (' + (ch.expertiseSkills || []).length + ' / ' + expLimit + ')</p>'
      : '';
    var skillsHtml = expHint + '<div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">' + skills.map(function (s) {
      var ab = (typeof SKILL_ABILITY !== 'undefined' && SKILL_ABILITY[s]) || 'dex';
      var prof = !!profs[s];
      var expert = prof && !!exps[s];
      // Expertise — 2× бонус; Jack of All Trades — половина бонусу для навичок БЕЗ володіння
      var mod = abilityMod(ab) + (expert ? pb * 2 : prof ? pb : jack) + cm('checks');
      var expBtn = (expLimit > 0 && prof)
        ? '<button data-expertise="' + esc(s) + '" aria-pressed="' + expert + '" title="' + esc(t('expertise')) + '" class="shrink-0 w-6 h-6 rounded-md border text-xs font-bold transition ' +
          (expert ? 'border-amber-400 bg-amber-100 text-amber-700' : 'border-slate-300 bg-white text-slate-400 hover:border-amber-400') + '">★</button>'
        : '';
      return '<div class="flex items-center gap-1.5">' + expBtn +
        '<button data-roll="skill" data-s="' + esc(s) + '" class="flex-1 flex items-center justify-between gap-2 border rounded-md px-3 py-2 text-left transition ' +
        (expert ? 'border-amber-400 bg-amber-50 hover:bg-amber-100' : prof ? 'border-[#22C55E] bg-green-50 hover:bg-green-100' : 'border-slate-200 bg-white hover:border-forest') + '">' +
        '<span class="text-sm ' + (prof ? 'font-bold text-forest' : 'text-slate-700') + '">' + (expert ? '★ ' : prof ? '● ' : '') + esc(s) +
        ' <span class="text-[10px] uppercase text-slate-400">' + esc(AL[ab] || ab) + '</span></span>' +
        '<span class="font-mono font-bold text-forest">' + fmtMod(mod) + ' 🎲</span></button></div>';
    }).join('') + '</div>';

    // Перемикачі станів цілі: Prone/Restrained/Blinded → перевага на атаку; Invisible → перешкода
    var tcActive = ch.playState.targetConds || [];
    var TARGET_OPTS = [
      { id: 'prone', label: t('condProne'), adv: true },
      { id: 'restrained', label: t('condRestrained'), adv: true },
      { id: 'blinded', label: t('condBlinded'), adv: true },
      { id: 'invisible', label: t('condInvisible'), adv: false },
    ];
    var targetHtml = '<div class="flex flex-wrap items-center gap-1.5 mb-3">' +
      '<span class="text-[10px] font-bold uppercase text-slate-500 mr-1">' + esc(t('targetPrefix')) + ':</span>' +
      TARGET_OPTS.map(function (o) {
        var on = tcActive.indexOf(o.id) >= 0;
        return '<button data-target-cond="' + o.id + '" aria-pressed="' + on + '" class="px-2 py-1 rounded-md text-[11px] font-semibold border transition ' +
          (on ? (o.adv ? 'bg-[#22C55E] text-white border-transparent' : 'bg-red-500 text-white border-transparent') : 'bg-white text-slate-500 border-slate-300 hover:border-forest') + '">' +
          esc(o.label) + ' ' + (o.adv ? '↑' : '↓') + '</button>';
      }).join('') + '</div>';

    var weapons = inv.weaponList.map(resolveWeapon).map(function (w, i) { return { w: w, i: i }; }).filter(function (x) { return !!x.w; });
    var weaponsHtml = weapons.length
      ? '<div class="space-y-2">' + weapons.map(function (x) {
          var w = x.w;
          var atk = weaponAttackBonus(w);
          var dmgB = weaponDamageBonus(w);
          var noProf = !isWeaponProficient(w);
          var critHere = ch.playState.critPending === x.i;
          return '<div class="flex flex-wrap items-center justify-between gap-2 border rounded-md px-3 py-2 ' + (critHere ? 'border-amber-400 bg-amber-50' : 'border-slate-200') + '">' +
            '<div><div class="font-bold text-sm text-slate-800">' + esc(w.name) +
            (noProf ? ' <span class="text-[10px] font-bold text-red-600 border border-red-300 bg-red-50 rounded px-1 py-px align-middle">⚠ ' + esc(t('weaponNoProf')) + '</span>' : '') +
            (rageApplies(w) ? ' <span class="text-[10px] font-bold text-red-700 border border-red-300 bg-red-50 rounded px-1 py-px align-middle">' + esc(t('rage')) + ' +' + rageDamageBonus() + '</span>' : '') + '</div>' +
            '<div class="text-xs text-slate-500">' + esc(w.damage) + (w.damageType ? ' • ' + esc(w.damageType) : '') + '</div></div>' +
            '<div class="flex gap-2">' +
            '<button class="' + btnAccentSm + '" data-roll="watk" data-i="' + x.i + '">🎲 ' + esc(t('attack')) + ' ' + fmtMod(atk) + '</button>' +
            '<button class="' + (critHere ? 'text-xs font-bold border-2 border-amber-400 bg-amber-100 text-amber-800 rounded-lg px-2.5 py-1.5 hover:bg-amber-200 transition' : btnSm) + '" data-roll="wdmg" data-i="' + x.i + '">🎲 ' + (critHere ? '💥 ' : '') + esc(t('damage')) + ' ' + esc(w.damage) + (dmgB ? fmtMod(dmgB) : '') + '</button>' +
            '</div></div>';
        }).join('') + '</div>'
      : '<p class="text-sm text-slate-500">' + esc(t('noWeapons')) + '</p>';

    // Класові бойові кнопки: Підступна атака (роуг), Бойові мистецтва (монах), Лють (варвар)
    var extraCombat = '';
    var rogueLvl = classLevelFor('rogue') || (ch.classId === 'rogue' ? (ch.level || 1) : 0);
    if (rogueLvl > 0) {
      extraCombat += '<button class="' + btnSm + '" data-roll="sneak">🗡 ' + esc(t('sneakAttack')) + ' ' + Math.ceil(rogueLvl / 2) + 'd6</button>';
    }
    var maDie = martialArtsDie();
    if (maDie) {
      extraCombat += '<button class="' + btnAccentSm + '" data-roll="unarmed">🎲 ' + esc(t('unarmedStrike')) + ' ' + fmtMod(Math.max(abilityMod('str'), abilityMod('dex')) + pb + cm('attack')) + '</button>' +
        '<button class="' + btnSm + '" data-roll="unarmeddmg">🎲 ' + esc(t('damage')) + ' ' + maDie + fmtMod(Math.max(abilityMod('str'), abilityMod('dex')) + cm('damage')) + '</button>';
    }
    var barbLvl = classLevelFor('barbarian') || (ch.classId === 'barbarian' ? (ch.level || 1) : 0);
    if (barbLvl > 0) {
      var rActive = ch.playState.rageActive;
      extraCombat += '<button id="ps-rage-toggle" aria-pressed="' + rActive + '" class="text-xs font-bold border-2 rounded-lg px-2.5 py-1.5 transition ' +
        (rActive ? 'border-red-500 bg-red-500 text-white hover:bg-red-600' : 'border-red-300 bg-white text-red-600 hover:bg-red-50') + '">🔥 ' +
        esc(t('rage')) + (rActive ? ' (' + esc(t('rageActive')) + ', +' + rageDamageBonus() + ')' : '') + '</button>';
    }
    var extraCombatHtml = extraCombat ? '<div class="flex flex-wrap gap-2 mb-3">' + extraCombat + '</div>' : '';

    // Заголовок зброї з кількістю атак за дію (Extra Attack)
    var apa = attacksPerAction();
    var weaponsTitle = t('weaponAttacks') + (apa > 1 ? ' — ' + t('attacksPerAction') + ': ' + apa : '');

    // Економія дій (як у D&D Beyond): Дія / Бонусна дія / Реакція / Рух
    var econHtml = actionEconomyHtml(apa);

    return card(t('abilities'), abilitiesHtml) +
      '<div class="mt-4"></div>' + card(t('skills'), skillsHtml) +
      '<div class="mt-4"></div>' + card(weaponsTitle, targetHtml + extraCombatHtml + weaponsHtml) +
      '<div class="mt-4"></div>' + card(t('actionEconomy'), econHtml);
  }
  // Довідкова картка економії дій: що персонаж може зробити за Дію / Бонусну дію / Реакцію / Рух
  function actionEconomyHtml(apa) {
    var EN = window.PS_LANG === 'en';
    var spd = speedValue();
    function chips(items) {
      return '<div class="flex flex-wrap gap-1.5">' + items.map(function (s) {
        return '<span class="text-[11px] font-semibold text-slate-600 border border-slate-200 bg-slate-50 rounded px-1.5 py-0.5">' + esc(s) + '</span>';
      }).join('') + '</div>';
    }
    var actions = [(EN ? 'Attack' : 'Атака') + (apa > 1 ? ' ×' + apa : ''), EN ? 'Cast a Spell' : 'Каст закляття', EN ? 'Dash' : 'Ривок', EN ? 'Disengage' : 'Відхід', EN ? 'Dodge' : 'Ухилення', EN ? 'Help' : 'Допомога', EN ? 'Hide' : 'Ховання', EN ? 'Search' : 'Пошук', EN ? 'Use an Object' : 'Використання предмета'];
    var bonus = [];
    if (classLevelFor('barbarian') || ch.classId === 'barbarian') bonus.push(EN ? 'Rage' : 'Лють');
    if (martialArtsDie()) bonus.push(EN ? 'Martial Arts unarmed strike' : 'Беззбройний удар (бойові мистецтва)');
    if ((classLevelFor('rogue') || (ch.classId === 'rogue' ? ch.level : 0)) >= 2) bonus.push(EN ? 'Cunning Action (Dash/Disengage/Hide)' : 'Хитра дія (Ривок/Відхід/Ховання)');
    if (ch.classId === 'fighter' || classLevelFor('fighter')) bonus.push(EN ? 'Second Wind' : 'Друге дихання');
    if (ch.classId === 'bard' || classLevelFor('bard')) bonus.push(EN ? 'Bardic Inspiration' : 'Натхнення барда');
    bonus.push(EN ? 'Off-hand attack (two-weapon fighting)' : 'Атака другою рукою (бій двома клинками)');
    var reactions = [EN ? 'Opportunity Attack' : 'Атака нагоди'];
    reactionSpellNames().forEach(function (n) { reactions.push(n); });
    var move = [(EN ? 'Speed' : 'Швидкість') + ': ' + spd + ' ' + (EN ? 'ft' : 'фт'), EN ? 'Stand up (half speed)' : 'Підвестися (половина руху)'];
    function section(label, inner) {
      return '<div class="border border-slate-200 rounded-md p-3"><div class="text-[10px] font-bold uppercase text-slate-500 mb-1.5">' + esc(label) + '</div>' + inner + '</div>';
    }
    return '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' +
      section(t('econAction'), chips(actions)) +
      section(t('econBonus'), chips(bonus)) +
      section(t('econReaction'), chips(reactions)) +
      section(t('econMove'), chips(move)) + '</div>';
  }
  // Реакційні закляття серед відомих/підготовлених (час касту «1 реакція»)
  function reactionSpellNames() {
    var ids = (ch.spells.cantrips || []).concat(ch.spells.prepared || []).concat(ch.spells.unpreparedKnown || []);
    var out = [];
    ids.forEach(function (id) {
      var sp = spellById(id);
      if (sp && /реакці|reaction/i.test(String(sp.castingTime || ''))) out.push(sp.name);
    });
    return out;
  }

  // ---------- Вкладка ЗАКЛИНАННЯ ----------
  // Ліміти відомих замовлянь/заклять за класом і рівнем (індекс = рівень-1); null — без ліміту (prepared-класи готують зі списку)
  var CANTRIPS_KNOWN_BY_CLASS = {
    bard:     [2,2,2,3,3,3,3,3,3,4], cleric: [3,3,3,4,4,4,4,4,4,5], druid: [2,2,2,3,3,3,3,3,3,4],
    sorcerer: [4,4,4,5,5,5,5,5,5,6], warlock: [2,2,2,3,3,3,3,3,3,4], wizard: [3,3,3,4,4,4,4,4,4,5],
    artificer:[2,2,2,2,2,3,3,3,3,3,3,3,3,4],
  };
  var SPELLS_KNOWN_BY_CLASS = {
    bard:     [4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22],
    sorcerer: [2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15,15],
    warlock:  [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15],
    ranger:   [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11],
  };
  // Ліміти рахуються за рівнем У КЛАСІ-ЗАКЛИНАЧІ (важливо для мультикласу), не за загальним рівнем
  function casterClassId() {
    var info = spellcastingInfo();
    return (info && info.classId) || ch.classId;
  }
  function cantripsKnownLimit() {
    var cid = casterClassId();
    var arr = CANTRIPS_KNOWN_BY_CLASS[cid];
    if (!arr) return null;
    var lvl = Math.max(1, Math.min(20, classLevelFor(cid) || 1));
    return arr[Math.min(lvl, arr.length) - 1];
  }
  function spellsKnownLimit() {
    var cid = casterClassId();
    var arr = SPELLS_KNOWN_BY_CLASS[cid];
    if (!arr) return null;
    var lvl = Math.max(1, Math.min(20, classLevelFor(cid) || 1));
    return arr[lvl - 1];
  }
  // Ліміт підготовлених заклять: рівень у КЛАСІ-ЗАКЛИНАЧІ + модифікатор його характеристики (мін. 1)
  function preparedLimit() {
    var info = spellcastingInfo();
    if (!info) return 0;
    return Math.max(1, (classLevelFor(info.classId || ch.classId) || 1) + abilityMod(info.ability));
  }
  function tabSpells() {
    var info = spellcastingInfo();
    if (!info) return card(t('tabSpells'), '<p class="text-sm text-slate-500">' + esc(t('noSpellcasting')) + '</p>');
    // Prepare/unprepare — тільки для prepared-класів (wizard, cleric, druid, paladin, artificer);
    // «відомі» касти (sorcerer, bard, warlock, ranger) кастують усі відомі закляття без підготовки
    var isPreparedCaster = info.type === 'prepared';
    var dc = spellDC(), atk = spellAtkBonus();
    var statHtml = '<div class="flex flex-wrap gap-3">' +
      '<div class="border border-slate-200 rounded-md px-4 py-2 text-center"><div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('spellSaveDC')) + '</div><div class="font-mono font-bold text-2xl text-forest">' + dc + '</div></div>' +
      '<div class="border border-slate-200 rounded-md px-4 py-2 text-center"><div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('spellAttackBonus')) + '</div><button class="font-mono font-bold text-2xl text-forest hover:text-[#16a34a]" data-roll="spellatk">' + fmtMod(atk) + ' 🎲</button></div>' +
      '</div>';

    var slots = spellSlots();
    var used = ch.playState.slotsUsed;
    var slotsHtml = '';
    for (var lv = 0; lv < 9; lv++) {
      if (!slots[lv]) continue;
      var dots = '';
      for (var i = 0; i < slots[lv]; i++) {
        var isUsed = i < (used[lv] || 0);
        dots += '<button data-slot-lv="' + lv + '" data-slot-i="' + i + '" aria-label="' + esc(t('slotLevel')) + ' ' + (lv + 1) + '" class="w-6 h-6 rounded-full border-2 transition ' +
          (isUsed ? 'bg-forest border-forest' : 'bg-white border-slate-300 hover:border-forest') + '"></button>';
      }
      slotsHtml += '<div class="flex items-center gap-3"><span class="w-16 text-xs font-bold text-slate-600">' + esc(t('slotLevel')) + ' ' + (lv + 1) + '</span><div class="flex gap-1.5 flex-wrap">' + dots + '</div></div>';
    }
    slotsHtml = slotsHtml
      ? '<div class="space-y-2">' + slotsHtml + '</div><button id="ps-reset-slots" class="' + btnSm + ' mt-3">' + esc(t('resetSlots')) + '</button>'
      : '<p class="text-sm text-slate-500">—</p>';

    function spellRow(id, isCantrip, unprep) {
      var sp = spellById(id);
      if (!sp) return '';
      var ri = spellRollInfo(sp);
      var btns = [];
      if (!unprep) {
        btns.push('<button class="' + btnAccentSm + '" data-cast="' + esc(id) + '">✨ ' + esc(t('cast')) + '</button>');
        // Ритуальний каст: без витрати слота (+10 хв часу касту)
        if (sp.ritual && sp.level > 0) btns.push('<button class="text-xs font-bold border border-purple-300 text-purple-700 bg-purple-50 rounded-lg px-2.5 py-1.5 hover:bg-purple-100 transition" data-ritual="' + esc(id) + '" title="' + esc(t('ritualCastHint')) + '">📖 ' + esc(t('castRitual')) + '</button>');
        if (ri.kind === 'attack') btns.push('<button class="' + btnSm + '" data-roll="spellatk">🎲 ' + esc(t('attack')) + ' ' + fmtMod(spellAtkBonus()) + '</button>');
        if (ri.kind === 'save') btns.push('<span class="inline-flex items-center text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg px-2.5 py-1.5">' + esc(t('saveDC')) + (ri.saveAb ? ' ' + esc(AL[ri.saveAb] || ri.saveAb) : '') + ': ' + spellDC() + '</span>');
        // Кнопки шкоди/лікування синхронізовані з рівнем останнього касту (upcast)
        var lastLv = spellCastLevel(sp);
        // Явний підпис «рівень слота N» замість криптичного «↑N»
        var upTag = lastLv > sp.level ? ' <span class="text-[9px] font-bold text-purple-600 whitespace-nowrap">' + esc(t('slotLevelTag')) + ' ' + lastLv + '</span>' : '';
        if (ri.heal) {
          var healLbl;
          if (ri.heal.flat) {
            healLbl = String(ri.heal.flat + (ri.upcastHealFlat || 0) * Math.max(0, lastLv - sp.level));
          } else {
            var hs = scaledSpellDice(ri.heal, ri.upcastHeal, lastLv, sp.level);
            healLbl = hs.n + 'd' + hs.d + (ri.healBonus ? '+' + ri.healBonus : '') + (ri.heal.addMod ? '+' : '');
          }
          btns.push('<button class="text-xs font-bold border border-green-300 text-green-700 bg-green-50 rounded-lg px-2.5 py-1.5 hover:bg-green-100 transition" data-roll="spellheal" data-sp="' + esc(id) + '">🎲 ' + esc(t('healing')) + ' ' + healLbl + upTag + '</button>');
        }
        if (!ri.heal) ri.damage.forEach(function (o, oi) {
          var scales = upcastApplies(ri, oi);
          var ds = scales ? scaledSpellDice(o, ri.upcast, lastLv, sp.level) : { n: o.n, d: o.d };
          btns.push('<button class="' + btnSm + '" data-roll="spelldmg" data-sp="' + esc(id) + '" data-di="' + oi + '">🎲 ' + esc(t('damage')) + ' ' + ds.n + 'd' + ds.d + (o.scaled ? '*' : '') + (scales ? upTag : '') + '</button>');
        });
      }
      if (!isCantrip && isPreparedCaster) {
        // Ліміт підготовлених: Prepare недоступний, коли ліміт досягнуто
        var atLimit = unprep && (ch.spells.prepared || []).length >= preparedLimit();
        btns.push('<button class="text-xs font-semibold border rounded-lg px-2 py-1.5 transition ' +
          (atLimit ? 'border-slate-200 text-slate-300 cursor-not-allowed' :
            unprep ? 'border-[#22C55E] text-forest hover:bg-green-50' : 'border-slate-300 text-slate-400 hover:border-slate-400') +
          '"' + (atLimit ? ' disabled aria-disabled="true"' : '') + ' data-prep-toggle="' + esc(id) + '">' + esc(unprep ? t('prepare') : t('unprepare')) + '</button>');
      }
      // Повні дані закляття у розгортайці: час касту, дистанція, компоненти, тривалість, опис
      var metaBits = [];
      if (sp.castingTime) metaBits.push(sp.castingTime);
      if (sp.range) metaBits.push(sp.range);
      if (sp.components) metaBits.push(sp.components);
      if (sp.duration) metaBits.push(sp.duration);
      var detailsHtml = '<details class="w-full mt-1"><summary class="text-[11px] text-slate-400 cursor-pointer hover:text-forest select-none">ℹ ' + esc(t('spellDescLbl')) + '</summary>' +
        '<div class="mt-1.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-1.5">' +
        (metaBits.length ? '<p class="text-[11px] text-slate-400 mb-1">' + esc(metaBits.join(' • ')) + '</p>' : '') +
        esc(sp.description || '—') + '</div></details>';
      return '<div class="flex flex-wrap items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2' + (unprep ? ' opacity-50' : '') + '">' +
        '<div class="min-w-0"><div class="font-bold text-sm text-slate-800">' + esc(sp.name) + (sp.nameEn ? ' <span class="font-normal text-slate-400 text-xs">(' + esc(sp.nameEn) + ')</span>' : '') +
        (sp.ritual ? ' <span class="text-[10px] font-bold text-purple-600 border border-purple-200 bg-purple-50 rounded px-1 py-px align-middle">' + esc(t('ritual')) + '</span>' : '') +
        (String(sp.id).indexOf('custom_') === 0 ? ' <span class="text-[10px] font-bold text-teal-700 border border-teal-200 bg-teal-50 rounded px-1 py-px align-middle">HB</span>' : '') +
        (unprep ? ' <span class="text-[10px] font-semibold text-slate-400">(' + esc(t('unpreparedTag')) + ')</span>' : '') + '</div>' +
        '<div class="text-xs text-slate-500">' + (isCantrip ? esc(t('cantrips')) : esc(t('slotLevel')) + ' ' + sp.level) + (sp.school ? ' • ' + esc(sp.school) : '') + '</div></div>' +
        '<div class="flex flex-wrap gap-2 items-center">' + btns.join('') + '</div>' + detailsHtml + '</div>';
    }
    var cants = (ch.spells.cantrips || []).map(function (id) { return spellRow(id, true, false); }).join('');

    // Активна концентрація (item 9)
    var concHtml = '';
    if (ch.playState.concentration) {
      var concSp = spellById(ch.playState.concentration);
      concHtml = '<div class="mt-4"></div><div class="flex flex-wrap items-center justify-between gap-2 border border-amber-300 bg-amber-50 rounded-md px-3 py-2">' +
        '<div class="text-sm"><span class="font-bold text-amber-800">◉ ' + esc(t('concentration')) + ':</span> <span class="text-amber-900">' + esc(concSp ? concSp.name : ch.playState.concentration) + '</span></div>' +
        '<button id="ps-conc-drop" class="text-xs font-bold border border-amber-400 text-amber-700 rounded-lg px-2.5 py-1 hover:bg-amber-100 transition">' + esc(t('dropConcentration')) + '</button>' +
        '<p class="w-full text-[11px] text-amber-700 mt-1">' + esc(t('concReminder')) + '</p></div>';
    }

    // Лічильники відомих замовлянь/заклять (item 5)
    var cLimit = cantripsKnownLimit();
    var cCount = (ch.spells.cantrips || []).length;
    var cantTitle = t('cantrips') + (cLimit != null ? ' — ' + cCount + ' / ' + cLimit : '');
    var cantWarn = (cLimit != null && cCount > cLimit)
      ? '<p class="text-xs font-bold text-red-600 mb-2">⚠ ' + esc(t('overCantripLimit')) + '</p>' : '';

    var spellsBlock;
    if (isPreparedCaster) {
      // Prepared-каст: лічильник «Підготовлено X / Y» + повідомлення при досягненні ліміту (item 4)
      var prepArr = ch.spells.prepared || [];
      var limit = preparedLimit();
      var preps = prepArr.map(function (id) { return spellRow(id, false, false); }).join('');
      var unpreps = (ch.spells.unpreparedKnown || []).map(function (id) { return spellRow(id, false, true); }).join('');
      var limitMsg = prepArr.length >= limit
        ? '<p class="text-xs font-bold text-amber-700 mb-2">⚠ ' + esc(t('prepLimitReached')) + '</p>' : '';
      spellsBlock =
        '<div class="mt-4"></div>' + card(t('preparedSpells') + ' — ' + prepArr.length + ' / ' + limit,
          limitMsg + (preps ? '<div class="space-y-2">' + preps + '</div>' : '<p class="text-sm text-slate-500">' + esc(t('noPrepared')) + '</p>')) +
        (unpreps ? '<div class="mt-4"></div>' + card(t('unpreparedSpells'), '<div class="space-y-2">' + unpreps + '</div>') : '');
    } else {
      // «Відомі» касти (sorcerer, bard, warlock, ranger): усі відомі закляття завжди доступні, без prepare/unprepare (item 3)
      var knownIds = (ch.spells.prepared || []).concat(ch.spells.unpreparedKnown || []);
      var knownRows = knownIds.map(function (id) { return spellRow(id, false, false); }).join('');
      var kLimit = spellsKnownLimit();
      var knownTitle = t('knownSpells') + (kLimit != null ? ' — ' + knownIds.length + ' / ' + kLimit : '');
      var knownWarn = (kLimit != null && knownIds.length > kLimit)
        ? '<p class="text-xs font-bold text-red-600 mb-2">⚠ ' + esc(t('overKnownLimit')) + '</p>' : '';
      spellsBlock = '<div class="mt-4"></div>' + card(knownTitle,
        knownWarn + (knownRows ? '<div class="space-y-2">' + knownRows + '</div>' : '<p class="text-sm text-slate-500">' + esc(t('noKnownSpells')) + '</p>'));
    }

    // Керування закляттями на аркуші: додати зі списку класу або homebrew (без повернення в креатор)
    var manageHtml = '<div class="flex flex-wrap gap-2">' +
      '<button id="ps-add-spell" class="' + btnSm + '">+ ' + esc(t('manageSpells')) + '</button>' +
      '<button id="ps-add-homebrew" class="text-xs font-bold border border-teal-300 text-teal-700 bg-teal-50 rounded-lg px-2.5 py-1.5 hover:bg-teal-100 transition">+ ' + esc(t('addHomebrewSpell')) + '</button></div>';

    return card(t('tabSpells'), statHtml) +
      concHtml +
      '<div class="mt-4"></div>' + card(t('spellSlots'), slotsHtml) +
      '<div class="mt-4"></div>' + card(cantTitle, cantWarn + (cants ? '<div class="space-y-2">' + cants + '</div>' : '<p class="text-sm text-slate-500">' + esc(t('noCantrips')) + '</p>')) +
      spellsBlock +
      '<div class="mt-4"></div>' + card(t('manageSpells'), manageHtml);
  }
  // Модалка «Керувати закляттями»: додати/прибрати відомі закляття класу прямо на аркуші
  function openManageSpellsModal() {
    var info = spellcastingInfo();
    if (!info) return;
    var listField = info.type === 'prepared' ? 'unpreparedKnown' : 'prepared';
    // Фільтр за списком заклять класу (spellList у DND_CLASSES); порожній список — показуємо всі
    var allowed = null;
    var casterCls = typeof DND_CLASSES !== 'undefined' ? DND_CLASSES[info.classId] : null;
    if (casterCls) {
      var sl = (casterCls.spellcasting && casterCls.spellcasting.spellList) || casterCls.spellList;
      // spellListFrom: підклас користується списком іншого класу (напр. маг)
      if (!sl || !sl.length) {
        var sub = subclassObj();
        var from = sub && sub.spellcasting && sub.spellcasting.spellListFrom;
        if (from && DND_CLASSES[from]) sl = (DND_CLASSES[from].spellcasting && DND_CLASSES[from].spellcasting.spellList) || DND_CLASSES[from].spellList;
      }
      if (sl && sl.length) allowed = {};
      if (allowed) sl.forEach(function (id) { allowed[id] = true; });
    }
    var all = (typeof DND_SPELLS !== 'undefined' ? DND_SPELLS : []).filter(function (s) {
      return !allowed || allowed[s.id];
    });
    var knownNow = {};
    (ch.spells.cantrips || []).concat(ch.spells.prepared || []).concat(ch.spells.unpreparedKnown || []).forEach(function (id) { knownNow[id] = true; });
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('manageSpells')) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="' + esc(t('modalClose')) + '">✕</button></div>' +
        '<div class="p-3 border-b border-slate-100"><input id="ms-filter" type="text" placeholder="🔎" class="w-full border border-slate-300 rounded-md px-3 py-1.5 text-sm" /></div>' +
        '<div id="ms-list" class="p-3 overflow-y-auto flex-1 space-y-1"></div></div>';
    document.body.appendChild(overlay);
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    var listBox = overlay.querySelector('#ms-list');
    function draw(filter) {
      var f = (filter || '').toLowerCase();
      listBox.innerHTML = all.filter(function (s) {
        return !f || (s.name + ' ' + (s.nameEn || '')).toLowerCase().indexOf(f) >= 0;
      }).slice(0, 80).map(function (s) {
        var has = !!knownNow[s.id];
        return '<button data-ms-id="' + esc(s.id) + '" class="w-full flex items-center justify-between gap-2 border rounded-md px-3 py-1.5 text-left text-sm transition ' +
          (has ? 'border-[#22C55E] bg-green-50' : 'border-slate-200 hover:border-forest') + '">' +
          '<span>' + (has ? '✓ ' : '') + esc(s.name) + ' <span class="text-[10px] text-slate-400">' + (s.level === 0 ? esc(t('cantrips')) : t('slotLevel') + ' ' + s.level) + '</span></span></button>';
      }).join('');
      Array.prototype.forEach.call(listBox.querySelectorAll('[data-ms-id]'), function (b) {
        b.onclick = function () {
          var id = b.getAttribute('data-ms-id');
          var sp = spellById(id);
          if (!sp) return;
          if (knownNow[id]) {
            // прибрати з усіх списків
            ['cantrips', 'prepared', 'unpreparedKnown'].forEach(function (fld) {
              var a = ch.spells[fld] || [];
              var p = a.indexOf(id);
              if (p >= 0) a.splice(p, 1);
            });
            delete knownNow[id];
          } else {
            if (sp.level === 0) (ch.spells.cantrips = ch.spells.cantrips || []).push(id);
            else (ch.spells[listField] = ch.spells[listField] || []).push(id);
            knownNow[id] = true;
          }
          persist();
          draw(overlay.querySelector('#ms-filter').value);
          renderTab();
        };
      });
    }
    overlay.querySelector('#ms-filter').oninput = function () { draw(this.value); };
    draw('');
  }
  // Модалка «Довільні модифікатори»: постійні бонуси від магічних предметів/МД поверх усіх розрахунків
  function openCustomModsModal() {
    var mods = ch.customMods || {};
    var abilities = mods.abilities || {};
    var FIELDS = [
      { k: 'ac', label: t('modAC') }, { k: 'attack', label: t('modAttack') },
      { k: 'damage', label: t('modDamage') }, { k: 'saves', label: t('modSaves') },
      { k: 'checks', label: t('modChecks') }, { k: 'initiative', label: t('modInitiative') },
      { k: 'speed', label: t('modSpeed') },
    ];
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('customModsTitle')) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="' + esc(t('modalClose')) + '">✕</button></div>' +
        '<div class="p-4 space-y-3">' +
          '<p class="text-[11px] text-slate-500">' + esc(t('customModsHint')) + '</p>' +
          '<div class="grid grid-cols-2 gap-2">' +
          FIELDS.map(function (f) {
            return '<label class="block text-xs font-bold text-slate-600">' + esc(f.label) +
              '<input data-mod="' + f.k + '" type="number" value="' + (parseInt(mods[f.k]) || 0) + '" class="mt-1 w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm font-mono" /></label>';
          }).join('') + '</div>' +
          '<div class="text-xs font-bold text-slate-600 mt-2">' + esc(t('modAbilities')) + '</div>' +
          '<div class="grid grid-cols-3 gap-2">' +
          ['str', 'dex', 'con', 'int', 'wis', 'cha'].map(function (k) {
            return '<label class="block text-[10px] font-bold uppercase text-slate-500">' + esc(AL[k] || k) +
              '<input data-mod-ab="' + k + '" type="number" value="' + (parseInt(abilities[k]) || 0) + '" class="mt-1 w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm font-mono" /></label>';
          }).join('') + '</div>' +
          '<button id="cmods-save" class="' + btnAccentSm + ' w-full mt-2">' + esc(t('modalSave')) + '</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('#cmods-save').onclick = function () {
      var next = { abilities: {} };
      Array.prototype.forEach.call(overlay.querySelectorAll('[data-mod]'), function (inp) {
        var v = parseInt(inp.value) || 0;
        if (v) next[inp.getAttribute('data-mod')] = v;
      });
      Array.prototype.forEach.call(overlay.querySelectorAll('[data-mod-ab]'), function (inp) {
        var v = parseInt(inp.value) || 0;
        if (v) next.abilities[inp.getAttribute('data-mod-ab')] = v;
      });
      ch.customMods = next;
      persist();
      close();
      renderHeader();
      renderTab();
    };
  }
  // Модалка homebrew-закляття: назва, рівень, шкода, опис → додається до відомих/підготовлених
  function openHomebrewModal() {
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-sm" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('addHomebrewSpell')) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="' + esc(t('modalClose')) + '">✕</button></div>' +
        '<div class="p-4 space-y-3">' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('spellName')) + '<input id="hb-name" type="text" class="mt-1 w-full border border-slate-300 rounded-md px-3 py-1.5 text-sm" /></label>' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('spellLevelLbl')) + '<input id="hb-lv" type="number" min="0" max="9" value="1" class="mt-1 w-full border border-slate-300 rounded-md px-3 py-1.5 text-sm" /></label>' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('spellDamageLbl')) + '<input id="hb-dmg" type="text" placeholder="2d8" class="mt-1 w-full border border-slate-300 rounded-md px-3 py-1.5 text-sm" /></label>' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('spellDescLbl')) + '<textarea id="hb-desc" rows="3" class="mt-1 w-full border border-slate-300 rounded-md px-3 py-1.5 text-sm"></textarea></label>' +
          '<button id="hb-save" class="' + btnAccentSm + ' w-full">' + esc(t('modalSave')) + '</button>' +
        '</div></div>';
    document.body.appendChild(overlay);
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('#hb-save').onclick = function () {
      var name = overlay.querySelector('#hb-name').value.trim();
      if (!name) return;
      var lv = Math.max(0, Math.min(9, parseInt(overlay.querySelector('#hb-lv').value) || 0));
      var dmg = overlay.querySelector('#hb-dmg').value.trim();
      var sp = {
        id: 'custom_' + Date.now(),
        name: name, level: lv,
        description: overlay.querySelector('#hb-desc').value.trim(),
        damage: dmg || undefined,
        school: t('homebrewSpell'),
      };
      ch.customSpells.push(sp);
      var info = spellcastingInfo();
      if (lv === 0) (ch.spells.cantrips = ch.spells.cantrips || []).push(sp.id);
      else if (info && info.type === 'prepared') (ch.spells.unpreparedKnown = ch.spells.unpreparedKnown || []).push(sp.id);
      else (ch.spells.prepared = ch.spells.prepared || []).push(sp.id);
      persist();
      close();
      renderTab();
    };
  }

  // ---------- Вкладка ІНВЕНТАР ----------
  // Броня, яку персонаж реально має: канонічне поле armorId у предметах + екіпірована зараз
  function ownedArmorIds() {
    var owned = {};
    if (typeof ARMOR_DATA === 'undefined') return owned;
    inv.itemsList.forEach(function (it) {
      if (it.type === 'armor' && it.armorId && ARMOR_DATA[it.armorId]) owned[it.armorId] = true;
    });
    if (inv.armor && inv.armor !== 'none') owned[inv.armor] = true;
    return owned;
  }
  // Щит «є у власності», лише якщо він як предмет лежить в інвентарі
  // (сам прапорець inv.shield означає «екіпіровано», а не «володіє»)
  function ownedShield() {
    return inv.itemsList.some(function (it) { return it.type === 'shield'; });
  }
  // Кількість налаштованих магічних предметів (ліміт правил — 3)
  function attunedCount() {
    return inv.itemsList.filter(function (it) { return it.attuned; }).length;
  }
  // Екіпірувати можна ЛИШЕ броню, яка реально є в інвентарі (owned). Каталог — через «+ Додати броню».
  function armorOptions() {
    if (typeof ARMOR_DATA === 'undefined') return '';
    var owned = ownedArmorIds();
    var profs = armorProfSet();
    function opt(id) {
      var a = ARMOR_DATA[id];
      var noProf = a.type !== 'none' && !profs[a.type];
      return '<option value="' + id + '"' + (inv.armor === id ? ' selected' : '') + '>' + esc(a.name) +
        (a.type !== 'none' ? ' (' + a.base + ')' : '') + (noProf ? ' ⚠' : '') + '</option>';
    }
    var out = opt('none');
    out += Object.keys(ARMOR_DATA).filter(function (id) { return id !== 'none' && owned[id]; }).map(opt).join('');
    return out;
  }
  function currencyTotalGP() {
    return (parseInt(inv.cp) || 0) / 100 + (parseInt(inv.sp) || 0) / 10 + (parseInt(inv.gp) || 0) + (parseInt(inv.pp) || 0) * 10;
  }
  // Пошук зброї з каталогу за назвою предмета (для кнопки «Як зброю»)
  function matchWeaponByName(name) {
    var list = typeof DND_WEAPONS !== 'undefined' ? DND_WEAPONS : [];
    var n = String(name || '').toLowerCase().trim();
    if (!n) return null;
    return list.find(function (w) {
      var wn = String(w.name || '').toLowerCase();
      return wn === n || wn.indexOf(n) >= 0 || n.indexOf(wn) >= 0;
    }) || null;
  }
  function tabInventory() {
    var weapons = inv.weaponList.map(resolveWeapon).map(function (w, i) { return { w: w, i: i }; }).filter(function (x) { return !!x.w; });
    var wHtml =
      '<div class="flex justify-end mb-3"><button id="ps-add-weapon" class="' + btnAccentSm + '">' + esc(t('addWeapon')) + '</button></div>' +
      (weapons.length
        ? '<ul class="space-y-1">' + weapons.map(function (x) {
            return '<li class="flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2 text-sm">' +
              '<span class="font-semibold text-slate-800">' + esc(x.w.name) + '</span>' +
              '<span class="flex items-center gap-2"><span class="text-xs text-slate-500">' + esc(x.w.damage) + (x.w.damageType ? ' • ' + esc(x.w.damageType) : '') + '</span>' +
              '<button class="text-xs font-semibold border border-red-300 text-red-600 rounded-lg px-2 py-1 hover:bg-red-50 transition" data-weapon-del="' + x.i + '" aria-label="' + esc(t('remove')) + '">✕</button></span></li>';
          }).join('') + '</ul>'
        : '<p class="text-sm text-slate-500">' + esc(t('noWeapons')) + '</p>');

    var noProf = !isArmorProficient(inv.armor);
    var shieldNoProf = inv.shield && !armorProfSet().shield;
    var armorHtml =
      '<div class="flex flex-wrap items-center gap-3">' +
        '<label class="text-sm font-semibold text-slate-700">' + esc(t('armor')) + ':' +
          '<select id="ps-armor-select" class="ml-2 border border-slate-300 rounded-lg px-2 py-1.5 text-sm bg-white">' + armorOptions() + '</select>' +
        '</label>' +
        (inv.shield || ownedShield()
          ? '<button id="ps-shield-toggle" class="' + (inv.shield ? btnAccentSm : btnSm) + '">' + esc(t('shield')) + ': ' + (inv.shield ? esc(t('equipped')) + ' ✔' : '—') + '</button>'
          : '<span class="text-xs text-slate-400 border border-slate-200 rounded-lg px-2.5 py-1.5" title="' + esc(t('noShieldOwned')) + '">' + esc(t('shield')) + ': ' + esc(t('noShieldOwned')) + '</span>') +
        '<span class="text-sm text-slate-600">' + esc(t('ac')) + ': <span class="font-mono font-bold text-forest text-lg">' + calcAC() + '</span></span>' +
        ((noProf || shieldNoProf) ? '<span class="text-xs font-bold text-red-600 border border-red-300 bg-red-50 rounded-md px-2 py-1">⚠ ' + esc(t('notProficient')) + '</span>' : '') +
        '<button id="ps-add-armor" class="' + btnSm + ' ml-auto">' + esc(t('addArmor')) + '</button>' +
      '</div>';

    var itemsRows = inv.itemsList.map(function (it, i) {
      // Канонічне поле weaponId, для legacy — резервне збігання назв
      var weaponId = it.weaponId || (it.type === 'gear' || !it.type ? (matchWeaponByName(it.name) || {}).id : null);
      var chips = '';
      if (it.type === 'magic') {
        if (it.rarity) chips += '<span class="inline-block text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200 rounded px-1.5 py-px mr-1">' + esc(it.rarity) + '</span>';
    if (it.attunementRequired) {
      // При досягнутому ліміті 3 предмети кнопка «Не налаштовано» заблокована,
      // а поруч показується видиме повідомлення (не лише title)
      var atLimit = !it.attuned && attunedCount() >= 3;
      chips += '<button data-attune="' + i + '"' + (atLimit ? ' disabled title="' + esc(t('attunementLimit')) + '" aria-disabled="true"' : '') +
        ' class="inline-block text-[10px] font-bold rounded px-1.5 py-px mr-1 border transition ' +
        (it.attuned ? 'text-forest bg-green-50 border-[#22C55E]'
          : atLimit ? 'text-slate-300 bg-slate-50 border-slate-200 cursor-not-allowed'
          : 'text-slate-500 bg-slate-50 border-slate-300 hover:border-forest') + '">' +
        (it.attuned ? '◆ ' + esc(t('attuned')) : '◇ ' + esc(t('notAttuned')) + (atLimit ? ' (3/3)' : '')) + '</button>';
      if (atLimit) chips += '<span class="inline-block text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 rounded px-1.5 py-px mr-1">' + esc(t('attuneLimitHint')) + '</span>';
        }
      }
      return '<div class="flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2">' +
        '<div class="min-w-0"><div class="font-semibold text-sm text-slate-800 truncate">' + esc(it.name) + '</div>' +
        (chips ? '<div class="mt-0.5">' + chips + '</div>' : '') +
        ((it.source || it.weight || it.note) ? '<div class="text-[11px] text-slate-400 truncate">' + esc([it.source, it.weight, it.note].filter(Boolean).join(' • ')) + '</div>' : '') + '</div>' +
        '<div class="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">' +
          (weaponId ? '<button class="' + btnSm + '" data-item-weapon="' + esc(weaponId) + '">' + esc(t('useAsWeapon')) + '</button>' : '') +
          '<button class="' + btnSm + '" data-item-qty="-1" data-i="' + i + '" aria-label="-1">−</button>' +
          '<span class="font-mono font-bold text-sm w-8 text-center">' + (it.qty || 1) + '</span>' +
          '<button class="' + btnSm + '" data-item-qty="1" data-i="' + i + '" aria-label="+1">+</button>' +
          '<button class="' + btnSm + '" data-item-edit="' + i + '" aria-label="' + esc(t('editItem')) + '">✎</button>' +
          '<button class="text-xs font-semibold border border-red-300 text-red-600 rounded-lg px-2 py-1.5 hover:bg-red-50 transition" data-item-del="' + i + '">✕</button>' +
        '</div></div>';
    }).join('');
    var itemsHtml =
      '<div class="flex justify-end mb-3"><button id="ps-add-item" class="' + btnAccentSm + '">' + esc(t('addItem')) + '</button></div>' +
      (itemsRows ? '<div class="space-y-2">' + itemsRows + '</div>' : '<p class="text-sm text-slate-500">' + esc(t('noItems')) + '</p>');

    function coin(key) {
      return '<label class="flex flex-col gap-1 text-xs font-bold text-slate-600">' + esc(t(key)) +
        '<input type="number" min="0" value="' + (parseInt(inv[key]) || 0) + '" data-coin="' + key + '" class="border border-slate-300 rounded-lg px-2 py-1.5 text-sm font-mono w-full bg-white"></label>';
    }
    var moneyHtml = '<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">' + coin('cp') + coin('sp') + coin('gp') + coin('pp') + '</div>' +
      '<p class="text-sm text-slate-600 mt-3">' + esc(t('totalGold')) + ': <span id="ps-gold-total" class="font-mono font-bold text-forest">' + currencyTotalGP().toFixed(2) + '</span> gp</p>';

  // Лічильник налаштованих магічних предметів (ліміт 3) — показуємо лише коли є що рахувати
  var attunedNote = attunedCount() > 0 || inv.itemsList.some(function (it) { return it.attunementRequired; })
    ? '<p class="text-xs text-slate-500 mb-2">' + esc(t('attunedCounter')) + ': <span class="font-mono font-bold ' + (attunedCount() >= 3 ? 'text-red-600' : 'text-forest') + '">' + attunedCount() + '/3</span>' +
      (attunedCount() >= 3 ? ' <span class="text-red-600">— ' + esc(t('attunementLimit')) + '</span>' : '') + '</p>'
    : '';
  return card(t('equipment'), armorHtml) +
  '<div class="mt-4"></div>' + card(t('weapons'), wHtml) +
  '<div class="mt-4"></div>' + card(t('items'), attunedNote + itemsHtml) +
      '<div class="mt-4"></div>' + card(t('currency'), moneyHtml);
  }

  // ---------- Модалка додавання предмета ----------
  function allCatalogItems() {
    var out = [];
    if (typeof DND_MUNDANE_ITEMS !== 'undefined') DND_MUNDANE_ITEMS.forEach(function (i) { out.push({ id: i.id, name: i.name, weight: i.weight || '', source: t('mundane') }); });
    if (typeof DND_MAGIC_ITEMS !== 'undefined') DND_MAGIC_ITEMS.forEach(function (i) { out.push({ id: i.id, name: i.name, weight: i.weight || '', source: t('magic') + (i.rarityUk || i.rarity ? ' • ' + (i.rarityUk || i.rarity) : '') }); });
    return out;
  }
  function openItemModal() {
    var overlay = document.createElement('div');
    overlay.id = 'ps-item-modal';
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('addItem').replace('+ ', '')) + '</h3>' +
          '<button id="ps-modal-close" class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="p-4 space-y-3 overflow-y-auto">' +
          '<input id="ps-item-search" type="text" placeholder="' + esc(t('searchItems')) + '" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">' +
          '<div id="ps-item-results" class="space-y-1 max-h-60 overflow-y-auto"></div>' +
          '<div class="border-t border-slate-200 pt-3">' +
            '<p class="text-xs font-bold text-slate-600 mb-2">' + esc(t('manualItem')) + '</p>' +
            '<div class="flex gap-2">' +
              '<input id="ps-item-manual-name" type="text" placeholder="' + esc(t('itemName')) + '" class="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">' +
              '<input id="ps-item-manual-qty" type="number" min="1" value="1" aria-label="' + esc(t('qty')) + '" class="w-20 border border-slate-300 rounded-lg px-2 py-2 text-sm font-mono bg-white">' +
              '<button id="ps-item-manual-add" class="' + btnAccentSm + '">' + esc(t('add')) + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    var catalog = allCatalogItems();
    var results = overlay.querySelector('#ps-item-results');
    function renderResults(q) {
      q = (q || '').trim().toLowerCase();
      var list = q ? catalog.filter(function (i) { return i.name.toLowerCase().indexOf(q) >= 0; }).slice(0, 30) : catalog.slice(0, 30);
      results.innerHTML = list.length ? list.map(function (i, idx) {
        return '<button data-cat="' + idx + '" class="w-full text-left flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2 hover:border-forest transition">' +
          '<span class="text-sm font-semibold text-slate-800">' + esc(i.name) + '</span><span class="text-[11px] text-slate-400">' + esc(i.source) + '</span></button>';
      }).join('') : '<p class="text-xs text-slate-500 py-2">' + esc(t('nothingFound')) + '</p>';
      Array.prototype.forEach.call(results.querySelectorAll('button[data-cat]'), function (b) {
        b.onclick = function () {
          var it = list[parseInt(b.getAttribute('data-cat'))];
          addItemToInventory({ id: it.id, name: it.name, qty: 1, weight: it.weight, source: it.source });
          close();
        };
      });
    }
    function close() { overlay.remove(); }
    overlay.querySelector('#ps-modal-close').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('#ps-item-search').addEventListener('input', function (e) { renderResults(e.target.value); });
    overlay.querySelector('#ps-item-manual-add').onclick = function () {
      var name = overlay.querySelector('#ps-item-manual-name').value.trim();
      if (!name) return;
      var qty = Math.max(1, parseInt(overlay.querySelector('#ps-item-manual-qty').value) || 1);
      addItemToInventory({ id: 'custom_' + Date.now(), name: name, qty: qty, weight: '', source: '' });
      close();
    };
    renderResults('');
    overlay.querySelector('#ps-item-search').focus();
  }
  function addItemToInventory(item) {
    if (!item.type) {
      var c = classifyItemByName(item.name);
      item.type = c.type;
      if (c.weaponId) item.weaponId = c.weaponId;
      if (c.armorId) item.armorId = c.armorId;
      if (c.magicId) item.magicId = c.magicId;
      if (c.rarity) item.rarity = c.rarity;
      if (c.attunementRequired) { item.attunementRequired = true; item.attuned = false; }
    }
    var existing = inv.itemsList.find(function (i) { return i.id === item.id; });
    if (existing) existing.qty = (existing.qty || 1) + (item.qty || 1);
    else inv.itemsList.push(item);
    persist();
    renderTab();
  }

  // ---------- Модалка додавання зброї ----------
  function openWeaponModal() {
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('addWeapon').replace('+ ', '')) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="p-4 space-y-3 overflow-y-auto">' +
          '<input data-wsearch type="text" placeholder="' + esc(t('searchWeapons')) + '" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">' +
          '<div data-wresults class="space-y-1 max-h-60 overflow-y-auto"></div>' +
          '<div class="border-t border-slate-200 pt-3">' +
            '<p class="text-xs font-bold text-slate-600 mb-2">' + esc(t('customWeapon')) + '</p>' +
            '<div class="grid grid-cols-2 gap-2">' +
              '<input data-wname type="text" placeholder="' + esc(t('itemName')) + '" class="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">' +
              '<input data-wdmg type="text" placeholder="' + esc(t('wpnDamageHint')) + '" class="border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono bg-white">' +
              '<select data-wab class="border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white">' +
                '<option value="str">STR</option><option value="dex">DEX</option><option value="finesse">Finesse</option>' +
              '</select>' +
              '<label class="flex items-center gap-2 text-sm text-slate-700"><input data-wranged type="checkbox" class="w-4 h-4"> ' + esc(t('ranged')) + '</label>' +
            '</div>' +
            '<button data-wadd class="' + btnAccentSm + ' mt-2">' + esc(t('add')) + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    var list = typeof DND_WEAPONS !== 'undefined' ? DND_WEAPONS : [];
    var results = overlay.querySelector('[data-wresults]');
    function renderResults(q) {
      q = (q || '').trim().toLowerCase();
      var found = q ? list.filter(function (w) { return String(w.name).toLowerCase().indexOf(q) >= 0; }) : list.slice(0, 30);
      results.innerHTML = found.length ? found.slice(0, 30).map(function (w) {
        return '<button data-wid="' + esc(w.id) + '" class="w-full text-left flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2 hover:border-forest transition">' +
          '<span class="text-sm font-semibold text-slate-800">' + esc(w.name) + '</span><span class="text-[11px] text-slate-400">' + esc(w.damage) + (w.damageType ? ' • ' + esc(w.damageType) : '') + '</span></button>';
      }).join('') : '<p class="text-xs text-slate-500 py-2">' + esc(t('nothingFound')) + '</p>';
      Array.prototype.forEach.call(results.querySelectorAll('button[data-wid]'), function (b) {
        b.onclick = function () {
          inv.weaponList.push({ kind: 'weapon', weaponId: b.getAttribute('data-wid') });
          persist(); close(); renderTab();
        };
      });
    }
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('[data-wsearch]').addEventListener('input', function (e) { renderResults(e.target.value); });
    overlay.querySelector('[data-wadd]').onclick = function () {
      var name = overlay.querySelector('[data-wname]').value.trim();
      if (!name) return;
      inv.weaponList.push({
        kind: 'custom', name: name,
        damage: overlay.querySelector('[data-wdmg]').value.trim() || '1d4',
        ability: overlay.querySelector('[data-wab]').value,
        ranged: overlay.querySelector('[data-wranged]').checked,
        damageType: '',
      });
      persist(); close(); renderTab();
    };
    renderResults('');
    overlay.querySelector('[data-wsearch]').focus();
  }

  // ---------- Модалка додавання броні/щита в інвентар ----------
  function openArmorModal() {
    if (typeof ARMOR_DATA === 'undefined') return;
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    var profs = armorProfSet();
    var rows = Object.keys(ARMOR_DATA).filter(function (id) { return id !== 'none'; }).map(function (id) {
      var a = ARMOR_DATA[id];
      var noProf = a.type !== 'none' && !profs[a.type];
      return '<button data-aid="' + esc(id) + '" class="w-full text-left flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2 hover:border-forest transition">' +
        '<span class="text-sm font-semibold text-slate-800">' + esc(a.name) + (noProf ? ' <span class="text-[10px] font-bold text-red-600">⚠</span>' : '') + '</span>' +
        '<span class="text-[11px] text-slate-400">' + esc(t('ac')) + ' ' + a.base + (a.addDex ? (a.maxDex ? ' + DEX (max ' + a.maxDex + ')' : ' + DEX') : '') + '</span></button>';
    }).join('');
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('addArmor').replace('+ ', '')) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="p-4 space-y-1 overflow-y-auto">' +
          '<button data-add-shield class="w-full text-left flex items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2 hover:border-forest transition">' +
            '<span class="text-sm font-semibold text-slate-800">' + esc(t('addShieldItem')) + (profs.shield ? '' : ' <span class="text-[10px] font-bold text-red-600">⚠</span>') + '</span>' +
            '<span class="text-[11px] text-slate-400">+2 ' + esc(t('ac')) + '</span></button>' +
          rows +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('[data-add-shield]').onclick = function () {
      addItemToInventory({ id: 'shield_item', name: t('addShieldItem'), qty: 1, type: 'shield', source: '', weight: '', note: '' });
      close();
    };
    Array.prototype.forEach.call(overlay.querySelectorAll('[data-aid]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-aid');
        addItemToInventory({ id: 'armor_' + id, name: ARMOR_DATA[id].name, qty: 1, type: 'armor', armorId: id, source: '', weight: '', note: '' });
        close();
      };
    });
  }

  // ---------- Модалка редагування предмета ----------
  // Тип і пов'язані поля (weaponId/armorId/magicId/attunement) контролює користувач вручну —
  // жодної автоматичної перекласифікації за назвою. Але при зміні назви пропонуємо підказку.
  function openItemEditModal(index) {
    var it = inv.itemsList[index];
    if (!it) return;
    var TYPES = ['gear', 'weapon', 'armor', 'shield', 'magic'];
    var typeLabels = { gear: t('typeGear'), weapon: t('typeWeapon'), armor: t('typeArmor'), shield: t('typeShield'), magic: t('typeMagic') };
    function typeOptions(sel) {
      return TYPES.map(function (v) {
        return '<option value="' + v + '"' + (v === sel ? ' selected' : '') + '>' + esc(typeLabels[v]) + '</option>';
      }).join('');
    }
    function weaponOptions(sel) {
      var opts = '<option value="">—</option>';
      if (typeof DND_WEAPONS !== 'undefined') opts += DND_WEAPONS.map(function (w) {
        return '<option value="' + esc(w.id) + '"' + (w.id === sel ? ' selected' : '') + '>' + esc(w.name) + '</option>';
      }).join('');
      return opts;
    }
    function armorOpts(sel) {
      var opts = '<option value="">—</option>';
      if (typeof ARMOR_DATA !== 'undefined') opts += Object.keys(ARMOR_DATA).filter(function (id) { return id !== 'none'; }).map(function (id) {
        return '<option value="' + esc(id) + '"' + (id === sel ? ' selected' : '') + '>' + esc(ARMOR_DATA[id].name) + '</option>';
      }).join('');
      return opts;
    }
    function magicOptions(sel) {
      var opts = '<option value="">—</option>';
      if (typeof DND_MAGIC_ITEMS !== 'undefined') opts += DND_MAGIC_ITEMS.map(function (m) {
        return '<option value="' + esc(m.id) + '"' + (m.id === sel ? ' selected' : '') + '>' + esc(m.name) + '</option>';
      }).join('');
      return opts;
    }
    var overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4';
    overlay.innerHTML =
      '<div class="bg-white rounded-md shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto" role="dialog" aria-modal="true">' +
        '<div class="p-4 border-b border-slate-200 flex items-center justify-between">' +
          '<h3 class="font-heading font-bold text-forest">' + esc(t('editItem')) + '</h3>' +
          '<button data-close class="text-slate-500 hover:text-slate-800 text-xl leading-none" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="p-4 space-y-3">' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('itemName')) +
            '<input data-ename type="text" value="' + esc(it.name || '') + '" class="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"></label>' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('itemType')) +
            '<select data-etype class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white">' + typeOptions(it.type || 'gear') + '</select></label>' +
          '<label data-row-weapon class="block text-xs font-bold text-slate-600' + ((it.type || 'gear') === 'weapon' ? '' : ' hidden') + '">' + esc(t('typeWeapon')) + ' (weaponId)' +
            '<select data-eweapon class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white">' + weaponOptions(it.weaponId || '') + '</select></label>' +
          '<label data-row-armor class="block text-xs font-bold text-slate-600' + (it.type === 'armor' ? '' : ' hidden') + '">' + esc(t('typeArmor')) + ' (armorId)' +
            '<select data-earmor class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white">' + armorOpts(it.armorId || '') + '</select></label>' +
          '<div data-row-magic class="space-y-2' + (it.type === 'magic' ? '' : ' hidden') + '">' +
            '<label class="block text-xs font-bold text-slate-600">' + esc(t('typeMagic')) + ' (magicId)' +
              '<select data-emagic class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white">' + magicOptions(it.magicId || '') + '</select></label>' +
            '<label class="flex items-center gap-2 text-xs font-bold text-slate-600">' +
              '<input data-eattreq type="checkbox"' + (it.attunementRequired ? ' checked' : '') + ' class="w-4 h-4"> ' + esc(t('attunementReq')) + '</label>' +
            '<label class="flex items-center gap-2 text-xs font-bold text-slate-600">' +
              '<input data-eattuned type="checkbox"' + (it.attuned ? ' checked' : '') + ' class="w-4 h-4"> ' + esc(t('attuned')) + '</label>' +
          '</div>' +
          '<div class="grid grid-cols-2 gap-2">' +
            '<label class="block text-xs font-bold text-slate-600">' + esc(t('qty')) +
              '<input data-eqty type="number" min="1" value="' + (it.qty || 1) + '" class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-2 text-sm font-mono bg-white"></label>' +
            '<label class="block text-xs font-bold text-slate-600">' + esc(t('itemWeight')) +
              '<input data-ewt type="text" value="' + esc(it.weight || '') + '" class="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"></label>' +
          '</div>' +
          '<label class="block text-xs font-bold text-slate-600">' + esc(t('itemNote')) +
            '<textarea data-enote rows="2" class="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">' + esc(it.note || '') + '</textarea></label>' +
          '<p data-ewarn class="hidden text-xs font-semibold text-red-600"></p>' +
          '<button data-esave class="' + btnAccentSm + '">' + esc(t('saveItem')) + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    function close() { overlay.remove(); }
    overlay.querySelector('[data-close]').onclick = close;
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    var typeSel = overlay.querySelector('[data-etype]');
    function syncRows() {
      var v = typeSel.value;
      overlay.querySelector('[data-row-weapon]').classList.toggle('hidden', v !== 'weapon');
      overlay.querySelector('[data-row-armor]').classList.toggle('hidden', v !== 'armor');
      overlay.querySelector('[data-row-magic]').classList.toggle('hidden', v !== 'magic');
    }
    typeSel.onchange = syncRows;
    // Підказка (не автозаміна): якщо нова назва впізнається — пропонуємо тип, але вибір за користувачем
    overlay.querySelector('[data-ename]').addEventListener('change', function () {
      var nm = this.value.trim();
      if (!nm || nm === it.name) return;
      var c = classifyItemByName(nm);
      if (c.type && c.type !== typeSel.value) {
        typeSel.value = c.type;
        if (c.weaponId) overlay.querySelector('[data-eweapon]').value = c.weaponId;
        if (c.armorId) overlay.querySelector('[data-earmor]').value = c.armorId;
        if (c.magicId) overlay.querySelector('[data-emagic]').value = c.magicId;
        if (c.type === 'magic') overlay.querySelector('[data-eattreq]').checked = !!c.attunementRequired;
        syncRows();
      }
    });
    overlay.querySelector('[data-esave]').onclick = function () {
      var name = overlay.querySelector('[data-ename]').value.trim();
      if (name) it.name = name;
      it.qty = Math.max(1, parseInt(overlay.querySelector('[data-eqty]').value) || 1);
      it.weight = overlay.querySelector('[data-ewt]').value.trim();
      it.note = overlay.querySelector('[data-enote]').value.trim();
      var oldType = it.type;
      var newType = typeSel.value;
      it.type = newType;
      it.weaponId = newType === 'weapon' ? (overlay.querySelector('[data-eweapon]').value || undefined) : undefined;
      it.armorId = newType === 'armor' ? (overlay.querySelector('[data-earmor]').value || undefined) : undefined;
      if (newType === 'magic') {
        var mid = overlay.querySelector('[data-emagic]').value || '';
        it.magicId = mid || undefined;
        var mi = mid && typeof DND_MAGIC_ITEMS !== 'undefined' ? DND_MAGIC_ITEMS.find(function (m) { return m.id === mid; }) : null;
        it.rarity = mi ? (mi.rarityUk || mi.rarity || '') : it.rarity;
        var wantReq = overlay.querySelector('[data-eattreq]').checked;
        var wantAtt = overlay.querySelector('[data-eattuned]').checked;
        if (wantReq) {
          it.attunementRequired = true;
          // Захист ліміту: не даємо зберегти 4-й налаштований предмет
          var others = inv.itemsList.filter(function (x) { return x !== it && x.attuned; }).length;
          if (wantAtt && others >= 3) {
            var warn = overlay.querySelector('[data-ewarn]');
            warn.textContent = t('attunementLimit');
            warn.classList.remove('hidden');
            overlay.querySelector('[data-eattuned]').checked = false;
            it.attuned = false;
            return; // даємо користувачу побачити повідомлення; збереження — наступним кліком
          }
          it.attuned = wantAtt;
        } else {
          delete it.attunementRequired;
          delete it.attuned;
        }
      } else {
        it.magicId = undefined;
        delete it.rarity;
        delete it.attunementRequired;
        delete it.attuned;
      }
      // Якщо предмет більше не броня/щит — знімаємо екіпірування, що на ньому трималося
      if (oldType === 'shield' && newType !== 'shield' && inv.shield && !ownedShield()) inv.shield = false;
      if (oldType === 'armor' && newType !== 'armor' && inv.armor !== 'none' && !ownedArmorIds()[inv.armor]) inv.armor = 'none';
      persist(); close(); renderHeader(); renderTab();
    };
  }

  // ---------- Вкладка РИСИ ----------
  function toggleBlock(id, title, badge, desc) {
    return '<div class="border border-slate-200 rounded-md overflow-hidden">' +
      '<button class="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-left bg-white hover:bg-slate-50 transition" data-toggle="' + id + '" aria-expanded="false">' +
      '<span class="font-bold text-sm text-slate-800">' + esc(title) + (badge ? ' <span class="ml-1 text-[10px] font-bold text-white bg-forest rounded px-1.5 py-0.5">' + esc(badge) + '</span>' : '') + '</span>' +
      '<span class="text-slate-400 text-xs" data-arrow="' + id + '">▼</span></button>' +
      '<div id="' + id + '" class="hidden px-3 pb-3 text-sm text-slate-600 leading-relaxed">' + esc(desc || '') + '</div></div>';
  }
  function tabFeatures() {
    var lvl = ch.level || 1;
    var c = cls();
    var n = 0;
    function block(title, desc, badge) { n++; return toggleBlock('ps-tg-' + n, title, badge, desc); }
    var out = '';

    // Ресурси класу (Лють, Кі, тощо)
    var resList = classResources();
    if (resList.length) {
      var resHtml = resList.map(function (r) {
        var used = Math.min(r.max, resUsed(r.key));
        var rchChip = '<span class="ml-1.5 text-[9px] font-bold uppercase text-slate-400 border border-slate-200 rounded px-1 py-px align-middle">' +
          esc(r.recharge === 'short' ? t('rechargeShort') : r.recharge === 'short-one' ? t('rechargeShortOne') : t('rechargeLong')) + '</span>';
        if (r.pool || r.max > 10) {
          var left = r.max - used;
          return '<div class="flex flex-wrap items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2">' +
            '<span class="text-sm font-bold text-slate-800">' + esc(r.label) + rchChip + '</span>' +
            '<span class="flex items-center gap-1.5">' +
              '<button class="' + btnSm + '" data-res-delta="1" data-res="' + esc(r.key) + '" data-res-max="' + r.max + '" aria-label="-1">−</button>' +
              '<span class="font-mono font-bold text-forest">' + left + '<span class="text-xs text-slate-400">/' + r.max + '</span></span>' +
              '<button class="' + btnSm + '" data-res-delta="-1" data-res="' + esc(r.key) + '" data-res-max="' + r.max + '" aria-label="+1">+</button>' +
            '</span></div>';
        }
        var dots = '';
        for (var i = 0; i < r.max; i++) {
          dots += '<button data-res-dot="' + esc(r.key) + '" data-res-i="' + i + '" data-res-max="' + r.max + '" aria-label="' + esc(r.label) + ' ' + (i + 1) + '" class="w-6 h-6 rounded-full border-2 transition ' +
            (i < used ? 'bg-forest border-forest' : 'bg-white border-slate-300 hover:border-forest') + '"></button>';
        }
        return '<div class="flex flex-wrap items-center justify-between gap-2 border border-slate-200 rounded-md px-3 py-2">' +
          '<span class="text-sm font-bold text-slate-800">' + esc(r.label) + rchChip + '</span><span class="flex gap-1.5 flex-wrap">' + dots + '</span></div>';
      }).join('');
      out += card(t('resources'), '<div class="space-y-2">' + resHtml + '</div>') + '<div class="mt-4"></div>';
    }

    if (c && Array.isArray(c.features)) {
      var feats = c.features.filter(function (f) { return (f.level || 1) <= lvl; })
        .map(function (f) { return block(f.name, f.desc || f.description, t('lvlShort') + ' ' + f.level); }).join('');
      out += card(t('classFeatures'), feats || '<p class="text-sm text-slate-500">' + esc(t('nothingHere')) + '</p>') + '<div class="mt-4"></div>';
    }
    var sub = subclassObj();
    if (sub && Array.isArray(sub.features)) {
      var sfeats = sub.features.filter(function (f) { return (f.level || 1) <= lvl; })
        .map(function (f) { return block(f.name, f.description || f.desc, t('lvlShort') + ' ' + f.level); }).join('');
      out += card(t('subclassFeatures') + ' — ' + (sub.name || ''), sfeats || '<p class="text-sm text-slate-500">' + esc(t('nothingHere')) + '</p>') + '<div class="mt-4"></div>';
    }
    var r = race();
    var traits = [];
    if (r && Array.isArray(r.traits)) traits = traits.concat(r.traits);
    var sr = subraceObj();
    if (sr && Array.isArray(sr.traits)) traits = traits.concat(sr.traits);
    if (traits.length) {
      out += card(t('raceTraits') + (r ? ' — ' + r.name : ''), traits.map(function (tr) { return block(tr.name, tr.desc || tr.description, ''); }).join('')) + '<div class="mt-4"></div>';
    }
    var chFeats = selectedFeats();
    if (chFeats.length) {
      out += card(t('feats'), chFeats.map(function (f) { return block(f.name, f.desc || f.description, ''); }).join('')) + '<div class="mt-4"></div>';
    }
    var fs = fightingStyleInfo();
    if (fs) {
      out += card(t('fightingStyle'),
        '<p class="text-sm font-bold text-slate-800">' + esc(fs.name) + '</p>' +
        (fs.desc ? '<p class="text-sm text-slate-600 leading-relaxed mt-1">' + esc(fs.desc) + '</p>' : '')) + '<div class="mt-4"></div>';
    }
    var wm = (ch.proficiencies && ch.proficiencies.weaponMasteries) || [];
    if (wm.length) {
      var wmHtml = wm.map(function (id) {
        var w = typeof DND_WEAPONS !== 'undefined' ? DND_WEAPONS.find(function (x) { return x.id === id; }) : null;
        return block(w ? w.name : id, w && w.mastery ? w.mastery : '', '');
      }).join('');
      out += card(t('weaponMasteries'), wmHtml);
    }
    return out || card(t('tabFeatures'), '<p class="text-sm text-slate-500">' + esc(t('nothingHere')) + '</p>');
  }

  // ---------- Вкладка ПЕРЕДІСТОРІЯ ----------
  // Дані передісторії: ключ BACKGROUND_DATA — це людська назва; підтримуємо і .name, якщо структура зміниться
  function backgroundInfo() {
    var bg = ch.description.background;
    if (!bg || bg === '__custom__') {
      var cb = ch.customBackground;
      return cb ? { name: cb.name || '', skills: cb.skills || [], tools: cb.tools || [], feature: cb.feature || '', description: cb.description || '', equipment: '' } : null;
    }
    if (typeof BACKGROUND_DATA === 'undefined') return { name: bg };
    var data = BACKGROUND_DATA[bg];
    if (!data) {
      // Раптом збережено id — шукаємо за збігом ключа без регістру
      var key = Object.keys(BACKGROUND_DATA).find(function (k) { return k.toLowerCase() === String(bg).toLowerCase(); });
      data = key ? BACKGROUND_DATA[key] : null;
      if (key) bg = key;
    }
    if (!data) return { name: bg };
    return {
      name: data.name || bg,
      skills: data.skills || [],
      tools: data.tools || [],
      feature: data.feature || data.feat || '',
      description: data.description || '',
      equipment: data.equipment || '',
      abilities: data.abilities || '',
    };
  }
  function tabBackground() {
    var d = ch.description || {};
    var bgInfo = backgroundInfo();
    var bgName = (bgInfo && bgInfo.name) || '';
    function field(label, val) {
      return '<div class="border border-slate-200 rounded-md p-3"><div class="text-[10px] font-bold uppercase text-slate-500 mb-1">' + esc(label) + '</div>' +
        '<div class="text-sm text-slate-800 whitespace-pre-wrap">' + (val ? esc(val) : '<span class="text-slate-400">—</span>') + '</div></div>';
    }
    var short = '<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">' +
      field(t('fldName'), d.name) + field(t('fldPlayer'), d.player) + field(t('fldAlignment'), d.alignment) + field(t('fldBackground'), bgName) +
      field(t('fldAge'), d.age) + field(t('fldHeight'), d.height) + field(t('fldWeight'), d.weight) + field(t('fldEyes'), d.eyes) +
      field(t('fldSkin'), d.skin) + field(t('fldHair'), d.hair) + '</div>';
    var long = '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">' +
      field(t('fldAppearance'), d.appearance) + field(t('fldBackstory'), d.backstory) +
      field(t('fldAllies'), d.allies) + field(t('fldTreasure'), d.treasure) +
      field(t('fldTraits'), d.traits) + field(t('fldIdeals'), d.ideals) +
      field(t('fldBonds'), d.bonds) + field(t('fldFlaws'), d.flaws) + '</div>';
    // Карта деталей передісторії з BACKGROUND_DATA
    var bgCard = '';
    if (bgInfo && (bgInfo.description || (bgInfo.skills && bgInfo.skills.length) || bgInfo.feature)) {
      function chips(arr) {
        return (arr || []).map(function (x) { return '<span class="inline-block bg-forest/10 text-forest border border-forest/20 px-2.5 py-1 rounded-md text-xs font-semibold mr-1.5 mb-1.5">' + esc(x) + '</span>'; }).join('') || '<span class="text-sm text-slate-400">—</span>';
      }
      var bgInner =
        (bgInfo.description ? '<p class="text-sm text-slate-600 leading-relaxed mb-3">' + esc(bgInfo.description) + '</p>' : '') +
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' +
          '<div><div class="text-[10px] font-bold uppercase text-slate-500 mb-1">' + esc(t('bgSkills')) + '</div>' + chips(bgInfo.skills) + '</div>' +
          '<div><div class="text-[10px] font-bold uppercase text-slate-500 mb-1">' + esc(t('bgTools')) + '</div>' + chips(bgInfo.tools) + '</div>' +
          (bgInfo.feature ? '<div><div class="text-[10px] font-bold uppercase text-slate-500 mb-1">' + esc(t('bgFeature')) + '</div><div class="text-sm text-slate-800">' + esc(bgInfo.feature) + '</div></div>' : '') +
          (bgInfo.abilities ? '<div><div class="text-[10px] font-bold uppercase text-slate-500 mb-1">' + esc(t('bgAbilities')) + '</div><div class="text-sm text-slate-800">' + esc(bgInfo.abilities) + '</div></div>' : '') +
          (bgInfo.equipment ? '<div class="sm:col-span-2"><div class="text-[10px] font-bold uppercase text-slate-500 mb-1">' + esc(t('bgEquipment')) + '</div><div class="text-sm text-slate-800">' + esc(bgInfo.equipment) + '</div></div>' : '') +
        '</div>';
      bgCard = '<div class="mt-4"></div>' + card(t('fldBackground') + (bgName ? ': ' + bgName : ''), bgInner);
    }
    return card(t('tabBackground'), short + long) + bgCard;
  }

  // ---------- Вкладка НОТАТКИ ----------
  function tabNotes() {
    return card(t('tabNotes'),
      '<textarea id="ps-notes" rows="12" placeholder="' + esc(t('notesPlaceholder')) + '" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm leading-relaxed bg-white">' + esc(ch.playNotes || '') + '</textarea>' +
      '<div class="flex items-center gap-3 mt-3"><button id="ps-save-notes" class="' + btnAccentSm + '">' + esc(t('saveNotes')) + '</button>' +
      '<span id="ps-notes-status" class="text-xs text-slate-500"></span></div>');
  }

  // ---------- Вкладка ДОДАТКОВО ----------
  function tabExtras() {
    var p = ch.proficiencies || {};
    function listOrDash(a) {
      var arr = Array.isArray(a) ? a : (a ? [a] : []);
      return arr.length ? arr.map(function (x) { return '<span class="inline-block bg-forest/10 text-forest border border-forest/20 px-2.5 py-1 rounded-md text-xs font-semibold mr-1.5 mb-1.5">' + esc(x) + '</span>'; }).join('') : '<span class="text-sm text-slate-400">—</span>';
    }
    var r = race(), c = cls();
    var wm = (p.weaponMasteries || []).map(function (id) {
      var w = typeof DND_WEAPONS !== 'undefined' ? DND_WEAPONS.find(function (x) { return x.id === id; }) : null;
      return w ? w.name + (w.mastery ? ' (' + w.mastery + ')' : '') : id;
    });
    var baseSpeed = (r ? r.speed : 30) + cm('speed');
    var effSpeed = speedValue();
    var speedCell = effSpeed !== baseSpeed
      ? '<span class="text-red-600">' + effSpeed + '</span> <span class="text-xs text-slate-400 line-through">' + baseSpeed + '</span>'
      : String(baseSpeed);
    var otherRows =
      '<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">' +
      '<div class="border border-slate-200 rounded-md p-3 text-center"><div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('speed')) + '</div><div class="font-mono font-bold text-lg text-forest">' + speedCell + '</div></div>' +
      '<div class="border border-slate-200 rounded-md p-3 text-center"><div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('size')) + '</div><div class="font-bold text-sm text-slate-700 mt-1">' + esc(r ? r.size || '—' : '—') + '</div></div>' +
      '<div class="border border-slate-200 rounded-md p-3 text-center"><div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('passivePerception')) + '</div><div class="font-mono font-bold text-lg text-forest">' + passivePerceptionValue() + '</div></div>' +
      '<div class="border border-slate-200 rounded-md p-3 text-center"><div class="text-[10px] font-bold uppercase text-slate-500">' + esc(t('hitDice')) + '</div><div class="font-mono font-bold text-lg text-forest">' + esc(hitDicePools().map(function (pp) { return pp.total + 'd' + pp.sides; }).join('+')) + '</div></div>' +
      '</div>';
    // Чуття та стійкості з расових рис (best-effort парсинг тексту)
    function raceTraitTexts() {
      var out = [];
      if (r && Array.isArray(r.traits)) r.traits.forEach(function (tr) { out.push((tr.name || '') + '. ' + (tr.desc || tr.description || '')); });
      var sr = subraceObj();
      if (sr && Array.isArray(sr.traits)) sr.traits.forEach(function (tr) { out.push((tr.name || '') + '. ' + (tr.desc || tr.description || '')); });
      return out;
    }
    // Структуровані чуття/стійкості за id раси (без парсингу тексту); regex — лише резерв для невідомих рас
    var EN = window.PS_LANG === 'en';
    var DMG = EN
      ? { poison: 'poison', fire: 'fire', cold: 'cold', necrotic: 'necrotic', radiant: 'radiant', psychic: 'psychic', acid: 'acid', lightning: 'lightning' }
      : { poison: 'отрута', fire: 'вогонь', cold: 'холод', necrotic: 'некротична', radiant: 'промениста', psychic: 'психічна', acid: 'кислота', lightning: 'блискавка' };
    // Драконяча спадковість dragonborn → тип опору (item 17)
    var DRAGONBORN_ANCESTRY_RESIST = {
      black: 'acid', copper: 'acid', blue: 'lightning', bronze: 'lightning',
      brass: 'fire', gold: 'fire', red: 'fire', green: 'poison', silver: 'cold', white: 'cold',
    };
    var RACE_EXTRAS = {
      elf:      { dv: 60 },
      dwarf:    { dv: 120, resist: ['poison'] },
      gnome:    { dv: 60 },
      orc:      { dv: 120 },
      tiefling: { dv: 60, resist: ['fire'] },
      aasimar:  { dv: 60, resist: ['necrotic', 'radiant'] },
      dhampir:  { dv: 60, resist: ['necrotic'] },
      shifter:  { dv: 60 },
      khoravar: { dv: 60 },
      warforged:{ resist: ['poison'] },
      kalashtar:{ resist: ['psychic'] },
      flamekin: { resist: ['fire'] },
      rimekin:  { resist: ['cold'] },
      dragonborn: { dv: 60 }, // опір залежить від обраної драконячої спадковості — див. расові риси
      boggart:  { dv: 60 },
      lorwynchangeling: { dv: 120 },
      faerie:   {},
      human: {}, halfling: {}, goliath: {}, changeling: {},
    };
    var senses = [], resist = [];
    var rx = RACE_EXTRAS[ch.raceId];
    if (rx) {
      if (rx.dv) senses.push((EN ? 'Darkvision ' : 'Темний зір ') + rx.dv + (EN ? ' ft.' : ' фт.'));
      (rx.resist || []).forEach(function (k) { resist.push(DMG[k] || k); });
      // Dragonborn: тип опору залежить від обраної спадковості (subraceId, напр. 'black' або 'black_dragonborn')
      if (ch.raceId === 'dragonborn' && ch.subraceId) {
        var anc = Object.keys(DRAGONBORN_ANCESTRY_RESIST).find(function (k) {
          return String(ch.subraceId).toLowerCase().indexOf(k) >= 0;
        });
        if (anc) resist.push(DMG[DRAGONBORN_ANCESTRY_RESIST[anc]] || DRAGONBORN_ANCESTRY_RESIST[anc]);
      }
    } else {
      // Резерв для рас поза таблицею: best-effort парсинг тексту рис
      raceTraitTexts().forEach(function (txt) {
        if (/темний зір|темнозір|darkvision/i.test(txt)) {
          var dm = txt.match(/(\d+)\s*(?:фут|фт|ft|feet)/i) || txt.match(/(\d+)/);
          senses.push((EN ? 'Darkvision' : 'Темний зір') + (dm ? ' ' + dm[1] + (EN ? ' ft.' : ' фт.') : ''));
        }
        var rm = txt.match(/(?:стійкість до|опір шкоді(?: від)?|опір до)\s+(.+?)(?=\s+(?:та|і|й)\s|[.,;()]|$)/i) || txt.match(/resistance to\s+(.+?)(?=\s+and\s|[.,;()]|$)/i);
        if (rm) resist.push(rm[1].trim());
      });
    }
    senses = senses.filter(function (x, i) { return senses.indexOf(x) === i; });
    resist = resist.filter(function (x, i) { return x && resist.indexOf(x) === i; });
    var sensesHtml = senses.length ? listOrDash(senses) : '<span class="text-sm text-slate-400">' + esc(t('noneDetected')) + '</span>';
    var resistHtml = resist.length ? listOrDash(resist) : '<span class="text-sm text-slate-400">' + esc(t('noneDetected')) + '</span>';

    // Стани (conditions) — «Виснаження» винесено в окремий трекер рівнів 0–6 (item 8)
    var CONDS = condNamesList();
    var active = ch.playState.conditions || [];
    var condsHtml = '<div class="flex flex-wrap gap-1.5">' + CONDS.map(function (cName, i) {
      var on = active.indexOf(i) >= 0;
      return '<button data-cond="' + i + '" aria-pressed="' + on + '" class="px-2.5 py-1 rounded-md text-xs font-semibold border transition ' +
        (on ? 'bg-forest text-white border-forest' : 'bg-white text-slate-600 border-slate-300 hover:border-forest') + '">' + esc(cName) + '</button>';
    }).join('') + '</div>';
    // Підказки про механічні ефекти активних станів (Poisoned/Prone/Restrained/Frightened діють на кидки автоматично)
    var COND_HINTS = window.PS_LANG === 'en'
      ? { 0: 'Blinded: auto-disadvantage on your attacks; attacks against you have advantage', 3: 'Frightened: auto-disadvantage on checks and attacks', 5: 'Incapacitated: breaks concentration; no actions or reactions', 6: 'Invisible: auto-advantage on your attacks; attacks against you have disadvantage', 9: 'Poisoned: auto-disadvantage on attacks and checks', 10: 'Prone: auto-disadvantage on your attacks', 11: 'Restrained: auto-disadvantage on attacks and DEX saves; attacks against you have advantage' }
      : { 0: 'Засліплений: авто-перешкода на ваші атаки; атаки по вас з перевагою', 3: 'Наляканий: авто-перешкода на перевірки та атаки', 5: 'Недієздатний: зриває концентрацію; без дій та реакцій', 6: 'Невидимий: авто-перевага на ваші атаки; атаки по вас з перешкодою', 9: 'Отруєний: авто-перешкода на атаки та перевірки', 10: 'Лежачий: авто-перешкода на ваші атаки', 11: 'Обплутаний: авто-перешкода на атаки та рятунки СПР; атаки по вас з перевагою' };
    var hintLines = active.filter(function (i) { return COND_HINTS[i]; }).map(function (i) {
      return '<li class="text-[11px] text-slate-600">' + esc(COND_HINTS[i]) + '</li>';
    });
    if (hintLines.length) condsHtml += '<ul class="mt-2 space-y-0.5 list-disc list-inside">' + hintLines.join('') + '</ul>';

    // Виснаження: рівні 0–6 з описом ефекту поточного рівня
    var exh = ch.playState.exhaustion || 0;
    var EXH_FX = window.PS_LANG === 'en'
      ? ['', '−2 to all d20 Tests, −5 ft speed', '−4 to all d20 Tests, −10 ft speed', '−6 to all d20 Tests, −15 ft speed', '−8 to all d20 Tests, −20 ft speed', '−10 to all d20 Tests, −25 ft speed', 'Death']
      : ['', '−2 до всіх кидків d20, швидкість −5 фт', '−4 до всіх кидків d20, швидкість −10 фт', '−6 до всіх кидків d20, швидкість −15 фт', '−8 до всіх кидків d20, швидкість −20 фт', '−10 до всіх кидків d20, швидкість −25 фт', 'Смерть'];
    var exhDots = '';
    for (var ei = 1; ei <= 6; ei++) {
      exhDots += '<button data-exh="' + ei + '" aria-label="' + esc(t('exhaustion')) + ' ' + ei + '" class="w-7 h-7 rounded-full border-2 text-[10px] font-bold transition ' +
        (ei <= exh ? (ei >= 5 ? 'bg-red-600 text-white' : 'bg-amber-500 text-white') + ' border-transparent' : 'bg-white text-slate-500 border-slate-300 hover:border-forest') + '">' + ei + '</button>';
    }
    var exhHtml =
      '<div class="flex flex-wrap items-center gap-3">' +
        '<span class="flex gap-1.5">' + exhDots + '</span>' +
        '<button id="ps-exh-reset" class="' + btnSm + '">0</button>' +
      '</div>' +
      (exh > 0 ? '<p class="mt-2 text-xs font-semibold ' + (exh >= 5 ? 'text-red-600' : 'text-amber-700') + '">' + esc(t('exhaustionLevel')) + ' ' + exh + ': ' + esc(EXH_FX[exh]) + (exh >= 2 ? ' (' + esc(t('exhaustionCumulative')) + ')' : '') + '</p>' : '');

    // Рятунки від смерті
    var ds = ch.playState.deathSaves || { s: 0, f: 0 };
    function dsDots(kind, count, color) {
      var dots = '';
      for (var i = 0; i < 3; i++) {
        dots += '<button data-ds="' + kind + '" data-ds-i="' + i + '" aria-label="' + kind + ' ' + (i + 1) + '" class="w-6 h-6 rounded-full border-2 transition ' +
          (i < count ? color + ' border-transparent' : 'bg-white border-slate-300 hover:border-forest') + '"></button>';
      }
      return dots;
    }
    var dsHtml =
      '<div class="flex flex-wrap items-center gap-6">' +
        '<div class="flex items-center gap-2"><span class="text-xs font-bold text-slate-600">' + esc(t('successes')) + '</span><span class="flex gap-1.5">' + dsDots('s', ds.s, 'bg-[#22C55E]') + '</span></div>' +
        '<div class="flex items-center gap-2"><span class="text-xs font-bold text-slate-600">' + esc(t('failures')) + '</span><span class="flex gap-1.5">' + dsDots('f', ds.f, 'bg-red-500') + '</span></div>' +
        '<button id="ps-ds-roll" class="text-xs font-bold border-2 border-red-400 bg-white text-red-700 rounded-lg px-3 py-1.5 hover:bg-red-50 transition">🎲 ' + esc(t('rollDeathSave')) + '</button>' +
        '<button id="ps-ds-reset" class="' + btnSm + '">' + esc(t('resetDeathSaves')) + '</button>' +
      '</div>';

    // Обтяження: предмети + екіпірована броня/щит + зброя (ваги з ARMOR_DATA/DND_WEAPONS) + монети (50 шт = 1 фунт)
    var encInfo = encumbranceInfo();
    var totalWeight = encInfo.total, capacity = encInfo.capacity;
    var overloaded = totalWeight > capacity;
    var pct = capacity > 0 ? Math.min(100, Math.round(totalWeight / capacity * 100)) : 0;
    // Варіантне правило: > 5×STR — швидкість −10; > 10×STR — швидкість −20
    var encBadge = overloaded
      ? '<span class="text-xs font-bold text-red-600 border border-red-300 bg-red-50 rounded px-2 py-0.5">' + esc(t('overloaded')) + '</span>'
      : encInfo.level === 2
        ? '<span class="text-xs font-bold text-red-600 border border-red-300 bg-red-50 rounded px-2 py-0.5">' + esc(t('heavilyEncumbered')) + ' (−20 ' + esc(t('speedShort')) + ')</span>'
        : encInfo.level === 1
          ? '<span class="text-xs font-bold text-amber-700 border border-amber-300 bg-amber-50 rounded px-2 py-0.5">' + esc(t('encumbered')) + ' (−10 ' + esc(t('speedShort')) + ')</span>'
          : '';
    var encHtml =
      '<div class="flex items-center justify-between gap-3">' +
        '<div class="text-sm"><span class="font-mono font-bold text-lg ' + (overloaded || encInfo.level ? 'text-red-600' : 'text-forest') + '">' + totalWeight + '</span>' +
        ' <span class="text-slate-500">/ ' + capacity + ' ' + esc(t('weightUnit')) + '</span></div>' + encBadge +
      '</div>' +
      '<div class="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden"><div class="h-full rounded-full ' + (overloaded || encInfo.level ? 'bg-red-500' : 'bg-forest') + '" style="width:' + pct + '%"></div></div>' +
      '<p class="mt-1.5 text-[11px] text-slate-400">' + esc(t('encumbranceNote')) + ' ' + esc(t('encumbranceBreakdown')) + ': ' + encInfo.items + ' + ' + encInfo.gear + ' + ' + encInfo.coins + '</p>';
    return card(t('conditions'), condsHtml) +
      '<div class="mt-4"></div>' + card(t('encumbrance'), encHtml) +
      '<div class="mt-4"></div>' + card(t('exhaustion'), exhHtml) +
      '<div class="mt-4"></div>' + card(t('deathSaves'), dsHtml) +
      '<div class="mt-4"></div>' + card(t('senses'), sensesHtml) +
      '<div class="mt-4"></div>' + card(t('resistances'), resistHtml) +
      '<div class="mt-4"></div>' + card(t('languages'), listOrDash(p.languages)) +
      '<div class="mt-4"></div>' + card(t('tools'), listOrDash(p.tools)) +
      '<div class="mt-4"></div>' + card(t('weaponMasteries'), listOrDash(wm)) +
      '<div class="mt-4"></div>' + card(t('other'), otherRows);
  }

  // ---------- Обробники подій вкладок ----------
  function bindTab(box) {
    // Кидки
    // Боєрежим: швидкі кнопки HP (−5/−1/+1/+5)
    Array.prototype.forEach.call(box.querySelectorAll('[data-cb-hp]'), function (b) {
      b.onclick = function () {
        var d = parseInt(b.getAttribute('data-cb-hp')) || 0;
        if (d < 0) applyDamage(-d); else applyHeal(d);
        renderTab();
      };
    });
    // Перемикачі станів цілі (діють на кидки атаки через rollD20)
    Array.prototype.forEach.call(box.querySelectorAll('[data-target-cond]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-target-cond');
        var arr = ch.playState.targetConds;
        var pos = arr.indexOf(id);
        if (pos >= 0) arr.splice(pos, 1); else arr.push(id);
        persist();
        renderTab();
      };
    });
    // Перемикач Expertise (★) на навичках із володінням — з лімітом за класом
    Array.prototype.forEach.call(box.querySelectorAll('[data-expertise]'), function (b) {
      b.onclick = function () {
        var s = b.getAttribute('data-expertise');
        var arr = ch.expertiseSkills;
        var pos = arr.indexOf(s);
        if (pos >= 0) arr.splice(pos, 1);
        else {
          if (arr.length >= expertiseLimit()) return; // ліміт досягнуто
          arr.push(s);
        }
        persist();
        renderTab();
      };
    });
    // Перемикач Люті (варвар): витрачає використання при активації
    var rageBtn = box.querySelector('#ps-rage-toggle');
    if (rageBtn) rageBtn.onclick = function () {
      if (!ch.playState.rageActive) {
        var rageRes = classResources().find(function (r) { return r.key === 'rage'; });
        if (rageRes && resUsed('rage') >= rageRes.max) { logRoll(t('rage'), t('rageNoUses'), '✖'); return; }
        if (rageRes) setResUsed('rage', resUsed('rage') + 1, rageRes.max);
        ch.playState.rageActive = true;
        logRoll('🔥 ' + t('rage'), t('rageStarted') + ' (+' + rageDamageBonus() + ' ' + t('damage').toLowerCase() + ')', '✔');
      } else {
        ch.playState.rageActive = false;
        logRoll(t('rage'), t('rageEnded'), '—');
      }
      persist();
      renderTab();
    };
    Array.prototype.forEach.call(box.querySelectorAll('[data-roll]'), function (b) {
      b.onclick = function (ev) {
        // Перевага/перешкода на БУДЬ-ЯКОМУ кидку: Shift+клік — перевага, Alt+клік — перешкода
        function rollOpts() {
          return { advantage: !!(ev && ev.shiftKey), disadvantage: !!(ev && ev.altKey) };
        }
        var kind = b.getAttribute('data-roll');
        var pb = profBonus(ch.level || 1);
        if (kind === 'check') {
          var k = b.getAttribute('data-k');
          // Jack of All Trades: перевірки характеристик — без володіння, отже бонус діє завжди
          rollD20(t('abilityCheck') + ': ' + (AL[k] || k), abilityMod(k) + jackBonus() + cm('checks'), 'check', rollOpts(b));
        } else if (kind === 'save') {
          var k2 = b.getAttribute('data-k');
          var scc = ch.playState.conditions || [];
          if ((k2 === 'str' || k2 === 'dex') && (scc.indexOf(7) >= 0 || scc.indexOf(12) >= 0 || scc.indexOf(13) >= 0)) {
            logRoll(t('savingThrow') + ': ' + (AL[k2] || k2), t('autoFailSave'), '✖', 'save');
            return;
          }
          var saves = saveProficiencies();
          var so = rollOpts(b); so.ability = k2;
          rollD20(t('savingThrow') + ': ' + (AL[k2] || k2), abilityMod(k2) + (saves[k2] ? pb : 0) + cm('saves'), 'save', so);
        } else if (kind === 'skill') {
          var s = b.getAttribute('data-s');
          var ab = (typeof SKILL_ABILITY !== 'undefined' && SKILL_ABILITY[s]) || 'dex';
          var prof = !!allSkillProfs()[s];
          var expert = prof && !!expertiseSet()[s];
          rollD20(t('skillCheck') + ': ' + s, abilityMod(ab) + (expert ? pb * 2 : prof ? pb : jackBonus()) + cm('checks'), 'skill', rollOpts(b));
        } else if (kind === 'watk' || kind === 'wdmg') {
          var i = parseInt(b.getAttribute('data-i'));
          var w = resolveWeapon(inv.weaponList[i]);
          if (!w) return;
          if (kind === 'watk') {
            var res = rollD20(t('attackRoll') + ': ' + w.name, weaponAttackBonus(w), 'attack', rollOpts());
            // Nat 20 — критичне влучання: наступний кидок шкоди цією зброєю подвоює кубики
            if (res.roll === 20) {
              ch.playState.critPending = i;
              persist();
              logRoll('💥 ' + t('critHit'), t('critHitHint'), '20', 'attack');
              renderTab();
            } else if (ch.playState.critPending === i) {
              ch.playState.critPending = -1;
              persist();
              renderTab();
            }
          } else {
            var isCrit = ch.playState.critPending === i;
            if (isCrit) { ch.playState.critPending = -1; persist(); }
            weaponDamageRoll(w, { crit: isCrit });
            if (isCrit) renderTab();
          }
        } else if (kind === 'sneak') {
          // Підступна атака: 1d6 за кожні 2 рівні роуга (заокруглення вгору)
          var sneakLvl = classLevelFor('rogue') || (ch.classId === 'rogue' ? (ch.level || 1) : 0);
          if (sneakLvl > 0) rollDamage(t('sneakAttack'), Math.ceil(sneakLvl / 2) + 'd6', 0, { type: 'damage' });
        } else if (kind === 'unarmed') {
          // Бойові мистецтва (монах): беззбройний удар кісткою бойових мистецтв
          var maMod = Math.max(abilityMod('str'), abilityMod('dex'));
          var res2 = rollD20(t('attackRoll') + ': ' + t('unarmedStrike'), maMod + pb + cm('attack'), 'attack', rollOpts());
          if (res2.roll === 20) logRoll('💥 ' + t('critHit'), t('critHitHint'), '20', 'attack');
        } else if (kind === 'unarmeddmg') {
          var maDie = martialArtsDie();
          rollDamage(t('damageRoll') + ': ' + t('unarmedStrike'), maDie || '1d1', Math.max(abilityMod('str'), abilityMod('dex')) + cm('damage'), { type: 'damage' });
        } else if (kind === 'spellatk') {
          rollD20(t('spellAttackRoll'), spellAtkBonus() || 0, 'attack', rollOpts());
        } else if (kind === 'spelldmg') {
          // Та сама логіка upcast, що й у «Каст»: рахуємо за рівнем останнього касту
          var sp = spellById(b.getAttribute('data-sp'));
          var ri = spellRollInfo(sp);
          var di = parseInt(b.getAttribute('data-di')) || 0;
          var dmg = ri.damage[di];
          if (sp && dmg) {
            var lv = spellCastLevel(sp);
            var ds = upcastApplies(ri, di) ? scaledSpellDice(dmg, ri.upcast, lv, sp.level) : { n: dmg.n, d: dmg.d, flat: 0 };
            rollDamage(t('spellDamageRoll') + ': ' + sp.name, ds.n + 'd' + ds.d, (di === 0 ? (ri.flatBonus || 0) : 0) + (ds.flat || 0), { type: 'spell' });
          }
        } else if (kind === 'spellheal') {
          var hsp = spellById(b.getAttribute('data-sp'));
          var hri = spellRollInfo(hsp);
          if (hsp && hri.heal) {
            var hlv = spellCastLevel(hsp);
            if (hri.heal.flat) {
              var hflat = hri.heal.flat + (hri.upcastHealFlat || 0) * Math.max(0, hlv - hsp.level);
              logRoll(t('healRoll') + ': ' + hsp.name, '—', hflat, 'heal');
            } else {
              var hs = scaledSpellDice(hri.heal, hri.upcastHeal, hlv, hsp.level);
              var hmod = (hri.heal.addMod ? abilityMod((spellcastingInfo() || { ability: 'wis' }).ability) : 0) + (hs.flat || 0) + (hri.healBonus || 0);
              rollDamage(t('healRoll') + ': ' + hsp.name, hs.n + 'd' + hs.d, hmod, { type: 'heal' });
            }
          }
        }
      };
    });
    // Каст заклинання (вибір рівня слота для не-замовлянь)
    Array.prototype.forEach.call(box.querySelectorAll('[data-cast]'), function (b) {
      b.onclick = function () { openCastModal(spellById(b.getAttribute('data-cast'))); };
    });
    // Ритуальний каст: слот НЕ витрачається, лише запис у журнал
    Array.prototype.forEach.call(box.querySelectorAll('[data-ritual]'), function (b) {
      b.onclick = function () {
        var sp = spellById(b.getAttribute('data-ritual'));
        if (!sp) return;
        handleConcentration(sp);
        logRoll('📖 ' + t('cast') + ': ' + sp.name, t('ritualCastDone'), '✔', 'spell');
        renderHeader();
        renderTab();
      };
    });
    // Керування закляттями та homebrew
    var addSpellBtn = box.querySelector('#ps-add-spell');
    if (addSpellBtn) addSpellBtn.onclick = openManageSpellsModal;
    var addHbBtn = box.querySelector('#ps-add-homebrew');
    if (addHbBtn) addHbBtn.onclick = openHomebrewModal;
    // Підготовлено/не підготовлено: реально переносимо id між ch.spells.prepared та ch.spells.unpreparedKnown
    Array.prototype.forEach.call(box.querySelectorAll('[data-prep-toggle]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-prep-toggle');
        var prep = ch.spells.prepared = ch.spells.prepared || [];
        var known = ch.spells.unpreparedKnown;
        var pi = prep.indexOf(id), ki = known.indexOf(id);
        if (pi >= 0) { prep.splice(pi, 1); if (ki < 0) known.push(id); }
        else if (ki >= 0) {
          // Ліміт підготовлених заклять (item 4)
          if (prep.length >= preparedLimit()) { renderTab(); return; }
          known.splice(ki, 1); prep.push(id);
        }
        persist();
        renderTab();
      };
    });
    // Скидання активної концентрації
    var concDrop = box.querySelector('#ps-conc-drop');
    if (concDrop) concDrop.onclick = function () {
      var prevSp = spellById(ch.playState.concentration);
      ch.playState.concentration = '';
      ch.playState.concDC = 0; // скидання концентрації прибирає й очікувані рятунки
      ch.playState.concQueue = [];
      persist();
      logRoll(t('concentrationBroken') + (prevSp ? ': ' + prevSp.name : ''), t('concentrationDroppedManually'), '✔', 'spell');
      renderHeader();
      renderTab();
    };
    // Ресурси класу: крапки
    Array.prototype.forEach.call(box.querySelectorAll('[data-res-dot]'), function (b) {
      b.onclick = function () {
        var key = b.getAttribute('data-res-dot');
        var i = parseInt(b.getAttribute('data-res-i'));
        var max = parseInt(b.getAttribute('data-res-max'));
        var used = resUsed(key);
        setResUsed(key, i < used ? i : i + 1, max);
        renderTab();
      };
    });
    // Ресурси класу: пул (+/-)
    Array.prototype.forEach.call(box.querySelectorAll('[data-res-delta]'), function (b) {
      b.onclick = function () {
        var key = b.getAttribute('data-res');
        var max = parseInt(b.getAttribute('data-res-max'));
        setResUsed(key, resUsed(key) + parseInt(b.getAttribute('data-res-delta')), max);
        renderTab();
      };
    });
    // Зброя в інвентарі
    var addWpnBtn = box.querySelector('#ps-add-weapon');
    if (addWpnBtn) addWpnBtn.onclick = openWeaponModal;
    Array.prototype.forEach.call(box.querySelectorAll('[data-weapon-del]'), function (b) {
      b.onclick = function () {
        inv.weaponList.splice(parseInt(b.getAttribute('data-weapon-del')), 1);
        persist();
        renderTab();
      };
    });
    // Предмет як зброя
    Array.prototype.forEach.call(box.querySelectorAll('[data-item-weapon]'), function (b) {
      b.onclick = function () {
        var wid = b.getAttribute('data-item-weapon');
        if (!inv.weaponList.some(function (row) { return row.kind !== 'custom' && row.weaponId === wid; })) {
          inv.weaponList.push({ kind: 'weapon', weaponId: wid });
          persist();
        }
        renderTab();
      };
    });
    // Редагування предмета
    Array.prototype.forEach.call(box.querySelectorAll('[data-item-edit]'), function (b) {
      b.onclick = function () { openItemEditModal(parseInt(b.getAttribute('data-item-edit'))); };
    });
    // Стани
    Array.prototype.forEach.call(box.querySelectorAll('[data-cond]'), function (b) {
      b.onclick = function () {
        var i = parseInt(b.getAttribute('data-cond'));
        var arr = ch.playState.conditions;
        var pos = arr.indexOf(i);
        if (pos >= 0) arr.splice(pos, 1); else arr.push(i);
        // Недієздатність (5) та стани, що її включають — Паралізований (7), Скам'янілий (8),
        // Приголомшений (12), Непритомний (13) — миттєво зривають концентрацію
        if (pos < 0 && [5, 7, 8, 12, 13].indexOf(i) >= 0 && ch.playState.concentration) {
          var csp = spellById(ch.playState.concentration);
          ch.playState.concentration = '';
          ch.playState.concDC = 0;
          ch.playState.concQueue = [];
          logRoll(t('concentrationBroken') + (csp ? ': ' + csp.name : ''), t('incapacitatedBreaksConc'), '✖', 'spell');
          renderHeader(); // прибрати кнопку рятунку концентрації з шапки
        }
        persist();
        renderTab();
      };
    });
    // Рятунки від смерті: 3 успіхи → стабілізований; 3 провали → смерть (item 7)
    Array.prototype.forEach.call(box.querySelectorAll('[data-ds]'), function (b) {
      b.onclick = function () {
        var kind = b.getAttribute('data-ds');
        var i = parseInt(b.getAttribute('data-ds-i'));
        var cur = ch.playState.deathSaves[kind] || 0;
        ch.playState.deathSaves[kind] = i < cur ? i : i + 1;
        if (kind === 's' && ch.playState.deathSaves.s >= 3) {
          logRoll(t('stabilized'), t('stabilizedHint'), '✔', 'heal');
        } else if (kind === 'f' && ch.playState.deathSaves.f >= 3) {
          logRoll('☠ ' + t('characterDied'), t('deathSaves') + ': 3/3', '☠', 'damage');
        }
        persist();
        renderTab();
      };
    });
    var dsReset = box.querySelector('#ps-ds-reset');
    if (dsReset) dsReset.onclick = function () {
      ch.playState.deathSaves = { s: 0, f: 0 };
      persist();
      renderTab();
    };
    // Автокидок рятунку від смерті: d20 без модифікатора (item 3)
    var dsRoll = box.querySelector('#ps-ds-roll');
    if (dsRoll) dsRoll.onclick = function () {
      var dsx = ch.playState.deathSaves;
      if (dsx.s >= 3 || dsx.f >= 3) return; // вже стабілізований або мертвий
      var r = d(20);
      if (r === 20) {
        // Природна 20: персонаж отямлюється з 1 хітом
        dsx.s = 0; dsx.f = 0;
        logRoll(t('deathSaveRoll'), 'd20: 20 — ' + t('nat20Revive'), 20, 'save');
        applyHeal(1); // applyHeal скине рятунки і зніме «Непритомний»
        return;
      }
      if (r === 1) {
        dsx.f = Math.min(3, dsx.f + 2);
        logRoll(t('deathSaveRoll'), 'd20: 1 — ' + t('nat1TwoFails'), 1, 'save');
      } else if (r + exhaustionPenalty() >= 10) {
        dsx.s = Math.min(3, dsx.s + 1);
        logRoll(t('deathSaveRoll'), 'd20: ' + r + (exhaustionPenalty() ? ' (' + exhaustionPenalty() + ')' : '') + ' — ' + t('deathSaveSuccess'), r + exhaustionPenalty(), 'save');
      } else {
        dsx.f = Math.min(3, dsx.f + 1);
        logRoll(t('deathSaveRoll'), 'd20: ' + r + ' — ' + t('deathSaveFailure'), r, 'save');
      }
      if (dsx.s >= 3) logRoll(t('stabilized'), t('stabilizedHint'), '✔', 'heal');
      else if (dsx.f >= 3) logRoll('☠ ' + t('characterDied'), t('deathSaves') + ': 3/3', '☠', 'damage');
      persist();
      renderTab();
    };
    // Виснаження: клік по рівню N — встановити N (повторний клік по поточному — зняти рівень)
    Array.prototype.forEach.call(box.querySelectorAll('[data-exh]'), function (b) {
      b.onclick = function () {
        var lv = parseInt(b.getAttribute('data-exh'));
        ch.playState.exhaustion = (ch.playState.exhaustion === lv) ? lv - 1 : lv;
        if (ch.playState.exhaustion >= 6) logRoll('☠ ' + t('characterDied'), t('exhaustionLevel') + ' 6', '☠', 'damage');
        // Рівень 4+ ділить maxHP навпіл. НЕ чіпаємо «сирий» inv.hpCurrent:
        // currentHP() клампить при читанні, тож після зняття виснаження HP повертається
        persist();
        renderHeader(); // maxHP і швидкість могли змінитись
        renderTab();
      };
    });
    var exhReset = box.querySelector('#ps-exh-reset');
    if (exhReset) exhReset.onclick = function () {
      ch.playState.exhaustion = 0;
      persist();
      renderHeader(); // maxHP і швидкість повертаються до норми
      renderTab();
    };
    // Слоти заклинань
    Array.prototype.forEach.call(box.querySelectorAll('[data-slot-lv]'), function (b) {
      b.onclick = function () {
        var lv = parseInt(b.getAttribute('data-slot-lv'));
        var i = parseInt(b.getAttribute('data-slot-i'));
        var used = ch.playState.slotsUsed[lv] || 0;
        var freeing = i < used; // користувач вручну «повертає» слот цього рівня
        ch.playState.slotsUsed[lv] = freeing ? i : i + 1;
        // Якщо слот рівня повернуто вручну — скидаємо lastCastLv заклять, кастованих на цьому рівні,
        // щоб кнопки шкоди/лікування не лишалися на старому upcast-рівні
        if (freeing) clearLastCastAtLevel(lv + 1);
        persist();
        renderTab();
      };
    });
    var resetBtn = box.querySelector('#ps-reset-slots');
    if (resetBtn) resetBtn.onclick = function () {
      ch.playState.slotsUsed = [0,0,0,0,0,0,0,0,0];
      ch.playState.lastCastLv = {}; // усі кнопки шкоди/лікування — до базових кубиків
      persist();
      renderTab();
    };
    // Інвентар
    var armorSel = box.querySelector('#ps-armor-select');
    if (armorSel) armorSel.onchange = function () {
      var v = armorSel.value || 'none';
      // Захист: екіпірувати можна лише «none» або броню, яка є в інвентарі
      if (v !== 'none' && !ownedArmorIds()[v]) { armorSel.value = inv.armor || 'none'; return; }
      inv.armor = v;
      persist();
      renderHeader();
      renderTab();
    };
    var shieldBtn = box.querySelector('#ps-shield-toggle');
    if (shieldBtn) shieldBtn.onclick = function () {
      // Екіпірувати щит можна, лише якщо він є в інвентарі (зняти — завжди)
      if (!inv.shield && !ownedShield()) return;
      inv.shield = !inv.shield;
      persist();
      renderHeader();
      renderTab();
    };
    var addBtn = box.querySelector('#ps-add-item');
    if (addBtn) addBtn.onclick = openItemModal;
    var addArmorBtn = box.querySelector('#ps-add-armor');
    if (addArmorBtn) addArmorBtn.onclick = openArmorModal;
    // Налаштування (attunement) магічних предметів — максимум 3 одночасно
    Array.prototype.forEach.call(box.querySelectorAll('[data-attune]'), function (b) {
      b.onclick = function () {
        var it = inv.itemsList[parseInt(b.getAttribute('data-attune'))];
        if (!it) return;
        if (!it.attuned && attunedCount() >= 3) {
          logRoll(t('attunementReq'), t('attunementLimit'), '✖');
          return;
        }
        it.attuned = !it.attuned;
        persist();
        renderTab();
      };
    });
    Array.prototype.forEach.call(box.querySelectorAll('[data-item-qty]'), function (b) {
      b.onclick = function () {
        var i = parseInt(b.getAttribute('data-i'));
        var it = inv.itemsList[i];
        if (!it) return;
        it.qty = Math.max(1, (it.qty || 1) + parseInt(b.getAttribute('data-item-qty')));
        persist();
        renderTab();
      };
    });
    Array.prototype.forEach.call(box.querySelectorAll('[data-item-del]'), function (b) {
      b.onclick = function () {
        inv.itemsList.splice(parseInt(b.getAttribute('data-item-del')), 1);
        // Якщо видалили останній щит — знімаємо екіпірований щит
        if (inv.shield && !ownedShield()) inv.shield = false;
        // Якщо видалили останню броню, що зараз екіпірована — знімаємо її
        if (inv.armor !== 'none' && !ownedArmorIds()[inv.armor]) inv.armor = 'none';
        persist();
        renderHeader();
        renderTab();
      };
    });
    Array.prototype.forEach.call(box.querySelectorAll('[data-coin]'), function (input) {
      input.addEventListener('input', function () {
        inv[input.getAttribute('data-coin')] = Math.max(0, parseInt(input.value) || 0);
        persist();
        var totalEl = document.getElementById('ps-gold-total');
        if (totalEl) totalEl.textContent = currencyTotalGP().toFixed(2);
      });
    });
    // Toggle-блоки рис
    Array.prototype.forEach.call(box.querySelectorAll('[data-toggle]'), function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-toggle');
        var body = document.getElementById(id);
        if (!body) return;
        var hidden = body.classList.toggle('hidden');
        b.setAttribute('aria-expanded', String(!hidden));
        var arrow = box.querySelector('[data-arrow="' + id + '"]');
        if (arrow) arrow.textContent = hidden ? '▼' : '▲';
      };
    });
    // Нотатки
    var notes = box.querySelector('#ps-notes');
    if (notes) {
      var status = box.querySelector('#ps-notes-status');
      // Стан «незбережено/збережено»: помаранчевий поки є зміни, зелений після збереження
      function setStatus(state) {
        if (!status) return;
        if (state === 'dirty') {
          status.textContent = t('unsavedChanges');
          status.className = 'text-xs font-semibold text-amber-600';
        } else if (state === 'saved') {
          status.textContent = '✔ ' + t('savedState');
          status.className = 'text-xs font-semibold text-forest';
        } else {
          status.textContent = '';
        }
      }
      function saveNotes() {
        if (ch.playNotes === notes.value) return; // нема змін — не перезаписуємо
        ch.playNotes = notes.value;
        persist();
        setStatus('saved');
      }
      notes.addEventListener('blur', saveNotes);
      // Автозбереження з дебаунсом + індикатор незбережених змін
      var notesTimer = null;
      notes.addEventListener('input', function () {
        setStatus('dirty');
        if (notesTimer) clearTimeout(notesTimer);
        notesTimer = setTimeout(saveNotes, 1200);
      });
      var saveBtn = box.querySelector('#ps-save-notes');
      if (saveBtn) saveBtn.onclick = saveNotes;
    }
  }

  // ---------- Каркас сторінки ----------
  root.innerHTML =
    '<div id="ps-header" class="bg-white border border-slate-200 rounded-md shadow-sm p-4 mb-4"></div>' +
    '<div class="border-b border-slate-200 mb-4 overflow-x-auto"><nav id="ps-tabs" role="tablist" class="flex gap-1 min-w-max"></nav></div>' +
    '<div id="ps-tab-content"></div>' +
    '<section class="bg-white border border-slate-200 rounded-md shadow-sm p-4 mt-6">' +
      '<div class="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">' +
        '<h2 class="font-heading text-lg font-bold text-forest">' + esc(t('rollLog')) + '</h2>' +
        '<button id="ps-clear-log" class="' + btnSm + '">' + esc(t('clearLog')) + '</button>' +
      '</div>' +
      '<div id="ps-roll-log" class="max-h-64 overflow-y-auto"></div>' +
    '</section>';
  document.getElementById('ps-clear-log').onclick = function () { rollLog = []; ch.playState.rollLog = []; persist(); renderRollLog(); };

  renderHeader();
  renderTabsNav();
  renderTab();
  renderRollLog();
})();
