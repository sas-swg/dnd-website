'use strict';
// ===== Власні монстри у бестіарії =====
// Залежить від storage.js та глобалів бестіарія: DND_MONSTERS, render, applyFilters, initFilters, openModal, ukName, esc
(function () {
  function E(x){ return (typeof esc==='function') ? esc(x) : String(x==null?'':x); }
  function mod(score){ return Math.floor((Number(score||10)-10)/2); }
  function isCustom(m){ return !!(m && m._custom); }

  function buildMonster(rec){
    var a={};
    ['str','dex','con','int','wis','cha'].forEach(function(k){ var sc=Number(rec.abilities&&rec.abilities[k]||10); a[k]={score:sc,mod:mod(sc),save:mod(sc)}; });
    var f={};
    if(rec.ac) f.AC=String(rec.ac);
    if(rec.hp) f.HP=String(rec.hp);
    if(rec.speed) f.Speed=String(rec.speed);
    f.CR=String(rec.cr||'?')+(rec.xp?(' (XP '+rec.xp+')'):'');
    var sections=[];
    if(rec.traits && rec.traits.trim()) sections.push({title:'TRAITS', text:rec.traits.trim()});
    if(rec.attacks && rec.attacks.trim()) sections.push({title:'ACTIONS', text:rec.attacks.trim()});
    return {
      slug: rec.slug, name: rec.name, meta:'Власний монстр', type:rec.type||'Humanoid', subtype:'', size:rec.size||'Medium',
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

  // ---- фільтр «тільки мої» + бейджі на картках ----
  function wrap(){
    if(typeof window.applyFilters==='function' && !window.applyFilters.__cust){
      var _af=window.applyFilters;
      window.applyFilters=function(){
        var res=_af();
        var cb=document.getElementById('onlyMine');
        if(cb && cb.checked) res=res.filter(isCustom);
        return res;
      };
      window.applyFilters.__cust=true;
    }
    if(typeof window.render==='function' && !window.render.__cust){
      var _r=window.render;
      window.render=function(){
        _r();
        try{
          var res=window.applyFilters();
          var cards=document.querySelectorAll('#list > div');
          for(var i=0;i<res.length;i++){
            if(isCustom(res[i]) && cards[i] && !cards[i].querySelector('.mine-badge')){
              var b=document.createElement('span');
              b.className='mine-badge inline-block text-[10px] font-bold text-white bg-emerald-600 rounded px-1.5 py-0.5 mb-1';
              b.textContent='★ Мій';
              cards[i].insertBefore(b, cards[i].firstChild);
            }
          }
        }catch(e){}
      };
      window.render.__cust=true;
    }
    if(typeof window.openModal==='function' && !window.openModal.__cust){
      var _om=window.openModal;
      window.openModal=function(slug){
        _om(slug);
        try{
          var m=(typeof bySlug==='function')?bySlug(slug):null;
          if(m && isCustom(m)){
            var body=document.getElementById('mon-body');
            if(body && !body.querySelector('.mine-badge')){
              var b=document.createElement('div');
              b.className='mine-badge inline-block text-xs font-bold text-white bg-emerald-600 rounded px-2 py-0.5 mb-2';
              b.textContent='★ Власний монстр';
              body.insertBefore(b, body.firstChild);
            }
          }
        }catch(e){}
      };
      window.openModal.__cust=true;
    }
  }

  function refresh(){ if(typeof initFilters==='function') initFilters(); if(typeof render==='function') render(); }

  // ---- Модальне вікно створення ----
  function typeOptions(sel){
    var T = (typeof TYPE_UK!=='undefined') ? TYPE_UK : {Humanoid:'Гуманоїд'};
    return Object.keys(T).map(function(k){return '<option value="'+k+'" '+(k===sel?'selected':'')+'>'+E(T[k])+'</option>';}).join('');
  }
  function sizeOptions(sel){
    var order=['Tiny','Small','Medium','Large','Huge','Gargantuan'];
    var S=(typeof SIZE_UK!=='undefined')?SIZE_UK:{};
    return order.map(function(k){return '<option value="'+k+'" '+(k===sel?'selected':'')+'>'+E(S[k]||k)+'</option>';}).join('');
  }

  function inp(id,ph,t,extra){ return '<input id="'+id+'" type="'+(t||'text')+'" placeholder="'+ph+'" '+(extra||'')+' class="p-2 border border-slate-300 rounded-lg text-sm bg-white w-full">'; }

  function buildModal(){
    if(document.getElementById('cmbModal')) return;
    var wrapEl=document.createElement('div');
    wrapEl.id='cmbModal';
    wrapEl.className='fixed inset-0 z-[60] hidden items-center justify-center p-4';
    wrapEl.innerHTML=
      '<div class="absolute inset-0 bg-black/50" data-close="1"></div>'+
      '<div class="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6" style="max-height:88vh;overflow-y:auto">'+
        '<button data-close="1" class="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-2xl leading-none">&times;</button>'+
        '<h3 class="font-heading text-2xl font-bold text-forest mb-1">🛠️ Створити власного монстра</h3>'+
        '<p class="text-xs text-ui-muted mb-3">Зберігається у цьому браузері та з’являється і в генераторі сутичок.</p>'+
        '<div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">'+
          inp('cmbName','Назва монстра')+
          inp('cmbCr','CR (напр. 5)')+
          inp('cmbXp','XP (напр. 1800)','number')+
          inp('cmbSpeed','Швидкість (30 ft.)')+
          inp('cmbAc','КЗ (напр. 15)')+
          inp('cmbHp','ХП (напр. 45 (6d10+12))')+
          '<select id="cmbType" class="p-2 border border-slate-300 rounded-lg text-sm bg-white w-full">'+typeOptions('Humanoid')+'</select>'+
          '<select id="cmbSize" class="p-2 border border-slate-300 rounded-lg text-sm bg-white w-full">'+sizeOptions('Medium')+'</select>'+
        '</div>'+
        '<div class="grid grid-cols-3 md:grid-cols-6 gap-2 mb-2">'+
          inp('cmbStr','СИЛ','number','value="10"')+inp('cmbDex','СПР','number','value="10"')+inp('cmbCon','ТІЛ','number','value="10"')+
          inp('cmbInt','ІНТ','number','value="10"')+inp('cmbWis','МУД','number','value="10"')+inp('cmbCha','ХАР','number','value="10"')+
        '</div>'+
        '<textarea id="cmbAttacks" rows="3" placeholder="Атаки / дії" class="w-full p-2 border border-slate-300 rounded-lg text-sm bg-white mb-2"></textarea>'+
        '<textarea id="cmbTraits" rows="2" placeholder="Риси (опціонально)" class="w-full p-2 border border-slate-300 rounded-lg text-sm bg-white mb-2"></textarea>'+
        '<div class="flex items-center gap-3"><button id="cmbSave" class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-sm hover:bg-emerald-700">➕ Зберегти монстра</button><span id="cmbStatus" class="text-xs text-emerald-700 font-semibold"></span></div>'+
        '<div class="mt-4 border-t border-slate-200 pt-3"><div class="text-xs font-bold text-slate-500 uppercase mb-1">Ваші монстри</div><div id="cmbList" class="space-y-1"></div></div>'+
      '</div>';
    document.body.appendChild(wrapEl);
    wrapEl.addEventListener('click', function(e){ if(e.target.getAttribute('data-close')) closeModal(); });
    document.getElementById('cmbSave').addEventListener('click', saveNew);
  }
  function openCreate(){ buildModal(); renderMine(); var m=document.getElementById('cmbModal'); m.classList.remove('hidden'); m.classList.add('flex'); }
  function closeModal(){ var m=document.getElementById('cmbModal'); if(m){ m.classList.add('hidden'); m.classList.remove('flex'); } }

  function val(id){ var e=document.getElementById(id); return e?e.value.trim():''; }
  function saveNew(){
    var name=val('cmbName'); if(!name){ alert('Вкажіть назву монстра.'); return; }
    var xp=Number(val('cmbXp')||0);
    var slug='custom-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);
    var rec={ slug:slug, name:name, cr:val('cmbCr')||'?', xp:xp, ac:val('cmbAc'), hp:val('cmbHp'), speed:val('cmbSpeed'),
      type:val('cmbType')||'Humanoid', size:val('cmbSize')||'Medium', attacks:val('cmbAttacks'), traits:val('cmbTraits'),
      abilities:{str:val('cmbStr')||10,dex:val('cmbDex')||10,con:val('cmbCon')||10,int:val('cmbInt')||10,wis:val('cmbWis')||10,cha:val('cmbCha')||10} };
    var mon=buildMonster(rec);
    DND_MONSTERS.push(mon);
    if(window.DndStore) DndStore.save('monsters', { type:'monster', name:name, slug:slug, monster:mon });
    refresh(); renderMine();
    ['cmbName','cmbCr','cmbXp','cmbAc','cmbHp','cmbSpeed','cmbAttacks','cmbTraits'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
    var st=document.getElementById('cmbStatus'); if(st){ st.textContent='✅ Додано!'; setTimeout(function(){st.textContent='';},3000); }
  }
  function renderMine(){
    var wrapEl=document.getElementById('cmbList'); if(!wrapEl||!window.DndStore) return;
    var items=DndStore.list('monsters').slice().sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0);});
    if(!items.length){ wrapEl.innerHTML='<div class="text-xs text-slate-400 italic">Ще немає власних монстрів.</div>'; return; }
    wrapEl.innerHTML=items.map(function(rec){ var m=rec.monster||{};
      return '<div class="flex items-center justify-between gap-2 border border-slate-200 rounded-lg p-2 bg-white"><div class="text-xs"><span class="font-bold text-forest">'+E(rec.name)+'</span> <span class="text-slate-400">CR '+E(m.crValue||'?')+' • '+E(m.xp||0)+' XP</span></div><button data-id="'+rec.id+'" class="cmbDel text-red-500 hover:text-red-700 text-xs font-bold">🗑</button></div>';
    }).join('');
    wrapEl.querySelectorAll('.cmbDel').forEach(function(b){ b.onclick=function(){
      var id=b.getAttribute('data-id'); var rec=DndStore.get('monsters',id);
      if(!confirm('Видалити монстра «'+((rec&&rec.name)||'')+'»?')) return;
      DndStore.remove('monsters',id);
      if(rec&&rec.slug){ var i=DND_MONSTERS.findIndex(function(x){return x.slug===rec.slug;}); if(i>=0) DND_MONSTERS.splice(i,1); }
      refresh(); renderMine();
    };});
  }

  function init(){
    mergeStored();
    wrap();
    var cb=document.getElementById('onlyMine'); if(cb) cb.addEventListener('change', function(){ if(typeof render==='function') render(); });
    var btn=document.getElementById('cmbOpen'); if(btn) btn.addEventListener('click', openCreate);
    refresh();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
