(function(){
  function title(s){return String(s||'').replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();}).replace(/\bOf\b/g,'of').replace(/\bAnd\b/g,'and');}
  var cats={armor:'Armor',weapon:'Weapon',ammo:'Ammunition',gear:'Adventuring Gear',tool:'Tools',mount:'Mounts and Animals',vehicle:'Vehicles',service:'Services',poison:'Poisons',currency:'Currency',trinket:'Trinkets'};
  if(typeof DND_MUNDANE_ITEMS!=='undefined')DND_MUNDANE_ITEMS.forEach(function(x){var raw=String(x.id||'').replace(/^[^_]+_/,'');x.englishName=title(raw);x.name=x.englishName;x.category=cats[x.type]||'Equipment';x.description='Category: '+x.category+(x.cost?' · Cost: '+x.cost:'')+(x.weight?' · Weight: '+x.weight:'')+'.';});
  if(typeof DND_MAGIC_ITEMS!=='undefined')DND_MAGIC_ITEMS.forEach(function(x){x.name=x.englishName||x.name;x.category=x.typeEn||x.category;x.description=x.descriptionEn||'Description unavailable in the open source.';x.rarityUk=x.rarity;});
})();
