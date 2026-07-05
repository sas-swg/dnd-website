'use strict';
// ===== Додаткова володіння бронею/зброєю в конструкторі =====
// Залежить від глобалів: character, renderProficiencies
(function () {
  var ARMOR = [['ep-a-light','Легка броня'],['ep-a-medium','Середня броня'],['ep-a-heavy','Важка броня'],['ep-a-shield','Щити']];
  var WEAPONS = [['ep-w-sm','Проста ближня зброя'],['ep-w-sr','Проста дальня зброя'],['ep-w-mm','Військова ближня зброя'],['ep-w-mr','Військова дальня зброя']];
  function ensure(){
    if (typeof character === 'undefined') return false;
    if (!character.proficiencies) character.proficiencies = {};
    if (!Array.isArray(character.proficiencies.extraArmor)) character.proficiencies.extraArmor = [];
    if (!Array.isArray(character.proficiencies.extraWeapons)) character.proficiencies.extraWeapons = [];
    return true;
  }
  function el(id){ return document.getElementById(id); }
  function readCheckboxes(){
    if(!ensure()) return;
    character.proficiencies.extraArmor = ARMOR.filter(function(p){var e=el(p[0]);return e&&e.checked;}).map(function(p){return p[1];});
    character.proficiencies.extraWeapons = WEAPONS.filter(function(p){var e=el(p[0]);return e&&e.checked;}).map(function(p){return p[1];});
  }
  function syncFromChar(){
    if(!ensure()) return;
    ARMOR.forEach(function(p){var e=el(p[0]);if(e)e.checked=character.proficiencies.extraArmor.indexOf(p[1])>=0;});
    WEAPONS.forEach(function(p){var e=el(p[0]);if(e)e.checked=character.proficiencies.extraWeapons.indexOf(p[1])>=0;});
  }
  function chip(id,label){ return '<label class="flex items-center gap-1.5 text-xs bg-white border border-slate-200 rounded px-2 py-1 cursor-pointer hover:border-forest"><input type="checkbox" id="'+id+'" class="w-3.5 h-3.5 text-forest rounded">'+label+'</label>'; }
  function buildPanel(){
    if(document.getElementById('ep-panel')) return;
    var host=document.getElementById('class-weapons'); if(!host) return;
    var panel=document.createElement('div');
    panel.id='ep-panel';
    panel.className='mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3';
    panel.innerHTML='<div class="text-xs font-bold text-amber-800 mb-1">➕ Додаткове володіння (якщо клас не дає)</div>'+
      '<div class="text-[11px] text-slate-500 mb-2">Позначте броню/зброю, якою хочете володіти додатково (напр. важка броня, військова дальня зброя).</div>'+
      '<div class="mb-1 text-[11px] font-bold text-slate-600 uppercase">Броня</div>'+
      '<div class="flex flex-wrap gap-1.5 mb-2">'+ARMOR.map(function(p){return chip(p[0],p[1]);}).join('')+'</div>'+
      '<div class="mb-1 text-[11px] font-bold text-slate-600 uppercase">Зброя</div>'+
      '<div class="flex flex-wrap gap-1.5">'+WEAPONS.map(function(p){return chip(p[0],p[1]);}).join('')+'</div>';
    host.insertAdjacentElement('afterend', panel);
    panel.addEventListener('change', function(){ readCheckboxes(); if(typeof renderProficiencies==='function') renderProficiencies(); });
  }
  function wrap(){
    if(typeof window.renderProficiencies==='function' && !window.renderProficiencies.__ep){
      var _rp=window.renderProficiencies;
      window.renderProficiencies=function(){
        _rp && _rp();
        try{
          ensure();
          var ea=character.proficiencies.extraArmor, ew=character.proficiencies.extraWeapons;
          if(ea.length){ var ae=document.getElementById('class-armor'); if(ae) ae.innerText += ' + '+ea.join(', ')+' (дод.)'; }
          if(ew.length){ var we=document.getElementById('class-weapons'); if(we) we.innerText += ' + '+ew.join(', ')+' (дод.)'; }
          syncFromChar();
        }catch(e){}
      };
      window.renderProficiencies.__ep=true;
    }
  }
  function init(){ ensure(); wrap(); buildPanel(); syncFromChar(); if(typeof renderProficiencies==='function') renderProficiencies(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else setTimeout(init, 30);
})();
