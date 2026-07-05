'use strict';
// ===== Збереження сутичок + перегляд статблоків =====
// Залежить від storage.js та глобалів encounter-builder (encounter, render, bySlug, ukName, DND_MONSTERS)
(function () {
  function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});}
  function nl(x){return esc(x).replace(/\n/g,'<br>');}

  window.statblockHTML = function (m) {
    if (!m) return '<div class="text-xs text-red-500">Монстра не знайдено.</div>';
    var f = m.fields || {};
    var fieldOrder = ['AC','HP','Speed','Skills','Senses','Languages','Immunities','Resistances','Vulnerabilities','Gear','CR'];
    var fieldLabels = {AC:'КЗ',HP:'ХП',Speed:'Швидкість',Skills:'Навички',Senses:'Відчуття',Languages:'Мови',Immunities:'Імунітети',Resistances:'Опір',Vulnerabilities:'Вразливості',Gear:'Спорядження',CR:'CR'};
    var rows = fieldOrder.filter(function(k){return f[k];}).map(function(k){
      return '<div class="flex gap-2"><span class="text-slate-500 shrink-0">'+fieldLabels[k]+':</span><span class="font-semibold">'+esc(f[k])+'</span></div>';
    }).join('');
    var ab = m.abilities || {};
    var abOrder = [['str','СИЛ'],['dex','СПР'],['con','ТІЛ'],['int','ІНТ'],['wis','МУД'],['cha','ХАР']];
    var abHtml = abOrder.map(function(p){
      var a = ab[p[0]]||{}; var mod=(a.mod>=0?'+':'')+(a.mod||0);
      return '<div class="text-center bg-slate-50 border border-slate-200 rounded p-1"><div class="text-[9px] font-bold text-slate-500">'+p[1]+'</div><div class="text-sm font-bold">'+(a.score!=null?a.score:'—')+'</div><div class="text-[10px] text-slate-500">'+mod+'</div></div>';
    }).join('');
    var secs = (m.sections||[]).map(function(s){
      return '<div class="mt-2"><div class="text-[11px] font-bold text-forest uppercase">'+esc(s.title)+'</div><div class="text-xs text-slate-700 leading-snug mt-0.5">'+nl(s.text)+'</div></div>';
    }).join('');
    return '<div class="text-xs">'+
      '<div class="grid grid-cols-6 gap-1 mb-2">'+abHtml+'</div>'+
      '<div class="space-y-0.5 text-xs">'+rows+'</div>'+secs+'</div>';
  };

  function saveEncounter(){
    if (!encounter || !encounter.length){ alert('Сутичка порожня — додайте монстрів.'); return; }
    if (!window.DndStore) return;
    var name = prompt('Назва сутички:', 'Сутичка (' + encounter.reduce(function(a,e){return a+e.qty;},0) + ' монст.)');
    if (name===null) return;
    var ps = document.getElementById('partySize'); var pl = document.getElementById('partyLevel');
    DndStore.save('encounters', {
      type:'encounter', name:(name||'Сутичка').trim(),
      partySize: ps?ps.value:'4', partyLevel: pl?pl.value:'1',
      monsters: JSON.parse(JSON.stringify(encounter)),
    });
    renderSavedEncounters();
    var b=document.getElementById('saveEncBtn'); if(b){var o=b.textContent;b.textContent='✅ Збережено';setTimeout(function(){b.textContent=o;},1500);}
  }
  function loadEncounter(id){
    var rec = DndStore.get('encounters', id); if(!rec) return;
    window.encounter = JSON.parse(JSON.stringify(rec.monsters||[]));
    var ps=document.getElementById('partySize'); var pl=document.getElementById('partyLevel');
    if(ps&&rec.partySize) ps.value=rec.partySize;
    if(pl&&rec.partyLevel) pl.value=rec.partyLevel;
    if(typeof render==='function') render();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function deleteEncounter(id){
    var rec=DndStore.get('encounters', id);
    if(!confirm('Видалити «'+((rec&&rec.name)||'сутичка')+'»?')) return;
    DndStore.remove('encounters', id); renderSavedEncounters();
  }
  window.renderSavedEncounters = function(){
    if(!window.DndStore) return;
    var wrap=document.getElementById('savedEncList'); var empty=document.getElementById('savedEncEmpty');
    if(!wrap) return;
    var items=DndStore.list('encounters').slice().sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0);});
    wrap.innerHTML='';
    if(!items.length){ if(empty) empty.style.display=''; return; }
    if(empty) empty.style.display='none';
    items.forEach(function(rec){
      var mons=rec.monsters||[];
      var listTxt=mons.map(function(e){var m=(typeof bySlug==='function')?bySlug(e.slug):null; var nm=m?((typeof ukName==='function')?ukName(m):m.name):e.slug; return esc(nm)+' ×'+e.qty;}).join(', ');
      var card=document.createElement('div');
      card.className='border border-slate-200 rounded-xl p-3 bg-slate-50';
      var sbId='sb_'+rec.id;
      card.innerHTML='<div class="font-bold text-sm text-forest">'+esc(rec.name)+'</div>'+
        '<div class="text-[11px] text-ui-muted mt-0.5">Партія: '+esc(rec.partySize||'?')+' осіб, рів. '+esc(rec.partyLevel||'?')+'</div>'+
        '<div class="text-xs text-slate-700 mt-1">'+ (listTxt||'—') +'</div>'+
        '<div class="mt-2 flex flex-wrap gap-2">'+
          '<button data-a="load" class="py-1.5 px-3 bg-[#14532D] text-white rounded-lg text-xs font-bold hover:bg-[#166534]">▶ Відкрити</button>'+
          '<button data-a="stat" class="py-1.5 px-3 border border-slate-300 text-slate-700 rounded-lg text-xs font-bold hover:border-forest">📜 Статблоки</button>'+
          '<button data-a="del" class="py-1.5 px-2 border border-red-300 text-red-600 rounded-lg text-xs font-bold hover:bg-red-50">🗑</button>'+
        '</div>'+
        '<div id="'+sbId+'" class="hidden mt-2 space-y-2"></div>';
      card.querySelector('[data-a=load]').onclick=function(){loadEncounter(rec.id);};
      card.querySelector('[data-a=del]').onclick=function(){deleteEncounter(rec.id);};
      card.querySelector('[data-a=stat]').onclick=function(){
        var box=document.getElementById(sbId);
        if(box.classList.contains('hidden')){
          box.innerHTML=mons.map(function(e){
            var m=(typeof bySlug==='function')?bySlug(e.slug):null;
            var nm=m?((typeof ukName==='function')?ukName(m):m.name):e.slug;
            return '<div class="border border-slate-200 rounded-lg p-2 bg-white"><div class="font-bold text-sm text-forest mb-1">'+esc(nm)+' ×'+e.qty+(m&&m.name&&m.name!==nm?' <span class="text-[10px] text-slate-400">('+esc(m.name)+')</span>':'')+'</div>'+window.statblockHTML(m)+'</div>';
          }).join('');
          box.classList.remove('hidden');
        } else { box.classList.add('hidden'); }
      };
      wrap.appendChild(card);
    });
  };

  document.addEventListener('DOMContentLoaded', function(){
    var b=document.getElementById('saveEncBtn'); if(b) b.addEventListener('click', saveEncounter);
    if(window.renderSavedEncounters) window.renderSavedEncounters();
  });
})();
