'use strict';
// ===== Власні магічні предмети =====
// Залежить від storage.js та глобалів items.html: DND_MAGIC_ITEMS, DND_ITEMS, activeTab, render, filteredItems, fillFilters, openItemModal, itemById, esc
(function () {
  function E(x){ return (typeof esc==='function') ? esc(x) : String(x==null?'':x); }
  function isCustom(i){ return !!(i && i._custom); }
  var RARITIES=['Звичайний','Незвичайний','Рідкісний','Дуже рідкісний','Легендарний','Артефакт'];

  function buildItem(rec){
    return {
      id: rec.id, type:'magic', _custom:true,
      name: rec.name, englishName: rec.englishName||'',
      category: rec.category||'Wondrous Item', typeEn: rec.category||'Wondrous Item',
      rarity: rec.rarityUk||'', rarityUk: rec.rarityUk||'Звичайний',
      attunement: !!rec.attunement, price: rec.price||'—',
      source:'Власний', page:0, metaEn:'',
      description: rec.description||'', descriptionEn: rec.descriptionEn||'',
    };
  }

  function mergeStored(){
    if(!window.DndStore || typeof DND_MAGIC_ITEMS==='undefined') return;
    DndStore.list('magicitems').forEach(function(rec){
      var it=rec.item||rec;
      if(!it||!it.id) return;
      if(!DND_MAGIC_ITEMS.some(function(x){return x.id===it.id;})) DND_MAGIC_ITEMS.push(it);
      if(typeof DND_ITEMS!=='undefined' && !DND_ITEMS.some(function(x){return x.id===it.id;})) DND_ITEMS.push(it);
    });
  }

  function wrap(){
    if(typeof window.filteredItems==='function' && !window.filteredItems.__cust){
      var _fi=window.filteredItems;
      window.filteredItems=function(){
        var res=_fi();
        var cb=document.getElementById('onlyMineItems');
        if(cb && cb.checked && (typeof activeTab==='undefined'||activeTab==='magic')) res=res.filter(isCustom);
        return res;
      };
      window.filteredItems.__cust=true;
    }
    if(typeof window.render==='function' && !window.render.__cust){
      var _r=window.render;
      window.render=function(){
        _r();
        try{
          var bar=document.getElementById('itemsCustomBar');
          var isMagic=(typeof activeTab==='undefined'||activeTab==='magic');
          if(bar) bar.style.display = isMagic ? '' : 'none';
          var res=window.filteredItems();
          var cards=document.querySelectorAll('#itemsGrid > article');
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
    if(typeof window.openItemModal==='function' && !window.openItemModal.__cust){
      var _om=window.openItemModal;
      window.openItemModal=function(id){
        _om(id);
        try{
          var it=(typeof itemById==='function')?itemById(id):null;
          if(it && isCustom(it)){
            var body=document.getElementById('itemModalBody');
            if(body && !body.querySelector('.mine-badge')){
              var b=document.createElement('div');
              b.className='mine-badge inline-block text-xs font-bold text-white bg-emerald-600 rounded px-2 py-0.5 mb-2';
              b.textContent='★ Власний предмет';
              body.insertBefore(b, body.firstChild);
            }
          }
        }catch(e){}
      };
      window.openItemModal.__cust=true;
    }
  }

  function refresh(){ if(typeof fillFilters==='function') fillFilters(); if(typeof render==='function') render(); }

  function inp(id,ph,t,extra){ return '<input id="'+id+'" type="'+(t||'text')+'" placeholder="'+ph+'" '+(extra||'')+' class="p-2 border border-slate-300 rounded-lg text-sm bg-white w-full">'; }

  function buildModal(){
    if(document.getElementById('micModal')) return;
    var el=document.createElement('div');
    el.id='micModal'; el.className='fixed inset-0 z-[60] hidden items-center justify-center p-4';
    el.innerHTML=
      '<div class="absolute inset-0 bg-black/50" data-close="1"></div>'+
      '<div class="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6" style="max-height:88vh;overflow-y:auto">'+
        '<button data-close="1" class="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-2xl leading-none">&times;</button>'+
        '<h3 class="font-heading text-2xl font-bold text-forest mb-3">✨ Створити магічний предмет</h3>'+
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">'+
          inp('micName','Назва (укр.)')+
          inp('micEn','Назва (англ., опц.)')+
          '<select id="micRarity" class="p-2 border border-slate-300 rounded-lg text-sm bg-white w-full">'+RARITIES.map(function(r){return '<option value="'+r+'">'+E(r)+'</option>';}).join('')+'</select>'+
          inp('micCat','Тип (напр. Wondrous Item)')+
          inp('micPrice','Ціна (опц.)')+
        '</div>'+
        '<label class="flex items-center gap-2 text-sm text-slate-700 mb-2 cursor-pointer"><input id="micAtt" type="checkbox" class="w-4 h-4 rounded border-slate-300"> Потрібне налаштування</label>'+
        '<textarea id="micDesc" rows="4" placeholder="Опис предмета" class="w-full p-2 border border-slate-300 rounded-lg text-sm bg-white mb-2"></textarea>'+
        '<div class="flex items-center gap-3"><button id="micSave" class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-sm hover:bg-emerald-700">➕ Зберегти</button><span id="micStatus" class="text-xs text-emerald-700 font-semibold"></span></div>'+
        '<div class="mt-4 border-t border-slate-200 pt-3"><div class="text-xs font-bold text-slate-500 uppercase mb-1">Ваші предмети</div><div id="micList" class="space-y-1"></div></div>'+
      '</div>';
    document.body.appendChild(el);
    el.addEventListener('click', function(e){ if(e.target.getAttribute('data-close')) closeModal(); });
    document.getElementById('micSave').addEventListener('click', saveNew);
  }
  function openCreate(){ buildModal(); renderMine(); var m=document.getElementById('micModal'); m.classList.remove('hidden'); m.classList.add('flex'); }
  function closeModal(){ var m=document.getElementById('micModal'); if(m){ m.classList.add('hidden'); m.classList.remove('flex'); } }

  function val(id){ var e=document.getElementById(id); return e?e.value.trim():''; }
  function saveNew(){
    var name=val('micName'); if(!name){ alert('Вкажіть назву предмета.'); return; }
    var id='custommag_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6);
    var it=buildItem({ id:id, name:name, englishName:val('micEn'), rarityUk:val('micRarity'),
      category:val('micCat')||'Wondrous Item', price:val('micPrice'),
      attunement:document.getElementById('micAtt').checked, description:val('micDesc') });
    DND_MAGIC_ITEMS.push(it);
    if(typeof DND_ITEMS!=='undefined') DND_ITEMS.push(it);
    if(window.DndStore) DndStore.save('magicitems', { type:'magicitem', name:name, id:id, item:it });
    refresh(); renderMine();
    ['micName','micEn','micCat','micPrice','micDesc'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
    var st=document.getElementById('micStatus'); if(st){ st.textContent='✅ Додано!'; setTimeout(function(){st.textContent='';},3000); }
  }
  function renderMine(){
    var wrapEl=document.getElementById('micList'); if(!wrapEl||!window.DndStore) return;
    var items=DndStore.list('magicitems').slice().sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0);});
    if(!items.length){ wrapEl.innerHTML='<div class="text-xs text-slate-400 italic">Ще немає власних предметів.</div>'; return; }
    wrapEl.innerHTML=items.map(function(rec){ var it=rec.item||{};
      return '<div class="flex items-center justify-between gap-2 border border-slate-200 rounded-lg p-2 bg-white"><div class="text-xs"><span class="font-bold text-forest">'+E(rec.name)+'</span> <span class="text-slate-400">'+E(it.rarityUk||'')+'</span></div><button data-id="'+rec.id+'" class="micDel text-red-500 hover:text-red-700 text-xs font-bold">🗑</button></div>';
    }).join('');
    wrapEl.querySelectorAll('.micDel').forEach(function(b){ b.onclick=function(){
      var id=b.getAttribute('data-id'); var rec=DndStore.get('magicitems',id);
      if(!confirm('Видалити предмет «'+((rec&&rec.name)||'')+'»?')) return;
      DndStore.remove('magicitems',id);
      if(rec&&rec.id){
        if(typeof DND_MAGIC_ITEMS!=='undefined'){ var i=DND_MAGIC_ITEMS.findIndex(function(x){return x.id===rec.id;}); if(i>=0) DND_MAGIC_ITEMS.splice(i,1); }
        if(typeof DND_ITEMS!=='undefined'){ var j=DND_ITEMS.findIndex(function(x){return x.id===rec.id;}); if(j>=0) DND_ITEMS.splice(j,1); }
      }
      refresh(); renderMine();
    };});
  }

  function init(){
    mergeStored(); wrap();
    var cb=document.getElementById('onlyMineItems'); if(cb) cb.addEventListener('change', function(){ if(typeof render==='function') render(); });
    var btn=document.getElementById('micOpen'); if(btn) btn.addEventListener('click', openCreate);
    refresh();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
