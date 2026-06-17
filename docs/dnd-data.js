// ====================================================================
// D&D 5e — Character Creator Data (Phase 1)
// English. Classes: Barbarian, Fighter, Rogue. Races: Human, Elf, Dwarf.
// ====================================================================

const DND_CLASSES = {
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
        unarmoredDefense: "10 + dex + con",  // Barbarian Unarmored Defense
        weaponProf: "Simple weapons, martial weapons",
        spells: false,
        skillsCount: 2,
        skills: [
            "Animal Handling",
            "Athletics",
            "Intimidation",
            "Nature",
            "Perception",
            "Survival"
        ],
        subclasses: [
            { id: "berserker", name: "Path of the Berserker", features: [
                { level: 3, name: "Frenzy", description: "While Raging, as a bonus action you can make one additional melee weapon attack. After Rage ends, you suffer one level of exhaustion." },
                { level: 6, name: "Mindless Rage", description: "While Raging, you cannot be charmed or frightened; any such effect is suspended until the end of your Rage." },
                { level: 10, name: "Intimidating Presence", description: "As an action, force a creature within 30 feet to make a Wisdom save or become frightened of you." },
                { level: 14, name: "Retaliation", description: "When a nearby creature deals damage to you, you can use your reaction to make a melee attack against it." }
            ]},
            { id: "wildheart", name: "Path of the Wild Heart", features: [
                { level: 3, name: "Totemic Spirit", description: "Choose a totem animal (Bear, Eagle, Wolf, etc.) that grants a special advantage during Rage." },
                { level: 6, name: "Aspect of the Beast", description: "You gain a permanent trait of your chosen animal — strength, sharp sight, or tirelessness." },
                { level: 10, name: "Spirit Walker", description: "You can perform a ritual replicating the Commune with Nature spell." },
                { level: 14, name: "Totemic Bond", description: "Your totem bond grants a powerful combat effect during Rage based on your chosen animal." }
            ]},
            { id: "worldtree", name: "Path of the World Tree", features: [
                { level: 3, name: "Life Force of the Tree", description: "When entering Rage, you gain temporary hit points fueled by the power of the World Tree." },
                { level: 6, name: "Branches of the Tree", description: "Реакцією ви прикликаєте примарні гілки, щоб утримати або підтягнути enemy в межах 30 feet." },
                { level: 10, name: "Battering Roots", description: "Your melee reach increases by 10 feet thanks to spectral roots." },
                { level: 14, name: "Travel Along the Tree", description: "During Rage you can teleport a significant distance, travelling along the World Tree branches." }
            ]},
            { id: "zealot", name: "Path of the Zealot", features: [
                { level: 3, name: "Divine Fury", description: "Your first attack each turn while Raging deals extra necrotic or radiant damage." },
                { level: 6, name: "Fanatical Focus", description: "Once during your Rage you can reroll a failed saving throw." },
                { level: 10, name: "Presence of Inspiration", description: "As a bonus action, inspire allies: their attacks gain advantage until your next turn." },
                { level: 14, name: "Rage Beyond Death", description: "While Raging, you don't fall unconscious at 0 HP (except from massive damage)." }
            ]}
        ],
        subclassLevel: 3,
        features: [
            { level: 1, name: "Rage", desc: "As a bonus action, enter Rage: resistance to bludgeoning, piercing, and slashing damage, bonus to Strength attacks, and advantage on Strength checks and saves." },
            { level: 1, name: "Unarmored Defense", desc: "While not wearing armor, AC = 10 + DEX modifier + CON modifier. Shield allowed." },
            { level: 2, name: "Reckless Attack", desc: "You can attack with advantage on Strength attacks, but attacks against you also have advantage until your next turn." },
            { level: 3, name: "Barbarian Path", desc: "Choose your Path (subclass), which determines your additional abilities." },
            { level: 5, name: "Extra Attack", desc: "You can attack twice instead of once when you take the Attack action." },
            { level: 5, name: "Fast Movement", desc: "Your speed increases by 10 feet while not wearing heavy armor." }
        ]
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
            "Survival"
        ],
        subclasses: [
            { id: "champion", name: "Champion", criticalRange: 19, improvedAthletics: true, features: [
                { level: 3, name: "Improved Critical", description: "Your weapon attacks score a critical hit on a roll of 19 or 20." },
                { level: 7, name: "Remarkable Athlete", description: "Add half your proficiency bonus (rounded up) to Strength, Dexterity, or Constitution checks that don't already use your proficiency." },
                { level: 10, name: "Additional Fighting Style", description: "Choose a second Fighting Style option." },
                { level: 15, name: "Superior Critical", description: "Your weapon attacks score a critical hit on a roll of 18-20." },
                { level: 18, name: "Survivor", description: "If you start your turn at half HP or fewer, regain 5 + CON modifier HP." }
            ]},
            { id: "battle_master", name: "Battle Master", superiorityDice: "d8", maneuversKnown: 3, features: [
                { level: 3, name: "Combat Superiority", description: "4 superiority dice (d8). Regain on short or long rest." },
                { level: 3, name: "Maneuvers", description: "Learn 3 maneuvers. Spend superiority dice to activate." },
                { level: 3, name: "Student of War", description: "Proficiency with one artisan tool and one skill: History, Insight, Medicine, or Perception." },
                { level: 7, name: "Know Your Enemy", description: "1 minute of observation: learn if an enemy is equal, higher, or lower in two characteristics." },
                { level: 10, name: "Improved Combat Superiority", description: "Superiority dice become d10. Learn 2 more maneuvers." },
                { level: 15, name: "Survivor", description: "When rolling initiative without advantage, regain 1 superiority die." },
                { level: 18, name: "Master Combat Superiority", description: "Superiority dice become d12. Learn 2 more maneuvers.", description: "Superiority dice become d12. Learn 2 more maneuvers." }
            ]},
            
            { id: "eldritchknight", name: "Eldritch Knight", features: [
                { level: 3, name: "Spellcasting", description: "Learn wizard spells (mostly Abjuration and Evocation) and gain a spellcasting ability." },
                { level: 3, name: "Weapon Bond", description: "Through ritual, bond with a weapon: it cannot be disarmed and you can summon it to your hand." },
                { level: 7, name: "War Magic", description: "After casting a cantrip as an action, you can make one weapon attack as a bonus action." },
                { level: 10, name: "Eldritch Strike", description: "After hitting with a weapon, the target has disadvantage on its next saving throw vs your spell this turn." },
                { level: 15, name: "Improved War Magic", description: "After casting any spell as an action, you can make one weapon attack as a bonus action." }
            ]},
            { id: "psiwarrior", name: "Psi Warrior", features: [
                { level: 3, name: "Psionic Power", description: "You have Energy dice (d6) to fuel strikes, defense, and telekinesis." },
                { level: 7, name: "Telekinetic Adept", description: "Telekinetically push enemies and perform a leap using your mind." },
                { level: 10, name: "Psychic Veil", description: "You have resistance to psychic damage; as a reaction, reduce damage to yourself or an ally." },
                { level: 15, name: "Telekinetic Master", description: "You can continuously use Telekinesis and make a weapon attack as a bonus action." }
            ]}
        ],
        subclassLevel: 3,
        features: [
            { level: 1, name: "Fighting Style", desc: "Choose a Fighting Style specialization (Defense, Dueling, Great Weapon, Archery, etc.)." },
            { level: 1, name: "Action Surge", desc: "As a bonus action, regain 1d10 + Fighter level HP. Usable once between rests." },
            { level: 2, name: "Action Surge", desc: "Once between rests, take an extra action on your turn." },
            { level: 3, name: "Військовий архетип", desc: "Choose your archetype (subclass)." },
            { level: 5, name: "Extra Attack", desc: "You can attack twice instead of once when you take the Attack action." }
        ]
    },
    rogue: {
        id: "rogue",
        name: "Criminal",
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
            "Stealth"
        ],
        subclasses: [
            { id: "thief", name: "Thief", features: [
                { level: 3, name: "Fast Hands", description: "As a bonus action, use Cunning Action for object interactions, lock picking, or disarming traps." },
                { level: 3, name: "Second-Story Work", description: "You gain a climbing speed equal to your walking speed and don't slow when climbing." },
                { level: 9, name: "Supreme Sneak", description: "Advantage on Sleight of Hand checks and for using thieves' tools." },
                { level: 13, name: "Use Magic Device", description: "You can use magic items even if you don't normally meet the requirements." },
                { level: 17, name: "Elusive", description: "As a reaction, add your proficiency bonus to avoid attacks and area effects." }
            ]},
            { id: "assassin", name: "Assassin", features: [
                { level: 3, name: "Infiltration Expertise", description: "You have proficiency with poisoner's kit and disguise kit; easier to take on other identities." },
                { level: 3, name: "Assassinate", description: "Advantage on attacks against creatures that haven't taken a turn in combat; hits on surprised creatures are automatic critical hits." },
                { level: 9, name: "Impostor", description: "You can masterfully impersonate another person, perfectly copying their behavior and speech." },
                { level: 13, name: "Death Strike", description: "Craft and apply poisons with deadly efficiency." },
                { level: 17, name: "Death Strike", description: "A surprised creature that fails a CON save takes double damage from your attack." }
            ]},
            { id: "arcanetrickster", name: "Arcane Trickster", features: [
                { level: 3, name: "Spellcasting", description: "Learn wizard spells (mostly Abjuration and Evocation) and gain a spellcasting ability." },
                { level: 3, name: "Mage Hand Legerdemain", description: "Your Mage Hand becomes invisible and can perform subtle manipulations." },
                { level: 9, name: "Magical Ambush", description: "If you are hidden, the target has disadvantage on its save against your spell this turn." },
                { level: 13, name: "Versatile Trickster", description: "Advantage on Intelligence, Wisdom, and Charisma saving throws against magic." },
                { level: 17, name: "Spell Thief", description: "As a reaction to a spell targeting you, attempt to steal the knowledge of that spell." }
            ]},
            { id: "soulknife", name: "Soul Knife", features: [
                { level: 3, name: "Psychic Blades", description: "Summon blades of pure psychic energy to throw or strike with." },
                { level: 3, name: "Psionic Power", description: "You have Energy dice (d6) to fuel strikes, defense, and telekinesis." },
                { level: 9, name: "Psionic Soul", description: "Gain short-range telepathic communication and the ability to psionically detect emotions." },
                { level: 13, name: "Psychic Veil", description: "Become invisible briefly using psionic energy." },
                { level: 17, name: "Rend Mind", description: "On a psychic blade hit, teleport with the target or stun them." }
            ]}
        ],
        subclassLevel: 3,
        features: [
            { level: 1, name: "Expertise", desc: "Choose two skills with proficiency — your proficiency bonus doubles for those checks." },
            { level: 1, name: "Sneak Attack", desc: "Once per turn, deal extra 1d6 damage on a hit when you have advantage or an ally is adjacent." },
            { level: 1, name: "Thieves' Cant", desc: "You know the secret thieves' language for passing hidden messages." },
            { level: 2, name: "Cunning Action", desc: "As a bonus action: Dash, Hide, or Disengage." },
            { level: 3, name: "Roguish Archetype", desc: "Choose your archetype (subclass)." },
            { level: 5, name: "Ухильність", desc: "При рятунку Спритності з половинною шкодою — ви не отримуєте damage взагалі, а при провалі — лише половину." }
        ]
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
        // Spellcasting params: ability — Wisdom; type — spell preparation.
        // cantripsByLevel — number of cantrips known at each character level.
        // preparedFormula — prepared spells = class level + ability modifier.
        spellcasting: {
            ability: "wis",
            type: "prepared",
            cantripsByLevel: { 1: 3, 2: 3, 3: 3, 4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4, 10: 5,
                               11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5 },
        spellList: ["guidance", "light", "mending", "resistance", "sacred_flame", "spare_the_dying", "thaumaturgy", "bless", "cure_wounds", "detect_magic", "guiding_bolt", "healing_word", "inflict_wounds", "sanctuary", "shield_of_faith", "aid", "augury", "blindness_deafness", "calm_emotions", "continual_flame", "enhance_ability", "find_traps", "gentle_repose", "hold_person", "lesser_restoration", "locate_object", "prayer_of_healing", "protection_from_poison", "silence", "spiritual_weapon", "warding_bond", "zone_of_truth", "animate_dead", "beacon_of_hope", "bestow_curse", "clairvoyance", "create_food_and_water", "daylight", "dispel_magic", "glyph_of_warding", "magic_circle", "mass_healing_word", "meld_into_stone", "protection_from_energy", "remove_curse", "revivify", "sending", "speak_with_dead", "spirit_guardians", "tongues", "water_walk", "banishment", "control_water", "death_ward", "divination", "freedom_of_movement", "guardian_of_faith", "locate_creature", "stone_shape", "commune", "contagion", "dispel_evil_and_good", "flame_strike", "geas", "greater_restoration", "hallow", "insect_plague", "legend_lore", "mass_cure_wounds", "planar_binding", "raise_dead", "scrying", "blade_barrier", "create_undead", "find_the_path", "forbiddance", "harm", "heal", "heroes_feast", "planar_ally", "true_seeing", "word_of_recall", "conjure_celestial", "divine_word", "etherealness", "fire_storm", "plane_shift", "regenerate", "resurrection", "symbol", "antimagic_field", "control_weather", "earthquake", "holy_aura", "astral_projection", "gate", "mass_heal", "true_resurrection"],
            preparedFormula: "level + wis"
        },
        skillsCount: 2,
        skills: [
            "History",
            "Insight",
            "Medicine",
            "Persuasion",
            "Religion"
        ],
        subclasses: [
            {"id":"war","name":"War Domain","heavyArmorProf":true,"martialWeaponProf":true,"grantedSpells":["divine_favor","shield_of_faith","magic_weapon","spiritual_weapon","crusaders_mantle","spirit_guardians","freedom_of_movement","stoneskin","flame_strike","hold_monster"],"features":[{"level":1,"name":"Cleric війни","description":"Бонусною дією ви можете здійснити додаткову attack weapon (обмежена кількість разів між відпочинками)."},{"level":1,"name":"Священна зброя","description":"Дією ви наділяєте weapons божественною силою: додаєте модифікатор Харизми до влучань і вона світиться."},{"level":6,"name":"Благословення бога війни","description":"Реакцією через Канал Божественності ви даєте allyу bonus до кидка влучання."},{"level":8,"name":"Божественний удар","description":"Раз на turn ваші attacks weapon завдають додаткову промінну damage."},{"level":17,"name":"Аватар битви","description":"Ви отримуєте resistance до дроблячої, колючої та рубаючої damage від немагічної зброї."}]},
            {"id":"trickery","name":"Trickery Domain","grantedSpells":["charm_person","disguise_self","mirror_image","pass_without_trace","blink","dispel_magic","dimension_door","polymorph","dominate_person","modify_memory"],"features":[{"level":1,"name":"Благословення пустуна","description":"Дотиком ви даєте allyу advantage на checks Спритності (Скритність) на годину."},{"level":1,"name":"Прикликання дублікату","description":"Дією через Канал Божественності ви створюєте свою ілюзорну копію, що триває до хвилини."},{"level":6,"name":"Плащ тіней","description":"Дублікат дозволяє вам чинити ефекти на відстані, ніби ви на місці копії."},{"level":8,"name":"Божественний удар","description":"Раз на turn ваші attacks weapon завдають додаткову отруйну damage."},{"level":17,"name":"Покращене дублювання","description":"Ви можете створити до чотирьох копій себе одночасно."}]},
            { id: "life", name: "Life Domain", heavyArmorProf: true, grantedSpells: ["bless", "cure_wounds", "lesser_restoration", "spiritual_weapon", "beacon_of_hope", "revivify", "death_ward", "guardian_of_faith", "mass_cure_wounds", "raise_dead"], features: [
                { level: 1, name: "Heavy Armor Proficiency", description: "You gain proficiency with heavy armor." },
                { level: 1, name: "Disciple of Life", description: "Your healing spells restore an extra 2 + spell level HP." },
                { level: 2, name: "Channel Divinity: Preserve Life", description: "Дією ви restore creatureм у межах 30 feet сумарно hit points, рівні п'ятикратному рівню cleric." },
                { level: 6, name: "Благословенний цілитель", description: "Зцілюючи заклятям інших, ви також restore собі 2 + level spell HP." },
                { level: 8, name: "Divine Strike", description: "Раз на turn ваша атака weapon завдає додатково 1d8 променистої damage (2d8 з 14-го level)." },
                { level: 17, name: "Supreme Healing", description: "Замість кидка кісток healing ви restore максимально можливу їх кількість." }
            ]}, { id: "tempest", name: "Tempest Domain", heavyArmorProf: true, martialWeaponProf: true, grantedSpells: ["fog_cloud", "thunderwave", "gust_of_wind", "shatter", "call_lightning", "sleet_storm"], features: [
                { level: 1, name: "Bonus Proficiencies", description: "You gain proficiency with martial weapons and heavy armor." },
                { level: 1, name: "Wrath of the Storm", description: "When a creature within 5 feet hits you, as a reaction deal 2d8 lightning/thunder damage (DEX save halves)." },
                { level: 2, name: "Channel Divinity: Destructive Wrath", description: "Use Channel Divinity to deal maximum lightning/thunder damage." },
                { level: 6, name: "Thunderbolt Strike", description: "When you deal lightning damage, push the target 10 feet." },
                { level: 8, name: "Divine Strike", description: "Раз на turn ваша атака weapon завдає додатково 1d8 damage thunder." },
                { level: 17, name: "Stormborn", description: "Gain a fly speed of 60 feet when outdoors." }
            ]},
            { id: "light", name: "Light Domain", grantedSpells: ["light", "burning_hands", "faerie_fire", "flaming_sphere", "scorching_ray", "daylight", "fireball", "guardian_of_faith", "wall_of_fire", "flame_strike", "scrying"], features: [
                { level: 1, name: "Bonus Cantrip", description: "You know the Light cantrip and additional domain spells." },
                { level: 1, name: "Warding Flare", description: "As a reaction to an attack, impose disadvantage on the attacker with a flash of light." },
                { level: 2, name: "Channel Divinity: Radiance of the Dawn", description: "As an action, emit radiance: creatures within 30 feet make a CON save or take 2d10 + cleric level radiant damage." },
                { level: 6, name: "Improved Flare", description: "Use Radiance of the Dawn to protect allies from damage as a reaction." },
                { level: 8, name: "Potent Spellcasting", description: "Add your Wisdom modifier to cleric cantrip damage." },
                { level: 17, name: "Corona of Light", description: "A light aura 30 feet for 1 minute deals radiant damage to enemies and illuminates the area." }
            ]}
        ],
        subclassLevel: 1,
        // Список заклять, доступних жерцю для підготовки/вивчення (id з DND_SPELLS).
                spellList: [
            // Замовляння (level 0)
            "guidance", "light", "mending", "resistance", "sacred_flame", "spare_the_dying", "thaumaturgy", "toll_the_dead", "word_of_radiance",
            // 1-й level
            "bane", "bless", "command", "create_or_destroy_water", "cure_wounds", "detect_evil_and_good", "detect_magic", "detect_poison_and_disease", "guiding_bolt", "healing_word", "inflict_wounds", "protection_from_evil_and_good", "purify_food_and_drink", "sanctuary", "shield_of_faith",
            // 2-й level
            "aid", "augury", "blindness_deafness", "calm_emotions", "continual_flame", "enhance_ability", "find_traps", "gentle_repose", "hold_person", "lesser_restoration", "locate_object", "prayer_of_healing", "protection_from_poison", "silence", "spiritual_weapon", "warding_bond", "zone_of_truth",
            // 3-й level
            "animate_dead", "beacon_of_hope", "bestow_curse", "clairvoyance", "create_food_and_water", "daylight", "dispel_magic", "glyph_of_warding", "magic_circle", "mass_healing_word", "meld_into_stone", "protection_from_energy", "remove_curse", "revivify", "sending", "speak_with_dead", "spirit_guardians", "tongues", "water_walk",
            // 4-й level
            "banishment", "control_water", "death_ward", "divination", "freedom_of_movement", "guardian_of_faith", "locate_creature", "stone_shape",
            // 5-й level
            "commune", "contagion", "dispel_evil_and_good", "flame_strike", "geas", "greater_restoration", "hallow", "insect_plague", "legend_lore", "mass_cure_wounds", "planar_binding", "raise_dead", "scrying",
            // 6-й level
            "blade_barrier", "create_undead", "find_the_path", "forbiddance", "harm", "heal", "heroes_feast", "planar_ally", "true_seeing", "word_of_recall",
            // 7-й level
            "conjure_celestial", "divine_word", "etherealness", "fire_storm", "plane_shift", "regenerate", "resurrection", "symbol",
            // 8-й level
            "antimagic_field", "control_weather", "earthquake", "holy_aura",
            // 9-й level
            "astral_projection", "gate", "mass_heal", "true_resurrection"
        ],
        features: [
            { level: 1, name: "Sorcererство", desc: "Ви чаклуєте жрецькі spell, використовуючи Wisdom як заклинальну ability scoreу. Підготовлених заклять = level cleric + мод. Мудрості." },
            { level: 1, name: "Божественний domain", desc: "Оберіть domain (subclass), що визначить ваші додаткові spell та здібності." },
            { level: 2, name: "Канал divinity (1/відпочинок)", desc: "Ви отримуєте здатність направляти божественну енергію: «Вигнання нежиті» та особливу опцію domainу." },
            { level: 5, name: "Знищення нежиті", desc: "Коли нежить провалює saving throw проти вашого «Вигнання нежиті», слабка нежить миттєво знищується." },
            { level: 6, name: "Канал divinity (2/відпочинок)", desc: "Ви можете використовувати Канал divinity двічі між відпочинками." },
            { level: 8, name: "Підвищення ability score / Риса", desc: "Стандартне ASI: +2/+1+1 або риса." },
            { level: 10, name: "Божественне втручання", desc: "Ви можете благати своє божество про допомогу; шанс успіху зростає з рівнем." }
        ]
        },

    // -------------------- BARD --------------------
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
            cantripsByLevel: { 1: 2, 2: 2, 3: 2, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4, 13: 4, 14: 4, 15: 4, 16: 4, 17: 4, 18: 4, 19: 4, 20: 4 },
        spellList: ["blade_ward", "dancing_lights", "friends", "light", "mage_hand", "mending", "message", "minor_illusion", "prestidigitation", "true_strike", "vicious_mockery", "animal_friendship", "bane", "charm_person", "comprehend_languages", "cure_wounds", "detect_magic", "disguise_self", "faerie_fire", "feather_fall", "healing_word", "heroism", "identify", "illusory_script", "longstrider", "silent_image", "sleep", "speak_with_animals", "tashas_hideous_laughter", "thunderwave", "unseen_servant", "animal_messenger", "blindness_deafness", "calm_emotions", "cloud_of_daggers", "crown_of_madness", "detect_thoughts", "enhance_ability", "enthrall", "heat_metal", "hold_person", "invisibility", "knock", "lesser_restoration", "locate_animals_or_plants", "locate_object", "magic_mouth", "see_invisibility", "shatter", "silence", "suggestion", "zone_of_truth", "bestow_curse", "clairvoyance", "dispel_magic", "fear", "glyph_of_warding", "hypnotic_pattern", "major_image", "nondetection", "plant_growth", "sending", "speak_with_dead", "speak_with_plants", "stinking_cloud", "tongues", "compulsion", "confusion", "dimension_door", "freedom_of_movement", "greater_invisibility", "hallucinatory_terrain", "locate_creature", "polymorph", "animate_objects", "awaken", "dominate_person", "dream", "geas", "greater_restoration", "hold_monster", "legend_lore", "mass_cure_wounds", "mislead", "modify_memory", "planar_binding", "raise_dead", "scrying", "seeming", "teleportation_circle", "eyebite", "find_the_path", "guards_and_wards", "irresistible_dance", "mass_suggestion", "programmed_illusion", "true_seeing", "etherealness", "forcecage", "magnificent_mansion", "mirage_arcane", "project_image", "regenerate", "resurrection", "symbol", "teleport", "dominate_monster", "feeblemind", "glibness", "mind_blank", "power_word_stun", "foresight", "power_word_kill", "true_polymorph"],
            spellsKnownFormula: "level + 3"
        },
        skillsCount: 3,
        skills: ["Acrobatics", "Animal Handling", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Arcana", "Nature", "Perception", "Performance", "Medicine", "Religion", "Stealth", "Persuasion", "Sleight of Hand", "Survival"],
                subclasses: [
            {"id":"dance","name":"Колегія Танцю","features":[{"level":3,"name":"Запальні кроки","description":"Ви б'єтеся витончено: ваша беззбройна атака використовує Bardівську die як damage, а поки на вас немає armor, ваш КЗ = 10 + Dexterity + Charisma."},{"level":3,"name":"Граційний воїн","description":"Ви рухаєтесь у бою, мов у танці: складніше влучити по вас, коли ви вже attackвали цього ходу."},{"level":6,"name":"Несамовита грація","description":"Ваша спритність дарує додаткову рухливість і реакційні переміщення в бою."},{"level":14,"name":"Леза-метелики","description":"Ваші беззбройні удари завдають більше damage й можуть зачепити кількох enemies поруч."}]},
            {"id":"glamour","name":"Колегія Гламуру","features":[{"level":3,"name":"Мантія натхнення","description":"Бонусною дією ви даруєте allyам тимчасові hit points й можливість одразу перемістися, не провокуючи атак."},{"level":3,"name":"Чарівна пtraitтність","description":"Дією ви можете зачарувати істот навколо, що бачать вас, на короткий час."},{"level":6,"name":"Чарівна мантія","description":"Реакцією ви змушуєте нападника замість вас attackвати іншу ціль або відступити."},{"level":14,"name":"Незаперечна велич","description":"Раз на короткий відпочинок ви приймаєте велично-жахливий вигляд, відлякуючи enemies."}]},
            { id: "lore", name: "Колегія Знань", features: [
                { level: 3, name: "Bonus Proficiencies", description: "Володіння 3 навичками на вибір." },
                { level: 3, name: "Ріжучі слова", description: "Реакція: витратити натхнення, щоб зменшити кидок attacks/checks/damage creatures на d6-d12." },
                { level: 6, name: "Додаткові magic таємниці", description: "Вивчіть 2 spell будь-якого class. Вони стають бардськими заклинаннями." },
                { level: 14, name: "Неперевершена майстерність", description: "Витратити натхнення: перевірка skills з proficiencyм стає мінімум 10 + bonus." }
            ]},
            { id: "valor", name: "Колегія Доблесті", martialWeaponProf: true, mediumArmorProf: true, shieldProf: true, features: [
                { level: 3, name: "Bonus Proficiencies", description: "Володіння середньою бронею, shieldми та combatовою weapon." },
                { level: 3, name: "Бойове натхнення", description: "Істота з вашим натхненням може додати die до кидка damage weapon або до КЗ проти attacks." },
                { level: 6, name: "Extra Attack", description: "Атакуйте двічі, коли робите action Атака." },
                { level: 14, name: "War Magic", description: "Бонусна дія: атака weapon після чаклування spell bonus action." }
            ]}
        ],
        subclassLevel: 3,
        spellList: [],
        features: [
            { level: 1, name: "Sorcererство", desc: "Ви чаклуєте бардські spell, використовуючи Харизму." },
            { level: 2, name: "Майстер на всі руки", desc: "Ви додаєте половину bonusу майстерності до всіх перевірок ability score без proficiency." },
            { level: 2, name: "Пісня відпочинку", desc: "Під час короткого відпочинку allyи відновлюють додаткові hit points від вашої музики." },
            { level: 5, name: "Джерело натхнення", desc: "Ваш bonus натхнення restoresться після короткого або довгого відпочинку." }
        ]
    },

    // -------------------- DRUID --------------------
    druid: {
        id: "druid",
        name: "Druid",
        icon: "🌿",
        hitDice: "1d8",
        primaryAbility: "Wisdom",
        primaryAbilityKey: "wis",
        savingThrows: ["int", "wis"],
        savingThrowsLabel: "Intelligence, Wisdom",
        armorProf: "Легка та середня броня, щити (не метал)",
        weaponProf: "Дубинки, кинджали, дротики, списи, булави, посохи, ятагани, серпи, пращі",
        spells: true,
        spellcasting: {
            ability: "wis",
            type: "prepared",
            cantripsByLevel: { 1: 2, 2: 2, 3: 2, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4, 13: 4, 14: 4, 15: 4, 16: 4, 17: 4, 18: 4, 19: 4, 20: 4 },
        spellList: ["druidcraft", "guidance", "mending", "poison_spray", "produce_flame", "resistance", "shillelagh", "thorn_whip", "animal_friendship", "charm_person", "create_or_destroy_water", "cure_wounds", "detect_magic", "detect_poison_and_disease", "entangle", "faerie_fire", "fog_cloud", "goodberry", "healing_word", "jump", "longstrider", "purify_food_and_drink", "speak_with_animals", "thunderwave", "animal_messenger", "barkskin", "beast_sense", "darkvision", "enhance_ability", "find_traps", "flame_blade", "flaming_sphere", "gust_of_wind", "heat_metal", "hold_person", "lesser_restoration", "locate_animals_or_plants", "locate_object", "moonbeam", "pass_without_trace", "protection_from_poison", "spike_growth", "call_lightning", "conjure_animals", "daylight", "dispel_magic", "meld_into_stone", "plant_growth", "protection_from_energy", "sleet_storm", "speak_with_plants", "water_breathing", "water_walk", "wind_wall", "blight", "confusion", "conjure_minor_elementals", "conjure_woodland_beings", "control_water", "dominate_beast", "freedom_of_movement", "giant_insect", "grasping_vine", "hallucinatory_terrain", "ice_storm", "locate_creature", "polymorph", "stone_shape", "stoneskin", "wall_of_fire", "antilife_shell", "awaken", "commune_with_nature", "conjure_elemental", "contagion", "geas", "greater_restoration", "insect_plague", "mass_cure_wounds", "planar_binding", "reincarnate", "scrying", "tree_stride", "wall_of_stone", "conjure_fey", "find_the_path", "heal", "heroes_feast", "move_earth", "sunbeam", "transport_via_plants", "wall_of_thorns", "wind_walk", "fire_storm", "mirage_arcane", "plane_shift", "regenerate", "reverse_gravity", "animal_shapes", "antipathy_sympathy", "control_weather", "earthquake", "feeblemind", "sunburst", "tsunami", "foresight", "shapechange", "storm_of_vengeance", "true_resurrection"],
            preparedFormula: "level + wis"
        },
        skillsCount: 2,
        skills: ["Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
                subclasses: [
            {"id":"sea","name":"Коло Моря","features":[{"level":2,"name":"Rage моря","description":"Дією ви прикликаєте вир води й вітру навколо себе, що штовхає й ранить enemies поблизу."},{"level":6,"name":"Аура припливу","description":"Ваш морський покров дарує вам і allyам resistance до однієї стихії та додаткову рухливість."},{"level":10,"name":"Стіна води","description":"Ви можете створити стіну води, що сповільнює снаряди й enemies."},{"level":14,"name":"Гнів моря","description":"Ваш морський прояв стає потужнішим, збиваючи enemies із ніг."}]},
            {"id":"stars","name":"Коло Зірок","features":[{"level":2,"name":"Зоряна мапа","description":"Ви носите карту зоряного неба, що дарує вам додаткові віщувальні spell та орієнтацію."},{"level":2,"name":"Зоряна форма","description":"Бонусною дією ви приймаєте сузір'я: Лучник (шкода на відстані), Чаша (healing) або Дракон (концентрація)."},{"level":6,"name":"Космічне віщування","description":"Раз на turn ви даєте advantage або накладаєте переdamage на кидок поблизу."},{"level":10,"name":"Сяйлива душа","description":"Поки ви у Зоряній формі, ви отримуєте тимчасові hit points на початку кожного ходу."},{"level":14,"name":"Сузір'я-володар","description":"Ваша Зоряна форма стає значно потужнішою для кожного з трьох сузір'їв."}]},
            { id: "land", name: "Коло Землі", features: [
                { level: 2, name: "Bonus Cantrip", description: "Замовляння друїда на вибір." },
                { level: 2, name: "Природне відновлення", description: "Під час короткого відпочинку: відновіть комірки заклинань. Сумарний level ≤ половина level друїда (округлено вгору)." },
                { level: 3, name: "Spells кола", description: "Оберіть місцевість (Арктика, Берег, Ліс, Луки, Гори, Болото, Підземля). Отримайте spell кола." },
                { level: 6, name: "Хода землі", description: "Рух по неmagicй важкій місцевості без витрат. Проturn крізь неmagic рослини без damage та уповільнення." },
                { level: 10, name: "Defense природи", description: "Імунітет до отрути та хвороб. Імунітет до чарування та страху від елементалів та фей." },
                { level: 14, name: "Святилище природи", description: "Звірі та рослини не можуть attackвати вас, якщо ви не attackєте першим. Якщо attackють: saving throw Мудрості або не можуть attackвати." }
            ]},
            { id: "moon", name: "Коло Місяця", features: [
                { level: 2, name: "Бойова дика подоба", description: "Дика подоба bonus action. Використовуйте Дику подобу для healing себе: витратьте комірку spell, відновіть 1d8 HP за level комірки." },
                { level: 2, name: "Форми кола", description: "Перетворюйтеся на звірів з показником небезпеки = level друїда / 3 (округлено вниз). Ігноруйте обмеження швидкості плавання/польоту." },
                { level: 6, name: "Первісний удар", description: "Атаки у формі звіра вважаються magic для подолання опору та імунітету." },
                { level: 10, name: "Елементальна дика подоба", description: "Витратьте 2 використання Дикої подоби: перетворіться на airного, земляного, вогняного або водяного елементаля." },
                { level: 14, name: "Тисяча форм", description: "Spells alter self необмежено без витрати комірки." }
            ]}
        ],
        subclassLevel: 2,
        spellList: [],
        features: [
            { level: 1, name: "Druidична мова", desc: "Ви знаєте друїдичну — таємну мову друїдів." },
            { level: 2, name: "Дика подобa", desc: "Ви можете перетворюватися на звірів, яких бачили раніше." },
            { level: 18, name: "Вічна молодість", desc: "Ви старієте в 10 разів повільніше." },
            { level: 20, name: "Арturnруїд", desc: "Ви можете використовувати Дику подобу необмежену кількість разів." }
        ]
    },

    // -------------------- MONK --------------------
    monk: {
        id: "monk",
        name: "Monk",
        icon: "🥋",
        hitDice: "1d8",
        primaryAbility: "Dexterity та Wisdom",
        primaryAbilityKey: "dex",
        savingThrows: ["str", "dex"],
        savingThrowsLabel: "Strength, Dexterity",
        armorProf: "None",
        unarmoredDefense: "10 + dex + wis",
        unarmoredSpeedBonus: 10,
        resource: "Ki Points",
        weaponProf: "Проста зброя, короткі мечі",
        unarmoredDefense: "10 + dex + wis",
        skillsCount: 2,
        skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
                subclasses: [
            {"id":"mercy","name":"Fighter Милосердя","features":[{"level":3,"name":"Руки healing та damage","description":"Витрачаючи Очко Фокусу, ви можете зцілювати дотиком або завдавати додаткову necrotic damage."},{"level":6,"name":"Цілющі техніки","description":"Ваше healing дотиком може також знімати стани (отруєння, засліплення тощо)."},{"level":11,"name":"Полегшення страждань","description":"Зціляючи когось, ви також даруєте йому тимчасові hit points."},{"level":17,"name":"Рука смерті/життя","description":"Ваші дотики милосердя стають надзвичайно потужними у зціленні та шкоді."}]},
            {"id":"shadow","name":"Fighter Тіні","features":[{"level":3,"name":"Мистецтво тіні","description":"За Очки Фокусу ви накладаєте closно: Темрява, Тьмяний зір, Безшумність або Малу ілюзію."},{"level":6,"name":"Тіньовий крок","description":"У тьмяному світлі чи темряві ви bonus action телепортуєтеся між тінями з перевагою на наступну attack."},{"level":11,"name":"Плащ тіней","description":"Ви можете стати невидимим у ділянці тіні, поки не вийдете на світло чи не attackєте."},{"level":17,"name":"Опортуніст","description":"Коли creature поруч отримує удар від когось іншого, ви можете reaction attackвати її."}]},
            {"id":"elements","name":"Fighter Стихій","features":[{"level":3,"name":"Прояв стихій","description":"Ви скеровуєте Очки Фокусу в стихійні прийоми: подовжена досяжність ударів і стихійна шкода."},{"level":6,"name":"Rage стихій","description":"Ваші стихійні прийоми дешевшають, а їхня шкода зростає."},{"level":11,"name":"Поступ стихій","description":"Ви опановуєте потужніші стихійні прояви — поштовх, тяга, рухливість."},{"level":17,"name":"Удар стихій","description":"Ваші стихійні удари здатні приголомшувати й відкидати enemies."}]},
            { id: "open_hand", name: "Шлях Відкритої Долоні", flurryOfBlowsEffects: true, features: [
                { level: 3, name: "Техніка відкритої долоні", description: "Коли ви влучаєте creature однією з атак, наданих Шквалом ударів, ви можете наclassти один з наступних ефектів: ціль повинна пройти saving throw Спритності або бути збитою з ніг; ціль повинна пройти saving throw Сили або бути відштовхнутою на 15 feet; або ціль не може робити реакції до кінця вашого наступного ходу." },
                { level: 6, name: "Цілюща рука", description: "Дією ви можете витратити 1 очко ки, щоб відновити кількість HP, рівну киданню вашої dice combatових мистецтв + модифікатор Мудрості." },
                { level: 11, name: "Спокій", description: "Ви можете увійти в особливу медитацію, яка оточує вас аурою миру. Наприкінці довгого відпочинку ви отримуєте ефект spell Святилище, який триває до початку вашого наступного довгого відпочинку." },
                { level: 17, name: "Дрижаюча долоня", description: "Коли ви влучаєте creature незброєним ударом, ви можете витратити 3 очки ки, щоб почати непомітні вібрації в тілі creatures. Протягом наступних днів, рівних вашому рівню монаха, ви можете дією завершити вібрації, змусивши creature впасти до 0 HP. Істота може пройти saving throw Витривалості, щоб уникнути ефекту." }
            ]}
        ],
        subclassLevel: 3,
        features: [
            { level: 1, name: "Незброєний захист", desc: "Без armor ваш КЗ = 10 + Dexterity + Wisdom." },
            { level: 1, name: "Бойові мистецтва", desc: "Ваші незброєні удари та монаше зброя використовують к4 damage (зростає з рівнем)." },
            { level: 2, name: "Ки", desc: "Ви отримуєте очки ки для особливих здібностей." },
            { level: 2, name: "Незброєний рух", desc: "Ваша speed зростає на 10 feet без armor." }
        ]
    },

    // -------------------- PALADIN --------------------
    paladin: {
        id: "paladin",
        name: "Paladin",
        icon: "⚔️",
        hitDice: "1d10",
        primaryAbility: "Strength та Charisma",
        primaryAbilityKey: "str",
        savingThrows: ["wis", "cha"],
        savingThrowsLabel: "Wisdom, Charisma",
        armorProf: "Вся броня, щити",
        weaponProf: "Проста та combatова зброя",
        spells: true,
        spellcasting: {
            ability: "cha",
            type: "prepared",
            cantripsByLevel: {},
        spellList: ["bless", "command", "compelled_duel", "cure_wounds", "detect_evil_and_good", "detect_magic", "detect_poison_and_disease", "divine_favor", "heroism", "protection_from_evil_and_good", "purify_food_and_drink", "searing_smite", "shield_of_faith", "thunderous_smite", "wrathful_smite", "aid", "branding_smite", "find_steed", "lesser_restoration", "locate_object", "magic_weapon", "protection_from_poison", "zone_of_truth", "aura_of_vitality", "blinding_smite", "create_food_and_water", "crusaders_mantle", "daylight", "dispel_magic", "elemental_weapon", "magic_circle", "remove_curse", "revivify", "aura_of_life", "aura_of_purity", "banishment", "death_ward", "locate_creature", "staggering_smite", "banishing_smite", "circle_of_power", "destructive_wave", "dispel_evil_and_good", "geas", "raise_dead"],
            preparedFormula: "Math.floor(level / 2) + cha"
        },
        skillsCount: 2,
        skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
                subclasses: [
            {"id":"glory","name":"Клятва Слави","grantedSpells":["guiding_bolt","heroism","enhance_ability","magic_weapon","haste","protection_from_energy","compulsion","freedom_of_movement"],"features":[{"level":3,"name":"Канал Божественності: Натхненний удар","description":"Завдаючи damage атакою, ви можете додати промінну damage, що дорівнює вашому рівню."},{"level":3,"name":"Канал Божественності: Миттєвий герой","description":"Бонусною дією ви тимчасово збільшуєте speed allies навколо."},{"level":7,"name":"Аура звитяги","description":"Ви та allyи поруч отримуєте bonus до швидкості."},{"level":15,"name":"Стрімкий захисник","description":"Раз на turn, коли ви влучаєте, ви можете дати allyу реакційну attack."},{"level":20,"name":"Живе уособлення слави","description":"Ви випромінюєте божественне сяйво: bonusи до влучань і додаткова шкода на короткий час."}]},
            { id: "devotion", name: "Клятва Відданості", grantedSpells: ["protection_from_evil_and_good", "sanctuary", "lesser_restoration", "zone_of_truth", "beacon_of_hope", "dispel_magic", "freedom_of_movement", "guardian_of_faith", "commune", "flame_strike"], features: [
                { level: 3, name: "Священна зброя", description: "Дія: зброя випромінює яскраве світло 20 feet. Додайте модифікатор Харизми до кидків attacks цією weapon. 1 хвилина." },
                { level: 3, name: "Канал divinity: Відвернути нечестивих", description: "Дія: фії та нежить в межах 30 feet. Рятунок Мудрості або відвернуті на 1 хвилину." },
                { level: 7, name: "Аура відданості", description: "Ви та allyи в межах 10 feet не можуть бути зачаровані. 30 feet з 18 level." },
                { level: 15, name: "Чистота духу", description: "Постійний ефект spell protection from evil and good." },
                { level: 20, name: "Священний німб", description: "Дія: аура light 30 feet на 1 хвилину. Яскраве світло. Ворожі creatures мають недолік на saving throws проти ваших заклинань та Каналу divinity. Початок ходу enemy в аурі: 10 променистої damage." }
            ]},
            { id: "ancients", name: "Клятва Древніх", grantedSpells: ["ensnaring_strike", "speak_with_animals", "moonbeam", "misty_step", "plant_growth", "protection_from_energy", "ice_storm", "stoneskin", "commune_with_nature", "tree_stride"], features: [
                { level: 3, name: "Канал divinity: Гнів ��р��роди", description: "Дія: рослини в межах 10 feet від точки в межах 30 feet оживають. Важка місцевість. Рятунок Сили або обплутаний." },
                { level: 3, name: "Канал divinity: Відвернути віровідступників", description: "Дія: фії, нежить, елементалі в межах 30 feet. Рятунок Мудрості або відвернуті на 1 хвилину." },
                { level: 7, name: "Аура палати", description: "Ви та allyи в межах 10 feet маєте resistance до damage від заклинань. 30 feet з 18 level." },
                { level: 15, name: "Невмирущий страж", description: "Падаючи до 0 HP: впадіть до 1 хіта замість цього. Раз на довгий відпочинок." },
                { level: 20, name: "Чемпіон древніх", description: "Дія: форма древньої сили на 1 хвилину. Опір до всієї damage. Союзники в межах 10 feet мають advantage на saving throws проти заклинань та інших магічних ефектів." }
            ]},
            { id: "vengeance", name: "Клятва Помсти", grantedSpells: ["bane", "hunters_mark", "hold_person", "misty_step", "haste", "protection_from_energy", "banishment", "dimension_door", "hold_monster", "scrying"], features: [
                { level: 3, name: "Канал divinity: Клятва ворожнечі", description: "Бонусна дія: оголосіть клятву проти creatures в межах 10 feet. Перевага на кидки attacks проти неї на 1 хвилину або до падіння до 0 HP." },
                { level: 3, name: "Канал divinity: Відплата enemy", description: "Реакція на attack creatures: атака можливості після attacks creatures. Перевага на attack." },
                { level: 7, name: "Невблаганний мститель", description: "Реакція: атака можливості, коли creature в межах 5 feet робить attack проти цілі, що не ви. Половина вашої швидкості: наблизтеся до creatures як частина реакції." },
                { level: 15, name: "Душа помсти", description: "Бонусна дія після attacks можливості: телепортуйтеся на 60 feet у вільний простір, який бачите." },
                { level: 20, name: "Аватар помсти", description: "Дія: форма помсти на 1 хвилину. Перевага на кидки attacks. Істоти в межах 10 feet мають недолік на saving throws проти ваших заклинань та Каналу divinity." }
            ]}
        ],
        subclassLevel: 3,
        spellList: [],
        features: [
            { level: 1, name: "Відчуття divinity", desc: "Ви відчуваєте пtraitтність небожителів, нежиті та істот Нижніх Планів у межах 60 feet." },
            { level: 1, name: "Накладання рук", desc: "Ви можете зцілювати дотиком, відновлюючи hit points." },
            { level: 2, name: "Fighting Style", desc: "Оберіть combatовий стиль (Defense, Дуелянт, Велика зброя тощо)." },
            { level: 2, name: "Sorcererство", desc: "Ви отримуєте здатність чаклувати паладинські spell." }
        ]
    },

    // -------------------- RANGER --------------------
    ranger: {
        id: "ranger",
        name: "Ranger",
        icon: "🏹",
        hitDice: "1d10",
        primaryAbility: "Dexterity та Wisdom",
        primaryAbilityKey: "dex",
        savingThrows: ["str", "dex"],
        savingThrowsLabel: "Strength, Dexterity",
        armorProf: "Light and medium armor, shields",
        weaponProf: "Проста та combatова зброя",
        spells: true,
        spellcasting: {
            ability: "wis",
            type: "known",
            cantripsByLevel: {},
        spellList: ["alarm", "animal_friendship", "cure_wounds", "detect_magic", "detect_poison_and_disease", "ensnaring_strike", "fog_cloud", "goodberry", "hail_of_thorns", "hunters_mark", "jump", "longstrider", "speak_with_animals", "animal_messenger", "barkskin", "beast_sense", "cordon_of_arrows", "darkvision", "find_traps", "lesser_restoration", "locate_animals_or_plants", "locate_object", "pass_without_trace", "protection_from_poison", "silence", "spike_growth", "conjure_animals", "conjure_barrage", "daylight", "lightning_arrow", "nondetection", "plant_growth", "protection_from_energy", "speak_with_plants", "water_breathing", "water_walk", "wind_wall", "conjure_woodland_beings", "freedom_of_movement", "grasping_vine", "locate_creature", "stoneskin", "commune_with_nature", "conjure_volley", "swift_quiver", "tree_stride"],
            spellsKnownFormula: "Math.floor(level / 2) + 1"
        },
        skillsCount: 3,
        skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
                subclasses: [
            {"id":"fey_wanderer","name":"Чарівний Мандрівник","grantedSpells":["charm_person","misty_step","dispel_magic","dimension_door","mislead"],"features":[{"level":3,"name":"Дар Першосвіту","description":"Ваші attacks завдають додаткову психічну damage, а ви отримуєте bonus до соціальних перевірок."},{"level":3,"name":"Чарівний поступ","description":"Вас не можна зачарувати, і ви маєте advantage проти enchantment."},{"level":7,"name":"Звивисті стежки","description":"Бонусною дією ви телепортуєтеся на коротку відстань."},{"level":11,"name":"Сяйлива мана","description":"Ваша психічна шкода вражає кількох enemies поблизу цілі."},{"level":15,"name":"Зникнення у Феєрії","description":"Реакцією на damage ви стаєте невидимими й переміщуєтеся."}]},
            {"id":"gloom_stalker","name":"Похмурий Переслідувач","grantedSpells":["disguise_self","rope_trick","fear","greater_invisibility","seeming"],"features":[{"level":3,"name":"Грізний нальотчик","description":"У першому раунді бою ви додаєте bonus до швидкості та додаткову attack з додатковою шкодою."},{"level":3,"name":"Дитя пітьми","description":"Ви бачите в magicй темряві й маєте надзвичайний темний зір."},{"level":7,"name":"Залізний розум","description":"Ви отримуєте профіцієнцію в рятунках Мудрості (або іншому, якщо вже маєте)."},{"level":11,"name":"Раптова атака з пітьми","description":"Промахнувшись по цілі, що вас не бачить, ви можете влучити по іншій."},{"level":15,"name":"Прихований убивця","description":"Ви можете ставати невидимими, коли промахуєтесь, аби сховатися."}]},
            { id: "hunter", name: "Мисливець", features: [
                { level: 3, name: "Здобич мисливця", description: "Оберіть: Вбивця колосів (+1d8 damage великим creatureм), Вбивця орди (додаткова атака при влучанні, якщо поруч інша creature), або Вбивця колосів (ціль має недолік на attack проти вас до вашого наступного ходу)." },
                { level: 7, name: "Yesтика захисту", description: "Оберіть: Втеча від орди (attacks можливості мають недолік), Defense від багатьох (bonus +2/+4 до КЗ проти атак), або Сталева воля (перевага на saving throws проти страху)." },
                { level: 11, name: "Багатоатака", description: "Оберіть: Залп (attackйте двох істот однією атакою), Вихор атак (атака можливості проти будь-якої кількості істот), або Контратака залпом (реакція: атака після промаху creatures)." },
                { level: 15, name: "Вища захист мисливця", description: "Оберіть: Ухилення (половина damage при провалі рятунку Спритності, 0 при успіху), Стояти проти хвилі (реакція: атака можливості проти attackвальника), або Зникнення (bonusна дія: сховатися)." }
            ]},
            { id: "beast_master", name: "Повелитель Звірів", features: [
                { level: 3, name: "Супутник рейнджера", description: "Отримайте звіра-супутника (показник небезпеки ≤ 1/4, без швидкості польоту). Звір діє у ваш turn. Команда: bonusна дія для attacks звіра." },
                { level: 7, name: "Виняткове тренування", description: "Звір може робити action Ривок, Відступ, Допомога або Ухилення у свій turn." },
                { level: 11, name: "Звірина лють", description: "Звір може робити дві attacks, коли ви командуєте йому attackвати." },
                { level: 15, name: "Спільна чаклунство", description: "Чаклуючи spell на себе: воно також впливає на звіра, якщо він в межах 30 feet." }
            ]}
        ],
        subclassLevel: 3,
        spellList: [],
        features: [
            { level: 1, name: "Обраний ворог", desc: "Ви маєте advantage на checks для відстеження та знання про обраний тип істот." },
            { level: 1, name: "Дослідник природи", desc: "Ви маєте advantages в обраному типі місцевості." },
            { level: 2, name: "Fighting Style", desc: "Оберіть combatовий стиль (Стрільба, Defense, Дуелянт тощо)." }
        ]
    },

    // -------------------- SORCERER --------------------
    sorcerer: {
        id: "sorcerer",
        name: "Чародій",
        icon: "✨",
        hitDice: "1d6",
        primaryAbility: "Charisma",
        primaryAbilityKey: "cha",
        savingThrows: ["con", "cha"],
        savingThrowsLabel: "Constitution, Charisma",
        armorProf: "None",
        resource: "Sorcery Points",
        weaponProf: "Кинджали, дротики, пращі, посохи, легкі арбалети",
        spells: true,
        spellcasting: {
            ability: "cha",
            type: "known",
            cantripsByLevel: { 1: 4, 2: 4, 3: 4, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5, 9: 5, 10: 6, 11: 6, 12: 6, 13: 6, 14: 6, 15: 6, 16: 6, 17: 6, 18: 6, 19: 6, 20: 6 },
        spellList: ["acid_splash", "blade_ward", "chill_touch", "dancing_lights", "fire_bolt", "friends", "light", "mage_hand", "mending", "message", "minor_illusion", "poison_spray", "prestidigitation", "ray_of_frost", "shocking_grasp", "true_strike", "burning_hands", "charm_person", "chromatic_orb", "color_spray", "comprehend_languages", "detect_magic", "disguise_self", "expeditious_retreat", "false_life", "feather_fall", "fog_cloud", "jump", "mage_armor", "magic_missile", "shield", "silent_image", "sleep", "thunderwave", "witch_bolt", "alter_self", "blindness_deafness", "blur", "cloud_of_daggers", "crown_of_madness", "darkness", "darkvision", "detect_thoughts", "enhance_ability", "enlarge_reduce", "gust_of_wind", "hold_person", "invisibility", "knock", "levitate", "mirror_image", "misty_step", "scorching_ray", "see_invisibility", "shatter", "spider_climb", "suggestion", "web", "blink", "clairvoyance", "counterspell", "daylight", "dispel_magic", "fear", "fireball", "fly", "gaseous_form", "haste", "hypnotic_pattern", "lightning_bolt", "major_image", "protection_from_energy", "sleet_storm", "slow", "stinking_cloud", "tongues", "water_breathing", "water_walk", "banishment", "blight", "confusion", "dimension_door", "dominate_beast", "greater_invisibility", "ice_storm", "polymorph", "stoneskin", "wall_of_fire", "animate_objects", "cloudkill", "cone_of_cold", "creation", "dominate_person", "hold_monster", "insect_plague", "seeming", "telekinesis", "teleportation_circle", "wall_of_stone", "arcane_gate", "chain_lightning", "circle_of_death", "disintegrate", "eyebite", "globe_of_invulnerability", "mass_suggestion", "move_earth", "sunbeam", "true_seeing", "delayed_blast_fireball", "etherealness", "finger_of_death", "fire_storm", "plane_shift", "prismatic_spray", "reverse_gravity", "teleport", "dominate_monster", "earthquake", "incendiary_cloud", "power_word_stun", "sunburst", "gate", "meteor_swarm", "power_word_kill", "time_stop", "wish"],
            spellsKnownFormula: "level + 1"
        },
        skillsCount: 2,
        skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
                subclasses: [
            {"id":"aberrant","name":"Аберантна Magic","grantedSpells":["arms_of_hadar","detect_thoughts","hunger_of_hadar","evards_black_tentacles","telekinesis"],"features":[{"level":1,"name":"Телепатичні відчуття","description":"Ви можете телепатично спілкуватися з creatureми поблизу та отримуєте психічні spell."},{"level":1,"name":"Психічні spell","description":"Ви можете витрачати Очки Sorcererства, щоб накладати свої психічні spell без компонентів."},{"level":6,"name":"Психічна стійкість","description":"Ви отримуєте resistance до психічної damage, а reaction можете відбити damage назад."},{"level":14,"name":"Weapons порядку","description":"Ваші психічні spell можуть оглушувати або підкоряти enemies."},{"level":18,"name":"Викривлення реальності","description":"Ваша аберантна сила дозволяє перебудовувати простір навколо."}]},
            {"id":"clockwork","name":"Годинникова Magic","grantedSpells":["alarm","protection_from_evil_and_good","aid","lesser_restoration","dispel_magic","protection_from_energy","freedom_of_movement","globe_of_invulnerability"],"features":[{"level":1,"name":"Відновлення рівноваги","description":"Реакцією ви можете скасувати advantage або переdamage на кидок поблизу."},{"level":1,"name":"Годинникова магія","description":"Ви отримуєте spell порядку, що завжди підготовлені."},{"level":6,"name":"Бастіон закону","description":"Ви створюєте захисне поле, що поглинає damage собі чи allyу."},{"level":14,"name":"Гонитва часу","description":"Ви можете коротко спотворити час, аби діяти знову."},{"level":18,"name":"Ідеальний порядок","description":"Ваша магія стає бездоганно передбачуваною й потужною."}]},
            {"id":"wild_magic","name":"Дика Magic","features":[{"level":1,"name":"Сплеск дикої магії","description":"Накладаючи spell, ви можете спричинити випадковий магічний ефект із таблиці хаосу."},{"level":1,"name":"Припливи хаосу","description":"Раз між відпочинками ви можете отримати advantage на кидок, провокуючи сплеск дикої магії."},{"level":6,"name":"Згинання талану","description":"Очком Sorcererства ви даєте bonus або штраф на кидок creatures поблизу."},{"level":14,"name":"Контрольований хаос","description":"Спрацьовуючи сплеск, ви можете кидати двічі й обирати ефект."},{"level":18,"name":"Магічна стійкість","description":"Ви отримуєте advantage на всі saving throws проти заклять."}]},
            { id: "draconic_bloodline", name: "Драконячий Родовід", baseAC: 13, hpBonusPerLevel: 1, features: [
                { level: 1, name: "Драконячий предок", description: "Оберіть тип дракона як свого предка. Тип damage, пов'язаний з кожним драконом, використовується вашими здібностями." },
                { level: 1, name: "Драконяча стійкість", description: "Ваш максимум HP зростає на 1, і зростає на 1 додатково з кожним новим рівнем чародія. Крім того, частини вашої шкіри покриті тонкою лускою. Коли ви не носите armor, ваш КЗ дорівнює 13 + модифікатор Спритності." },
                { level: 6, name: "Спорідненість стихії", description: "Коли ви чаклуєте spell, що завдає damage типу, пов'язаного з вашим драконячим предком, ви можете додати модифікатор Харизми до одного кидка damage цього spell. Ви також отримуєте resistance до цього типу damage." },
                { level: 14, name: "Драконячі крила", description: "Ви отримуєте здатність виростити драконячі крила зі спини, отримуючи speed польоту, рівну вашій поточній швидкості. Ви можете створити ці крила bonus action у свій turn." },
                { level: 18, name: "Драконяча пtraitтність", description: "Дією ви можете витратити 5 очок чародійства, щоб створити ауру страху або благоговіння в радіусі 60 feet. Протягом 1 хвилини або до втрати концентрації кожна ворожа creature, що починає свій turn в цій аурі, повинна пройти saving throw Мудрості або стати зачарованою (благоговіння) або наляканою (страх) до закінчення аури." }
            ]}
        ],
        subclassLevel: 1,
        spellList: [],
        features: [
            { level: 1, name: "Sorcererство", desc: "Ви чаклуєте чародійські spell, використовуючи вроджену магію." },
            { level: 1, name: "Чародійське походження", desc: "Оберіть джерело вашої магії (Драконяча кров, Дика магія тощо)." },
            { level: 2, name: "Джерело магії", desc: "Ви отримуєте очки чародійства для метамагії." },
            { level: 3, name: "Метамагія", desc: "Ви можете змінювати spell особливими способами." }
        ]
    },

    // -------------------- WARLOCK --------------------
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
            cantripsByLevel: { 1: 2, 2: 2, 3: 2, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4, 13: 4, 14: 4, 15: 4, 16: 4, 17: 4, 18: 4, 19: 4, 20: 4 },
        spellList: ["blade_ward", "chill_touch", "eldritch_blast", "friends", "mage_hand", "minor_illusion", "poison_spray", "prestidigitation", "true_strike", "armor_of_agathys", "arms_of_hadar", "charm_person", "comprehend_languages", "expeditious_retreat", "hellish_rebuke", "hex", "illusory_script", "protection_from_evil_and_good", "unseen_servant", "witch_bolt", "cloud_of_daggers", "crown_of_madness", "darkness", "enthrall", "hold_person", "invisibility", "mirror_image", "misty_step", "ray_of_enfeeblement", "shatter", "spider_climb", "suggestion", "counterspell", "dispel_magic", "fear", "fly", "gaseous_form", "hunger_of_hadar", "hypnotic_pattern", "magic_circle", "major_image", "remove_curse", "tongues", "vampiric_touch", "banishment", "blight", "dimension_door", "hallucinatory_terrain", "contact_other_plane", "dream", "hold_monster", "scrying", "arcane_gate", "circle_of_death", "conjure_fey", "create_undead", "eyebite", "flesh_to_stone", "mass_suggestion", "true_seeing", "etherealness", "finger_of_death", "forcecage", "plane_shift", "demiplane", "dominate_monster", "feeblemind", "glibness", "power_word_stun", "astral_projection", "foresight", "imprisonment", "power_word_kill", "true_polymorph"],
            spellsKnownFormula: "level + 1"
        },
        skillsCount: 2,
        skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
                subclasses: [
            {"id":"celestial","name":"Небожитель","grantedSpells":["light","sacred_flame","cure_wounds","guiding_bolt","flaming_sphere","lesser_restoration","daylight","revivify","guardian_of_faith","wall_of_fire","greater_restoration","flame_strike"],"features":[{"level":1,"name":"Сяйливі душі","description":"Ви маєте пул кубиків healing, якими bonus action лікуєте себе чи allies."},{"level":1,"name":"Цілющий світоч","description":"Ви отримуєте промінні cantrip та додаткові spell healing/light."},{"level":6,"name":"Промениста душа","description":"Раз на turn ви додаєте свій модифікатор Харизми до промінної чи вогняної damage заклять."},{"level":10,"name":"Цілюща аура","description":"На початку ваших ходів allyи поблизу відновлюють трохи HP."},{"level":14,"name":"Сонячний спалах","description":"Дією ви випускаєте промені light, що ранять enemies і засліплюють."}]},
            { id: "archfey", name: "Архіфея", grantedSpells: ["faerie_fire", "sleep", "calm_emotions", "phantasmal_force", "blink", "plant_growth", "dominate_beast", "greater_invisibility", "dominate_person", "seeming"], features: [
                { level: 1, name: "Пtraitтність фей", description: "Дія: creatures на вибір в межах 10 feet. Рятунок Мудрості або зачаровані або налякані до кінця вашого наступного ходу." },
                { level: 6, name: "Туманний втеча", description: "Реакція на отримання damage: станьте невидимим, телепортуйтеся на 60 feet. Невидимість до початку наступного ходу або до attacks/чаклування." },
                { level: 10, name: "Defense від enchantment", description: "Неможливо зачарувати магією." },
                { level: 14, name: "Темне марення", description: "Дія: зачаруйте creature. Рятунок Мудрості або зачарована. Поки зачарована: ви та allyи невидимі для неї. Закінчується при шкоді їй або її allyам." }
            ]},
            { id: "fiend", name: "Диявол", grantedSpells: ["burning_hands", "command", "blindness_deafness", "scorching_ray", "fireball", "stinking_cloud", "fire_shield", "wall_of_fire", "flame_strike", "hallow"], features: [
                { level: 1, name: "Благословення темних", description: "Коли ви зменшуєте ворожу creature до 0 HP: відновіть тимчасові hit points = модифікатор Харизми + level відьмака." },
                { level: 6, name: "Власна удача темних", description: "Провалюючи check або saving throw: додайте d10. Якщо це перетворює провал на успіх: не можна використовувати до короткого або довгого відпочинку." },
                { level: 10, name: "Стійкість диявола", description: "Оберіть тип damage при завершенні короткого або довгого відпочинку. Опір до цього типу." },
                { level: 14, name: "Кидання крізь пекло", description: "Влучивши по істоті атакою: телепортуйте її крізь пекло. Рятунок Мудрості або 10d10 психічної damage (половина при успіху)." }
            ]},
            { id: "great_old_one", name: "Великий Древній", grantedSpells: ["dissonant_whispers", "tashas_hideous_laughter", "detect_thoughts", "phantasmal_force", "clairvoyance", "sending", "dominate_beast", "evards_black_tentacles", "dominate_person", "telekinesis"], features: [
                { level: 1, name: "Пробудження розуму", description: "Телепатія 30 feet. Спілкуйтеся з будь-якою істотою, що розуміє хоча б одну мову." },
                { level: 6, name: "Ентропійна палата", description: "Реакція на отримання damage від attacks: накладіть недолік на attack. Якщо промах: attackвальник отримує damage = половина вашого level відьмака." },
                { level: 10, name: "Думковий щит", description: "Опір до психічної damage. Істота, що завдає вам психічної damage: отримує таку ж damage." },
                { level: 14, name: "Створення трала", description: "Дія: creature, що недієздатна. Рятунок Мудрості або зачарована. Поки зачарована: телепатичний зв'язок. Команда: дія або реакція трала." }
            ]}
        ],
        subclassLevel: 1,
        spellList: [],
        features: [
            { level: 1, name: "Потойбічний покровитель", desc: "Ви уклали угоду з потойбічною істотою." },
            { level: 1, name: "Sorcererство пакту", desc: "Ви чаклуєте spell через свій пакт, використовуючи комірки пакту." },
            { level: 2, name: "Містичні spell", desc: "Ви отримуєте містичні spell — особливі magic здібності." },
            { level: 3, name: "Дар пакту", desc: "Ваш покровитель дарує вам особливий дар (Пакт клинка, Пакт ланцюга, Пакт фоліанта)." }
        ]
    },

    // -------------------- WIZARD --------------------
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
        weaponProf: "Кинджали, дротики, пращі, посохи, легкі арбалети",
        spells: true,
        spellcasting: {
            ability: "int",
            type: "prepared",
            cantripsByLevel: { 1: 3, 2: 3, 3: 3, 4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4, 10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5 },
        spellList: ["acid_splash", "blade_ward", "chill_touch", "dancing_lights", "fire_bolt", "friends", "light", "mage_hand", "mending", "message", "minor_illusion", "poison_spray", "prestidigitation", "ray_of_frost", "shocking_grasp", "true_strike", "alarm", "burning_hands", "charm_person", "chromatic_orb", "color_spray", "comprehend_languages", "detect_magic", "disguise_self", "expeditious_retreat", "false_life", "feather_fall", "find_familiar", "fog_cloud", "grease", "identify", "illusory_script", "jump", "longstrider", "mage_armor", "magic_missile", "protection_from_evil_and_good", "shield", "silent_image", "sleep", "tensers_floating_disk", "thunderwave", "unseen_servant", "witch_bolt", "arcane_lock", "blindness_deafness", "blur", "cloud_of_daggers", "continual_flame", "darkness", "darkvision", "detect_thoughts", "enlarge_reduce", "flaming_sphere", "gentle_repose", "gust_of_wind", "hold_person", "invisibility", "knock", "levitate", "locate_object", "magic_mouth", "magic_weapon", "mirror_image", "misty_step", "rope_trick", "scorching_ray", "see_invisibility", "shatter", "spider_climb", "suggestion", "web", "animate_dead", "bestow_curse", "blink", "clairvoyance", "counterspell", "dispel_magic", "fear", "fireball", "fly", "gaseous_form", "glyph_of_warding", "haste", "hypnotic_pattern", "lightning_bolt", "magic_circle", "major_image", "nondetection", "phantom_steed", "protection_from_energy", "remove_curse", "sending", "sleet_storm", "slow", "stinking_cloud", "tongues", "vampiric_touch", "water_breathing", "arcane_eye", "banishment", "black_tentacles", "blight", "confusion", "conjure_minor_elementals", "control_water", "dimension_door", "fabricate", "fire_shield", "greater_invisibility", "hallucinatory_terrain", "ice_storm", "locate_creature", "phantasmal_killer", "polymorph", "private_sanctum", "resilient_sphere", "secret_chest", "stone_shape", "stoneskin", "wall_of_fire", "animate_objects", "arcane_hand", "cloudkill", "cone_of_cold", "conjure_elemental", "contact_other_plane", "creation", "dominate_person", "dream", "geas", "hold_monster", "legend_lore", "mislead", "modify_memory", "passwall", "planar_binding", "scrying", "seeming", "telekinesis", "telepathic_bond", "teleportation_circle", "wall_of_force", "wall_of_stone", "arcane_gate", "chain_lightning", "circle_of_death", "contingency", "create_undead", "disintegrate", "eyebite", "flesh_to_stone", "globe_of_invulnerability", "guards_and_wards", "instant_summons", "irresistible_dance", "magic_jar", "mass_suggestion", "move_earth", "programmed_illusion", "sunbeam", "true_seeing", "wall_of_ice", "delayed_blast_fireball", "etherealness", "finger_of_death", "forcecage", "magnificent_mansion", "mirage_arcane", "plane_shift", "prismatic_spray", "project_image", "reverse_gravity", "sequester", "simulacrum", "symbol", "teleport", "antimagic_field", "antipathy_sympathy", "clone", "control_weather", "demiplane", "dominate_monster", "feeblemind", "incendiary_cloud", "maze", "mind_blank", "power_word_stun", "sunburst", "telepathy", "astral_projection", "foresight", "gate", "imprisonment", "meteor_swarm", "power_word_kill", "prismatic_wall", "shapechange", "time_stop", "true_polymorph", "weird", "wish"],
            preparedFormula: "level + int"
        },
        skillsCount: 2,
        skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
                subclasses: [
            {"id":"divination","name":"Школа Divination","features":[{"level":2,"name":"Передвістя","description":"Після тривалого відпочинку ви кидаєте два d20 і можете замінити ними майбутні кидки."},{"level":2,"name":"Знавець віщувань","description":"Spells віщування ви переписуєте дешевше та швидше."},{"level":6,"name":"Досвідчене передвістя","description":"Ви отримуєте третій кубик передвістя."},{"level":10,"name":"Велике передвістя","description":"Ваші кубики передвістя стають потужнішими у застосуванні."},{"level":14,"name":"Третє око","description":"Дією ви отримуєте темний зір, бачення невидимого чи читання думок на короткий час."}]},
            {"id":"illusion","name":"Школа Ілюзії","features":[{"level":2,"name":"Покращена мала ілюзія","description":"Ви знаєте cantrip «Мала ілюзія» і можете створювати звук та образ одночасно."},{"level":2,"name":"Знавець ілюзій","description":"Spells illusion ви переписуєте дешевше та швидше."},{"level":6,"name":"Оманлива творчість","description":"Дією ви можете оживити частину illusion, надавши їй фізичних властивостей."},{"level":10,"name":"Видима ілюзія","description":"Ваші illusion стають переконливішими й важчими для викриття."},{"level":14,"name":"Ілюзорна реальність","description":"На мить ви робите частину illusion справжньою."}]},
            { id: "abjuration", name: "Школа Abjuration", features: [
                { level: 2, name: "Учень убезпечення", description: "Час і золото для копіювання заклинань убезпечення зменшено вдвічі." },
                { level: 2, name: "Аркана палата", description: "Створіть магічну палату. Hit Points палати = подвійний level wizard + модифікатор Intelligenceу. Відновлюється після довгого відпочинку або чаклування spell убезпечення." },
                { level: 6, name: "Проектована палата", description: "Реакція: надайте істоті в межах 30 feet resistance до damage. Аркана палата втрачає hit points, рівні завданій шкоді." },
                { level: 10, name: "Покращена аркана палата", description: "Аркана палата отримує resistance до damage від заклинань. Ви отримуєте resistance до damage від заклинань, поки палата активна." },
                { level: 14, name: "Опір заклинанням", description: "Перевага на saving throws проти заклинань. Опір до damage від заклинань." }
            ]},
            { id: "evocation", name: "Школа Evocation", sculptSpells: true, features: [
                { level: 2, name: "Скульптор заклинань", description: "Ви можете створювати кишені відносної безпеки в межах ефектів ваших заклинань втілення. Коли ви чаклуєте spell втілення, ви можете обрати кількість істот, яку бачите, рівну 1 + level spell. Обрані creatures автоматично проходять saving throw проти spell і не отримують damage, якщо зазвичай отримували б половину при успішному рятунку." },
                { level: 6, name: "Potent Spellcasting", description: "Ваші cantrip, що завдають damage, впливають навіть на істот, які уникають основного ефекту. Коли creature проходить saving throw проти вашого cantrip або промахує��ься по ній, вона все одно отримує половину damage cantrip, але не отримує додаткових ефектів." },
                { level: 10, name: "Посилене втілення", description: "Ви можете додати модифікатор Intelligenceу до одного кидка damage будь-якого spell втілення wizard, яке ви чаклуєте." },
                { level: 14, name: "Надзаряд", description: "Ви можете збільшити силу простіших заклинань. Коли ви чаклуєте spell wizard 1–5 level, що завдає damage, ви можете завдати максимальну damage цим заклинанням. Ви можете використовувати цю здатність один раз, і restore її після довгого відпочинку." }
            ]}
        ],
        subclassLevel: 2,
        spellList: [],
        features: [
            { level: 1, name: "Sorcererство", desc: "Ви чаклуєте чарівницькі spell через вивчення та практику." },
            { level: 1, name: "Відновлення аркани", desc: "Раз на день під час короткого відпочинку ви restore комірки заклинань." },
            { level: 2, name: "Аркана традиція", desc: "Оберіть школу магії для спеціалізації." },
            { level: 18, name: "Майстерність заклинань", desc: "Ви можете чаклувати деякі spell 1-го та 2-го level необмежено." }
        ]
    }
};

// ====================================================================
// РАСИ D&D 5e (v2) — без фіксованих bonusів ability score.
// Підвищення ability score гравець обирає сам через Origin ASI
// (+2/+1 або +1/+1/+1). Категорії: "Звичайні", "Exotic", "Чудовиська".
// Деякі race мають `subraces` (підrace) з власними рисами.
// ====================================================================
const DND_RACES = {
    // ==================== COMMON (PHB 2024) ====================
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
            { name: "Versatile", desc: "One Origin feat of your choice." }
        ]
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
            { name: "Elven Lineage", desc: "Choose a lineage below — it grants spells (spellcasting ability: Int/Wis/Cha)." }
        ],
        subraces: [
            { id: "highelf", name: "High Elf", grantedSpells: ["prestidigitation"], bonusCantripChoices: 1, traits: [
                { name: "Cantrip", desc: "You know Prestidigitation; on a Long Rest you can replace it with another Wizard cantrip." },
                { name: "Lineage Spells", desc: "At 3rd level — Detect Magic; at 5th — Misty Step." }
            ]},
            { id: "woodelf", name: "Wood Elf", grantedSpells: ["druidcraft"], traits: [
                { name: "Fleet of Foot", desc: "Speed 35 feet." },
                { name: "Lineage Spells", desc: "You know Druidcraft; at 3rd — Longstrider; at 5th — Pass without Trace." }
            ]},
            { id: "drow", name: "Drow", grantedSpells: ["dancing_lights"], traits: [
                { name: "Improved Darkvision", desc: "Range 120 feet." },
                { name: "Lineage Spells", desc: "You know Dancing Lights; at 3rd — Faerie Fire; at 5th — Darkness." }
            ]}
        ]
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
            { name: "Dwarven Resilience", desc: "Resistance to Poison damage and advantage on saving throws against the Poisoned condition." },
            { name: "Dwarven Toughness", desc: "Your Hit Point maximum increases by 1, and by 1 again every level." },
            { name: "Stonecunning", desc: "As a Bonus Action, gain Tremorsense 60 ft. for 10 minutes. Uses = Proficiency Bonus." }
        ]
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
            { name: "Halfling Nimbleness", desc: "You can move through the space of any creature larger than you." },
            { name: "Lucky", desc: "When you roll a 1 on the d20, you can reroll the die." },
            { name: "Naturally Stealthy", desc: "You can hide even when obscured only by a creature larger than you." }
        ]
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
            { name: "Gnomish Cunning", desc: "Advantage on Intelligence, Wisdom, and Charisma saving throws." },
            { name: "Gnomish Lineage", desc: "Choose a lineage below. Spellcasting ability: Int/Wis/Cha." }
        ],
        subraces: [
            { id: "forestgnome", name: "Forest Gnome", grantedSpells: ["minor_illusion", "speak_with_animals"], traits: [
                { name: "Lineage Magic", desc: "You know Minor Illusion and can speak with Small or smaller beasts." }
            ]},
            { id: "rockgnome", name: "Rock Gnome", grantedSpells: ["mending", "prestidigitation"], traits: [
                { name: "Artificer's Lore", desc: "You know Mending and Prestidigitation." },
                { name: "Clockwork Device", desc: "You can build a Tiny clockwork device (AC 5, 1 HP)." }
            ]}
        ]
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
            { name: "Draconic Ancestry", desc: "Choose a dragon type — it determines your damage type (Acid/Lightning/Fire/Poison/Cold)." },
            { name: "Darkvision", desc: "Range 60 feet." },
            { name: "Breath Weapon", desc: "In place of an attack: a 15-ft. cone or 30-ft. line, Dexterity save (DC 8 + Con modifier + Proficiency Bonus), 1d10 damage (rising to 2d10/3d10/4d10 at levels 5/11/17). Uses = Proficiency Bonus." },
            { name: "Damage Resistance", desc: "Resistance to the damage type of your ancestry." },
            { name: "Draconic Flight", desc: "At 5th level, as a Bonus Action — wings: a Fly Speed equal to your Speed for 10 minutes. Once per Long Rest." }
        ]
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
            { name: "Adrenaline Rush", desc: "Take the Dash action as a Bonus Action and gain Temporary Hit Points equal to your Proficiency Bonus. Regained on a Short or Long Rest." },
            { name: "Darkvision", desc: "Range 120 feet." },
            { name: "Relentless Endurance", desc: "When reduced to 0 Hit Points but not killed, you drop to 1 Hit Point instead. Once per Long Rest." }
        ]
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
            { name: "Otherworldly Presence", desc: "You know the Thaumaturgy cantrip. Spellcasting ability: Int/Wis/Cha." },
            { name: "Fiendish Legacy", desc: "Choose a legacy below — it grants a resistance and spells." }
        ],
        subraces: [
            { id: "infernal", name: "Infernal", grantedSpells: ["fire_bolt"], traits: [
                { name: "Legacy", desc: "Resistance to Fire. You know Fire Bolt; at 3rd — Hellish Rebuke; at 5th — Darkness." }
            ]},
            { id: "chthonic", name: "Chthonic", grantedSpells: ["chill_touch"], traits: [
                { name: "Legacy", desc: "Resistance to Necrotic. You know Chill Touch; at 3rd — False Life; at 5th — Ray of Enfeeblement." }
            ]},
            { id: "abyssal", name: "Abyssal", traits: [
                { name: "Legacy", desc: "Resistance to Poison. You know Poison Spray; at 3rd — Ray of Sickness; at 5th — Hold Person." }
            ]}
        ]
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
            { name: "Healing Hands", desc: "As an action, touch a creature and roll a number of d4s equal to your Proficiency Bonus, restoring that many Hit Points. Once per Long Rest." },
            { name: "Light Bearer", desc: "You know the Light cantrip (Charisma)." },
            { name: "Celestial Revelation", desc: "At 3rd level choose a form below; as a Bonus Action for 1 minute, add damage equal to your Proficiency Bonus once per turn. Once per Long Rest." }
        ],
        subraces: [
            { id: "heavenlywings", name: "Heavenly Wings", traits: [ { name: "Revelation", desc: "Wings: a Fly Speed equal to your Speed for the duration." } ]},
            { id: "innerradiance", name: "Inner Radiance", traits: [ { name: "Revelation", desc: "Radiance (10-ft. light); nearby enemies take Radiant damage." } ]},
            { id: "necroticshroud", name: "Necrotic Shroud", traits: [ { name: "Revelation", desc: "Spectral wings frighten nearby enemies; extra Necrotic damage." } ]}
        ]
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
            { name: "Large Form", desc: "At 5th level, as a Bonus Action you become Large for 10 minutes (advantage on Strength, +10 ft. Speed). Once per Long Rest." },
            { name: "Powerful Build", desc: "Advantage against the Grappled condition and you count as one size larger for carrying capacity." }
        ],
        subraces: [
            { id: "cloud", name: "Cloud's Jaunt", traits: [ { name: "Gift", desc: "As a Bonus Action, teleport up to 30 ft." } ]},
            { id: "fire", name: "Fire's Burn", traits: [ { name: "Gift", desc: "When you hit with an attack, deal an extra 1d10 Fire damage." } ]},
            { id: "frost", name: "Frost's Chill", traits: [ { name: "Gift", desc: "When you hit with an attack, deal an extra 1d6 Cold damage and reduce the target's Speed by 10 ft." } ]},
            { id: "hill", name: "Hill's Tumble", traits: [ { name: "Gift", desc: "When you hit with an attack, you can knock the target Prone." } ]},
            { id: "stone", name: "Stone's Endurance", traits: [ { name: "Gift", desc: "As a Reaction, reduce the damage taken by 1d12 + your Constitution modifier." } ]},
            { id: "storm", name: "Storm's Thunder", traits: [ { name: "Gift", desc: "As a Reaction when you take damage, deal 1d8 Thunder damage to a creature within range." } ]}
        ]
    },

    // ==================== EBERRON ====================
    changeling: {
        id: "changeling",
        name: "Changeling",
        icon: "🎭",
        category: "Eberron",
        desc: "Fey shapeshifters who can take on any face. Source: Eberron.",
        speed: 30,
        size: "Medium or Small (your choice)",
        languages: "Common + 2 languages from your background",
        skillChoices: { count: 2, from: ["Deception", "Insight", "Intimidation", "Performance", "Persuasion"] },
        traits: [
            { name: "Changeling Instincts", desc: "Proficiency in two skills: Deception, Insight, Intimidation, Performance, or Persuasion." },
            { name: "Shape-Shifter", desc: "As an action, change your appearance and voice (height, sex, Medium–Small size, the look of another species). While transformed, you have advantage on Charisma checks. Your equipment doesn't change." }
        ]
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
            { name: "Mind Link", desc: "Telepathy within a range of 10 ft. × your level; you can let a creature respond telepathically for 1 hour." },
            { name: "Severed from Dreams", desc: "You can't be the target of the Sleep spell; after a Long Rest you gain proficiency in one skill of your choice." }
        ]
    },
    khoravar: {
        id: "khoravar",
        name: "Khoravar",
        icon: "🧝‍♂️",
        category: "Eberron",
        desc: "Descendants of the humans and elves of Khorvaire ("children of Khorvaire"). Eberron's equivalent of the half-elf. Source: Eberron.",
        speed: 30,
        size: "Medium or Small (your choice)",
        languages: "Common + 2 languages from your background",
        grantedSpells: ["friends"],
        skillChoices: { count: 1, from: "any" },
        traits: [
            { name: "Darkvision", desc: "Range 60 feet." },
            { name: "Fey Ancestry", desc: "Advantage on saving throws against the Charmed condition." },
            { name: "Fey Gift", desc: "You know the Friends cantrip; on a Long Rest you can replace it with a Cleric, Druid, or Wizard cantrip." },
            { name: "Sleepless Resilience", desc: "You can treat a failed save against the Unconscious condition as a success. You can do so again after 1d4 Long Rests." },
            { name: "Skill Versatility", desc: "Proficiency in one skill or tool; you can change it on a Long Rest." }
        ]
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
            { name: "Bestial Instincts", desc: "Proficiency in one skill: Acrobatics, Athletics, Intimidation, or Survival." },
            { name: "Darkvision", desc: "Range 60 feet." },
            { name: "Shifting", desc: "As a Bonus Action for 1 minute, take on a bestial form; gain Temporary Hit Points equal to 2 × your Proficiency Bonus. Uses = Proficiency Bonus. Choose a type below." }
        ],
        subraces: [
            { id: "beasthide", name: "Beasthide", traits: [ { name: "Shifting", desc: "+1d6 Temporary Hit Points and +1 AC while shifted." } ]},
            { id: "longtooth", name: "Longtooth", traits: [ { name: "Shifting", desc: "As a Bonus Action, make a fang Unarmed Strike: 1d6 + your Strength modifier Piercing damage." } ]},
            { id: "swiftstride", name: "Swiftstride", traits: [ { name: "Shifting", desc: "+10 ft. Speed; as a Reaction, move up to 10 ft. when an enemy ends its turn near you." } ]},
            { id: "wildhunt", name: "Wildhunt", traits: [ { name: "Shifting", desc: "Advantage on Wisdom checks; enemies don't have advantage on attacks against you." } ]}
        ]
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
            { name: "Constructed Resilience", desc: "Resistance to Poison damage and advantage on saving throws against the Poisoned condition." },
            { name: "Integrated Protection", desc: "+1 AC; armor you wear can't be removed against your will." },
            { name: "Sentry's Rest", desc: "You don't sleep; your Long Rest is 6 hours spent motionless but conscious. Magic can't put you to sleep." },
            { name: "Specialized Design", desc: "Proficiency in one skill (your choice) and one tool set." },
            { name: "Tireless", desc: "You don't gain levels of Exhaustion from thirst, hunger, or suffocation." }
        ]
    },

    // ==================== EXOTIC ====================
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
            { name: "Spider Climb", desc: "Climb Speed equal to your Speed. At 3rd level, you can move along vertical surfaces and ceilings while leaving your hands free." },
            { name: "Deathless Nature", desc: "Resistance to Necrotic damage." },
            { name: "Vampiric Bite", desc: "As an Unarmed Strike, bite: 1d4 + your Constitution modifier Piercing damage. When you deal damage (not to a Construct or Undead), either restore that many Hit Points or gain a bonus to your next check/attack. Uses = Proficiency Bonus." }
        ]
    }
};

// Скорочені ключі ability score (для розрахунків)
const ABILITY_KEYS = ["str", "dex", "con", "int", "wis", "cha"];
const ABILITY_LABELS = {
    str: "Strength",
    dex: "Dexterity",
    con: "Constitution",
    int: "Intelligence",
    wis: "Wisdom",
    cha: "Charisma"
};

const ALIGNMENTS = [
    "Законно-добрий",
    "Нейтрально-добрий",
    "Хаотично-добрий",
    "Законно-нейтральний",
    "Істинно-нейтральний",
    "Хаотично-нейтральний",
    "Законно-злий",
    "Нейтрально-злий",
    "Хаотично-злий"
];

const BACKGROUNDS = [
    "Acolyte",
    "Criminal",
    "Folk Hero",
    "Noble",
    "Sage",
    "Soldier",
    "Hermit",
    "Entertainer",
    "Sailor",
    "Artisan"
];

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

// ====================================================================
// Module 2 — Origin ASI (підвищення ability score від походження, 2024 PHB).
// Races v2 не дають фіксованих bonusів; гравець обирає режим розподілу.
//   - "two-one":    +2 до однієї та +1 до іншої ability scoreи
//   - "three-ones": +1 до трьох різних ability score
// pattern — відсортований за спаданням список очікуваних значень по
// ненульових ability scoreах; total — сумарний бюджет очок.
// ====================================================================
const ORIGIN_ASI_MODES = [
    {
        id: "two-one",
        name: "+2 / +1",
        desc: "+2 до однієї ability scoreи та +1 до іншої.",
        total: 3,
        slots: 2,
        pattern: [2, 1]
    },
    {
        id: "three-ones",
        name: "+1 / +1 / +1",
        desc: "+1 до трьох різних ability score.",
        total: 3,
        slots: 3,
        pattern: [1, 1, 1]
    }
];

// Перевіряє, чи відповідає розподіл обраному режиму походження.
function isOriginAllocationValid(modeId, allocations) {
    const mode = ORIGIN_ASI_MODES.find(m => m.id === modeId);
    if (!mode) return false;
    const vals = ABILITY_KEYS
        .map(k => parseInt(allocations[k]) || 0)
        .filter(v => v > 0)
        .sort((a, b) => b - a);
    if (vals.length !== mode.pattern.length) return false;
    return vals.every((v, i) => v === mode.pattern[i]);
}

// ====================================================================
// Прогресія підвищень ability score (ASI / Feats) за levelми
// Fighter отримує ASI на 4, 6, 8, 12, 14, 16, 19 (bonusні рівні 6 і 14).
// Інші classи — стандартні 4, 8, 12, 16, 19.
// ====================================================================
const ASI_LEVELS_STANDARD = [4, 8, 12, 16, 19];
const ASI_LEVELS_FIGHTER = [4, 6, 8, 12, 14, 16, 19];
const ASI_LEVELS_ROGUE = [4, 8, 10, 12, 16, 19]; // Rogue має додатковий на 10

function getASILevels(classId) {
    if (classId === "fighter") return ASI_LEVELS_FIGHTER;
    if (classId === "rogue") return ASI_LEVELS_ROGUE;
    return ASI_LEVELS_STANDARD;
}

// ====================================================================
// Розширені особливості class (повний level 1–20) — мінімальний набір
// найважливіших фіч. Використовується у PDF-блоці "Features and Traits".
// ====================================================================
const CLASS_FEATURES_BY_LEVEL = {
    barbarian: [
        { level: 3, name: "Первинний шлях", desc: "Особливості обраного subclassу (рівні 3, 6, 10, 14)." },
        { level: 4, name: "Підвищення ability score / Риса", desc: "Оберіть +2 до однієї або +1 до двох ability score, або візьміть trait." },
        { level: 7, name: "Дика інтуїція", desc: "Ви маєте advantage на checks Спритності для ініціативи." },
        { level: 9, name: "Жорстокий критичний удар (1 кубик)", desc: "Додаткова кістка damage при критичних попаданнях weapon." },
        { level: 11, name: "Невпинна лють", desc: "Якщо ви впадаєте до 0 ХП під час Люті, можете кинути CON saving throw DC 10, щоб опуститись до 1 ХП." },
        { level: 13, name: "Жорстокий критичний удар (2 кубики)", desc: "Дві додаткові dice damage при критичних попаданнях." },
        { level: 15, name: "Стійка лють", desc: "Ваша Rage закінчується тільки якщо ви вирубані або самі її прип��няєте." },
        { level: 17, name: "Жорстокий критичний удар (3 кубики)", desc: "Три додаткові dice damage при критичних попаданнях." },
        { level: 18, name: "Невгамовна сила", desc: "Якщо ваша Strength ≤ 18, вона стає 18 (на час перевірок). Інакше +4 damage в Люті." },
        { level: 19, name: "Підвищення ability score / Риса", desc: "Стандартне ASI: +2/+1+1 або риса." },
        { level: 20, name: "Первинний чемпіон", desc: "Ваші Strength та Constitution збільшуються на 4 (максимум 24)." }
    ],
    fighter: [
        { level: 4, name: "Підвищення ability score / Риса", desc: "Стандартне ASI: +2 до однієї або +1 до двох ability score, або риса." },
        { level: 6, name: "Підвищення ability score / Риса (bonus Fighterа)", desc: "Додаткове ASI — унікальна привілея class Fighterа." },
        { level: 7, name: "Особливість subclassу", desc: "Здобувається відповідно до обраного архетипу." },
        { level: 8, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 9, name: "Незламний (1 раз)", desc: "Ви можете перекинути провалений рятунковий кидок, restoresться на короткому відпочинку." },
        { level: 10, name: "Особливість subclassу", desc: "Здобувається відповідно до обраного архетипу." },
        { level: 11, name: "Додаткова атака (2)", desc: "Ви можете attackвати тричі за action Атака." },
        { level: 12, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 13, name: "Незламний (2 рази)", desc: "Ви можете використовувати Незламний двічі між короткими відпочинками." },
        { level: 14, name: "Підвищення ability score / Риса (bonus Fighterа)", desc: "Додаткове ASI — унікальна привілея class Fighterа." },
        { level: 15, name: "Особливість subclassу", desc: "Здобувається відповідно до обраного архетипу." },
        { level: 16, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 17, name: "Сплеск дії (2 рази); Незламний (3 рази)", desc: "Покращення сплеску дії та незламного." },
        { level: 18, name: "Особливість subclassу", desc: "Здобувається відповідно до обраного архетипу." },
        { level: 19, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 20, name: "Додаткова атака (3)", desc: "Ви можете attackвати чотири рази за action Атака." }
    ],
    rogue: [
        { level: 4, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 5, name: "Ухильність", desc: "При рятунку Спритності з половинною шкодою — ви не отримуєте damage взагалі, а при провалі — лише половину." },
        { level: 7, name: "Спритне ухилення", desc: "Реакцією ви можете вполовину знизити damage від attacks, що влучила у вас." },
        { level: 8, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 10, name: "Підвищення ability score / Риса", desc: "Rogue отримує додатковий ASI на 10-му рівні." },
        { level: 11, name: "Надійний талант", desc: "Перевірки навичок з proficiencyм не можуть бути нижче 10." },
        { level: 12, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 14, name: "Сліпочуття", desc: "Ви відчуваєте всі creatures у радіусі 10 feet навіть невидимих." },
        { level: 15, name: "Невловимий розум", desc: "Ви маєте proficiency рятунками Мудрості." },
        { level: 16, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 18, name: "Невловимість", desc: "Жодна атака не має advantages проти вас, поки ви бачите того, хто attackє." },
        { level: 19, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 20, name: "Безжальна удача", desc: "Якщо ви провалили check здібностей чи attack — можете перекинути її один раз за turn." }
    ],
    cleric: [
        { level: 2, name: "Канал divinity (1/відпочинок)", desc: "Вигнання нежиті та опція domainу." },
        { level: 4, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 5, name: "Знищення нежиті (КР 1/2)", desc: "Слабка нежить знищується, провалюючи saving throw проти Вигнання." },
        { level: 8, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 8, name: "Знищення нежиті (КР 1)", desc: "Поріг знищення нежиті зростає." },
        { level: 10, name: "Божественне втручання", desc: "Ви благаєте божество про пряму допомогу." },
        { level: 11, name: "Знищення нежиті (КР 2)", desc: "Поріг знищення нежиті зростає." },
        { level: 12, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 14, name: "Знищення нежиті (КР 3)", desc: "Поріг знищення нежиті зростає." },
        { level: 16, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 17, name: "Знищення нежиті (КР 4)", desc: "Поріг знищення нежиті зростає." },
        { level: 19, name: "Підвищення ability score / Риса", desc: "Стандартне ASI або риса." },
        { level: 20, name: "Покращене божественне втручання", desc: "Ваше прохання про втручання спрацьовує автоматично." }
    ]
};

// ====================================================================
// Backgrounds with full data (skills, languages/tools, feat)
// ====================================================================
const BACKGROUND_DATA = {
    "Acolyte": {
        skills: ["Insight", "Religion"],
        languages: 2,
        tools: [],
        feature: "Shelter of the Faithful — temples of your faith provide refuge and care."
    },
    "Criminal": {
        skills: ["Deception", "Stealth"],
        languages: 1,
        tools: ["Thieves' Tools", "Dice or cards"],
        feature: "Criminal Contact — you have a reliable informant."
    },
    "Folk Hero": {
        skills: ["Animal Handling", "Survival"],
        languages: 0,
        tools: ["Artisan's Tools", "Land Vehicles"],
        feature: "Rustic Hospitality — common folk will shelter and hide you."
    },
    "Noble": {
        skills: ["History", "Persuasion"],
        languages: 1,
        tools: ["One Gaming Set"],
        feature: "Position of Privilege — your noble status opens doors and audiences."
    },
    "Sage": {
        skills: ["Arcana", "History"],
        languages: 2,
        tools: [],
        feature: "Researcher — you know where to find the information you need in libraries."
    },
    "Soldier": {
        skills: ["Athletics", "Intimidation"],
        languages: 0,
        tools: ["One Gaming Set", "Land Vehicles"],
        feature: "Military Rank — soldiers respect you and carry out your requests."
    },
    "Hermit": {
        skills: ["Medicine", "Religion"],
        languages: 1,
        tools: ["Herbalism Kit"],
        feature: "Discovery — through years of solitude you found a unique truth."
    },
    "Entertainer": {
        skills: ["Acrobatics", "Performance"],
        languages: 0,
        tools: ["Disguise Kit", "Musical Instrument"],
        feature: "By Popular Demand — you can always find work at a tavern or festival."
    },
    "Sailor": {
        skills: ["Athletics", "Perception"],
        languages: 0,
        tools: ["Navigator's Tools", "Water Vehicles"],
        feature: "Ship's Passage — you can find free passage for yourself and your friends."
    },
    "Artisan": {
        skills: ["Insight", "Persuasion"],
        languages: 1,
        tools: ["Artisan's Tools"],
        feature: "Guild Membership — the guild provides shelter and financial support."
    }
};

// Full 5e skill list (for the custom background UI)
const ALL_SKILLS = [
    "Acrobatics", "Animal Handling", "Arcana", "Athletics",
    "Deception", "History", "Insight", "Intimidation",
    "Investigation", "Medicine", "Nature", "Perception",
    "Performance", "Persuasion", "Religion", "Sleight of Hand",
    "Stealth", "Survival"
];

// Skill → ability mapping (for UI/calculations)
const SKILL_ABILITY = {
    "Acrobatics": "dex", "Animal Handling": "wis", "Arcana": "int",
    "Athletics": "str", "Deception": "cha", "History": "int",
    "Insight": "wis", "Intimidation": "cha", "Investigation": "int",
    "Medicine": "wis", "Nature": "int", "Perception": "wis",
    "Performance": "cha", "Persuasion": "cha", "Religion": "int",
    "Sleight of Hand": "dex", "Stealth": "dex", "Survival": "wis"
};

// ====================================================================
// Armor для розрахунку КЗ (5e: Light = 11+DEX, Medium = base+min(DEX,2),
// Heavy = base, Shield = +2)
// ====================================================================
const ARMOR_DATA = {
    "none":          { name: "Без armor",        type: "none",   base: 10, addDex: true,  maxDex: null },
    "padded":        { name: "Стьобана",         type: "light",  base: 11, addDex: true,  maxDex: null },
    "leather":       { name: "Шкіряна",          type: "light",  base: 11, addDex: true,  maxDex: null },
    "studded":       { name: "Клепана шкіряна",  type: "light",  base: 12, addDex: true,  maxDex: null },
    "hide":          { name: "Шкура",            type: "medium", base: 12, addDex: true,  maxDex: 2 },
    "chainshirt":    { name: "Кольчужна сорочка",type: "medium", base: 13, addDex: true,  maxDex: 2 },
    "scalemail":     { name: "Лускова",          type: "medium", base: 14, addDex: true,  maxDex: 2 },
    "breastplate":   { name: "Кіrace",           type: "medium", base: 14, addDex: true,  maxDex: 2 },
    "halfplate":     { name: "Напівлати",        type: "medium", base: 15, addDex: true,  maxDex: 2 },
    "ringmail":      { name: "Кільчаста",        type: "heavy",  base: 14, addDex: false, maxDex: 0 },
    "chainmail":     { name: "Кольчуга",         type: "heavy",  base: 16, addDex: false, maxDex: 0 },
    "splint":        { name: "Шинна",            type: "heavy",  base: 17, addDex: false, maxDex: 0 },
    "plate":         { name: "Латна",            type: "heavy",  base: 18, addDex: false, maxDex: 0 }
};

// ====================================================================
// Weapons D&D 5e (проста + combatова). `ability`: "str" / "dex" / "finesse" (краще з двох),
// `ranged`: true для дистанційної (тоді bonus attacks рахується від Спритності).
// ====================================================================
const DND_WEAPONS = [
    // --- Проста зброя (ближній бій) ---
    { id: "club",          name: "Кийок",                 damage: "1d4",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Проста" },
    { id: "dagger",        name: "Кинджал",               damage: "1d4",  damageType: "Колюча",    ability: "finesse", ranged: false, category: "Проста" },
    { id: "greatclub",     name: "Велика палиця",         damage: "1d8",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Проста" },
    { id: "handaxe",       name: "Ручна сокира",          damage: "1d6",  damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Проста" },
    { id: "javelin",       name: "Метальний спис",        damage: "1d6",  damageType: "Колюча",    ability: "str",     ranged: false, category: "Проста" },
    { id: "lighthammer",   name: "Легкий молот",          damage: "1d4",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Проста" },
    { id: "mace",          name: "Булава",                damage: "1d6",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Проста" },
    { id: "quarterstaff",  name: "Бойовий посох",         damage: "1d6",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Проста" },
    { id: "sickle",        name: "Серп",                  damage: "1d4",  damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Проста" },
    { id: "spear",         name: "Спис",                  damage: "1d6",  damageType: "Колюча",    ability: "str",     ranged: false, category: "Проста" },
    // --- Проста зброя (дистанційна) ---
    { id: "crossbowlight", name: "Легкий арбалет",        damage: "1d8",  damageType: "Колюча",    ability: "dex",     ranged: true,  category: "Проста" },
    { id: "dart",          name: "Дротик",                damage: "1d4",  damageType: "Колюча",    ability: "finesse", ranged: true,  category: "Проста" },
    { id: "shortbow",      name: "Короткий лук",          damage: "1d6",  damageType: "Колюча",    ability: "dex",     ranged: true,  category: "Проста" },
    { id: "sling",         name: "Праща",                 damage: "1d4",  damageType: "Дробляча",  ability: "dex",     ranged: true,  category: "Проста" },
    // --- Бойова зброя (ближній бій) ---
    { id: "battleaxe",     name: "Бойова сокира",         damage: "1d8",  damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Бойова" },
    { id: "flail",         name: "Кистень",               damage: "1d8",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Бойова" },
    { id: "glaive",        name: "Глефа",                 damage: "1d10", damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Бойова" },
    { id: "greataxe",      name: "Велика сокира",         damage: "1d12", damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Бойова" },
    { id: "greatsword",    name: "Дворучний меч",         damage: "2d6",  damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Бойова" },
    { id: "halberd",       name: "Алебарда",              damage: "1d10", damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Бойова" },
    { id: "lance",         name: "Лансет",                damage: "1d12", damageType: "Колюча",    ability: "str",     ranged: false, category: "Бойова" },
    { id: "longsword",     name: "Довгий меч",            damage: "1d8",  damageType: "Рубаюча",   ability: "str",     ranged: false, category: "Бойова" },
    { id: "maul",          name: "Молот",                 damage: "2d6",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Бойова" },
    { id: "morningstar",   name: "Моргенштерн",           damage: "1d8",  damageType: "Колюча",    ability: "str",     ranged: false, category: "Бойова" },
    { id: "pike",          name: "Піка",                  damage: "1d10", damageType: "Колюча",    ability: "str",     ranged: false, category: "Бойова" },
    { id: "rapier",        name: "Рапіра",                damage: "1d8",  damageType: "Колюча",    ability: "finesse", ranged: false, category: "Бойова" },
    { id: "scimitar",      name: "Скімітар",              damage: "1d6",  damageType: "Рубаюча",   ability: "finesse", ranged: false, category: "Бойова" },
    { id: "shortsword",    name: "Короткий меч",          damage: "1d6",  damageType: "Колюча",    ability: "finesse", ranged: false, category: "Бойова" },
    { id: "trident",       name: "Тризубець",             damage: "1d6",  damageType: "Колюча",    ability: "str",     ranged: false, category: "Бойова" },
    { id: "warpick",       name: "Бойова кирка",          damage: "1d8",  damageType: "Колюча",    ability: "str",     ranged: false, category: "Бойова" },
    { id: "warhammer",     name: "Бойовий молот",         damage: "1d8",  damageType: "Дробляча",  ability: "str",     ranged: false, category: "Бойова" },
    { id: "whip",          name: "Батіг",                 damage: "1d4",  damageType: "Рубаюча",   ability: "finesse", ranged: false, category: "Бойова" },
    // --- Бойова зброя (дистанційна) ---
    { id: "crossbowhand",  name: "Ручний арбалет",        damage: "1d6",  damageType: "Колюча",    ability: "dex",     ranged: true,  category: "Бойова" },
    { id: "crossbowheavy", name: "Важкий арбалет",        damage: "1d10", damageType: "Колюча",    ability: "dex",     ranged: true,  category: "Бойова" },
    { id: "longbow",       name: "Довгий лук",            damage: "1d8",  damageType: "Колюча",    ability: "dex",     ranged: true,  category: "Бойова" }
];

// ====================================================================
// Feats (Feats) D&D 5e — найпопулярніші, локалізовано українською.
// ====================================================================
const DND_FEATS = [
    { id: "alert",          name: "Alert",                 description: "Always on guard: +5 to initiative, you can't be surprised while conscious, and invisible creatures don't gain advantage on attacks against you." },
    { id: "athlete",        name: "Athlete",                   bonusChoice: ["str", "dex"],                   description: "Increase Strength or Dexterity by 1. Standing up from prone costs only 5 feet of movement, and climbing doesn't reduce your speed. A standing jump uses the full distance." },
    { id: "actor",          name: "Actor", bonuses: { cha: 1 },                   description: "Increase Charisma by 1. You have advantage on Deception and Performance checks when imitating the speech or behavior of others." },
    { id: "charger",        name: "Charger",               description: "If you take the Dash action, you can use a bonus action to make a melee attack or shove a creature 10 feet — dealing +5 damage on a hit." },
    { id: "crossbowexpert", name: "Crossbow Expert",        description: "Ignore the loading property of crossbows. You have no disadvantage for ranged attacks while in melee. You can make a bonus-action attack with a hand crossbow after your main attack." },
    { id: "defensive",      name: "Defensive Duelist",          bonusChoice: ["str", "dex"],          description: "Increase Strength or Dexterity by 1. You have +1 to AC while holding a shield." },
    { id: "dualwielder",    name: "Dual Wielder",          description: "+1 to AC while wielding two weapons. You can use two-weapon fighting with weapons that aren't light. You can draw or stow two weapons at once." },
    { id: "durable",        name: "Durable", bonuses: { con: 1 },              description: "Increase Constitution by 1. When you spend a Hit Die to regain HP, the minimum is twice your Constitution modifier (min. 2)." },
    { id: "elementaladept", name: "Elemental Adept",         description: "Your spells of a chosen damage type ignore resistance and treat any 1 on a damage die as a 2." },
    { id: "greatweapon",    name: "Great Weapon Master",   description: "On a critical hit or when you reduce a creature to 0 HP with a melee weapon, make a bonus-action attack. With heavy two-handed weapons you can reroll 1s and 2s on damage dice. You may take -5 to hit for +10 damage (optional)." },
    { id: "healer",         name: "Healer",                description: "Using a Healer's Kit to bandage someone restores 1d6 + 4 + the creature's level in HP. The creature can't regain HP this way again until it finishes a rest." },
    { id: "heavyarmor",     name: "Heavy Armor Master",    bonuses: { str: 1 },    description: "Increase Strength by 1. While wearing heavy armor, nonmagical bludgeoning, piercing, and slashing damage you take is reduced by 3." },
    { id: "inspiring",      name: "Inspiring Leader",        bonuses: { cha: 1 },        description: "Increase Charisma by 1. A 10-minute inspiring speech grants up to 6 allies temporary HP equal to your level + your Charisma modifier." },
    { id: "lucky",          name: "Lucky",               description: "3 luck points per day: reroll an attack, check, or saving throw, or force a reroll of an enemy's attack against you." },
    { id: "magicinit",      name: "Magic Initiate",       description: "Learn 2 cantrips and one 1st-level spell from a chosen class. You can cast the 1st-level spell once per day for free." },
    { id: "mobile",         name: "Mobile",                description: "Speed +10 feet. After you Dash, difficult terrain doesn't slow you for the rest of the turn. Making a melee attack doesn't provoke an opportunity attack from that target this turn." },
    { id: "polearm",        name: "Polearm Master",          description: "Make a 1d4 bonus-action attack with the butt end when you attack with a glaive, halberd, quarterstaff, or spear. You can make an opportunity attack when a creature enters your reach." },
    { id: "resilient",      name: "Resilient",                 bonusChoice: ["str", "dex", "con", "int", "wis", "cha"],                 description: "Increase a chosen ability score by 1 and gain proficiency in saving throws with it." },
    { id: "savagebowman",   name: "Deadly Archer",           description: "Ranged attacks in melee don't impose disadvantage. Long range doesn't impose disadvantage. You may take -5 to hit for +10 damage (optional)." },
    { id: "sentinel",       name: "Sentinel",                   description: "When you hit with an opportunity attack, the target's speed becomes 0 for the rest of the turn. When a creature near you attacks an ally, you can make a reaction attack against it." },
    { id: "sharpshooter",   name: "Sharpshooter",        description: "Long range doesn't impose disadvantage. Your attacks ignore half and three-quarters cover. You may take -5 to hit for +10 damage (optional)." },
    { id: "shieldmaster",   name: "Shield Master",            description: "Use a bonus action to shove a creature with your shield. Your shield can grant temporary cover for Dexterity saving throws." },
    { id: "skilled",        name: "Skilled",         description: "Gain proficiency in any 3 skills or tools of your choice." },
    { id: "spellsniper",    name: "Spell Sniper",        description: "The range of your spell attacks is doubled. Your spells ignore half and three-quarters cover. Learn 1 attack cantrip." },
    { id: "toughness",      name: "Tough",            description: "Your HP maximum increases by 2 per character level (minimum +2 when you gain this feat)." },
    { id: "warcaster",      name: "War Caster",        description: "Advantage on Constitution saving throws to maintain concentration. You can cast spells with somatic components even with your hands full. You can use a reaction to cast a spell at a creature instead of making an opportunity attack." }
];

// ====================================================================
// КОМІРКИ ЗАКЛЯНЬ (Spell Slots) для повних чаклунів (Cleric, Druid, Wizard,
// Маг, Bard). Індекс — level character (1–20); масив — слоти заклять
// 1-9 рівнів. Напівчаклуни (Paladin/Ranger) матимуть окрему таблицю.
// ====================================================================
const SPELL_SLOTS_FULL = {
    1:  [2, 0, 0, 0, 0, 0, 0, 0, 0],
    2:  [3, 0, 0, 0, 0, 0, 0, 0, 0],
    3:  [4, 2, 0, 0, 0, 0, 0, 0, 0],
    4:  [4, 3, 0, 0, 0, 0, 0, 0, 0],
    5:  [4, 3, 2, 0, 0, 0, 0, 0, 0],
    6:  [4, 3, 3, 0, 0, 0, 0, 0, 0],
    7:  [4, 3, 3, 1, 0, 0, 0, 0, 0],
    8:  [4, 3, 3, 2, 0, 0, 0, 0, 0],
    9:  [4, 3, 3, 3, 1, 0, 0, 0, 0],
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
    20: [4, 3, 3, 3, 3, 2, 2, 1, 1]
};

// Який прогрес комірок використовує class. Поки що повний — лише Cleric.
const CASTER_PROGRESSION = {
    cleric: "full"
};

function getSpellSlots(classId, level) {
    const prog = CASTER_PROGRESSION[classId];
    const lvl = Math.max(1, Math.min(20, level || 1));
    if (prog === "full") return SPELL_SLOTS_FULL[lvl].slice();
    return [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

// ====================================================================
// ЗАКЛЯННЯ (Spells). Локалізовано українською за термінологією spells.html.
// Поля: id, level (0 = cantrip), name (UA), nameEn, school (UA+EN),
// castingTime, range, components, duration, concentration, ritual, description.
// Наразі — батч заклять Cleric (cantrip – 3 level) для тестування системи.
// ====================================================================
// DND_SPELLS moved to spells-data.js

// Швидкий доступ до spell за id.
function getSpellById(id) {
    return DND_SPELLS.find(s => s.id === id) || null;
}

// Усі spell, доступні class (за class.spellList), згруповані можуть бути в UI.
function getClassSpellList(classId) {
    const cls = (typeof DND_CLASSES !== "undefined") ? DND_CLASSES[classId] : null;
    if (!cls || !Array.isArray(cls.spellList)) return [];
    return cls.spellList.map(getSpellById).filter(Boolean);
}

// ====================================================================
// ВОЛОДІННЯ ЗБРОЄЮ ТА БРОНЕЮ ЗА КЛАСОМ (5e). 
//   armor: типи armor, якими володіє class: "light"/"medium"/"heavy"/"shield".
//   weaponCats: категорії зброї: "simple" (Проста) / "martial" (Бойова).
//   weaponIds: конкретні id зброї понад категорії (для classів типу rogue/wizard).
//   noMetal: true — обмеження друїда (не носить металеву armor/щит).
// ====================================================================
const CLASS_PROFICIENCY = {
    barbarian: { armor: ["light", "medium", "shield"],          weaponCats: ["simple", "martial"], weaponIds: [] },
    fighter:   { armor: ["light", "medium", "heavy", "shield"], weaponCats: ["simple", "martial"], weaponIds: [] },
    paladin:   { armor: ["light", "medium", "heavy", "shield"], weaponCats: ["simple", "martial"], weaponIds: [] },
    ranger:    { armor: ["light", "medium", "shield"],          weaponCats: ["simple", "martial"], weaponIds: [] },
    cleric:    { armor: ["light", "medium", "shield"],          weaponCats: ["simple"],            weaponIds: [] },
    druid:     { armor: ["light", "medium", "shield"],          weaponCats: [],                    weaponIds: ["club", "dagger", "dart", "javelin", "spear", "mace", "quarterstaff", "scimitar", "sickle", "sling"], noMetal: true },
    rogue:     { armor: ["light"],                              weaponCats: ["simple"],            weaponIds: ["crossbowhand", "longsword", "rapier", "shortsword"] },
    bard:      { armor: ["light"],                              weaponCats: ["simple"],            weaponIds: ["crossbowhand", "longsword", "rapier", "shortsword"] },
    warlock:   { armor: ["light"],                              weaponCats: ["simple"],            weaponIds: [] },
    monk:      { armor: [],                                     weaponCats: ["simple"],            weaponIds: ["shortsword"] },
    sorcerer:  { armor: [],                                     weaponCats: [],                    weaponIds: ["dagger", "dart", "sling", "quarterstaff", "crossbowlight"] },
    wizard:    { armor: [],                                     weaponCats: [],                    weaponIds: ["dagger", "dart", "sling", "quarterstaff", "crossbowlight"] }
};

// Classes з рисою «Додаткова атака» (Extra Attack). Значення — level її отримання.
// Fighter отримує більше атак на 11 та 20 levelх (обробляється у extraAttackCount).
const EXTRA_ATTACK_CLASSES = { barbarian: 5, fighter: 5, monk: 5, paladin: 5, ranger: 5 };


// ====================================================================
// Епічні дарунки (Epic Boons) — відкриваються на 19 рівні (D&D 2024).
// Кожен дарунок впливає на character: підвищує ability scoreу (макс. 30)
// та/або дає механічний ефект (speed, ХП тощо).
// ====================================================================
const DND_EPIC_BOONS = [
    { id: "boon_combat_prowess", name: "Boon of Combat Prowess", bonuses: { str: 1 }, description: "Strength +1 (max 30). When you miss with a melee weapon attack, you can hit instead (once per turn)." },
    { id: "boon_irresistible_offense", name: "Boon of Irresistible Offense", bonusChoice: ["str", "dex"], description: "+1 to Strength or Dexterity (max 30). Your weapon attacks ignore resistance to bludgeoning, piercing, and slashing damage and deal extra damage equal to your Strength modifier." },
    { id: "boon_fortitude", name: "Boon of Fortitude", bonuses: { con: 1 }, hpBonus: 40, description: "Constitution +1 (max 30) and HP maximum +40. Once per turn, when you regain HP, add your Constitution modifier." },
    { id: "boon_speed", name: "Boon of Speed", bonuses: { dex: 1 }, speedBonus: 30, description: "Dexterity +1 (max 30) and movement speed +30 feet. You can use a bonus action to end the Grappled condition on yourself." },
    { id: "boon_truesight", name: "Boon of Truesight", bonuses: { wis: 1 }, description: "Wisdom +1 (max 30). You have truesight out to 60 feet." },
    { id: "boon_dimensional_travel", name: "Boon of Dimensional Travel", bonusChoice: ["str", "dex", "con"], description: "+1 to Strength, Dexterity, or Constitution (max 30). You can use an action to teleport (Misty Step) without expending a spell slot." },
    { id: "boon_fate", name: "Boon of Fate", bonuses: { cha: 1 }, description: "Charisma +1 (max 30). A few times per day, add 2d4 to a check, saving throw, or attack roll of a creature within 60 feet." },
    { id: "boon_spell_recall", name: "Boon of Spell Recall", bonuses: { int: 1 }, description: "Intelligence +1 (max 30). When you cast a spell using a slot, you can avoid expending the slot (a limited number of times)." },
    { id: "boon_energy_resistance", name: "Boon of Energy Resistance", bonusChoice: ["con", "dex"], description: "+1 to Constitution or Dexterity (max 30). You gain resistance to two damage types of your choice and can add that damage type to your attacks." },
    { id: "boon_recovery", name: "Boon of Recovery", bonuses: { con: 1 }, description: "Constitution +1 (max 30). Once per combat, use a bonus action to regain half your HP maximum." },
    { id: "boon_skill", name: "Boon of Skill", bonusChoice: ["str", "dex", "con", "int", "wis", "cha"], description: "+1 to any ability score of your choice (max 30). You gain proficiency in all skills and a double proficiency bonus for one of them." },
    { id: "boon_night_spirit", name: "Boon of the Night Spirit", bonuses: { dex: 1 }, description: "Dexterity +1 (max 30). In dim light or darkness you can turn invisible and move through creatures." }
];


// ====================================================================
// Background additions: descriptions (what they mean) + missing standard backgrounds.
// const allows mutating the object/array (not reassignment).
// ====================================================================
(function () {
    const descriptions = {
        "Acolyte": "You have devoted your life to serving the gods in a temple. You are an intermediary between common people and higher powers.",
        "Criminal": "You live outside the law: theft, smuggling, or extortion. You know the language of the streets and the criminal underworld.",
        "Folk Hero": "You came from common folk, but fate called you to great deeds. Ordinary people consider you their protector.",
        "Noble": "You were born into a privileged family. Wealth, education, and connections open doors for you.",
        "Sage": "You spent years among books and scrolls. You are a source of knowledge about history, magic, and the mysteries of the world.",
        "Soldier": "You served in the army: drill, battles, and discipline shaped you. You know the value of an order and of comradeship.",
        "Hermit": "You lived in seclusion, far from society, in search of enlightenment or peace. Solitude gave you a unique discovery.",
        "Entertainer": "The stage is your life. Music, acrobatics, or acting bring you the admiration of the crowd.",
        "Sailor": "You spent years at sea. A ship's deck is your home, and salt water runs in your blood.",
        "Artisan": "You are a master of your craft, a guild member. Working with your hands and honest trade define your life."
    };
    if (typeof BACKGROUND_DATA !== "undefined") {
        Object.keys(descriptions).forEach(k => {
            if (BACKGROUND_DATA[k]) BACKGROUND_DATA[k].description = descriptions[k];
        });

        const extra = {
            "Charlatan": {
                description: "You live by deception and charisma: fake remedies, fraudulent deals, and false guises. People trust you — and that is your weapon.",
                skills: ["Deception", "Sleight of Hand"],
                languages: 0,
                tools: ["Forgery Kit", "Disguise Kit"],
                feature: "False Identity — you created a second name for yourself with documents and a biography."
            },
            "Outlander": {
                description: "You grew up in the wild, far from civilization. You know how to survive where others perish.",
                skills: ["Athletics", "Survival"],
                languages: 1,
                tools: ["Musical Instrument"],
                feature: "Wanderer — you have an excellent sense of direction and can always find food and water for yourself and your companions."
            },
            "Urchin": {
                description: "You grew up orphaned on the city streets, surviving through theft and cunning. The city is your jungle.",
                skills: ["Sleight of Hand", "Stealth"],
                languages: 0,
                tools: ["Thieves' Tools", "Disguise Kit"],
                feature: "City Secrets — you can travel twice as fast through the city's hidden alleys between any two points in the city."
            }
        };
        Object.keys(extra).forEach(k => {
            if (!BACKGROUND_DATA[k]) BACKGROUND_DATA[k] = extra[k];
            if (typeof BACKGROUNDS !== "undefined" && !BACKGROUNDS.includes(k)) BACKGROUNDS.push(k);
        });
    }
})();

/* === КЛАСОВІ РЕСУРСИ (Request #13) === */
(function () {
  function band(level, pairs, dflt) {
    for (var i = 0; i < pairs.length; i++) { if (level >= pairs[i][0]) return pairs[i][1]; }
    return dflt;
  }
  function computeClassResources(classId, level, mods, pb) {
    level = level || 1; mods = mods || {}; pb = pb || 2;
    var m = function (k) { return typeof mods[k] === "number" ? mods[k] : 0; };
    var out = [];
    switch (classId) {
      case "barbarian": {
        var rage = band(level, [[20, "Необмежено"], [17, 6], [12, 5], [6, 4], [3, 3]], 2);
        var rdmg = band(level, [[16, 4], [9, 3]], 2);
        out.push({ name: "Люті (Rage)", value: rage, recharge: "тривалий відпочинок", note: "Бонус damage +" + rdmg });
        break;
      }
      case "bard": {
        var bi = Math.max(1, m("cha"));
        var die = band(level, [[15, "d12"], [10, "d10"], [5, "d8"]], "d6");
        out.push({ name: "Bardівське натхнення", value: bi, recharge: (level >= 5 ? "короткий/тривалий" : "тривалий відпочинок"), note: "Кубик: " + die });
        break;
      }
      case "cleric": {
        var cd = band(level, [[18, 3], [6, 2]], 1);
        if (level >= 2) out.push({ name: "Канал Божественності", value: cd, recharge: "короткий/тривалий" });
        break;
      }
      case "druid": {
        if (level >= 2) out.push({ name: "Дика форма", value: 2, recharge: "короткий/тривалий", note: "2 використання" });
        break;
      }
      case "fighter": {
        out.push({ name: "Друге дихання", value: 1, recharge: "короткий/тривалий", note: "Відновлює 1d10+level ХП" });
        var as = band(level, [[17, 2]], 1);
        if (level >= 2) out.push({ name: "Сплеск дії (Action Surge)", value: as, recharge: "короткий/тривалий" });
        var ind = band(level, [[17, 3], [13, 2]], 1);
        if (level >= 9) out.push({ name: "Незламність (Indomitable)", value: ind, recharge: "тривалий відпочинок" });
        break;
      }
      case "monk": {
        if (level >= 2) out.push({ name: "Очки Ці (Focus)", value: level, recharge: "короткий/тривалий" });
        var md = band(level, [[17, "d12"], [11, "d10"], [5, "d8"]], "d6");
        out.push({ name: "Кубик combatових мистецтв", value: md, recharge: "", note: "Кубик беззбройного удару" });
        break;
      }
      case "paladin": {
        out.push({ name: "Накладання рук (запас)", value: 5 * level, recharge: "тривалий відпочинок", note: "ХП лікування" });
        if (level >= 3) out.push({ name: "Канал Божественності", value: 1, recharge: "короткий/тривалий" });
        out.push({ name: "Божественне чуття", value: 1 + Math.max(0, m("cha")), recharge: "тривалий відпочинок" });
        break;
      }
      case "ranger": {
        out.push({ name: "Мітка мисливця / Улюблений ворог", value: pb, recharge: "тривалий відпочинок", note: "Використань = bonus майстерності" });
        break;
      }
      case "sorcerer": {
        if (level >= 2) out.push({ name: "Чари-очки (Sorcery Points)", value: level, recharge: "тривалий відпочинок" });
        break;
      }
      case "warlock": {
        var inv = band(level, [[18, 8], [15, 7], [12, 6], [9, 5], [7, 4], [5, 3], [2, 2]], 0);
        if (inv > 0) out.push({ name: "Таємничі spell (Invocations)", value: inv, recharge: "", note: "Відомих заклинань-інвокацій" });
        out.push({ name: "Пактова магія", value: "див. слоти", recharge: "короткий/тривалий", note: "Усі слоти одного level, відновлюються на короткому відпочинку" });
        break;
      }
      case "wizard": {
        out.push({ name: "Відновлення магії (Arcane Recovery)", value: Math.ceil(level / 2), recharge: "тривалий відпочинок", note: "Сумарних рівнів комірок (1×/день)" });
        break;
      }
      default: break;
    }
    return out;
  }
  if (typeof window !== "undefined") { window.computeClassResources = computeClassResources; }
  if (typeof globalThis !== "undefined") { globalThis.computeClassResources = computeClassResources; }
})();
