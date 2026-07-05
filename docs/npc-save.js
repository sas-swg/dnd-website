'use strict';
// ===== Збереження та створення власних НПС =====
// Залежить від storage.js та глобальної generate() з npc-names.html
(function () {
  function esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});}

  function saveNpc(name, note){
    if(!window.DndStore) return;
    DndStore.save('npcs', { type:'npc', name:name, note:note||'' });
    renderSavedNpcs();
  }

  function addSaveButtons(){
    var cards=document.querySelectorAll('#results > div');
    cards.forEach(function(card){
      if(card.getAttribute('data-sb')) return;
      card.setAttribute('data-sb','1');
      var nameEl=card.querySelector('.font-bold');
      var noteEl=card.querySelector('.text-xs');
      var name=nameEl?nameEl.textContent.trim():'';
      var note=noteEl?noteEl.textContent.trim():'';
      if(!name) return;
      var btn=document.createElement('button');
      btn.title='Зберегти НПС'; btn.textContent='💾';
      btn.className='text-slate-400 hover:text-emerald-600 shrink-0 ml-1';
      btn.onclick=function(){ saveNpc(name, note); btn.textContent='✅'; setTimeout(function(){btn.textContent='💾';},1200); };
      // вставляємо поруч із кнопкою копіювання
      var copyBtn=card.querySelector('button');
      if(copyBtn && copyBtn.parentNode) copyBtn.parentNode.insertBefore(btn, copyBtn);
      else card.appendChild(btn);
    });
  }

  function renderSavedNpcs(){
    if(!window.DndStore) return;
    var wrap=document.getElementById('savedNpcList'); var empty=document.getElementById('savedNpcEmpty');
    if(!wrap) return;
    var items=DndStore.list('npcs').slice().sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0);});
    wrap.innerHTML='';
    if(!items.length){ if(empty) empty.style.display=''; return; }
    if(empty) empty.style.display='none';
    items.forEach(function(rec){
      var d=document.createElement('div');
      d.className='flex items-start justify-between gap-2 border border-slate-200 rounded-lg p-2 bg-white';
      d.innerHTML='<div><div class="font-bold text-slate-800 text-sm">'+esc(rec.name)+'</div>'+(rec.note?'<div class="text-xs text-slate-500 mt-0.5">'+esc(rec.note)+'</div>':'')+'</div>'+
        '<button class="npcDel text-red-500 hover:text-red-700 text-xs font-bold shrink-0">🗑</button>';
      d.querySelector('.npcDel').onclick=function(){ DndStore.remove('npcs', rec.id); renderSavedNpcs(); };
      wrap.appendChild(d);
    });
  }
  window.renderSavedNpcs = renderSavedNpcs;

  function createCustom(){
    var n=document.getElementById('customNpcName'); var r=document.getElementById('customNpcNote');
    var name=n?n.value.trim():''; if(!name){ alert('Вкажіть ім’я НПС.'); return; }
    var note=r?r.value.trim():'';
    saveNpc(name, note);
    if(n) n.value=''; if(r) r.value='';
  }

  function init(){
    // обгортка generate(), щоб додавати кнопки збереження
    if(typeof window.generate==='function' && !window.generate.__wrapped){
      var orig=window.generate;
      window.generate=function(){ var r=orig.apply(this,arguments); addSaveButtons(); return r; };
      window.generate.__wrapped=true;
    }
    addSaveButtons();
    var b=document.getElementById('customNpcCreate'); if(b) b.addEventListener('click', createCustom);
    renderSavedNpcs();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
