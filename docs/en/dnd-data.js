const DND_CLASSES = {
  artificer: {
    id: "artificer",
    name: "Artificer",
    icon: "🔧",
    hitDice: "1d8",
    primaryAbility: "Intelligence",
    primaryAbilityKey: "int",
    savingThrows: ["con", "int"],
    savingThrowsLabel: "Constitution, Intelligence",
    armorProf: "Light armor, medium armor, shields",
    weaponProf: "Simple weapons",
    spells: true,
    spellcasting: {
      ability: "int",
      type: "prepared",
      caster: "half",
      cantripsByLevel: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 3, 11: 3, 12: 3, 13: 3, 14: 4, 15: 4, 16: 4, 17: 4, 18: 4, 19: 4, 20: 4 },
      spellList: ["create_bonfire", "dancing_lights", "fire_bolt", "frostbite", "guidance", "light", "mage_hand", "magic_stone", "mending", "message", "poison_spray", "prestidigitation", "ray_of_frost", "resistance", "shocking_grasp", "spare_the_dying", "thorn_whip", "alarm", "catapult", "cure_wounds", "detect_magic", "disguise_self", "expeditious_retreat", "faerie_fire", "false_life", "feather_fall", "grease", "identify", "jump", "longstrider", "purify_food_and_drink", "sanctuary", "snare", "tashas_caustic_brew", "aid", "alter_self", "arcane_lock", "blur", "continual_flame", "darkvision", "enhance_ability", "enlarge_reduce", "heat_metal", "invisibility", "lesser_restoration", "levitate", "magic_mouth", "magic_weapon", "protection_from_poison", "rope_trick", "see_invisibility", "spider_climb", "web", "blink", "create_food_and_water", "dispel_magic", "elemental_weapon", "fly", "glyph_of_warding", "haste", "protection_from_energy", "revivify", "arcane_eye", "fabricate", "freedom_of_movement", "otilukes_resilient_sphere", "stone_shape", "stoneskin", "animate_objects", "bigbys_hand", "creation", "skill_empowerment", "acid_splash", "arcane_hand", "resilient_sphere", "secret_chest"],
    },
    skillsCount: 2,
    skills: ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception", "Sleight of Hand"],
    subclassLevel: 3,
    subclasses: [
      {
        id: "alchemist",
        name: "Alchemist",
        features: [
          { level: 3, name: "Experimental Elixir", description: "After a Long Rest you create 2 elixirs (roll on a table: Healing, Swiftness, Resilience, Boldness, Flight). More elixirs at levels 5 (3), 9 (4), 15 (5). You also gain Alchemist's Supplies and Herbalism Kit proficiency." },
          { level: 5, name: "Alchemical Savant", description: "When casting a spell through your Alchemist's Supplies, add your Int modifier to one roll that restores HP or deals Acid/Fire/Poison damage." },
          { level: 9, name: "Restorative Reagents", description: "You cast Lesser Restoration without a slot (uses = Int modifier); your elixirs also grant temporary HP." },
          { level: 15, name: "Chemical Mastery", description: "Resistance to Acid and Poison + immunity to Poisoned; Alchemical Eruption (+2d8 Force damage); free Tasha's Bubbling Cauldron." }
        ],
      },
      {
        id: "armorer",
        name: "Armorer",
        features: [
          { level: 3, name: "Arcane Armor & Armor Model", description: "Turn your armor into Arcane Armor (a focus, no Strength requirement). Choose a model: Dreadnaught, Guardian or Infiltrator; the model's special weapon uses Intelligence." },
          { level: 5, name: "Extra Attack", description: "You attack twice when you take the Attack action." },
          { level: 9, name: "Improved Armorer", description: "+1 to attack and damage rolls with your model's special weapon." },
          { level: 15, name: "Perfected Armor", description: "Your armor model gains powerful upgrades (bigger dice and extra effects depending on the model)." }
        ],
      },
      {
        id: "artillerist",
        name: "Artillerist",
        features: [
          { level: 3, name: "Eldritch Cannon", description: "Create a cannon (Flamethrower, Force Ballista or Protector); AC 18, HP = 5 × level. You also gain Martial Ranged weapons and Woodcarver's Tools proficiency." },
          { level: 5, name: "Arcane Firearm", description: "A wand/staff/rod becomes a focus; +1d8 to one damage roll of an Artificer spell you cast through it." },
          { level: 9, name: "Explosive Cannon", description: "Your cannon can Detonate (3d10 Force); +1d8 to cannon damage." },
          { level: 15, name: "Fortified Position", description: "You can have two cannons at once; you and allies have Half Cover within 10 ft of a cannon." }
        ],
      },
      {
        id: "battlesmith",
        name: "Battle Smith",
        features: [
          { level: 3, name: "Battle Ready & Steel Defender", description: "You attack with magic weapons using Intelligence; gain Martial weapon proficiency. You create a Steel Defender (AC 12+Int, HP 5 + 5×level)." },
          { level: 5, name: "Extra Attack", description: "You attack twice when you take the Attack action." },
          { level: 9, name: "Arcane Jolt", description: "When you hit with a magic weapon or your Defender — +2d6 Force damage OR heal 2d6 (uses = Int modifier)." },
          { level: 15, name: "Improved Defender", description: "Arcane Jolt increases to 4d6; your Defender deals damage when it Deflects an attack." }
        ],
      },
      {
        id: "cartographer",
        name: "Cartographer",
        features: [
          { level: 3, name: "Adventurer's Atlas", description: "Magical maps for allies (+1d4 Initiative, shared positioning). Free Faerie Fire; Portal Jump. You gain Calligrapher's and Cartographer's Tools proficiency." },
          { level: 5, name: "Guided Precision", description: "Add your Int modifier to damage from your Cartographer spells or to targets in your Faerie Fire." },
          { level: 9, name: "Ingenious Movement", description: "Using Flash of Genius you teleport yourself or an ally up to 30 ft." },
          { level: 15, name: "Superior Atlas", description: "A map holder at 0 HP is saved and teleported (Safe Haven); free Find the Path." }
        ],
      },
      {
        id: "reanimator",
        name: "Reanimator",
        features: [
          { level: 3, name: "Reanimator's Skill Set & Companion", description: "Spare the Dying heals and deals 2d4 Lightning to enemies. You create a Reanimated Companion (AC 10+Int, HP 5 + 5×level) with a Death Burst. You gain Alchemist's Supplies proficiency." },
          { level: 5, name: "Strange Modifications", description: "Your companion gains an option: Arcane Conduit or Ferocity." },
          { level: 9, name: "Improved Reanimation", description: "Death Burst increases to 4d4; gain Macabre Modifications (Bloated/Gaunt/Moist)." },
          { level: 15, name: "Refined Reanimation", description: "Free Raise Dead; Life Transfer; more modification options." }
        ],
      }
    ],
    spellList: [],
    features: [
      { level: 1, name: "Spellcasting", desc: "You prepare and cast Artificer spells using Intelligence, with tools as your spellcasting focus. You are a half-caster (you gain spell slots from level 1)." },
      { level: 1, name: "Tinker's Magic", desc: "You are proficient with Tinker's Tools and two other artisan's tools of your choice; you can imbue mundane items with minor magical properties." },
      { level: 2, name: "Replicate Magic Item", desc: "You craft chosen magic items from a special list using your tools. The number of items you can maintain grows with level." },
      { level: 3, name: "Artificer Subclass", desc: "Choose your specialty: Alchemist, Armorer, Artillerist, Battle Smith, Cartographer or Reanimator." },
      { level: 4, name: "Ability Score Improvement", desc: "Increase your ability scores by +2 total (or take a feat)." },
      { level: 6, name: "Magic Item Tinker", desc: "You can disassemble and replace your replicated magic items during a rest." },
      { level: 7, name: "Flash of Genius", desc: "As a Reaction, add your Intelligence modifier to a check or save for yourself or an ally within 30 ft (uses = Int modifier)." },
      { level: 8, name: "Ability Score Improvement", desc: "Increase your ability scores by +2 total (or take a feat)." },
      { level: 10, name: "Magic Item Adept", desc: "You can attune to more magic items and craft them faster and cheaper." },
      { level: 11, name: "Spell-Storing Item", desc: "You store a 1st- or 2nd-level spell in an item so it can be cast multiple times." },
      { level: 12, name: "Ability Score Improvement", desc: "Increase your ability scores by +2 total (or take a feat)." },
      { level: 14, name: "Advanced Artifice", desc: "Your replicated magic items gain additional charges." },
      { level: 16, name: "Ability Score Improvement", desc: "Increase your ability scores by +2 total (or take a feat)." },
      { level: 18, name: "Magic Item Master", desc: "You can attune to up to six magic items at once." },
      { level: 19, name: "Epic Boon", desc: "Choose an Epic Boon feat." },
      { level: 20, name: "Soul of Artifice", desc: "+1 to all saving throws per attuned magic item; you can avoid dropping to 0 HP once." }
    ],
  },
  barbarian: {
    id: "barbarian",
    name: "Barbarian",
    icon: "🪓",
    hitDice: "1d12",
    primaryAbility: "Strength",
    primaryAbilityKey: "str",
    savingThrows: ["str", "con"],
    savingThrowsLabel: "Strength, Constitution",
    armorProf: "Light and medium armor, shields",
    unarmoredDefense: "10 + dex + con",
    weaponProf: "Simple weapons, martial weapons",
    spells: false,
    skillsCount: 2,
    skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    subclasses: [
      {
        id: "berserker",
        name: "Path of the Berserker",
        features: [
          {
            level: 3,
            name: "Frenzy",
            description:
              "While Raging, as a bonus action you can make one additional melee weapon attack. After Rage ends, you suffer one level of exhaustion.",
          },
          {
            level: 6,
            name: "Mindless Rage",
            description:
              "While Raging, you cannot be charmed or frightened; any such effect is suspended until the end of your Rage.",
          },
          {
            level: 10,
            name: "Intimidating Presence",
            description:
              "As an action, force a creature within 30 feet to make a Wisdom save or become frightened of you.",
          },
          {
            level: 14,
            name: "Retaliation",
            description:
              "When a nearby creature deals damage to you, you can use your reaction to make a melee attack against it.",
          },
        ],
      },
      {
        id: "wildheart",
        name: "Path of the Wild Heart",
        features: [
          {
            level: 3,
            name: "Totemic Spirit",
            description:
              "Choose a totem animal (Bear, Eagle, Wolf, etc.) that grants a special advantage during Rage.",
          },
          {
            level: 6,
            name: "Aspect of the Beast",
            description:
              "You gain a permanent trait of your chosen animal — strength, sharp sight, or tirelessness.",
          },
          {
            level: 10,
            name: "Spirit Walker",
            description: "You can perform a ritual replicating the Commune with Nature spell.",
          },
          {
            level: 14,
            name: "Totemic Bond",
            description:
              "Your totem bond grants a powerful combat effect during Rage based on your chosen animal.",
          },
        ],
      },
      {
        id: "worldtree",
        name: "Path of the World Tree",
        features: [
          {
            level: 3,
            name: "Life Force of the Tree",
            description:
              "When entering Rage, you gain temporary hit points fueled by the power of the World Tree.",
          },
          {
            level: 6,
            name: "Branches of the Tree",
            description:
              "As a reaction you summon spectral branches to restrain or pull an enemy within 30 feet.",
          },
          {
            level: 10,
            name: "Battering Roots",
            description: "Your melee reach increases by 10 feet thanks to spectral roots.",
          },
          {
            level: 14,
            name: "Travel Along the Tree",
            description:
              "During Rage you can teleport a significant distance, travelling along the World Tree branches.",
          },
        ],
      },
      {
        id: "zealot",
        name: "Path of the Zealot",
        features: [
          {
            level: 3,
            name: "Divine Fury",
            description:
              "Your first attack each turn while Raging deals extra necrotic or radiant damage.",
          },
          {
            level: 6,
            name: "Fanatical Focus",
            description: "Once during your Rage you can reroll a failed saving throw.",
          },
          {
            level: 10,
            name: "Presence of Inspiration",
            description:
              "As a bonus action, inspire allies: their attacks gain advantage until your next turn.",
          },
          {
            level: 14,
            name: "Rage Beyond Death",
            description:
              "While Raging, you don't fall unconscious at 0 HP (except from massive damage).",
          },
        ],
      },
    ],
    subclassLevel: 3,
    features: [
      {
        level: 1,
        name: "Rage",
        desc: "As a bonus action, enter Rage: resistance to bludgeoning, piercing, and slashing damage, bonus to Strength attacks, and advantage on Strength checks and saves.",
      },
      {
        level: 1,
        name: "Unarmored Defense",
        desc: "While not wearing armor, AC = 10 + DEX modifier + CON modifier. Shield allowed.",
      },
      {
        level: 2,
        name: "Reckless Attack",
        desc: "You can attack with advantage on Strength attacks, but attacks against you also have advantage until your next turn.",
      },
      {
        level: 3,
        name: "Barbarian Path",
        desc: "Choose your Path (subclass), which determines your additional abilities.",
      },
      {
        level: 5,
        name: "Extra Attack",
        desc: "You can attack twice instead of once when you take the Attack action.",
      },
      {
        level: 5,
        name: "Fast Movement",
        desc: "Your speed increases by 10 feet while not wearing heavy armor.",
      },
    ],
  },
  fighter: {
    id: "fighter",
    name: "Fighter",
    icon: "⚔️",
    hitDice: "1d10",
    primaryAbility: "Strength or Dexterity",
    primaryAbilityKey: "str",
    savingThrows: ["str", "con"],
    savingThrowsLabel: "Strength, Constitution",
    armorProf: "All armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spells: false,
    skillsCount: 2,
    skills: [
      "Acrobatics",
      "Athletics",
      "Animal Handling",
      "History",
      "Insight",
      "Intimidation",
      "Perception",
      "Survival",
    ],
    subclasses: [
      {
        id: "champion",
        name: "Champion",
        criticalRange: 19,
        improvedAthletics: true,
        features: [
          {
            level: 3,
            name: "Improved Critical",
            description: "Your weapon attacks score a critical hit on a roll of 19 or 20.",
          },
          {
            level: 7,
            name: "Remarkable Athlete",
            description:
              "Add half your proficiency bonus (rounded up) to Strength, Dexterity, or Constitution checks that don't already use your proficiency.",
          },
          {
            level: 10,
            name: "Additional Fighting Style",
            description: "Choose a second Fighting Style option.",
          },
          {
            level: 15,
            name: "Superior Critical",
            description: "Your weapon attacks score a critical hit on a roll of 18-20.",
          },
          {
            level: 18,
            name: "Survivor",
            description: "If you start your turn at half HP or fewer, regain 5 + CON modifier HP.",
          },
        ],
      },
      {
        id: "battle_master",
        name: "Battle Master",
        superiorityDice: "d8",
        maneuversKnown: 3,
        features: [
          {
            level: 3,
            name: "Combat Superiority",
            description: "4 superiority dice (d8). Regain on short or long rest.",
          },
          {
            level: 3,
            name: "Maneuvers",
            description: "Learn 3 maneuvers. Spend superiority dice to activate.",
          },
          {
            level: 3,
            name: "Student of War",
            description:
              "Proficiency with one artisan tool and one skill: History, Insight, Medicine, or Perception.",
          },
          {
            level: 7,
            name: "Know Your Enemy",
            description:
              "1 minute of observation: learn if an enemy is equal, higher, or lower in two characteristics.",
          },
          {
            level: 10,
            name: "Improved Combat Superiority",
            description: "Superiority dice become d10. Learn 2 more maneuvers.",
          },
          {
            level: 15,
            name: "Survivor",
            description: "When rolling initiative without advantage, regain 1 superiority die.",
          },
          {
            level: 18,
            name: "Master Combat Superiority",
            description: "Superiority dice become d12. Learn 2 more maneuvers.",
            description: "Superiority dice become d12. Learn 2 more maneuvers.",
          },
        ],
      },
      {
        id: "eldritchknight",
        spellcasting: {
          ability: "int",
          type: "prepared",
          caster: "third",
          spellListFrom: "wizard",
          cantripsByLevel: { 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 3, 11: 3, 12: 3, 13: 3, 14: 3, 15: 3, 16: 3, 17: 3, 18: 3, 19: 3, 20: 3 },
        },
        name: "Eldritch Knight",
        features: [
          {
            level: 3,
            name: "Spellcasting",
            description:
              "Learn wizard spells (mostly Abjuration and Evocation) and gain a spellcasting ability.",
          },
          {
            level: 3,
            name: "Weapon Bond",
            description:
              "Through ritual, bond with a weapon: it cannot be disarmed and you can summon it to your hand.",
          },
          {
            level: 7,
            name: "War Magic",
            description:
              "After casting a cantrip as an action, you can make one weapon attack as a bonus action.",
          },
          {
            level: 10,
            name: "Eldritch Strike",
            description:
              "After hitting with a weapon, the target has disadvantage on its next saving throw vs your spell this turn.",
          },
          {
            level: 15,
            name: "Improved War Magic",
            description:
              "After casting any spell as an action, you can make one weapon attack as a bonus action.",
          },
        ],
      },
      {
        id: "psiwarrior",
        name: "Psi Warrior",
        features: [
          {
            level: 3,
            name: "Psionic Power",
            description: "You have Energy dice (d6) to fuel strikes, defense, and telekinesis.",
          },
          {
            level: 7,
            name: "Telekinetic Adept",
            description: "Telekinetically push enemies and perform a leap using your mind.",
          },
          {
            level: 10,
            name: "Psychic Veil",
            description:
              "You have resistance to psychic damage; as a reaction, reduce damage to yourself or an ally.",
          },
          {
            level: 15,
            name: "Telekinetic Master",
            description:
              "You can continuously use Telekinesis and make a weapon attack as a bonus action.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    features: [
      {
        level: 1,
        name: "Fighting Style",
        desc: "Choose a Fighting Style specialization (Defense, Dueling, Great Weapon, Archery, etc.).",
      },
      {
        level: 1,
        name: "Action Surge",
        desc: "As a bonus action, regain 1d10 + Fighter level HP. Usable once between rests.",
      },
      {
        level: 2,
        name: "Action Surge",
        desc: "Once between rests, take an extra action on your turn.",
      },
      { level: 3, name: "Martial Archetype", desc: "Choose your archetype (subclass)." },
      {
        level: 5,
        name: "Extra Attack",
        desc: "You can attack twice instead of once when you take the Attack action.",
      },
    ],
  },
  rogue: {
    id: "rogue",
    name: "Rogue",
    icon: "🗡️",
    hitDice: "1d8",
    primaryAbility: "Dexterity",
    primaryAbilityKey: "dex",
    savingThrows: ["dex", "int"],
    savingThrowsLabel: "Dexterity, Intelligence",
    armorProf: "Light armor",
    weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    spells: false,
    skillsCount: 4,
    skills: [
      "Acrobatics",
      "Athletics",
      "Deception",
      "Insight",
      "Intimidation",
      "Investigation",
      "Perception",
      "Performance",
      "Persuasion",
      "Sleight of Hand",
      "Stealth",
    ],
    subclasses: [
      {
        id: "thief",
        name: "Thief",
        features: [
          {
            level: 3,
            name: "Fast Hands",
            description:
              "As a bonus action, use Cunning Action for object interactions, lock picking, or disarming traps.",
          },
          {
            level: 3,
            name: "Second-Story Work",
            description:
              "You gain a climbing speed equal to your walking speed and don't slow when climbing.",
          },
          {
            level: 9,
            name: "Supreme Sneak",
            description: "Advantage on Sleight of Hand checks and for using thieves' tools.",
          },
          {
            level: 13,
            name: "Use Magic Device",
            description:
              "You can use magic items even if you don't normally meet the requirements.",
          },
          {
            level: 17,
            name: "Elusive",
            description:
              "As a reaction, add your proficiency bonus to avoid attacks and area effects.",
          },
        ],
      },
      {
        id: "assassin",
        name: "Assassin",
        features: [
          {
            level: 3,
            name: "Infiltration Expertise",
            description:
              "You have proficiency with poisoner's kit and disguise kit; easier to take on other identities.",
          },
          {
            level: 3,
            name: "Assassinate",
            description:
              "Advantage on attacks against creatures that haven't taken a turn in combat; hits on surprised creatures are automatic critical hits.",
          },
          {
            level: 9,
            name: "Impostor",
            description:
              "You can masterfully impersonate another person, perfectly copying their behavior and speech.",
          },
          {
            level: 13,
            name: "Death Strike",
            description: "Craft and apply poisons with deadly efficiency.",
          },
          {
            level: 17,
            name: "Death Strike",
            description:
              "A surprised creature that fails a CON save takes double damage from your attack.",
          },
        ],
      },
      {
        id: "arcanetrickster",
        spellcasting: {
          ability: "int",
          type: "prepared",
          caster: "third",
          spellListFrom: "wizard",
          cantripsByLevel: { 3: 3, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4, 13: 4, 14: 4, 15: 4, 16: 4, 17: 4, 18: 4, 19: 4, 20: 4 },
        },
        name: "Arcane Trickster",
        features: [
          {
            level: 3,
            name: "Spellcasting",
            description:
              "Learn wizard spells (mostly Abjuration and Evocation) and gain a spellcasting ability.",
          },
          {
            level: 3,
            name: "Mage Hand Legerdemain",
            description: "Your Mage Hand becomes invisible and can perform subtle manipulations.",
          },
          {
            level: 9,
            name: "Magical Ambush",
            description:
              "If you are hidden, the target has disadvantage on its save against your spell this turn.",
          },
          {
            level: 13,
            name: "Versatile Trickster",
            description:
              "Advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",
          },
          {
            level: 17,
            name: "Spell Thief",
            description:
              "As a reaction to a spell targeting you, attempt to steal the knowledge of that spell.",
          },
        ],
      },
      {
        id: "soulknife",
        name: "Soul Knife",
        features: [
          {
            level: 3,
            name: "Psychic Blades",
            description: "Summon blades of pure psychic energy to throw or strike with.",
          },
          {
            level: 3,
            name: "Psionic Power",
            description: "You have Energy dice (d6) to fuel strikes, defense, and telekinesis.",
          },
          {
            level: 9,
            name: "Psionic Soul",
            description:
              "Gain short-range telepathic communication and the ability to psionically detect emotions.",
          },
          {
            level: 13,
            name: "Psychic Veil",
            description: "Become invisible briefly using psionic energy.",
          },
          {
            level: 17,
            name: "Rend Mind",
            description: "On a psychic blade hit, teleport with the target or stun them.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    features: [
      {
        level: 1,
        name: "Expertise",
        desc: "Choose two skills with proficiency — your proficiency bonus doubles for those checks.",
      },
      {
        level: 1,
        name: "Sneak Attack",
        desc: "Once per turn, deal extra 1d6 damage on a hit when you have advantage or an ally is adjacent.",
      },
      {
        level: 1,
        name: "Thieves' Cant",
        desc: "You know the secret thieves' language for passing hidden messages.",
      },
      { level: 2, name: "Cunning Action", desc: "As a bonus action: Dash, Hide, or Disengage." },
      { level: 3, name: "Roguish Archetype", desc: "Choose your archetype (subclass)." },
      {
        level: 5,
        name: "Evasion",
        desc: "On a Dexterity save for half damage, you take no damage on a success and only half on a failure.",
      },
    ],
  },
  cleric: {
    id: "cleric",
    name: "Cleric",
    icon: "✨",
    hitDice: "1d8",
    primaryAbility: "Wisdom",
    primaryAbilityKey: "wis",
    savingThrows: ["wis", "cha"],
    savingThrowsLabel: "Wisdom, Charisma",
    armorProf: "Light and medium armor, shields",
    weaponProf: "Simple weapons",
    spells: true,
    spellcasting: {
      ability: "wis",
      type: "prepared",
      cantripsByLevel: {
        1: 3,
        2: 3,
        3: 3,
        4: 4,
        5: 4,
        6: 4,
        7: 4,
        8: 4,
        9: 4,
        10: 5,
        11: 5,
        12: 5,
        13: 5,
        14: 5,
        15: 5,
        16: 5,
        17: 5,
        18: 5,
        19: 5,
        20: 5,
      },
      spellList: [
        "guidance",
        "light",
        "mending",
        "resistance",
        "sacred_flame",
        "spare_the_dying",
        "thaumaturgy",
        "bless",
        "cure_wounds",
        "detect_magic",
        "guiding_bolt",
        "healing_word",
        "inflict_wounds",
        "sanctuary",
        "shield_of_faith",
        "aid",
        "augury",
        "blindness_deafness",
        "calm_emotions",
        "continual_flame",
        "enhance_ability",
        "find_traps",
        "gentle_repose",
        "hold_person",
        "lesser_restoration",
        "locate_object",
        "prayer_of_healing",
        "protection_from_poison",
        "silence",
        "spiritual_weapon",
        "warding_bond",
        "zone_of_truth",
        "animate_dead",
        "beacon_of_hope",
        "bestow_curse",
        "clairvoyance",
        "create_food_and_water",
        "daylight",
        "dispel_magic",
        "glyph_of_warding",
        "magic_circle",
        "mass_healing_word",
        "meld_into_stone",
        "protection_from_energy",
        "remove_curse",
        "revivify",
        "sending",
        "speak_with_dead",
        "spirit_guardians",
        "tongues",
        "water_walk",
        "banishment",
        "control_water",
        "death_ward",
        "divination",
        "freedom_of_movement",
        "guardian_of_faith",
        "locate_creature",
        "stone_shape",
        "commune",
        "contagion",
        "dispel_evil_and_good",
        "flame_strike",
        "geas",
        "greater_restoration",
        "hallow",
        "insect_plague",
        "legend_lore",
        "mass_cure_wounds",
        "planar_binding",
        "raise_dead",
        "scrying",
        "blade_barrier",
        "create_undead",
        "find_the_path",
        "forbiddance",
        "harm",
        "heal",
        "heroes_feast",
        "planar_ally",
        "true_seeing",
        "word_of_recall",
        "conjure_celestial",
        "divine_word",
        "etherealness",
        "fire_storm",
        "plane_shift",
        "regenerate",
        "resurrection",
        "symbol",
        "antimagic_field",
        "control_weather",
        "earthquake",
        "holy_aura",
        "astral_projection",
        "gate",
        "mass_heal",
        "true_resurrection",
      ],
      preparedFormula: "level + wis",
    },
    skillsCount: 2,
    skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
    subclasses: [
      {
        id: "war",
        name: "War Domain",
        heavyArmorProf: true,
        martialWeaponProf: true,
        grantedSpells: [
          "divine_favor",
          "shield_of_faith",
          "magic_weapon",
          "spiritual_weapon",
          "crusaders_mantle",
          "spirit_guardians",
          "freedom_of_movement",
          "stoneskin",
          "flame_strike",
          "hold_monster",
        ],
        features: [
          {
            level: 1,
            name: "War Cleric",
            description:
              "As a bonus action you can make an extra weapon attack (a limited number of times between rests).",
          },
          {
            level: 1,
            name: "Sacred Weapon",
            description:
              "As an action you imbue a weapon with divine power: add your Charisma modifier to attack rolls and it sheds light.",
          },
          {
            level: 6,
            name: "War God's Blessing",
            description:
              "As a reaction, using Channel Divinity, you grant an ally a bonus to an attack roll.",
          },
          {
            level: 8,
            name: "Divine Strike",
            description: "Once per turn your weapon attacks deal extra radiant damage.",
          },
          {
            level: 17,
            name: "Avatar of Battle",
            description:
              "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
          },
        ],
      },
      {
        id: "trickery",
        name: "Trickery Domain",
        grantedSpells: [
          "charm_person",
          "disguise_self",
          "mirror_image",
          "pass_without_trace",
          "blink",
          "dispel_magic",
          "dimension_door",
          "polymorph",
          "dominate_person",
          "modify_memory",
        ],
        features: [
          {
            level: 1,
            name: "Blessing of the Trickster",
            description:
              "With a touch you grant an ally advantage on Dexterity (Stealth) checks for an hour.",
          },
          {
            level: 1,
            name: "Invoke Duplicity",
            description:
              "As an action, using Channel Divinity, you create an illusory duplicate of yourself that lasts up to a minute.",
          },
          {
            level: 6,
            name: "Cloak of Shadows",
            description:
              "The duplicate lets you cast effects from a distance as if you were where the copy is.",
          },
          {
            level: 8,
            name: "Divine Strike",
            description: "Once per turn your weapon attacks deal extra poison damage.",
          },
          {
            level: 17,
            name: "Improved Duplicity",
            description: "You can create up to four copies of yourself at once.",
          },
        ],
      },
      {
        id: "life",
        name: "Life Domain",
        heavyArmorProf: true,
        grantedSpells: [
          "bless",
          "cure_wounds",
          "lesser_restoration",
          "spiritual_weapon",
          "beacon_of_hope",
          "revivify",
          "death_ward",
          "guardian_of_faith",
          "mass_cure_wounds",
          "raise_dead",
        ],
        features: [
          {
            level: 1,
            name: "Heavy Armor Proficiency",
            description: "You gain proficiency with heavy armor.",
          },
          {
            level: 1,
            name: "Disciple of Life",
            description: "Your healing spells restore an extra 2 + spell level HP.",
          },
          {
            level: 2,
            name: "Channel Divinity: Preserve Life",
            description:
              "As an action you restore a total of hit points to creatures within 30 feet equal to five times your cleric level.",
          },
          {
            level: 6,
            name: "Blessed Healer",
            description:
              "When you heal others with a spell, you also restore 2 + the spell's level in HP to yourself.",
          },
          {
            level: 8,
            name: "Divine Strike",
            description:
              "Once per turn your weapon attack deals an extra 1d8 radiant damage (2d8 at 14th level).",
          },
          {
            level: 17,
            name: "Supreme Healing",
            description:
              "Instead of rolling healing dice, you restore the maximum possible amount.",
          },
        ],
      },
      {
        id: "tempest",
        name: "Tempest Domain",
        heavyArmorProf: true,
        martialWeaponProf: true,
        grantedSpells: [
          "fog_cloud",
          "thunderwave",
          "gust_of_wind",
          "shatter",
          "call_lightning",
          "sleet_storm",
        ],
        features: [
          {
            level: 1,
            name: "Bonus Proficiencies",
            description: "You gain proficiency with martial weapons and heavy armor.",
          },
          {
            level: 1,
            name: "Wrath of the Storm",
            description:
              "When a creature within 5 feet hits you, as a reaction deal 2d8 lightning/thunder damage (DEX save halves).",
          },
          {
            level: 2,
            name: "Channel Divinity: Destructive Wrath",
            description: "Use Channel Divinity to deal maximum lightning/thunder damage.",
          },
          {
            level: 6,
            name: "Thunderbolt Strike",
            description: "When you deal lightning damage, push the target 10 feet.",
          },
          {
            level: 8,
            name: "Divine Strike",
            description: "Once per turn your weapon attack deals an extra 1d8 thunder damage.",
          },
          {
            level: 17,
            name: "Stormborn",
            description: "Gain a fly speed of 60 feet when outdoors.",
          },
        ],
      },
      {
        id: "light",
        name: "Light Domain",
        grantedSpells: [
          "light",
          "burning_hands",
          "faerie_fire",
          "flaming_sphere",
          "scorching_ray",
          "daylight",
          "fireball",
          "guardian_of_faith",
          "wall_of_fire",
          "flame_strike",
          "scrying",
        ],
        features: [
          {
            level: 1,
            name: "Bonus Cantrip",
            description: "You know the Light cantrip and additional domain spells.",
          },
          {
            level: 1,
            name: "Warding Flare",
            description:
              "As a reaction to an attack, impose disadvantage on the attacker with a flash of light.",
          },
          {
            level: 2,
            name: "Channel Divinity: Radiance of the Dawn",
            description:
              "As an action, emit radiance: creatures within 30 feet make a CON save or take 2d10 + cleric level radiant damage.",
          },
          {
            level: 6,
            name: "Improved Flare",
            description: "Use Radiance of the Dawn to protect allies from damage as a reaction.",
          },
          {
            level: 8,
            name: "Potent Spellcasting",
            description: "Add your Wisdom modifier to cleric cantrip damage.",
          },
          {
            level: 17,
            name: "Corona of Light",
            description:
              "A light aura 30 feet for 1 minute deals radiant damage to enemies and illuminates the area.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [
      "guidance",
      "light",
      "mending",
      "resistance",
      "sacred_flame",
      "spare_the_dying",
      "thaumaturgy",
      "toll_the_dead",
      "word_of_radiance",
      "bane",
      "bless",
      "command",
      "create_or_destroy_water",
      "cure_wounds",
      "detect_evil_and_good",
      "detect_magic",
      "detect_poison_and_disease",
      "guiding_bolt",
      "healing_word",
      "inflict_wounds",
      "protection_from_evil_and_good",
      "purify_food_and_drink",
      "sanctuary",
      "shield_of_faith",
      "aid",
      "augury",
      "blindness_deafness",
      "calm_emotions",
      "continual_flame",
      "enhance_ability",
      "find_traps",
      "gentle_repose",
      "hold_person",
      "lesser_restoration",
      "locate_object",
      "prayer_of_healing",
      "protection_from_poison",
      "silence",
      "spiritual_weapon",
      "warding_bond",
      "zone_of_truth",
      "animate_dead",
      "beacon_of_hope",
      "bestow_curse",
      "clairvoyance",
      "create_food_and_water",
      "daylight",
      "dispel_magic",
      "glyph_of_warding",
      "magic_circle",
      "mass_healing_word",
      "meld_into_stone",
      "protection_from_energy",
      "remove_curse",
      "revivify",
      "sending",
      "speak_with_dead",
      "spirit_guardians",
      "tongues",
      "water_walk",
      "banishment",
      "control_water",
      "death_ward",
      "divination",
      "freedom_of_movement",
      "guardian_of_faith",
      "locate_creature",
      "stone_shape",
      "commune",
      "contagion",
      "dispel_evil_and_good",
      "flame_strike",
      "geas",
      "greater_restoration",
      "hallow",
      "insect_plague",
      "legend_lore",
      "mass_cure_wounds",
      "planar_binding",
      "raise_dead",
      "scrying",
      "blade_barrier",
      "create_undead",
      "find_the_path",
      "forbiddance",
      "harm",
      "heal",
      "heroes_feast",
      "planar_ally",
      "true_seeing",
      "word_of_recall",
      "conjure_celestial",
      "divine_word",
      "etherealness",
      "fire_storm",
      "plane_shift",
      "regenerate",
      "resurrection",
      "symbol",
      "antimagic_field",
      "control_weather",
      "earthquake",
      "holy_aura",
      "astral_projection",
      "gate",
      "mass_heal",
      "true_resurrection",
    ],
    features: [
      {
        level: 1,
        name: "Spellcasting",
        desc: "You cast cleric spells using Wisdom as your spellcasting ability. Prepared spells = cleric level + Wisdom modifier.",
      },
      {
        level: 3,
        name: "Divine Domain",
        desc: "Choose a domain (subclass) that determines your additional spells and abilities.",
      },
      {
        level: 2,
        name: "Channel Divinity (1/rest)",
        desc: "You gain the ability to channel divine energy: Turn Undead and a special domain option.",
      },
      {
        level: 5,
        name: "Destroy Undead",
        desc: "When undead fail a saving throw against your Turn Undead, weak undead are instantly destroyed.",
      },
      {
        level: 6,
        name: "Channel Divinity (2/rest)",
        desc: "You can use Channel Divinity twice between rests.",
      },
      {
        level: 8,
        name: "Ability Score Improvement / Feat",
        desc: "Standard ASI: +2/+1+1 or a feat.",
      },
      {
        level: 10,
        name: "Divine Intervention",
        desc: "You can beseech your deity for aid; the chance of success increases with level.",
      },
    ],
  },
  bard: {
    id: "bard",
    name: "Bard",
    icon: "🎵",
    hitDice: "1d8",
    primaryAbility: "Charisma",
    primaryAbilityKey: "cha",
    savingThrows: ["dex", "cha"],
    savingThrowsLabel: "Dexterity, Charisma",
    armorProf: "Light armor",
    weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    spells: true,
    spellcasting: {
      ability: "cha",
      type: "known",
      cantripsByLevel: {
        1: 2,
        2: 2,
        3: 2,
        4: 3,
        5: 3,
        6: 3,
        7: 3,
        8: 3,
        9: 3,
        10: 4,
        11: 4,
        12: 4,
        13: 4,
        14: 4,
        15: 4,
        16: 4,
        17: 4,
        18: 4,
        19: 4,
        20: 4,
      },
      spellList: [
        "blade_ward",
        "dancing_lights",
        "friends",
        "light",
        "mage_hand",
        "mending",
        "message",
        "minor_illusion",
        "prestidigitation",
        "true_strike",
        "vicious_mockery",
        "animal_friendship",
        "bane",
        "charm_person",
        "comprehend_languages",
        "cure_wounds",
        "detect_magic",
        "disguise_self",
        "faerie_fire",
        "feather_fall",
        "healing_word",
        "heroism",
        "identify",
        "illusory_script",
        "longstrider",
        "silent_image",
        "sleep",
        "speak_with_animals",
        "tashas_hideous_laughter",
        "thunderwave",
        "unseen_servant",
        "animal_messenger",
        "blindness_deafness",
        "calm_emotions",
        "cloud_of_daggers",
        "crown_of_madness",
        "detect_thoughts",
        "enhance_ability",
        "enthrall",
        "heat_metal",
        "hold_person",
        "invisibility",
        "knock",
        "lesser_restoration",
        "locate_animals_or_plants",
        "locate_object",
        "magic_mouth",
        "see_invisibility",
        "shatter",
        "silence",
        "suggestion",
        "zone_of_truth",
        "bestow_curse",
        "clairvoyance",
        "dispel_magic",
        "fear",
        "glyph_of_warding",
        "hypnotic_pattern",
        "major_image",
        "nondetection",
        "plant_growth",
        "sending",
        "speak_with_dead",
        "speak_with_plants",
        "stinking_cloud",
        "tongues",
        "compulsion",
        "confusion",
        "dimension_door",
        "freedom_of_movement",
        "greater_invisibility",
        "hallucinatory_terrain",
        "locate_creature",
        "polymorph",
        "animate_objects",
        "awaken",
        "dominate_person",
        "dream",
        "geas",
        "greater_restoration",
        "hold_monster",
        "legend_lore",
        "mass_cure_wounds",
        "mislead",
        "modify_memory",
        "planar_binding",
        "raise_dead",
        "scrying",
        "seeming",
        "teleportation_circle",
        "eyebite",
        "find_the_path",
        "guards_and_wards",
        "irresistible_dance",
        "mass_suggestion",
        "programmed_illusion",
        "true_seeing",
        "etherealness",
        "forcecage",
        "magnificent_mansion",
        "mirage_arcane",
        "project_image",
        "regenerate",
        "resurrection",
        "symbol",
        "teleport",
        "dominate_monster",
        "feeblemind",
        "glibness",
        "mind_blank",
        "power_word_stun",
        "foresight",
        "power_word_kill",
        "true_polymorph",
      ],
      spellsKnownFormula: "level + 3",
    },
    skillsCount: 3,
    skills: [
      "Acrobatics",
      "Animal Handling",
      "Athletics",
      "Deception",
      "History",
      "Insight",
      "Intimidation",
      "Investigation",
      "Arcana",
      "Nature",
      "Perception",
      "Performance",
      "Medicine",
      "Religion",
      "Stealth",
      "Persuasion",
      "Sleight of Hand",
      "Survival",
    ],
    subclasses: [
      {
        id: "dance",
        name: "College of Dance",
        features: [
          {
            level: 3,
            name: "Fiery Footsteps",
            description:
              "You fight gracefully: your unarmed strike uses the Bard's die as damage, and while you wear no armor your AC = 10 + Dexterity + Charisma.",
          },
          {
            level: 3,
            name: "Graceful Warrior",
            description:
              "You move through battle as if dancing: it's harder to hit you once you've attacked this turn.",
          },
          {
            level: 6,
            name: "Unfettered Grace",
            description: "Your agility grants extra mobility and reactive movement in combat.",
          },
          {
            level: 14,
            name: "Butterfly Blades",
            description:
              "Your unarmed strikes deal more damage and can strike several enemies nearby.",
          },
        ],
      },
      {
        id: "glamour",
        name: "College of Glamour",
        features: [
          {
            level: 3,
            name: "Mantle of Inspiration",
            description:
              "As a bonus action you grant allies temporary hit points and the ability to immediately move without provoking opportunity attacks.",
          },
          {
            level: 3,
            name: "Enthralling Presence",
            description:
              "As an action you can charm creatures around you that can see you for a short time.",
          },
          {
            level: 6,
            name: "Mantle of Majesty",
            description:
              "As a reaction you force an attacker to attack a different target instead of you or to retreat.",
          },
          {
            level: 14,
            name: "Unbreakable Majesty",
            description:
              "Once per short rest you take on a majestic, awe-inspiring form, frightening enemies.",
          },
        ],
      },
      {
        id: "lore",
        name: "College of Lore",
        features: [
          {
            level: 3,
            name: "Bonus Proficiencies",
            description: "Proficiency in 3 skills of your choice.",
          },
          {
            level: 3,
            name: "Cutting Words",
            description:
              "Reaction: spend inspiration to reduce a creature's attack/check/damage roll by d6-d12.",
          },
          {
            level: 6,
            name: "Additional Magical Secrets",
            description: "Learn 2 spells from any class. They become bard spells.",
          },
          {
            level: 14,
            name: "Peerless Skill",
            description:
              "Spend inspiration: a skill check with proficiency becomes at least 10 + the bonus.",
          },
        ],
      },
      {
        id: "valor",
        name: "College of Valor",
        martialWeaponProf: true,
        mediumArmorProf: true,
        shieldProf: true,
        features: [
          {
            level: 3,
            name: "Bonus Proficiencies",
            description: "Proficiency with medium armor, shields, and martial weapons.",
          },
          {
            level: 3,
            name: "Combat Inspiration",
            description:
              "A creature with your inspiration can add the die to a weapon damage roll or to AC against an attack.",
          },
          {
            level: 6,
            name: "Extra Attack",
            description: "Attack twice when you take the Attack action.",
          },
          {
            level: 14,
            name: "War Magic",
            description: "Bonus action: a weapon attack after casting a bonus action spell.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      { level: 1, name: "Spellcasting", desc: "You cast bard spells using Charisma." },
      {
        level: 2,
        name: "Jack of All Trades",
        desc: "You add half your proficiency bonus to any ability check that doesn't already include proficiency.",
      },
      {
        level: 2,
        name: "Song of Rest",
        desc: "During a short rest, allies regain extra hit points from your music.",
      },
      {
        level: 5,
        name: "Font of Inspiration",
        desc: "Your Bardic Inspiration is restored after a short or long rest.",
      },
    ],
  },
  druid: {
    id: "druid",
    name: "Druid",
    icon: "🌿",
    hitDice: "1d8",
    primaryAbility: "Wisdom",
    primaryAbilityKey: "wis",
    savingThrows: ["int", "wis"],
    savingThrowsLabel: "Intelligence, Wisdom",
    armorProf: "Light and medium armor, shields (non-metal)",
    weaponProf: "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings",
    spells: true,
    spellcasting: {
      ability: "wis",
      type: "prepared",
      cantripsByLevel: {
        1: 2,
        2: 2,
        3: 2,
        4: 3,
        5: 3,
        6: 3,
        7: 3,
        8: 3,
        9: 3,
        10: 4,
        11: 4,
        12: 4,
        13: 4,
        14: 4,
        15: 4,
        16: 4,
        17: 4,
        18: 4,
        19: 4,
        20: 4,
      },
      spellList: [
        "druidcraft",
        "guidance",
        "mending",
        "poison_spray",
        "produce_flame",
        "resistance",
        "shillelagh",
        "thorn_whip",
        "animal_friendship",
        "charm_person",
        "create_or_destroy_water",
        "cure_wounds",
        "detect_magic",
        "detect_poison_and_disease",
        "entangle",
        "faerie_fire",
        "fog_cloud",
        "goodberry",
        "healing_word",
        "jump",
        "longstrider",
        "purify_food_and_drink",
        "speak_with_animals",
        "thunderwave",
        "animal_messenger",
        "barkskin",
        "beast_sense",
        "darkvision",
        "enhance_ability",
        "find_traps",
        "flame_blade",
        "flaming_sphere",
        "gust_of_wind",
        "heat_metal",
        "hold_person",
        "lesser_restoration",
        "locate_animals_or_plants",
        "locate_object",
        "moonbeam",
        "pass_without_trace",
        "protection_from_poison",
        "spike_growth",
        "call_lightning",
        "conjure_animals",
        "daylight",
        "dispel_magic",
        "meld_into_stone",
        "plant_growth",
        "protection_from_energy",
        "sleet_storm",
        "speak_with_plants",
        "water_breathing",
        "water_walk",
        "wind_wall",
        "blight",
        "confusion",
        "conjure_minor_elementals",
        "conjure_woodland_beings",
        "control_water",
        "dominate_beast",
        "freedom_of_movement",
        "giant_insect",
        "grasping_vine",
        "hallucinatory_terrain",
        "ice_storm",
        "locate_creature",
        "polymorph",
        "stone_shape",
        "stoneskin",
        "wall_of_fire",
        "antilife_shell",
        "awaken",
        "commune_with_nature",
        "conjure_elemental",
        "contagion",
        "geas",
        "greater_restoration",
        "insect_plague",
        "mass_cure_wounds",
        "planar_binding",
        "reincarnate",
        "scrying",
        "tree_stride",
        "wall_of_stone",
        "conjure_fey",
        "find_the_path",
        "heal",
        "heroes_feast",
        "move_earth",
        "sunbeam",
        "transport_via_plants",
        "wall_of_thorns",
        "wind_walk",
        "fire_storm",
        "mirage_arcane",
        "plane_shift",
        "regenerate",
        "reverse_gravity",
        "animal_shapes",
        "antipathy_sympathy",
        "control_weather",
        "earthquake",
        "feeblemind",
        "sunburst",
        "tsunami",
        "foresight",
        "shapechange",
        "storm_of_vengeance",
        "true_resurrection",
      ],
      preparedFormula: "level + wis",
    },
    skillsCount: 2,
    skills: [
      "Animal Handling",
      "Arcana",
      "Insight",
      "Medicine",
      "Nature",
      "Perception",
      "Religion",
      "Survival",
    ],
    subclasses: [
      {
        id: "sea",
        name: "Circle of the Sea",
        features: [
          {
            level: 2,
            name: "Wrath of the Sea",
            description:
              "As an action you summon a swirl of water and wind around you that pushes and harms enemies nearby.",
          },
          {
            level: 6,
            name: "Aura of the Tides",
            description:
              "Your sea mantle grants you and allies resistance to one element and extra mobility.",
          },
          {
            level: 10,
            name: "Wall of Water",
            description: "You can create a wall of water that slows projectiles and enemies.",
          },
          {
            level: 14,
            name: "Fury of the Sea",
            description: "Your sea manifestation grows stronger, knocking enemies off their feet.",
          },
        ],
      },
      {
        id: "stars",
        name: "Circle of the Stars",
        features: [
          {
            level: 2,
            name: "Star Map",
            description:
              "You carry a map of the night sky that grants you additional divination spells and guidance.",
          },
          {
            level: 2,
            name: "Starry Form",
            description:
              "As a bonus action you take on a constellation: Archer (ranged damage), Chalice (healing), or Dragon (concentration).",
          },
          {
            level: 6,
            name: "Cosmic Omen",
            description:
              "Once per turn you grant advantage or impose disadvantage on a roll nearby.",
          },
          {
            level: 10,
            name: "Radiant Soul",
            description:
              "While in your Starry Form, you gain temporary hit points at the start of each turn.",
          },
          {
            level: 14,
            name: "Constellation Lord",
            description:
              "Your Starry Form becomes significantly more powerful for each of the three constellations.",
          },
        ],
      },
      {
        id: "land",
        name: "Circle of the Land",
        features: [
          { level: 2, name: "Bonus Cantrip", description: "A druid spell of your choice." },
          {
            level: 2,
            name: "Natural Recovery",
            description:
              "During a short rest: recover spell slots. Total level ≤ half your druid level (rounded up).",
          },
          {
            level: 3,
            name: "Circle Spells",
            description:
              "Choose a terrain (Arctic, Coast, Forest, Grassland, Mountain, Swamp, Underdark). Gain the circle's spells.",
          },
          {
            level: 6,
            name: "Land's Stride",
            description:
              "Move through nonmagical difficult terrain without cost. Pass through nonmagical plants without damage or being slowed.",
          },
          {
            level: 10,
            name: "Nature's Ward",
            description:
              "Immunity to poison and disease. Immunity to charm and fear from elementals and fey.",
          },
          {
            level: 14,
            name: "Nature's Sanctuary",
            description:
              "Beasts and plants can't attack you unless you attack first. If they attack: Wisdom saving throw or they can't attack you.",
          },
        ],
      },
      {
        id: "moon",
        name: "Circle of the Moon",
        features: [
          {
            level: 2,
            name: "Combat Wild Shape",
            description:
              "Wild Shape as a bonus action. Use Wild Shape to heal yourself: spend a spell slot, restore 1d8 HP per slot level.",
          },
          {
            level: 2,
            name: "Circle Forms",
            description:
              "Transform into beasts with a challenge rating = druid level / 3 (rounded down). Ignore swim/fly speed restrictions.",
          },
          {
            level: 6,
            name: "Primal Strike",
            description:
              "Your beast-form attacks count as magical for overcoming resistance and immunity.",
          },
          {
            level: 10,
            name: "Elemental Wild Shape",
            description:
              "Spend 2 uses of Wild Shape: transform into an air, earth, fire, or water elemental.",
          },
          {
            level: 14,
            name: "Thousand Forms",
            description: "Cast alter self at will without expending a slot.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      { level: 1, name: "Druidic", desc: "You know Druidic — the secret language of druids." },
      { level: 2, name: "Wild Shape", desc: "You can transform into beasts you have seen before." },
      { level: 18, name: "Timeless Body", desc: "You age 10 times more slowly." },
      {
        level: 20,
        name: "Archdruid",
        desc: "You can use Wild Shape an unlimited number of times.",
      },
    ],
  },
  monk: {
    id: "monk",
    name: "Monk",
    icon: "🥋",
    hitDice: "1d8",
    primaryAbility: "Dexterity and Wisdom",
    primaryAbilityKey: "dex",
    savingThrows: ["str", "dex"],
    savingThrowsLabel: "Strength, Dexterity",
    armorProf: "None",
    unarmoredDefense: "10 + dex + wis",
    unarmoredSpeedBonus: 10,
    resource: "Ki Points",
    weaponProf: "Simple weapons, shortswords",
    unarmoredDefense: "10 + dex + wis",
    skillsCount: 2,
    skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
    subclasses: [
      {
        id: "mercy",
        name: "Way of Mercy",
        features: [
          {
            level: 3,
            name: "Hands of Healing and Harm",
            description:
              "By spending a Focus Point, you can heal with a touch or deal extra necrotic damage.",
          },
          {
            level: 6,
            name: "Healing Techniques",
            description: "Your healing touch can also remove conditions (poisoned, blinded, etc.).",
          },
          {
            level: 11,
            name: "Easing Suffering",
            description: "When you heal someone, you also grant them temporary hit points.",
          },
          {
            level: 17,
            name: "Hand of Healing/Death",
            description: "Your touches of mercy become extraordinarily potent in healing and harm.",
          },
        ],
      },
      {
        id: "shadow",
        name: "Way of Shadow",
        features: [
          {
            level: 3,
            name: "Shadow Arts",
            description:
              "For Focus Points you cast: Darkness, Darkvision, Silence, or Minor Illusion.",
          },
          {
            level: 6,
            name: "Shadow Step",
            description:
              "In dim light or darkness you teleport between shadows as a bonus action with advantage on your next attack.",
          },
          {
            level: 11,
            name: "Cloak of Shadows",
            description:
              "You can become invisible in an area of shadow until you step into light or attack.",
          },
          {
            level: 17,
            name: "Opportunist",
            description:
              "When a creature near you is hit by someone else, you can use a reaction to attack it.",
          },
        ],
      },
      {
        id: "elements",
        name: "Way of the Elements",
        features: [
          {
            level: 3,
            name: "Elemental Manifestation",
            description:
              "You channel Focus Points into elemental techniques: extended reach on strikes and elemental damage.",
          },
          {
            level: 6,
            name: "Elemental Fury",
            description: "Your elemental techniques become cheaper, and their damage increases.",
          },
          {
            level: 11,
            name: "Elemental Progression",
            description:
              "You master more powerful elemental manifestations — push, pull, mobility.",
          },
          {
            level: 17,
            name: "Elemental Strike",
            description: "Your elemental strikes can stun and knock back enemies.",
          },
        ],
      },
      {
        id: "open_hand",
        name: "Way of the Open Hand",
        flurryOfBlowsEffects: true,
        features: [
          {
            level: 3,
            name: "Open Hand Technique",
            description:
              "When you hit a creature with one of the attacks granted by Flurry of Blows, you can impose one of the following effects: the target must make a Dexterity saving throw or be knocked prone; the target must make a Strength saving throw or be pushed 15 feet; or the target can't take reactions until the end of your next turn.",
          },
          {
            level: 6,
            name: "Wholeness of Body",
            description:
              "As an action you can spend 1 ki point to restore a number of HP equal to your Martial Arts die roll + your Wisdom modifier.",
          },
          {
            level: 11,
            name: "Tranquility",
            description:
              "You can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest you gain the effect of the Sanctuary spell, which lasts until the start of your next long rest.",
          },
          {
            level: 17,
            name: "Quivering Palm",
            description:
              "When you hit a creature with an unarmed strike, you can spend 3 ki points to start imperceptible vibrations in the creature's body. Over the next days, equal to your monk level, you can use an action to end the vibrations, forcing the creature to drop to 0 HP. The creature can make a Constitution saving throw to avoid the effect.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    features: [
      {
        level: 1,
        name: "Unarmored Defense",
        desc: "Without armor your AC = 10 + Dexterity + Wisdom.",
      },
      {
        level: 1,
        name: "Martial Arts",
        desc: "Your unarmed strikes and monk weapons use a d4 for damage (increases with level).",
      },
      { level: 2, name: "Ki", desc: "You gain ki points for special abilities." },
      {
        level: 2,
        name: "Unarmored Movement",
        desc: "Your speed increases by 10 feet while unarmored.",
      },
    ],
  },
  paladin: {
    id: "paladin",
    name: "Paladin",
    icon: "⚔️",
    hitDice: "1d10",
    primaryAbility: "Strength and Charisma",
    primaryAbilityKey: "str",
    savingThrows: ["wis", "cha"],
    savingThrowsLabel: "Wisdom, Charisma",
    armorProf: "All armor, shields",
    weaponProf: "Simple and martial weapons",
    spells: true,
    spellcasting: {
      ability: "cha",
      type: "prepared",
      cantripsByLevel: {},
      spellList: [
        "bless",
        "command",
        "compelled_duel",
        "cure_wounds",
        "detect_evil_and_good",
        "detect_magic",
        "detect_poison_and_disease",
        "divine_favor",
        "heroism",
        "protection_from_evil_and_good",
        "purify_food_and_drink",
        "searing_smite",
        "shield_of_faith",
        "thunderous_smite",
        "wrathful_smite",
        "aid",
        "branding_smite",
        "find_steed",
        "lesser_restoration",
        "locate_object",
        "magic_weapon",
        "protection_from_poison",
        "zone_of_truth",
        "aura_of_vitality",
        "blinding_smite",
        "create_food_and_water",
        "crusaders_mantle",
        "daylight",
        "dispel_magic",
        "elemental_weapon",
        "magic_circle",
        "remove_curse",
        "revivify",
        "aura_of_life",
        "aura_of_purity",
        "banishment",
        "death_ward",
        "locate_creature",
        "staggering_smite",
        "banishing_smite",
        "circle_of_power",
        "destructive_wave",
        "dispel_evil_and_good",
        "geas",
        "raise_dead",
      ],
      preparedFormula: "Math.floor(level / 2) + cha",
    },
    skillsCount: 2,
    skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
    subclasses: [
      {
        id: "glory",
        name: "Oath of Glory",
        grantedSpells: [
          "guiding_bolt",
          "heroism",
          "enhance_ability",
          "magic_weapon",
          "haste",
          "protection_from_energy",
          "compulsion",
          "freedom_of_movement",
        ],
        features: [
          {
            level: 3,
            name: "Channel Divinity: Inspiring Smite",
            description:
              "When you deal damage with an attack, you can add radiant damage equal to your level.",
          },
          {
            level: 3,
            name: "Channel Divinity: Peerless Athlete",
            description:
              "As a bonus action you temporarily increase the speed of allies around you.",
          },
          {
            level: 7,
            name: "Aura of Alacrity",
            description: "You and allies nearby gain a bonus to speed.",
          },
          {
            level: 15,
            name: "Glorious Defense",
            description: "Once per turn, when you hit, you can grant an ally a reactive attack.",
          },
          {
            level: 20,
            name: "Living Avatar of Glory",
            description:
              "You radiate divine light: bonuses to attacks and extra damage for a short time.",
          },
        ],
      },
      {
        id: "devotion",
        name: "Oath of Devotion",
        grantedSpells: [
          "protection_from_evil_and_good",
          "sanctuary",
          "lesser_restoration",
          "zone_of_truth",
          "beacon_of_hope",
          "dispel_magic",
          "freedom_of_movement",
          "guardian_of_faith",
          "commune",
          "flame_strike",
        ],
        features: [
          {
            level: 3,
            name: "Sacred Weapon",
            description:
              "Action: a weapon sheds bright light for 20 feet. Add your Charisma modifier to attack rolls with that weapon. 1 minute.",
          },
          {
            level: 3,
            name: "Channel Divinity: Turn the Unholy",
            description:
              "Action: fey and undead within 30 feet. Wisdom save or turned for 1 minute.",
          },
          {
            level: 7,
            name: "Aura of Devotion",
            description: "You and allies within 10 feet can't be charmed. 30 feet at 18th level.",
          },
          {
            level: 15,
            name: "Purity of Spirit",
            description: "Permanent effect of the protection from evil and good spell.",
          },
          {
            level: 20,
            name: "Holy Nimbus",
            description:
              "Action: a 30-foot aura of light for 1 minute. Bright light. Hostile creatures have disadvantage on saving throws against your spells and Channel Divinity. An enemy that starts its turn in the aura: 10 radiant damage.",
          },
        ],
      },
      {
        id: "ancients",
        name: "Oath of the Ancients",
        grantedSpells: [
          "ensnaring_strike",
          "speak_with_animals",
          "moonbeam",
          "misty_step",
          "plant_growth",
          "protection_from_energy",
          "ice_storm",
          "stoneskin",
          "commune_with_nature",
          "tree_stride",
        ],
        features: [
          {
            level: 3,
            name: "Channel Divinity: Nature's Wrath",
            description:
              "Action: plants within 10 feet of a point within 30 feet come to life. Difficult terrain. Strength save or restrained.",
          },
          {
            level: 3,
            name: "Channel Divinity: Turn the Faithless",
            description:
              "Action: fey, undead, elementals within 30 feet. Wisdom save or turned for 1 minute.",
          },
          {
            level: 7,
            name: "Aura of Warding",
            description:
              "You and allies within 10 feet have resistance to damage from spells. 30 feet at 18th level.",
          },
          {
            level: 15,
            name: "Undying Sentinel",
            description: "When dropping to 0 HP: drop to 1 HP instead. Once per long rest.",
          },
          {
            level: 20,
            name: "Elder Champion",
            description:
              "Action: a form of ancient power for 1 minute. Resistance to all damage. Allies within 10 feet have advantage on saving throws against spells and other magical effects.",
          },
        ],
      },
      {
        id: "vengeance",
        name: "Oath of Vengeance",
        grantedSpells: [
          "bane",
          "hunters_mark",
          "hold_person",
          "misty_step",
          "haste",
          "protection_from_energy",
          "banishment",
          "dimension_door",
          "hold_monster",
          "scrying",
        ],
        features: [
          {
            level: 3,
            name: "Channel Divinity: Vow of Enmity",
            description:
              "Bonus action: declare a vow against a creature within 10 feet. Advantage on attack rolls against it for 1 minute or until it drops to 0 HP.",
          },
          {
            level: 3,
            name: "Channel Divinity: Abjure Enemy",
            description:
              "Reaction to a creature's attack: an opportunity attack after the creature's attack. Advantage on the attack.",
          },
          {
            level: 7,
            name: "Relentless Avenger",
            description:
              "Reaction: an opportunity attack when a creature within 5 feet attacks a target other than you. Half your speed: move closer to the creature as part of the reaction.",
          },
          {
            level: 15,
            name: "Soul of Vengeance",
            description:
              "Bonus action after an opportunity attack: teleport 60 feet to an empty space you can see.",
          },
          {
            level: 20,
            name: "Avatar of Vengeance",
            description:
              "Action: a form of vengeance for 1 minute. Advantage on attack rolls. Creatures within 10 feet have disadvantage on saving throws against your spells and Channel Divinity.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      {
        level: 1,
        name: "Divine Sense",
        desc: "You sense the presence of celestials, undead, and creatures of the Lower Planes within 60 feet.",
      },
      { level: 1, name: "Lay on Hands", desc: "You can heal with a touch, restoring hit points." },
      {
        level: 2,
        name: "Fighting Style",
        desc: "Choose a fighting style (Defense, Dueling, Great Weapon, etc.).",
      },
      { level: 2, name: "Spellcasting", desc: "You gain the ability to cast paladin spells." },
    ],
  },
  ranger: {
    id: "ranger",
    name: "Ranger",
    icon: "🏹",
    hitDice: "1d10",
    primaryAbility: "Dexterity and Wisdom",
    primaryAbilityKey: "dex",
    savingThrows: ["str", "dex"],
    savingThrowsLabel: "Strength, Dexterity",
    armorProf: "Light and medium armor, shields",
    weaponProf: "Simple and martial weapons",
    spells: true,
    spellcasting: {
      ability: "wis",
      type: "known",
      cantripsByLevel: {},
      spellList: [
        "alarm",
        "animal_friendship",
        "cure_wounds",
        "detect_magic",
        "detect_poison_and_disease",
        "ensnaring_strike",
        "fog_cloud",
        "goodberry",
        "hail_of_thorns",
        "hunters_mark",
        "jump",
        "longstrider",
        "speak_with_animals",
        "animal_messenger",
        "barkskin",
        "beast_sense",
        "cordon_of_arrows",
        "darkvision",
        "find_traps",
        "lesser_restoration",
        "locate_animals_or_plants",
        "locate_object",
        "pass_without_trace",
        "protection_from_poison",
        "silence",
        "spike_growth",
        "conjure_animals",
        "conjure_barrage",
        "daylight",
        "lightning_arrow",
        "nondetection",
        "plant_growth",
        "protection_from_energy",
        "speak_with_plants",
        "water_breathing",
        "water_walk",
        "wind_wall",
        "conjure_woodland_beings",
        "freedom_of_movement",
        "grasping_vine",
        "locate_creature",
        "stoneskin",
        "commune_with_nature",
        "conjure_volley",
        "swift_quiver",
        "tree_stride",
      ],
      spellsKnownFormula: "Math.floor(level / 2) + 1",
    },
    skillsCount: 3,
    skills: [
      "Animal Handling",
      "Athletics",
      "Insight",
      "Investigation",
      "Nature",
      "Perception",
      "Stealth",
      "Survival",
    ],
    subclasses: [
      {
        id: "fey_wanderer",
        name: "Fey Wanderer",
        grantedSpells: ["charm_person", "misty_step", "dispel_magic", "dimension_door", "mislead"],
        features: [
          {
            level: 3,
            name: "Gift of the First World",
            description:
              "Your attacks deal extra psychic damage, and you gain a bonus to social checks.",
          },
          {
            level: 3,
            name: "Beguiling Twist",
            description: "You can't be charmed, and you have advantage against enchantment.",
          },
          {
            level: 7,
            name: "Winding Paths",
            description: "As a bonus action you teleport a short distance.",
          },
          {
            level: 11,
            name: "Radiant Mind",
            description: "Your psychic damage strikes several enemies near the target.",
          },
          {
            level: 15,
            name: "Fade into the Feywild",
            description: "As a reaction to damage you become invisible and move.",
          },
        ],
      },
      {
        id: "gloom_stalker",
        name: "Gloom Stalker",
        grantedSpells: ["disguise_self", "rope_trick", "fear", "greater_invisibility", "seeming"],
        features: [
          {
            level: 3,
            name: "Dread Ambusher",
            description:
              "In the first round of combat you add a bonus to speed and an extra attack with extra damage.",
          },
          {
            level: 3,
            name: "Umbral Sight",
            description: "You see in magical darkness and have superior darkvision.",
          },
          {
            level: 7,
            name: "Iron Mind",
            description:
              "You gain proficiency in Wisdom saving throws (or another if you already have it).",
          },
          {
            level: 11,
            name: "Stalker's Flurry",
            description: "Having missed a target that can't see you, you can strike another.",
          },
          {
            level: 15,
            name: "Hidden Assassin",
            description: "You can become invisible when you miss, in order to hide.",
          },
        ],
      },
      {
        id: "hunter",
        name: "Hunter",
        features: [
          {
            level: 3,
            name: "Hunter's Prey",
            description:
              "Choose: Colossus Slayer (+1d8 damage to large creatures), Horde Breaker (an extra attack on a hit if another creature is near), or Giant Killer (the target has disadvantage on attacks against you until your next turn).",
          },
          {
            level: 7,
            name: "Defensive Tactics",
            description:
              "Choose: Escape the Horde (opportunity attacks have disadvantage), Multiattack Defense (+2/+4 bonus to AC against attacks), or Steel Will (advantage on saving throws against fear).",
          },
          {
            level: 11,
            name: "Multiattack",
            description:
              "Choose: Volley (attack two creatures with one attack), Whirlwind Attack (an opportunity attack against any number of creatures), or Volley Counterattack (reaction: attack after a creature misses).",
          },
          {
            level: 15,
            name: "Superior Hunter's Defense",
            description:
              "Choose: Evasion (half damage on a failed Dexterity save, 0 on success), Stand Against the Tide (reaction: opportunity attack against the attacker), or Vanish (bonus action: hide).",
          },
        ],
      },
      {
        id: "beast_master",
        name: "Beast Master",
        features: [
          {
            level: 3,
            name: "Ranger's Companion",
            description:
              "Gain a beast companion (challenge rating ≤ 1/4, no fly speed). The beast acts on your turn. Command: a bonus action for the beast's attacks.",
          },
          {
            level: 7,
            name: "Exceptional Training",
            description:
              "The beast can take the Dash, Disengage, Help, or Dodge action on its turn.",
          },
          {
            level: 11,
            name: "Bestial Fury",
            description: "The beast can make two attacks when you command it to attack.",
          },
          {
            level: 15,
            name: "Share Spells",
            description:
              "When you cast a spell on yourself: it also affects the beast if it's within 30 feet.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      {
        level: 1,
        name: "Favored Enemy",
        desc: "You have advantage on checks to track and recall knowledge about a chosen type of creature.",
      },
      {
        level: 1,
        name: "Natural Explorer",
        desc: "You have advantages in a chosen type of terrain.",
      },
      {
        level: 2,
        name: "Fighting Style",
        desc: "Choose a fighting style (Archery, Defense, Dueling, etc.).",
      },
    ],
  },
  sorcerer: {
    id: "sorcerer",
    name: "Sorcerer",
    icon: "✨",
    hitDice: "1d6",
    primaryAbility: "Charisma",
    primaryAbilityKey: "cha",
    savingThrows: ["con", "cha"],
    savingThrowsLabel: "Constitution, Charisma",
    armorProf: "None",
    resource: "Sorcery Points",
    weaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows",
    spells: true,
    spellcasting: {
      ability: "cha",
      type: "known",
      cantripsByLevel: {
        1: 4,
        2: 4,
        3: 4,
        4: 5,
        5: 5,
        6: 5,
        7: 5,
        8: 5,
        9: 5,
        10: 6,
        11: 6,
        12: 6,
        13: 6,
        14: 6,
        15: 6,
        16: 6,
        17: 6,
        18: 6,
        19: 6,
        20: 6,
      },
      spellList: [
        "acid_splash",
        "blade_ward",
        "chill_touch",
        "dancing_lights",
        "fire_bolt",
        "friends",
        "light",
        "mage_hand",
        "mending",
        "message",
        "minor_illusion",
        "poison_spray",
        "prestidigitation",
        "ray_of_frost",
        "shocking_grasp",
        "true_strike",
        "burning_hands",
        "charm_person",
        "chromatic_orb",
        "color_spray",
        "comprehend_languages",
        "detect_magic",
        "disguise_self",
        "expeditious_retreat",
        "false_life",
        "feather_fall",
        "fog_cloud",
        "jump",
        "mage_armor",
        "magic_missile",
        "shield",
        "silent_image",
        "sleep",
        "thunderwave",
        "witch_bolt",
        "alter_self",
        "blindness_deafness",
        "blur",
        "cloud_of_daggers",
        "crown_of_madness",
        "darkness",
        "darkvision",
        "detect_thoughts",
        "enhance_ability",
        "enlarge_reduce",
        "gust_of_wind",
        "hold_person",
        "invisibility",
        "knock",
        "levitate",
        "mirror_image",
        "misty_step",
        "scorching_ray",
        "see_invisibility",
        "shatter",
        "spider_climb",
        "suggestion",
        "web",
        "blink",
        "clairvoyance",
        "counterspell",
        "daylight",
        "dispel_magic",
        "fear",
        "fireball",
        "fly",
        "gaseous_form",
        "haste",
        "hypnotic_pattern",
        "lightning_bolt",
        "major_image",
        "protection_from_energy",
        "sleet_storm",
        "slow",
        "stinking_cloud",
        "tongues",
        "water_breathing",
        "water_walk",
        "banishment",
        "blight",
        "confusion",
        "dimension_door",
        "dominate_beast",
        "greater_invisibility",
        "ice_storm",
        "polymorph",
        "stoneskin",
        "wall_of_fire",
        "animate_objects",
        "cloudkill",
        "cone_of_cold",
        "creation",
        "dominate_person",
        "hold_monster",
        "insect_plague",
        "seeming",
        "telekinesis",
        "teleportation_circle",
        "wall_of_stone",
        "arcane_gate",
        "chain_lightning",
        "circle_of_death",
        "disintegrate",
        "eyebite",
        "globe_of_invulnerability",
        "mass_suggestion",
        "move_earth",
        "sunbeam",
        "true_seeing",
        "delayed_blast_fireball",
        "etherealness",
        "finger_of_death",
        "fire_storm",
        "plane_shift",
        "prismatic_spray",
        "reverse_gravity",
        "teleport",
        "dominate_monster",
        "earthquake",
        "incendiary_cloud",
        "power_word_stun",
        "sunburst",
        "gate",
        "meteor_swarm",
        "power_word_kill",
        "time_stop",
        "wish",
      ],
      spellsKnownFormula: "level + 1",
    },
    skillsCount: 2,
    skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
    subclasses: [
      {
        id: "aberrant",
        name: "Aberrant Mind",
        grantedSpells: [
          "arms_of_hadar",
          "detect_thoughts",
          "hunger_of_hadar",
          "evards_black_tentacles",
          "telekinesis",
        ],
        features: [
          {
            level: 1,
            name: "Telepathic Speech",
            description:
              "You can communicate telepathically with creatures nearby and gain psychic spells.",
          },
          {
            level: 1,
            name: "Psionic Spells",
            description:
              "You can spend Sorcery Points to cast your psionic spells without components.",
          },
          {
            level: 6,
            name: "Psychic Defenses",
            description:
              "You gain resistance to psychic damage, and as a reaction you can reflect the damage back.",
          },
          {
            level: 14,
            name: "Weapons of Order",
            description: "Your psychic spells can stun or subdue enemies.",
          },
          {
            level: 18,
            name: "Warping of Reality",
            description: "Your aberrant power lets you rearrange the space around you.",
          },
        ],
      },
      {
        id: "clockwork",
        name: "Clockwork Soul",
        grantedSpells: [
          "alarm",
          "protection_from_evil_and_good",
          "aid",
          "lesser_restoration",
          "dispel_magic",
          "protection_from_energy",
          "freedom_of_movement",
          "globe_of_invulnerability",
        ],
        features: [
          {
            level: 1,
            name: "Restore Balance",
            description: "As a reaction you can cancel advantage or disadvantage on a roll nearby.",
          },
          {
            level: 1,
            name: "Clockwork Magic",
            description: "You gain spells of order that are always prepared.",
          },
          {
            level: 6,
            name: "Bastion of Law",
            description: "You create a protective field that absorbs damage to you or an ally.",
          },
          {
            level: 14,
            name: "Trance of Order",
            description: "You can briefly distort time in order to act again.",
          },
          {
            level: 18,
            name: "Perfect Order",
            description: "Your magic becomes flawlessly predictable and powerful.",
          },
        ],
      },
      {
        id: "wild_magic",
        name: "Wild Magic",
        features: [
          {
            level: 1,
            name: "Wild Magic Surge",
            description:
              "When you cast a spell, you can trigger a random magical effect from the chaos table.",
          },
          {
            level: 1,
            name: "Tides of Chaos",
            description:
              "Once between rests you can gain advantage on a roll, provoking a Wild Magic Surge.",
          },
          {
            level: 6,
            name: "Bend Luck",
            description:
              "With a Sorcery Point you grant a bonus or penalty to a roll of a creature nearby.",
          },
          {
            level: 14,
            name: "Controlled Chaos",
            description: "When a surge triggers, you can roll twice and choose the effect.",
          },
          {
            level: 18,
            name: "Magical Resilience",
            description: "You gain advantage on all saving throws against spells.",
          },
        ],
      },
      {
        id: "draconic_bloodline",
        name: "Draconic Bloodline",
        baseAC: 13,
        hpBonusPerLevel: 1,
        features: [
          {
            level: 1,
            name: "Draconic Ancestor",
            description:
              "Choose a type of dragon as your ancestor. The damage type associated with each dragon is used by your abilities.",
          },
          {
            level: 1,
            name: "Draconic Resilience",
            description:
              "Your maximum HP increases by 1, and increases by 1 more with each new sorcerer level. In addition, parts of your skin are covered by thin scales. When you wear no armor, your AC equals 13 + your Dexterity modifier.",
          },
          {
            level: 6,
            name: "Elemental Affinity",
            description:
              "When you cast a spell that deals damage of the type associated with your draconic ancestor, you can add your Charisma modifier to one of the spell's damage rolls. You also gain resistance to that damage type.",
          },
          {
            level: 14,
            name: "Dragon Wings",
            description:
              "You gain the ability to sprout dragon wings from your back, gaining a fly speed equal to your current speed. You can create these wings as a bonus action on your turn.",
          },
          {
            level: 18,
            name: "Draconic Presence",
            description:
              "As an action you can spend 5 sorcery points to create an aura of fear or awe within a 60-foot radius. For 1 minute or until you lose concentration, each hostile creature that starts its turn in the aura must make a Wisdom saving throw or become charmed (awe) or frightened (fear) until the aura ends.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      { level: 1, name: "Spellcasting", desc: "You cast sorcerer spells using innate magic." },
      {
        level: 1,
        name: "Sorcerous Origin",
        desc: "Choose the source of your magic (Draconic Bloodline, Wild Magic, etc.).",
      },
      { level: 2, name: "Font of Magic", desc: "You gain sorcery points for metamagic." },
      { level: 3, name: "Metamagic", desc: "You can alter spells in special ways." },
    ],
  },
  warlock: {
    id: "warlock",
    name: "Warlock",
    icon: "🔮",
    hitDice: "1d8",
    primaryAbility: "Charisma",
    primaryAbilityKey: "cha",
    savingThrows: ["wis", "cha"],
    savingThrowsLabel: "Wisdom, Charisma",
    armorProf: "Light armor",
    weaponProf: "Simple weapons",
    spells: true,
    spellcasting: {
      ability: "cha",
      type: "known",
      cantripsByLevel: {
        1: 2,
        2: 2,
        3: 2,
        4: 3,
        5: 3,
        6: 3,
        7: 3,
        8: 3,
        9: 3,
        10: 4,
        11: 4,
        12: 4,
        13: 4,
        14: 4,
        15: 4,
        16: 4,
        17: 4,
        18: 4,
        19: 4,
        20: 4,
      },
      spellList: [
        "blade_ward",
        "chill_touch",
        "eldritch_blast",
        "friends",
        "mage_hand",
        "minor_illusion",
        "poison_spray",
        "prestidigitation",
        "true_strike",
        "armor_of_agathys",
        "arms_of_hadar",
        "charm_person",
        "comprehend_languages",
        "expeditious_retreat",
        "hellish_rebuke",
        "hex",
        "illusory_script",
        "protection_from_evil_and_good",
        "unseen_servant",
        "witch_bolt",
        "cloud_of_daggers",
        "crown_of_madness",
        "darkness",
        "enthrall",
        "hold_person",
        "invisibility",
        "mirror_image",
        "misty_step",
        "ray_of_enfeeblement",
        "shatter",
        "spider_climb",
        "suggestion",
        "counterspell",
        "dispel_magic",
        "fear",
        "fly",
        "gaseous_form",
        "hunger_of_hadar",
        "hypnotic_pattern",
        "magic_circle",
        "major_image",
        "remove_curse",
        "tongues",
        "vampiric_touch",
        "banishment",
        "blight",
        "dimension_door",
        "hallucinatory_terrain",
        "contact_other_plane",
        "dream",
        "hold_monster",
        "scrying",
        "arcane_gate",
        "circle_of_death",
        "conjure_fey",
        "create_undead",
        "eyebite",
        "flesh_to_stone",
        "mass_suggestion",
        "true_seeing",
        "etherealness",
        "finger_of_death",
        "forcecage",
        "plane_shift",
        "demiplane",
        "dominate_monster",
        "feeblemind",
        "glibness",
        "power_word_stun",
        "astral_projection",
        "foresight",
        "imprisonment",
        "power_word_kill",
        "true_polymorph",
      ],
      spellsKnownFormula: "level + 1",
    },
    skillsCount: 2,
    skills: [
      "Arcana",
      "Deception",
      "History",
      "Intimidation",
      "Investigation",
      "Nature",
      "Religion",
    ],
    subclasses: [
      {
        id: "celestial",
        name: "Celestial",
        grantedSpells: [
          "light",
          "sacred_flame",
          "cure_wounds",
          "guiding_bolt",
          "flaming_sphere",
          "lesser_restoration",
          "daylight",
          "revivify",
          "guardian_of_faith",
          "wall_of_fire",
          "greater_restoration",
          "flame_strike",
        ],
        features: [
          {
            level: 1,
            name: "Healing Light",
            description:
              "You have a pool of healing dice that you use as a bonus action to heal yourself or allies.",
          },
          {
            level: 1,
            name: "Bonus Cantrips",
            description: "You gain radiant cantrips and additional healing/light spells.",
          },
          {
            level: 6,
            name: "Radiant Soul",
            description:
              "Once per turn you add your Charisma modifier to the radiant or fire damage of a spell.",
          },
          {
            level: 10,
            name: "Healing Aura",
            description: "At the start of your turns, allies nearby regain a little HP.",
          },
          {
            level: 14,
            name: "Solar Flare",
            description:
              "As an action you release rays of light that wound enemies and blind them.",
          },
        ],
      },
      {
        id: "archfey",
        name: "Archfey",
        grantedSpells: [
          "faerie_fire",
          "sleep",
          "calm_emotions",
          "phantasmal_force",
          "blink",
          "plant_growth",
          "dominate_beast",
          "greater_invisibility",
          "dominate_person",
          "seeming",
        ],
        features: [
          {
            level: 1,
            name: "Fey Presence",
            description:
              "Action: creatures of your choice within 10 feet. Wisdom save or charmed or frightened until the end of your next turn.",
          },
          {
            level: 6,
            name: "Misty Escape",
            description:
              "Reaction to taking damage: become invisible, teleport 60 feet. Invisibility until the start of your next turn or until you attack/cast.",
          },
          { level: 10, name: "Beguiling Defenses", description: "You can't be charmed by magic." },
          {
            level: 14,
            name: "Dark Delirium",
            description:
              "Action: charm a creature. Wisdom save or charmed. While charmed: you and allies are invisible to it. Ends if it or its allies take damage.",
          },
        ],
      },
      {
        id: "fiend",
        name: "Fiend",
        grantedSpells: [
          "burning_hands",
          "command",
          "blindness_deafness",
          "scorching_ray",
          "fireball",
          "stinking_cloud",
          "fire_shield",
          "wall_of_fire",
          "flame_strike",
          "hallow",
        ],
        features: [
          {
            level: 1,
            name: "Dark One's Blessing",
            description:
              "When you reduce a hostile creature to 0 HP: gain temporary hit points = your Charisma modifier + warlock level.",
          },
          {
            level: 6,
            name: "Dark One's Own Luck",
            description:
              "When you fail a check or saving throw: add a d10. If this turns a failure into a success: can't be used again until a short or long rest.",
          },
          {
            level: 10,
            name: "Fiendish Resilience",
            description:
              "Choose a damage type at the end of a short or long rest. Resistance to that type.",
          },
          {
            level: 14,
            name: "Hurl Through Hell",
            description:
              "On hitting a creature with an attack: teleport it through hell. Wisdom save or 10d10 psychic damage (half on success).",
          },
        ],
      },
      {
        id: "great_old_one",
        name: "Great Old One",
        grantedSpells: [
          "dissonant_whispers",
          "tashas_hideous_laughter",
          "detect_thoughts",
          "phantasmal_force",
          "clairvoyance",
          "sending",
          "dominate_beast",
          "evards_black_tentacles",
          "dominate_person",
          "telekinesis",
        ],
        features: [
          {
            level: 1,
            name: "Awakened Mind",
            description:
              "Telepathy 30 feet. Communicate with any creature that understands at least one language.",
          },
          {
            level: 6,
            name: "Entropic Ward",
            description:
              "Reaction to taking damage from an attack: impose disadvantage on the attack. If it misses: the attacker takes damage = half your warlock level.",
          },
          {
            level: 10,
            name: "Thought Shield",
            description:
              "Resistance to psychic damage. A creature that deals you psychic damage takes the same damage.",
          },
          {
            level: 14,
            name: "Create Thrall",
            description:
              "Action: an incapacitated creature. Wisdom save or charmed. While charmed: a telepathic link. Command: an action or reaction by the thrall.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      {
        level: 1,
        name: "Otherworldly Patron",
        desc: "You have made a pact with an otherworldly being.",
      },
      {
        level: 1,
        name: "Pact Magic",
        desc: "You cast spells through your pact, using pact slots.",
      },
      {
        level: 2,
        name: "Eldritch Invocations",
        desc: "You gain mystic spells — special magical abilities.",
      },
      {
        level: 3,
        name: "Pact Boon",
        desc: "Your patron grants you a special boon (Pact of the Blade, Pact of the Chain, Pact of the Tome).",
      },
    ],
  },
  wizard: {
    id: "wizard",
    name: "Wizard",
    icon: "🧙",
    hitDice: "1d6",
    primaryAbility: "Intelligence",
    primaryAbilityKey: "int",
    savingThrows: ["int", "wis"],
    savingThrowsLabel: "Intelligence, Wisdom",
    armorProf: "None",
    weaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows",
    spells: true,
    spellcasting: {
      ability: "int",
      type: "prepared",
      cantripsByLevel: {
        1: 3,
        2: 3,
        3: 3,
        4: 4,
        5: 4,
        6: 4,
        7: 4,
        8: 4,
        9: 4,
        10: 5,
        11: 5,
        12: 5,
        13: 5,
        14: 5,
        15: 5,
        16: 5,
        17: 5,
        18: 5,
        19: 5,
        20: 5,
      },
      spellList: [
        "acid_splash",
        "blade_ward",
        "chill_touch",
        "dancing_lights",
        "fire_bolt",
        "friends",
        "light",
        "mage_hand",
        "mending",
        "message",
        "minor_illusion",
        "poison_spray",
        "prestidigitation",
        "ray_of_frost",
        "shocking_grasp",
        "true_strike",
        "alarm",
        "burning_hands",
        "charm_person",
        "chromatic_orb",
        "color_spray",
        "comprehend_languages",
        "detect_magic",
        "disguise_self",
        "expeditious_retreat",
        "false_life",
        "feather_fall",
        "find_familiar",
        "fog_cloud",
        "grease",
        "identify",
        "illusory_script",
        "jump",
        "longstrider",
        "mage_armor",
        "magic_missile",
        "protection_from_evil_and_good",
        "shield",
        "silent_image",
        "sleep",
        "tensers_floating_disk",
        "thunderwave",
        "unseen_servant",
        "witch_bolt",
        "arcane_lock",
        "blindness_deafness",
        "blur",
        "cloud_of_daggers",
        "continual_flame",
        "darkness",
        "darkvision",
        "detect_thoughts",
        "enlarge_reduce",
        "flaming_sphere",
        "gentle_repose",
        "gust_of_wind",
        "hold_person",
        "invisibility",
        "knock",
        "levitate",
        "locate_object",
        "magic_mouth",
        "magic_weapon",
        "mirror_image",
        "misty_step",
        "rope_trick",
        "scorching_ray",
        "see_invisibility",
        "shatter",
        "spider_climb",
        "suggestion",
        "web",
        "animate_dead",
        "bestow_curse",
        "blink",
        "clairvoyance",
        "counterspell",
        "dispel_magic",
        "fear",
        "fireball",
        "fly",
        "gaseous_form",
        "glyph_of_warding",
        "haste",
        "hypnotic_pattern",
        "lightning_bolt",
        "magic_circle",
        "major_image",
        "nondetection",
        "phantom_steed",
        "protection_from_energy",
        "remove_curse",
        "sending",
        "sleet_storm",
        "slow",
        "stinking_cloud",
        "tongues",
        "vampiric_touch",
        "water_breathing",
        "arcane_eye",
        "banishment",
        "black_tentacles",
        "blight",
        "confusion",
        "conjure_minor_elementals",
        "control_water",
        "dimension_door",
        "fabricate",
        "fire_shield",
        "greater_invisibility",
        "hallucinatory_terrain",
        "ice_storm",
        "locate_creature",
        "phantasmal_killer",
        "polymorph",
        "private_sanctum",
        "resilient_sphere",
        "secret_chest",
        "stone_shape",
        "stoneskin",
        "wall_of_fire",
        "animate_objects",
        "arcane_hand",
        "cloudkill",
        "cone_of_cold",
        "conjure_elemental",
        "contact_other_plane",
        "creation",
        "dominate_person",
        "dream",
        "geas",
        "hold_monster",
        "legend_lore",
        "mislead",
        "modify_memory",
        "passwall",
        "planar_binding",
        "scrying",
        "seeming",
        "telekinesis",
        "telepathic_bond",
        "teleportation_circle",
        "wall_of_force",
        "wall_of_stone",
        "arcane_gate",
        "chain_lightning",
        "circle_of_death",
        "contingency",
        "create_undead",
        "disintegrate",
        "eyebite",
        "flesh_to_stone",
        "globe_of_invulnerability",
        "guards_and_wards",
        "instant_summons",
        "irresistible_dance",
        "magic_jar",
        "mass_suggestion",
        "move_earth",
        "programmed_illusion",
        "sunbeam",
        "true_seeing",
        "wall_of_ice",
        "delayed_blast_fireball",
        "etherealness",
        "finger_of_death",
        "forcecage",
        "magnificent_mansion",
        "mirage_arcane",
        "plane_shift",
        "prismatic_spray",
        "project_image",
        "reverse_gravity",
        "sequester",
        "simulacrum",
        "symbol",
        "teleport",
        "antimagic_field",
        "antipathy_sympathy",
        "clone",
        "control_weather",
        "demiplane",
        "dominate_monster",
        "feeblemind",
        "incendiary_cloud",
        "maze",
        "mind_blank",
        "power_word_stun",
        "sunburst",
        "telepathy",
        "astral_projection",
        "foresight",
        "gate",
        "imprisonment",
        "meteor_swarm",
        "power_word_kill",
        "prismatic_wall",
        "shapechange",
        "time_stop",
        "true_polymorph",
        "weird",
        "wish",
      ],
      preparedFormula: "level + int",
    },
    skillsCount: 2,
    skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
    subclasses: [
      {
        id: "divination",
        name: "School of Divination",
        features: [
          {
            level: 2,
            name: "Portent",
            description:
              "After a long rest you roll two d20s and can replace future rolls with them.",
          },
          {
            level: 2,
            name: "Divination Savant",
            description: "You copy divination spells more cheaply and quickly.",
          },
          { level: 6, name: "Expert Divination", description: "You gain a third Portent die." },
          {
            level: 10,
            name: "Greater Portent",
            description: "Your Portent dice become more powerful in their application.",
          },
          {
            level: 14,
            name: "The Third Eye",
            description:
              "As an action you gain darkvision, see invisibility, or read thoughts for a short time.",
          },
        ],
      },
      {
        id: "illusion",
        name: "School of Illusion",
        features: [
          {
            level: 2,
            name: "Improved Minor Illusion",
            description:
              "You know the Minor Illusion cantrip and can create both a sound and an image at once.",
          },
          {
            level: 2,
            name: "Illusion Savant",
            description: "You copy illusion spells more cheaply and quickly.",
          },
          {
            level: 6,
            name: "Malleable Illusions",
            description:
              "As an action you can animate part of an illusion, giving it physical properties.",
          },
          {
            level: 10,
            name: "Illusory Self",
            description: "Your illusions become more convincing and harder to discern.",
          },
          {
            level: 14,
            name: "Illusory Reality",
            description: "For a moment you make part of an illusion real.",
          },
        ],
      },
      {
        id: "abjuration",
        name: "School of Abjuration",
        features: [
          {
            level: 2,
            name: "Abjuration Savant",
            description: "Time and gold to copy abjuration spells is halved.",
          },
          {
            level: 2,
            name: "Arcane Ward",
            description:
              "Create a magical ward. The ward's hit points = twice your wizard level + your Intelligence modifier. Restored after a long rest or by casting an abjuration spell.",
          },
          {
            level: 6,
            name: "Projected Ward",
            description:
              "Reaction: grant a creature within 30 feet resistance to damage. The Arcane Ward loses hit points equal to the damage dealt.",
          },
          {
            level: 10,
            name: "Improved Abjuration",
            description:
              "The Arcane Ward gains resistance to damage from spells. You gain resistance to damage from spells while the ward is active.",
          },
          {
            level: 14,
            name: "Spell Resistance",
            description:
              "Advantage on saving throws against spells. Resistance to damage from spells.",
          },
        ],
      },
      {
        id: "evocation",
        name: "School of Evocation",
        sculptSpells: true,
        features: [
          {
            level: 2,
            name: "Sculpt Spells",
            description:
              "You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell, you can choose a number of creatures you can see equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throw against the spell and take no damage if they would normally take half on a successful save.",
          },
          {
            level: 6,
            name: "Potent Spellcasting",
            description:
              "Your damaging cantrips affect even creatures that avoid the main effect. When a creature succeeds on a saving throw against your cantrip or you miss it with the cantrip, it still takes half the cantrip's damage but suffers no additional effects.",
          },
          {
            level: 10,
            name: "Empowered Evocation",
            description:
              "You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.",
          },
          {
            level: 14,
            name: "Overchannel",
            description:
              "You can boost the power of simpler spells. When you cast a wizard spell of 1st–5th level that deals damage, you can deal maximum damage with that spell. You can use this ability once and restore it after a long rest.",
          },
        ],
      },
    ],
    subclassLevel: 3,
    spellList: [],
    features: [
      {
        level: 1,
        name: "Spellcasting",
        desc: "You cast wizard spells through study and practice.",
      },
      {
        level: 1,
        name: "Arcane Recovery",
        desc: "Once per day during a short rest you restore spell slots.",
      },
      { level: 3, name: "Arcane Tradition", desc: "Choose a school of magic to specialize in." },
      {
        level: 18,
        name: "Spell Mastery",
        desc: "You can cast some 1st- and 2nd-level spells at will.",
      },
    ],
  },
};
const DND_RACES = {
  human: {
    id: "human",
    name: "Human",
    icon: "🧑",
    category: "Common (PHB 2024)",
    desc: "The world's most adaptable people — ambitious, resourceful, and found everywhere.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    skillChoices: { count: 1, from: "any" },
    traits: [
      { name: "Resourceful", desc: "At the end of each Long Rest, you gain Heroic Inspiration." },
      { name: "Skillful", desc: "Proficiency in one skill of your choice." },
      { name: "Versatile", desc: "One Origin feat of your choice." },
    ],
  },
  elf: {
    id: "elf",
    name: "Elf",
    icon: "🧝",
    category: "Common (PHB 2024)",
    desc: "A graceful, long-lived people of fey origin.",
    speed: 30,
    size: "Medium",
    languages: "Common + 2 languages from your background",
    skillChoices: { count: 1, from: ["Insight", "Perception", "Survival"] },
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      { name: "Fey Ancestry", desc: "Advantage on saving throws against the Charmed condition." },
      { name: "Keen Senses", desc: "Proficiency in one skill: Insight, Perception, or Survival." },
      { name: "Trance", desc: "You don't sleep; your Long Rest is 4 hours of meditation." },
      {
        name: "Elven Lineage",
        desc: "Choose a lineage below — it grants spells (spellcasting ability: Int/Wis/Cha).",
      },
    ],
    subraces: [
      {
        id: "highelf",
        name: "High Elf",
        grantedSpells: ["prestidigitation"],
        grantedSpellsByLevel: { 3: ["detect_magic"], 5: ["misty_step"] },
        bonusCantripChoices: 1,
        traits: [
          {
            name: "Cantrip",
            desc: "You know Prestidigitation; on a Long Rest you can replace it with another Wizard cantrip.",
          },
          { name: "Lineage Spells", desc: "At 3rd level — Detect Magic; at 5th — Misty Step." },
        ],
      },
      {
        id: "woodelf",
        name: "Wood Elf",
        grantedSpells: ["druidcraft"],
        grantedSpellsByLevel: { 3: ["longstrider"], 5: ["pass_without_trace"] },
        traits: [
          { name: "Fleet of Foot", desc: "Speed 35 feet." },
          {
            name: "Lineage Spells",
            desc: "You know Druidcraft; at 3rd — Longstrider; at 5th — Pass without Trace.",
          },
        ],
      },
      {
        id: "drow",
        name: "Drow",
        grantedSpells: ["dancing_lights"],
        grantedSpellsByLevel: { 3: ["faerie_fire"], 5: ["darkness"] },
        traits: [
          { name: "Improved Darkvision", desc: "Range 120 feet." },
          {
            name: "Lineage Spells",
            desc: "You know Dancing Lights; at 3rd — Faerie Fire; at 5th — Darkness.",
          },
        ],
      },
    ],
  },
  dwarf: {
    id: "dwarf",
    name: "Dwarf",
    icon: "🧔",
    category: "Common (PHB 2024)",
    desc: "A hardy people of mountains and underground strongholds, masters of stone.",
    speed: 30,
    size: "Medium",
    languages: "Common + 2 languages from your background",
    traits: [
      { name: "Darkvision", desc: "Range 120 feet." },
      {
        name: "Dwarven Resilience",
        desc: "Resistance to Poison damage and advantage on saving throws against the Poisoned condition.",
      },
      {
        name: "Dwarven Toughness",
        desc: "Your Hit Point maximum increases by 1, and by 1 again every level.",
      },
      {
        name: "Stonecunning",
        desc: "As a Bonus Action, gain Tremorsense 60 ft. for 10 minutes. Uses = Proficiency Bonus.",
      },
    ],
  },
  halfling: {
    id: "halfling",
    name: "Halfling",
    icon: "🧒",
    category: "Common (PHB 2024)",
    desc: "A small, cheerful people who value home and peace.",
    speed: 30,
    size: "Small",
    languages: "Common + 2 languages from your background",
    traits: [
      { name: "Brave", desc: "Advantage on saving throws against the Frightened condition." },
      {
        name: "Halfling Nimbleness",
        desc: "You can move through the space of any creature larger than you.",
      },
      { name: "Lucky", desc: "When you roll a 1 on the d20, you can reroll the die." },
      {
        name: "Naturally Stealthy",
        desc: "You can hide even when obscured only by a creature larger than you.",
      },
    ],
  },
  gnome: {
    id: "gnome",
    name: "Gnome",
    icon: "🧙",
    category: "Common (PHB 2024)",
    desc: "Small, inventive busybodies with a love of mechanisms.",
    speed: 30,
    size: "Small",
    languages: "Common + 2 languages from your background",
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      {
        name: "Gnomish Cunning",
        desc: "Advantage on Intelligence, Wisdom, and Charisma saving throws.",
      },
      {
        name: "Gnomish Lineage",
        desc: "Choose a lineage below. Spellcasting ability: Int/Wis/Cha.",
      },
    ],
    subraces: [
      {
        id: "forestgnome",
        name: "Forest Gnome",
        grantedSpells: ["minor_illusion", "speak_with_animals"],
        traits: [
          {
            name: "Lineage Magic",
            desc: "You know Minor Illusion and can speak with Small or smaller beasts.",
          },
        ],
      },
      {
        id: "rockgnome",
        name: "Rock Gnome",
        grantedSpells: ["mending", "prestidigitation"],
        traits: [
          { name: "Artificer's Lore", desc: "You know Mending and Prestidigitation." },
          { name: "Clockwork Device", desc: "You can build a Tiny clockwork device (AC 5, 1 HP)." },
        ],
      },
    ],
  },
  dragonborn: {
    id: "dragonborn",
    name: "Dragonborn",
    icon: "🐉",
    category: "Common (PHB 2024)",
    desc: "Proud descendants of dragons whose breath reflects their lineage.",
    speed: 30,
    size: "Medium",
    languages: "Common + 2 languages from your background",
    traits: [
      {
        name: "Draconic Ancestry",
        desc: "Choose a dragon type — it determines your damage type (Acid/Lightning/Fire/Poison/Cold).",
      },
      { name: "Darkvision", desc: "Range 60 feet." },
      {
        name: "Breath Weapon",
        desc: "In place of an attack: a 15-ft. cone or 30-ft. line, Dexterity save (DC 8 + Con modifier + Proficiency Bonus), 1d10 damage (rising to 2d10/3d10/4d10 at levels 5/11/17). Uses = Proficiency Bonus.",
      },
      { name: "Damage Resistance", desc: "Resistance to the damage type of your ancestry." },
      {
        name: "Draconic Flight",
        desc: "At 5th level, as a Bonus Action — wings: a Fly Speed equal to your Speed for 10 minutes. Once per Long Rest.",
      },
    ],
    subraces: [
      { id: "black", name: "Black (Acid)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Acid. Your Breath Weapon deals Acid, and you gain Resistance to Acid damage." }] },
      { id: "blue", name: "Blue (Lightning)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Lightning. Your Breath Weapon deals Lightning, and you gain Resistance to Lightning damage." }] },
      { id: "brass", name: "Brass (Fire)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Fire. Your Breath Weapon deals Fire, and you gain Resistance to Fire damage." }] },
      { id: "bronze", name: "Bronze (Lightning)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Lightning. Your Breath Weapon deals Lightning, and you gain Resistance to Lightning damage." }] },
      { id: "copper", name: "Copper (Acid)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Acid. Your Breath Weapon deals Acid, and you gain Resistance to Acid damage." }] },
      { id: "gold", name: "Gold (Fire)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Fire. Your Breath Weapon deals Fire, and you gain Resistance to Fire damage." }] },
      { id: "green", name: "Green (Poison)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Poison. Your Breath Weapon deals Poison, and you gain Resistance to Poison damage." }] },
      { id: "red", name: "Red (Fire)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Fire. Your Breath Weapon deals Fire, and you gain Resistance to Fire damage." }] },
      { id: "silver", name: "Silver (Cold)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Cold. Your Breath Weapon deals Cold, and you gain Resistance to Cold damage." }] },
      { id: "white", name: "White (Cold)", traits: [{ name: "Draconic Ancestry", desc: "Damage type — Cold. Your Breath Weapon deals Cold, and you gain Resistance to Cold damage." }] },
    ],
  },
  orc: {
    id: "orc",
    name: "Orc",
    icon: "👹",
    category: "Common (PHB 2024)",
    desc: "Strong, tireless descendants of Gruumsh, built for endurance.",
    speed: 30,
    size: "Medium",
    languages: "Common + 2 languages from your background",
    traits: [
      {
        name: "Adrenaline Rush",
        desc: "Take the Dash action as a Bonus Action and gain Temporary Hit Points equal to your Proficiency Bonus. Regained on a Short or Long Rest.",
      },
      { name: "Darkvision", desc: "Range 120 feet." },
      {
        name: "Relentless Endurance",
        desc: "When reduced to 0 Hit Points but not killed, you drop to 1 Hit Point instead. Once per Long Rest.",
      },
    ],
  },
  tiefling: {
    id: "tiefling",
    name: "Tiefling",
    icon: "😈",
    category: "Common (PHB 2024)",
    desc: "Descendants of an infernal legacy, marked by horns and a tail.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    grantedSpells: ["thaumaturgy"],
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      {
        name: "Otherworldly Presence",
        desc: "You know the Thaumaturgy cantrip. Spellcasting ability: Int/Wis/Cha.",
      },
      {
        name: "Fiendish Legacy",
        desc: "Choose a legacy below — it grants a resistance and spells.",
      },
    ],
    subraces: [
      {
        id: "infernal",
        name: "Infernal",
        grantedSpells: ["fire_bolt"],
        grantedSpellsByLevel: { 3: ["hellish_rebuke"], 5: ["darkness"] },
        traits: [
          {
            name: "Legacy",
            desc: "Resistance to Fire. You know Fire Bolt; at 3rd — Hellish Rebuke; at 5th — Darkness.",
          },
        ],
      },
      {
        id: "chthonic",
        name: "Chthonic",
        grantedSpells: ["chill_touch"],
        grantedSpellsByLevel: { 3: ["false_life"], 5: ["ray_of_enfeeblement"] },
        traits: [
          {
            name: "Legacy",
            desc: "Resistance to Necrotic. You know Chill Touch; at 3rd — False Life; at 5th — Ray of Enfeeblement.",
          },
        ],
      },
      {
        id: "abyssal",
        name: "Abyssal",
        grantedSpells: ["poison_spray"],
        grantedSpellsByLevel: { 3: ["ray_of_sickness"], 5: ["hold_person"] },
        traits: [
          {
            name: "Legacy",
            desc: "Resistance to Poison. You know Poison Spray; at 3rd — Ray of Sickness; at 5th — Hold Person.",
          },
        ],
      },
    ],
  },
  aasimar: {
    id: "aasimar",
    name: "Aasimar",
    icon: "😇",
    category: "Common (PHB 2024)",
    desc: "Bearers of a celestial spark, marked by the influence of the higher planes.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    grantedSpells: ["light"],
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      { name: "Celestial Resistance", desc: "Resistance to Necrotic and Radiant damage." },
      {
        name: "Healing Hands",
        desc: "As an action, touch a creature and roll a number of d4s equal to your Proficiency Bonus, restoring that many Hit Points. Once per Long Rest.",
      },
      { name: "Light Bearer", desc: "You know the Light cantrip (Charisma)." },
      {
        name: "Celestial Revelation",
        desc: "At 3rd level choose a form below; as a Bonus Action for 1 minute, add damage equal to your Proficiency Bonus once per turn. Once per Long Rest.",
      },
    ],
    subraces: [
      {
        id: "heavenlywings",
        name: "Heavenly Wings",
        traits: [
          { name: "Revelation", desc: "Wings: a Fly Speed equal to your Speed for the duration." },
        ],
      },
      {
        id: "innerradiance",
        name: "Inner Radiance",
        traits: [
          {
            name: "Revelation",
            desc: "Radiance (10-ft. light); nearby enemies take Radiant damage.",
          },
        ],
      },
      {
        id: "necroticshroud",
        name: "Necrotic Shroud",
        traits: [
          {
            name: "Revelation",
            desc: "Spectral wings frighten nearby enemies; extra Necrotic damage.",
          },
        ],
      },
    ],
  },
  goliath: {
    id: "goliath",
    name: "Goliath",
    icon: "🗿",
    category: "Common (PHB 2024)",
    desc: "A towering highland people with a drop of giant blood.",
    speed: 35,
    size: "Medium",
    languages: "Common + 2 languages from your background",
    traits: [
      { name: "Giant Ancestry", desc: "Choose a giant gift below. Uses = Proficiency Bonus." },
      {
        name: "Large Form",
        desc: "At 5th level, as a Bonus Action you become Large for 10 minutes (advantage on Strength, +10 ft. Speed). Once per Long Rest.",
      },
      {
        name: "Powerful Build",
        desc: "Advantage against the Grappled condition and you count as one size larger for carrying capacity.",
      },
    ],
    subraces: [
      {
        id: "cloud",
        name: "Cloud's Jaunt",
        traits: [{ name: "Gift", desc: "As a Bonus Action, teleport up to 30 ft." }],
      },
      {
        id: "fire",
        name: "Fire's Burn",
        traits: [
          { name: "Gift", desc: "When you hit with an attack, deal an extra 1d10 Fire damage." },
        ],
      },
      {
        id: "frost",
        name: "Frost's Chill",
        traits: [
          {
            name: "Gift",
            desc: "When you hit with an attack, deal an extra 1d6 Cold damage and reduce the target's Speed by 10 ft.",
          },
        ],
      },
      {
        id: "hill",
        name: "Hill's Tumble",
        traits: [
          { name: "Gift", desc: "When you hit with an attack, you can knock the target Prone." },
        ],
      },
      {
        id: "stone",
        name: "Stone's Endurance",
        traits: [
          {
            name: "Gift",
            desc: "As a Reaction, reduce the damage taken by 1d12 + your Constitution modifier.",
          },
        ],
      },
      {
        id: "storm",
        name: "Storm's Thunder",
        traits: [
          {
            name: "Gift",
            desc: "As a Reaction when you take damage, deal 1d8 Thunder damage to a creature within range.",
          },
        ],
      },
    ],
  },
  changeling: {
    id: "changeling",
    name: "Changeling",
    icon: "🎭",
    category: "Eberron",
    desc: "Fey shapeshifters who can take on any face. Source: Eberron.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    skillChoices: {
      count: 2,
      from: ["Deception", "Insight", "Intimidation", "Performance", "Persuasion"],
    },
    traits: [
      {
        name: "Changeling Instincts",
        desc: "Proficiency in two skills: Deception, Insight, Intimidation, Performance, or Persuasion.",
      },
      {
        name: "Shape-Shifter",
        desc: "As an action, change your appearance and voice (height, sex, Medium–Small size, the look of another species). While transformed, you have advantage on Charisma checks. Your equipment doesn't change.",
      },
    ],
  },
  kalashtar: {
    id: "kalashtar",
    name: "Kalashtar",
    icon: "🧠",
    category: "Eberron",
    desc: "A union of humans and quori spirits from dreams. An Aberration. Source: Eberron.",
    speed: 30,
    size: "Medium",
    languages: "Common + 2 languages from your background",
    skillChoices: { count: 1, from: "any" },
    traits: [
      { name: "Dual Mind", desc: "Advantage on Wisdom and Charisma saving throws." },
      { name: "Mental Discipline", desc: "Resistance to Psychic damage." },
      {
        name: "Mind Link",
        desc: "Telepathy within a range of 10 ft. × your level; you can let a creature respond telepathically for 1 hour.",
      },
      {
        name: "Severed from Dreams",
        desc: "You can't be the target of the Sleep spell; after a Long Rest you gain proficiency in one skill of your choice.",
      },
    ],
  },
  khoravar: {
    id: "khoravar",
    name: "Khoravar",
    icon: "🧝‍♂️",
    category: "Eberron",
    desc: "Descendants of the humans and elves of Khorvaire (the ‘children of Khorvaire’). Eberron's equivalent of the half-elf. Source: Eberron.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    grantedSpells: ["friends"],
    skillChoices: { count: 1, from: "any" },
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      { name: "Fey Ancestry", desc: "Advantage on saving throws against the Charmed condition." },
      {
        name: "Fey Gift",
        desc: "You know the Friends cantrip; on a Long Rest you can replace it with a Cleric, Druid, or Wizard cantrip.",
      },
      {
        name: "Sleepless Resilience",
        desc: "You can treat a failed save against the Unconscious condition as a success. You can do so again after 1d4 Long Rests.",
      },
      {
        name: "Skill Versatility",
        desc: "Proficiency in one skill or tool; you can change it on a Long Rest.",
      },
    ],
  },
  shifter: {
    id: "shifter",
    name: "Shifter",
    icon: "🐺",
    category: "Eberron",
    desc: "Descendants of lycanthropes who can temporarily heighten their bestial traits. Source: Eberron.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    skillChoices: { count: 1, from: ["Acrobatics", "Athletics", "Intimidation", "Survival"] },
    traits: [
      {
        name: "Bestial Instincts",
        desc: "Proficiency in one skill: Acrobatics, Athletics, Intimidation, or Survival.",
      },
      { name: "Darkvision", desc: "Range 60 feet." },
      {
        name: "Shifting",
        desc: "As a Bonus Action for 1 minute, take on a bestial form; gain Temporary Hit Points equal to 2 × your Proficiency Bonus. Uses = Proficiency Bonus. Choose a type below.",
      },
    ],
    subraces: [
      {
        id: "beasthide",
        name: "Beasthide",
        traits: [{ name: "Shifting", desc: "+1d6 Temporary Hit Points and +1 AC while shifted." }],
      },
      {
        id: "longtooth",
        name: "Longtooth",
        traits: [
          {
            name: "Shifting",
            desc: "As a Bonus Action, make a fang Unarmed Strike: 1d6 + your Strength modifier Piercing damage.",
          },
        ],
      },
      {
        id: "swiftstride",
        name: "Swiftstride",
        traits: [
          {
            name: "Shifting",
            desc: "+10 ft. Speed; as a Reaction, move up to 10 ft. when an enemy ends its turn near you.",
          },
        ],
      },
      {
        id: "wildhunt",
        name: "Wildhunt",
        traits: [
          {
            name: "Shifting",
            desc: "Advantage on Wisdom checks; enemies don't have advantage on attacks against you.",
          },
        ],
      },
    ],
  },
  warforged: {
    id: "warforged",
    name: "Warforged",
    icon: "🤖",
    category: "Eberron",
    desc: "Sentient constructs of wood and metal, created for the Last War. Source: Eberron.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    skillChoices: { count: 1, from: "any" },
    traits: [
      {
        name: "Constructed Resilience",
        desc: "Resistance to Poison damage and advantage on saving throws against the Poisoned condition.",
      },
      {
        name: "Integrated Protection",
        desc: "+1 AC; armor you wear can't be removed against your will.",
      },
      {
        name: "Sentry's Rest",
        desc: "You don't sleep; your Long Rest is 6 hours spent motionless but conscious. Magic can't put you to sleep.",
      },
      {
        name: "Specialized Design",
        desc: "Proficiency in one skill (your choice) and one tool set.",
      },
      {
        name: "Tireless",
        desc: "You don't gain levels of Exhaustion from thirst, hunger, or suffocation.",
      },
    ],
  },
  boggart: {
    id: "boggart",
    name: "Boggart",
    icon: "🦦",
    category: "Lorwyn",
    desc: "Small goblinoid alchemists from Lorwyn. Source: Lorwyn.",
    speed: 30,
    size: "Small",
    languages: "Common + 2 languages from your background",
    traits: [
      { name: "Creature Type", desc: "Humanoid; you also count as a goblinoid for relevant effects." },
      { name: "Darkvision", desc: "Range 60 feet." },
      { name: "Fey Ancestry", desc: "Advantage on saving throws against the Charmed condition." },
      { name: "Fury of the Small", desc: "When you damage a creature larger than you, add damage equal to your Proficiency Bonus (once per turn). Uses = Proficiency Bonus." },
      { name: "Nimble Escape", desc: "You can take the Disengage or Hide action as a Bonus Action on each of your turns." },
    ],
  },
  faerie: {
    id: "faerie",
    name: "Faerie",
    icon: "🧚",
    category: "Lorwyn",
    desc: "Tiny winged tricksters born from flowers, with innate magic. Source: Lorwyn.",
    speed: 30,
    flySpeed: 30,
    size: "Small",
    languages: "Common + 2 languages from your background",
    grantedSpells: ["druidcraft"],
    grantedSpellsByLevel: { 3: ["faerie_fire"], 5: ["enlarge_reduce"] },
    traits: [
      { name: "Fairy Magic", desc: "You know the Druidcraft cantrip. At 3rd level — Faerie Fire; at 5th — Enlarge/Reduce. Spellcasting ability: Int/Wis/Cha." },
      { name: "Flight", desc: "Flying Speed equal to your walking Speed. Doesn't work in medium or heavy armor." },
    ],
  },
  flamekin: {
    id: "flamekin",
    name: "Flamekin",
    icon: "🔥",
    category: "Lorwyn",
    desc: "A people of fire and stone whose bodies radiate harmless magical flame. Source: Lorwyn.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    grantedSpells: ["produce_flame"],
    grantedSpellsByLevel: { 3: ["burning_hands"], 5: ["flame_blade"] },
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      { name: "Fire Resistance", desc: "Resistance to fire damage." },
      { name: "Reach for the Flame", desc: "You know the Produce Flame cantrip. At 3rd level — Burning Hands; at 5th — Flame Blade. Spellcasting ability: Int/Wis/Cha." },
    ],
  },
  lorwynchangeling: {
    id: "lorwynchangeling",
    name: "Lorwyn Changeling",
    icon: "🎴",
    category: "Lorwyn",
    desc: "Magical shapeshifters of Lorwyn who crudely mimic the forms of creatures and plants. Source: Lorwyn.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    skillProficiencies: ["Performance"],
    traits: [
      { name: "Shape Self", desc: "As an action, you assume a bipedal humanoid or quadrupedal beast form." },
      { name: "Darkvision", desc: "Range 120 feet." },
      { name: "Magic Mimic", desc: "Proficiency in the Performance skill." },
      { name: "Unpredictable Movement", desc: "When you roll Initiative without Disadvantage, you can take the Dash action as a Reaction." },
    ],
  },
  rimekin: {
    id: "rimekin",
    name: "Rimekin",
    icon: "❄️",
    category: "Lorwyn",
    desc: "Flamekin whose fire has turned to ice; their 'flame' burns icy blue. Source: Lorwyn.",
    speed: 30,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    grantedSpells: ["ray_of_frost"],
    traits: [
      { name: "Cold Fire Magic", desc: "You know the Ray of Frost cantrip. At 3rd level — Ice Knife; at 5th — Flame Blade (deals cold damage). Spellcasting ability: Int/Wis/Cha." },
      { name: "Cold Resistance", desc: "Resistance to cold damage." },
      { name: "Darkvision", desc: "Range 60 feet." },
    ],
  },
  dhampir: {
    id: "dhampir",
    name: "Dhampir",
    icon: "🧛",
    category: "Exotic",
    desc: "Living people with vampiric abilities, cursed with a macabre hunger. Source: Van Richten's Guide to Ravenloft.",
    speed: 35,
    size: "Medium or Small (your choice)",
    languages: "Common + 2 languages from your background",
    climbSpeed: 35,
    traits: [
      { name: "Darkvision", desc: "Range 60 feet." },
      {
        name: "Spider Climb",
        desc: "Climb Speed equal to your Speed. At 3rd level, you can move along vertical surfaces and ceilings while leaving your hands free.",
      },
      { name: "Deathless Nature", desc: "Resistance to Necrotic damage." },
      {
        name: "Vampiric Bite",
        desc: "As an Unarmed Strike, bite: 1d4 + your Constitution modifier Piercing damage. When you deal damage (not to a Construct or Undead), either restore that many Hit Points or gain a bonus to your next check/attack. Uses = Proficiency Bonus.",
      },
    ],
  },
};
const ABILITY_KEYS = ["str", "dex", "con", "int", "wis", "cha"];
const ABILITY_LABELS = {
  str: "Strength",
  dex: "Dexterity",
  con: "Constitution",
  int: "Intelligence",
  wis: "Wisdom",
  cha: "Charisma",
};
const ALIGNMENTS = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
];
const BACKGROUNDS = [
  "Acolyte",
  "Artisan",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Farmer",
  "Guard",
  "Guide",
  "Hermit",
  "Merchant",
  "Noble",
  "Sage",
  "Sailor",
  "Scribe",
  "Soldier",
  "Wayfarer",
];
const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];
const ORIGIN_ASI_MODES = [
  {
    id: "two-one",
    name: "+2 / +1",
    desc: "+2 to one ability and +1 to another.",
    total: 3,
    slots: 2,
    pattern: [2, 1],
  },
  {
    id: "three-ones",
    name: "+1 / +1 / +1",
    desc: "+1 to three different abilities.",
    total: 3,
    slots: 3,
    pattern: [1, 1, 1],
  },
];
function isOriginAllocationValid(modeId, allocations) {
  const mode = ORIGIN_ASI_MODES.find((m) => m.id === modeId);
  if (!mode) return false;
  const vals = ABILITY_KEYS.map((k) => parseInt(allocations[k]) || 0)
    .filter((v) => v > 0)
    .sort((a, b) => b - a);
  if (vals.length !== mode.pattern.length) return false;
  return vals.every((v, i) => v === mode.pattern[i]);
}
const ASI_LEVELS_STANDARD = [4, 8, 12, 16, 19];
const ASI_LEVELS_FIGHTER = [4, 6, 8, 12, 14, 16, 19];
const ASI_LEVELS_ROGUE = [4, 8, 10, 12, 16, 19];
function getASILevels(classId) {
  if (classId === "fighter") return ASI_LEVELS_FIGHTER;
  if (classId === "rogue") return ASI_LEVELS_ROGUE;
  return ASI_LEVELS_STANDARD;
}
const CLASS_FEATURES_BY_LEVEL = {
  barbarian: [
    {
      level: 3,
      name: "Primal Path",
      desc: "Features of your chosen subclass (levels 3, 6, 10, 14).",
    },
    {
      level: 4,
      name: "Ability Score Improvement / Feat",
      desc: "Choose +2 to one or +1 to two abilities, or take a feat.",
    },
    {
      level: 7,
      name: "Feral Instinct",
      desc: "You have advantage on Dexterity checks for initiative.",
    },
    {
      level: 9,
      name: "Brutal Critical (1 die)",
      desc: "An extra damage die on critical hits with weapons.",
    },
    {
      level: 11,
      name: "Relentless Rage",
      desc: "If you drop to 0 HP during Rage, you can make a CON saving throw DC 10 to drop to 1 HP instead.",
    },
    {
      level: 13,
      name: "Brutal Critical (2 dice)",
      desc: "Two extra damage dice on critical hits.",
    },
    {
      level: 15,
      name: "Persistent Rage",
      desc: "Your Rage ends only if you are knocked out or end it yourself.",
    },
    {
      level: 17,
      name: "Brutal Critical (3 dice)",
      desc: "Three extra damage dice on critical hits.",
    },
    {
      level: 18,
      name: "Indomitable Might",
      desc: "If your Strength ≤ 18, it becomes 18 (for checks). Otherwise +4 damage during Rage.",
    },
    {
      level: 19,
      name: "Ability Score Improvement / Feat",
      desc: "Standard ASI: +2/+1+1 or a feat.",
    },
    {
      level: 20,
      name: "Primal Champion",
      desc: "Your Strength and Constitution increase by 4 (maximum 24).",
    },
  ],
  fighter: [
    {
      level: 4,
      name: "Ability Score Improvement / Feat",
      desc: "Standard ASI: +2 to one or +1 to two abilities, or a feat.",
    },
    {
      level: 6,
      name: "Ability Score Improvement / Feat (Fighter bonus)",
      desc: "An extra ASI — a unique privilege of the Fighter class.",
    },
    { level: 7, name: "Subclass Feature", desc: "Gained according to your chosen archetype." },
    { level: 8, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 9,
      name: "Indomitable (1/rest)",
      desc: "You can reroll a failed saving throw; restored on a short rest.",
    },
    { level: 10, name: "Subclass Feature", desc: "Gained according to your chosen archetype." },
    {
      level: 11,
      name: "Extra Attack (2)",
      desc: "You can attack three times when you take the Attack action.",
    },
    { level: 12, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 13,
      name: "Indomitable (2/rest)",
      desc: "You can use Indomitable twice between short rests.",
    },
    {
      level: 14,
      name: "Ability Score Improvement / Feat (Fighter bonus)",
      desc: "An extra ASI — a unique privilege of the Fighter class.",
    },
    { level: 15, name: "Subclass Feature", desc: "Gained according to your chosen archetype." },
    { level: 16, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 17,
      name: "Action Surge (2/rest); Indomitable (3/rest)",
      desc: "Improvements to Action Surge and Indomitable.",
    },
    { level: 18, name: "Subclass Feature", desc: "Gained according to your chosen archetype." },
    { level: 19, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 20,
      name: "Extra Attack (3)",
      desc: "You can attack four times when you take the Attack action.",
    },
  ],
  rogue: [
    { level: 4, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 5,
      name: "Evasion",
      desc: "On a Dexterity save for half damage, you take no damage on a success and only half on a failure.",
    },
    {
      level: 7,
      name: "Uncanny Dodge",
      desc: "As a reaction you can halve the damage from an attack that hits you.",
    },
    { level: 8, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 10,
      name: "Ability Score Improvement / Feat",
      desc: "The Rogue gains an extra ASI at 10th level.",
    },
    {
      level: 11,
      name: "Reliable Talent",
      desc: "Skill checks with proficiency can't be below 10.",
    },
    { level: 12, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 14,
      name: "Blindsense",
      desc: "You sense all creatures within 10 feet, even invisible ones.",
    },
    { level: 15, name: "Slippery Mind", desc: "You have proficiency in Wisdom saving throws." },
    { level: 16, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 18,
      name: "Elusive",
      desc: "No attack has advantage against you while you can see the attacker.",
    },
    { level: 19, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 20,
      name: "Stroke of Luck",
      desc: "If you failed an ability check or attack — you can reroll it once per turn.",
    },
  ],
  cleric: [
    { level: 2, name: "Channel Divinity (1/rest)", desc: "Turn Undead and a domain option." },
    { level: 4, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 5,
      name: "Destroy Undead (CR 1/2)",
      desc: "Weak undead are destroyed when they fail a saving throw against Turn Undead.",
    },
    { level: 8, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    { level: 8, name: "Destroy Undead (CR 1)", desc: "The Destroy Undead threshold increases." },
    { level: 10, name: "Divine Intervention", desc: "You beseech your deity for direct aid." },
    { level: 11, name: "Destroy Undead (CR 2)", desc: "The Destroy Undead threshold increases." },
    { level: 12, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    { level: 14, name: "Destroy Undead (CR 3)", desc: "The Destroy Undead threshold increases." },
    { level: 16, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    { level: 17, name: "Destroy Undead (CR 4)", desc: "The Destroy Undead threshold increases." },
    { level: 19, name: "Ability Score Improvement / Feat", desc: "Standard ASI or a feat." },
    {
      level: 20,
      name: "Improved Divine Intervention",
      desc: "Your request for intervention succeeds automatically.",
    },
  ],
};
const BACKGROUND_DATA = {
  Acolyte: {
    skills: ["Insight", "Religion"],
    languages: 0,
    tools: ["Calligrapher's Supplies"],
    abilities: "Intelligence, Wisdom, Charisma",
    feat: "Magic Initiate (Cleric)",
    feature: "Magic Initiate (Cleric)",
    equipment:
      "Calligrapher's Supplies, Prayer Book, Holy Symbol, Parchment (10 sheets), Robe, 8 GP (or 50 GP)",
    description: "You served in a temple, learning the rites and teachings of your faith.",
  },
  Artisan: {
    skills: ["Investigation", "Persuasion"],
    languages: 0,
    tools: ["One type of Artisan's Tools"],
    abilities: "Strength, Dexterity, Intelligence",
    feat: "Crafter",
    feature: "Crafter",
    equipment: "Chosen Artisan's Tools, 2 Pouches, Traveler's Clothes, 32 GP",
    description: "You apprenticed in a craft, mastering tools and handiwork.",
  },
  Charlatan: {
    skills: ["Deception", "Sleight of Hand"],
    languages: 0,
    tools: ["Forgery Kit"],
    abilities: "Dexterity, Constitution, Charisma",
    feat: "Skilled",
    feature: "Skilled",
    equipment: "Forgery Kit, Costume, Fine Clothes, 15 GP",
    description: "You lived by deception, forgery, and clever schemes.",
  },
  Criminal: {
    skills: ["Sleight of Hand", "Stealth"],
    languages: 0,
    tools: ["Thieves' Tools"],
    abilities: "Dexterity, Constitution, Intelligence",
    feat: "Alert",
    feature: "Alert",
    equipment: "2 Daggers, Thieves' Tools, Crowbar, 2 Pouches, Traveler's Clothes, 16 GP",
    description: "You thrived in the criminal underworld, dodging the law.",
  },
  Entertainer: {
    skills: ["Acrobatics", "Performance"],
    languages: 0,
    tools: ["One type of Musical Instrument"],
    abilities: "Strength, Dexterity, Charisma",
    feat: "Musician",
    feature: "Musician",
    equipment: "Musical Instrument, 2 Costumes, Mirror, Perfume, Traveler's Clothes, 11 GP",
    description: "You performed before crowds, living by music and showmanship.",
  },
  Farmer: {
    skills: ["Animal Handling", "Nature"],
    languages: 0,
    tools: ["Carpenter's Tools"],
    abilities: "Strength, Constitution, Wisdom",
    feat: "Tough",
    feature: "Tough",
    equipment:
      "Sickle, Carpenter's Tools, Healer's Kit, Iron Pot, Shovel, Traveler's Clothes, 30 GP",
    description: "You grew up working the land, hardened by toil.",
  },
  Guard: {
    skills: ["Athletics", "Perception"],
    languages: 0,
    tools: ["One type of Gaming Set"],
    abilities: "Strength, Intelligence, Wisdom",
    feat: "Alert",
    feature: "Alert",
    equipment:
      "Spear, Light Crossbow (20 Bolts), Gaming Set, Hooded Lantern, Manacles, Quiver, Traveler's Clothes, 12 GP",
    description: "You stood watch, guarding walls and gates.",
  },
  Guide: {
    skills: ["Stealth", "Survival"],
    languages: 0,
    tools: ["Cartographer's Tools"],
    abilities: "Dexterity, Constitution, Wisdom",
    feat: "Magic Initiate (Druid)",
    feature: "Magic Initiate (Druid)",
    equipment:
      "Shortbow (20 Arrows), Cartographer's Tools, Bedroll, Quiver, Tent, Traveler's Clothes, 3 GP",
    description: "You lived in the wilds, learning its paths and primal magic.",
  },
  Hermit: {
    skills: ["Medicine", "Religion"],
    languages: 0,
    tools: ["Herbalism Kit"],
    abilities: "Constitution, Wisdom, Charisma",
    feat: "Healer",
    feature: "Healer",
    equipment:
      "Quarterstaff, Herbalism Kit, Bedroll, Book (philosophy), Lamp, Oil (3 flasks), Traveler's Clothes, 16 GP",
    description: "You lived in seclusion, contemplating and tending the sick.",
  },
  Merchant: {
    skills: ["Animal Handling", "Persuasion"],
    languages: 0,
    tools: ["Navigator's Tools"],
    abilities: "Constitution, Intelligence, Charisma",
    feat: "Lucky",
    feature: "Lucky",
    equipment: "Navigator's Tools, 2 Pouches, Traveler's Clothes, 22 GP",
    description: "You ran trade and caravans, shrewd with coin and people.",
  },
  Noble: {
    skills: ["History", "Persuasion"],
    languages: 0,
    tools: ["One type of Gaming Set"],
    abilities: "Strength, Intelligence, Charisma",
    feat: "Skilled",
    feature: "Skilled",
    equipment: "Gaming Set, Fine Clothes, Perfume, 29 GP",
    description: "You were raised among nobility, privilege, and intrigue.",
  },
  Sage: {
    skills: ["Arcana", "History"],
    languages: 0,
    tools: ["Calligrapher's Supplies"],
    abilities: "Constitution, Intelligence, Wisdom",
    feat: "Magic Initiate (Wizard)",
    feature: "Magic Initiate (Wizard)",
    equipment:
      "Quarterstaff, Calligrapher's Supplies, Book (history), Parchment (8 sheets), Robe, 8 GP",
    description: "You devoted your life to study and arcane lore.",
  },
  Sailor: {
    skills: ["Acrobatics", "Perception"],
    languages: 0,
    tools: ["Navigator's Tools"],
    abilities: "Strength, Dexterity, Wisdom",
    feat: "Tavern Brawler",
    feature: "Tavern Brawler",
    equipment: "Dagger, Navigator's Tools, Rope, Traveler's Clothes, 20 GP",
    description: "You sailed the seas, toughened by storms and brawls.",
  },
  Scribe: {
    skills: ["Investigation", "Perception"],
    languages: 0,
    tools: ["Calligrapher's Supplies"],
    abilities: "Dexterity, Intelligence, Wisdom",
    feat: "Skilled",
    feature: "Skilled",
    equipment:
      "Calligrapher's Supplies, Fine Clothes, Lamp, Oil (3 flasks), Parchment (12 sheets), 23 GP",
    description: "You worked as a scribe, copying texts and records.",
  },
  Soldier: {
    skills: ["Athletics", "Intimidation"],
    languages: 0,
    tools: ["One type of Gaming Set"],
    abilities: "Strength, Dexterity, Constitution",
    feat: "Savage Attacker",
    feature: "Savage Attacker",
    equipment:
      "Spear, Shortbow (20 Arrows), Gaming Set, Healer's Kit, Quiver, Traveler's Clothes, 14 GP",
    description: "You served in an army, tempered by battle and discipline.",
  },
  Wayfarer: {
    skills: ["Insight", "Stealth"],
    languages: 0,
    tools: ["Thieves' Tools"],
    abilities: "Dexterity, Wisdom, Charisma",
    feat: "Lucky",
    feature: "Lucky",
    equipment:
      "2 Daggers, Thieves' Tools, Gaming Set (any), Bedroll, 2 Pouches, Traveler's Clothes, 16 GP",
    description: "You wandered the roads, surviving on wits and luck.",
  },
};
const ALL_SKILLS = [
  "Acrobatics",
  "Animal Handling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "Sleight of Hand",
  "Stealth",
  "Survival",
];
const SKILL_ABILITY = {
  Acrobatics: "dex",
  "Animal Handling": "wis",
  Arcana: "int",
  Athletics: "str",
  Deception: "cha",
  History: "int",
  Insight: "wis",
  Intimidation: "cha",
  Investigation: "int",
  Medicine: "wis",
  Nature: "int",
  Perception: "wis",
  Performance: "cha",
  Persuasion: "cha",
  Religion: "int",
  "Sleight of Hand": "dex",
  Stealth: "dex",
  Survival: "wis",
};
const ARMOR_DATA = {
  none: { name: "No armor", type: "none", base: 10, addDex: true, maxDex: null },
  padded: { name: "Padded", type: "light", base: 11, addDex: true, maxDex: null },
  leather: { name: "Leather", type: "light", base: 11, addDex: true, maxDex: null },
  studded: { name: "Studded Leather", type: "light", base: 12, addDex: true, maxDex: null },
  hide: { name: "Hide", type: "medium", base: 12, addDex: true, maxDex: 2 },
  chainshirt: { name: "Chain Shirt", type: "medium", base: 13, addDex: true, maxDex: 2 },
  scalemail: { name: "Scale Mail", type: "medium", base: 14, addDex: true, maxDex: 2 },
  breastplate: { name: "Breastplate", type: "medium", base: 14, addDex: true, maxDex: 2 },
  halfplate: { name: "Half Plate", type: "medium", base: 15, addDex: true, maxDex: 2 },
  ringmail: { name: "Ring Mail", type: "heavy", base: 14, addDex: false, maxDex: 0 },
  chainmail: { name: "Chain Mail", type: "heavy", base: 16, addDex: false, maxDex: 0 },
  splint: { name: "Splint", type: "heavy", base: 17, addDex: false, maxDex: 0 },
  plate: { name: "Plate", type: "heavy", base: 18, addDex: false, maxDex: 0 },
};
const DND_WEAPONS = [
  {
    id: "club",
    properties: ["light"],
    name: "Club",
    damage: "1d4",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Slow",
  },
  {
    id: "dagger",
    properties: ["finesse", "light", "thrown"],
    name: "Dagger",
    damage: "1d4",
    damageType: "Piercing",
    ability: "finesse",
    ranged: false,
    category: "Simple",
    mastery: "Nick",
  },
  {
    id: "greatclub",
    properties: ["two-handed"],
    name: "Greatclub",
    damage: "1d8",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Push",
  },
  {
    id: "handaxe",
    properties: ["light", "thrown"],
    name: "Handaxe",
    damage: "1d6",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Vex",
  },
  {
    id: "javelin",
    properties: ["thrown"],
    name: "Javelin",
    damage: "1d6",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Slow",
  },
  {
    id: "lighthammer",
    properties: ["light", "thrown"],
    name: "Light Hammer",
    damage: "1d4",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Nick",
  },
  {
    id: "mace",
    properties: [],
    name: "Mace",
    damage: "1d6",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Sap",
  },
  {
    id: "quarterstaff",
    properties: ["versatile"],
    versatile: "1d8",
    name: "Quarterstaff",
    damage: "1d6",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Topple",
  },
  {
    id: "sickle",
    properties: ["light"],
    name: "Sickle",
    damage: "1d4",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Nick",
  },
  {
    id: "spear",
    properties: ["thrown", "versatile"],
    versatile: "1d8",
    name: "Spear",
    damage: "1d6",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Simple",
    mastery: "Sap",
  },
  {
    id: "crossbowlight",
    properties: ["ammunition", "loading", "two-handed"],
    name: "Light Crossbow",
    damage: "1d8",
    damageType: "Piercing",
    ability: "dex",
    ranged: true,
    category: "Simple",
    mastery: "Slow",
  },
  {
    id: "dart",
    properties: ["finesse", "thrown"],
    name: "Dart",
    damage: "1d4",
    damageType: "Piercing",
    ability: "finesse",
    ranged: true,
    category: "Simple",
    mastery: "Vex",
  },
  {
    id: "shortbow",
    properties: ["ammunition", "two-handed"],
    name: "Shortbow",
    damage: "1d6",
    damageType: "Piercing",
    ability: "dex",
    ranged: true,
    category: "Simple",
    mastery: "Vex",
  },
  {
    id: "sling",
    properties: ["ammunition"],
    name: "Sling",
    damage: "1d4",
    damageType: "Bludgeoning",
    ability: "dex",
    ranged: true,
    category: "Simple",
    mastery: "Slow",
  },
  {
    id: "battleaxe",
    properties: ["versatile"],
    versatile: "1d10",
    name: "Battleaxe",
    damage: "1d8",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Topple",
  },
  {
    id: "flail",
    properties: [],
    name: "Flail",
    damage: "1d8",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Sap",
  },
  {
    id: "glaive",
    properties: ["heavy", "reach", "two-handed"],
    name: "Glaive",
    damage: "1d10",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Graze",
  },
  {
    id: "greataxe",
    properties: ["heavy", "two-handed"],
    name: "Greataxe",
    damage: "1d12",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Cleave",
  },
  {
    id: "greatsword",
    properties: ["heavy", "two-handed"],
    name: "Greatsword",
    damage: "2d6",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Graze",
  },
  {
    id: "halberd",
    properties: ["heavy", "reach", "two-handed"],
    name: "Halberd",
    damage: "1d10",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Cleave",
  },
  {
    id: "lance",
    properties: ["heavy", "reach", "two-handed"],
    name: "Lance",
    damage: "1d12",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Topple",
  },
  {
    id: "longsword",
    properties: ["versatile"],
    versatile: "1d10",
    name: "Longsword",
    damage: "1d8",
    damageType: "Slashing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Sap",
  },
  {
    id: "maul",
    properties: ["heavy", "two-handed"],
    name: "Maul",
    damage: "2d6",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Topple",
  },
  {
    id: "morningstar",
    properties: [],
    name: "Morningstar",
    damage: "1d8",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Sap",
  },
  {
    id: "pike",
    properties: ["heavy", "reach", "two-handed"],
    name: "Pike",
    damage: "1d10",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Push",
  },
  {
    id: "rapier",
    properties: ["finesse"],
    name: "Rapier",
    damage: "1d8",
    damageType: "Piercing",
    ability: "finesse",
    ranged: false,
    category: "Martial",
    mastery: "Vex",
  },
  {
    id: "scimitar",
    properties: ["finesse", "light"],
    name: "Scimitar",
    damage: "1d6",
    damageType: "Slashing",
    ability: "finesse",
    ranged: false,
    category: "Martial",
    mastery: "Nick",
  },
  {
    id: "shortsword",
    properties: ["finesse", "light"],
    name: "Shortsword",
    damage: "1d6",
    damageType: "Piercing",
    ability: "finesse",
    ranged: false,
    category: "Martial",
    mastery: "Vex",
  },
  {
    id: "trident",
    properties: ["thrown", "versatile"],
    versatile: "1d8",
    name: "Trident",
    damage: "1d6",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Topple",
  },
  {
    id: "warpick",
    properties: [],
    name: "War Pick",
    damage: "1d8",
    damageType: "Piercing",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Sap",
  },
  {
    id: "warhammer",
    properties: ["versatile"],
    versatile: "1d10",
    name: "Warhammer",
    damage: "1d8",
    damageType: "Bludgeoning",
    ability: "str",
    ranged: false,
    category: "Martial",
    mastery: "Push",
  },
  {
    id: "whip",
    properties: ["finesse", "reach"],
    name: "Whip",
    damage: "1d4",
    damageType: "Slashing",
    ability: "finesse",
    ranged: false,
    category: "Martial",
    mastery: "Slow",
  },
  {
    id: "crossbowhand",
    properties: ["ammunition", "light", "loading"],
    name: "Hand Crossbow",
    damage: "1d6",
    damageType: "Piercing",
    ability: "dex",
    ranged: true,
    category: "Martial",
    mastery: "Vex",
  },
  {
    id: "crossbowheavy",
    properties: ["ammunition", "heavy", "loading", "two-handed"],
    name: "Heavy Crossbow",
    damage: "1d10",
    damageType: "Piercing",
    ability: "dex",
    ranged: true,
    category: "Martial",
    mastery: "Push",
  },
  {
    id: "longbow",
    properties: ["ammunition", "heavy", "two-handed"],
    name: "Longbow",
    damage: "1d8",
    damageType: "Piercing",
    ability: "dex",
    ranged: true,
    category: "Martial",
    mastery: "Slow",
  },
];
const DND_FEATS = [
  {
    id: "alert",
    name: "Alert",
    description:
      "Always on guard: +5 to initiative, you can't be surprised while conscious, and invisible creatures don't gain advantage on attacks against you.",
  },
  {
    id: "athlete",
    name: "Athlete",
    bonusChoice: ["str", "dex"],
    description:
      "Increase Strength or Dexterity by 1. Standing up from prone costs only 5 feet of movement, and climbing doesn't reduce your speed. A standing jump uses the full distance.",
  },
  {
    id: "actor",
    name: "Actor",
    bonuses: { cha: 1 },
    description:
      "Increase Charisma by 1. You have advantage on Deception and Performance checks when imitating the speech or behavior of others.",
  },
  {
    id: "charger",
    name: "Charger",
    description:
      "If you take the Dash action, you can use a bonus action to make a melee attack or shove a creature 10 feet — dealing +5 damage on a hit.",
  },
  {
    id: "crossbowexpert",
    name: "Crossbow Expert",
    description:
      "Ignore the loading property of crossbows. You have no disadvantage for ranged attacks while in melee. You can make a bonus-action attack with a hand crossbow after your main attack.",
  },
  {
    id: "defensive",
    name: "Defensive Duelist",
    bonusChoice: ["str", "dex"],
    description: "Increase Strength or Dexterity by 1. You have +1 to AC while holding a shield.",
  },
  {
    id: "dualwielder",
    name: "Dual Wielder",
    description:
      "+1 to AC while wielding two weapons. You can use two-weapon fighting with weapons that aren't light. You can draw or stow two weapons at once.",
  },
  {
    id: "durable",
    name: "Durable",
    bonuses: { con: 1 },
    description:
      "Increase Constitution by 1. When you spend a Hit Die to regain HP, the minimum is twice your Constitution modifier (min. 2).",
  },
  {
    id: "elementaladept",
    name: "Elemental Adept",
    description:
      "Your spells of a chosen damage type ignore resistance and treat any 1 on a damage die as a 2.",
  },
  {
    id: "greatweapon",
    name: "Great Weapon Master",
    description:
      "On a critical hit or when you reduce a creature to 0 HP with a melee weapon, make a bonus-action attack. With heavy two-handed weapons you can reroll 1s and 2s on damage dice. You may take -5 to hit for +10 damage (optional).",
  },
  {
    id: "healer",
    name: "Healer",
    description:
      "Using a Healer's Kit to bandage someone restores 1d6 + 4 + the creature's level in HP. The creature can't regain HP this way again until it finishes a rest.",
  },
  {
    id: "heavyarmor",
    name: "Heavy Armor Master",
    bonuses: { str: 1 },
    description:
      "Increase Strength by 1. While wearing heavy armor, nonmagical bludgeoning, piercing, and slashing damage you take is reduced by 3.",
  },
  {
    id: "inspiring",
    name: "Inspiring Leader",
    bonuses: { cha: 1 },
    description:
      "Increase Charisma by 1. A 10-minute inspiring speech grants up to 6 allies temporary HP equal to your level + your Charisma modifier.",
  },
  {
    id: "lucky",
    name: "Lucky",
    description:
      "3 luck points per day: reroll an attack, check, or saving throw, or force a reroll of an enemy's attack against you.",
  },
  {
    id: "magicinit",
    name: "Magic Initiate",
    description:
      "Learn 2 cantrips and one 1st-level spell from a chosen class. You can cast the 1st-level spell once per day for free.",
  },
  {
    id: "mobile",
    name: "Mobile",
    description:
      "Speed +10 feet. After you Dash, difficult terrain doesn't slow you for the rest of the turn. Making a melee attack doesn't provoke an opportunity attack from that target this turn.",
  },
  {
    id: "polearm",
    name: "Polearm Master",
    description:
      "Make a 1d4 bonus-action attack with the butt end when you attack with a glaive, halberd, quarterstaff, or spear. You can make an opportunity attack when a creature enters your reach.",
  },
  {
    id: "resilient",
    name: "Resilient",
    bonusChoice: ["str", "dex", "con", "int", "wis", "cha"],
    description:
      "Increase a chosen ability score by 1 and gain proficiency in saving throws with it.",
  },
  {
    id: "savagebowman",
    name: "Deadly Archer",
    description:
      "Ranged attacks in melee don't impose disadvantage. Long range doesn't impose disadvantage. You may take -5 to hit for +10 damage (optional).",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    description:
      "When you hit with an opportunity attack, the target's speed becomes 0 for the rest of the turn. When a creature near you attacks an ally, you can make a reaction attack against it.",
  },
  {
    id: "sharpshooter",
    name: "Sharpshooter",
    description:
      "Long range doesn't impose disadvantage. Your attacks ignore half and three-quarters cover. You may take -5 to hit for +10 damage (optional).",
  },
  {
    id: "shieldmaster",
    name: "Shield Master",
    description:
      "Use a bonus action to shove a creature with your shield. Your shield can grant temporary cover for Dexterity saving throws.",
  },
  {
    id: "skilled",
    name: "Skilled",
    description: "Gain proficiency in any 3 skills or tools of your choice.",
  },
  {
    id: "spellsniper",
    name: "Spell Sniper",
    description:
      "The range of your spell attacks is doubled. Your spells ignore half and three-quarters cover. Learn 1 attack cantrip.",
  },
  {
    id: "toughness",
    name: "Tough",
    description:
      "Your HP maximum increases by 2 per character level (minimum +2 when you gain this feat).",
  },
  {
    id: "warcaster",
    name: "War Caster",
    description:
      "Advantage on Constitution saving throws to maintain concentration. You can cast spells with somatic components even with your hands full. You can use a reaction to cast a spell at a creature instead of making an opportunity attack.",
  },
];
const SPELL_SLOTS_FULL = {
  1: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  2: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  4: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  5: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  6: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  7: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  8: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  9: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  10: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  11: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  12: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  13: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  14: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  15: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  16: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
};
const CASTER_PROGRESSION = { cleric: "full" };
function getSpellSlots(classId, level) {
  const prog = CASTER_PROGRESSION[classId];
  const lvl = Math.max(1, Math.min(20, level || 1));
  if (prog === "full") return SPELL_SLOTS_FULL[lvl].slice();
  return [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
function getSpellById(id) {
  return DND_SPELLS.find((s) => s.id === id) || null;
}
function getClassSpellList(classId) {
  const cls = typeof DND_CLASSES !== "undefined" ? DND_CLASSES[classId] : null;
  if (!cls || !Array.isArray(cls.spellList)) return [];
  return cls.spellList.map(getSpellById).filter(Boolean);
}
const CLASS_PROFICIENCY = {
  artificer: {
    armor: ["light", "medium", "shield"],
    weaponCats: ["simple"],
    weaponIds: [],
  },
  barbarian: {
    armor: ["light", "medium", "shield"],
    weaponCats: ["simple", "martial"],
    weaponIds: [],
  },
  fighter: {
    armor: ["light", "medium", "heavy", "shield"],
    weaponCats: ["simple", "martial"],
    weaponIds: [],
  },
  paladin: {
    armor: ["light", "medium", "heavy", "shield"],
    weaponCats: ["simple", "martial"],
    weaponIds: [],
  },
  ranger: {
    armor: ["light", "medium", "shield"],
    weaponCats: ["simple", "martial"],
    weaponIds: [],
  },
  cleric: { armor: ["light", "medium", "shield"], weaponCats: ["simple"], weaponIds: [] },
  druid: {
    armor: ["light", "medium", "shield"],
    weaponCats: [],
    weaponIds: [
      "club",
      "dagger",
      "dart",
      "javelin",
      "spear",
      "mace",
      "quarterstaff",
      "scimitar",
      "sickle",
      "sling",
    ],
    noMetal: true,
  },
  rogue: {
    armor: ["light"],
    weaponCats: ["simple"],
    weaponIds: ["crossbowhand", "longsword", "rapier", "shortsword"],
  },
  bard: {
    armor: ["light"],
    weaponCats: ["simple"],
    weaponIds: ["crossbowhand", "longsword", "rapier", "shortsword"],
  },
  warlock: { armor: ["light"], weaponCats: ["simple"], weaponIds: [] },
  monk: { armor: [], weaponCats: ["simple"], weaponIds: ["shortsword"] },
  sorcerer: {
    armor: [],
    weaponCats: [],
    weaponIds: ["dagger", "dart", "sling", "quarterstaff", "crossbowlight"],
  },
  wizard: {
    armor: [],
    weaponCats: [],
    weaponIds: ["dagger", "dart", "sling", "quarterstaff", "crossbowlight"],
  },
};
const EXTRA_ATTACK_CLASSES = { barbarian: 5, fighter: 5, monk: 5, paladin: 5, ranger: 5 };
const DND_EPIC_BOONS = [
  {
    id: "boon_combat_prowess",
    name: "Boon of Combat Prowess",
    bonuses: { str: 1 },
    description:
      "Strength +1 (max 30). When you miss with a melee weapon attack, you can hit instead (once per turn).",
  },
  {
    id: "boon_irresistible_offense",
    name: "Boon of Irresistible Offense",
    bonusChoice: ["str", "dex"],
    description:
      "+1 to Strength or Dexterity (max 30). Your weapon attacks ignore resistance to bludgeoning, piercing, and slashing damage and deal extra damage equal to your Strength modifier.",
  },
  {
    id: "boon_fortitude",
    name: "Boon of Fortitude",
    bonuses: { con: 1 },
    hpBonus: 40,
    description:
      "Constitution +1 (max 30) and HP maximum +40. Once per turn, when you regain HP, add your Constitution modifier.",
  },
  {
    id: "boon_speed",
    name: "Boon of Speed",
    bonuses: { dex: 1 },
    speedBonus: 30,
    description:
      "Dexterity +1 (max 30) and movement speed +30 feet. You can use a bonus action to end the Grappled condition on yourself.",
  },
  {
    id: "boon_truesight",
    name: "Boon of Truesight",
    bonuses: { wis: 1 },
    description: "Wisdom +1 (max 30). You have truesight out to 60 feet.",
  },
  {
    id: "boon_dimensional_travel",
    name: "Boon of Dimensional Travel",
    bonusChoice: ["str", "dex", "con"],
    description:
      "+1 to Strength, Dexterity, or Constitution (max 30). You can use an action to teleport (Misty Step) without expending a spell slot.",
  },
  {
    id: "boon_fate",
    name: "Boon of Fate",
    bonuses: { cha: 1 },
    description:
      "Charisma +1 (max 30). A few times per day, add 2d4 to a check, saving throw, or attack roll of a creature within 60 feet.",
  },
  {
    id: "boon_spell_recall",
    name: "Boon of Spell Recall",
    bonuses: { int: 1 },
    description:
      "Intelligence +1 (max 30). When you cast a spell using a slot, you can avoid expending the slot (a limited number of times).",
  },
  {
    id: "boon_energy_resistance",
    name: "Boon of Energy Resistance",
    bonusChoice: ["con", "dex"],
    description:
      "+1 to Constitution or Dexterity (max 30). You gain resistance to two damage types of your choice and can add that damage type to your attacks.",
  },
  {
    id: "boon_recovery",
    name: "Boon of Recovery",
    bonuses: { con: 1 },
    description:
      "Constitution +1 (max 30). Once per combat, use a bonus action to regain half your HP maximum.",
  },
  {
    id: "boon_skill",
    name: "Boon of Skill",
    bonusChoice: ["str", "dex", "con", "int", "wis", "cha"],
    description:
      "+1 to any ability score of your choice (max 30). You gain proficiency in all skills and a double proficiency bonus for one of them.",
  },
  {
    id: "boon_night_spirit",
    name: "Boon of the Night Spirit",
    bonuses: { dex: 1 },
    description:
      "Dexterity +1 (max 30). In dim light or darkness you can turn invisible and move through creatures.",
  },
];
(function () {
  const descriptions = {
    Acolyte:
      "You have devoted your life to serving the gods in a temple. You are an intermediary between common people and higher powers.",
    Criminal:
      "You live outside the law: theft, smuggling, or extortion. You know the language of the streets and the criminal underworld.",
    "Folk Hero":
      "You came from common folk, but fate called you to great deeds. Ordinary people consider you their protector.",
    Noble:
      "You were born into a privileged family. Wealth, education, and connections open doors for you.",
    Sage: "You spent years among books and scrolls. You are a source of knowledge about history, magic, and the mysteries of the world.",
    Soldier:
      "You served in the army: drill, battles, and discipline shaped you. You know the value of an order and of comradeship.",
    Hermit:
      "You lived in seclusion, far from society, in search of enlightenment or peace. Solitude gave you a unique discovery.",
    Entertainer:
      "The stage is your life. Music, acrobatics, or acting bring you the admiration of the crowd.",
    Sailor:
      "You spent years at sea. A ship's deck is your home, and salt water runs in your blood.",
    Artisan:
      "You are a master of your craft, a guild member. Working with your hands and honest trade define your life.",
  };
  if (typeof BACKGROUND_DATA !== "undefined") {
    Object.keys(descriptions).forEach((k) => {
      if (BACKGROUND_DATA[k]) BACKGROUND_DATA[k].description = descriptions[k];
    });
    const extra = {
      Charlatan: {
        description:
          "You live by deception and charisma: fake remedies, fraudulent deals, and false guises. People trust you — and that is your weapon.",
        skills: ["Deception", "Sleight of Hand"],
        languages: 0,
        tools: ["Forgery Kit", "Disguise Kit"],
        feature:
          "False Identity — you created a second name for yourself with documents and a biography.",
      },
      Outlander: {
        description:
          "You grew up in the wild, far from civilization. You know how to survive where others perish.",
        abilities: "Strength, Dexterity, Wisdom",
        feat: "Tough",
        skills: ["Athletics", "Survival"],
        languages: 1,
        tools: ["Musical Instrument"],
        feature:
          "Wanderer — you have an excellent sense of direction and can always find food and water for yourself and your companions.",
      },
      Urchin: {
        description:
          "You grew up orphaned on the city streets, surviving through theft and cunning. The city is your jungle.",
        abilities: "Dexterity, Intelligence, Charisma",
        feat: "Lucky",
        skills: ["Sleight of Hand", "Stealth"],
        languages: 0,
        tools: ["Thieves' Tools", "Disguise Kit"],
        feature:
          "City Secrets — you can travel twice as fast through the city's hidden alleys between any two points in the city.",
      },
    };
    Object.keys(extra).forEach((k) => {
      if (!BACKGROUND_DATA[k]) BACKGROUND_DATA[k] = extra[k];
      if (typeof BACKGROUNDS !== "undefined" && !BACKGROUNDS.includes(k)) BACKGROUNDS.push(k);
    });
  }
})();
(function () {
  function band(level, pairs, dflt) {
    for (var i = 0; i < pairs.length; i++) {
      if (level >= pairs[i][0]) return pairs[i][1];
    }
    return dflt;
  }
  function computeClassResources(classId, level, mods, pb) {
    level = level || 1;
    mods = mods || {};
    pb = pb || 2;
    var m = function (k) {
      return typeof mods[k] === "number" ? mods[k] : 0;
    };
    var out = [];
    switch (classId) {
      case "barbarian": {
        var rage = band(
          level,
          [
            [20, "Unlimited"],
            [17, 6],
            [12, 5],
            [6, 4],
            [3, 3],
          ],
          2,
        );
        var rdmg = band(
          level,
          [
            [16, 4],
            [9, 3],
          ],
          2,
        );
        out.push({
          name: "Rages",
          value: rage,
          recharge: "long rest",
          note: "Damage bonus +" + rdmg,
        });
        break;
      }
      case "bard": {
        var bi = Math.max(1, m("cha"));
        var die = band(
          level,
          [
            [15, "d12"],
            [10, "d10"],
            [5, "d8"],
          ],
          "d6",
        );
        out.push({
          name: "Bardic Inspiration",
          value: bi,
          recharge: level >= 5 ? "short/long" : "long rest",
          note: "Die: " + die,
        });
        break;
      }
      case "cleric": {
        var cd = band(
          level,
          [
            [18, 3],
            [6, 2],
          ],
          1,
        );
        if (level >= 2) out.push({ name: "Channel Divinity", value: cd, recharge: "short/long" });
        break;
      }
      case "druid": {
        if (level >= 2)
          out.push({ name: "Wild Shape", value: 2, recharge: "short/long", note: "2 uses" });
        break;
      }
      case "fighter": {
        out.push({
          name: "Second Wind",
          value: 1,
          recharge: "short/long",
          note: "Restores 1d10+level HP",
        });
        var as = band(level, [[17, 2]], 1);
        if (level >= 2) out.push({ name: "Action Surge", value: as, recharge: "short/long" });
        var ind = band(
          level,
          [
            [17, 3],
            [13, 2],
          ],
          1,
        );
        if (level >= 9) out.push({ name: "Indomitable", value: ind, recharge: "long rest" });
        break;
      }
      case "monk": {
        if (level >= 2)
          out.push({ name: "Ki Points (Focus)", value: level, recharge: "short/long" });
        var md = band(
          level,
          [
            [17, "d12"],
            [11, "d10"],
            [5, "d8"],
          ],
          "d6",
        );
        out.push({ name: "Martial Arts die", value: md, recharge: "", note: "Unarmed strike die" });
        break;
      }
      case "paladin": {
        out.push({
          name: "Lay on Hands (pool)",
          value: 5 * level,
          recharge: "long rest",
          note: "Healing HP",
        });
        if (level >= 3) out.push({ name: "Channel Divinity", value: 1, recharge: "short/long" });
        out.push({ name: "Divine Sense", value: 1 + Math.max(0, m("cha")), recharge: "long rest" });
        break;
      }
      case "ranger": {
        out.push({
          name: "Hunter's Mark / Favored Enemy",
          value: pb,
          recharge: "long rest",
          note: "Uses = proficiency bonus",
        });
        break;
      }
      case "sorcerer": {
        if (level >= 2) out.push({ name: "Sorcery Points", value: level, recharge: "long rest" });
        break;
      }
      case "warlock": {
        var inv = band(
          level,
          [
            [18, 8],
            [15, 7],
            [12, 6],
            [9, 5],
            [7, 4],
            [5, 3],
            [2, 2],
          ],
          0,
        );
        if (inv > 0)
          out.push({
            name: "Eldritch Invocations",
            value: inv,
            recharge: "",
            note: "Known invocations",
          });
        out.push({
          name: "Pact Magic",
          value: "see slots",
          recharge: "short/long",
          note: "All slots of one level, restored on a short rest",
        });
        break;
      }
      case "wizard": {
        out.push({
          name: "Arcane Recovery",
          value: Math.ceil(level / 2),
          recharge: "long rest",
          note: "Total slot levels (1×/day)",
        });
        break;
      }
      default:
        break;
    }
    return out;
  }
  if (typeof window !== "undefined") {
    window.computeClassResources = computeClassResources;
  }
  if (typeof globalThis !== "undefined") {
    globalThis.computeClassResources = computeClassResources;
  }
})();

// Stable cross-language background IDs (2024 migration).
;(function(){
  var map={"Acolyte": "acolyte", "Artisan": "artisan", "Charlatan": "charlatan", "Criminal": "criminal", "Entertainer": "entertainer", "Farmer": "farmer", "Guard": "guard", "Guide": "guide", "Hermit": "hermit", "Merchant": "merchant", "Noble": "noble", "Outlander": "outlander", "Sage": "sage", "Sailor": "sailor", "Scribe": "scribe", "Soldier": "soldier", "Urchin": "urchin", "Wayfarer": "wayfarer"};
  Object.keys(map).forEach(function(oldKey){var id=map[oldKey], value=BACKGROUND_DATA[oldKey];if(!value)return;delete BACKGROUND_DATA[oldKey];BACKGROUND_DATA[id]=value;Object.defineProperty(BACKGROUND_DATA,oldKey,{value:value,enumerable:false,configurable:true});});
})();
