const DND_MONSTERS=[{slug:"aarakocra-aeromancer",name:"Aarakocra Aeromancer",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:16,mod:3,save:5},con:{score:12,mod:1,save:1},int:{score:13,mod:1,save:1},wis:{score:17,mod:3,save:5},cha:{score:12,mod:1,save:1}},fields:{AC:"16",HP:"66 (12d8 + 12)",Speed:"20 ft., Fly 50 ft.",Skills:"Arcana +3, Nature +5, Perception +7",Senses:"Passive Perception 17",Languages:"Aarakocra, Primordial (Auran)",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The aarakocra makes two Wind Staff attacks, and it can
use Spellcasting to cast Gust of Wind.
Spellcasting. The aarakocra casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 13):
At will: Elementalism, Gust of Wind, Mage Hand, Message
1/day: Lightning Bolt
Wind Staff. Melee or Ranged Attack Roll: +5, reach 5 ft. or range 120 ft.
Hit: 7 (1d8 + 3) Bludgeoning damage plus 11 (2d10) Lightning
damage.`},{title:"REACTIONS",text:`Feather Fall (1/Day). The aarakocra casts Feather Fall in response to
that spell's trigger, using the same spellcasting ability as
Spellcasting.
Aarakocra aeromancers control magical winds from the endless storms of the
Elemental Plane of Air.`}]},{slug:"aarakocra-skirmisher",name:"Aarakocra Skirmisher",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"12",HP:"11 (2d8 + 2)",Speed:"20 ft., Fly 50 ft.",Skills:"Perception +5",Senses:"Passive Perception 15",Languages:"Aarakocra, Primordial (Auran)",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Talons. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing
damage, or 9 (3d4 + 2) Slashing damage if the aarakocra moved 30+
feet straight toward the target immediately before the hit.
Wind Javelin. Melee or Ranged Attack Roll: +4, reach 5 ft. or range
30/120 ft. Hit: 5 (1d6 + 2) Piercing damage plus 2 (1d4) Thunder
damage. Hit or Miss: The javelin magically returns to the aarakocra's
hand immediately after a ranged attack.
Aarakocra skirmishers are adept at fighting aerial foes amid the clouds. They
often attack land-bound threats with diving strikes from above.`}]},{slug:"aberrant-cultist",name:"Aberrant Cultist",meta:"Humanoid Medium or Small, Neutral Evil",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:19,mod:4,save:4},con:{score:12,mod:1,save:1},int:{score:16,mod:3,save:6},wis:{score:18,mod:4,save:7},cha:{score:15,mod:2,save:2}},fields:{AC:"14",HP:"137 (25d8 + 25)",Speed:"30 ft.",Skills:"Arcana +6, Perception +7, Religion +6",Senses:"Darkvision 90 ft., Passive Perception 17",Languages:"Common, Deep Speech; telepathy 30 ft.",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The cultist makes two Tentacle Lash attacks. It can
replace any attack with a use of Mind Rot.
Spellcasting. The cultist casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 15):
At will: Detect Thoughts, Minor Illusion
Tentacle Lash. Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4)
Slashing damage plus 14 (4d6) Psychic damage. If the target is a
Large or smaller creature, it has the Grappled condition (escape DC
14) from one of two tentacles, and it has the Restrained condition
until the grapple ends.
Mind Rot. Wisdom Saving Throw: DC 15, one creature the cultist can
see within 90 feet. Failure: 27 (6d8) Psychic damage, and the target
has the Poisoned condition until the start of the cultist's next turn.
Success: Half damage only.`},{title:"REACTIONS",text:`Counterspell (2/Day). The cultist casts Counterspell in response to
that spell's trigger, using the same spellcasting ability as
Spellcasting.
Aberrant cultists pursue mind-bending powers from alien forces. Aberrant
cultists align with monsters such as aboleths and mind flayers or forces such as
Cthulhu, Hadar, Ityak-Ortheel the Elf Eater, Nyarlathotep, malicious solar
bodies, or entities from the Far Realm.`}]},{slug:"aberrant-spirit",name:"Aberrant Spirit",meta:"Aberration Medium, Neutral",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:15,mod:2,save:2},int:{score:16,mod:3,save:3},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"11 + the spell's level",HP:"40 + 10 for each spell level above 4",Speed:"30 ft., Fly 30 ft. (hover; Beholderkin only)",Immunities:"Psychic",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Deep Speech, understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Regeneration (Slaad Only). The spirit regains 5 Hit Points at the start
of its turn if it has at least 1 Hit Point.
Whispering Aura (Mind Flayer Only). At the start of each of the
spirit's turns, the spirit emits psionic energy if it doesn't have the
Incapacitated condition. Wisdom Saving Throw: DC equals your spell
save DC, each creature (other than you) within 5 feet of the spirit.
Failure: 2d6 Psychic damage.`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of attacks equal to half this
spell's level (round down).
Claw (Slaad Only). Melee Attack Roll: Bonus equals your spell attack
modifier, reach 5 ft. Hit: 1d10 + 3 + the spell's level Slashing damage,
and the target can't regain Hit Points until the start of the spirit's
next turn.
Eye Ray (Beholderkin Only). Ranged Attack Roll: Bonus equals your
spell attack modifier, range 150 ft. Hit: 1d8 + 3 + the spell's level
Psychic damage.
Psychic Slam (Mind Flayer Only). Melee Attack Roll: Bonus equals
your spell attack modifier, reach 5 ft. Hit: 1d8 + 3 + the spell's level
Psychic damage.
See Summon Aberration.`}]},{slug:"aboleth",name:"Aboleth",meta:"Aberration Large, Lawful Evil",type:"Aberration",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:9,mod:-1,save:3},con:{score:15,mod:2,save:6},int:{score:18,mod:4,save:8},wis:{score:15,mod:2,save:6},cha:{score:18,mod:4,save:4}},fields:{AC:"17",HP:"150 (20d10 + 40)",Speed:"10 ft., Swim 40 ft.",Skills:"History +12, Perception +10",Senses:"Darkvision 120 ft., Passive Perception 20",Languages:"Deep Speech; telepathy 120 ft.",CR:"10 (XP 5 900, or 7 200 in Lair; PB +4)"},cr:"10 (XP 5 900, or 7 200 in Lair; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Amphibious. The aboleth can breathe air and water.
Eldritch Restoration. If destroyed, the aboleth gains a new body in 5d10
days, reviving with all its Hit Points in the Far Realm or another location
chosen by the DM.
Legendary Resistance (3/Day, or 4/Day in Lair). If the aboleth fails a
saving throw, it can choose to succeed instead.
Mucus Cloud. While underwater, the aboleth is surrounded by mucus.
Constitution Saving Throw: DC 14, each creature in a 5-foot Emanation
originating from the aboleth at the end of the aboleth's turn. Failure: The
target is cursed. Until the curse ends, the target's skin becomes slimy,
the target can breathe air and water, and it can't regain Hit Points unless
it is underwater. While the cursed creature is outside a body of water,
the creature takes 6 (1d12) Acid damage at the end of every 10 minutes
unless moisture is applied to its skin before those minutes have passed.
Probing Telepathy. If a creature the aboleth can see communicates
telepathically with the aboleth, the aboleth learns the creature's greatest
desires.`},{title:"ACTIONS",text:`Multiattack. The aboleth makes two Tentacle attacks and uses either
Consume Memories or Dominate Mind if available.
Tentacle. Melee Attack Roll: +9, reach 15 ft. Hit: 12 (2d6 + 5) Bludgeoning
damage. If the target is a Large or smaller creature, it has the Grappled
condition (escape DC 14) from one of four tentacles.
Consume Memories. Intelligence Saving Throw: DC 16, one creature within
30 feet that is Charmed or Grappled by the aboleth. Failure: 10 (3d6)
Psychic damage. Success: Half damage. Failure or Success: The aboleth
gains the target's memories if the target is a Humanoid and is reduced
to 0 Hit Points by this action.
Dominate Mind (2/Day). Wisdom Saving Throw: DC 16, one creature the
aboleth can see within 30 feet. Failure: The target has the Charmed
condition until the aboleth dies or is on a different plane of existence
from the target. While Charmed, the target acts as an ally to the aboleth
and is under its control while within 60 feet of it. In addition, the aboleth
and the target can communicate telepathically with each other over any
distance. The target repeats the save whenever it takes damage as well
as after every 24 hours it spends at least 1 mile away from the aboleth,
ending the effect on itself on a success.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the aboleth can expend a use to take one of the following actions. The
aboleth regains all expended uses at the start of each of its turns.
Lash. The aboleth makes one Tentacle attack.
Psychic Drain. If the aboleth has at least one creature Charmed or
Grappled, it uses Consume Memories and regains 5 (1d10) Hit Points.`}]},{slug:"abominable-yeti",name:"Abominable Yeti",meta:"Monstrosity Huge, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:24,mod:7,save:7},dex:{score:10,mod:0,save:0},con:{score:22,mod:6,save:6},int:{score:9,mod:-1,save:-1},wis:{score:13,mod:1,save:1},cha:{score:9,mod:-1,save:-1}},fields:{AC:"15",HP:"137 (11d12 + 66)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +9, Stealth +8",Immunities:"Cold",Senses:"Darkvision 60 ft., Passive Perception 19",Languages:"Yeti",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Fear of Fire. If the yeti takes Fire damage, it has Disadvantage on
attack rolls and ability checks until the end of its next turn.`},{title:"ACTIONS",text:`Multiattack. The yeti can use its Chilling Gaze and makes two
attacks, using Claw or Ice Throw in any combination.
Claw. Melee Attack Roll: +11, reach 5 ft. Hit: 14 (2d6 + 7) Slashing
damage plus 7 (2d6) Cold damage.
Ice Throw. Ranged Attack Roll: +11, range 60/240 ft. Hit: 12 (2d4 + 7)
Bludgeoning damage plus 7 (2d6) Cold damage.
Chilling Gaze. Constitution Saving Throw: DC 18, one creature the yeti
can see within 30 feet. Failure: 21 (6d6) Cold damage, and the target
has the Paralyzed condition until the start of the yeti's next turn
unless the target has Immunity to Cold damage. Success: The target
is immune to this yeti's Chilling Gaze for 1 hour.
Cold Breath (Recharge 6). Constitution Saving Throw: DC 18, each
creature in a 30-foot Cone. Failure: 45 (10d8) Cold damage. Success:
Half damage.
Giants even among their own intimidating kind, abominable yetis are stronger
and bloodthirstier than their kin. They claim whole regions as their hunting
grounds,  and  they  might  track  trespassers  for  days.  On  sighting  prey,
abominable yetis fling boulders of ice and snow before closing to finish foes. In
addition to their icy claws and gaze, they can exhale a blast of arctic cold.
Abominable yetis dwell in frigid ruins or the deserted lairs of other monsters
atop infamous peaks.`}]},{slug:"adult-black-dragon",name:"Adult Black Dragon",meta:"Dragon (Chromatic) Huge, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:14,mod:2,save:7},con:{score:21,mod:5,save:5},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:6},cha:{score:19,mod:4,save:4}},fields:{AC:"19",HP:"195 (17d12 + 85)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Perception +11, Stealth +7",Immunities:"Acid",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 21",Languages:"Common, Draconic",CR:"14 (XP 11 500, or 13 000 in Lair; PB +5)"},cr:"14 (XP 11 500, or 13 000 in Lair; PB +5)",crValue:"14",xp:11500,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Melf's Acid Arrow (level 3
version).
Rend. Melee Attack Roll: +11, reach 10 ft. Hit: 13 (2d6 + 6) Slashing
damage plus 4 (1d8) Acid damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 18, each
creature in a 60-foot-long, 5-foot-wide Line. Failure: 54 (12d8) Acid
damage. Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 17, +9 to hit with spell attacks):
At Will: Detect Magic, Fear, Melf's Acid Arrow (level 3 version)
1/Day Each: Speak with Dead, Vitriolic Sphere`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Cloud of Insects. Dexterity Saving Throw: DC 17, one creature the
dragon can see within 120 feet. Failure: 22 (4d10) Poison damage,
and the target has Disadvantage on saving throws to maintain
Concentration until the end of its next turn. Failure or Success: The
dragon can't take this action again until the start of its next turn.
Frightful Presence. The dragon uses Spellcasting to cast Fear. The
dragon can't take this action again until the start of its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Black dragons delight in suffering and ruin. While other chromatic dragons
scheme for power and wealth, these dragons seek to tear down all they see and
rule over what remains. Black dragons are terrifying creatures with curved
horns and withered visages suggestive of fiendish skulls. They typically inhabit
stagnant swamps, crumbling ruins, or places of magical or environmental
corruption. Their acid breath scars their domains, eroding the features from
ancient statues and leaving nature with festering wounds. Black dragons hoard
tarnished symbols of hope and relics of fallen empires. The more sought-after
the  treasure,  the  more  black  dragons  prize  it—particularly  if  they  were
responsible for it being lost.`}]},{slug:"adult-blue-dragon",name:"Adult Blue Dragon",meta:"Dragon (Chromatic) Huge, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Huge",alignment:"Lawful Evil",abilities:{str:{score:25,mod:7,save:7},dex:{score:10,mod:0,save:5},con:{score:23,mod:6,save:6},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:7},cha:{score:20,mod:5,save:5}},fields:{AC:"19",HP:"212 (17d12 + 102)",Speed:"40 ft., Burrow 30 ft., Fly 80 ft.",Skills:"Perception +12, Stealth +5",Immunities:"Lightning",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 22",Languages:"Common, Draconic",CR:"16 (XP 15 000, or 18 000 in Lair; PB +5)"},cr:"16 (XP 15 000, or 18 000 in Lair; PB +5)",crValue:"16",xp:15e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Shatter.
Rend. Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing
damage plus 5 (1d10) Lightning damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 19, each
creature in a 90-foot-long, 5-foot-wide Line. Failure: 60 (11d10)
Lightning damage. Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 18):
At Will: Detect Magic, Invisibility, Mage Hand, Shatter
1/Day Each: Scrying, Sending`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Cloaked Flight. The dragon uses Spellcasting to cast Invisibility on
itself, and it can fly up to half its Fly Speed. The dragon can't take
this action again until the start of its next turn.
Sonic Boom. The dragon uses Spellcasting to cast Shatter. The
dragon can't take this action again until the start of its next turn.
Tail Swipe. The dragon makes one Rend attack.
Arrogant  and  imperious,  blue  dragons  are  chromatic  dragons  that  crave
control and collect followers like other dragons hoard treasure. They seek to
transform their territories into empires, domains to be feared by nations. Blue
dragons have sharp features with piercing horns and scales that range from
sapphire to the shades of stormy skies. They dwell in deserts and badlands,
particularly regions with dramatic spires from whose tops they might see for
miles. They seek lairs near sites of symbolic power, such as the abandoned
fortresses of giants, the colossi of fallen empires, or monuments raised by their
followers.  Regalia  of  rulership  and  artistic  masterpieces  fill  blue  dragons'
hoards. These dragons have no interest in treasures that are common or
flawed, preferring one-of-a-kind gemstones, the crowns of fallen royals, and
magic items capable of spreading the dragons' influence.`}]},{slug:"adult-brass-dragon",name:"Adult Brass Dragon",meta:"Dragon (Metallic) Huge, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Huge",alignment:"Chaotic Good",abilities:{str:{score:23,mod:6,save:6},dex:{score:10,mod:0,save:5},con:{score:21,mod:5,save:5},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:6},cha:{score:17,mod:3,save:3}},fields:{AC:"18",HP:"172 (15d12 + 75)",Speed:"40 ft., Burrow 30 ft., Fly 80 ft.",Skills:"History +7, Perception +11, Persuasion +8, Stealth +5",Immunities:"Fire",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 21",Languages:"Common, Draconic",CR:"13 (XP 10 000, or 11 500 in Lair; PB +5)"},cr:"13 (XP 10 000, or 11 500 in Lair; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast
Scorching Ray.
Rend. Melee Attack Roll: +11, reach 10 ft. Hit: 17 (2d10 + 6) Slashing
damage plus 4 (1d8) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 18, each
creature in a 60-foot-long, 5-foot-wide Line. Failure: 45 (10d8) Fire
damage. Success: Half damage.
Sleep Breath. Constitution Saving Throw: DC 18, each creature in a 60-
foot Cone. Failure: The target has the Incapacitated condition until
the end of its next turn, at which point it repeats the save. Second
Failure: The target has the Unconscious condition for 10 minutes.
This effect ends for the target if it takes damage or a creature within
5 feet of it takes an action to wake it.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 16):
At Will: Detect Magic, Minor Illusion, Scorching Ray, Shapechange
(Beast or Humanoid form only, no Temporary Hit Points gained
from the spell, and no Concentration or Temporary Hit Points
required to maintain the spell), Speak with Animals
1/Day Each: Detect Thoughts, Control Weather`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Blazing Light. The dragon uses Spellcasting to cast Scorching Ray.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Scorching Sands. Dexterity Saving Throw: DC 16, one creature the
dragon can see within 120 feet. Failure: 27 (6d8) Fire damage, and
the target's Speed is halved until the end of its next turn. Failure or
Success: The dragon can't take this action again until the start of its
next turn.
Gregarious and outgoing, brass dragons relish sharing knowledge and stories.
Although  these  metallic  dragons  favor  arid  lands,  they  cheerfully  journey
considerable distances to visit friendly creatures, pass on what they've learned,
and  collect  news.  Though  good  natured,  brass  dragons  don't  shirk  from
combat when necessary, thwarting foes with magical sleep and searing them
with flame. Brass dragons favor warm climes, particularly steppes and rocky or
sandy deserts, and they usually dwell near prominent crossroads or oases that
regularly  draw  visitors.  They  enjoy  adopting  Humanoid  forms,  disguising
themselves  as  traveling  merchants,  scholars,  storytellers,  or  anyone  else
invested in others' stories. Brass dragons collect eclectic objects. While such

items might seem like knickknacks, each is part of a story—perhaps a nostalgic
memento or evidence of a tale passed into myth. An old friend's hat and the
crown of the last ruler of a forgotten dynasty could occupy the same shelf in a
brass dragon's hoard.`}]},{slug:"adult-bronze-dragon",name:"Adult Bronze Dragon",meta:"Dragon (Metallic) Huge, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Huge",alignment:"Lawful Good",abilities:{str:{score:25,mod:7,save:7},dex:{score:10,mod:0,save:5},con:{score:23,mod:6,save:6},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:7},cha:{score:20,mod:5,save:5}},fields:{AC:"18",HP:"212 (17d12 + 102)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Insight +7, Perception +12, Stealth +5",Immunities:"Lightning",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 22",Languages:"Common, Draconic",CR:"15 (XP 13 000, or 15 000 in Lair; PB +5)"},cr:"15 (XP 13 000, or 15 000 in Lair; PB +5)",crValue:"15",xp:13e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Repulsion Breath or (B) Spellcasting to
cast Guiding Bolt (level 2 version).
Rend. Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing
damage plus 5 (1d10) Lightning damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 19, each
creature in a 90-foot-long, 5-foot-wide Line. Failure: 55 (10d10)
Lightning damage. Success: Half damage.
Repulsion Breath. Strength Saving Throw: DC 19, each creature in a
30-foot Cone. Failure: The target is pushed up to 60 feet straight
away from the dragon and has the Prone condition.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 17, +10 to hit with spell attacks):
At Will: Detect Magic, Guiding Bolt (level 2 version), Shapechange
(Beast or Humanoid form only, no Temporary Hit Points gained
from the spell, and no Concentration or Temporary Hit Points
required to maintain the spell), Speak with Animals, Thaumaturgy
1/Day Each: Detect Thoughts, Water Breathing`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Guiding Light. The dragon uses Spellcasting to cast Guiding Bolt
(level 2 version).
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Thunderclap. Constitution Saving Throw: DC 17, each creature in a 20-
foot-radius Sphere centered on a point the dragon can see within 90
feet. Failure: 10 (3d6) Thunder damage, and the target has the
Deafened condition until the end of its next turn.
Where bronze dragons dwell, wonders flourish. Imaginative yet mindful, these
metallic dragons work toward greatness and help others achieve all they can.
They strive to preserve innovations, from the works of past civilizations to new
discoveries, and they share such works widely. When dealing with shorter-
lived beings, bronze dragons prefer to win them over through conversation and
cultivation, but they don't shy from battle when villains keep others from
achieving  their  potential.  Bronze  dragons  enjoy  the  power  and  endless
possibilities of the sea, and they often make their lairs in places of natural
beauty or communities they wish to preserve. Within their dwellings, bronze
dragons hoard things they believe will be useful one day. They salvage treasure
lost to the sea, reclaiming wealth or sunken ships.`}]},{slug:"adult-copper-dragon",name:"Adult Copper Dragon",meta:"Dragon (Metallic) Huge, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Huge",alignment:"Chaotic Good",abilities:{str:{score:23,mod:6,save:6},dex:{score:12,mod:1,save:6},con:{score:21,mod:5,save:5},int:{score:18,mod:4,save:4},wis:{score:15,mod:2,save:7},cha:{score:18,mod:4,save:4}},fields:{AC:"18",HP:"184 (16d12 + 80)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Deception +9, Perception +12, Stealth +6",Immunities:"Acid",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 22",Languages:"Common, Draconic",CR:"14 (XP 11 500, or 13 000 in Lair; PB +5)"},cr:"14 (XP 11 500, or 13 000 in Lair; PB +5)",crValue:"14",xp:11500,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast
Mind Spike (level 4 version).
Rend. Melee Attack Roll: +11, reach 10 ft. Hit: 17 (2d10 + 6) Slashing
damage plus 4 (1d8) Acid damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 18, each
creature in an 60-foot-long, 5-foot-wide Line. Failure: 54 (12d8) Acid
damage. Success: Half damage.
Slowing Breath. Constitution Saving Throw: DC 18, each creature in a
60-foot Cone. Failure: The target can't take Reactions; its Speed is
halved; and it can take either an action or a Bonus Action on its
turn, not both. This effect lasts until the end of its next turn.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 17):
At Will: Detect Magic, Mind Spike (level 4 version), Minor Illusion,
Shapechange (Beast or Humanoid form only, no Temporary Hit
Points gained from the spell, and no Concentration or Temporary
Hit Points required to maintain the spell)
1/Day Each: Greater Restoration, Major Image`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Giggling Magic. Charisma Saving Throw: DC 17, one creature the
dragon can see within 90 feet. Failure: 24 (7d6) Psychic damage.
Until the end of its next turn, the target rolls 1d6 whenever it makes
an ability check or attack roll and subtracts the number rolled from
the D20 Test. Failure or Success: The dragon can't take this action
again until the start of its next turn.
Mind Jolt. The dragon uses Spellcasting to cast Mind Spike (level 4
version). The dragon can't take this action again until the start of its
next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Relentlessly friendly and curious, most copper dragons view the world as a
place of endless wonder and possibility. These gregarious dragons are fonts of
patience, hospitality, and humor, and they seek to improve the lives—or, at
least,  the  mood—of  those  they  interact  with.  If  forced  to  fight  to  defend
themselves or their friends, these dragons favor using their slowing breath and
physical attacks to subdue antagonists. Only in cases of extreme peril or
emotion do they use their deadly acid breath. Copper dragons typically live in
caverns amid picturesque hills and rock formations—particularly those that
are prominent landmarks. These dragons collect gifts, though they have little
interest in treasure without meaning, no matter how valuable it is. To them,
thoughtfully given presents and the feelings or memories they symbolize are
more important than masterpieces or magical relics.`}]},{slug:"adult-gold-dragon",name:"Adult Gold Dragon",meta:"Dragon (Metallic) Huge, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Huge",alignment:"Lawful Good",abilities:{str:{score:27,mod:8,save:8},dex:{score:14,mod:2,save:8},con:{score:25,mod:7,save:7},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:8},cha:{score:24,mod:7,save:7}},fields:{AC:"19",HP:"243 (18d12 + 126)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Insight +8, Perception +14, Persuasion +13, Stealth +8",Immunities:"Fire",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 24",Languages:"Common, Draconic",CR:"17 (XP 18 000, or 20 000 in Lair; PB +6)"},cr:"17 (XP 18 000, or 20 000 in Lair; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace one
attack with a use of (A) Spellcasting to cast Guiding Bolt (level 2 version)
or (B) Weakening Breath.
Rend. Melee Attack Roll: +14, reach 10 ft. Hit: 17 (2d8 + 8) Slashing damage
plus 4 (1d8) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 21, each creature
in a 60-foot Cone. Failure: 66 (12d10) Fire damage. Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 21, +13 to hit with spell attacks):
At will: Detect Magic, Guiding Bolt (level 2 version), Shapechange (Beast or
Humanoid form only, no Temporary Hit Points gained from the spell,
and no Concentration or Temporary Hit Points required to maintain the
spell)
1/day each: Flame Strike, Zone of Truth
Weakening Breath. Strength Saving Throw: DC 21, each creature that isn't
currently affected by this breath in a 60-foot Cone. Failure: The target
has Disadvantage on Strength-based D20 Tests and subtracts 3 (1d6)
from its damage rolls. It repeats the save at the end of each of its turns,
ending the effect on itself on a success. After 1 minute, it succeeds
automatically.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the dragon can expend a use to take one of the following actions. The
dragon regains all expended uses at the start of each of its turns.
Banish. Charisma Saving Throw: DC 21, one creature the dragon can see
within 120 feet. Failure: 10 (3d6) Force damage, and the target has the
Incapacitated condition and is transported to a harmless demiplane until
the start of the dragon's next turn, at which point it reappears in an
unoccupied space of the dragon's choice within 120 feet of the dragon.
Failure or Success: The dragon can't take this action again until the start
of its next turn.
Guiding Light. The dragon uses Spellcasting to cast Guiding Bolt (level 2
version).
Pounce. The dragon moves up to half its Speed, and it makes one Rend
attack.
Gold dragons work to make the world a better place. The most powerful of the metallic dragons, these awe-inspiring dragons strive to protect that which is good and
bend fate toward a brighter future. Their kind dispositions don't prevent gold dragons from engaging in combat when necessary, though, and they exhale brilliant
flames and weakening magic to rout their foes. Gold dragons favor grasslands and pristine forests, frequently dwelling near awe-inspiring natural wonders or
guarding monuments from ancient civilizations. In their lairs, gold dragons hoard coins and gems, but they frequently put their treasure to use in pursuit of greater
goals. They often use their riches to buy rare lore books, pay informants, or patronize idealistic adventurers.`}]},{slug:"adult-green-dragon",name:"Adult Green Dragon",meta:"Dragon (Chromatic) Huge, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Huge",alignment:"Lawful Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:12,mod:1,save:6},con:{score:21,mod:5,save:5},int:{score:18,mod:4,save:4},wis:{score:15,mod:2,save:7},cha:{score:18,mod:4,save:4}},fields:{AC:"19",HP:"207 (18d12 + 90)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Deception +9, Perception +12, Persuasion +9, Stealth +6",Immunities:"Poison; Poisoned",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 22",Languages:"Common, Draconic",CR:"15 (XP 13 000, or 15 000 in Lair; PB +5)"},cr:"15 (XP 13 000, or 15 000 in Lair; PB +5)",crValue:"15",xp:13e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Mind Spike (level 3
version).
Rend. Melee Attack Roll: +11, reach 10 ft. Hit: 15 (2d8 + 6) Slashing
damage plus 7 (2d6) Poison damage.
Poison Breath (Recharge 5–6). Constitution Saving Throw: DC 18, each
creature in a 60-foot Cone. Failure: 56 (16d6) Poison damage.
Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 17):
At Will: Detect Magic, Mind Spike (level 3 version)
1/Day: Geas`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Mind Invasion. The dragon uses Spellcasting to cast Mind Spike (level
3 version).
Noxious Miasma. Constitution Saving Throw: DC 17, each creature in
a 20-foot-radius Sphere centered on a point the dragon can see
within 90 feet. Failure: 7 (2d6) Poison damage, and the target takes a
−2 penalty to AC until the end of its next turn. Failure or Success: The
dragon can't take this action again until the start of its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
From forbidden forest depths, green dragons whisper evils into the world and
manipulate the lives of those who listen. Elusive, conniving, and egotistical,
these chromatic dragons patiently prey on the fears of shorter-lived beings,
corrupting and isolating them. Green dragons might lurk amid labyrinthine
wildernesses  for  centuries  without  revealing  themselves;  even  their  most
devoted followers might know them only as the voice of the woodlands or a
whisper in their dreams. Despite their might, most green dragons disdain
physical violence, viewing combat as servants' work and preferring to trick foes
into dangerous or exploitative scenarios. These dragons collect "baubles" that
embody their webs of manipulation and serve as tools of extortion, such as
compromising documents, family heirlooms, and sentimental treasures.`}]},{slug:"adult-red-dragon",name:"Adult Red Dragon",meta:"Dragon (Chromatic) Huge, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:27,mod:8,save:8},dex:{score:10,mod:0,save:6},con:{score:25,mod:7,save:7},int:{score:16,mod:3,save:3},wis:{score:13,mod:1,save:7},cha:{score:23,mod:6,save:6}},fields:{AC:"19",HP:"256 (19d12 + 133)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Perception +13, Stealth +6",Immunities:"Fire",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 23",Languages:"Common, Draconic",CR:"17 (XP 18 000, or 20 000 in Lair; PB +6)"},cr:"17 (XP 18 000, or 20 000 in Lair; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Scorching Ray.
Rend. Melee Attack Roll: +14, reach 10 ft. Hit: 13 (1d10 + 8) Slashing
damage plus 5 (2d4) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 21, each
creature in a 60-foot Cone. Failure: 59 (17d6) Fire damage. Success:
Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 20, +12 to hit with spell attacks):
At will: Command (level 2 version), Detect Magic, Scorching Ray
1/day: Fireball`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, The dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Commanding Presence. The dragon uses Spellcasting to cast
Command (level 2 version). The dragon can't take this action again
until the start of its next turn.
Fiery Rays. The dragon uses Spellcasting to cast Scorching Ray. The
dragon can't take this action again until the start of its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Red dragons take whatever they desire and burn to ash anything that stands in
their  way.  These  chromatic  dragons  endlessly  desire  more—more  magic,
territory,  treasure,  or  whatever  else  inflames  their  cruel  ambitions.  Red
dragons make their lairs amid perilous cliffs and volcanoes. Within, they
amass and fiercely protect hoards of treasure, and many have perfect recall of
the hoards' contents and the locations of all they've collected. Should anything
go missing, red dragons fly into rages. They don't rest until their treasures are
returned and the thieves have burned. Red dragons believe themselves to be
the greatest of all dragons and, by extension, the greatest of all creatures. To
them, pillaging and conquering are their right—treasures can find no more
honored place than in their hoards, and other creatures are privileged to serve
them.`}]},{slug:"adult-silver-dragon",name:"Adult Silver Dragon",meta:"Dragon (Metallic) Huge, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Huge",alignment:"Lawful Good",abilities:{str:{score:27,mod:8,save:8},dex:{score:10,mod:0,save:5},con:{score:25,mod:7,save:7},int:{score:16,mod:3,save:3},wis:{score:13,mod:1,save:6},cha:{score:22,mod:6,save:6}},fields:{AC:"19",HP:"216 (16d12 + 112)",Speed:"40 ft., Fly 80 ft.",Skills:"History +8, Perception +11, Stealth +5",Immunities:"Cold",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 21",Languages:"Common, Draconic",CR:"16 (XP 15 000, or 18 000 in Lair; PB +5)"},cr:"16 (XP 15 000, or 18 000 in Lair; PB +5)",crValue:"16",xp:15e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to
cast Ice Knife.
Rend. Melee Attack Roll: +13, reach 10 ft. Hit: 17 (2d8 + 8) Slashing
damage plus 4 (1d8) Cold damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 20, each
creature in a 60-foot Cone. Failure: 54 (12d8) Cold damage. Success:
Half damage.
Paralyzing Breath. Constitution Saving Throw: DC 20, each creature in
a 60-foot Cone. First Failure: The target has the Incapacitated
condition until the end of its next turn, when it repeats the save.
Second Failure: The target has the Paralyzed condition, and it repeats
the save at the end of each of its turns, ending the effect on itself on
a success. After 1 minute, it succeeds automatically.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 19, +11 to hit with spell attacks):
At Will: Detect Magic, Hold Monster, Ice Knife, Shapechange (Beast or
Humanoid form only, no Temporary Hit Points gained from the
spell, and no Concentration or Temporary Hit Points required to
maintain the spell)
1/Day Each: Ice Storm (level 5 version), Zone of Truth`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Chill. The dragon uses Spellcasting to cast Hold Monster. The dragon
can't take this action again until the start of its next turn.
Cold Gale. Dexterity Saving Throw: DC 19, each creature in a 60-foot-
long, 10-foot-wide Line. Failure: 14 (4d6) Cold damage, and the
target is pushed up to 30 feet straight away from the dragon.
Success: Half damage only. Failure or Success: The dragon can't take
this action again until the start of its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Silver dragons work to preserve peace and encourage greatness. They try to
live  as  examples  of  decency  while  remaining  watchful  against  evil.  Silver
dragons typically dwell amid snow-capped mountains, though aspirations and
congeniality  drive  some  to  instead  live  among  cosmopolitan  societies.
Disguised as humanoids, they ally with artists, historians, knights, and humble
leaders who learn from the past to create better futures. Silver dragons take
inspiration from legendary heroes and have grand ambitions. Many collect
treasures that reflect these interests, such as histories, ancient art, and the gear
of famous champions.`}]},{slug:"adult-white-dragon",name:"Adult White Dragon",meta:"Dragon (Chromatic) Huge, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:22,mod:6,save:6},dex:{score:10,mod:0,save:5},con:{score:22,mod:6,save:6},int:{score:8,mod:-1,save:-1},wis:{score:12,mod:1,save:6},cha:{score:12,mod:1,save:1}},fields:{AC:"18",HP:"200 (16d12 + 96)",Speed:"40 ft., Burrow 30 ft., Fly 80 ft., Swim 40 ft.",Skills:"Perception +11, Stealth +5",Immunities:"Cold",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 21",Languages:"Common, Draconic",CR:"13 (XP 10 000, or 11 500 in Lair; PB +5)"},cr:"13 (XP 10 000, or 11 500 in Lair; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Ice Walk. The dragon can move across and climb icy surfaces
Terrain composed of ice or snow doesn't cost it extra movement.
Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +11, reach 10 ft. Hit: 13 (2d6 + 6) Slashing
damage plus 4 (1d8) Cold damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 19, each
creature in a 60-foot Cone. Failure: 54 (12d8) Cold damage. Success:
Half damage.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Freezing Burst. Constitution Saving Throw: DC 14, each creature in a
30-foot-radius Sphere centered on a point the dragon can see within
120 feet. Failure: 7 (2d6) Cold damage, and the target's Speed is 0
until the end of the target's next turn. Failure or Success: The dragon
can't take this action again until the start of its next turn.
Frightful Presence. The dragon casts Fear, requiring no Material
components and using Charisma as the spellcasting ability (spell
save DC 14). The dragon can't take this action again until the start of
its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Among the most primal chromatic dragons, white dragons prioritize survival
over all. Life is harsh and uncertain in the arctic expanses, glacial heights, and
frozen seas where these dragons dwell. White dragons fiercely protect their
territories, scouring the frigid regions for food and evidence of trespassers.
Most white dragons ignore the plots of smaller creatures and other dragons,
concerning themselves only with their own survival. White dragons create lairs
to defend themselves from other deadly arctic creatures and from dangerous
natural conditions. Within these shelters, white dragons hoard testaments to
their superiority, such as monstrous skulls, the gear of defeated rivals, and
curiosities that capture their interest. To protect such treasure, white dragons
coax ice to form over their hoards or sink their wealth in frigid pools. For white
dragons, each piece of treasure embodies a victory—the details of which inflate
as these dragons age.`}]},{slug:"air-elemental",name:"Air Elemental",meta:"Elemental Large, Neutral",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:14,mod:2,save:2},dex:{score:20,mod:5,save:5},con:{score:14,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"15",HP:"90 (12d10 + 24)",Speed:"10 ft., Fly 90 ft. (hover)",Resistances:"Bludgeoning, Lightning, Piercing, Slashing",Immunities:"Poison, Thunder; Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Auran)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Air Form. The elemental can enter a creature's space and stop
there. It can move through a space as narrow as 1 inch without
expending extra movement to do so.`},{title:"ACTIONS",text:`Multiattack. The elemental makes two Thunderous Slam attacks.
Thunderous Slam. Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5)
Thunder damage.
Whirlwind (Recharge 4–6). Strength Saving Throw: DC 13, one
Medium or smaller creature in the elemental's space. Failure: 24
(4d10 + 2) Thunder damage, and the target is pushed up to 20 feet
straight away from the elemental and has the Prone condition.
Success: Half damage only.`}]},{slug:"allosaurus",name:"Allosaurus",meta:"Beast (Dinosaur) Large, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Large",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:17,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"51 (6d10 + 18)",Speed:"60 ft.",Skills:"Perception +5",Senses:"Passive Perception 15",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4) Piercing
damage.
Claws. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Slashing
damage. If the target is a Large or smaller creature and the
allosaurus moved 30+ feet straight toward it immediately before the
hit, the target has the Prone condition, and the allosaurus can make
one Bite attack against it.`}]},{slug:"ancient-black-dragon",name:"Ancient Black Dragon",meta:"Dragon (Chromatic) Gargantuan, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Gargantuan",alignment:"Chaotic Evil",abilities:{str:{score:27,mod:8,save:8},dex:{score:14,mod:2,save:9},con:{score:25,mod:7,save:7},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:9},cha:{score:22,mod:6,save:6}},fields:{AC:"22",HP:"367 (21d20 + 147)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Perception +16, Stealth +9",Immunities:"Acid",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 26",Languages:"Common, Draconic",CR:"21 (XP 33 000, or 41 000 in Lair; PB +7)"},cr:"21 (XP 33 000, or 41 000 in Lair; PB +7)",crValue:"21",xp:33e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Melf's Acid Arrow (level 4
version).
Rend. Melee Attack Roll: +15, reach 15 ft. Hit: 17 (2d8 + 8) Slashing
damage plus 9 (2d8) Acid damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 22, each
creature in a 90-foot-long, 10-foot-wide Line. Failure: 67 (15d8) Acid
damage. Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 21, +13 to hit with spell attacks):
At Will: Detect Magic, Fear, Melf's Acid Arrow (level 4 version)
1/Day Each: Create Undead, Speak with Dead, Vitriolic Sphere (level 5
version)`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Cloud of Insects. Dexterity Saving Throw: DC 21, one creature the
dragon can see within 120 feet. Failure: 33 (6d10) Poison damage,
and the target has Disadvantage on saving throws to maintain
Concentration until the end of its next turn. Failure or Success: The
dragon can't take this action again until the start of its next turn.
Frightful Presence. The dragon uses Spellcasting to cast Fear. The
dragon can't take this action again until the start of its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Black dragons delight in suffering and ruin. While other chromatic dragons
scheme for power and wealth, these dragons seek to tear down all they see and
rule over what remains. Black dragons are terrifying creatures with curved
horns and withered visages suggestive of fiendish skulls. They typically inhabit
stagnant swamps, crumbling ruins, or places of magical or environmental
corruption. Their acid breath scars their domains, eroding the features from
ancient statues and leaving nature with festering wounds. Black dragons hoard
tarnished symbols of hope and relics of fallen empires. The more sought-after
the  treasure,  the  more  black  dragons  prize  it—particularly  if  they  were
responsible for it being lost.`}]},{slug:"ancient-blue-dragon",name:"Ancient Blue Dragon",meta:"Dragon (Chromatic) Gargantuan, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Gargantuan",alignment:"Lawful Evil",abilities:{str:{score:29,mod:9,save:9},dex:{score:10,mod:0,save:7},con:{score:27,mod:8,save:8},int:{score:18,mod:4,save:4},wis:{score:17,mod:3,save:10},cha:{score:25,mod:7,save:7}},fields:{AC:"22",HP:"481 (26d20 + 208)",Speed:"40 ft., Burrow 40 ft., Fly 80 ft.",Skills:"Perception +17, Stealth +7",Immunities:"Lightning",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 27",Languages:"Common, Draconic",CR:"23 (XP 50 000, or 62 000 in Lair; PB +7)"},cr:"23 (XP 50 000, or 62 000 in Lair; PB +7)",crValue:"23",xp:5e4,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Shatter (level 3 version).
Rend. Melee Attack Roll: +16, reach 15 ft. Hit: 18 (2d8 + 9) Slashing
damage plus 11 (2d10) Lightning damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 23, each
creature in a 120-foot-long, 10-foot-wide Line. Failure: 88 (16d10)
Lightning damage. Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 22):
At Will: Detect Magic, Invisibility, Mage Hand, Shatter (level 3 version)
1/Day Each: Scrying, Sending`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Cloaked Flight. The dragon uses Spellcasting to cast Invisibility on
itself, and it can fly up to half its Fly Speed. The dragon can't take
this action again until the start of its next turn.
Sonic Boom. The dragon uses Spellcasting to cast Shatter (level 3
version). The dragon can't take this action again until the start of its
next turn.
Tail Swipe. The dragon makes one Rend attack.
Arrogant  and  imperious,  blue  dragons  are  chromatic  dragons  that  crave
control and collect followers like other dragons hoard treasure. They seek to
transform their territories into empires, domains to be feared by nations. Blue
dragons have sharp features with piercing horns and scales that range from
sapphire to the shades of stormy skies. They dwell in deserts and badlands,
particularly regions with dramatic spires from whose tops they might see for
miles. They seek lairs near sites of symbolic power, such as the abandoned
fortresses of giants, the colossi of fallen empires, or monuments raised by their
followers.  Regalia  of  rulership  and  artistic  masterpieces  fill  blue  dragons'
hoards. These dragons have no interest in treasures that are common or
flawed, preferring one-of-a-kind gemstones, the crowns of fallen royals, and
magic items capable of spreading the dragons' influence.`}]},{slug:"ancient-brass-dragon",name:"Ancient Brass Dragon",meta:"Dragon (Metallic) Gargantuan, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Gargantuan",alignment:"Chaotic Good",abilities:{str:{score:27,mod:8,save:8},dex:{score:10,mod:0,save:6},con:{score:25,mod:7,save:7},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:8},cha:{score:22,mod:6,save:6}},fields:{AC:"20",HP:"332 (19d20 + 133)",Speed:"40 ft., Burrow 40 ft., Fly 80 ft.",Skills:"History +9, Perception +14, Persuasion +12, Stealth +6",Immunities:"Fire",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 24",Languages:"Common, Draconic",CR:"20 (XP 25 000, or 33 000 in Lair; PB +6)"},cr:"20 (XP 25 000, or 33 000 in Lair; PB +6)",crValue:"20",xp:25e3,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast
Scorching Ray (level 3 version).
Rend. Melee Attack Roll: +14, reach 15 ft. Hit: 19 (2d10 + 8) Slashing
damage plus 7 (2d6) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 21, each
creature in a 90-foot-long, 5-foot-wide Line. Failure: 58 (13d8) Fire
damage. Success: Half damage.
Sleep Breath. Constitution Saving Throw: DC 21, each creature in a 90-
foot Cone. Failure: The target has the Incapacitated condition until
the end of its next turn, at which point it repeats the save. Second
Failure: The target has the Unconscious condition for 10 minutes.
This effect ends for the target if it takes damage or a creature within
5 feet of it takes an action to wake it.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 20):
At Will: Detect Magic, Minor Illusion, Scorching Ray (level 3 version),
Shapechange (Beast or Humanoid form only, no Temporary Hit
Points gained from the spell, and no Concentration or Temporary
Hit Points required to maintain the spell), Speak with Animals
1/Day Each: Control Weather, Detect Thoughts`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Blazing Light. The dragon uses Spellcasting to cast Scorching Ray
(level 3 version).
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Scorching Sands. Dexterity Saving Throw: DC 20, one creature the
dragon can see within 120 feet. Failure: 36 (8d8) Fire damage, and
the target's Speed is halved until the end of its next turn. Failure or
Success: The dragon can't take this action again until the start of its
next turn.
Gregarious and outgoing, brass dragons relish sharing knowledge and stories.
Although  these  metallic  dragons  favor  arid  lands,  they  cheerfully  journey
considerable distances to visit friendly creatures, pass on what they've learned,
and  collect  news.  Though  good  natured,  brass  dragons  don't  shirk  from
combat when necessary, thwarting foes with magical sleep and searing them
with flame. Brass dragons favor warm climes, particularly steppes and rocky or
sandy deserts, and they usually dwell near prominent crossroads or oases that
regularly  draw  visitors.  They  enjoy  adopting  Humanoid  forms,  disguising
themselves  as  traveling  merchants,  scholars,  storytellers,  or  anyone  else

invested in others' stories. Brass dragons collect eclectic objects. While such
items might seem like knickknacks, each is part of a story—perhaps a nostalgic
memento or evidence of a tale passed into myth. An old friend's hat and the
crown of the last ruler of a forgotten dynasty could occupy the same shelf in a
brass dragon's hoard.`}]},{slug:"ancient-bronze-dragon",name:"Ancient Bronze Dragon",meta:"Dragon (Metallic) Gargantuan, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Gargantuan",alignment:"Lawful Good",abilities:{str:{score:29,mod:9,save:9},dex:{score:10,mod:0,save:7},con:{score:27,mod:8,save:8},int:{score:18,mod:4,save:4},wis:{score:17,mod:3,save:10},cha:{score:25,mod:7,save:7}},fields:{AC:"22",HP:"444 (24d20 + 192)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Insight +10, Perception +17, Stealth +7",Immunities:"Lightning",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 27",Languages:"Common, Draconic",CR:"22 (XP 41 000, or 50 000 in Lair; PB +7)"},cr:"22 (XP 41 000, or 50 000 in Lair; PB +7)",crValue:"22",xp:41e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Repulsion Breath or (B) Spellcasting to
cast Guiding Bolt (level 2 version).
Rend. Melee Attack Roll: +16, reach 15 ft. Hit: 18 (2d8 + 9) Slashing
damage plus 9 (2d8) Lightning damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 23, each
creature in a 120-foot-long, 10-foot-wide Line. Failure: 82 (15d10)
Lightning damage. Success: Half damage.
Repulsion Breath. Strength Saving Throw: DC 23, each creature in a
30-foot Cone. Failure: The target is pushed up to 60 feet straight
away from the dragon and has the Prone condition.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 22, +14 to hit with spell attacks):
At Will: Detect Magic, Guiding Bolt (level 2 version), Shapechange
(Beast or Humanoid form only, no Temporary Hit Points gained
from the spell, and no Concentration or Temporary Hit Points
required to maintain the spell), Speak with Animals, Thaumaturgy
1/Day Each: Detect Thoughts, Control Water, Scrying, Water Breathing`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Guiding Light. The dragon uses Spellcasting to cast Guiding Bolt
(level 2 version).
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Thunderclap. Constitution Saving Throw: DC 22, each creature in a 20-
foot-radius Sphere centered on a point the dragon can see within
120 feet. Failure: 13 (3d8) Thunder damage, and the target has the
Deafened condition until the end of its next turn.
Where bronze dragons dwell, wonders flourish. Imaginative yet mindful, these
metallic dragons work toward greatness and help others achieve all they can.
They strive to preserve innovations, from the works of past civilizations to new
discoveries, and they share such works widely. When dealing with shorter-
lived beings, bronze dragons prefer to win them over through conversation and
cultivation, but they don't shy from battle when villains keep others from
achieving  their  potential.  Bronze  dragons  enjoy  the  power  and  endless
possibilities of the sea, and they often make their lairs in places of natural
beauty or communities they wish to preserve. Within their dwellings, bronze
dragons hoard things they believe will be useful one day. They salvage treasure
lost to the sea, reclaiming wealth or sunken ships.`}]},{slug:"ancient-copper-dragon",name:"Ancient Copper Dragon",meta:"Dragon (Metallic) Gargantuan, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Gargantuan",alignment:"Chaotic Good",abilities:{str:{score:27,mod:8,save:8},dex:{score:12,mod:1,save:8},con:{score:25,mod:7,save:7},int:{score:20,mod:5,save:5},wis:{score:17,mod:3,save:10},cha:{score:22,mod:6,save:6}},fields:{AC:"21",HP:"367 (21d20 + 147)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Deception +13, Perception +17, Stealth +8",Immunities:"Acid",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 27",Languages:"Common, Draconic",CR:"21 (XP 33 000, or 41 000 in Lair; PB +7)"},cr:"21 (XP 33 000, or 41 000 in Lair; PB +7)",crValue:"21",xp:33e3,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast
Mind Spike (level 5 version).
Rend. Melee Attack Roll: +15, reach 15 ft. Hit: 19 (2d10 + 8) Slashing
damage plus 9 (2d8) Acid damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 22, each
creature in an 90-foot-long, 10-foot-wide Line. Failure: 63 (14d8) Acid
damage. Success: Half damage.
Slowing Breath. Constitution Saving Throw: DC 22, each creature in a
90-foot Cone. Failure: The target can't take Reactions; its Speed is
halved; and it can take either an action or a Bonus Action on its
turn, not both. This effect lasts until the end of its next turn.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 21):
At Will: Detect Magic, Mind Spike (level 5 version), Minor Illusion,
Shapechange (Beast or Humanoid form only, no Temporary Hit
Points gained from the spell, and no Concentration or Temporary
Hit Points required to maintain the spell)
1/Day Each: Greater Restoration, Major Image, Project Image`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Giggling Magic. Charisma Saving Throw: DC 21, one creature the
dragon can see within 120 feet. Failure: 31 (9d6) Psychic damage.
Until the end of its next turn, the target rolls 1d8 whenever it makes
an ability check or attack roll and subtracts the number rolled from
the D20 Test. Failure or Success: The dragon can't take this action
again until the start of its next turn.
Mind Jolt. The dragon uses Spellcasting to cast Mind Spike (level 5
version). The dragon can't take this action again until the start of its
next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Relentlessly friendly and curious, most copper dragons view the world as a
place of endless wonder and possibility. These gregarious dragons are fonts of
patience, hospitality, and humor, and they seek to improve the lives—or, at
least,  the  mood—of  those  they  interact  with.  If  forced  to  fight  to  defend
themselves or their friends, these dragons favor using their slowing breath and
physical attacks to subdue antagonists. Only in cases of extreme peril or
emotion do they use their deadly acid breath. Copper dragons typically live in
caverns amid picturesque hills and rock formations—particularly those that
are prominent landmarks. These dragons collect gifts, though they have little
interest in treasure without meaning, no matter how valuable it is. To them,
thoughtfully given presents and the feelings or memories they symbolize are
more important than masterpieces or magical relics.`}]},{slug:"ancient-gold-dragon",name:"Ancient Gold Dragon",meta:"Dragon (Metallic) Gargantuan, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Gargantuan",alignment:"Lawful Good",abilities:{str:{score:30,mod:10,save:10},dex:{score:14,mod:2,save:9},con:{score:29,mod:9,save:9},int:{score:18,mod:4,save:4},wis:{score:17,mod:3,save:10},cha:{score:28,mod:9,save:9}},fields:{AC:"22",HP:"546 (28d20 + 252)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Insight +10, Perception +17, Persuasion +16, Stealth +9",Immunities:"Fire",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 27",Languages:"Common, Draconic",CR:"24 (XP 62 000, or 75 000 in Lair; PB +7)"},cr:"24 (XP 62 000, or 75 000 in Lair; PB +7)",crValue:"24",xp:62e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to suc ceed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace one
attack with a use of (A) Spellcasting to cast Guiding Bolt (level 4 version)
or (B) Weakening Breath.
Rend. Melee Attack Roll: +17 to hit, reach 15 ft. Hit: 19 (2d8+ 10) Slashing
damage plus 9 (2d8) Fire damage.
Fire Breath (Recharge 5-6). Dexterity Saving Throw: DC 24, each creature
in a 90-foot Cone. Failure: 71 (13d10) Fire damage. Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 24):
At Will: Detect Magic, Guiding Bolt (level 4 version), Shapechange (Beast or
Humanoid form only, no Temporary Hit Points gained from the spell,
and no Concentration or Temporary Hit Points required to maintain the
spell)
1/Day Each: Flame Strike (level 6 version), Word of Recall, Zone of Truth
Weakening Breath. Strength Saving Throw: DC 24, each creature that isn't
currently affected by this breath in a 90-foot Cone. Failure: The target
has Disadvantage on Strength-based D20 Tests and subtracts 5 (1d10)
from its damage rolls. It repeats the save at the end of each of its turns,
ending the effect on itself on a success. After 1 minute, it succeeds
automatically.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the dragon can expend a use to take one of the following actions. The
dragon regains all expended uses at the start of each of its turns.
Banish. Charisma Saving Throw: DC 24, one creature the dragon can see
within 120 feet. Failure: 24 (7d6) Force damage, and the target has the
Incapacitated condition and is transported to a harmless demiplane until
the start of the dragon's next turn, at which point it reappears in an
unoccupied space of the dragon's choice within 120 feet of the dragon.
Failure or Success: The dragon can't take this action again until the start
of its next turn.
Guiding Light. The dragon uses Spellcasting to cast Guiding Bolt (level 4
version).
Pounce. The dragon moves up to half its Speed, and it makes one Rend
attack.
Gold dragons work to make the world a better place. The most powerful of the metallic dragons, these awe-inspiring dragons strive to protect that which is good and
bend fate toward a brighter future. Their kind dispositions don't prevent gold dragons from engaging in combat when necessary, though, and they exhale brilliant
flames and weakening magic to rout their foes. Gold dragons favor grasslands and pristine forests, frequently dwelling near awe-inspiring natural wonders or
guarding monuments from ancient civilizations. In their lairs, gold dragons hoard coins and gems, but they frequently put their treasure to use in pursuit of greater
goals. They often use their riches to buy rare lore books, pay informants, or patronize idealistic adventurers.`}]},{slug:"ancient-green-dragon",name:"Ancient Green Dragon",meta:"Dragon (Chromatic) Gargantuan, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Gargantuan",alignment:"Lawful Evil",abilities:{str:{score:27,mod:8,save:8},dex:{score:12,mod:1,save:8},con:{score:25,mod:7,save:7},int:{score:20,mod:5,save:5},wis:{score:17,mod:3,save:10},cha:{score:22,mod:6,save:6}},fields:{AC:"21",HP:"402 (23d20 + 161)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Deception +13, Perception +17, Persuasion +13, Stealth +8",Immunities:"Poison; Poisoned",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 27",Languages:"Common, Draconic",CR:"22 (XP 41 000, or 50 000 in Lair; PB +7)"},cr:"22 (XP 41 000, or 50 000 in Lair; PB +7)",crValue:"22",xp:41e3,sections:[{title:"TRAITS",text:`Amphibious. The dragon can breathe air and water.
Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Mind Spike (level 5
version).
Rend. Melee Attack Roll: +15, reach 15 ft. Hit: 17 (2d8 + 8) Slashing
damage plus 10 (3d6) Poison damage.
Poison Breath (Recharge 5–6). Constitution Saving Throw: DC 22, each
creature in a 90-foot Cone. Failure: 77 (22d6) Poison damage.
Success: Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 21):
At will: Detect Magic, Mind Spike (level 5 version)
1/day each: Geas, Modify Memory`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, The dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Mind Invasion. The dragon uses Spellcasting to cast Mind Spike (level
5 version).
Noxious Miasma. Constitution Saving Throw: DC 21, each creature in
a 30-foot-radius Sphere centered on a point the dragon can see
within 90 feet. Failure: 17 (5d6) Poison damage, and the target takes
a -2 penalty to AC until the end of its next turn. Failure or Success:
The dragon can't take this action again until the start of its next
turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
From forbidden forest depths, green dragons whisper evils into the world and
manipulate the lives of those who listen. Elusive, conniving, and egotistical,
these chromatic dragons patiently prey on the fears of shorter-lived beings,
corrupting and isolating them. Green dragons might lurk amid labyrinthine
wildernesses  for  centuries  without  revealing  themselves;  even  their  most
devoted followers might know them only as the voice of the woodlands or a
whisper in their dreams. Despite their might, most green dragons disdain
physical violence, viewing combat as servants' work and preferring to trick foes
into dangerous or exploitative scenarios. These dragons collect "baubles" that
embody their webs of manipulation and serve as tools of extortion, such as
compromising documents, family heirlooms, and sentimental treasures.`}]},{slug:"ancient-red-dragon",name:"Ancient Red Dragon",meta:"Dragon (Chromatic) Gargantuan, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Gargantuan",alignment:"Chaotic Evil",abilities:{str:{score:30,mod:10,save:10},dex:{score:10,mod:0,save:7},con:{score:29,mod:9,save:9},int:{score:18,mod:4,save:4},wis:{score:15,mod:2,save:9},cha:{score:27,mod:8,save:8}},fields:{AC:"22",HP:"507 (26d20 + 234)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Perception +16, Stealth +7",Immunities:"Fire",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 26",Languages:"Common, Draconic",CR:"24 (XP 62 000, or 75 000 in Lair; PB +7)"},cr:"24 (XP 62 000, or 75 000 in Lair; PB +7)",crValue:"24",xp:62e3,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace
one attack with a use of Spellcasting to cast Scorching Ray (level 3
version).
Rend. Melee Attack Roll: +17, reach 15 ft. Hit: 19 (2d8 + 10) Slashing
damage plus 10 (3d6) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 24, each
creature in a 90-foot Cone. Failure: 91 (26d6) Fire damage. Success:
Half damage.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 23, +15 to hit with spell attacks):
At Will: Command (level 2 version), Detect Magic, Scorching Ray (level
3 version)
1/Day Each: Fireball (level 6 version), Scrying`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Commanding Presence. The dragon uses Spellcasting to cast
Command (level 2 version). The dragon can't take this action again
until the start of its next turn.
Fiery Rays. The dragon uses Spellcasting to cast Scorching Ray (level
3 version). The dragon can't take this action again until the start of
its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Red dragons take whatever they desire and burn to ash anything that stands in
their  way.  These  chromatic  dragons  endlessly  desire  more—more  magic,
territory,  treasure,  or  whatever  else  inflames  their  cruel  ambitions.  Red
dragons make their lairs amid perilous cliffs and volcanoes. Within, they
amass and fiercely protect hoards of treasure, and many have perfect recall of
the hoards' contents and the locations of all they've collected. Should anything
go missing, red dragons fly into rages. They don't rest until their treasures are
returned and the thieves have burned. Red dragons believe themselves to be
the greatest of all dragons and, by extension, the greatest of all creatures. To
them, pillaging and conquering are their right—treasures can find no more
honored place than in their hoards, and other creatures are privileged to serve
them.`}]},{slug:"ancient-silver-dragon",name:"Ancient Silver Dragon",meta:"Dragon (Metallic) Gargantuan, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Gargantuan",alignment:"Lawful Good",abilities:{str:{score:30,mod:10,save:10},dex:{score:10,mod:0,save:7},con:{score:29,mod:9,save:9},int:{score:18,mod:4,save:4},wis:{score:15,mod:2,save:9},cha:{score:26,mod:8,save:8}},fields:{AC:"22",HP:"468 (24d20 + 216)",Speed:"40 ft., Fly 80 ft.",Skills:"History +11, Perception +16, Stealth +7",Immunities:"Cold",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 26",Languages:"Common, Draconic",CR:"23 (XP 50 000, or 62 000 in Lair; PB +7)"},cr:"23 (XP 50 000, or 62 000 in Lair; PB +7)",crValue:"23",xp:5e4,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can replace one
attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice
Knife (level 2 version).
Rend. Melee Attack Roll: +17, reach 15 ft. Hit: 19 (2d8 + 10) Slashing
damage plus 9 (2d8) Cold damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 24, each
creature in a 90-foot Cone. Failure: 67 (15d8) Cold damage. Success: Half
damage.
Paralyzing Breath. Constitution Saving Throw: DC 24, each creature in a
90-foot Cone. First Failure: The target has the Incapacitated condition
until the end of its next turn, when it repeats the save. Second Failure:
The target has the Paralyzed condition, and it repeats the save at the
end of each of its turns, ending the effect on itself on a success. After 1
minute, it succeeds automatically.
Spellcasting. The dragon casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 23, +15 to hit with spell attacks):
At Will: Detect Magic, Hold Monster, Ice Knife (level 2 version), Shapechange
(Beast or Humanoid form only, no Temporary Hit Points gained from the
spell, and no Concentration or Temporary Hit Points required to
maintain the spell)
1/Day Each: Control Weather, Ice Storm (level 7 version), Teleport, Zone of
Truth`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the dragon can expend a use to take one of the following actions. The
dragon regains all expended uses at the start of each of its turns.
Chill. The dragon uses Spellcasting to cast Hold Monster. The dragon
can't take this action again until the start of its next turn.
Cold Gale. Dexterity Saving Throw: DC 23, each creature in a 60-foot-long,
10-foot-wide Line. Failure: 14 (4d6) Cold damage, and the target is
pushed up to 30 feet straight away from the dragon. Success: Half
damage only. Failure or Success: The dragon can't take this action again
until the start of its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one Rend
attack.
Silver dragons work to preserve peace and encourage greatness. They try to live as examples of decency while remaining watchful against evil. Silver dragons
typically dwell amid snow-capped mountains,  though aspirations and congeniality drive some to instead live among cosmopolitan societies. Disguised as
humanoids, they ally with artists, historians, knights, and humble leaders who learn from the past to create better futures. Silver dragons take inspiration from
legendary heroes and have grand ambitions. Many collect treasures that reflect these interests, such as histories, ancient art, and the gear of famous champions.`}]},{slug:"ancient-white-dragon",name:"Ancient White Dragon",meta:"Dragon (Chromatic) Gargantuan, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Gargantuan",alignment:"Chaotic Evil",abilities:{str:{score:26,mod:8,save:8},dex:{score:10,mod:0,save:6},con:{score:26,mod:8,save:8},int:{score:10,mod:0,save:0},wis:{score:13,mod:1,save:7},cha:{score:18,mod:4,save:4}},fields:{AC:"20",HP:"333 (18d20 + 144)",Speed:"40 ft., Burrow 40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Perception +13, Stealth +6",Immunities:"Cold",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 23",Languages:"Common, Draconic",CR:"20 (XP 25 000, or 33 000 in Lair; PB +6)"},cr:"20 (XP 25 000, or 33 000 in Lair; PB +6)",crValue:"20",xp:25e3,sections:[{title:"TRAITS",text:`Ice Walk. The dragon can move across and climb icy surfaces
Terrain composed of ice or snow doesn't cost it extra movement.
Legendary Resistance (4/Day, or 5/Day in Lair). If the dragon fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +14, reach 15 ft. Hit: 17 (2d8 + 8) Slashing
damage plus 7 (2d6) Cold damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 22, each
creature in a 90-foot Cone. Failure: 63 (14d8) Cold damage. Success:
Half damage.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the dragon can expend a use to take one of the
following actions. The dragon regains all expended uses at the start of
each of its turns.
Freezing Burst. Constitution Saving Throw: DC 20, each creature in a
30-foot-radius Sphere centered on a point the dragon can see within
120 feet. Failure: 14 (4d6) Cold damage, and the target's Speed is 0
until the end of the target's next turn. Failure or Success: The dragon
can't take this action again until the start of its next turn.
Frightful Presence. The dragon casts Fear, requiring no Material
components and using Charisma as the spellcasting ability (spell
save DC 18). The dragon can't take this action again until the start of
its next turn.
Pounce. The dragon moves up to half its Speed, and it makes one
Rend attack.
Among the most primal chromatic dragons, white dragons prioritize survival
over all. Life is harsh and uncertain in the arctic expanses, glacial heights, and
frozen seas where these dragons dwell. White dragons fiercely protect their
territories, scouring the frigid regions for food and evidence of trespassers.
Most white dragons ignore the plots of smaller creatures and other dragons,
concerning themselves only with their own survival. White dragons create lairs
to defend themselves from other deadly arctic creatures and from dangerous
natural conditions. Within these shelters, white dragons hoard testaments to
their superiority, such as monstrous skulls, the gear of defeated rivals, and
curiosities that capture their interest. To protect such treasure, white dragons
coax ice to form over their hoards or sink their wealth in frigid pools. For white
dragons, each piece of treasure embodies a victory—the details of which inflate
as these dragons age.`}]},{slug:"animal-lord",name:"Animal Lord",meta:"Celestial Medium, Neutral",type:"Celestial",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:24,mod:7,save:7},dex:{score:25,mod:7,save:7},con:{score:20,mod:5,save:11},int:{score:19,mod:4,save:4},wis:{score:23,mod:6,save:12},cha:{score:22,mod:6,save:6}},fields:{AC:"19",HP:"323 (34d8 + 170)",Speed:"60 ft., Fly 60 ft. (hover), Swim 60 ft.",Skills:"Acrobatics +13, Athletics +13, Perception +18, Stealth +13",Resistances:"Cold, Fire, Necrotic, Psychic, Radiant",Immunities:"Charmed, Frightened, Stunned",Senses:"Truesight 120 ft., Passive Perception 28",Languages:"All",CR:"20 (XP 25 000; PB +6)"},cr:"20 (XP 25 000; PB +6)",crValue:"20",xp:25e3,sections:[{title:"TRAITS",text:`Animal Lordship.
Legendary Resistance (4/Day).
Lordly Presence.
Captivated (Forager Only).
Fearful (Hunter Only).
Mired (Sage Only).
Magic Resistance.`},{title:"ACTIONS",text:`Multiattack.
Rend.
Radiant Ray.
Animal Spirit.
Fortify (Forager Only).
Marked as Prey (Hunter Only).
Pesky Swarm (Sage Only).
Spellcasting.`},{title:"BONUS ACTIONS",text:"Shape-Shift."},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3.
Feral Strike.
Radiant Strike.`}]},{slug:"animated-armor",name:"Animated Armor",meta:"Construct Medium, Unaligned",type:"Construct",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:11,mod:0,save:0},con:{score:13,mod:1,save:1},int:{score:1,mod:-5,save:-5},wis:{score:3,mod:-4,save:-4},cha:{score:1,mod:-5,save:-5}},fields:{AC:"18",HP:"33 (6d8 + 6)",Speed:"25 ft.",Immunities:"Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Blindsight 60 ft., Passive Perception 6",Languages:"—",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The armor makes two Slam attacks.
Slam. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Bludgeoning
damage.
Animated suits of armor might move with steady deliberateness or awkward
gaits.  They're  often  constructed  from  plate  armor,  making  them  easy  to
mistake for soldiers or helmed horrors. Other types of armor or even metal
statuary might also become animated armor.`}]},{slug:"animated-broom",name:"Animated Broom",meta:"Construct Small, Unaligned",type:"Construct",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:10,mod:0,save:0},dex:{score:17,mod:3,save:3},con:{score:10,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:5,mod:-3,save:-3},cha:{score:1,mod:-5,save:-5}},fields:{AC:"15",HP:"14 (4d6)",Speed:"5 ft., Fly 50 ft. (hover)",Immunities:"Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Blindsight 60 ft., Passive Perception 7",Languages:"—",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Flyby. The broom doesn't provoke an Opportunity Attack when it
flies out of an enemy's reach.`},{title:"ACTIONS",text:`Slam. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Bludgeoning
damage.
Animated  brooms  keep  their  surroundings  tidy  and  defend  them  when
necessary. Launching into the air, these brooms dart about, attacking foes
from unexpected angles. Other flying objects, like animated tools or staffs,
might also use this stat block.`}]},{slug:"animated-flying-sword",name:"Animated Flying Sword",meta:"Construct Small, Unaligned",type:"Construct",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:12,mod:1,save:1},dex:{score:15,mod:2,save:4},con:{score:11,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:5,mod:-3,save:-3},cha:{score:1,mod:-5,save:-5}},fields:{AC:"17",HP:"14 (4d6)",Speed:"5 ft., Fly 50 ft. (hover)",Immunities:"Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Blindsight 60 ft., Passive Perception 7",Languages:"—",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Slash. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing
damage.
Animated flying swords move as if wielded by unseen warriors. Whether an
animated blade is newly forged or a constellation of broken fragments, the
object behaves the same. Other weapons from the Player's Handbook can also
be animated and use game statistics similar to those here.`}]},{slug:"animated-object",name:"Animated Object",meta:"Construct Huge or Smaller, Unaligned",type:"Construct",subtype:"",size:"Huge",alignment:"or Smaller, Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:10,mod:0,save:0},int:{score:3,mod:-4,save:-4},wis:{score:3,mod:-4,save:-4},cha:{score:1,mod:-5,save:-5}},fields:{AC:"15",HP:"10 (Medium or smaller), 20 (Large), 40 (Huge)",Speed:"30 ft.",Immunities:"Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",Senses:"Blindsight 30 ft., Passive Perception 6",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"ACTIONS",text:`Slam. Melee Attack Roll: Bonus equals your spell attack modifier,
reach 5 ft. Hit: Force damage equal to 1d4 + 3 (Medium or smaller),
2d6 + 3 + your spellcasting ability modifier (Large), or 2d12 + 3 +
your spellcasting ability modifier (Huge).
See Animate Objects.`}]},{slug:"animated-rug-of-smothering",name:"Animated Rug Of Smothering",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:3,mod:-4,save:-4},cha:{score:1,mod:-5,save:-5}},fields:{AC:"12",HP:"27 (5d10)",Speed:"10 ft.",Immunities:"Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Blindsight 60 ft., Passive Perception 6",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Smother. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3)
Bludgeoning damage. If the target is a Medium or smaller creature,
the rug can give it the Grappled condition (escape DC 13) instead of
dealing damage. Until the grapple ends, the target has the Blinded
and Restrained conditions, is suffocating, and takes 10 (2d6 + 3)
Bludgeoning damage at the start of each of its turns. The rug can
smother only one creature at a time. While grappling the target, the
rug can't take this action, the rug halves the damage it takes (round
down), and the target takes the same amount of damage.
Animated rugs of smothering might attack any creature that steps on them, or
they might be passed off as superficially similar magic items, such as Carpets
of Flying, and attack those who speak a supposed command word. Deadly
tapestries, furs, and similar items also use this stat block.`}]},{slug:"ankheg",name:"Ankheg",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:11,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:1,mod:-5,save:-5},wis:{score:13,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"45 (6d10 + 12)",Speed:"30 ft., Burrow 10 ft.",Senses:"Darkvision 60 ft., Tremorsense 60 ft., Passive Perception 11",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Tunneler. The ankheg can burrow through solid rock at half its
Burrow Speed and leaves a 10-foot-diameter tunnel in its wake.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5 (with Advantage if the target is Grappled
by the ankheg), reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage plus 3
(1d6) Acid damage. If the target is a Large or smaller creature, it has
the Grappled condition (escape DC 13).
Acid Spray (Recharge 6). Dexterity Saving Throw: DC 12, each creature
in a 30-foot-long, 5-foot-wide Line. Failure: 14 (4d6) Acid damage.
Success: Half damage.`}]},{slug:"ankylosaurus",name:"Ankylosaurus",meta:"Beast (Dinosaur) Huge, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Huge",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:6},dex:{score:11,mod:0,save:0},con:{score:15,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"15",HP:"68 (8d12 + 16)",Speed:"30 ft.",Senses:"Passive Perception 11",Languages:"None",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The ankylosaurus makes two Tail attacks.
Tail. Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4) Bludgeoning
damage. If the target is a Huge or smaller creature, it has the Prone
condition.`}]},{slug:"ape",name:"Ape",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:6,mod:2,save:2},wis:{score:12,mod:1,save:1},cha:{score:7,mod:2,save:-2}},fields:{AC:"12",HP:"19 (3d8 + 6)",Speed:"30 ft., Climb 30 ft.",Skills:"Athletics +5, Perception +3",Senses:"Passive Perception 13",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Multiattack. The ape makes two Fist attacks.
Fist. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Bludgeoning
damage.
Rock (Recharge 6). Ranged Attack Roll: +5, range 25/50 ft. Hit: 10 (2d6
+ 3) Bludgeoning damage.`}]},{slug:"arcanaloth",name:"Arcanaloth",meta:"Fiend (Yugoloth) Medium, Neutral Evil",type:"Fiend",subtype:"Yugoloth",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:5},con:{score:14,mod:2,save:6},int:{score:20,mod:5,save:9},wis:{score:16,mod:3,save:7},cha:{score:17,mod:3,save:3}},fields:{AC:"18",HP:"175 (27d8 + 54)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Arcana +9, Deception +7, Insight +7, Perception +7",Resistances:"Cold, Fire, Lightning",Immunities:"Acid, Poison; Charmed, Poisoned",Senses:"Truesight 120 ft., Passive Perception 17",Languages:"All; telepathy 120 ft.",CR:"12 (XP 8 400; PB +4)"},cr:"12 (XP 8 400; PB +4)",crValue:"12",xp:8400,sections:[{title:"TRAITS",text:`Fiendish Restoration. If the arcanaloth dies outside Gehenna, its body
dissolves into ichor, and it gains a new body instantly and revives with all
its Hit Points in Gehenna.
Magic Resistance. The arcanaloth has Advantage on saving throws
against spells and other magical effects.
Soul Tome. The arcanaloth has a magic tome. While holding or carrying
the tome, the arcanaloth can use its Banishing Claw action. The tome
has AC 17; HP 35; and Immunity to Necrotic, Poison, and Psychic
damage. The tome regains all its Hit Points at the end of every turn, but
it turns to dust if reduced to 0 Hit Points or when the arcanaloth dies. If
the tome is destroyed, the arcanaloth can create a new one when it
finishes a Short or Long Rest.`},{title:"ACTIONS",text:`Multiattack. The arcanaloth makes three Fiendish Burst attacks. It can
replace one attack with a Banishing Claw attack.
Fiendish Burst. Melee or Ranged Attack Roll: +9, reach 5 ft. or range 120 ft.
Hit: 31 (4d12 + 5) Necrotic damage.
Banishing Claw (Requires Soul Tome). Melee Attack Roll: +9, reach 5 ft.
Hit: 10 (2d4 + 5) Slashing damage plus 19 (3d12) Psychic damage. If the
target is a creature, it is subjected to the following effect. Charisma
Saving Throw: DC 17. Failure: The target is trapped in a demiplane inside
the Soul Tome. While trapped there, the target has the Incapacitated
condition. At the end of each of its turns, the target repeats the save,
escaping the tome on a success. When the target escapes, it appears in
the space it left or, if that space is occupied, the nearest unoccupied
space. If the target fails three of these saves while in the demiplane, it
becomes bound to the tome and can escape only if the tome is reduced
to 0 Hit Points.
Spellcasting. The arcanaloth casts one of the following spells, requiring
no Material components and using Intelligence as the spellcasting ability
(spell save DC 17):
At will: Alter Self, Detect Magic, Identify, Mage Hand, Prestidigitation
1/day each: Contact Other Plane, Detect Thoughts, Dimension Door, Mind
Blank`},{title:"BONUS ACTIONS",text:`Teleport. The arcanaloth teleports up to 30 feet to an unoccupied space
it can see.`},{title:"REACTIONS",text:`Counterspell. The arcanaloth casts Counterspell in response to that
spell's trigger, using the same spellcasting ability as Spellcasting.`}]},{slug:"arch-hag",name:"Arch-Hag",meta:"Fey Large, Neutral Evil",type:"Fey",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:24,mod:7,save:7},dex:{score:15,mod:2,save:9},con:{score:23,mod:6,save:6},int:{score:19,mod:4,save:4},wis:{score:19,mod:4,save:11},cha:{score:25,mod:7,save:7}},fields:{AC:"20",HP:"333 (29d10 + 174)",Speed:"40 ft.",Skills:"Deception +14, Perception +11, Persuasion +21",Resistances:"Cold, Fire, Psychic",Immunities:"Charmed, Exhaustion, Frightened",Senses:"Truesight 60 ft., Passive Perception 21",Languages:"All",CR:"21 (XP 33 000, or 41 000 in Lair; PB +7)"},cr:"21 (XP 33 000, or 41 000 in Lair; PB +7)",crValue:"21",xp:33e3,sections:[{title:"TRAITS",text:`Coven Magic. While within 30 feet of at least two hag allies, the hag can
cast one of the following spells, requiring no Material components, using
the spell's normal casting time, and using Intelligence as the spellcasting
ability (spell save DC 19): Augury, Find Familiar, Identify, Locate Object,
Scrying, or Unseen Servant. The hag must finish a Long Rest before using
this trait to cast that spell again.
Legendary Resistance (4/Day, or 5/Day in Lair). If the hag fails a saving
throw, it can choose to succeed instead.
Magic Resistance. The hag has Advantage on saving throws against
spells and other magical effects.
Spiteful Escape. When the hag drops to 0 Hit Points, it dies only if it is
within 30 feet of its anathema (a thing the DM chooses as the hag's most
hated thing). Otherwise, the hag drops to 1 Hit Point and teleports to a
harmless demiplane, and it can't return to the plane it left for 2d6 days.
When the hag teleports away, each creature within 60 feet of the space
it left is cursed. Until the curse ends, a creature has Disadvantage on
ability checks and saving throws, and the hag knows its location
anywhere in the multiverse.`},{title:"ACTIONS",text:`Multiattack. The hag makes two Spectral Claw attacks and uses
Crackling Wave.
Spectral Claw. Melee or Ranged Attack Roll: +14, reach 10 ft. or range 60
ft. Hit: 17 (3d6 + 7) Force damage. If the target is a Large or smaller
creature, it has the Prone condition.
Crackling Wave. Dexterity Saving Throw: DC 22, each creature in a 60-foot
Cone. Failure: 32 (5d12) Lightning damage. Success: Half damage. Failure
or Success: The target is cursed until the end of the hag's next turn. The
target can't take Reactions until the curse ends.
Spellcasting. The hag casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 22):
At will: Detect Thoughts, Dimension Door, Dispel Magic, Hypnotic Pattern
2/day each: Mass Suggestion, Modify Memory, Plane Shift`},{title:"BONUS ACTIONS",text:`Witch Strike. Each creature cursed by the hag and within 60 feet of it
takes 14 (4d6) Lightning damage.`},{title:"REACTIONS",text:`Tongue Twister. The hag casts Counterspell in response to that spell's
trigger, using the same spellcasting ability as Spellcasting. If the target
fails its saving throw, it is cursed until the end of its next turn. Until the
curse ends, the target can't cast spells with a Verbal component, and
when it speaks, it says the opposite of what it means.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the arch-hag can expend a use to take one of the following actions. The
arch-hag regains all expended uses at the start of each of its turns.
Hag's Swipe. The hag makes one Spectral Claw attack.
Malicious Magic. The hag uses Spellcasting to cast Dimension Door or
Hypnotic Pattern. The hag can't take this action again until the start of its
next turn.
Immortal and unpredictable, arch-hags hoard secrets and strike magical bargains, altering fate to indulge their fickle whims. These timeless schemers pursue the
secrets of the multiverse and work strange magic in pursuit of their inscrutable goals. Arch-hags are unpredictable, self-interested, and greedy, with bizarre
fascinations and affectations. Nevertheless, they often make deals to further their plots. These hags are fonts of secret knowledge, particularly lore regarding
forbidden magic and multiversal secrets. They might share their knowledge, but their secrets always have a price. In trade for their secrets, arch-hags might request
peculiar errands, valuable magic items, or preternatural currency, like one's memories, a year of one's life, or the ability to cry. Most arch-hags avoid battle, but if
forced to fight, they unleash dangerous magic, such as spectral claws, arcing lightning, and mind-bending spells. An arch-hag can curse other magic-users,
confounding the spellcasters' incantations and forcing the spellcasters to say the opposite of what they mean. Even if an arch-hag is brought low, its preparations
allow it to magically slip away and begin plotting its revenge. Every arch-hag has a unique weakness tied to a fateful encounter the hag had in the past or something
that embodies the antithesis of the hag's magic. A hag goes out of its way to keep this vulnerability secret. Although an arch-hag isn't physically harmed by its
weakness, it can be destroyed only while its weakness is nearby.`}]},{slug:"archelon",name:"Archelon",meta:"Beast (Dinosaur) Huge, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Huge",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:16,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:4,mod:-3,save:-3},wis:{score:14,mod:2,save:2},cha:{score:6,mod:-2,save:-2}},fields:{AC:"17",HP:"90 (12d12 + 12)",Speed:"20 ft., Swim 80 ft.",Skills:"Stealth +5",Senses:"Passive Perception 12",Languages:"None",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:"Amphibious. The archelon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The archelon makes two Bite attacks.
Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 14 (3d6 + 4) Piercing
damage.`}]},{slug:"archmage",name:"Archmage",meta:"Humanoid (Wizard) Medium or Small, Neutral",type:"Humanoid",subtype:"Wizard",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:20,mod:5,save:9},wis:{score:15,mod:2,save:6},cha:{score:16,mod:3,save:3}},fields:{AC:"17",HP:"170 (31d8 + 31)",Speed:"30 ft.",Skills:"Arcana +13, History +9, Perception +6",Immunities:"Psychic; Charmed (with Mind Blank)",Gear:"Wand",Senses:"Passive Perception 16",Languages:"Common plus five other languages",CR:"12 (XP 8000; PB +4)"},cr:"12 (XP 8000; PB +4)",crValue:"12",xp:8e3,sections:[{title:"TRAITS",text:`Magic Resistance. The archmage has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The archmage makes four Arcane Burst attacks.
Arcane Burst. Melee or Ranged Attack Roll: +9, reach 5 ft. or range 150
ft. Hit: 27 (4d10 + 5) Force damage.
Spellcasting. The archmage casts one of the following spells, using
Intelligence as the spellcasting ability (spell save DC 17):
At will: Detect Magic, Detect Thoughts, Disguise Self, Invisibility, Light,
Mage Armor (included in AC), Mage Hand, Prestidigitation
2/day each: Fly, Lightning Bolt (level 7 version)
1/day each: Cone of Cold (level 9 version), Mind Blank (cast before
combat), Scrying, Teleport`},{title:"BONUS ACTIONS",text:`Misty Step (3/Day). The mage casts Misty Step, using the same
spellcasting ability as Spellcasting.`},{title:"REACTIONS",text:`Protective Magic (3/Day). The archmage casts Counterspell or Shield
in response to the spell's trigger, using the same spellcasting ability
as Spellcasting.
Mages are magical wonder-workers, ranging from spellcasting overlords to
reclusive  witches.  They  study  mystical  secrets  and  possess  insight  into
monsters, legends, omens, and other lore. Mages often gather allies or hire
assistants to aid them in their research or to attain magical might.
Archmages have mastered incredible magical power. While some use their
magic to protect the world, others become tyrants or pursue forbidden secrets.
Many archmages retain magical servants and collect magic items and occult
lore.`}]},{slug:"archpriest",name:"Archpriest",meta:"Humanoid (Cleric) Medium or Small, Neutral",type:"Humanoid",subtype:"Cleric",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:16,mod:3,save:7},dex:{score:12,mod:1,save:1},con:{score:17,mod:3,save:7},int:{score:14,mod:2,save:6},wis:{score:21,mod:5,save:9},cha:{score:14,mod:2,save:2}},fields:{AC:"16",HP:"240 (32d8 + 96)",Speed:"30 ft.",Skills:"Insight +9, Medicine +9, Perception +9, Religion +10",Gear:"Chain Mail, Holy Symbol",Senses:"Passive Perception 19",Languages:"Common plus two other languages",CR:"12 (XP 8 400; PB +4)"},cr:"12 (XP 8 400; PB +4)",crValue:"12",xp:8400,sections:[{title:"ACTIONS",text:`Multiattack. The archpriest makes three Radiant Burst attacks.
Radiant Burst. Melee or Ranged Attack Roll: +9, reach 5 ft. or range 60
ft. Hit: 27 (4d10 + 5) Radiant damage.
Holy Word (Recharge 4–6). Wisdom Saving Throw: DC 17, each enemy
in a 20-foot Emanation originating from the archpriest. Failure: 21
(6d6) Radiant damage, and the target has the Stunned condition
until the end of the archpriest's next turn. Success: Half damage
only.
Spellcasting. The archpriest casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 17):
At will: Light, Thaumaturgy
1/day each: Flame Strike (level 6 version), Greater Restoration, Raise
Dead, Zone of Truth`},{title:"BONUS ACTIONS",text:`Divine Aid (3/Day). The priest casts Bless, Dispel Magic, Healing Word,
or Lesser Restoration, using the same spellcasting ability as
Spellcasting.
By forging  connections with divine  beings  and mastering mystical truths,
archpriests  become  conduits  for  godly  intentions  and  other  supernatural
forces.  Their  magic  allows  them  to  work  wonders,  whether  to  share  the
benevolence of their faiths or to vent divine wrath. Some archpriests attract
vast followings as they claim to speak for divine forces, while others undertake
personal spiritual journeys and seek to transcend mortal concerns.`}]},{slug:"assassin",name:"Assassin",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:11,mod:0,save:0},dex:{score:18,mod:4,save:7},con:{score:14,mod:2,save:2},int:{score:16,mod:3,save:6},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"16",HP:"97 (15d8 + 30)",Speed:"30 ft.",Skills:"Acrobatics +7, Perception +6, Stealth +10",Resistances:"Poison",Gear:"Light Crossbow, Shortsword, Studded Leather Armor",Senses:"Passive Perception 16",Languages:"Common, Thieves' Cant",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Evasion. If the assassin is subjected to an effect that allows it to
make a Dexterity saving throw to take only half damage, the
assassin instead takes no damage if it succeeds on the save and
only half damage if it fails. It can't use this trait if it has the
Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The assassin makes three attacks, using Shortsword or
Light Crossbow in any combination.
Shortsword. Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Piercing
damage plus 17 (5d6) Poison damage, and the target has the
Poisoned condition until the start of the assassin's next turn.
Light Crossbow. Ranged Attack Roll: +7, range 80/320 ft. Hit: 8 (1d8 +
4) Piercing damage plus 21 (6d6) Poison damage.`},{title:"BONUS ACTIONS",text:`Cunning Action. The assassin takes the Dash, Disengage, or Hide
action.
Assassins are professional killers skilled at stealthily approaching their victims
and  striking  unseen.  Most  assassins  kill  for  a  reason,  perhaps  hiring
themselves out to wealthy patrons or slaying for an unscrupulous cause. They
use poisons and other deadly tools, and they might carry equipment to help
them break into secure areas or avoid capture. Many assassins adhere to a
professional code or exhibit some signature quirk.`}]},{slug:"awakened-shrub",name:"Awakened Shrub",meta:"Plant Small, Neutral",type:"Plant",subtype:"",size:"Small",alignment:"Neutral",abilities:{str:{score:3,mod:-4,save:-4},dex:{score:8,mod:-1,save:-1},con:{score:11,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"9",HP:"10 (3d6)",Speed:"20 ft.",Vulnerabilities:"Fire",Resistances:"Piercing",Senses:"Passive Perception 10",Languages:"Common plus one other language",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Rake. Melee Attack Roll: +1, reach 5 ft. Hit: 1 Slashing damage.
Awakened  shrubs  can  be  any  sort  of  small  plant,  from  forest  bushes  to
clustered flowers. They often appear near awakened trees or in regions imbued
with primal magic. Some have whimsical appearances or foliage resembling
rudimentary facial features, while others look like animate topiary creatures.`}]},{slug:"awakened-tree",name:"Awakened Tree",meta:"Plant Huge, Neutral",type:"Plant",subtype:"",size:"Huge",alignment:"Neutral",abilities:{str:{score:19,mod:4,save:4},dex:{score:6,mod:-2,save:-2},con:{score:15,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"13",HP:"59 (7d12 + 14)",Speed:"20 ft.",Vulnerabilities:"Fire",Resistances:"Bludgeoning, Piercing",Senses:"Passive Perception 10",Languages:"Common plus one other language",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Slam. Melee Attack Roll: +6, reach 10 ft. Hit: 14 (3d6 + 4) Bludgeoning
damage.
Some awakened trees stand in still, meditative states for long periods, making
them easy to mistake for normal plants, while others patrol regions of natural
power. Awakened trees are sometimes brought to life by influences from the
Feywild, which make them colorful and endlessly blooming, or by Shadowfell
energy, which covers them with grotesque burls or makes them look lifeless.`}]},{slug:"axe-beak",name:"Axe Beak",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"11",HP:"19 (3d10 + 3)",Speed:"50 ft.",Senses:"Passive Perception 10",Languages:"—",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Beak. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing
damage.
Alone or in small groups, axe beaks stalk prey to feed their flocks. When
working together, axe beaks use rudimentary tactics, with some distracting
threats while others strike vulnerable targets or rush young axe beaks to safety.`}]},{slug:"azer-pyromancer",name:"Azer Pyromancer",meta:"Elemental Medium, Lawful Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:6},int:{score:12,mod:1,save:1},wis:{score:18,mod:4,save:7},cha:{score:13,mod:1,save:1}},fields:{AC:"18",HP:"97 (13d8 + 39)",Speed:"30 ft.",Skills:"Arcana +4, Perception +7",Immunities:"Fire, Poison; Poisoned",Senses:"Passive Perception 17",Languages:"Primordial (Ignan)",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Fire Aura. At the end of each of the azer's turns, each creature of
the azer's choice in a 5-foot Emanation originating from the azer
takes 11 (2d10) Fire damage unless the azer has the Incapacitated
condition.
Illumination. The azer sheds Bright Light in a 10-foot radius and Dim
Light for an additional 10 feet.`},{title:"ACTIONS",text:`Multiattack. The azer makes two Flame Burst attacks.
Flame Burst. Melee or Ranged Attack Roll: +7, reach 5 ft. or range 120
ft. Hit: 15 (2d10 + 4) Fire damage.
Spellcasting. The azer casts one of the following spells, requiring no
Material components and using Wisdom as the spellcasting ability
(spell save DC 15):
At will: Elementalism, Mage Hand
1/day: Fireball`},{title:"REACTIONS",text:`Hellish Rebuke (2/Day). The azer casts Hellish Rebuke in response to
that spell's trigger, using the same spellcasting ability as
Spellcasting.
Azer pyromancers conjure flames from the Elemental Plane of Fire to defend
themselves and stoke magical forges.`}]},{slug:"azer-sentinel",name:"Azer Sentinel",meta:"Elemental Medium, Lawful Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:15,mod:2,save:4},int:{score:12,mod:1,save:1},wis:{score:13,mod:1,save:1},cha:{score:10,mod:0,save:0}},fields:{AC:"17",HP:"39 (6d8 + 12)",Speed:"30 ft.",Immunities:"Fire, Poison; Poisoned",Senses:"Passive Perception 11",Languages:"Primordial (Ignan)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Fire Aura. At the end of each of the azer's turns, each creature of
the azer's choice in a 5-foot Emanation originating from the azer
takes 5 (1d10) Fire damage unless the azer has the Incapacitated
condition.
Illumination. The azer sheds Bright Light in a 10-foot radius and Dim
Light for an additional 10 feet.`},{title:"ACTIONS",text:`Burning Hammer. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3)
Bludgeoning damage plus 3 (1d6) Fire damage.
Azer sentinels defend their communities' smiths and channel their flames
through their weapons.`}]},{slug:"baboon",name:"Baboon",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:4,mod:-3,save:-3},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"12",HP:"3 (1d6)",Speed:"30 ft., Climb 30 ft.",Senses:"Passive Perception 11",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Pack Tactics. The baboon has Advantage on an attack roll against a
creature if at least one of the baboon's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:"Bite. Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 - 1) Piercing damage."}]},{slug:"badger",name:"Badger",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:10,mod:0,save:0},dex:{score:11,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:2,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:3,save:-3}},fields:{AC:"11",HP:"5 (1d4 + 3)",Speed:"20 ft., Burrow 5 ft.",Skills:"Perception +3",Resistances:"Poison",Senses:"Darkvision 30 ft., Passive Perception 13",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"balor",name:"Balor",meta:"Fiend (Demon) Huge, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:26,mod:8,save:8},dex:{score:15,mod:2,save:2},con:{score:22,mod:6,save:12},int:{score:20,mod:5,save:5},wis:{score:16,mod:3,save:9},cha:{score:22,mod:6,save:6}},fields:{AC:"19",HP:"287 (23d12 + 138)",Speed:"40 ft., Fly 80 ft.",Skills:"Perception +9",Resistances:"Cold, Lightning",Immunities:"Fire, Poison; Charmed, Frightened, Poisoned",Senses:"Truesight 120 ft., Passive Perception 19",Languages:"Abyssal; telepathy 120 ft.",CR:"19 (XP 22 000; PB +6)"},cr:"19 (XP 22 000; PB +6)",crValue:"19",xp:22e3,sections:[{title:"TRAITS",text:`Death Throes. The balor explodes when it dies. Dexterity Saving
Throw: DC 20, each creature in a 30-foot Emanation originating from
the balor. Failure: 31 (9d6) Fire damage plus 31 (9d6) Force damage.
Success: Half damage. Failure or Success: If the balor dies outside the
Abyss, it gains a new body instantly, reviving with all its Hit Points
somewhere in the Abyss.
Fire Aura. At the end of each of the balor's turns, each creature in a
5-foot Emanation originating from the balor takes 13 (3d8) Fire
damage.
Legendary Resistance (3/Day). If the balor fails a saving throw, it can
choose to succeed instead.
Magic Resistance. The balor has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The balor makes one Flame Whip attack and one
Lightning Blade attack.
Flame Whip. Melee Attack Roll: +14, reach 30 ft. Hit: 18 (3d6 + 8) Force
damage plus 17 (5d6) Fire damage. If the target is a Huge or smaller
creature, the balor pulls the target up to 25 feet straight toward
itself, and the target has the Prone condition.
Lightning Blade. Melee Attack Roll: +14, reach 10 ft. Hit: 21 (3d8 + 8)
Force damage plus 22 (4d10) Lightning damage, and the target can't
take Reactions until the start of the balor's next turn`},{title:"BONUS ACTIONS",text:`Teleport. The balor teleports itself or a willing demon within 10 feet
of itself up to 60 feet to an unoccupied space the balor can see.`}]},{slug:"bandit",name:"Bandit",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:11,mod:0,save:0},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"11 (2d8 + 2)",Speed:"30 ft.",Gear:"Leather Armor, Light Crossbow, Scimitar",Senses:"Passive Perception 10",Languages:"Common, Thieves' Cant",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Scimitar. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing
damage.
Light Crossbow. Ranged Attack Roll: +3, range 80/320 ft. Hit: 5 (1d8 +
1) Piercing damage.
Bandits use the threat of violence to take what they want. Such criminals
include gang members, desperadoes, and lawless mercenaries. Yet not all
bandits are motivated by greed. Some are driven to lives of crime by unjust
laws, desperation, or the threats of merciless leaders.
Bandits are inexperienced ne'er-do-wells who typically follow the orders of
higher-ranking bandits.`}]},{slug:"bandit-captain",name:"Bandit Captain",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:15,mod:2,save:4},dex:{score:16,mod:3,save:5},con:{score:14,mod:2,save:2},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:2},cha:{score:14,mod:2,save:2}},fields:{AC:"15",HP:"52 (8d8 + 16)",Speed:"30 ft.",Skills:"Athletics +4, Deception +4",Gear:"Pistol, Scimitar, Studded Leather Armor",Senses:"Passive Perception 10",Languages:"Common, Thieves' Cant",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The bandit makes two attacks, using Scimitar and Pistol
in any combination.
Scimitar. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing
damage.
Pistol. Ranged Attack Roll: +5, range 30/90 ft. Hit: 8 (1d10 + 3) Piercing
damage.`},{title:"REACTIONS",text:`Parry. Trigger: The bandit is hit by a melee attack roll while holding a
weapon. Response: The bandit adds 2 to its AC against that attack,
possibly causing it to miss.
Bandits use the threat of violence to take what they want. Such criminals
include gang members, desperadoes, and lawless mercenaries. Yet not all
bandits are motivated by greed. Some are driven to lives of crime by unjust
laws, desperation, or the threats of merciless leaders.
Bandit captains command gangs of scoundrels and conduct straightforward
heists. Others serve as guards and muscle for more influential criminals.`}]},{slug:"bandit-crime-lord",name:"Bandit Crime Lord",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:20,mod:5,save:9},con:{score:14,mod:2,save:6},int:{score:18,mod:4,save:4},wis:{score:14,mod:2,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"17",HP:"169 (26d8 + 52)",Speed:"30 ft.",Skills:"Acrobatics +9, Perception +10, Stealth +13",Gear:"Pistols (2), Scimitar, Studded Leather Armor",Senses:"Passive Perception 20",Languages:"Common, Thieves' Cant",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Evasion. If the bandit is subjected to an effect that allows it to make
a Dexterity saving throw to take only half damage, the bandit
instead takes no damage if it succeeds on the save and only half
damage if it fails. It can't use this trait if it has the Incapacitated
condition.`},{title:"ACTIONS",text:`Multiattack. The bandit makes three attacks, using Scimitar or Pistol
in any combination.
Scimitar. Melee Attack Roll: +9, reach 5 ft. Hit: 12 (2d6 + 5) Slashing
damage plus 14 (4d6) Poison damage.
Pistol. Ranged Attack Roll: +9, range 30/90 ft. Hit: 10 (1d10 + 5)
Piercing damage plus 14 (4d6) Poison damage.`},{title:"BONUS ACTIONS",text:`Deadly Aim. The bandit gives itself Advantage on the next attack roll
it makes during the current turn. If that attack hits, the target takes
an extra 28 (8d6) Poison damage.
Bandits use the threat of violence to take what they want. Such criminals
include gang members, desperadoes, and lawless mercenaries. Yet not all
bandits are motivated by greed. Some are driven to lives of crime by unjust
laws, desperation, or the threats of merciless leaders.
Bandit crime lords manipulate shadowy organizations and prioritize their own
survival over any single lackey or plot.`}]},{slug:"bandit-deceiver",name:"Bandit Deceiver",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:16,mod:3,save:6},con:{score:14,mod:2,save:2},int:{score:17,mod:3,save:6},wis:{score:12,mod:1,save:1},cha:{score:16,mod:3,save:3}},fields:{AC:"16",HP:"130 (20d8 + 40)",Speed:"30 ft.",Skills:"Acrobatics +6, Perception +4, Stealth +9",Gear:"Daggers (6), Wand",Senses:"Passive Perception 14",Languages:"Common, Thieves' Cant",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The bandit makes three Dagger attacks.
Dagger. Melee or Ranged Attack Roll: +6, reach 5 ft. or range 20/60 ft.
Hit: 8 (2d4 + 3) Piercing damage plus 10 (3d6) Poison damage.
Blinding Flash (Recharge 4–6). Constitution Saving Throw: DC 14, each
creature in a 10-foot-radius Sphere centered on a point the bandit
can see within 120 feet. Failure: 13 (3d6 + 3) Radiant damage, and
the target has the Blinded condition until the start of the bandit's
next turn. Success: Half damage only.
Spellcasting. The bandit casts one of the following spells, using
Intelligence as the spellcasting ability (spell save DC 14):
At will: Disguise Self, Mage Hand, Minor Illusion
1/day each: Hold Person (level 4 version), Mage Armor (included in
AC), Major Image
Bandits use the threat of violence to take what they want. Such criminals
include gang members, desperadoes, and lawless mercenaries. Yet not all
bandits are motivated by greed. Some are driven to lives of crime by unjust
laws, desperation, or the threats of merciless leaders.
Bandit  deceivers  use  magic  to  disguise  their  activities  or  create  flashy
distractions.`}]},{slug:"banshee",name:"Banshee",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:2},cha:{score:17,mod:3,save:3}},fields:{AC:"12",HP:"54 (12d8)",Speed:"5 ft., Fly 40 ft. (hover)",Resistances:"Acid, Bludgeoning, Fire, Lightning, Piercing, Slashing, Thunder",Immunities:"Cold, Necrotic, Poison; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common, Elvish",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Detect Life. The banshee magically senses the direction of creatures
up to 1 mile away that aren't Constructs or Undead.
Incorporeal Movement. The banshee can move through other
(1d10) Force damage if it ends its turn inside an object.`},{title:"ACTIONS",text:`Multiattack. The banshee makes two Corrupting Touch attacks and
uses Horrify.
Corrupting Touch. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3)
Necrotic damage.
Horrify. Wisdom Saving Throw: DC 13, one creature the banshee can
see within 60 feet that can see the banshee. Failure: The target has
the Frightened condition until the start of the banshee's next turn.
Success: The target is immune to this banshee's Horrify for 24 hours.
Deathly Wail (1/Day). The banshee releases a mournful wail if it isn't
in sunlight. Constitution Saving Throw: DC 13, each creature within 30
feet that can hear the wail and isn't a Construct or an Undead.
Failure: If the target has 25 Hit Points or fewer, it drops to 0 Hit
Points. Otherwise, the target takes 10 (3d6) Psychic damage.`}]},{slug:"barbed-devil",name:"Barbed Devil",meta:"Fiend (Devil) Medium, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:16,mod:3,save:6},dex:{score:17,mod:3,save:3},con:{score:18,mod:4,save:7},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:5},cha:{score:14,mod:2,save:5}},fields:{AC:"15",HP:"110 (13d8 + 52)",Speed:"30 ft., Climb 30 ft.",Skills:"Deception +5, Insight +5, Perception +8",Resistances:"Cold",Immunities:"Fire, Poison; Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 18",Languages:"Infernal; telepathy 120 ft.",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Barbed Hide. At the start of each of its turns, the devil deals 5 (1d10)
Piercing damage to any creature it is grappling or any creature
grappling it.
Diabolical Restoration. If the devil dies outside the Nine Hells, its
body disappears in sulfurous smoke, and it gains a new body
instantly, reviving with all its Hit Points somewhere in the Nine
Hells.
Magic Resistance. The devil has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The devil makes one Claws attack and one Tail attack,
or it makes two Hurl Flame attacks.
Claws. Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Piercing
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 13) from both claws.
Tail. Melee Attack Roll: +6, reach 10 ft. Hit: 14 (2d10 + 3) Slashing
damage.
Hurl Flame. Ranged Attack Roll: +5, range 150 ft. Hit: 17 (5d6) Fire
damage. If the target is a flammable object that isn't being worn or
carried, it starts burning.`}]},{slug:"barlgura",name:"Barlgura",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:5},con:{score:16,mod:3,save:6},int:{score:7,mod:-2,save:-2},wis:{score:14,mod:2,save:2},cha:{score:9,mod:-1,save:-1}},fields:{AC:"15",HP:"85 (10d10 + 30)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +5, Stealth +5",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception 15",Languages:"Abyssal; telepathy 120 ft.",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Demonic Restoration. If the barlgura dies outside the Abyss, its body
dissolves into ichor, and it gains a new body instantly, reviving with
all its Hit Points somewhere in the Abyss.`},{title:"ACTIONS",text:`Multiattack. The barlgura makes one Tormenting Bite attack and
two Thrash attacks.
Tormenting Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4)
Piercing damage plus 13 (2d12) Psychic damage.
Spellcasting. The barlgura casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 13):
2/day each: Disguise Self, Invisibility (self only)
1/day each: Entangle, Phantasmal Killer (level 6 version)
Thrash. Melee Attack Roll: +7, reach 5 ft. Hit: 9 (1d10 + 4) Bludgeoning
damage. If the target is a Large or smaller creature, it has the Prone
condition.`},{title:"BONUS ACTIONS",text:`Leap. The barlgura jumps up to 40 feet by spending 10 feet of
movement.`}]},{slug:"basilisk",name:"Basilisk",meta:"Monstrosity Medium, Unaligned",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:8,mod:-1,save:-1},con:{score:15,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:8,mod:-1,save:-1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"52 (8d8 + 16)",Speed:"20 ft.",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"None",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing
damage plus 7 (2d6) Poison damage.`},{title:"BONUS ACTIONS",text:`Petrifying Gaze (Recharge 4–6). Constitution Saving Throw: DC 12,
each creature in a 30-foot Cone. If the basilisk sees its reflection in
the Cone, the basilisk must make this save. First Failure: The target
has the Restrained condition and repeats the save at the end of its
next turn if it is still Restrained, ending the effect on itself on a
success. Second Failure: The target has the Petrified condition
instead of the Restrained condition.`}]},{slug:"bat",name:"Bat",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:8,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:4,mod:3,save:-3}},fields:{AC:"12",HP:"1 (1d4 - 1)",Speed:"5 ft., Fly 30 ft.",Senses:"Blindsight 60 ft., Passive Perception 11",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"bearded-devil",name:"Bearded Devil",meta:"Fiend (Devil) Medium, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:16,mod:3,save:5},dex:{score:15,mod:2,save:2},con:{score:15,mod:2,save:4},int:{score:9,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:14,mod:2,save:4}},fields:{AC:"13",HP:"58 (9d8 + 18)",Speed:"30 ft.",Resistances:"Cold",Immunities:"Fire, Poison; Frightened, Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 10",Languages:"Infernal; telepathy 120 ft.",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Magic Resistance. The devil has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The devil makes one Beard attack and one Infernal
Glaive attack.
Beard. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing
damage, and the target has the Poisoned condition until the start of
the devil's next turn. Until this poison ends, the target can't regain
Hit Points.
Infernal Glaive. Melee Attack Roll: +5, reach 10 ft. Hit: 8 (1d10 + 3)
Slashing damage. If the target is a creature and doesn't already have
an infernal wound, it is subjected to the following effect. Constitution
Saving Throw: DC 12. Failure: The target receives an infernal wound.
While wounded, the target loses 5 (1d10) Hit Points at the start of
each of its turns. The wound closes after 1 minute, after a spell
restores Hit Points to the target, or after the target or a creature
within 5 feet of it takes an action to stanch the wound, doing so by
succeeding on a DC 12 Wisdom (Medicine) check.`}]},{slug:"beast-of-the-land",name:"Beast Of The Land",meta:"Beast Medium, Neutral",type:"Beast",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:14,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:8,mod:-1,save:-1},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"13 plus your Wisdom modifier",HP:"5 plus five times your Ranger level (the beast has a number of Hit Dice [d8s] equal to your Ranger level)",Speed:"40 ft., Climb 40 ft.",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Primal Bond. Add your Proficiency Bonus to any ability check or
saving throw the beast makes.`},{title:"ACTIONS",text:`Beast's Strike. Melee Attack Roll: Bonus equals your spell attack
modifier, reach 5 ft. Hit: 1d8 + 2 plus your Wisdom modifier
Bludgeoning, Piercing, or Slashing damage (your choice when you
summon the beast). If the beast moved at least 20 feet straight
toward the target before the hit, the target takes an extra 1d6
damage of the same type, and the target has the Prone condition if
it is a Large or smaller creature.`}]},{slug:"beast-of-the-sea",name:"Beast Of The Sea",meta:"Beast Medium, Neutral",type:"Beast",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:14,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:8,mod:-1,save:-1},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"13 plus your Wisdom modifier",HP:"5 plus five times your Ranger level (the beast has a number of Hit Dice [d8s] equal to your Ranger level)",Speed:"5 ft., Swim 60 ft.",Senses:"Darkvision 90 ft., Passive Perception 12",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Amphibious. The beast can breathe air and water.
Primal Bond. Add your Proficiency Bonus to any ability check or
saving throw the beast makes.`},{title:"ACTIONS",text:`Beast's Strike. Melee Attack Roll: Bonus equals your spell attack
modifier, reach 5 ft. Hit: 1d6 + 2 plus your Wisdom modifier
Bludgeoning or Piercing damage (your choice when you summon
the beast), and the target has the Grappled condition (escape DC
equals your spell save DC).`}]},{slug:"beast-of-the-sky",name:"Beast Of The Sky",meta:"Beast Small, Neutral",type:"Beast",subtype:"",size:"Small",alignment:"Neutral",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:16,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"13 plus your Wisdom modifier",HP:"4 plus four times your Ranger level (the beast has a number of Hit Dice [d6s] equal to your Ranger level)",Speed:"10 ft., Fly 60 ft.",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Flyby. The beast doesn't provoke Opportunity Attacks when it flies
out of an enemy's reach.
Primal Bond. Add your Proficiency Bonus to any ability check or
saving throw the beast makes.`},{title:"ACTIONS",text:`Beast's Strike. Melee Attack Roll: Bonus equals your spell attack
modifier, reach 5 ft. Hit: 1d4 + 3 plus your Wisdom modifier Slashing
damage.`}]},{slug:"behir",name:"Behir",meta:"Monstrosity Huge, Neutral Evil",type:"Monstrosity",subtype:"",size:"Huge",alignment:"Neutral Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:16,mod:3,save:3},con:{score:18,mod:4,save:4},int:{score:7,mod:-2,save:-2},wis:{score:14,mod:2,save:2},cha:{score:12,mod:1,save:1}},fields:{AC:"17",HP:"168 (16d12 + 64)",Speed:"50 ft., Climb 50 ft.",Skills:"Perception +6, Stealth +7",Immunities:"Lightning",Senses:"Darkvision 90 ft., Passive Perception 16",Languages:"Draconic",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"ACTIONS",text:`Multiattack. The behir makes one Bite attack and uses Constrict.
Bite. Melee Attack Roll: +10, reach 10 ft. Hit: 19 (2d12 + 6) Piercing
damage plus 11 (2d10) Lightning damage.
Constrict. Strength Saving Throw: DC 18, one Large or smaller
creature the behir can see within 5 feet. Failure: 28 (5d8 + 6)
Bludgeoning damage. The target has the Grappled condition (escape
DC 16), and it has the Restrained condition until the grapple ends.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 16, each
creature in a 90-foot-long, 5-foot-wide Line. Failure: 66 (12d10)
Lightning damage. Success: Half damage.`},{title:"BONUS ACTIONS",text:`Swallow. Dexterity Saving Throw: DC 18, one Large or smaller
creature Grappled by the behir (the behir can have only one
creature swallowed at a time). Failure: The behir swallows the target,
which is no longer Grappled. While swallowed, a creature has the
Blinded and Restrained conditions, has Total Cover against attacks
and other effects outside the behir, and takes 21 (6d6) Acid damage
at the start of each of the behir's turns. If the behir takes 30 damage
or more on a single turn from the swallowed creature, the behir
must succeed on a DC 14 Constitution saving throw at the end of
that turn or regurgitate the creature, which falls in a space within 10
feet of the behir and has the Prone condition. If the behir dies, a
swallowed creature is no longer Restrained and can escape from the
corpse by using 15 feet of movement, exiting Prone.`}]},{slug:"beholder",name:"Beholder",meta:"Aberration Large, Lawful Evil",type:"Aberration",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:18,mod:4,save:9},int:{score:17,mod:3,save:3},wis:{score:15,mod:2,save:7},cha:{score:17,mod:3,save:3}},fields:{AC:"18",HP:"190 (20d10 + 80)",Speed:"5 ft., Fly 40 ft. (hover)",Skills:"Perception +12",Immunities:"Prone",Senses:"Darkvision 120 ft., Passive Perception 22",Languages:"Deep Speech, Undercommon",CR:"13 (XP 10 000, or 11 500 in Lair; PB +5)"},cr:"13 (XP 10 000, or 11 500 in Lair; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:"Legendary Resistance (3/Day, or 4/Day in Lair)."},{title:"ACTIONS",text:`Multiattack.
Bite.
Eye Rays.`},{title:"BONUS ACTIONS",text:"Antimagic Cone."},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair).
Chomp.
Glare.`}]},{slug:"beholder-zombie",name:"Beholder Zombie",meta:"Undead Large, Neutral Evil",type:"Undead",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:8,mod:-1,save:-1},con:{score:16,mod:3,save:3},int:{score:3,mod:-4,save:-4},wis:{score:8,mod:-1,save:2},cha:{score:5,mod:-3,save:-3}},fields:{AC:"15",HP:"93 (11d10 + 33)",Speed:"5 ft., Fly 20 ft. (hover)",Immunities:"Poison; Exhaustion, Poisoned, Prone",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Understands Deep Speech and Undercommon but can't speak",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Undead Fortitude. If damage reduces the zombie to 0 Hit Points, it
makes a Constitution saving throw (DC 5 plus the damage taken)
unless the damage is Radiant or from a Critical Hit. On a successful
save, the zombie drops to 1 Hit Point instead.`},{title:"ACTIONS",text:`Multiattack. The zombie uses Eye Rays twice.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 16 (4d6 + 2) Piercing
damage.
Eye Rays. The zombie randomly shoots one of the following magical
rays at a target it can see within 120 feet of itself (roll 1d4; reroll if
the zombie has already used that ray during this turn):
1: Paralyzing Ray. Constitution Saving Throw: DC 14. Failure: The
target has the Paralyzed condition and repeats the save at the end
of each of its turns, ending the effect on itself on a success. After 1
minute, it succeeds automatically.
2: Fear Ray. Wisdom Saving Throw: DC 14. Failure: 13 (3d8) Psychic
damage, and the target has the Frightened condition until the end
of its next turn.
3: Enervation Ray. Constitution Saving Throw: DC 14. Failure: 10 (3d6)
Necrotic damage, and the target has the Poisoned condition until
the end of its next turn. While Poisoned, the target can't regain Hit
Points. Success: Half damage only.
4: Disintegration Ray. Dexterity Saving Throw: DC 14. Failure: 27
(5d10) Force damage. If the target is a nonmagical object or a
creation of magical force, a 10-foot Cube of it disintegrates into
dust. Success: Half damage. Failure or Success: If the target is a
creature and this damage reduces it to 0 Hit Points, it disintegrates
into dust.
Zombies animated from the corpses of beholders retain some use of those
monsters' magical eyestalks. These hovering corpses rely on their magic to
destroy impediments and paralyze foes, allowing them to savage foes with
their rotting maws. Magic-using beholders typically raise these abominations
from the corpses of defeated rivals.`}]},{slug:"berserker",name:"Berserker",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:16,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:17,mod:3,save:3},int:{score:9,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"13",HP:"67 (9d8 +27)",Speed:"30 ft.",Gear:"Greataxe, Hide Armor",Senses:"Passive Perception 10",Languages:"Common",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Bloodied Frenzy. While Bloodied, the berserker has Advantage on
attack rolls and saving throws.`},{title:"ACTIONS",text:`Greataxe. Melee Attack Roll: +5, reach 5 ft. Hit: 9 (1d12 + 3) Slashing
damage.
Gripped  by  the  adrenaline  of  battle,  berserkers  are  reckless  invaders,  pit
fighters, and other ferocious warriors.
Berserkers might fight for personal glory or form motivated forces or howling
hordes.`}]},{slug:"berserker-commander",name:"Berserker Commander",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:19,mod:4,save:7},dex:{score:14,mod:2,save:2},con:{score:19,mod:4,save:7},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:9,mod:-1,save:-1}},fields:{AC:"16",HP:"136 (16d8 + 64)",Speed:"40 ft.",Skills:"Athletics +7, Perception +5",Immunities:"Charmed, Frightened",Gear:"Greataxe, Javelins (6)",Senses:"Passive Perception 15",Languages:"Common",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Bloodied Frenzy. While Bloodied, the berserker has Advantage on
attack rolls and saving throws.`},{title:"ACTIONS",text:`Multiattack. The berserker makes three attacks, using Greataxe or
Javelin in any combination.
Greataxe. Melee Attack Roll: +7, reach 5 ft. Hit: 10 (1d12 + 4) Slashing
damage, plus 10 (3d6) Thunder damage to the target or another
creature within 5 feet of the target.
Javelin. Melee or Ranged Attack Roll: +7, reach 5 ft. or range 30/120 ft.
Hit: 18 (4d6 + 4) Piercing damage, and the target's Speed decreases
by 5 feet until the start of the berserker's next turn.`},{title:"BONUS ACTIONS",text:`Frenzied Rush. Each ally within 30 feet of the berserker can take a
Reaction to move up to half the ally's Speed without provoking
Opportunity Attacks. The berserker can also move up to half its
Speed without provoking Opportunity Attacks.
Gripped  by  the  adrenaline  of  battle,  berserkers  are  reckless  invaders,  pit
fighters, and other ferocious warriors.
Berserker commanders bear the scars of battle and drive their followers to
match  their  deadly  zeal.  These  commanders  tap  into  a  primal  magic  to
enhance their might.`}]},{slug:"bestial-spirit",name:"Bestial Spirit",meta:"Beast Small, Neutral",type:"Beast",subtype:"",size:"Small",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:4,mod:-3,save:-3},wis:{score:14,mod:2,save:2},cha:{score:5,mod:-3,save:-3}},fields:{AC:"11 + the spell's level",HP:"20 (Air only) or 30 (Land and Water only) + 5 for each spell level above 2",Speed:"30 ft., Climb 30 ft. (Land only); Fly 60 ft. (Air only); Swim 30 ft. (Water only)",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Flyby (Air Only). The spirit doesn't provoke Opportunity Attacks
when it flies out of an enemy's reach.
Pack Tactics (Land and Water Only). The spirit has Advantage on an
attack roll against a creature if at least one of the spirit's allies is
within 5 feet of the creature and the ally doesn't have the
Incapacitated condition.
Water Breathing (Water Only). The spirit can breathe only
underwater.`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of Rend attacks equal to
half this spell's level (round down).
Rend. Melee Attack Roll: Bonus equals your spell attack modifier,
reach 5 ft. Hit: 1d8 + 4 + the spell's level Piercing damage.
See Summon Beast.`}]},{slug:"black-bear",name:"Black Bear",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:12,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:2,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:2,save:-2}},fields:{AC:"11",HP:"19 (3d8 + 6)",Speed:"30 ft., Climb 30 ft., Swim 30 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Multiattack. The bear makes two Rend attacks.
Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing
damage.`}]},{slug:"black-dragon-wyrmling",name:"Black Dragon Wyrmling",meta:"Dragon (Chromatic) Medium, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:4},con:{score:13,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:2},cha:{score:13,mod:1,save:1}},fields:{AC:"17",HP:"33 (6d8 + 6)",Speed:"30 ft., Fly 60 ft., Swim 30 ft.",Skills:"Perception +4, Stealth +4",Immunities:"Acid",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing
damage plus 2 (1d4) Acid damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 11, each
creature in a 15-foot-long, 5-foot-wide Line. Failure: 22 (5d8) Acid
damage. Success: Half damage.
Black dragons delight in suffering and ruin. While other chromatic dragons
scheme for power and wealth, these dragons seek to tear down all they see and
rule over what remains. Black dragons are terrifying creatures with curved
horns and withered visages suggestive of fiendish skulls. They typically inhabit
stagnant swamps, crumbling ruins, or places of magical or environmental
corruption. Their acid breath scars their domains, eroding the features from
ancient statues and leaving nature with festering wounds. Black dragons hoard
tarnished symbols of hope and relics of fallen empires. The more sought-after
the  treasure,  the  more  black  dragons  prize  it—particularly  if  they  were
responsible for it being lost.`}]},{slug:"black-pudding",name:"Black Pudding",meta:"Ooze Large, Unaligned",type:"Ooze",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:5,mod:-3,save:-3},con:{score:16,mod:3,save:3},int:{score:1,mod:-5,save:-5},wis:{score:6,mod:-2,save:-2},cha:{score:1,mod:-5,save:-5}},fields:{AC:"7",HP:"68 (8d10 + 24)",Speed:"20 ft., Climb 20 ft.",Immunities:"Acid, Cold, Lightning, Slashing; Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",Senses:"Blindsight 60 ft., Passive Perception 8",Languages:"None",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Amorphous. The pudding can move through a space as narrow as 1
inch without expending extra movement to do so.
Corrosive Form. A creature that hits the pudding with a melee
attack roll takes 4 (1d8) Acid damage. Nonmagical ammunition is
destroyed immediately after hitting the pudding and dealing any
damage. Any nonmagical weapon takes a cumulative −1 penalty to
attack rolls immediately after dealing damage to the pudding and
coming into contact with it. The weapon is destroyed if the penalty
reaches −5. The penalty can be removed by casting the Mending
spell on the weapon. In 1 minute, the pudding can eat through 2
feet of nonmagical wood or metal.
along ceilings, without needing to make an ability check.`},{title:"ACTIONS",text:`Dissolving Pseudopod. Melee Attack Roll: +5, reach 10 ft. Hit: 17 (4d6
+ 3) Acid damage. Nonmagical armor worn by the target takes a −1
penalty to the AC it offers. The armor is destroyed if the penalty
reduces its AC to 10. The penalty can be removed by casting the
Mending spell on the armor.`},{title:"REACTIONS",text:`Split. Trigger: While the pudding is Large or Medium and has 10+ Hit
Points, it becomes Bloodied or is subjected to Lightning or Slashing
damage. Response: The pudding splits into two new Black Puddings.
Each new pudding is one size smaller than the original pudding and
acts on its Initiative. The original pudding's Hit Points are divided
evenly between the new puddings (round down).
Black  puddings  are  shapeless  masses  of  predatory  cells.  Once  a  pudding
detects organic matter, it oozes toward its prey, dissolving living matter and
various objects. If a black pudding is split by lightning or slashing attacks, it
divides  into  two  smaller,  independent  puddings.  Various  supernatural
conditions might bring black puddings into being.`}]},{slug:"blink-dog",name:"Blink Dog",meta:"Fey Medium, Lawful Good",type:"Fey",subtype:"",size:"Medium",alignment:"Lawful Good",abilities:{str:{score:12,mod:1,save:1},dex:{score:17,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:13,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"16 (3d8 + 3)",Speed:"40 ft.",Skills:"Perception +5, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Blink Dog; understands Elvish and Sylvan but can't speak them",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage."},{title:"BONUS ACTIONS",text:`Teleport (Recharge 4-6). The dog teleports up to 40 feet to an
unoccupied space it can see.
Blink dogs glimmer with a magic that allows them to teleport, "blinking" from
one spot to another. These dogs use this power to chase prey, baffle foes, and
express joy. They're frequently found among Feywild folk, such as centaurs
and pixies—often as members of rollicking hunts between worlds.`}]},{slug:"blob-of-annihilation",name:"Blob Of Annihilation",meta:"Ooze (Titan) Gargantuan, Neutral Evil",type:"Ooze",subtype:"Titan",size:"Gargantuan",alignment:"Neutral Evil",abilities:{str:{score:27,mod:8,save:8},dex:{score:14,mod:2,save:9},con:{score:28,mod:9,save:16},int:{score:10,mod:0,save:0},wis:{score:16,mod:3,save:3},cha:{score:10,mod:0,save:0}},fields:{AC:"18",HP:"448 (23d20 + 207)",Speed:"30 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Acid, Necrotic, Poison; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned, Unconscious",Senses:"Blindsight 120 ft., Passive Perception 13",Languages:"—",CR:"23 (XP 50 000; PB +7)"},cr:"23 (XP 50 000; PB +7)",crValue:"23",xp:5e4,sections:[{title:"TRAITS",text:`Astral Implosion.
Legendary Resistance (4/Day).
Magic Resistance.`},{title:"ACTIONS",text:`Multiattack.
Pseudopod.
Engulf.
Restraining Glob.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3.
Decay.
Grasping Glob.
Lashing Goop.`}]},{slug:"blood-hawk",name:"Blood Hawk",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:3,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:5,mod:-3,save:-3}},fields:{AC:"12",HP:"7 (2d6)",Speed:"10 ft., Fly 60 ft.",Skills:"Perception +6",Senses:"Passive Perception 16",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Pack Tactics. The hawk has Advantage on an attack roll against a
creature if at least one of the hawk's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:`Beak. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing
damage, or 6 (1d8 + 2) Piercing damage if the target is Bloodied.`}]},{slug:"blue-dragon-wyrmling",name:"Blue Dragon Wyrmling",meta:"Dragon (Chromatic) Medium, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:10,mod:0,save:2},con:{score:15,mod:2,save:2},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"17",HP:"65 (10d8 + 20)",Speed:"30 ft., Burrow 15 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +2",Immunities:"Lightning",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Slashing
damage plus 3 (1d6) Lightning damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 12, each
creature in a 30-foot-long, 5-foot-wide Line. Failure: 21 (6d6)
Lightning damage. Success: Half damage.
Arrogant  and  imperious,  blue  dragons  are  chromatic  dragons  that  crave
control and collect followers like other dragons hoard treasure. They seek to
transform their territories into empires, domains to be feared by nations. Blue
dragons have sharp features with piercing horns and scales that range from
sapphire to the shades of stormy skies. They dwell in deserts and badlands,
particularly regions with dramatic spires from whose tops they might see for
miles. They seek lairs near sites of symbolic power, such as the abandoned
fortresses of giants, the colossi of fallen empires, or monuments raised by their
followers.  Regalia  of  rulership  and  artistic  masterpieces  fill  blue  dragons'
hoards. These dragons have no interest in treasures that are common or
flawed, preferring one-of-a-kind gemstones, the crowns of fallen royals, and
magic items capable of spreading the dragons' influence.`}]},{slug:"blue-slaad",name:"Blue Slaad",meta:"Aberration Large, Chaotic Neutral",type:"Aberration",subtype:"",size:"Large",alignment:"Chaotic Neutral",abilities:{str:{score:20,mod:5,save:5},dex:{score:15,mod:2,save:2},con:{score:18,mod:4,save:4},int:{score:7,mod:-2,save:-2},wis:{score:7,mod:-2,save:-2},cha:{score:9,mod:-1,save:-1}},fields:{AC:"15",HP:"133 (14d10 + 56)",Speed:"30 ft.",Skills:"Perception +1",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Slaad; telepathy 60 ft.",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:`Magic Resistance. The slaad has Advantage on saving throws
against spells and other magical effects.
Regeneration. The slaad regains 10 Hit Points at the start of each of
its turns if it has at least 1 Hit Point.`},{title:"ACTIONS",text:`Multiattack. The slaad makes three Mutating Claw attacks.
Mutating Claw. Melee Attack Roll: +8, reach 10 ft. Hit: 12 (2d6 + 5)
Slashing damage plus 3 (1d6) Poison damage. If the target is a
Humanoid not cursed by a slaad, it is subjected to the following
effect. Constitution Saving Throw: DC 15. Failure: The target is cursed.
The cursed target can't regain Hit Points, and its Hit Point maximum
decreases by 10 (3d6) after every 24 hours and doesn't return to
normal after finishing a Long Rest. If the curse reduces the target's
Hit Point maximum to 0, the curse ends, and instead of dying, the
target instantly transforms into a Red Slaad or, if it can cast spells
of level 3 or higher, a Green Slaad. Only a Wish spell can reverse
this transformation.
Almost as numerous as red slaadi, blue slaadi are muscular brutes with vicious
blades extending from the backs of their claws. These claws carry a magical
curse called chaos phage, which can transform victims into red or green slaadi.
Blue slaadi accompany red slaadi and behave similarly. They innately know the
signs of chaos phage and avoid slaying creatures that carry it or other slaad
curses.`}]},{slug:"boar",name:"Boar",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:11,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:2,mod:4,save:4},wis:{score:9,mod:1,save:1},cha:{score:5,mod:3,save:-3}},fields:{AC:"11",HP:"13 (2d8 + 4)",Speed:"40 ft.",Senses:"Passive Perception 9",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Bloodied Fury. While Bloodied, the boar has Advantage on attack
rolls.`},{title:"ACTIONS",text:`Gore. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Piercing
damage. If the target is a Medium or smaller creature and the boar
moved 20+ feet straight toward it immediately before the hit, the
target takes an extra 3 (1d6) Piercing damage and has the Prone
condition.`}]},{slug:"bone-devil",name:"Bone Devil",meta:"Fiend (Devil) Large, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:8},dex:{score:16,mod:3,save:3},con:{score:18,mod:4,save:4},int:{score:13,mod:1,save:5},wis:{score:14,mod:2,save:6},cha:{score:16,mod:3,save:7}},fields:{AC:"16",HP:"161 (17d10 + 68)",Speed:"40 ft., Fly 40 ft.",Skills:"Deception +7, Insight +6",Resistances:"Cold",Immunities:"Fire, Poison; Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 12",Languages:"Infernal; telepathy 120 ft.",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Diabolical Restoration. If the devil dies outside the Nine Hells, its
body disappears in sulfurous smoke, and it gains a new body
instantly, reviving with all its Hit Points somewhere in the Nine
Hells.
Magic Resistance. The devil has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The devil makes two Claw attacks and one Infernal
Sting attack.
Claw. Melee Attack Roll: +8, reach 10 ft. Hit: 13 (2d8 + 4) Slashing
damage.
Infernal Sting. Melee Attack Roll: +8, reach 10 ft. Hit: 15 (2d10 + 4)
Piercing damage plus 18 (4d8) Poison damage, and the target has
the Poisoned condition until the start of the devil's next turn. While
Poisoned, the target can't regain Hit Points.`}]},{slug:"bone-naga",name:"Bone Naga",meta:"Undead Large, Neutral Evil",type:"Undead",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:16,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"65 (10d10 + 10)",Speed:"40 ft.",Immunities:"Poison; Charmed, Exhaustion, Paralyzed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Common plus one other language",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The naga makes two Bite attacks. It can replace any
attack with a use of Serpentine Gaze.
Bite. Melee Attack Roll: +5, reach 10 ft. Hit: 10 (2d6 + 3) Piercing
damage plus 7 (2d6) Necrotic damage.
Serpentine Gaze. Wisdom Saving Throw: DC 13, one creature the
naga can see within 60 feet. Failure: 13 (3d6 + 3) Psychic damage,
and the target has the Charmed condition until the start of the
naga's next turn.
Spellcasting. The naga casts one of the following spells, requiring no
Material components and using Intelligence as the spellcasting
ability (spell save DC 13):
At will: Mage Hand, Thaumaturgy
1/day each: Command, Detect Thoughts, Lightning Bolt`}]},{slug:"brass-dragon-wyrmling",name:"Brass Dragon Wyrmling",meta:"Dragon (Metallic) Medium, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Medium",alignment:"Chaotic Good",abilities:{str:{score:15,mod:2,save:2},dex:{score:10,mod:0,save:2},con:{score:13,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:2},cha:{score:13,mod:1,save:1}},fields:{AC:"15",HP:"22 (4d8 + 4)",Speed:"30 ft., Burrow 15 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +2",Immunities:"Fire",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing
damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 11, each
creature in a 20-foot-long, 5-foot-wide Line. Failure: 14 (4d6) Fire
damage. Success: Half damage.
Sleep Breath. Constitution Saving Throw: DC 11, each creature in a 15-
foot Cone. Failure: The target has the Incapacitated condition until
the end of its next turn, at which point it repeats the save. Second
Failure: The target has the Unconscious condition for 1 minute. This
effect ends for the target if it takes damage or a creature within 5
feet of it takes an action to wake it.
Gregarious and outgoing, brass dragons relish sharing knowledge and stories.
Although  these  metallic  dragons  favor  arid  lands,  they  cheerfully  journey
considerable distances to visit friendly creatures, pass on what they've learned,
and  collect  news.  Though  good  natured,  brass  dragons  don't  shirk  from
combat when necessary, thwarting foes with magical sleep and searing them
with flame. Brass dragons favor warm climes, particularly steppes and rocky or
sandy deserts, and they usually dwell near prominent crossroads or oases that
regularly  draw  visitors.  They  enjoy  adopting  Humanoid  forms,  disguising
themselves  as  traveling  merchants,  scholars,  storytellers,  or  anyone  else
invested in others' stories. Brass dragons collect eclectic objects. While such
items might seem like knickknacks, each is part of a story—perhaps a nostalgic
memento or evidence of a tale passed into myth. An old friend's hat and the
crown of the last ruler of a forgotten dynasty could occupy the same shelf in a
brass dragon's hoard.`}]},{slug:"brazen-gorgon",name:"Brazen Gorgon",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:19,mod:4,save:4},int:{score:2,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:7,mod:-2,save:-2}},fields:{AC:"19",HP:"161 (17d10 + 68)",Speed:"40 ft.",Skills:"Perception +10",Immunities:"Fire; Exhaustion, Petrified",Senses:"Darkvision 60 ft., Passive Perception 20",Languages:"—",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Flame Aura. At the end of each of the gorgon's turns, each creature
in a 5-foot Emanation originating from the gorgon takes 13 (3d8)
Fire damage.
Illumination. The gorgon sheds Bright Light in a 10-foot radius and
Dim Light for an additional 10 feet.`},{title:"ACTIONS",text:`Multiattack. The gorgon makes two Gore attacks.
Gore. Melee Attack Roll: +8, reach 5 ft. Hit: 11 (2d6 + 4) Piercing
damage plus 10 (3d6) Fire damage.
Smelting Charge (Recharge 5–6). The gorgon moves up to its Speed
without provoking Opportunity Attacks and can move through the
spaces of Medium or smaller creatures. Each time the gorgon enters
a creature's space for the first time during this move, that target is
subjected to the following effect. Dexterity Saving Throw: DC 16.
Failure: 13 (2d8 + 4) Piercing damage plus 13 (3d8) Fire damage, and
the target is pulled into the gorgon's space and has the Grappled
condition (escape DC 14); if the gorgon already has a creature
Grappled, the target has the Prone condition instead. Until the
grapple ends, the target has the Restrained condition. When the
gorgon moves, the Grappled target moves with it, costing no extra
movement.
Followers  of  the  exiled  archdevil  Moloch  altered  the  process  of  creating
gorgons to craft their own diabolical guardians called brazen gorgons. These
gorgons  are  hollow,  bull-like  automatons  whose  metal  bodies  glow  with
intense heat. When they charge their foes, the ribs of their frames open like
cages to ensnare enemies and roast them within. Brazen gorgons are often
found  in  blasphemous  sites  dedicated  to  Moloch,  other  archdevils,  or
bloodthirsty gods.`}]},{slug:"bronze-dragon-wyrmling",name:"Bronze Dragon Wyrmling",meta:"Dragon (Metallic) Medium, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Medium",alignment:"Lawful Good",abilities:{str:{score:17,mod:3,save:3},dex:{score:10,mod:0,save:2},con:{score:15,mod:2,save:2},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"39 (6d8 + 12)",Speed:"30 ft., Fly 60 ft., Swim 30 ft.",Skills:"Perception +4, Stealth +2",Immunities:"Lightning",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Slashing
damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 12, each
creature in a 40-foot-long, 5-foot-wide Line. Failure: 16 (3d10)
Lightning damage. Success: Half damage.
Repulsion Breath. Strength Saving Throw: DC 12, each creature in a
30-foot Cone. Failure: The target is pushed up to 30 feet straight
away from the dragon and has the Prone condition.
Where bronze dragons dwell, wonders flourish. Imaginative yet mindful, these
metallic dragons work toward greatness and help others achieve all they can.
They strive to preserve innovations, from the works of past civilizations to new
discoveries, and they share such works widely. When dealing with shorter-
lived beings, bronze dragons prefer to win them over through conversation and
cultivation, but they don't shy from battle when villains keep others from
achieving  their  potential.  Bronze  dragons  enjoy  the  power  and  endless
possibilities of the sea, and they often make their lairs in places of natural
beauty or communities they wish to preserve. Within their dwellings, bronze
dragons hoard things they believe will be useful one day. They salvage treasure
lost to the sea, reclaiming wealth or sunken ships.`}]},{slug:"brown-bear",name:"Brown Bear",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:2,mod:4,save:4},wis:{score:13,mod:1,save:1},cha:{score:7,mod:2,save:-2}},fields:{AC:"11",HP:"22 (3d10 + 6)",Speed:"40 ft., Climb 30 ft.",Skills:"Perception +3",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The bear makes one Bite attack and one Claw attack.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing
damage. If the target is a Large or smaller creature, it has the Prone
condition.`}]},{slug:"bugbear-stalker",name:"Bugbear Stalker",meta:"Fey (Goblinoid) Medium, Chaotic Evil",type:"Fey",subtype:"Goblinoid",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:4},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:3},cha:{score:11,mod:0,save:0}},fields:{AC:"15",HP:"65 (10d8 + 20)",Speed:"30 ft.",Skills:"Stealth +6, Survival +3",Gear:"Chain Shirt, Javelins (6), Morningstar",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Common, Goblin",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Abduct. The bugbear needn't spend extra movement to move a
creature it is grappling.`},{title:"ACTIONS",text:`Multiattack. The bugbear makes two Javelin or Morningstar attacks.
Javelin. Melee or Ranged Attack Roll: +5, reach 10 ft. or range 30/120
ft. Hit: 13 (3d6 + 3) Piercing damage.
Morningstar. Melee Attack Roll: +5 (with Advantage if the target is
Grappled by the bugbear), reach 10 ft. Hit: 12 (2d8 + 3) Piercing
damage.`},{title:"BONUS ACTIONS",text:`Quick Grapple. Dexterity Saving Throw: DC 13, one Medium or
smaller creature the bugbear can see within 10 feet. Failure: The
target has the Grappled condition (escape DC 13).
Bugbears embody fear of the wilds and the menace of natural places. They're
notoriously stealthy, and foes that venture into their territories often vanish
without a trace
Bugbear stalkers frequently take their victims hostage, relishing opportunities
to imprison and terrorize other creatures.`}]},{slug:"bugbear-warrior",name:"Bugbear Warrior",meta:"Fey (Goblinoid) Medium, Chaotic Evil",type:"Fey",subtype:"Goblinoid",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"14",HP:"33 (6d8 + 6)",Speed:"30 ft.",Skills:"Stealth +6, Survival +2",Gear:"Hide Armor, Light Hammers (3)",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common, Goblin",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Abduct. The bugbear needn't spend extra movement to move a
creature it is grappling.`},{title:"ACTIONS",text:`Grab. Melee Attack Roll: +4, reach 10 ft. Hit: 9 (2d6 + 2) Bludgeoning
damage. If the target is a Medium or smaller creature, it has the
Grappled condition (escape DC 12).
Light Hammer. Melee or Ranged Attack Roll: +4 (with Advantage if the
target is Grappled by the bugbear), reach 10 ft. or range 20/60 ft. Hit:
9 (3d4 + 2) Bludgeoning damage.
Bugbears embody fear of the wilds and the menace of natural places. They're
notoriously stealthy, and foes that venture into their territories often vanish
without a trace
Bugbear warriors serve those who offer them treasure, food, or the chance to
hunt challenging prey.`}]},{slug:"bulette",name:"Bulette",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:21,mod:5,save:5},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"17",HP:"94 (9d10 + 45)",Speed:"40 ft., Burrow 40 ft.",Skills:"Perception +6",Senses:"Darkvision 60 ft., Tremorsense 120 ft., Passive Perception 16",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The bulette makes two Bite attacks.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 17 (2d12 + 4) Piercing
damage.
Deadly Leap. The bulette spends 5 feet of movement to jump to a
space within 15 feet that contains one or more Large or smaller
creatures. Dexterity Saving Throw: DC 15, each creature in the
bulette's destination space. Failure: 19 (3d12) Bludgeoning damage,
and the target has the Prone condition. Success: Half damage, and
the target is pushed 5 feet straight away from the bulette.`},{title:"BONUS ACTIONS",text:`Leap. The bulette jumps up to 30 feet by spending 10 feet of
movement.
Bulettes range under vast territories. They often threaten animal herds, and
they can wipe out whole farming communities.`}]},{slug:"bulette-pup",name:"Bulette Pup",meta:"Monstrosity Medium, Unaligned",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:8,mod:-1,save:-1},con:{score:17,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"16",HP:"45 (6d8 + 18)",Speed:"30 ft., Burrow 20 ft.",Skills:"Perception +4",Senses:"Darkvision 30 ft., Tremorsense 60 ft., Passive Perception 14",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:"Bite."},{title:"BONUS ACTIONS",text:`Leap.
Juvenile bulettes are known as pups. They travel in small groups, using their
numbers  to  bring  down  larger  foes.  Their  arrival  frequently  presages  the
appearance of an adult bulette.`}]},{slug:"bullywug-bog-sage",name:"Bullywug Bog Sage",meta:"Fey Medium, Neutral",type:"Fey",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:16,mod:3,save:3},con:{score:14,mod:2,save:4},int:{score:10,mod:0,save:0},wis:{score:16,mod:3,save:5},cha:{score:12,mod:1,save:1}},fields:{AC:"16",HP:"52 (8d8 + 16)",Speed:"30 ft., Swim 30 ft.",Skills:"Nature +4, Stealth +5",Gear:"Component Pouch",Senses:"Passive Perception 13",Languages:"Bullywug, Common, Sylvan",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Amphibious. The bullywug can breathe air and water.
Speak with Frogs and Toads. The bullywug can communicate simple
concepts to frogs and toads when it speaks in Bullywug.`},{title:"ACTIONS",text:`Multiattack. The bullywug makes two Bog Staff attacks. It can
replace any attack with a use of Spellcasting to cast Ray of Sickness.
Bog Staff. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3)
Bludgeoning damage plus 10 (3d6) Poison damage.
Spellcasting. The bullywug casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 13, +5 to hit with
spell attacks):
At Will: Dancing Lights, Druidcraft, Ray of Sickness
1/Day Each: Speak with Plants, Vitriolic Sphere`},{title:"BONUS ACTIONS",text:`Leap. The bullywug jumps up to 30 feet by spending 10 feet of
movement.
Fey embodiments of swamplands, bullywugs protect the murky wilds and
consider themselves cosmically favored for that role. These human-size, toad-
or frog-like creatures have close relationships with the creatures of the swamp.
Bullywug bog sages channel the magic of the swamp to sicken foes and speak
with plants.`}]},{slug:"bullywug-warrior",name:"Bullywug Warrior",meta:"Fey Medium, Neutral",type:"Fey",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"11 (2d8 + 2)",Speed:"30 ft., Swim 30 ft.",Skills:"Stealth +4",Senses:"Passive Perception 10",Languages:"Bullywug, Common",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Amphibious. The bullywug can breathe air and water.
Speak with Frogs and Toads. The bullywug can communicate simple
concepts to frogs and toads when it speaks in Bullywug.`},{title:"ACTIONS",text:`Insectile Rapier. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2)
Piercing damage plus 2 (1d4) Poison damage.`},{title:"BONUS ACTIONS",text:`Leap. The bullywug jumps up to 30 feet by spending 10 feet of
movement.
Fey embodiments of swamplands, bullywugs protect the murky wilds and
consider themselves cosmically favored for that role. These human-size, toad-
or frog-like creatures have close relationships with the creatures of the swamp.
Bullywug  warriors  are  adept  at  moving  through  swamps  and  ambushing
trespassers. They often work alongside packs of trained giant frogs`}]},{slug:"cambion",name:"Cambion",meta:"Fiend Medium, Neutral Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:7},dex:{score:18,mod:4,save:4},con:{score:16,mod:3,save:6},int:{score:14,mod:2,save:5},wis:{score:12,mod:1,save:1},cha:{score:16,mod:3,save:6}},fields:{AC:"19",HP:"105 (14d8 + 42)",Speed:"30 ft., Fly 60 ft.",Skills:"Deception +6, Perception +4, Stealth +7",Resistances:"Cold, Fire, Lightning, Poison",Immunities:"Poisoned",Senses:"Darkvision 120 ft., Passive Perception 14",Languages:"Abyssal, Common, Infernal",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The cambion makes two attacks, using Claw or Fire Ray
in any combination.
Claw. Melee Attack Roll: +7, reach 5 ft. Hit: 8 (1d8 + 4) Slashing
damage plus 7 (2d6) Fire damage.
Fire Ray. Ranged Attack Roll: +7, range 120 ft. Hit: 13 (3d6 + 3) Fire
damage.
Spellcasting. The cambion casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 14):
2/day each: Alter Self, Command (level 3 version), Detect Magic
1/day each: Dominate Person (level 8 version), Plane Shift (self only)`}]},{slug:"camel",name:"Camel",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:8,mod:1,save:1},con:{score:17,mod:3,save:5},int:{score:2,mod:4,save:4},wis:{score:11,mod:0,save:0},cha:{score:5,mod:3,save:3}},fields:{AC:"10",HP:"17 (2d10 + 6)",Speed:"50 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Bludgeoning
damage.`}]},{slug:"carrion-crawler",name:"Carrion Crawler",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:13,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:1,mod:-5,save:-5},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"51 (6d10 + 18)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"including along ceilings, without needing to make an ability check."},{title:"ACTIONS",text:`Multiattack. The carrion crawler uses Paralyzing Tentacles and
makes one Bite attack.
Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Piercing damage
plus 3 (1d6) Poison damage.
Paralyzing Tentacles. Constitution Saving Throw: DC 12, one creature
the carrion crawler can see within 10 feet. Failure: The target has the
Poisoned condition and repeats the save at the end of each of its
turns, ending the effect on itself on a success. After 1 minute, it
succeeds automatically. While Poisoned, the target has the
Paralyzed condition.
Ravenous corpse eaters, carrion crawlers gravitate toward places of slaughter
and decay. In such charnel environs, they feast on the dead with no qualms
about  their  meals'  origins  or  freshness.  Carrion  crawlers  have  segmented
bodies like gigantic cutworms. From beneath their multipart maws protrude
eight thin, lashing tentacles. Creatures struck by these tentacles risk being
paralyzed  and  consumed.  Carrion  crawlers  scour  sewers,  battlefields,
necropolises, and fetid wildernesses for corpses, clinging to ceilings to ambush
smaller prey and to avoid competing hunters. They're drawn to light and the
scent of blood, recognizing them as signs of food. These scavengers avoid
ingesting inorganic material. Crypts with funeral armors sucked clean of their
corpses  and  eerily  pristine  catacombs  are  signs  of  infestation  by  carrion
crawlers.`}]},{slug:"cat",name:"Cat",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:3,mod:-4,save:-4},dex:{score:15,mod:2,save:4},con:{score:10,mod:0,save:0},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"2 (1d4)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +3, Stealth +4",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Jumper. The cat's jump distance is determined using its Dexterity
rather than its Strength.`},{title:"ACTIONS",text:"Scratch. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Slashing damage."}]},{slug:"celestial-spirit",name:"Celestial Spirit",meta:"Celestial Large, Neutral",type:"Celestial",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:16,mod:3,save:3}},fields:{AC:"11 + the spell's level + 2 (Defender only)",HP:"40 + 10 for each spell level above 5",Speed:"30 ft., Fly 40 ft.",Resistances:"Radiant",Immunities:"Charmed, Frightened",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Celestial, understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"ACTIONS",text:`Multiattack. The spirit makes a number of attacks equal to half this
spell's level (round down).
Radiant Bow (Avenger Only). Ranged Attack Roll: Bonus equals your
spell attack modifier, range 600 ft. Hit: 2d6 + 2 + the spell's level
Radiant damage.
Radiant Mace (Defender Only). Melee Attack Roll: Bonus equals your
spell attack modifier, reach 5 ft. Hit: 1d10 + 3 + the spell's level
Radiant damage, and the spirit can choose itself or another creature
it can see within 10 feet of the target. The chosen creature gains
1d10 Temporary Hit Points.
Healing Touch (1/Day). The spirit touches another creature. The
target regains Hit Points equal to 2d8 + the spell's level.
See Summon Celestial.`}]},{slug:"centaur-trooper",name:"Centaur Trooper",meta:"Fey Large, Neutral Good",type:"Fey",subtype:"",size:"Large",alignment:"Neutral Good",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:9,mod:-1,save:-1},wis:{score:13,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"16",HP:"45 (6d10 + 12)",Speed:"50 ft.",Skills:"Athletics +6, Perception +3",Gear:"Breastplate, Longbow, Pike",Senses:"Passive Perception 13",Languages:"Elvish, Sylvan",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The centaur makes two attacks, using Pike or Longbow
in any combination.
Pike. Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4) Piercing
damage.
Longbow. Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2)
Piercing damage.`},{title:"BONUS ACTIONS",text:`Trampling Charge (Recharge 5–6). The centaur moves up to its
Speed without provoking Opportunity Attacks and can move
through the spaces of Medium or smaller creatures. Each creature
whose space the centaur enters is targeted once by the following
effect. Strength Saving Throw: DC 14. Failure: 7 (1d6 + 4) Bludgeoning
damage, and the target has the Prone condition.
Centaur troopers are knight-like guardians. Many are suspicious of non-Fey
creatures.`}]},{slug:"centaur-warden",name:"Centaur Warden",meta:"Fey Large, Neutral Good",type:"Fey",subtype:"",size:"Large",alignment:"Neutral Good",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:5},int:{score:9,mod:-1,save:-1},wis:{score:18,mod:4,save:7},cha:{score:11,mod:0,save:0}},fields:{AC:"16",HP:"105 (14d10 + 28)",Speed:"50 ft.",Skills:"Athletics +7, Nature +5, Perception +7",Senses:"Passive Perception 17",Languages:"Druidic, Elvish, Sylvan",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The centaur makes two attacks, using Forest Staff or
Sun Ray in any combination.
Forest Staff. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4)
Bludgeoning damage plus 14 (4d6) Poison damage.
Spellcasting. The centaur casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 15):
At will: Druidcraft, Speak with Animals
Sun Ray. Ranged Attack Roll: +7, range 90 ft. Hit: 14 (3d6 + 4) Radiant
damage, and the target has the Blinded condition until the start of
the centaur's next turn.`},{title:"BONUS ACTIONS",text:`Entangling Trail (Recharge 5–6). The centaur moves up to its Speed
without provoking Opportunity Attacks. Each creature within 5 feet
of the centaur as it moves is targeted once by the following effect.
Strength Saving Throw: DC 15. Failure: 11 (2d6 + 4) Bludgeoning
damage, and the target has the Restrained condition until the end
of its next turn.
Centaur  wardens  often  lead  groups  of  centaur  troopers  and  act  as
intermediaries between Fey creatures and trespassers into their territories.`}]},{slug:"chain-devil",name:"Chain Devil",meta:"Fiend (Devil) Medium, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:18,mod:4,save:7},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:4},cha:{score:14,mod:2,save:2}},fields:{AC:"15",HP:"85 (10d8 + 40)",Speed:"30 ft.",Resistances:"Bludgeoning, Cold, Piercing, Slashing",Immunities:"Fire, Poison; Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 11",Languages:"Infernal; telepathy 120 ft.",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Diabolical Restoration. If the devil dies outside the Nine Hells, its
body disappears in sulfurous smoke, and it gains a new body
instantly, reviving with all its Hit Points somewhere in the Nine
Hells.
Magic Resistance. The devil has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The devil makes two Chain attacks and uses Conjure
Infernal Chain.
Chain. Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 14) from one of two chains, and it
has the Restrained condition until the grapple ends.
Conjure Infernal Chain. The devil conjures a fiery chain to bind a
creature. Dexterity Saving Throw: DC 15, one creature the devil can
see within 60 feet. Failure: 9 (2d4 + 4) Fire damage, and the target
has the Restrained condition until the end of the devil's next turn, at
which point the chain disappears. If the target is Large or smaller,
the devil moves the target up to 30 feet straight toward itself.
Success: The chain disappears.`},{title:"REACTIONS",text:`Unnerving Gaze. Trigger: A creature the devil can see starts its turn
within 30 feet of the devil and can see the devil. Response—Wisdom
Saving Throw: DC 15, the triggering creature. Failure: The target has
the Frightened condition until the end of its turn. Success: The target
is immune to this devil's Unnerving Gaze for 24 hours.`}]},{slug:"chasme",name:"Chasme",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:15,mod:2,save:5},con:{score:12,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:14,mod:2,save:5},cha:{score:10,mod:0,save:0}},fields:{AC:"15",HP:"78 (12d10 + 12)",Speed:"20 ft., Fly 60 ft.",Skills:"Perception +5",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Blindsight 10 ft., Darkvision 120 ft., Passive Perception 15",Languages:"Abyssal; telepathy 120 ft.",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Demonic Restoration. If the chasme dies outside the Abyss, its body
dissolves into ichor, and it gains a new body instantly, reviving with
all its Hit Points somewhere in the Abyss.
Magic Resistance. The chasme has Advantage on saving throws
against spells and other magical effects.
along ceilings, without needing to make an ability check.`},{title:"ACTIONS",text:`Proboscis. Melee Attack Roll: +5, reach 5 ft. Hit: 16 (4d6 + 2) Piercing
damage plus 21 (6d6) Necrotic damage. If the target is a creature, its
Hit Point maximum decreases by an amount equal to the Necrotic
damage taken.`},{title:"BONUS ACTIONS",text:`Drone. Constitution Saving Throw: DC 12, each creature in a 30-foot
Emanation originating from the chasme (demons automatically
succeed on this save). Failure: The target has the Unconscious
condition and repeats the save at the end of each of its turns. The
target succeeds automatically after 10 minutes or if it takes damage
or a creature within 5 feet of it takes an action to empty a flask of
Holy Water on it. Success: The target is immune to this chasme's
Drone for 24 hours.`}]},{slug:"chimera",name:"Chimera",meta:"Monstrosity Large, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:19,mod:4,save:4},int:{score:3,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"14",HP:"114 (12d10 + 48)",Speed:"30 ft., Fly 60 ft.",Skills:"Perception +8",Senses:"Darkvision 60 ft., Passive Perception 18",Languages:"Understands Draconic but can't speak",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The chimera makes one Ram attack, one Bite attack,
and one Claw attack. It can replace the Claw attack with a use of Fire
Breath if available.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Piercing
damage, or 18 (4d6 + 4) Piercing damage if the chimera had
Advantage on the attack roll.
Claw. Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Slashing
damage.
Ram. Melee Attack Roll: +7, reach 5 ft. Hit: 10 (1d12 + 4) Bludgeoning
damage. If the target is a Medium or smaller creature, it has the
Prone condition.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 15, each
creature in a 15-foot Cone. Failure: 31 (7d8) Fire damage. Success:
Half damage.`}]},{slug:"chuul",name:"Chuul",meta:"Aberration Large, Chaotic Evil",type:"Aberration",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:5,mod:-3,save:-3},wis:{score:11,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"16",HP:"76 (9d10 + 27)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +4",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Understands Deep Speech but can't speak",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Amphibious. The chuul can breathe air and water.
Sense Magic. The chuul senses magic within 120 feet of itself. This
trait otherwise works like the Detect Magic spell but isn't itself
magical.`},{title:"ACTIONS",text:`Multiattack. The chuul makes two Pincer attacks and uses
Paralyzing Tentacles.
Pincer. Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4)
Bludgeoning damage. If the target is a Large or smaller creature, it
has the Grappled condition (escape DC 14) from one of two pincers.
Paralyzing Tentacles. Constitution Saving Throw: DC 13, one creature
Grappled by the chuul. Failure: The target has the Poisoned
condition and repeats the save at the end of each of its turns,
ending the effect on itself on a success. After 1 minute, it succeeds
automatically. While Poisoned, the target has the Paralyzed
condition.`}]},{slug:"clay-golem",name:"Clay Golem",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:20,mod:5,save:5},dex:{score:9,mod:-1,save:-1},con:{score:18,mod:4,save:4},int:{score:3,mod:-4,save:-4},wis:{score:8,mod:-1,save:-1},cha:{score:1,mod:-5,save:-5}},fields:{AC:"14",HP:"123 (13d10 + 52)",Speed:"20 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Acid, Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Common plus one other language",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Acid Absorption. Whenever the golem is subjected to Acid damage,
it takes no damage and instead regains a number of Hit Points
equal to the Acid damage dealt.
Berserk. Whenever the golem starts its turn Bloodied, roll 1d6. On a
6, the golem goes berserk. On each of its turns while berserk, the
golem attacks the nearest creature it can see. If no creature is near
enough to move to and attack, the golem attacks an object. Once
the golem goes berserk, it continues to be berserk until it is
destroyed or it is no longer Bloodied.
Immutable Form. The golem can't shape-shift.
Magic Resistance. The golem has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The golem makes two Slam attacks, or it makes three
Slam attacks if it used Hasten this turn.
Slam. Melee Attack Roll: +9, reach 5 ft. Hit: 10 (1d10 + 5) Bludgeoning
damage plus 6 (1d12) Acid damage, and the target's Hit Point
maximum decreases by an amount equal to the Acid damage taken.`},{title:"BONUS ACTIONS",text:`Hasten (Recharge 5–6). The golem takes the Dash and Disengage
actions.`}]},{slug:"cloaker",name:"Cloaker",meta:"Aberration Large, Chaotic Neutral",type:"Aberration",subtype:"",size:"Large",alignment:"Chaotic Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:7,mod:-2,save:-2}},fields:{AC:"14",HP:"91 (14d10 + 14)",Speed:"10 ft., Fly 40 ft.",Skills:"Stealth +5",Immunities:"Frightened",Senses:"Darkvision 120 ft., Passive Perception 12",Languages:"Deep Speech, Undercommon",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Light Sensitivity. While in Bright Light, the cloaker has Disadvantage
on attack rolls.`},{title:"ACTIONS",text:`Multiattack. The cloaker makes one Attach attack and two Tail
attacks.
Attach. Melee Attack Roll: +6, reach 5 ft. Hit: 13 (3d6 + 3) Piercing
damage. If the target is a Large or smaller creature, the cloaker
attaches to it. While the cloaker is attached, the target has the
Blinded condition, and the cloaker can't make Attach attacks against
other targets. In addition, the cloaker halves the damage it takes
(round down), and the target takes the same amount of damage.
The cloaker can detach itself by spending 5 feet of movement. The
target or a creature within 5 feet of it can take an action to try to
detach the cloaker, doing so by succeeding on a DC 14 Strength
(Athletics) check.
Tail. Melee Attack Roll: +6, reach 10 ft. Hit: 8 (1d10 + 3) Slashing
damage.`},{title:"BONUS ACTIONS",text:`Moan. Wisdom Saving Throw: DC 13, each creature in a 60-foot
Emanation originating from the cloaker. Failure: The target has the
Frightened condition until the end of the cloaker's next turn.
Success: The target is immune to this cloaker's Moan for the next 24
hours.
Phantasms (Recharge after a Short or Long Rest). The cloaker casts
the Mirror Image spell, requiring no spell components and using
Wisdom as the spellcasting ability. The spell ends early if the cloaker
starts or ends its turn in Bright Light.`}]},{slug:"cloud-giant",name:"Cloud Giant",meta:"Giant Huge, Neutral",type:"Giant",subtype:"",size:"Huge",alignment:"Neutral",abilities:{str:{score:27,mod:8,save:8},dex:{score:10,mod:0,save:0},con:{score:22,mod:6,save:10},int:{score:12,mod:1,save:1},wis:{score:16,mod:3,save:7},cha:{score:16,mod:3,save:3}},fields:{AC:"14",HP:"200 (16d12 + 96)",Speed:"40 ft., Fly 20 ft. (hover)",Skills:"Insight +7, Perception +11",Senses:"Passive Perception 21",Languages:"Common, Giant",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"ACTIONS",text:`Multiattack. The giant makes two attacks, using Thunderous Mace
or Thundercloud in any combination. It can replace one attack with
a use of Spellcasting to cast Fog Cloud.
Thunderous Mace. Melee Attack Roll: +12, reach 10 ft. Hit: 21 (3d8 + 8)
Bludgeoning damage plus 7 (2d6) Thunder damage.
Thundercloud. Ranged Attack Roll: +12, range 240 ft. Hit: 18 (3d6 + 8)
Thunder damage, and the target has the Incapacitated condition
until the end of its next turn.
Spellcasting. The giant casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 15):
At Will: Detect Magic, Fog Cloud, Light
1/Day Each: Control Weather, Gaseous Form, Telekinesis`},{title:"BONUS ACTIONS",text:`Misty Step. The giant casts the Misty Step spell, using the same
spellcasting ability as Spellcasting.`}]},{slug:"cockatrice",name:"Cockatrice",meta:"Monstrosity Small, Unaligned",type:"Monstrosity",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:13,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"11",HP:"22 (5d6 + 5)",Speed:"20 ft., Fly 40 ft.",Immunities:"Petrified",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Petrifying Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1)
Piercing damage. If the target is a creature, it is subjected to the
following effect. Constitution Saving Throw: DC 11. First Failure: The
target has the Restrained condition. The target repeats the save at
the end of its next turn if it is still Restrained, ending the effect on
itself on a success. Second Failure: The target has the Petrified
condition, instead of the Restrained condition, for 24 hours.
Cockatrices  often  try  to  claim  eye-catching  structures—such  as  ruins  and
secluded farms—as roosts.`}]},{slug:"cockatrice-regent",name:"Cockatrice Regent",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:3,mod:-4,save:-4},wis:{score:16,mod:3,save:6},cha:{score:5,mod:-3,save:-3}},fields:{AC:"15",HP:"136 (16d10 + 48)",Speed:"30 ft., Fly 60 ft.",Immunities:"Petrified",Senses:"Darkvision 120 ft., Passive Perception 13",Languages:"—",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Flyby. The cockatrice doesn't provoke an Opportunity Attack when it
flies out of an enemy's reach.`},{title:"ACTIONS",text:`Multiattack. The cockatrice makes one Petrifying Bite attack and
two Talons attacks.
Petrifying Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4)
Piercing damage. If the target is a creature, it is subjected to the
following effect. Constitution Saving Throw: DC 14. First Failure: The
target has the Restrained condition and repeats the save at the end
of its next turn if it is still Restrained, ending the effect on itself on a
success. Second Failure: The target has the Petrified condition
instead of the Restrained condition.
Talons. Melee Attack Roll: +7, reach 5 ft. Hit: 18 (4d6 + 4) Slashing
damage.`},{title:"REACTIONS",text:`Magical Backlash. Trigger: A creature within 120 feet of the
cockatrice deals damage to it. Response—Dexterity Saving Throw: DC
14, the triggering creature. Failure: 13 (3d6 + 3) Force damage.
Bolder  than  their  smaller  cousins,  cockatrice  regents  brim  with  unstable
magical energy they use to restrain distant foes.`}]},{slug:"colossus",name:"Colossus",meta:"Construct (Titan) Gargantuan, Unaligned",type:"Construct",subtype:"Titan",size:"Gargantuan",alignment:"Unaligned",abilities:{str:{score:30,mod:10,save:10},dex:{score:11,mod:0,save:8},con:{score:30,mod:10,save:10},int:{score:3,mod:-4,save:-4},wis:{score:11,mod:0,save:8},cha:{score:8,mod:-1,save:-1}},fields:{AC:"23",HP:"553 (27d20 + 270)",Speed:"60 ft.",Resistances:"Necrotic, Radiant",Immunities:"Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned, Stunned, Unconscious",Senses:"Truesight 300 ft., Passive Perception 10",Languages:"Understands Celestial and Common but can't speak",CR:"25 (XP 75 000; PB +8)"},cr:"25 (XP 75 000; PB +8)",crValue:"25",xp:75e3,sections:[{title:"TRAITS",text:`Immutable Form. The colossus can't shape-shift.
Legendary Resistance (4/Day). If the colossus fails a saving throw, it
can choose to succeed instead.
Magic Resistance. The colossus has Advantage on saving throws
against spells and other magical effects.
Siege Monster. The colossus deals double damage to objects and
structures.`},{title:"ACTIONS",text:`Multiattack. The colossus makes three attacks, using Slam or
Radiant Ray in any combination.
Slam. Melee Attack Roll: +18, reach 20 ft. Hit: 32 (4d10 + 10)
Bludgeoning damage, and the colossus pushes the target up to 20
feet straight away from itself.
Radiant Ray. Ranged Attack Roll: +18, range 300 ft. Hit: 22 (4d10)
Radiant damage. If the target is a Large or smaller creature, it has
the Prone condition.
Divine Beam (Recharge 5–6). Dexterity Saving Throw: DC 26, each
creature in a 300-foot-long, 10-foot-wide Line. Failure: 65 (10d12)
Radiant damage. Success: Half damage. Failure or Success: A creature
reduced to 0 Hit Points by this beam disintegrates into dust, leaving
behind any magic items it was wearing or carrying.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3. Immediately after another creature's turn, the
colossus can expend a use to take one of the following actions. The
colossus regains all expended uses at the start of each of its turns.
Smite. The colossus makes one Radiant Ray attack.
Stomp. The colossus moves up to half its Speed without provoking
Opportunity Attacks, and it can make one Slam attack at any point
during that move.`}]},{slug:"commoner",name:"Commoner",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:10,mod:0,save:0},con:{score:10,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"10",HP:"4 (1d8)",Speed:"30 ft.",Gear:"Club",Senses:"Passive Perception 10",Languages:"Common",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Training. The commoner has proficiency in one skill of the DM's
choice and has Advantage whenever it makes an ability check using
that skill.`},{title:"ACTIONS",text:`Club. Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Bludgeoning
damage.
Commoners  constitute  the  majority  of  people  who  don't  pursue  magical
talents, extraordinary training, or a life of adventure. Some are generous,
helpful sorts, while others are more cautious in sharing what they have.`}]},{slug:"constrictor-snake",name:"Constrictor Snake",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:1,mod:5,save:5},wis:{score:10,mod:0,save:0},cha:{score:3,mod:4,save:4}},fields:{AC:"13",HP:"13 (2d10 + 2)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +2, Stealth +4",Senses:"Blindsight 10 ft., Passive Perception 12",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage.
Constrict. Strength Saving Throw: DC 12, one Medium or smaller
creature the snake can see within 5 feet. Failure: 7 (3d4)
Bludgeoning damage, and the target has the Grappled condition
(escape DC 12).`}]},{slug:"construct-spirit",name:"Construct Spirit",meta:"Construct Medium, Neutral",type:"Construct",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:18,mod:4,save:4},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13 + the spell's level",HP:"40 + 15 for each spell level above 4",Speed:"30 ft.",Resistances:"Poison",Immunities:"Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Heated Body (Metal Only). A creature that hits the spirit with a
melee attack or that starts its turn in a grapple with the spirit takes
1d10 Fire damage.
Stony Lethargy (Stone Only). When a creature starts its turn within
10 feet of the spirit, the spirit can target it with magical energy if the
spirit can see it. Wisdom Saving Throw: DC equals your spell save DC,
the target. Failure: Until the start of its next turn, the target can't
make Opportunity Attacks, and its Speed is halved.`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of Slam attacks equal to half
this spell's level (round down).
Slam. Melee Attack Roll: Bonus equals your spell attack modifier,
reach 5 ft. Hit: 1d8 + 4 + the spell's level Bludgeoning damage.`},{title:"REACTIONS",text:`Berserk Lashing (Clay Only). Trigger: The spirit takes damage from a
creature. Response: The spirit makes a Slam attack against that
creature if possible, or the spirit moves up to half its Speed toward
that creature without provoking Opportunity Attacks.
See Summon Construc.`}]},{slug:"copper-dragon-wyrmling",name:"Copper Dragon Wyrmling",meta:"Dragon (Metallic) Medium, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Medium",alignment:"Chaotic Good",abilities:{str:{score:15,mod:2,save:2},dex:{score:12,mod:1,save:3},con:{score:13,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:2},cha:{score:13,mod:1,save:1}},fields:{AC:"16",HP:"22 (4d8 + 4)",Speed:"30 ft., Climb 30 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +3",Immunities:"Acid",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing
damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 11, each
creature in a 20-foot-long, 5-foot-wide Line. Failure: 18 (4d8) Acid
damage. Success: Half damage.
Slowing Breath. Constitution Saving Throw: DC 11, each creature in a
15-foot Cone. Failure: The target can't take Reactions; its Speed is
halved; and it can take either an action or a Bonus Action on its
turn, not both. This effect lasts until the end of its next turn.
Relentlessly friendly and curious, most copper dragons view the world as a
place of endless wonder and possibility. These gregarious dragons are fonts of
patience, hospitality, and humor, and they seek to improve the lives—or, at
least,  the  mood—of  those  they  interact  with.  If  forced  to  fight  to  defend
themselves or their friends, these dragons favor using their slowing breath and
physical attacks to subdue antagonists. Only in cases of extreme peril or
emotion do they use their deadly acid breath. Copper dragons typically live in
caverns amid picturesque hills and rock formations—particularly those that
are prominent landmarks. These dragons collect gifts, though they have little
interest in treasure without meaning, no matter how valuable it is. To them,
thoughtfully given presents and the feelings or memories they symbolize are
more important than masterpieces or magical relics.`}]},{slug:"couatl",name:"Couatl",meta:"Celestial Medium, Lawful Good",type:"Celestial",subtype:"",size:"Medium",alignment:"Lawful Good",abilities:{str:{score:16,mod:3,save:3},dex:{score:20,mod:5,save:5},con:{score:17,mod:3,save:5},int:{score:18,mod:4,save:4},wis:{score:20,mod:5,save:7},cha:{score:18,mod:4,save:4}},fields:{AC:"19",HP:"60 (8d8 + 24)",Speed:"30 ft., Fly 90 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Psychic, Radiant",Senses:"Truesight 120 ft., Passive Perception 15",Languages:"All; telepathy 120 ft.",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Shielded Mind. The couatl's thoughts can't be read by any means,
and other creatures can communicate with it telepathically only if it
allows them.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (1d12 + 5) Piercing
damage, and the target has the Poisoned condition until the end of
the couatl's next turn.
Constrict. Strength Saving Throw: DC 15, one Medium or smaller
creature the couatl can see within 5 feet. Failure: 8 (1d6 + 5)
Bludgeoning damage. The target has the Grappled condition (escape
DC 13), and it has the Restrained condition until the grapple ends.
Spellcasting. The couatl casts one of the following spells, requiring
no spell components and using Wisdom as the spellcasting ability
(spell save DC 15):
At Will: Detect Evil and Good, Detect Magic, Detect Thoughts,
Shapechange (Beast or Humanoid form only, no Temporary Hit
Points gained from the spell, and no Concentration or Temporary
Hit Points required to maintain the spell)
1/Day Each: Create Food and Water, Dream, Greater Restoration,
Scrying, Sleep`},{title:"BONUS ACTIONS",text:`Divine Aid (2/Day). The couatl casts Bless, Lesser Restoration, or
Sanctuary, requiring no spell components and using the same
spellcasting ability as Spellcasting.`}]},{slug:"crab",name:"Crab",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:6,mod:2,save:2},dex:{score:11,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:1,mod:5,save:5},wis:{score:8,mod:1,save:1},cha:{score:2,mod:4,save:4}},fields:{AC:"11",HP:"3 (1d4 + 1)",Speed:"20 ft., Swim 20 ft.",Skills:"Stealth +2",Senses:"Blindsight 30 ft., Passive Perception 9",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:"Amphibious. The crab can breathe air and water."},{title:"ACTIONS",text:"Claw. Melee Attack Roll: +2, reach 5 ft. Hit: 1 Bludgeoning damage."}]},{slug:"crawling-claw",name:"Crawling Claw",meta:"Undead Tiny, Neutral Evil",type:"Undead",subtype:"",size:"Tiny",alignment:"Neutral Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"12",HP:"2 (1d4)",Speed:"20 ft., Climb 20 ft.",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Incapacitated, Poisoned",Senses:"Blindsight 30 ft., Passive Perception 10",Languages:"Understands Common but can't speak",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Slam. Melee Attack Roll: +3, reach 5 ft. Hit: 2 Necrotic damage.
Lone crawling claws can continue killing sprees they perpetrated in life. Some
recklessly attack the living, while others pursue specific victims. In rare cases,
a crawling claw wreaks mayhem while the rest of its body still lives, with the
original creature potentially unaware of its severed hand's crimes.`}]},{slug:"crocodile",name:"Crocodile",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:10,mod:0,save:0},con:{score:13,mod:1,save:3},int:{score:2,mod:4,save:4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:3,save:3}},fields:{AC:"12",HP:"13 (2d10 + 2)",Speed:"20 ft., Swim 30 ft.",Skills:"Stealth +2",Senses:"Passive Perception 10",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:"Hold Breath. The crocodile can hold its breath for 1 hour."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage.
If the target is Medium or smaller, it has the Grappled condition
(escape DC 12). While Grappled, the target has the Restrained
condition.`}]},{slug:"cultist",name:"Cultist",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:11,mod:0,save:0},dex:{score:12,mod:1,save:1},con:{score:10,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"9 (2d8)",Speed:"30 ft.",Skills:"Deception +2, Religion +2",Gear:"Leather Armor, Sickle",Senses:"Passive Perception 10",Languages:"Common",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Ritual Sickle. Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing
damage plus 1 Necrotic damage.
Cultists devote themselves to their faith's leaders and otherworldly masters.
While this zeal grants cultists no magical powers, it gives them remarkable
resolve in the face of threats. Cultists perform much of a cult's mundane work,
which might include evangelism, criminal acts, or serving as sacrifices.`}]},{slug:"cultist-fanatic",name:"Cultist Fanatic",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:11,mod:0,save:0},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:4},cha:{score:13,mod:1,save:1}},fields:{AC:"13",HP:"44 (8d8 +8)",Speed:"30 ft.",Skills:"Deception +3, Persuasion +3, Religion +2",Gear:"Holy Symbol, Leather Armor",Senses:"Passive Perception 12",Languages:"Common",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Pact Blade. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing
damage plus 7 (2d6) Necrotic damage.
Spellcasting. The cultist casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 12, +4 to hit with
spell attacks):
At Will: Light, Thaumaturgy
2/Day: Command
1/Day: Hold Person`},{title:"BONUS ACTIONS",text:`Spiritual Weapon (2/Day). The cultist casts the Spiritual Weapon
spell, using the same spellcasting ability as Spellcasting.
Cultist fanatics lead small cults or cells within larger cults. They're privy to
more of a cult's mysteries than lower-ranking cultists are, granting them access
to magical powers from their patrons.`}]},{slug:"cultist-hierophant",name:"Cultist Hierophant",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:14,mod:2,save:2},dex:{score:18,mod:4,save:4},con:{score:18,mod:4,save:4},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:7},cha:{score:20,mod:5,save:9}},fields:{AC:"16",HP:"144 (17d8 + 68)",Speed:"30 ft.",Skills:"Perception +7, Persuasion +9, Religion +5",Gear:"Breastplate, Holy Symbol",Senses:"Passive Perception 17",Languages:"Celestial, Common",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The cultist makes three attacks, using Pact Blade or
Radiant Ray in any combination.
Pact Blade. Melee Attack Roll: +9, reach 5 ft. Hit: 12 (2d6 + 5) Slashing
damage plus 18 (4d8) Radiant damage.
Radiant Ray. Ranged Attack Roll: +9, range 120 ft. Hit: 31 (4d12 + 5)
Radiant damage.
Spellcasting. The cultist casts one of the following spells, using
Charisma as the spellcasting ability (spell save DC 17):
At will: Thaumaturgy
1/day each: Jallarzi's Storm of Radiance (level 7 version), Mass
Suggestion
Cultist  hierophants  are  leaders  who  oversee the lives  of  their  underlings,
dictate the edicts of the cult, and interpret their patron's will. They possess
supernatural powers gained from the cult's patron, supernatural sources, or
the power of their own fanaticism. These leaders know their cult's deepest
secrets and often control strange relics, mystical sites, and monstrous servants.`}]},{slug:"cyclops-oracle",name:"Cyclops Oracle",meta:"Giant Huge, Chaotic Neutral",type:"Giant",subtype:"",size:"Huge",alignment:"Chaotic Neutral",abilities:{str:{score:22,mod:6,save:6},dex:{score:11,mod:0,save:0},con:{score:20,mod:5,save:9},int:{score:16,mod:3,save:3},wis:{score:18,mod:4,save:8},cha:{score:10,mod:0,save:0}},fields:{AC:"16",HP:"207 (18d12 + 90)",Speed:"40 ft.",Skills:"History +11, Perception +12",Senses:"Truesight 30 ft., Passive Perception 22",Languages:"Giant",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The cyclops makes three attacks, using Radiant Strike
or Flash of Light in any combination.
Radiant Strike. Melee Attack Roll: +10, reach 10 ft. Hit: 22 (3d10 + 6)
Radiant damage.
Flash of Light. Ranged Attack Roll: +10, range 120 ft. Hit: 17 (2d10 + 6)
Radiant damage, and the target has Disadvantage on attack rolls
until the end of the cyclops's next turn.
Spellcasting. The cyclops casts one of the following spells, requiring
no Material components and using Wisdom as the spellcasting
ability (spell save DC 16):
2/day each: Arcane Eye, Detect Magic,
1/day: Legend Lore`},{title:"REACTIONS",text:`Portent (Recharge 4–6). Trigger: The cyclops or an ally it can see
makes a D20 Test. Response: The cyclops rolls 1d20 and chooses
whether to use that roll in place of the d20 rolled for the D20 Test.
Cyclops oracles gaze through history to learn hidden truths. Many share these
secrets with those who aid them in correcting the mistakes of the past.`}]},{slug:"cyclops-sentry",name:"Cyclops Sentry",meta:"Giant Huge, Chaotic Neutral",type:"Giant",subtype:"",size:"Huge",alignment:"Chaotic Neutral",abilities:{str:{score:22,mod:6,save:6},dex:{score:11,mod:0,save:0},con:{score:20,mod:5,save:5},int:{score:8,mod:-1,save:-1},wis:{score:6,mod:-2,save:-2},cha:{score:10,mod:0,save:0}},fields:{AC:"14",HP:"138 (12d12 + 60)",Speed:"40 ft.",Senses:"Passive Perception 8",Languages:"Giant",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The cyclops makes two attacks, using Stone Club or
Rock in any combination.
Stone Club. Melee Attack Roll: +9, reach 10 ft. Hit: 16 (3d6 + 6)
Bludgeoning damage. If the target is a Huge or smaller creature, it
has the Prone condition.
Rock. Ranged Attack Roll: +9, range 30/120 ft. Hit: 22 (3d10 + 6)
Bludgeoning damage.`},{title:"REACTIONS",text:`Limited Foresight (Recharge 6). Trigger: A creature the cyclops can
see makes an attack roll against it. Response: The cyclops imposes
Disadvantage on the roll, and the cyclops gains Advantage on attack
rolls against the target until the end of the cyclops's next turn.
Most cyclops sentries serve their divine progenitors and oppose those who
would tamper with fate.`}]},{slug:"dao",name:"Dao",meta:"Elemental (Genie) Large, Neutral",type:"Elemental",subtype:"Genie",size:"Large",alignment:"Neutral",abilities:{str:{score:23,mod:6,save:6},dex:{score:12,mod:1,save:5},con:{score:24,mod:7,save:7},int:{score:12,mod:1,save:1},wis:{score:13,mod:1,save:5},cha:{score:18,mod:4,save:4}},fields:{AC:"18",HP:"200 (16d10 + 112)",Speed:"30 ft., Burrow 30 ft., Fly 30 ft. (hover)",Immunities:"Petrified",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Primordial (Terran)",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Earth Glide. The dao can burrow through nonmagical, unworked
earth and stone. While doing so, the dao doesn't disturb the
material it moves through.
Elemental Restoration. If the dao dies outside the Elemental Plane
of Earth, its body dissolves into dirt, and it gains a new body in 1d4
days, reviving with all its Hit Points somewhere on the Plane of
Earth.
Magic Resistance. The dao has Advantage on saving throws against
spells and other magical effects.
Wishes. The dao has a 30 percent chance of knowing the Wish spell.
If the dao knows it, the dao can cast it only on behalf of a non-genie
creature who communicates a wish in a way the dao can
understand. If the dao casts the spell for the creature, the dao
suffers none of the spell's stress. Once the dao has cast it three
times, the dao can't do so again for 365 days.`},{title:"ACTIONS",text:`Multiattack. The dao makes three Earthen Maul attacks or two Earth
Burst attacks.
Earthen Maul. Melee Attack Roll: +10, reach 5 ft. Hit: 20 (4d6 + 6)
Bludgeoning damage. If the target is a Large or smaller creature, it
has the Prone condition.
Earth Burst. Ranged Attack Roll: +10, range 120 ft. Hit: 15 (2d8 + 6)
Bludgeoning damage. Hit or Miss: Earth explodes from the target's
space, creating the following effect. Dexterity Saving Throw: DC 16,
each creature in a 10-foot Emanation originating from and including
the target. Failure: 10 (3d6) Thunder damage.
Spellcasting. The dao casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 16):
At will: Detect Evil and Good, Detect Magic, Stone Shape
1/day each: Gaseous Form, Invisibility, Move Earth, Passwall, Plane
Shift, Tongues, Wall of Stone`}]},{slug:"darkmantle",name:"Darkmantle",meta:"Aberration Small, Unaligned",type:"Aberration",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"11",HP:"22 (5d6 + 5)",Speed:"10 ft., Fly 30 ft.",Skills:"Stealth +3",Senses:"Blindsight 60 ft., Passive Perception 10",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Crush. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning
damage, and the darkmantle attaches to the target. If the target is a
Medium or smaller creature and the darkmantle had Advantage on
the attack roll, it covers the target, which has the Blinded condition
and is suffocating while the darkmantle is attached in this way.
While attached to a target, the darkmantle can attack only the
target but has Advantage on its attack rolls. Its Speed becomes 0, it
can't benefit from any bonus to its Speed, and it moves with the
target. A creature can take an action to try to detach the darkmantle
from itself, doing so with a successful DC 13 Strength (Athletics)
check. On its turn, the darkmantle can detach itself by using 5 feet
of movement.
Darkness Aura (1/Day). Magical Darkness fills a 15-foot Emanation
originating from the darkmantle. This effect lasts while the
darkmantle maintains Concentration on it, up to 10 minutes.
Darkvision can't penetrate this area, and no light can illuminate it.
Unnatural  subterranean  hunters,  darkmantles  veil  themselves  in  magical
shadows and use their bizarre anatomies to disguise themselves as stalactites.
When prey passes below, lurking darkmantles drop and unfurl their webbed
tentacles, attempting to blind, suffocate, or crush their victims. Darkmantles
share similarities with piercers and ropers and often hunt near those monsters.
Scholars have attempted to establish a shared origin or life cycle between those
creatures,  but  their  efforts  are  thwarted  by  those  monsters'  supernatural
physiologies and deadly natures.`}]},{slug:"death-cultist",name:"Death Cultist",meta:"Humanoid Medium or Small, Neutral Evil",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:18,mod:4,save:7},int:{score:12,mod:1,save:1},wis:{score:16,mod:3,save:6},cha:{score:14,mod:2,save:2}},fields:{AC:"17",HP:"127 (15d8 + 60)",Speed:"30 ft.",Skills:"Insight +6, Perception +6, Religion +4",Gear:"Splint Armor",Senses:"Passive Perception 16",Languages:"Common",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The cultist makes three attacks, using Dread Scythe or
Deathly Ray in any combination.
Dread Scythe. Melee Attack Roll: +7, reach 10 ft. Hit: 9 (1d10 + 4)
Slashing damage plus 11 (2d10) Necrotic damage, and the target
can't regain Hit Points until the end of its next turn.
Deathly Ray. Ranged Attack Roll: +6, range 120 ft. Hit: 22 (4d10)
Necrotic damage.
Spellcasting. The cultist casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 14):
At will: Speak with Dead, Thaumaturgy`},{title:"BONUS ACTIONS",text:`Spirit Wail (Recharge 5–6). Wisdom Saving Throw: DC 14, each
creature in a 20-foot Emanation originating from the cultist. Failure:
14 (4d6) Psychic damage, and the target has the Frightened
condition until the end of its next turn. Success: Half damage only.
Death cultists revel in nihilistic forces, embracing them as paths to undeath,
multiversal  purity,  or  entropic  inevitability.  These  cultists  serve  powerful
undead beings, apocalyptic prophecies, or immortals with power over death,
such as Acererak, Kyuss, Orcus, Vecna, or Wee Jas.`}]},{slug:"death-dog",name:"Death Dog",meta:"Monstrosity Medium, Neutral Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:3,mod:-4,save:-4},wis:{score:13,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"12",HP:"39 (6d8 + 12)",Speed:"40 ft.",Skills:"Perception +5, Stealth +4",Immunities:"Blinded, Charmed, Deafened, Frightened, Stunned, Unconscious",Senses:"Darkvision 120 ft., Passive Perception 15",Languages:"—",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The death dog makes two Bite attacks.
Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage.
If the target is a creature, it is subjected to the following effect.
Constitution Saving Throw: DC 12. First Failure: The target has the
Poisoned condition. While Poisoned, the target's Hit Point maximum
doesn't return to normal when finishing a Long Rest, and it repeats
the save every 24 hours that elapse, ending the effect on itself on a
success. Subsequent Failures: The Poisoned target's Hit Point
maximum decreases by 5 (1d10).`}]},{slug:"death-knight",name:"Death Knight",meta:"Undead Medium or Small, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Chaotic Evil",abilities:{str:{score:20,mod:5,save:5},dex:{score:11,mod:0,save:6},con:{score:20,mod:5,save:5},int:{score:12,mod:1,save:1},wis:{score:16,mod:3,save:9},cha:{score:18,mod:4,save:4}},fields:{AC:"20",HP:"199 (21d8 + 105)",Speed:"30 ft.",Immunities:"Necrotic, Poison; Exhaustion, Frightened, Poisoned",Senses:"Darkvision 120 ft., Passive Perception 13",Languages:"Abyssal, Common",CR:"17 (XP 18 000; PB +6)"},cr:"17 (XP 18 000; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day). If the death knight fails a saving throw, it
can choose to succeed instead.
Magic Resistance. The death knight has Advantage on saving throws
against spells and other magical effects.
Marshal Undead. Undead creatures of the death knight's choice
(excluding itself) in a 60-foot Emanation originating from it have
Advantage on attack rolls and saving throws. It can't use this trait if it
has the Incapacitated condition.
Undead Restoration. If the death knight is destroyed before it atones for
its evil, it gains a new body in 1d10 days, reviving with all its Hit Points.
The new body appears in a location significant to the death knight.`},{title:"ACTIONS",text:`Multiattack. The death knight makes three Dread Blade attacks.
Dread Blade. Melee Attack Roll: +11, reach 5 ft. Hit: 12 (2d6 + 5) Slashing
damage plus 13 (3d8) Necrotic damage.
Hellflre Orb (Recharge 5–6). Dexterity Saving Throw: DC 18, each creature
in a 20-foot-radius Sphere centered on a point the death knight can see
within 120 feet. Failure: 35 (10d6) Fire damage plus 35 (10d6) Necrotic
damage. Success: Half damage.
Spellcasting. The death knight casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting ability
(spell save DC 18):
At will: Command, Phantom Steed
2/day each: Destructive Wave (Necrotic), Dispel Magic`},{title:"REACTIONS",text:`Parry. Trigger: The death knight is hit by a melee attack roll while holding
a weapon. Response: The death knight adds 6 to its AC against that
attack, possibly causing it to miss.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3. Immediately after another creature's turn, the
death knight can expend a use to take one of the following actions. The
death knight regains all expended uses at the start of each of its turns.
Dread Authority. The death knight uses Spellcasting to cast Command.
The death knight can't take this action again until the start of its next
turn.
Fell Word. Constitution Saving Throw: DC 18, one creature the death
knight can see within 120 feet. Failure: 17 (5d6) Necrotic damage, and the
target's Hit Point maximum decreases by an amount equal to the
damage taken. Failure or Success: The death knight can't take this action
again until the start of its next turn.
Lunge. The death knight moves up to half its Speed, and it makes one
Dread Blade attack.
Death knights are deadly combatants and domineering commanders with grim histories. Some strive to end the curses that doom them to undeath, though their
selfish souls eternally shackle them to their fates. Others, like the infamous death knight Lord Soth, brood in dismal ruins for centuries, rousing themselves to action
only when something reignites their deathless evil.`}]},{slug:"death-knight-aspirant",name:"Death Knight Aspirant",meta:"Undead Medium or Small, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Chaotic Evil",abilities:{str:{score:20,mod:5,save:5},dex:{score:10,mod:0,save:4},con:{score:18,mod:4,save:4},int:{score:10,mod:0,save:0},wis:{score:12,mod:1,save:5},cha:{score:16,mod:3,save:3}},fields:{AC:"20",HP:"178 (21d8 + 84)",Speed:"30 ft.",Immunities:"Necrotic, Poison; Exhaustion, Frightened, Poisoned",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Abyssal, Common",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Magic Resistance. The aspirant has Advantage on saving throws
against spells and other magical effects.
Marshal Undead. Undead creatures of the aspirant's choice
(excluding itself) in a 60-foot Emanation originating from it have
Advantage on attack rolls and saving throws. It can't use this trait if
it has the Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The aspirant makes three Dread Blade attacks.
Dread Blade. Melee Attack Roll: +9, reach 5 ft. Hit: 14 (2d8 + 5)
Slashing damage plus 10 (3d6) Necrotic damage.
Hellflre Orb (Recharge 5–6). Dexterity Saving Throw: DC 15, each
creature in a 20-foot-radius Sphere centered on a point the aspirant
can see within 120 feet of itself. Failure: 21 (6d6) Fire damage plus 21
(6d6) Necrotic damage. Success: Half damage.
Spellcasting. The aspirant casts one of the following spells, using
Charisma as the spellcasting ability (spell save DC 15):
At will: Phantom Steed
1/day each: Destructive Wave (Necrotic), Dispel Magic`},{title:"REACTIONS",text:`Parry. Trigger: The aspirant is hit by a melee attack roll while holding
a weapon. Response: The aspirant adds 4 to its AC against that
attack, possibly causing it to miss.
When the leader of a villainous order rises as a death knight, their wicked
devotees might join them in their cursed existence as death knight aspirants.
These followers bear a measure of their leader's power and serve as they did in
life, obediently following the death knight's decrees and heralding its terrible
will.`}]},{slug:"death-slaad",name:"Death Slaad",meta:"Aberration Medium, Chaotic Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:20,mod:5,save:5},dex:{score:15,mod:2,save:2},con:{score:19,mod:4,save:4},int:{score:15,mod:2,save:2},wis:{score:10,mod:0,save:0},cha:{score:19,mod:4,save:4}},fields:{AC:"18",HP:"178 (21d8 + 84)",Speed:"40 ft.",Skills:"Arcana +6, Perception +8",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Senses:"Blindsight 60 ft., Darkvision 60 ft., Passive Perception 18",Languages:"Common, Slaad; telepathy 60 ft.",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Magic Resistance. The slaad has Advantage on saving throws
against spells and other magical effects.
Regeneration. The slaad regains 10 Hit Points at the start of each of
its turns if it has at least 1 Hit Point.`},{title:"ACTIONS",text:`Multiattack. The slaad makes two Chaos Blade attacks.
Chaos Blade. Melee Attack Roll: +9, reach 10 ft. Hit: 11 (1d12 + 5)
Slashing damage plus 10 (3d6) Necrotic damage. Until the start of
the slaad's next turn, the target has a condition determined by
rolling 1d4: on a 1, Charmed; on a 2, Frightened; on a 3, Poisoned; or
on a 4, Incapacitated.
Spellcasting. The slaad casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 16):
At will: Detect Magic, Detect Thoughts, Invisibility (self only), Mage
Hand, Major Image
1/day each: Blight (level 8 version), Cloudkill (level 6 version), Fly,
Plane Shift, Tongues`},{title:"BONUS ACTIONS",text:`Shape-Shift. The slaad shape-shifts into a Small or Medium
Humanoid, or it returns to its true form. Other than its size, its game
statistics are the same in each form. Any equipment it is wearing or
carrying isn't transformed.
Slaad lords create death slaadi by infusing gray slaadi with a portion of their
chaotic energy. When groups of slaadi act deliberately, death slaadi are often
behind their designs.`}]},{slug:"death-tyrant",name:"Death Tyrant",meta:"Undead (Beholder) Large, Lawful Evil",type:"Undead",subtype:"Beholder",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:7},int:{score:19,mod:4,save:4},wis:{score:15,mod:2,save:7},cha:{score:19,mod:4,save:4}},fields:{AC:"19",HP:"195 (26d10 + 52)",Speed:"5 ft., Fly 40 ft. (hover)",Skills:"Perception +12",Immunities:"Poison; Charmed, Exhaustion, Paralyzed, Petrified, Poisoned, Prone",Senses:"Darkvision 120 ft., Passive Perception 22",Languages:"Deep Speech, Undercommon",CR:"14 (XP 11 500, or 13 000 in Lair; PB +5)"},cr:"14 (XP 11 500, or 13 000 in Lair; PB +5)",crValue:"14",xp:11500,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the death tyrant fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The death tyrant uses Eye Rays three times.
Bite. Melee Attack Roll: +9, reach 5 ft. Hit: 13 (2d8 + 4) Piercing damage.
Eye Rays. The death tyrant randomly shoots one of the following magical
rays at a target it can see within 120 feet of itself (roll 1d10; reroll if the
death tyrant has already used that ray during this turn):
1: Charm Ray. Wisdom Saving Throw: DC 17. Failure: 13 (3d8) Psychic
damage, and the target has the Charmed condition for 1 hour or until it
takes damage. Success: Half damage only.
2: Paralyzing Ray. Constitution Saving Throw: DC 17. Failure: The target
has the Paralyzed condition and repeats the save at the end of each of
its turns, ending the effect on itself on a success. After 1 minute, it
succeeds automatically.
3: Fear Ray. Wisdom Saving Throw: DC 17. Failure: 10 (3d6) Psychic
damage, and the target has the Frightened condition until the end of its
next turn. Success: Half damage only.
4: Slowing Ray. Constitution Saving Throw: DC 17. Failure: 18 (4d8)
Necrotic damage. Until the end of the target's next turn, the target can't
take Reactions; its Speed is halved; and it can take either an action or a
Bonus Action on its turn, not both. Success: Half damage only.
5: Enervation Ray. Constitution Saving Throw: DC 17. Failure: 16 (3d10)
Poison damage, and the target has the Poisoned condition until the end
of its next turn. While Poisoned, the target can't regain Hit Points.
Success: Half damage only.
6: Telekinetic Ray. Strength Saving Throw: DC 17 (the target succeeds
automatically if it is Gargantuan). Failure: The death tyrant moves the
target up to 30 feet in any direction. The target has the Restrained
condition until the start of the death tyrant's next turn or until the death
tyrant has the Incapacitated condition. The death tyrant can also exert
fine control on objects with this ray, such as manipulating a tool or
opening a door or container.
7: Sleep Ray. Wisdom Saving Throw: DC 17 (the target succeeds
automatically if it is a Construct or an Undead). Failure: The target has
the Unconscious condition for 1 minute. The condition ends if the target
takes damage or a creature within 5 feet of it takes an action to wake it.
8: Petriflcation Ray. Constitution Saving Throw: DC 17. First Failure: The
target has the Restrained condition and repeats the save at the end of
its next turn if it is still Restrained, ending the effect on itself on a
success. Second Failure: The target has the Petrified condition instead of
the Restrained condition.
9: Disintegration Ray. Dexterity Saving Throw: DC 17. Failure: 36 (8d8)
Force damage. If the target is a nonmagical object or a creation of
magical force, a 10-foot Cube of it disintegrates into dust. Success: Half
damage. Failure or Success: If the target is a creature and this damage
reduces it to 0 Hit Points, it disintegrates into dust.
10: Death Ray. Dexterity Saving Throw: DC 17. Failure: 55 (10d10)
Necrotic damage. Success: Half damage. Failure or Success: The target
dies if the ray reduces it to 0 Hit Points.`},{title:"BONUS ACTIONS",text:`Negative Energy Cone. The death tyrant's central eye emits an
imperceptible, magical wave of negative energy in a 150-foot Cone.
Creatures in that area can't regain Hit Points until the start of the death
tyrant's next turn. An intact Humanoid corpse there instantly rises as a
Zombie under the death tyrant's control and takes its turn immediately
after the death tyrant on the same initiative count.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the death tyrant can expend a use to take one of the following actions.
The death tyrant regains all expended uses at the start of each of its turns.
Chomp. The death tyrant makes two Bite attacks.
Glare. The death tyrant uses Eye Rays.`}]},{slug:"deer",name:"Deer",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:11,mod:0,save:0},dex:{score:16,mod:3,save:3},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"4 (1d8)",Speed:"50 ft.",Skills:"Perception +4",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Agile. The deer doesn't provoke an Opportunity Attack when it
moves out of an enemy's reach.`},{title:"ACTIONS",text:`Ram. Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Bludgeoning
damage.`}]},{slug:"demilich",name:"Demilich",meta:"Undead Tiny, Neutral Evil",type:"Undead",subtype:"",size:"Tiny",alignment:"Neutral Evil",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:20,mod:5,save:5},con:{score:10,mod:0,save:6},int:{score:20,mod:5,save:11},wis:{score:17,mod:3,save:9},cha:{score:20,mod:5,save:5}},fields:{AC:"20",HP:"180 (72d4)",Speed:"5 ft., Fly 30 ft. (hover)",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Necrotic, Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned, Prone, Stunned",Senses:"Truesight 120 ft., Passive Perception 13",Languages:"None",CR:"18 (XP 20 000, or 22 000 in Lair; PB +6)"},cr:"18 (XP 20 000, or 22 000 in Lair; PB +6)",crValue:"18",xp:2e4,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the demilich fails a
saving throw, it can choose to succeed instead.
Undead Restoration. If the demilich is destroyed, it reforms and
regains all its Hit Points in 1d10 days unless a Wish spell is cast on its
remains.`},{title:"ACTIONS",text:`Multiattack. The demilich makes three Necrotic Burst attacks.
Necrotic Burst. Melee or Ranged Attack Roll: +11, reach 5 ft. or range
120 ft. Hit: 24 (7d6) Necrotic damage.
Howl (Recharge 5–6). Constitution Saving Throw: DC 19, each creature
in a 30-foot Emanation originating from the demilich. Failure: 70
(20d6) Psychic damage. Failure or Success: The target has the
Frightened condition until the start of the demilich's next turn.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the demilich can expend a use to take one of the
following actions. The demilich regains all expended uses at the start of
each of its turns.
Energy Drain. Constitution Saving Throw: DC 19, one creature the
demilich can see within 120 feet. Failure: The target's Hit Point
maximum decreases by 14 (4d6). Failure or Success: The demilich
can't take this action again until the start of its next turn.
Grave-Dust Flight. The demilich flies up to its Fly Speed, shedding
grave dust. Each creature within 5 feet of the demilich as it moves is
targeted once by the following effect. Constitution Saving Throw: DC
19. Failure: The target has the Blinded condition until the end of the
demilich's next turn. Failure or Success: The demilich can't take this
action again until the start of its next turn.
Necrosis. The demilich makes one Necrotic Burst attack.
A demilich is a skull harboring the remnants of a lich's wicked essence. If the
burden of immortality overwhelms a lich, its consciousness turns inward as its
body rots away. But if its remains are disturbed, a demilich rises. Demiliches
usually appear as skulls adorned with gems or arcane sigils.`}]},{slug:"deva",name:"Deva",meta:"Celestial (Angel) Medium, Lawful Good",type:"Celestial",subtype:"Angel",size:"Medium",alignment:"Lawful Good",abilities:{str:{score:18,mod:4,save:4},dex:{score:18,mod:4,save:4},con:{score:18,mod:4,save:4},int:{score:17,mod:3,save:3},wis:{score:20,mod:5,save:9},cha:{score:20,mod:5,save:9}},fields:{AC:"17",HP:"229 (27d8 + 108)",Speed:"30 ft., Fly 90 ft. (hover)",Skills:"Insight +9, Perception +9",Resistances:"Radiant",Immunities:"Charmed, Exhaustion, Frightened",Senses:"Darkvision 120 ft., Passive Perception 19",Languages:"All; telepathy 120 ft.",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Exalted Restoration. If the deva dies outside Mount Celestia, its
body disappears, and it gains a new body instantly, reviving with all
its Hit Points somewhere in Mount Celestia.
Magic Resistance. The deva has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The deva makes two Holy Mace attacks.
Holy Mace. Melee Attack Roll: +8, reach 5 ft. Hit: 7 (1d6 + 4)
Bludgeoning damage plus 18 (4d8) Radiant damage.
Spellcasting. The deva casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 17):
At Will: Detect Evil and Good, Shapechange (Beast or Humanoid form
only, no Temporary Hit Points gained from the spell, and no
Concentration or Temporary Hit Points required to maintain the
spell)
1/Day Each: Commune, Raise Dead`},{title:"BONUS ACTIONS",text:`Divine Aid (2/Day). The deva casts Cure Wounds, Lesser Restoration,
or Remove Curse, using the same spellcasting ability as Spellcasting.`}]},{slug:"dire-wolf",name:"Dire Wolf",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:3,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:2,save:2}},fields:{AC:"14",HP:"22 (3d10 + 6)",Speed:"50 ft.",Skills:"Perception +5, Stealth +4",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Pack Tactics. The wolf has Advantage on an attack roll against a
creature if at least one of the wolf's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing
damage. If the target is a Large or smaller creature, it has the Prone
condition.`}]},{slug:"dire-worg",name:"Dire Worg",meta:"Fey Huge, Neutral Evil",type:"Fey",subtype:"",size:"Huge",alignment:"Neutral Evil",abilities:{str:{score:22,mod:6,save:6},dex:{score:14,mod:2,save:6},con:{score:18,mod:4,save:4},int:{score:7,mod:-2,save:-2},wis:{score:16,mod:3,save:7},cha:{score:8,mod:-1,save:-1}},fields:{AC:"16",HP:"147 (14d12 + 56)",Speed:"50 ft.",Skills:"Perception +11",Senses:"Darkvision 120 ft., Passive Perception 21",Languages:"Goblin, Sylvan, Worg",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Magic Resistance. The worg has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The worg makes three Bite attacks.
Bite. Melee Attack Roll: +10, reach 5 ft. Hit: 15 (2d8 + 6) Piercing
damage plus 7 (2d6) Poison damage, and the target has the
Poisoned condition until the start of the worg's next turn. While
Poisoned, the target can't regain Hit Points.
Dreadful Howl (Recharge 5–6). Wisdom Saving Throw: DC 16, each
creature within 30 feet that isn't a worg. Failure: 36 (8d8) Psychic
damage, and the target has the Frightened condition until the start
of the worg's next turn. Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Warp Step. The worg teleports, along with a willing creature of its
choice within 5 feet of it, up to 30 feet to an unoccupied space it can
see.`}]},{slug:"displacer-beast",name:"Displacer Beast",meta:"Monstrosity Large, Lawful Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"76 (9d10 + 27)",Speed:"40 ft.",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Understands Sylvan but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Avoidance. If the displacer beast is subjected to an effect that allows
it to make a saving throw to take only half damage, it instead takes
no damage if it succeeds on the save and half damage if it fails. It
can't use this trait if it has the Incapacitated condition.
Displacement. Attack rolls against the displacer beast have
Disadvantage, since it projects an illusion that makes it appear to be
near its actual location. This trait is suppressed while the displacer
beast has the Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The displacer beast makes one Rend attack and one
Tentacle attack.
Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Slashing
damage. If target is a Large or smaller creature, it has the Prone
condition.
Tentacle. Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Piercing
damage.`}]},{slug:"djinni",name:"Djinni",meta:"Elemental (Genie) Large, Chaotic Good",type:"Elemental",subtype:"Genie",size:"Large",alignment:"Chaotic Good",abilities:{str:{score:21,mod:5,save:5},dex:{score:15,mod:2,save:6},con:{score:22,mod:6,save:6},int:{score:15,mod:2,save:2},wis:{score:16,mod:3,save:7},cha:{score:20,mod:5,save:5}},fields:{AC:"17",HP:"218 (19d10 + 114)",Speed:"30 ft., Fly 90 ft. (hover)",Immunities:"Lightning, Thunder",Senses:"Darkvision 120 ft., Passive Perception 13",Languages:"Primordial (Auran)",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Elemental Restoration. If the djinni dies outside the Elemental Plane of
Air, its body dissolves into mist, and it gains a new body in 1d4 days,
reviving with all its Hit Points somewhere on the Plane of Air.
Magic Resistance. The djinni has Advantage on saving throws against
spells and other magical effects.
Wishes. The djinni has a 30 percent chance of knowing the Wish spell. If
the djinni knows it, the djinni can cast it only on behalf of a non-genie
creature who communicates a wish in a way the djinni can understand.
If the djinni casts the spell for the creature, the djinni suffers none of the
spell's stress. Once the djinni has cast it three times, the djinni can't do
so again for 365 days.`},{title:"ACTIONS",text:`Multiattack. The djinni makes three attacks, using Storm Blade or Storm
Bolt in any combination.
Storm Blade. Melee Attack Roll: +9, reach 5 ft. Hit: 12 (2d6 + 5) Slashing
damage plus 7 (2d6) Lightning damage.
Storm Bolt. Ranged Attack Roll: +9, range 120 ft. Hit: 13 (3d8) Thunder
damage. If the target is a Large or smaller creature, it has the Prone
condition.
Create Whirlwind. The djinni conjures a whirlwind at a point it can see
within 120 feet. The whirlwind fills a 20-foot-radius, 60-foot-high Cylinder
centered on that point. The whirlwind lasts until the djinni's
Concentration on it ends. The djinni can move the whirlwind up to 20
feet at the start of each of its turns. Whenever the whirlwind enters a
creature's space or a creature enters the whirlwind, that creature is
subjected to the following effect. Strength Saving Throw: DC 17 (a creature
makes this save only once per turn, and the djinni is unaffected). Failure:
While in the whirlwind, the target has the Restrained condition and
moves with the whirlwind. At the start of each of its turns, the
Restrained target takes 21 (6d6) Thunder damage. At the end of each of
its turns, the target repeats the save, ending the effect on itself on a
success.
Spellcasting. The djinni casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 17):
At Will: Detect Evil and Good, Detect Magic
2/Day Each: Create Food and Water (can create wine instead of water),
Tongues, Wind Walk
1/Day Each: Creation, Gaseous Form, Invisibility, Major Image, Plane Shift`}]},{slug:"doppelganger",name:"Doppelganger",meta:"Monstrosity Medium, Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:11,mod:0,save:0},dex:{score:18,mod:4,save:4},con:{score:14,mod:2,save:2},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:14,mod:2,save:2}},fields:{AC:"14",HP:"52 (8d8 + 16)",Speed:"30 ft.",Skills:"Deception +6, Insight +3",Immunities:"Charmed",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Common plus three other languages",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The doppelganger makes two Slam attacks and uses
Unsettling Visage if available.
Slam. Melee Attack Roll: +6 (with Advantage during the first round of
each combat), reach 5 ft. Hit: 11 (2d6 + 4) Bludgeoning damage.
Read Thoughts. The doppelganger casts Detect Thoughts, requiring
no spell components and using Charisma as the spellcasting ability
(spell save DC 12).
Unsettling Visage (Recharge 6). Wisdom Saving Throw: DC 12, each
creature in a 15-foot Emanation originating from the doppelganger
that can see the doppelganger. Failure: The target has the
Frightened condition and repeats the save at the end of each of its
turns, ending the effect on itself on a success. After 1 minute, it
succeeds automatically.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The doppelganger shape-shifts into a Medium or Small
Humanoid, or it returns to its true form. Its game statistics, other
than its size, are the same in each form. Any equipment it is wearing
or carrying isn't transformed.
Doppelgangers are supernatural beings with the ability to shape-shift into any
humanlike  form.  Their  mind-reading  abilities  aid  them  in  creating  near-
perfect disguises and plucking secrets from unguarded minds. Occasionally,
doppelgangers  use  their  shape-shifting  ability  in  more  overt  ways,
transforming into unsettling forms to frighten foes.`}]},{slug:"dracolich",name:"Dracolich",meta:"Undead Huge or Gargantuan, Lawful Evil",type:"Undead",subtype:"",size:"Huge",alignment:"or Gargantuan, Lawful Evil",abilities:{str:{score:25,mod:7,save:7},dex:{score:10,mod:0,save:6},con:{score:23,mod:6,save:6},int:{score:19,mod:4,save:4},wis:{score:15,mod:2,save:8},cha:{score:21,mod:5,save:5}},fields:{AC:"20",HP:"225 (18d12 + 108)",Speed:"40 ft., Burrow 30 ft., Fly 80 ft.",Skills:"Perception +14, Stealth +6",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception 24",Languages:"Common, Draconic",CR:"17 (XP 18 000, or 20 000 in Lair; PB +6)"},cr:"17 (XP 18 000, or 20 000 in Lair; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dracolich fails a
saving throw, it can choose to succeed instead.
Life Suppression. Creatures within 60 feet of the dracolich can't regain
Hit Points.
Magic Resistance. The dracolich has Advantage on saving throws against
spells and other magical effects.
Soul Gem. The dracolich has a magical gem. If the dracolich is destroyed
while the gem is on the same plane of existence as it, the dracolich gains
a new body in 1d20 days, regaining all its Hit Points and appearing within
5 feet of the gem. The gem is a Tiny object that has AC 20; HP 50; and
Immunity to Necrotic, Poison, and Psychic damage. The gem regains all
its Hit Points at the end of every turn, but it turns to dust if reduced to 0
Hit Points. If the gem is destroyed, the dracolich can create a new one by
completing an 8-hour ritual using a gem worth 1,000+ GP and by
expending 5,000 GP, which the ritual consumes.`},{title:"ACTIONS",text:`Multiattack. The dracolich makes three Rend attacks. It can replace one
attack with a use of Spellcasting to cast Ray of Sickness (level 2 version).
Rend. Melee Attack Roll: +13, reach 10 ft. Hit: 18 (2d10 + 7) Slashing
damage plus 4 (1d8) Necrotic damage.
Necrotic Breath (Recharge 5–6). Constitution Saving Throw: DC 20, each
creature in a 60-foot Cone. Failure: 52 (8d12) Necrotic damage. Success:
Half damage.
Spellcasting. The dracolich casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 19, +11 to hit with spell attacks):
At will: Detect Magic, Ray of Sickness (level 2 version)
1/day each: Create Undead (level 8 version), Finger of Death`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's
turn, the dracolich can expend a use to take one of the following actions. The
dracolich regains all expended uses at the start of each of its turns.
Pounce. The dracolich moves up to half its Speed, and it makes one Rend
attack.
Sickening Ray. The dracolich uses Spellcasting to cast Ray of Sickness
(level 2 version). The dracolich can't take this action again until the start
of its next turn.
Terrifying Presence. Wisdom Saving Throw: DC 19, each creature in a 30-
foot Emanation originating from the dracolich. Failure: 11 (2d10) Psychic
damage, and the target has the Frightened condition until the end of its
next turn. Failure or Success: The dracolich can't take this action again
until the start of its next turn.`}]},{slug:"draconic-spirit",name:"Draconic Spirit",meta:"Dragon Large, Neutral",type:"Dragon",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:17,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:14,mod:2,save:2}},fields:{AC:"14 + the spell's level",HP:"50 + 10 for each spell level above 5",Speed:"30 ft., Fly 60 ft., Swim 30 ft.",Resistances:"Acid, Cold, Fire, Lightning, Poison",Immunities:"Charmed, Frightened, Poisoned",Senses:"Blindsight 30 ft., Darkvision 60 ft., Passive Perception 12",Languages:"Draconic, understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Shared Resistances. When you summon the spirit, choose one of its
Resistances. You have Resistance to the chosen damage type until
the spell ends.`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of Rend attacks equal to
half the spell's level (round down), and it uses Breath Weapon.
Rend. Melee Attack Roll: Bonus equals your spell attack modifier,
reach 10 feet. Hit:1d6 + 4 + the spell's level Piercing damage.
Breath Weapon. Dexterity Saving Throw: DC equals your spell save
DC, each creature in a 30-foot Cone. Failure: 2d6 damage of a type
this spirit has Resistance to (your choice when you cast the spell).
Success: Half damage.
See Summon Dragon`}]},{slug:"draft-horse",name:"Draft Horse",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:15,mod:2,save:2},int:{score:2,mod:4,save:4},wis:{score:11,mod:0,save:0},cha:{score:7,mod:2,save:2}},fields:{AC:"10",HP:"15 (2d10 + 4)",Speed:"40 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +6, reach 5 ft. Hit: 6 (1d4 + 4) Bludgeoning
damage.`}]},{slug:"dragon-turtle",name:"Dragon Turtle",meta:"Dragon Gargantuan, Neutral",type:"Dragon",subtype:"",size:"Gargantuan",alignment:"Neutral",abilities:{str:{score:25,mod:7,save:7},dex:{score:10,mod:0,save:0},con:{score:20,mod:5,save:11},int:{score:10,mod:0,save:0},wis:{score:12,mod:1,save:7},cha:{score:12,mod:1,save:1}},fields:{AC:"20",HP:"356 (23d20 + 115)",Speed:"20 ft., Swim 50 ft.",Resistances:"Fire",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Draconic, Primordial (Aquan)",CR:"17 (XP 18 000; PB +6)"},cr:"17 (XP 18 000; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes three Bite attacks. It can replace one
attack with a Tail attack.
Bite. Melee Attack Roll: +13, reach 15 ft. Hit: 23 (3d10 + 7) Piercing
damage plus 7 (2d6) Fire damage. Being underwater doesn't grant
Resistance to this Fire damage.
Tail. Melee Attack Roll: +13, reach 15 ft. Hit: 18 (2d10 + 7) Bludgeoning
damage. If the target is a Huge or smaller creature, it has the Prone
condition.
Steam Breath (Recharge 5–6). Constitution Saving Throw: DC 19, each
creature in a 60-foot Cone. Failure: 56 (16d6) Fire damage. Success:
Half damage. Failure or Success: Being underwater doesn't grant
Resistance to this Fire damage.`}]},{slug:"dretch",name:"Dretch",meta:"Fiend (Demon) Small, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Small",alignment:"Chaotic Evil",abilities:{str:{score:12,mod:1,save:1},dex:{score:11,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:5,mod:-3,save:-3},wis:{score:8,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"11",HP:"18 (4d6 + 4)",Speed:"20 ft.",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Abyssal; telepathy 60 ft. (works only with creatures that understand Abyssal)",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Rend. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing
damage.
Fetid Cloud (1/Day). Constitution Saving Throw: DC 11, each creature
in a 10-foot Emanation originating from the dretch. Failure: The
target has the Poisoned condition until the end of its next turn.
While Poisoned, the creature can take either an action or a Bonus
Action on its turn, not both, and it can't take Reactions.
Lone dretches serve other demons or evil magic-users. They are erratic, filthy,
and violent, and they demonstrate little sense of self-preservation.`}]},{slug:"drider",name:"Drider",meta:"Monstrosity Large, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:19,mod:4,save:4},con:{score:18,mod:4,save:4},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"19",HP:"123 (13d10 + 52)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +6, Stealth +10",Senses:"Darkvision 120 ft., Passive Perception 16",Languages:"Elvish, Undercommon",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`ceilings, without needing to make an ability check.
Sunlight Sensitivity. While in sunlight, the drider has Disadvantage
on ability checks and attack rolls.
Web Walker. The drider ignores movement restrictions caused by
webs, and the drider knows the location of any other creature in
contact with the same web.`},{title:"ACTIONS",text:`Multiattack. The drider makes three attacks, using Foreleg or Poison
Burst in any combination.
Foreleg. Melee Attack Roll: +7, reach 10 ft. Hit: 13 (2d8 + 4) Piercing
damage.
Poison Burst. Ranged Attack Roll: +6, range 120 ft. Hit: 13 (3d6 + 3)
Poison damage.`},{title:"BONUS ACTIONS",text:`Magic of the Spider Queen (Recharge 5–6). The drider casts
Darkness, Faerie Fire, or Web, requiring no Material components and
using Wisdom as the spellcasting ability (spell save DC 14).`}]},{slug:"druid",name:"Druid",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:12,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:16,mod:3,save:3},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"44 (8d8 + 8)",Speed:"30 ft.",Skills:"Medicine +5, Nature +3, Perception +5",Gear:"Studded Leather Armor",Senses:"Passive Perception 15",Languages:"Common, Druidic, Sylvan",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The druid makes two attacks, using Vine Staff or
Verdant Wisp in any combination.
Vine Staff. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3)
Bludgeoning damage plus 2 (1d4) Poison damage.
Verdant Wisp. Ranged Attack Roll: +5, range 90 ft. Hit: 10 (3d6)
Radiant damage.
Spellcasting. The druid casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 13):
At will: Druidcraft, Speak with Animals
2/day each: Entangle, Thunderwave
1/day each: Animal Messenger, Longstrider, Moonbeam
Druids use primal magic, traditional teachings, and bonds with animals and
eldritch beings to guard the natural world and heal its ills. These magic-users
might be recluses devoted to a particular land, or they might be part of a
mystic organization.`}]},{slug:"dryad",name:"Dryad",meta:"Fey Medium, Neutral",type:"Fey",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:12,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:14,mod:2,save:2},wis:{score:15,mod:2,save:2},cha:{score:18,mod:4,save:4}},fields:{AC:"16",HP:"22 (5d8)",Speed:"30 ft.",Skills:"Perception +4, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Elvish, Sylvan",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Magic Resistance. The dryad has Advantage on saving throws
against spells and other magical effects.
Speak with Beasts and Plants. The dryad can communicate with
Beasts and Plants as if they shared a language.`},{title:"ACTIONS",text:`Multiattack. The dryad makes one Vine Lash or Thorn Burst attack,
and it can use Spellcasting to cast Charm Monster.
Vine Lash. Melee Attack Roll: +6, reach 10 ft. Hit: 8 (1d8 + 4) Slashing
damage.
Thorn Burst. Ranged Attack Roll: +6, range 60 ft. Hit: 7 (1d6 + 4)
Piercing damage.
Spellcasting. The dryad casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 14):
At Will: Animal Friendship, Charm Monster (lasts 24 hours; ends early
if the dryad casts the spell again), Druidcraft
1/Day Each: Entangle, Pass without Trace`},{title:"BONUS ACTIONS",text:`Tree Stride. If within 5 feet of a Large or bigger tree, the dryad
teleports to an unoccupied space within 5 feet of a second Large or
bigger tree that is within 60 feet of the previous tree.`}]},{slug:"dust-mephit",name:"Dust Mephit",meta:"Elemental Small, Neutral Evil",type:"Elemental",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:5,mod:-3,save:-3},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:9,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"17 (5d6)",Speed:"30 ft., Fly 30 ft.",Skills:"Perception +2, Stealth +4",Vulnerabilities:"Fire",Immunities:"Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Primordial (Auran, Terran)",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Death Burst. The mephit explodes when it dies. Dexterity Saving
Throw: DC 10, each creature in a 5-foot Emanation originating from
the mephit. Failure: 5 (2d4) Bludgeoning damage. Success: Half
damage.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing
damage.
Blinding Breath (Recharge 6). Dexterity Saving Throw: DC 10, each
creature in a 15-foot Cone. Failure: The target has the Blinded
condition until the end of the mephit's next turn.
Sleep (1/Day). The mephit casts the Sleep spell, requiring no spell
components and using Charisma as the spellcasting ability (spell
save DC 10).
Dust mephits are composed of air and fine earth. They are drawn to forsaken
places, and they think everything associated with death is hilarious.`}]},{slug:"eagle",name:"Eagle",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"4 (1d6 + 1)",Speed:"10 ft., Fly 60 ft.",Skills:"Perception +6",Senses:"Passive Perception 16",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Talons. Melee Attack Roll: +4, reach 5 feet. Hit: 4 (1d4 + 2) Slashing
damage.`}]},{slug:"earth-elemental",name:"Earth Elemental",meta:"Elemental Large, Neutral",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:20,mod:5,save:5},dex:{score:8,mod:-1,save:-1},con:{score:20,mod:5,save:5},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"17",HP:"147 (14d10 + 70)",Speed:"30 ft., Burrow 30 ft.",Vulnerabilities:"Thunder",Immunities:"Poison; Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",Senses:"Darkvision 60 ft., Tremorsense 60 ft., Passive Perception 10",Languages:"Primordial (Terran)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Earth Glide. The elemental can burrow through nonmagical,
unworked earth and stone. While doing so, the elemental doesn't
disturb the material it moves through.
Siege Monster. The elemental deals double damage to objects and
structures.`},{title:"ACTIONS",text:`Multiattack. The elemental makes two attacks, using Slam or Rock
Launch in any combination.
Slam. Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Bludgeoning
damage.
Rock Launch. Ranged Attack Roll: +8, range 60 ft. Hit: 8 (1d6 + 5)
Bludgeoning damage. If the target is a Large or smaller creature, it
has the Prone condition.`}]},{slug:"efreeti",name:"Efreeti",meta:"Elemental (Genie) Large, Neutral",type:"Elemental",subtype:"Genie",size:"Large",alignment:"Neutral",abilities:{str:{score:22,mod:6,save:6},dex:{score:12,mod:1,save:1},con:{score:24,mod:7,save:7},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:6},cha:{score:19,mod:4,save:8}},fields:{AC:"17",HP:"212 (17d10 + 119)",Speed:"40 ft., Fly 60 ft. (hover)",Immunities:"Fire",Senses:"Darkvision 120 ft., Passive Perception 12",Languages:"Primordial (Ignan)",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Elemental Restoration. If the efreeti dies outside the Elemental
Plane of Fire, its body dissolves into ash, and it gains a new body in
1d4 days, reviving with all its Hit Points somewhere on the Plane of
Fire.
Magic Resistance. The efreeti has Advantage on saving throws
against spells and other magical effects.
Wishes. The efreeti has a 30 percent chance of knowing the Wish
spell. If the efreeti knows it, the efreeti can cast it only on behalf of a
non-genie creature who communicates a wish in a way the efreeti
can understand. If the efreeti casts the spell for the creature, the
efreeti suffers none of the spell's stress. Once the efreeti has cast it
three times, the efreeti can't do so again for 365 days.`},{title:"ACTIONS",text:`Multiattack. The efreeti makes three attacks, using Heated Blade or
Hurl Flame in any combination.
Heated Blade. Melee Attack Roll: +10, reach 5 ft. Hit: 13 (2d6 + 6)
Slashing damage plus 13 (2d12) Fire damage.
Hurl Flame. Ranged Attack Roll: +8, range 120 ft. Hit: 24 (7d6) Fire
damage.
Spellcasting. The efreeti casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 16):
At Will: Detect Magic, Elementalism
1/Day Each: Gaseous Form, Invisibility, Major Image, Plane Shift,
Tongues, Wall of Fire (level 7 version)`}]},{slug:"elemental-cataclysm",name:"Elemental Cataclysm",meta:"Elemental (Titan) Gargantuan, Chaotic Neutral",type:"Elemental",subtype:"Titan",size:"Gargantuan",alignment:"Chaotic Neutral",abilities:{str:{score:26,mod:8,save:8},dex:{score:19,mod:4,save:11},con:{score:27,mod:8,save:15},int:{score:9,mod:-1,save:-1},wis:{score:14,mod:2,save:9},cha:{score:9,mod:-1,save:6}},fields:{AC:"20",HP:"370 (20d20 + 160)",Speed:"60 ft., Burrow 60 ft., Fly 80 ft. (hover), Swim 80 ft.",Immunities:"Acid, Cold, Fire, Lightning, Poison, Thunder; Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned, Unconscious",Senses:"Truesight 150 ft., Passive Perception 12",Languages:"Primordial",CR:"22 (XP 41 000; PB +7)"},cr:"22 (XP 41 000; PB +7)",crValue:"22",xp:41e3,sections:[{title:"TRAITS",text:`Earth Glide.
Legendary Resistance (4/Day).
Siege Monster.`},{title:"ACTIONS",text:`Multiattack.
Elemental Burst.
Cataclysmic Event (Recharge 4–6).
Control Weather.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3.
Eruption.
Rumbling Movement.

Initiative –1 (9)`}]},{slug:"elemental-cultist",name:"Elemental Cultist",meta:"Humanoid Medium or Small, Chaotic Evil",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:16,mod:3,save:6},int:{score:14,mod:2,save:2},wis:{score:18,mod:4,save:7},cha:{score:12,mod:1,save:1}},fields:{AC:"16",HP:"135 (18d8 + 54)",Speed:"30 ft.",Skills:"Arcana +5, Perception +7, Religion +5",Gear:"Chain Mail",Senses:"Passive Perception 17",Languages:"Common, Primordial",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The cultist makes three attacks, using Elemental Flail or
Elemental Claw in any combination.
Elemental Flail. Melee Attack Roll: +7, reach 5 ft. Hit: 25 (6d6 + 4)
damage of a type chosen by the cultist: Acid, Cold, Fire, Lightning, or
Thunder.
Elemental Claw. Ranged Attack Roll: +7, range 120 ft. Hit: 22 (4d10)
damage of a type chosen by the cultist: Acid, Cold, Fire, Lightning, or
Thunder. If the target is a Medium or smaller creature, the cultist
moves the target up to 10 feet straight toward or away from itself.
Spellcasting. The cultist casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 15):
At will: Elementalism, Mage Hand`},{title:"REACTIONS",text:`Elemental Absorption (1/Day). Trigger: The cultist takes Acid, Cold,
Fire, Lightning, or Thunder damage. Response: The cultist gives itself
Resistance to that instance of damage and gains 10 Temporary Hit
Points.
Elemental cultists harness destructive natural forces to cleanse the world of
civilization  or  prove  the dominance  of  one  element  over  all others.  Such
cultists are aligned with Elemental monsters or wicked immortals such as the
Princes of Elemental Evil or the Elder Elemental Eye.`}]},{slug:"elemental-spirit",name:"Elemental Spirit",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:17,mod:3,save:3},int:{score:4,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:16,mod:3,save:3}},fields:{AC:"11 + the spell's level",HP:"50 + 10 for each spell level above 4",Speed:"40 ft., Burrow 40 ft. (Earth only); Fly 40 ft. (hover; Air only); Swim 40 ft. (Water only)",Resistances:"Acid (Water only), Lightning and Thunder (Air only), Piercing and Slashing (Earth only)",Immunities:"Fire (Fire only), Poison; Exhaustion, Paralyzed, Petrified, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial, understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Amorphous Form (Air, Fire, and Water Only). The spirit can move
through a space as narrow as 1 inch wide without it counting as`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of Slam attacks equal to half
this spell's level (round down).
Slam. Melee Attack Roll: Bonus equals your spell attack modifier,
reach 5 ft. Hit: 1d10 + 4 + the spell's level Bludgeoning (Earth only),
Cold (Water only), Lightning (Air only), or Fire (Fire only) damage.
See Summon Elemental.`}]},{slug:"elephant",name:"Elephant",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:22,mod:6,save:6},dex:{score:9,mod:1,save:1},con:{score:17,mod:3,save:3},int:{score:3,mod:4,save:4},wis:{score:11,mod:0,save:0},cha:{score:6,mod:2,save:2}},fields:{AC:"12",HP:"76 (8d12 + 24)",Speed:"40 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The elephant makes two Gore attacks.
Gore. Melee Attack Roll: +8, reach 5 ft. Hit: 15 (2d8 + 6) Piercing
damage. If the target is a Huge or smaller creature and the elephant
moved 20+ feet straight toward it immediately before the hit, the
target has the Prone condition.`},{title:"BONUS ACTIONS",text:`Trample. Dexterity Saving Throw: DC 16, one creature within 5 feet
that has the Prone condition. Failure: 17 (2d10 + 6) Bludgeoning
damage. Success: Half damage.`}]},{slug:"elk",name:"Elk",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:11,mod:0,save:0},int:{score:2,mod:4,save:4},wis:{score:10,mod:0,save:0},cha:{score:6,mod:2,save:2}},fields:{AC:"10",HP:"11 (2d10)",Speed:"50 ft.",Skills:"Perception +2",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Ram. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning
damage. If the elk moved at least 20 feet straight toward the target
immediately before the hit, the target takes an extra 3 (1d6)
Bludgeoning damage and, if it is Huge or smaller, has the Prone
condition.`}]},{slug:"empyrean",name:"Empyrean",meta:"Celestial or Fiend (Titan) Huge, Neutral",type:"Celestial",subtype:"",size:"",alignment:"or Fiend (Titan) Huge, Neutral",abilities:{str:{score:30,mod:10,save:17},dex:{score:21,mod:5,save:5},con:{score:30,mod:10,save:10},int:{score:21,mod:5,save:5},wis:{score:22,mod:6,save:13},cha:{score:27,mod:8,save:8}},fields:{AC:"22",HP:"346 (21d12 + 210)",Speed:"50 ft., Fly 50 ft. (hover), Swim 50 ft.",Skills:"Insight +13, Perception +13",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Necrotic, Radiant",Senses:"Truesight 120 ft., Passive Perception 23",Languages:"All",CR:"23 (XP 50 000; PB +7)"},cr:"23 (XP 50 000; PB +7)",crValue:"23",xp:5e4,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day). If the empyrean fails a saving throw,
it can choose to succeed instead.
Magic Resistance. The empyrean has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The empyrean makes two attacks, using Sacred
Weapon or Divine Ray in any combination.
Sacred Weapon. Melee Attack Roll: +17, reach 10 ft. Hit: 31 (6d6 + 10)
Force damage, and the target has the Stunned condition until the
start of the empyrean's next turn. The target can choose not to be
Stunned, in which case it takes an extra 21 Force damage that
bypasses Resistance or Immunity.
Divine Ray. Ranged Attack Roll: +15, range 600 ft. Hit: 35 (6d8 + 8)
Necrotic or Radiant damage (empyrean's choice).
Spellcasting. The empyrean casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 23):
At Will: Calm Emotions, Greater Restoration, Pass without Trace, Water
Breathing
1/Day Each: Commune, Dispel Evil and Good, Plane Shift`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3. Immediately after another creature's turn, the
empyrean can expend a use to take one of the following actions. The
empyrean regains all expended uses at the start of each of its turns.
Bolster. The empyrean gains 10 Temporary Hit Points, and the
empyrean and each ally within 30 feet of it gain Advantage on D20
Tests until the end of the empyrean's next turn. The empyrean can't
take this action again until the start of its next turn.
Shockwave of Glory. Constitution Saving Throw: DC 23, each creature
in a 30-foot Emanation originating from the empyrean. Failure: 27
(6d8) Force damage, and the target has the Prone condition. Success:
Half damage only. Failure or Success: The empyrean can't take this
action again until the start of its next turn.
Smite. The empyrean makes one Divine Ray attack.
Inheritors of divine might, empyreans are idealized, human-shaped beings of
godly power. These beings might have relationships with their creators akin to
those of parents and their children, royalty and their servants, inventors and
their  creations,  or  other  bonds.  Empyreans'  existences  are  fundamentally
influenced by their patrons and their connection to the heavenly deities of the
Upper  Planes  or  the  fiendish  deities  of  the  Lower  Planes.  Nevertheless,
empyreans have free will. Celestial empyreans are typically noble beings who
quest to prove themselves worthy of their divine pedigree. Many work in the
service of their parents or support those gods' causes and champions. Fiendish
empyreans are usually dreadful, self-serving villains who seek to claim their
parents' power. Some forge unholy armies or rule over hidden realms in
mockery  of  true  gods,  while  others  might  seek  to  escape  their  accursed
families.`}]},{slug:"empyrean-iota",name:"Empyrean Iota",meta:"Celestial or Fiend (Titan) Medium, Neutral",type:"Celestial",subtype:"",size:"",alignment:"or Fiend (Titan) Medium, Neutral",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:15,mod:2,save:2},wis:{score:16,mod:3,save:3},cha:{score:16,mod:3,save:3}},fields:{AC:"13",HP:"22 (5d8)",Speed:"5 ft., Fly 30 ft. (hover)",Skills:"History +4, Insight +5, Perception +5",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Prone",Senses:"Truesight 30 ft., Passive Perception 15",Languages:"All",CR:"1 (XP 200; PB+2)"},cr:"1 (XP 200; PB+2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Incorporeal Movement. The empyrean can move through other
(1d10) Force damage if it ends its turn inside an object.
Magic Resistance. The empyrean has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Otherworldly Strike. Melee or Ranged Attack Roll: +5. reach 5 ft. or
range 30 ft. Hit: 7 (1d8 + 3) Necrotic or Radiant damage (empyrean's
choice).
Spellcasting. The empyrean casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability.
1/Day Each: Bless, Lesser Restoration (as an action)`},{title:"BONUS ACTIONS",text:`Healing Word (1/Day). The empyrean casts Healing Word, using the
same spellcasting ability as Spellcasting.
Empyrean iotas are the thoughts, memories, or indirect attentions of deities
personified and given a measure of autonomy. Resembling floating glyphs,
motes  of  color,  icons  of  divinity,  or  stranger  shapes,  these  beings  are
messengers of the gods and aides to those gods' servants. Iotas have their own
knowledge and personalities, though they might know little more than the
realms and wishes of their creators.`}]},{slug:"erinyes",name:"Erinyes",meta:"Fiend (Devil) Medium, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:16,mod:3,save:7},con:{score:18,mod:4,save:8},int:{score:14,mod:2,save:2},wis:{score:14,mod:2,save:2},cha:{score:18,mod:4,save:8}},fields:{AC:"18",HP:"178 (21d8 + 84)",Speed:"30 ft., Fly 60 ft.",Skills:"Perception +6, Persuasion +8",Resistances:"Cold",Immunities:"Fire, Poison; Poisoned",Senses:"Truesight 120 ft., Passive Perception 16",Languages:"Infernal; telepathy 120 ft.",CR:"12 (XP 8 400; PB +4)"},cr:"12 (XP 8 400; PB +4)",crValue:"12",xp:8400,sections:[{title:"TRAITS",text:`Diabolical Restoration. If the erinyes dies outside the Nine Hells, its
body disappears in sulfurous smoke, and it gains a new body
instantly, reviving with all its Hit Points somewhere in the Nine
Hells.
Magic Resistance. The erinyes has Advantage on saving throws
against spells and other magical effects.
Magic Rope. The erinyes has a magic rope. While bearing it, the
erinyes can use the Entangling Rope action. The rope has AC 20, HP
90, and Immunity to Poison and Psychic damage. The rope turns to
dust if reduced to 0 Hit Points, if it is 5+ feet away from the erinyes
for 1 hour or more, or if the erinyes dies. If the rope is damaged or
destroyed, the erinyes can fully restore it when finishing a Short or
Long Rest.`},{title:"ACTIONS",text:`Multiattack. The erinyes makes three Withering Sword attacks and
can use Entangling Rope.
Withering Sword. Melee Attack Roll: +8, reach 5 ft. Hit: 13 (2d8 + 4)
Slashing damage plus 11 (2d10) Necrotic damage.
Entangling Rope (Requires Magic Rope). Strength Saving Throw: DC
16, one creature the erinyes can see within 120 feet. Failure: 14 (4d6)
Force damage, and the target has the Restrained condition until the
rope is destroyed, the erinyes uses a Bonus Action to release the
target, or the erinyes uses Entangling Rope again.`},{title:"REACTIONS",text:`Parry. Trigger: The erinyes is hit by a melee attack roll while holding
a weapon. Response: The erinyes adds 4 to its AC against that attack,
possibly causing it to m`}]},{slug:"ettercap",name:"Ettercap",meta:"Monstrosity Medium, Neutral Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:15,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:7,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"44 (8d8 + 8)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +3, Stealth +4, Survival +3",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`along ceilings, without needing to make an ability check.
Web Walker. The ettercap ignores movement restrictions caused by
webs, and the ettercap knows the location of any other creature in
contact with the same web.`},{title:"ACTIONS",text:`Multiattack. The ettercap makes one Bite attack and one Claw
attack.
Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage
plus 2 (1d4) Poison damage, and the target has the Poisoned
condition until the start of the ettercap's next turn.
Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing
damage.
Web Strand (Recharge 5–6). Dexterity Saving Throw: DC 12, one Large
or smaller creature the ettercap can see within 30 feet. Failure: The
target has the Restrained condition until the web is destroyed (AC
10; HP 5; Vulnerability to Fire damage; Immunity to Bludgeoning,
Poison, and Psychic damage).`},{title:"BONUS ACTIONS",text:`Reel. The ettercap pulls one creature within 30 feet of itself that is
Restrained by its Web Strand up to 25 feet straight toward itself.`}]},{slug:"ettin",name:"Ettin",meta:"Giant Large, Chaotic Evil",type:"Giant",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:8,mod:-1,save:-1},con:{score:17,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"12",HP:"85 (10d10 + 30)",Speed:"40 ft.",Skills:"Perception +4",Immunities:"Blinded, Charmed, Deafened, Frightened, Stunned, Unconscious",Gear:"Battleaxe, Morningstar",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Giant",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The ettin makes one Battleaxe attack and one
Morningstar attack.
Battleaxe. Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Slashing
damage. If the target is a Large or smaller creature, it has the Prone
condition.
Morningstar. Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5)
Piercing damage, and the target has Disadvantage on the next
attack roll it makes before the end of its next turn.`}]},{slug:"faerie-dragon-adult",name:"Faerie Dragon Adult",meta:"Dragon Tiny, Chaotic Good",type:"Dragon",subtype:"",size:"Tiny",alignment:"Chaotic Good",abilities:{str:{score:3,mod:-4,save:-4},dex:{score:20,mod:5,save:5},con:{score:13,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:12,mod:1,save:1},cha:{score:14,mod:2,save:2}},fields:{AC:"15",HP:"35 (10d4 + 10)",Speed:"10 ft., Fly 60 ft.",Skills:"Arcana +4, Perception +3, Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Draconic, Sylvan; telepathy 60 ft. (faerie dragons only)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Magic Resistance. The dragon has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d4 + 5) Piercing damage
plus 3 (1d6) Psychic damage.
Euphoria Breath (Recharge 5–6). Wisdom Saving Throw: DC 13, each
creature in a 15-foot Cone. Failure: The target has the Incapacitated
condition and repeats the save at the end of each of its turns,
ending the effect on itself on a success. After 1 minute, it succeeds
automatically. While Incapacitated, the target uses all its movement
on each of its turns to move in a random direction.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 13):
At will: Dancing Lights, Mage Hand, Minor Illusion
1/day each: Hallucinatory Terrain, Polymorph`},{title:"BONUS ACTIONS",text:`Superior Invisibility. The dragon casts Greater Invisibility on itself,
requiring no spell components and using the same spellcasting
ability as Spellcasting.
The pranks of faerie dragon adults tend to lead others to people in need or
wrongs to be righted.`}]},{slug:"faerie-dragon-youth",name:"Faerie Dragon Youth",meta:"Dragon Tiny, Chaotic Good",type:"Dragon",subtype:"",size:"Tiny",alignment:"Chaotic Good",abilities:{str:{score:3,mod:-4,save:-4},dex:{score:16,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:12,mod:1,save:1},cha:{score:14,mod:2,save:2}},fields:{AC:"13",HP:"21 (6d4 + 6)",Speed:"10 ft., Fly 60 ft.",Skills:"Arcana +3, Perception +3, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Draconic, Sylvan; telepathy 60 ft. (faerie dragons only)",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Magic Resistance. The dragon has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage
plus 2 (1d4) Psychic damage.
Euphoria Breath (Recharge 5–6). Wisdom Saving Throw: DC 12, each
creature in a 15-foot Cone. Failure: The target has the Incapacitated
condition until the end of its next turn and uses all its movement on
its turn to move in a random direction.
Spellcasting. The dragon casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 12):
At will: Dancing Lights, Mage Hand, Minor Illusion`},{title:"BONUS ACTIONS",text:`Superior Invisibility. The dragon casts Greater Invisibility on itself,
requiring no spell components and using the same spellcasting
ability as Spellcasting.
Faerie dragon youths are quick to use their euphoria-inducing breath on rude
or uptight folk.`}]},{slug:"fey-spirit",name:"Fey Spirit",meta:"Fey Small, Neutral",type:"Fey",subtype:"",size:"Small",alignment:"Neutral",abilities:{str:{score:13,mod:1,save:1},dex:{score:16,mod:3,save:3},con:{score:14,mod:2,save:2},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:0},cha:{score:16,mod:3,save:3}},fields:{AC:"12 + the spell's level",HP:"30 + 10 for each spell level above 3",Speed:"30 ft., Fly 30 ft.",Immunities:"Charmed",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Sylvan, understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"ACTIONS",text:`Multiattack. The spirit makes a number of Fey Blade attacks equal
to half this spell's level (round down).
Fey Blade. Melee Attack Roll: Bonus equals your spell attack modifier,
reach 5 ft. Hit: 2d6 + 3 + the spell's level Force damage.`},{title:"BONUS ACTIONS",text:`Fey Step. The spirit magically teleports up to 30 feet to an
unoccupied space it can see. Then one of the following effects
occurs, based on the spirit's chosen mood:
Fuming. The spirit has Advantage on the next attack roll it makes
before the end of this turn.
Mirthful. Wisdom Saving Throw: DC equals your spell save DC, one
creature the spirit can see within 10 feet of itself. Failure: The target
is Charmed by you and the spirit for 1 minute or until the target
takes any damage.
Tricksy. The spirit fills a 10-foot Cube within 5 feet of it with magical
Darkness, which lasts until the end of its next turn.
See Summon Fey.`}]},{slug:"fiend-cultist",name:"Fiend Cultist",meta:"Humanoid Medium or Small, Neutral Evil",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:6},int:{score:12,mod:1,save:1},wis:{score:18,mod:4,save:7},cha:{score:10,mod:0,save:0}},fields:{AC:"16",HP:"127 (17d8 + 51)",Speed:"30 ft.",Skills:"Perception +7, Religion +4",Gear:"Breastplate",Senses:"Darkvision 90 ft. (unimpeded by magical Darkness), Passive Perception 17",Languages:"Abyssal, Common, Infernal",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The cultist makes three Pact Axe attacks.
Pact Axe. Melee Attack Roll: +7, reach 5 ft. Hit: 10 (1d12 + 4) Slashing
damage plus 13 (3d8) Fire damage.
Spellcasting. The cultist casts one of the following spells, using
Wisdom as the spellcasting ability (spell save DC 15, +7 to hit with
spell attacks):
At will: Scorching Ray (level 5 version), Thaumaturgy
2/day: Fireball (level 6 version)`},{title:"REACTIONS",text:`Hellish Rebuke. The cultist casts Hellish Rebuke in response to that
spell's trigger, using the same spellcasting ability as Spellcasting.
Fiend cultists worship fiends or evil deities. They often work to bring ruin to
innocents or to summon their sinister patron into the world. Fiend cultists
might serve infamous powers such as archdevils and demon lords, or foul
immortals—beings such as Demogorgon, Pazuzu, Iuz, Zariel, or Zuggtmoy.`}]},{slug:"fiendish-spirit",name:"Fiendish Spirit",meta:"Fiend Large, Neutral",type:"Fiend",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:13,mod:1,save:1},dex:{score:16,mod:3,save:3},con:{score:15,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:16,mod:3,save:3}},fields:{AC:"12 + the spell's level",HP:"50 (Demon only) or 40 (Devil only) or 60 (Yugoloth only) + 15 for each spell level above 6",Speed:"40 ft., Climb 40 ft. (Demon only); Fly 60 ft. (Devil only)",Resistances:"Fire",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Abyssal, Infernal, Telepathy 60 ft.",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Death Throes (Demon Only). When the spirit drops to 0 Hit Points or
the spell ends, the spirit explodes. Dexterity Saving Throw: DC equals
your spell save DC, each creature in a 10-foot Emanation originating
from the spirit. Failure: 2d10 plus this spell's level Fire damage.
Success: Half damage.
Devil's Sight (Devil Only). Magical Darkness doesn't impede the
spirit's Darkvision.
Magic Resistance. The spirit has Advantage on saving throws against
spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of attacks equal to half this
spell's level (round down).
Bite (Demon Only). Melee Attack Roll: Bonus equals your spell attack
modifier, reach 5 ft. Hit: 1d12 + 3 + the spell's level Necrotic damage.
Claws (Yugoloth Only). Melee Attack Roll: Bonus equals your spell
attack modifier, reach 5 ft. Hit: 1d8 + 3 + the spell's level Slashing
damage. Immediately after the attack hits or misses, the spirit can
teleport up to 30 feet to an unoccupied space it can see.
Fiery Strike (Devil Only). Melee or Ranged Attack Roll: Bonus equals
your spell attack modifier, reach. 5 ft. or range 150 ft. Hit: 2d6 + 3 +
the spell's level Fire damage.
See Summon Fiend.`}]},{slug:"fire-elemental",name:"Fire Elemental",meta:"Elemental Large, Neutral",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:17,mod:3,save:3},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"13",HP:"93 (11d10 + 33)",Speed:"50 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Fire, Poison; Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Ignan)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Fiery Aura. At the end of each of the elemental's turns, each
creature in a 10-foot Emanation originating from the elemental
takes 5 (1d10) Fire damage. Creatures and flammable objects in the
Emanation start burning.
Fire Form. The elemental can move through a space as narrow as 1
inch wide without expending extra movement to do so, and it can
enter a creature's space and stop there. The first time it enters a
creature's space on a turn, that creature takes 5 (1d10) Fire damage.
Illumination. The elemental sheds Bright Light in a 30-foot radius
and Dim Light for an additional 30 feet.
Water Susceptibility. The elemental takes 3 (1d6) Cold damage for
every 5 feet the elemental moves in water or for every gallon of
water splashed on it.`},{title:"ACTIONS",text:`Multiattack. The elemental makes two Burn attacks.
Burn. Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Fire damage. If
the target is a creature or a flammable object, it starts burning.
Fire elementals arise when spirits  of the Elemental Plane of Fire inhabit
flames, burning cinders, and heated smoke. These beings are tangible despite
largely being made of flames and particles, and they can uses their vague limbs
to  ignite  foes  and  flammable  materials.  Fire  elementals  typically  burn  in
shades of orange and red, but other colors are possible. Most on the Material
Plane are summoned by magical means, or they might appear near rifts amid
desert depths, volcanoes, wildfires, or magma flows that connect to their home
plane.`}]},{slug:"fire-giant",name:"Fire Giant",meta:"Giant Huge, Lawful Evil",type:"Giant",subtype:"",size:"Huge",alignment:"Lawful Evil",abilities:{str:{score:25,mod:7,save:7},dex:{score:9,mod:-1,save:3},con:{score:23,mod:6,save:10},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:13,mod:1,save:5}},fields:{AC:"18",HP:"162 (13d12 + 78)",Speed:"30 ft.",Skills:"Athletics +11, Perception +6",Immunities:"Fire",Senses:"Passive Perception 16",Languages:"Giant",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"ACTIONS",text:`Multiattack. The giant makes two attacks, using Flame Sword or
Hammer Throw in any combination.
Flame Sword. Melee Attack Roll: +11, reach 10 ft. Hit: 21 (4d6 + 7)
Slashing damage plus 10 (3d6) Fire damage.
Hammer Throw. Ranged Attack Roll: +11, range 60/240 ft. Hit: 23
(3d10 + 7) Bludgeoning damage plus 4 (1d8) Fire damage, and the
target is pushed up to 15 feet straight away from the giant and has
Disadvantage on the next attack roll it makes before the end of its
next turn.`}]},{slug:"flameskull",name:"Flameskull",meta:"Undead Tiny, Neutral Evil",type:"Undead",subtype:"",size:"Tiny",alignment:"Neutral Evil",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:17,mod:3,save:3},con:{score:14,mod:2,save:2},int:{score:16,mod:3,save:3},wis:{score:10,mod:0,save:0},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"40 (9d4 + 18)",Speed:"5 ft., Fly 40 ft. (hover)",Skills:"Arcana +5, Perception +2",Immunities:"Fire, Necrotic, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned, Prone",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Common plus two other languages",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Illumination. The flameskull sheds Bright Light in a 15-foot radius
and Dim Light for an additional 15 feet.
Magic Resistance. The flameskull has Advantage on saving throws
against spells and other magical effects.
Undead Restoration. If the flameskull is destroyed, it regains all its
Hit Points in 1 hour unless Holy Water is sprinkled on its remains or
the Dispel Evil and Good spell is cast on them.`},{title:"ACTIONS",text:`Multiattack. The flameskull makes two Fire Ray attacks.
Fire Ray. Melee or Ranged Attack Roll: +5, reach 5 ft. or range 60 ft.
Hit: 13 (3d6 + 3) Fire damage.
Spellcasting. The flameskull casts one of the following spells,
requiring no Somatic or Material components and using Intelligence
as the spellcasting ability (spell save DC 13):
At will: Mage Hand
2/day: Magic Missile (level 2 version)
1/day: Fireball`}]},{slug:"flaming-skeleton",name:"Flaming Skeleton",meta:"Undead Medium, Lawful Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:15,mod:2,save:2},cha:{score:8,mod:-1,save:-1}},fields:{AC:"15",HP:"65 (10d8 + 20)",Speed:"30 ft.",Vulnerabilities:"Bludgeoning",Immunities:"Fire, Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Understands Common plus one other language but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Death Burst. The skeleton explodes when it dies. Dexterity Saving
Throw: DC 12, each creature in a 10-foot Emanation originating from
the skeleton. Failure: 14 (4d6) Fire damage. Success: Half damage.
Illumination. The skeleton sheds Bright Light in a 15-foot radius and
Dim Light for an additional 15 feet.`},{title:"ACTIONS",text:`Multiattack. The skeleton makes two attacks, using Flame Scepter
or Hurl Flame in any combination.
Flame Scepter. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Bludgeoning damage plus 3 (1d6) Fire damage.
Hurl Flame. Ranged Attack Roll: +4, range 60 ft. Hit: 7 (1d10 + 2) Fire
damage.
Flaming skeletons burn with unbridled necromantic energy. This magic grants
them blazing attacks and greater awareness, which they use to command lesser
Undead.`}]},{slug:"flesh-golem",name:"Flesh Golem",meta:"Construct Medium, Neutral",type:"Construct",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:19,mod:4,save:4},dex:{score:9,mod:-1,save:-1},con:{score:18,mod:4,save:4},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"9",HP:"127 (15d8 + 60)",Speed:"",Immunities:"Lightning, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands Common plus one other language but can't speak",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Aversion to Fire. If the golem takes Fire damage, it has Disadvantage
on attack rolls and ability checks until the end of its next turn.
Berserk. Whenever the golem starts its turn Bloodied, roll 1d6. On a
6, the golem goes berserk. On each of its turns while berserk, the
golem attacks the nearest creature it can see. If no creature is near
enough to move to and attack, the golem attacks an object. Once
the golem goes berserk, it remains so until it is destroyed or it is no
longer Bloodied. The golem's creator, if within 60 feet of the berserk
golem, can try to calm it by taking an action to make a DC 15
Charisma (Persuasion) check; the golem must be able to hear its
creator. If this check succeeds, the golem ceases being berserk until
the start of its next turn, at which point it resumes rolling for the
Berserk trait again if it is still Bloodied.
Immutable Form. The golem can't shape-shift.
Lightning Absorption. Whenever the golem is subjected to Lightning
damage, it regains a number of Hit Points equal to the Lightning
damage dealt.
Magic Resistance. The golem has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The golem makes two Slam attacks.
Slam. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning
damage plus 4 (1d8) Lightning damage.`}]},{slug:"flumph",name:"Flumph",meta:"Aberration Small, Lawful Good",type:"Aberration",subtype:"",size:"Small",alignment:"Lawful Good",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:14,mod:2,save:2},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"12",HP:"7 (2d6)",Speed:"5 ft., Fly 30 ft. (hover)",Skills:"Arcana +4, History +4, Religion +4",Vulnerabilities:"Psychic",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Understands Undercommon but can't speak; telepathy 60 ft.",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Advanced Telepathy. The flumph perceives the content of any
telepathic communication within 60 feet of it.
Prone Deflciency. If the flumph receives the Prone condition, roll a
die. On an odd number, it has the Incapacitated condition. At the
end of each of its turns, the flumph makes a DC 10 Dexterity saving
throw, ending the Incapacitated condition on a success.
Telepathic Shroud. The flumph's thoughts can't be read by any
means, and magic can't detect its location or observe it remotely.`},{title:"ACTIONS",text:`Tentacle. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Acid
damage.
Stench Spray (1/Day). Dexterity Saving Throw: DC 10, one creature
the flumph can see within 15 feet. Failure: The target is coated in a
foul-smelling liquid, exudes a stench for 1d4 hours, and has the
Poisoned condition while the stench lasts. Other creatures have the
Poisoned condition while in a 5-foot Emanation originating from the
coated target. The target can remove the stench on itself if it bathes
during a Short or Long Rest.`}]},{slug:"flying-snake",name:"Flying Snake",meta:"Monstrosity Tiny, Unaligned",type:"Monstrosity",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:4,mod:-3,save:-3},dex:{score:15,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"14",HP:"5 (2d4)",Speed:"30 ft., Fly 60 ft., Swim 30 ft.",Senses:"Blindsight 10 ft., Passive Perception 11",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Flyby. The snake doesn't provoke an Opportunity Attack when it
flies out of an enemy's reach.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage plus 5
(2d4) Poison damage.`}]},{slug:"fomorian",name:"Fomorian",meta:"Giant Huge, Chaotic Evil",type:"Giant",subtype:"",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:10,mod:0,save:0},con:{score:20,mod:5,save:5},int:{score:9,mod:-1,save:-1},wis:{score:14,mod:2,save:2},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"172 (15d12 + 75)",Speed:"40 ft.",Skills:"Perception +8, Stealth +3",Senses:"Darkvision 120 ft., Passive Perception 18",Languages:"Giant, Undercommon",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The fomorian makes two Stone Club attacks. It can
replace one attack with a use of Warping Hex if available.
Stone Club. Melee Attack Roll: +9, reach 15 ft. Hit: 24 (4d8 + 6)
Bludgeoning damage.
Warping Hex (Recharge 4–6). Wisdom Saving Throw: DC 16, one
creature the fomorian can see within 120 feet. Failure: 21 (6d6)
Psychic damage, and the target gains 1 Exhaustion level. Success:
Half damage only.`}]},{slug:"frog",name:"Frog",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:13,mod:1,save:1},con:{score:8,mod:-1,save:-1},int:{score:1,mod:-5,save:-5},wis:{score:8,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"11",HP:"1 (1d4 - 1)",Speed:"20 ft., Swim 20 ft.",Skills:"Perception +1, Stealth +3",Senses:"Darkvision 30 ft., Passive Perception 11",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Amphibious. The frog can breathe air and water.
Standing Leap. The frog's Long Jump is up to 10 feet and its High
Jump is up to 5 feet with or without a running start.`},{title:"ACTIONS",text:"Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"frost-giant",name:"Frost Giant",meta:"Giant Huge, Neutral Evil",type:"Giant",subtype:"",size:"Huge",alignment:"Neutral Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:9,mod:-1,save:-1},con:{score:21,mod:5,save:8},int:{score:9,mod:-1,save:-1},wis:{score:10,mod:0,save:3},cha:{score:12,mod:1,save:4}},fields:{AC:"15",HP:"149 (13d12 + 65)",Speed:"40 ft.",Skills:"Athletics +9, Perception +3",Immunities:"Cold",Senses:"Passive Perception 13",Languages:"Giant",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The giant makes two attacks, using Frost Axe or Great
Bow in any combination.
Frost Axe. Melee Attack Roll: +9, reach 10 ft. Hit: 19 (2d12 + 6) Slashing
damage plus 9 (2d8) Cold damage.
Great Bow. Ranged Attack Roll: +9, range 150/600 ft. Hit: 17 (2d10 + 6)
Piercing damage plus 7 (2d6) Cold damage, and the target's Speed
decreases by 10 feet until the end of its next turn.`},{title:"BONUS ACTIONS",text:`War Cry (Recharge 5–6). The giant or one creature of its choice that
can see or hear it gains 16 (2d10 + 5) Temporary Hit Points and has
Advantage on attack rolls until the start of the giant's next turn.`}]},{slug:"galeb-duhr",name:"Galeb Duhr",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:20,mod:5,save:5},dex:{score:14,mod:2,save:2},con:{score:20,mod:5,save:5},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"16",HP:"123 (13d8 + 65)",Speed:"15 ft. (30 ft. when rolling, 60 ft. rolling downhill)",Immunities:"Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",Senses:"Darkvision 60 ft., Tremorsense 60 ft., Passive Perception 11",Languages:"Primordial (Terran)",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Avalanche Slam. Melee Attack Roll: +8, reach 5 ft. Hit: 12 (2d6 + 5)
Bludgeoning damage. If the target is a Large or smaller creature and
the galeb duhr moved 20+ feet straight toward it immediately
before the hit, the target takes an extra 7 (2d6) Bludgeoning damage
and has the Prone condition.
Animate Boulders (1/Day). The galeb duhr magically animates one
or two boulders it can see within 60 feet of itself. Each boulder uses
the Galeb Duhr stat block, except it has Intelligence and Charisma
scores of 1 and lacks this action. The boulder takes its turn
immediately after the galeb duhr on the same Initiative count, and it
obeys the galeb duhr. A boulder remains animate for 1 minute or
until it or the galeb duhr dies.`}]},{slug:"gargoyle",name:"Gargoyle",meta:"Elemental Medium, Chaotic Evil",type:"Elemental",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:11,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:11,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"67 (9d8 +27)",Speed:"30 ft., Fly 60 ft.",Skills:"Stealth +4",Immunities:"Poison; Exhaustion, Petrified, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Terran)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Flyby. The gargoyle doesn't provoke an Opportunity Attack when it
flies out of an enemy's reach.`},{title:"ACTIONS",text:`Multiattack. The gargoyle makes two Claw attacks.
Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing
damage.
Gargoyles are sculptures inhabited by elemental spirits. Wings and magic
allow their heavy stone bodies to fly, and they often perch where they can
blend  in  amid  ornate  architecture,  rock  formations,  or  mundane  statues.
Gargoyles usually serve the magic-users who conjured them into their bodies,
but if left to their own devices, they might play cruel pranks and steal treasures
to hoard in lofty lairs.`}]},{slug:"gas-spore-fungus",name:"Gas Spore Fungus",meta:"Plant Large, Unaligned",type:"Plant",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:5,mod:-3,save:-3},dex:{score:1,mod:-5,save:-5},con:{score:3,mod:-4,save:-4},int:{score:1,mod:-5,save:-5},wis:{score:1,mod:-5,save:-5},cha:{score:1,mod:-5,save:-5}},fields:{AC:"8",HP:"13 (9d10 - 36)",Speed:"5 ft., Fly 10 ft. (hover)",Immunities:"Poison; Blinded, Charmed, Deafened, Frightened, Paralyzed, Poisoned, Prone",Senses:"Blindsight 30 ft., Passive Perception 5",Languages:"—",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Death Burst. The gas spore bursts when it dies. Constitution Saving
Throw: DC 10, each creature in a 20-foot Emanation originating from
the gas spore. Failure: The target takes 10 (3d6) Poison damage and
has the Poisoned condition for 1d12 hours. Unless the Poisoned
condition is removed, the target dies at the end of that time and
sprouts 2d4 Tiny Gas Spore Fungi (each with 1 Hit Point). After 2d6
days, they become Large and have 13 Hit Points.`},{title:"ACTIONS",text:`Tendril. Melee Attack Roll: +0, reach 5 ft. Hit: 3 (1d6) Poison damage,
and the target has the Poisoned condition until the end of its next
turn.
Gas  spores  are  floating,  orbicular  fungi  with  rhizome  growths  and
protuberances that resemble the stalks and eyes of beholders. If destroyed, a
gas spore explodes in a poisonous burst that can infect creatures and slay them
in hours. Infected corpses spawn more gas spores that grow to full size in a
matter of days.`}]},{slug:"gelatinous-cube",name:"Gelatinous Cube",meta:"Ooze Large, Unaligned",type:"Ooze",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:3,mod:-4,save:-4},con:{score:20,mod:5,save:5},int:{score:1,mod:-5,save:-5},wis:{score:6,mod:-2,save:-2},cha:{score:1,mod:-5,save:-5}},fields:{AC:"6",HP:"63 (6d10 + 30)",Speed:"15 ft.",Immunities:"Acid; Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",Senses:"Blindsight 60 ft., Passive Perception 8",Languages:"None",CR:"2 (XP 450; PB+2)"},cr:"2 (XP 450; PB+2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Ooze Cube. The cube fills its entire space and is transparent. Other
creatures can enter that space, but a creature that does so is
subjected to the cube's Engulf and has Disadvantage on the saving
throw. Creatures inside the cube have Total Cover, and the cube can
hold one Large creature or up to four Medium or Small creatures
inside itself at a time. As an action, a creature within 5 feet of the
cube can pull a creature or an object out of the cube by succeeding
on a DC 12 Strength (Athletics) check, and the puller takes 10 (3d6)
Acid damage.
Transparent. Even when the cube is in plain sight, a creature must
succeed on a DC 15 Wisdom (Perception) check to notice the cube if
the creature hasn't witnessed the cube move or otherwise act.`},{title:"ACTIONS",text:`Pseudopod. Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Acid
damage.
Engulf. The cube moves up to its Speed without provoking
Opportunity Attacks. The cube can move through the spaces of
Large or smaller creatures if it has room inside itself to contain
them (see the Ooze Cube trait). Dexterity Saving Throw: DC 12, each
creature whose space the cube enters for the first time during this
move. Failure: 10 (3d6) Acid damage, and the target is engulfed. An
engulfed target is suffocating, can't cast spells with a Verbal
component, has the Restrained condition, and takes 10 (3d6) Acid
damage at the start of each of the cube's turns. When the cube
moves, the engulfed target moves with it. An engulfed target can try
to escape by taking an action to make a DC 12 Strength (Athletics)
check. On a successful check, the target escapes and enters the
nearest unoccupied space. Success: Half damage, and the target
moves to an unoccupied space within 5 feet of the cube. If there is
no unoccupied space, the target fails the save instead.
Quivering  masses  of  acidic  goo,  gelatinous  cubes  wobble  through  narrow
caverns and dungeons, engulfing anything in their paths. These Oozes are
naturally transparent, making them difficult to see while they're stationary.
Creatures and objects that become stuck within these slimes are gradually
dissolved.  Undigested  detritus  sometimes  floats  within  a  gelatinous  cube,
hinting at its past meals.`}]},{slug:"ghast",name:"Ghast",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:17,mod:3,save:3},con:{score:10,mod:0,save:0},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:2},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"36 (8d8)",Speed:"30 ft.",Resistances:"Necrotic",Immunities:"Poison; Charmed, Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Stench. Constitution Saving Throw: DC 10, any creature that starts its
turn in a 5-foot Emanation originating from the ghast. Failure: The
target has the Poisoned condition until the start of its next turn.
Success: The target is immune to this ghast's Stench for 24 hours.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage
plus 9 (2d8) Necrotic damage.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing
damage. If the target is a non-Undead creature, it is subjected to the
following effect. Constitution Saving Throw: DC 10. Failure: The target
has the Paralyzed condition until the end of its next turn.
Ghasts frequently organize ghouls into packs to despoil crypts and steal the
wealth within.`}]},{slug:"ghast-gravecaller",name:"Ghast Gravecaller",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:17,mod:3,save:3},con:{score:14,mod:2,save:5},int:{score:18,mod:4,save:4},wis:{score:14,mod:2,save:5},cha:{score:8,mod:-1,save:-1}},fields:{AC:"16",HP:"97 (15d8 + 30)",Speed:"30 ft.",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Poisoned",Senses:"Darkvision 120 ft., Passive Perception 12",Languages:"Abyssal, Common",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Stench. Constitution Saving Throw: DC 13, any creature that starts its
turn in a 5-foot Emanation originating from the ghast. Failure: The
target has the Poisoned condition until the start of its next turn.
Success: The target is immune to this ghast's Stench for 24 hours.`},{title:"ACTIONS",text:`Multiattack. The ghast makes two Horrific Necrosis attacks. It can
replace one attack with a Claw attack.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 13 (3d6 + 3) Slashing
damage. If the target isn't an Undead, it has the Paralyzed condition
until the end of its next turn.
Horriflc Necrosis. Melee or Ranged Attack Roll: +7, reach 5 ft. or range
120 ft. Hit: 15 (2d10 + 4) Necrotic damage, and the target has the
Frightened condition until the end of its next turn.
Spellcasting. The ghast casts one of the following spells, requiring
no Material components and using Intelligence as the spellcasting
ability:
At will: Speak with Dead, Thaumaturgy
Ghast gravecallers wield fell magic and converse with corpses. They might pose
as liches or vampires.`}]},{slug:"ghost",name:"Ghost",meta:"Undead Medium, Neutral",type:"Undead",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:13,mod:1,save:1},con:{score:10,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:17,mod:3,save:3}},fields:{AC:"11",HP:"45 (10d8)",Speed:"5 ft., Fly 40 ft. (hover)",Resistances:"Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Common plus one other language",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Ethereal Sight. The ghost can see 60 feet into the Ethereal Plane
when it is on the Material Plane.
Incorporeal Movement. The ghost can move through other
(1d10) Force damage if it ends its turn inside an object.`},{title:"ACTIONS",text:`Multiattack. The ghost makes two Withering Touch attacks.
Withering Touch. Melee Attack Roll: +5, reach 5 ft. Hit: 19 (3d10 + 3)
Necrotic damage.
Etherealness. The ghost casts the Etherealness spell, requiring no
spell components and using Charisma as the spellcasting ability. The
ghost is visible on the Material Plane while on the Border Ethereal
and vice versa, but it can't affect or be affected by anything on the
other plane.
Horriflc Visage. Wisdom Saving Throw: DC 13, each creature in a 60-
foot Cone that can see the ghost and isn't an Undead. Failure: 10
(2d6 + 3) Psychic damage, and the target has the Frightened
condition until the start of the ghost's next turn. Success: The target
is immune to this ghost's Horrific Visage for 24 hours.
Possession (Recharge 6). Charisma Saving Throw: DC 13, one
Humanoid the ghost can see within 5 feet. Failure: The target is
possessed by the ghost; the ghost disappears, and the target has
the Incapacitated condition and loses control of its body. The ghost
now controls the body, but the target retains awareness. The ghost
can't be targeted by any attack, spell, or other effect, except ones
that specifically target Undead. The ghost's game statistics are the
same, except it uses the possessed target's Speed, as well as the
target's Strength, Dexterity, and Constitution modifiers. The
possession lasts until the body drops to 0 Hit Points or the ghost
leaves as a Bonus Action. When the possession ends, the ghost
appears in an unoccupied space within 5 feet of the target, and the
target is immune to this ghost's Possession for 24 hours. Success:
The target is immune to this ghost's Possession for 24 hours.`}]},{slug:"ghoul",name:"Ghoul",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"12",HP:"22 (5d8)",Speed:"30 ft.",Immunities:"Poison; Charmed, Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The ghoul makes two Bite attacks.
Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage
plus 3 (1d6) Necrotic damage.
Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing
damage. If the target is a creature that isn't an Undead or elf, it is
subjected to the following effect. Constitution Saving Throw: DC 10.
Failure: The target has the Paralyzed condition until the end of its
next turn.
Ghouls rise from the bodies of cannibals and villains with depraved hungers.
They form packs out of shared voracity.`}]},{slug:"giant-ape",name:"Giant Ape",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:23,mod:6,save:6},dex:{score:14,mod:2,save:2},con:{score:18,mod:4,save:4},int:{score:5,mod:-3,save:-3},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"168 (16d12 + 64)",Speed:"40 ft., Climb 40 ft.",Skills:"Athletics +9, Perception +4, Survival +4",Senses:"Passive Perception 14",Languages:"None",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The ape makes two Fist attacks.
Fist. Melee Attack Roll: +9, reach 10 ft. Hit: 22 (3d10 + 6) Bludgeoning
damage.
Boulder Toss (Recharge 6). The ape hurls a boulder at a point it can
see within 90 feet. Dexterity Saving Throw: DC 17, each creature in a
5-foot-radius Sphere centered on that point. Failure: 24 (7d6)
Bludgeoning damage. If the target is a Large or smaller creature, it
has the Prone condition. Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Leap. The ape jumps up to 30 feet by spending 10 feet of
movement.`}]},{slug:"giant-axe-beak",name:"Giant Axe Beak",meta:"Monstrosity Huge, Unaligned",type:"Monstrosity",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:21,mod:5,save:5},dex:{score:14,mod:2,save:2},con:{score:19,mod:4,save:4},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"15",HP:"84 (8d12 + 32)",Speed:"50 ft.",Skills:"Perception +4",Senses:"Passive Perception 14",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The axe beak makes one Sharpened Beak attack and
one Talons attack.
Sharpened Beak. Melee Attack Roll: +8, reach 10 ft. Hit: 18 (2d12 + 5)
Slashing damage, and a creature within 5 feet of the target (axe
beak's choice) takes 6 (1d12) Slashing damage.
Talons. Melee Attack Roll: +8, reach 5 ft. Hit: 14 (2d8 + 5) Piercing
damage. If the target is a Large or smaller creature, it has the Prone
condition.
Giant axe beaks typically dwell in secluded, primeval realms, such as isolated
islands or underground wildernesses. They often compete with dinosaurs and
other giant beasts for territory.`}]},{slug:"giant-badger",name:"Giant Badger",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:10,mod:0,save:0},con:{score:17,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"15 (2d8 + 6)",Speed:"30 ft., Burrow 10 ft.",Skills:"Perception +3",Resistances:"Poison",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Piercing damage."}]},{slug:"giant-bat",name:"Giant Bat",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:16,mod:3,save:3},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"13",HP:"22 (4d10)",Speed:"10 ft., Fly 60 ft.",Senses:"Blindsight 120 ft., Passive Perception 11",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage."}]},{slug:"giant-boar",name:"Giant Boar",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:5},dex:{score:10,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:7,mod:-2,save:-2},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"42 (5d10 + 15)",Speed:"40 ft.",Senses:"Passive Perception 8",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Bloodied Fury. The boar has Advantage on melee attack rolls while it
is Bloodied.`},{title:"ACTIONS",text:`Gore. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing
damage. If the target is a Large or smaller creature and the boar
moved 20+ feet straight toward it immediately before the hit, the
target takes an extra 7 (2d6) Piercing damage and has the Prone
condition.`}]},{slug:"giant-centipede",name:"Giant Centipede",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:5,mod:-3,save:-3},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:1,mod:-5,save:-5},wis:{score:7,mod:-2,save:-2},cha:{score:3,mod:-4,save:-4}},fields:{AC:"14",HP:"9 (2d6 + 2)",Speed:"30 ft., Climb 30 ft.",Senses:"Blindsight 30 ft., Passive Perception 8",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage,
and the target has the Poisoned condition until the start of the
centipede's next turn.`}]},{slug:"giant-constrictor-snake",name:"Giant Constrictor Snake",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:1,mod:-5,save:-5},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"12",HP:"60 (8d12 + 8)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +2",Senses:"Blindsight 10 ft., Passive Perception 12",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The snake makes one Bite attack and uses Constrict.
Bite. Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Piercing
damage.
Constrict. Strength Saving Throw: DC 14, one Large or smaller
creature the snake can see within 10 feet. Failure: 13 (2d8 + 4)
Bludgeoning damage, and the target has the Grappled condition
(escape DC 14).`}]},{slug:"giant-crab",name:"Giant Crab",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:13,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:9,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"15",HP:"13 (3d8)",Speed:"30 ft., Swim 30 ft.",Skills:"Stealth +3",Senses:"Blindsight 30 ft., Passive Perception 9",Languages:"None",CR:"1/8 (25 XP; PB +2)"},cr:"1/8 (25 XP; PB +2)",crValue:"1/8",xp:0,sections:[{title:"TRAITS",text:"Amphibious. The crab can breathe air and water."},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Bludgeoning
damage. If the target is a Medium or smaller creature, it has the
Grappled condition (escape DC 11) from one of two claws.`}]},{slug:"giant-crocodile",name:"Giant Crocodile",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:21,mod:5,save:5},dex:{score:9,mod:-1,save:-1},con:{score:17,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"14",HP:"85 (9d12 + 27)",Speed:"30 ft., Swim 50 ft.",Skills:"Stealth +5",Senses:"Passive Perception 10",Languages:"None",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:"Hold Breath. The crocodile can hold its breath for 1 hour."},{title:"ACTIONS",text:`Multiattack. The crocodile makes one Bite attack and one Tail
attack.
Bite. Melee Attack Roll: +8, reach 5 ft. Hit: 21 (3d10 + 5) Piercing
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 15). While Grappled, the target has
the Restrained condition and can't be targeted by the crocodile's
Tail.
Tail. Melee Attack Roll: +8, reach 10 ft. Hit: 18 (3d8 + 5) Bludgeoning
damage. If the target is a Large or smaller creature, it has the Prone
condition.`}]},{slug:"giant-eagle",name:"Giant Eagle",meta:"Celestial Large, Neutral Good",type:"Celestial",subtype:"",size:"Large",alignment:"Neutral Good",abilities:{str:{score:16,mod:3,save:3},dex:{score:17,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:14,mod:2,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"26 (4d10 + 4)",Speed:"10 ft., Fly 80 ft.",Skills:"Perception +6",Resistances:"Necrotic, Radiant",Senses:"Passive Perception 16",Languages:"Celestial; understands Common and Primordial (Auran) but can't speak them",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The eagle makes two Rend attacks.
Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing
damage plus 3 (1d6) Radiant damage.`}]},{slug:"giant-elk",name:"Giant Elk",meta:"Celestial Huge, Neutral Good",type:"Celestial",subtype:"",size:"Huge",alignment:"Neutral Good",abilities:{str:{score:19,mod:4,save:6},dex:{score:18,mod:4,save:6},con:{score:14,mod:2,save:2},int:{score:7,mod:-2,save:-2},wis:{score:14,mod:2,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"14",HP:"42 (5d12 + 10)",Speed:"60 ft.",Skills:"Perception +4",Resistances:"Necrotic, Radiant",Senses:"Darkvision 90 ft., Passive Perception 14",Languages:"Celestial; understands Common, Elvish, and Sylvan but can't speak them",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Ram. Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Bludgeoning
damage plus 5 (2d4) Radiant damage. If the target is a Huge or
smaller creature and the elk moved 20+ feet straight toward it
immediately before the hit, the target takes an extra 5 (2d4)
Bludgeoning damage and has the Prone condition.`}]},{slug:"giant-fire-beetle",name:"Giant Fire Beetle",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:10,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:1,mod:-5,save:-5},wis:{score:7,mod:-2,save:-2},cha:{score:3,mod:-4,save:-4}},fields:{AC:"13",HP:"4 (1d6 + 1)",Speed:"30 ft., Climb 30 ft.",Resistances:"Fire",Senses:"Blindsight 30 ft., Passive Perception 8",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Illumination. The beetle sheds Bright Light in a 10-foot radius and
Dim Light for an additional 10 feet.`},{title:"ACTIONS",text:"Bite. Melee Attack Roll: +1, reach 5 ft. Hit: 1 Fire damage."}]},{slug:"giant-frog",name:"Giant Frog",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:12,mod:1,save:1},dex:{score:13,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"11",HP:"18 (4d8)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +2, Stealth +4",Senses:"Darkvision 30 ft., Passive Perception 12",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Amphibious. The frog can breathe air and water.
Standing Leap. The frog's Long Jump is up to 20 feet and its High
Jump is up to 10 feet with or without a running start.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage.
If the target is a Medium or smaller creature, it has the Grappled
condition (escape DC 11).
Swallow. The frog swallows a Small or smaller target it is grappling.
While swallowed, the target isn't Grappled but has the Blinded and
Restrained conditions, and it has Total Cover against attacks and
other effects outside the frog. While swallowing the target, the frog
can't use Bite, and if the frog dies, the swallowed target is no longer
Restrained and can escape from the corpse using 5 feet of
movement, exiting with the Prone condition. At the end of the frog's
next turn, the swallowed target takes 5 (2d4) Acid damage. If that
damage doesn't kill it, the frog disgorges it, causing it to exit Prone.`}]},{slug:"giant-goat",name:"Giant Goat",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:5},dex:{score:13,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"11",HP:"19 (3d10 + 3)",Speed:"40 ft., Climb 30 ft.",Skills:"Perception +3",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Ram. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning
damage. If the target is a Large or smaller creature and the goat
moved 20+ feet straight toward it immediately before the hit, the
target takes an extra 5 (2d4) Bludgeoning damage and has the
Prone condition.`}]},{slug:"giant-hyena",name:"Giant Hyena",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"45 (6d10 + 12)",Speed:"50 ft.",Skills:"Perception +3",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing
damage.`},{title:"BONUS ACTIONS",text:`Rampage (1/Day). Immediately after dealing damage to a creature
that was already Bloodied, the hyena can move up to half its Speed,
and it makes one Bite attack.`}]},{slug:"giant-insect",name:"Giant Insect",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:4,mod:-3,save:-3},wis:{score:14,mod:2,save:2},cha:{score:3,mod:-4,save:-4}},fields:{AC:"11 + the spell's level",HP:"30 + 10 for each spell level above 4*",Speed:"40 ft., Climb 40 ft., Fly 40 ft. (Wasp only)",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proficiency Bonus)"},cr:"None (XP 0; PB equals your Proficiency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:"ceilings, without needing to make an ability check."},{title:"ACTIONS",text:`Multiattack. The insect makes a number of attacks equal to half this
spell's level (round down).
Poison Jab. Melee Attack Roll: Bonus equals your spell attack
modifier, reach 10 ft. Hit: 1d6 + 3 + the spell's level Piercing damage
plus 1d4 Poison damage.
Web Bolt (Spider Only). Ranged Attack Roll: Bonus equals your spell
attack modifier, range 60 ft. Hit: 1d10 + 3 + the spell's level
Bludgeoning damage, and the target's Speed is reduced to 0 until
the start of the insect's next turn.`},{title:"BONUS ACTIONS",text:`Venomous Spew (Centipede Only). Constitution Saving Throw: DC
equals your spell save DC, one creature the insect can see within 10
feet. Failure: The target has the Poisoned condition until the start of
the insect's next turn.
See Giant Insect.`}]},{slug:"giant-lizard",name:"Giant Lizard",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:12,mod:1,save:3},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"12",HP:"19 (3d10 + 3)",Speed:"40 ft., Climb 40 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:"ceilings, without needing to make an ability check."},{title:"ACTIONS",text:"Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing damage."}]},{slug:"giant-octopus",name:"Giant Octopus",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"11",HP:"45 (7d10 + 7)",Speed:"10 ft., Swim 60 ft.",Skills:"Perception +4, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Water Breathing. The octopus can breathe only underwater. It can
hold its breath for 1 hour outside water.`},{title:"ACTIONS",text:`Tentacles. Melee Attack Roll: +5, reach 10 ft. Hit: 10 (2d6 + 3)
Bludgeoning damage. If the target is a Medium or smaller creature,
it has the Grappled condition (escape DC 13) from all eight tentacles.
While Grappled, the target has the Restrained condition.`},{title:"REACTIONS",text:`Ink Cloud (1/Day). Trigger: The octopus takes damage while
underwater. Response: The octopus releases ink that fills a 10-foot
Cube centered on itself, and the octopus moves up to its Swim
Speed. The Cube is Heavily Obscured for 1 minute or until a strong
current or similar effect disperses the ink.`}]},{slug:"giant-owl",name:"Giant Owl",meta:"Celestial Large, Neutral",type:"Celestial",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:13,mod:1,save:1},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:4},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"19 (3d10 + 3)",Speed:"5 ft., Fly 60 ft.",Skills:"Perception +6, Stealth +6",Resistances:"Necrotic, Radiant",Senses:"Darkvision 120 ft., Passive Perception 16",Languages:"Celestial; understands Common, Elvish, and Sylvan but can't speak them",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Flyby. The owl doesn't provoke an Opportunity Attack when it flies
out of an enemy's reach.`},{title:"ACTIONS",text:`Talons. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing
damage.
Spellcasting. The owl casts one of the following spells, requiring no
spell components and using Wisdom as the spellcasting ability:
At will: Detect Evil and Good, Detect Magic
1/day: Clairvoyance`}]},{slug:"giant-rat",name:"Giant Rat",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:16,mod:3,save:5},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"13",HP:"7 (2d6)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +2",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Pack Tactics. The rat has Advantage on an attack roll against a
creature if at least one of the rat's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 feet. Hit: 5 (1d4 + 3) Piercing
damage.`}]},{slug:"giant-scorpion",name:"Giant Scorpion",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:1,mod:-5,save:-5},wis:{score:9,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"15",HP:"52 (7d10 + 14)",Speed:"40 ft.",Senses:"Blindsight 60 ft., Passive Perception 9",Languages:"None",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The scorpion makes two Claw attacks and one Sting
attack.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 13) from one of two claws.
Sting. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing
damage plus 11 (2d10) Poison damage.`}]},{slug:"giant-seahorse",name:"Giant Seahorse",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:12,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"14",HP:"16 (3d10)",Speed:"5 ft., Swim 40 ft.",Senses:"Passive Perception 11",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:"Water Breathing. The seahorse can breathe only underwater."},{title:"ACTIONS",text:`Ram. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Bludgeoning
damage, or 11 (2d8 + 2) Bludgeoning damage if the seahorse moved
20+ feet straight toward the target immediately before the hit.`},{title:"BONUS ACTIONS",text:`Bubble Dash. While underwater, the seahorse moves up to half its
Swim Speed without provoking Opportunity Attacks.`}]},{slug:"giant-shark",name:"Giant Shark",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:23,mod:6,save:6},dex:{score:11,mod:0,save:0},con:{score:21,mod:5,save:5},int:{score:1,mod:-5,save:-5},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"92 (8d12 + 40)",Speed:"5 ft., Swim 60 ft.",Skills:"Perception +3",Senses:"Blindsight 60 ft., Passive Perception 13",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:"Water Breathing. The shark can breathe only underwater."},{title:"ACTIONS",text:`Multiattack. The shark makes two Bite attacks.
Bite. Melee Attack Roll: +9 (with Advantage if the target doesn't have
all its Hit Points), reach 5 ft. Hit: 22 (3d10 + 6) Piercing damage.`}]},{slug:"giant-spider",name:"Giant Spider",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:16,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:11,mod:0,save:0},cha:{score:4,mod:3,save:3}},fields:{AC:"14",HP:"26 (4d10 + 4)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +4, Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`ceilings, without needing to make an ability check.
Web Walker. The spider ignores movement restrictions caused by
webs, and it knows the location of any other creature in contact
with the same web.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage
plus 7 (2d6) Poison damage.
Web (Recharge 5–6). Dexterity Saving Throw: DC 13, one creature the
spider can see within 60 feet. Failure: The target has the Restrained
condition until the web is destroyed (AC 10; HP 5; Vulnerability to
Fire damage; Immunity to Poison and Psychic damage).`}]},{slug:"giant-squid",name:"Giant Squid",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:23,mod:6,save:9},dex:{score:14,mod:2,save:5},con:{score:12,mod:1,save:1},int:{score:5,mod:-3,save:-3},wis:{score:11,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"12",HP:"120 (16d12 + 16)",Speed:"5 ft., Swim 80 ft.",Skills:"Perception +6",Senses:"Darkvision 120 ft., Passive Perception 16",Languages:"None",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:"Water Breathing. The squid can breathe only underwater."},{title:"ACTIONS",text:`Multiattack. The squid makes one Bite attack and one Tentacle
attack.
Bite. Melee Attack Roll: +9, reach 5 ft. Hit: 28 (4d10 + 6) Piercing
damage.
Tentacle. Melee Attack Roll: +9, reach 15 ft. Hit: 19 (3d8 + 6)
Bludgeoning damage. If the target is a Huge or smaller creature, it
has the Grappled condition (escape DC 16) from one of two
tentacles, and the squid can pull the target up to 10 feet straight
toward itself.`},{title:"REACTIONS",text:`Ink Cloud (1/Day). Trigger: The squid takes damage while
underwater. Response: The squid releases ink that fills a 15-foot
Cube centered on itself, and the squid moves up to its Swim Speed.
The Cube is Heavily Obscured for 1 minute or until a strong current
or similar effect disperses the ink.`}]},{slug:"giant-toad",name:"Giant Toad",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:13,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"11",HP:"39 (6d10 + 6)",Speed:"30 ft., Swim 30 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Amphibious. The toad can breathe air and water.
Standing Leap. The toad's Long Jump is up to 20 feet and its High
Jump is up to 10 feet with or without a running start.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage
plus 5 (2d4) Poison damage. If the target is a Medium or smaller
creature, it has the Grappled condition (escape DC 12).
Swallow. The toad swallows a Medium or smaller target it is
grappling. While swallowed, the target isn't Grappled but has the
Blinded and Restrained conditions, and it has Total Cover against
attacks and other effects outside the toad. In addition, the target
takes 10 (3d6) Acid damage at the end of each of the toad's turns.
The toad can have only one target swallowed at a time, and it can't
use Bite while it has a swallowed target. If the toad dies, a
swallowed creature is no longer Restrained and can escape from the
corpse using 5 feet of movement, exiting with the Prone condition.`}]},{slug:"giant-venomous-snake",name:"Giant Venomous Snake",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:10,mod:0,save:0},dex:{score:18,mod:4,save:4},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"14",HP:"11 (2d8 + 2)",Speed:"40 ft., Swim 40 ft.",Skills:"Perception +2",Senses:"Blindsight 10 ft., Passive Perception 12",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +6, reach 10 ft. Hit: 6 (1d4 + 4) Piercing
damage plus 4 (1d8) Poison damage.`}]},{slug:"giant-vulture",name:"Giant Vulture",meta:"Monstrosity Large, Neutral Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:10,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"10",HP:"25 (3d10 + 9)",Speed:"10 ft., Fly 60 ft.",Skills:"Perception +3",Resistances:"Necrotic",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Understands Common but can't speak",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Pack Tactics. The vulture has Advantage on an attack roll against a
creature if at least one of the vulture's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:`Gouge. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Piercing
damage, and the target has the Poisoned condition until the end of
its next turn.`}]},{slug:"giant-wasp",name:"Giant Wasp",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:10,mod:0,save:0},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"13",HP:"22 (5d8)",Speed:"10 ft., Fly 50 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Flyby. The wasp doesn't provoke an Opportunity Attack when it flies
out of an enemy's reach.`},{title:"ACTIONS",text:`Sting. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing
damage plus 5 (2d4) Poison damage.`}]},{slug:"giant-weasel",name:"Giant Weasel",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:11,mod:0,save:0},dex:{score:17,mod:3,save:3},con:{score:10,mod:0,save:0},int:{score:4,mod:-3,save:-3},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"9 (2d8)",Speed:"40 ft., Climb 30 ft.",Skills:"Acrobatics +5, Perception +3, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage."}]},{slug:"giant-wolf-spider",name:"Giant Wolf Spider",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:12,mod:1,save:1},dex:{score:16,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:4,mod:-3,save:-3}},fields:{AC:"13",HP:"11 (2d8 + 2)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +3, Stealth +7",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:"ceilings, without needing to make an ability check."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage
plus 5 (2d4) Poison damage.`}]},{slug:"gibbering-mouther",name:"Gibbering Mouther",meta:"Aberration Medium, Chaotic Neutral",type:"Aberration",subtype:"",size:"Medium",alignment:"Chaotic Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:8,mod:-1,save:-1},con:{score:16,mod:3,save:3},int:{score:3,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"9",HP:"52 (7d8 + 21)",Speed:"20 ft., Swim 20 ft.",Immunities:"Prone",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Aberrant Ground. The ground in a 10-foot Emanation originating
Gibbering. The mouther babbles incoherently while it doesn't have
the Incapacitated condition. Wisdom Saving Throw: DC 10, any
creature that starts its turn within 20 feet of the mouther while it is
babbling. Failure: The target rolls 1d8 to determine what it does
during the current turn:
1–4. The target does nothing.
5–6. The target takes no action or Bonus Action and uses all its
movement to move in a random direction.
7–8. The target makes a melee attack against a randomly
determined creature within its reach or does nothing if it can't make
such an attack.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +2, reach 5 ft. Hit: 7 (2d6) Piercing damage. If
the target is a Medium or smaller creature, it has the Prone
condition. The target dies if it is reduced to 0 Hit Points by this
attack. Its body is then absorbed into the mouther, leaving only
equipment behind.
Blinding Spittle (Recharge 5–6). Dexterity Saving Throw: DC 10, each
creature in a 10-foot-radius Sphere centered on a point within 30
feet. Failure: 7 (2d6) Radiant damage, and the target has the Blinded
condition until the end of the mouther's next turn.`}]},{slug:"githyanki-dracomancer",name:"Githyanki Dracomancer",meta:"Aberration (Gith) Medium, Lawful Evil",type:"Aberration",subtype:"Gith",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:16,mod:3,save:8},con:{score:18,mod:4,save:9},int:{score:20,mod:5,save:10},wis:{score:16,mod:3,save:8},cha:{score:18,mod:4,save:4}},fields:{AC:"18",HP:"255 (30d8 + 120)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Arcana +10, Perception +8",Senses:"Blindsight 30 ft., Passive Perception 18",Languages:"Common, Draconic, Gith",CR:"16 (XP 15 000; PB +5)"},cr:"16 (XP 15 000; PB +5)",crValue:"16",xp:15e3,sections:[{title:"ACTIONS",text:`Multiattack. The githyanki makes three Draconic Strike attacks.
Draconic Strike. Melee or Ranged Attack Roll: +10, reach 10 ft. or
range 120 ft. Hit: 12 (2d6 + 5) Slashing damage plus 17 (5d6) Fire
damage, and the target has the Frightened condition until the start
of the githyanki's next turn.
Conjured Dragon's Breath (Recharge 5–6). Dexterity Saving Throw: DC
18, each creature in a 90-foot Cone. Failure: 27 (6d8) Fire damage
plus 27 (6d8) Force damage. Success: Half damage.
Spellcasting. The githyanki casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 18, +10 to hit with spell attacks):
At will: Mage Hand (the hand is Invisible)
2/day each: Nondetection (self only), Plane Shift, Tongues`},{title:"BONUS ACTIONS",text:`Misty Step (3/Day). The githyanki casts Misty Step, requiring no spell
components and using the same spellcasting ability as Spellcasting.
One of Gith's last deeds was to forge an alliance between the githyanki and the
dragon  god  Tiamat.  Ever  since,  the  Dragon  Queen's  red  dragon  consort,
Ephelomon,  and  his  kind  have  been  allies  of  the  githyanki.  Githyanki
dracomancers uphold this pact and cultivate magic talents that complement
the might of red dragons.`}]},{slug:"githyanki-knight",name:"Githyanki Knight",meta:"Aberration (Gith) Medium, Lawful Evil",type:"Aberration",subtype:"Gith",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:5},int:{score:14,mod:2,save:5},wis:{score:14,mod:2,save:5},cha:{score:15,mod:2,save:2}},fields:{AC:"18",HP:"117 (18d8 + 36)",Speed:"30 ft.",Gear:"Plate Armor",Senses:"Passive Perception 12",Languages:"Common, Gith",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The githyanki makes three Silver Sword attacks. It can
replace one attack with a use of Spellcasting to cast Telekinesis if
available.
Silver Sword. Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3)
Slashing damage plus 14 (4d6) Psychic damage. Critical Hit: If the
target is in an astral body (as with the Astral Projection spell), the
githyanki can cut the silvery cord that tethers the target to its
material body instead of dealing damage.
Spellcasting. The githyanki casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 13):
At will: Mage Hand (the hand is Invisible)
2/day each: Nondetection (self only), Tongues
1/day each: Plane Shift, Telekinesis`},{title:"BONUS ACTIONS",text:`Misty Step (2/Day). The githyanki casts Misty Step, requiring no spell
components and using the same spellcasting ability as Spellcasting.
Githyanki knights wield silver blades to slay magic-users who use the Astral
Projection spell to intrude on githyanki territories on the Astral Plane. These
silver  blades  are  sacred  to  the  githyanki.  Non-githyanki  who  claim  these
weapons often find themselves hunted by wrathful githyanki knights.`}]},{slug:"githyanki-warrior",name:"Githyanki Warrior",meta:"Aberration (Gith) Medium, Lawful Evil",type:"Aberration",subtype:"Gith",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:3},int:{score:13,mod:1,save:3},wis:{score:13,mod:1,save:3},cha:{score:10,mod:0,save:0}},fields:{AC:"17",HP:"49 (9d8 + 9)",Speed:"30 ft.",Gear:"Half-Plate Armor",Senses:"Passive Perception 11",Languages:"Common, Gith",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The githyanki makes two Psi Blade attacks.
Psi Blade. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Slashing
damage plus 7 (2d6) Psychic damage.
Spellcasting. The githyanki casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability:
At will: Mage Hand (the hand is Invisible)
2/day: Nondetection (self only)`},{title:"BONUS ACTIONS",text:`Misty Step (2/Day). The githyanki casts Misty Step, requiring no spell
components and using the same spellcasting ability as Spellcasting.
Githyanki warriors use psionic abilities to augment their battle prowess.`}]},{slug:"githzerai-monk",name:"Githzerai Monk",meta:"Aberration (Gith) Medium, Lawful Neutral",type:"Aberration",subtype:"Gith",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:12,mod:1,save:3},dex:{score:15,mod:2,save:4},con:{score:12,mod:1,save:1},int:{score:13,mod:1,save:3},wis:{score:14,mod:2,save:4},cha:{score:10,mod:0,save:0}},fields:{AC:"14",HP:"38 (7d8 + 7)",Speed:"40 ft.",Skills:"Insight +4, Perception +4",Senses:"Passive Perception 14",Languages:"Common, Gith",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The githzerai makes two Psi Strike attacks.
Psi Strike. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2)
Bludgeoning damage plus 9 (2d8) Psychic damage.
Spellcasting. The githzerai casts one of the following spells,
requiring no spell components and using Wisdom as the spellcasting
ability:
At will: Mage Hand (the hand is Invisible)
1/day: See Invisibility`},{title:"BONUS ACTIONS",text:`Psi-Powered Leap (2/Day). The githzerai casts Jump, requiring no
spell components and using the same spellcasting ability as
Spellcasting.`},{title:"REACTIONS",text:`Psionic Defense (2/Day). The githzerai casts Feather Fall or Shield in
response to the spell's trigger, requiring no spell components and
using the same spellcasting ability as Spellcasting.
Githzerai monks pursue control of their minds by honing their physical and
psionic talents. They might be found beyond githzerai sanctuaries, testing
themselves amid the dangerous extremes of the multiverse.`}]},{slug:"githzerai-psion",name:"Githzerai Psion",meta:"Aberration (Gith) Medium, Lawful Neutral",type:"Aberration",subtype:"Gith",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:12,mod:1,save:5},dex:{score:18,mod:4,save:8},con:{score:15,mod:2,save:2},int:{score:19,mod:4,save:8},wis:{score:18,mod:4,save:8},cha:{score:14,mod:2,save:2}},fields:{AC:"18",HP:"169 (26d8 + 52)",Speed:"40 ft., Fly 40 ft. (hover)",Skills:"Arcana +8, Insight +8, Perception +8",Senses:"Passive Perception 18",Languages:"Common, Gith",CR:"12 (XP 8 400; PB +4)"},cr:"12 (XP 8 400; PB +4)",crValue:"12",xp:8400,sections:[{title:"ACTIONS",text:`Multiattack. The githzerai makes three Psychic Warp attacks.
Psychic Warp. Melee or Ranged Attack Roll: +8, reach 5 ft. or range
120 ft. Hit: 26 (4d10 + 4) Psychic damage, and the target has the
githzerai's choice of (A) the Charmed condition until the start of the
githzerai's next turn or (B) the Prone condition, provided the target
is a Large or smaller creature.
Spellcasting. The githzerai casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 16):
At will: Mage Hand (the hand is Invisible)
1/day each: Plane Shift, See Invisibility`},{title:"REACTIONS",text:`Psionic Defense. The githzerai casts Feather Fall or Shield in response
to the spell's trigger, requiring no spell components and using the
same spellcasting ability as Spellcasting.
These powerful psions oversee githzerai sanctuaries, study enigmatic planar
events, and lead rrakkma—hostile forays into mind flayer colonies to slay
illithids and uncover secrets of how the ancient gith were transformed.`}]},{slug:"githzerai-zerth",name:"Githzerai Zerth",meta:"Aberration (Gith) Medium, Lawful Neutral",type:"Aberration",subtype:"Gith",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:13,mod:1,save:4},dex:{score:18,mod:4,save:7},con:{score:15,mod:2,save:2},int:{score:16,mod:3,save:6},wis:{score:17,mod:3,save:6},cha:{score:12,mod:1,save:1}},fields:{AC:"17",HP:"84 (13d8 + 26)",Speed:"40 ft.",Skills:"Arcana +6, Insight +6, Perception +6",Senses:"Passive Perception 16",Languages:"Common, Gith",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The githzerai makes two Psi Strike attacks.
Psi Strike. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4)
Bludgeoning damage plus 13 (3d8) Psychic damage.
Spellcasting. The githzerai casts one of the following spells,
requiring no spell components and using Wisdom as the spellcasting
ability (spell save DC 14):
At will: Mage Hand (the hand is Invisible)
1/day each: Phantasmal Killer (level 6 version), Plane Shift, See
Invisibility`},{title:"BONUS ACTIONS",text:`Psi-Powered Leap (2/Day). The githzerai casts Jump, requiring no
spell components and using the same spellcasting ability as
Spellcasting.`},{title:"REACTIONS",text:`Psionic Defense (2/Day). The githzerai casts Feather Fall or Shield in
response to the spell's trigger, requiring no spell components and
using the same spellcasting ability as Spellcasting.
Githzerai  zerths  embody  the  discipline  espoused  by  their  first  leader,
Zerthimon. Their psionic control aids them in protecting their people and
traveling the planes of existence without fear of being followed by githyanki or
mind flayer foes.`}]},{slug:"glabrezu",name:"Glabrezu",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:20,mod:5,save:9},dex:{score:15,mod:2,save:2},con:{score:21,mod:5,save:9},int:{score:19,mod:4,save:4},wis:{score:17,mod:3,save:7},cha:{score:16,mod:3,save:7}},fields:{AC:"17",HP:"189 (18d10 + 90)",Speed:"40 ft.",Skills:"Deception +7, Perception +7",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Truesight 120 ft., Passive Perception 17",Languages:"Abyssal; telepathy 120 ft.",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Demonic Restoration. If the glabrezu dies outside the Abyss, its body
dissolves into ichor, and it gains a new body instantly, reviving with
all its Hit Points somewhere in the Abyss.
Magic Resistance. The glabrezu has Advantage on saving throws
against spells and other magical effects.`},{title:"ACTIONS",text:`Multiattack. The glabrezu makes two Pincer attacks and uses
Pummel or Spellcasting.
Pincer. Melee Attack Roll: +9, reach 10 ft. Hit: 16 (2d10 + 5) Slashing
damage. If the target is a Medium or smaller creature, it has the
Grappled condition (escape DC 15) from one of two pincers.
Pummel. Dexterity Saving Throw: DC 17, one creature Grappled by
the glabrezu. Failure: 15 (3d6 + 5) Bludgeoning damage. Success: Half
damage.
Spellcasting. The glabrezu casts one of the following spells,
requiring no Material components and using Intelligence as the
spellcasting ability (spell save DC 16):
At Will: Darkness, Detect Magic, Dispel Magic
1/Day Each: Confusion, Fly, Power Word Stun`}]},{slug:"gladiator",name:"Gladiator",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:18,mod:4,save:7},dex:{score:15,mod:2,save:5},con:{score:16,mod:3,save:6},int:{score:10,mod:0,save:0},wis:{score:12,mod:1,save:4},cha:{score:15,mod:2,save:2}},fields:{AC:"16",HP:"112 (15d8 + 45)",Speed:"30 ft.",Skills:"Athletics +10, Performance +5",Gear:"Shield, Spears (3), Studded Leather Armor",Senses:"Passive Perception 11",Languages:"Common",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The gladiator makes three Spear attacks. It can replace
one attack with a use of Shield Bash.
Spear. Melee or Ranged Attack Roll: +7, reach 5 ft. or range 20/60 ft.
Hit: 11 (2d6 + 4) Piercing damage.
Shield Bash. Strength Saving Throw: DC 15, one creature within 5 feet
that the gladiator can see. Failure: 9 (2d4 + 4) Bludgeoning damage.
If the target is a Medium or smaller creature, it has the Prone
condition.`},{title:"REACTIONS",text:`Parry. Trigger: The gladiator is hit by a melee attack roll while
holding a weapon. Response: The gladiator adds 3 to its AC against
that attack, possibly causing it to miss.`}]},{slug:"gnoll-demoniac",name:"Gnoll Demoniac",meta:"Fiend Medium, Chaotic Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:6},dex:{score:12,mod:1,save:1},con:{score:17,mod:3,save:6},int:{score:14,mod:2,save:2},wis:{score:15,mod:2,save:5},cha:{score:17,mod:3,save:6}},fields:{AC:"16",HP:"135 (18d8 + 54)",Speed:"30 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Abyssal, Common, Gnoll",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The gnoll makes two Abyssal Strike attacks.
Abyssal Strike. Melee or Ranged Attack Roll: +6, reach 5 ft. or range 60
ft. Hit: 20 (5d6 + 3) Poison damage.
Hunger of Yeenoghu (Recharge 5–6). The gnoll conjures a 30-foot
Cube of magical Darkness originating from a point it can see within
60 feet, which lasts for 1 minute or until the gnoll's Concentration
14, any creature that starts its turn in this area or enters it for the
first time on a turn. Failure: 28 (8d6) Necrotic damage, and the gnoll
or a creature of its choice it can see gains 10 Temporary Hit Points.
Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Rampage (2/Day). Immediately after dealing damage to a creature
that is already Bloodied, the gnoll moves up to half its Speed, and it
makes one Abyssal Strike attack.
The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their
corruption and violence delighted the demon lord Yeenoghu, who encouraged
their numbers and spread them across the multiverse. Ever since, gnolls have
been the cackling servants of Yeenoghu, existing to cause ruin and to feast on
what remains.
Gnoll demoniacs are berserkers that arise from gnolls who've ritualistically fed
on  flesh  corrupted  by  the  Abyss.  Now  embodying  the  ruinous  hunger  of
Yeenoghu, these gnolls throw themselves into battle, heedless of odds or their
own survival. Rampaging demoniacs even devour other gnolls in their wild
frenzies.`}]},{slug:"gnoll-fang-of-yeenoghu",name:"Gnoll Fang Of Yeenoghu",meta:"Fiend Medium, Chaotic Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:15,mod:2,save:4},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:2},cha:{score:13,mod:1,save:3}},fields:{AC:"14",HP:"71 (11d8 + 22)",Speed:"30 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Abyssal, Gnoll",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The gnoll makes one Bite attack and two Bone Flail
attacks.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage
plus 7 (2d6) Poison damage, and the target has the Poisoned
condition until the start of the gnoll's next turn.
Bone Flail. Melee Attack Roll: +5, reach 10 ft. Hit: 7 (1d8 + 3) Piercing
damage.`},{title:"BONUS ACTIONS",text:`Rampage (2/Day). Immediately after dealing damage to a creature
that is already Bloodied, the gnoll moves up to half its Speed, and it
makes one Bite attack.
The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their
corruption and violence delighted the demon lord Yeenoghu, who encouraged
their numbers and spread them across the multiverse. Ever since, gnolls have
been the cackling servants of Yeenoghu, existing to cause ruin and to feast on
what remains.
Gnolls possessed by demonic vestiges of the demon lord Yeenoghu, fangs of
Yeenoghu direct the chaos of gnoll packs. Along the way, these fanatics seek
grisly omens from Yeenoghu and strive to interpret the demon lord's vicious
goals.`}]},{slug:"gnoll-pack-lord",name:"Gnoll Pack Lord",meta:"Fiend Medium, Chaotic Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"15",HP:"49 (9d8 + 9)",Speed:"30 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Gnoll",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The gnoll makes two attacks, using Bone Whip or Bone
Javelin in any combination, and it uses Incite Rampage if available.
Bone Whip. Melee Attack Roll: +5, reach 10 ft. Hit: 8 (2d4 + 3) Slashing
damage.
Bone Javelin. Ranged Attack Roll: +5, range 30/120 ft. Hit: 7 (1d8 + 3)
Piercing damage.
Incite Rampage (Recharge 5–6). The gnoll targets another creature it
can see within 60 feet of itself that has the Rampage Bonus Action.
The target can take a Reaction to make one melee attack.`},{title:"BONUS ACTIONS",text:`Rampage (2/Day). Immediately after dealing damage to a creature
that is already Bloodied, the gnoll moves up to half its Speed, and it
makes one Bone Whip attack.
The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their
corruption and violence delighted the demon lord Yeenoghu, who encouraged
their numbers and spread them across the multiverse. Ever since, gnolls have
been the cackling servants of Yeenoghu, existing to cause ruin and to feast on
what remains.
Rising above other gnolls with their viciousness and physical prowess, gnoll
pack lords terrorize weaker gnolls into their service. These brutes drive other
gnolls to acts of great violence, then claim the best of their servants' spoils.`}]},{slug:"gnoll-warrior",name:"Gnoll Warrior",meta:"Fiend Medium, Chaotic Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:12,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"27 (6d8)",Speed:"30 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Gnoll",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing
damage.
Bone Bow. Ranged Attack Roll: +3, range 150/600 ft. Hit: 6 (1d10 + 1)
Piercing damage.`},{title:"BONUS ACTIONS",text:`Rampage (1/Day). Immediately after dealing damage to a creature
that is already Bloodied, the gnoll moves up to half its Speed, and it
makes one Rend attack.
The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their
corruption and violence delighted the demon lord Yeenoghu, who encouraged
their numbers and spread them across the multiverse. Ever since, gnolls have
been the cackling servants of Yeenoghu, existing to cause ruin and to feast on
what remains.
Gnoll warriors crave endless slaughter but quickly grow bored with the prey
they kill and the treasures they plunder. Nevertheless, they're enraged by the
thought of anyone else having what's theirs, compelling them to despoil what
they can't take with them.`}]},{slug:"goat",name:"Goat",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:11,mod:0,save:2},dex:{score:10,mod:0,save:0},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"10",HP:"4 (1d8)",Speed:"40 ft., Climb 30 ft.",Skills:"Perception +2",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Ram. Melee Attack Roll: +2, reach 5 ft. Hit: 1 Bludgeoning damage, or
the goat deals 2 (1d4) Bludgeoning damage if it moved at least 20
feet straight toward the target immediately before the hit.`}]},{slug:"goblin-boss",name:"Goblin Boss",meta:"Fey (Goblinoid) Small, Chaotic Neutral",type:"Fey",subtype:"Goblinoid",size:"Small",alignment:"Chaotic Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:8,mod:-1,save:-1},cha:{score:10,mod:0,save:0}},fields:{AC:"17",HP:"21 (6d6)",Speed:"30 ft.",Skills:"Stealth +6",Gear:"Chain Shirt, Scimitar, Shield, Shortbow",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Common, Goblin",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The goblin makes two attacks, using Scimitar or
Shortbow in any combination.
Scimitar. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing
damage, plus 2 (1d4) Slashing damage if the attack roll had
Advantage.
Shortbow. Ranged Attack Roll: +4, range 80/320 ft. Hit: 5 (1d6 + 2)
Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had
Advantage.`},{title:"BONUS ACTIONS",text:"Nimble Escape. The goblin takes the Disengage or Hide action."},{title:"REACTIONS",text:`Redirect Attack. Trigger: A creature the goblin can see makes an
attack roll against it. Response: The goblin chooses a Medium or
Small ally within 5 feet of itself. The goblin and that ally swap places,
and the ally becomes the target of the attack instead.
Goblins are Feywild embodiments of recklessness and ruin. They delight in
wreckage—the  louder,  the  more  energetic,  and  the  more  convoluted,  the
better. Goblin raids are often as much opportunities to enjoy setting fires and
tormenting livestock as they are parts of more disruptive plots. Goblins obey
those who accomplish the wildest plans. Such leaders might be goblin raid
masterminds, bombastic magic-users, or those capable of making the loudest
noises.  Hobgoblins  and  forceful  humanoids  might  also  command  ornery
groups of goblins, directing their destructiveness toward banditry, sabotage, or
war.
Goblin bosses are often the most imaginative, disruptive, or forceful goblins.
Through a combination of luck, cowardice, and callousness, these leaders
avoid harm at the expense of their followers.`}]},{slug:"goblin-hexer",name:"Goblin Hexer",meta:"Fey (Goblinoid) Small, Chaotic Neutral",type:"Fey",subtype:"Goblinoid",size:"Small",alignment:"Chaotic Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:16,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:16,mod:3,save:3},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"45 (10d6 + 10)",Speed:"30 ft.",Skills:"Sleight of Hand +5, Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common, Goblin",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The goblin makes two Hex Stick attacks. It can replace
one attack with a use of Spellcasting.
Hex Stick. Melee or Ranged Attack Roll: +5, reach 5 ft. or range 60 ft.
Hit: 12 (2d8 + 3) Psychic damage.
Spellcasting. The goblin casts one of the following spells, using
Intelligence as the spellcasting ability (spell save DC 13):
At will: Minor Illusion
1/day each: Blindness/Deafness, Faerie Fire, Grease`},{title:"REACTIONS",text:`Jinx. Trigger: A creature the goblin can see hits it with an attack roll.
Response—Wisdom Saving Throw: DC 13, the triggering creature.
Failure: The attack misses instead.
Goblins are Feywild embodiments of recklessness and ruin. They delight in
wreckage—the  louder,  the  more  energetic,  and  the  more  convoluted,  the
better. Goblin raids are often as much opportunities to enjoy setting fires and
tormenting livestock as they are parts of more disruptive plots. Goblins obey
those who accomplish the wildest plans. Such leaders might be goblin raid
masterminds, bombastic magic-users, or those capable of making the loudest
noises.  Hobgoblins  and  forceful  humanoids  might  also  command  ornery
groups of goblins, directing their destructiveness toward banditry, sabotage, or
war.
Goblin  hexers  use  flashy  and  disruptive  magic.  Many  goblin  hexers  are
theatrical, dressing and behaving in exaggerated mimicry of archmages.`}]},{slug:"goblin-minion",name:"Goblin Minion",meta:"Fey (Goblinoid) Small, Chaotic Neutral",type:"Fey",subtype:"Goblinoid",size:"Small",alignment:"Chaotic Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:8,mod:-1,save:-1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"12",HP:"7 (2d6)",Speed:"30 ft.",Skills:"Stealth +6",Gear:"Daggers (3)",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Common, Goblin",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Dagger. Melee or Ranged Attack Roll: +4, reach 5 ft. or range 20/60 ft.
Hit: 4 (1d4 + 2) Piercing damage.`},{title:"BONUS ACTIONS",text:`Nimble Escape. The goblin takes the Disengage or Hide action.
Goblins are Feywild embodiments of recklessness and ruin. They delight in
wreckage—the  louder,  the  more  energetic,  and  the  more  convoluted,  the
better. Goblin raids are often as much opportunities to enjoy setting fires and
tormenting livestock as they are parts of more disruptive plots. Goblins obey
those who accomplish the wildest plans. Such leaders might be goblin raid
masterminds, bombastic magic-users, or those capable of making the loudest
noises.  Hobgoblins  and  forceful  humanoids  might  also  command  ornery
groups of goblins, directing their destructiveness toward banditry, sabotage, or
war.
Goblin minions enjoy participating in the disruptive schemes of clever leaders
but are quick to flee when confronted by their comeuppance.`}]},{slug:"goblin-warrior",name:"Goblin Warrior",meta:"Fey (Goblinoid) Small, Chaotic Neutral",type:"Fey",subtype:"Goblinoid",size:"Small",alignment:"Chaotic Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:8,mod:-1,save:-1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"15",HP:"10 (3d6)",Speed:"30 ft.",Skills:"Stealth +6",Gear:"Leather Armor, Scimitar, Shield, Shortbow",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Common, Goblin",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Scimitar. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing
damage, plus 2 (1d4) Slashing damage if the attack roll had
Advantage.
Shortbow. Ranged Attack Roll: +4, range 80/320 ft. Hit: 5 (1d6 + 2)
Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had
Advantage.`},{title:"BONUS ACTIONS",text:`Nimble Escape. The goblin takes the Disengage or Hide action.
Goblins are Feywild embodiments of recklessness and ruin. They delight in
wreckage—the  louder,  the  more  energetic,  and  the  more  convoluted,  the
better. Goblin raids are often as much opportunities to enjoy setting fires and
tormenting livestock as they are parts of more disruptive plots. Goblins obey
those who accomplish the wildest plans. Such leaders might be goblin raid
masterminds, bombastic magic-users, or those capable of making the loudest
noises.  Hobgoblins  and  forceful  humanoids  might  also  command  ornery
groups of goblins, directing their destructiveness toward banditry, sabotage, or
war.
Goblin warriors excel at causing mischief. Those in service to Maglubiyet have
greater discipline and are likely to withdraw to set up ambushes.`}]},{slug:"gold-dragon-wyrmling",name:"Gold Dragon Wyrmling",meta:"Dragon (Metallic) Medium, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Medium",alignment:"Lawful Good",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:4},con:{score:17,mod:3,save:3},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:2},cha:{score:16,mod:3,save:3}},fields:{AC:"17",HP:"60 (8d8 + 24)",Speed:"30 ft., Fly 60 ft., Swim 30 ft.",Skills:"Perception +4, Stealth +4",Immunities:"Fire",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Slashing
damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 13, each
creature in a 15-foot Cone. Failure: 22 (4d10) Fire damage. Success:
Half damage.
Weakening Breath. Strength Saving Throw: DC 13, each creature that
isn't currently affected by this breath in a 15-foot Cone. Failure: The
target has Disadvantage on Strength-based D20 Tests and subtracts
2 (1d4) from its damage rolls. It repeats the save at the end of each
of its turns, ending the effect on itself on a success. After 1 minute,
it succeeds automatically.
Gold dragons work to make the world a better place. The most powerful of the
metallic dragons, these awe-inspiring dragons strive to protect that which is
good and bend fate toward a brighter future. Their kind dispositions don't
prevent gold dragons from engaging in combat when necessary, though, and
they exhale brilliant flames and weakening magic to rout their foes. Gold
dragons favor grasslands and pristine forests, frequently dwelling near awe-
inspiring natural wonders or guarding monuments from ancient civilizations.
In their lairs, gold dragons hoard coins and gems, but they frequently put their
treasure to use in pursuit of greater goals. They often use their riches to buy
rare lore books, pay informants, or patronize idealistic adventurers.`}]},{slug:"gorgon",name:"Gorgon",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:20,mod:5,save:5},dex:{score:11,mod:0,save:0},con:{score:18,mod:4,save:4},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"19",HP:"114 (12d10 + 48)",Speed:"40 ft.",Skills:"Perception +7",Immunities:"Exhaustion, Petrified",Senses:"Darkvision 60 ft., Passive Perception 17",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Gore. Melee Attack Roll: +8, reach 5 ft. Hit: 18 (2d12 + 5) Piercing
damage. If the target is a Large or smaller creature and the gorgon
moved 20+ feet straight toward it immediately before the hit, the
target has the Prone condition.
Petrifying Breath (Recharge 5–6). Constitution Saving Throw: DC 15,
each creature in a 30-foot Cone. First Failure: The target has the
Restrained condition and repeats the save at the end of its next turn
if it is still Restrained, ending the effect on itself on a success. Second
Failure: The target has the Petrified condition instead of the
Restrained condition.`},{title:"BONUS ACTIONS",text:`Trample. Dexterity Saving Throw: DC 16, one creature within 5 feet
that has the Prone condition. Failure: 16 (2d10 + 5) Bludgeoning
damage. Success: Half damage.
Most gorgons are iron bulls wreathed in clouds of petrifying gas. Their metal
plates vary in sheen and color, from sleek silver to pitted black. The oldest
gorgons might be covered in rust, but this rarely impedes their abilities. These
gorgons' stomping grounds are littered with the shattered remains of petrified
foes. Many gorgons outlive their creators by centuries, misleading some to
believe these creations have natural origins and territories. Most such gorgons
continue to follow age-old commands, guarding sites long fallen to ruin.`}]},{slug:"goristro",name:"Goristro",meta:"Fiend (Demon) Huge, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:25,mod:7,save:13},dex:{score:11,mod:0,save:6},con:{score:25,mod:7,save:13},int:{score:6,mod:-2,save:-2},wis:{score:13,mod:1,save:7},cha:{score:14,mod:2,save:2}},fields:{AC:"19",HP:"310 (23d12 + 161)",Speed:"50 ft.",Skills:"Perception +7, Survival +7",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 17",Languages:"Abyssal",CR:"17 (XP 18 000; PB +6)"},cr:"17 (XP 18 000; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:`Demonic Restoration. If the goristro dies outside the Abyss, its body
dissolves into ichor, and it gains a new body instantly, reviving with
all its Hit Points somewhere in the Abyss.
Magic Resistance. The goristro has Advantage on saving throws
against spells and other magical effects.
Siege Monster. The goristro deals double damage to objects and
structures.`},{title:"ACTIONS",text:`Multiattack. The goristro makes one Brutal Gore attack and two
Slam attacks.
Brutal Gore. Melee Attack Roll: +13, reach 10 ft. Hit: 40 (6d10 + 7)
Piercing damage. If the target is a Huge or smaller creature, it is
pushed up to 20 feet straight away from the goristro and has the
Prone condition.
Slam. Melee Attack Roll: +13, reach 10 ft. Hit: 29 (4d10 + 7)
Bludgeoning damage.`},{title:"BONUS ACTIONS",text:`Charge. The goristro moves up to half its Speed straight toward an
enemy it can see.`}]},{slug:"graveyard-revenant",name:"Graveyard Revenant",meta:"Undead Huge, Neutral",type:"Undead",subtype:"",size:"Huge",alignment:"Neutral",abilities:{str:{score:20,mod:5,save:8},dex:{score:14,mod:2,save:2},con:{score:20,mod:5,save:8},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:6},cha:{score:18,mod:4,save:7}},fields:{AC:"14",HP:"161 (14d12 + 70)",Speed:"40 ft.",Resistances:"Necrotic, Psychic",Immunities:"Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned, Stunned, Unconscious",Senses:"Darkvision 120 ft., Passive Perception 13",Languages:"Common plus two other languages",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:`Undead Restoration. If the revenant dies, it revives 24 hours later
unless Dispel Evil and Good is cast on its remains. If it revives, it
animates another group of corpses elsewhere on the same plane of
existence; it now looks different but uses the same stat block and
returns with all its Hit Points.`},{title:"ACTIONS",text:`Multiattack. The revenant makes two Suffocate attacks.
Suffocate. Melee Attack Roll: +8, reach 10 ft. Hit: 10 (1d10 + 5)
Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is
a Large or smaller creature, it has the Grappled condition (escape
DC 15). Until the grapple ends, the target is suffocating. The
revenant can have up to two targets Grappled in this way at a time.
Haunting Glare (Recharge 5–6). Wisdom Saving Throw: DC 15, each
creature in a 30-foot Emanation originating from the revenant.
Failure: The target has the Paralyzed condition and repeats the save
at the end of each of its turns, ending the effect on itself on a
success. After 1 minute, it succeeds automatically.
Graveyard revenants possess dozens of bodies that combine to form grotesque
masses. They take revenge on those responsible for mass deaths or institutions
that callously ruin lives.`}]},{slug:"gray-ooze",name:"Gray Ooze",meta:"Ooze Medium, Unaligned",type:"Ooze",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:12,mod:1,save:1},dex:{score:6,mod:-2,save:-2},con:{score:16,mod:3,save:3},int:{score:1,mod:-5,save:-5},wis:{score:6,mod:-2,save:-2},cha:{score:2,mod:-4,save:-4}},fields:{AC:"9",HP:"22 (3d8 + 9)",Speed:"10 ft., Climb 10 ft.",Skills:"Stealth +2",Resistances:"Acid, Cold, Fire",Immunities:"Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",Senses:"Blindsight 60 ft., Passive Perception 8",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Amorphous. The ooze can move through a space as narrow as 1 inch
without expending extra movement to do so.
Corrosive Form. Nonmagical ammunition is destroyed immediately
after hitting the ooze and dealing any damage. Any nonmagical
weapon takes a cumulative -1 penalty to attack rolls immediately
after dealing damage to the ooze and coming into contact with it.
The weapon is destroyed if the penalty reaches -5. The penalty can
be removed by casting the Mending spell on the weapon. The ooze
can eat through 2-inch-thick, nonmagical metal or wood in 1 round.`},{title:"ACTIONS",text:`Pseudopod. Melee Attack Roll: +3, reach 5 ft. Hit: 10 (2d8 + 1) Acid
damage. Nonmagical armor worn by the target takes a -1 penalty to
the AC it offers. The armor is destroyed if the penalty reduces its AC
to 10. The penalty can be removed by casting the Mending spell on
the armor.
Gray oozes appear in areas affected by unpredictable magic. Magic-users who
fail in their attempts to bind elemental spirits to the bodies of Constructs
might also accidentally create gray oozes.`}]},{slug:"gray-slaad",name:"Gray Slaad",meta:"Aberration Medium, Chaotic Neutral",type:"Aberration",subtype:"",size:"Medium",alignment:"Chaotic Neutral",abilities:{str:{score:19,mod:4,save:4},dex:{score:17,mod:3,save:3},con:{score:16,mod:3,save:3},int:{score:13,mod:1,save:1},wis:{score:8,mod:-1,save:-1},cha:{score:18,mod:4,save:4}},fields:{AC:"18",HP:"150 (20d8 + 60)",Speed:"40 ft.",Skills:"Arcana +5, Perception +7",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Senses:"Blindsight 60 ft., Darkvision 60 ft., Passive Perception 17",Languages:"Common, Slaad; telepathy 60 ft.",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Magic Resistance. The slaad has Advantage on saving throws
against spells and other magical effects.
Regeneration. The slaad regains 10 Hit Points at the start of each of
its turns if it has at least 1 Hit Point.`},{title:"ACTIONS",text:`Multiattack. The slaad makes two Chaos Claw attacks.
Chaos Claw. Melee Attack Roll: +8, reach 10 ft. Hit: 9 (1d10 + 4)
Slashing damage plus 11 (2d10) Necrotic damage. Until the start of
the slaad's next turn, the target has a condition determined by
rolling 1d4: on a 1, Charmed; on a 2, Frightened; on a 3, Poisoned; or
on a 4, Incapacitated.
Spellcasting. The slaad casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 16):
At will: Detect Magic, Detect Thoughts, Invisibility (self only), Mage
Hand, Major Image
1/day each: Cloudkill, Fly, Plane Shift (self only), Tongues`},{title:"BONUS ACTIONS",text:`Shape-Shift. The slaad shape-shifts into a Small or Medium
Humanoid, or it returns to its true form. Other than its size, its
game statistics are the same in each form. Any equipment it is
wearing or carrying isn't transformed.
Gray slaadi arise from green slaadi transformed by the Spawning
Stone or slaad lords. They explore the planes, seeking Humanoid
communities to invade near planar pathways`}]},{slug:"green-dragon-wyrmling",name:"Green Dragon Wyrmling",meta:"Dragon (Chromatic) Medium, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:12,mod:1,save:3},con:{score:13,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:2},cha:{score:13,mod:1,save:1}},fields:{AC:"17",HP:"38 (7d8 + 7)",Speed:"30 ft., Fly 60 ft., Swim 30 ft.",Skills:"Perception +4, Stealth +3",Immunities:"Poison; Poisoned",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing
damage plus 3 (1d6) Poison damage.
Poison Breath (Recharge 5–6). Constitution Saving Throw: DC 11,
each creature in a 15-foot Cone. Failure: 21 (6d6) Poison
damage. Success: Half damage.
From forbidden forest depths, green dragons whisper evils into the
world  and  manipulate  the  lives  of  those  who  listen.  Elusive,
conniving, and egotistical, these chromatic dragons patiently prey
on the fears of shorter-lived beings, corrupting and isolating them.
Green  dragons  might  lurk  amid  labyrinthine  wildernesses  for
centuries without revealing themselves; even their most devoted
followers might know them only as the voice of the woodlands or a
whisper in their dreams. Despite their might, most green dragons
disdain physical violence, viewing combat as servants' work and
preferring to trick foes into dangerous or exploitative scenarios.
These  dragons  collect  "baubles"  that  embody  their  webs  of
manipulation and serve as tools of extortion, such as compromising
documents, family heirlooms, and sentimental treasures.`}]},{slug:"green-hag",name:"Green Hag",meta:"Fey Medium, Neutral Evil",type:"Fey",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:14,mod:2,save:2}},fields:{AC:"17",HP:"82 (11d8 + 33)",Speed:"30 ft., Swim 30 ft.",Skills:"Arcana +5, Deception +4, Perception +4, Stealth +3",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Common, Elvish, Sylvan",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Amphibious. The hag can breathe air and water.
Coven Magic. While within 30 feet of at least two hag allies, the
hag can cast one of the following spells, requiring no Material
components, using the spell's normal casting time, and using
Intelligence as the spellcasting ability (spell save DC 11): Augury,
Find Familiar, Identify, Locate Object, Scrying, or Unseen Servant.
The hag must ffnish a Long Rest before using this trait to cast
that spell again.
Mimicry. The hag can mimic animal sounds and humanoid
voices. A creature that hears the sounds can tell they are
imitations only with a successful DC 14 Wisdom (Insight) check.`},{title:"ACTIONS",text:`Multiattack. The hag makes two Claw attacks.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Slashing
damage plus 3 (1d6) Poison damage.
Spellcasting. The hag casts one of the following spells, requiring
no Material components and using Wisdom as the spellcasting
ability (spell save DC 12, +4 to hit with spell attacks):
At Will: Dancing Lights, Disguise Self (24-hour duration),
Invisibility (self only, and the hag leaves no tracks while
Invisible), Minor Illusion, Ray of Sickness (level 3 version)
Green hags work bitter magic to foul all that is beautiful and pure.
Whether alone or in covens of other hags, these ancient witches call
on eerie forces, spreading corruption and plotting doom for those
who earn their ire. Green hags are adept deceivers, and they use
illusions to cloak themselves in unassuming forms, hoping to tempt
innocents into peril. These hags often spirit their victims back to
surreal lairs where they hold captives prisoner or cook them into
monstrous meals. Green hags frequently know strange magic or
forgotten secrets, such as the weaknesses of villains, the locations
of lost treasures, or the ways to break curses. They might trade
such knowledge for rare magic or symbolic treasures.`}]},{slug:"green-slaad",name:"Green Slaad",meta:"Aberration Large, Chaotic Neutral",type:"Aberration",subtype:"",size:"Large",alignment:"Chaotic Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:11,mod:0,save:0},wis:{score:8,mod:-1,save:-1},cha:{score:18,mod:4,save:4}},fields:{AC:"16",HP:"144 (17d10 + 51)",Speed:"30 ft.",Skills:"Arcana +3, Perception +2",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Senses:"Blindsight 30 ft., Darkvision 60 ft., Passive Perception 12",Languages:"Common, Slaad; telepathy 60 ft.",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Magic Resistance. The slaad has Advantage on saving throws
against spells and other magical efiects.
Regeneration. The slaad regains 10 Hit Points at the start of each
of its turns if it has at least 1 Hit Point.`},{title:"ACTIONS",text:`Multiattack. The slaad makes three Chaos Stafi attacks.
Chaos Staff. Melee or Ranged Attack Roll: +7, reach 10 ft. or range
60 ft. Hit: 8 (1d8 + 4) Force damage. Until the start of the slaad's
next turn, the target has a condition determined by rolling 1d4:
on a 1, Charmed; on a 2, Frightened; on a 3, Poisoned; or on a 4,
Incapacitated.
Spellcasting. The slaad casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 14, +6 to hit with spell
attacks):
At will: Detect Magic, Detect Thoughts, Mage Hand
1/day each: Fireball, Invisibility (self only)`},{title:"BONUS ACTIONS",text:`Shape-Shift. The slaad shape-shifts into a Small or Medium
Humanoid, or it returns to its true form. Other than its size, its
game statistics are the same in each form. Any equipment it is
wearing or carrying isn't transformed.
Green slaadi come into being when the propagation methods of red
or blue slaadi affect certain creatures capable of casting spells of
level 3 or higher. Green slaadi are more intelligent than their blue
and red brethren and often direct their kin to portals where gray
slaadi have identified Humanoid communities ripe for invasion.`}]},{slug:"grell",name:"Grell",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"12",HP:"55 (10d8 + 10)",Speed:"10 ft., Fly 30 ft. (hover)",Skills:"Perception +4, Stealth +6",Immunities:"Lightning; Blinded, Prone",Senses:"Blindsight 60 ft., Passive Perception 14",Languages:"Deep Speech",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Abduct. The grell needn't spend extra movement to move a
creature it is grappling.`},{title:"ACTIONS",text:`Multiattack. The grell makes one Beak attack and one Paralyzing
Tentacles attack.
Beak. Melee Attack Roll: +4, reach 5 ft. Hit: 11 (2d8 + 2) Piercing
damage.
Paralyzing Tentacles. Melee Attack Roll: +4, reach 10 ft. Hit: 7
(1d10 + 2) Piercing damage. If the target is a Medium or smaller
creature, it has the Grappled condition (escape DC 12) from two
of ten tentacles. The target is also subjected to the following
efiect. Constitution Saving Throw: DC 11. Failure: The target has
the Poisoned condition and repeats the save at the end of each
of its turns, ending the efiect on itself on a success. After 1
minute, it succeeds automatically. While Poisoned, the target
has the Paralyzed condition.`}]},{slug:"grick",name:"Grick",meta:"Aberration Medium, Unaligned",type:"Aberration",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:3,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:5,mod:-3,save:-3}},fields:{AC:"14",HP:"54 (12d8)",Speed:"30 ft., Climb 30 ft.",Skills:"Stealth +4",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The grick makes one Beak attack and one Tentacles
attack.
Beak. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Piercing
damage.
Tentacles. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2)
Slashing damage. If the target is a Medium or smaller creature,
it has the Grappled condition (escape DC 12) from all four
tentacles.
Gricks tend to be solitary hunters, but young gricks might lurk near
dozens of  their  brood mates  for  years  before  gradually  drifting
apart.`}]},{slug:"grick-ancient",name:"Grick Ancient",meta:"Aberration Large, Unaligned",type:"Aberration",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:16,mod:3,save:3},con:{score:15,mod:2,save:2},int:{score:4,mod:-3,save:-3},wis:{score:14,mod:2,save:2},cha:{score:9,mod:-1,save:-1}},fields:{AC:"18",HP:"135 (18d10 + 36)",Speed:"30 ft., Climb 30 ft.",Skills:"Stealth +6",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"—",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The grick makes one Beak attack, one Slam attack,
and one Tentacles attack.
Beak. Melee Attack Roll: +7, reach 10 ft. Hit: 22 (4d8 + 4) Piercing
damage.
Slam. Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4)
Bludgeoning damage. If the target is a Large or smaller
creature, it has the Prone condition.
Tentacles. Melee Attack Roll: +7, reach 10 ft. Hit: 15 (2d10 + 4)
Slashing damage. If the target is a Large or smaller creature, it
has the Grappled condition (escape DC 14) from all four
tentacles.
Gricks can live for centuries, with the eldest growing to monstrous
sizes. Grick ancients actively hunt more than they wait in ambush,
and they have no qualms about devouring smaller gricks.`}]},{slug:"griffon",name:"Griffon",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:13,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"12",HP:"59 (7d10 + 21)",Speed:"30 ft., Fly 80 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The grifion makes two Rend attacks.
Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Piercing
damage. If the target is a Medium or smaller creature, it has the
Grappled condition (escape DC 14) from both of the grifion's
front claws.`}]},{slug:"grimlock",name:"Grimlock",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:9,mod:-1,save:-1},wis:{score:8,mod:-1,save:-1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"11",HP:"11 (2d8 + 2)",Speed:"30 ft., Climb 30 ft.",Skills:"Athletics +5, Perception +3, Stealth +5",Senses:"Blindsight 30 ft., Passive Perception 13",Languages:"—",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Bone Cudgel. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3)
Bludgeoning damage plus 2 (1d4) Psychic damage.`}]},{slug:"guard",name:"Guard",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:13,mod:1,save:1},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"16",HP:"11 (2d8 + 2)",Speed:"30 ft.",Skills:"Perception +2",Gear:"Chain Shirt, Shield, Spear",Senses:"Passive Perception 12",Languages:"Common",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Spear. Melee or Ranged Attack Roll: +3, reach 5 ft. or range 20/60
ft. Hit: 4 (1d6 + 1) Piercing damage.
Guards are perceptive, but most have little martial training. They
might be bouncers, lookouts, members of a city watch, or other
keen-eyed warriors.`}]},{slug:"guard-captain",name:"Guard Captain",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:13,mod:1,save:1}},fields:{AC:"18",HP:"75 (10d8 + 30)",Speed:"30 ft.",Skills:"Athletics +6, Perception +4",Gear:"Breastplate, Javelins (6), Longsword, Shield",Senses:"Passive Perception 14",Languages:"Common",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The guard makes two attacks, using Javelin or
Longsword in any combination.
Javelin. Melee or Ranged Attack Roll: +6, reach 5 ft. or range
30/120 ft. Hit: 14 (3d6 + 4) Piercing damage.
Longsword. Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4)
Slashing damage.
Guard  captains  often  have  ample  professional  experience.  They
might be accomplished bodyguards, protectors of magic treasures,
veteran watch members, or similar wardens.`}]},{slug:"guardian-naga",name:"Guardian Naga",meta:"Celestial Large, Lawful Good",type:"Celestial",subtype:"",size:"Large",alignment:"Lawful Good",abilities:{str:{score:19,mod:4,save:4},dex:{score:18,mod:4,save:8},con:{score:16,mod:3,save:7},int:{score:16,mod:3,save:7},wis:{score:19,mod:4,save:8},cha:{score:18,mod:4,save:8}},fields:{AC:"18",HP:"136 (16d10 + 48)",Speed:"40 ft., Climb 40 ft., Swim 40 ft.",Skills:"Arcana +11, History +11, Religion +11",Immunities:"Poison; Charmed, Paralyzed, Poisoned, Restrained",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Celestial, Common",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Celestial Restoration. If the naga dies, it returns to life in 1d6
days and regains all its Hit Points unless Dispel Evil and Good is
cast on its remains.`},{title:"ACTIONS",text:`Multiattack. The naga makes two Bite attacks. It can replace any
attack with a use of Poisonous Spittle.
Bite. Melee Attack Roll: +8, reach 10 ft. Hit: 17 (2d12 + 4) Piercing
damage plus 22 (4d10) Poison damage.
Poisonous Spittle. Constitution Saving Throw: DC 16, one creature
the naga can see within 60 feet. Failure: 31 (7d8) Poison
damage, and the target has the Blinded condition until the start
of the naga's next turn. Success: Half damage only.
Spellcasting. The naga casts one of the following spells,
requiring no Somatic or Material components and using
Wisdom as the spellcasting ability (spell save DC 16):
At Will: Thaumaturgy
1/Day Each: Clairvoyance, Cure Wounds (level 6 version), Flame
Strike (level 6 version), Geas, True Seeing`}]},{slug:"gulthias-blight",name:"Gulthias Blight",meta:"Plant Gargantuan, Neutral Evil",type:"Plant",subtype:"",size:"Gargantuan",alignment:"Neutral Evil",abilities:{str:{score:25,mod:7,save:7},dex:{score:10,mod:0,save:0},con:{score:22,mod:6,save:6},int:{score:10,mod:0,save:0},wis:{score:18,mod:4,save:4},cha:{score:12,mod:1,save:1}},fields:{AC:"20",HP:"264 (16d20 + 96)",Speed:"50 ft.",Skills:"Perception +9",Resistances:"Fire, Necrotic",Immunities:"Deafened",Senses:"Blindsight 120 ft., Passive Perception 19",Languages:"Common, Druidic",CR:"16 (XP 15 000; PB +5)"},cr:"16 (XP 15 000; PB +5)",crValue:"16",xp:15e3,sections:[{title:"TRAITS",text:`Blight Seeds. When it ffnishes a Long Rest, the blight expels 1d6
seeds into unoccupied spaces on the ground within 30 feet of
itself. After 24 hours, the seeds become creatures under the
blight's control. Roll 1d8 for each seed to determine the
creature it becomes: on 1-4, Twig Blight; on 5-6, Needle Blight;
on 7-8, Vine Blight.`},{title:"ACTIONS",text:`Multiattack. The blight makes two attacks, using Slam or Thorn
Volley in any combination. It also uses Life-Draining Root.
Slam. Melee Attack Roll: +12, reach 10 ft. Hit: 25 (4d8 + 7)
Bludgeoning damage.
Thorn Volley. Ranged Attack Roll: +12, range 60/180 ft. Hit: 20 (3d8
+ 7) Piercing damage.
Life-Draining Root. Constitution Saving Throw: DC 20, one Huge or
smaller creature the blight can see within 30 feet. Failure: 14
(2d6 + 7) Necrotic damage, and the target has the Grappled
condition (escape DC 17) from one of six roots. Until the grapple
ends, the target has the Restrained condition and takes 14 (4d6)
Necrotic damage at the start of each of its turns. The target's
Hit Point maximum decreases by an amount equal to the
Necrotic damage taken, and the blight regains Hit Points equal
to that amount.
Ancient plants twisted by evil, Gulthias blights feed on blood and
despoil  the  surrounding  land,  often  giving  rise  to  subservient
blights. These cursed plants take their name from the story of their
creation; the first of their kind was a tree that grew from the stake
piercing the heart of the vampire Gulthias. These blights consider
all creatures either servants or fertilizer for the blights' corruption.`}]},{slug:"half-dragon",name:"Half-Dragon",meta:"Dragon Medium, Neutral",type:"Dragon",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:5},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:15,mod:2,save:5},cha:{score:14,mod:2,save:2}},fields:{AC:"18",HP:"105 (14d8 + 42)",Speed:"40 ft.",Skills:"Athletics +7, Perception +5, Stealth +5",Resistances:"Damage type chosen for the Draconic Origin trait below",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 15",Languages:"Common, Draconic",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Draconic Origin. The half-dragon is related to a type of dragon
associated with one of the following damage types (DM's
choice): Acid, Cold, Fire, Lightning, or Poison. This choice afiects
other aspects of the stat block.`},{title:"ACTIONS",text:`Multiattack. The half-dragon makes two Claw attacks.
Claw. Melee Attack Roll: +7, reach 10 ft. Hit: 6 (1d4 + 4) Slashing
damage plus 7 (2d6) damage of the type chosen for the
Draconic Origin trait.
Dragon's Breath (Recharge 5-6). Dexterity Saving Throw: DC 14,
each creature in a 30-foot Cone. Failure: 28 (8d6) damage of the
type chosen for the Draconic Origin trait. Success: Half damage.`},{title:"BONUS ACTIONS",text:`Leap. The half-dragon jumps up to 30 feet by spending 10 feet
of movement.
Born through magical rites involving the essences of dragons, half-
dragons serve their creators and their own draconic whims. Most
half-dragons are created by chromatic dragons who desire servants
with some trace of their own might and grandeur. Half-dragons
frequently command other servants of a villainous dragon or act as
agents  in  lands  where  their  draconic  master  would  attract
unwanted attention.
Half-dragons share personality traits and agendas with the dragon
who spawned them. Those resembling chromatic dragons typically
loathe their creator even as they seek the same ends. Half-dragons
with the traits  of metallic dragons  are  especially rare,  but they
might  arise  through  magical  accidents,  the  efforts  of  reckless
magic-users, or the last act of a dying dragon.`}]},{slug:"harpy",name:"Harpy",meta:"Monstrosity Medium, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:12,mod:1,save:1},dex:{score:13,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:13,mod:1,save:1}},fields:{AC:"11",HP:"38 (7d8 + 7)",Speed:"20 ft., Fly 40 ft.",Senses:"Passive Perception 10",Languages:"Common",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Slashing
damage.
Luring Song. The harpy sings a magical melody, which lasts until
the harpy's Concentration ends on it. Wisdom Saving Throw: DC
11, each Humanoid and Giant in a 300-foot Emanation
originating from the harpy when the song starts. Failure: The
target has the Charmed condition until the song ends and
repeats the save at the end of each of its turns. While Charmed,
the target has the Incapacitated condition and ignores the
Luring Song of other harpies. If the target is more than 5 feet
from the harpy, the target moves on its turn toward the harpy
by the most direct route, trying to get within 5 feet of the harpy.
It doesn't avoid Opportunity Attacks; however, before moving
into damaging terrain (such as lava or a pit) and whenever it
takes damage from a source other than the harpy, the target
repeats the save. Success: The target is immune to this harpy's
Luring Song for 24 hours.`}]},{slug:"haunting-revenant",name:"Haunting Revenant",meta:"Undead Gargantuan, Neutral",type:"Undead",subtype:"",size:"Gargantuan",alignment:"Neutral",abilities:{str:{score:20,mod:5,save:5},dex:{score:12,mod:1,save:1},con:{score:18,mod:4,save:8},int:{score:16,mod:3,save:3},wis:{score:18,mod:4,save:8},cha:{score:20,mod:5,save:5}},fields:{AC:"20",HP:"203 (14d20 + 56)",Speed:"30 ft.",Resistances:"Necrotic, Psychic",Immunities:"Poison; Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Truesight 60 ft., Passive Perception 14",Languages:"Common plus two other languages",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Haunted Zone. Constitution Saving Throw: DC 17, any creature
that casts a spell while inside the revenant's space. Failure: The
spell fails and is wasted.
Undead Restoration. If the revenant dies, it revives 24 hours
later unless Dispel Evil and Good is cast on its remains. If it
revives, it animates another Gargantuan object or structure
elsewhere on the same plane of existence; it now looks
difierent but uses the same stat block and returns with all its
Hit Points.`},{title:"ACTIONS",text:`Multiattack. The revenant makes two Object Slam attacks and
uses Invitation.
Object Slam. Melee or Ranged Attack Roll: +9 (with Advantage if
the target is inside the revenant's space), reach 10 ft. or range
30/90 ft. Hit: 27 (5d8+ 5) Bludgeoning damage.
Invitation. Charisma Saving Throw: DC 17, each creature in a 60-
foot Cone. Failure: The target is teleported inside the revenant's
space and swallowed. A swallowed creature has Total Cover
against attacks and other efiects outside the revenant. While
the revenant has Hit Points, a swallowed creature can leave the
revenant's space only by using magic that enables planar travel,
such as the Plane Shift spell.
Haunting revenants possess ruins and forsaken places connected
with their deaths—such as abandoned buildings, wrecked ships, or
junk heaps. These revenants lurk in plain sight, waiting for their
foes to near, then trap their victims within their massive bodies.
Those inside a revenant might be battered by animate furnishings
or more unsettling manifestations of the revenant's hatred. The
places haunting revenants lurk swiftly gain infamous reputations.`}]},{slug:"hawk",name:"Hawk",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:5,mod:-3,save:-3},dex:{score:16,mod:3,save:3},con:{score:8,mod:-1,save:-1},int:{score:2,mod:-4,save:-4},wis:{score:14,mod:2,save:2},cha:{score:6,mod:-2,save:-2}},fields:{AC:"13",HP:"1 (1d4 - 1)",Speed:"10 ft., Fly 60 ft.",Skills:"Perception +6",Senses:"Passive Perception 16",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:"Talons. Melee Attack Roll: +5, reach 5 ft. Hit: 1 Slashing damage."}]},{slug:"hell-hound",name:"Hell Hound",meta:"Fiend Medium, Lawful Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:13,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"15",HP:"58 (9d8 + 18)",Speed:"50 ft.",Skills:"Perception +5",Immunities:"Fire",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Understands Infernal but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Pack Tactics. The hound has Advantage on an attack roll against
a creature if at least one of the hound's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Multiattack. The hound makes two Bite attacks.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing
damage plus 3 (1d6) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 12, each
creature in a 15-foot Cone. Failure: 17 (5d6) Fire damage.
Success: Half damage.`}]},{slug:"helmed-horror",name:"Helmed Horror",meta:"Construct Medium, Neutral",type:"Construct",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"20",HP:"67 (9d8 + 27)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Perception +4",Immunities:"Necrotic, Poison; Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petriffed, Poisoned, Stunned",Gear:"Shield",Senses:"Blindsight 60 ft., Passive Perception 14",Languages:"Understands Common plus one other language but can't speak",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Magic Resistance. The helmed horror has Advantage on saving
throws against spells and other magical efiects.
Spell Immunity. The helmed horror is immune to three spells
chosen by its creator. Typical choices include Heat Metal,
Lightning Bolt, and Magic Missile.`},{title:"ACTIONS",text:`Multiattack. The helmed horror makes two Arcane Sword
attacks.
Arcane Sword. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4)
Slashing damage plus 5 (1d10) Force damage.`}]},{slug:"hezrou",name:"Hezrou",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:19,mod:4,save:7},dex:{score:17,mod:3,save:3},con:{score:20,mod:5,save:8},int:{score:5,mod:-3,save:-3},wis:{score:12,mod:1,save:4},cha:{score:13,mod:1,save:1}},fields:{AC:"18",HP:"157 (15d10 + 75)",Speed:"30 ft.",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Abyssal; telepathy 120 ft.",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Demonic Restoration. If the hezrou dies outside the Abyss, its
body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in the Abyss.
Magic Resistance. The hezrou has Advantage on saving throws
against spells and other magical efiects.
Stench. Constitution Saving Throw: DC 16, any creature that starts
its turn in a 10-foot Emanation originating from the hezrou.
Failure: The target has the Poisoned condition until the start of
its next turn.`},{title:"ACTIONS",text:`Multiattack. The hezrou makes three Rend attacks.
Rend. Melee Attack Roll: +7, reach 5 ft. Hit: 6 (1d4 + 4) Slashing
damage plus 9 (2d8) Poison damage.`},{title:"BONUS ACTIONS",text:`Leap. The hezrou jumps up to 30 feet by spending 10 feet of
movement.`}]},{slug:"hill-giant",name:"Hill Giant",meta:"Giant Huge, Chaotic Evil",type:"Giant",subtype:"",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:8,mod:-1,save:-1},con:{score:19,mod:4,save:4},int:{score:5,mod:-3,save:-3},wis:{score:9,mod:-1,save:-1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"13",HP:"105 (10d12 + 40)",Speed:"40 ft.",Skills:"Perception +2",Senses:"Passive Perception 12",Languages:"Giant",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The giant makes two attacks, using Tree Club or
Trash Lob in any combination.
Tree Club. Melee Attack Roll: +8, reach 10 ft. Hit: 18 (3d8 + 5)
Bludgeoning damage. If the target is a Large or smaller
creature, it has the Prone condition.
Trash Lob. Ranged Attack Roll: +8, range 60/240 ft. Hit: 16 (2d10 +
5) Bludgeoning damage, and the target has the Poisoned
condition until the end of its next turn.`}]},{slug:"hippogriff",name:"Hippogriff",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"11",HP:"26 (4d10 + 4)",Speed:"40 ft., Fly 60 ft.",Skills:"Perception +5",Senses:"Passive Perception 15",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Flyby. The hippogrifi doesn't provoke an Opportunity Attack
when it flies out of an enemy's reach.`},{title:"ACTIONS",text:`Multiattack. The hippogrifi makes two Rend attacks.
Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing
damage.`}]},{slug:"hippopotamus",name:"Hippopotamus",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:21,mod:5,save:7},dex:{score:7,mod:-2,save:-2},con:{score:15,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:4,mod:-3,save:-3}},fields:{AC:"14",HP:"82 (11d10 + 22)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +3",Senses:"Passive Perception 13",Languages:"None",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Hold Breath. The hippopotamus can hold its breath for 10
minutes.`},{title:"ACTIONS",text:`Multiattack. The hippopotamus makes two Bite attacks.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 16 (2d10 + 5) Piercing
damage.`}]},{slug:"hobgoblin-captain",name:"Hobgoblin Captain",meta:"Fey (Goblinoid) Medium, Lawful Evil",type:"Fey",subtype:"Goblinoid",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:12,mod:1,save:1},wis:{score:10,mod:0,save:0},cha:{score:13,mod:1,save:1}},fields:{AC:"17",HP:"58 (9d8 + 18)",Speed:"30 ft.",Gear:"Greatsword, Half-Plate Armor, Longbow",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common, Goblin",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Aura of Authority. While in a 10-foot Emanation originating from
the hobgoblin, the hobgoblin and its allies have Advantage on
attack rolls and saving throws, provided the hobgoblin doesn't
have the Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The hobgoblin makes two attacks, using Greatsword
or Longbow in any combination.
Greatsword. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2)
Slashing damage plus 3 (1d6) Poison damage.
Longbow. Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2)
Piercing damage plus 5 (2d4) Poison damage.
Hobgoblins embody the primal urge to grow and spread, expressing
such drives by bending the world to their whims. Lone hobgoblins
claim woodland territories and plunder the wilds. In groups, they
form hierarchical, martial societies bent on conquering lands and
stripping  them  of  resources  to  serve  their  expansionist  zeal.
Hobgoblins often subjugate animals, monsters, and destructive Fey
—particularly  goblins  and  bugbears—to  serve  their  plans.
Hobgoblins  might  ally  with  dragons,  warlords,  the  servants  of
warlike  gods,  or  other  powerful  creatures  that  promise  them
control of new territories. Should hobgoblins bring an entire land
to heel, they seek new conquests, venturing across seas, into the
Underdark, or to stars and planes of existence beyond.
Hobgoblin captains are battlefield tacticians. They lead their allies
to victory by employing martial skill and rallying others with orders
and threats. Hobgoblin captains usually oversee hobgoblin battle
groups or gangs of weaker monsters.`}]},{slug:"hobgoblin-warlord",name:"Hobgoblin Warlord",meta:"Fey (Goblinoid) Medium, Lawful Evil",type:"Fey",subtype:"Goblinoid",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:14,mod:2,save:5},con:{score:16,mod:3,save:3},int:{score:14,mod:2,save:5},wis:{score:11,mod:0,save:3},cha:{score:15,mod:2,save:5}},fields:{AC:"20",HP:"112 (15d8 + 45)",Speed:"30 ft.",Gear:"Javelins (9), Longsword, Plate Armor, Shield",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common, Goblin",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Aura of Authority. While in a 30-foot Emanation originating from
the hobgoblin, the hobgoblin and its allies have Advantage on
attack rolls and saving throws, provided the hobgoblin doesn't
have the Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The hobgoblin makes three attacks, using Javelin or
Longsword in any combination.
Javelin. Melee or Ranged Attack Roll: +6, reach 5 ft. or range
30/120 ft. Hit: 11 (2d6 + 4) Piercing damage, and the target's
Speed decreases by 10 feet until the start of the hobgoblin's
next turn.
Longsword. Melee Attack Roll: +6, reach 5 ft. Hit: 12 (2d8 + 3)
Slashing damage.`},{title:"REACTIONS",text:`Parry. Trigger: The hobgoblin is hit by a melee attack roll while
holding a weapon. Response: The hobgoblin adds 3 to its AC
against that attack, possibly causing it to miss.
Hobgoblins embody the primal urge to grow and spread, expressing
such drives by bending the world to their whims. Lone hobgoblins
claim woodland territories and plunder the wilds. In groups, they
form hierarchical, martial societies bent on conquering lands and
stripping  them  of  resources  to  serve  their  expansionist  zeal.
Hobgoblins often subjugate animals, monsters, and destructive Fey
—particularly  goblins  and  bugbears—to  serve  their  plans.
Hobgoblins  might  ally  with  dragons,  warlords,  the  servants  of
warlike  gods,  or  other  powerful  creatures  that  promise  them
control of new territories. Should hobgoblins bring an entire land
to heel, they seek new conquests, venturing across seas, into the
Underdark, or to stars and planes of existence beyond.
Hobgoblin  warlords  lead  armies  of  hobgoblins  and  their  allies,
using their experience and strategic minds to command amid the
ebb and flow of battle.`}]},{slug:"hobgoblin-warrior",name:"Hobgoblin Warrior",meta:"Fey (Goblinoid) Medium, Lawful Evil",type:"Fey",subtype:"Goblinoid",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"18",HP:"11 (2d8 + 2)",Speed:"30 ft.",Gear:"Half-Plate Armor, Longbow, Longsword, Shield",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common, Goblin",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Pack Tactics. The hobgoblin has Advantage on an attack roll
against a creature if at least one of the hobgoblin's allies is
within 5 feet of the creature and the ally doesn't have the
Incapacitated condition.`},{title:"ACTIONS",text:`Longsword. Melee Attack Roll: +3, reach 5 ft. Hit: 12 (2d10 + 1)
Slashing damage.
Longbow. Ranged Attack Roll: +3, range 150/600 ft. Hit: 5 (1d8 + 1)
Piercing damage plus 7 (3d4) Poison damage.
Hobgoblins embody the primal urge to grow and spread, expressing
such drives by bending the world to their whims. Lone hobgoblins
claim woodland territories and plunder the wilds. In groups, they
form hierarchical, martial societies bent on conquering lands and
stripping  them  of  resources  to  serve  their  expansionist  zeal.
Hobgoblins often subjugate animals, monsters, and destructive Fey
—particularly  goblins  and  bugbears—to  serve  their  plans.
Hobgoblins  might  ally  with  dragons,  warlords,  the  servants  of
warlike  gods,  or  other  powerful  creatures  that  promise  them
control of new territories. Should hobgoblins bring an entire land
to heel, they seek new conquests, venturing across seas, into the
Underdark, or to stars and planes of existence beyond.
Hobgoblin  warriors  might  hunt  and  raid  alone  or  with  trained
mastiffs, worgs, goblin gangs, or other allies. They employ simple
tactics  and  exploit  every  advantage  their  allies  provide.  They
willingly sacrifice companions in their pursuit of victory.`}]},{slug:"homunculus",name:"Homunculus",meta:"Construct Tiny, Neutral",type:"Construct",subtype:"",size:"Tiny",alignment:"Neutral",abilities:{str:{score:4,mod:-3,save:-3},dex:{score:15,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:2},cha:{score:7,mod:-2,save:0}},fields:{AC:"13",HP:"4 (1d4 + 2)",Speed:"20 ft., Fly 40 ft.",Immunities:"Poison; Charmed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands Common plus one other language but can't speak",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Telepathic Bond. While the homunculus is on the same plane of
existence as its master, the two of them can communicate
telepathically with each other.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage, and
the target is subjected to the following efiect. Constitution
Saving Throw: DC 12. Failure: The target has the Poisoned
condition until the end of the homunculus's next turn. Failure
by 5 or More: The target has the Poisoned condition for 1
minute. While Poisoned, the target has the Unconscious
condition, which ends early if the target takes any damage.`}]},{slug:"hook-horror",name:"Hook Horror",meta:"Monstrosity Large, Neutral",type:"Monstrosity",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:15,mod:2,save:4},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"75 (10d10 + 20)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +5",Senses:"Blindsight 60 ft., Darkvision 120 ft., Passive Perception",Languages:"Hook Horror",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The hook horror makes two Hook attacks.
Hook. Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Piercing
damage. If the target is a Large or smaller creature, the hook
horror moves the target 5 feet straight toward or away from
itself.`}]},{slug:"horned-devil",name:"Horned Devil",meta:"Fiend (Devil) Large, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:22,mod:6,save:10},dex:{score:17,mod:3,save:7},con:{score:21,mod:5,save:5},int:{score:12,mod:1,save:1},wis:{score:16,mod:3,save:7},cha:{score:18,mod:4,save:8}},fields:{AC:"18",HP:"199 (19d10 + 95)",Speed:"30 ft., Fly 60 ft.",Immunities:"Fire, Poison; Poisoned",Senses:"Darkvision 150 ft. (unimpeded by magical Darkness), Passive Perception 13",Languages:"Infernal; telepathy 120 ft.",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Diabolical Restoration. If the devil dies outside the Nine Hells, its
body disappears in sulfurous smoke, and it gains a new body
instantly, reviving with all its Hit Points somewhere in the Nine
Hells.
Magic Resistance. The devil has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The devil makes three attacks, using Searing Fork or
Hurl Flame in any combination. It can replace one attack with a
use of Infernal Tail.
Searing Fork. Melee Attack Roll: +10, reach 10 ft. Hit: 15 (2d8 + 6)
Piercing damage plus 9 (2d8) Fire damage.
Hurl Flame. Ranged Attack Roll: +8, range 150 ft. Hit: 26 (5d8 + 4)
Fire damage. If the target is a flammable object that isn't being
worn or carried, it starts burning.
Infernal Tail. Dexterity Saving Throw: DC 17, one creature the
devil can see within 10 feet. Failure: 10 (1d8 + 6) Necrotic
damage, and the target receives an infernal wound if it doesn't
have one. While wounded, the target loses 10 (3d6) Hit Points at
the start of each of its turns. The wound closes after 1 minute,
after a spell restores Hit Points to the target, or after the target
or a creature within 5 feet of it takes an action to stanch the
wound, doing so by succeeding on a DC 17 Wisdom (Medicine)
check.`}]},{slug:"hunter-shark",name:"Hunter Shark",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:1,mod:-5,save:-5},wis:{score:10,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"12",HP:"45 (6d10 + 12)",Speed:"5 ft., Swim 40 ft.",Skills:"Perception +2",Senses:"Blindsight 60 ft., Passive Perception 12",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"Water Breathing. The shark can breathe only underwater."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +6 (with Advantage if the target doesn't
have all its Hit Points), reach 5 ft. Hit: 14 (3d6 + 4) Piercing
damage.`}]},{slug:"hydra",name:"Hydra",meta:"Monstrosity Huge, Unaligned",type:"Monstrosity",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:20,mod:5,save:5},dex:{score:12,mod:1,save:1},con:{score:20,mod:5,save:5},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"184 (16d12 + 80)",Speed:"40 ft., Swim 40 ft.",Skills:"Perception +6",Immunities:"Blinded, Charmed, Deafened, Frightened, Stunned, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 16",Languages:"—",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Hold Breath. The hydra can hold its breath for 1 hour.
Multiple Heads. The hydra has ffve heads. Whenever the hydra
takes 25 damage or more on a single turn, one of its heads dies.
The hydra dies if all its heads are dead. At the end of each of its
turns when it has at least one living head, the hydra grows two
heads for each of its heads that died since its last turn, unless it
has taken Fire damage since its last turn. The hydra regains 20
Hit Points when it grows new heads.
Reactive Heads. For each head the hydra has beyond one, it gets
an extra Reaction that can be used only for Opportunity
Attacks.`},{title:"ACTIONS",text:`Multiattack. The hydra makes as many Bite attacks as it has
heads.
Bite. Melee Attack Roll: +8, reach 10 ft. Hit: 10 (1d10 + 5) Piercing
damage.`}]},{slug:"hyena",name:"Hyena",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:11,mod:0,save:0},dex:{score:13,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"11",HP:"5 (1d8 + 1)",Speed:"50 ft.",Skills:"Perception +3",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Pack Tactics. The hyena has Advantage on an attack roll against
a creature if at least one of the hyena's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +2, reach 5 ft. Hit: 3 (1d6) Piercing
damage.`}]},{slug:"ice-devil",name:"Ice Devil",meta:"Fiend (Devil) Large, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:14,mod:2,save:7},con:{score:18,mod:4,save:9},int:{score:18,mod:4,save:4},wis:{score:15,mod:2,save:7},cha:{score:18,mod:4,save:9}},fields:{AC:"18",HP:"228 (24d10 + 96)",Speed:"40 ft.",Skills:"Insight +7, Perception +7, Persuasion +9",Immunities:"Cold, Fire, Poison; Poisoned",Senses:"Blindsight 120 ft., Passive Perception 17",Languages:"Infernal; telepathy 120 ft.",CR:"14 (XP 11 500; PB +5)"},cr:"14 (XP 11 500; PB +5)",crValue:"14",xp:11500,sections:[{title:"TRAITS",text:`Diabolical Restoration. If the devil dies outside the Nine Hells, its
body disappears in sulfurous smoke, and it gains a new body
instantly, reviving with all its Hit Points somewhere in the Nine
Hells.
Magic Resistance. The devil has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The devil makes three Ice Spear attacks. It can
replace one attack with a Tail attack.
Ice Spear. Melee or Ranged Attack Roll: +10, reach 5 ft. or range
30/120 ft. Hit: 14 (2d8 + 5) Piercing damage plus 10 (3d6) Cold
damage. Until the end of its next turn, the target can't take a
Bonus Action or Reaction, its Speed decreases by 10 feet, and it
can move or take one action on its turn, not both. Hit or Miss:
The spear magically returns to the devil's hand immediately
after a ranged attack.
Tail. Melee Attack Roll: +10, reach 10 ft. Hit: 15 (3d6 + 5)
Bludgeoning damage plus 18 (4d8) Cold damage.
Ice Wall (Recharge 6). The devil casts Wall of Ice (level 8 version),
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 17).`}]},{slug:"ice-mephit",name:"Ice Mephit",meta:"Elemental Small, Neutral Evil",type:"Elemental",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:13,mod:1,save:1},con:{score:10,mod:0,save:0},int:{score:9,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:12,mod:1,save:1}},fields:{AC:"11",HP:"21 (6d6)",Speed:"30 ft., Fly 30 ft.",Skills:"Perception +2, Stealth +3",Vulnerabilities:"Fire",Immunities:"Cold, Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Primordial (Aquan, Auran)",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Death Burst. The mephit explodes when it dies. Constitution
Saving Throw: DC 10, each creature in a 5-foot Emanation
originating from the mephit. Failure: 5 (2d4) Cold damage.
Success: Half damage.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing
damage plus 2 (1d4) Cold damage.
Fog Cloud (1/Day). The mephit casts Fog Cloud, requiring no spell
components and using Charisma as the spellcasting ability.
Frost Breath (Recharge 6). Constitution Saving Throw: DC 10, each
creature in a 15-foot Cone. Failure: 7 (3d4) Cold damage.
Success: Half damage.
Ice mephits have bodies made of frigid air and frozen water. They
delight in freezing things and dropping ice into peoples' clothes.`}]},{slug:"imp",name:"Imp",meta:"Fiend (Devil) Tiny, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Tiny",alignment:"Lawful Evil",abilities:{str:{score:6,mod:2,save:2},dex:{score:17,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:14,mod:2,save:2}},fields:{AC:"13",HP:"21 (6d4 + 6)",Speed:"20 ft., Fly 40 ft.",Skills:"Deception +4, Insight +3, Stealth +5",Resistances:"Cold",Immunities:"Fire, Poison; Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 11",Languages:"Common, Infernal",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Magic Resistance. The imp has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Sting. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing
damage plus 7 (2d6) Poison damage.
Invisibility. The imp casts Invisibility on itself, requiring no spell
components and using Charisma as the spellcasting ability.
Shape-Shift. The imp shape-shifts to resemble a rat (Speed 20
ft.), a raven (20 ft., Fly 60 ft.), or a spider (20 ft., Climb 20 ft.), or
it returns to its true form. Its statistics are the same in each
form, except for its Speed. Any equipment it's wearing or
carrying isn't transformed.
Known for their cowardice and toadying, imps serve devils and
wicked magic-users. Their abilities to shape-shift and pass unseen
make them skillful spies and adept at fleeing danger. Imps sent to
surveil other creatures relate what they discover to their masters,
but they frequently omit important details or cast events in the
worst  possible  light  to  mislead  their  masters  into following  the
imps' devilish council.
Imps without masters delight in manipulating other creatures and
inflating their own egos. They might take over bands of weaker
monsters, or they might pose as helpful spirits and trick influential
individuals into pursuing nefarious ends.`}]},{slug:"incubus",name:"Incubus",meta:"Fiend Medium, Neutral Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:17,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:15,mod:2,save:2},wis:{score:12,mod:1,save:1},cha:{score:20,mod:5,save:5}},fields:{AC:"15",HP:"66 (12d8 + 12)",Speed:"30 ft., Fly 60 ft.",Skills:"Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",Resistances:"Cold, Fire, Poison, Psychic",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Abyssal, Common, Infernal; telepathy 60 ft.",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Succubus Form. When the incubus ffnishes a Long Rest, it can
shape-shift into a Succubus, using that stat block instead of this
one. Any equipment it is wearing or carrying isn't transformed.`},{title:"ACTIONS",text:`Multiattack. The incubus makes two Restless Touch attacks.
Restless Touch. Melee Attack Roll: +7, reach 5 ft. Hit: 15 (3d6 + 5)
Psychic damage, and the target is cursed for 24 hours or until
the incubus dies. Until the curse ends, the target gains no
benefft from ffnishing Short Rests.
Spellcasting. The incubus casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 15):
At Will: Disguise Self, Etherealness
1/Day Each: Dream, Hypnotic Pattern`},{title:"BONUS ACTIONS",text:`Nightmare (Recharge 6). Wisdom Saving Throw: DC 15, one
creature the incubus can see within 60 feet. Failure: If the target
has 20 Hit Points or fewer, it has the Unconscious condition for
1 hour, until it takes damage, or until a creature within 5 feet of
it takes an action to wake it. Otherwise, the target takes 18
(4d8) Psychic damage.
Incubi exploit the vulnerability of mortal dreams. Slipping into the
homes of sleepers, incubi feed off dreams and replace them with
terrifying nightmares. Incubi visit victims nightly until their prey
expires. The incubi then hunt for new victims, preferring the loved
ones of past targets. Incubi can transform into succubi and vice
versa, taking the forms they need to manipulate foes in dreams or
in the flesh. Those visited by an incubus have recurring nightmares.`}]},{slug:"intellect-devourer",name:"Intellect Devourer",meta:"Aberration Tiny, Lawful Evil",type:"Aberration",subtype:"",size:"Tiny",alignment:"Lawful Evil",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"28 (8d4 + 8)",Speed:"40 ft.",Skills:"Perception +2, Stealth +4",Resistances:"Psychic",Senses:"Blindsight 60 ft., Passive Perception 12",Languages:"Understands Deep Speech but can't speak; telepathy 60 ft.",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Detect Intelligence. The intellect devourer magically senses the
location of any creature within 300 feet of itself that has an
Intelligence score of 3 or higher, regardless of interposing
barriers.`},{title:"ACTIONS",text:`Multiattack. The intellect devourer makes one Claw attack and
uses Devour Intellect.
Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing
damage.
Devour Intellect. Intelligence Saving Throw: DC 12, one creature
the intellect devourer can see within 5 feet. Failure: 11 (2d10)
Psychic damage, and the target has the Stunned condition until
the end of the intellect devourer's next turn.
Steal Body. Intelligence Saving Throw: DC 12, one Small or
Medium creature within 5 feet that has the Incapacitated
condition, is a Humanoid or Beast, and has 10 Hit Points or
fewer. Failure: The intellect devourer possesses the target,
consumes its brain, and teleports inside its skull. While there,
the intellect devourer has Total Cover against attacks and other
efiects originating outside its host. The intellect devourer
retains its Intelligence, Wisdom, and Charisma scores; its
understanding of Deep Speech; its telepathy; and its Detect
Intelligence trait. It otherwise adopts the target's game
statistics. It knows everything the target knew, including spells
and languages. If the host body dies, the intellect devourer
must leave it. The intellect devourer is also forced out if the
target regains its devoured brain by means of a Wish spell. By
spending 5 feet of its movement, the intellect devourer can
voluntarily leave the body, teleporting to the nearest
unoccupied space within 5 feet of it. The body then dies unless
its brain is restored before the end of the intellect devourer's
next turn.`}]},{slug:"invisible-stalker",name:"Invisible Stalker",meta:"Elemental Large, Neutral",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:19,mod:4,save:4},con:{score:14,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:15,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"14",HP:"97 (13d10 + 26)",Speed:"50 ft., Fly 50 ft. (hover)",Skills:"Perception +8, Stealth +10",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Poison; Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 18",Languages:"Common, Primordial (Auran)",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Air Form. The stalker can enter an enemy's space and stop
there. It can move through a space as narrow as 1 inch without
expending extra movement to do so.
Invisibility. The stalker has the Invisible condition.`},{title:"ACTIONS",text:`Multiattack. The stalker makes three Wind Swipe attacks. It can
replace one attack with a use of Vortex.
Wind Swipe. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4)
Force damage.
Vortex. Constitution Saving Throw: DC 14, one Large or smaller
creature in the stalker's space. Failure: 7 (1d8 + 3) Thunder
damage, and the target has the Grappled condition (escape DC
13). Until the grapple ends, the target can't cast spells with a
Verbal component and takes 7 (2d6) Thunder damage at the
start of each of the stalker's turns.`}]},{slug:"iron-golem",name:"Iron Golem",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:24,mod:7,save:7},dex:{score:9,mod:-1,save:-1},con:{score:20,mod:5,save:5},int:{score:3,mod:-4,save:-4},wis:{score:11,mod:0,save:0},cha:{score:1,mod:-5,save:-5}},fields:{AC:"20",HP:"252 (24d10 + 120)",Speed:"30 ft.",Immunities:"Fire, Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petriffed, Poisoned",Senses:"Darkvision 120 ft., Passive Perception 10",Languages:"Understands Common plus two other languages but can't speak",CR:"16 (XP 15 000; PB +5)"},cr:"16 (XP 15 000; PB +5)",crValue:"16",xp:15e3,sections:[{title:"TRAITS",text:`Fire Absorption. Whenever the golem is subjected to Fire
damage, it regains a number of Hit Points equal to the Fire
damage dealt.
Immutable Form. The golem can't shape-shift.
Magic Resistance. The golem has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The golem makes two attacks, using Bladed Arm or
Fiery Bolt in any combination.
Bladed Arm. Melee Attack Roll: +12, reach 10 ft. Hit: 20 (3d8 + 7)
Slashing damage plus 10 (3d6) Fire damage.
Fiery Bolt. Ranged Attack Roll: +10, range 120 ft. Hit: 36 (8d8) Fire
damage.
Poison Breath (Recharge 6). Constitution Saving Throw: DC 18,
each creature in a 60-foot Cone. Failure: 55 (10d10) Poison
damage. Success: Half damage.`}]},{slug:"jackal",name:"Jackal",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:15,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"12",HP:"3 (1d6)",Speed:"40 ft.",Skills:"Perception +5, Stealth +4",Senses:"Darkvision 90 ft., Passive Perception 15",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 – 1) Piercing
damage.`}]},{slug:"jackalwere",name:"Jackalwere",meta:"Fiend Small, Chaotic Evil",type:"Fiend",subtype:"",size:"Small",alignment:"Chaotic Evil",abilities:{str:{score:11,mod:0,save:0},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:13,mod:1,save:1},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"18 (4d6 + 4)",Speed:"40 ft.",Skills:"Deception +4, Perception +4, Stealth +4",Senses:"Darkvision 90 ft., Passive Perception 14",Languages:"Common",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Pack Tactics. The jackalwere has Advantage on an attack roll
against a creature if at least one of the jackalwere's allies is
within 5 feet of the creature and the ally doesn't have the
Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The jackalwere makes two Rend or Slam attacks.
Rend (Jackal or Hybrid Form Only). Melee Attack Roll: +4, reach 5
ft. Hit: 5 (1d6 + 2) Piercing damage.
Slam (Human or Hybrid Form Only). Melee Attack Roll: +4, reach 5
ft. Hit: 4 (1d4 + 2) Bludgeoning damage.
Sleep Gaze (Recharge 5–6). Wisdom Saving Throw: DC 10, one
creature the jackalwere can see within 30 feet (Constructs and
Undead succeed automatically). Failure: The target has the
Unconscious condition for 10 minutes or until it takes damage
or a creature within 5 feet of it takes an action to wake it.
Success: The target is immune to this jackalwere's Sleep Gaze
for 24 hours.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The jackalwere shape-shifts into a Medium human
or a Medium jackal-humanoid hybrid, or it returns to its true
form (that of a Small jackal). Other than its size, its game
statistics are the same in each form. Any equipment it is
wearing or carrying isn't transformed.`}]},{slug:"juvenile-shadow-dragon",name:"Juvenile Shadow Dragon",meta:"Dragon Medium, Chaotic Evil",type:"Dragon",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:14,mod:2,save:4},con:{score:17,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:0},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"45 (6d8 + 18)",Speed:"30 ft., Climb 30 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +6",Resistances:"See Living Shadow",Immunities:"Necrotic",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Common, Draconic",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Living Shadow. While in Dim Light or Darkness, the dragon has
Resistance to damage that isn't Force, Psychic, or Radiant.
Sunlight Sensitivity. While in sunlight, the dragon has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +5, reach 10 ft. Hit: 7 (1d8 + 3) Slashing
damage plus 3 (1d6) Necrotic damage.
Shadow Breath (Recharge 5–6). Dexterity Saving Throw: DC 13,
each creature in a 30-foot Cone. Failure: 17 (5d6) Necrotic
damage. Success: Half damage. Failure or Success: A Humanoid
reduced to 0 Hit Points by this damage dies, and a Shadow rises
from its corpse. The shadow is under the dragon's control and
shares the dragon's Initiative count but acts immediately after
the dragon.`},{title:"BONUS ACTIONS",text:`Shadow Stealth. While in Dim Light or Darkness, the dragon
takes the Hide action.`}]},{slug:"kenku",name:"Kenku",meta:"Monstrosity Medium, Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:16,mod:3,save:3},con:{score:10,mod:0,save:0},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"13 (3d8)",Speed:"30 ft.",Skills:"Deception +4, Perception +2, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Common, Primordial (Auran)",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Mimicry. The kenku can mimic any sounds it has heard,
including voices. A creature that hears the sounds can tell they
are imitations with a successful DC 14 Wisdom (Insight) check.`},{title:"ACTIONS",text:`Shadow Blade. Melee or Ranged Attack Roll: +5, reach 5 ft. or
range 60 ft. Hit: 6 (1d6 + 3) Necrotic damage. Hit or Miss: The
blade magically returns to the kenku's hand immediately after a
ranged attack.`},{title:"BONUS ACTIONS",text:`Eldritch Lantern (Recharge 4–6). The kenku casts Faerie Fire, using
Intelligence as the spellcasting ability (spell save DC 10).`}]},{slug:"killer-whale",name:"Killer Whale",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"90 (12d12 + 12)",Speed:"5 ft., Swim 60 ft.",Skills:"Perception +3, Stealth +4",Senses:"Blindsight 120 ft., Passive Perception 13",Languages:"None",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:"Hold Breath. The whale can hold its breath for 30 minutes."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 21 (5d6 + 4) Piercing
damage.`}]},{slug:"knight",name:"Knight",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:16,mod:3,save:3},dex:{score:11,mod:0,save:0},con:{score:14,mod:2,save:4},int:{score:11,mod:0,save:0},wis:{score:11,mod:0,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"18",HP:"52 (8d8 +16)",Speed:"30 ft.",Gear:"Greatsword, Heavy Crossbow, Plate Armor",Senses:"Passive Perception 10",Languages:"Common plus one other language",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The knight makes two attacks, using Greatsword or
Heavy Crossbow in any combination.
Greatsword. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6+ 3)
Slashing damage plus 4 (1d8) Radiant damage.
Heavy Crossbow. Ranged Attack Roll: +2, range 100/400 ft. Hit: 11
(2d10) Piercing damage plus 4 (1d8) Radiant damage.`},{title:"REACTIONS",text:`Parry. Trigger: The knight is hit by a melee attack roll while
holding a weapon. Response: The knight adds 2 to its AC against
that attack, possibly causing it to miss.
Knights are skilled warriors trained for war and tested in battle.
Many serve the rulers of a realm, a religion, or an order devoted to
a cause.
Knights frequently lead troops in combat or work in units that
dominate the battlefield. They're often attended by squires, who
might be less skilled soldiers or commoners.`}]},{slug:"kobold-warrior",name:"Kobold Warrior",meta:"Dragon Small, Neutral",type:"Dragon",subtype:"",size:"Small",alignment:"Neutral",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:15,mod:2,save:2},con:{score:9,mod:-1,save:-1},int:{score:8,mod:-1,save:-1},wis:{score:7,mod:-2,save:-2},cha:{score:8,mod:-1,save:-1}},fields:{AC:"14",HP:"7 (3d6 - 3)",Speed:"30 ft.",Gear:"Daggers (3)",Senses:"Darkvision 60 ft., Passive Perception 8",Languages:"Common, Draconic",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Pack Tactics. The kobold has Advantage on an attack roll against
a creature if at least one of the kobold's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.
Sunlight Sensitivity. While in sunlight, the kobold has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Dagger. Melee or Ranged Attack Roll: +4, reach 5 ft. or range
20/60 ft. Hit: 4 (1d4 + 2) Piercing damage.
Cowardly cousins to chromatic  dragons,  kobolds serve  draconic
overlords as warriors and servants. These scrappy menaces mimic
the behaviors of their dragon masters. Though their small stature
and recklessness make kobolds poor imitators of dragons, what
they lack in ferocity they make up for in zeal and ingenuity. They
are  especially  adept  at  creating  traps  and  setting  ambushes.
Kobolds' scales resemble those of chromatic dragons that live near
their  warrens.  Rarely,  kobolds  possess  features  evocative  of
metallic dragons or other dragon-like creatures.
Kobold warriors use hit-and-run tactics to raid their enemies and
defend  their  homes.  To  avoid  danger,  they  frequently  employ
haphazard traps.`}]},{slug:"kraken",name:"Kraken",meta:"Monstrosity (Titan) Gargantuan, Chaotic Evil",type:"Monstrosity",subtype:"Titan",size:"Gargantuan",alignment:"Chaotic Evil",abilities:{str:{score:30,mod:10,save:17},dex:{score:11,mod:0,save:7},con:{score:26,mod:8,save:15},int:{score:22,mod:6,save:6},wis:{score:18,mod:4,save:11},cha:{score:20,mod:5,save:5}},fields:{AC:"18",HP:"481 (26d20 + 208)",Speed:"30 ft., Swim 120 ft.",Skills:"History +13, Perception +11",Immunities:"Cold, Lightning; Frightened, Grappled, Paralyzed, Restrained",Senses:"Truesight 120 ft., Passive Perception 21",Languages:"Understands Abyssal, Celestial, Infernal, and Primordial but can't speak; telepathy 120 ft.",CR:"23 (XP 50 000, or 62 000 in Lair; PB +7)"},cr:"23 (XP 50 000, or 62 000 in Lair; PB +7)",crValue:"23",xp:5e4,sections:[{title:"TRAITS",text:`Amphibious. The kraken can breathe air and water.
Legendary Resistance (4/Day, or 5/Day in Lair). If the kraken fails a
saving throw, it can choose to succeed instead.
Siege Monster. The kraken deals double damage to objects and
structures.`},{title:"ACTIONS",text:`Multiattack. The kraken makes two Tentacle attacks and uses Fling,
Lightning Strike, or Swallow.
Tentacle. Melee Attack Roll: +17, reach 30 ft. Hit: 24 (4d6 + 10)
Bludgeoning damage. The target has the Grappled condition (escape
DC 20) from one of ten tentacles, and it has the Restrained
condition until the grapple ends.
Fling. The kraken throws a Large or smaller creature Grappled by it
to a space it can see within 60 feet of itself that isn't in the air.
Dexterity Saving Throw: DC 25, the creature thrown and each
creature in the destination space. Failure: 18 (4d8) Bludgeoning
damage, and the target has the Prone condition. Success: Half
damage only.
Lightning Strike. Dexterity Saving Throw: DC 23, one creature the
kraken can see within 120 feet. Failure: 33 (6d10) Lightning damage.
Success: Half damage.
Swallow. Dexterity Saving Throw: DC 25, one creature Grappled by the
kraken (it can have up to four creatures swallowed at a time).
Failure: 23 (3d8 + 10) Piercing damage. If the target is Large or
smaller, it is swallowed and no longer Grappled. A swallowed
creature has the Restrained condition, has Total Cover against
attacks and other efiects outside the kraken, and takes 24 (7d6) Acid
damage at the start of each of its turns. If the kraken takes 50
damage or more on a single turn from a creature inside it, the
kraken must succeed on a DC 25 Constitution saving throw at the
end of that turn or regurgitate all swallowed creatures, each of
which falls in a space within 10 feet of the kraken with the Prone
condition. If the kraken dies, any swallowed creature no longer has
the Restrained condition and can escape from the corpse using 15
feet of movement, exiting Prone.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the kraken can expend a use to take one of the
following actions. The kraken regains all expended uses at the start of
each of its turns.
Storm Bolt. The kraken uses Lightning Strike.
Toxic Ink. Constitution Saving Throw: DC 23, each creature in a 15-foot
Emanation originating from the kraken while it is underwater.
Failure: The target has the Blinded and Poisoned conditions until the
end of the kraken's next turn. The kraken then moves up to its
Speed. Failure or Success: The kraken can't take this action again
until the start of its next turn.`}]},{slug:"kuo-toa",name:"Kuo-Toa",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:10,mod:0,save:0},con:{score:11,mod:0,save:0},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"18 (4d8)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +4",Gear:"Spear",Senses:"Darkvision 120 ft., Truesight 30 ft., Passive Perception 14",Languages:"Undercommon",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Amphibious. The kuo-toa can breathe air and water.
Sunlight Sensitivity. While in sunlight, the kuo-toa has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Spear. Melee or Ranged Attack Roll: +3, reach 5 ft. or range 20/60
ft. Hit: 5 (1d8 + 1) Piercing damage.
Sticky Net (1/Day). Dexterity Saving Throw: DC 10, one Large or
smaller creature the kuo-toa can see within 15 feet. Failure: The
target has the Restrained condition until the net is destroyed
(AC 10; HP 5; Immunity to Bludgeoning, Poison, and Psychic
damage). A creature can take an action to make a DC 10
Strength (Athletics) check to free itself or another creature in a
net within 5 feet, destroying the net on a success.`},{title:"REACTIONS",text:`Sticky Shield. Trigger: A creature misses the kuo-toa with a melee
attack roll using a weapon. Response—Strength Saving Throw: DC
11, the triggering creature. Failure: The attack's weapon sticks
to the kuo-toa's shield. If the target doesn't let go of the
weapon, the target has the Grappled condition while the
weapon is stuck (escape DC 11). While stuck, the weapon can't
be used. The target can take an action to make a DC 11 Strength
(Athletics) check, freeing the weapon on a success.
Kuo-toa loot ruins and raid communities near their dwellings in the
Underdark. Their shields are coated in sticky slime, which they use
to disarm their foes, and they employ slimy nets to entrap victims.
They usually strive to take their enemies alive and drag captives to
their hidden lairs.
Most kuo-toa follow the orders of their more powerful leaders out
of a combination of faith and fear. In rare cases, a kuo-toa might
abandon its community to live as a hermit or wanderer. Such kuo-
toa might know much about the Underdark, but they live in fear of
the strange gods they forsook.`}]},{slug:"kuo-toa-archpriest",name:"Kuo-Toa Archpriest",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:3},cha:{score:14,mod:2,save:2}},fields:{AC:"13",HP:"105 (14d8 + 42)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +9, Religion +4",Senses:"Darkvision 120 ft., Truesight 30 ft., Passive Perception 19",Languages:"Undercommon",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Amphibious. The kuo-toa can breathe air and water.
Sunlight Sensitivity. While in sunlight, the kuo-toa has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Multiattack. The kuo-toa makes three Strange Scepter attacks.
Spellcasting. The kuo-toa casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 14):
At will: Detect Magic, Thaumaturgy
1/day each: Destructive Wave, Divination, Hold Monster (level 6
version), Scrying, Tongues
Strange Scepter. Melee or Ranged Attack Roll: +6, reach 5 ft. or
range 120 ft. Hit: 20 (5d6 + 3) Lightning damage.`},{title:"BONUS ACTIONS",text:`Shield of Faith (2/Day). The kuo-toa casts Shield of Faith, using
the same spellcasting ability as Spellcasting.
Kuo-toa  archpriests  lead  kuo-toa  communities  by  interpreting
omens and messages from their strange gods. They wear grotesque
ceremonial  regalia  honoring  their  deities.  Archpriests  channel
their faith into spells to support their followers.`}]},{slug:"kuo-toa-monitor",name:"Kuo-Toa Monitor",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"65 (10d8 + 20)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +6, Religion +3",Senses:"Darkvision 120 ft., Truesight 30 ft., Passive Perception 16",Languages:"Undercommon",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Amphibious. The kuo-toa can breathe air and water.
Sunlight Sensitivity. While in sunlight, the kuo-toa has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Multiattack. The kuo-toa makes two Bone Whip attacks.
Bone Whip. Melee Attack Roll: +5, reach 10 ft. Hit: 6 (1d6 + 3)
Slashing damage plus 7 (2d6) Lightning damage, and the target
can't make Opportunity Attacks until the start of the kuo-toa's
next turn.
Kuo-toa monitors control the day-to-day life of weaker kuo-toa,
directing  their  work  and  worship.  They  also  train  beasts  or
monsters in the kuo-toa's service—such as chuuls or giant crabs—
and command them in battle. Archpriests bless monitors with the
power  to  control  their  underlings  and  to  subdue  foes  with
electricity channeled through their bizarre whips.`}]},{slug:"kuo-toa-whip",name:"Kuo-Toa Whip",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:10,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"11",HP:"45 (7d8 + 14)",Speed:"30 ft., Swim 30 ft.",Skills:"Perception +6, Religion +3",Senses:"Darkvision 120 ft., Truesight 30 ft., Passive Perception 16",Languages:"Undercommon",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Amphibious. The kuo-toa can breathe air and water.
Sunlight Sensitivity. While in sunlight, the kuo-toa has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Pincer Staff. Melee Attack Roll: +4, reach 10 ft. Hit: 9 (2d6 + 2)
Piercing damage. If the target is a Medium or smaller creature,
it has the Grappled condition (escape DC 12). Until the grapple
ends, the kuo-toa can't make Pincer Stafi attacks.
Conjure Slimy Glob. Ranged Attack Roll: +4, range 60 ft. Hit: 9 (3d4
+ 2) Acid damage.`},{title:"BONUS ACTIONS",text:`Shield of Faith (2/Day). The kuo-toa casts Shield of Faith, using
Wisdom as the spellcasting ability.
The servants of kuo-toa archpriests, kuo-toa whips—so named for
their role in enforcing order among other kuo-toa—lead war bands
in carrying out the commands of their superiors. In return for their
zeal,  these  kuo-toa  are  granted  minor  magical  abilities  and
pincerlike weapons for subduing foes. In battle, whips drive on
other kuo-toa with threats of violence and burbling chants.`}]},{slug:"lacedon-ghoul",name:"Lacedon Ghoul",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"12",HP:"22 (5d8)",Speed:"30 ft., Swim 30 ft.",Resistances:"Cold",Immunities:"Poison; Charmed, Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The ghoul makes two Icy Bite attacks.
Icy Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Cold
damage, and the target's Speed decreases by 5 feet until the
start of the ghoul's next turn.
Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing
damage. If the target is a creature that isn't an Undead or elf, it
is subjected to the following efiect. Constitution Saving Throw:
DC 10. Failure: The target has the Paralyzed condition until the
end of its next turn.`},{title:"BONUS ACTIONS",text:`Watery Rush. While underwater, the ghoul moves up to half its
Swim Speed without provoking Opportunity Attacks.
Lacedons are loose-skinned, aquatic ghouls. They often arise from
the  corpses  of  greedy  pirates,  those  who  starved  on  deserted
islands, or scoundrels who met their end by drowning.`}]},{slug:"lamia",name:"Lamia",meta:"Fiend Large, Chaotic Evil",type:"Fiend",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:14,mod:2,save:2},wis:{score:15,mod:2,save:2},cha:{score:16,mod:3,save:3}},fields:{AC:"13",HP:"97 (13d10 + 26)",Speed:"40 ft.",Skills:"Deception +7, Insight +4, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Abyssal, Common",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The lamia makes two Claw attacks. It can replace
one attack with a use of Corrupting Touch.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing
damage plus 7 (2d6) Psychic damage.
Corrupting Touch. Wisdom Saving Throw: DC 13, one creature the
lamia can see within 5 feet. Failure: 13 (3d8) Psychic damage,
and the target is cursed for 1 hour. Until the curse ends, the
target has the Charmed and Poisoned conditions.
Spellcasting. The lamia casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 13):
At Will: Disguise Self (can appear as a Large or Medium biped),
Minor Illusion
1/Day Each: Geas, Major Image, Scrying`},{title:"BONUS ACTIONS",text:`Leap. The lamia jumps up to 30 feet by spending 10 feet of
movement.`}]},{slug:"larva",name:"Larva",meta:"Fiend Medium, Neutral Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:9,mod:-1,save:-1},dex:{score:9,mod:-1,save:-1},con:{score:10,mod:0,save:0},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:2,mod:-4,save:-4}},fields:{AC:"9",HP:"9 (2d8)",Speed:"20 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands Common plus one other language but can't speak",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 - 1) Necrotic
damage.
Larvae have disjointed, painful memories of their past lives. Most
desperately avoid other creatures.`}]},{slug:"lemure",name:"Lemure",meta:"Fiend (Devil) Medium, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:5,mod:-3,save:-3},con:{score:11,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:11,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"9",HP:"9 (2d8)",Speed:"20 ft.",Resistances:"Cold",Immunities:"Fire, Poison; Charmed, Frightened, Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 10",Languages:"Understands Infernal but can't speak",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Hellish Restoration. If the lemure dies in the Nine Hells, it revives
with all its Hit Points in 1d10 days unless it is killed by a
creature under the efiects of a Bless spell or its remains are
sprinkled with Holy Water.`},{title:"ACTIONS",text:`Vile Slime. Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Poison
damage.
Lemures torment weaker creatures, but in the Nine Hells, few such
beings exist. To avoid greater suffering, they obey the orders of
more powerful devils.`}]},{slug:"lich",name:"Lich",meta:"Undead (Wizard) Medium, Neutral Evil",type:"Undead",subtype:"Wizard",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:11,mod:0,save:0},dex:{score:16,mod:3,save:10},con:{score:16,mod:3,save:10},int:{score:21,mod:5,save:12},wis:{score:14,mod:2,save:9},cha:{score:16,mod:3,save:3}},fields:{AC:"20",HP:"315 (42d8 + 126)",Speed:"30 ft.",Skills:"Arcana +19, History +12, Insight +9, Perception +9",Resistances:"Cold, Lightning",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",Gear:"Component Pouch",Senses:"Truesight 120 ft., Passive Perception 19",Languages:"All",CR:"21 (XP 33 000, or 41 000 in Lair; PB +7)"},cr:"21 (XP 33 000, or 41 000 in Lair; PB +7)",crValue:"21",xp:33e3,sections:[{title:"TRAITS",text:`Legendary Resistance (4/Day, or 5/Day in Lair). If the lich fails a
saving throw, it can choose to succeed instead.
Spirit Jar. If destroyed, the lich reforms in 1d10 days if it has a
spirit jar, reviving with all its Hit Points. The new body appears
in an unoccupied space within the lich's lair.`},{title:"ACTIONS",text:`Multiattack. The lich makes three attacks, using Eldritch Burst or
Paralyzing Touch in any combination.
Eldritch Burst. Melee or Ranged Attack Roll: +12, reach 5 ft. or
range 120 ft. Hit: 31 (4d12 + 5) Force damage.
Paralyzing Touch. Melee Attack Roll: +12, reach 5 ft. Hit: 15 (3d6 +
5) Cold damage, and the target has the Paralyzed condition until
the start of the lich's next turn.
Spellcasting. The lich casts one of the following spells, using
Intelligence as the spellcasting ability (spell save DC 20):
At will: Detect Magic, Detect Thoughts, Dispel Magic, Fireball (level
5 version), Invisibility, Lightning Bolt (level 5 version), Mage Hand,
Prestidigitation
2/day each: Animate Dead, Dimension Door, Plane Shift
1/day each: Chain Lightning, Finger of Death, Power Word Kill,
Scrying`},{title:"REACTIONS",text:`Protective Magic. The lich casts Counterspell or Shield in response
to the spell's trigger, using the same spellcasting ability as
Spellcasting.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, The lich can expend a use to take one of the
following actions. The lich regains all expended uses at the start of
each of its turns.
Deathly Teleport. The lich teleports up to 60 feet to an
unoccupied space it can see, and each creature within 10 feet of
the space it left takes 11 (2d10) Necrotic damage.
Disrupt Life. Constitution Saving Throw: DC 20, each creature that
isn't an Undead in a 20-foot Emanation originating from the
lich. Failure: 31 (9d6) Necrotic damage. Success: Half damage.
Failure or Success: The lich can't take this action again until the
start of its next turn.
Frightening Gaze. The lich casts Fear, using the same spellcasting
ability as Spellcasting. The lich can't take this action again until
the start of its next turn.
Some  nefarious  magic-users  carry  out  forbidden  necromantic
rituals that sever their souls from their bodies to turn themselves
into  liches,  masters  of  magic  and  undeath.  With  their  souls
preserved in hidden relics, liches puppet their own corpses as they

pursue  ambitions  free  from  mortal  bonds.  Liches  possess
exceptional  cunning  and  magical  prowess,  and  they  use  their
unnatural immortality to pursue arcane secrets few could grasp in
a single life. Uncanny agendas lead them to plumb the secrets of
life, the multiverse, godhood, and less fathomable topics. Careless
of mortal lives or desires, liches go to any lengths to achieve their
goals.  A  lich's  age  and  origin  influences  its  form.  Older  liches
appear as little more than brittle skeletons clad in the rotten finery
of forgotten empires, while younger liches more closely resemble
living creatures and are clad in contemporary garb. Many cloak
themselves in illusions of their idealized mortal forms. Although
liches don't fear death, they're not free from the ravages of time.
Over  ages,  some  liches  lose  their  connection  to  time  and  the
physical world, degenerating into demiliches.`}]},{slug:"lion",name:"Lion",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:3,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:8,mod:1,save:1}},fields:{AC:"12",HP:"22 (4d10)",Speed:"50 ft.",Skills:"Perception +3, Stealth +4",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Pack Tactics. The lion has Advantage on an attack roll against a
creature if at least one of the lion's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.
Running Leap. With a 10-foot running start, the lion can Long
Jump up to 25 feet.`},{title:"ACTIONS",text:`Multiattack. The lion makes two Rend attacks. It can replace one
of these attacks with a use of Roar.
Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing
damage.
Roar. Wisdom Saving Throw: DC 11, one creature within 15 feet.
Failure: The target has the Frightened condition until the start
of the lion's next turn.`}]},{slug:"lizard",name:"Lizard",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:10,mod:0,save:0},int:{score:1,mod:5,save:5},wis:{score:8,mod:1,save:1},cha:{score:3,mod:4,save:4}},fields:{AC:"10",HP:"2 (1d4)",Speed:"20 ft., Climb 20 ft.",Senses:"Darkvision 30 ft., Passive Perception 9",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:"along ceilings, without needing to make an ability check."},{title:"ACTIONS",text:"Bite. Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"lizardfolk-geomancer",name:"Lizardfolk Geomancer",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:15,mod:2,save:2},dex:{score:10,mod:0,save:0},con:{score:13,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:15,mod:2,save:2},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"33 (6d8 + 6)",Speed:"30 ft., Burrow 20 ft., Swim 30 ft.",Skills:"Nature +2, Perception +4, Stealth +4",Senses:"Passive Perception 14",Languages:"Draconic, Primordial (Terran)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The lizardfolk makes two Earth Burst attacks.
Earth Burst. Melee or Ranged Attack Roll: +4, reach 5 ft. or range
60 ft. Hit: 9 (2d6 + 2) Bludgeoning damage.
Hail of Stone (Recharge 5–6). Constitution Saving Throw: DC 12,
each creature in a 20-foot-radius, 40-foot-high Cylinder
centered on a point the lizardfolk can see within 60 feet. Failure:
15 (6d4) Bludgeoning damage, and the target has the Prone
condition. Success: Half damage only.
Spellcasting. The lizardfolk casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 12):
At will: Elementalism
1/day each: Meld into Stone, Speak with Plants, Spike Growth
Lizardfolk geomancers draw magic from the natural world, using it
to protect their people and territories.`}]},{slug:"lizardfolk-sovereign",name:"Lizardfolk Sovereign",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:15,mod:2,save:4},int:{score:11,mod:0,save:0},wis:{score:11,mod:0,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"78 (12d8 + 24)",Speed:"30 ft., Burrow 20 ft., Swim 30 ft.",Skills:"Perception +4, Stealth +5",Immunities:"Frightened",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Draconic, Primordial (Terran)",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The lizardfolk makes one Bite attack and one
Earthen Maul attack.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing
damage. If the target is a creature that isn't a Construct or an
Undead, the lizardfolk gains Temporary Hit Points equal to the
damage dealt.
Earthen Maul. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3)
Bludgeoning damage. If the target is a Medium or smaller
creature, it has the Prone condition.`},{title:"BONUS ACTIONS",text:`Charge. The lizardfolk moves up to its Speed or Swim Speed
straight toward an enemy it can see.
Lizardfolk sovereigns undergo magical rites that imbue them with
fantastic strength and magic from the Elemental Plane of Earth. In
some, though, it also unlocks a primal viciousness.`}]},{slug:"mage",name:"Mage",meta:"Humanoid (Wizard) Medium or Small, Neutral",type:"Humanoid",subtype:"Wizard",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:9,mod:-1,save:-1},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:17,mod:3,save:6},wis:{score:12,mod:1,save:4},cha:{score:11,mod:0,save:0}},fields:{AC:"15",HP:"81 (18d8)",Speed:"30 ft.",Skills:"Arcana +6, History +6, Perception +4",Gear:"Wand",Senses:"Passive Perception 14",Languages:"Common plus three other languages",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The mage makes three Arcane Burst attacks.
Arcane Burst. Melee or Ranged Attack Roll: +6, reach 5 ft. or range
120 ft. Hit: 16 (3d8 + 3) Force damage.
Spellcasting. The mage casts one of the following spells, using
Intelligence as the spellcasting ability (spell save DC 14):
At Will: Detect Magic, Light, Mage Armor (included in AC), Mage
Hand, Prestidigitation
2/Day Each: Fireball (level 4 version), Invisibility
1/Day Each: Cone of Cold, Fly`},{title:"BONUS ACTIONS",text:`Misty Step (3/Day). The mage casts Misty Step, using the same
spellcasting ability as Spellcasting.`},{title:"REACTIONS",text:`Protective Magic (3/Day). The mage casts Counterspell or Shield in
response to the spell's trigger, using the same spellcasting
ability as Spellcasting.
Mages  are  magical  wonder-workers,  ranging  from  spellcasting
overlords  to  reclusive  witches.  They  study  mystical  secrets  and
possess  insight  into  monsters,  legends,  omens,  and  other  lore.
Mages often gather allies or hire assistants to aid them in their
research or to attain magical might.
Mages are accomplished spellcasters whose lives have been shaped
by magic. They can use their powers to defend or dominate other
creatures, or they could focus on magical research and unlocking
mystical secrets.`}]},{slug:"mage-apprentice",name:"Mage Apprentice",meta:"Humanoid (Wizard) Medium or Small, Neutral",type:"Humanoid",subtype:"Wizard",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:16,mod:3,save:5},wis:{score:13,mod:1,save:3},cha:{score:10,mod:0,save:0}},fields:{AC:"15",HP:"49 (9d8 + 9)",Speed:"30 ft.",Skills:"Arcana +5, Perception +3",Gear:"Component Pouch",Senses:"Passive Perception 13",Languages:"Common plus one other language",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Arcane Burst. Melee or Ranged Attack Roll: +5, reach 5 ft. or range
120 ft. Hit: 14 (2d10 + 3) Force damage.
Spellcasting. The mage casts one of the following spells, using
Intelligence as the spellcasting ability (spell save DC 13, +5 to hit
with spell attacks):
At will: Mage Hand, Prestidigitation
1/day each: Disguise Self, Ice Knife, Mage Armor (included in AC),
Thunderwave
Mages  are  magical  wonder-workers,  ranging  from  spellcasting
overlords  to  reclusive  witches.  They  study  mystical  secrets  and
possess  insight  into  monsters,  legends,  omens,  and  other  lore.
Mages often gather allies or hire assistants to aid them in their
research or to attain magical might.
Mage  apprentices  are  spellcasters  of  humble  skill.  Some  are
students of accomplished mages, while others have innate powers.`}]},{slug:"magma-mephit",name:"Magma Mephit",meta:"Elemental Small, Neutral Evil",type:"Elemental",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"11",HP:"18 (4d6 + 4)",Speed:"30 ft., Fly 30 ft.",Skills:"Stealth +3",Vulnerabilities:"Cold",Immunities:"Fire, Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Ignan, Terran)",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Death Burst. The mephit explodes when it dies. Dexterity Saving
Throw: DC 11, each creature in a 5-foot Emanation originating
from the mephit. Failure: 7 (2d6) Fire damage. Success: Half
damage.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing
damage plus 3 (1d6) Fire damage.
Fire Breath (Recharge 6). Dexterity Saving Throw: DC 11, each
creature in a 15-foot Cone. Failure: 7 (2d6) Fire damage. Success:
Half damage.
These mephits embody the merging of earth and fire as glowing
magma. They love melting things, but they loathe magmins and
attack them on sight.`}]},{slug:"magmin",name:"Magmin",meta:"Elemental Small, Chaotic Neutral",type:"Elemental",subtype:"",size:"Small",alignment:"Chaotic Neutral",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"14",HP:"13 (3d6 + 3)",Speed:"30 ft.",Immunities:"Fire",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Ignan)",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Death Burst. The magmin explodes when it dies. Dexterity Saving
Throw: DC 11, each creature in a 10-foot Emanation originating
from the magmin. Failure: 7 (2d6) Fire damage. Success: Half
damage.`},{title:"ACTIONS",text:`Touch. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Fire
damage. If the target is a creature or a flammable object that
isn't being worn or carried, it starts burning.`},{title:"BONUS ACTIONS",text:`Ignited Illumination. The magmin sets itself ablaze or
extinguishes its flames. While ablaze, the magmin sheds Bright
Light in a 10-foot radius and Dim Light for an additional 10 feet.`}]},{slug:"mammoth",name:"Mammoth",meta:"Beast Huge, Unaligned",type:"Beast",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:24,mod:7,save:10},dex:{score:9,mod:-1,save:-1},con:{score:21,mod:5,save:8},int:{score:3,mod:-4,save:-4},wis:{score:11,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"13",HP:"126 (11d12 + 55)",Speed:"50 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The mammoth makes two Gore attacks.
Gore. Melee Attack Roll: +10, reach 10 ft. Hit: 18 (2d10 + 7)
Piercing damage. If the target is a Huge or smaller creature and
the mammoth moved 20+ feet straight toward it immediately
before the hit, the target has the Prone condition.`},{title:"BONUS ACTIONS",text:`Trample. Dexterity Saving Throw: DC 18, one creature within 5
feet that has the Prone condition. Failure: 29 (4d10 + 7)
Bludgeoning damage. Success: Half damage.`}]},{slug:"manes",name:"Manes",meta:"Fiend (Demon) Small, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Small",alignment:"Chaotic Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:9,mod:-1,save:-1},con:{score:13,mod:1,save:1},int:{score:3,mod:-4,save:-4},wis:{score:8,mod:-1,save:-1},cha:{score:4,mod:-3,save:-3}},fields:{AC:"9",HP:"9 (2d6 + 2)",Speed:"20 ft.",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Charmed, Frightened, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Understands Abyssal but can't speak",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Claw. Melee Attack Roll: +2, reach 5 ft. Hit: 5 (2d4) Slashing
damage.
Manes lash out at creatures that appear weaker than themselves—
or that react to them with fear—and strive to avoid more powerful
demons. When manes escape from the Abyss, they go on reckless
rampages and inflict as much harm as possible.`}]},{slug:"manes-vaporspawn",name:"Manes Vaporspawn",meta:"Fiend (Demon) Medium, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:12,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:5,mod:-3,save:-3},wis:{score:8,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"13",HP:"19 (3d8 + 6)",Speed:"30 ft.",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Charmed, Exhaustion, Frightened, Grappled, Poisoned, Restrained",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Understands Abyssal but can't speak",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Contortionist. The manes can move through a space as narrow
as 1 inch without expending extra movement to do so.
Sickening Vapors. Constitution Saving Throw: DC 12, each creature
in a 5-foot Emanation originating from the manes at the end of
the manes's turn. Failure: The target has the Incapacitated
condition until the end of its next turn. Success: The target is
immune to this manes's Sickening Vapors for 24 hours.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing
damage plus 5 (2d4) Necrotic damage.`},{title:"BONUS ACTIONS",text:`Shadow Stealth. While in Dim Light or Darkness, the manes takes
the Hide action.
Vaporspawn  arise  from  evil  souls  shattered  by  unspeakable
torments  or  the  depredations  of  more  powerful  demons.  These
distorted  manes  undergo  endless,  painful  contortions,  and  they
share their torment with whatever creatures they encounter.`}]},{slug:"manticore",name:"Manticore",meta:"Monstrosity Large, Lawful Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:16,mod:3,save:3},con:{score:17,mod:3,save:3},int:{score:7,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"14",HP:"68 (8d10 + 24)",Speed:"30 ft., Fly 50 ft.",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Common",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The manticore makes three attacks, using Rend or
Tail Spike in any combination.
Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing
damage.
Tail Spike. Ranged Attack Roll: +5, range 100/200 ft. Hit: 7 (1d8 +
3) Piercing damage.`}]},{slug:"marid",name:"Marid",meta:"Elemental (Genie) Large, Chaotic Neutral",type:"Elemental",subtype:"Genie",size:"Large",alignment:"Chaotic Neutral",abilities:{str:{score:22,mod:6,save:6},dex:{score:12,mod:1,save:5},con:{score:26,mod:8,save:8},int:{score:18,mod:4,save:4},wis:{score:17,mod:3,save:3},cha:{score:18,mod:4,save:8}},fields:{AC:"17",HP:"229 (17d10 + 136)",Speed:"30 ft., Fly 60 ft., Swim 90 ft.",Resistances:"Acid, Cold, Lightning",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Primordial (Aquan)",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Amphibious. The marid can breathe air and water.
Elemental Restoration. If the marid dies outside the Elemental
Plane of Water, its body dissolves into brine, and it gains a new
body in 1d4 days, reviving with all its Hit Points somewhere on
the Plane of Water.
Wishes. The marid has a 30 percent chance of knowing the Wish
spell. If the marid knows it, the marid can cast it only on behalf
of a non-genie creature who communicates a wish in a way the
marid can understand. If the marid casts the spell for the
creature, the marid sufiers none of the spell's stress. Once the
marid has cast it three times, the marid can't do so again for
365 days.`},{title:"ACTIONS",text:`Multiattack. The marid makes three Aquatic Lash attacks.
Aquatic Lash. Melee Attack Roll: +10, reach 15 ft. Hit: 15 (2d8 + 6)
Slashing damage plus 9 (2d8) Cold damage.
Spellcasting. The marid casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 16):
At will: Create or Destroy Water, Detect Evil and Good, Detect
Magic, Purify Food and Drink
1/day each: Control Water, Gaseous Form, Invisibility, Plane Shift,
Tongues
Water Jet. Dexterity Saving Throw: DC 18, each creature in a 60-
foot-long, 10-foot-wide Line. Failure: 31 (9d6) Cold damage. If
the target is a Huge or smaller creature, it is pushed up to 20
feet straight away from the marid and has the Prone condition.
Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Misty Veil (Recharge 5–6). The marid casts Fog Cloud, using the
same spellcasting ability as Spellcasting.`}]},{slug:"marilith",name:"Marilith",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:9},dex:{score:20,mod:5,save:5},con:{score:20,mod:5,save:10},int:{score:18,mod:4,save:4},wis:{score:16,mod:3,save:8},cha:{score:20,mod:5,save:10}},fields:{AC:"16",HP:"220 (21d10 + 105)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +8",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Truesight 120 ft., Passive Perception 18",Languages:"Abyssal; telepathy 120 ft.",CR:"16 (XP 15 000; PB +5)"},cr:"16 (XP 15 000; PB +5)",crValue:"16",xp:15e3,sections:[{title:"TRAITS",text:`Demonic Restoration. If the marilith dies outside the Abyss, its
body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in the Abyss.
Magic Resistance. The marilith has Advantage on saving throws
against spells and other magical efiects.
Reactive. The marilith can take one Reaction on every turn of
combat.`},{title:"ACTIONS",text:`Multiattack. The marilith makes six Pact Blade attacks and uses
Constrict.
Pact Blade. Melee Attack Roll: +10, reach 5 ft. Hit: 10 (1d10 + 5)
Slashing damage plus 7 (2d6) Necrotic damage.
Constrict. Strength Saving Throw: DC 17, one Medium or smaller
creature the marilith can see within 5 feet. Failure: 15 (2d10 + 4)
Bludgeoning damage. The target has the Grappled condition
(escape DC 14), and it has the Restrained condition until the
grapple ends.`},{title:"BONUS ACTIONS",text:`Teleport (Recharge 5–6). The marilith teleports up to 120 feet to
an unoccupied space it can see.`},{title:"REACTIONS",text:`Parry. Trigger: The marilith is hit by a melee attack roll while
holding a weapon. Response: The marilith adds 5 to its AC
against that attack, possibly causing it to miss.`}]},{slug:"mastiff",name:"Mastiff",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:3,mod:4,save:4},wis:{score:12,mod:1,save:3},cha:{score:7,mod:2,save:2}},fields:{AC:"12",HP:"5 (1d8 + 1)",Speed:"40 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Piercing
damage. If the target is a Medium or smaller creature, it has the
Prone condition.`}]},{slug:"medusa",name:"Medusa",meta:"Monstrosity Medium, Lawful Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:17,mod:3,save:3},con:{score:16,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:13,mod:1,save:4},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"127 (17d8 + 51)",Speed:"30 ft.",Skills:"Deception +5, Perception +4, Stealth +6",Senses:"Darkvision 150 ft., Passive Perception 14",Languages:"Common plus one other language",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The medusa makes two Claw attacks and one Snake
Hair attack, or it makes three Poison Ray attacks.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Slashing
damage.
Snake Hair. Melee Attack Roll: +6, reach 5 ft. Hit: 5 (1d4 + 3)
Piercing damage plus 14 (4d6) Poison damage.
Poison Ray. Ranged Attack Roll: +5, range 150 ft. Hit: 11 (2d8 + 2)
Poison damage.`},{title:"BONUS ACTIONS",text:`Petrifying Gaze (Recharge 5–6). Constitution Saving Throw: DC 13,
each creature in a 30-foot Cone. If the medusa sees its
reflection in the Cone, the medusa must make this save. First
Failure: The target has the Restrained condition and repeats the
save at the end of its next turn if it is still Restrained, ending the
efiect on itself on a success. Second Failure: The target has the
Petriffed condition instead of the Restrained condition.`}]},{slug:"merfolk-skirmisher",name:"Merfolk Skirmisher",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:13,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:12,mod:1,save:1}},fields:{AC:"11",HP:"11 (2d8 + 2)",Speed:"10 ft., Swim 40 ft.",Senses:"Passive Perception 12",Languages:"Common, Primordial (Aquan)",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:"Amphibious. The merfolk can breathe air and water."},{title:"ACTIONS",text:`Ocean Spear. Melee or Ranged Attack Roll: +2, reach 5 ft. or range
20/60 ft. Hit: 3 (1d6) Piercing damage plus 2 (1d4) Cold damage.
If the target is a creature, its Speed decreases by 10 feet until
the end of its next turn. Hit or Miss: The spear magically returns
to the merfolk's hand immediately after a ranged attack.
Merfolk skirmishers defend their homes from aquatic monsters
and invaders from the surface.`}]},{slug:"merfolk-wavebender",name:"Merfolk Wavebender",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:18,mod:4,save:7},con:{score:14,mod:2,save:5},int:{score:13,mod:1,save:1},wis:{score:19,mod:4,save:7},cha:{score:15,mod:2,save:5}},fields:{AC:"14",HP:"97 (15d8 + 30)",Speed:"10 ft., Swim 40 ft.",Skills:"Perception +7",Resistances:"Cold",Senses:"Passive Perception 17",Languages:"Common, Primordial (Aquan)",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:"Amphibious. The merfolk can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The merfolk makes two Aquatic Burst attacks.
Aquatic Burst. Melee or Ranged Attack Roll: +7, reach 5 ft. or
range 60 ft. Hit: 20 (3d10 + 4) Cold damage. If the target is a
Large or smaller creature, it has the Prone condition.
Spellcasting. The merfolk casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 15):
At will: Elementalism, Light
1/day each: Control Water, Create or Destroy Water`},{title:"REACTIONS",text:`Watery Rebuke. Trigger: An enemy the merfolk can see enters a
space within 5 feet of the merfolk. Response—Strength Saving
Throw: DC 15, the triggering enemy. Failure: 14 (4d6) Cold
damage. If the target is Large or smaller, it is pushed up to 30
feet straight away from the merfolk by conjured water.
These merfolk mages use magic to manipulate water, storms, and
sea creatures to aid them.`}]},{slug:"merrow",name:"Merrow",meta:"Monstrosity Large, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:8,mod:-1,save:-1},wis:{score:10,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"13",HP:"45 (6d10 + 12)",Speed:"10 ft., Swim 40 ft.",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Abyssal, Primordial (Aquan)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"Amphibious. The merrow can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The merrow makes two attacks, using Bite, Claw, or
Harpoon in any combination.
Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 6 (1d4 + 4) Piercing
damage, and the target has the Poisoned condition until the
end of the merrow's next turn.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (2d4 + 4) Slashing
damage.
Harpoon. Melee or Ranged Attack Roll: +6, reach 5 ft. or range
20/60 ft. Hit: 11 (2d6 + 4) Piercing damage. If the target is a
Large or smaller creature, the merrow pulls the target up to 15
feet straight toward itself.`}]},{slug:"mezzoloth",name:"Mezzoloth",meta:"Fiend (Yugoloth) Medium, Neutral Evil",type:"Fiend",subtype:"Yugoloth",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:7,mod:-2,save:-2},wis:{score:14,mod:2,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"18",HP:"75 (10d8 + 30)",Speed:"40 ft.",Skills:"Perception +5",Resistances:"Cold, Fire, Lightning",Immunities:"Acid, Poison; Poisoned",Senses:"Blindsight 60 ft., Darkvision 60 ft., Passive Perception 15",Languages:"Abyssal, Infernal; telepathy 60 ft.",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Fiendish Restoration. If the mezzoloth dies outside Gehenna, its
body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in Gehenna.
Magic Resistance. The mezzoloth has Advantage on saving
throws against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The mezzoloth makes two attacks, using Claws or
Mercurial Trident in any combination.
Claws. Melee Attack Roll: +7, reach 5 ft. Hit: 9 (2d4 + 4) Slashing
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 14) from two of four claws, and
it has the Restrained condition until the grapple ends.
Mercurial Trident. Melee or Ranged Attack Roll: +7, reach 5 ft. or
range 20/60 ft. Hit: 8 (1d8 + 4) Piercing damage plus 10 (3d6)
Force damage. Hit or Miss: The trident magically returns to the
mezzoloth's claw immediately after a ranged attack.
Spellcasting. The mezzoloth casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 13):
1/day each: Cloudkill, Darkness, Dispel Magic`},{title:"BONUS ACTIONS",text:`Teleport (Recharge 5–6). The mezzoloth teleports up to 60 feet to
an unoccupied space it can see. It can teleport one creature it is
grappling to an unoccupied space within 5 feet of its destination
space.`}]},{slug:"mimic",name:"Mimic",meta:"Monstrosity Medium, Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:5,mod:-3,save:-3},wis:{score:13,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"12",HP:"58 (9d8 + 18)",Speed:"20 ft.",Skills:"Stealth +5",Immunities:"Acid; Prone",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Adhesive (Object Form Only). The mimic adheres to anything that
touches it. A Huge or smaller creature adhered to the mimic has
the Grappled condition (escape DC 13). Ability checks made to
escape this grapple have Disadvantage.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5 (with Advantage if the target is
Grappled by the mimic), reach 5 ft. Hit: 7 (1d8 + 3) Piercing
damage—or 12 (2d8 + 3) Piercing damage if the target is
Grappled by the mimic—plus 4 (1d8) Acid damage.
Pseudopod. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3)
Bludgeoning damage plus 4 (1d8) Acid damage. If the target is a
Large or smaller creature, it has the Grappled condition (escape
DC 13). Ability checks made to escape this grapple have
Disadvantage.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The mimic shape-shifts to resemble a Medium or
Small object while retaining its game statistics, or it returns to
its true blob form. Any equipment it is wearing or carrying isn't
transformed.
In  their  natural  forms,  mimics  are  little  more  than  roaming
stomachs, their blobby bodies covered with alien eyes and teeth.
They can alter their color, texture, and dimensions to duplicate
inanimate  objects  of  their  approximate  size.  Mimics  use  their
disguises as both camouflage and bait. Once victims draw close,
mimics strike, lashing out with their sticky pseudopods and toothy
mouths. After consuming victims, mimics usually relocate, change
form, and await their next meal.`}]},{slug:"mind-flayer",name:"Mind Flayer",meta:"Aberration Medium, Lawful Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:11,mod:0,save:0},dex:{score:12,mod:1,save:4},con:{score:12,mod:1,save:1},int:{score:19,mod:4,save:7},wis:{score:17,mod:3,save:6},cha:{score:17,mod:3,save:6}},fields:{AC:"15",HP:"99 (18d8 + 18)",Speed:"30 ft., Fly 15 ft. (hover)",Skills:"Arcana +7, Insight +6, Perception +6, Stealth +4",Resistances:"Psychic",Gear:"Breastplate",Senses:"Darkvision 120 ft., Passive Perception 16",Languages:"Deep Speech, Undercommon; telepathy 120 ft.",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:`Magic Resistance. The mind flayer has Advantage on saving
throws against spells and other magical efiects.`},{title:"ACTIONS",text:`Tentacles. Melee Attack Roll: +7, reach 5 ft. Hit: 22 (4d8 + 4)
Psychic damage. If the target is a Medium or smaller creature, it
has the Grappled condition (escape DC 14) from all the mind
flayer's tentacles, and the target has the Stunned condition
until the grapple ends.
Extract Brain. Constitution Saving Throw: DC 15, one creature that
is Grappled by the mind flayer's Tentacles. Failure: 55 (10d10)
Piercing damage. Success: Half damage. Failure or Success: If this
damage reduces the target to 0 Hit Points, the mind flayer kills
it and devours its brain.
Mind Blast (Recharge 5–6). Intelligence Saving Throw: DC 15, each
creature in a 60-foot Cone. Failure: 31 (6d8 + 4) Psychic damage,
and the target has the Stunned condition until the end of the
mind flayer's next turn. Success: Half damage only.
Spellcasting. The mind flayer casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 15):
At will: Detect Thoughts
1/day each: Dominate Monster, Plane Shift (self only)
A mind flayer's hunger for brains is outmeasured only by its thirst
for dominance, and it embraces any plot that allows it to indulge
both.`}]},{slug:"mind-flayer-arcanist",name:"Mind Flayer Arcanist",meta:"Aberration Medium, Lawful Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:11,mod:0,save:0},dex:{score:14,mod:2,save:6},con:{score:13,mod:1,save:1},int:{score:20,mod:5,save:9},wis:{score:17,mod:3,save:7},cha:{score:17,mod:3,save:7}},fields:{AC:"16",HP:"143 (26d8 + 26)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Arcana +13, Insight +7, Perception +7, Stealth +6",Immunities:"Psychic; Charmed, Frightened",Gear:"Breastplate",Senses:"Darkvision 120 ft., Passive Perception 17",Languages:"Deep Speech, Undercommon; telepathy 120 ft.",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Magic Resistance. The mind flayer has Advantage on saving
throws against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The mind flayer makes three Arcane Tentacles
attacks.
Arcane Tentacles. Melee or Ranged Attack Roll: +9, reach 5 ft. or
range 120 ft. Hit: 27 (4d10 + 5) Psychic damage, and the mind
flayer can teleport the target up to 30 feet to an unoccupied
space the mind flayer can see on a surface or liquid large
enough to support the target. If this damage reduces the target
to 0 Hit Points, the mind flayer kills it and magically devours its
brain.
Mind Burst (Recharge 5–6). Intelligence Saving Throw: DC 17, each
creature in a 40-foot Emanation originating from the mind
flayer. Failure: 41 (8d8 + 5) Psychic damage, and the target has
the Stunned condition until the end of the mind flayer's next
turn. Success: Half damage only.
Spellcasting. The mind flayer casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 17):
At will: Detect Magic, Detect Thoughts, Disguise Self, Mage Hand
(the hand is Invisible)
1/day each: Clairvoyance, Dimension Door, Fireball (level 5
version), Lightning Bolt (level 5 version), Plane Shift (self only),
Sending`},{title:"REACTIONS",text:`Shield (2/Day). The mind flayer casts Shield in response to that
spell's trigger, using the same spellcasting ability as
Spellcasting.
Mind flayer arcanists enhance their psionic abilities with magic.
Other mind flayers view those that undertake such experiments
with disgust and fear.`}]},{slug:"minotaur-of-baphomet",name:"Minotaur Of Baphomet",meta:"Monstrosity Large, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:16,mod:3,save:3},cha:{score:9,mod:-1,save:-1}},fields:{AC:"14",HP:"85 (10d10 + 30)",Speed:"40 ft.",Skills:"Perception +7, Survival +7",Senses:"Darkvision 60 ft., Passive Perception 17",Languages:"Abyssal",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Abyssal Glaive. Melee Attack Roll: +6, reach 10 ft. Hit: 10 (1d12 + 4)
Slashing damage plus 10 (3d6) Necrotic damage.
Gore (Recharge 5–6). Melee Attack Roll: +6, reach 5 ft. Hit: 18 (4d6
+ 4) Piercing damage. If the target is a Large or smaller creature
and the minotaur moved 10+ feet straight toward it
immediately before the hit, the target takes an extra 10 (3d6)
Piercing damage and has the Prone condition.`}]},{slug:"minotaur-skeleton",name:"Minotaur Skeleton",meta:"Undead Large, Lawful Evil",type:"Undead",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:15,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:8,mod:-1,save:-1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"12",HP:"45 (6d10 + 12)",Speed:"40 ft.",Vulnerabilities:"Bludgeoning",Immunities:"Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Understands Abyssal but can't speak",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Gore. Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing
damage. If the target is a Large or smaller creature and the
skeleton moved 20+ feet straight toward it immediately before
the hit, the target takes an extra 9 (2d8) Piercing damage and
has the Prone condition.
Slam. Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4)
Bludgeoning damage.
Minotaur skeletons are the reanimated remains of minotaurs or
the skeletons of multiple creatures merged into a minotaur-like
shape. These hulking skeletons have greater speed and might than
smaller skeletons. They menace the living with their horns and
mighty greataxes.`}]},{slug:"mud-mephit",name:"Mud Mephit",meta:"Elemental Small, Neutral Evil",type:"Elemental",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:12,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:9,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:7,mod:-2,save:-2}},fields:{AC:"11",HP:"13 (3d6 + 3)",Speed:"20 ft., Fly 20 ft., Swim 20 ft.",Skills:"Stealth +3",Immunities:"Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Aquan, Terran)",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Death Burst. The mephit explodes when it dies. Dexterity Saving
Throw: DC 11, each creature in a 5-foot Emanation originating
from the mephit. Failure: The target has the Restrained
condition until the end of its next turn.`},{title:"ACTIONS",text:`Slam. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1)
Bludgeoning damage.
Mud Breath (Recharge 6). Dexterity Saving Throw: DC 11, one
creature the mephit can see within 15 feet. Failure: The target
has the Restrained condition until the end of the mephit's next
turn.
A  combination  of  earth  and  water,  mud  mephits  are  crude,
disgusting creatures. They take every opportunity to ruin objects
and pollute food with muck.`}]},{slug:"mule",name:"Mule",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:4},dex:{score:10,mod:0,save:0},con:{score:13,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:10,mod:0,save:0},cha:{score:5,mod:3,save:3}},fields:{AC:"10",HP:"11 (2d8 + 2)",Speed:"40 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Beast of Burden. The mule counts as one size larger for the
purpose of determining its carrying capacity.`},{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2)
Bludgeoning damage.`}]},{slug:"mummy",name:"Mummy",meta:"Undead Medium or Small, Lawful Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Lawful Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:8,mod:-1,save:-1},con:{score:15,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"11",HP:"58 (9d8 + 18)",Speed:"20 ft.",Vulnerabilities:"Fire",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Common plus two other languages",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The mummy makes two Rotting Fist attacks and
uses Dreadful Glare.
Rotting Fist. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3)
Bludgeoning damage plus 10 (3d6) Necrotic damage. If the
target is a creature, it is cursed. While cursed, the target can't
regain Hit Points, its Hit Point maximum doesn't return to
normal when ffnishing a Long Rest, and its Hit Point maximum
decreases by 10 (3d6) every 24 hours that elapse. A creature
dies and turns to dust if reduced to 0 Hit Points by this attack.
Dreadful Glare. Wisdom Saving Throw: DC 11, one creature the
mummy can see within 60 feet. Failure: The target has the
Frightened condition until the end of the mummy's next turn.
Success: The target is immune to this mummy's Dreadful Glare
for 24 hours.
Common  mummies  are  the  remains  of  priests,  nobles,  or
champions of faith that underwent magical burial rites. Some are
preserved through processes using linen wrappings or clay, but
others are preserved by peat bogs, ice, magic, or other means.`}]},{slug:"mummy-lord",name:"Mummy Lord",meta:"Undead (Cleric) Medium or Small, Lawful Evil",type:"Undead",subtype:"Cleric",size:"Medium",alignment:"or Small, Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:17,mod:3,save:3},int:{score:11,mod:0,save:5},wis:{score:19,mod:4,save:9},cha:{score:16,mod:3,save:3}},fields:{AC:"17",HP:"187 (25d8 + 75)",Speed:"30 ft.",Skills:"History +5, Perception +9, Religion +5",Vulnerabilities:"Fire",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",Senses:"Truesight 60 ft., Passive Perception 19",Languages:"Common plus three other languages",CR:"15 (XP 13 000, or 15 000 in Lair; PB +5)"},cr:"15 (XP 13 000, or 15 000 in Lair; PB +5)",crValue:"15",xp:13e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the mummy fails a
saving throw, it can choose to succeed instead.
Magic Resistance. The mummy has Advantage on saving throws
against spells and other magical efiects.
Undead Restoration. If destroyed, the mummy gains a new body in
24 hours if its heart is intact, reviving with all its Hit Points. The new
body appears in an unoccupied space within the mummy's lair. The
heart is a Tiny object that has AC 17, HP 10, and Immunity to all
damage except Fire.`},{title:"ACTIONS",text:`Multiattack. The mummy makes one Rotting Fist or Channel
Negative Energy attack, and it uses Dreadful Glare.
Rotting Fist. Melee Attack Roll: +9, reach 5 ft. Hit: 15 (2d10 + 4)
Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is
a creature, it is cursed. While cursed, the target can't regain Hit
Points, it gains no benefft from ffnishing a Long Rest, and its Hit
Point maximum decreases by 10 (3d6) every 24 hours that elapse. A
creature dies and turns to dust if reduced to 0 Hit Points by this
attack.
Channel Negative Energy. Ranged Attack Roll: +9, range 60 ft. Hit: 25
(6d6 + 4) Necrotic damage.
Dreadful Glare. Wisdom Saving Throw: DC 17, one creature the
mummy can see within 60 feet. Failure: 25 (6d6 + 4) Psychic damage,
and the target has the Paralyzed condition until the end of the
mummy's next turn.
Spellcasting. The mummy casts one of the following spells, requiring
no Material components and using Wisdom as the spellcasting
ability (spell save DC 17, +9 to hit with spell attacks):
At Will: Dispel Magic, Thaumaturgy
1/Day Each: Animate Dead, Harm, Insect Plague (level 7 version)`},{title:"REACTIONS",text:`Whirlwind of Sand. Trigger: The mummy is hit by an attack roll.
Response: The mummy adds 2 to its AC against the attack, possibly
causing the attack to miss, and the mummy teleports up to 60 feet
to an unoccupied space it can see. Each creature of its choice that it
can see within 5 feet of its destination space has the Blinded
condition until the end of the mummy's next turn.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the mummy can expend a use to take one of the
following actions. The mummy regains all expended uses at the start of
each of its turns.
Dread Command. The mummy casts Command (level 2 version), using
the same spellcasting ability as Spellcasting. The mummy can't take
this action again until the start of its next turn.
Glare. The mummy uses Dreadful Glare. The mummy can't take this
action again until the start of its next turn.
Necrotic Strike. The mummy makes one Rotting Fist or Channel
Negative Energy attack
Those desperate to escape death sometimes make terrible bargains with wicked deities. Devoting their hearts to evil forces, these villains
gain power over death and a cursed immortality that binds their minds and spirits within a desiccated corpse. Freed from mortal concerns,
these mummy lords pursue their obsessions across ages. Most mummy lords linger amid the ruins of ancient palaces or temples where they
once held sway. Their age-old faith and ties to deathly forces grant them fearful magic, which they use to sow ruin and animate undead
servants. A mummy lord's heart embodies the pact that grants it immortality. Rather than bearing its heart within its corpse, a mummy lord
removes and hides this accursed organ. As long as its heart isn't destroyed by fire, a mummy lord can return to unlife no matter what doom it
meets. Mummy lords are usually consumed by ageless plots.`}]},{slug:"myconid-adult",name:"Myconid Adult",meta:"Plant Medium, Lawful Neutral",type:"Plant",subtype:"",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:10,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:13,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"16 (3d8 + 3)",Speed:"20 ft.",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Telepathy 240 ft.",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Sun Sickness. While in sunlight, the myconid has Disadvantage
on D20 Tests. The myconid dies if it spends more than 1 hour in
sunlight.`},{title:"ACTIONS",text:`Slam. Melee Attack Roll: +2, reach 5 ft. Hit: 4 (1d8) Bludgeoning
damage plus 3 (1d6) Poison damage.
Pacifying Spores (1/Day). Constitution Saving Throw: DC 11, one
creature the myconid can see within 10 feet. Failure: The target
has the Stunned condition and repeats the save at the end of
each of its turns, ending the efiect on itself on a success. After 1
minute, it succeeds automatically.
Rapport Spores. The myconid expels spores in a 30-foot
Emanation originating from itself. Creatures in that area with an
Intelligence score of 2 or higher that aren't Constructs,
Elementals, or Undead gain telepathy with a range of 30 feet for
1 hour.
Myconid adults defend their territories and other myconids from
invaders.`}]},{slug:"myconid-sovereign",name:"Myconid Sovereign",meta:"Plant Large, Lawful Neutral",type:"Plant",subtype:"",size:"Large",alignment:"Lawful Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:10,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:13,mod:1,save:1},wis:{score:15,mod:2,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"45 (6d10 + 12)",Speed:"30 ft.",Senses:"Darkvision 120 ft., Passive Perception 12",Languages:"Telepathy 240 ft.",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Sun Sickness. While in sunlight, the myconid has Disadvantage
on D20 Tests. The myconid dies if it spends more than 1 hour in
sunlight.`},{title:"ACTIONS",text:`Multiattack. The myconid makes one Slam attack and uses
Pacifying Spores.
Slam. Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1)
Bludgeoning damage plus 5 (2d4) Poison damage.
Animating Spores (3/Day). The myconid releases spores at a
Medium or Small corpse within 5 feet of it that wasn't a
Construct or an Undead. In 24 hours, the corpse rises as a
Myconid Spore Servant. The corpse stays animate for 1d4 + 1
weeks or until destroyed, and it can't be animated again in this
way.
Pacifying Spores. Constitution Saving Throw: DC 12, one creature
the myconid can see within 10 feet. Failure: The target has the
Stunned condition and repeats the save at the end of each of its
turns, ending the efiect on itself on a success. After 1 minute, it
succeeds automatically.
Rapport Spores. The myconid expels spores in a 30-foot
Emanation originating from itself. Creatures in that area with an
Intelligence score of 2 or higher that aren't Constructs,
Elementals, or Undead gain telepathy with a range of 30 feet for
1 hour.
Myconid  sovereigns  resemble  towering  myconid  adults  with
elaborate fungal growths. They direct their lesser kin and see to the
health and growth of vast fungal blooms.`}]},{slug:"myconid-spore-servant",name:"Myconid Spore Servant",meta:"Plant Medium or Small, Unaligned",type:"Plant",subtype:"",size:"Medium",alignment:"or Small, Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:6,mod:-2,save:-2},cha:{score:1,mod:-5,save:-5}},fields:{AC:"13",HP:"37 (5d8 + 15)",Speed:"20 ft.",Immunities:"Poison; Blinded, Charmed, Frightened, Paralyzed, Poisoned",Senses:"Blindsight 30 ft., Passive Perception 8",Languages:"Telepathy 30 ft.",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Slom. Melee Attack Roll: +5, reach 5 ft. Hit:6 (1d6 + 3) Bludgeoning
damage plus 2 (1d4) Poison damage.
Spore  servants  are  corpses  that  have  been  overgrown  and
reanimated by a myconid sovereign's spores. These fungus-infested
bodies are extensions of a myconid sovereign and obey its will.`}]},{slug:"myconid-sprout",name:"Myconid Sprout",meta:"Plant Small, Lawful Neutral",type:"Plant",subtype:"",size:"Small",alignment:"Lawful Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:10,mod:0,save:0},con:{score:10,mod:0,save:0},int:{score:8,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"10",HP:"3 (1d6)",Speed:"10 ft.",Senses:"Darkvision 120 ft., Passive Perception 10",Languages:"Telepathy 240 ft.",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Sun Sickness. While in sunlight, the myconid has Disadvantage
on D20 Tests. The myconid dies if it spends more than 1 hour in
sunlight.`},{title:"ACTIONS",text:`Slam. Melee Attack Roll: +1, reach 5 ft. Hit: 1 (1d4 - 1)
Bludgeoning damage plus 2 (1d4) Poison damage.
Rapport Spores. The myconid expels spores in a 30-foot
Emanation originating from itself. Creatures in that area with an
Intelligence score of 2 or higher that aren't Constructs,
Elementals, or Undead gain telepathy with a range of 30 feet for
1 hour.
Myconid  sprouts  tend  to  their  fungal  homes  and  watch  for
trespassers.`}]},{slug:"nalfeshnee",name:"Nalfeshnee",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:10,mod:0,save:0},con:{score:22,mod:6,save:11},int:{score:19,mod:4,save:9},wis:{score:12,mod:1,save:6},cha:{score:15,mod:2,save:7}},fields:{AC:"18",HP:"184 (16d10 + 96)",Speed:"20 ft., Fly 30 ft.",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Frightened, Poisoned",Senses:"Truesight 120 ft., Passive Perception 11",Languages:"Abyssal; telepathy 120 ft.",CR:"13 (XP 10 000; PB +5)"},cr:"13 (XP 10 000; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Demonic Restoration. If the nalfeshnee dies outside the Abyss,
its body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in the Abyss.
Magic Resistance. The nalfeshnee has Advantage on saving
throws against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The nalfeshnee makes three Rend attacks.
Rend. Melee Attack Roll: +10, reach 10 ft. Hit: 16 (2d10 + 5)
Slashing damage plus 11 (2d10) Force damage.
Teleport. The nalfeshnee teleports up to 120 feet to an
unoccupied space it can see.`},{title:"BONUS ACTIONS",text:`Horror Nimbus (Recharge 5–6). Wisdom Saving Throw: DC 15, each
creature in a 15-foot Emanation originating from the
nalfeshnee. Failure: 28 (8d6) Psychic damage, and the target has
the Frightened condition for 1 minute, until it takes damage, or
until it ends its turn with the nalfeshnee out of line of sight.
Success: The target is immune to this nalfeshnee's Horror
Nimbus for 24 hours.`},{title:"REACTIONS",text:`Pursuit. Trigger: Another creature the nalfeshnee can see ends
its move within 120 feet of the nalfeshnee. Response: The
nalfeshnee uses Teleport, but its destination space must be
within 10 feet of the triggering creature.`}]},{slug:"needle-blight",name:"Needle Blight",meta:"Plant Medium, Neutral Evil",type:"Plant",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:12,mod:1,save:1},dex:{score:12,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:4,mod:-3,save:-3},wis:{score:8,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"12",HP:"16 (3d8 + 3)",Speed:"30 ft.",Immunities:"Deafened",Senses:"Blindsight 60 ft., Passive Perception 9",Languages:"Understands Common but can't speak",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Slashing
damage.
Needles. Ranged Attack Roll: +3, range 30/60 ft. Hit: 6 (2d4 + 1)
Piercing damage.
Needle blights have vaguely bipedal forms, with gaunt, misshapen
limbs. Whether standing unnaturally still or lurching with their
awkward gaits, these blights can't pass as either normal plants or
woodland travelers. Once they spot foes, needle blights attack using
their thorn-covered claws or by rapidly growing and flinging volleys
of serrated, needlelike projectiles.`}]},{slug:"night-hag",name:"Night Hag",meta:"Fiend Medium, Neutral Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:16,mod:3,save:3},wis:{score:14,mod:2,save:2},cha:{score:16,mod:3,save:3}},fields:{AC:"17",HP:"112 (15d8 + 45)",Speed:"30 ft.",Skills:"Deception +6, Insight +5, Perception +5, Stealth +5",Resistances:"Cold, Fire",Immunities:"Charmed",Senses:"Darkvision 120 ft., Passive Perception 15",Languages:"Abyssal, Common, Infernal, Primordial",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Coven Magic. While within 30 feet of at least two hag allies, the
hag can cast one of the following spells, requiring no Material
components, using the spell's normal casting time, and using
Intelligence as the spellcasting ability (spell save DC 14): Augury,
Find Familiar, Identify, Locate Object, Scrying, or Unseen Servant.
The hag must ffnish a Long Rest before using this trait to cast
that spell again.
Magic Resistance. The hag has Advantage on saving throws
against spells and other magical efiects.
Soul Bag. The hag has a soul bag. While holding or carrying the
bag, the hag can use its Nightmare Haunting action. The bag
has AC 15, HP 20, and Resistance to all damage. The bag turns
to dust if reduced to 0 Hit Points. If the bag is destroyed, any
souls the bag is hol`},{title:"ACTIONS",text:`Multiattack. The hag makes two Claw attacks.
Claw. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Slashing
damage.
Nightmare Haunting (1/Day; Requires Soul Bag). While on the
Ethereal Plane, the hag casts Dream, using the same
spellcasting ability as Spellcasting. Only the hag can serve as
the spell's messenger, and the target must be a creature the
hag can see on the Material Plane. The spell fails and is wasted
if the target is under the efiect of the Protection from Evil and
Good spell or within a Magic Circle spell. If the target takes
damage from the Dream spell, the target's Hit Point maximum
decreases by an amount equal to that damage. If the spell kills
the target, its soul is trapped in the hag's soul bag, and the
target can't be raised from the dead until its soul is released.
Spellcasting. The hag casts one of the following spells, requiring
no Material components and using Intelligence as the
spellcasting ability (spell save DC 14):
At Will: Detect Magic, Etherealness, Magic Missile (level 4 version)
2/Day Each: Phantasmal Killer, Plane Shift (self only)`},{title:"BONUS ACTIONS",text:`Shape-Shift. The hag shape-shifts into a Small or Medium
Humanoid, or it returns to its true form. Other than its size, its
game statistics are the same in each form. Any equipment it is
wearing or carrying isn't transformed.
Night hags seek mortals to torment and turn to evil. By day, night
hags use supernatural deceptions to plague their victims, shape-
shifting to pose as other creatures and make their targets believe
the world has turned against them. By night, these hags reinforce
their tortures with terrifying dreams. Once they force their targets
to  desperate  limits,  night  hags  claim  their  victims'  tormented
spirits, capturing them in sinister traps called soul bags. The hags
then slip between planes of existence to barter stolen souls to vile

magic-users and fiendish entities. Night hags maintain networks of
nefarious  customers  and  collect  rumors  from  across  the  Lower
Planes. These hags might part with their secrets in exchange for
magic items and other wicked prices.`}]},{slug:"nightmare",name:"Nightmare",meta:"Fiend Large, Neutral Evil",type:"Fiend",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:13,mod:1,save:1},cha:{score:15,mod:2,save:2}},fields:{AC:"13",HP:"68 (8d10 + 24)",Speed:"60 ft., Fly 90 ft. (hover)",Immunities:"Fire",Senses:"Passive Perception 11",Languages:"Understands Abyssal, Common, and Infernal but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Confer Fire Resistance. The nightmare can grant Resistance to
Fire damage to a rider while it is on the nightmare.
Illumination. The nightmare sheds Bright Light in a 10-foot
radius and Dim Light for an additional 10 feet.`},{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4)
Bludgeoning damage plus 10 (3d6) Fire damage.
Ethereal Stride. The nightmare and up to three willing creatures
within 5 feet of it teleport to the Ethereal Plane from the
Material Plane or vice versa.`}]},{slug:"noble",name:"Noble",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:11,mod:0,save:0},dex:{score:12,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:16,mod:3,save:3}},fields:{AC:"15",HP:"9 (2d8)",Speed:"30 ft.",Skills:"Deception +5, Insight +4, Persuasion +5",Gear:"Breastplate, Rapier",Senses:"Passive Perception 12",Languages:"Common plus two other languages",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Rapier. Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Piercing
damage.`},{title:"REACTIONS",text:`Parry. Trigger: The noble is hit by a melee attack roll while
holding a weapon. Response: The noble adds 2 to its AC against
that attack, possibly causing it to miss.
Nobles encompass a variety of people with social influence. They
might be rulers, wealthy merchants, callous bureaucrats, or the idle
elite.
A  noble's  social  advantages  typically  grant  the  noble  access  to
greater  education  and  training  than  most  common  folk,  while
nobles'  experience  with  business  or  politics  makes  many  adept
negotiators.`}]},{slug:"noble-prodigy",name:"Noble Prodigy",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:16,mod:3,save:7},con:{score:12,mod:1,save:5},int:{score:15,mod:2,save:2},wis:{score:14,mod:2,save:6},cha:{score:19,mod:4,save:8}},fields:{AC:"16",HP:"148 (27d8 + 27)",Speed:"30 ft.",Skills:"Perception +6, Persuasion +8",Senses:"Passive Perception 16",Languages:"Common plus two other languages",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The noble makes three Beguiling Strike attacks.
Beguiling Strike. Melee or Ranged Attack Roll: +8, reach 5 ft. or
range 60 ft. Hit: 18 (4d6 + 4) Psychic damage, and the target has
the Charmed condition until the start of the noble's next turn.
Spellcasting. The noble casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 16):
At will: Mage Armor (included in AC), Mage Hand, Minor Illusion
1/day each: Befuddlement, Detect Thoughts, Fly, Scrying, Shatter
(level 7 version)`},{title:"REACTIONS",text:`Shield (2/Day). The noble casts Shield in response to that spell's
trigger, using the same spellcasting ability as Spellcasting.
Nobles encompass a variety of people with social influence. They
might be rulers, wealthy merchants, callous bureaucrats, or the idle
elite.
Noble prodigies trace their lineage to a legendary hero, a demigod,
a  dragon,  or  some  other  ancestor  that  grants  them  magical
prowess.  Among  some  nobles,  the  source  of  a  prodigy's  magic
might be a family secret.`}]},{slug:"nothic",name:"Nothic",meta:"Aberration Medium, Neutral Evil",type:"Aberration",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:16,mod:3,save:3},con:{score:16,mod:3,save:3},int:{score:13,mod:1,save:1},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"15",HP:"45 (6d8 + 18)",Speed:"30 ft.",Skills:"Arcana +3, Insight +4, Perception +4, Stealth +5",Senses:"Truesight 120 ft., Passive Perception 14",Languages:"Undercommon",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The nothic makes two Claw attacks.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Slashing
damage.
Rotting Gaze. Constitution Saving Throw: DC 13, one creature the
nothic can see within 120 feet. Failure: 17 (5d6) Necrotic
damage. Success: Half damage.`},{title:"BONUS ACTIONS",text:`Weird Insight (Recharge 6). Wisdom Saving Throw: DC 14, one
creature the nothic can see within 120 feet. Failure: The nothic
magically learns one fact or secret about the target.
Consumed  by  their  thirst  for  forbidden  knowledge,  nothics  are
cursed  lore  seekers  transformed  by  secrets  never  meant  to  be
known.  The  bodies  of  these  former  scholars  are  warped  into
otherworldly shapes, each with a head dominated by a gigantic,
unblinking eye. Nothics remember nothing of their past lives and
care only for their endless pursuit of hidden mysteries and uncanny
truths. They seek revelations amid the rubble of forgotten ruins,
and they use their supernatural sight to pierce magical deceptions,
rot  the  flesh  of  enemies,  and  steal  the  secrets  of  those  who
interrupt their investigations. Some nothics seek to end the curse
that warped them into their bizarre forms, but many are unaware
of—or uninterested in—their transformation.`}]},{slug:"nycaloth",name:"Nycaloth",meta:"Fiend (Yugoloth) Large, Neutral Evil",type:"Fiend",subtype:"Yugoloth",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:20,mod:5,save:5},dex:{score:11,mod:0,save:0},con:{score:19,mod:4,save:4},int:{score:12,mod:1,save:1},wis:{score:10,mod:0,save:0},cha:{score:15,mod:2,save:2}},fields:{AC:"18",HP:"152 (16d10 + 64)",Speed:"40 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +4",Resistances:"Cold, Fire, Lightning",Immunities:"Acid, Poison; Poisoned",Senses:"Blindsight 60 ft., Passive Perception 14",Languages:"Abyssal, Infernal; telepathy 60 ft.",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Fiendish Restoration. If the nycaloth dies outside Gehenna, its
body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in Gehenna.
Magic Resistance. The nycaloth has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The nycaloth makes two Mercurial Axe attacks.
Mercurial Axe. Melee or Ranged Attack Roll: +9, reach 10 ft. or
range 30/90 ft. Hit: 18 (2d12 + 5) Slashing damage plus 10 (3d6)
Force damage. Hit or Miss: The axe magically returns to the
nycaloth's hand immediately after a ranged attack.`},{title:"BONUS ACTIONS",text:`Shadowy Teleport. The nycaloth has the Invisible condition for 1
minute, and it teleports up to 30 feet to an unoccupied space it
can see. The condition ends early immediately after it deals
damage.`}]},{slug:"ochre-jelly",name:"Ochre Jelly",meta:"Ooze Large, Unaligned",type:"Ooze",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:6,mod:-2,save:-2},con:{score:14,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:6,mod:-2,save:-2},cha:{score:1,mod:-5,save:-5}},fields:{AC:"8",HP:"52 (7d10 + 14)",Speed:"20 ft., Climb 20 ft.",Resistances:"Acid",Immunities:"Lightning, Slashing; Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",Senses:"Blindsight 60 ft., Passive Perception 8",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Amorphous. The jelly can move through a space as narrow as 1
inch without expending extra movement to do so.
along ceilings, without needing to make an ability check.`},{title:"ACTIONS",text:`Pseudopod. Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Acid
damage.`},{title:"REACTIONS",text:`Split. Trigger: While the jelly is Large or Medium and has 10+ Hit
Points, it becomes Bloodied or is subjected to Lightning or
Slashing damage. Response: The jelly splits into two new Ochre
Jellies. Each new jelly is one size smaller than the original jelly
and acts on its Initiative. The original jelly's Hit Points are
divided evenly between the new jellies (round down).`}]},{slug:"octopus",name:"Octopus",meta:"Beast Small, Unaligned",type:"Beast",subtype:"",size:"Small",alignment:"Unaligned",abilities:{str:{score:4,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:3,mod:4,save:4},wis:{score:10,mod:0,save:0},cha:{score:4,mod:3,save:3}},fields:{AC:"12",HP:"3 (1d6)",Speed:"5 ft., Swim 30 ft.",Skills:"Perception +2, Stealth +6",Senses:"Darkvision 30 ft., Passive Perception 12",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Compression. The octopus can move through a space as narrow
as 1 inch without spending extra movement to do so.
Water Breathing. The octopus can breathe only underwater.`},{title:"ACTIONS",text:`Tentacles. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Bludgeoning
damage.`},{title:"REACTIONS",text:`Ink Cloud (1/Day). Trigger: A creature ends its turn within 5 feet
of the octopus while underwater. Response: The octopus
releases ink that fflls a 5-foot Cube centered on itself, and the
octopus moves up to its Swim Speed. The Cube is Heavily
Obscured for 1 minute or until a strong current or similar efiect
disperses the ink.`}]},{slug:"ogre",name:"Ogre",meta:"Giant Large, Chaotic Evil",type:"Giant",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:8,mod:-1,save:-1},con:{score:16,mod:3,save:3},int:{score:5,mod:-3,save:-3},wis:{score:7,mod:-2,save:-2},cha:{score:7,mod:-2,save:-2}},fields:{AC:"11",HP:"68 (8d10 +24)",Speed:"40 ft.",Gear:"Greatclub, Javelins (3)",Senses:"Darkvision 60 ft., Passive Perception 8",Languages:"Common, Giant",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Greatclub. Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4)
Bludgeoning damage.
Javelin. Melee or Ranged Attack Roll: +6, reach 5 ft. or range
30/120 ft. Hit: 11 (2d6 + 4) Piercing damage.
Ogres are selfish raiders and hulking gluttons spawned of hateful
supernatural forces. From dismal ruins and bleak hinterlands, they
raid vulnerable communities and ambush travelers. Ogres covet
food and treasure, and they spitefully destroy art, books, clockwork
devices, and other delicate or lovingly made things. Occasionally
they kidnap victims to eat later or, more rarely, performers who
catch their interest. Ogres trace their origins to wrathful deities
such  as  Erythnul,  Takhisis,  and  Vaprak.  They  magically  emerge
from the earth of lands corrupted by evil gods, sinister magic, or
ancient  curses.  Some  bear  evidence  of  the  places  that  spawned
them, sporting rocky calluses, mossy growths, or frozen scars.
Ogres are 10-foot-tall brutes that overwhelm their foes and take
what spoils they please. Ogre raiders ally with other evil forces in
return for food, riches, and promises of battle.`}]},{slug:"ogre-zombie",name:"Ogre Zombie",meta:"Undead Large, Neutral Evil",type:"Undead",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:6,mod:-2,save:-2},con:{score:18,mod:4,save:4},int:{score:3,mod:-4,save:-4},wis:{score:6,mod:-2,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"8",HP:"85 (9d10 + 36)",Speed:"30 ft.",Immunities:"Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 8",Languages:"Understands Common and Giant but can't speak",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Undead Fortitude. If damage reduces the zombie to 0 Hit Points,
it makes a Constitution saving throw (DC 5 plus the damage
taken) unless the damage is Radiant or from a Critical Hit. On a
successful save, the zombie drops to 1 Hit Point instead.`},{title:"ACTIONS",text:`Slam. Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4)
Bludgeoning damage.
Ogre zombies serve as tireless labor and undying weapons of war.
These  massive  zombies  possess  the  size  and  strength  to  break
through barriers that repel smaller zombies.`}]},{slug:"ogrillon-ogre",name:"Ogrillon Ogre",meta:"Giant Large, Chaotic Evil",type:"Giant",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:7,mod:-2,save:-2},wis:{score:9,mod:-1,save:-1},cha:{score:10,mod:0,save:0}},fields:{AC:"12",HP:"52 (7d10 + 14)",Speed:"30 ft.",Gear:"Battleaxe, Javelins (3)",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Common, Giant",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Battleaxe. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3)
Slashing damage.
Javelin. Melee or Ranged Attack Roll: +5, reach 5 ft. or range
30/120 ft. Hit: 6 (1d6 + 3) Piercing damage.
Ogres are selfish raiders and hulking gluttons spawned of hateful
supernatural forces. From dismal ruins and bleak hinterlands, they
raid vulnerable communities and ambush travelers. Ogres covet
food and treasure, and they spitefully destroy art, books, clockwork
devices, and other delicate or lovingly made things. Occasionally
they kidnap victims to eat later or, more rarely, performers who
catch their interest. Ogres trace their origins to wrathful deities
such  as  Erythnul,  Takhisis,  and  Vaprak.  They  magically  emerge
from the earth of lands corrupted by evil gods, sinister magic, or
ancient  curses.  Some  bear  evidence  of  the  places  that  spawned
them, sporting rocky calluses, mossy growths, or frozen scars.
Ogrillons arise from Humanoids cursed by foul magic or the will of
wrathful deities. They appear similar to whoever they once were,
but  they  grow  to  over  8  feet  tall  and  gain  ogre-like  features.
Ogrillons constantly seethe with supernatural anger, which they
might struggle to control or purposefully vent on other creatures.`}]},{slug:"oni",name:"Oni",meta:"Fiend Large, Lawful Evil",type:"Fiend",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:11,mod:0,save:3},con:{score:16,mod:3,save:6},int:{score:14,mod:2,save:2},wis:{score:12,mod:1,save:4},cha:{score:15,mod:2,save:5}},fields:{AC:"17",HP:"119 (14d10 + 42)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Arcana +5, Deception +8, Perception +4",Resistances:"Cold",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Common, Giant",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:`Regeneration. The oni regains 10 Hit Points at the start of each
of its turns if it has at least 1 Hit Point.`},{title:"ACTIONS",text:`Multiattack. The oni makes two Claw or Nightmare Ray attacks.
It can replace one attack with a use of Spellcasting.
Claw. Melee Attack Roll: +7, reach 10 ft. Hit: 10 (1d12 + 4) Slashing
damage plus 9 (2d8) Necrotic damage.
Nightmare Ray. Ranged Attack Roll: +5, range 60 ft. Hit: 9 (2d6 + 2)
Psychic damage, and the target has the Frightened condition
until the start of the oni's next turn.
Shape-Shift. The oni shape-shifts into a Small or Medium
Humanoid or a Large Giant, or it returns to its true form. Other
than its size, its game statistics are the same in each form. Any
equipment it is wearing or carrying isn't transformed.
Spellcasting. The oni casts one of the following spells, requiring
no Material components and using Charisma as the spellcasting
ability (spell save DC 13):
1/Day Each: Charm Person (level 2 version), Darkness, Gaseous
Form, Sleep`},{title:"BONUS ACTIONS",text:`Invisibility. The oni casts Invisibility on itself, requiring no spell
components and using the same spellcasting ability as
Spellcasting.`}]},{slug:"otherworldly-steed",name:"Otherworldly Steed",meta:"Celestial or Fey or Fiend (Your Choice) Large, Neutral",type:"Celestial",subtype:"",size:"",alignment:"or Fey or Fiend (Your Choice) Large, Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"10 + 1 per spell level",HP:"5 + 10 per spell level (the steed has a number of Hit Dice [d10s] equal to the spell's level)",Speed:"60 ft., Fly 60 ft. (requires level 4+ spell)",Senses:"Passive Perception 11",Languages:"Telepathy 1 mile (works only with you)",CR:"None (XP 0; PB equals your Proffciency Bonus)"},cr:"None (XP 0; PB equals your Proffciency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Life Bond. When you regain Hit Points from a level 1+ spell, the
steed regains the same number of Hit Points if you're within 5
feet of it.`},{title:"ACTIONS",text:`Otherworldly Slam. Melee Attack Roll: Bonus equals your spell
attack modiffer, reach 5 ft. Hit: 1d8 + the spell's level of Radiant
(Celestial), Psychic (Fey), or Necrotic (Fiend) damage.`},{title:"BONUS ACTIONS",text:`Fell Glare (Fiend Only; Recharges after a Long Rest). Wisdom Saving
Throw: DC equals your spell save DC, one creature within 60 feet
the steed can see. Failure: The target has the Frightened
condition until the end of your next turn.
Fey Step (Fey Only; Recharges after a Long Rest). The steed
teleports, along with its rider, to an unoccupied space of your
choice up to 60 feet away from itself.
Healing Touch (Celestial Only; Recharges after a Long Rest). One
creature within 5 feet of the steed regains a number of Hit
Points equal to 2d8 plus the spell's level.
See Find Steed.`}]},{slug:"otyugh",name:"Otyugh",meta:"Aberration Large, Neutral",type:"Aberration",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:11,mod:0,save:0},con:{score:19,mod:4,save:7},int:{score:6,mod:-2,save:-2},wis:{score:13,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"104 (11d10 + 44)",Speed:"30 ft.",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Otyugh; telepathy 120 ft. (doesn't allow the receiving creature to respond telepathically)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The otyugh makes one Bite attack and two Tentacle
attacks.
Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 12 (2d8 + 3) Piercing
damage, and the target has the Poisoned condition. Whenever
the Poisoned target ffnishes a Long Rest, it is subjected to the
following efiect. Constitution Saving Throw: DC 15. Failure: The
target's Hit Point maximum decreases by 5 (1d10) and doesn't
return to normal until the Poisoned condition ends on the
target. Success: The Poisoned condition ends.
Tentacle. Melee Attack Roll: +6, reach 10 ft. Hit: 12 (2d8 + 3)
Piercing damage. If the target is a Medium or smaller creature,
it has the Grappled condition (escape DC 13) from one of two
tentacles.
Tentacle Slam. Constitution Saving Throw: DC 14, each creature
Grappled by the otyugh. Failure: 16 (3d8 + 3) Bludgeoning
damage, and the target has the Stunned condition until the
start of the otyugh's next turn. Success: Half damage only.`}]},{slug:"owl",name:"Owl",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:3,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:8,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:2,save:2}},fields:{AC:"11",HP:"1 (1d4 - 1)",Speed:"5 ft., Fly 60 ft.",Skills:"Perception +5, Stealth +5",Senses:"Darkvision 120 ft., Passive Perception 15",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Flyby. The owl doesn't provoke Opportunity Attack action when
it flies out of an enemy's reach.`},{title:"ACTIONS",text:"Talons. Melee Attack Roll: +3, reach 5 ft. Hit: 1 Slashing damage."}]},{slug:"owlbear",name:"Owlbear",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:20,mod:5,save:5},dex:{score:12,mod:1,save:1},con:{score:17,mod:3,save:3},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"13",HP:"59 (7d10 + 21)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The owlbear makes two Rend attacks.
Rend. Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Slashing
damage.
Created  long  ago  by  misguided  mages,  owlbears  combine  keen
avian eyes, thick feathers, and a tearing beak with a mighty bearlike
frame. Despite their magical origins, owlbears have propagated and
spread to wildernesses across the multiverse. Owlbears dwell in
distinctive dens.
Owlbears are tenacious hunters that might track prey over miles
and rarely give up their hunts.`}]},{slug:"panther",name:"Panther",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:16,mod:3,save:3},con:{score:10,mod:0,save:0},int:{score:3,mod:4,save:4},wis:{score:14,mod:2,save:2},cha:{score:7,mod:2,save:2}},fields:{AC:"13",HP:"13 (3d8)",Speed:"50 ft., Climb 40 ft.",Skills:"Perception +4, Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing
damage.`},{title:"BONUS ACTIONS",text:"Nimble Escape. The panther takes the Disengage or Hide action."}]},{slug:"pegasus",name:"Pegasus",meta:"Celestial Large, Chaotic Good",type:"Celestial",subtype:"",size:"Large",alignment:"Chaotic Good",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:4},con:{score:16,mod:3,save:5},int:{score:10,mod:0,save:0},wis:{score:15,mod:2,save:4},cha:{score:13,mod:1,save:3}},fields:{AC:"12",HP:"59 (7d10 + 21)",Speed:"60 ft., Fly 90 ft.",Skills:"Perception +6",Senses:"Passive Perception 16",Languages:"Understands Celestial, Common, Elvish, and Sylvan but can't speak",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +6, reach 5 ft. Hit: 7 (1d6 + 4)
Bludgeoning damage plus 5 (2d4) Radiant damage.`}]},{slug:"performer",name:"Performer",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:16,mod:3,save:5},con:{score:12,mod:1,save:1},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:16,mod:3,save:5}},fields:{AC:"13",HP:"27 (5d8 + 5)",Speed:"30 ft.",Skills:"Acrobatics +5, Athletics +3, Performance +7",Gear:"Shortsword",Senses:"Passive Perception 12",Languages:"Common plus one other language",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Shortsword. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3)
Piercing damage.`},{title:"REACTIONS",text:`Uncanny Dodge. Trigger: The performer is hit by an attack roll.
Response: The performer halves the damage (round down) it
takes from that attack.
Common  performers  include  traveling  storytellers,  tavern
musicians,  local  entertainers,  and  chorus  members  performing
with veteran artists. These performers might be self-taught or in
the early years of formal training. Most have a modest level of
celebrity and two or three instruments or talents at which they
excel.`}]},{slug:"performer-legend",name:"Performer Legend",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:20,mod:5,save:9},con:{score:14,mod:2,save:2},int:{score:15,mod:2,save:6},wis:{score:16,mod:3,save:7},cha:{score:20,mod:5,save:9}},fields:{AC:"20",HP:"162 (25d8 + 50)",Speed:"30 ft.",Skills:"Acrobatics +13, Athletics +5, Perception +7, Performance +13, Stealth +9",Senses:"Passive Perception 17",Languages:"Common plus two other languages",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The performer makes three Bejeweled Baton
attacks.
Bejeweled Baton. Melee Attack Roll: +9, reach 5 ft. Hit: 10 (2d4 + 5)
Bludgeoning damage plus 10 (3d6) Psychic damage.
Majestic Song. Wisdom Saving Throw: DC 17, each creature in a
20-foot-radius Sphere centered on a point within 120 feet.
Failure: 22 (4d8 + 4) Psychic damage, and the target has the
Charmed or Frightened condition (performer's choice) until the
end of the performer's next turn. Success: Half damage only.
Spellcasting. The performer casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 17):
At will: Mage Hand, Minor Illusion, Prestidigitation
1/day each: Major Image, Project Image`},{title:"REACTIONS",text:`Warding Charm. Trigger: A creature hits the performer with an
attack roll. Response—Wisdom Saving Throw: DC 17, the
triggering creature. Failure: The attack roll misses the
performer, and the target has the Charmed condition until the
end of the performer's next turn.
Performer  legends  are  celebrities  known  across  nations,
continents, or worlds. Their prestige might grant them access to the
heights  of  society,  or  they  might  use  their  performances  to
manipulate audiences. Performer legends usually have signature
traits or talents that set them apart from other entertainers, such as
a  distinct  voice,  incredible  athleticism,  or  a  unique  manner  of
dress. They often travel with a retinue of other performers, guards,
or noble patrons.`}]},{slug:"performer-maestro",name:"Performer Maestro",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:18,mod:4,save:7},con:{score:14,mod:2,save:2},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:19,mod:4,save:7}},fields:{AC:"18",HP:"110 (17d8 + 34)",Speed:"30 ft.",Skills:"Acrobatics +10, Athletics +4, Perception +5, Performance +10, Stealth +7",Gear:"Rapier",Senses:"Passive Perception 15",Languages:"Common plus one other language",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The performer makes three Rapier attacks.
Rapier. Melee Attack Roll: +7, reach 5 ft. Hit: 8 (1d8 + 4) Piercing
damage plus 7 (2d6) Psychic damage.
Beguiling Song. Wisdom Saving Throw: DC 15, each creature in a
20-foot-radius Sphere centered on a point within 120 feet.
Failure: 20 (3d10 + 4) Psychic damage, and the target has the
Charmed condition until the end of the performer's next turn.
Success: Half damage only.
Spellcasting. The performer casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 15):
At will: Minor Illusion, Prestidigitation
1/day: Tasha's Hideous Laughter (level 3 version)
Maestros  are  headlining  performers  who  enjoy  considerable
renown.  They  might  be  theaters'  marquee  actors,  astonishing
daredevils,  or  jesters  experienced  at  entertaining  fickle  royals.
Some  share  their  techniques  with  apprentices,  while  others
jealously guard their secrets.`}]},{slug:"peryton",name:"Peryton",meta:"Monstrosity Medium, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:9,mod:-1,save:-1},wis:{score:12,mod:1,save:1},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"33 (6d8 + 6)",Speed:"20 ft., Fly 60 ft.",Skills:"Perception +5, Stealth +3",Senses:"Passive Perception 15",Languages:"Understands Common and Elvish but can't speak",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Flyby. The peryton doesn't provoke an Opportunity Attack when
it flies out of an enemy's reach.`},{title:"ACTIONS",text:`Multiattack. The peryton makes one Gore attack and one Talons
attack.
Gore. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing
damage. If the peryton moved 30+ feet straight toward the
target immediately before the hit, the target takes an extra 9
(2d8) Piercing damage.
Talons. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (2d4 + 3) Piercing
damage. If the attack reduces a Humanoid target to 0 Hit
Points, the peryton kills the target by removing its heart.`}]},{slug:"phase-spider",name:"Phase Spider",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:2},dex:{score:16,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"45 (7d10 + 7)",Speed:"30 ft., Climb 30 ft.",Skills:"Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"—",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Ethereal Sight. The spider can see 60 feet into the Ethereal Plane
while on the Material Plane and vice versa.
along ceilings, without needing to make an ability check.
Web Walker. The spider ignores movement restrictions caused
by webs, and the spider knows the location of any other
creature in contact with the same web.`},{title:"ACTIONS",text:`Multiattack. The spider makes two Bite attacks.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing
damage plus 9 (2d8) Poison damage. If this damage reduces the
target to 0 Hit Points, the target becomes Stable, and it has the
Poisoned condition for 1 hour. While Poisoned, the target also
has the Paralyzed condition.`},{title:"BONUS ACTIONS",text:`Ethereal Jaunt. The spider teleports from the Material Plane to
the Ethereal Plane or vice versa.`}]},{slug:"piercer",name:"Piercer",meta:"Aberration Medium, Unaligned",type:"Aberration",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:13,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:1,mod:-5,save:-5},wis:{score:7,mod:-2,save:-2},cha:{score:3,mod:-4,save:-4}},fields:{AC:"15",HP:"22 (3d8 + 9)",Speed:"5 ft., Climb 15 ft.",Skills:"Stealth +5",Senses:"Blindsight 30 ft., Darkvision 60 ft., Passive Perception 8",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:"along ceilings, without needing to make an ability check."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Piercing
damage.
Drop. The piercer falls. Dexterity Saving Throw: DC 11, one
creature directly underneath the piercer. Failure: 10 (3d6)
Piercing damage. Failure or Success: The piercer reduces any
damage it takes from the fall by 20.`}]},{slug:"piranha",name:"Piranha",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:-4,save:-4},dex:{score:16,mod:3,save:3},con:{score:9,mod:-1,save:-1},int:{score:1,mod:-5,save:-5},wis:{score:7,mod:-2,save:-2},cha:{score:2,mod:-4,save:-4}},fields:{AC:"13",HP:"1 (1d4 - 1)",Speed:"5 ft., Swim 40 ft.",Senses:"Darkvision 60 ft., Passive Perception 8",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:"Water Breathing. The piranha can breathe only underwater."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5 (with Advantage if the target doesn't
have all its Hit Points), reach 5 ft. Hit: 1 Piercing damage.`}]},{slug:"pirate",name:"Pirate",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:10,mod:0,save:0},dex:{score:16,mod:3,save:5},con:{score:12,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:12,mod:1,save:1},cha:{score:14,mod:2,save:4}},fields:{AC:"14",HP:"33 (6d8 + 6)",Speed:"30 ft.",Gear:"Daggers (6), Leather Armor",Senses:"Passive Perception 11",Languages:"Common plus one other language",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The pirate makes two Dagger attacks. It can replace
one of these attacks with a use of Enthralling Panache.
Dagger. Melee or Ranged Attack Roll: +5, reach 5 ft. or range
20/60 ft. Hit: 5 (1d4 + 3) Piercing damage.
Enthralling Panache. Wisdom Saving Throw: DC 12, one creature
the pirate can see within 30 feet. Failure: The target has the
Charmed condition until the start of the pirate's next turn.
Along  with  being  competent  warriors,  pirates  are  accomplished
seafarers who know how to sail and maintain a ship. While some
loyally  follow  their  captains'  orders,  others  place  greed,
superstition, or self-preservation over duty.`}]},{slug:"pirate-admiral",name:"Pirate Admiral",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:14,mod:2,save:6},dex:{score:22,mod:6,save:10},con:{score:14,mod:2,save:2},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:6},cha:{score:19,mod:4,save:8}},fields:{AC:"20",HP:"182 (28d8 + 56)",Speed:"30 ft.",Skills:"Acrobatics +10, Athletics +6, Perception +6",Gear:"Pistol, Scimitar",Senses:"Passive Perception 16",Languages:"Common plus one other language",CR:"12 (XP 8 400; PB +4)"},cr:"12 (XP 8 400; PB +4)",crValue:"12",xp:8400,sections:[{title:"ACTIONS",text:`Multiattack. The pirate makes three attacks, using Scimitar or
Pistol in any combination.
Scimitar. Melee Attack Roll: +10, reach 5 ft. Hit: 16 (3d6 + 6)
Slashing damage plus 7 (2d6) Poison damage, and the target
sufiers one of the following efiects of the pirate's choice:
Awestruck. The target has the Charmed condition until the start
of the pirate's next turn.
Poison. The target has the Poisoned condition until the start of
the pirate's next turn.
Pistol. Ranged Attack Roll: +10, range 30/90 ft. Hit: 28 (4d10 + 6)
Piercing damage.`},{title:"BONUS ACTIONS",text:`Rally (1/Day). The pirate chooses up to three other creatures it
can see within 30 feet. Until the start of the pirate's next turn,
the targets have Advantage on attack rolls and saving throws.`},{title:"REACTIONS",text:`Defensive Stance. Trigger: The pirate is hit by a melee attack roll
while holding a weapon. Response: The pirate adds 4 to its AC
against melee attack rolls (including the triggering attack) until
the start of its next turn, possibly causing the attacks to miss.
Pirate  admirals  command  whole  pirate  fleets.  They  undertake
audacious  ventures,  such  as  challenging  the  navies  of  coastal
nations, hunting legendary sea creatures, or carving out their own
pirate kingdoms. Pirate admirals might launch their fleets from
hidden fortresses where they hoard their treasure—or keep maps to
where they've hidden their riches. Some pirate admirals ally with
the  followers  of  oceanic  deities,  underwater  dwellers,  and  sea
monsters, as well as their fellow scalawags.`}]},{slug:"pirate-captain",name:"Pirate Captain",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:10,mod:0,save:3},dex:{score:18,mod:4,save:7},con:{score:14,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:5},cha:{score:17,mod:3,save:6}},fields:{AC:"17",HP:"84 (13d8 + 26)",Speed:"30 ft.",Skills:"Acrobatics +7, Perception +5",Gear:"Pistol, Rapier",Senses:"Passive Perception 15",Languages:"Common plus one other language",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The pirate makes three attacks, using Rapier or
Pistol in any combination.
Rapier. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Piercing
damage, and the pirate has Advantage on the next attack roll it
makes before the end of this turn.
Pistol. Ranged Attack Roll: +7, range 30/90 ft. Hit: 15 (2d10+ 4)
Piercing damage.`},{title:"BONUS ACTIONS",text:`Captain's Charm. Wisdom Saving Throw: DC 14, one creature the
pirate can see within 30 feet. Failure: The target has the
Charmed condition until the start of the pirate's next turn.`},{title:"REACTIONS",text:`Riposte. Trigger: The pirate is hit by a melee attack roll while
holding a weapon. Response: The pirate adds 3 to its AC against
that attack, possibly causing the attack to miss. On a miss, the
pirate makes one Rapier attack against the triggering creature if
within range.
Pirate  captains  command  crews  of  pirates,  dictating  their
destinations and targets. Captains cultivate fearsome and theatrical
reputations, painting themselves as larger-than-life characters to
terrorize their foes, ensure the obedience of their crews, and attract
followers to their banner. Many have colorful nicknames inspired
by signature traits and deeds.`}]},{slug:"pit-fiend",name:"Pit Fiend",meta:"Fiend (Devil) Large, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:26,mod:8,save:8},dex:{score:14,mod:2,save:8},con:{score:24,mod:7,save:7},int:{score:22,mod:6,save:6},wis:{score:18,mod:4,save:10},cha:{score:24,mod:7,save:7}},fields:{AC:"21",HP:"337 (27d10 + 189)",Speed:"30 ft., Fly 60 ft.",Skills:"Perception +10, Persuasion +19",Resistances:"Cold",Immunities:"Fire, Poison; Poisoned",Senses:"Truesight 120 ft., Passive Perception 20",Languages:"Infernal; telepathy 120 ft.",CR:"20 (XP 25 000; PB +6)"},cr:"20 (XP 25 000; PB +6)",crValue:"20",xp:25e3,sections:[{title:"TRAITS",text:`Diabolical Restoration. If the pit ffend dies outside the Nine
Hells, its body disappears in sulfurous smoke, and it gains a
new body instantly, reviving with all its Hit Points somewhere in
the Nine Hells.
Fear Aura. The pit ffend emanates an aura in a 20-foot
Emanation while it doesn't have the Incapacitated condition.
Wisdom Saving Throw: DC 21, any enemy that starts its turn in
the aura. Failure: The target has the Frightened condition until
the start of its next turn. Success: The target is immune to this
pit ffend's aura for 24 hours.
Legendary Resistance (4/Day). If the pit ffend fails a saving throw,
it can choose to succeed instead.
Magic Resistance. The pit ffend has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The pit ffend makes one Bite attack, two Devilish
Claw attacks, and one Fiery Mace attack.
Bite. Melee Attack Roll: +14, reach 10 ft. Hit: 18 (3d6 + 8) Piercing
damage. If the target is a creature, it must make the following
saving throw. Constitution Saving Throw: DC 21. Failure: The
target has the Poisoned condition. While Poisoned, the target
can't regain Hit Points and takes 21 (6d6) Poison damage at the
start of each of its turns, and it repeats the save at the end of
each of its turns, ending the efiect on itself on a success. After 1
minute, it succeeds automatically.
Devilish Claw. Melee Attack Roll: +14, reach 10 ft. Hit: 26 (4d8 + 8)
Necrotic damage.
Fiery Mace. Melee Attack Roll: +14, reach 10 ft. Hit: 22 (4d6 + 8)
Force damage plus 21 (6d6) Fire damage.
Hellflre Spellcasting (Recharge 4–6). The pit ffend casts Fireball
(level 5 version) twice, requiring no Material components and
using Charisma as the spellcasting ability (spell save DC 21). It
can replace one Fireball with Hold Monster (level 7 version) or
Wall of Fire.`}]},{slug:"pixie",name:"Pixie",meta:"Fey Tiny, Neutral Good",type:"Fey",subtype:"",size:"Tiny",alignment:"Neutral Good",abilities:{str:{score:2,mod:-4,save:-4},dex:{score:20,mod:5,save:5},con:{score:8,mod:-1,save:-1},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"9 (6d4 - 6)",Speed:"10 ft., Fly 30 ft.",Skills:"Perception +4, Stealth +7",Senses:"Passive Perception 14",Languages:"Sylvan",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Magic Resistance. The pixie has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Faerie Dust. Melee or Ranged Attack Roll: +4, reach 5 ft. or range
60 ft. Hit: 1 Radiant damage, and the target has the Charmed or
Poisoned condition (pixie's choice) until the start of the pixie's
next turn.
Spellcasting. The pixie casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 12):
At will: Dancing Lights, Druidcraft, Invisibility (self only)
1/day each: Detect Thoughts, Fly, Sleep
Pixies spend their days frolicking and exploring and avoid direct
conflict when they can.`}]},{slug:"pixie-wonderbringer",name:"Pixie Wonderbringer",meta:"Fey Tiny, Neutral Good",type:"Fey",subtype:"",size:"Tiny",alignment:"Neutral Good",abilities:{str:{score:2,mod:-4,save:-4},dex:{score:20,mod:5,save:5},con:{score:10,mod:0,save:0},int:{score:11,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:18,mod:4,save:4}},fields:{AC:"15",HP:"60 (24d4)",Speed:"10 ft., Fly 30 ft.",Skills:"Arcana +3, Perception +5, Stealth +8",Senses:"Passive Perception 15",Languages:"Common, Elvish, Sylvan",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Magic Resistance. The pixie has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The pixie makes two Faerie Dust attacks.
Faerie Dust. Melee or Ranged Attack Roll: +7, reach 5 ft. or range
60 ft. Hit: 15 (2d10 + 4) Radiant damage, and the target has the
Charmed or Poisoned condition (pixie's choice) until the start of
the pixie's next turn.
Spellcasting. The pixie casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 15):
At will: Dancing Lights, Druidcraft, Invisibility (self only)
1/day each: Detect Thoughts, Fly, Major Image`},{title:"BONUS ACTIONS",text:`Burst of Wonder (Recharge 5–6). The pixie casts Entangle,
Polymorph, or Tasha's Hideous Laughter, requiring no Material
components and using the same spellcasting ability as
Spellcasting.
Energetic entertainers, wonderbringers use their magic in defense
of the wilderness when they must.`}]},{slug:"planetar",name:"Planetar",meta:"Celestial (Angel) Large, Lawful Good",type:"Celestial",subtype:"Angel",size:"Large",alignment:"Lawful Good",abilities:{str:{score:24,mod:7,save:12},dex:{score:20,mod:5,save:5},con:{score:24,mod:7,save:12},int:{score:19,mod:4,save:4},wis:{score:22,mod:6,save:11},cha:{score:25,mod:7,save:12}},fields:{AC:"19",HP:"262 (21d10 + 147)",Speed:"40 ft., Fly 120 ft. (hover)",Skills:"Perception +11",Resistances:"Radiant",Immunities:"Charmed, Exhaustion, Frightened",Senses:"Truesight 120 ft., Passive Perception 21",Languages:"All; telepathy 120 ft.",CR:"16 (XP 15 000; PB +5)"},cr:"16 (XP 15 000; PB +5)",crValue:"16",xp:15e3,sections:[{title:"TRAITS",text:`Divine Awareness. The planetar knows if it hears a lie.
Exalted Restoration. If the planetar dies outside Mount Celestia,
its body disappears, and it gains a new body instantly, reviving
with all its Hit Points somewhere in Mount Celestia.
Magic Resistance. The planetar has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The planetar makes three Radiant Sword attacks or
uses Holy Burst twice.
Radiant Sword. Melee Attack Roll: +12, reach 10 ft. Hit: 14 (2d6 +
7) Slashing damage plus 18 (4d8) Radiant damage.
Holy Burst. Dexterity Saving Throw: DC 20, each enemy in a 20-
foot-radius Sphere centered on a point the planetar can see
within 120 feet. Failure: 24 (7d6) Radiant damage. Success: Half
damage.
Spellcasting. The planetar casts one of the following spells,
requiring no Material components and using Charisma as
spellcasting ability (spell save DC 20):
At Will: Detect Evil and Good
1/Day Each: Commune, Control Weather, Dispel Evil and Good,
Raise Dead`},{title:"BONUS ACTIONS",text:`Divine Aid (2/Day). The planetar casts Cure Wounds, Invisibility,
Lesser Restoration, or Remove Curse, using the same spellcasting
ability as Spellcasting.`}]},{slug:"plesiosaurus",name:"Plesiosaurus",meta:"Beast (Dinosaur) Large, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"68 (8d10 + 24)",Speed:"20 ft., Swim 40 ft.",Skills:"Perception +3, Stealth +4",Senses:"Passive Perception 13",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:"Hold Breath. The plesiosaurus can hold its breath for 1 hour."},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +6, reach 10 ft. Hit: 11 (2d6 + 4) Piercing
damage.`}]},{slug:"polar-bear",name:"Polar Bear",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:20,mod:5,save:5},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:13,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"42 (5d10 + 15)",Speed:"40 ft., Swim 40 ft.",Skills:"Perception +5, Stealth +4",Resistances:"Cold",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The bear makes two Rend attacks.
Rend. Melee Attack Roll: +7, reach 5 ft. Hit: 9 (1d8 + 5) Slashing
damage.`}]},{slug:"poltergeist",name:"Poltergeist",meta:"Undead Medium or Small, Chaotic Neutral",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Chaotic Neutral",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:14,mod:2,save:2}},fields:{AC:"12",HP:"22 (5d8)",Speed:"5 ft., Fly 50 ft. (hover)",Resistances:"Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common plus one other language",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Incorporeal Movement. The poltergeist can move through other
(1d10) Force damage if it ends its turn inside an object.`},{title:"ACTIONS",text:`Multiattack. The poltergeist makes one Object Slam attack and
uses Telekinetic Thrust.
Object Slam. Melee or Ranged Attack Roll: +4, reach 5 ft. or range
30 ft. Hit: 7 (2d4 + 2) Bludgeoning damage.
Telekinetic Thrust. Strength Saving Throw: DC 12, one creature the
poltergeist can see within 30 feet. Failure: 9 (2d6 + 2) Force
damage, and the target is pushed up to 30 feet straight away
from the poltergeist.`},{title:"BONUS ACTIONS",text:`Vanish. The poltergeist gives itself the Invisible condition or
ends that condition on itself.`}]},{slug:"pony",name:"Pony",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:15,mod:2,save:4},dex:{score:10,mod:0,save:0},con:{score:13,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:11,mod:0,save:0},cha:{score:7,mod:2,save:2}},fields:{AC:"10",HP:"11 (2d8 + 2)",Speed:"40 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2)
Bludgeoning damage.`}]},{slug:"priest",name:"Priest",meta:"Humanoid (Cleric) Medium or Small, Neutral",type:"Humanoid",subtype:"Cleric",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:3},cha:{score:13,mod:1,save:1}},fields:{AC:"13",HP:"38 (7d8 + 7)",Speed:"30 ft.",Skills:"Medicine +7, Perception +5, Religion +5",Gear:"Chain Shirt, Holy Symbol, Mace",Senses:"Passive Perception 15",Languages:"Common plus one other language",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The priest makes two attacks, using Mace or
Radiant Flame in any combination.
Mace. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3)
Bludgeoning damage plus 5 (2d4) Radiant damage.
Radiant Flame. Ranged Attack Roll: +5, range 60 ft. Hit: 11 (2d10)
Radiant damage.
Spellcasting. The priest casts one of the following spells, using
Wisdom as the spellcasting ability:
At will: Light, Thaumaturgy
1/day: Spirit Guardians`},{title:"BONUS ACTIONS",text:`Divine Aid (3/Day). The priest casts Bless, Dispel Magic, Healing
Word, or Lesser Restoration, using the same spellcasting ability
as Spellcasting.
Priests draw on their beliefs to heal the needful and smite their
foes.  They  can  channel  their  faith  as  spells  and  empower  their
weapons with divine might.`}]},{slug:"priest-acolyte",name:"Priest Acolyte",meta:"Humanoid (Cleric) Medium or Small, Neutral",type:"Humanoid",subtype:"Cleric",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:14,mod:2,save:2},dex:{score:10,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"11 (2d8 + 2)",Speed:"30 ft.",Skills:"Medicine +4, Religion +2",Gear:"Chain Shirt, Holy Symbol, Mace",Senses:"Passive Perception 12",Languages:"Common",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Mace. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Bludgeoning damage plus 2 (1d4) Radiant damage.
Radiant Flame. Ranged Attack Roll: +4, range 60 ft. Hit: 7 (2d6)
Radiant damage.
Spellcasting. The priest casts one of the following spells, using
Wisdom as the spellcasting ability:
At will: Light, Thaumaturgy`},{title:"BONUS ACTIONS",text:`Divine Aid (1/Day). The priest casts Bless, Healing Word, or
Sanctuary, using the same spellcasting ability as Spellcasting.
Priest  acolytes  have  great  faith  but  modest  magical  skill.  Some
might be trainees in religious organizations or soldiers in zealous
armies,  while  others  are  faith  leaders  in  small  communities  or
wanderers on pilgrimages.`}]},{slug:"primeval-owlbear",name:"Primeval Owlbear",meta:"Monstrosity Huge, Unaligned",type:"Monstrosity",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:22,mod:6,save:6},dex:{score:14,mod:2,save:2},con:{score:19,mod:4,save:7},int:{score:8,mod:-1,save:-1},wis:{score:15,mod:2,save:5},cha:{score:7,mod:-2,save:-2}},fields:{AC:"16",HP:"126 (12d12 + 48)",Speed:"40 ft., Climb 40 ft., Fly 5 ft.",Skills:"Perception +8",Senses:"Darkvision 120 ft., Passive Perception 18",Languages:"—",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:"Magic Resistance."},{title:"ACTIONS",text:`Multiattack.
Ravage.
Screech (Recharge 5–6).
Created  long  ago  by  misguided  mages,  owlbears  combine  keen
avian eyes, thick feathers, and a tearing beak with a mighty bearlike
frame. Despite their magical origins, owlbears have propagated and
spread to wildernesses across the multiverse. Owlbears dwell in
distinctive dens.
Ancient forests and Feywild demesnes steeped in magic can give
rise  to  particularly  large  and  vicious  owlbears.  These  primeval
specimens can fly—albeit poorly—and emit thunderous screeches
that can rattle foes and even tear them asunder.`}]},{slug:"pseudodragon",name:"Pseudodragon",meta:"Dragon Tiny, Neutral Good",type:"Dragon",subtype:"",size:"Tiny",alignment:"Neutral Good",abilities:{str:{score:6,mod:2,save:2},dex:{score:15,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:10,mod:0,save:0}},fields:{AC:"14",HP:"10 (3d4 + 3)",Speed:"15 ft., Fly 60 ft.",Skills:"Perception +5, Stealth +4",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 15",Languages:"Understands Common and Draconic but can't speak",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Magic Resistance. The pseudodragon has Advantage on saving
throws against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The pseudodragon makes two Bite attacks.
Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing
damage.
Sting. Constitution Saving Throw: DC 12, one creature the
pseudodragon can see within 5 feet. Failure: 5 (2d4) Poison
damage, and the target has the Poisoned condition for 1 hour.
While Poisoned, the target also has the Unconscious condition,
which ends early if the target takes damage or a creature within
5 feet of it takes an action to wake it.
Pseudodragons dwell in scenic wildernesses, preferably where life
is easy and prey is small and slow. There they behave like contented
wyrms,  creating  tiny  lairs  amid  ancient  trees  and  rugged  cliffs.
They  fill  these  lairs  with  shiny  rocks,  colorful  shells,  and
unattended treasures  that  catch  their  attention,  and they  guard
these  hoards  fiercely.  Pseudodragons  grow  to  the  size  of  large
house cats, and most have red-brown scales. Some have scales with
other hues or patterns—markings distinct from those of their larger
draconic  cousins.  Many  magic-users  attempt  to  befriend
pseudodragons, hoping to enlist them as familiars. The creatures'
intellect and resistance to magic make them excellent companions,
and they're considered status symbols in some spellcasting circles.
Many  pseudodragons  prefer  the  finer  things  in  life.  These
diminutive dragons might be inclined to aid those who ply them
with treats. Contrariwise, mages who don't properly pamper their
pseudodragon familiars might be abandoned without warning.`}]},{slug:"psychic-gray-ooze",name:"Psychic Gray Ooze",meta:"Ooze Medium, Unaligned",type:"Ooze",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:12,mod:1,save:1},dex:{score:8,mod:-1,save:-1},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:6,mod:-2,save:-2},cha:{score:2,mod:-4,save:-4}},fields:{AC:"9",HP:"37 (5d8 + 15)",Speed:"10 ft., Climb 10 ft.",Skills:"Stealth +3",Resistances:"Acid, Cold, Fire, Psychic",Immunities:"Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",Senses:"Blindsight 60 ft., Passive Perception 8",Languages:"—",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Amorphous. The ooze can move through a space as narrow as 1
inch without expending extra movement to do so.`},{title:"ACTIONS",text:`Pseudopod. Melee Attack Roll: +3, reach 5 ft. Hit: 11 (3d6 + 1) Acid
damage, and the target has Disadvantage on Intelligence saving
throws until the end of the ooze's next turn.
Psychic Crush. Intelligence Saving Throw: DC 10, one creature the
ooze can see within 60 feet. Failure: 13 (3d8) Psychic damage.`},{title:"REACTIONS",text:`Mind Corrosion. Trigger: The ooze fails a saving throw against a
spell or another magical efiect created by a creature. Response:
The triggering creature takes 3 (1d6) Psychic damage.
Psychic  gray  oozes  exhibit  violent  psionic  abilities.  These  oozes
sometimes  result  from  failed  attempts  to  summon  or  create
creatures linked to the Elemental Plane of Earth, like gargoyles or
homunculi.`}]},{slug:"pteranodon",name:"Pteranodon",meta:"Beast (Dinosaur) Medium, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Medium",alignment:"Unaligned",abilities:{str:{score:12,mod:1,save:1},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:9,mod:-1,save:-1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"13 (3d8)",Speed:"10 ft., Fly 60 ft.",Skills:"Perception +1",Senses:"Passive Perception 11",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Flyby. The pteranodon doesn't provoke an Opportunity Attack
when it flies out of an enemy's reach.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing
damage.`}]},{slug:"purple-worm",name:"Purple Worm",meta:"Monstrosity Gargantuan, Unaligned",type:"Monstrosity",subtype:"",size:"Gargantuan",alignment:"Unaligned",abilities:{str:{score:28,mod:9,save:9},dex:{score:7,mod:-2,save:-2},con:{score:22,mod:6,save:11},int:{score:1,mod:-5,save:-5},wis:{score:8,mod:-1,save:4},cha:{score:4,mod:-3,save:-3}},fields:{AC:"18",HP:"247 (15d20 + 90)",Speed:"50 ft., Burrow 50 ft.",Senses:"Blindsight 30 ft., Tremorsense 60 ft., Passive Perception",Languages:"—",CR:"15 (XP 13 000; PB +5)"},cr:"15 (XP 13 000; PB +5)",crValue:"15",xp:13e3,sections:[{title:"TRAITS",text:`Tunneler. The worm can burrow through solid rock at half its
Burrow Speed and leaves a 10-foot-diameter tunnel in its wake.`},{title:"ACTIONS",text:`Multiattack. The worm makes one Bite attack and one Tail
Stinger attack.
Bite. Melee Attack Roll: +14, reach 10 ft. Hit: 22 (3d8 + 9) Piercing
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 19), and it has the Restrained
condition until the grapple ends.
Tail Stinger. Melee Attack Roll: +14, reach 10 ft. Hit: 16 (2d6 + 9)
Piercing damage plus 35 (10d6) Poison damage.`},{title:"BONUS ACTIONS",text:`Swallow. Strength Saving Throw: DC 19, one Large or smaller
creature Grappled by the worm (it can have up to three
creatures swallowed at a time). Failure: The target is swallowed
by the worm, and the Grappled condition ends. A swallowed
creature has the Blinded and Restrained conditions, has Total
Cover against attacks and other efiects outside the worm, and
takes 17 (5d6) Acid damage at the start of each of the worm's
turns. If the worm takes 30 damage or more on a single turn
from a creature inside it, the worm must succeed on a DC 21
Constitution saving throw at the end of that turn or regurgitate
all swallowed creatures, each of which falls in a space within 5
feet of the worm and has the Prone condition. If the worm dies,
any swallowed creature no longer has the Restrained condition
and can escape from the corpse using 20 feet of movement,
exiting Prone.`}]},{slug:"quaggoth",name:"Quaggoth",meta:"Monstrosity Medium, Chaotic Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Chaotic Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"13",HP:"45 (6d8 + 18)",Speed:"30 ft., Climb 30 ft.",Skills:"Athletics +5",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Undercommon",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Bloodied Fury. While Bloodied, the quaggoth has Advantage on
attack rolls.`},{title:"ACTIONS",text:`Multiattack. The quaggoth makes two Claw attacks.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing
damage, or 13 (3d6 + 3) Slashing damage if the quaggoth is
Bloodied.
For quaggoths, every fight means life or death. They battle with
wild fury and do anything to survive.`}]},{slug:"quaggoth-thonot",name:"Quaggoth Thonot",meta:"Monstrosity Medium, Chaotic Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Chaotic Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:14,mod:2,save:2},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"67 (9d8 + 27)",Speed:"30 ft., Climb 30 ft.",Skills:"Athletics +5",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 12",Languages:"Undercommon",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Bloodied Fury. While Bloodied, the quaggoth has Advantage on
attack rolls.`},{title:"ACTIONS",text:`Multiattack. The quaggoth makes two Claw attacks.
Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing
damage plus 5 (2d4) Psychic damage.
Spellcasting. The quaggoth casts one of the following spells,
requiring no spell components and using Wisdom as the
spellcasting ability (spell save DC 12):
At will: Mage Hand (the hand is Invisible), Minor Illusion
2/day: Mind Spike`},{title:"REACTIONS",text:`Psionic Defense (3/Day). The quaggoth casts Feather Fall or Shield
in response to the spell's trigger, requiring no spell components
and using the same spellcasting ability as Spellcasting.
Quaggoth thonots possess psionic abilities, which they use to give
themselves an edge in combat and to coerce the service of other
quaggoths.`}]},{slug:"quasit",name:"Quasit",meta:"Fiend (Demon) Tiny, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Tiny",alignment:"Chaotic Evil",abilities:{str:{score:5,mod:3,save:3},dex:{score:17,mod:3,save:3},con:{score:10,mod:0,save:0},int:{score:7,mod:2,save:2},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"25 (10d4)",Speed:"40 ft.",Skills:"Stealth +5",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 10",Languages:"Abyssal, Common",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Magic Resistance. The quasit has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing
damage, and the target has the Poisoned condition until the
start of the quasit's next turn.
Invisibility. The quasit casts Invisibility on itself, requiring no
spell components and using Charisma as the spellcasting ability.
Scare (1/Day). Wisdom Saving Throw: DC 10, one creature within
20 feet. Failure: The target has the Frightened condition. At the
end of each of its turns, the target repeats the save, ending the
efiect on itself on a success. After 1 minute, it succeeds
automatically.
Shape-Shift. The quasit shape-shifts to resemble a bat (Speed 10
ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft.,
Swim 40 ft.), or it returns to its true form. Its statistics are the
same in each form, except for its Speed. Any equipment it's
wearing or carrying isn't transformed.
Tirelessly destructive, quasits sow discord through nasty pranks,
sabotage, and ambushes. These tiny demons use chaos and violence
to terrorize others. By shape-shifting into harmless but ill-omened
creatures or by turning invisible, quasits sneak into places where
they spy for villainous masters or set vicious traps. Quasits delight
in hiding in dark places and—when least expected—bursting forth
to  slash  foes  with  their  poisoned  claws.  Quasits  are  usually
overlooked and underestimated by other demons. This drives them
to prove themselves through cruel acts or by seeking paths to the
Material Plane. Among mortals, quasits sow senseless chaos, and
they  might  find  kindred  evil  spirits  among  violent  cultists  and
magic-users.`}]},{slug:"questing-knight",name:"Questing Knight",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:20,mod:5,save:9},dex:{score:16,mod:3,save:3},con:{score:16,mod:3,save:7},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:5},cha:{score:18,mod:4,save:8}},fields:{AC:"18",HP:"202 (27d8 + 81)",Speed:"30 ft.",Skills:"Athletics +9, Perception +5, Persuasion +8",Immunities:"Charmed, Frightened",Gear:"Greatsword, Longbow, Plate Armor",Senses:"Passive Perception 15",Languages:"Common plus one other language",CR:"12 (XP 8 400; PB +4)"},cr:"12 (XP 8 400; PB +4)",crValue:"12",xp:8400,sections:[{title:"TRAITS",text:`Aura of Bravery. Creatures of the knight's choice in a 30-foot
Emanation originating from it have Immunity to the Charmed
and Frightened conditions while there.`},{title:"ACTIONS",text:`Multiattack. The knight makes three attacks, using Greatsword
or Longbow in any combination.
Greatsword. Melee Attack Roll: +9, reach 5 ft. Hit: 12 (2d6 + 5)
Slashing damage plus 22 (5d8) Radiant damage.
Longbow. Ranged Attack Roll: +7, range 150/600 ft. Hit: 12 (2d8 +
3) Piercing damage plus 22 (5d8) Radiant damage.
Spellcasting. The knight casts one of the following spells, using
Charisma as the spellcasting ability (spell save DC 16):
1/day each: Daylight, Dispel Evil and Good, Greater Restoration,
Phantom Steed
Knights are skilled warriors trained for war and tested in battle.
Many serve the rulers of a realm, a religion, or an order devoted to
a cause.
Questing knights travel in pursuit of a cause, such as slaying a
villain, defeating a monster, recovering an Artifact, or restoring
their lost honor.`}]},{slug:"rakshasa",name:"Rakshasa",meta:"Fiend Medium, Lawful Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:17,mod:3,save:3},con:{score:18,mod:4,save:4},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:3},cha:{score:20,mod:5,save:5}},fields:{AC:"17",HP:"221 (26d8 + 104)",Speed:"40 ft.",Skills:"Deception +10, Insight +8, Perception +8",Vulnerabilities:"Piercing damage from weapons wielded by creatures under the efiect of a Bless spell",Immunities:"Charmed, Frightened",Senses:"Truesight 60 ft., Passive Perception 18",Languages:"Common, Infernal",CR:"13 (XP 10 000; PB +5)"},cr:"13 (XP 10 000; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Greater Magic Resistance. The rakshasa automatically succeeds
on saving throws against spells and other magical efiects, and
the attack rolls of spells automatically miss it. Without the
rakshasa's permission, no spell can observe the rakshasa
remotely or detect its thoughts, creature type, or alignment.
Fiendish Restoration. If the rakshasa dies outside the Nine Hells,
its body turns to ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in the Nine Hells.`},{title:"ACTIONS",text:`Multiattack. The rakshasa makes three Cursed Touch attacks.
Cursed Touch. Melee Attack Roll: +10, reach 5 ft. Hit: 12 (2d6 + 5)
Slashing damage plus 19 (3d12) Necrotic damage. If the target is
a creature, it is cursed. While cursed, the target gains no benefft
from ffnishing a Short or Long Rest.
Baleful Command (Recharge 5–6). Wisdom Saving Throw: DC 18,
each enemy in a 30-foot Emanation originating from the
rakshasa. Failure: 28 (8d6) Psychic damage, and the target has
the Frightened and Incapacitated conditions until the start of
the rakshasa's next turn.
Spellcasting. The rakshasa casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 18):
At Will: Detect Magic, Detect Thoughts, Disguise Self, Mage Hand,
Minor Illusion
1/Day Each: Fly, Invisibility, Major Image, Plane Shift`}]},{slug:"rat",name:"Rat",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:9,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:10,mod:0,save:0},cha:{score:4,mod:3,save:3}},fields:{AC:"10",HP:"1 (1d4 - 1)",Speed:"20 ft., Climb 20 ft.",Skills:"Perception +2",Senses:"Darkvision 30 ft., Passive Perception 12",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Agile. The rat doesn't provoke Opportunity Attack action when it
moves out of an enemy's reach.`},{title:"ACTIONS",text:"Bite. Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"raven",name:"Raven",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:5,mod:3,save:3},wis:{score:13,mod:1,save:1},cha:{score:6,mod:2,save:2}},fields:{AC:"12",HP:"2 (1d4)",Speed:"10 ft., Fly 50 ft.",Skills:"Perception +3",Senses:"Passive Perception 13",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Mimicry. The raven can mimic simple sounds it has heard, such
as a whisper or chitter. A hearer can discern the sounds are
imitations with a successful DC 10 Wisdom (Insight) check.`},{title:"ACTIONS",text:"Beak. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"red-dragon-wyrmling",name:"Red Dragon Wyrmling",meta:"Dragon (Chromatic) Medium, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:10,mod:0,save:2},con:{score:17,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"17",HP:"75 (10d8 + 30)",Speed:"30 ft., Climb 30 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +2",Immunities:"Fire",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Slashing
damage plus 3 (1d6) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 13, each
creature in a 15-foot Cone. Failure: 24 (7d6) Fire damage.
Success: Half damage.
Red dragons take whatever they desire and burn to ash anything
that stands in their way. These chromatic dragons endlessly desire
more—more magic, territory, treasure, or whatever else inflames
their cruel ambitions. Red dragons make their lairs amid perilous
cliffs and volcanoes. Within, they amass and fiercely protect hoards
of treasure, and many have perfect recall of the hoards' contents
and  the  locations  of  all  they've  collected.  Should  anything  go
missing,  red  dragons  fly  into  rages.  They  don't  rest  until  their
treasures are returned and the thieves have burned. Red dragons
believe  themselves  to  be  the  greatest  of  all  dragons  and,  by
extension,  the  greatest  of  all  creatures.  To  them,  pillaging  and
conquering are their right—treasures can find no more honored
place than in their hoards, and other creatures are privileged to
serve them.`}]},{slug:"red-slaad",name:"Red Slaad",meta:"Aberration Large, Chaotic Neutral",type:"Aberration",subtype:"",size:"Large",alignment:"Chaotic Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:12,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:6,mod:-2,save:-2},wis:{score:6,mod:-2,save:-2},cha:{score:7,mod:-2,save:-2}},fields:{AC:"14",HP:"93 (11d10 + 33)",Speed:"30 ft.",Skills:"Perception +1",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Slaad; telepathy 60 ft.",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Magic Resistance. The slaad has Advantage on saving throws
against spells and other magical efiects.
Regeneration. The slaad regains 10 Hit Points at the start of each
of its turns if it has at least 1 Hit Point.`},{title:"ACTIONS",text:`Multiattack. The slaad makes three Injecting Claw attacks.
Injecting Claw. Melee Attack Roll: +6, reach 10 ft. Hit: 10 (2d6 + 3)
Piercing damage. If the target is a Humanoid not cursed by a
slaad, it is subjected to the following efiect. Constitution Saving
Throw: DC 14. Failure: The target is cursed unawares, and a
minuscule slaad egg is implanted in it. Removing the curse
destroys the egg. Over 2d4 × 10 days, the egg gestates. In the
ffnal 24 hours, the cursed target feels unwell; its Speed is
halved, and it has Disadvantage on D20 Tests. At the end of this
time, the egg turns into a Slaad Tadpole, which chews out of the
host and kills it.
Red slaadi amass in vast throngs in Limbo. There they wrestle and
croak-sing  as  they  endlessly  dismantle  and  rebuild  islands  of
drifting planar matter. When they encounter non-slaadi, red slaadi
seek to play with, telepathically converse with, or devour the other
creatures.  These  whims  change  from  moment  to  moment.  Red
slaadi instinctively avoid harming those bearing slaadi eggs, which
red slaadi implant using their claws, or other slaad curses.`}]},{slug:"reef-shark",name:"Reef Shark",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:15,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:1,mod:5,save:5},wis:{score:10,mod:0,save:0},cha:{score:4,mod:3,save:3}},fields:{AC:"12",HP:"22 (4d8 + 4)",Speed:"5 ft., Swim 30 ft.",Skills:"Perception +2",Senses:"Blindsight 30 ft., Passive Perception 12",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Pack Tactics. The shark has Advantage on an attack roll against a
creature if at least one of the shark's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.
Water Breathing. The shark can breathe only underwater.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Piercing
damage.`}]},{slug:"remorhaz",name:"Remorhaz",meta:"Monstrosity Huge, Unaligned",type:"Monstrosity",subtype:"",size:"Huge",alignment:"Unaligned",abilities:{str:{score:24,mod:7,save:7},dex:{score:13,mod:1,save:1},con:{score:21,mod:5,save:5},int:{score:4,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"17",HP:"195 (17d12 + 85)",Speed:"40 ft., Burrow 30 ft.",Immunities:"Cold, Fire",Senses:"Darkvision 60 ft., Tremorsense 60 ft., Passive Perception",Languages:"—",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Heat Aura. At the end of each of the remorhaz's turns, each
creature in a 5-foot Emanation originating from the remorhaz
takes 16 (3d10) Fire damage.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +11, reach 10 ft. Hit: 18 (2d10 + 7) Piercing
damage plus 14 (4d6) Fire damage. If the target is a Large or
smaller creature, it has the Grappled condition (escape DC 17),
and it has the Restrained condition until the grapple ends.`},{title:"BONUS ACTIONS",text:`Swallow. Strength Saving Throw: DC 19, one Large or smaller
creature Grappled by the remorhaz (it can have up to two
creatures swallowed at a time). Failure: The target is swallowed
by the remorhaz, and the Grappled condition ends. A swallowed
creature has the Blinded and Restrained conditions, it has Total
Cover against attacks and other efiects outside the remorhaz,
and it takes 10 (3d6) Acid damage plus 10 (3d6) Fire damage at
the start of each of the remorhaz's turns. If the remorhaz takes
30 damage or more on a single turn from a creature inside it,
the remorhaz must succeed on a DC 15 Constitution saving
throw at the end of that turn or regurgitate all swallowed
creatures, each of which falls in a space within 5 feet of the
remorhaz and has the Prone condition. If the remorhaz dies,
any swallowed creature no longer has the Restrained condition
and can escape from the corpse by using 15 feet of movement,
exiting Prone.
Full-grown remorhazes are single-minded ambush predators. They
attempt to bite prey and trap it against their searing bodies, then
swallow their meal whole. Remorhazes eat as much as they can,
since they might go months without feeding.`}]},{slug:"revenant",name:"Revenant",meta:"Undead Medium, Neutral",type:"Undead",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:7},dex:{score:14,mod:2,save:2},con:{score:18,mod:4,save:7},int:{score:13,mod:1,save:1},wis:{score:16,mod:3,save:6},cha:{score:18,mod:4,save:7}},fields:{AC:"13",HP:"127 (15d8 + 60)",Speed:"30 ft.",Resistances:"Necrotic, Psychic",Immunities:"Poison; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned, Stunned",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Common plus one other language",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Regeneration. The revenant regains 10 Hit Points at the start of
each of its turns. If the revenant takes Fire or Radiant damage,
this trait doesn't function at the start of its next turn. Its body is
destroyed only if it starts its turn with 0 Hit Points and doesn't
regenerate.
Undead Restoration. If the revenant dies, it revives 24 hours
later in a difierent body unless Dispel Evil and Good is cast on its
corpse. If it revives, it animates a Humanoid corpse elsewhere
on the same plane of existence; it now looks difierent but uses
the same stat block and returns with all its Hit Points.`},{title:"ACTIONS",text:`Multiattack. The revenant uses Vengeful Glare and makes two
Slam attacks.
Slam. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Necrotic
damage.
Vengeful Glare. Wisdom Saving Throw: DC 15, one creature the
revenant can see within 30 feet. Failure: The target has the
Frightened condition and repeats the save at the end of each of
its turns, ending the efiect on itself on a success. After 1
minute, it succeeds automatically. If the Frightened target is
cursed by the revenant (see Vow of Revenge), the target also
has the Paralyzed condition for the duration.`},{title:"BONUS ACTIONS",text:`Vow of Revenge (1/Day). The revenant curses one creature it can
see within 30 feet of itself. The revenant knows the distance to
and direction of the cursed target, even if it is on a difierent
plane of existence. The curse ends on the target if the revenant
uses this Bonus Action on a difierent creature.
Revenants possess the bodies they had in life, using them to hunt
down their killers. If their bodies are destroyed, they take control of
new  bodies  that  gradually  change  to  resemble  the  revenants'
original forms.`}]},{slug:"rhinoceros",name:"Rhinoceros",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:21,mod:5,save:5},dex:{score:8,mod:-1,save:-1},con:{score:15,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"13",HP:"45 (6d10 + 12)",Speed:"40 ft.",Senses:"Passive Perception 11",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Gore. Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Piercing
damage. If target is a Large or smaller creature and the
rhinoceros moved 20+ feet straight toward it immediately
before the hit, the target takes an extra 9 (2d8) Piercing damage
and has the Prone condition.`}]},{slug:"riding-horse",name:"Riding Horse",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:16,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:12,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:11,mod:0,save:0},cha:{score:7,mod:2,save:2}},fields:{AC:"11",HP:"13 (2d10 + 2)",Speed:"60 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3)
Bludgeoning damage.`}]},{slug:"roc",name:"Roc",meta:"Monstrosity Gargantuan, Unaligned",type:"Monstrosity",subtype:"",size:"Gargantuan",alignment:"Unaligned",abilities:{str:{score:28,mod:9,save:9},dex:{score:10,mod:0,save:4},con:{score:20,mod:5,save:5},int:{score:3,mod:-4,save:-4},wis:{score:10,mod:0,save:4},cha:{score:9,mod:-1,save:-1}},fields:{AC:"15",HP:"248 (16d20 + 80)",Speed:"20 ft., Fly 120 ft.",Skills:"Perception +8",Senses:"Passive Perception 18",Languages:"—",CR:"11 (XP 7 200; PB +4)"},cr:"11 (XP 7 200; PB +4)",crValue:"11",xp:7200,sections:[{title:"ACTIONS",text:`Multiattack. The roc makes two Beak attacks. It can replace one
attack with a Talons attack.
Beak. Melee Attack Roll: +13, reach 10 ft. Hit: 28 (3d12 + 9)
Piercing damage.
Talons. Melee Attack Roll: +13, reach 5 ft. Hit: 23 (4d6 + 9)
Slashing damage. If the target is a Huge or smaller creature, it
has the Grappled condition (escape DC 19) from both talons,
and it has the Restrained condition until the grapple ends.`},{title:"BONUS ACTIONS",text:`Swoop (Recharge 5–6). If the roc has a creature Grappled, the roc
flies up to half its Fly Speed without provoking Opportunity
Attacks and drops that creature.`}]},{slug:"roper",name:"Roper",meta:"Aberration Large, Neutral Evil",type:"Aberration",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:8,mod:-1,save:-1},con:{score:17,mod:3,save:3},int:{score:7,mod:-2,save:-2},wis:{score:16,mod:3,save:3},cha:{score:6,mod:-2,save:-2}},fields:{AC:"20",HP:"93 (11d10 + 33)",Speed:"10 ft., Climb 20 ft.",Skills:"Perception +6, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 16",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:"along ceilings, without needing to make an ability check."},{title:"ACTIONS",text:`Multiattack. The roper makes two Tentacle attacks, uses Reel,
and makes two Bite attacks.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 17 (3d8 + 4) Piercing
damage.
Tentacle. Melee Attack Roll: +7, reach 60 ft. Hit: The target has the
Grappled condition (escape DC 14) from one of six tentacles,
and the target has the Poisoned condition until the grapple
ends. The tentacle can be damaged, freeing a creature it has
Grappled when destroyed (AC 20, HP 10, Immunity to Poison
and Psychic damage). Damaging the tentacle deals no damage
to the roper, and a destroyed tentacle regrows at the start of
the roper's next turn.
Reel. The roper pulls each creature Grappled by it up to 30 feet
straight toward it.`}]},{slug:"rust-monster",name:"Rust Monster",meta:"Monstrosity Medium, Unaligned",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:12,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:13,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"33 (6d8 + 6)",Speed:"40 ft.",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"—",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Iron Scent. The rust monster can pinpoint the location of ferrous
metal within 30 feet of itself.`},{title:"ACTIONS",text:`Multiattack. The rust monster makes one Bite attack and uses
Antennae twice.
Bite. Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Piercing
damage.
Antennae. The rust monster targets one nonmagical metal
object—armor or a weapon—worn or carried by a creature
within 5 feet of itself. Dexterity Saving Throw: DC 11, the creature
with the object. Failure: The object takes a −1 penalty to the AC
it ofiers (armor) or to its attack rolls (weapon). Armor is
destroyed if the penalty reduces its AC to 10, and a weapon is
destroyed if its penalty reaches −5. The penalty can be removed
by casting the Mending spell on the armor or weapon.
Destroy Metal. The rust monster touches a nonmagical metal
object within 5 feet of itself that isn't being worn or carried. The
touch destroys a 1-foot Cube of the object.`},{title:"REACTIONS",text:"Response: The rust monster uses Antennae."}]},{slug:"saber-toothed-tiger",name:"Saber-Toothed Tiger",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:6},dex:{score:17,mod:3,save:5},con:{score:15,mod:2,save:2},int:{score:3,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"52 (7d10 + 14)",Speed:"40 ft.",Skills:"Perception +5, Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Running Leap. With a 10-foot running start, the tiger can Long
Jump up to 25 feet.`},{title:"ACTIONS",text:`Multiattack. The tiger makes two Rend attacks.
Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Slashing
damage.`},{title:"BONUS ACTIONS",text:"Nimble Escape. The tiger takes the Disengage or Hide action."}]},{slug:"sahuagin-baron",name:"Sahuagin Baron",meta:"Fiend Large, Lawful Evil",type:"Fiend",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:15,mod:2,save:5},con:{score:16,mod:3,save:6},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:4},cha:{score:17,mod:3,save:3}},fields:{AC:"16",HP:"76 (9d10 + 27)",Speed:"30 ft., Swim 50 ft.",Skills:"Perception +7",Resistances:"Acid, Cold",Gear:"Breastplate, Trident",Senses:"Darkvision 120 ft., Passive Perception 17",Languages:"Sahuagin",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Blood Frenzy. The sahuagin has Advantage on attack rolls
against any creature that doesn't have all its Hit Points.
Limited Amphibiousness. The sahuagin can breathe air and
water, but it must be submerged at least once every 4 hours to
avoid sufiocating outside water.
Shark Telepathy. The sahuagin can magically control sharks
within 120 feet of itself, using a special telepathy.`},{title:"ACTIONS",text:`Multiattack. The sahuagin makes three Trident attacks.
Trident. Melee or Ranged Attack Roll: +7, reach 5 ft. or range
20/60 ft. Hit: 13 (2d8 + 4) Piercing damage.`},{title:"REACTIONS",text:`Fiendish Blood. Trigger: The sahuagin takes Piercing or Slashing
damage. Response—Constitution Saving Throw: DC 14, each
creature of the sahuagin's choice in a 5-foot Emanation
originating from the sahuagin. Failure: 10 (3d6) Acid damage,
and the target is cursed until it ffnishes a Short or Long Rest.
While cursed, the target can't benefft from the Invisible
condition, its Speed decreases by 10 feet, and all Fiends within
120 feet of the target can sense its location regardless of
interposing obstacles.
During times of great conflict, Sekolah blesses particularly ruthless
sahuagin warriors with increased size and an additional pair of
arms,  transforming  them  into  sahuagin  barons.  These  boons
elevate the recipients' status among their kind, and they become
champions  or  leaders.  Sahuagin  barons'  blood  is  infused  with
profane magic capable of searing their enemies and making these
foes irresistible targets for other Fiends.`}]},{slug:"sahuagin-priest",name:"Sahuagin Priest",meta:"Fiend Medium, Lawful Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:11,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:13,mod:1,save:1}},fields:{AC:"12",HP:"38 (7d8 + 7)",Speed:"30 ft., Swim 40 ft.",Skills:"Perception +6, Religion +3",Resistances:"Acid, Cold",Senses:"Darkvision 120 ft., Passive Perception 16",Languages:"Sahuagin",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Blood Frenzy. The sahuagin has Advantage on attack rolls
against any creature that doesn't have all its Hit Points.
Limited Amphibiousness. The sahuagin can breathe air and
water, but it must be submerged at least once every 4 hours to
avoid sufiocating outside water.
Shark Telepathy. The sahuagin can magically control sharks
within 120 feet of itself, using a special telepathy.`},{title:"ACTIONS",text:`Multiattack. The sahuagin makes two Spectral Jaws attacks.
Spectral Jaws. Melee or Ranged Attack Roll: +4, reach 5 ft. or range
120 ft. Hit: 11 (2d8 + 2) Force damage.
Spellcasting. The sahuagin casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 12):
At will: Thaumaturgy
2/day each: Hold Person, Tongues`},{title:"BONUS ACTIONS",text:`Fiendish Aid (2/Day). The sahuagin casts Bless or Healing Word,
using the same spellcasting ability as Spellcasting.
Sahuagin  priests  serve  the  will  of  Sekolah  or  other  fiendish
masters. They direct and support other sahuagin, and they consider
every  combatant  that  falls  in  battle—whether  enemy  or  ally—a
sacrifice to their fierce deities.`}]},{slug:"sahuagin-warrior",name:"Sahuagin Warrior",meta:"Fiend Medium, Lawful Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:11,mod:0,save:0},con:{score:12,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:13,mod:1,save:1},cha:{score:9,mod:-1,save:-1}},fields:{AC:"12",HP:"22 (4d8 + 4)",Speed:"30 ft., Swim 40 ft.",Skills:"Perception +5",Resistances:"Acid, Cold",Senses:"Darkvision 120 ft., Passive Perception 15",Languages:"Sahuagin",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Blood Frenzy. The sahuagin has Advantage on attack rolls
against any creature that doesn't have all its Hit Points.
Limited Amphibiousness. The sahuagin can breathe air and
water, but it must be submerged at least once every 4 hours to
avoid sufiocating outside water.
Shark Telepathy. The sahuagin can magically control sharks
within 120 feet of itself, using a special telepathy.`},{title:"ACTIONS",text:`Multiattack. The sahuagin makes two Claw attacks.
Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing
damage.`},{title:"BONUS ACTIONS",text:`Aquatic Charge. The sahuagin swims up to its Swim Speed
straight toward an enemy it can see.
Sahuagin warriors are vicious combatants that savage their foes
with webbed claws. Once sahuagin draw blood, they usually attack
until either they or their foe is slain.`}]},{slug:"salamander",name:"Salamander",meta:"Elemental Large, Neutral Evil",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:12,mod:1,save:1}},fields:{AC:"15",HP:"90 (12d10 + 24)",Speed:"30 ft., Climb 30 ft.",Vulnerabilities:"Cold",Immunities:"Fire",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Ignan)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Fire Aura. At the end of each of the salamander's turns, each
creature of the salamander's choice in a 5-foot Emanation
originating from the salamander takes 7 (2d6) Fire damage.`},{title:"ACTIONS",text:`Multiattack. The salamander makes two Flame Spear attacks. It
can replace one attack with a use of Constrict.
Flame Spear. Melee or Ranged Attack Roll: +7, reach 5 ft. or range
20/60 ft. Hit: 13 (2d8 + 4) Piercing damage plus 7 (2d6) Fire
damage. Hit or Miss: The spear magically returns to the
salamander's hand immediately after a ranged attack.
Constrict. Strength Saving Throw: DC 15, one Large or smaller
creature the salamander can see within 10 feet. Failure: 11 (2d6
+ 4) Bludgeoning damage plus 7 (2d6) Fire damage. The target
has the Grappled condition (escape DC 14), and it has the
Restrained condition until the grapple ends.
Most salamanders are arrogant yet curious, seeking to create artful
blazes or burn that which has never been burned. They eagerly
explain their work to strangers before trying to determine how the
strangers  burn.  Salamanders  radiate  intense  heat,  which  is
conducted by their blazing weapons.`}]},{slug:"salamander-fire-snake",name:"Salamander Fire Snake",meta:"Elemental Medium, Neutral Evil",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:12,mod:1,save:1},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"14",HP:"27 (6d8)",Speed:"30 ft., Climb 30 ft.",Vulnerabilities:"Cold",Immunities:"Fire",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands Primordial but can't speak",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Fire Aura. At the end of each of the salamander's turns, each
creature of the salamander's choice in a 5-foot Emanation
originating from the salamander takes 3 (1d6) Fire damage.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Piercing
damage plus 3 (1d6) Fire damage.
Juvenile salamanders emerge from burning hot, two-foot-diameter
eggs. Called fire snakes, these serpentlike creatures slither through
the Plane of Fire and other intensely hot places. After consuming
the proper fuels and exposing themselves to fiery extremes, fire
snakes grow into salamanders.`}]},{slug:"salamander-inferno-master",name:"Salamander Inferno Master",meta:"Elemental Large, Neutral Evil",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:24,mod:7,save:7},dex:{score:16,mod:3,save:8},con:{score:18,mod:4,save:4},int:{score:14,mod:2,save:2},wis:{score:10,mod:0,save:5},cha:{score:20,mod:5,save:5}},fields:{AC:"18",HP:"256 (27d10 + 108)",Speed:"40 ft., Climb 40 ft.",Vulnerabilities:"Cold",Immunities:"Fire",Senses:"Darkvision 120 ft., Passive Perception 10",Languages:"Primordial (Ignan)",CR:"15 (XP 13 000; PB +5)"},cr:"15 (XP 13 000; PB +5)",crValue:"15",xp:13e3,sections:[{title:"TRAITS",text:`Fire Aura. At the end of each of the salamander's turns, each
creature of the salamander's choice in a 10-foot Emanation
originating from the salamander takes 10 (3d6) Fire damage.
Magic Resistance. The salamander has Advantage on saving
throws against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The salamander makes two Flame Trident attacks.
Flame Trident. Melee or Ranged Attack Roll: +12, reach 5 ft. or
range 30/90 ft. Hit: 16 (2d8 + 7) Piercing damage plus 14 (4d6)
Fire damage. Hit or Miss: The trident magically returns to the
salamander's hand immediately after a ranged attack.
Inferno Blast (Recharge 5–6). Dexterity Saving Throw: DC 18, each
creature in a 30-foot-radius Sphere centered on a point the
salamander can see within 120 feet. Failure: 35 (10d6) Fire
damage, and the target starts burning, taking 5 (1d10) Fire
damage at the start of each of its turns instead of the normal
burning damage. The target gains 1 Exhaustion level whenever
it takes this burning damage. Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Blazing Movement. The salamander moves up to its Speed
without provoking Opportunity Attacks. During this movement,
ffre fflls a 5-foot Emanation originating from the salamander.
When the Emanation enters a creature's space, that creature
takes 7 (2d6) Fire damage. A creature can take this damage only
once per turn.
Salamander inferno masters are ancient connoisseurs of flames
and often inhabit places with unique scorching properties. They
gather communes of apprentices who learn fiery techniques while
helping  their  mentors  accomplish  great  works.  Inferno  masters
have ambitious goals, such as causing massive volcanic eruptions,
opening portals to burning planes, destroying Artifacts, or burning
all instances of something from the multiverse.`}]},{slug:"satyr",name:"Satyr",meta:"Fey Medium, Chaotic Neutral",type:"Fey",subtype:"",size:"Medium",alignment:"Chaotic Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:16,mod:3,save:3},con:{score:11,mod:0,save:0},int:{score:12,mod:1,save:1},wis:{score:10,mod:0,save:0},cha:{score:14,mod:2,save:2}},fields:{AC:"13",HP:"31 (7d8)",Speed:"40 ft.",Skills:"Perception +2, Performance +6, Stealth +5",Senses:"Passive Perception 12",Languages:"Common, Elvish, Sylvan",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Magic Resistance. The satyr has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3)
Bludgeoning damage. If the target is a Medium or smaller
creature, the satyr pushes the target up to 10 feet straight away
from itself.
Mockery. Wisdom Saving Throw: DC 12, one creature the satyr
can see within 90 feet. Failure: 5 (1d6 + 2) Psychic damage.
Satyrs  enjoy  demonstrating  their  physicality  through  contests,
evicting party poopers, and defending Fey realms.`}]},{slug:"satyr-revelmaster",name:"Satyr Revelmaster",meta:"Fey Medium, Chaotic Neutral",type:"Fey",subtype:"",size:"Medium",alignment:"Chaotic Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:18,mod:4,save:7},con:{score:12,mod:1,save:1},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:5},cha:{score:17,mod:3,save:3}},fields:{AC:"17",HP:"82 (15d8 + 15)",Speed:"40 ft.",Skills:"Acrobatics +7, Perception +5, Performance +9",Senses:"Passive Perception 15",Languages:"Common, Elvish, Sylvan",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Magic Resistance. The satyr has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The satyr makes three Prance attacks.
Prance. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4)
Bludgeoning damage, and the target has the Charmed condition
until the start of the satyr's next turn.
Fey Melody (Recharge 4–6). The satyr conjures a charming or
frightening song. Wisdom Saving Throw: DC 14, each enemy in a
60-foot Emanation originating from the satyr. Failure: The target
is subjected to the song's efiect:
Charming. The target has the Charmed condition for 1 minute.
While Charmed, the target has the Incapacitated condition and
uses all its movement to dance in place. The efiect ends on the
target if it takes any damage.
Frightening. 10 (2d6 + 3) Psychic damage, and the target has
the Frightened condition for 1 minute. If the target ends its turn
out of line of sight from the satyr, the condition ends on it.
Satyr revelmasters use magical music to change the moods of other
creatures. They do so to keep their celebrations exciting and to
ward off foes.`}]},{slug:"scarecrow",name:"Scarecrow",meta:"Construct Medium, Chaotic Evil",type:"Construct",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:11,mod:0,save:0},dex:{score:13,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:13,mod:1,save:1}},fields:{AC:"11",HP:"27 (6d8)",Speed:"30 ft.",Vulnerabilities:"Fire",Immunities:"Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petriffed, Poisoned, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Common plus one other language",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Fearsome Claw. Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1)
Slashing damage, and the target has the Frightened condition
until the end of the scarecrow's next turn.
Terrifying Glare. Wisdom Saving Throw: DC 11, one creature the
scarecrow can see within 30 feet. Failure: The target has the
Frightened condition until the end of the scarecrow's next turn.
While Frightened, the target has the Paralyzed condition.`}]},{slug:"scorpion",name:"Scorpion",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:11,mod:0,save:0},con:{score:8,mod:1,save:1},int:{score:1,mod:5,save:5},wis:{score:8,mod:1,save:1},cha:{score:2,mod:4,save:4}},fields:{AC:"11",HP:"1 (1d4 - 1)",Speed:"10 ft.",Senses:"Blindsight 10 ft., Passive Perception 9",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:`Sting. Melee Attack Roll: +2, reach 5 ft. Hit: 1 Piercing damage
plus 3 (1d6) Poison damage.`}]},{slug:"scout",name:"Scout",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:11,mod:0,save:0},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:13,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"16 (3d8 + 3)",Speed:"30 ft.",Skills:"Nature +4, Perception +5, Stealth +6, Survival +5",Gear:"Leather Armor, Longbow, Shortsword",Senses:"Passive Perception 15",Languages:"Common plus one other language",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Multiattack. The scout makes two attacks, using Shortsword and
Longbow in any combination.
Shortsword. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Piercing damage.
Longbow. Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8 + 2)
Piercing damage.
Scouts  are  warriors  of  the  wilderness,  trained  in  hunting  and
tracking.  They  might  be  explorers  or  trappers,  or  they  could
perform  more  martial  roles  as  archers,  bounty  hunters,  or
outriders.
Scouts are keen archers and acutely aware of their surroundings.
They often know several regions particularly well and are familiar
with local creatures, landmarks, and perils.`}]},{slug:"scout-captain",name:"Scout Captain",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:11,mod:0,save:0},dex:{score:16,mod:3,save:5},con:{score:12,mod:1,save:1},int:{score:14,mod:2,save:4},wis:{score:15,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"15",HP:"66 (12d8 + 12)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +6, Stealth +7, Survival +6",Gear:"Longbow, Shortsword, Studded Leather Armor",Senses:"Passive Perception 16",Languages:"Common plus one other language",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The scout makes two attacks, using Shortsword or
Longbow in any combination.
Shortsword. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3)
Piercing damage, plus 10 (3d6) Piercing damage if the attack
was made with Advantage.
Longbow. Ranged Attack Roll: +5, range 150/600 ft. Hit: 7 (1d8 + 3)
Piercing damage, plus 10 (3d6) Piercing damage if the attack
was made with Advantage.`},{title:"BONUS ACTIONS",text:`Aim. The scout has Advantage on the next attack roll it makes
during the current turn.`},{title:"REACTIONS",text:`Uncanny Dodge. Trigger: The scout is hit by an attack roll.
Response: The scout halves the damage (round down) it takes
from that attack.
Scouts  are  warriors  of  the  wilderness,  trained  in  hunting  and
tracking.  They  might  be  explorers  or  trappers,  or  they  could
perform  more  martial  roles  as  archers,  bounty  hunters,  or
outriders.
Scout captains are experienced explorers and sharpshooters. They
might lead bands of other scouts or disappear into the wilds alone
for months at a time.`}]},{slug:"sea-hag",name:"Sea Hag",meta:"Fey Medium, Chaotic Evil",type:"Fey",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:12,mod:1,save:1},cha:{score:13,mod:1,save:1}},fields:{AC:"14",HP:"52 (7d8 + 21)",Speed:"30 ft., Swim 40 ft.",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Common, Giant, Primordial (Aquan)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Amphibious. The hag can breathe air and water.
Coven Magic. While within 30 feet of at least two hag allies, the
hag can cast one of the following spells, requiring no Material
components, using the spell's normal casting time, and using
Intelligence as the spellcasting ability (spell save DC 11): Augury,
Find Familiar, Identify, Locate Object, Scrying, or Unseen Servant.
The hag must ffnish a Long Rest before using this trait to cast
that spell again.
Vile Appearance. Wisdom Saving Throw: DC 11, any Beast or
Humanoid that starts its turn within 30 feet of the hag and can
see the hag's true form. Failure: The target has the Frightened
condition until the start of its next turn. Success: The target is
immune to this hag's Vile Appearance for 24 hours.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing
damage.
Death Glare (Recharge 5–6). Wisdom Saving Throw: DC 11, one
Frightened creature the hag can see within 30 feet. Failure: If
the target has 20 Hit Points or fewer, it drops to 0 Hit Points.
Otherwise, the target takes 13 (3d8) Psychic damage.
Illusory Appearance. The hag casts Disguise Self, using
Constitution as the spellcasting ability (spell save DC 13). The
spell's duration is 24 hours.
Sea hags loathe peace and beauty. Bitter, jealous creatures, they
spread chaos and undermine joy however they can, undertaking
elaborate deceptions to sow discord for its own sake. The hags' true
forms are supernaturally vile, and their baleful gazes can strike
down  creatures  frightened  by  their  appearance.  Sea  hags  cloak
themselves in illusions to work their schemes.`}]},{slug:"seahorse",name:"Seahorse",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:12,mod:1,save:1},con:{score:8,mod:-1,save:-1},int:{score:1,mod:-5,save:-5},wis:{score:10,mod:0,save:0},cha:{score:2,mod:-4,save:-4}},fields:{AC:"12",HP:"1 (1d4 - 1)",Speed:"5 ft., Swim 20 ft.",Skills:"Perception +2, Stealth +5",Senses:"Passive Perception 12",Languages:"None",CR:"0 (XP 0; PB +2)"},cr:"0 (XP 0; PB +2)",crValue:"0",xp:0,sections:[{title:"TRAITS",text:"Water Breathing. The seahorse can breathe only underwater."},{title:"ACTIONS",text:`Bubble Dash. While underwater, the seahorse moves up to its
Swim Speed without provoking Opportunity Attacks.`}]},{slug:"shadow",name:"Shadow",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"12",HP:"27 (5d8 + 5)",Speed:"40 ft.",Skills:"Stealth +6",Vulnerabilities:"Radiant",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Immunities:"Necrotic, Poison; Exhaustion, Frightened, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Amorphous. The shadow can move through a space as narrow as
1 inch without expending extra movement to do so.
Sunlight Weakness. While in sunlight, the shadow has
Disadvantage on D20 Tests.`},{title:"ACTIONS",text:`Draining Swipe. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Necrotic damage, and the target's Strength score decreases by
1d4. The target dies if this reduces that score to 0. If a
Humanoid is slain by this attack, a Shadow rises from the
corpse 1d4 hours later.`},{title:"BONUS ACTIONS",text:`Shadow Stealth. While in Dim Light or Darkness, the shadow
takes the Hide action.
Shadows are incorporeal Undead that feed on life. They resent the
living  for  possessing  the  potential  and  vitality  lost  to  them.
Shadows  lurk  in  dark,  lonely  places,  typically  sites  that  were
meaningful  to  them  in  life  or  cursed  places  with  ties  to  death,
sinister  magic,  or  the  Shadowfell.  Their  victims  rise  as  new
shadows  and  prey  on  the  living.  Shadows  might  resemble  the
silhouettes of  who they  were  in life or take  on more  menacing
forms.`}]},{slug:"shadow-demon",name:"Shadow Demon",meta:"Fiend (Demon) Medium, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:17,mod:3,save:5},con:{score:12,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:1},cha:{score:14,mod:2,save:4}},fields:{AC:"14",HP:"66 (12d8 + 12)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Stealth +7",Vulnerabilities:"Radiant",Resistances:"Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder",Immunities:"Necrotic, Poison; Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Abyssal; telepathy 120 ft.",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Demonic Restoration. If the demon dies outside the Abyss, its
body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in the Abyss.
Incorporeal Movement. The demon can move through other
(1d10) Force damage if it ends its turn inside an object.
Light Sensitivity. While in Bright Light, the demon has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Umbral Claw. Melee Attack Roll: +5, reach 5 ft. Hit: 16 (3d8 + 3)
Psychic damage.`},{title:"BONUS ACTIONS",text:`Shadow Stealth. While in Dim Light or Darkness, the demon
takes the Hide action.`}]},{slug:"shadow-dragon",name:"Shadow Dragon",meta:"Dragon Huge, Chaotic Evil",type:"Dragon",subtype:"",size:"Huge",alignment:"Chaotic Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:19,mod:4,save:9},con:{score:18,mod:4,save:4},int:{score:14,mod:2,save:2},wis:{score:12,mod:1,save:6},cha:{score:18,mod:4,save:4}},fields:{AC:"16",HP:"189 (18d12 + 72)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Perception +11, Stealth +14",Resistances:"See Living Shadow",Immunities:"Necrotic",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"13 (XP 10 000, or 11 500 in Lair; PB +5)"},cr:"13 (XP 10 000, or 11 500 in Lair; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the dragon fails
a saving throw, it can choose to succeed instead.
Living Shadow. While in Dim Light or Darkness, the dragon has
Resistance to damage that isn't Force, Psychic, or Radiant.
Sunlight Sensitivity. While in sunlight, the dragon has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +10, reach 10 ft. Hit: 12 (2d6 + 5)
Slashing damage plus 3 (1d6) Necrotic damage.
Shadow Breath (Recharge 5–6). Dexterity Saving Throw: DC 17,
each creature in a 60-foot Cone. Failure: 35 (10d6) Necrotic
damage. Success: Half damage. Failure or Success: A Humanoid
reduced to 0 Hit Points by this damage dies, and a Shadow rises
from the corpse. The shadow is under the dragon's control and
shares the dragon's Initiative count but acts immediately after
the dragon.`},{title:"BONUS ACTIONS",text:`Shadow Stealth. While in Dim Light or Darkness, the dragon
takes the Hide action.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the shadow dragon can expend a use to take one of
the following actions. The shadow dragon regains all expended
uses at the start of each of its turns.
Pounce. The dragon moves up to half its Speed, and it makes
one Rend attack.
Veil of Shadow. The dragon uses Shadow Stealth, and one
creature of its choice that it can see within 10 feet of it takes 10
(3d6) Necrotic damage. The dragon can't take this action again
until the start of its next turn.`}]},{slug:"shambling-mound",name:"Shambling Mound",meta:"Plant Large, Unaligned",type:"Plant",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:8,mod:-1,save:-1},con:{score:16,mod:3,save:3},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"15",HP:"110 (13d10 + 39)",Speed:"30 ft., Swim 20 ft.",Skills:"Stealth +3",Resistances:"Cold, Fire",Immunities:"Lightning; Deafened, Exhaustion",Senses:"Blindsight 60 ft., Passive Perception 10",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Lightning Absorption. Whenever the shambling mound is
subjected to Lightning damage, it regains a number of Hit
Points equal to the Lightning damage dealt.`},{title:"ACTIONS",text:`Multiattack. The shambling mound makes three Charged Tendril
attacks. It can replace one attack with a use of Engulf.
Charged Tendril. Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4)
Bludgeoning damage plus 5 (2d4) Lightning damage. If the
target is a Medium or smaller creature, the shambling mound
pulls the target 5 feet straight toward itself.
Engulf. Strength Saving Throw: DC 15, one Medium or smaller
creature within 5 feet. Failure: The target is pulled into the
shambling mound's space and has the Grappled condition
(escape DC 14). Until the grapple ends, the target has the
Blinded and Restrained conditions, and it takes 10 (3d6)
Lightning damage at the start of each of its turns. When the
shambling mound moves, the Grappled target moves with it,
costing it no extra movement. The shambling mound can have
only one creature Grappled by this action at a time.`}]},{slug:"shield-guardian",name:"Shield Guardian",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:8,mod:-1,save:-1},con:{score:18,mod:4,save:4},int:{score:7,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"17",HP:"142 (15d10 + 60)",Speed:"30 ft.",Immunities:"Poison; Charmed, Exhaustion, Frightened, Paralyzed, Petriffed, Poisoned",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 10",Languages:"Understands commands given in any language but can't speak",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:`Bound. The guardian is magically bound to an amulet. While the
guardian and its amulet are on the same plane of existence, the
amulet's wearer can telepathically call the guardian to travel to
it, and the guardian knows the distance and direction to the
amulet. If the guardian is within 60 feet of the amulet's wearer,
half of any damage the wearer takes (round up) is transferred
to the guardian.
Regeneration. The guardian regains 10 Hit Points at the start of
each of its turns if it has at least 1 Hit Point.
Spell Storing. A spellcaster who wears the guardian's amulet can
cause the guardian to store one spell of level 4 or lower. To do
so, the wearer must cast the spell on the guardian while within
5 feet of it. The spell has no efiect but is stored within the
guardian. Any previously stored spell is lost when a new spell is
stored. The guardian can cast the spell stored with any
parameters set by the original caster, requiring no spell
components and using the caster's spellcasting ability. The
stored spell is then lost.`},{title:"ACTIONS",text:`Multiattack. The guardian makes two Fist attacks.
Fist. Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4)
Bludgeoning damage plus 7 (2d6) Force damage.`},{title:"REACTIONS",text:`Protection. Trigger: An attack roll hits the wearer of the
guardian's amulet while the wearer is within 5 feet of the
guardian. Response: The wearer gains a +5 bonus to AC,
including against the triggering attack and possibly causing it to
miss, until the start of the guardian's next turn.`}]},{slug:"shrieker-fungus",name:"Shrieker Fungus",meta:"Plant Medium, Unaligned",type:"Plant",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:1,mod:-5,save:-5},con:{score:10,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:3,mod:-4,save:-4},cha:{score:1,mod:-5,save:-5}},fields:{AC:"5",HP:"13 (3d8)",Speed:"5 ft.",Immunities:"Blinded, Charmed, Deafened, Frightened",Senses:"Blindsight 30 ft., Passive Perception 6",Languages:"—",CR:"0 (PB +2)"},cr:"0 (PB +2)",crValue:"0",xp:0,sections:[{title:"REACTIONS",text:`Shriek. Trigger: A creature or a source of Bright Light moves
within 30 feet of the shrieker. Response: The shrieker emits a
shriek audible within 300 feet of itself for 1 minute or until the
shrieker dies.
If exposed to light or otherwise disturbed, mushroomlike shriekers
emit a high-pitched noise that gives them their name. This wailing
might alert other creatures or attract predators.`}]},{slug:"silver-dragon-wyrmling",name:"Silver Dragon Wyrmling",meta:"Dragon (Metallic) Medium, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Medium",alignment:"Lawful Good",abilities:{str:{score:19,mod:4,save:4},dex:{score:10,mod:0,save:2},con:{score:17,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"17",HP:"45 (6d8 + 18)",Speed:"30 ft., Fly 60 ft.",Skills:"Perception +4, Stealth +2",Immunities:"Cold",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (1d10 + 4) Piercing
damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 13,
each creature in a 15-foot Cone. Failure: 18 (4d8) Cold damage.
Success: Half damage.
Paralyzing Breath. Constitution Saving Throw: DC 13, each
creature in a 15-foot Cone. First Failure: The target has the
Incapacitated condition until the end of its next turn, when it
repeats the save. Second Failure: The target has the Paralyzed
condition, and it repeats the save at the end of each of its turns,
ending the efiect on itself on a success. After 1 minute, it
succeeds automatically.
Silver dragons work to preserve peace and encourage greatness.
They try to live as examples of decency while remaining watchful
against  evil.  Silver  dragons  typically  dwell  amid  snow-capped
mountains,  though  aspirations  and  congeniality  drive  some  to
instead  live  among  cosmopolitan  societies.  Disguised  as
humanoids, they ally with artists, historians, knights, and humble
leaders who learn from the past to create better futures. Silver
dragons take inspiration from legendary heroes and have grand
ambitions. Many collect treasures that reflect these interests, such
as histories, ancient art, and the gear of famous champions.`}]},{slug:"skeleton",name:"Skeleton",meta:"Undead Medium, Lawful Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:16,mod:3,save:3},con:{score:15,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:8,mod:-1,save:-1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"14",HP:"13 (2d8 + 4)",Speed:"30 ft.",Vulnerabilities:"Bludgeoning",Immunities:"Poison; Exhaustion, Poisoned",Gear:"Shortbow, Shortsword",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Understands Common plus one other language but can't speak",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Shortsword. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3)
Piercing damage.
Shortbow. Ranged Attack Roll: +5, range 80/320 ft. Hit: 6 (1d6 + 3)
Piercing damage.
Skeleton  warriors  are  reanimated  Humanoid  bones  bearing  the
equipment  they  had  in  life.  They  have  greater  agility  and
rudimentary faculties than zombies and similar shambling corpses.
While they aren't capable of creating plans of their own, they avoid
obvious barriers and self-destructive situations.`}]},{slug:"slaad-tadpole",name:"Slaad Tadpole",meta:"Aberration Tiny, Chaotic Neutral",type:"Aberration",subtype:"",size:"Tiny",alignment:"Chaotic Neutral",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:3,mod:-4,save:-4},wis:{score:5,mod:-3,save:-3},cha:{score:3,mod:-4,save:-4}},fields:{AC:"12",HP:"7 (3d4)",Speed:"30 ft., Burrow 10 ft.",Skills:"Stealth +4",Resistances:"Acid, Cold, Fire, Lightning, Thunder",Senses:"Darkvision 60 ft., Passive Perception 7",Languages:"Understands Slaad but can't speak",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Magic Resistance. The slaad has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing
damage.
Slaad tadpoles are ravenous, newborn slaadi. They hatch from eggs
implanted into living hosts by red slaadi, but they also appear in
great numbers in Limbo and other chaotic realms. Under most
conditions, a slaad tadpole transforms into a blue slaad—or a green
slaad if its host was able to cast spells of level 3 or higher—within
2d12 hours of hatching.`}]},{slug:"smoke-mephit",name:"Smoke Mephit",meta:"Elemental Small, Neutral Evil",type:"Elemental",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:11,mod:0,save:0}},fields:{AC:"12",HP:"13 (3d6 + 3)",Speed:"30 ft., Fly 30 ft.",Skills:"Perception +2, Stealth +4",Immunities:"Fire, Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Primordial (Auran, Ignan)",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Death Burst. The mephit explodes when it dies. Constitution
Saving Throw: DC 11, each creature in a 5-foot Emanation
originating from the mephit. Failure: The target has the
Poisoned condition until the end of its next turn.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing
damage.
Cinder Breath (Recharge 6). Dexterity Saving Throw: DC 11, one
creature the mephit can see within 15 feet. Failure: The target
has the Blinded condition until the end of the mephit's next
turn.
Smoke mephits are elusive beings formed of fiery cinders and hot
air. They love misleading creatures and then mocking them for
their gullibility.`}]},{slug:"solar",name:"Solar",meta:"Celestial (Angel) Large, Lawful Good",type:"Celestial",subtype:"Angel",size:"Large",alignment:"Lawful Good",abilities:{str:{score:26,mod:8,save:8},dex:{score:22,mod:6,save:6},con:{score:26,mod:8,save:8},int:{score:25,mod:7,save:7},wis:{score:25,mod:7,save:7},cha:{score:30,mod:10,save:10}},fields:{AC:"21",HP:"297 (22d10 + 176)",Speed:"50 ft., Fly 150 ft. (hover)",Skills:"Perception +14",Immunities:"Poison, Radiant; Charmed, Exhaustion, Frightened, Poisoned",Senses:"Truesight 120 ft., Passive Perception 24",Languages:"All; telepathy 120 ft.",CR:"21 (XP 33 000; PB +7)"},cr:"21 (XP 33 000; PB +7)",crValue:"21",xp:33e3,sections:[{title:"TRAITS",text:`Divine Awareness. The solar knows if it hears a lie.
Exalted Restoration. If the solar dies outside Mount Celestia, its body
disappears, and it gains a new body instantly, reviving with all its Hit
Points somewhere in Mount Celestia.
Legendary Resistance (4/Day). If the solar fails a saving throw, it can
choose to succeed instead.
Magic Resistance. The solar has Advantage on saving throws against
spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The solar makes two Flying Sword attacks. It can replace
one attack with a use of Slaying Bow.
Flying Sword. Melee or Ranged Attack Roll: +15, reach 10 ft. or range
120 ft. Hit: 22 (4d6 + 8) Slashing damage plus 36 (8d8) Radiant
damage. Hit or Miss: The sword magically returns to the solar's hand
or hovers within 5 feet of the solar immediately after a ranged
attack.
Slaying Bow. Dexterity Saving Throw: DC 21, one creature the solar
can see within 600 feet. Failure: If the creature has 100 Hit Points or
fewer, it dies. It otherwise takes 24 (4d8 + 6) Piercing damage plus
36 (8d8) Radiant damage.
Spellcasting. The solar casts one of the following spells, requiring no
Material components and using Charisma as the spellcasting ability
(spell save DC 25):
At Will: Detect Evil and Good
1/Day Each: Commune, Control Weather, Dispel Evil and Good,
Resurrection`},{title:"BONUS ACTIONS",text:`Divine Aid (3/Day). The solar casts Cure Wounds (level 2 version),
Lesser Restoration, or Remove Curse, using the same spellcasting
ability as Spellcasting.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3. Immediately after another creature's turn,
the solar can expend a use to take one of the following actions. The
solar regains all expended uses at the start of each of its turns.
Blinding Gaze. Constitution Saving Throw: DC 25, one creature the
solar can see within 120 feet. Failure: The target has the Blinded
condition for 1 minute. Failure or Success: The solar can't take this
action again until the start of its next turn.
Radiant Teleport. The solar teleports up to 60 feet to an unoccupied
space it can see. Dexterity Saving Throw: DC 25, each creature in a
10-foot Emanation originating from the solar at its destination
space. Failure: 11 (2d10) Radiant damage. Success: Half damage.`}]},{slug:"spectator",name:"Spectator",meta:"Aberration (Beholder) Medium, Lawful Neutral",type:"Aberration",subtype:"Beholder",size:"Medium",alignment:"Lawful Neutral",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"14",HP:"45 (7d8 + 14)",Speed:"5 ft., Fly 30 ft. (hover)",Skills:"Perception +6",Immunities:"Exhaustion, Prone",Senses:"Darkvision 120 ft., Passive Perception 16",Languages:"Deep Speech, Undercommon; telepathy 120 ft.",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The spectator uses Eye Rays twice.
Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing
damage.
Eye Rays. The spectator randomly shoots one of the following
magical rays at a target it can see within 90 feet of itself (roll
1d4; reroll if the spectator has already used that ray during this
turn):
1: Confusion Ray. Wisdom Saving Throw: DC 12. Failure: 5 (2d4)
Psychic damage, and the target can't take Reactions until the
end of its next turn. On its next turn, the target can't move, and
it uses its action to make a melee or ranged attack against a
randomly determined creature within range. If the target can't
attack, it does nothing on that turn.
2: Paralyzing Ray. Constitution Saving Throw: DC 12. Failure: The
target has the Paralyzed condition and repeats the save at the
end of each of its turns, ending the efiect on itself on a success.
After 1 minute, it succeeds automatically.
3: Fear Ray. Wisdom Saving Throw: DC 12. Failure: 5 (2d4) Psychic
damage, and the target has the Frightened condition until the
end of its next turn.
4: Wounding Ray. Constitution Saving Throw: DC 12. Failure: 16
(3d10) Necrotic damage. Success: Half damage.`},{title:"REACTIONS",text:`throw against a spell, or a spell's attack roll misses it. Response
—Dexterity Saving Throw: DC 12, one creature the spectator can
see within 120 feet. Failure: 10 (3d6) Force damage.`}]},{slug:"specter",name:"Specter",meta:"Undead Medium, Chaotic Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:1,mod:-5,save:-5},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:11,mod:0,save:0}},fields:{AC:"12",HP:"22 (5d8)",Speed:"30 ft., Fly 50 ft. (hover)",Resistances:"Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands Common plus one other language but can't speak",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Incorporeal Movement. The specter can move through other
(1d10) Force damage if it ends its turn inside an object.
Sunlight Sensitivity. While in sunlight, the specter has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Life Drain. Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d6) Necrotic
damage. If the target is a creature, its Hit Point maximum
decreases by an amount equal to the damage taken.`}]},{slug:"sphinx-of-lore",name:"Sphinx Of Lore",meta:"Celestial Large, Lawful Neutral",type:"Celestial",subtype:"",size:"Large",alignment:"Lawful Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:18,mod:4,save:4},wis:{score:18,mod:4,save:4},cha:{score:18,mod:4,save:4}},fields:{AC:"17",HP:"170 (20d10 + 60)",Speed:"40 ft., Fly 60 ft.",Skills:"Arcana +12, History +12, Perception +8, Religion +12",Resistances:"Necrotic, Radiant",Immunities:"Psychic; Charmed, Frightened",Senses:"Truesight 120 ft., Passive Perception 18",Languages:"Celestial, Common",CR:"11 (XP 7 200, or 8 400 in Lair; PB +4)"},cr:"11 (XP 7 200, or 8 400 in Lair; PB +4)",crValue:"11",xp:7200,sections:[{title:"TRAITS",text:`Inscrutable. No magic can observe the sphinx remotely or detect
its thoughts without its permission. Wisdom (Insight) checks
made to ascertain its intentions or sincerity are made with
Disadvantage.
Legendary Resistance (3/Day, or 4/Day in Lair). If the sphinx fails a
saving throw, it can choose to succeed instead.r).`},{title:"ACTIONS",text:`Multiattack. The sphinx makes three Claw attacks.
Claw. Melee Attack Roll: +8, reach 5 ft. Hit: 14 (3d6 + 4) Slashing
damage.
Mind-Rending Roar (Recharge 5–6). Wisdom Saving Throw: DC 16,
each enemy in a 300-foot Emanation originating from the
sphinx. Failure: 35 (10d6) Psychic damage, and the target has
the Incapacitated condition until the start of the sphinx's next
turn.
Spellcasting. The sphinx casts one of the following spells,
requiring no Material components and using Intelligence as the
spellcasting ability (spell save DC 16):
At Will: Detect Magic, Identify, Mage Hand, Minor Illusion,
Prestidigitation
1/Day Each: Dispel Magic, Legend Lore, Locate Object, Plane Shift,
Remove Curse, Tongues`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the sphinx can expend a use to take one of the
following actions. The sphinx regains all expended uses at the start
of each of its turns.
Arcane Prowl. The sphinx can teleport up to 30 feet to an
unoccupied space it can see, and it makes one Claw attack.
Weight of Years. Constitution Saving Throw: DC 16, one creature
the sphinx can see within 120 feet. Failure: The target gains 1
Exhaustion level. While the target has any Exhaustion levels, it
appears 3d10 years older. Failure or Success: The sphinx can't
take this action again until the start of its next turn.
Sphinxes of lore each know a great secret and protect it all costs.
This truth might take the form of an ancient text, a magical puzzle,
or a path to another world. These sphinxes might gain reputations
as sages or oracles, but they typically dwell far from civilization.`}]},{slug:"sphinx-of-secrets",name:"Sphinx Of Secrets",meta:"Celestial Large, Lawful Neutral",type:"Celestial",subtype:"",size:"Large",alignment:"Lawful Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:18,mod:4,save:4},wis:{score:18,mod:4,save:4},cha:{score:18,mod:4,save:4}},fields:{AC:"16",HP:"136 (16d10 + 48)",Speed:"40 ft., Fly 60 ft.",Skills:"History +7, Perception +7, Religion +7",Resistances:"Necrotic, Radiant",Immunities:"Psychic; Charmed, Frightened",Senses:"Truesight 60 ft., Passive Perception 17",Languages:"Celestial, Common",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Inscrutable. No magic can observe the sphinx remotely or detect
its thoughts without its permission. Wisdom (Insight) checks
made to ascertain its intentions or sincerity are made with
Disadvantage.
Magic Resistance. The sphinx has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The sphinx makes three Claw attacks. It can replace
one attack with a use of Curse of the Riddle.
Claw. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Slashing
damage plus 7 (2d6) Radiant damage.
Curse of the Riddle. Intelligence Saving Throw: DC 15, one creature
the sphinx can see within 60 feet. Failure: 21 (6d6) Psychic
damage, and the target is cursed with a riddle. The cursed
target has Disadvantage on ability checks and attack rolls. In
addition, if it takes the Magic action, it must succeed on a DC 15
Intelligence saving throw or that action is wasted. The cursed
target can take a Study action to make a DC 15 Intelligence
check, solving the riddle and ending the curse on a success. The
curse ends early if the sphinx curses another target.
Spellcasting. The sphinx casts one of the following spells,
requiring no Material components and using Intelligence as the
spellcasting ability (spell save DC 15):
At will: Detect Magic, Identify, Prestidigitation
1/day each: Locate Object, Remove Curse
Sphinxes of secrets are commonly associated with a site of great
magic  or  learning.  These  immortal  beings  often  outlive  such
locations, though, and might protect a site's ruins as they continue
their own studies. Sphinxes of secrets fiercely guard their dwellings
and research.`}]},{slug:"sphinx-of-valor",name:"Sphinx Of Valor",meta:"Celestial Large, Lawful Neutral",type:"Celestial",subtype:"",size:"Large",alignment:"Lawful Neutral",abilities:{str:{score:22,mod:6,save:6},dex:{score:10,mod:0,save:6},con:{score:20,mod:5,save:11},int:{score:16,mod:3,save:9},wis:{score:23,mod:6,save:12},cha:{score:18,mod:4,save:4}},fields:{AC:"17",HP:"199 (19d10 + 95)",Speed:"40 ft., Fly 60 ft.",Skills:"Arcana +9, Perception +12, Religion +15",Resistances:"Necrotic, Radiant",Immunities:"Psychic; Charmed, Frightened",Senses:"Truesight 120 ft., Passive Perception 22",Languages:"Celestial, Common",CR:"17 (XP 18 000, or 20 000 in Lair; PB +6)"},cr:"17 (XP 18 000, or 20 000 in Lair; PB +6)",crValue:"17",xp:18e3,sections:[{title:"TRAITS",text:`Inscrutable. No magic can observe the sphinx remotely or detect its
thoughts without its permission. Wisdom (Insight) checks made to
ascertain its intentions or sincerity are made with Disadvantage.
Legendary Resistance (3/Day, or 4/Day in Lair). If the sphinx fails a
saving throw, it can choose to succeed instead.`},{title:"ACTIONS",text:`Multiattack. The sphinx makes two Claw attacks and uses Roar.
Claw. Melee Attack Roll: +12, reach 5 ft. Hit: 20 (4d6 + 6) Slashing
damage.
Roar (3/Day). The sphinx emits a magical roar. Whenever it roars, the
roar has a difierent efiect, as detailed below (the sequence resets
when it takes a Long Rest):
First Roar. Wisdom Saving Throw: DC 20, each enemy in a 500-foot
Emanation originating from the sphinx. Failure: The target has the
Frightened condition for 1 minute.
Second Roar. Wisdom Saving Throw: DC 20, each enemy in a 500-foot
Emanation originating from the sphinx. Failure: The target has the
Paralyzed condition, and it repeats the save at the end of each of its
turns, ending the efiect on itself on a success. After 1 minute, it
succeeds automatically.
Third Roar. Constitution Saving Throw: DC 20, each enemy in a 500-
foot Emanation originating from the sphinx. Failure: 44 (8d10)
Thunder damage, and the target has the Prone condition. Success:
Half damage only.
Spellcasting. The sphinx casts one of the following spells, requiring
no Material components and using Wisdom as the spellcasting
ability (spell save DC 20):
At Will: Detect Evil and Good, Thaumaturgy
1/Day Each: Detect Magic, Dispel Magic, Greater Restoration, Heroes'
Feast, Zone of Truth`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the sphinx can expend a use to take one of the
following actions. The sphinx regains all expended uses at the start of
each of its turns.
Arcane Prowl. The sphinx can teleport up to 30 feet to an unoccupied
space it can see, and it makes one Claw attack.
Weight of Years. Constitution Saving Throw: DC 16, one creature the
sphinx can see within 120 feet. Failure: The target gains 1
Exhaustion level. While the target has any Exhaustion levels, it
appears 3d10 years older. Failure or Success: The sphinx can't take
this action again until the start of its next turn.
Sphinxes of valor guard world-changing or dangerous secrets—evidence of weird truths, deadly Artifacts, and things that shouldn't exist.
They inhabit hidden, magical sites and hold their duty above mortal life. If threatened, a sphinx of valor defends its charge with its
supernaturally empowered roar and fierce strikes.`}]},{slug:"sphinx-of-wonder",name:"Sphinx Of Wonder",meta:"Celestial Tiny, Lawful Good",type:"Celestial",subtype:"",size:"Tiny",alignment:"Lawful Good",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:17,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:15,mod:2,save:2},wis:{score:12,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"13",HP:"24 (7d4 + 7)",Speed:"20 ft., Fly 40 ft.",Skills:"Arcana +4, Religion +4, Stealth +5",Resistances:"Necrotic, Psychic, Radiant",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Celestial, Common",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Magic Resistance. The sphinx has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing
damage plus 7 (2d6) Radiant damage.`},{title:"REACTIONS",text:`Burst of Ingenuity (2/Day). Trigger: The sphinx or another
creature within 30 feet makes an ability check or a saving
throw. Response: The sphinx adds 2 to the roll.
A sphinx of wonder is brightly feathered and the size of a lion cub.
One comes into being every time a unique idea is conceived on the
Material Plane. Each sphinx of wonder is fascinated by a particular
type of story or field of study, and it learns all it can about that
topic. It bears a unique sigil on its forehead that suggests the type of
knowledge that fascinates it. Sometimes, a sphinx of wonder forms
a bond with a mortal scholar and aids them in their research.`}]},{slug:"spider",name:"Spider",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:8,mod:1,save:1},int:{score:1,mod:5,save:5},wis:{score:10,mod:0,save:0},cha:{score:2,mod:4,save:4}},fields:{AC:"12",HP:"1 (1d4 - 1)",Speed:"20 ft., Climb 20 ft.",Skills:"Stealth +4",Senses:"Darkvision 30 ft., Passive Perception 10",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`along ceilings, without needing to make an ability check.
Web Walker. The spider ignores movement restrictions caused
by webs, and the spider knows the location of any other
creature in contact with the same web.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage plus
2 (1d4) Poison damage.`}]},{slug:"spined-devil",name:"Spined Devil",meta:"Fiend (Devil) Small, Lawful Evil",type:"Fiend",subtype:"Devil",size:"Small",alignment:"Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:14,mod:2,save:2},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"45 (10d6 + 10)",Speed:"20 ft., Fly 40 ft.",Resistances:"Cold",Immunities:"Fire, Poison; Poisoned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 12",Languages:"Infernal; telepathy 120 ft.",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Flyby. The devil doesn't provoke an Opportunity Attack when it
flies out of an enemy's reach.
Magic Resistance. The devil has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The devil makes two attacks, using Infernal Fork
and Tail Spine in any combination.
Infernal Fork. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Piercing damage plus 3 (1d6) Fire damage.
Tail Spine. Ranged Attack Roll: +4, range 20/80 ft. Hit: 4 (1d4 + 2)
Piercing damage plus 3 (1d6) Fire damage.`}]},{slug:"spirit-naga",name:"Spirit Naga",meta:"Fiend Large, Chaotic Evil",type:"Fiend",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:17,mod:3,save:6},con:{score:14,mod:2,save:5},int:{score:16,mod:3,save:3},wis:{score:15,mod:2,save:5},cha:{score:16,mod:3,save:6}},fields:{AC:"17",HP:"135 (18d10 + 36)",Speed:"40 ft.",Immunities:"Poison; Charmed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Abyssal, Common",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Fiendish Restoration. If it dies, the naga returns to life in 1d6
days and regains all its Hit Points. Only a Wish spell can prevent
this trait from functioning.`},{title:"ACTIONS",text:`Multiattack. The naga makes three attacks, using Bite or
Necrotic Ray in any combination.
Bite. Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4) Piercing
damage plus 14 (4d6) Poison damage.
Necrotic Ray. Ranged Attack Roll: +6, range 60 ft. Hit: 21 (6d6)
Necrotic damage.
Spellcasting. The naga casts one of the following spells,
requiring no Somatic or Material components and using
Intelligence as the spellcasting ability (spell save DC 14):
At Will: Detect Magic, Mage Hand, Minor Illusion, Water Breathing
2/Day Each: Detect Thoughts, Dimension Door, Hold Person (level 3
version), Lightning Bolt (level 4 version)`}]},{slug:"sprite",name:"Sprite",meta:"Fey Tiny, Neutral Good",type:"Fey",subtype:"",size:"Tiny",alignment:"Neutral Good",abilities:{str:{score:3,mod:4,save:4},dex:{score:18,mod:4,save:4},con:{score:10,mod:0,save:0},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"15",HP:"10 (4d4)",Speed:"10 ft., Fly 40 ft.",Skills:"Perception +3, Stealth +8",Senses:"Passive Perception 13",Languages:"Common, Elvish, Sylvan",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Needle Sword. Melee Attack Roll: +6, reach 5 ft. Hit: 6 (1d4 + 4)
Piercing damage.
Enchanting Bow. Ranged Attack Roll: +6, range 40/160 ft. Hit: 1
Piercing damage, and the target has the Charmed condition
until the start of the sprite's next turn.
Heart Sight. Charisma Saving Throw: DC 10, one creature within 5
feet the sprite can see (Celestials, Fiends, and Undead
automatically fail the save). Failure: The sprite knows the
target's emotions and alignment.
Invisibility. The sprite casts Invisibility on itself, requiring no spell
components and using Charisma as the spellcasting ability.
Sprites  dwell  in  mystical  forests  touched  by  the  magic  of  the
Feywild,  living  peacefully  with  most  other  Fey  and  friends  of
nature.  These  foot-tall  spirits  of  nature  resemble  elves  with
exaggerated, whimsical features and gossamer wings. Sprites can
sense the innate goodness or wickedness of other creatures. Those
that enter their realms with good intentions might be treated to tiny
feasts  and  celebrations.  The  wicked  face  nasty  tricks  and  bold
ambushes  at  the  hands  of  invisible  sprite  defenders.  These
woodland guardians enchant the arrows of their tiny bows with
charming magic that can pierce the heart of the fiercest foe. Sprites
oppose any creatures that seek to harm places of natural magic and
beauty.  This  can  put  them  into  conflict  with  would-be  settlers,
monsters  like  ettercaps,  and  despoilers  such  as  goblinoids  and
hags.  They  frequently  aid  other  good  creatures  of  the  forest,
including treants and unicorns, in defending their homes.`}]},{slug:"spy",name:"Spy",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:16,mod:3,save:3}},fields:{AC:"12",HP:"27 (6d8)",Speed:"30 ft., Climb 30 ft.",Skills:"Deception +5, Insight +4, Investigation +5, Perception +6, Sleight of Hand +4, Stealth +6",Gear:"Hand Crossbow, Shortsword, Thieves' Tools",Senses:"Passive Perception 16",Languages:"Common plus one other language",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Shortsword. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Piercing damage plus 7 (2d6) Poison damage.
Hand Crossbow. Ranged Attack Roll: +4, range 30/120 ft. Hit: 5
(1d6 + 2) Piercing damage plus 7 (2d6) Poison damage.`},{title:"BONUS ACTIONS",text:`Cunning Action. The spy takes the Dash, Disengage, or Hide
action.
Spies  use  charm  and  deception  to  veil  their  true  intentions.  If
forced  into combat,  they  seek  to  end such  conflicts quietly and
decisively.`}]},{slug:"spy-master",name:"Spy Master",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:10,mod:0,save:0},dex:{score:20,mod:5,save:9},con:{score:12,mod:1,save:5},int:{score:18,mod:4,save:8},wis:{score:16,mod:3,save:7},cha:{score:16,mod:3,save:3}},fields:{AC:"19",HP:"137 (25d8 + 25)",Speed:"30 ft., Climb 30 ft.",Skills:"Deception +7, Insight +7, Investigation +8, Perception +11, Sleight of Hand +9, Stealth +13",Gear:"Hand Crossbow, Rapier, Thieves' Tools",Senses:"Passive Perception 21",Languages:"Common plus two other languages",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The spy makes three attacks, using Rapier or Hand
Crossbow in any combination.
Rapier. Melee Attack Roll: +9, reach 5 ft. Hit: 14 (2d8 + 5) Piercing
damage plus 7 (2d6) Poison damage.
Hand Crossbow. Ranged Attack Roll: +9, range 30/120 ft. Hit: 12
(2d6 + 5) Piercing damage plus 9 (2d8) Poison damage.
Smoke Bomb (1/Day). The spy throws a bomb to a point it can
see within 30 feet of itself. Constitution Saving Throw: DC 16,
each creature in a 20-foot-radius Sphere centered on that point.
Failure: 28 (8d6) Poison damage, and the target has the Blinded
condition until the end of the spy's next turn. Success: Half
damage only.`},{title:"BONUS ACTIONS",text:`Cunning Action. The spy takes the Dash, Disengage, or Hide
action.
Spy masters have extensive experience in gathering secrets while
leaving no evidence of their presence.`}]},{slug:"steam-mephit",name:"Steam Mephit",meta:"Elemental Small, Neutral Evil",type:"Elemental",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:5,mod:3,save:3},dex:{score:11,mod:0,save:0},con:{score:10,mod:0,save:0},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:12,mod:1,save:1}},fields:{AC:"10",HP:"17 (5d6)",Speed:"30 ft., Fly 30 ft.",Skills:"Stealth +2",Immunities:"Fire, Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Aquan, Ignan)",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Blurred Form. Attack rolls against the mephit are made with
Disadvantage unless the mephit has the Incapacitated
condition.
Death Burst. The mephit explodes when it dies. Dexterity Saving
Throw: DC 10, each creature in a 5-foot Emanation originating
from the mephit. Failure: 5 (2d4) Fire damage. Success: Half
damage.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Slashing
damage plus 2 (1d4) Fire damage.
Steam Breath (Recharge 6). Constitution Saving Throw: DC 10, each
creature in a 15-foot Cone. Failure: 5 (2d4) Fire damage, and the
target's Speed decreases by 10 feet until the end of the
mephit's next turn. Success: Half damage only. Failure or Success:
Being underwater doesn't grant Resistance to this Fire damage.
These arrogant mephits are made of heat and vaporous water. They
often  trick  creatures  into  doing  them  favors,  then  renege  on
promised rewards.`}]},{slug:"stirge",name:"Stirge",meta:"Monstrosity Tiny, Unaligned",type:"Monstrosity",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:4,mod:-3,save:-3},dex:{score:16,mod:3,save:3},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:8,mod:-1,save:-1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"13",HP:"5 (2d4)",Speed:"10 ft., Fly 40 ft.",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Proboscis. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3)
Piercing damage, and the stirge attaches to the target. While
attached, the stirge can't make Proboscis attacks, and the
target takes 5 (2d4) Necrotic damage at the start of each of the
stirge's turns. The stirge can detach itself by spending 5 feet of
its movement. The target or a creature within 5 feet of it can
detach the stirge as an action.
A single stirge is usually little more than an annoyance, but several
can be deadly if they attach faster than a victim can remove them.`}]},{slug:"stone-giant",name:"Stone Giant",meta:"Giant Huge, Neutral",type:"Giant",subtype:"",size:"Huge",alignment:"Neutral",abilities:{str:{score:23,mod:6,save:6},dex:{score:15,mod:2,save:5},con:{score:20,mod:5,save:8},int:{score:10,mod:0,save:0},wis:{score:12,mod:1,save:4},cha:{score:9,mod:-1,save:-1}},fields:{AC:"17",HP:"126 (11d12 + 55)",Speed:"40 ft.",Skills:"Athletics +12, Perception +4, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Giant",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The giant makes two attacks, using Stone Club or
Boulder in any combination.
Stone Club. Melee Attack Roll: +9, reach 15 ft. Hit: 22 (3d10 + 6)
Bludgeoning damage.
Boulder. Ranged Attack Roll: +9, range 60/240 ft. Hit: 15 (2d8 + 6)
Bludgeoning damage. If the target is a Large or smaller
creature, it has the Prone condition.`},{title:"REACTIONS",text:`attack roll and takes Bludgeoning, Piercing, or Slashing damage
from it. Response: The giant reduces the damage it takes from
the attack by 11 (1d10 + 6), and if that damage is reduced to 0,
the giant can redirect some of the attack's force. Dexterity
Saving Throw: DC 17, one creature the giant can see within 60
feet. Failure: 11 (1d10 + 6) Force damage.`}]},{slug:"stone-golem",name:"Stone Golem",meta:"Construct Large, Unaligned",type:"Construct",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:22,mod:6,save:6},dex:{score:9,mod:-1,save:-1},con:{score:20,mod:5,save:5},int:{score:3,mod:-4,save:-4},wis:{score:11,mod:0,save:0},cha:{score:1,mod:-5,save:-5}},fields:{AC:"18",HP:"220 (21d10 + 105)",Speed:"30 ft.",Immunities:"Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petriffed, Poisoned",Senses:"Darkvision 120 ft., Passive Perception 10",Languages:"Understands Common plus two other languages but can't speak",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Immutable Form. The golem can't shape-shift.
Magic Resistance. The golem has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The golem makes two attacks, using Slam or Force
Bolt in any combination.
Slam. Melee Attack Roll: +10, reach 5 ft. Hit: 15 (2d8 + 6)
Bludgeoning damage plus 9 (2d8) Force damage.
Force Bolt. Ranged Attack Roll: +9, range 90 ft. Hit: 26 (4d12)
Force damage.`},{title:"BONUS ACTIONS",text:`Slow (Recharge 5–6). The golem casts the Slow spell, requiring no
spell components and using Constitution as the spellcasting
ability (spell save DC 17).
Stone  golems  take  varied  forms,  such  as  weathered  carvings  of
ancient deities, lifelike sculptures of heroes, or any other shape
their makers imagine. No matter their design or the rock from
which they're crafted, these golems are strengthened by the magic
that animates them, allowing them to follow their creators' orders
for centuries. Stone golems are typically created to protect places of
significance to a group, such as a monument to an important event,
a leader's tomb, or a faith's sanctuary.`}]},{slug:"storm-giant",name:"Storm Giant",meta:"Giant Huge, Chaotic Good",type:"Giant",subtype:"",size:"Huge",alignment:"Chaotic Good",abilities:{str:{score:29,mod:9,save:14},dex:{score:14,mod:2,save:2},con:{score:20,mod:5,save:10},int:{score:16,mod:3,save:3},wis:{score:20,mod:5,save:10},cha:{score:18,mod:4,save:9}},fields:{AC:"16",HP:"230 (20d12 + 100)",Speed:"50 ft., Fly 25 ft. (hover), Swim 50 ft.",Skills:"Arcana +8, Athletics +14, History +8, Perception +10",Resistances:"Cold",Immunities:"Lightning, Thunder",Senses:"Darkvision 120 ft., Truesight 30 ft., Passive Perception 20",Languages:"Common, Giant",CR:"13 (XP 10 000; PB +5)"},cr:"13 (XP 10 000; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:"Amphibious. The giant can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The giant makes two attacks, using Storm Sword or
Thunderbolt in any combination.
Storm Sword. Melee Attack Roll: +14, reach 10 ft. Hit: 23 (4d6 + 9)
Slashing damage plus 13 (3d8) Lightning damage.
Thunderbolt. Ranged Attack Roll: +14, range 500 ft. Hit: 22 (2d12 +
9) Lightning damage, and the target has the Blinded and
Deafened conditions until the start of the giant's next turn.
Lightning Storm (Recharge 5–6). Dexterity Saving Throw: DC 18,
each creature in a 10-foot-radius, 40-foot-high Cylinder
originating from a point the giant can see within 500 feet.
Failure: 55 (10d10) Lightning damage. Success: Half damage.
Spellcasting. The giant casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 18):
At Will: Detect Magic, Light
1/Day: Control Weather`}]},{slug:"succubus",name:"Succubus",meta:"Fiend Medium, Neutral Evil",type:"Fiend",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:17,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:15,mod:2,save:2},wis:{score:12,mod:1,save:1},cha:{score:20,mod:5,save:5}},fields:{AC:"15",HP:"71 (13d8 + 13)",Speed:"30 ft., Fly 60 ft.",Skills:"Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",Resistances:"Cold, Fire, Poison, Psychic",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Abyssal, Common, Infernal; telepathy 60 ft.",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Incubus Form. When the succubus ffnishes a Long Rest, it can
shape-shift into an Incubus, using that stat block instead of this
one.`},{title:"ACTIONS",text:`Multiattack. The succubus makes one Fiendish Touch attack and
uses Charm or Draining Kiss.
Fiendish Touch. Melee Attack Roll: +7, reach 5 ft. Hit: 16 (2d10 + 5)
Psychic damage.
Charm. The succubus casts Dominate Person (level 8 version),
requiring no spell components and using Charisma as the
spellcasting ability (spell save DC 15).
Draining Kiss. Constitution Saving Throw: DC 15, one creature
Charmed by the succubus within 5 feet. Failure: 13 (3d8) Psychic
damage. Success: Half damage. Failure or Success: The target's
Hit Point maximum decreases by an amount equal to the
damage taken.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The succubus shape-shifts into a Medium or Small
Humanoid, or it returns to its true form. Its game statistics are
the same in each form, except its Fly Speed is available only in
its true form. Any equipment it is wearing or carrying isn't
transformed.
Succubi  prey  on  mortals  physically  and  exploit  their  waking
desires.  They  relish  corrupting  virtuous  souls  and  the  pain  an
individual's  downfall  can  cause.  Once  their  targets  are  at  their
lowest, succubi slay their victims with their essence-draining kiss.
Through  fiendish  rites,  succubi  can  transform  into  incubi  to
manipulate their prey in dreams as well as the waking world. They
can also change shape to torment their victims. These tempters can
dominate  Humanoids,  but  they  usually  do  so  to  reinforce  their
manipulations or defend themselves rather than controlling others
outright.`}]},{slug:"swarm-of-bats",name:"Swarm Of Bats",meta:"Swarm of Tiny Beasts Large, Unaligned",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Beasts Large, Unaligned",abilities:{str:{score:5,mod:-3,save:-3},dex:{score:15,mod:2,save:2},con:{score:10,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:4,mod:-3,save:-3}},fields:{AC:"12",HP:"11 (2d10)",Speed:"5 ft., Fly 30 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Blindsight 60 ft., Passive Perception 11",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny bat. The swarm can't regain Hit Points or gain
Temporary Hit Points.`},{title:"ACTIONS",text:`Bites. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (2d4) Piercing
damage, or 2 (1d4) Piercing damage if the swarm is Bloodied.`}]},{slug:"swarm-of-crawling-claws",name:"Swarm Of Crawling Claws",meta:"Swarm of Tiny Undead Medium, Neutral Evil",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Undead Medium, Neutral Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:5,mod:3,save:3},wis:{score:10,mod:0,save:0},cha:{score:4,mod:3,save:3}},fields:{AC:"12",HP:"49 (11d8)",Speed:"30 ft., Climb 30 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Frightened, Grappled, Incapacitated, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Stunned",Senses:"Blindsight 30 ft., Passive Perception 10",Languages:"Understands Common but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny creature. The swarm can't regain Hit Points or
gain Temporary Hit Points.`},{title:"ACTIONS",text:`Swarm of Grasping Hands. Melee Attack Roll: +4, reach 5 ft. Hit: 20
(4d8 + 2) Necrotic damage, or 11 (2d8 + 2) Necrotic damage if
the swarm is Bloodied. If the target is a Medium or smaller
creature, it has the Prone condition.
Swarms  of  crawling  claws  are  typically  animated  by  depraved
necromancers. Occasionally, these grotesque swarms arise from
mass  graves  or  after  tragedies,  refusing  to  let  their  murderers
escape their grasp.`}]},{slug:"swarm-of-dretches",name:"Swarm Of Dretches",meta:"swarm of Small Fiends (Demon) Large, Chaotic Evil",type:"",subtype:"",size:"",alignment:"",abilities:{str:{score:14,mod:2,save:2},dex:{score:11,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:5,mod:-3,save:-3},wis:{score:8,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"12",HP:"45 (6d10 + 12)",Speed:"40 ft.",Resistances:"Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing",Immunities:"Poison; Charmed, Frightened, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Stunned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"Abyssal; telepathy 60 ft. (works only with creatures that understand abyssal)",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Fetid Aura. Constitution Saving Throw: DC 12, any creature that
starts its turn in a 10-foot Emanation originating from the
swarm. Failure: The target has the Poisoned condition until the
start of its next turn. While Poisoned, the target can take either
an action or a Bonus Action on its turn, not both, and it can't
take Reactions.
Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Small creature. The swarm can't regain Hit Points
or gain Temporary Hit Points.`},{title:"ACTIONS",text:`Multiattack. The swarm makes two Rend attacks.
Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Slashing
damage, or 9 (3d4 + 2) Slashing damage if the swarm is
Bloodied.
Swarms of dretches sometimes escape the Abyss onto other planes
of existence, or they might be part of a demonic invasion. Without
direction,  these  crude  demons  rampage  and  despoil  with  cruel
enthusiasm.`}]},{slug:"swarm-of-insects",name:"Swarm Of Insects",meta:"Swarm of Tiny Beasts Medium, Unaligned",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Beasts Medium, Unaligned",abilities:{str:{score:3,mod:-4,save:-4},dex:{score:13,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:1,mod:-5,save:-5},wis:{score:7,mod:-2,save:-2},cha:{score:1,mod:-5,save:-5}},fields:{AC:"11",HP:"19 (3d8 + 6)",Speed:"20 ft., Climb or Fly 20 ft. (DM's choice)",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Blindsight 30 ft., Passive Perception 8",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Spider Climb. If the swarm has a Climb Speed, the swarm can
needing to make an ability check.
Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny insect. The swarm can't regain Hit Points or
gain Temporary Hit Points.`},{title:"ACTIONS",text:`Bites. Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Poison
damage, or 3 (1d4 + 1) Poison damage if the swarm is Bloodied.`}]},{slug:"swarm-of-larvae",name:"Swarm Of Larvae",meta:"swarm of Medium Fiends Large, Neutral Evil",type:"",subtype:"",size:"",alignment:"",abilities:{str:{score:14,mod:2,save:2},dex:{score:11,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:2,mod:-4,save:-4}},fields:{AC:"13",HP:"22 (3d10 + 6)",Speed:"30 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Darkvision 60 ft., Passive Perception 11",Languages:"Understands all but can't speak",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through an opening large
enough for a Medium creature. The swarm can't regain Hit
Points or gain Temporary Hit Points.`},{title:"ACTIONS",text:`Bites. Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Necrotic
damage, or 7 (2d4 + 2) Necrotic damage if the swarm is
Bloodied.
Lone larvae pose little threat, but in large numbers, larvae can
overwhelm vulnerable creatures. Out of desperation, larvae band
together in grotesque swarms, their squirming stampedes heralded
by a din of wordless whimpers and stomach-turning worm sounds.`}]},{slug:"swarm-of-lemures",name:"Swarm Of Lemures",meta:"swarm of Medium Fiends (Devil) Large, Lawful Evil",type:"",subtype:"",size:"",alignment:"",abilities:{str:{score:14,mod:2,save:2},dex:{score:7,mod:-2,save:-2},con:{score:14,mod:2,save:2},int:{score:1,mod:-5,save:-5},wis:{score:12,mod:1,save:1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"12",HP:"45 (6d10 + 12)",Speed:"40 ft.",Resistances:"Bludgeoning, Cold, Piercing, Slashing",Immunities:"Fire, Poison; Charmed, Frightened, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Stunned",Senses:"Darkvision 120 ft. (unimpeded by magical Darkness), Passive Perception 11",Languages:"Understands Infernal but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Hellish Restoration. If the swarm dies in the Nine Hells, it revives
with all its Hit Points in 1d10 days unless it is killed by a
creature under the efiects of a Bless spell or its remains are
sprinkled with Holy Water.
Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through an opening large
enough for a Medium creature. The swarm can't regain Hit
Points or gain Temporary Hit Points.`},{title:"ACTIONS",text:`Multiattack. The swarm makes two Vile Slime attacks.
Vile Slime. Melee Attack Roll: +4, reach 5 ft. Hit: 11 (2d8 + 2)
Poison damage, or 9 (2d6 + 2) Poison damage if the swarm is
Bloodied.
When devils drive hosts of lemures into close proximity or when
lemures compress into a single mass, a swarm forms and adopts a
unified mind.`}]},{slug:"swarm-of-piranhas",name:"Swarm Of Piranhas",meta:"Swarm of Tiny Beasts Medium, Unaligned",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Beasts Medium, Unaligned",abilities:{str:{score:13,mod:1,save:1},dex:{score:16,mod:3,save:3},con:{score:9,mod:-1,save:-1},int:{score:1,mod:-5,save:-5},wis:{score:7,mod:-2,save:-2},cha:{score:2,mod:-4,save:-4}},fields:{AC:"13",HP:"28 (8d8 - 8)",Speed:"5 ft., Swim 40 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Darkvision 60 ft., Passive Perception 8",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny piranha. The swarm can't regain Hit Points or
gain Temporary Hit Points.
Water Breathing. The swarm can breathe only underwater.`},{title:"ACTIONS",text:`Bites. Melee Attack Roll: +5 (with Advantage if the target doesn't
have all its Hit Points), reach 5 ft. Hit: 8 (2d4 + 3) Piercing
damage, or 5 (1d4 + 3) Piercing damage if the swarm is
Bloodied.`}]},{slug:"swarm-of-rats",name:"Swarm Of Rats",meta:"Swarm of Tiny Beasts Medium, Unaligned",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Beasts Medium, Unaligned",abilities:{str:{score:9,mod:-1,save:-1},dex:{score:11,mod:0,save:2},con:{score:9,mod:-1,save:-1},int:{score:2,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"10",HP:"14 (4d8 - 4)",Speed:"30 ft., Climb 30 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Darkvision 30 ft., Passive Perception 10",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny rat. The swarm can't regain Hit Points or gain
Temporary Hit Points.`},{title:"ACTIONS",text:`Bites. Melee Attack Roll: +2, reach 5 ft. Hit: 5 (2d4) Piercing
damage, or 2 (1d4) Piercing damage if the swarm is Bloodied.`}]},{slug:"swarm-of-ravens",name:"Swarm Of Ravens",meta:"Swarm of Tiny Beasts Medium, Unaligned",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Beasts Medium, Unaligned",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:14,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:5,mod:-3,save:-3},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"12",HP:"11 (2d8 + 2)",Speed:"10 ft., Fly 50 ft.",Skills:"Perception +5",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Passive Perception 15",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny raven. The swarm can't regain Hit Points or
gain Temporary Hit Points.`},{title:"ACTIONS",text:`Beaks. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing
damage, or 2 (1d4) Piercing damage if the swarm is Bloodied.
Cacophony (Recharge 6). Wisdom Saving Throw: DC 10, one
creature in the swarm's space. Failure: The target has the
Deafened condition until the start of the swarm's next turn.
While Deafened, the target also has Disadvantage on ability
checks and attack rolls.`}]},{slug:"swarm-of-stirges",name:"Swarm Of Stirges",meta:"swarm of Tiny Monstrosities Medium, Unaligned",type:"",subtype:"",size:"",alignment:"",abilities:{str:{score:4,mod:-3,save:-3},dex:{score:16,mod:3,save:3},con:{score:11,mod:0,save:0},int:{score:2,mod:-4,save:-4},wis:{score:8,mod:-1,save:-1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"36 (8d8)",Speed:"10 ft., Fly 40 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"—",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny creature. The swarm can't regain Hit Points or
gain Temporary Hit Points.`},{title:"ACTIONS",text:`Swarm of Proboscises. Melee Attack Roll: +5, reach 5 ft. Hit: 14
(2d10 + 3) Piercing damage, or 8 (1d10 + 3) Piercing damage if
the swarm is Bloodied. If the target is a Medium or smaller
creature in the swarm's space, the target has the Grappled
condition (escape DC 13). Until the grapple ends, the target
takes 7 (2d6) Necrotic damage at the end of each of its turns.
Swarms  of  stirges  sometimes  form  in  swamps  and  Underdark
caverns,  draining  livestock  and  any  other  creatures  that  can't
escape them.`}]},{slug:"swarm-of-venomous-snakes",name:"Swarm Of Venomous Snakes",meta:"Swarm of Tiny Beasts Medium, Unaligned",type:"Swarm of Tiny",subtype:"",size:"",alignment:"Beasts Medium, Unaligned",abilities:{str:{score:8,mod:-1,save:-1},dex:{score:18,mod:4,save:4},con:{score:11,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"14",HP:"36 (8d8)",Speed:"30 ft., Swim 30 ft.",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Charmed, Frightened, Grappled, Paralyzed, Petriffed, Prone, Restrained, Stunned",Senses:"Blindsight 10 ft., Passive Perception 10",Languages:"None",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Swarm. The swarm can occupy another creature's space and
vice versa, and the swarm can move through any opening large
enough for a Tiny snake. The swarm can't regain Hit Points or
gain Temporary Hit Points.`},{title:"ACTIONS",text:`Bites. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Piercing
damage—or 6 (1d4 + 4) Piercing damage if the swarm is
Bloodied—plus 10 (3d6) Poison damage.`}]},{slug:"tarrasque",name:"Tarrasque",meta:"Monstrosity (Titan) Gargantuan, Unaligned",type:"Monstrosity",subtype:"Titan",size:"Gargantuan",alignment:"Unaligned",abilities:{str:{score:30,mod:10,save:10},dex:{score:11,mod:0,save:9},con:{score:30,mod:10,save:10},int:{score:3,mod:-4,save:5},wis:{score:11,mod:0,save:9},cha:{score:11,mod:0,save:9}},fields:{AC:"25",HP:"697 (34d20 + 340)",Speed:"60 ft., Burrow 40 ft., Climb 60 ft.",Skills:"Perception +9",Resistances:"Bludgeoning, Piercing, Slashing",Immunities:"Fire, Poison; Charmed, Deafened, Frightened, Paralyzed, Poisoned",Senses:"Blindsight 120 ft., Passive Perception 19",Languages:"None",CR:"30 (XP 155 000; PB +9)"},cr:"30 (XP 155 000; PB +9)",crValue:"30",xp:155e3,sections:[{title:"TRAITS",text:`Legendary Resistance (6/Day). If the tarrasque fails a saving throw, it
can choose to succeed instead.
Magic Resistance. The tarrasque has Advantage on saving throws
against spells and other magical efiects.
spell or a spell that requires a ranged attack roll, roll 1d6. On a 1-5,
the tarrasque is unafiected. On a 6, the tarrasque is unafiected and
reflects the spell, turning the caster into the target.
Siege Monster. The tarrasque deals double damage to objects and
structures.`},{title:"ACTIONS",text:`Multiattack. The tarrasque makes one Bite attack and three other
attacks, using Claw or Tail in any combination.
Bite. Melee Attack Roll: +19, reach 15 ft. Hit: 36 (4d12 + 10) Piercing
damage, and the target has the Grappled condition (escape DC 20).
Until the grapple ends, the target has the Restrained condition and
can't teleport.
Claw. Melee Attack Roll: +19, reach 15 ft. Hit: 28 (4d8 + 10) Slashing
damage.
Tail. Melee Attack Roll: +19, reach 30 ft. Hit: 23 (3d8 + 10) Bludgeoning
damage. If the target is a Huge or smaller creature, it has the Prone
condition.
Thunderous Bellow (Recharge 5–6). Constitution Saving Throw: DC 27,
each creature and each object that isn't being worn or carried in a
150-foot Cone. Failure: 78 (12d12) Thunder damage, and the target
has the Deafened and Frightened conditions until the end of its next
turn. Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Swallow. Strength Saving Throw: DC 27, one Large or smaller creature
Grappled by the tarrasque (it can have up to six creatures
swallowed at a time). Failure: The target is swallowed, and the
Grappled condition ends. A swallowed creature has the Blinded and
Restrained conditions and can't teleport, it has Total Cover against
attacks and other efiects outside the tarrasque, and it takes 56
(16d6) Acid damage at the start of each of the tarrasque's turns. If
the tarrasque takes 60 damage or more on a single turn from a
creature inside it, the tarrasque must succeed on a DC 20
Constitution saving throw at the end of that turn or regurgitate all
swallowed creatures, each of which falls in a space within 10 feet of
the tarrasque and has the Prone condition. If the tarrasque dies,
any swallowed creature no longer has the Restrained condition and
can escape from the corpse using 20 feet of movement, exiting
Prone.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3. Immediately after another creature's turn,
The tarrasque can expend a use to take one of the following actions.
The tarrasque regains all expended uses at the start of each of its
turns.
Onslaught. The tarrasque moves up to half its Speed, and it makes
one Claw or Tail attack.
World-Shaking Movement. The tarrasque moves up to its Speed. At
the end of this movement, the tarrasque creates an instantaneous
shock wave in a 60-foot Emanation originating from itself. Creatures
in that area lose Concentration and, if Medium or smaller, have the
Prone condition. The tarrasque can't take this action again until the
start of its next turn.`}]},{slug:"thri-kreen-marauder",name:"Thri-Kreen Marauder",meta:"Monstrosity Medium, Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:15,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:8,mod:-1,save:-1},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"33 (6d8 + 6)",Speed:"40 ft.",Skills:"Perception +3, Stealth +4, Survival +3",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Thri-kreen; telepathy 60 ft.",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Multiattack. The thri-kreen makes two attacks, using Gythka or
Chatkcha in any combination.
Gythka. Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Slashing
damage plus 2 (1d4) Poison damage.
Chatkcha. Ranged Attack Roll: +4, range 30/120 ft. Hit: 5 (1d6 + 2)
Slashing damage.`},{title:"BONUS ACTIONS",text:`Leap. The thri-kreen jumps up to 15 feet by spending 5 feet of
movement.
Thri-kreen marauders employ weapons made of stone and bone,
such as the spear-like gythka and throwing blades called chatkcha.`}]},{slug:"thri-kreen-psion",name:"Thri-Kreen Psion",meta:"Monstrosity Medium, Neutral",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:7},dex:{score:15,mod:2,save:5},con:{score:14,mod:2,save:5},int:{score:19,mod:4,save:7},wis:{score:12,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"16",HP:"149 (23d8 + 46)",Speed:"40 ft., Fly 20 ft. (hover)",Skills:"Perception +4, Stealth +8",Resistances:"Psychic",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Thri-kreen; telepathy 120 ft.",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The thri-kreen makes three Psionic Lance attacks.
Psionic Lance. Melee or Ranged Attack Roll: +7, reach 10 ft. or
range 120 ft. Hit: 18 (4d6 + 4) Psychic damage.
Spellcasting. The thri-kreen casts one of the following spells,
requiring no spell components and using Intelligence as the
spellcasting ability (spell save DC 15):
At will: Mage Hand (the hand is Invisible)
1/day each: Detect Thoughts, Sending, Synaptic Static
Thri-kreen psions harness their psychic powers to avoid danger
and manipulate objects from afar.`}]},{slug:"tiger",name:"Tiger",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:17,mod:3,save:3},dex:{score:16,mod:3,save:3},con:{score:14,mod:2,save:2},int:{score:3,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:8,mod:1,save:1}},fields:{AC:"13",HP:"30 (4d10 + 8)",Speed:"40 ft.",Skills:"Perception +3, Stealth +7",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"ACTIONS",text:`Rend. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing
damage. If the target is a Large or smaller creature, it has the
Prone condition.`},{title:"BONUS ACTIONS",text:"Nimble Escape. The tiger takes the Disengage or Hide action."}]},{slug:"tough",name:"Tough",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:15,mod:2,save:2},dex:{score:12,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:11,mod:0,save:0}},fields:{AC:"12",HP:"32 (5d8 + 10)",Speed:"30 ft.",Gear:"Heavy Crossbow, Leather Armor, Mace",Senses:"Passive Perception 10",Languages:"Common",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Pack Tactics. The tough has Advantage on an attack roll against
a creature if at least one of the tough's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Mace. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2)
Bludgeoning damage.
Heavy Crossbow. Ranged Attack Roll: +3, range 100/400 ft. Hit: 6
(1d10 + 1) Piercing damage.
Toughs  might  work  in  groups  at  the  direction  of  a  leader,  or
individual toughs might bully weaker folk into doing what they say.`}]},{slug:"tough-boss",name:"Tough Boss",meta:"Humanoid Medium or Small, Any Alignment",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Any Alignment",abilities:{str:{score:17,mod:3,save:5},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:5},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:11,mod:0,save:2}},fields:{AC:"16",HP:"82 (11d8 + 33)",Speed:"30 ft.",Gear:"Chain Mail, Heavy Crossbow, Warhammer",Senses:"Passive Perception 10",Languages:"Common plus one other language",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"TRAITS",text:`Pack Tactics. The tough has Advantage on an attack roll against
a creature if at least one of the tough's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Multiattack. The tough makes two attacks, using Warhammer or
Heavy Crossbow in any combination.
Warhammer. Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3)
Bludgeoning damage, and if the target is Large or smaller, the
tough can push the target up to 10 feet straight away from
itself.
Heavy Crossbow. Ranged Attack Roll: +4, range 100/400 ft. Hit: 13
(2d10 + 2) Piercing damage.
Tough bosses leverage their street smarts, brawling prowess, and
reputation to compel others to follow their demands.`}]},{slug:"treant",name:"Treant",meta:"Plant Huge, Chaotic Good",type:"Plant",subtype:"",size:"Huge",alignment:"Chaotic Good",abilities:{str:{score:23,mod:6,save:6},dex:{score:8,mod:-1,save:-1},con:{score:21,mod:5,save:5},int:{score:12,mod:1,save:1},wis:{score:16,mod:3,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"16",HP:"138 (12d12 + 60)",Speed:"30 ft.",Vulnerabilities:"Fire",Resistances:"Bludgeoning, Piercing",Senses:"Passive Perception 13",Languages:"Common, Druidic, Elvish, Sylvan",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"TRAITS",text:`Siege Monster. The treant deals double damage to objects and
structures.`},{title:"ACTIONS",text:`Multiattack. The treant makes two Slam attacks.
Slam. Melee Attack Roll: +10, reach 5 ft. Hit: 16 (3d6 + 6)
Bludgeoning damage.
Hail of Bark. Ranged Attack Roll: +10, range 180 ft. Hit: 28 (4d10 +
6) Piercing damage.
Animate Trees (1/Day). The treant magically animates up to two
trees it can see within 60 feet of itself. Each tree uses the Treant
stat block, except it has Intelligence and Charisma scores of 1, it
can't speak, and it lacks this action. The tree takes its turn
immediately after the treant on the same Initiative count, and it
obeys the treant. A tree remains animate for 1 day or until it
dies, the treant dies, or it is more than 120 feet from the treant.
The tree then takes root if possible.`}]},{slug:"tree-blight",name:"Tree Blight",meta:"Plant Huge, Neutral Evil",type:"Plant",subtype:"",size:"Huge",alignment:"Neutral Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:10,mod:0,save:0},con:{score:20,mod:5,save:5},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"15",HP:"115 (10d12 + 50)",Speed:"30 ft.",Immunities:"Deafened",Senses:"Blindsight 60 ft., Passive Perception 10",Languages:"Understands Common and Druidic but can't speak",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The blight makes two Branch attacks and uses
Grasping Root.
Branch. Melee Attack Roll: +9, reach 15 ft. Hit: 16 (3d6 + 6)
Bludgeoning damage.
Grasping Root. Strength Saving Throw: DC 17, one Large or
smaller creature the blight can see within 15 feet. Failure: The
target is pulled up to 10 feet straight toward the blight and has
the Grappled condition (escape DC 16) from one of six roots.
Until the grapple ends, the target takes 13 (2d6 + 6)
Bludgeoning damage at the start of each of its turns.`},{title:"BONUS ACTIONS",text:`Gnash. Dexterity Saving Throw: DC 17, one creature Grappled by
the blight. Failure: 19 (3d8 + 6) Piercing damage. Success: Half
damage.
Tree blights look like ancient, dead trees with gnarled limbs and
splintered hollows. Imbued with bloodlust, these blights feed on the
living.  Evidence  of  their  past  meals  is  often  tangled  amid  their
branches and roots. Tree blights cooperate with other blights, but
they  attack  other  tree-shaped  beings  they  encounter,  such  as
awakened trees and treants.`}]},{slug:"triceratops",name:"Triceratops",meta:"Beast (Dinosaur) Huge, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Huge",alignment:"Unaligned",abilities:{str:{score:22,mod:6,save:6},dex:{score:9,mod:-1,save:-1},con:{score:17,mod:3,save:3},int:{score:2,mod:-4,save:-4},wis:{score:11,mod:0,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"14",HP:"114 (12d12 + 36)",Speed:"50 ft.",Senses:"Passive Perception 10",Languages:"None",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The triceratops makes two Gore attacks.
Gore. Melee Attack Roll: +9, reach 5 ft. Hit: 19 (2d12 + 6) Piercing
damage. If the target is Huge or smaller and the triceratops
moved 20+ feet straight toward it immediately before the hit,
the target takes an extra 9 (2d8) Piercing damage and has the
Prone condition.`}]},{slug:"troglodyte",name:"Troglodyte",meta:"Monstrosity Medium, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:10,mod:0,save:0},con:{score:14,mod:2,save:2},int:{score:6,mod:-2,save:-2},wis:{score:10,mod:0,save:0},cha:{score:6,mod:-2,save:-2}},fields:{AC:"11",HP:"13 (2d8 + 4)",Speed:"30 ft., Climb 30 ft.",Skills:"Stealth +4",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Troglodyte",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Stench. Constitution Saving Throw: DC 12, any creature (other
than a troglodyte) that starts its turn in a 5-foot Emanation
originating from the troglodyte. Failure: The target has the
Poisoned condition until the start of its next turn. Success: The
target is immune to the Stench of all troglodytes for 1 hour.
Sunlight Sensitivity. While in sunlight, the troglodyte has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing
damage.`}]},{slug:"troll",name:"Troll",meta:"Giant Large, Chaotic Evil",type:"Giant",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:20,mod:5,save:5},int:{score:7,mod:-2,save:-2},wis:{score:9,mod:-1,save:-1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"15",HP:"94 (9d10 + 45)",Speed:"30 ft.",Skills:"Perception +5",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Giant",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Loathsome Limbs (4/Day). If the troll ends any turn Bloodied and
took 15+ Slashing damage during that turn, one of the troll's
limbs is severed, falls into the troll's space, and becomes a Troll
Limb. The limb acts immediately after the troll's turn. The troll
has 1 Exhaustion level for each missing limb, and it grows
replacement limbs the next time it regains Hit Points.
Regeneration. The troll regains 15 Hit Points at the start of each
of its turns. If the troll takes Acid or Fire damage, this trait
doesn't function on the troll's next turn. The troll dies only if it
starts its turn with 0 Hit Points and doesn't regenerate.n.`},{title:"ACTIONS",text:`Multiattack. The troll makes three Rend attacks.
Rend. Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing
damage.`},{title:"BONUS ACTIONS",text:`Charge. The troll moves up to half its Speed straight toward an
enemy it can see.`}]},{slug:"troll-limb",name:"Troll Limb",meta:"Giant Small, Chaotic Evil",type:"Giant",subtype:"",size:"Small",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:10,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:9,mod:-1,save:-1},cha:{score:1,mod:-5,save:-5}},fields:{AC:"13",HP:"14 (4d6)",Speed:"20 ft.",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"—",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"TRAITS",text:`Regeneration. The limb regains 5 Hit Points at the start of each
of its turns. If the limb takes Acid or Fire damage, this trait
doesn't function on the limb's next turn. The limb dies only if it
starts its turn with 0 Hit Points and doesn't regenerate.
Troll Spawn. The limb uncannily has the same senses as a whole
troll. If the limb isn't destroyed within 24 hours, roll 1d12. On a
12, the limb turns into a Troll. Otherwise, the limb withers away.`},{title:"ACTIONS",text:`Rend. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (2d4 + 4) Slashing
damage.`}]},{slug:"twig-blight",name:"Twig Blight",meta:"Plant Small, Neutral Evil",type:"Plant",subtype:"",size:"Small",alignment:"Neutral Evil",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:14,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:4,mod:-3,save:-3},wis:{score:8,mod:-1,save:-1},cha:{score:3,mod:-4,save:-4}},fields:{AC:"14",HP:"7 (2d6)",Speed:"20 ft.",Skills:"Stealth +4",Vulnerabilities:"Fire",Immunities:"Deafened",Senses:"Blindsight 60 ft., Passive Perception 9",Languages:"Understands Common but can't speak",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Pack Tactics. The blight has Advantage on an attack roll against
a creature if at least one of the blight's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Claw. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing
damage.
Resembling  bundles  of  sticks  or  dead  brush,  twig  blights  easily
blend in among deadwood, flotsam, and the wood piles common in
many rural settings. Groups of them are often found near river
crossings,  forgotten  wells,  or  natural  campsites,  where  they
ambush those who let down their guard.`}]},{slug:"tyrannosaurus-rex",name:"Tyrannosaurus Rex",meta:"Beast (Dinosaur) Huge, Unaligned",type:"Beast",subtype:"Dinosaur",size:"Huge",alignment:"Unaligned",abilities:{str:{score:25,mod:7,save:10},dex:{score:10,mod:0,save:0},con:{score:19,mod:4,save:4},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:4},cha:{score:9,mod:-1,save:-1}},fields:{AC:"13",HP:"136 (13d12 + 52)",Speed:"50 ft.",Skills:"Perception +4",Senses:"Passive Perception 14",Languages:"None",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"ACTIONS",text:`Multiattack. The tyrannosaurus makes one Bite attack and one
Tail attack.
Bite. Melee Attack Roll: +10, reach 10 ft. Hit: 33 (4d12 + 7) Piercing
damage. If the target is a Large or smaller creature, it has the
Grappled condition (escape DC 17). While Grappled, the target
has the Restrained condition and can't be targeted by the
tyrannosaurus's Tail.
Tail. Melee Attack Roll: +10, reach 15 ft. Hit: 25 (4d8 + 7)
Bludgeoning damage. If the target is a Huge or smaller creature,
it has the Prone condition.`}]},{slug:"ultroloth",name:"Ultroloth",meta:"Fiend (Yugoloth) Medium, Neutral Evil",type:"Fiend",subtype:"Yugoloth",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:16,mod:3,save:3},con:{score:18,mod:4,save:4},int:{score:19,mod:4,save:4},wis:{score:15,mod:2,save:2},cha:{score:18,mod:4,save:4}},fields:{AC:"19",HP:"221 (26d8 + 104)",Speed:"30 ft., Fly 60 ft. (hover)",Skills:"Deception +9, Perception +7, Stealth +8",Resistances:"Cold, Fire, Lightning",Immunities:"Acid, Poison; Charmed, Frightened, Poisoned",Senses:"Truesight 120 ft., Passive Perception 17",Languages:"Abyssal, Infernal; telepathy 120 ft.",CR:"13 (XP 10 000; PB +5)"},cr:"13 (XP 10 000; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Fiendish Restoration. If the ultroloth dies outside Gehenna, its
body dissolves into ichor, and it gains a new body instantly,
reviving with all its Hit Points somewhere in Gehenna.
Magic Resistance. The ultroloth has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The ultroloth uses Hypnotic Gaze and makes two
Mercurial Whip attacks.
Mercurial Whip. Melee Attack Roll: +9, reach 15 ft. Hit: 25 (6d6 + 4)
Force damage, and the ultroloth can teleport the target up to 10
feet to an unoccupied space the ultroloth can see that isn't in
the air.
Hypnotic Gaze. Wisdom Saving Throw: DC 17, each creature in a
30-foot Cone. Failure: 10 (3d6) Psychic damage, and the target
has the Stunned condition until the start of the ultroloth's next
turn. Success: The target is immune to this ultroloth's Hypnotic
Gaze for 24 hours.
Spellcasting. The ultroloth casts one of the following spells,
requiring no Material components and using Intelligence as the
spellcasting ability (spell save DC 17):
At will: Alter Self, Clairvoyance, Detect Magic
1/day each: Dimension Door, Fireball (level 5 version), Wall of Fire`},{title:"BONUS ACTIONS",text:`Fiendish Guile (Recharge 4–6). The ultroloth casts Dispel Magic,
Invisibility (self only), Misty Step, or Suggestion, requiring no
Material components and using the same spellcasting ability as
Spellcasting.`}]},{slug:"umber-hulk",name:"Umber Hulk",meta:"Monstrosity Large, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:20,mod:5,save:5},dex:{score:13,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:9,mod:-1,save:-1},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"18",HP:"93 (11d10 + 33)",Speed:"30 ft., Burrow 20 ft.",Senses:"Darkvision 120 ft., Tremorsense 60 ft., Passive Perception 10",Languages:"Umber Hulk",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Tunneler. The umber hulk can burrow through solid rock at half
its Burrow Speed and leaves a 10-foot-diameter tunnel in its
wake.`},{title:"ACTIONS",text:`Multiattack. The umber hulk makes three Rend attacks.
Rend. Melee Attack Roll: +8, reach 10 ft. Hit: 12 (2d6 + 5) Slashing
damage.`},{title:"BONUS ACTIONS",text:`Confusing Gaze (Recharge 5–6). Wisdom Saving Throw: DC 14, each
creature in a 30-foot Cone. Failure: The target can't take
Reactions until the start of the umber hulk's next turn, and the
target rolls 1d8 to determine what it does on its next turn:
1-4. The target does nothing.
5-6. The target takes no action or Bonus Action and uses all its
movement to move in a random direction.
7-8. The target makes a melee attack against a random
creature within its reach or does nothing if it can't make such
an attack.`}]},{slug:"undead-spirit",name:"Undead Spirit",meta:"Undead Medium, Neutral",type:"Undead",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:12,mod:1,save:1},dex:{score:16,mod:3,save:3},con:{score:15,mod:2,save:2},int:{score:4,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:9,mod:-1,save:-1}},fields:{AC:"11 + the spell's level",HP:"30 (Ghostly and Putrid only) or 20 (Skeletal only) + 10 for each spell level above 3",Speed:"30 ft., Fly 40 ft. (hover; Ghostly only)",Immunities:"Necrotic, Poison; Exhaustion, Frightened, Paralyzed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Understands the languages you know",CR:"None (XP 0; PB equals your Proffciency Bonus)"},cr:"None (XP 0; PB equals your Proffciency Bonus)",crValue:"None",xp:0,sections:[{title:"TRAITS",text:`Festering Aura (Putrid Only). Constitution Saving Throw: DC equals
your spell save DC, any creature (other than you) that starts its
turn within a 5-foot Emanation originating from the spirit.
Failure: The creature has the Poisoned condition until the start
of its next turn.
Incorporeal Passage (Ghostly Only). The spirit can move through
ends its turn inside an object, it is shunted to the nearest
unoccupied space and takes 1d10 Force damage for every 5 feet
traveled.`},{title:"ACTIONS",text:`Multiattack. The spirit makes a number of attacks equal to half
this spell's level (round down).
Deathly Touch (Ghostly Only). Melee Attack Roll: Bo- nus equals
your spell attack modiffer, reach 5 ft. Hit: 1d8 + 3 + the spell's
level Necrotic damage, and the target has the Frightened
condition until the end of its next turn.
Grave Bolt (Skeletal Only). Ranged Attack Roll: Bonus equals your
spell attack modiffer, range 150 ft. Hit: 2d4 + 3 + the spell's level
Necrotic damage.
Rotting Claw (Putrid Only). Melee Attack Roll: Bonus equals your
spell attack modiffer, reach 5 ft. Hit: 1d6 + 3 + the spell's level
Slashing damage. If the target has the Poisoned condition, it has
the Paralyzed condition until the end of its next turn.
See Summon Undead.`}]},{slug:"unicorn",name:"Unicorn",meta:"Celestial Large, Lawful Good",type:"Celestial",subtype:"",size:"Large",alignment:"Lawful Good",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:15,mod:2,save:2},int:{score:11,mod:0,save:0},wis:{score:17,mod:3,save:3},cha:{score:16,mod:3,save:3}},fields:{AC:"12",HP:"97 (13d10 + 26)",Speed:"50 ft.",Immunities:"Poison; Charmed, Paralyzed, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Celestial, Elvish, Sylvan; telepathy 120 ft.",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day). If the unicorn fails a saving throw,
it can choose to succeed instead.
Magic Resistance. The unicorn has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The unicorn makes one Hooves attack and one
Radiant Horn attack.
Hooves. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4)
Bludgeoning damage.
Radiant Horn. Melee Attack Roll: +7, reach 5 ft. Hit: 9 (1d10 + 4)
Radiant damage.
Spellcasting. The unicorn casts one of the following spells,
requiring no spell components and using Charisma as the
spellcasting ability (spell save DC 14):
At Will: Detect Evil and Good, Druidcraft
1/Day Each: Calm Emotions, Dispel Evil and Good, Entangle, Pass
without Trace, Word of Recall`},{title:"BONUS ACTIONS",text:`Unicorn's Blessing (3/Day). The unicorn touches another creature
with its horn and casts Cure Wounds or Lesser Restoration on
that creature, using the same spellcasting ability as
Spellcasting.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3. Immediately after another creature's
turn, the unicorn can expend a use to take one of the following
actions. The unicorn regains all expended uses at the start of each
of its turns.
Charging Horn. The unicorn moves up to half its Speed without
provoking Opportunity Attacks, and it makes one Radiant Horn
attack.
Shimmering Shield. The unicorn targets itself or one creature it
can see within 60 feet of itself. The target gains 10 (3d6)
Temporary Hit Points, and its AC increases by 2 until the end of
the unicorn's next turn. The unicorn can't take this action again
until the start of its next turn.`}]},{slug:"vampire",name:"Vampire",meta:"Undead Medium or Small, Lawful Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:18,mod:4,save:9},con:{score:18,mod:4,save:9},int:{score:17,mod:3,save:3},wis:{score:15,mod:2,save:7},cha:{score:18,mod:4,save:9}},fields:{AC:"16",HP:"195 (23d8 + 92)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +7, Stealth +9",Resistances:"Necrotic",Senses:"Darkvision 120 ft., Passive Perception 17",Languages:"Common plus two other languages",CR:"13 (XP 10 000, or 11 500 in Lair; PB +5)"},cr:"13 (XP 10 000, or 11 500 in Lair; PB +5)",crValue:"13",xp:1e4,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the vampire fails a
saving throw, it can choose to succeed instead.
Misty Escape. If the vampire drops to 0 Hit Points outside its resting
place, the vampire uses Shape-Shift to become mist (no action
required). If it can't use Shape-Shift, it is destroyed. While it has 0
Hit Points in mist form, it can't return to its vampire form, and it
must reach its resting place within 2 hours or be destroyed. Once in
its resting place, it returns to its vampire form and has the
Paralyzed condition until it regains any Hit Points, and it regains 1
Hit Point after spending 1 hour there.
along ceilings, without needing to make an ability check.
Vampire Weakness. The vampire has these weaknesses:
Forbiddance. The vampire can't enter a residence without an
invitation from an occupant.
Running Water. The vampire takes 20 Acid damage if it ends its turn
in running water.
Stake to the Heart. If a weapon that deals Piercing damage is driven
into the vampire's heart while the vampire has the Incapacitated
condition in its resting place, the vampire has the Paralyzed
condition until the weapon is removed.
Sunlight. The vampire takes 20 Radiant damage if it starts its turn
in sunlight. While in sunlight, it has Disadvantage on attack rolls and
ability checks.`},{title:"ACTIONS",text:`Multiattack (Vampire Form Only). The vampire makes two Grave
Strike attacks and uses Bite.
Grave Strike (Vampire Form Only). Melee Attack Roll: +9, reach 5 ft. Hit:
8 (1d8 + 4) Bludgeoning damage plus 7 (2d6) Necrotic damage. If the
target is a Large or smaller creature, it has the Grappled condition
(escape DC 14) from one of two hands.
Bite (Bat or Vampire Form Only). Constitution Saving Throw: DC 17, one
creature within 5 feet that is willing or that has the Grappled,
Incapacitated, or Restrained condition. Failure: 6 (1d4 + 4) Piercing
damage plus 13 (3d8) Necrotic damage. The target's Hit Point
maximum decreases by an amount equal to the Necrotic damage
taken, and the vampire regains Hit Points equal to that amount. A
Humanoid reduced to 0 Hit Points by this damage and then buried
rises the following sunset as a Vampire Spawn under the vampire's
control.`},{title:"BONUS ACTIONS",text:`Shape-Shift. If the vampire isn't in sunlight or running water, it
shape-shifts into a Tiny bat (Speed 5 ft., Fly Speed 30 ft.) or a
Medium cloud of mist (Speed 5 ft., Fly Speed 20 ft. [hover]), or it
returns to its vampire form. Anything it is wearing transforms with
it. While in bat form, the vampire can't speak. Its game statistics,
other than its size and Speed, are unchanged. While in mist form,
the vampire can't take any actions, speak, or manipulate objects. It
is weightless and can enter an enemy's space and stop there. If air
can pass through a space, the mist can do so, but it can't pass
through liquid. It has Resistance to all damage, except the damage it
takes from sunlight.
Charm (Recharge 5–6). The vampire casts Charm Person, requiring no
spell components and using Charisma as the spellcasting ability
(spell save DC 17), and the duration is 24 hours. The Charmed target
is a willing recipient of the vampire's Bite, the damage of which
doesn't end the spell. When the spell ends, the target is unaware it
was Charmed by the vampire.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, The vampire can expend a use to take one of the
following actions. The vampire regains all expended uses at the start of
each of its turns.
Deathless Strike. The vampire moves up to half its Speed, and it
makes one Grave Strike attack.
Beguile. The vampire casts Command, requiring no spell components
and using Charisma as the spellcasting ability (spell save DC 17). The
vampire can't take this action again until the start of its next turn.
Vampires are terrifying hunters and manipulators. They use their powers to shape-shift and bend other creatures' wills as they terrorize and
feed on populations over generations.`}]},{slug:"vampire-familiar",name:"Vampire Familiar",meta:"Humanoid Medium or Small, Neutral Evil",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:16,mod:3,save:5},con:{score:15,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:10,mod:0,save:2},cha:{score:14,mod:2,save:2}},fields:{AC:"15",HP:"65 (10d8 +20)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +4, Persuasion +4, Stealth +7",Resistances:"Necrotic",Immunities:"Charmed (except from its vampire master)",Gear:"Daggers (10)",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Common plus one other language",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Vampiric Connection. While the familiar and its vampire master
are on the same plane of existence, the vampire can
communicate with the familiar telepathically, and the vampire
can perceive through the familiar's senses.`},{title:"ACTIONS",text:`Multiattack. The familiar makes two Umbral Dagger attacks.
Umbral Dagger. Melee or Ranged Attack Roll: +5, reach 5 ft. or
range 20/60 ft. Hit: 5 (1d4 + 3) Piercing damage plus 7 (3d4)
Necrotic damage. If the target is reduced to 0 Hit Points by this
attack, the target becomes Stable but has the Poisoned
condition for 1 hour. While it has the Poisoned condition, the
target has the Paralyzed condition.`},{title:"BONUS ACTIONS",text:`Deathless Agility. The familiar takes the Dash or Disengage
action.
Vampire  familiars  are  living  people  who  serve  vampires,  either
willingly  or  due  to  coercion  by  their  deathless  masters.  They
channel  deathly  energy  through  their  weapons,  incapacitating
unsuspecting targets and leaving their victims as helpless prey for
their vampire masters. Many vampire familiars aspire to eventually
become vampires, while others are magically charmed or serve as
part of some terrible bargain. In each case, these vampire servants
show  signs  of  their  vampiric  corruption,  such  as  corpse-like
complexions,  uncanny  reflexes,  and  evidence  of  their  masters'
repeated  feedings.  A  vampire  familiar  loses  its  supernatural
abilities and returns to its original Humanoid state if its vampire
master is destroyed.`}]},{slug:"vampire-nightbringer",name:"Vampire Nightbringer",meta:"Undead Medium or Small, Neutral Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:18,mod:4,save:7},con:{score:16,mod:3,save:3},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:5},cha:{score:15,mod:2,save:2}},fields:{AC:"16",HP:"142 (19d8 + 57)",Speed:"30 ft., Fly 30 ft. (hover)",Skills:"Perception +5, Stealth +7",Immunities:"Cold, Necrotic; Charmed, Exhaustion, Frightened",Senses:"Darkvision 120 ft., Passive Perception 15",Languages:"Common plus one other language",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:`Sunlight Hypersensitivity. The vampire takes 10 Radiant damage
if it starts its turn in sunlight. While in sunlight, it has
Disadvantage on attack rolls and ability checks.`},{title:"ACTIONS",text:`Multiattack. The vampire makes one Bite attack and one Shadow
Strike attack.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Piercing
damage plus 10 (3d6) Necrotic damage. The target's Hit Point
maximum decreases by an amount equal to the Necrotic
damage taken, and the vampire regains Hit Points equal to that
amount.
Shadow Strike. Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4)
Slashing damage plus 14 (4d6) Cold damage.`},{title:"BONUS ACTIONS",text:`Shadow Stealth. While in Dim Light or Darkness, the vampire
takes the Hide action.
Born of necromantic rituals and planes of existence suffused with
negative energy, vampire nightbringers manipulate shadows and
feed on the raw life force of living creatures.`}]},{slug:"vampire-spawn",name:"Vampire Spawn",meta:"Undead Medium or Small, Neutral Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:16,mod:3,save:6},con:{score:16,mod:3,save:3},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"16",HP:"90 (12d8 + 36)",Speed:"30 ft.",Skills:"Perception +3, Stealth +6",Resistances:"Necrotic",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Common plus one other language",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`along ceilings, without needing to make an ability check.
Vampire Weakness. The vampire has these weaknesses:
Forbiddance. The vampire can't enter a residence without an
invitation from an occupant.
Running Water. The vampire takes 20 Acid damage if it ends its
turn in running water.
Stake to the Heart. The vampire is destroyed if a weapon that
deals Piercing damage is driven into the vampire's heart while
the vampire has the Incapacitated condition.
Sunlight. The vampire takes 20 Radiant damage if it starts its
turn in sunlight. While in sunlight, it has Disadvantage on attack
rolls and ability checks.`},{title:"ACTIONS",text:`Multiattack. The vampire makes two Claw attacks and uses Bite.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (2d4 + 3) Slashing
damage. If the target is a Medium or smaller creature, it has the
Grappled condition (escape DC 13) from one of two claws.
Bite. Constitution Saving Throw: DC 14, one creature within 5 feet
that is willing or that has the Grappled, Incapacitated, or
Restrained condition. Failure: 5 (1d4 + 3) Piercing damage plus
10 (3d6) Necrotic damage. The target's Hit Point maximum
decreases by an amount equal to the Necrotic damage taken,
and the vampire regains Hit Points equal to that amount.`},{title:"BONUS ACTIONS",text:`Deathless Agility. The vampire takes the Dash or Disengage
action.
Vampire spawn are newly created vampires. They have yet to fully
master their abilities, and many are consumed by their thirst for
blood.  Vampire  spawn  might  serve  more  powerful  vampires  or
pursue their own depraved agendas.`}]},{slug:"vampire-umbral-lord",name:"Vampire Umbral Lord",meta:"Undead Medium or Small, Lawful Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Lawful Evil",abilities:{str:{score:20,mod:5,save:10},dex:{score:18,mod:4,save:9},con:{score:18,mod:4,save:4},int:{score:19,mod:4,save:4},wis:{score:16,mod:3,save:8},cha:{score:21,mod:5,save:10}},fields:{AC:"16",HP:"187 (22d8 + 88)",Speed:"40 ft., Climb 40 ft., Fly 40 ft. (hover)",Skills:"Arcana +9, Perception +13, Stealth +9",Immunities:"Cold, Necrotic; Charmed, Exhaustion",Senses:"Blindsight 120 ft., Passive Perception 23",Languages:"Common plus three other languages",CR:"15 (XP 13 000, or 15 000 in Lair; PB +5)"},cr:"15 (XP 13 000, or 15 000 in Lair; PB +5)",crValue:"15",xp:13e3,sections:[{title:"TRAITS",text:`Legendary Resistance (3/Day, or 4/Day in Lair). If the vampire fails a
saving throw, it can choose to succeed instead.
Shadow Escape. If the vampire drops to 0 Hit Points outside its
resting place, it teleports into its resting place unless it is in running
water or sunlight. If it can't teleport, it is destroyed. Once inside its
resting place, it has the Paralyzed condition for 1 hour, after which
it regains 1 Hit Point.
Vampire Weakness. The vampire has these weaknesses:
Forbiddance. The vampire can't enter a residence without an
invitation from an occupant.
Running Water. The vampire takes 20 Acid damage if it ends its turn
in running water.
Stake to the Heart. If a weapon that deals Piercing damage is driven
into the vampire's heart while the vampire has the Incapacitated
condition in its resting place, the vampire has the Paralyzed
condition until the weapon is removed.
Sunlight. The vampire takes 20 Radiant damage if it starts its turn
in sunlight. While in sunlight, it has Disadvantage on attack rolls and
ability checks.`},{title:"ACTIONS",text:`Multiattack. The vampire makes two attacks, using Grave Strike or
Sickening Ray in any combination.
Grave Strike. Melee Attack Roll: +10, reach 5 ft. Hit: 9 (1d8 + 5)
Slashing damage plus 13 (3d8) Necrotic damage.
Hunger of Hadar (Recharge 5–6). The vampire casts Hunger of Hadar
(level 5 version), requiring no spell components and using Charisma
as the spellcasting ability (spell save DC 18).
Sickening Ray. Ranged Attack Roll: +10, range 120 ft. Hit: 16 (2d10 + 5)
Necrotic damage, and the target has the Poisoned condition until
the start of the vampire's next turn.`},{title:"BONUS ACTIONS",text:`Sanguine Drain. Constitution Saving Throw: DC 18, one creature the
vampire can see within 30 feet that isn't a Construct or an Undead.
Failure: 14 (4d6) Necrotic damage. The target's Hit Point maximum
decreases by an amount equal to the damage taken, and the
vampire regains Hit Points equal to that amount.`},{title:"LEGENDARY ACTIONS",text:`Legendary Action Uses: 3 (4 in Lair). Immediately after another
creature's turn, the vampire umbral lord can expend a use to take one
of the following actions. The vampire umbral lord regains all expended
uses at the start of each of its turns.
Beguile. The vampire casts Command, requiring no spell components
and using Charisma as the spellcasting ability (spell save DC 18). The
vampire can't take this action again until the start of its next turn.
Umbral Strike. The vampire moves up to half its Speed, and it makes
one Grave Strike or Sickening Ray attack.
Vampire umbral lords embrace their ties to the darkness, devoting themselves to sinister powers in exchange for access to forbidden magic.`}]},{slug:"venomous-snake",name:"Venomous Snake",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:2,mod:4,save:4},dex:{score:15,mod:2,save:2},con:{score:11,mod:0,save:0},int:{score:1,mod:5,save:5},wis:{score:10,mod:0,save:0},cha:{score:3,mod:4,save:4}},fields:{AC:"12",HP:"5 (2d4)",Speed:"30 ft., Swim 30 ft.",Senses:"Blindsight 10 ft., Passive Perception 10",Languages:"None",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing
damage plus 3 (1d6) Poison damage.`}]},{slug:"vine-blight",name:"Vine Blight",meta:"Plant Medium, Neutral Evil",type:"Plant",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:8,mod:-1,save:-1},con:{score:14,mod:2,save:2},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:3,mod:-4,save:-4}},fields:{AC:"12",HP:"19 (3d8 + 6)",Speed:"20 ft.",Skills:"Stealth +1",Immunities:"Deafened",Senses:"Blindsight 60 ft., Passive Perception 10",Languages:"Common",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Constricting Vine. Melee Attack Roll: +4, reach 10 ft. Hit: 6 (1d8 +
2) Bludgeoning damage. If the target is a Large or smaller
creature, it has the Grappled condition (escape DC 12). Until the
grapple ends, the target takes 4 (1d8) Bludgeoning damage at
the start of each of its turns, and the blight can't make
Constricting Vine attacks.
Entangling Plants (Recharge 5–6). The blight casts the Entangle
spell, using Constitution as the spellcasting ability (spell save DC
12).
Vine blights resemble humans wrapped in vines common to the
areas in which they grow, from hairy ivy vines to flowering kudzu.
They can cause plants to burst from the ground around themselves
and entangle nearby foes. Unlike most other blights, vine blights
can speak. They do so rarely, typically only to convey messages
from  their  masters  or  to  repeat  the  words  of  their  victims  in
rasping voices.`}]},{slug:"violet-fungus",name:"Violet Fungus",meta:"Plant Medium, Unaligned",type:"Plant",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:3,mod:-4,save:-4},dex:{score:1,mod:-5,save:-5},con:{score:10,mod:0,save:0},int:{score:1,mod:-5,save:-5},wis:{score:3,mod:-4,save:-4},cha:{score:1,mod:-5,save:-5}},fields:{AC:"5",HP:"18 (4d8)",Speed:"5 ft.",Immunities:"Blinded, Charmed, Deafened, Frightened",Senses:"Blindsight 30 ft., Passive Perception 6",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"ACTIONS",text:`Multiattack. The fungus makes two Rotting Touch attacks.
Rotting Touch. Melee Attack Roll: +2, reach 10 ft. Hit: 4 (1d8)
Necrotic damage.
Slow but mobile, violet fungi rot any flesh they touch with their
lashing tendrils.`}]},{slug:"violet-fungus-necrohulk",name:"Violet Fungus Necrohulk",meta:"Plant Large, Neutral Evil",type:"Plant",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:18,mod:4,save:4},int:{score:7,mod:-2,save:-2},wis:{score:14,mod:2,save:2},cha:{score:10,mod:0,save:0}},fields:{AC:"17",HP:"123 (13d10 +52)",Speed:"40 ft.",Immunities:"Necrotic, Poison; Blinded, Charmed, Deafened, Frightened, Poisoned",Senses:"Blindsight 60 ft., Passive Perception 12",Languages:"None",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The necrohulk makes two Rotting Slam attacks.
Rotting Slam. Melee Attack Roll: +7, reach 10 ft. Hit: 9 (1d10+ 4)
Bludgeoning damage plus 7 (2d6) Necrotic damage.
Spore Bomb (Recharge 5-6). Constitution Saving Throw: DC 15,
each creature in a 20-foot-radius Sphere centered on a point
the necrohulk can see within 60 feet. Failure: 28 (8d6) Necrotic
damage, and the target has the Poisoned condition until the
start of the necrohulk's next turn. While Poisoned, the target
can't regain Hit Points. Success: Half damage only.`},{title:"BONUS ACTIONS",text:`Absorb Body. Strength Saving Throw: DC 15, one Medium or Small
creature the necrohulk can see within 5 feet. Failure: The target
is pulled into the necrohulk's space and becomes grafted to its
body. The necrohulk can have only one target grafted at a time.
While grafted, the target has the Restrained condition and
Disadvantage on Constitution saving throws. When the
necrohulk moves, the grafted target moves with it. If the target
dies while grafted, its body is destroyed, and the necrohulk
regains 10 Hit Points. The grafted target or a creature within 5
feet of the necrohulk can take an action to make a DC 15
Strength (Athletics) check. On a successful check, the target is
no longer grafted and moves to an unoccupied space within 5
feet of the necrohulk.
A violet fungus necrohulk forms when a violet fungus colony infests
and animates an ample heap of decay. This necrohulk attacks prey
and spreads fungal spores for the colony.`}]},{slug:"vrock",name:"Vrock",meta:"Fiend (Demon) Large, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:15,mod:2,save:5},con:{score:18,mod:4,save:4},int:{score:8,mod:-1,save:-1},wis:{score:13,mod:1,save:4},cha:{score:8,mod:-1,save:2}},fields:{AC:"15",HP:"152 (16d10 + 64)",Speed:"40 ft., Fly 60 ft.",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 11",Languages:"Abyssal; telepathy 120 ft.",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Demonic Restoration. If the vrock dies outside the Abyss, its body
dissolves into ichor, and it gains a new body instantly, reviving
with all its Hit Points somewhere in the Abyss.
Magic Resistance. The vrock has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The vrock makes two Shred attacks.
Shred. Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Piercing
damage plus 10 (3d6) Poison damage.
Spores (Recharge 6). Constitution Saving Throw: DC 15, each
creature in a 20-foot Emanation originating from the vrock.
Failure: The target has the Poisoned condition and repeats the
save at the end of each of its turns, ending the efiect on itself
on a success. While Poisoned, the target takes 5 (1d10) Poison
damage at the start of each of its turns. Emptying a flask of Holy
Water on the target ends the efiect early.
Stunning Screech (1/Day). Constitution Saving Throw: DC 15, each
creature in a 20-foot Emanation originating from the vrock
(demons succeed automatically). Failure: 10 (3d6) Thunder
damage, and the target has the Stunned condition until the end
of the vrock's next turn.`}]},{slug:"vulture",name:"Vulture",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:10,mod:0,save:0},con:{score:13,mod:1,save:1},int:{score:2,mod:-4,save:-4},wis:{score:12,mod:1,save:1},cha:{score:4,mod:-3,save:-3}},fields:{AC:"10",HP:"5 (1d8 + 1)",Speed:"10 ft., Fly 50 ft.",Skills:"Perception +3",Senses:"Passive Perception 13",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"TRAITS",text:`Pack Tactics. The vulture has Advantage on an attack roll against
a creature if at least one of the vulture's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Beak. Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Piercing
damage.`}]},{slug:"warhorse",name:"Warhorse",meta:"Beast Large, Unaligned",type:"Beast",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:12,mod:1,save:3},cha:{score:7,mod:2,save:2}},fields:{AC:"11",HP:"19 (3d10 + 3)",Speed:"60 ft.",Senses:"Passive Perception 11",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +6, reach 5 ft. Hit: 9 (2d4 + 4)
Bludgeoning damage. If the horse moved at least 20 feet
straight toward the target immediately before the hit, the target
takes an extra 5 (2d4) Bludgeoning damage and, if it is Huge or
smaller, has the Prone condition.`}]},{slug:"warhorse-skeleton",name:"Warhorse Skeleton",meta:"Undead Large, Lawful Evil",type:"Undead",subtype:"",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:12,mod:1,save:1},con:{score:15,mod:2,save:2},int:{score:2,mod:-4,save:-4},wis:{score:8,mod:-1,save:-1},cha:{score:5,mod:-3,save:-3}},fields:{AC:"13",HP:"22 (3d10 + 6)",Speed:"60 ft.",Vulnerabilities:"Bludgeoning",Immunities:"Poison; Exhaustion, Poisoned",Senses:"Darkvision 60 ft., Passive Perception 9",Languages:"None",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Hooves. Melee Attack Roll: +6, reach 5 ft. Hit: 7 (1d6 + 4)
Bludgeoning damage. If the target is a Large or smaller creature
and the skeleton moved 20+ feet straight toward it immediately
before the hit, the target has the Prone condition.
Warhorse skeletons are obedient, supernatural steeds bearing the
rotted remains of the barding they wore in life. They're often ridden
by the corpses of their former riders.`}]},{slug:"warrior-commander",name:"Warrior Commander",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:21,mod:5,save:9},dex:{score:20,mod:5,save:9},con:{score:18,mod:4,save:8},int:{score:14,mod:2,save:2},wis:{score:16,mod:3,save:7},cha:{score:14,mod:2,save:2}},fields:{AC:"18",HP:"161 (19d8 + 76)",Speed:"30 ft.",Skills:"Athletics +9, Insight +7, Perception +7",Gear:"Greatsword, Longbow, Plate Armor",Senses:"Passive Perception 17",Languages:"Common plus one other language",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The warrior makes three attacks, using Greatsword
or Longbow in any combination.
Greatsword. Melee Attack Roll: +9, reach 5 ft. Hit: 19 (4d6 + 5)
Slashing damage. The warrior also creates one of the following
efiects:
Sap. The target has Disadvantage on its next attack roll before
the start of the warrior's next turn.
Maneuver. One ally who can see or hear the warrior can take a
Reaction to move up to half the ally's Speed without provoking
Opportunity Attacks.
Longbow. Ranged Attack Roll: +9, range 150/600 ft. Hit: 18 (3d8 +
5) Piercing damage, and the target's Speed decreases by 10 feet
until the end of the target's next turn.`},{title:"BONUS ACTIONS",text:`Tactical Charge. The warrior moves up to half its Speed straight
toward an enemy it can see without provoking Opportunity
Attacks.`},{title:"REACTIONS",text:`Counterattack. Trigger: The warrior is hit by an attack roll.
Response: The warrior adds 4 to its AC against that attack,
possibly causing it to miss. On a miss, the warrior can make one
Greatsword or Longbow attack against the attacker.
Skilled  in  both  combat  and  leadership,  warrior  commanders
overcome challenges through a combination of martial skill and
clever tactics.`}]},{slug:"warrior-infantry",name:"Warrior Infantry",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:13,mod:1,save:1},dex:{score:11,mod:0,save:0},con:{score:11,mod:0,save:0},int:{score:8,mod:-1,save:-1},wis:{score:11,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"9 (2d8)",Speed:"30 ft.",Gear:"Chain Shirt, Spear",Senses:"Passive Perception 10",Languages:"Common",CR:"1/8 (XP 25; PB +2)"},cr:"1/8 (XP 25; PB +2)",crValue:"1/8",xp:25,sections:[{title:"TRAITS",text:`Pack Tactics. The warrior has Advantage on an attack roll against
a creature if at least one of the warrior's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.`},{title:"ACTIONS",text:`Spear. Melee or Ranged Attack Roll: +3, reach 5 ft. or range 20/60
ft. Hit: 4 (1d6 + 1) Piercing damage.
Warrior infantry might be trainees or rank-and-file troops. They
are skilled at contending with commonplace, nonmagical threats.`}]},{slug:"warrior-veteran",name:"Warrior Veteran",meta:"Humanoid Medium or Small, Neutral",type:"Humanoid",subtype:"",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:16,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"17",HP:"65 (10d8 + 20)",Speed:"30 ft.",Skills:"Athletics +5, Perception +2",Gear:"Greatsword, Heavy Crossbow, Splint Armor",Senses:"Passive Perception 12",Languages:"Common plus one other language",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"ACTIONS",text:`Multiattack. The warrior makes two Greatsword or Heavy
Crossbow attacks.
Greatsword. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3)
Slashing damage.
Heavy Crossbow. Ranged Attack Roll: +3, range 100/400 ft. Hit: 12
(2d10 + 1) Piercing damage.`},{title:"REACTIONS",text:`Parry. Trigger: The warrior is hit by a melee attack roll while
holding a weapon. Response: The warrior adds 2 to its AC
against that attack, possibly causing it to miss.
Warrior veterans have participated in numerous battles and can
hold their own against lesser rivals and monsters.`}]},{slug:"water-elemental",name:"Water Elemental",meta:"Elemental Large, Neutral",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:18,mod:4,save:4},dex:{score:14,mod:2,save:2},con:{score:18,mod:4,save:4},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"14",HP:"114 (12d10 + 48)",Speed:"30 ft., Swim 90 ft.",Resistances:"Acid, Fire",Immunities:"Poison; Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 10",Languages:"Primordial (Aquan)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Freeze. If the elemental takes Cold damage, its Speed decreases
by 20 feet until the end of its next turn.
Water Form. The elemental can enter an enemy's space and stop
there. It can move through a space as narrow as 1 inch without
expending extra movement to do so.`},{title:"ACTIONS",text:`Multiattack. The elemental makes two Slam attacks.
Slam. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4)
Bludgeoning damage. If the target is a Medium or smaller
creature, it has the Prone condition.
Whelm (Recharge 4–6). Strength Saving Throw: DC 15, each
creature in the elemental's space. Failure: 22 (4d8 + 4)
Bludgeoning damage. If the target is a Large or smaller
creature, it has the Grappled condition (escape DC 14). Until the
grapple ends, the target has the Restrained condition, is
sufiocating unless it can breathe water, and takes 9 (2d8)
Bludgeoning damage at the start of each of the elemental's
turns. The elemental can grapple one Large creature or up to
two Medium or smaller creatures at a time with Whelm. As an
action, a creature within 5 feet of the elemental can pull a
creature out of it by succeeding on a DC 14 Strength (Athletics)
check. Success: Half damage only.`}]},{slug:"water-weird",name:"Water Weird",meta:"Elemental Large, Neutral",type:"Elemental",subtype:"",size:"Large",alignment:"Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:16,mod:3,save:3},con:{score:13,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"13",HP:"65 (10d10 + 10)",Speed:"5 ft., Swim 60 ft.",Resistances:"Fire",Immunities:"Poison; Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Blindsight 30 ft., Passive Perception 10",Languages:"Understands Primordial but can't speak",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Invisible in Water. The water weird has the Invisible condition
while fully immersed in water.
Water Bound. The water weird dies if it leaves the water to
which it is bound or if that water is destroyed.`},{title:"ACTIONS",text:`Surge. Melee Attack Roll: +5, reach 10 ft. Hit: 13 (3d6 + 3) Cold
damage. If the target is a Medium or smaller creature, it has the
Grappled condition (escape DC 13), and it has the Restrained
condition until the grapple ends.`}]},{slug:"weasel",name:"Weasel",meta:"Beast Tiny, Unaligned",type:"Beast",subtype:"",size:"Tiny",alignment:"Unaligned",abilities:{str:{score:3,mod:4,save:4},dex:{score:16,mod:3,save:3},con:{score:8,mod:1,save:1},int:{score:2,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:3,mod:4,save:4}},fields:{AC:"13",HP:"1 (1d4 - 1)",Speed:"30 ft., Climb 30 ft.",Skills:"Acrobatics +5, Perception +3, Stealth +5",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"None",CR:"0 (XP 10; PB +2)"},cr:"0 (XP 10; PB +2)",crValue:"0",xp:10,sections:[{title:"ACTIONS",text:"Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 1 Piercing damage."}]},{slug:"werebear",name:"Werebear",meta:"Monstrosity (Lycanthrope) Medium or Small, Neutral Good",type:"Monstrosity",subtype:"Lycanthrope",size:"Medium",alignment:"or Small, Neutral Good",abilities:{str:{score:19,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:17,mod:3,save:3},int:{score:11,mod:0,save:0},wis:{score:12,mod:1,save:1},cha:{score:12,mod:1,save:1}},fields:{AC:"15",HP:"135 (18d8 + 54)",Speed:"30 ft., 40 ft. (bear form only), Climb 30 ft. (bear form only)",Skills:"Perception +7",Gear:"Handaxes (4)",Senses:"Darkvision 60 ft., Passive Perception 17",Languages:"Common (can't speak in bear form)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"ACTIONS",text:`Multiattack. The werebear makes two attacks, using Handaxe or
Rend in any combination. It can replace one attack with a Bite
attack.
Bite (Bear or Hybrid Form Only). Melee Attack Roll: +7, reach 5 ft.
Hit: 17 (2d12 + 4) Piercing damage. If the target is a Humanoid,
it is subjected to the following efiect. Constitution Saving Throw:
DC 14. Failure: The target is cursed. If the cursed target drops to
0 Hit Points, it instead becomes a Werebear under the DM's
control and has 10 Hit Points. Success: The target is immune to
this werebear's curse for 24 hours.
Handaxe (Humanoid or Hybrid Form Only). Melee or Ranged Attack
Roll: +7, reach 5 ft or range 20/60 ft. Hit: 14 (3d6 + 4) Slashing
damage.
Rend (Bear or Hybrid Form Only). Melee Attack Roll: +7, reach 5 ft.
Hit: 13 (2d8 + 4) Slashing damage.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The werebear shape-shifts into a Large bear-
humanoid hybrid form or a Large bear, or it returns to its true
humanoid form. Its game statistics, other than its size, are the
same in each form. Any equipment it is wearing or carrying isn't
transformed.`}]},{slug:"wereboar",name:"Wereboar",meta:"Monstrosity (Lycanthrope) Medium or Small, Neutral Evil",type:"Monstrosity",subtype:"Lycanthrope",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:17,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:15,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"15",HP:"97 (15d8 + 30)",Speed:"30 ft., 40 ft. (boar form only)",Skills:"Perception +2",Gear:"Javelins (6)",Senses:"Passive Perception 12",Languages:"Common (can't speak in boar form)",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The wereboar makes two attacks, using Javelin or
Tusk in any combination. It can replace one attack with a Gore
attack.
Gore (Boar or Hybrid Form Only). Melee Attack Roll: +5, reach 5 ft.
Hit: 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it
is subjected to the following efiect. Constitution Saving Throw:
DC 12. Failure: The target is cursed. If the cursed target drops to
0 Hit Points, it instead becomes a Wereboar under the DM's
control and has 10 Hit Points. Success: The target is immune to
this wereboar's curse for 24 hours.
Javelin (Humanoid or Hybrid Form Only). Melee or Ranged Attack
Roll: +5, reach 5 ft. or range 30/120 ft. Hit: 13 (3d6 + 3) Piercing
damage.
Tusk (Boar or Hybrid Form Only). Melee Attack Roll: +5, reach 5 ft.
Hit: 10 (2d6 + 3) Piercing damage. If the target is a Medium or
smaller creature and the wereboar moved 20+ feet straight
toward it immediately before the hit, the target takes an extra 7
(2d6) Piercing damage and has the Prone condition.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The wereboar shape-shifts into a Medium boar-
humanoid hybrid or a Small boar, or it returns to its true
humanoid form. Its game statistics, other than its size, are the
same in each form. Any equipment it is wearing or carrying isn't
transformed.`}]},{slug:"wererat",name:"Wererat",meta:"Monstrosity (Lycanthrope) Medium or Small, Lawful Evil",type:"Monstrosity",subtype:"Lycanthrope",size:"Medium",alignment:"or Small, Lawful Evil",abilities:{str:{score:10,mod:0,save:0},dex:{score:16,mod:3,save:3},con:{score:12,mod:1,save:1},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"60 (11d8 + 11)",Speed:"30 ft., Climb 30 ft.",Skills:"Perception +4, Stealth +5",Gear:"Hand Crossbow",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Common (can't speak in rat form)",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"ACTIONS",text:`Multiattack. The wererat makes two attacks, using Scratch or
Hand Crossbow in any combination. It can replace one attack
with a Bite attack.
Bite (Rat or Hybrid Form Only). Melee Attack Roll: +5, reach 5 ft.
Hit: 8 (2d4 + 3) Piercing damage. If the target is a Humanoid, it is
subjected to the following efiect. Constitution Saving Throw: DC
11. Failure: The target is cursed. If the cursed target drops to 0
Hit Points, it instead becomes a Wererat under the DM's control
and has 10 Hit Points. Success: The target is immune to this
wererat's curse for 24 hours.
Scratch. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing
damage.
Hand Crossbow (Humanoid or Hybrid Form Only). Ranged Attack
Roll: +5, range 30/120 ft. Hit: 6 (1d6 + 3) Piercing damage.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The wererat shape-shifts into a Medium rat-
humanoid hybrid or a Small rat, or it returns to its true
humanoid form. Its game statistics, other than its size, are the
same in each form. Any equipment it is wearing or carrying isn't
transformed.`}]},{slug:"weretiger",name:"Weretiger",meta:"Monstrosity (Lycanthrope) Medium or Small, Neutral",type:"Monstrosity",subtype:"Lycanthrope",size:"Medium",alignment:"or Small, Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:15,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:13,mod:1,save:1},cha:{score:11,mod:0,save:0}},fields:{AC:"12",HP:"120 (16d8 + 48)",Speed:"30 ft., 40 ft. (tiger form only)",Skills:"Perception +5, Stealth +4",Gear:"Longbow",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Common (can't speak in tiger form)",CR:"4 (XP 1 100; PB +2)"},cr:"4 (XP 1 100; PB +2)",crValue:"4",xp:1100,sections:[{title:"ACTIONS",text:`Multiattack. The weretiger makes two attacks, using Scratch or
Longbow in any combination. It can replace one attack with a
Bite attack.
Bite (Tiger or Hybrid Form Only). Melee Attack Roll: +5, reach 5 ft.
Hit: 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it
is subjected to the following efiect. Constitution Saving Throw:
DC 13. Failure: The target is cursed. If the cursed target drops to
0 Hit Points, it instead becomes a Weretiger under the DM's
control and has 10 Hit Points. Success: The target is immune to
this weretiger's curse for 24 hours.
Scratch. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing
damage.
Longbow (Humanoid or Hybrid Form Only). Ranged Attack Roll: +4,
range 150/600 ft. Hit: 11 (2d8 + 2) Piercing damage.`},{title:"BONUS ACTIONS",text:`Prowl (Tiger or Hybrid Form Only). The weretiger moves up to its
Speed without provoking Opportunity Attacks. At the end of this
movement, the weretiger can take the Hide action.
Shape-Shift. The weretiger shape-shifts into a Large tiger-
humanoid hybrid or a Large tiger, or it returns to its true
humanoid form. Its game statistics, other than its size, are the
same in each form. Any equipment it is wearing or carrying isn't
transformed.`}]},{slug:"werewolf",name:"Werewolf",meta:"Monstrosity (Lycanthrope) Medium or Small, Chaotic Evil",type:"Monstrosity",subtype:"Lycanthrope",size:"Medium",alignment:"or Small, Chaotic Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:14,mod:2,save:2},int:{score:10,mod:0,save:0},wis:{score:11,mod:0,save:0},cha:{score:10,mod:0,save:0}},fields:{AC:"15",HP:"71 (11d8 + 22)",Speed:"40 ft. (wolf form only)",Skills:"Perception +4, Stealth +4",Gear:"Longbow",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Common (can't speak in wolf form)",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Pack Tactics. The werewolf has Advantage on an attack roll
against a creature if at least one of the werewolf's allies is
within 5 feet of the creature and the ally doesn't have the
Incapacitated condition.`},{title:"ACTIONS",text:`Multiattack. The werewolf makes two attacks, using Scratch or
Longbow in any combination. It can replace one attack with a
Bite attack.
Bite (Wolf or Hybrid Form Only). Melee Attack Roll: +5, reach 5 ft.
Hit: 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it
is subjected to the following efiect. Constitution Saving Throw:
DC 12. Failure: The target is cursed. If the cursed target drops to
0 Hit Points, it instead becomes a Werewolf under the DM's
control and has 10 Hit Points. Success: The target is immune to
this werewolf's curse for 24 hours.
Scratch. Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing
damage.
Longbow (Humanoid or Hybrid Form Only). Ranged Attack Roll: +4,
range 150/600 ft. Hit: 11 (2d8 + 2) Piercing damage.`},{title:"BONUS ACTIONS",text:`Shape-Shift. The werewolf shape-shifts into a Large wolf-
humanoid hybrid or a Medium wolf, or it returns to its true
humanoid form. Its game statistics, other than its size, are the
same in each form. Any equipment it is wearing or carrying isn't
transformed.`}]},{slug:"white-dragon-wyrmling",name:"White Dragon Wyrmling",meta:"Dragon (Chromatic) Medium, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:14,mod:2,save:2},dex:{score:10,mod:0,save:2},con:{score:14,mod:2,save:2},int:{score:5,mod:-3,save:-3},wis:{score:10,mod:0,save:2},cha:{score:11,mod:0,save:0}},fields:{AC:"16",HP:"32 (5d8 + 10)",Speed:"30 ft., Burrow 15 ft., Fly 60 ft., Swim 30 ft.",Skills:"Perception +4, Stealth +2",Immunities:"Cold",Senses:"Blindsight 10 ft., Darkvision 60 ft., Passive Perception 14",Languages:"Draconic",CR:"2 (XP 450; PB +2)"},cr:"2 (XP 450; PB +2)",crValue:"2",xp:450,sections:[{title:"TRAITS",text:`Ice Walk. The dragon can move across and climb icy surfaces
Terrain composed of ice or snow doesn't cost it extra
movement.`},{title:"ACTIONS",text:`Multiattack. The dragon makes two Rend attacks.
Rend. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Slashing
damage plus 2 (1d4) Cold damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 12,
each creature in a 15-foot Cone. Failure: 22 (5d8) Cold damage.
Success: Half damage.
Among  the  most  primal  chromatic  dragons,  white  dragons
prioritize survival over all. Life is harsh and uncertain in the arctic
expanses,  glacial  heights,  and  frozen  seas  where  these  dragons
dwell. White dragons fiercely protect their territories, scouring the
frigid  regions  for  food  and  evidence  of  trespassers.  Most  white
dragons ignore the plots of smaller creatures and other dragons,
concerning themselves only with their own survival. White dragons
create lairs to defend themselves from other deadly arctic creatures
and  from  dangerous  natural  conditions.  Within  these  shelters,
white  dragons  hoard  testaments  to  their  superiority,  such  as
monstrous skulls, the gear of defeated rivals, and curiosities that
capture their interest. To protect such treasure, white dragons coax
ice to form over their hoards or sink their wealth in frigid pools.
For white dragons, each piece of treasure embodies a victory—the
details of which inflate as these dragons age.`}]},{slug:"wight",name:"Wight",meta:"Undead Medium, Neutral Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:14,mod:2,save:2},con:{score:16,mod:3,save:3},int:{score:10,mod:0,save:0},wis:{score:13,mod:1,save:1},cha:{score:15,mod:2,save:2}},fields:{AC:"14",HP:"82 (11d8 + 33)",Speed:"30 ft.",Skills:"Perception +3, Stealth +4",Resistances:"Necrotic",Immunities:"Poison; Exhaustion, Poisoned",Gear:"Studded Leather Armor",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Common plus one other language",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Sunlight Sensitivity. While in sunlight, the wight has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Multiattack. The wight makes two attacks, using Necrotic Sword
or Necrotic Bow in any combination. It can replace one attack
with a use of Life Drain.
Necrotic Sword. Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2)
Slashing damage plus 4 (1d8) Necrotic damage.
Necrotic Bow. Ranged Attack Roll: +4, range 150/600 ft. Hit: 6 (1d8
+ 2) Piercing damage plus 4 (1d8) Necrotic damage.
Life Drain. Constitution Saving Throw: DC 13, one creature within
5 feet. Failure: 6 (1d8 + 2) Necrotic damage, and the target's Hit
Point maximum decreases by an amount equal to the damage
taken. A Humanoid slain by this attack rises 24 hours later as a
Zombie under the wight's control, unless the Humanoid is
restored to life or its body is destroyed. The wight can have no
more than twelve zombies under its control at a time.
WILL-O'-WISP
Undead Tiny, Chaotic Evil
AC 19
HP 27 (11d4)
Speed 5 ft., Fly 50 ft. (hover)
MOD
SAVE
MOD
SAVE
MOD
SAVE
STR
1
-5
-5
DEX
28
+9
+9
CON 10
+0
+0
INT
13
+1
+1
WIS
14
+2
+2
CHA
11
+0
+0
Resistances Acid, Bludgeoning, Cold, Fire, Necrotic, Piercing,
Slashing
Immunities Lightning, Poison; Exhaustion, Grappled, Paralyzed,
Petriffed, Poisoned, Prone, Restrained, Unconscious
Senses Darkvision 120 ft., Passive Perception 12
Languages Common plus one other language
CR 2 (XP 450; PB +2)`},{title:"TRAITS",text:`Ephemeral. The wisp can't wear or carry anything.
Illumination. The wisp sheds Bright Light in a 20-foot radius and
Dim Light for an additional 20 feet.
Incorporeal Movement. The wisp can move through other
(1d10) Force damage if it ends its turn inside an object.`},{title:"ACTIONS",text:`Shock. Melee Attack Roll: +4, reach 5 ft. Hit: 11 (2d8 + 2) Lightning
damage.`},{title:"BONUS ACTIONS",text:`Consume Life. Constitution Saving Throw: DC 10, one living
creature the wisp can see within 5 feet that has 0 Hit Points.
Failure: The target dies, and the wisp regains 10 (3d6) Hit Points.
Vanish. The wisp and its light have the Invisible condition until
the wisp's Concentration ends on this efiect, which ends early
immediately after the wisp makes an attack roll or uses
Consume Life.`}]},{slug:"winged-kobold",name:"Winged Kobold",meta:"Dragon Small, Neutral",type:"Dragon",subtype:"",size:"Small",alignment:"Neutral",abilities:{str:{score:7,mod:-2,save:-2},dex:{score:16,mod:3,save:3},con:{score:9,mod:-1,save:-1},int:{score:8,mod:-1,save:-1},wis:{score:7,mod:-2,save:-2},cha:{score:8,mod:-1,save:-1}},fields:{AC:"15",HP:"10 (4d6 - 4)",Speed:"30 ft., Fly 30 ft.",Senses:"Darkvision 60 ft., Passive Perception 8",Languages:"Common, Draconic",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Pack Tactics. The kobold has Advantage on an attack roll against
a creature if at least one of the kobold's allies is within 5 feet of
the creature and the ally doesn't have the Incapacitated
condition.
Sunlight Sensitivity. While in sunlight, the kobold has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Dragon-Tooth Blade. Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 +
3) Piercing damage.
Chromatic Spittle. Ranged Attack Roll: +5, range 30 ft. Hit: 6 (1d6 +
3) damage of a type chosen by the kobold: Acid, Cold, Fire,
Lightning, or Poison.
Cowardly cousins to chromatic  dragons,  kobolds serve  draconic
overlords as warriors and servants. These scrappy menaces mimic
the behaviors of their dragon masters. Though their small stature
and recklessness make kobolds poor imitators of dragons, what
they lack in ferocity they make up for in zeal and ingenuity. They
are  especially  adept  at  creating  traps  and  setting  ambushes.
Kobolds' scales resemble those of chromatic dragons that live near
their  warrens.  Rarely,  kobolds  possess  features  evocative  of
metallic dragons or other dragon-like creatures.
Some kobolds are born with wings. Called urds by others of their
kind,  these  kobolds  are  thought  to  be  blessed  by  a  dragon  or
Tiamat, the Dragon Queen. Despite their favored status, winged
kobolds  are  as  cowardly  as  their  brethren  and  use  their  flight
mostly to keep out of reach of their foes.`}]},{slug:"winter-wolf",name:"Winter Wolf",meta:"Monstrosity Large, Neutral Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:14,mod:2,save:2},int:{score:7,mod:-2,save:-2},wis:{score:12,mod:1,save:1},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"75 (10d10 + 20)",Speed:"50 ft.",Skills:"Perception +5, Stealth +5",Immunities:"Cold",Senses:"Passive Perception 15",Languages:"Common, Giant",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Pack Tactics. The wolf has Advantage on an attack roll against a
creature if at least one of the wolf's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing
damage. If the target is a Large or smaller creature, it has the
Prone condition.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 12,
each creature in a 15-foot Cone. Failure: 18 (4d8) Cold damage.
Success: Half damage.`}]},{slug:"wolf",name:"Wolf",meta:"Beast Medium, Unaligned",type:"Beast",subtype:"",size:"Medium",alignment:"Unaligned",abilities:{str:{score:14,mod:2,save:2},dex:{score:15,mod:2,save:2},con:{score:12,mod:1,save:1},int:{score:3,mod:4,save:4},wis:{score:12,mod:1,save:1},cha:{score:6,mod:2,save:2}},fields:{AC:"12",HP:"11 (2d8 + 2)",Speed:"40 ft.",Skills:"Perception +5, Stealth +4",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"None",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Pack Tactics. The wolf has Advantage on attack rolls against a
creature if at least one of the wolf's allies is within 5 feet of the
creature and the ally doesn't have the Incapacitated condition.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing
damage. If the target is a Medium or smaller creature, it has the
Prone condition.`}]},{slug:"worg",name:"Worg",meta:"Fey Large, Neutral Evil",type:"Fey",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:13,mod:1,save:1},con:{score:13,mod:1,save:1},int:{score:7,mod:-2,save:-2},wis:{score:11,mod:0,save:0},cha:{score:8,mod:-1,save:-1}},fields:{AC:"13",HP:"26 (4d10 + 4)",Speed:"50 ft.",Skills:"Perception +4",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Goblin, Worg",CR:"1/2 (XP 100; PB +2)"},cr:"1/2 (XP 100; PB +2)",crValue:"1/2",xp:100,sections:[{title:"ACTIONS",text:`Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing
damage, and the next attack roll made against the target before
the start of the worg's next turn has Advantage.
Packs  of  worgs  roam  harsh  frontiers  and  cursed  lands.  They
sometimes conspire with goblinoids and gnolls and might serve
them as mounts.`}]},{slug:"wraith",name:"Wraith",meta:"Undead Medium or Small, Neutral Evil",type:"Undead",subtype:"",size:"Medium",alignment:"or Small, Neutral Evil",abilities:{str:{score:6,mod:-2,save:-2},dex:{score:16,mod:3,save:3},con:{score:16,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:15,mod:2,save:2}},fields:{AC:"13",HP:"67 (9d8 + 27)",Speed:"5 ft., Fly 60 ft. (hover)",Resistances:"Acid, Bludgeoning, Cold, Fire, Piercing, Slashing",Immunities:"Necrotic, Poison; Charmed, Exhaustion, Grappled, Paralyzed, Petriffed, Poisoned, Prone, Restrained, Unconscious",Senses:"Darkvision 60 ft., Passive Perception 12",Languages:"Common plus two other languages",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Incorporeal Movement. The wraith can move through other
(1d10) Force damage if it ends its turn inside an object.
Sunlight Sensitivity. While in sunlight, the wraith has
Disadvantage on ability checks and attack rolls.`},{title:"ACTIONS",text:`Life Drain. Melee Attack Roll: +6, reach 5 ft. Hit: 21 (4d8 + 3)
Necrotic damage. If the target is a creature, its Hit Point
maximum decreases by an amount equal to the damage taken.
Create Specter. The wraith targets a Humanoid corpse within 10
feet of itself that has been dead for no longer than 1 minute.
The target's spirit rises as a Specter in the space of its corpse or
in the nearest unoccupied space. The specter is under the
wraith's control. The wraith can have no more than seven
specters under its control at a time.
Wraiths are spectral evils, life-hungry embodiments of malice and
terror. Arising from the souls of tyrants, moments of catastrophic
pain,  or  magical  blasphemies,  wraiths  spread  suffering  and  the
torment of undeath. Humanoids that die near a wraith might be
entrapped  by  the  foul  spirit  and  rise  as  specters  bound  to  the
wraith's sinister will. Wraiths lurk in forgotten dungeons, accursed
ruins,  or  lands  influenced  by  sinister  planes  of  existence.  Such
haunted domains might bear hints of the tragedies or foul magic
that brought the wraiths into being. Wraiths might arise from a
single powerfully evil soul or other baleful forces.`}]},{slug:"wyvern",name:"Wyvern",meta:"Dragon Large, Unaligned",type:"Dragon",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:19,mod:4,save:4},dex:{score:10,mod:0,save:0},con:{score:16,mod:3,save:3},int:{score:5,mod:-3,save:-3},wis:{score:12,mod:1,save:1},cha:{score:6,mod:-2,save:-2}},fields:{AC:"14",HP:"127 (15d10 + 45)",Speed:"30 ft., Fly 80 ft.",Skills:"Perception +4",Senses:"Darkvision 120 ft., Passive Perception 14",Languages:"—",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The wyvern makes one Bite attack and one Sting
attack.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Piercing
damage.
Sting. Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Piercing
damage plus 24 (7d6) Poison damage, and the target has the
Poisoned condition until the start of the wyvern's next turn.`}]},{slug:"xorn",name:"Xorn",meta:"Elemental Medium, Neutral",type:"Elemental",subtype:"",size:"Medium",alignment:"Neutral",abilities:{str:{score:17,mod:3,save:3},dex:{score:10,mod:0,save:0},con:{score:22,mod:6,save:6},int:{score:11,mod:0,save:0},wis:{score:10,mod:0,save:0},cha:{score:11,mod:0,save:0}},fields:{AC:"19",HP:"84 (8d8 + 48)",Speed:"20 ft., Burrow 20 ft.",Skills:"Perception +6, Stealth +6",Immunities:"Poison; Paralyzed, Petriffed, Poisoned",Senses:"Darkvision 60 ft., Tremorsense 60 ft., Passive Perception",Languages:"Primordial (Terran)",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Earth Glide. The xorn can burrow through nonmagical,
unworked earth and stone. While doing so, the xorn doesn't
disturb the material it moves through.
Treasure Sense. The xorn can pinpoint the location of precious
metals and stones within 60 feet of itself.`},{title:"ACTIONS",text:`Multiattack. The xorn makes one Bite attack and three Claw
attacks.
Bite. Melee Attack Roll: +6, reach 5 ft. Hit: 17 (4d6 + 3) Piercing
damage.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d10 + 3) Slashing
damage.`},{title:"BONUS ACTIONS",text:`Charge. The xorn moves up to its Speed or Burrow Speed
straight toward an enemy it can sense.`}]},{slug:"yeti",name:"Yeti",meta:"Monstrosity Large, Chaotic Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:16,mod:3,save:3},int:{score:8,mod:-1,save:-1},wis:{score:12,mod:1,save:1},cha:{score:7,mod:-2,save:-2}},fields:{AC:"12",HP:"51 (6d10 + 18)",Speed:"40 ft., Climb 40 ft.",Skills:"Perception +5, Stealth +5",Immunities:"Cold",Senses:"Darkvision 60 ft., Passive Perception 15",Languages:"Yeti",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Fear of Fire. If the yeti takes Fire damage, it has Disadvantage on
attack rolls and ability checks until the end of its next turn.`},{title:"ACTIONS",text:`Multiattack. The yeti can use its Chilling Gaze and makes two
attacks, using Claw or Ice Throw in any combination.
Claw. Melee Attack Roll: +6, reach 5 ft. Hit: 7 (1d6 + 4) Slashing
damage plus 3 (1d6) Cold damage.
Ice Throw. Ranged Attack Roll: +6, range 30/120 ft. Hit: 6 (1d4 + 4)
Bludgeoning damage plus 2 (1d4) Cold damage.
Chilling Gaze. Constitution Saving Throw: DC 13, one creature the
yeti can see within 30 feet. Failure: 5 (2d4) Cold damage, and the
target has the Paralyzed condition until the start of the yeti's
next turn unless the target has Immunity to Cold damage.
Success: The target is immune to the Chilling Gaze of all yetis
(but not abominable yetis) for 1 hour.
Yetis  hunt  alone  or  in  small  family  groups.  They  avoid  the
settlements of other creatures but lurk near paths frequented by
traders and herders to pick off unsuspecting prey. Yetis make their
homes in icy caves near frozen peaks and at extremes where few
dare travel.`}]},{slug:"yochlol",name:"Yochlol",meta:"Fiend (Demon) Medium, Chaotic Evil",type:"Fiend",subtype:"Demon",size:"Medium",alignment:"Chaotic Evil",abilities:{str:{score:15,mod:2,save:2},dex:{score:19,mod:4,save:8},con:{score:18,mod:4,save:4},int:{score:13,mod:1,save:5},wis:{score:15,mod:2,save:6},cha:{score:17,mod:3,save:7}},fields:{AC:"15",HP:"153 (18d8 + 72)",Speed:"30 ft., Climb 30 ft.",Skills:"Deception +11, Insight +6",Resistances:"Cold, Fire, Lightning",Immunities:"Poison; Poisoned",Senses:"Darkvision 120 ft., Passive Perception 12",Languages:"Abyssal, Elvish, Undercommon",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:`Demonic Restoration. If the yochlol dies outside the Abyss, its
body dissolves, and it gains a new body instantly, reviving with
all its Hit Points in the Abyss.
Magic Resistance. The yochlol has Advantage on saving throws
against spells and other magical efiects.
along ceilings, without needing to make an ability check.
Web Walker. The yochlol ignores movement restrictions caused
by webs.`},{title:"ACTIONS",text:`Multiattack. The yochlol makes two Caustic Lash attacks, and it
can use Spellcasting to cast Web or Dominate Person if available.
Caustic Lash. Melee or Ranged Attack Roll: +8, reach 10 ft. or
range 120 ft. Hit: 25 (6d6 + 4) Acid damage.
Spellcasting. The yochlol casts one of the following spells,
requiring no Material components and using Charisma as the
spellcasting ability (spell save DC 15):
At will: Detect Thoughts, Gaseous Form (self only), Web
1/day: Dominate Person`},{title:"BONUS ACTIONS",text:`Shape-Shift. The yochlol shape-shifts into a Medium Humanoid
or a Medium spider or back into its true form. Its game
statistics are the same in each form. Any equipment it is
wearing or carrying isn't transformed.`},{title:"REACTIONS",text:`Toxic Escape. Trigger: The yochlol is hit by an attack roll.
Response: The yochlol halves the attack's damage to itself
(round down), and it teleports to an unoccupied space it can see
within 30 feet of itself. Constitution Saving Throw: DC 15, each
creature within 5 feet of the yochlol's destination space. Failure:
The target has the Poisoned condition until the end of its next
turn. While Poisoned, it has the Incapacitated condition.`}]},{slug:"young-black-dragon",name:"Young Black Dragon",meta:"Dragon (Chromatic) Large, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:14,mod:2,save:5},con:{score:17,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:3},cha:{score:15,mod:2,save:2}},fields:{AC:"18",HP:"127 (15d10 + 45)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Perception +6, Stealth +5",Immunities:"Acid",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +7, reach 10 ft. Hit: 9 (2d4 + 4) Slashing
damage plus 3 (1d6) Acid damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 14, each
creature in a 30-foot-long, 5-foot-wide Line. Failure: 49 (14d6)
Acid damage. Success: Half damage.
Black dragons delight in suffering and ruin. While other chromatic
dragons scheme for power and wealth, these dragons seek to tear
down all they see and rule over what remains. Black dragons are
terrifying  creatures  with  curved  horns  and  withered  visages
suggestive  of  fiendish  skulls.  They  typically  inhabit  stagnant
swamps, crumbling ruins, or places of magical or environmental
corruption.  Their  acid  breath  scars  their  domains,  eroding  the
features  from  ancient  statues  and  leaving  nature  with  festering
wounds. Black dragons hoard tarnished symbols of hope and relics
of fallen empires. The more sought-after the treasure, the more
black dragons prize it—particularly if they were responsible for it
being lost.`}]},{slug:"young-blue-dragon",name:"Young Blue Dragon",meta:"Dragon (Chromatic) Large, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:21,mod:5,save:5},dex:{score:10,mod:0,save:4},con:{score:19,mod:4,save:4},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:5},cha:{score:17,mod:3,save:3}},fields:{AC:"18",HP:"152 (16d10 + 64)",Speed:"40 ft., Burrow 20 ft., Fly 80 ft.",Skills:"Perception +9, Stealth +4",Immunities:"Lightning",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +9, reach 10 ft. Hit: 12 (2d6 + 5) Slashing
damage plus 5 (1d10) Lightning damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 16,
each creature in a 60-foot-long, 5-foot-wide Line. Failure: 55
(10d10) Lightning damage. Success: Half damage.
Arrogant and imperious, blue dragons are chromatic dragons that
crave  control  and  collect  followers  like  other  dragons  hoard
treasure.  They  seek  to  transform  their  territories  into  empires,
domains to be feared by nations. Blue dragons have sharp features
with piercing horns and scales that range from sapphire to the
shades  of  stormy  skies.  They  dwell  in  deserts  and  badlands,
particularly  regions  with  dramatic  spires  from  whose  tops  they
might see for miles. They seek lairs near sites of symbolic power,
such as the abandoned fortresses of giants, the colossi of fallen
empires,  or  monuments  raised  by  their  followers.  Regalia  of
rulership and artistic masterpieces fill blue dragons' hoards. These
dragons have no interest in treasures that are common or flawed,
preferring one-of-a-kind gemstones, the crowns of fallen royals,
and magic items capable of spreading the dragons' influence.`}]},{slug:"young-brass-dragon",name:"Young Brass Dragon",meta:"Dragon (Metallic) Large, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Large",alignment:"Chaotic Good",abilities:{str:{score:19,mod:4,save:4},dex:{score:10,mod:0,save:3},con:{score:17,mod:3,save:3},int:{score:12,mod:1,save:1},wis:{score:11,mod:0,save:3},cha:{score:15,mod:2,save:2}},fields:{AC:"17",HP:"110 (13d10 + 39)",Speed:"40 ft., Burrow 20 ft., Fly 80 ft.",Skills:"Perception +6, Persuasion +5, Stealth +3",Immunities:"Fire",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can
replace two attacks with a use of Sleep Breath.
Rend. Melee Attack Roll: +7, reach 10 ft. Hit: 15 (2d10 + 4)
Slashing damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 14, each
creature in a 40-foot-long, 5-foot-wide Line. Failure: 38 (11d6)
Fire damage. Success: Half damage.
Sleep Breath. Constitution Saving Throw: DC 14, each creature in a
30-foot Cone. Failure: The target has the Incapacitated condition
until the end of its next turn, at which point it repeats the save.
Second Failure: The target has the Unconscious condition for 1
minute. This efiect ends for the target if it takes damage or a
creature within 5 feet of it takes an action to wake it.
Gregarious and outgoing, brass dragons relish sharing knowledge
and stories. Although these metallic dragons favor arid lands, they
cheerfully  journey  considerable  distances  to  visit  friendly
creatures, pass on what they've learned, and collect news. Though
good  natured,  brass  dragons  don't  shirk  from  combat  when
necessary, thwarting foes with magical sleep and searing them with
flame. Brass dragons favor warm climes, particularly steppes and
rocky  or  sandy  deserts,  and  they  usually  dwell  near  prominent
crossroads  or  oases  that  regularly  draw  visitors.  They  enjoy
adopting  Humanoid  forms,  disguising  themselves  as  traveling
merchants, scholars, storytellers, or anyone else invested in others'
stories. Brass  dragons collect eclectic  objects. While such items
might seem like knickknacks, each is part of a story—perhaps a
nostalgic memento or evidence of a tale passed into myth. An old
friend's hat and the crown of the last ruler of a forgotten dynasty
could occupy the same shelf in a brass dragon's hoard.`}]},{slug:"young-bronze-dragon",name:"Young Bronze Dragon",meta:"Dragon (Metallic) Large, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Large",alignment:"Lawful Good",abilities:{str:{score:21,mod:5,save:5},dex:{score:10,mod:0,save:3},con:{score:19,mod:4,save:4},int:{score:14,mod:2,save:2},wis:{score:13,mod:1,save:4},cha:{score:17,mod:3,save:3}},fields:{AC:"17",HP:"142 (15d10 + 60)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Insight +4, Perception +7, Stealth +3",Immunities:"Lightning",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can
replace one attack with a use of Repulsion Breath.
Rend. Melee Attack Roll: +8, reach 10 ft. Hit: 16 (2d10 + 5)
Slashing damage.
Lightning Breath (Recharge 5–6). Dexterity Saving Throw: DC 15,
each creature in a 60-foot-long, 5-foot-wide Line. Failure: 49
(9d10) Lightning damage. Success: Half damage.
Repulsion Breath. Strength Saving Throw: DC 15, each creature in
a 30-foot Cone. Failure: The target is pushed up to 40 feet
straight away from the dragon and has the Prone condition.
Where  bronze dragons dwell, wonders flourish. Imaginative  yet
mindful, these metallic dragons work toward greatness and help
others achieve all they can. They strive to preserve innovations,
from the works of past civilizations to new discoveries, and they
share such works widely. When dealing with shorter-lived beings,
bronze dragons prefer to win them over through conversation and
cultivation, but they don't shy from battle when villains keep others
from achieving their potential. Bronze dragons enjoy the power and
endless possibilities of the sea, and they often make their lairs in
places of natural beauty or communities they wish to preserve.
Within their dwellings, bronze dragons hoard things they believe
will  be  useful  one  day.  They  salvage  treasure  lost  to  the  sea,
reclaiming wealth or sunken ships.`}]},{slug:"young-copper-dragon",name:"Young Copper Dragon",meta:"Dragon (Metallic) Large, Chaotic Good",type:"Dragon",subtype:"Metallic",size:"Large",alignment:"Chaotic Good",abilities:{str:{score:19,mod:4,save:4},dex:{score:12,mod:1,save:4},con:{score:17,mod:3,save:3},int:{score:16,mod:3,save:3},wis:{score:13,mod:1,save:4},cha:{score:15,mod:2,save:2}},fields:{AC:"17",HP:"119 (14d10 + 42)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Deception +5, Perception +7, Stealth +4",Immunities:"Acid",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can
replace one attack with a use of Slowing Breath.
Rend. Melee Attack Roll: +7, reach 10 ft. Hit: 15 (2d10 + 4)
Slashing damage.
Acid Breath (Recharge 5–6). Dexterity Saving Throw: DC 14, each
creature in a 40-foot-long, 5-foot-wide Line. Failure: 40 (9d8)
Acid damage. Success: Half damage.
Slowing Breath. Constitution Saving Throw: DC 14, each creature
in a 30-foot Cone. Failure: The target can't take Reactions; its
Speed is halved; and it can take either an action or a Bonus
Action on its turn, not both. This efiect lasts until the end of its
next turn.
Relentlessly friendly and curious, most copper dragons view the
world  as  a  place  of  endless  wonder  and  possibility.  These
gregarious dragons are fonts of patience, hospitality, and humor,
and they seek to improve the lives—or, at least, the mood—of those
they interact with. If forced to fight to defend themselves or their
friends,  these  dragons  favor  using  their  slowing  breath  and
physical attacks to subdue antagonists. Only in cases of extreme
peril  or  emotion  do  they  use  their  deadly  acid  breath.  Copper
dragons typically live in caverns amid picturesque hills and rock
formations—particularly  those  that  are  prominent  landmarks.
These  dragons  collect  gifts,  though  they  have  little  interest  in
treasure without meaning, no matter how valuable it is. To them,
thoughtfully  given  presents  and  the  feelings  or  memories  they
symbolize are more important than masterpieces or magical relics.`}]},{slug:"young-gold-dragon",name:"Young Gold Dragon",meta:"Dragon (Metallic) Large, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Large",alignment:"Lawful Good",abilities:{str:{score:23,mod:6,save:6},dex:{score:14,mod:2,save:6},con:{score:21,mod:5,save:5},int:{score:16,mod:3,save:3},wis:{score:13,mod:1,save:5},cha:{score:20,mod:5,save:5}},fields:{AC:"18",HP:"178 (17d10 + 85)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Insight +5, Perception +9, Persuasion +9, Stealth +6",Immunities:"Fire",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can
replace one attack with a use of Weakening Breath.
Rend. Melee Attack Roll: +10, reach 10 ft. Hit: 17 (2d10 + 6)
Slashing damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 17, each
creature in a 30-foot Cone. Failure: 55 (10d10) Fire damage.
Success: Half damage.
Weakening Breath. Strength Saving Throw: DC 17, each creature
that isn't currently afiected by this breath in a 30-foot Cone.
Failure: The target has Disadvantage on Strength-based D20
Tests and subtracts 3 (1d6) from its damage rolls. It repeats the
save at the end of each of its turns, ending the efiect on itself
on a success. After 1 minute, it succeeds automatically.
Gold dragons work to make the world a better place. The most
powerful  of  the  metallic  dragons,  these  awe-inspiring  dragons
strive to protect that which is good and bend fate toward a brighter
future. Their kind dispositions don't prevent gold dragons from
engaging  in  combat  when  necessary,  though,  and  they  exhale
brilliant  flames  and  weakening  magic  to  rout  their  foes.  Gold
dragons favor grasslands and pristine forests, frequently dwelling
near awe-inspiring natural wonders or guarding monuments from
ancient civilizations. In their lairs, gold dragons hoard coins and
gems, but they frequently put their treasure to use in pursuit of
greater goals. They often use their riches to buy rare lore books,
pay informants, or patronize idealistic adventurers.`}]},{slug:"young-green-dragon",name:"Young Green Dragon",meta:"Dragon (Chromatic) Large, Lawful Evil",type:"Dragon",subtype:"Chromatic",size:"Large",alignment:"Lawful Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:12,mod:1,save:4},con:{score:17,mod:3,save:3},int:{score:16,mod:3,save:3},wis:{score:13,mod:1,save:4},cha:{score:15,mod:2,save:2}},fields:{AC:"18",HP:"136 (16d10 + 48)",Speed:"40 ft., Fly 80 ft., Swim 40 ft.",Skills:"Deception +5, Perception +7, Stealth +4",Immunities:"Poison; Poisoned",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"8 (XP 3 900; PB +3)"},cr:"8 (XP 3 900; PB +3)",crValue:"8",xp:3900,sections:[{title:"TRAITS",text:"Amphibious. The dragon can breathe air and water."},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing
damage plus 7 (2d6) Poison damage.
Poison Breath (Recharge 5–6). Constitution Saving Throw: DC 14,
each creature in a 30-foot Cone. Failure: 42 (12d6) Poison
damage. Success: Half damage.
From forbidden forest depths, green dragons whisper evils into the
world  and  manipulate  the  lives  of  those  who  listen.  Elusive,
conniving, and egotistical, these chromatic dragons patiently prey
on the fears of shorter-lived beings, corrupting and isolating them.
Green  dragons  might  lurk  amid  labyrinthine  wildernesses  for
centuries without revealing themselves; even their most devoted
followers might know them only as the voice of the woodlands or a
whisper in their dreams. Despite their might, most green dragons
disdain physical violence, viewing combat as servants' work and
preferring to trick foes into dangerous or exploitative scenarios.
These  dragons  collect  "baubles"  that  embody  their  webs  of
manipulation and serve as tools of extortion, such as compromising
documents, family heirlooms, and sentimental treasures.`}]},{slug:"young-red-dragon",name:"Young Red Dragon",meta:"Dragon (Chromatic) Large, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:23,mod:6,save:6},dex:{score:10,mod:0,save:4},con:{score:21,mod:5,save:5},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:4},cha:{score:19,mod:4,save:4}},fields:{AC:"18",HP:"178 (17d10 + 85)",Speed:"40 ft., Climb 40 ft., Fly 80 ft.",Skills:"Perception +8, Stealth +4",Immunities:"Fire",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"10 (XP 5 900; PB +4)"},cr:"10 (XP 5 900; PB +4)",crValue:"10",xp:5900,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +10, reach 10 ft. Hit: 13 (2d6 + 6)
Slashing damage plus 3 (1d6) Fire damage.
Fire Breath (Recharge 5–6). Dexterity Saving Throw: DC 17, each
creature in a 30-foot Cone. Failure: 56 (16d6) Fire damage.
Success: Half damage.
Red dragons take whatever they desire and burn to ash anything
that stands in their way. These chromatic dragons endlessly desire
more—more magic, territory, treasure, or whatever else inflames
their cruel ambitions. Red dragons make their lairs amid perilous
cliffs and volcanoes. Within, they amass and fiercely protect hoards
of treasure, and many have perfect recall of the hoards' contents
and  the  locations  of  all  they've  collected.  Should  anything  go
missing,  red  dragons  fly  into  rages.  They  don't  rest  until  their
treasures are returned and the thieves have burned. Red dragons
believe  themselves  to  be  the  greatest  of  all  dragons  and,  by
extension,  the  greatest  of  all  creatures.  To  them,  pillaging  and
conquering are their right—treasures can find no more honored
place than in their hoards, and other creatures are privileged to
serve them.`}]},{slug:"young-remorhaz",name:"Young Remorhaz",meta:"Monstrosity Large, Unaligned",type:"Monstrosity",subtype:"",size:"Large",alignment:"Unaligned",abilities:{str:{score:18,mod:4,save:4},dex:{score:13,mod:1,save:1},con:{score:17,mod:3,save:3},int:{score:3,mod:-4,save:-4},wis:{score:10,mod:0,save:0},cha:{score:4,mod:-3,save:-3}},fields:{AC:"14",HP:"93 (11d10 + 33)",Speed:"30 ft., Burrow 20 ft.",Immunities:"Cold, Fire",Senses:"Darkvision 60 ft., Tremorsense 60 ft., Passive Perception",Languages:"—",CR:"5 (XP 1 800; PB +3)"},cr:"5 (XP 1 800; PB +3)",crValue:"5",xp:1800,sections:[{title:"TRAITS",text:`Heat Aura. At the end of each of the remorhaz's turns, each
creature in a 5-foot Emanation originating from the remorhaz
takes 11 (2d10) Fire damage.`},{title:"ACTIONS",text:`Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 15 (2d10 + 4) Piercing
damage plus 13 (3d8) Fire damage.
Young  remorhazes  scorch  and  consume  any  creatures  they  can
chase down and overwhelm.`}]},{slug:"young-silver-dragon",name:"Young Silver Dragon",meta:"Dragon (Metallic) Large, Lawful Good",type:"Dragon",subtype:"Metallic",size:"Large",alignment:"Lawful Good",abilities:{str:{score:23,mod:6,save:6},dex:{score:10,mod:0,save:4},con:{score:21,mod:5,save:5},int:{score:14,mod:2,save:2},wis:{score:11,mod:0,save:4},cha:{score:19,mod:4,save:4}},fields:{AC:"18",HP:"168 (16d10 + 80)",Speed:"40 ft., Fly 80 ft.",Skills:"History +6, Perception +8, Stealth +4",Immunities:"Cold",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"9 (XP 5 000; PB +4)"},cr:"9 (XP 5 000; PB +4)",crValue:"9",xp:5e3,sections:[{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks. It can
replace one attack with a use of Paralyzing Breath.
Rend. Melee Attack Roll: +10, reach 10 ft. Hit: 15 (2d8 + 6)
Slashing damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 17,
each creature in a 30-foot Cone. Failure: 49 (11d8) Cold damage.
Success: Half damage.
Paralyzing Breath. Constitution Saving Throw: DC 17, each
creature in a 30-foot Cone. First Failure: The target has the
Incapacitated condition until the end of its next turn, when it
repeats the save. Second Failure: The target has the Paralyzed
condition, and it repeats the save at the end of each of its turns,
ending the efiect on itself on a success. After 1 minute, it
succeeds automatically.
Silver dragons work to preserve peace and encourage greatness.
They try to live as examples of decency while remaining watchful
against  evil.  Silver  dragons  typically  dwell  amid  snow-capped
mountains,  though  aspirations  and  congeniality  drive  some  to
instead  live  among  cosmopolitan  societies.  Disguised  as
humanoids, they ally with artists, historians, knights, and humble
leaders who learn from the past to create better futures. Silver
dragons take inspiration from legendary heroes and have grand
ambitions. Many collect treasures that reflect these interests, such
as histories, ancient art, and the gear of famous champions.`}]},{slug:"young-white-dragon",name:"Young White Dragon",meta:"Dragon (Chromatic) Large, Chaotic Evil",type:"Dragon",subtype:"Chromatic",size:"Large",alignment:"Chaotic Evil",abilities:{str:{score:18,mod:4,save:4},dex:{score:10,mod:0,save:3},con:{score:18,mod:4,save:4},int:{score:6,mod:-2,save:-2},wis:{score:11,mod:0,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"17",HP:"123 (13d10 + 52)",Speed:"40 ft., Burrow 20 ft., Fly 80 ft., Swim 40 ft.",Skills:"Perception +6, Stealth +3",Immunities:"Cold",Senses:"Blindsight 30 ft., Darkvision 120 ft., Passive Perception",Languages:"Common, Draconic",CR:"6 (XP 2 300; PB +3)"},cr:"6 (XP 2 300; PB +3)",crValue:"6",xp:2300,sections:[{title:"TRAITS",text:`Ice Walk. The dragon can move across and climb icy surfaces
Terrain composed of ice or snow doesn't cost it extra
movement.`},{title:"ACTIONS",text:`Multiattack. The dragon makes three Rend attacks.
Rend. Melee Attack Roll: +7, reach 10 ft. Hit: 9 (2d4 + 4) Slashing
damage plus 2 (1d4) Cold damage.
Cold Breath (Recharge 5–6). Constitution Saving Throw: DC 15,
each creature in a 30-foot Cone. Failure: 40 (9d8) Cold damage.
Success: Half damage.
Among  the  most  primal  chromatic  dragons,  white  dragons
prioritize survival over all. Life is harsh and uncertain in the arctic
expanses,  glacial  heights,  and  frozen  seas  where  these  dragons
dwell. White dragons fiercely protect their territories, scouring the
frigid  regions  for  food  and  evidence  of  trespassers.  Most  white
dragons ignore the plots of smaller creatures and other dragons,
concerning themselves only with their own survival. White dragons
create lairs to defend themselves from other deadly arctic creatures
and  from  dangerous  natural  conditions.  Within  these  shelters,
white  dragons  hoard  testaments  to  their  superiority,  such  as
monstrous skulls, the gear of defeated rivals, and curiosities that
capture their interest. To protect such treasure, white dragons coax
ice to form over their hoards or sink their wealth in frigid pools.
For white dragons, each piece of treasure embodies a victory—the
details of which inflate as these dragons age.`}]},{slug:"yuan-ti-abomination",name:"Yuan-Ti Abomination",meta:"Monstrosity Large, Neutral Evil",type:"Monstrosity",subtype:"",size:"Large",alignment:"Neutral Evil",abilities:{str:{score:19,mod:4,save:4},dex:{score:16,mod:3,save:3},con:{score:17,mod:3,save:3},int:{score:17,mod:3,save:3},wis:{score:18,mod:4,save:4},cha:{score:15,mod:2,save:2}},fields:{AC:"15",HP:"127 (15d10 + 45)",Speed:"40 ft., Climb 30 ft.",Skills:"Perception +7, Stealth +6",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 17",Languages:"Abyssal, Common, Draconic",CR:"7 (XP 2 900; PB +3)"},cr:"7 (XP 2 900; PB +3)",crValue:"7",xp:2900,sections:[{title:"TRAITS",text:`Magic Resistance. The yuan-ti has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The yuan-ti makes two Bite attacks, and it can use
Spellcasting to cast Suggestion if available.
Bite. Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Piercing
damage plus 10 (3d6) Poison damage.
Constrict. Strength Saving Throw: DC 15, one Large or smaller
creature within 5 feet. Failure: 28 (7d6 + 4) Bludgeoning damage.
The target has the Grappled condition (escape DC 14), and it has
the Restrained condition until the grapple ends. Success: Half
damage only.
Poison Spray (Recharge 5–6). Constitution Saving Throw: DC 14,
each creature in a 30-foot Cone. Failure: 21 (6d6) Poison
damage, and the target has the Poisoned condition until the
end of the yuan-ti's next turn. While Poisoned, the target has
the Blinded condition. Success: Half damage only.
Spellcasting (Yuan-ti Form Only). The yuan-ti casts one of the
following spells, requiring no Material components and using
Wisdom as the spellcasting ability (spell save DC 15):
At will: Animal Friendship (snakes only)
3/day: Suggestion`},{title:"BONUS ACTIONS",text:`Shape-Shift. The yuan-ti shape-shifts into a Large snake or
returns to its true form. If it dies, it stays in its current form.
The yuan-ti's game statistics are the same in each form, except
where noted. Any equipment it is wearing or carrying isn't
transformed.
Yuan-ti abominations have traded away nearly all evidence of their
humanity, coming to resemble giant, upright serpents with scaly
arms and hands. In battle, they relish opportunities to crush foes in
their powerful coils or strike with their venomous fangs. These
abominations  can  also  shape-shift  into  snakes.  In  these  forms,
abominations are indistinguishable from normal serpents. The true
threat of yuan-ti abominations stems not from their physical might
but from their cunning. These masterminds often lead cultlike cells
of other yuan-ti and direct them in enacting elaborate conspiracies.
Abominations  avoid  jeopardizing  themselves,  typically  scheming
from  hidden  bastions  where  they're  protected  by  yuan-ti  and
serpent  guardians.  These  coldhearted  leaders  have  a  unique
understanding of the supernatural forces that grant yuan-ti their
powers,  and  they  usually  have  insidious  magical  traps  and
contingencies at their disposal.`}]},{slug:"yuan-ti-infiltrator",name:"Yuan-Ti Infiltrator",meta:"Monstrosity Medium, Neutral Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:11,mod:0,save:0},dex:{score:12,mod:1,save:1},con:{score:11,mod:0,save:0},int:{score:13,mod:1,save:1},wis:{score:14,mod:2,save:2},cha:{score:12,mod:1,save:1}},fields:{AC:"11",HP:"40 (9d8)",Speed:"30 ft.",Skills:"Deception +5, Perception +4, Stealth +3",Immunities:"Poison; Poisoned",Gear:"Scimitar",Senses:"Darkvision 60 ft., Passive Perception 14",Languages:"Abyssal, Common, Draconic",CR:"1 (XP 200; PB +2)"},cr:"1 (XP 200; PB +2)",crValue:"1",xp:200,sections:[{title:"TRAITS",text:`Magic Resistance. The yuan-ti has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The yuan-ti makes two Scimitar attacks.
Scimitar. Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing
damage.
Poison Ray. Ranged Attack Roll: +4, range 120 ft. Hit: 9 (2d6 + 2)
Poison damage.
Spellcasting. The yuan-ti casts one of the following spells,
requiring no Material components and using Wisdom as the
spellcasting ability (spell save DC 12):
At will: Animal Friendship (snakes only)
2/day: Suggestion
Infiltrators can pass as human, their serpentine features limited to
scaly  skin,  forked  tongues,  and  other  minor  or  internal
transformations.  These  spies  insinuate  themselves  among  their
rivals, manipulating others and making foes vulnerable to the plots
of more powerful yuan-ti.`}]},{slug:"yuan-ti-malison-type-1",name:"Yuan-Ti Malison (Type 1)",meta:"Monstrosity Medium, Neutral Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:16,mod:3,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"12",HP:"66 (12d8 + 12)",Speed:"30 ft., Climb 30 ft. (snake form only)",Skills:"Stealth +4 (+6 while in snake form)",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Abyssal, Common, Draconic",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Magic Resistance. The yuan-ti has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The yuan-ti makes two attacks, using Bite or Poison
Ray in any combination, and it can use Spellcasting to cast
Suggestion if available.
Bite. Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Piercing
damage plus 7 (2d6) Poison damage.
Poison Ray (Yuan-ti Form Only). Ranged Attack Roll: +5, range 120
ft. Hit: 12 (2d8 + 3) Poison damage.
Spellcasting (Yuan-ti Form Only). The yuan-ti casts one of the
following spells, requiring no Material components and using
Wisdom as the spellcasting ability (spell save DC 13):
At will: Animal Friendship (snakes only)
2/day: Suggestion`},{title:"BONUS ACTIONS",text:`Shape-Shift. The yuan-ti shape-shifts into a Medium snake or
returns to its true form. If it dies, it stays in its current form.
The yuan-ti's game statistics are the same in each form, except
where noted. Any equipment it is wearing or carrying isn't
transformed.
Malisons  exhibit  snakelike  features  that  make  them  deadly  in
combat. These malisons have human bodies and the heads of giant,
venomous snakes. Malisons possesses deadly venom, which some
manipulate  into  magical  strikes.  They  can  also  shape-shift  into
snakes, helping them to position themselves for surprise attacks or
to slither away with nary a trace.`}]},{slug:"yuan-ti-malison-type-2",name:"Yuan-Ti Malison (Type 2)",meta:"Monstrosity Medium, Neutral Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:16,mod:3,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"12",HP:"66 (12d8 + 12)",Speed:"30 ft., Climb 30 ft. (snake form only)",Skills:"Stealth +4 (+6 while in snake form)",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Abyssal, Common, Draconic",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Magic Resistance. The yuan-ti has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The yuan-ti makes two Bite attacks, and it can use
Spellcasting to cast Suggestion if available.
Bite. Melee Attack Roll: +5, reach 10 ft. Hit: 7 (1d8 + 3) Piercing
damage plus 7 (2d6) Poison damage.
Spellcasting (Yuan-ti Form Only). The yuan-ti casts one of the
following spells, requiring no Material components and using
Wisdom as the spellcasting ability (spell save DC 13):
At will: Animal Friendship (snakes only)
2/day: Suggestion`},{title:"BONUS ACTIONS",text:`Shape-Shift. The yuan-ti shape-shifts into a Medium snake or
returns to its true form. If it dies, it stays in its current form.
The yuan-ti's game statistics are the same in each form, except
where noted. Any equipment it is wearing or carrying isn't
transformed.
Malisons  exhibit  snakelike  features  that  make  them  deadly  in
combat. These malisons have human bodies, but they've replaced
their arms with snakes. Malisons possesses deadly venom, which
some manipulate into magical strikes. They can also shape-shift
into  snakes,  helping  them  to  position  themselves  for  surprise
attacks or to slither away with nary a trace.`}]},{slug:"yuan-ti-malison-type-3",name:"Yuan-Ti Malison (Type 3)",meta:"Monstrosity Medium, Neutral Evil",type:"Monstrosity",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:16,mod:3,save:3},dex:{score:14,mod:2,save:2},con:{score:13,mod:1,save:1},int:{score:14,mod:2,save:2},wis:{score:16,mod:3,save:3},cha:{score:12,mod:1,save:1}},fields:{AC:"12",HP:"66 (12d8 + 12)",Speed:"30 ft., Climb 30 ft.",Skills:"Stealth +4 (+6 while in snake form)",Immunities:"Poison; Poisoned",Senses:"Darkvision 60 ft., Passive Perception 13",Languages:"Abyssal, Common, Draconic",CR:"3 (XP 700; PB +2)"},cr:"3 (XP 700; PB +2)",crValue:"3",xp:700,sections:[{title:"TRAITS",text:`Magic Resistance. The yuan-ti has Advantage on saving throws
against spells and other magical efiects.`},{title:"ACTIONS",text:`Multiattack. The yuan-ti makes two Poison Burst attacks, and it
can use Spellcasting to cast Suggestion if available.
Poison Burst (Yuan-ti Form Only). Melee or Ranged Attack Roll: +5,
reach 5 ft. or range 120 ft. Hit: 12 (2d8 + 3) Poison damage.
Constrict. Strength Saving Throw: DC 13, one Medium or smaller
creature within 5 feet. Failure: 21 (4d8 + 3) Bludgeoning damage.
The target has the Grappled condition (escape DC 13), and it has
the Restrained condition until the grapple ends.
Spellcasting (Yuan-ti Form Only). The yuan-ti casts one of the
following spells, requiring no Material components and using
Wisdom as the spellcasting ability (spell save DC 13):
At will: Animal Friendship (snakes only)
2/day: Suggestion`},{title:"BONUS ACTIONS",text:`Shape-Shift. The yuan-ti shape-shifts into a Medium snake or
returns to its true form. If it dies, it stays in its current form.
The yuan-ti's game statistics are the same in each form, except
where noted. Any equipment it is wearing or carrying isn't
transformed.
Malisons  exhibit  snakelike  features  that  make  them  deadly  in
combat. These malisons are human from the waist up, but below
that extend the coils of a giant snake. Malisons possesses deadly
venom, which some manipulate into magical strikes. They can also
shape-shift into snakes, helping them to position themselves for
surprise attacks or to slither away with nary a trace.`}]},{slug:"zombie",name:"Zombie",meta:"Undead Medium, Neutral Evil",type:"Undead",subtype:"",size:"Medium",alignment:"Neutral Evil",abilities:{str:{score:13,mod:1,save:1},dex:{score:6,mod:-2,save:-2},con:{score:16,mod:3,save:3},int:{score:3,mod:-4,save:-4},wis:{score:6,mod:-2,save:0},cha:{score:5,mod:-3,save:-3}},fields:{AC:"8",HP:"15 (2d8 + 6)",Speed:"20 ft.",Immunities:"Poison; Exhaustion, Poisoned",Senses:"darkvision 60 ft., Passive Perception 8",Languages:"Understands Common plus one other language but can't speak",CR:"1/4 (XP 50; PB +2)"},cr:"1/4 (XP 50; PB +2)",crValue:"1/4",xp:50,sections:[{title:"TRAITS",text:`Undead Fortitude. If damage reduces the zombie to 0 Hit Points,
it must make a Constitution saving throw (DC 5 plus the damage
taken) unless the damage is Radiant or from a Critical Hit. On a
successful save, the zombie drops to 1 Hit Point instead.`},{title:"ACTIONS",text:`Slam. Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1)
Bludgeoning damage.
Humanoid  zombies  usually  serve  as  guardians,  servants,  or
soldiers for evil magic-users. In rare cases, foul magic might result
in  widespread  reanimation  of  the  dead,  unleashing  hordes  of
zombies to terrorize the living.`}]}];
