'use strict';
// ===== Створення власних монстрів (енкаунтер-білдер) =====
// Залежить від storage.js та глобалів: DND_MONSTERS, ukName, searchableName, render
(function () {
  function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});}
  function mod(score){ return Math.floor((Number(score||10)-10)/2); }

  function refreshDatalist(){
    var list=document.getElementById('monsterOptions'); if(!list||typeof DND_MONSTERS==='undefined') return;
    var sorted=DND_MONSTERS.slice().filter(function(m){return (m.xp||0)>0;}).sort(function(a,b){return ukName(a).localeCompare(ukName(b),'uk');});
    list.innerHTML=sorted.map(function(m){return '<option value="'+searchableName(m).replace(/"/g,'&quot;')+'" data-slug="'+m.slug+'"></option>';}).join('');
  }

  function buildMonster(rec){
    var a={};
    ['str','dex','con','int','wis','cha'].forEach(function(k){ var sc=Number(rec.abilities&&rec.abilities[k]||10); a[k]={score:sc,mod:mod(sc),save:mod(sc)}; });
    var f={};
    if(rec.ac) f.AC=String(rec.ac);
    if(rec.hp) f.HP=String(rec.hp);
    if(rec.speed) f.Speed=String(rec.speed);
    f.CR=String(rec.cr||'?')+(rec.xp?(' (XP '+rec.xp+')'):'');
    var sections=[];
    if(rec.attacks && rec.attacks.trim()) sections.push({title:'ACTIONS', text:rec.attacks.trim()});
    if(rec.traits && rec.traits.trim()) sections.push({title:'TRAITS', text:rec.traits.trim()});
    return {
      slug: rec.slug, name: rec.name, meta:'Власний монстр', type:'Custom', subtype:'', size:rec.size||'Medium',
      alignment:'', abilities:a, fields:f, cr:f.CR, crValue:String(rec.cr||'?'), xp:Number(rec.xp||0),
      sections:sections, _custom:true,
    };
  }

  function mergeStored(){
    if(!window.DndStore || typeof DND_MONSTERS==='undefined') return;
    DndStore.list('monsters').forEach(function(rec){
      var m=rec.monster||rec;
      if(!m||!m.slug) return;
      if(!DND_MONSTERS.some(function(x){return x.slug===m.slug;})) DND_MONSTERS.push(m);
    });
  }

  function createFromForm(){
    var g=function(id){var e=document.getElementById(id);return e?e.value.trim():'';};
    var name=g('cmName');
    if(!name){ alert('Вкажіть назву монстра.'); return; }
    var xp=Number(g('cmXp')||0);
    if(!xp){ alert('Вкажіть XP (потрібно для обрахунку складності).'); return; }
    var slug='custom-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);
    var rec={ slug:slug, name:name, cr:g('cmCr')||'?', xp:xp, ac:g('cmAc'), hp:g('cmHp'), speed:g('cmSpeed'),
      attacks:g('cmAttacks'), traits:g('cmTraits'),
      abilities:{str:g('cmStr')||10,dex:g('cmDex')||10,con:g('cmCon')||10,int:g('cmInt')||10,wis:g('cmWis')||10,cha:g('cmCha')||10} };
    var mon=buildMonster(rec);
    DND_MONSTERS.push(mon);
    if(window.DndStore) DndStore.save('monsters', { type:'monster', name:name, slug:slug, monster:mon });
    refreshDatalist(); renderCustomList();
    ['cmName','cmCr','cmXp','cmAc','cmHp','cmSpeed','cmAttacks','cmTraits'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
    var st=document.getElementById('cmStatus'); if(st){st.textContent='✅ Монстра «'+name+'» додано — шукайте його у полі вище.';setTimeout(function(){st.textContent='';},4000);}
  }

  window.renderCustomList=function(){
    var wrap=document.getElementById('cmList'); if(!wrap||!window.DndStore) return;
    var items=DndStore.list('monsters').slice().sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0);});
    if(!items.length){ wrap.innerHTML='<div class="text-xs text-slate-400 italic">Ще немає власних монстрів.</div>'; return; }
    wrap.innerHTML=items.map(function(rec){
      var m=rec.monster||{};
      return '<div class="flex items-center justify-between gap-2 border border-slate-200 rounded-lg p-2 bg-white">'+
        '<div class="text-xs"><span class="font-bold text-forest">'+esc(rec.name)+'</span> <span class="text-slate-400">CR '+esc(m.crValue||'?')+' • '+esc(m.xp||0)+' XP</span></div>'+
        '<button data-id="'+rec.id+'" class="cmDel text-red-500 hover:text-red-700 text-xs font-bold">🗑</button></div>';
    }).join('');
    wrap.querySelectorAll('.cmDel').forEach(function(b){ b.onclick=function(){
      var id=b.getAttribute('data-id'); var rec=DndStore.get('monsters',id);
      if(!confirm('Видалити монстра «'+((rec&&rec.name)||'')+'»?')) return;
      DndStore.remove('monsters',id);
      if(rec&&rec.slug&&typeof DND_MONSTERS!=='undefined'){ var i=DND_MONSTERS.findIndex(function(x){return x.slug===rec.slug;}); if(i>=0) DND_MONSTERS.splice(i,1); }
      refreshDatalist(); renderCustomList();
    };});
  };

  document.addEventListener('DOMContentLoaded', function(){
    mergeStored(); refreshDatalist();
    var btn=document.getElementById('cmCreate'); if(btn) btn.addEventListener('click', createFromForm);
    renderCustomList();
  });
})();
