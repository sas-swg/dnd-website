'use strict';
// ===== Лут генератор =====

const RARITY_ORDER = { 'Звичайний':1,'Незвичайний':2,'Рідкісний':3,'Дуже рідкісний':4,'Легендарний':5,'Артефакт':6,'Різна':3 };
const RARITY_COLOR = {
  1:'text-slate-600 bg-slate-100 border-slate-300',
  2:'text-green-700 bg-green-50 border-green-300',
  3:'text-blue-700 bg-blue-50 border-blue-300',
  4:'text-purple-700 bg-purple-50 border-purple-300',
  5:'text-amber-700 bg-amber-50 border-amber-300',
  6:'text-red-700 bg-red-50 border-red-300'
};
// Ціна магічного предмета за рідкістю (зол), діапазони з DMG
const RARITY_PRICE = {
  1:[50,100], 2:[101,500], 3:[501,5000], 4:[5001,50000], 5:[50001,200000], 6:[100000,500000]
};

const SOURCES = {
  chest:   { icon:'🧰', name:'Simple chest', min:30, max:300,
    coins:.70, gems:.10, items:.20, magicChance:.15, maxItems:2,
    flavor:['A dusty chest hidden under the floorboards.','A small iron chest with a rusty lock.','A petty thief\'s stash in the wall.'] },
  room:    { icon:'🚪', name:'Dungeon room', min:150, max:1500,
    coins:.50, gems:.20, items:.30, magicChance:.35, maxItems:3,
    flavor:['An abandoned room with camp remains.','A stone hall with old chests and shelves.','A cache where the dwellers kept valuables.'] },
  boss_room:{ icon:'👑', name:'Post-boss room', min:2000, max:20000,
    coins:.40, gems:.35, items:.25, magicChance:.85, maxItems:5,
    flavor:['The treasury of a defeated dungeon lord.','Piles of gold and treasure around a throne.','A hidden vault behind a secret door.'] },
  boss:    { icon:'🐉', name:'Boss loot', min:500, max:8000,
    coins:.30, gems:.05, items:.65, magicChance:.90, maxItems:3, favorGear:true,
    flavor:['Gear stripped from a fallen enemy.','The boss\'s personal belongings and weapons.','What the boss carried on itself.'] }
};

// Підказки вартості за рівнем партії (на один скарб)
const TIER_VALUE = { '1':[100,800],'5':[1000,6000],'11':[8000,30000],'17':[40000,120000] };

const TYPE_LABELS = [
  ['weapon','⚡ Weapons'],['armor','🛡️ Armor'],['gear','🎒 Gear'],
  ['tool','🔨 Tools'],['potion','🧪 Potions'],['ammo','🏹 Ammo'],
  ['mount','🐎 Mounts'],['vehicle','🚐 Vehicles'],['poison','☠️ Poisons'],
  ['trinket','🪙 Trinkets'],['magic','✨ Magic']
];

// Самоцвіти та витвори мистецтва
const GEMS = {
  10:['azurite','smoky quartz','hematite','malachite','obsidian','tiger eye','turquoise'],
  50:['bloodstone','agate','rose quartz','moonstone','onyx','zircon'],
  100:['amethyst','garnet','jade','pearl','spinel','tourmaline'],
  500:['topaz','aquamarine','black pearl','blue sapphire','fiery spinel'],
  1000:['emerald','ruby','star sapphire','fire opal','yellow diamond'],
  5000:['flawless diamond','royal black opal','pigeon-blood ruby']
};
const ART = {
  25:['silver cup','carved bone','small framed mirror','embroidered silk handkerchief'],
  250:['gold ring with a gem','carved jade figurine','silver necklace','crown of copper and silver'],
  750:['gold brooch with pearls','painting by a famous master','gold censer'],
  2500:['royal crown','gem-studded short cape','platinum goblet'],
  7500:['gem diadem','gold scepter with rubies','platinum statuette of a god']
};

let MUND = [], MAG = [], selectedSource = 'room', lastResult = null;

function rnd(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function fmtGold(n){ return Math.round(n).toLocaleString('uk-UA'); }

// Парсим cost мунданного предмета у золоті
function parseCostGp(cost){
  if(!cost) return 0;
  const m = String(cost).match(/([\d,\.]+)\s*(CP|SP|EP|GP|PP)/i);
  if(!m) return 0;
  const v = parseFloat(m[1].replace(/,/g,''));
  const unit = m[2].toUpperCase();
  const mult = {CP:0.01,SP:0.1,EP:0.5,GP:1,PP:10}[unit] || 1;
  return v*mult;
}

function magicRarityIdx(it){ return RARITY_ORDER[(it.rarity||it.rarityUk)] || RARITY_ORDER[it.rarity] || 3; }
function magicPriceGp(it){
  const idx = magicRarityIdx(it);
  const [a,b] = RARITY_PRICE[idx] || [500,500];
  return rnd(a,b);
}

// ===== ІНІЦІАЛІЗАЦІЯ =====
function initData(){
  try {
    MUND = (typeof DND_MUNDANE_ITEMS!=='undefined') ? DND_MUNDANE_ITEMS : [];
    MAG  = (typeof DND_MAGIC_ITEMS!=='undefined') ? DND_MAGIC_ITEMS : [];
  } catch(e){ MUND=[]; MAG=[]; }
}

function buildSourceCards(){
  const box = document.getElementById('sourceCards');
  box.innerHTML = '';
  Object.entries(SOURCES).forEach(([key,s])=>{
    const d = document.createElement('button');
    d.className = 'src-card text-left p-3 rounded-xl border border-slate-200 bg-white'+(key===selectedSource?' active':'');
    d.dataset.key = key;
    d.innerHTML = '<div class="text-2xl">'+s.icon+'</div><div class="font-bold text-sm text-forest mt-1">'+s.name+'</div><div class="text-[11px] text-slate-500">~'+fmtGold(s.min)+'–'+fmtGold(s.max)+' gp</div>';
    d.onclick = ()=>{ selectedSource=key; buildSourceCards(); if(document.getElementById('autoVal').checked){ document.getElementById('minVal').value=''; document.getElementById('maxVal').value=''; } };
    box.appendChild(d);
  });
}

function buildTypeFilters(){
  const box = document.getElementById('typeFilters');
  box.innerHTML='';
  const all = document.createElement('label');
  all.className='col-span-2 flex items-center gap-2 font-bold text-forest';
  all.innerHTML='<input type="checkbox" id="typeAll" checked class="rounded"> Усі типи';
  box.appendChild(all);
  TYPE_LABELS.forEach(([val,label])=>{
    const l = document.createElement('label');
    l.className='flex items-center gap-1.5 text-slate-600';
    l.innerHTML='<input type="checkbox" class="typeChk rounded" value="'+val+'" checked> '+label;
    box.appendChild(l);
  });
  document.getElementById('typeAll').addEventListener('change',e=>{
    document.querySelectorAll('.typeChk').forEach(c=>c.checked=e.target.checked);
  });
  const rarityAll = document.getElementById('rarityAll');
  if(rarityAll){
    rarityAll.addEventListener('change',e=>{
      document.querySelectorAll('.rarityChk').forEach(c=>c.checked=e.target.checked);
    });
    document.querySelectorAll('.rarityChk').forEach(c=>c.addEventListener('change',()=>{
      const all = Array.from(document.querySelectorAll('.rarityChk'));
      rarityAll.checked = all.every(x=>x.checked);
    }));
  }
}

function getSelectedTypes(){
  return Array.from(document.querySelectorAll('.typeChk')).filter(c=>c.checked).map(c=>c.value);
}

function getSelectedRarities(){
  const set = new Set(Array.from(document.querySelectorAll('.rarityChk')).filter(c=>c.checked).map(c=>parseInt(c.value,10)));
  if(set.size===0){ [1,2,3,4,5,6].forEach(v=>set.add(v)); } // якщо нічого не обрано — дозволяємо всі
  return set;
}

// ===== ГЕНЕРАЦІЯ =====
function generate(){
  const src = SOURCES[selectedSource];
  const tier = document.getElementById('tierHint').value;
  let min, max;
  const autoVal = document.getElementById('autoVal').checked;
  const uMin = parseFloat(document.getElementById('minVal').value);
  const uMax = parseFloat(document.getElementById('maxVal').value);

  if(!autoVal && !isNaN(uMin) && !isNaN(uMax) && uMax>=uMin){
    min=uMin; max=uMax;
  } else if(tier && TIER_VALUE[tier]){
    [min,max]=TIER_VALUE[tier];
  } else {
    min=src.min; max=src.max;
  }
  const totalTarget = rnd(Math.round(min), Math.round(max));

  const incCoins = document.getElementById('incCoins').checked;
  const incGems = document.getElementById('incGems').checked;
  const magicMode = document.getElementById('magicMode').value;
  const allowedRarities = getSelectedRarities();
  const itemCountSel = document.getElementById('itemCount').value;
  const types = getSelectedTypes();

  // розподіл бюджету
  let coinFrac = incCoins ? src.coins : 0;
  let gemFrac = incGems ? src.gems : 0;
  let itemFrac = src.items;
  if(magicMode==='only'){ itemFrac = Math.max(itemFrac, .5); }
  const fracSum = coinFrac+gemFrac+itemFrac || 1;
  coinFrac/=fracSum; gemFrac/=fracSum; itemFrac/=fracSum;

  const coinBudget = totalTarget*coinFrac;
  const gemBudget = totalTarget*gemFrac;
  const itemBudget = totalTarget*itemFrac;

  const result = { source:src, coins:makeCoins(coinBudget), gems:[], items:[], target:totalTarget };
  if(incGems && gemBudget>20) result.gems = makeGems(gemBudget);

  // чи додавати магію
  let wantMagic;
  if(magicMode==='force'||magicMode==='only') wantMagic=true;
  else if(magicMode==='none') wantMagic=false;
  else wantMagic = Math.random() < src.magicChance;

  // кількість предметів
  let nItems;
  if(itemCountSel!=='auto') nItems=parseInt(itemCountSel,10);
  else nItems = rnd(1, src.maxItems);

  result.items = pickItems(nItems, itemBudget, types, allowedRarities, wantMagic, magicMode, src);

  // підрахунок загальної вартості
  let total = 0;
  Object.entries(result.coins).forEach(([u,c])=>{ total += c*{cp:0.01,sp:0.1,gp:1,pp:10}[u]; });
  result.gems.forEach(g=> total+=g.value);
  result.items.forEach(i=> total+=i._price);
  result.total = total;
  result.flavor = pick(src.flavor);

  lastResult = result;
  render(result);
}

function makeCoins(gp){
  const c = {cp:0,sp:0,gp:0,pp:0};
  if(gp<=0) return c;
  let rem = gp;
  if(gp>=500){
    c.pp = Math.round(rem*0.5/10);
    rem -= c.pp*10;
  }
  c.gp = Math.floor(rem*0.75);
  rem -= c.gp;
  c.sp = Math.floor(rem/0.1*0.8);
  rem -= c.sp*0.1;
  c.cp = Math.max(0, Math.round(rem/0.01));
  // трохи варіативності
  if(gp<20){ c.pp=0; c.gp=Math.floor(gp*rnd(3,7)/10); c.sp=rnd(0,15); c.cp=rnd(0,40); }
  Object.keys(c).forEach(k=>{ if(c[k]<=0) delete c[k]; });
  return c;
}

function makeGems(budget){
  const out = [];
  let rem = budget;
  const tiers = Object.keys(GEMS).map(Number).sort((a,b)=>b-a);
  const artTiers = Object.keys(ART).map(Number).sort((a,b)=>b-a);
  let guard = 0;
  while(rem >= 10 && guard < 30){
    guard++;
    const useArt = Math.random()<0.4;
    const pool = useArt ? artTiers : tiers;
    const affordable = pool.filter(t=>t<=rem);
    if(!affordable.length) break;
    // частіше беремо середні/великі номінали
    const t = affordable[Math.min(affordable.length-1, Math.floor(Math.random()*Math.random()*affordable.length))];
    const name = pick(useArt?ART[t]:GEMS[t]);
    out.push({ name, value:t, art:useArt });
    rem -= t;
    if(out.length>=12) break;
  }
  return out;
}

function pickItems(n, budget, types, allowedRarities, wantMagic, magicMode, src){
  const chosen = [];
  const wantMundane = magicMode!=='only';
  const typeSet = new Set(types);

  // пули
  let magicPool = MAG.filter(it=> allowedRarities.has(magicRarityIdx(it)) && (typeSet.has('magic')||magicMode==='only'||magicMode==='force'));
  let mundPool = MUND.filter(it=> typeSet.has(it.type));
  if(src.favorGear){
    // бос — надаємо перевагу зброї/броні/магічній зброї
    magicPool.sort(()=> Math.random()-0.5);
  }

  let magicLeft = 0;
  if(magicMode==='only') magicLeft = n;
  else if(magicMode==='none') magicLeft = 0;
  else if(wantMagic) magicLeft = magicMode==='force' ? Math.max(1,Math.round(n*0.6)) : rnd(1, Math.max(1,Math.round(n*0.5)));

  for(let i=0;i<n;i++){
    const takeMagic = (magicLeft>0) && magicPool.length>0;
    if(takeMagic){
      const it = pick(magicPool);
      const copy = Object.assign({}, it);
      copy._price = magicPriceGp(it);
      copy._isMagic = true;
      chosen.push(copy);
      magicLeft--;
    } else if(wantMundane && mundPool.length){
      // намагаємося вкластися в бюджет
      let it = pick(mundPool);
      const copy = Object.assign({}, it);
      copy._price = parseCostGp(it.cost);
      copy._isMagic = false;
      chosen.push(copy);
    } else if(magicPool.length){
      const it = pick(magicPool);
      const copy = Object.assign({}, it);
      copy._price = magicPriceGp(it);
      copy._isMagic = true;
      chosen.push(copy);
    }
  }
  return chosen;
}

// ===== РЕНДЕР =====
function render(r){
  document.getElementById('emptyState').classList.add('hidden');
  const res = document.getElementById('result');
  res.classList.remove('hidden');
  res.classList.remove('pop'); void res.offsetWidth; res.classList.add('pop');

  document.getElementById('srcTitle').textContent = r.source.icon+' '+r.source.name;
  document.getElementById('srcFlavor').textContent = r.flavor;
  document.getElementById('totalValue').textContent = fmtGold(r.total)+' gp';

  // монети
  const coinBox = document.getElementById('coinsBox');
  const coinLabels = {pp:['PP','#e5e7eb'],gp:['GP','#f59e0b'],sp:['SM','#9ca3af'],cp:['CP','#b45309']};
  const coinEntries = Object.entries(r.coins);
  if(coinEntries.length){
    coinBox.classList.remove('hidden');
    coinBox.innerHTML = '<div class="text-xs font-bold text-amber-700 uppercase mb-2">🪙 Coins</div><div class="flex flex-wrap gap-4">'+
      coinEntries.map(([u,c])=>'<span class="coin"><span style="width:.7rem;height:.7rem;border-radius:50%;display:inline-block;background:'+coinLabels[u][1]+'"></span>'+fmtGold(c)+' <span class="text-slate-500 text-xs">'+coinLabels[u][0]+'</span></span>').join('')+
      '</div>';
  } else { coinBox.classList.add('hidden'); }

  // самоцвіти
  const gemBox = document.getElementById('gemsBox');
  if(r.gems.length){
    gemBox.innerHTML = '<div class="text-xs font-bold text-slate-500 uppercase mb-2">💎 Gems & Art Objects</div>'+
      '<div class="space-y-1">'+r.gems.map(g=>'<div class="flex justify-between items-center text-sm p-2 bg-slate-50 border border-slate-200 rounded-lg"><span>'+(g.art?'🎺 ':'💎 ')+g.name.charAt(0).toUpperCase()+g.name.slice(1)+'</span><span class="font-bold text-amber-600">'+fmtGold(g.value)+' gp</span></div>').join('')+'</div>';
  } else { gemBox.innerHTML=''; }

  // предмети
  const itemsBox = document.getElementById('itemsBox');
  if(r.items.length){
    itemsBox.innerHTML = '<div class="text-xs font-bold text-slate-500 uppercase mb-2">🎒 Items</div>'+
      '<div class="space-y-2">'+r.items.map((it,idx)=>{
        const idxR = it._isMagic ? magicRarityIdx(it) : 1;
        const rColor = RARITY_COLOR[idxR];
        const rName = it._isMagic ? (it.rarity||(it.rarity||it.rarityUk)||'') : (it.category||'Common');
        const att = it.attunement ? ' · requires attunement' : '';
        return '<div class="loot-item flex items-start justify-between gap-2 p-3 border rounded-xl cursor-pointer '+rColor+'" onclick="showItem('+idx+')">'+
          '<div><div class="font-bold text-sm">'+(it._isMagic?'✨ ':'')+(it.englishName||it.name)+'</div>'+
          '<div class="text-[11px] opacity-80">'+rName+att+'</div></div>'+
          '<div class="text-right shrink-0"><div class="font-bold text-sm">'+fmtGold(it._price)+' gp</div></div></div>';
      }).join('')+'</div>';
  } else { itemsBox.innerHTML='<div class="text-sm text-slate-400 italic">No items (coins/gems only)</div>'; }
}

function showItem(idx){
  const it = lastResult.items[idx];
  if(!it) return;
  document.getElementById('mTitle').textContent = (it.englishName||it.name);
  const idxR = it._isMagic ? magicRarityIdx(it) : 1;
  const rName = it._isMagic ? (it.rarity||(it.rarity||it.rarityUk)||'') : (it.category||'');
  document.getElementById('mMeta').innerHTML = '<span class="inline-block px-2 py-0.5 rounded border '+RARITY_COLOR[idxR]+'">'+rName+'</span>'+
    (it.attunement?' <span class="text-slate-500">· потребує налаштування</span>':'')+
    ' <span class="text-amber-600 font-bold">· '+fmtGold(it._price)+' gp</span>';
  document.getElementById('mDesc').textContent = it.descriptionEn || it.description || 'Description unavailable.';
  document.getElementById('itemModal').classList.remove('hidden');
}

function copyResult(){
  if(!lastResult) return;
  const r = lastResult;
  let t = r.source.icon+' '+r.source.name+' ('+fmtGold(r.total)+' gp)\n'+r.flavor+'\n\n';
  const coinNames={pp:'platinum',gp:'gold',sp:'silver',cp:'copper'};
  const coins=Object.entries(r.coins);
  if(coins.length){ t+='Coins: '+coins.map(([u,c])=>fmtGold(c)+' '+coinNames[u]).join(', ')+'\n'; }
  if(r.gems.length){ t+='Gems/Art:\n'+r.gems.map(g=>'  • '+g.name+' ('+fmtGold(g.value)+' gp)').join('\n')+'\n'; }
  if(r.items.length){ t+='Items:\n'+r.items.map(i=>'  • '+(i.englishName||i.name)+' ['+(i._isMagic?(i.rarity||(i.rarity||i.rarityUk)):i.category)+'] — '+fmtGold(i._price)+' gp').join('\n')+'\n'; }
  navigator.clipboard.writeText(t).then(()=>{
    const b=document.getElementById('copyBtn'); const o=b.textContent; b.textContent='✅ Copied'; setTimeout(()=>b.textContent=o,1500);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initData();
  buildSourceCards();
  buildTypeFilters();
  document.getElementById('genBtn').addEventListener('click', generate);
  document.getElementById('regenBtn').addEventListener('click', generate);
  document.getElementById('copyBtn').addEventListener('click', copyResult);
});


// ===== Збереження луту =====
function _esc(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});}
function saveLoot(){
  if(!lastResult){ alert('Generate loot first.'); return; }
  if(!window.DndStore) return;
  var def = lastResult.source.name + ' (' + fmtGold(lastResult.total) + ' зол)';
  var name = prompt('Name for this loot:', def);
  if(name===null) return;
  DndStore.save('loot', { type:'loot', name: (name||def).trim(), total: lastResult.total, result: JSON.parse(JSON.stringify(lastResult)) });
  renderSavedLoot();
  var b=document.getElementById('saveLootBtn'); if(b){var o=b.textContent; b.textContent='✅ Saved'; setTimeout(function(){b.textContent=o;},1500);}
}
function loadLoot(id){
  var rec = DndStore.get('loot', id); if(!rec||!rec.result) return;
  lastResult = rec.result; render(lastResult);
  window.scrollTo({top:0,behavior:'smooth'});
}
function deleteLoot(id){
  var rec = DndStore.get('loot', id);
  if(!confirm('Delete «'+((rec&&rec.name)||'лут')+'»?')) return;
  DndStore.remove('loot', id); renderSavedLoot();
}
function renderSavedLoot(){
  if(!window.DndStore) return;
  var wrap=document.getElementById('savedLootList'); var empty=document.getElementById('savedLootEmpty');
  if(!wrap) return;
  var items = DndStore.list('loot').slice().sort(function(a,b){return (b.updatedAt||0)-(a.updatedAt||0);});
  wrap.innerHTML='';
  if(!items.length){ if(empty) empty.style.display=''; return; }
  if(empty) empty.style.display='none';
  items.forEach(function(rec){
    var r=rec.result||{}; var nItems=(r.items||[]).length; var nGems=(r.gems||[]).length;
    var d=document.createElement('div');
    d.className='border border-slate-200 rounded-xl p-3 bg-slate-50';
    d.innerHTML='<div class="font-bold text-sm text-forest">'+_esc(rec.name)+'</div>'+
      '<div class="text-[11px] text-ui-muted mt-0.5">'+fmtGold(rec.total||0)+' gp • '+nItems+' items • '+nGems+' gems</div>'+
      '<div class="mt-2 flex gap-2">'+
        '<button data-a="load" class="flex-1 py-1.5 bg-[#14532D] text-white rounded-lg text-xs font-bold hover:bg-[#166534]">▶ Open</button>'+
        '<button data-a="del" class="py-1.5 px-2 border border-red-300 text-red-600 rounded-lg text-xs font-bold hover:bg-red-50">🗑</button>'+
      '</div>';
    d.querySelector('[data-a=load]').onclick=function(){loadLoot(rec.id);};
    d.querySelector('[data-a=del]').onclick=function(){deleteLoot(rec.id);};
    wrap.appendChild(d);
  });
}
document.addEventListener('DOMContentLoaded', function(){
  var b=document.getElementById('saveLootBtn'); if(b) b.addEventListener('click', saveLoot);
  renderSavedLoot();
});
