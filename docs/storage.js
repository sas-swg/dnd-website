'use strict';
// ===== Спільне сховище (localStorage) для всього сайту =====
// Колекції: characters, monsters, npcs, loot, encounters
// Окремо: чернетка персонажа (draft) для автозбереження в конструкторі.

var DndStore = (function () {
  var PREFIX = 'dnd_';
  var KEYS = {
    characters: 'dnd_characters',
    monsters: 'dnd_monsters',
    npcs: 'dnd_npcs',
    loot: 'dnd_loot',
    encounters: 'dnd_encounters',
    draft: 'dnd_char_draft',
  };

  function safeParse(str, fallback) {
    try { return str ? JSON.parse(str) : fallback; } catch (e) { return fallback; }
  }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function write(key, val) { try { localStorage.setItem(key, val); return true; } catch (e) { return false; } }

  function keyFor(col) { return KEYS[col] || (PREFIX + col); }

  function list(col) {
    var arr = safeParse(read(keyFor(col)), []);
    return Array.isArray(arr) ? arr : [];
  }
  function get(col, id) {
    return list(col).find(function (x) { return x.id === id; }) || null;
  }
  function genId() {
    return 'id_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
  }
  // Зберегти (upsert). Якщо obj.id є — оновлює, інакше створює.
  function save(col, obj) {
    var arr = list(col);
    if (!obj.id) obj.id = genId();
    obj.updatedAt = Date.now();
    var i = arr.findIndex(function (x) { return x.id === obj.id; });
    if (i >= 0) { arr[i] = obj; } else { obj.createdAt = obj.createdAt || Date.now(); arr.push(obj); }
    write(keyFor(col), JSON.stringify(arr));
    return obj;
  }
  function remove(col, id) {
    var arr = list(col).filter(function (x) { return x.id !== id; });
    write(keyFor(col), JSON.stringify(arr));
  }
  function clear(col) { write(keyFor(col), JSON.stringify([])); }

  // Чернетка (один об'єкт, не масив)
  function getDraft() { return safeParse(read(KEYS.draft), null); }
  function setDraft(obj) { write(KEYS.draft, JSON.stringify(obj)); }
  function clearDraft() { try { localStorage.removeItem(KEYS.draft); } catch (e) {} }

  // Експорт/імпорт одного об'єкта як JSON-файлу
  function downloadJSON(obj, filename) {
    var blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename || 'dnd-export.json';
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
  }
  function importJSONFile(file, cb) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = safeParse(e.target.result, null);
      cb(data);
    };
    reader.readAsText(file);
  }

  return {
    KEYS: KEYS, list: list, get: get, save: save, remove: remove, clear: clear,
    genId: genId, getDraft: getDraft, setDraft: setDraft, clearDraft: clearDraft,
    downloadJSON: downloadJSON, importJSONFile: importJSONFile,
  };
})();
if (typeof window !== 'undefined') window.DndStore = DndStore;

// ===== Читання персонажа з файлу (JSON або PDF із вбудованим JSON) =====
(function () {
  if (typeof DndStore === 'undefined') return;
  DndStore.readCharFile = function (file, cb) {
    if (!file) { cb(null); return; }
    var name = (file.name || '').toLowerCase();
    var isJson = name.slice(-5) === '.json';
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        if (isJson) { cb(JSON.parse(e.target.result)); return; }
        var buf = new Uint8Array(e.target.result);
        var s = '';
        for (var i = 0; i < buf.length; i++) s += String.fromCharCode(buf[i]);
        var mk = '%DNDCHAR:';
        var idx = s.indexOf(mk);
        if (idx < 0) { try { cb(JSON.parse(s)); } catch (_) { cb(null); } return; }
        var end = s.indexOf('\n', idx + mk.length);
        if (end < 0) end = s.length;
        var b64 = s.slice(idx + mk.length, end).replace(/[^A-Za-z0-9+/=]/g, '');
        var json = decodeURIComponent(escape(atob(b64)));
        cb(JSON.parse(json));
      } catch (err) { cb(null); }
    };
    if (isJson) reader.readAsText(file); else reader.readAsArrayBuffer(file);
  };
  if (typeof window !== 'undefined') window.DndStore = DndStore;
})();
