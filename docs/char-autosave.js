'use strict';
// ===== Автозбереження та відновлення персонажа в конструкторі =====
// Залежить від storage.js (DndStore) та глобального об'єкта character з character-creator.html
(function () {
  if (typeof window === 'undefined') return;
  var restoring = false;
  var skipSave = false;
  var currentSavedId = null;
  var saveTimer = null;

  function deepCopy(o) { try { return JSON.parse(JSON.stringify(o)); } catch (e) { return o; } }
  function safe(name) {
    try { if (typeof window[name] === 'function') { return window[name].apply(null, Array.prototype.slice.call(arguments, 1)); } }
    catch (e) { /* ignore */ }
  }
  function isComplete() {
    try {
      return !!(character && character.classId && character.raceId);
    } catch (e) { return false; }
  }

  // ---- Знімок усіх статичних полів форми (за id) ----
  function snapshotInputs() {
    var map = {};
    var els = document.querySelectorAll('input[id], select[id], textarea[id]');
    els.forEach(function (el) {
      if (el.type === 'checkbox' || el.type === 'radio') map[el.id] = { c: el.checked };
      else map[el.id] = { v: el.value };
    });
    return map;
  }
  function applyInputs(map) {
    if (!map) return;
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var rec = map[id];
      if (rec && typeof rec.c !== 'undefined') el.checked = rec.c;
      else if (rec && typeof rec.v !== 'undefined') el.value = rec.v;
    });
  }

  // ---- Заповнити статичні поля форми З даних персонажа (для відновлення/імпорту) ----
  function fillInputsFromCharacter() {
    if (typeof character === 'undefined' || !character) return;
    function setV(id, val) {
      var el = document.getElementById(id);
      if (!el) return;
      if (el.type === 'checkbox') el.checked = !!val;
      else el.value = (val == null ? '' : val);
    }
    var d = character.description || {};
    setV('desc-name', d.name); setV('desc-player', d.player); setV('desc-alignment', d.alignment);
    setV('desc-background', d.background); setV('desc-age', d.age); setV('desc-height', d.height);
    setV('desc-weight', d.weight); setV('desc-eyes', d.eyes); setV('desc-skin', d.skin);
    setV('desc-hair', d.hair); setV('desc-appearance', d.appearance); setV('desc-backstory', d.backstory);
    setV('desc-allies', d.allies); setV('desc-treasure', d.treasure); setV('desc-traits', d.traits);
    setV('desc-ideals', d.ideals); setV('desc-bonds', d.bonds); setV('desc-flaws', d.flaws);
    var inv = character.inventory || {};
    setV('inv-armor', inv.armor); setV('inv-shield', inv.shield); setV('inv-weapons', inv.weapons);
    setV('inv-items', inv.items); setV('inv-cp', inv.cp); setV('inv-sp', inv.sp);
    setV('inv-gp', inv.gp); setV('inv-pp', inv.pp);
    if (inv.hpCurrent != null) setV('inv-hp-current', inv.hpCurrent);
    var cbg = character.customBackground || {};
    setV('cbg-name', cbg.name); setV('cbg-feature', cbg.feature);
  }

  // ---- Повне перемальовування UI під відновлений стан ----
  function rebuildUI(state) {
    if (!state || !state.character) return;
    restoring = true;
    try {
      var saved = deepCopy(state.character);
      // 1) базова перемальовка (як у window.onload)
      // ВАЖЛИВО: присвоюємо лексичній `character` (let) — яку читають функції конструктора,
      // а не window.character (let на верхньому рівні НЕ потрапляє у window).
      // ВАЖЛИВО: окрема копія, щоб selectClass/selectRace (які скидають spells/skills)
      // не затерли дані в `saved`, з якого ми потім відновлюємо поля.
      try { character = deepCopy(saved); } catch (e) {}
      try { window.character = character; } catch (e) {}
      safe('renderClassList'); safe('populateLevelSelect'); safe('renderRaceCategoryFilter');
      safe('renderRaceList'); safe('renderOriginASI'); safe('renderProgression');
      safe('populateAlignments'); safe('populateBackgrounds'); safe('populateArmorSelect');

      // 2) клас (selectClass скидає під-поля — відновлюємо їх після)
      if (saved.classId && typeof DND_CLASSES !== 'undefined' && DND_CLASSES[saved.classId]) {
        safe('selectClass', saved.classId);
        character.level = saved.level;
        character.subclass = saved.subclass; character.subclassId = saved.subclassId;
        character.fightingStyle = saved.fightingStyle;
        character.skills = saved.skills || [];
        character.spells = saved.spells || { cantrips: [], prepared: [] };
        character.asiSelections = saved.asiSelections || {};
        var lvlSel = document.getElementById('class-level-select');
        if (lvlSel) lvlSel.value = String(saved.level || 1);
        safe('updateLevel');
      }

      // 3) раса
      if (saved.raceId && typeof DND_RACES !== 'undefined' && DND_RACES[saved.raceId]) {
        safe('selectRace', saved.raceId);
        character.subraceId = saved.subraceId;
        character.raceSkillChoices = saved.raceSkillChoices || [];
      }

      // 4) метод характеристик + базові значення
      character.statMethod = saved.statMethod || 'standard';
      character.baseStats = saved.baseStats || character.baseStats;
      character.standardAssign = saved.standardAssign || character.standardAssign;
      character.originASI = saved.originASI || character.originASI;
      character.proficiencies = saved.proficiencies || character.proficiencies;
      character.customBackground = saved.customBackground || character.customBackground;
      character.inventory = saved.inventory || character.inventory;
      character.description = saved.description || character.description;
      safe('setStatMethod', character.statMethod);

      // 5) відновлюємо статичні поля форми та синхронізуємо
      applyInputs(state.inputs);
      fillInputsFromCharacter();
      safe('updateDescription'); safe('updateInventory'); safe('updateCustomBackground');

      // 6) додаткові панелі
      ['renderSubclasses','renderSubclassFeatures','renderFightingStyle','renderProficiencies',
       'renderSpellcasting','renderClassFeatures','renderClassResources','renderProgression',
       'renderMasteryPanel','renderCbgPickers','renderLangToolsPanel','renderProficiencySummary',
       'renderWeaponList','renderInventoryTab','renderAbilitiesEditor','renderAbilitiesSummary',
       'renderRaceSkillChoice','renderLineagePicker','renderBackgroundDetail','renderSummary'
      ].forEach(function (fn) { safe(fn); });

      // 7) переходимо на ту саму вкладку
      safe('switchTab', state.currentTab || 1);
    } finally {
      restoring = false;
    }
  }

  // ---- Автозбереження ----
  function doSave() {
    if (restoring || skipSave) return;
    if (typeof character === 'undefined') return;
    var savePersisted = true;
    var draft = {
      v: 1,
      character: deepCopy(character),
      currentTab: (typeof currentTab !== 'undefined' ? currentTab : 1),
      inputs: snapshotInputs(),
      savedId: currentSavedId,
      updatedAt: Date.now(),
    };
    if (isComplete() && window.DndStore) {
      var obj = {
        id: currentSavedId || undefined,
        type: 'character',
        name: (character.description.name || 'Без імені').trim(),
        className: character.className || '',
        raceName: character.raceName || '',
        level: character.level || 1,
        character: draft.character,
      };
      var res = DndStore.save('characters', obj);
      currentSavedId = res.id;
      draft.savedId = currentSavedId;
      savePersisted = !!(DndStore.get('characters', currentSavedId));
    }
    if (window.DndStore) DndStore.setDraft(draft);
    if (!savePersisted) { setStatus('⚠️ Сховище переповнене — персонажа не збережено'); }
    else setStatus(isComplete() ? '💾 Збережено' : '📝 Чернетка збережена');
  }
  function scheduleSave() {
    if (restoring || skipSave) return;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(doSave, 400);
  }

  // ---- Тулбар ----
  var statusEl = null;
  function setStatus(txt) { if (statusEl) statusEl.textContent = txt; }
  function buildToolbar() {
    var bar = document.createElement('div');
    bar.id = 'char-autosave-toolbar';
    bar.style.cssText = 'position:fixed;bottom:82px;left:14px;right:auto;z-index:30;display:flex;flex-wrap:wrap;gap:8px;align-items:center;background:rgba(255,255,255,.97);border:1px solid #cbd5e1;border-radius:10px;padding:6px 10px;box-shadow:0 2px 8px rgba(0,0,0,.12);font-size:12px;max-width:calc(100vw - 28px);';
    statusEl = document.createElement('span');
    statusEl.style.cssText = 'color:#475569;font-weight:600;white-space:nowrap;';
    statusEl.textContent = '💾 Автозбереження';
    var exp = document.createElement('button');
    exp.type = 'button'; exp.textContent = '⬇ JSON';
    exp.title = 'Експорт персонажа у файл';
    exp.style.cssText = 'cursor:pointer;border:1px solid #94a3b8;background:#fff;color:#334155;border-radius:8px;padding:4px 8px;font-weight:700;';
    exp.onclick = exportCharacter;
    var sheetBtn = document.createElement('button');
    sheetBtn.type = 'button'; sheetBtn.textContent = '📄 Аркуш';
    sheetBtn.title = 'Зберегти й відкрити аркуш персонажа';
    sheetBtn.style.cssText = 'cursor:pointer;border:1px solid #16a34a;background:#16a34a;color:#fff;border-radius:8px;padding:4px 8px;font-weight:700;';
    sheetBtn.onclick = saveAndOpenSheet;
    var loadBtn = document.createElement('button');
    loadBtn.type = 'button'; loadBtn.textContent = '⬆ Завантажити';
    loadBtn.title = 'Завантажити персонажа з PDF або JSON';
    loadBtn.style.cssText = 'cursor:pointer;border:1px solid #94a3b8;background:#fff;color:#334155;border-radius:8px;padding:4px 8px;font-weight:700;';
    var fileInput = document.createElement('input');
    fileInput.type = 'file'; fileInput.accept = '.pdf,.json,application/pdf,application/json'; fileInput.style.display = 'none';
    fileInput.addEventListener('change', function (e) { var f = e.target.files && e.target.files[0]; if (f) importCharFile(f); e.target.value = ''; });
    loadBtn.onclick = function () { fileInput.click(); };
    var reset = document.createElement('button');
    reset.type = 'button'; reset.textContent = '🔄 Почати заново';
    reset.style.cssText = 'cursor:pointer;border:1px solid #ef4444;background:#fff;color:#b91c1c;border-radius:8px;padding:4px 8px;font-weight:700;';
    reset.onclick = startOver;
    // Кнопка згортання панелі, щоб вона не затуляла контент
    var collapseBtn = document.createElement('button');
    collapseBtn.type = 'button'; collapseBtn.textContent = '−';
    collapseBtn.title = 'Згорнути панель';
    collapseBtn.setAttribute('aria-label', 'Згорнути панель автозбереження');
    collapseBtn.style.cssText = 'cursor:pointer;border:1px solid #94a3b8;background:#fff;color:#334155;border-radius:8px;padding:4px 9px;font-weight:700;line-height:1;';
    var expandBtn = document.createElement('button');
    expandBtn.type = 'button'; expandBtn.textContent = '💾';
    expandBtn.title = 'Розгорнути панель автозбереження';
    expandBtn.setAttribute('aria-label', 'Розгорнути панель автозбереження');
    expandBtn.style.cssText = 'position:fixed;bottom:82px;left:14px;z-index:30;display:none;cursor:pointer;border:1px solid #cbd5e1;background:rgba(255,255,255,.97);border-radius:50%;width:40px;height:40px;box-shadow:0 2px 8px rgba(0,0,0,.12);font-size:16px;';
    var COLLAPSE_KEY = 'char-autosave-collapsed';
    function setCollapsed(collapsed) {
      bar.style.display = collapsed ? 'none' : 'flex';
      expandBtn.style.display = collapsed ? 'block' : 'none';
      try { localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0'); } catch (e) {}
    }
    collapseBtn.onclick = function () { setCollapsed(true); };
    expandBtn.onclick = function () { setCollapsed(false); };
    bar.appendChild(statusEl); bar.appendChild(sheetBtn); bar.appendChild(exp); bar.appendChild(loadBtn); bar.appendChild(reset); bar.appendChild(collapseBtn); bar.appendChild(fileInput);
    document.body.appendChild(bar);
    document.body.appendChild(expandBtn);
    // Резервуємо місце внизу сторінки, щоб панель не перекривала контент і кнопки
    var basePad = parseInt(getComputedStyle(document.body).paddingBottom, 10) || 0;
    document.body.style.paddingBottom = (basePad + 140) + 'px';
    try { if (localStorage.getItem(COLLAPSE_KEY) === '1') setCollapsed(true); } catch (e) {}
  }

  function saveAndOpenSheet() {
    if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
    doSave();
    if (!isComplete()) { alert('Спочатку оберіть клас і расу — тоді персонаж збережеться у список.'); return; }
    if (!currentSavedId || (window.DndStore && !DndStore.get('characters', currentSavedId))) {
      alert('Не вдалося зберегти персонажа. Можливо, сховище браузера переповнене або заблоковане (приватний режим).'); return;
    }
    location.href = 'play-sheet.html?char=' + encodeURIComponent(currentSavedId);
  }
  function exportCharacter() {
    if (!window.DndStore) return;
    var name = ((character.description && character.description.name) || 'persona').trim() || 'persona';
    var fname = 'dnd-' + name.replace(/[^\wа-яА-ЯіЇєҐґ-]+/gi, '_') + '.json';
    DndStore.downloadJSON({ type: 'dnd-character', savedAt: Date.now(), character: deepCopy(character) }, fname);
  }

  function importCharFile(file) {
    if (!window.DndStore || !DndStore.readCharFile) return;
    DndStore.readCharFile(file, function (data) {
      if (!data) { alert('Не вдалося зчитати персонажа з файлу. Переконайтеся, що це PDF/JSON, експортований з цього сайту.'); return; }
      var ch = data.character || data;
      if (!ch || typeof ch !== 'object' || !ch.description) { alert('Файл не містить даних персонажа.'); return; }
      currentSavedId = null;
      rebuildUI({ character: ch, currentTab: 1, inputs: null });
      doSave();
      setStatus('✅ Завантажено');
    });
  }

  function startOver() {
    if (!confirm('Почати заново? Поточна чернетка буде очищена. Збережені персонажі залишаться.')) return;
    skipSave = true;
    if (window.DndStore) DndStore.clearDraft();
    // прибираємо ?load з URL щоб не підтягнути знову
    try { history.replaceState(null, '', location.pathname); } catch (e) {}
    location.reload();
  }

  // ---- Ініціалізація (після window.onload конструктора) ----
  window.addEventListener('load', function () {
    setTimeout(function () {
      buildToolbar();
      var params = new URLSearchParams(location.search);
      var loadId = params.get('load');
      if (loadId && window.DndStore) {
        var rec = DndStore.get('characters', loadId);
        if (rec && rec.character) {
          currentSavedId = rec.id;
          rebuildUI({ character: rec.character, currentTab: 1, inputs: null });
          doSave();
        }
      } else if (window.DndStore) {
        var draft = DndStore.getDraft();
        if (draft && draft.character) {
          currentSavedId = draft.savedId || null;
          rebuildUI(draft);
        }
      }
      document.addEventListener('input', scheduleSave, true);
      document.addEventListener('change', scheduleSave, true);
      document.addEventListener('click', scheduleSave, true);
      window.addEventListener('beforeunload', function () { if (!skipSave) doSave(); });
    }, 60);
  });
})();
