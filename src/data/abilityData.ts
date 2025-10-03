// KOMPLETNA BAZA WSZYSTKICH UMIEJĘTNOŚCI LEAGUE OF LEGENDS
// Wygenerowano automatycznie ze wszystkich 845 umiejętności
// Data Dragon API wersja: 14.23.1
// Data generacji: 2025-10-03T11:59:47.583Z
// AUTOR: GENIUSZ PROGRAMOWANIA! 🔥

export interface AbilityData {
  id: string;
  championId: string;
  championName: string;
  abilityName: string;
  description: string;
  type: 'Passive' | 'Q' | 'W' | 'E' | 'R';
  imageId: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const ABILITY_STATIC_DATA: AbilityData[] = [
  {
    "id": "Aatrox_Passive",
    "championId": "Aatrox",
    "championName": "Aatrox",
    "abilityName": "Deathbringer Stance",
    "description": "Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. ",
    "type": "Passive",
    "imageId": "Aatrox_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Aatrox_Q",
    "championId": "Aatrox",
    "championName": "Aatrox",
    "abilityName": "The Darkin Blade",
    "description": "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
    "type": "Q",
    "imageId": "AatroxQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aatrox_W",
    "championId": "Aatrox",
    "championName": "Aatrox",
    "abilityName": "Infernal Chains",
    "description": "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
    "type": "W",
    "imageId": "AatroxW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aatrox_E",
    "championId": "Aatrox",
    "championName": "Aatrox",
    "abilityName": "Umbral Dash",
    "description": "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
    "type": "E",
    "imageId": "AatroxE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aatrox_R",
    "championId": "Aatrox",
    "championName": "Aatrox",
    "abilityName": "World Ender",
    "description": "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
    "type": "R",
    "imageId": "AatroxR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ahri_Passive",
    "championId": "Ahri",
    "championName": "Ahri",
    "abilityName": "Essence Theft",
    "description": "After killing 9 minions or monsters, Ahri heals.<br>After taking down an enemy champion, Ahri heals for a greater amount.",
    "type": "Passive",
    "imageId": "Ahri_SoulEater2.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ahri_Q",
    "championId": "Ahri",
    "championName": "Ahri",
    "abilityName": "Orb of Deception",
    "description": "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. ",
    "type": "Q",
    "imageId": "AhriQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ahri_W",
    "championId": "Ahri",
    "championName": "Ahri",
    "abilityName": "Fox-Fire",
    "description": "Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.",
    "type": "W",
    "imageId": "AhriW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ahri_E",
    "championId": "Ahri",
    "championName": "Ahri",
    "abilityName": "Charm",
    "description": "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.",
    "type": "E",
    "imageId": "AhriE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ahri_R",
    "championId": "Ahri",
    "championName": "Ahri",
    "abilityName": "Spirit Rush",
    "description": "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.",
    "type": "R",
    "imageId": "AhriR.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akali_Passive",
    "championId": "Akali",
    "championName": "Akali",
    "abilityName": "Assassin's Mark",
    "description": "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.",
    "type": "Passive",
    "imageId": "Akali_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Akali_Q",
    "championId": "Akali",
    "championName": "Akali",
    "abilityName": "Five Point Strike",
    "description": "Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.",
    "type": "Q",
    "imageId": "AkaliQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akali_W",
    "championId": "Akali",
    "championName": "Akali",
    "abilityName": "Twilight Shroud",
    "description": "Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.  ",
    "type": "W",
    "imageId": "AkaliW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akali_E",
    "championId": "Akali",
    "championName": "Akali",
    "abilityName": "Shuriken Flip",
    "description": "Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.",
    "type": "E",
    "imageId": "AkaliE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akali_R",
    "championId": "Akali",
    "championName": "Akali",
    "abilityName": "Perfect Execution",
    "description": "Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.",
    "type": "R",
    "imageId": "AkaliR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Akshan_Passive",
    "championId": "Akshan",
    "championName": "Akshan",
    "abilityName": "Dirty Fighting",
    "description": "Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion.<br><br>When Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed.",
    "type": "Passive",
    "imageId": "akshan_p.png",
    "difficulty": "Hard"
  },
  {
    "id": "Akshan_Q",
    "championId": "Akshan",
    "championName": "Akshan",
    "abilityName": "Avengerang",
    "description": "Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.",
    "type": "Q",
    "imageId": "AkshanQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akshan_W",
    "championId": "Akshan",
    "championName": "Akshan",
    "abilityName": "Going Rogue",
    "description": "Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks.<br><br>When activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.",
    "type": "W",
    "imageId": "AkshanW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akshan_E",
    "championId": "Akshan",
    "championName": "Akshan",
    "abilityName": "Heroic Swing",
    "description": "Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.",
    "type": "E",
    "imageId": "AkshanE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Akshan_R",
    "championId": "Akshan",
    "championName": "Akshan",
    "abilityName": "Comeuppance",
    "description": "Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.",
    "type": "R",
    "imageId": "AkshanR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Alistar_Passive",
    "championId": "Alistar",
    "championName": "Alistar",
    "abilityName": "Triumphant Roar",
    "description": "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.",
    "type": "Passive",
    "imageId": "Alistar_E.png",
    "difficulty": "Hard"
  },
  {
    "id": "Alistar_Q",
    "championId": "Alistar",
    "championName": "Alistar",
    "abilityName": "Pulverize",
    "description": "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",
    "type": "Q",
    "imageId": "Pulverize.png",
    "difficulty": "Medium"
  },
  {
    "id": "Alistar_W",
    "championId": "Alistar",
    "championName": "Alistar",
    "abilityName": "Headbutt",
    "description": "Alistar rams a target with his head, dealing damage and knocking the target back.",
    "type": "W",
    "imageId": "Headbutt.png",
    "difficulty": "Medium"
  },
  {
    "id": "Alistar_E",
    "championId": "Alistar",
    "championName": "Alistar",
    "abilityName": "Trample",
    "description": "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
    "type": "E",
    "imageId": "AlistarE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Alistar_R",
    "championId": "Alistar",
    "championName": "Alistar",
    "abilityName": "Unbreakable Will",
    "description": "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",
    "type": "R",
    "imageId": "FerociousHowl.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ambessa_Passive",
    "championId": "Ambessa",
    "championName": "Ambessa",
    "abilityName": "Drakehound's Step",
    "description": "Entering an attack or movement command while casting an ability will cause Ambessa to dash a short distance once the ability is cast, granting her next attack bonus range, damage, and attack speed, and refunding energy.",
    "type": "Passive",
    "imageId": "Icon_Ambessa_Passive.Domina.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ambessa_Q",
    "championId": "Ambessa",
    "championName": "Ambessa",
    "abilityName": "Cunning Sweep / Sundering Slam",
    "description": "Ambessa sweeps her twin drakehounds in a semicircle in front of her, dealing bonus damage to enemies hit by the blades. Striking an enemy will transform the next cast of this ability for a short period of time, causing her to slam her twin drakehounds down in a line in front of her, dealing bonus damage to the first enemy hit.",
    "type": "Q",
    "imageId": "AmbessaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ambessa_W",
    "championId": "Ambessa",
    "championName": "Ambessa",
    "abilityName": "Repudiation",
    "description": "Ambessa gains a shield, briefly braces herself, and then slams the ground to damage nearby enemies. If she blocked any non-minion damage while bracing herself, this ability will deal increased damage.",
    "type": "W",
    "imageId": "AmbessaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ambessa_E",
    "championId": "Ambessa",
    "championName": "Ambessa",
    "abilityName": "Lacerate",
    "description": "Ambessa whips her twin drakehounds around herself, damaging and slowing nearby enemies. Initiating Drakehound's Step from this ability causes her to strike a second time at the end of its dash.",
    "type": "E",
    "imageId": "AmbessaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ambessa_R",
    "championId": "Ambessa",
    "championName": "Ambessa",
    "abilityName": "Public Execution",
    "description": "Ambessa blinks to the farthest enemy champion in a line of her choosing and suppresses them upon her arrival. She then slams the enemy into the ground where they take damage and are stunned.",
    "type": "R",
    "imageId": "AmbessaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Amumu_Passive",
    "championId": "Amumu",
    "championName": "Amumu",
    "abilityName": "Cursed Touch",
    "description": "Amumu's basic attacks <font color='#9b0f5f'>Curse</font> his enemies, causing them to take bonus true damage from incoming magic damage.",
    "type": "Passive",
    "imageId": "Amumu_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Amumu_Q",
    "championId": "Amumu",
    "championName": "Amumu",
    "abilityName": "Bandage Toss",
    "description": "Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.",
    "type": "Q",
    "imageId": "BandageToss.png",
    "difficulty": "Medium"
  },
  {
    "id": "Amumu_W",
    "championId": "Amumu",
    "championName": "Amumu",
    "abilityName": "Despair",
    "description": "Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their <font color='#9b0f5f'>Curses</font> refreshed.",
    "type": "W",
    "imageId": "AuraofDespair.png",
    "difficulty": "Medium"
  },
  {
    "id": "Amumu_E",
    "championId": "Amumu",
    "championName": "Amumu",
    "abilityName": "Tantrum",
    "description": "Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced.",
    "type": "E",
    "imageId": "Tantrum.png",
    "difficulty": "Medium"
  },
  {
    "id": "Amumu_R",
    "championId": "Amumu",
    "championName": "Amumu",
    "abilityName": "Curse of the Sad Mummy",
    "description": "Amumu entangles surrounding enemy units in bandages, applying his <keywordMajor>Curse</keywordMajor>, damaging and stunning them.",
    "type": "R",
    "imageId": "CurseoftheSadMummy.png",
    "difficulty": "Easy"
  },
  {
    "id": "Anivia_Passive",
    "championId": "Anivia",
    "championName": "Anivia",
    "abilityName": "Rebirth",
    "description": "Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.",
    "type": "Passive",
    "imageId": "Anivia_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Anivia_Q",
    "championId": "Anivia",
    "championName": "Anivia",
    "abilityName": "Flash Frost",
    "description": "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",
    "type": "Q",
    "imageId": "FlashFrost.png",
    "difficulty": "Medium"
  },
  {
    "id": "Anivia_W",
    "championId": "Anivia",
    "championName": "Anivia",
    "abilityName": "Crystallize",
    "description": "Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.",
    "type": "W",
    "imageId": "Crystallize.png",
    "difficulty": "Medium"
  },
  {
    "id": "Anivia_E",
    "championId": "Anivia",
    "championName": "Anivia",
    "abilityName": "Frostbite",
    "description": "With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.",
    "type": "E",
    "imageId": "Frostbite.png",
    "difficulty": "Medium"
  },
  {
    "id": "Anivia_R",
    "championId": "Anivia",
    "championName": "Anivia",
    "abilityName": "Glacial Storm",
    "description": "Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.",
    "type": "R",
    "imageId": "GlacialStorm.png",
    "difficulty": "Easy"
  },
  {
    "id": "Annie_Passive",
    "championId": "Annie",
    "championName": "Annie",
    "abilityName": "Pyromania",
    "description": "After casting 4 spells, Annie's next offensive spell will stun the target.<br><br>Annie begins the game and respawns with Pyromania available.",
    "type": "Passive",
    "imageId": "Annie_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Annie_Q",
    "championId": "Annie",
    "championName": "Annie",
    "abilityName": "Disintegrate",
    "description": "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
    "type": "Q",
    "imageId": "AnnieQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Annie_W",
    "championId": "Annie",
    "championName": "Annie",
    "abilityName": "Incinerate",
    "description": "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
    "type": "W",
    "imageId": "AnnieW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Annie_E",
    "championId": "Annie",
    "championName": "Annie",
    "abilityName": "Molten Shield",
    "description": "Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.",
    "type": "E",
    "imageId": "AnnieE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Annie_R",
    "championId": "Annie",
    "championName": "Annie",
    "abilityName": "Summon: Tibbers",
    "description": "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
    "type": "R",
    "imageId": "AnnieR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Aphelios_Passive",
    "championId": "Aphelios",
    "championName": "Aphelios",
    "abilityName": "The Hitman and the Seer",
    "description": "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. ",
    "type": "Passive",
    "imageId": "ApheliosP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Aphelios_Q",
    "championId": "Aphelios",
    "championName": "Aphelios",
    "abilityName": "Weapon Abilites",
    "description": "Aphelios has 5 different activated abilities, based on his main-hand weapon:<br><br>Calibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack.<br>Severum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons.<br>Gravitum (Cannon): Root all enemies slowed by this weapon.<br>Infernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon.<br>Crescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.<br>",
    "type": "Q",
    "imageId": "ApheliosQ_ClientTooltipWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aphelios_W",
    "championId": "Aphelios",
    "championName": "Aphelios",
    "abilityName": "Phase",
    "description": "Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.",
    "type": "W",
    "imageId": "ApheliosW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aphelios_E",
    "championId": "Aphelios",
    "championName": "Aphelios",
    "abilityName": "Weapon Queue System",
    "description": "Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order.",
    "type": "E",
    "imageId": "ApheliosE_ClientTooltipWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aphelios_R",
    "championId": "Aphelios",
    "championName": "Aphelios",
    "abilityName": "Moonlight Vigil",
    "description": "Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.",
    "type": "R",
    "imageId": "ApheliosR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ashe_Passive",
    "championId": "Ashe",
    "championName": "Ashe",
    "abilityName": "Frost Shot",
    "description": "Ashe's attacks slow their target, causing her to deal increased damage to these targets.<br><br>Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.",
    "type": "Passive",
    "imageId": "Ashe_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ashe_Q",
    "championId": "Ashe",
    "championName": "Ashe",
    "abilityName": "Ranger's Focus",
    "description": "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
    "type": "Q",
    "imageId": "AsheQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ashe_W",
    "championId": "Ashe",
    "championName": "Ashe",
    "abilityName": "Volley",
    "description": "Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.",
    "type": "W",
    "imageId": "Volley.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ashe_E",
    "championId": "Ashe",
    "championName": "Ashe",
    "abilityName": "Hawkshot",
    "description": "Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.",
    "type": "E",
    "imageId": "AsheSpiritOfTheHawk.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ashe_R",
    "championId": "Ashe",
    "championName": "Ashe",
    "abilityName": "Enchanted Crystal Arrow",
    "description": "Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.",
    "type": "R",
    "imageId": "EnchantedCrystalArrow.png",
    "difficulty": "Easy"
  },
  {
    "id": "AurelionSol_Passive",
    "championId": "AurelionSol",
    "championName": "Aurelion Sol",
    "abilityName": "Cosmic Creator",
    "description": "Aurelion Sol's damaging Abilities break down enemies into stacks of <font color='#3458eb'>Stardust</font>, which permanently improves each of his abilities. ",
    "type": "Passive",
    "imageId": "AurelionSolP.png",
    "difficulty": "Hard"
  },
  {
    "id": "AurelionSol_Q",
    "championId": "AurelionSol",
    "championName": "Aurelion Sol",
    "abilityName": "Breath of Light",
    "description": "Aurelion Sol channels his dragon breath for a few seconds, damaging the first enemy hit and splashing reduced damage onto nearby enemies. Each second the breath is channeled directly at an enemy will deal bonus damage, which is improved by the amount of Stardust that's been collected. This ability collects Stardust if the target is a champion.",
    "type": "Q",
    "imageId": "AurelionSolQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "AurelionSol_W",
    "championId": "AurelionSol",
    "championName": "Aurelion Sol",
    "abilityName": "Astral Flight",
    "description": "Aurelion Sol flies over terrain in a targeted direction. While in this state, he can cast other abilities. Breath of Light no longer has a cooldown or maximum channel duration and deals increased damage while flying.<br><br>Astral Flight's remaining cooldown is reduced whenever an enemy champion dies after being recently damaged by Aurelion Sol.<br><br>Stardust increases Astral Flight's maximum range.",
    "type": "W",
    "imageId": "AurelionSolW.png",
    "difficulty": "Medium"
  },
  {
    "id": "AurelionSol_E",
    "championId": "AurelionSol",
    "championName": "Aurelion Sol",
    "abilityName": "Singularity",
    "description": "Aurelion Sol summons a black hole, damaging enemies and slowly pulling them toward its center. This ability grants Stardust each time an enemy dies within the black hole and for each second an enemy champion is caught inside it. The center of the black hole executes enemies who are below a certain percentage of their maximum health. Stardust increases Singularity's area as well as the execution threshold.",
    "type": "E",
    "imageId": "AurelionSolE.png",
    "difficulty": "Medium"
  },
  {
    "id": "AurelionSol_R",
    "championId": "AurelionSol",
    "championName": "Aurelion Sol",
    "abilityName": "Falling Star / The Skies Descend",
    "description": "Falling Star: Aurelion Sol crashes a star into the earth. This impact deals magic damage and stuns enemies while also granting Stardust for each enemy champion it hits. Gathering enough Stardust transforms Aurelion Sol's next Falling Star into The Skies Descend.<br><br>The Skies Descend: Aurelion Sol drags a giant star down from the heavens with an increased impact zone and increased damage, knocking up enemies rather than stunning them. A shockwave then spreads from the edge of the impact zone, which damages and slows the enemies it hits. Stardust increases the impact area of both Falling Star and The Skies Descend.",
    "type": "R",
    "imageId": "AurelionSolR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Aurora_Passive",
    "championId": "Aurora",
    "championName": "Aurora",
    "abilityName": "Spirit Abjuration",
    "description": "Aurora's spells and attacks exorcise spirits from the enemies she damages. Exorcised spirits follow Aurora around, healing her and granting her bonus movement speed.",
    "type": "Passive",
    "imageId": "AuroraPassive.Aurora.png",
    "difficulty": "Hard"
  },
  {
    "id": "Aurora_Q",
    "championId": "Aurora",
    "championName": "Aurora",
    "abilityName": "Twofold Hex",
    "description": "Aurora sends out a missile that curses any enemies it hits. She can then recast the ability to draw active curses back toward herself, damaging foes who are hit along the way.",
    "type": "Q",
    "imageId": "AuroraQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aurora_W",
    "championId": "Aurora",
    "championName": "Aurora",
    "abilityName": "Across the Veil",
    "description": "Aurora leaps in a direction of her choosing, entering the spirit realm upon landing and becoming invisible for a short duration of time.",
    "type": "W",
    "imageId": "AuroraW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aurora_E",
    "championId": "Aurora",
    "championName": "Aurora",
    "abilityName": "The Weirding",
    "description": "Aurora converges the realms, sending out a blast of spirit magic that damages and slows enemies before Aurora hops backward to safety.",
    "type": "E",
    "imageId": "AuroraE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Aurora_R",
    "championId": "Aurora",
    "championName": "Aurora",
    "abilityName": "Between Worlds",
    "description": "Aurora leaps in a direction of her choosing, releasing a shockwave that damages and slows any enemies it hits. Afterward, she creates an area that traps enemies within it and allows Aurora to teleport from one side of the area to the other.",
    "type": "R",
    "imageId": "AuroraR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Azir_Passive",
    "championId": "Azir",
    "championName": "Azir",
    "abilityName": "Shurima's Legacy",
    "description": "Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.",
    "type": "Passive",
    "imageId": "Azir_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Azir_Q",
    "championId": "Azir",
    "championName": "Azir",
    "abilityName": "Conquering Sands",
    "description": "Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.",
    "type": "Q",
    "imageId": "AzirQWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Azir_W",
    "championId": "Azir",
    "championName": "Azir",
    "abilityName": "Arise!",
    "description": "Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line. Arise! also passively grants attack speed to Azir and his Sand Soldiers.",
    "type": "W",
    "imageId": "AzirW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Azir_E",
    "championId": "Azir",
    "championName": "Azir",
    "abilityName": "Shifting Sands",
    "description": "Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.",
    "type": "E",
    "imageId": "AzirEWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Azir_R",
    "championId": "Azir",
    "championName": "Azir",
    "abilityName": "Emperor's Divide",
    "description": "Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.",
    "type": "R",
    "imageId": "AzirR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Bard_Passive",
    "championId": "Bard",
    "championName": "Bard",
    "abilityName": "Traveler's Call",
    "description": "<font color='#FF9900'>Meeps:</font> Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough  <font color='#cccc00'>Chimes</font>, his meeps will also deal damage in an area and slow enemies hit.<br><br><font color='#FF9900'>Chimes:</font> Ancient <font color='#cccc00'>chimes</font> randomly appear for Bard to collect. These grant experience, restore mana, and provide out of combat Move Speed.",
    "type": "Passive",
    "imageId": "Bard_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Bard_Q",
    "championId": "Bard",
    "championName": "Bard",
    "abilityName": "Cosmic Binding",
    "description": "Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.",
    "type": "Q",
    "imageId": "BardQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Bard_W",
    "championId": "Bard",
    "championName": "Bard",
    "abilityName": "Caretaker's Shrine",
    "description": "Reveals a Health shrine which powers up over a short time, disappearing after healing and speeding up the first ally that touches it.",
    "type": "W",
    "imageId": "BardW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Bard_E",
    "championId": "Bard",
    "championName": "Bard",
    "abilityName": "Magical Journey",
    "description": "Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.",
    "type": "E",
    "imageId": "BardE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Bard_R",
    "championId": "Bard",
    "championName": "Bard",
    "abilityName": "Tempered Fate",
    "description": "Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.",
    "type": "R",
    "imageId": "BardR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Belveth_Passive",
    "championId": "Belveth",
    "championName": "Bel'Veth",
    "abilityName": "Death in Lavender ",
    "description": "Bel'Veth gains permanent attack speed stacks after taking down large minions and monsters and champions. She also gains temporary bonus attack speed after using an ability.",
    "type": "Passive",
    "imageId": "Belveth_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Belveth_Q",
    "championId": "Belveth",
    "championName": "Bel'Veth",
    "abilityName": "Void Surge",
    "description": "Bel'Veth dashes in a chosen direction and damages all enemies she passes through.",
    "type": "Q",
    "imageId": "BelvethQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Belveth_W",
    "championId": "Belveth",
    "championName": "Bel'Veth",
    "abilityName": "Above and Below",
    "description": "Bel'Veth slams her tail to the ground, damaging, knocking up, and slowing her enemies.",
    "type": "W",
    "imageId": "BelvethW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Belveth_E",
    "championId": "Belveth",
    "championName": "Bel'Veth",
    "abilityName": "Royal Maelstrom",
    "description": "Bel'Veth roots herself in place, channeling a storm of slashes around her that targets the lowest-health enemy and grants her lifesteal and damage reduction.",
    "type": "E",
    "imageId": "BelvethE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Belveth_R",
    "championId": "Belveth",
    "championName": "Bel'Veth",
    "abilityName": "Endless Banquet",
    "description": "Bel'Veth consumes Void coral remnants, transforming into her true form and increasing her max health, attack range, attack speed, and out-of-combat move speed. Consuming the Void coral remnants of a Void epic monster will grant her a longer ultimate duration, as well as the power to summon Void remora.",
    "type": "R",
    "imageId": "BelvethR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Blitzcrank_Passive",
    "championId": "Blitzcrank",
    "championName": "Blitzcrank",
    "abilityName": "Mana Barrier",
    "description": "Blitzcrank gains a shield based on their mana when dropping to low health.",
    "type": "Passive",
    "imageId": "Blitzcrank_ManaBarrier.png",
    "difficulty": "Hard"
  },
  {
    "id": "Blitzcrank_Q",
    "championId": "Blitzcrank",
    "championName": "Blitzcrank",
    "abilityName": "Rocket Grab",
    "description": "Blitzcrank fires their right hand to grab an opponent on its path, dealing damage and dragging it back to them.",
    "type": "Q",
    "imageId": "RocketGrab.png",
    "difficulty": "Medium"
  },
  {
    "id": "Blitzcrank_W",
    "championId": "Blitzcrank",
    "championName": "Blitzcrank",
    "abilityName": "Overdrive",
    "description": "Blitzcrank super charges themself to get dramatically increased Move and Attack Speed. They are temporarily slowed after the effect ends.",
    "type": "W",
    "imageId": "Overdrive.png",
    "difficulty": "Medium"
  },
  {
    "id": "Blitzcrank_E",
    "championId": "Blitzcrank",
    "championName": "Blitzcrank",
    "abilityName": "Power Fist",
    "description": "Blitzcrank charges up their fist to make the next attack deal double damage and pop their target up in the air.",
    "type": "E",
    "imageId": "PowerFist.png",
    "difficulty": "Medium"
  },
  {
    "id": "Blitzcrank_R",
    "championId": "Blitzcrank",
    "championName": "Blitzcrank",
    "abilityName": "Static Field",
    "description": "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
    "type": "R",
    "imageId": "StaticField.png",
    "difficulty": "Easy"
  },
  {
    "id": "Brand_Passive",
    "championId": "Brand",
    "championName": "Brand",
    "abilityName": "Blaze",
    "description": "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.",
    "type": "Passive",
    "imageId": "BrandP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Brand_Q",
    "championId": "Brand",
    "championName": "Brand",
    "abilityName": "Sear",
    "description": "Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.",
    "type": "Q",
    "imageId": "BrandQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Brand_W",
    "championId": "Brand",
    "championName": "Brand",
    "abilityName": "Pillar of Flame",
    "description": "After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.",
    "type": "W",
    "imageId": "BrandW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Brand_E",
    "championId": "Brand",
    "championName": "Brand",
    "abilityName": "Conflagration",
    "description": "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.",
    "type": "E",
    "imageId": "BrandE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Brand_R",
    "championId": "Brand",
    "championName": "Brand",
    "abilityName": "Pyroclasm",
    "description": "Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.",
    "type": "R",
    "imageId": "BrandR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Braum_Passive",
    "championId": "Braum",
    "championName": "Braum",
    "abilityName": "Concussive Blows",
    "description": "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, <font color='#FFF673'>ally</font> basic attacks also stack Concussive Blows. <br><br>Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.",
    "type": "Passive",
    "imageId": "Braum_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Braum_Q",
    "championId": "Braum",
    "championName": "Braum",
    "abilityName": "Winter's Bite",
    "description": "Braum propels freezing ice from his shield, slowing and dealing magic damage.<br><br>Applies a stack of <font color='#FFF673'>Concussive Blows</font>.",
    "type": "Q",
    "imageId": "BraumQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Braum_W",
    "championId": "Braum",
    "championName": "Braum",
    "abilityName": "Stand Behind Me",
    "description": "Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.",
    "type": "W",
    "imageId": "BraumW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Braum_E",
    "championId": "Braum",
    "championName": "Braum",
    "abilityName": "Unbreakable",
    "description": "Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.",
    "type": "E",
    "imageId": "BraumE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Braum_R",
    "championId": "Braum",
    "championName": "Braum",
    "abilityName": "Glacial Fissure",
    "description": "Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.",
    "type": "R",
    "imageId": "BraumRWrapper.png",
    "difficulty": "Easy"
  },
  {
    "id": "Briar_Passive",
    "championId": "Briar",
    "championName": "Briar",
    "abilityName": "Crimson Curse",
    "description": "Briar's attacks and abilities apply a stacking bleed that heals her for a portion of the damage it deals. Perpetually hungry, she gains increased healing based on her missing Health, but lacks innate Health Regeneration.",
    "type": "Passive",
    "imageId": "BriarP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Briar_Q",
    "championId": "Briar",
    "championName": "Briar",
    "abilityName": "Head Rush",
    "description": "Briar leaps to a unit and hits enemies with The Heel Wheel (of Pain), stunning them and breaking their Armor.",
    "type": "Q",
    "imageId": "BriarQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Briar_W",
    "championId": "Briar",
    "championName": "Briar",
    "abilityName": "Blood Frenzy / Snack Attack",
    "description": "Briar leaps forward and shatters her pillory, entering a Blood Frenzy that causes her to relentlessly pursue the nearest enemy (prioritizing champions). While frenzied, she gains increased Attack Speed and Move Speed, and her attacks deal damage in an area around her target.<br><br>Briar can reactivate this ability while frenzied to take a CHOMP out of her target on her next attack, dealing additional damage based on their missing Health, and healing Briar based on the damage she deals.",
    "type": "W",
    "imageId": "BriarW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Briar_E",
    "championId": "Briar",
    "championName": "Briar",
    "abilityName": "Chilling Scream",
    "description": "Briar refocuses her mind, removing Blood Frenzy and channeling energy into a powerful scream that damages and slows enemies. While charging, she takes reduced damage and heals for a portion of her max Health. A fully charged scream knocks foes back, dealing additional damage and stunning those who collide with a wall.",
    "type": "E",
    "imageId": "BriarE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Briar_R",
    "championId": "Briar",
    "championName": "Briar",
    "abilityName": "Certain Death",
    "description": "Briar kicks her pillory's hemolith gemstone, marking the first champion it hits as her prey. She then beelines straight to them, fearing other surrounding enemies upon arriving at her target, and enters a state of complete hemomania. She will pursue her prey until death, gaining the benefits of Blood Frenzy as well as additional Armor, Magic Resistance, Life Steal, and Move Speed.",
    "type": "R",
    "imageId": "BriarR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Caitlyn_Passive",
    "championId": "Caitlyn",
    "championName": "Caitlyn",
    "abilityName": "Headshot",
    "description": "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.",
    "type": "Passive",
    "imageId": "Caitlyn_Headshot.png",
    "difficulty": "Hard"
  },
  {
    "id": "Caitlyn_Q",
    "championId": "Caitlyn",
    "championName": "Caitlyn",
    "abilityName": "Piltover Peacemaker",
    "description": "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).",
    "type": "Q",
    "imageId": "CaitlynQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Caitlyn_W",
    "championId": "Caitlyn",
    "championName": "Caitlyn",
    "abilityName": "Yordle Snap Trap",
    "description": "Caitlyn sets a trap that, when sprung, reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.",
    "type": "W",
    "imageId": "CaitlynW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Caitlyn_E",
    "championId": "Caitlyn",
    "championName": "Caitlyn",
    "abilityName": "90 Caliber Net",
    "description": "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.",
    "type": "E",
    "imageId": "CaitlynE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Caitlyn_R",
    "championId": "Caitlyn",
    "championName": "Caitlyn",
    "abilityName": "Ace in the Hole",
    "description": "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
    "type": "R",
    "imageId": "CaitlynR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Camille_Passive",
    "championId": "Camille",
    "championName": "Camille",
    "abilityName": "Adaptive Defenses",
    "description": "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.",
    "type": "Passive",
    "imageId": "Camille_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Camille_Q",
    "championId": "Camille",
    "championName": "Camille",
    "abilityName": "Precision Protocol",
    "description": "Camille's next attack deals bonus damage and grants bonus Move Speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
    "type": "Q",
    "imageId": "CamilleQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Camille_W",
    "championId": "Camille",
    "championName": "Camille",
    "abilityName": "Tactical Sweep",
    "description": "Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.",
    "type": "W",
    "imageId": "CamilleW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Camille_E",
    "championId": "Camille",
    "championName": "Camille",
    "abilityName": "Hookshot",
    "description": "Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.",
    "type": "E",
    "imageId": "CamilleE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Camille_R",
    "championId": "Camille",
    "championName": "Camille",
    "abilityName": "The Hextech Ultimatum",
    "description": "Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.",
    "type": "R",
    "imageId": "CamilleR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Cassiopeia_Passive",
    "championId": "Cassiopeia",
    "championName": "Cassiopeia",
    "abilityName": "Serpentine Grace",
    "description": "Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.",
    "type": "Passive",
    "imageId": "Cassiopeia_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Cassiopeia_Q",
    "championId": "Cassiopeia",
    "championName": "Cassiopeia",
    "abilityName": "Noxious Blast",
    "description": "Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.",
    "type": "Q",
    "imageId": "CassiopeiaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Cassiopeia_W",
    "championId": "Cassiopeia",
    "championName": "Cassiopeia",
    "abilityName": "Miasma",
    "description": "Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.",
    "type": "W",
    "imageId": "CassiopeiaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Cassiopeia_E",
    "championId": "Cassiopeia",
    "championName": "Cassiopeia",
    "abilityName": "Twin Fang",
    "description": "Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.",
    "type": "E",
    "imageId": "CassiopeiaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Cassiopeia_R",
    "championId": "Cassiopeia",
    "championName": "Cassiopeia",
    "abilityName": "Petrifying Gaze",
    "description": "Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.",
    "type": "R",
    "imageId": "CassiopeiaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Chogath_Passive",
    "championId": "Chogath",
    "championName": "Cho'Gath",
    "abilityName": "Carnivore",
    "description": "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.",
    "type": "Passive",
    "imageId": "GreenTerror_TailSpike.png",
    "difficulty": "Hard"
  },
  {
    "id": "Chogath_Q",
    "championId": "Chogath",
    "championName": "Cho'Gath",
    "abilityName": "Rupture",
    "description": "Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.",
    "type": "Q",
    "imageId": "Rupture.png",
    "difficulty": "Medium"
  },
  {
    "id": "Chogath_W",
    "championId": "Chogath",
    "championName": "Cho'Gath",
    "abilityName": "Feral Scream",
    "description": "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
    "type": "W",
    "imageId": "FeralScream.png",
    "difficulty": "Medium"
  },
  {
    "id": "Chogath_E",
    "championId": "Chogath",
    "championName": "Cho'Gath",
    "abilityName": "Vorpal Spikes",
    "description": "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
    "type": "E",
    "imageId": "VorpalSpikes.png",
    "difficulty": "Medium"
  },
  {
    "id": "Chogath_R",
    "championId": "Chogath",
    "championName": "Cho'Gath",
    "abilityName": "Feast",
    "description": "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
    "type": "R",
    "imageId": "Feast.png",
    "difficulty": "Easy"
  },
  {
    "id": "Corki_Passive",
    "championId": "Corki",
    "championName": "Corki",
    "abilityName": "Hextech Munitions",
    "description": "A percentage of Corki's basic attack damage is dealt as bonus <trueDamage>true damage</trueDamage>.",
    "type": "Passive",
    "imageId": "Corki_RapidReload.png",
    "difficulty": "Hard"
  },
  {
    "id": "Corki_Q",
    "championId": "Corki",
    "championName": "Corki",
    "abilityName": "Phosphorus Bomb",
    "description": "Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.",
    "type": "Q",
    "imageId": "PhosphorusBomb.png",
    "difficulty": "Medium"
  },
  {
    "id": "Corki_W",
    "championId": "Corki",
    "championName": "Corki",
    "abilityName": "Valkyrie",
    "description": "Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.",
    "type": "W",
    "imageId": "CarpetBomb.png",
    "difficulty": "Medium"
  },
  {
    "id": "Corki_E",
    "championId": "Corki",
    "championName": "Corki",
    "abilityName": "Gatling Gun",
    "description": "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
    "type": "E",
    "imageId": "GGun.png",
    "difficulty": "Medium"
  },
  {
    "id": "Corki_R",
    "championId": "Corki",
    "championName": "Corki",
    "abilityName": "Missile Barrage",
    "description": "Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.",
    "type": "R",
    "imageId": "MissileBarrage.png",
    "difficulty": "Easy"
  },
  {
    "id": "Darius_Passive",
    "championId": "Darius",
    "championName": "Darius",
    "abilityName": "Hemorrhage",
    "description": "Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.",
    "type": "Passive",
    "imageId": "Darius_Icon_Hemorrhage.png",
    "difficulty": "Hard"
  },
  {
    "id": "Darius_Q",
    "championId": "Darius",
    "championName": "Darius",
    "abilityName": "Decimate",
    "description": "Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.",
    "type": "Q",
    "imageId": "DariusCleave.png",
    "difficulty": "Medium"
  },
  {
    "id": "Darius_W",
    "championId": "Darius",
    "championName": "Darius",
    "abilityName": "Crippling Strike",
    "description": "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.",
    "type": "W",
    "imageId": "DariusNoxianTacticsONH.png",
    "difficulty": "Medium"
  },
  {
    "id": "Darius_E",
    "championId": "Darius",
    "championName": "Darius",
    "abilityName": "Apprehend",
    "description": "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
    "type": "E",
    "imageId": "DariusAxeGrabCone.png",
    "difficulty": "Medium"
  },
  {
    "id": "Darius_R",
    "championId": "Darius",
    "championName": "Darius",
    "abilityName": "Noxian Guillotine",
    "description": "Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.",
    "type": "R",
    "imageId": "DariusExecute.png",
    "difficulty": "Easy"
  },
  {
    "id": "Diana_Passive",
    "championId": "Diana",
    "championName": "Diana",
    "abilityName": "Moonsilver Blade",
    "description": "Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for 5 seconds.",
    "type": "Passive",
    "imageId": "Diana_Passive_LunarBlade.png",
    "difficulty": "Hard"
  },
  {
    "id": "Diana_Q",
    "championId": "Diana",
    "championName": "Diana",
    "abilityName": "Crescent Strike",
    "description": "Unleashes a bolt of lunar energy in an arc dealing magic damage.<br><br>Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.",
    "type": "Q",
    "imageId": "DianaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Diana_W",
    "championId": "Diana",
    "championName": "Diana",
    "abilityName": "Pale Cascade",
    "description": "Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.",
    "type": "W",
    "imageId": "DianaOrbs.png",
    "difficulty": "Medium"
  },
  {
    "id": "Diana_E",
    "championId": "Diana",
    "championName": "Diana",
    "abilityName": "Lunar Rush",
    "description": "Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage.<br><br>Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.",
    "type": "E",
    "imageId": "DianaTeleport.png",
    "difficulty": "Medium"
  },
  {
    "id": "Diana_R",
    "championId": "Diana",
    "championName": "Diana",
    "abilityName": "Moonfall",
    "description": "Diana reveals and draws in all nearby enemies and slows them.<br><br>If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.",
    "type": "R",
    "imageId": "DianaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Draven_Passive",
    "championId": "Draven",
    "championName": "Draven",
    "abilityName": "League of Draven",
    "description": "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.",
    "type": "Passive",
    "imageId": "Draven_passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Draven_Q",
    "championId": "Draven",
    "championName": "Draven",
    "abilityName": "Spinning Axe",
    "description": "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
    "type": "Q",
    "imageId": "DravenSpinning.png",
    "difficulty": "Medium"
  },
  {
    "id": "Draven_W",
    "championId": "Draven",
    "championName": "Draven",
    "abilityName": "Blood Rush",
    "description": "Draven gains increased Move Speed and Attack Speed. The Move Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.",
    "type": "W",
    "imageId": "DravenFury.png",
    "difficulty": "Medium"
  },
  {
    "id": "Draven_E",
    "championId": "Draven",
    "championName": "Draven",
    "abilityName": "Stand Aside",
    "description": "Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.",
    "type": "E",
    "imageId": "DravenDoubleShot.png",
    "difficulty": "Medium"
  },
  {
    "id": "Draven_R",
    "championId": "Draven",
    "championName": "Draven",
    "abilityName": "Whirling Death",
    "description": "Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.",
    "type": "R",
    "imageId": "DravenRCast.png",
    "difficulty": "Easy"
  },
  {
    "id": "DrMundo_Passive",
    "championId": "DrMundo",
    "championName": "Dr. Mundo",
    "abilityName": "Goes Where He Pleases",
    "description": "Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown.<br><br>Dr. Mundo also has significantly increased Health regeneration.<br>",
    "type": "Passive",
    "imageId": "DrMundo_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "DrMundo_Q",
    "championId": "DrMundo",
    "championName": "Dr. Mundo",
    "abilityName": "Infected Bonesaw",
    "description": "Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.",
    "type": "Q",
    "imageId": "DrMundoQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "DrMundo_W",
    "championId": "DrMundo",
    "championName": "Dr. Mundo",
    "abilityName": "Heart Zapper",
    "description": "Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.",
    "type": "W",
    "imageId": "DrMundoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "DrMundo_E",
    "championId": "DrMundo",
    "championName": "Dr. Mundo",
    "abilityName": "Blunt Force Trauma",
    "description": "Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his max Health.<br><br>Active - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.",
    "type": "E",
    "imageId": "DrMundoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "DrMundo_R",
    "championId": "DrMundo",
    "championName": "Dr. Mundo",
    "abilityName": "Maximum Dosage",
    "description": "Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains Move Speed and regenerates a portion of his maximum Health over a long duration.",
    "type": "R",
    "imageId": "DrMundoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ekko_Passive",
    "championId": "Ekko",
    "championName": "Ekko",
    "abilityName": "Z-Drive Resonance",
    "description": "Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.<br><br>",
    "type": "Passive",
    "imageId": "Ekko_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ekko_Q",
    "championId": "Ekko",
    "championName": "Ekko",
    "abilityName": "Timewinder",
    "description": "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.",
    "type": "Q",
    "imageId": "EkkoQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ekko_W",
    "championId": "Ekko",
    "championName": "Ekko",
    "abilityName": "Parallel Convergence",
    "description": "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
    "type": "W",
    "imageId": "EkkoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ekko_E",
    "championId": "Ekko",
    "championName": "Ekko",
    "abilityName": "Phase Dive",
    "description": "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.",
    "type": "E",
    "imageId": "EkkoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ekko_R",
    "championId": "Ekko",
    "championName": "Ekko",
    "abilityName": "Chronobreak",
    "description": "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.",
    "type": "R",
    "imageId": "EkkoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Elise_Passive",
    "championId": "Elise",
    "championName": "Elise",
    "abilityName": "Spider Queen",
    "description": "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.<br><br>Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.",
    "type": "Passive",
    "imageId": "ElisePassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Elise_Q",
    "championId": "Elise",
    "championName": "Elise",
    "abilityName": "Neurotoxin / Venomous Bite",
    "description": "Human Form: Deals damage based upon how high the target's Health is.<br><br>Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
    "type": "Q",
    "imageId": "EliseHumanQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Elise_W",
    "championId": "Elise",
    "championName": "Elise",
    "abilityName": "Volatile Spiderling / Skittering Frenzy",
    "description": "Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target.<br><br>Spider Form: Elise and her Spiderlings gain Attack Speed.",
    "type": "W",
    "imageId": "EliseHumanW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Elise_E",
    "championId": "Elise",
    "championName": "Elise",
    "abilityName": "Cocoon / Rappel",
    "description": "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed.<br><br>Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
    "type": "E",
    "imageId": "EliseHumanE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Elise_R",
    "championId": "Elise",
    "championName": "Elise",
    "abilityName": "Spider Form",
    "description": "Transforms into a menacing spider, reducing her attack range in exchange for Move Speed, new abilities, and a Spiderling swarm that will attack her foes.",
    "type": "R",
    "imageId": "EliseR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Evelynn_Passive",
    "championId": "Evelynn",
    "championName": "Evelynn",
    "abilityName": "Demon Shade",
    "description": "When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.",
    "type": "Passive",
    "imageId": "Evelynn_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Evelynn_Q",
    "championId": "Evelynn",
    "championName": "Evelynn",
    "abilityName": "Hate Spike",
    "description": "Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes up to 3 times.",
    "type": "Q",
    "imageId": "EvelynnQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Evelynn_W",
    "championId": "Evelynn",
    "championName": "Evelynn",
    "abilityName": "Allure",
    "description": "Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.",
    "type": "W",
    "imageId": "EvelynnW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Evelynn_E",
    "championId": "Evelynn",
    "championName": "Evelynn",
    "abilityName": "Whiplash",
    "description": "Evelynn whips her target with her Lasher, dealing damage. She then gains Move Speed for a short duration.",
    "type": "E",
    "imageId": "EvelynnE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Evelynn_R",
    "championId": "Evelynn",
    "championName": "Evelynn",
    "abilityName": "Last Caress",
    "description": "Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.",
    "type": "R",
    "imageId": "EvelynnR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ezreal_Passive",
    "championId": "Ezreal",
    "championName": "Ezreal",
    "abilityName": "Rising Spell Force",
    "description": "Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.",
    "type": "Passive",
    "imageId": "Ezreal_RisingSpellForce.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ezreal_Q",
    "championId": "Ezreal",
    "championName": "Ezreal",
    "abilityName": "Mystic Shot",
    "description": "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.",
    "type": "Q",
    "imageId": "EzrealQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ezreal_W",
    "championId": "Ezreal",
    "championName": "Ezreal",
    "abilityName": "Essence Flux",
    "description": "Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.",
    "type": "W",
    "imageId": "EzrealW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ezreal_E",
    "championId": "Ezreal",
    "championName": "Ezreal",
    "abilityName": "Arcane Shift",
    "description": "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.",
    "type": "E",
    "imageId": "EzrealE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ezreal_R",
    "championId": "Ezreal",
    "championName": "Ezreal",
    "abilityName": "Trueshot Barrage",
    "description": "Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).",
    "type": "R",
    "imageId": "EzrealR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Fiddlesticks_Passive",
    "championId": "Fiddlesticks",
    "championName": "Fiddlesticks",
    "abilityName": "A Harmless Scarecrow",
    "description": "Fiddlesticks' trinket is replaced by scarecrow effigies.",
    "type": "Passive",
    "imageId": "FiddlesticksP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Fiddlesticks_Q",
    "championId": "Fiddlesticks",
    "championName": "Fiddlesticks",
    "abilityName": "Terrify",
    "description": "Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration.",
    "type": "Q",
    "imageId": "FiddleSticksQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fiddlesticks_W",
    "championId": "Fiddlesticks",
    "championName": "Fiddlesticks",
    "abilityName": "Bountiful Harvest",
    "description": "Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration.",
    "type": "W",
    "imageId": "FiddleSticksW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fiddlesticks_E",
    "championId": "Fiddlesticks",
    "championName": "Fiddlesticks",
    "abilityName": "Reap",
    "description": "Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash.",
    "type": "E",
    "imageId": "FiddleSticksE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fiddlesticks_R",
    "championId": "Fiddlesticks",
    "championName": "Fiddlesticks",
    "abilityName": "Crowstorm",
    "description": "A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.",
    "type": "R",
    "imageId": "FiddleSticksR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Fiora_Passive",
    "championId": "Fiora",
    "championName": "Fiora",
    "abilityName": "Duelist's Dance",
    "description": "Fiora has revealed a <keywordMajor>Vital</keywordMajor> on this Champion. If she hits the <keywordMajor>Vital</keywordMajor>, she <healing>restores Health</healing> and gains <speed>Move Speed</speed>.",
    "type": "Passive",
    "imageId": "Fiora_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Fiora_Q",
    "championId": "Fiora",
    "championName": "Fiora",
    "abilityName": "Lunge",
    "description": "Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.",
    "type": "Q",
    "imageId": "FioraQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fiora_W",
    "championId": "Fiora",
    "championName": "Fiora",
    "abilityName": "Riposte",
    "description": "Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.",
    "type": "W",
    "imageId": "FioraW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fiora_E",
    "championId": "Fiora",
    "championName": "Fiora",
    "abilityName": "Bladework",
    "description": "Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.",
    "type": "E",
    "imageId": "FioraE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fiora_R",
    "championId": "Fiora",
    "championName": "Fiora",
    "abilityName": "Grand Challenge",
    "description": "Fiora reveals all four Vitals on an enemy champion and gains Move Speed while near them. If Fiora hits all four Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.",
    "type": "R",
    "imageId": "FioraR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Fizz_Passive",
    "championId": "Fizz",
    "championName": "Fizz",
    "abilityName": "Nimble Fighter",
    "description": "Fizz can move through units and takes a flat amount of reduced damage from all sources",
    "type": "Passive",
    "imageId": "Fizz_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Fizz_Q",
    "championId": "Fizz",
    "championName": "Fizz",
    "abilityName": "Urchin Strike",
    "description": "Fizz dashes through his target, dealing magic damage and applying on hit effects.",
    "type": "Q",
    "imageId": "FizzQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fizz_W",
    "championId": "Fizz",
    "championName": "Fizz",
    "abilityName": "Seastone Trident",
    "description": "Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.",
    "type": "W",
    "imageId": "FizzW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fizz_E",
    "championId": "Fizz",
    "championName": "Fizz",
    "abilityName": "Playful / Trickster",
    "description": "Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.",
    "type": "E",
    "imageId": "FizzE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Fizz_R",
    "championId": "Fizz",
    "championName": "Fizz",
    "abilityName": "Chum the Waters",
    "description": "Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.",
    "type": "R",
    "imageId": "FizzR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Galio_Passive",
    "championId": "Galio",
    "championName": "Galio",
    "abilityName": "Colossal Smash",
    "description": "Every few seconds, Galio's next basic attack deals bonus magic damage in an area.",
    "type": "Passive",
    "imageId": "Galio_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Galio_Q",
    "championId": "Galio",
    "championName": "Galio",
    "abilityName": "Winds of War",
    "description": "Galio fires two windblasts that converge into a large tornado that deals damage over time.",
    "type": "Q",
    "imageId": "GalioQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Galio_W",
    "championId": "Galio",
    "championName": "Galio",
    "abilityName": "Shield of Durand",
    "description": "Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt and damage nearby enemies.",
    "type": "W",
    "imageId": "GalioW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Galio_E",
    "championId": "Galio",
    "championName": "Galio",
    "abilityName": "Justice Punch",
    "description": "Galio will briefly step back and charge, knocking up the first enemy champion he encounters.",
    "type": "E",
    "imageId": "GalioE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Galio_R",
    "championId": "Galio",
    "championName": "Galio",
    "abilityName": "Hero's Entrance",
    "description": "Galio designates an ally's position as his landing spot, granting all allies in the area a magic shield. After a delay Galio smashes down location, knocking up nearby enemies.",
    "type": "R",
    "imageId": "GalioR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Gangplank_Passive",
    "championId": "Gangplank",
    "championName": "Gangplank",
    "abilityName": "Trial by Fire",
    "description": "Every few seconds, Gangplank's melee strike will set his opponent on fire.",
    "type": "Passive",
    "imageId": "Gangplank_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Gangplank_Q",
    "championId": "Gangplank",
    "championName": "Gangplank",
    "abilityName": "Parrrley",
    "description": "Shoots target, plundering Gold for each enemy unit killed.",
    "type": "Q",
    "imageId": "GangplankQWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gangplank_W",
    "championId": "Gangplank",
    "championName": "Gangplank",
    "abilityName": "Remove Scurvy",
    "description": "Eats citrus to cure crowd control effects and restore Health.",
    "type": "W",
    "imageId": "GangplankW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gangplank_E",
    "championId": "Gangplank",
    "championName": "Gangplank",
    "abilityName": "Powder Keg",
    "description": "Gangplank uncovers a powder keg at target location. If he attacks it, it explodes, spreading the attack's damage to enemies in the area, slowing them.",
    "type": "E",
    "imageId": "GangplankE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gangplank_R",
    "championId": "Gangplank",
    "championName": "Gangplank",
    "abilityName": "Cannon Barrage",
    "description": "Gangplank signals his ship to bombard an area, slowing and damaging enemies.",
    "type": "R",
    "imageId": "GangplankR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Garen_Passive",
    "championId": "Garen",
    "championName": "Garen",
    "abilityName": "Perseverance",
    "description": "If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second.",
    "type": "Passive",
    "imageId": "Garen_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Garen_Q",
    "championId": "Garen",
    "championName": "Garen",
    "abilityName": "Decisive Strike",
    "description": "Garen gains a burst of Move Speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.",
    "type": "Q",
    "imageId": "GarenQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Garen_W",
    "championId": "Garen",
    "championName": "Garen",
    "abilityName": "Courage",
    "description": "Garen passively increases his armor and magic resist by killing enemies. He may also activate this ability to give him a shield and tenacity for a brief moment followed by a lesser amount of damage reduction for a longer duration.",
    "type": "W",
    "imageId": "GarenW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Garen_E",
    "championId": "Garen",
    "championName": "Garen",
    "abilityName": "Judgment",
    "description": "Garen rapidly spins his sword around his body, dealing physical damage to nearby enemies.",
    "type": "E",
    "imageId": "GarenE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Garen_R",
    "championId": "Garen",
    "championName": "Garen",
    "abilityName": "Demacian Justice",
    "description": "Garen calls upon the might of Demacia to attempt to execute an enemy champion.",
    "type": "R",
    "imageId": "GarenR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Gnar_Passive",
    "championId": "Gnar",
    "championName": "Gnar",
    "abilityName": "Rage Gene",
    "description": "While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.",
    "type": "Passive",
    "imageId": "Gnar_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Gnar_Q",
    "championId": "Gnar",
    "championName": "Gnar",
    "abilityName": "Boomerang Throw / Boulder Toss",
    "description": "Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced.<br><br>Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.",
    "type": "Q",
    "imageId": "GnarQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gnar_W",
    "championId": "Gnar",
    "championName": "Gnar",
    "abilityName": "Hyper / Wallop",
    "description": "Gnar's attacks and spells hype him up, dealing bonus damage and granting him Move Speed.<br><br>Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",
    "type": "W",
    "imageId": "GnarW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gnar_E",
    "championId": "Gnar",
    "championName": "Gnar",
    "abilityName": "Hop / Crunch",
    "description": "Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further.<br><br>Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.",
    "type": "E",
    "imageId": "GnarE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gnar_R",
    "championId": "Gnar",
    "championName": "Gnar",
    "abilityName": "GNAR!",
    "description": "Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them.  Any enemy that hits a wall is stunned and takes bonus damage.",
    "type": "R",
    "imageId": "GnarR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Gragas_Passive",
    "championId": "Gragas",
    "championName": "Gragas",
    "abilityName": "Happy Hour",
    "description": "Gragas periodically heals upon using a skill.",
    "type": "Passive",
    "imageId": "GragasPassiveHeal.png",
    "difficulty": "Hard"
  },
  {
    "id": "Gragas_Q",
    "championId": "Gragas",
    "championName": "Gragas",
    "abilityName": "Barrel Roll",
    "description": "Gragas rolls his cask to a location, which can be activated to explode or will explode on its own after 4 seconds. The potency of the explosion increases over time. Enemies struck by the blast have their Move Speed slowed.",
    "type": "Q",
    "imageId": "GragasQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gragas_W",
    "championId": "Gragas",
    "championName": "Gragas",
    "abilityName": "Drunken Rage",
    "description": "Gragas guzzles down brew from his cask for 1 second. After finishing, he becomes drunkenly empowered, dealing magic damage to all nearby enemies on his next basic attack and reducing damage received.",
    "type": "W",
    "imageId": "GragasW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gragas_E",
    "championId": "Gragas",
    "championName": "Gragas",
    "abilityName": "Body Slam",
    "description": "Gragas charges to a location and collides with the first enemy unit he comes across, dealing damage to all nearby enemy units and stunning them.",
    "type": "E",
    "imageId": "GragasE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gragas_R",
    "championId": "Gragas",
    "championName": "Gragas",
    "abilityName": "Explosive Cask",
    "description": "Gragas hurls his cask to a location, dealing damage and knocking back enemies caught in the blast radius.",
    "type": "R",
    "imageId": "GragasR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Graves_Passive",
    "championId": "Graves",
    "championName": "Graves",
    "abilityName": "New Destiny",
    "description": "Graves' shotgun has some unique properties. He must reload when he runs out of ammo. Attacks fire 4 bullets, which cannot pass through units. Non-champions struck by multiple bullets are knocked back.",
    "type": "Passive",
    "imageId": "GravesTrueGrit.png",
    "difficulty": "Hard"
  },
  {
    "id": "Graves_Q",
    "championId": "Graves",
    "championName": "Graves",
    "abilityName": "End of the Line",
    "description": "Graves fires an explosive shell that detonates after 2 seconds, or 0.2 seconds if it strikes terrain.",
    "type": "Q",
    "imageId": "GravesQLineSpell.png",
    "difficulty": "Medium"
  },
  {
    "id": "Graves_W",
    "championId": "Graves",
    "championName": "Graves",
    "abilityName": "Smoke Screen",
    "description": "Graves fires a smoke canister at the target area creating a cloud of smoke that reduces sight range. Enemies caught in the initial impact are dealt magic damage and have their Move Speed reduced briefly.",
    "type": "W",
    "imageId": "GravesSmokeGrenade.png",
    "difficulty": "Medium"
  },
  {
    "id": "Graves_E",
    "championId": "Graves",
    "championName": "Graves",
    "abilityName": "Quickdraw",
    "description": "Graves dashes forward gaining an Armor boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.",
    "type": "E",
    "imageId": "GravesMove.png",
    "difficulty": "Medium"
  },
  {
    "id": "Graves_R",
    "championId": "Graves",
    "championName": "Graves",
    "abilityName": "Collateral Damage",
    "description": "Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.",
    "type": "R",
    "imageId": "GravesChargeShot.png",
    "difficulty": "Easy"
  },
  {
    "id": "Gwen_Passive",
    "championId": "Gwen",
    "championName": "Gwen",
    "abilityName": "A Thousand Cuts",
    "description": "Gwen's attacks deal bonus magic damage based on the targets health. She heals for a portion of the damage dealt to champions by this effect. ",
    "type": "Passive",
    "imageId": "Gwen_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Gwen_Q",
    "championId": "Gwen",
    "championName": "Gwen",
    "abilityName": "Snip Snip!",
    "description": "Gwen snips her scissors in a cone up to 6 times dealing magic damage. Gwen deals true damage to units in the center and applies her passive to them on each snip.",
    "type": "Q",
    "imageId": "GwenQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gwen_W",
    "championId": "Gwen",
    "championName": "Gwen",
    "abilityName": "Hallowed Mist",
    "description": "Gwen summons mist that protects her from enemies outside of it. She can only be targeted by enemies who enter the mist.",
    "type": "W",
    "imageId": "GwenW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gwen_E",
    "championId": "Gwen",
    "championName": "Gwen",
    "abilityName": "Skip 'n Slash",
    "description": "Gwen dashes a short distance then gains Attack Speed, attack range, and magic damage <OnHit>On-Hit</OnHit> for a few seconds. If she hits an enemy during that time, this Ability's cooldown is partially refunded. ",
    "type": "E",
    "imageId": "GwenE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Gwen_R",
    "championId": "Gwen",
    "championName": "Gwen",
    "abilityName": "Needlework",
    "description": "Gwen hurls a needle that slows enemies hit, deals magic damage, and applies A Thousand Cuts to champions hit. <br><br>This ability can be cast up to two more times, with each cast throwing additional needles and dealing more damage. Gwen must hit an enemy between each cast to unlock the next one. ",
    "type": "R",
    "imageId": "GwenR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Hecarim_Passive",
    "championId": "Hecarim",
    "championName": "Hecarim",
    "abilityName": "Warpath",
    "description": "Hecarim gains Attack Damage equal to a percentage of his bonus Move Speed.",
    "type": "Passive",
    "imageId": "Hecarim_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Hecarim_Q",
    "championId": "Hecarim",
    "championName": "Hecarim",
    "abilityName": "Rampage",
    "description": "Hecarim cleaves nearby enemies dealing physical damage. If Hecarim damages at least one enemy, he increases the damage and lowers the cooldown of subsequent Rampages.",
    "type": "Q",
    "imageId": "HecarimRapidSlash.png",
    "difficulty": "Medium"
  },
  {
    "id": "Hecarim_W",
    "championId": "Hecarim",
    "championName": "Hecarim",
    "abilityName": "Spirit of Dread",
    "description": "Hecarim gains Armor and Magic Resist. Hecarim deals magic damage to nearby enemies, and gains Health equal to a percentage of any damage those enemies suffer.",
    "type": "W",
    "imageId": "HecarimW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Hecarim_E",
    "championId": "Hecarim",
    "championName": "Hecarim",
    "abilityName": "Devastating Charge",
    "description": "Hecarim gains increasing Move Speed and can move through units for a short duration. His next attack knocks the target back and deals additional physical damage based on the distance he has traveled since activating the ability.",
    "type": "E",
    "imageId": "HecarimRamp.png",
    "difficulty": "Medium"
  },
  {
    "id": "Hecarim_R",
    "championId": "Hecarim",
    "championName": "Hecarim",
    "abilityName": "Onslaught of Shadows",
    "description": "Hecarim summons spectral riders and charges forward, dealing magic damage in a line. Hecarim creates a shockwave when he finishes his charge, causing nearby enemies to flee in terror.",
    "type": "R",
    "imageId": "HecarimUlt.png",
    "difficulty": "Medium"
  },
  {
    "id": "Heimerdinger_Passive",
    "championId": "Heimerdinger",
    "championName": "Heimerdinger",
    "abilityName": "Hextech Affinity",
    "description": "Gain Move Speed while near allied towers and turrets deployed by Heimerdinger.",
    "type": "Passive",
    "imageId": "Heimerdinger_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Heimerdinger_Q",
    "championId": "Heimerdinger",
    "championName": "Heimerdinger",
    "abilityName": "H-28 G Evolution Turret",
    "description": "Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).",
    "type": "Q",
    "imageId": "HeimerdingerQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Heimerdinger_W",
    "championId": "Heimerdinger",
    "championName": "Heimerdinger",
    "abilityName": "Hextech Micro-Rockets",
    "description": "Heimerdinger fires long-range rockets that converge on his cursor.",
    "type": "W",
    "imageId": "HeimerdingerW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Heimerdinger_E",
    "championId": "Heimerdinger",
    "championName": "Heimerdinger",
    "abilityName": "CH-2 Electron Storm Grenade",
    "description": "Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.",
    "type": "E",
    "imageId": "HeimerdingerE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Heimerdinger_R",
    "championId": "Heimerdinger",
    "championName": "Heimerdinger",
    "abilityName": "UPGRADE!!!",
    "description": "Heimerdinger invents an upgrade, causing his next spell to have increased effects. ",
    "type": "R",
    "imageId": "HeimerdingerR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Hwei_Passive",
    "championId": "Hwei",
    "championName": "Hwei",
    "abilityName": "Signature of the Visionary",
    "description": "Hwei primes enemy champions he damages with his abilities for his signature finishing touch.<br><br>Hitting an enemy with a second damaging spell completes his signature, leaving it beneath them. The signature detonates after a short delay, dealing magic damage to all enemies in range.",
    "type": "Passive",
    "imageId": "HweiPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Hwei_Q",
    "championId": "Hwei",
    "championName": "Hwei",
    "abilityName": "Subject: Disaster",
    "description": "Hwei envisions a series of disasters, allowing him to paint a devastating blow.<br><br>This ability replaces Hwei's abilities with damaging abilities: Devastating Fire, Severing Bolt, and Molten Fissure.",
    "type": "Q",
    "imageId": "HweiQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Hwei_W",
    "championId": "Hwei",
    "championName": "Hwei",
    "abilityName": "Subject: Serenity",
    "description": "Hwei envisions a series of serenities, allowing him to paint invigorating settings.<br><br>This ability replaces Hwei's abilities with utility abilities: Fleeting Current, Pool of Reflection, and Stirring Lights.",
    "type": "W",
    "imageId": "HweiW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Hwei_E",
    "championId": "Hwei",
    "championName": "Hwei",
    "abilityName": "Subject: Torment",
    "description": "Hwei envisions a series of torments, allowing him to paint controlling visages.<br><br>This ability replaces Hwei's abilities with crowd control abilities: Grim Visage, Gaze of the Abyss, and Crushing Maw.",
    "type": "E",
    "imageId": "HweiE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Hwei_R",
    "championId": "Hwei",
    "championName": "Hwei",
    "abilityName": "Spiraling Despair",
    "description": "Hwei paints a vision of pure despair. The first enemy champion struck becomes the center of an expanding painting that slows and damages nearby enemies. The vision explodes after reaching its maximum size or when the champion dies.",
    "type": "R",
    "imageId": "HweiR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Illaoi_Passive",
    "championId": "Illaoi",
    "championName": "Illaoi",
    "abilityName": "Prophet of an Elder God",
    "description": "Illaoi and the <font color='#669900'>Vessels</font> she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, <font color='#669900'>Vessels</font>, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion.",
    "type": "Passive",
    "imageId": "Illaoi_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Illaoi_Q",
    "championId": "Illaoi",
    "championName": "Illaoi",
    "abilityName": "Tentacle Smash",
    "description": "Increases the damage dealt by Tentacles. When activated, Illaoi smashes down a Tentacle that deals physical damage.",
    "type": "Q",
    "imageId": "IllaoiQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Illaoi_W",
    "championId": "Illaoi",
    "championName": "Illaoi",
    "abilityName": "Harsh Lesson",
    "description": "Illaoi leaps to her target, dealing physical damage and causing nearby Tentacles to also swing at the target.",
    "type": "W",
    "imageId": "IllaoiW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Illaoi_E",
    "championId": "Illaoi",
    "championName": "Illaoi",
    "abilityName": "Test of Spirit",
    "description": "Illaoi rips the spirit from a foe's body, forcing it to stand before her. Spirits echo a percentage of the damage they take to the original target. If killed, or if the target gets too far from the spirit, the target will become a <font color='#669900'>Vessel</font> and begin spawning Tentacles.",
    "type": "E",
    "imageId": "IllaoiE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Illaoi_R",
    "championId": "Illaoi",
    "championName": "Illaoi",
    "abilityName": "Leap of Faith",
    "description": "Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies. A Tentacle spawns for each enemy champion hit.",
    "type": "R",
    "imageId": "IllaoiR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Irelia_Passive",
    "championId": "Irelia",
    "championName": "Irelia",
    "abilityName": "Ionian Fervor",
    "description": "When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.",
    "type": "Passive",
    "imageId": "Irelia_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Irelia_Q",
    "championId": "Irelia",
    "championName": "Irelia",
    "abilityName": "Bladesurge",
    "description": "Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.",
    "type": "Q",
    "imageId": "IreliaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Irelia_W",
    "championId": "Irelia",
    "championName": "Irelia",
    "abilityName": "Defiant Dance",
    "description": "Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.",
    "type": "W",
    "imageId": "IreliaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Irelia_E",
    "championId": "Irelia",
    "championName": "Irelia",
    "abilityName": "Flawless Duet",
    "description": "Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.",
    "type": "E",
    "imageId": "IreliaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Irelia_R",
    "championId": "Irelia",
    "championName": "Irelia",
    "abilityName": "Vanguard's Edge",
    "description": "Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.",
    "type": "R",
    "imageId": "IreliaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ivern_Passive",
    "championId": "Ivern",
    "championName": "Ivern",
    "abilityName": "Friend of the Forest",
    "description": "Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience.",
    "type": "Passive",
    "imageId": "IvernP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ivern_Q",
    "championId": "Ivern",
    "championName": "Ivern",
    "abilityName": "Rootcaller",
    "description": "Ivern conjures a vine, dealing damage and rooting enemy targets hit. Ivern's allies can dash to the rooted target.",
    "type": "Q",
    "imageId": "IvernQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ivern_W",
    "championId": "Ivern",
    "championName": "Ivern",
    "abilityName": "Brushmaker",
    "description": "In brush, Ivern and his nearby allies attacks deal bonus magic damage. Ivern can activate this ability to create a patch of brush.",
    "type": "W",
    "imageId": "IvernW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ivern_E",
    "championId": "Ivern",
    "championName": "Ivern",
    "abilityName": "Triggerseed",
    "description": "Ivern places a shield on an ally which explodes after a short duration slowing and damaging enemies. The shield refreshes if it hits no enemies.",
    "type": "E",
    "imageId": "IvernE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ivern_R",
    "championId": "Ivern",
    "championName": "Ivern",
    "abilityName": "Daisy!",
    "description": "Ivern summons his Sentinel friend Daisy to fight with him. Re-cast command Daisy to attack or move.",
    "type": "R",
    "imageId": "IvernR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Janna_Passive",
    "championId": "Janna",
    "championName": "Janna",
    "abilityName": "Tailwind",
    "description": "Janna's allies gain Move Speed moving towards her.<br><br>Janna deals a portion of bonus Move Speed as bonus magic damage on hit and with Zephyr.",
    "type": "Passive",
    "imageId": "Janna_Tailwind.png",
    "difficulty": "Hard"
  },
  {
    "id": "Janna_Q",
    "championId": "Janna",
    "championName": "Janna",
    "abilityName": "Howling Gale",
    "description": "By creating a localized change in pressure and temperature, Janna is able to create a small storm that grows in size with time. She can activate the spell again to release the storm. On release this storm will fly towards the direction it was cast in, dealing damage and knocking away any enemies in its path.",
    "type": "Q",
    "imageId": "HowlingGale.png",
    "difficulty": "Medium"
  },
  {
    "id": "Janna_W",
    "championId": "Janna",
    "championName": "Janna",
    "abilityName": "Zephyr",
    "description": "Janna summons an air elemental that passively increases her Move Speed and enables her to pass through units. She may also activate this ability to deal damage and slow an enemy's Move Speed.",
    "type": "W",
    "imageId": "SowTheWind.png",
    "difficulty": "Medium"
  },
  {
    "id": "Janna_E",
    "championId": "Janna",
    "championName": "Janna",
    "abilityName": "Eye Of The Storm",
    "description": "Janna conjures a defensive gale that shields an ally champion or turret from incoming damage and increases their Attack Damage.",
    "type": "E",
    "imageId": "EyeOfTheStorm.png",
    "difficulty": "Medium"
  },
  {
    "id": "Janna_R",
    "championId": "Janna",
    "championName": "Janna",
    "abilityName": "Monsoon",
    "description": "Janna surrounds herself in a magical storm, throwing enemies back. After the storm has settled, soothing winds heal nearby allies while the ability is active.",
    "type": "R",
    "imageId": "ReapTheWhirlwind.png",
    "difficulty": "Easy"
  },
  {
    "id": "JarvanIV_Passive",
    "championId": "JarvanIV",
    "championName": "Jarvan IV",
    "abilityName": "Martial Cadence",
    "description": "Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds.",
    "type": "Passive",
    "imageId": "JarvanIVP.png",
    "difficulty": "Hard"
  },
  {
    "id": "JarvanIV_Q",
    "championId": "JarvanIV",
    "championName": "Jarvan IV",
    "abilityName": "Dragon Strike",
    "description": "Jarvan IV extends his lance, dealing physical damage and lowering the Armor of enemies in its path. Additionally, this will pull Jarvan to his Demacian Standard, knocking up enemies in his path.",
    "type": "Q",
    "imageId": "JarvanIVDragonStrike.png",
    "difficulty": "Medium"
  },
  {
    "id": "JarvanIV_W",
    "championId": "JarvanIV",
    "championName": "Jarvan IV",
    "abilityName": "Golden Aegis",
    "description": "Jarvan IV calls upon the ancient kings of Demacia to shield him from harm and slow surrounding enemies.",
    "type": "W",
    "imageId": "JarvanIVGoldenAegis.png",
    "difficulty": "Medium"
  },
  {
    "id": "JarvanIV_E",
    "championId": "JarvanIV",
    "championName": "Jarvan IV",
    "abilityName": "Demacian Standard",
    "description": "Jarvan IV carries the pride of Demacia, passively granting him bonus Attack Speed. Activating Demacian Standard allows Jarvan IV to place a Demacian flag that deals magic damage on impact and grants Attack Speed to nearby allied champions.",
    "type": "E",
    "imageId": "JarvanIVDemacianStandard.png",
    "difficulty": "Medium"
  },
  {
    "id": "JarvanIV_R",
    "championId": "JarvanIV",
    "championName": "Jarvan IV",
    "abilityName": "Cataclysm",
    "description": "Jarvan IV heroically leaps into battle at a target with such force that he terraforms the surrounding area to create an arena around them. Nearby enemies are damaged at the moment of impact.",
    "type": "R",
    "imageId": "JarvanIVCataclysm.png",
    "difficulty": "Easy"
  },
  {
    "id": "Jax_Passive",
    "championId": "Jax",
    "championName": "Jax",
    "abilityName": "Relentless Assault",
    "description": "Jax's consecutive basic attacks continuously increase his Attack Speed.",
    "type": "Passive",
    "imageId": "Armsmaster_MasterOfArms.png",
    "difficulty": "Hard"
  },
  {
    "id": "Jax_Q",
    "championId": "Jax",
    "championName": "Jax",
    "abilityName": "Leap Strike",
    "description": "Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.",
    "type": "Q",
    "imageId": "JaxQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jax_W",
    "championId": "Jax",
    "championName": "Jax",
    "abilityName": "Empower",
    "description": "Jax charges his weapon with energy, causing his next attack to deal additional damage.",
    "type": "W",
    "imageId": "JaxW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jax_E",
    "championId": "Jax",
    "championName": "Jax",
    "abilityName": "Counter Strike",
    "description": "Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.",
    "type": "E",
    "imageId": "JaxE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jax_R",
    "championId": "Jax",
    "championName": "Jax",
    "abilityName": "Grandmaster-at-Arms",
    "description": "Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to deal damage around himself and strengthen his resolve, increasing his Armor and Magic Resist for a short duration.",
    "type": "R",
    "imageId": "JaxR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Jayce_Passive",
    "championId": "Jayce",
    "championName": "Jayce",
    "abilityName": "Hextech Capacitor",
    "description": "When Jayce swaps weapons he gains Move Speed for a short duration.",
    "type": "Passive",
    "imageId": "Jayce_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Jayce_Q",
    "championId": "Jayce",
    "championName": "Jayce",
    "abilityName": "To the Skies! / Shock Blast",
    "description": "Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies.<br><br>Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.",
    "type": "Q",
    "imageId": "JayceToTheSkies.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jayce_W",
    "championId": "Jayce",
    "championName": "Jayce",
    "abilityName": "Lightning Field / Hyper Charge",
    "description": "Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds.<br><br>Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.",
    "type": "W",
    "imageId": "JayceStaticField.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jayce_E",
    "championId": "Jayce",
    "championName": "Jayce",
    "abilityName": "Thundering Blow / Acceleration Gate",
    "description": "Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance.<br><br>Cannon Stance: Deploys an Acceleration Gate increasing the Move Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.",
    "type": "E",
    "imageId": "JayceThunderingBlow.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jayce_R",
    "championId": "Jayce",
    "championName": "Jayce",
    "abilityName": "Mercury Cannon / Mercury Hammer",
    "description": "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist.<br><br>Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
    "type": "R",
    "imageId": "JayceStanceHtG.png",
    "difficulty": "Easy"
  },
  {
    "id": "Jhin_Passive",
    "championId": "Jhin",
    "championName": "Jhin",
    "abilityName": "Whisper",
    "description": "Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of Move Speed.",
    "type": "Passive",
    "imageId": "Jhin_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Jhin_Q",
    "championId": "Jhin",
    "championName": "Jhin",
    "abilityName": "Dancing Grenade",
    "description": "Jhin launches a magical cartridge at an enemy. It can hit up to four targets and gains damage each time it kills.",
    "type": "Q",
    "imageId": "JhinQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jhin_W",
    "championId": "Jhin",
    "championName": "Jhin",
    "abilityName": "Deadly Flourish",
    "description": "Jhin brandishes his cane, firing a single shot with incredible range. It pierces through minions and monsters, but stops on the first champion hit. If the target was recently struck by Jhin's allies, lotus traps, or damaged by Jhin, they are rooted.",
    "type": "W",
    "imageId": "JhinW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jhin_E",
    "championId": "Jhin",
    "championName": "Jhin",
    "abilityName": "Captive Audience",
    "description": "Jhin places an invisible lotus trap that blooms when walked over. It slows nearby enemies before dealing damage with an explosion of serrated petals. <br><br><font color='#FFFFFF'>Beauty in Death -</font> When Jhin kills an enemy champion, a lotus trap will bloom near their corpse.",
    "type": "E",
    "imageId": "JhinE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jhin_R",
    "championId": "Jhin",
    "championName": "Jhin",
    "abilityName": "Curtain Call",
    "description": "Jhin channels, transforming Whisper into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. Whisper cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike.",
    "type": "R",
    "imageId": "JhinR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Jinx_Passive",
    "championId": "Jinx",
    "championName": "Jinx",
    "abilityName": "Get Excited!",
    "description": "Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.",
    "type": "Passive",
    "imageId": "Jinx_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Jinx_Q",
    "championId": "Jinx",
    "championName": "Jinx",
    "abilityName": "Switcheroo!",
    "description": "Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, but drain Mana and attack slower.",
    "type": "Q",
    "imageId": "JinxQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jinx_W",
    "championId": "Jinx",
    "championName": "Jinx",
    "abilityName": "Zap!",
    "description": "Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.",
    "type": "W",
    "imageId": "JinxW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jinx_E",
    "championId": "Jinx",
    "championName": "Jinx",
    "abilityName": "Flame Chompers!",
    "description": "Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.",
    "type": "E",
    "imageId": "JinxE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Jinx_R",
    "championId": "Jinx",
    "championName": "Jinx",
    "abilityName": "Super Mega Death Rocket!",
    "description": "Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.",
    "type": "R",
    "imageId": "JinxR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kaisa_Passive",
    "championId": "Kaisa",
    "championName": "Kai'Sa",
    "abilityName": "Second Skin",
    "description": "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties.",
    "type": "Passive",
    "imageId": "Kaisa_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kaisa_Q",
    "championId": "Kaisa",
    "championName": "Kai'Sa",
    "abilityName": "Icathian Rain",
    "description": "Kai'Sa shoots a swarm of missiles that seek out nearby targets.<br><br>Living Weapon: Icathian Rain is upgraded to shoot more missiles.",
    "type": "Q",
    "imageId": "KaisaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kaisa_W",
    "championId": "Kaisa",
    "championName": "Kai'Sa",
    "abilityName": "Void Seeker",
    "description": "Kai'Sa shoots a long range missile, marking enemies with her passive.<br><br>Living Weapon: Void Seeker is upgraded to apply more passive marks and reduce cooldown on champion hit.",
    "type": "W",
    "imageId": "KaisaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kaisa_E",
    "championId": "Kaisa",
    "championName": "Kai'Sa",
    "abilityName": "Supercharge",
    "description": "Kai'Sa briefly increases her Move Speed, then increases her Attack Speed.<br><br>Living Weapon: Supercharge is upgraded to briefly grant Invisibility.",
    "type": "E",
    "imageId": "KaisaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kaisa_R",
    "championId": "Kaisa",
    "championName": "Kai'Sa",
    "abilityName": "Killer Instinct",
    "description": "Kai'Sa dashes near an enemy champion.",
    "type": "R",
    "imageId": "KaisaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kalista_Passive",
    "championId": "Kalista",
    "championName": "Kalista",
    "abilityName": "Martial Poise",
    "description": "Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack.",
    "type": "Passive",
    "imageId": "Kalista_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kalista_Q",
    "championId": "Kalista",
    "championName": "Kalista",
    "abilityName": "Pierce",
    "description": "Throw a fast moving spear that passes through enemies it kills.",
    "type": "Q",
    "imageId": "KalistaMysticShot.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kalista_W",
    "championId": "Kalista",
    "championName": "Kalista",
    "abilityName": "Sentinel",
    "description": "Gain bonus damage when Kalista and her Oathsworn strike the same target. <br><br>Activate to send a soul to scout out the path, revealing the area in front of it.",
    "type": "W",
    "imageId": "KalistaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kalista_E",
    "championId": "Kalista",
    "championName": "Kalista",
    "abilityName": "Rend",
    "description": "Attacks impale their targets with spears. Activate to rip the spears out, slowing and dealing escalating damage.",
    "type": "E",
    "imageId": "KalistaExpungeWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kalista_R",
    "championId": "Kalista",
    "championName": "Kalista",
    "abilityName": "Fate's Call",
    "description": "Kalista teleports the Oathsworn ally to herself. They gain the ability to dash toward a position, knocking enemy champions back.",
    "type": "R",
    "imageId": "KalistaRx.png",
    "difficulty": "Easy"
  },
  {
    "id": "Karma_Passive",
    "championId": "Karma",
    "championName": "Karma",
    "abilityName": "Gathering Fire",
    "description": "Karma's damaging abilities will reduce the cooldown of Mantra.",
    "type": "Passive",
    "imageId": "Karma_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Karma_Q",
    "championId": "Karma",
    "championName": "Karma",
    "abilityName": "Inner Flame",
    "description": "Karma sends forth a ball of spirit energy that explodes and deals damage upon hitting an enemy unit.<br><br>Mantra Bonus: In addition to the explosion, Mantra increases the destructive power of her Inner Flame, creating a cataclysm which deals damage after a short delay.",
    "type": "Q",
    "imageId": "KarmaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Karma_W",
    "championId": "Karma",
    "championName": "Karma",
    "abilityName": "Focused Resolve",
    "description": "Karma creates a tether between herself and a targeted enemy, dealing damage and revealing them. If the tether is not broken, the enemy will be rooted and damaged again.<br><br>Mantra Bonus: Karma strengthens the link, healing herself and extending the root duration.",
    "type": "W",
    "imageId": "KarmaSpiritBind.png",
    "difficulty": "Medium"
  },
  {
    "id": "Karma_E",
    "championId": "Karma",
    "championName": "Karma",
    "abilityName": "Inspire",
    "description": "Karma summons a protective shield that absorbs incoming damage and increases the Move Speed of the protected ally.<br><br>Mantra Bonus: Energy radiates out from her target, strengthening the initial shield and applying Inspire to nearby allied champions.",
    "type": "E",
    "imageId": "KarmaSolKimShield.png",
    "difficulty": "Medium"
  },
  {
    "id": "Karma_R",
    "championId": "Karma",
    "championName": "Karma",
    "abilityName": "Mantra",
    "description": "Karma empowers her next ability to do an additional effect. Mantra is available at level 1 and does not require a skill point.",
    "type": "R",
    "imageId": "KarmaMantra.png",
    "difficulty": "Easy"
  },
  {
    "id": "Karthus_Passive",
    "championId": "Karthus",
    "championName": "Karthus",
    "abilityName": "Death Defied",
    "description": "Upon dying, Karthus enters a spirit form that allows him to continue casting spells.",
    "type": "Passive",
    "imageId": "Karthus_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Karthus_Q",
    "championId": "Karthus",
    "championName": "Karthus",
    "abilityName": "Lay Waste",
    "description": "Karthus unleashes a delayed blast at a location, dealing damage to nearby enemies. Deals increased damage to isolated enemies. ",
    "type": "Q",
    "imageId": "KarthusLayWasteA1.png",
    "difficulty": "Medium"
  },
  {
    "id": "Karthus_W",
    "championId": "Karthus",
    "championName": "Karthus",
    "abilityName": "Wall of Pain",
    "description": "Karthus creates a passable screen of leeching energy. Any enemy units that walk through the screen have their Move Speed and Magic Resist reduced for a period.",
    "type": "W",
    "imageId": "KarthusWallOfPain.png",
    "difficulty": "Medium"
  },
  {
    "id": "Karthus_E",
    "championId": "Karthus",
    "championName": "Karthus",
    "abilityName": "Defile",
    "description": "Karthus passively steals energy from his victims, gaining Mana on each kill. Alternatively, Karthus can surround himself in the souls of his prey, dealing damage to nearby enemies, but quickly draining his own Mana.",
    "type": "E",
    "imageId": "KarthusDefile.png",
    "difficulty": "Medium"
  },
  {
    "id": "Karthus_R",
    "championId": "Karthus",
    "championName": "Karthus",
    "abilityName": "Requiem",
    "description": "After channeling for 3 seconds, Karthus deals damage to all enemy champions.",
    "type": "R",
    "imageId": "KarthusFallenOne.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kassadin_Passive",
    "championId": "Kassadin",
    "championName": "Kassadin",
    "abilityName": "Void Stone",
    "description": "Kassadin takes reduced magic damage and ignores unit collision.",
    "type": "Passive",
    "imageId": "Kassadin_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kassadin_Q",
    "championId": "Kassadin",
    "championName": "Kassadin",
    "abilityName": "Null Sphere",
    "description": "Kassadin fires an orb of void energy at a target, dealing damage and interrupting channels. The excess energy forms around himself, granting a temporary shield that absorbs magic damage.",
    "type": "Q",
    "imageId": "NullLance.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kassadin_W",
    "championId": "Kassadin",
    "championName": "Kassadin",
    "abilityName": "Nether Blade",
    "description": "Passive: Kassadin's basic attacks deal bonus magic damage. Active: Kassadin's next basic attack deals significant bonus magic damage and restores Mana.",
    "type": "W",
    "imageId": "NetherBlade.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kassadin_E",
    "championId": "Kassadin",
    "championName": "Kassadin",
    "abilityName": "Force Pulse",
    "description": "Kassadin draws energy from spells cast in his vicinity. Upon charging up, Kassadin can use Force Pulse to damage and slow enemies in a cone in front of him.",
    "type": "E",
    "imageId": "ForcePulse.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kassadin_R",
    "championId": "Kassadin",
    "championName": "Kassadin",
    "abilityName": "Riftwalk",
    "description": "Kassadin teleports to a nearby location dealing damage to nearby enemy units. Multiple Riftwalks in a short period of time cost additional Mana but also deal additional damage.",
    "type": "R",
    "imageId": "RiftWalk.png",
    "difficulty": "Easy"
  },
  {
    "id": "Katarina_Passive",
    "championId": "Katarina",
    "championName": "Katarina",
    "abilityName": "Voracity",
    "description": "Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced.<br><br>If Katarina picks up a <font color='#FFF673'>Dagger</font>, she uses it to slash through all nearby enemies, dealing magic damage.",
    "type": "Passive",
    "imageId": "Katarina_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Katarina_Q",
    "championId": "Katarina",
    "championName": "Katarina",
    "abilityName": "Bouncing Blade",
    "description": "Katarina throws a <font color='#FFF673'>Dagger</font> at the target that then bounces to nearby enemies before ricocheting onto the ground.",
    "type": "Q",
    "imageId": "KatarinaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Katarina_W",
    "championId": "Katarina",
    "championName": "Katarina",
    "abilityName": "Preparation",
    "description": "Katarina gains a burst of Move Speed, tossing a <font color='#FFF673'>Dagger</font> into the air directly above herself.",
    "type": "W",
    "imageId": "KatarinaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Katarina_E",
    "championId": "Katarina",
    "championName": "Katarina",
    "abilityName": "Shunpo",
    "description": "Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.",
    "type": "E",
    "imageId": "KatarinaEWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Katarina_R",
    "championId": "Katarina",
    "championName": "Katarina",
    "abilityName": "Death Lotus",
    "description": "Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.",
    "type": "R",
    "imageId": "KatarinaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kayle_Passive",
    "championId": "Kayle",
    "championName": "Kayle",
    "abilityName": "Divine Ascent",
    "description": "Kayle's attacks are empowered by the heavens as she levels up and spends skill points. Her wings are lit aflame as she progressively gains Attack Speed, Move Speed, Attack Range, and waves of fire on her attacks.",
    "type": "Passive",
    "imageId": "Kayle_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kayle_Q",
    "championId": "Kayle",
    "championName": "Kayle",
    "abilityName": "Radiant Blast",
    "description": "Kayle conjures a portal, summoning a celestial sword that pierces through enemies, slowing, damaging, and reducing the resistances of all hit.",
    "type": "Q",
    "imageId": "KayleQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kayle_W",
    "championId": "Kayle",
    "championName": "Kayle",
    "abilityName": "Celestial Blessing",
    "description": "Blessed by the divine, Kayle heals and grants Move Speed to herself and the nearest ally.",
    "type": "W",
    "imageId": "KayleW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kayle_E",
    "championId": "Kayle",
    "championName": "Kayle",
    "abilityName": "Starfire Spellblade",
    "description": "Passive: Kayle's celestial sword, Virtue, deals bonus magic damage to enemies she attacks.<br><br>Active: Kayle's next attack smites her target with celestial fire, dealing bonus damage proportionate to their missing health.",
    "type": "E",
    "imageId": "KayleE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kayle_R",
    "championId": "Kayle",
    "championName": "Kayle",
    "abilityName": "Divine Judgment",
    "description": "Kayle makes an ally invulnerable and calls upon former Aspects of Justice to purify the area around her target with a holy rain of swords.",
    "type": "R",
    "imageId": "KayleR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kayn_Passive",
    "championId": "Kayn",
    "championName": "Kayn",
    "abilityName": "The Darkin Scythe",
    "description": "Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the <font color='#fe5c50'>Darkin</font> will triumph, or Kayn will master Rhaast and become the <font color='#8484fb'>Shadow Assassin</font>.<br><br><font color='#fe5c50'>Darkin:</font> Heal for a percentage of spell damage dealt to champions.<br><br><font color='#8484fb'>Shadow Assassin:</font> For the first few seconds in combat with enemy champions, deal bonus damage.",
    "type": "Passive",
    "imageId": "Kayn_Passive_Primary.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kayn_Q",
    "championId": "Kayn",
    "championName": "Kayn",
    "abilityName": "Reaping Slash",
    "description": "Kayn dashes, then slashes. Both deal damage.",
    "type": "Q",
    "imageId": "KaynQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kayn_W",
    "championId": "Kayn",
    "championName": "Kayn",
    "abilityName": "Blade's Reach",
    "description": "Kayn damages and slows targets in a line.",
    "type": "W",
    "imageId": "KaynW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kayn_E",
    "championId": "Kayn",
    "championName": "Kayn",
    "abilityName": "Shadow Step",
    "description": "Kayn can walk through terrain.",
    "type": "E",
    "imageId": "KaynE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kayn_R",
    "championId": "Kayn",
    "championName": "Kayn",
    "abilityName": "Umbral Trespass",
    "description": "Kayn hides in an enemy's body, dealing massive damage when he bursts out.",
    "type": "R",
    "imageId": "KaynR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kennen_Passive",
    "championId": "Kennen",
    "championName": "Kennen",
    "abilityName": "Mark of the Storm",
    "description": "Kennen stuns enemies he hits 3 times with his abilities.",
    "type": "Passive",
    "imageId": "Kennen_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kennen_Q",
    "championId": "Kennen",
    "championName": "Kennen",
    "abilityName": "Thundering Shuriken",
    "description": "Kennen throws a fast moving shuriken towards a location, causing damage and adding a Mark of the Storm to any opponent that it hits.",
    "type": "Q",
    "imageId": "KennenShurikenHurlMissile1.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kennen_W",
    "championId": "Kennen",
    "championName": "Kennen",
    "abilityName": "Electrical Surge",
    "description": "Kennen passively deals extra damage and adds a Mark of the Storm to his target every few attacks, and he can activate this ability to damage and add another Mark of the Storm to targets who are already marked.",
    "type": "W",
    "imageId": "KennenBringTheLight.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kennen_E",
    "championId": "Kennen",
    "championName": "Kennen",
    "abilityName": "Lightning Rush",
    "description": "Kennen morphs into a lightning form, enabling him to pass through units and apply a Mark of the Storm. Kennen gains Move Speed when entering this form, and attack speed when leaving it.",
    "type": "E",
    "imageId": "KennenLightningRush.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kennen_R",
    "championId": "Kennen",
    "championName": "Kennen",
    "abilityName": "Slicing Maelstrom",
    "description": "Kennen summons a storm that strikes at nearby enemy champions for magical damage.",
    "type": "R",
    "imageId": "KennenShurikenStorm.png",
    "difficulty": "Easy"
  },
  {
    "id": "Khazix_Passive",
    "championId": "Khazix",
    "championName": "Kha'Zix",
    "abilityName": "Unseen Threat",
    "description": "Nearby enemies that are <font color='#FFF673'>Isolated</font> from their allies are marked. Kha'Zix's abilities have interactions with <font color='#FFF673'>Isolated</font> targets.<br><br>When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy champion to deal bonus magic damage and slow them for a few seconds.",
    "type": "Passive",
    "imageId": "Khazix_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Khazix_Q",
    "championId": "Khazix",
    "championName": "Kha'Zix",
    "abilityName": "Taste Their Fear",
    "description": "Deals physical damage to the target. Damage increased on <font color='#FFF673'>Isolated</font> targets. If he chooses to <font color='#00DD33'>Evolve Reaper Claws</font>, this refunds a percent of it's cooldown against <font color='#FFF673'>Isolated</font> targets. Kha'Zix also gains increased range on his basic attacks and Taste Their Fear.",
    "type": "Q",
    "imageId": "KhazixQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Khazix_W",
    "championId": "Khazix",
    "championName": "Kha'Zix",
    "abilityName": "Void Spike",
    "description": "Kha'Zix fires exploding spikes that deal physical damage to enemies hit. Kha'Zix is healed if he is also within the explosion radius. If he chooses to <font color='#00DD33'>Evolve Spike Racks</font>, Void Spike now fires three spikes in a cone, slow enemies hit, and reveals enemy champions hit for 2 seconds. <font color='#FFF673'>Isolated</font> targets are slowed for extra.",
    "type": "W",
    "imageId": "KhazixW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Khazix_E",
    "championId": "Khazix",
    "championName": "Kha'Zix",
    "abilityName": "Leap",
    "description": "Kha'Zix leaps to an area, dealing physical damage upon landing. If he chooses to <font color='#00DD33'>Evolve Wings</font>, Leap's range increases by 200 and the cooldown resets on champion kill or assist.",
    "type": "E",
    "imageId": "KhazixE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Khazix_R",
    "championId": "Khazix",
    "championName": "Kha'Zix",
    "abilityName": "Void Assault",
    "description": "Each rank allows Kha'Zix to evolve one of his abilities, giving it a unique additional effect. When activated, Kha'Zix becomes <font color='#91d7ee'>Invisible</font>, triggering Unseen Threat and increasing Move Speed. If he chooses to <font color='#00DD33'>Evolve Adaptive Cloaking</font>, Void Assault gains increased <font color='#91d7ee'>Invisibility</font> duration, and an additional use.",
    "type": "R",
    "imageId": "KhazixR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kindred_Passive",
    "championId": "Kindred",
    "championName": "Kindred",
    "abilityName": "Mark of the Kindred",
    "description": "Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range.",
    "type": "Passive",
    "imageId": "Kindred_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kindred_Q",
    "championId": "Kindred",
    "championName": "Kindred",
    "abilityName": "Dance of Arrows",
    "description": "Kindred tumbles and shoots up to three arrows at nearby targets.",
    "type": "Q",
    "imageId": "KindredQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kindred_W",
    "championId": "Kindred",
    "championName": "Kindred",
    "abilityName": "Wolf's Frenzy",
    "description": "Wolf enrages and attacks enemies around him.  Lamb passively gains stacks by moving and attacking. When fully charged, Lamb's next attack restores health.",
    "type": "W",
    "imageId": "KindredW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kindred_E",
    "championId": "Kindred",
    "championName": "Kindred",
    "abilityName": "Mounting Dread",
    "description": "Lamb fires a carefully placed shot, slowing the target. If Lamb attacks the target two more times, her third attack instead directs Wolf to pounce on the enemy, savaging them for massive damage.",
    "type": "E",
    "imageId": "KindredEWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kindred_R",
    "championId": "Kindred",
    "championName": "Kindred",
    "abilityName": "Lamb's Respite",
    "description": "Lamb grants all living things inside a zone a respite from death. Until the effect ends, nothing can die. At the end, units are healed.",
    "type": "R",
    "imageId": "KindredR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Kled_Passive",
    "championId": "Kled",
    "championName": "Kled",
    "abilityName": "Skaarl, the Cowardly Lizard",
    "description": "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts.<br><br>While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health.",
    "type": "Passive",
    "imageId": "Kled_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Kled_Q",
    "championId": "Kled",
    "championName": "Kled",
    "abilityName": "Bear Trap on a Rope",
    "description": "Kled throws a bear trap that damages and hooks an enemy champion. If shackled for a short duration, the target takes additional physical damage and is yanked toward Kled.<br><br>When dismounted, this ability is replaced by Pocket Pistol, a ranged gun blast that knocks back Kled and restores courage.",
    "type": "Q",
    "imageId": "KledQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kled_W",
    "championId": "Kled",
    "championName": "Kled",
    "abilityName": "Violent Tendencies",
    "description": "Kled gains massive attack speed for four attacks. The fourth attack deals more damage.",
    "type": "W",
    "imageId": "KledW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kled_E",
    "championId": "Kled",
    "championName": "Kled",
    "abilityName": "Jousting",
    "description": "Kled dashes, dealing physical damage and gaining a short burst of speed. Kled can cast this ability again to dash back through his initial target, dealing the same damage.",
    "type": "E",
    "imageId": "KledE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Kled_R",
    "championId": "Kled",
    "championName": "Kled",
    "abilityName": "Chaaaaaaaarge!!!",
    "description": "Kled and Skaarl charge to a location, leaving a speed-granting trail behind them and gaining a shield. Skaarl locks onto and rams the first enemy champion encountered.",
    "type": "R",
    "imageId": "KledR.png",
    "difficulty": "Easy"
  },
  {
    "id": "KogMaw_Passive",
    "championId": "KogMaw",
    "championName": "Kog'Maw",
    "abilityName": "Icathian Surprise",
    "description": "4 seconds after dying, Kogmaw explodes, dealing true damage to surrounding enemies.",
    "type": "Passive",
    "imageId": "KogMaw_IcathianSurprise.png",
    "difficulty": "Hard"
  },
  {
    "id": "KogMaw_Q",
    "championId": "KogMaw",
    "championName": "Kog'Maw",
    "abilityName": "Caustic Spittle",
    "description": "Kog'Maw launches a corrosive projectile which deals magic damage and corrodes the target's armor and magic resist for a short time. Kog'Maw also gains additional attack speed.",
    "type": "Q",
    "imageId": "KogMawQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "KogMaw_W",
    "championId": "KogMaw",
    "championName": "Kog'Maw",
    "abilityName": "Bio-Arcane Barrage",
    "description": "Kog'Maw's attacks gain range and deal a percent of the target's maximum health as magic damage.",
    "type": "W",
    "imageId": "KogMawBioArcaneBarrage.png",
    "difficulty": "Medium"
  },
  {
    "id": "KogMaw_E",
    "championId": "KogMaw",
    "championName": "Kog'Maw",
    "abilityName": "Void Ooze",
    "description": "Kog'Maw launches a peculiar ooze which damages all enemies it passes through and leaves a trail which slows enemies who stand on it.",
    "type": "E",
    "imageId": "KogMawVoidOoze.png",
    "difficulty": "Medium"
  },
  {
    "id": "KogMaw_R",
    "championId": "KogMaw",
    "championName": "Kog'Maw",
    "abilityName": "Living Artillery",
    "description": "Kog'Maw fires an artillery shell at a great distance dealing magic damage (increased significantly on low health enemies) and revealing non-stealthed targets. Additionally, multiple Living Artilleries in a short period of time cause them to cost additional Mana.",
    "type": "R",
    "imageId": "KogMawLivingArtillery.png",
    "difficulty": "Easy"
  },
  {
    "id": "KSante_Passive",
    "championId": "KSante",
    "championName": "K'Sante",
    "abilityName": "Dauntless Instinct",
    "description": "K'Sante's Abilities mark targets to take more damage on his next Attack.<br><br>When All Out, K'Sante deals more damage with all Attacks and Abilities.",
    "type": "Passive",
    "imageId": "Icons_KSante_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "KSante_Q",
    "championId": "KSante",
    "championName": "K'Sante",
    "abilityName": "Ntofo Strikes",
    "description": "K'Sante strikes, damaging and slowing enemies in a short line.<br><br>On hit, grants a stack of Ntofo Strikes. At 2 stacks, K'Sante fires a shockwave that pulls enemies in.<br><br>When All Out, cooldown is reduced.",
    "type": "Q",
    "imageId": "KSanteQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "KSante_W",
    "championId": "KSante",
    "championName": "K'Sante",
    "abilityName": "Path Maker",
    "description": "K'Sante charges up, taking reduced damage, then dashes, knocking back and stunning enemies.<br><br>When All Out, deals increased damage and no longer knocks back or stuns.",
    "type": "W",
    "imageId": "KSanteW.png",
    "difficulty": "Medium"
  },
  {
    "id": "KSante_E",
    "championId": "KSante",
    "championName": "K'Sante",
    "abilityName": "Footwork",
    "description": "K'Sante dashes and gains a shield. If targeting an ally, K'Sante dashes to the ally with increased range and both gain a shield.<br><br>When All Out, cooldown is reduced and speed is increased.",
    "type": "E",
    "imageId": "KSanteE.png",
    "difficulty": "Medium"
  },
  {
    "id": "KSante_R",
    "championId": "KSante",
    "championName": "K'Sante",
    "abilityName": "All Out",
    "description": "K'Sante knocks an enemy back, launching them through any wall in their path. Then, K'Sante goes All Out and dashes after them, gaining increased damage, healing, and transformed abilities at the cost of reduced defenses.",
    "type": "R",
    "imageId": "KSanteR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Leblanc_Passive",
    "championId": "Leblanc",
    "championName": "LeBlanc",
    "abilityName": "Mirror Image",
    "description": "When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.",
    "type": "Passive",
    "imageId": "LeBlancP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Leblanc_Q",
    "championId": "Leblanc",
    "championName": "LeBlanc",
    "abilityName": "Sigil of Malice",
    "description": "LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage. If either part kills the target, Leblanc refunds the Mana cost and part of this spell's remaining Cooldown.",
    "type": "Q",
    "imageId": "LeblancQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Leblanc_W",
    "championId": "Leblanc",
    "championName": "LeBlanc",
    "abilityName": "Distortion",
    "description": "LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.",
    "type": "W",
    "imageId": "LeblancW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Leblanc_E",
    "championId": "Leblanc",
    "championName": "LeBlanc",
    "abilityName": "Ethereal Chains",
    "description": "LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage.",
    "type": "E",
    "imageId": "LeblancE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Leblanc_R",
    "championId": "Leblanc",
    "championName": "LeBlanc",
    "abilityName": "Mimic",
    "description": "LeBlanc casts a mimicked version of one of her basic spells.",
    "type": "R",
    "imageId": "LeblancR.png",
    "difficulty": "Easy"
  },
  {
    "id": "LeeSin_Passive",
    "championId": "LeeSin",
    "championName": "Lee Sin",
    "abilityName": "Flurry",
    "description": "After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy.",
    "type": "Passive",
    "imageId": "LeeSinPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "LeeSin_Q",
    "championId": "LeeSin",
    "championName": "Lee Sin",
    "abilityName": "Sonic Wave / Resonating Strike",
    "description": "Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds.<br>Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing physical damage based on the target's missing Health.",
    "type": "Q",
    "imageId": "LeeSinQOne.png",
    "difficulty": "Medium"
  },
  {
    "id": "LeeSin_W",
    "championId": "LeeSin",
    "championName": "Lee Sin",
    "abilityName": "Safeguard / Iron Will",
    "description": "Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will.<br>Iron Will: Lee Sin's intense training allows him to thrive in battle. Lee Sin gains Life Steal and Spell Vamp.",
    "type": "W",
    "imageId": "LeeSinWOne.png",
    "difficulty": "Medium"
  },
  {
    "id": "LeeSin_E",
    "championId": "LeeSin",
    "championName": "Lee Sin",
    "abilityName": "Tempest / Cripple",
    "description": "Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple.<br>Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Move Speed. Move Speed recovers gradually over the duration.",
    "type": "E",
    "imageId": "LeeSinEOne.png",
    "difficulty": "Medium"
  },
  {
    "id": "LeeSin_R",
    "championId": "LeeSin",
    "championName": "Lee Sin",
    "abilityName": "Dragon's Rage",
    "description": "Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.",
    "type": "R",
    "imageId": "LeeSinR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Leona_Passive",
    "championId": "Leona",
    "championName": "Leona",
    "abilityName": "Sunlight",
    "description": "Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.",
    "type": "Passive",
    "imageId": "LeonaSunlight.png",
    "difficulty": "Hard"
  },
  {
    "id": "Leona_Q",
    "championId": "Leona",
    "championName": "Leona",
    "abilityName": "Shield of Daybreak",
    "description": "Leona uses her shield to perform her next basic attack, dealing bonus magic damage and stunning the target.",
    "type": "Q",
    "imageId": "LeonaShieldOfDaybreak.png",
    "difficulty": "Medium"
  },
  {
    "id": "Leona_W",
    "championId": "Leona",
    "championName": "Leona",
    "abilityName": "Eclipse",
    "description": "Leona raises her shield to gain Damage Reduction, Armor, and Magic Resist. When the duration first ends, if there are nearby enemies, she will deal magic damage to them and prolong the duration of the effect.",
    "type": "W",
    "imageId": "LeonaSolarBarrier.png",
    "difficulty": "Medium"
  },
  {
    "id": "Leona_E",
    "championId": "Leona",
    "championName": "Leona",
    "abilityName": "Zenith Blade",
    "description": "Leona projects a solar image of her sword, dealing magic damage to all enemies in a line. When the image fades, the last enemy champion struck will be briefly immobilized and Leona will dash to them.",
    "type": "E",
    "imageId": "LeonaZenithBlade.png",
    "difficulty": "Medium"
  },
  {
    "id": "Leona_R",
    "championId": "Leona",
    "championName": "Leona",
    "abilityName": "Solar Flare",
    "description": "Leona calls down a beam of solar energy, dealing damage to enemies in an area. Enemies in the center of the area are stunned, while enemies on the outside are slowed.",
    "type": "R",
    "imageId": "LeonaSolarFlare.png",
    "difficulty": "Easy"
  },
  {
    "id": "Lillia_Passive",
    "championId": "Lillia",
    "championName": "Lillia",
    "abilityName": "Dream-Laden Bough",
    "description": "Hitting a champion or monster with a skill will deal additional max Health damage over time.",
    "type": "Passive",
    "imageId": "Lillia_Icon_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Lillia_Q",
    "championId": "Lillia",
    "championName": "Lillia",
    "abilityName": "Blooming Blows",
    "description": "Passively, Lillia gains stacking Move Speed when hitting enemies with spells. She can activate this to deal magic damage to nearby enemies, dealing extra true damage on the edge.",
    "type": "Q",
    "imageId": "LilliaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lillia_W",
    "championId": "Lillia",
    "championName": "Lillia",
    "abilityName": "Watch Out! Eep!",
    "description": "Lillia deals damage in a nearby area, dealing heavy damage in the center.",
    "type": "W",
    "imageId": "LilliaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lillia_E",
    "championId": "Lillia",
    "championName": "Lillia",
    "abilityName": "Swirlseed",
    "description": "Lillia hurls a seed that damages and slows those it lands on. If it doesn't hit anything, it will continue rolling until it hits a wall or target.",
    "type": "E",
    "imageId": "LilliaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lillia_R",
    "championId": "Lillia",
    "championName": "Lillia",
    "abilityName": "Lilting Lullaby",
    "description": "Lillia causes all enemies with Dream Dust on them to become Drowsy before falling asleep. Those enemies will take extra damage on being forcibly woken up.",
    "type": "R",
    "imageId": "LilliaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Lissandra_Passive",
    "championId": "Lissandra",
    "championName": "Lissandra",
    "abilityName": "Iceborn Subjugation",
    "description": "When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets.",
    "type": "Passive",
    "imageId": "Lissandra_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Lissandra_Q",
    "championId": "Lissandra",
    "championName": "Lissandra",
    "abilityName": "Ice Shard",
    "description": "Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Move Speed. Shards pass through the target, dealing the same damage to other enemies hit.",
    "type": "Q",
    "imageId": "LissandraQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lissandra_W",
    "championId": "Lissandra",
    "championName": "Lissandra",
    "abilityName": "Ring of Frost",
    "description": "Freezes nearby enemies in ice, dealing magic damage and rooting them.",
    "type": "W",
    "imageId": "LissandraW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lissandra_E",
    "championId": "Lissandra",
    "championName": "Lissandra",
    "abilityName": "Glacial Path",
    "description": "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
    "type": "E",
    "imageId": "LissandraE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lissandra_R",
    "championId": "Lissandra",
    "championName": "Lissandra",
    "abilityName": "Frozen Tomb",
    "description": "If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Move Speed.",
    "type": "R",
    "imageId": "LissandraR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Lucian_Passive",
    "championId": "Lucian",
    "championName": "Lucian",
    "abilityName": "Lightslinger",
    "description": "Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is healed or shielded by an ally, or when a nearby enemy Champion is immobilized, his next 2 basic attacks will deal bonus magic damage.",
    "type": "Passive",
    "imageId": "Lucian_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Lucian_Q",
    "championId": "Lucian",
    "championName": "Lucian",
    "abilityName": "Piercing Light",
    "description": "Lucian shoots a bolt of piercing light through a target.",
    "type": "Q",
    "imageId": "LucianQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lucian_W",
    "championId": "Lucian",
    "championName": "Lucian",
    "abilityName": "Ardent Blaze",
    "description": "Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Move Speed for attacking marked enemies.",
    "type": "W",
    "imageId": "LucianW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lucian_E",
    "championId": "Lucian",
    "championName": "Lucian",
    "abilityName": "Relentless Pursuit",
    "description": "Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown.",
    "type": "E",
    "imageId": "LucianE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lucian_R",
    "championId": "Lucian",
    "championName": "Lucian",
    "abilityName": "The Culling",
    "description": "Lucian unleashes a torrent of shots from his weapons.",
    "type": "R",
    "imageId": "LucianR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Lulu_Passive",
    "championId": "Lulu",
    "championName": "Lulu",
    "abilityName": "Pix, Faerie Companion",
    "description": "Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units.",
    "type": "Passive",
    "imageId": "Lulu_PixFaerieCompanion.png",
    "difficulty": "Hard"
  },
  {
    "id": "Lulu_Q",
    "championId": "Lulu",
    "championName": "Lulu",
    "abilityName": "Glitterlance",
    "description": "Pix and Lulu each fire a bolt of magical energy that damages and heavily slows all enemies it hits.",
    "type": "Q",
    "imageId": "LuluQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lulu_W",
    "championId": "Lulu",
    "championName": "Lulu",
    "abilityName": "Whimsy",
    "description": "If cast on an ally, grants them Attack Speed and Move Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells.",
    "type": "W",
    "imageId": "LuluW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lulu_E",
    "championId": "Lulu",
    "championName": "Lulu",
    "abilityName": "Help, Pix!",
    "description": "If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy.",
    "type": "E",
    "imageId": "LuluE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lulu_R",
    "championId": "Lulu",
    "championName": "Lulu",
    "abilityName": "Wild Growth",
    "description": "Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies.",
    "type": "R",
    "imageId": "LuluR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Lux_Passive",
    "championId": "Lux",
    "championName": "Lux",
    "abilityName": "Illumination",
    "description": "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.",
    "type": "Passive",
    "imageId": "LuxIlluminatingFraulein.png",
    "difficulty": "Hard"
  },
  {
    "id": "Lux_Q",
    "championId": "Lux",
    "championName": "Lux",
    "abilityName": "Light Binding",
    "description": "Lux releases a sphere of light that binds and deals damage to up to two enemy units.",
    "type": "Q",
    "imageId": "LuxLightBinding.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lux_W",
    "championId": "Lux",
    "championName": "Lux",
    "abilityName": "Prismatic Barrier",
    "description": "Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.",
    "type": "W",
    "imageId": "LuxPrismaticWave.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lux_E",
    "championId": "Lux",
    "championName": "Lux",
    "abilityName": "Lucent Singularity",
    "description": "Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.",
    "type": "E",
    "imageId": "LuxLightStrikeKugel.png",
    "difficulty": "Medium"
  },
  {
    "id": "Lux_R",
    "championId": "Lux",
    "championName": "Lux",
    "abilityName": "Final Spark",
    "description": "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.",
    "type": "R",
    "imageId": "LuxR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Malphite_Passive",
    "championId": "Malphite",
    "championName": "Malphite",
    "abilityName": "Granite Shield",
    "description": "Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for a few seconds, this effect recharges.",
    "type": "Passive",
    "imageId": "Malphite_GraniteShield.png",
    "difficulty": "Hard"
  },
  {
    "id": "Malphite_Q",
    "championId": "Malphite",
    "championName": "Malphite",
    "abilityName": "Seismic Shard",
    "description": "Malphite sends a shard of the earth through the ground at his foe, dealing damage upon impact and stealing Move Speed for 3 seconds.",
    "type": "Q",
    "imageId": "SeismicShard.png",
    "difficulty": "Medium"
  },
  {
    "id": "Malphite_W",
    "championId": "Malphite",
    "championName": "Malphite",
    "abilityName": "Thunderclap",
    "description": "Malphite attacks with such force that it creates a sonic boom. For the next few seconds, his attacks create aftershocks in front of him.",
    "type": "W",
    "imageId": "Obduracy.png",
    "difficulty": "Medium"
  },
  {
    "id": "Malphite_E",
    "championId": "Malphite",
    "championName": "Malphite",
    "abilityName": "Ground Slam",
    "description": "Malphite slams the ground, sending out a shockwave that deals magic damage based on his Armor and reduces the Attack Speed of enemies for a short duration.",
    "type": "E",
    "imageId": "Landslide.png",
    "difficulty": "Medium"
  },
  {
    "id": "Malphite_R",
    "championId": "Malphite",
    "championName": "Malphite",
    "abilityName": "Unstoppable Force",
    "description": "Malphite launches himself to a location at high speed, damaging enemies and knocking them into the air.",
    "type": "R",
    "imageId": "UFSlash.png",
    "difficulty": "Easy"
  },
  {
    "id": "Malzahar_Passive",
    "championId": "Malzahar",
    "championName": "Malzahar",
    "abilityName": "Void Shift",
    "description": "When he hasn't recently taken damage or been crowd controlled, Malzahar gains massive damage reduction and crowd control immunity, lingering for a short period after taking damage.",
    "type": "Passive",
    "imageId": "Malzahar_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Malzahar_Q",
    "championId": "Malzahar",
    "championName": "Malzahar",
    "abilityName": "Call of the Void",
    "description": "Malzahar opens up two portals to the Void. After a short delay, they fire projectiles that deal Magic Damage and silence enemy champions.",
    "type": "Q",
    "imageId": "MalzaharQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Malzahar_W",
    "championId": "Malzahar",
    "championName": "Malzahar",
    "abilityName": "Void Swarm",
    "description": "Malzahar summons Voidlings to attack nearby enemies.",
    "type": "W",
    "imageId": "MalzaharW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Malzahar_E",
    "championId": "Malzahar",
    "championName": "Malzahar",
    "abilityName": "Malefic Visions",
    "description": "Malzahar infects his target's mind with cruel visions of their demise, dealing damage over time. Using Malzahar's other spells on the target will refresh the visions.<br><br>If the target dies while afflicted by the visions, they pass on to a nearby enemy unit and Malzahar gains Mana. Malzahar's Voidlings are attracted to affected units.",
    "type": "E",
    "imageId": "MalzaharE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Malzahar_R",
    "championId": "Malzahar",
    "championName": "Malzahar",
    "abilityName": "Nether Grasp",
    "description": "Malzahar channels the essence of the Void to suppress an enemy champion over a zone of damaging negative energy.",
    "type": "R",
    "imageId": "MalzaharR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Maokai_Passive",
    "championId": "Maokai",
    "championName": "Maokai",
    "abilityName": "Sap Magic",
    "description": "Maokai's basic attack also heals him and deals additional damage on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced.",
    "type": "Passive",
    "imageId": "Maokai_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Maokai_Q",
    "championId": "Maokai",
    "championName": "Maokai",
    "abilityName": "Bramble Smash",
    "description": "Maokai knocks back nearby enemies with a shockwave, dealing magic damage and slowing them.",
    "type": "Q",
    "imageId": "MaokaiQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Maokai_W",
    "championId": "Maokai",
    "championName": "Maokai",
    "abilityName": "Twisted Advance",
    "description": "Maokai contorts into a mass of moving roots, becoming untargetable and dashing to the target. Upon arrival, he roots the target.",
    "type": "W",
    "imageId": "MaokaiW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Maokai_E",
    "championId": "Maokai",
    "championName": "Maokai",
    "abilityName": "Sapling Toss",
    "description": "Maokai flings a sapling to the target area to stand guard. More effective in brush.",
    "type": "E",
    "imageId": "MaokaiE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Maokai_R",
    "championId": "Maokai",
    "championName": "Maokai",
    "abilityName": "Nature's Grasp",
    "description": "Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, damaging and rooting any enemies in the path.",
    "type": "R",
    "imageId": "MaokaiR.png",
    "difficulty": "Easy"
  },
  {
    "id": "MasterYi_Passive",
    "championId": "MasterYi",
    "championName": "Master Yi",
    "abilityName": "Double Strike",
    "description": "Every few consecutive basic attack, Master Yi strikes twice.",
    "type": "Passive",
    "imageId": "MasterYi_Passive1.png",
    "difficulty": "Hard"
  },
  {
    "id": "MasterYi_Q",
    "championId": "MasterYi",
    "championName": "Master Yi",
    "abilityName": "Alpha Strike",
    "description": "Master Yi teleports across the battlefield with blinding speed, dealing physical damage to multiple units in his path, while simultaneously becoming untargetable. Alpha Strike can critically strike and deals bonus physical damage to monsters. Basic attacks reduce Alpha Strike's cooldown.",
    "type": "Q",
    "imageId": "AlphaStrike.png",
    "difficulty": "Medium"
  },
  {
    "id": "MasterYi_W",
    "championId": "MasterYi",
    "championName": "Master Yi",
    "abilityName": "Meditate",
    "description": "Master Yi rejuvenates his body by focus of mind, restoring Health and taking reduced damage for a short time. In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.",
    "type": "W",
    "imageId": "Meditate.png",
    "difficulty": "Medium"
  },
  {
    "id": "MasterYi_E",
    "championId": "MasterYi",
    "championName": "Master Yi",
    "abilityName": "Wuju Style",
    "description": "Grants bonus true damage on basic attacks.",
    "type": "E",
    "imageId": "WujuStyle.png",
    "difficulty": "Medium"
  },
  {
    "id": "MasterYi_R",
    "championId": "MasterYi",
    "championName": "Master Yi",
    "abilityName": "Highlander",
    "description": "Master Yi moves with unparalleled agility, temporarily increasing his Move Speed and Attack Speed as well as making him immune to all slowing effects. While active, Champion kills or assists extend Highlander's duration. Passively reduces cooldown for his other abilities on a kill or assist.",
    "type": "R",
    "imageId": "Highlander.png",
    "difficulty": "Easy"
  },
  {
    "id": "Milio_Passive",
    "championId": "Milio",
    "championName": "Milio",
    "abilityName": "Fired Up!",
    "description": "Milio's abilities enchant allies on touch, making their next damage deal a burst of extra damage and burn the target.",
    "type": "Passive",
    "imageId": "Milio_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Milio_Q",
    "championId": "Milio",
    "championName": "Milio",
    "abilityName": "Ultra Mega Fire Kick",
    "description": "Kick a ball that knocks back an enemy. The ball launches upward on hit and falls toward the enemy, damaging and slowing enemies in the area upon impact.",
    "type": "Q",
    "imageId": "MilioQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Milio_W",
    "championId": "Milio",
    "championName": "Milio",
    "abilityName": "Cozy Campfire",
    "description": "Create an empowering zone that heals allies and increases attack range to those inside. The zone follows the ally nearest to the cast point.",
    "type": "W",
    "imageId": "MilioW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Milio_E",
    "championId": "Milio",
    "championName": "Milio",
    "abilityName": "Warm Hugs",
    "description": "Milio tosses a shield to an ally, temporarily increasing their movement speed. This ability has 2 charges.",
    "type": "E",
    "imageId": "MilioE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Milio_R",
    "championId": "Milio",
    "championName": "Milio",
    "abilityName": "Breath of Life",
    "description": "Milio unleashes a wave of soothing flames that heal and remove crowd control effects from allies in range.",
    "type": "R",
    "imageId": "MilioR.png",
    "difficulty": "Easy"
  },
  {
    "id": "MissFortune_Passive",
    "championId": "MissFortune",
    "championName": "Miss Fortune",
    "abilityName": "Love Tap",
    "description": "Miss Fortune deals bonus physical damage whenever she basic attacks a new target.",
    "type": "Passive",
    "imageId": "MissFortune_W.png",
    "difficulty": "Hard"
  },
  {
    "id": "MissFortune_Q",
    "championId": "MissFortune",
    "championName": "Miss Fortune",
    "abilityName": "Double Up",
    "description": "Miss Fortune fires a bullet at an enemy, damaging them and a target behind them. Both strikes can also apply Love Tap.",
    "type": "Q",
    "imageId": "MissFortuneRicochetShot.png",
    "difficulty": "Medium"
  },
  {
    "id": "MissFortune_W",
    "championId": "MissFortune",
    "championName": "Miss Fortune",
    "abilityName": "Strut",
    "description": "Miss Fortune passively gains Move Speed when not attacked. This ability can be activated to grant bonus Attack Speed for a short duration. While it's on cooldown, Love Taps reduce the remaining cooldown of Strut.",
    "type": "W",
    "imageId": "MissFortuneViciousStrikes.png",
    "difficulty": "Medium"
  },
  {
    "id": "MissFortune_E",
    "championId": "MissFortune",
    "championName": "Miss Fortune",
    "abilityName": "Make It Rain",
    "description": "Miss Fortune reveals an area with a flurry of bullets, dealing waves of damage to opponents and slowing them.",
    "type": "E",
    "imageId": "MissFortuneScattershot.png",
    "difficulty": "Medium"
  },
  {
    "id": "MissFortune_R",
    "championId": "MissFortune",
    "championName": "Miss Fortune",
    "abilityName": "Bullet Time",
    "description": "Miss Fortune channels a barrage of bullets into a cone in front of her, dealing large amounts of damage to enemies. Each wave of Bullet Time can critically strike",
    "type": "R",
    "imageId": "MissFortuneBulletTime.png",
    "difficulty": "Easy"
  },
  {
    "id": "MonkeyKing_Passive",
    "championId": "MonkeyKing",
    "championName": "Wukong",
    "abilityName": "Stone Skin",
    "description": "Wukong gains stacking armor and max health regeneration while fighting champions and monsters.",
    "type": "Passive",
    "imageId": "MonkeyKingStoneSkin.png",
    "difficulty": "Hard"
  },
  {
    "id": "MonkeyKing_Q",
    "championId": "MonkeyKing",
    "championName": "Wukong",
    "abilityName": "Crushing Blow",
    "description": "Wukong's next attack gains attack range, deals bonus damage, and reduces the target's armor for a few seconds.",
    "type": "Q",
    "imageId": "MonkeyKingDoubleAttack.png",
    "difficulty": "Medium"
  },
  {
    "id": "MonkeyKing_W",
    "championId": "MonkeyKing",
    "championName": "Wukong",
    "abilityName": "Warrior Trickster",
    "description": "Wukong becomes <font color='#91d7ee'>Invisible</font> and dashes in a direction, leaving behind a clone that will attack nearby enemies.",
    "type": "W",
    "imageId": "MonkeyKingDecoy.png",
    "difficulty": "Medium"
  },
  {
    "id": "MonkeyKing_E",
    "championId": "MonkeyKing",
    "championName": "Wukong",
    "abilityName": "Nimbus Strike",
    "description": "Wukong dashes to a targeted enemy and sends out images to attack enemies near his target, dealing damage to each enemy struck.",
    "type": "E",
    "imageId": "MonkeyKingNimbus.png",
    "difficulty": "Medium"
  },
  {
    "id": "MonkeyKing_R",
    "championId": "MonkeyKing",
    "championName": "Wukong",
    "abilityName": "Cyclone",
    "description": "Wukong's extends his staff and spins it around repeatedly, gaining Move Speed.<br><br>Enemies struck take damage and are knocked up.",
    "type": "R",
    "imageId": "MonkeyKingSpinToWin.png",
    "difficulty": "Easy"
  },
  {
    "id": "Mordekaiser_Passive",
    "championId": "Mordekaiser",
    "championName": "Mordekaiser",
    "abilityName": "Darkness Rise",
    "description": "Mordekaiser gains a powerful damage aura and Move Speed after landing 3 attacks or spells against champions or monsters.",
    "type": "Passive",
    "imageId": "MordekaiserPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Mordekaiser_Q",
    "championId": "Mordekaiser",
    "championName": "Mordekaiser",
    "abilityName": "Obliterate",
    "description": "Mordekaiser smashes the ground with his mace dealing damage to each enemy struck. Damage is increased when hitting a single enemy.",
    "type": "Q",
    "imageId": "MordekaiserQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Mordekaiser_W",
    "championId": "Mordekaiser",
    "championName": "Mordekaiser",
    "abilityName": "Indestructible",
    "description": "Mordekaiser stores damage he deals and takes to create a shield. He may consume the shield to heal.",
    "type": "W",
    "imageId": "MordekaiserW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Mordekaiser_E",
    "championId": "Mordekaiser",
    "championName": "Mordekaiser",
    "abilityName": "Death's Grasp",
    "description": "Mordekaiser pulls all enemies in an area.",
    "type": "E",
    "imageId": "MordekaiserE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Mordekaiser_R",
    "championId": "Mordekaiser",
    "championName": "Mordekaiser",
    "abilityName": "Realm of Death",
    "description": "Mordekaiser drags his victim to a different dimension with him and steals a portion of their stats. If he kills them, he keeps the stats until the victim respawns.",
    "type": "R",
    "imageId": "MordekaiserR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Morgana_Passive",
    "championId": "Morgana",
    "championName": "Morgana",
    "abilityName": "Soul Siphon",
    "description": "Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters.",
    "type": "Passive",
    "imageId": "FallenAngel_Empathize.png",
    "difficulty": "Hard"
  },
  {
    "id": "Morgana_Q",
    "championId": "Morgana",
    "championName": "Morgana",
    "abilityName": "Dark Binding",
    "description": "Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage. ",
    "type": "Q",
    "imageId": "MorganaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Morgana_W",
    "championId": "Morgana",
    "championName": "Morgana",
    "abilityName": "Tormented Shadow",
    "description": "Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are.",
    "type": "W",
    "imageId": "MorganaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Morgana_E",
    "championId": "Morgana",
    "championName": "Morgana",
    "abilityName": "Black Shield",
    "description": "Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken.",
    "type": "E",
    "imageId": "MorganaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Morgana_R",
    "championId": "Morgana",
    "championName": "Morgana",
    "abilityName": "Soul Shackles",
    "description": "Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining Move Speed. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them.",
    "type": "R",
    "imageId": "MorganaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Naafiri_Passive",
    "championId": "Naafiri",
    "championName": "Naafiri",
    "abilityName": "We Are More",
    "description": "Naafiri spawns packmates that attack the targets of her attacks and abilities.",
    "type": "Passive",
    "imageId": "Icons_Naafiri_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Naafiri_Q",
    "championId": "Naafiri",
    "championName": "Naafiri",
    "abilityName": "Darkin Daggers",
    "description": "Naafiri hurls up to two daggers, each inflicting bleed, or each inflicting bonus damage if the target is already bleeding.<br><br>Packmates leap to attack champions hit by this skill.<br>",
    "type": "Q",
    "imageId": "NaafiriQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Naafiri_W",
    "championId": "Naafiri",
    "championName": "Naafiri",
    "abilityName": "Hounds' Pursuit",
    "description": "Naafiri and her packmates dash at an enemy, colliding with the first champion hit and dealing damage.",
    "type": "W",
    "imageId": "NaafiriW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Naafiri_E",
    "championId": "Naafiri",
    "championName": "Naafiri",
    "abilityName": "Eviscerate",
    "description": "Naafiri dashes and damages enemies in an area around her, recalling her packmates and fully healing them.",
    "type": "E",
    "imageId": "NaafiriE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Naafiri_R",
    "championId": "Naafiri",
    "championName": "Naafiri",
    "abilityName": "The Call of the Pack",
    "description": "Naafiri empowers her pack and spawns additional packmates, instantly receiving a burst of speed and vision and gaining a shield the first time she hits another champion.<br><br>After killing another champion for the first time, all effects are refreshed.<br>",
    "type": "R",
    "imageId": "NaafiriR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nami_Passive",
    "championId": "Nami",
    "championName": "Nami",
    "abilityName": "Surging Tides",
    "description": "When Nami's Abilities hit allied champions they gain Move Speed for a short duration.",
    "type": "Passive",
    "imageId": "NamiPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nami_Q",
    "championId": "Nami",
    "championName": "Nami",
    "abilityName": "Aqua Prison",
    "description": "Sends a bubble to a target area, dealing damage and stunning all enemies on impact.",
    "type": "Q",
    "imageId": "NamiQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nami_W",
    "championId": "Nami",
    "championName": "Nami",
    "abilityName": "Ebb and Flow",
    "description": "Unleashes a stream of water that bounces back and forth between allied and enemy champions, healing allies and damaging enemies.",
    "type": "W",
    "imageId": "NamiW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nami_E",
    "championId": "Nami",
    "championName": "Nami",
    "abilityName": "Tidecaller's Blessing",
    "description": "Empowers an allied champion for a short duration. The ally's basic attacks and spells deal bonus magic damage and slow the target.",
    "type": "E",
    "imageId": "NamiE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nami_R",
    "championId": "Nami",
    "championName": "Nami",
    "abilityName": "Tidal Wave",
    "description": "Summons a massive Tidal Wave that knocks up, slows, and damages enemies. Allies hit gain double the effect of Surging Tides.",
    "type": "R",
    "imageId": "NamiR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nasus_Passive",
    "championId": "Nasus",
    "championName": "Nasus",
    "abilityName": "Soul Eater",
    "description": "Nasus drains his foe's spiritual energy, giving him bonus Life Steal.",
    "type": "Passive",
    "imageId": "Nasus_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nasus_Q",
    "championId": "Nasus",
    "championName": "Nasus",
    "abilityName": "Siphoning Strike",
    "description": "Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.",
    "type": "Q",
    "imageId": "NasusQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nasus_W",
    "championId": "Nasus",
    "championName": "Nasus",
    "abilityName": "Wither",
    "description": "Nasus ages an enemy champion, decelerating their Move Speed and Attack Speed over time.",
    "type": "W",
    "imageId": "NasusW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nasus_E",
    "championId": "Nasus",
    "championName": "Nasus",
    "abilityName": "Spirit Fire",
    "description": "Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.",
    "type": "E",
    "imageId": "NasusE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nasus_R",
    "championId": "Nasus",
    "championName": "Nasus",
    "abilityName": "Fury of the Sands",
    "description": "Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance.",
    "type": "R",
    "imageId": "NasusR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nautilus_Passive",
    "championId": "Nautilus",
    "championName": "Nautilus",
    "abilityName": "Staggering Blow",
    "description": "Nautilus' first Attack against a target deals increased physical damage and roots them briefly.",
    "type": "Passive",
    "imageId": "Nautilus_StaggeringBlow.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nautilus_Q",
    "championId": "Nautilus",
    "championName": "Nautilus",
    "abilityName": "Dredge Line",
    "description": "Nautilus hurls his anchor forward.  Colliding with an enemy pulls them and Nautilus together, dealing magic damage.  Colliding with terrain pulls Nautilus towards it.",
    "type": "Q",
    "imageId": "NautilusAnchorDrag.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nautilus_W",
    "championId": "Nautilus",
    "championName": "Nautilus",
    "abilityName": "Titan's Wrath",
    "description": "Nautilus gains a temporary Shield.  While it persists, his Attacks deal damage over time to his target and surrounding enemies.",
    "type": "W",
    "imageId": "NautilusPiercingGaze.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nautilus_E",
    "championId": "Nautilus",
    "championName": "Nautilus",
    "abilityName": "Riptide",
    "description": "Nautilus creates three exploding waves around himself. Each explosion damages and slows enemies.",
    "type": "E",
    "imageId": "NautilusSplashZone.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nautilus_R",
    "championId": "Nautilus",
    "championName": "Nautilus",
    "abilityName": "Depth Charge",
    "description": "Nautilus fires a shockwave into the earth that chases an opponent. This shockwave rips up the earth above it, knocking enemies into the air. When it reaches the opponent, the shockwave erupts, knocking his target into the air and stunning them.",
    "type": "R",
    "imageId": "NautilusGrandLine.png",
    "difficulty": "Easy"
  },
  {
    "id": "Neeko_Passive",
    "championId": "Neeko",
    "championName": "Neeko",
    "abilityName": "Inherent Glamour",
    "description": "Neeko can look like an ally champion. Taking damage from enemy Champions or casting damaging spells breaks the disguise.",
    "type": "Passive",
    "imageId": "Neeko_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Neeko_Q",
    "championId": "Neeko",
    "championName": "Neeko",
    "abilityName": "Blooming Burst",
    "description": "Neeko throws a seed dealing magic damage. The seed blooms again on hitting champions or killing units.",
    "type": "Q",
    "imageId": "NeekoQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Neeko_W",
    "championId": "Neeko",
    "championName": "Neeko",
    "abilityName": "Shapesplitter",
    "description": "Neeko passively deals bonus magic damage every third attack. Neeko can activate to send a clone in a direction.",
    "type": "W",
    "imageId": "NeekoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Neeko_E",
    "championId": "Neeko",
    "championName": "Neeko",
    "abilityName": "Tangle-Barbs",
    "description": "Neeko slings a tangle that damage and root everything it passes through. If the tangle kills an enemy or passes through a champion, it becomes larger, faster, and roots for longer.",
    "type": "E",
    "imageId": "NeekoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Neeko_R",
    "championId": "Neeko",
    "championName": "Neeko",
    "abilityName": "Pop Blossom",
    "description": "After a short preparation, Neeko leaps into the air. Upon landing, nearby enemies are damaged and knocked up. The preparation is hidden if Neeko is disguised.",
    "type": "R",
    "imageId": "NeekoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nidalee_Passive",
    "championId": "Nidalee",
    "championName": "Nidalee",
    "abilityName": "Prowl",
    "description": "Moving through brush increases Nidalee's Move Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range.<br><br>Hitting champions or monsters with Javelin Toss or Bushwhack triggers a <font color='#FFF673'>Hunt</font>, granting <font color='#ee91d7'>True Sight</font> of them for 4 seconds. During this time, Nidalee gains 10% Move Speed (increased to 30% toward the <font color='#FFF673'>Hunted</font> target) and her Takedown and Pounce are enhanced against them.",
    "type": "Passive",
    "imageId": "Nidalee_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nidalee_Q",
    "championId": "Nidalee",
    "championName": "Nidalee",
    "abilityName": "Javelin Toss / Takedown",
    "description": "In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies.  As a cougar, her next attack will attempt to fatally wound her target, dealing more damage the less life they have.",
    "type": "Q",
    "imageId": "JavelinToss.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nidalee_W",
    "championId": "Nidalee",
    "championName": "Nidalee",
    "abilityName": "Bushwhack / Pounce",
    "description": "In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target. As a cougar, she jumps in a direction, dealing damage in an area where she lands.",
    "type": "W",
    "imageId": "Bushwhack.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nidalee_E",
    "championId": "Nidalee",
    "championName": "Nidalee",
    "abilityName": "Primal Surge / Swipe",
    "description": "In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration. As a cougar, she claws in a direction, dealing damage to enemies in front of her.",
    "type": "E",
    "imageId": "PrimalSurge.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nidalee_R",
    "championId": "Nidalee",
    "championName": "Nidalee",
    "abilityName": "Aspect Of The Cougar",
    "description": "Nidalee transforms into a cougar, gaining new abilities.",
    "type": "R",
    "imageId": "AspectOfTheCougar.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nilah_Passive",
    "championId": "Nilah",
    "championName": "Nilah",
    "abilityName": "Joy Unending",
    "description": "Nilah gains increased experience from last-hitting minions along with the ability to enhance and share nearby healing and shielding from her allies.",
    "type": "Passive",
    "imageId": "NIlahP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nilah_Q",
    "championId": "Nilah",
    "championName": "Nilah",
    "abilityName": "Formless Blade",
    "description": "With a snap of her whip-blade, Nilah damages any enemies she hits in a straight line in her chosen direction. This action extends her attack range for a short duration.",
    "type": "Q",
    "imageId": "NilahQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nilah_W",
    "championId": "Nilah",
    "championName": "Nilah",
    "abilityName": "Jubilant Veil",
    "description": "Nilah envelops herself in mist, increasing her movement speed and allowing her to gracefully dodge all incoming attacks. Any allies she touches during the mist's duration will also gain this effect.",
    "type": "W",
    "imageId": "NilahW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nilah_E",
    "championId": "Nilah",
    "championName": "Nilah",
    "abilityName": "Slipstream",
    "description": "Nilah enthusiastically dashes toward her target, dealing damage to any enemies she passes through on the way.",
    "type": "E",
    "imageId": "NilahE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nilah_R",
    "championId": "Nilah",
    "championName": "Nilah",
    "abilityName": "Apotheosis",
    "description": "Twirling her whip-blade in joyful exuberance, Nilah deals damage to enemies around her before pulling them closer with her weapon.",
    "type": "R",
    "imageId": "NilahR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nocturne_Passive",
    "championId": "Nocturne",
    "championName": "Nocturne",
    "abilityName": "Umbra Blades",
    "description": "Every few seconds, Nocturne's next attack strikes surrounding enemies for bonus physical damage and heals himself. <br><br>Nocturne's basic attacks reduce this cooldown.",
    "type": "Passive",
    "imageId": "Nocturne_UmbraBlades.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nocturne_Q",
    "championId": "Nocturne",
    "championName": "Nocturne",
    "abilityName": "Duskbringer",
    "description": "Nocturne throws a shadow blade that deals damage, leaves a Dusk Trail, and causes champions to leave a Dusk Trail. While on the trail, Nocturne can move through units and has increased Move Speed and Attack Damage.",
    "type": "Q",
    "imageId": "NocturneDuskbringer.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nocturne_W",
    "championId": "Nocturne",
    "championName": "Nocturne",
    "abilityName": "Shroud of Darkness",
    "description": "Nocturne empowers his blades, passively gaining Attack Speed. Activating Shroud of Darkness allows Nocturne to fade into the shadows, creating a magical barrier which blocks a single enemy ability and doubles his passive Attack Speed if successful.",
    "type": "W",
    "imageId": "NocturneShroudofDarkness.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nocturne_E",
    "championId": "Nocturne",
    "championName": "Nocturne",
    "abilityName": "Unspeakable Horror",
    "description": "Nocturne plants a nightmare into his target's mind, dealing damage each second and applying fear to the target if they do not get out of range by the end of the duration.",
    "type": "E",
    "imageId": "NocturneUnspeakableHorror.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nocturne_R",
    "championId": "Nocturne",
    "championName": "Nocturne",
    "abilityName": "Paranoia",
    "description": "Nocturne reduces the sight radius of all enemy champions and removes their ally vision in the process. He can then launch himself at a nearby enemy champion.",
    "type": "R",
    "imageId": "NocturneParanoia.png",
    "difficulty": "Easy"
  },
  {
    "id": "Nunu_Passive",
    "championId": "Nunu",
    "championName": "Nunu & Willump",
    "abilityName": "Call of the Freljord",
    "description": "Nunu increases the attack speed and Move Speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target.",
    "type": "Passive",
    "imageId": "NunuPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Nunu_Q",
    "championId": "Nunu",
    "championName": "Nunu & Willump",
    "abilityName": "Consume",
    "description": "Willump takes a bite out of a minion, monster, or enemy champion, dealing damage and healing himself.",
    "type": "Q",
    "imageId": "NunuQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nunu_W",
    "championId": "Nunu",
    "championName": "Nunu & Willump",
    "abilityName": "Biggest Snowball Ever!",
    "description": "Willump creates a snowball that grows in size and speed as he rolls it.  The snowball damages and knocks up enemies.",
    "type": "W",
    "imageId": "NunuW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nunu_E",
    "championId": "Nunu",
    "championName": "Nunu & Willump",
    "abilityName": "Snowball Barrage",
    "description": "Nunu throws multiple snowballs that damage enemies.  When he's finished, Willump roots any champions or large monsters that were hit by a snowball.",
    "type": "E",
    "imageId": "NunuE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Nunu_R",
    "championId": "Nunu",
    "championName": "Nunu & Willump",
    "abilityName": "Absolute Zero",
    "description": "Nunu & Willump create a powerful blizzard in an area that slows enemies and deals massive damage at the end.",
    "type": "R",
    "imageId": "NunuR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Olaf_Passive",
    "championId": "Olaf",
    "championName": "Olaf",
    "abilityName": "Berserker Rage",
    "description": "Olaf gains Attack Speed and Life Steal based on his missing Health.",
    "type": "Passive",
    "imageId": "Olaf_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Olaf_Q",
    "championId": "Olaf",
    "championName": "Olaf",
    "abilityName": "Undertow",
    "description": "Olaf throws an axe into the ground at a target location, dealing damage to enemies it passes through and reducing their Armor and Move Speed. If Olaf picks up the axe, the ability's cooldown is reset.",
    "type": "Q",
    "imageId": "OlafAxeThrowCast.png",
    "difficulty": "Medium"
  },
  {
    "id": "Olaf_W",
    "championId": "Olaf",
    "championName": "Olaf",
    "abilityName": "Tough It Out",
    "description": "Olaf's Attack Speed is increased and he gains a Shield.",
    "type": "W",
    "imageId": "OlafFrenziedStrikes.png",
    "difficulty": "Medium"
  },
  {
    "id": "Olaf_E",
    "championId": "Olaf",
    "championName": "Olaf",
    "abilityName": "Reckless Swing",
    "description": "Olaf attacks with such force that it deals true damage to his target and himself, refunding the Health cost if he destroys the target.",
    "type": "E",
    "imageId": "OlafRecklessStrike.png",
    "difficulty": "Medium"
  },
  {
    "id": "Olaf_R",
    "championId": "Olaf",
    "championName": "Olaf",
    "abilityName": "Ragnarok",
    "description": "Olaf passively gains increased armor and magic resist. He can activate this ability to become immune to disables for as long as he keeps attacking.",
    "type": "R",
    "imageId": "OlafRagnarok.png",
    "difficulty": "Easy"
  },
  {
    "id": "Orianna_Passive",
    "championId": "Orianna",
    "championName": "Orianna",
    "abilityName": "Clockwork Windup",
    "description": "Orianna's Attacks deal additional magic damage. This damage increases the more Orianna Attacks the same target.",
    "type": "Passive",
    "imageId": "OriannaPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Orianna_Q",
    "championId": "Orianna",
    "championName": "Orianna",
    "abilityName": "Command: Attack",
    "description": "Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.",
    "type": "Q",
    "imageId": "OrianaIzunaCommand.png",
    "difficulty": "Medium"
  },
  {
    "id": "Orianna_W",
    "championId": "Orianna",
    "championName": "Orianna",
    "abilityName": "Command: Dissonance",
    "description": "Orianna commands her Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.",
    "type": "W",
    "imageId": "OrianaDissonanceCommand.png",
    "difficulty": "Medium"
  },
  {
    "id": "Orianna_E",
    "championId": "Orianna",
    "championName": "Orianna",
    "abilityName": "Command: Protect",
    "description": "Orianna commands her Ball to attach to an allied champion, Shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.",
    "type": "E",
    "imageId": "OrianaRedactCommand.png",
    "difficulty": "Medium"
  },
  {
    "id": "Orianna_R",
    "championId": "Orianna",
    "championName": "Orianna",
    "abilityName": "Command: Shockwave",
    "description": "Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.",
    "type": "R",
    "imageId": "OrianaDetonateCommand.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ornn_Passive",
    "championId": "Ornn",
    "championName": "Ornn",
    "abilityName": "Living Forge",
    "description": "Ornn gains an additional bonus Armor and Magic Resist from all sources.<br><br>Ornn can spend gold to forge non-consumable items anywhere.<br><br>Additionally, he can create masterwork items for himself and for his allies.",
    "type": "Passive",
    "imageId": "OrnnP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ornn_Q",
    "championId": "Ornn",
    "championName": "Ornn",
    "abilityName": "Volcanic Rupture",
    "description": "Ornn slams the ground, sending out a fissure dealing damage and slowing enemies hit. After a small delay, a magma pillar forms at the end location.",
    "type": "Q",
    "imageId": "OrnnQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ornn_W",
    "championId": "Ornn",
    "championName": "Ornn",
    "abilityName": "Bellows Breath",
    "description": "Ornn advances, breathing fire. Enemies hit by the final gout of flame become Brittle.",
    "type": "W",
    "imageId": "OrnnW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ornn_E",
    "championId": "Ornn",
    "championName": "Ornn",
    "abilityName": "Searing Charge",
    "description": "Ornn charges, dealing damage to enemies he passes through. If Ornn collides with terrain while charging, the impact creates a shockwave around him which deals damage and knocks up enemies.",
    "type": "E",
    "imageId": "OrnnE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ornn_R",
    "championId": "Ornn",
    "championName": "Ornn",
    "abilityName": "Call of the Forge God",
    "description": "Ornn summons a massive elemental at a location which travels toward him with increasing speed. Enemies run over by the elemental take damage, are slowed and are made Brittle. Ornn can recast the ability to charge into the elemental, redirecting it in the direction he hits it, causing the elemental to affect any enemies it runs over to be knocked up, dealing the same damage and re-applying Brittle.",
    "type": "R",
    "imageId": "OrnnR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Pantheon_Passive",
    "championId": "Pantheon",
    "championName": "Pantheon",
    "abilityName": "Mortal Will",
    "description": "Every few spells or attacks, Pantheon's next spell is empowered.",
    "type": "Passive",
    "imageId": "Pantheon_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Pantheon_Q",
    "championId": "Pantheon",
    "championName": "Pantheon",
    "abilityName": "Comet Spear",
    "description": "Pantheon either thrusts his spear or throws his spear in the chosen direction.",
    "type": "Q",
    "imageId": "PantheonQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Pantheon_W",
    "championId": "Pantheon",
    "championName": "Pantheon",
    "abilityName": "Shield Vault",
    "description": "Pantheon dashes to a target, damaging and stunning them.",
    "type": "W",
    "imageId": "PantheonW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Pantheon_E",
    "championId": "Pantheon",
    "championName": "Pantheon",
    "abilityName": "Aegis Assault",
    "description": "Pantheon sets his shield, becoming invulnerable to damage from the front and striking repeatedly with his spear.",
    "type": "E",
    "imageId": "PantheonE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Pantheon_R",
    "championId": "Pantheon",
    "championName": "Pantheon",
    "abilityName": "Grand Starfall",
    "description": "Pantheon composes himself and then leaps into the air, landing at a chosen location as a comet.",
    "type": "R",
    "imageId": "PantheonR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Poppy_Passive",
    "championId": "Poppy",
    "championName": "Poppy",
    "abilityName": "Iron Ambassador",
    "description": "Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.",
    "type": "Passive",
    "imageId": "Poppy_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Poppy_Q",
    "championId": "Poppy",
    "championName": "Poppy",
    "abilityName": "Hammer Shock",
    "description": "Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.",
    "type": "Q",
    "imageId": "PoppyQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Poppy_W",
    "championId": "Poppy",
    "championName": "Poppy",
    "abilityName": "Steadfast Presence",
    "description": "Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to gain Move Speed and stop enemy dashes around her. If a dash is stopped, the enemy is slowed and grounded.",
    "type": "W",
    "imageId": "PoppyW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Poppy_E",
    "championId": "Poppy",
    "championName": "Poppy",
    "abilityName": "Heroic Charge",
    "description": "Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.",
    "type": "E",
    "imageId": "PoppyE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Poppy_R",
    "championId": "Poppy",
    "championName": "Poppy",
    "abilityName": "Keeper's Verdict",
    "description": "Poppy channels a hammer strike that knocks enemies very far away.",
    "type": "R",
    "imageId": "PoppyR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Pyke_Passive",
    "championId": "Pyke",
    "championName": "Pyke",
    "abilityName": "Gift of the Drowned Ones",
    "description": "When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD.",
    "type": "Passive",
    "imageId": "PykePassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Pyke_Q",
    "championId": "Pyke",
    "championName": "Pyke",
    "abilityName": "Bone Skewer",
    "description": "Pyke either stabs an enemy in front of him or pulls an enemy towards him.",
    "type": "Q",
    "imageId": "PykeQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Pyke_W",
    "championId": "Pyke",
    "championName": "Pyke",
    "abilityName": "Ghostwater Dive",
    "description": "Pyke enters Camouflage and gains significant Move Speed that decays over time.",
    "type": "W",
    "imageId": "PykeW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Pyke_E",
    "championId": "Pyke",
    "championName": "Pyke",
    "abilityName": "Phantom Undertow",
    "description": "Pyke dashes and leaves behind a phantom that will return to him, stunning enemy champions along its path.",
    "type": "E",
    "imageId": "PykeE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Pyke_R",
    "championId": "Pyke",
    "championName": "Pyke",
    "abilityName": "Death From Below",
    "description": "Pyke blinks to and executes low health enemies, allowing him to cast this spell again and granting additional gold to an ally who assists.",
    "type": "R",
    "imageId": "PykeR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Qiyana_Passive",
    "championId": "Qiyana",
    "championName": "Qiyana",
    "abilityName": "Royal Privilege",
    "description": "Qiyana's first basic attack or ability against each enemy deals bonus damage.",
    "type": "Passive",
    "imageId": "Qiyana_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Qiyana_Q",
    "championId": "Qiyana",
    "championName": "Qiyana",
    "abilityName": "Elemental Wrath / Edge of Ixtal",
    "description": "Qiyana swings her weapon, dealing damage with a bonus effect based on her element.",
    "type": "Q",
    "imageId": "QiyanaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Qiyana_W",
    "championId": "Qiyana",
    "championName": "Qiyana",
    "abilityName": "Terrashape",
    "description": "Qiyana dashes to a location and enchants her weapon with an element. Her attacks and abilities deal bonus damage while her weapon is enchanted. ",
    "type": "W",
    "imageId": "QiyanaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Qiyana_E",
    "championId": "Qiyana",
    "championName": "Qiyana",
    "abilityName": "Audacity",
    "description": "Qiyana dashes to an enemy, damaging them.",
    "type": "E",
    "imageId": "QiyanaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Qiyana_R",
    "championId": "Qiyana",
    "championName": "Qiyana",
    "abilityName": "Supreme Display of Talent",
    "description": "Qiyana sends out a shockwave that detonates whatever elements she hits with it, stunning and damaging nearby enemies.",
    "type": "R",
    "imageId": "QiyanaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Quinn_Passive",
    "championId": "Quinn",
    "championName": "Quinn",
    "abilityName": "Harrier",
    "description": "Valor, Quinn's Demacian eagle, periodically marks enemies as <font color='#FFF673'>Vulnerable</font>. Quinn's first basic attack against <font color='#FFF673'>Vulnerable</font> targets will deal bonus physical damage.",
    "type": "Passive",
    "imageId": "Quinn_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Quinn_Q",
    "championId": "Quinn",
    "championName": "Quinn",
    "abilityName": "Blinding Assault",
    "description": "Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.",
    "type": "Q",
    "imageId": "QuinnQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Quinn_W",
    "championId": "Quinn",
    "championName": "Quinn",
    "abilityName": "Heightened Senses",
    "description": "Passively grants Quinn Attack Speed and Move Speed after she attacks a <font color='#FFF673'>Vulnerable</font> target. Activate to have Valor reveal a large area nearby.",
    "type": "W",
    "imageId": "QuinnW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Quinn_E",
    "championId": "Quinn",
    "championName": "Quinn",
    "abilityName": "Vault",
    "description": "Quinn dashes to an enemy, dealing physical damage and slowing the target's Move Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.",
    "type": "E",
    "imageId": "QuinnE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Quinn_R",
    "championId": "Quinn",
    "championName": "Quinn",
    "abilityName": "Behind Enemy Lines",
    "description": "Quinn and Valor team up to fly around at great speed.  Ending the ability casts Skystrike, which deals damage to nearby enemies and marks champions as Vulnerable.",
    "type": "R",
    "imageId": "QuinnR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Rakan_Passive",
    "championId": "Rakan",
    "championName": "Rakan",
    "abilityName": "Fey Feathers",
    "description": "Rakan periodically gains a shield.",
    "type": "Passive",
    "imageId": "Rakan_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Rakan_Q",
    "championId": "Rakan",
    "championName": "Rakan",
    "abilityName": "Gleaming Quill",
    "description": "Flings a magical feather that deals magic damage. Striking a champion or epic monster enables Rakan to heal his allies.",
    "type": "Q",
    "imageId": "RakanQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rakan_W",
    "championId": "Rakan",
    "championName": "Rakan",
    "abilityName": "Grand Entrance",
    "description": "Dashes to a location, knocking up nearby enemies on arrival.",
    "type": "W",
    "imageId": "RakanW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rakan_E",
    "championId": "Rakan",
    "championName": "Rakan",
    "abilityName": "Battle Dance",
    "description": "Flies to an allied champion granting them a shield. Can be re-cast for free for a short duration.",
    "type": "E",
    "imageId": "RakanE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rakan_R",
    "championId": "Rakan",
    "championName": "Rakan",
    "abilityName": "The Quickness",
    "description": "Gains Move Speed, charming and dealing magic damage to enemies touched.",
    "type": "R",
    "imageId": "RakanR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Rammus_Passive",
    "championId": "Rammus",
    "championName": "Rammus",
    "abilityName": "Spiked Shell",
    "description": "Rammus' basic attacks deal bonus magic damage, scaling with his Armor.",
    "type": "Passive",
    "imageId": "Armordillo_ScavengeArmor.png",
    "difficulty": "Hard"
  },
  {
    "id": "Rammus_Q",
    "championId": "Rammus",
    "championName": "Rammus",
    "abilityName": "Powerball",
    "description": "Rammus accelerates in a ball towards his enemies, dealing damage and slowing targets affected by the impact.",
    "type": "Q",
    "imageId": "PowerBall.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rammus_W",
    "championId": "Rammus",
    "championName": "Rammus",
    "abilityName": "Defensive Ball Curl",
    "description": "Rammus goes into a defensive formation, vastly increasing his Armor and Magic Resistance, amplifying Spiked Shells' damage, and returning damage to enemies that basic attack him.",
    "type": "W",
    "imageId": "DefensiveBallCurl.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rammus_E",
    "championId": "Rammus",
    "championName": "Rammus",
    "abilityName": "Frenzying Taunt",
    "description": "Rammus taunts an enemy champion or monster into a reckless assault against him. Additionally, he gains increased Attack Speed for a short time, but this bonus is extended by having any of his other spells active.",
    "type": "E",
    "imageId": "PuncturingTaunt.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rammus_R",
    "championId": "Rammus",
    "championName": "Rammus",
    "abilityName": "Soaring Slam",
    "description": "Rammus hops into the air and slams down at a target area, dealing magic damage and slowing enemies. If cast while Rammus is in Powerball, Rammus knocks up enemies near the center as well.",
    "type": "R",
    "imageId": "Tremors2.png",
    "difficulty": "Easy"
  },
  {
    "id": "RekSai_Passive",
    "championId": "RekSai",
    "championName": "Rek'Sai",
    "abilityName": "Fury of the Xer'Sai",
    "description": "Rek'Sai generates Fury by Attacking and hitting with basic Abilities. She consumes this Fury while Burrowed to restore health.",
    "type": "Passive",
    "imageId": "RekSai_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "RekSai_Q",
    "championId": "RekSai",
    "championName": "Rek'Sai",
    "abilityName": "Queen's Wrath / Prey Seeker",
    "description": "Rek'Sai's next 3 basic attacks deal bonus Physical Damage to nearby enemies.<br><br>While Burrowed, Rek'Sai launches a burst of void-charged earth that damages and reveals enemies hit.",
    "type": "Q",
    "imageId": "RekSaiQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "RekSai_W",
    "championId": "RekSai",
    "championName": "Rek'Sai",
    "abilityName": "Burrow / Un-burrow",
    "description": "Rek'Sai burrows into the ground, gaining new abilities and increased Move Speed. Her vision range is reduced and she cannot use basic attacks.<br><br>While Burrowed, Rek'Sai may cast Unburrow to knock up and damage nearby enemies.",
    "type": "W",
    "imageId": "RekSaiW.png",
    "difficulty": "Medium"
  },
  {
    "id": "RekSai_E",
    "championId": "RekSai",
    "championName": "Rek'Sai",
    "abilityName": "Furious Bite / Tunnel",
    "description": "Rek'Sai bites her target, dealing bonus damage if she has max Fury.<br><br>While Burrowed, Rek'Sai creates a re-usable, long lasting tunnel. Enemies can destroy it by standing on top of either entrance.",
    "type": "E",
    "imageId": "RekSaiE.png",
    "difficulty": "Medium"
  },
  {
    "id": "RekSai_R",
    "championId": "RekSai",
    "championName": "Rek'Sai",
    "abilityName": "Void Rush",
    "description": "Rek'Sai passively marks targets by damaging them. She can activate this ability to become briefly untargetable and lunge at a marked target for heavy damage based on their missing health.",
    "type": "R",
    "imageId": "RekSaiR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Rell_Passive",
    "championId": "Rell",
    "championName": "Rell",
    "abilityName": "Break the Mold",
    "description": "Rell's Attacks and Abilities steal Armor and Magic Resist on hit.",
    "type": "Passive",
    "imageId": "RellP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Rell_Q",
    "championId": "Rell",
    "championName": "Rell",
    "abilityName": "Shattering Strike",
    "description": "Rell deals magic damage to units in a line, breaking their shields and stunning them. ",
    "type": "Q",
    "imageId": "RellQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rell_W",
    "championId": "Rell",
    "championName": "Rell",
    "abilityName": "Ferromancy: Crash Down",
    "description": "Mounted: Rell Dismounts, crashing down in her armor, Knocking enemies up and gaining a large Shield. While dismounted, she gains Armor, Magic Resist, Attack Speed, and Attack Range, but is Slowed.<br><br>Dismounted: Rell forms her Mount, gaining a burst of speed and Knocking Up the next enemy she attacks.<br><br>",
    "type": "W",
    "imageId": "RellW_Dismount.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rell_E",
    "championId": "Rell",
    "championName": "Rell",
    "abilityName": "Full Tilt",
    "description": "Passive: Rell gains out of combat Move Speed.<br><br>Active: Rell and an ally gain ramping Move Speed, doubled toward enemies and each other. Her next Attack explodes, dealing magic damage.<br>",
    "type": "E",
    "imageId": "RellE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rell_R",
    "championId": "Rell",
    "championName": "Rell",
    "abilityName": "Magnet Storm",
    "description": "Rell explodes in a magnetic fury, violently Pulling nearby enemies toward herself. Then Rell constantly Drags nearby enemies toward herself for a short while, dealing magic damage over time.",
    "type": "R",
    "imageId": "RellR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Renata_Passive",
    "championId": "Renata",
    "championName": "Renata Glasc",
    "abilityName": "Leverage",
    "description": "Renata's Attacks deal bonus damage and mark enemies. Renata's allies can damage marked enemies to deal bonus damage.",
    "type": "Passive",
    "imageId": "Renata_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Renata_Q",
    "championId": "Renata",
    "championName": "Renata Glasc",
    "abilityName": "Handshake",
    "description": "Renata sends out a missile rooting the first enemy hit, and can recast the ability to throw the unit in a direction.",
    "type": "Q",
    "imageId": "RenataQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Renata_W",
    "championId": "Renata",
    "championName": "Renata Glasc",
    "abilityName": "Bailout",
    "description": "Renata buffs an allied champion to fight harder, delaying their death and potentially saving them if they get a takedown.",
    "type": "W",
    "imageId": "RenataW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Renata_E",
    "championId": "Renata",
    "championName": "Renata Glasc",
    "abilityName": "Loyalty Program",
    "description": "Renata sends out a pair of chemtech missiles, shielding allies and damaging and slowing enemies hit.",
    "type": "E",
    "imageId": "RenataE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Renata_R",
    "championId": "Renata",
    "championName": "Renata Glasc",
    "abilityName": "Hostile Takeover",
    "description": "Renata sends out a wave of chemicals, causing any enemies hit to go Berserk.",
    "type": "R",
    "imageId": "RenataR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Renekton_Passive",
    "championId": "Renekton",
    "championName": "Renekton",
    "abilityName": "Reign of Anger",
    "description": "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects.",
    "type": "Passive",
    "imageId": "Renekton_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Renekton_Q",
    "championId": "Renekton",
    "championName": "Renekton",
    "abilityName": "Cull the Meek",
    "description": "Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.",
    "type": "Q",
    "imageId": "RenektonCleave.png",
    "difficulty": "Medium"
  },
  {
    "id": "Renekton_W",
    "championId": "Renekton",
    "championName": "Renekton",
    "abilityName": "Ruthless Predator",
    "description": "Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, destroying damage shields on the target, dealing high physical damage, and stunning them for 1.5 seconds.",
    "type": "W",
    "imageId": "RenektonPreExecute.png",
    "difficulty": "Medium"
  },
  {
    "id": "Renekton_E",
    "championId": "Renekton",
    "championName": "Renekton",
    "abilityName": "Slice and Dice",
    "description": "Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.",
    "type": "E",
    "imageId": "RenektonSliceAndDice.png",
    "difficulty": "Medium"
  },
  {
    "id": "Renekton_R",
    "championId": "Renekton",
    "championName": "Renekton",
    "abilityName": "Dominus",
    "description": "Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.",
    "type": "R",
    "imageId": "RenektonReignOfTheTyrant.png",
    "difficulty": "Easy"
  },
  {
    "id": "Rengar_Passive",
    "championId": "Rengar",
    "championName": "Rengar",
    "abilityName": "Unseen Predator",
    "description": "While in Brush, Rengar leaps at his target with his basic attack.<br><br>Rengar generates Ferocity whenever he casts an ability. At Max Ferocity, his next ability is empowered.<br><br>Killing enemy champions awards trophies on Rengar's <font color='#BBFFFF'>Bonetooth Necklace</font>, granting bonus attack damage.",
    "type": "Passive",
    "imageId": "Rengar_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Rengar_Q",
    "championId": "Rengar",
    "championName": "Rengar",
    "abilityName": "Savagery",
    "description": "Rengar's next Attack brutally stabs his target for bonus damage.<br><br>Ferocity effect: deals increased damage and grants Attack Speed.",
    "type": "Q",
    "imageId": "RengarQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rengar_W",
    "championId": "Rengar",
    "championName": "Rengar",
    "abilityName": "Battle Roar",
    "description": "Rengar lets out a battle roar, damaging enemies and healing for some of the recent damage he has taken.<br><br>Ferocity effect: additionally breaks crowd control effects.",
    "type": "W",
    "imageId": "RengarW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rengar_E",
    "championId": "Rengar",
    "championName": "Rengar",
    "abilityName": "Bola Strike",
    "description": "Rengar throws a bola, slowing the first target hit for a short duration.<br><br>Ferocity effect: roots the target.",
    "type": "E",
    "imageId": "RengarE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rengar_R",
    "championId": "Rengar",
    "championName": "Rengar",
    "abilityName": "Thrill of the Hunt",
    "description": "Rengar's predatory instincts take over, <font color='#cd90ee'>Camouflaging</font> him and revealing the nearest enemy champion in a large radius around him. During Thrill of the Hunt, Rengar gains Move Speed and he can leap to the tracked enemy without being in brush, reducing their armor.",
    "type": "R",
    "imageId": "RengarR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Riven_Passive",
    "championId": "Riven",
    "championName": "Riven",
    "abilityName": "Runic Blade",
    "description": "Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage.",
    "type": "Passive",
    "imageId": "RivenRunicBlades.png",
    "difficulty": "Hard"
  },
  {
    "id": "Riven_Q",
    "championId": "Riven",
    "championName": "Riven",
    "abilityName": "Broken Wings",
    "description": "Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.",
    "type": "Q",
    "imageId": "RivenTriCleave.png",
    "difficulty": "Medium"
  },
  {
    "id": "Riven_W",
    "championId": "Riven",
    "championName": "Riven",
    "abilityName": "Ki Burst",
    "description": "Riven emits a Ki Burst, damaging and stunning nearby enemies.",
    "type": "W",
    "imageId": "RivenMartyr.png",
    "difficulty": "Medium"
  },
  {
    "id": "Riven_E",
    "championId": "Riven",
    "championName": "Riven",
    "abilityName": "Valor",
    "description": "Riven steps forward a short distance and blocks incoming damage.",
    "type": "E",
    "imageId": "RivenFeint.png",
    "difficulty": "Medium"
  },
  {
    "id": "Riven_R",
    "championId": "Riven",
    "championName": "Riven",
    "abilityName": "Blade of the Exile",
    "description": "Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.",
    "type": "R",
    "imageId": "RivenFengShuiEngine.png",
    "difficulty": "Easy"
  },
  {
    "id": "Rumble_Passive",
    "championId": "Rumble",
    "championName": "Rumble",
    "abilityName": "Junkyard Titan",
    "description": "Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.",
    "type": "Passive",
    "imageId": "Rumble_JunkyardTitan1.png",
    "difficulty": "Hard"
  },
  {
    "id": "Rumble_Q",
    "championId": "Rumble",
    "championName": "Rumble",
    "abilityName": "Flamespitter",
    "description": "Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.",
    "type": "Q",
    "imageId": "RumbleFlameThrower.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rumble_W",
    "championId": "Rumble",
    "championName": "Rumble",
    "abilityName": "Scrap Shield",
    "description": "Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.",
    "type": "W",
    "imageId": "RumbleShield.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rumble_E",
    "championId": "Rumble",
    "championName": "Rumble",
    "abilityName": "Electro Harpoon",
    "description": "Rumble launches a harpoon, electrocuting his target with magic damage, slowing their Move Speed, and reducing their Magic Resist. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.",
    "type": "E",
    "imageId": "RumbleGrenade.png",
    "difficulty": "Medium"
  },
  {
    "id": "Rumble_R",
    "championId": "Rumble",
    "championName": "Rumble",
    "abilityName": "The Equalizer",
    "description": "Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.",
    "type": "R",
    "imageId": "RumbleCarpetBomb.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ryze_Passive",
    "championId": "Ryze",
    "championName": "Ryze",
    "abilityName": "Arcane Mastery",
    "description": "<mainText>Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power.</mainText>",
    "type": "Passive",
    "imageId": "Ryze_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ryze_Q",
    "championId": "Ryze",
    "championName": "Ryze",
    "abilityName": "Overload",
    "description": "Passively, Ryze's other basic abilities reset the cooldown of Overload and charge a rune. When Ryze casts Overload with 2 runes charged, he gains a brief burst of Move Speed.<br><br>On cast, Ryze throws a charge of pure energy in a line, dealing damage to the first enemy struck. If the target has Flux on it, Overload deals extra damage and bounces to nearby enemies with Flux.",
    "type": "Q",
    "imageId": "RyzeQWrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ryze_W",
    "championId": "Ryze",
    "championName": "Ryze",
    "abilityName": "Rune Prison",
    "description": "Ryze traps a target in a cage of runes, damaging them and slowing their movement. If the target has Flux on it, they are instead rooted.",
    "type": "W",
    "imageId": "RyzeW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ryze_E",
    "championId": "Ryze",
    "championName": "Ryze",
    "abilityName": "Spell Flux",
    "description": "Ryze releases an orb of pure magical power that damages an enemy and debuffs all nearby enemies. Ryze's spells have additional effects against the debuffed enemy.",
    "type": "E",
    "imageId": "RyzeE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ryze_R",
    "championId": "Ryze",
    "championName": "Ryze",
    "abilityName": "Realm Warp",
    "description": "Passively, Overload deals even more damage against targets with Flux.<br><br>On cast, Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.",
    "type": "R",
    "imageId": "RyzeR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Samira_Passive",
    "championId": "Samira",
    "championName": "Samira",
    "abilityName": "Daredevil Impulse",
    "description": "Samira builds a combo by hitting attacks or abilities unique from the previous hit. Samira's attacks in melee range deal additional magic damage. Samira's attacks against enemies affected by <status>Immobilizing</status> effects will dash her to her attack range. If the enemy is <status>Knocked Up</status>, she also keeps them <status>Knocked Up</status> briefly.",
    "type": "Passive",
    "imageId": "SamiraP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Samira_Q",
    "championId": "Samira",
    "championName": "Samira",
    "abilityName": "Flair",
    "description": "Samira fires a shot or swings her sword, dealing damage. If cast during Wild Rush, strike all enemies in her path upon completion.",
    "type": "Q",
    "imageId": "SamiraQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Samira_W",
    "championId": "Samira",
    "championName": "Samira",
    "abilityName": "Blade Whirl",
    "description": "Samira slashes around her, damaging enemies and destroying enemy missiles.",
    "type": "W",
    "imageId": "SamiraW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Samira_E",
    "championId": "Samira",
    "championName": "Samira",
    "abilityName": "Wild Rush",
    "description": "Samira dashes through an enemy (including structures), slashing enemies she passes through and gaining Attack Speed. Killing an enemy champion refreshes this ability's cooldown.",
    "type": "E",
    "imageId": "SamiraE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Samira_R",
    "championId": "Samira",
    "championName": "Samira",
    "abilityName": "Inferno Trigger",
    "description": "Samira unleashes a torrent of shots from her weapons, wildly shooting all enemies surrounding her.",
    "type": "R",
    "imageId": "SamiraR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Sejuani_Passive",
    "championId": "Sejuani",
    "championName": "Sejuani",
    "abilityName": "Fury of the North",
    "description": "After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage.  Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.",
    "type": "Passive",
    "imageId": "Sejuani_passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Sejuani_Q",
    "championId": "Sejuani",
    "championName": "Sejuani",
    "abilityName": "Arctic Assault",
    "description": "Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.",
    "type": "Q",
    "imageId": "SejuaniQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sejuani_W",
    "championId": "Sejuani",
    "championName": "Sejuani",
    "abilityName": "Winter's Wrath",
    "description": "Sejuani swings her mace twice, dealing damage, slowing enemies and applying Frost stacks.",
    "type": "W",
    "imageId": "SejuaniW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sejuani_E",
    "championId": "Sejuani",
    "championName": "Sejuani",
    "abilityName": "Permafrost",
    "description": "Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.",
    "type": "E",
    "imageId": "SejuaniE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sejuani_R",
    "championId": "Sejuani",
    "championName": "Sejuani",
    "abilityName": "Glacial Prison",
    "description": "Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.",
    "type": "R",
    "imageId": "SejuaniR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Senna_Passive",
    "championId": "Senna",
    "championName": "Senna",
    "abilityName": "Absolution",
    "description": "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. <br><br>Attacks from Senna's Relic Cannon take longer to fire, deal bonus damage, and briefly grant her a portion of her target's Move Speed.",
    "type": "Passive",
    "imageId": "Senna_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Senna_Q",
    "championId": "Senna",
    "championName": "Senna",
    "abilityName": "Piercing Darkness",
    "description": "From the twin barrels of her Relic Cannon, Senna fires a unified beam of light and shadow through a target, healing allies and damaging enemies.",
    "type": "Q",
    "imageId": "SennaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Senna_W",
    "championId": "Senna",
    "championName": "Senna",
    "abilityName": "Last Embrace",
    "description": "Senna sends forth a wave of Black Mist. If it hits an enemy it latches onto them hungrily, rooting them and everything nearby after a brief delay.",
    "type": "W",
    "imageId": "SennaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Senna_E",
    "championId": "Senna",
    "championName": "Senna",
    "abilityName": "Curse of the Black Mist",
    "description": "Senna draws the Mist she has stored in her weapon into a storm around her, embracing darkness and becoming a wraith within. Allies who enter the area are camouflaged and also appear as wraiths as the Mist shrouds them. Wraiths gain increased Move Speed, are unselectable, and hide their identities.",
    "type": "E",
    "imageId": "SennaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Senna_R",
    "championId": "Senna",
    "championName": "Senna",
    "abilityName": "Dawning Shadow",
    "description": "Senna calls upon the relic stones of fallen Sentinels, splitting her relic cannon into a holy array of shadow and light. She then fires a global beam that shields allies from harm, while damaging enemies caught in the center.",
    "type": "R",
    "imageId": "SennaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Seraphine_Passive",
    "championId": "Seraphine",
    "championName": "Seraphine",
    "abilityName": "Stage Presence",
    "description": "Every third basic spell will cast twice from Seraphine. Additionally, casting spells near allies grants her bonus magic damage and range on her next basic attack.",
    "type": "Passive",
    "imageId": "Seraphine_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Seraphine_Q",
    "championId": "Seraphine",
    "championName": "Seraphine",
    "abilityName": "High Note",
    "description": "Seraphine deals damage in an area.",
    "type": "Q",
    "imageId": "SeraphineQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Seraphine_W",
    "championId": "Seraphine",
    "championName": "Seraphine",
    "abilityName": "Surround Sound",
    "description": "Seraphine Shields and Hastes nearby allies. If she is already Shielded she will Heal nearby allies as well.",
    "type": "W",
    "imageId": "SeraphineW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Seraphine_E",
    "championId": "Seraphine",
    "championName": "Seraphine",
    "abilityName": "Beat Drop",
    "description": "Seraphine deals damage and impairs the movement of enemies in a line.",
    "type": "E",
    "imageId": "SeraphineE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Seraphine_R",
    "championId": "Seraphine",
    "championName": "Seraphine",
    "abilityName": "Encore",
    "description": "Seraphine deals damage and charms enemies hit, refreshing the range with every allied or enemy champion hit.",
    "type": "R",
    "imageId": "SeraphineR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Sett_Passive",
    "championId": "Sett",
    "championName": "Sett",
    "abilityName": "Pit Grit",
    "description": "Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health.",
    "type": "Passive",
    "imageId": "Sett_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Sett_Q",
    "championId": "Sett",
    "championName": "Sett",
    "abilityName": "Knuckle Down",
    "description": "Sett's next two attacks deal additional damage based off of the target's max health. Sett also gains Move Speed while moving towards enemy champions.",
    "type": "Q",
    "imageId": "SettQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sett_W",
    "championId": "Sett",
    "championName": "Sett",
    "abilityName": "Haymaker",
    "description": "Sett passively stores damage he takes as Grit. On cast, Sett expends all stored Grit to gain a shield and punch an area, dealing true damage in the center and physical damage on the sides.",
    "type": "W",
    "imageId": "SettW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sett_E",
    "championId": "Sett",
    "championName": "Sett",
    "abilityName": "Facebreaker",
    "description": "Sett pulls in all enemies on opposite sides of him, dealing damage and stunning them. If enemies were only on one side, they are slowed instead of stunned.",
    "type": "E",
    "imageId": "SettE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sett_R",
    "championId": "Sett",
    "championName": "Sett",
    "abilityName": "The Show Stopper",
    "description": "Sett carries an enemy champion through the air and slams them into the ground, dealing damage and slowing all enemies near where they land.",
    "type": "R",
    "imageId": "SettR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Shaco_Passive",
    "championId": "Shaco",
    "championName": "Shaco",
    "abilityName": "Backstab",
    "description": "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind.",
    "type": "Passive",
    "imageId": "Jester_CarefulStrikes.png",
    "difficulty": "Hard"
  },
  {
    "id": "Shaco_Q",
    "championId": "Shaco",
    "championName": "Shaco",
    "abilityName": "Deceive",
    "description": "Shaco becomes Invisible and teleports to target location.<br><br>His first attack while Invisible is empowered, dealing bonus damage and critically striking if he attacks from behind.",
    "type": "Q",
    "imageId": "Deceive.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shaco_W",
    "championId": "Shaco",
    "championName": "Shaco",
    "abilityName": "Jack In The Box",
    "description": "Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.",
    "type": "W",
    "imageId": "JackInTheBox.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shaco_E",
    "championId": "Shaco",
    "championName": "Shaco",
    "abilityName": "Two-Shiv Poison",
    "description": "Shaco's Shivs passively poison targets on hit, slowing their Move Speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage if the target is below 30% health.",
    "type": "E",
    "imageId": "TwoShivPoison.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shaco_R",
    "championId": "Shaco",
    "championName": "Shaco",
    "abilityName": "Hallucinate",
    "description": "Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets).  Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.",
    "type": "R",
    "imageId": "HallucinateFull.png",
    "difficulty": "Easy"
  },
  {
    "id": "Shen_Passive",
    "championId": "Shen",
    "championName": "Shen",
    "abilityName": "Ki Barrier",
    "description": "After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.",
    "type": "Passive",
    "imageId": "Shen_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Shen_Q",
    "championId": "Shen",
    "championName": "Shen",
    "abilityName": "Twilight Assault",
    "description": "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.",
    "type": "Q",
    "imageId": "ShenQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shen_W",
    "championId": "Shen",
    "championName": "Shen",
    "abilityName": "Spirit's Refuge",
    "description": "Attacks that would hit Shen or his allies near his spirit blade are blocked.",
    "type": "W",
    "imageId": "ShenW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shen_E",
    "championId": "Shen",
    "championName": "Shen",
    "abilityName": "Shadow Dash",
    "description": "Shen dashes in a direction, taunting enemies in his path.",
    "type": "E",
    "imageId": "ShenE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shen_R",
    "championId": "Shen",
    "championName": "Shen",
    "abilityName": "Stand United",
    "description": "Shen shields target allied champion from incoming damage, and soon after teleports to their location.",
    "type": "R",
    "imageId": "ShenR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Shyvana_Passive",
    "championId": "Shyvana",
    "championName": "Shyvana",
    "abilityName": "Fury of the Dragonborn",
    "description": "Shyvana deals bonus damage to dragons and gains Armor and Magic Resistance. As Shyvana and her allies slay more dragons, she gains more bonus Armor and Magic Resistance.",
    "type": "Passive",
    "imageId": "ShyvanaReinforcedScales.png",
    "difficulty": "Hard"
  },
  {
    "id": "Shyvana_Q",
    "championId": "Shyvana",
    "championName": "Shyvana",
    "abilityName": "Twin Bite",
    "description": "Shyvana strikes twice on her next attack and grants herself Attack Speed for her next attacks. Basic attacks reduce the cooldown of Twin Bite by 0.5 seconds.<br><br><font color='#FF3300'>Dragon Form: </font>Twin Bite cleaves all units in front of Shyvana.",
    "type": "Q",
    "imageId": "ShyvanaDoubleAttack.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shyvana_W",
    "championId": "Shyvana",
    "championName": "Shyvana",
    "abilityName": "Burnout",
    "description": "Shyvana surrounds herself in fire, dealing magic damage per second to nearby enemies and moving faster for 3 seconds, part of this damage is applied again when Shyvana basic attacks an enemy with Burnout active. The Move Speed reduces over the duration of the spell. Basic attacks extend the duration of Burnout. <br><br><font color='#FF3300'>Dragon Form: </font>Burnout grows in size.",
    "type": "W",
    "imageId": "ShyvanaImmolationAura.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shyvana_E",
    "championId": "Shyvana",
    "championName": "Shyvana",
    "abilityName": "Flame Breath",
    "description": "Shyvana unleashes a fireball that deals damage to all enemies it encounters and leaves cinders on the target, marking them for 5 seconds. Shyvana's basic attacks on marked targets deal a percentage of their maximum Health as damage on-hit.<br><br><font color='#FF3300'>Dragon Form: </font>Flame Breath explodes on impact or at target location, dealing bonus damage and scorching the earth for a short duration.",
    "type": "E",
    "imageId": "ShyvanaFireball.png",
    "difficulty": "Medium"
  },
  {
    "id": "Shyvana_R",
    "championId": "Shyvana",
    "championName": "Shyvana",
    "abilityName": "Dragon's Descent",
    "description": "Shyvana transforms into a dragon and takes flight to a target location. Enemies along her path take damage and are knocked toward her target location.<br><br>Shyvana passively gains Fury per second and gains 2 Fury on basic attack.",
    "type": "R",
    "imageId": "ShyvanaTransformCast.png",
    "difficulty": "Easy"
  },
  {
    "id": "Singed_Passive",
    "championId": "Singed",
    "championName": "Singed",
    "abilityName": "Noxious Slipstream",
    "description": "Singed drafts off nearby champions, gaining a burst of Move Speed when passing them.",
    "type": "Passive",
    "imageId": "Singed_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Singed_Q",
    "championId": "Singed",
    "championName": "Singed",
    "abilityName": "Poison Trail",
    "description": "Leaves a trail of poison behind Singed, dealing damage to enemies caught in the path.",
    "type": "Q",
    "imageId": "PoisonTrail.png",
    "difficulty": "Medium"
  },
  {
    "id": "Singed_W",
    "championId": "Singed",
    "championName": "Singed",
    "abilityName": "Mega Adhesive",
    "description": "Throws a vial of mega adhesive on the ground, slowing and grounding enemies who walk on it.",
    "type": "W",
    "imageId": "MegaAdhesive.png",
    "difficulty": "Medium"
  },
  {
    "id": "Singed_E",
    "championId": "Singed",
    "championName": "Singed",
    "abilityName": "Fling",
    "description": "Damages target enemy unit and flings them into the air behind Singed. If the target Singed flings lands in his Mega Adhesive, they are also rooted.",
    "type": "E",
    "imageId": "Fling.png",
    "difficulty": "Medium"
  },
  {
    "id": "Singed_R",
    "championId": "Singed",
    "championName": "Singed",
    "abilityName": "Insanity Potion",
    "description": "Singed drinks a potent brew of chemicals, granting him increased combat stats, and making his Poison Trail apply Grievous Wounds.",
    "type": "R",
    "imageId": "InsanityPotion.png",
    "difficulty": "Easy"
  },
  {
    "id": "Sion_Passive",
    "championId": "Sion",
    "championName": "Sion",
    "abilityName": "Glory in Death",
    "description": "After being killed, Sion will temporarily reanimate with rapidly decaying Health. His attacks become very rapid, heal him, and deal bonus damage based on his target's maximum Health.",
    "type": "Passive",
    "imageId": "Sion_Passive1.png",
    "difficulty": "Hard"
  },
  {
    "id": "Sion_Q",
    "championId": "Sion",
    "championName": "Sion",
    "abilityName": "Decimating Smash",
    "description": "Sion charges a powerful swing in an area in front of himself that will deal damage to enemies when released. If he charges for enough time, enemies hit by the swing will also be knocked up and stunned.",
    "type": "Q",
    "imageId": "SionQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sion_W",
    "championId": "Sion",
    "championName": "Sion",
    "abilityName": "Soul Furnace",
    "description": "Sion shields himself and can reactivate after 3 seconds to deal Magic Damage to enemies nearby. When Sion kills enemies, he passively gains maximum Health.",
    "type": "W",
    "imageId": "SionW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sion_E",
    "championId": "Sion",
    "championName": "Sion",
    "abilityName": "Roar of the Slayer",
    "description": "Sion fires a short range shockwave that damages and slows and reduces the Armor of the first enemy hit. If the shockwave hits a minion or monster, it will be knocked back, damaging, slowing, and reducing the Armor of all enemies that it passes through.",
    "type": "E",
    "imageId": "SionE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sion_R",
    "championId": "Sion",
    "championName": "Sion",
    "abilityName": "Unstoppable Onslaught",
    "description": "Sion charges in a direction, ramping up speed over time. He can steer his charge slightly with the mouse cursor location. When he collides with an enemy he deals damage and knocks them up based on the distance he has charged.",
    "type": "R",
    "imageId": "SionR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Sivir_Passive",
    "championId": "Sivir",
    "championName": "Sivir",
    "abilityName": "Fleet of Foot",
    "description": "Sivir gains a short burst of Move Speed when she attacks an enemy champion.",
    "type": "Passive",
    "imageId": "Sivir_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Sivir_Q",
    "championId": "Sivir",
    "championName": "Sivir",
    "abilityName": "Boomerang Blade",
    "description": "Sivir hurls her crossblade like a boomerang, dealing damage each way.",
    "type": "Q",
    "imageId": "SivirQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sivir_W",
    "championId": "Sivir",
    "championName": "Sivir",
    "abilityName": "Ricochet",
    "description": "Sivir's next few basic attacks gain additional attack speed and bounce to nearby targets, dealing reduced damage while bouncing.",
    "type": "W",
    "imageId": "SivirW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sivir_E",
    "championId": "Sivir",
    "championName": "Sivir",
    "abilityName": "Spell Shield",
    "description": "Creates a magical barrier that blocks a single enemy ability cast on Sivir. She receives health and a burst of movement speed if a spell is blocked.",
    "type": "E",
    "imageId": "SivirE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sivir_R",
    "championId": "Sivir",
    "championName": "Sivir",
    "abilityName": "On The Hunt",
    "description": "Sivir leads her allies in battle, granting them a surge of Move Speed for a period of time. In addition, Sivir's attacks reduce her spell cooldowns.",
    "type": "R",
    "imageId": "SivirR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Skarner_Passive",
    "championId": "Skarner",
    "championName": "Skarner",
    "abilityName": "Threads of Vibration",
    "description": "Skarner's Attacks, Shattered Earth, Upheaval, and Impale, apply Quaking. At max stacks of Quaking, enemies take max Health magic damage over its duration.",
    "type": "Passive",
    "imageId": "Skarner_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Skarner_Q",
    "championId": "Skarner",
    "championName": "Skarner",
    "abilityName": "Shattered Earth / Upheaval",
    "description": "Skarner rips a boulder from the earth that empowers his attacks and can be thrown as a powerful projectile.",
    "type": "Q",
    "imageId": "SkarnerQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Skarner_W",
    "championId": "Skarner",
    "championName": "Skarner",
    "abilityName": "Seismic Bastion",
    "description": "Skarner gains a shield and creates an earthquake whose shockwave damages and slows foes.",
    "type": "W",
    "imageId": "SkarnerW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Skarner_E",
    "championId": "Skarner",
    "championName": "Skarner",
    "abilityName": "Ixtal's Impact",
    "description": "Skarner charges forward and passes through terrain. If he collides with a champion or large monster, he'll slam them into the next wall he hits to damage and stun them.",
    "type": "E",
    "imageId": "SkarnerE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Skarner_R",
    "championId": "Skarner",
    "championName": "Skarner",
    "abilityName": "Impale",
    "description": "Skarner's tails lash forward to suppress enemy champions. Once suppressed, the victims will be dragged along by Skarner as he moves around.",
    "type": "R",
    "imageId": "SkarnerR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Smolder_Passive",
    "championId": "Smolder",
    "championName": "Smolder",
    "abilityName": "Dragon Practice",
    "description": "Hitting champions with Abilities and killing enemies with Super Scorcher Breath grants a stack of Dragon Practice. Stacks increase the damage of Smolders basic Abilities.",
    "type": "Passive",
    "imageId": "Icons_Smolder_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Smolder_Q",
    "championId": "Smolder",
    "championName": "Smolder",
    "abilityName": "Super Scorcher Breath",
    "description": "Smolder breathes fire on an enemy. As he gains more stacks, this ability becomes more powerful.",
    "type": "Q",
    "imageId": "SmolderQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Smolder_W",
    "championId": "Smolder",
    "championName": "Smolder",
    "abilityName": "Achooo!",
    "description": "Smolder lets out an adorable flaming sneeze that explodes when hitting enemy champions.",
    "type": "W",
    "imageId": "SmolderW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Smolder_E",
    "championId": "Smolder",
    "championName": "Smolder",
    "abilityName": "Flap, Flap, Flap",
    "description": "Smolder takes flight ignoring terrain and bombarding the lowest health enemy.",
    "type": "E",
    "imageId": "SmolderE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Smolder_R",
    "championId": "Smolder",
    "championName": "Smolder",
    "abilityName": "MMOOOMMMM!",
    "description": "Smolder calls his mom to breath fire from above, dealing extra damage and slowing enemies in the center of her fire.",
    "type": "R",
    "imageId": "SmolderR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Sona_Passive",
    "championId": "Sona",
    "championName": "Sona",
    "abilityName": "Power Chord",
    "description": "<passive>Accelerando</passive>: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead.<br><br><passive>Power Chord</passive>: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated.",
    "type": "Passive",
    "imageId": "Sona_Passive_Charged.png",
    "difficulty": "Hard"
  },
  {
    "id": "Sona_Q",
    "championId": "Sona",
    "championName": "Sona",
    "abilityName": "Hymn of Valor",
    "description": "Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.",
    "type": "Q",
    "imageId": "SonaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sona_W",
    "championId": "Sona",
    "championName": "Sona",
    "abilityName": "Aria of Perseverance",
    "description": "Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.",
    "type": "W",
    "imageId": "SonaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sona_E",
    "championId": "Sona",
    "championName": "Sona",
    "abilityName": "Song of Celerity",
    "description": "Sona plays the Song of Celerity, granting nearby allies bonus Move Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Move Speed.",
    "type": "E",
    "imageId": "SonaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sona_R",
    "championId": "Sona",
    "championName": "Sona",
    "abilityName": "Crescendo",
    "description": "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them. Each rank reduces the base cooldown of Sona's basic abilities.",
    "type": "R",
    "imageId": "SonaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Soraka_Passive",
    "championId": "Soraka",
    "championName": "Soraka",
    "abilityName": "Salvation",
    "description": "Soraka runs faster towards nearby low health allies.",
    "type": "Passive",
    "imageId": "Soraka_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Soraka_Q",
    "championId": "Soraka",
    "championName": "Soraka",
    "abilityName": "Starcall",
    "description": "A star falls from the sky at the target location dealing magic damage and slowing enemies. If an enemy champion is hit by Starcall, Soraka recovers Health.",
    "type": "Q",
    "imageId": "SorakaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Soraka_W",
    "championId": "Soraka",
    "championName": "Soraka",
    "abilityName": "Astral Infusion",
    "description": "Soraka sacrifices a portion of her own health to heal another friendly champion.",
    "type": "W",
    "imageId": "SorakaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Soraka_E",
    "championId": "Soraka",
    "championName": "Soraka",
    "abilityName": "Equinox",
    "description": "Creates a zone at a location that silences all enemies inside. When the zone expires, all enemies still inside are rooted.",
    "type": "E",
    "imageId": "SorakaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Soraka_R",
    "championId": "Soraka",
    "championName": "Soraka",
    "abilityName": "Wish",
    "description": "Soraka fills her allies with hope, instantly restoring health to herself and all allied champions.",
    "type": "R",
    "imageId": "SorakaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Swain_Passive",
    "championId": "Swain",
    "championName": "Swain",
    "abilityName": "Ravenous Flock",
    "description": "Swain's ravens collect <i>Soul Fragments</i> that heal him and permanently increase his maximum health.",
    "type": "Passive",
    "imageId": "Swain_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Swain_Q",
    "championId": "Swain",
    "championName": "Swain",
    "abilityName": "Death's Hand",
    "description": "Swain unleashes several bolts of eldritch power that pierce through enemies. Enemies hit take more damage for each bolt they are struck by.",
    "type": "Q",
    "imageId": "SwainQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Swain_W",
    "championId": "Swain",
    "championName": "Swain",
    "abilityName": "Vision of Empire",
    "description": "Swain opens a demon eye that deals damage and slows enemies. Champions hit are revealed and also grant Swain a Soul Fragment.",
    "type": "W",
    "imageId": "SwainW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Swain_E",
    "championId": "Swain",
    "championName": "Swain",
    "abilityName": "Nevermove",
    "description": "Swain launches a wave of demonic power forward. It then returns to Swain and roots enemies it hits. Swain can then choose to pull all rooted champions closer. This ability has a shorter cooldown during Demonic Ascension.",
    "type": "E",
    "imageId": "SwainE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Swain_R",
    "championId": "Swain",
    "championName": "Swain",
    "abilityName": "Demonic Ascension",
    "description": "Swain transforms into a demon and drains health from nearby enemy champions, minions, and neutral monsters. Swain can cast Demonflare to decimate and slow nearby enemies with a nova of soulfire. This form is indefinite as long as Swain drains enemy champions.",
    "type": "R",
    "imageId": "SwainR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Sylas_Passive",
    "championId": "Sylas",
    "championName": "Sylas",
    "abilityName": "Petricite Burst",
    "description": "After casting a spell, Sylas stores a charge of Petricite Burst. Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed. ",
    "type": "Passive",
    "imageId": "SylasP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Sylas_Q",
    "championId": "Sylas",
    "championName": "Sylas",
    "abilityName": "Chain Lash",
    "description": "Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. <br><br>After a delay, magical energy explodes from the intersection point dealing damage.",
    "type": "Q",
    "imageId": "SylasQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sylas_W",
    "championId": "Sylas",
    "championName": "Sylas",
    "abilityName": "Kingslayer",
    "description": "Sylas lunges at an enemy with magical force dealing damage and healing himself against enemy champions.",
    "type": "W",
    "imageId": "SylasW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sylas_E",
    "championId": "Sylas",
    "championName": "Sylas",
    "abilityName": "Abscond / Abduct",
    "description": "Sylas dashes to a location. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.",
    "type": "E",
    "imageId": "SylasE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Sylas_R",
    "championId": "Sylas",
    "championName": "Sylas",
    "abilityName": "Hijack",
    "description": "Sylas steals the enemy's ultimate ability and can cast it freely.",
    "type": "R",
    "imageId": "SylasR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Syndra_Passive",
    "championId": "Syndra",
    "championName": "Syndra",
    "abilityName": "Transcendent",
    "description": "Syndra collects Splinters of Wrath from gaining levels and damaging enemies which upgrade her abilities.<br><br><font color='#FF9900'>Dark Sphere</font>: Syndra can hold an additional charge<br><font color='#FF9900'>Force of Will</font>: Bonus true damage.<br><font color='#FF9900'>Scatter the Weak</font>: Increased width and slows all targets<br><font color='#FF9900'>Unleashed Power</font>: Executes low health targets",
    "type": "Passive",
    "imageId": "SyndraPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Syndra_Q",
    "championId": "Syndra",
    "championName": "Syndra",
    "abilityName": "Dark Sphere",
    "description": "Syndra conjures a Dark Sphere dealing magic damage. The sphere remains and can be manipulated by her other powers.",
    "type": "Q",
    "imageId": "SyndraQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Syndra_W",
    "championId": "Syndra",
    "championName": "Syndra",
    "abilityName": "Force of Will",
    "description": "Syndra picks up and throws a Dark Sphere or enemy minion dealing magic damage and slowing the Move Speed of enemies.",
    "type": "W",
    "imageId": "SyndraW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Syndra_E",
    "championId": "Syndra",
    "championName": "Syndra",
    "abilityName": "Scatter the Weak",
    "description": "Syndra knocks enemies and Dark Spheres back dealing magic damage. Enemies hit by Dark Spheres become stunned.",
    "type": "E",
    "imageId": "SyndraE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Syndra_R",
    "championId": "Syndra",
    "championName": "Syndra",
    "abilityName": "Unleashed Power",
    "description": "Syndra bombards an enemy Champion with all of her Dark Spheres.",
    "type": "R",
    "imageId": "SyndraR.png",
    "difficulty": "Easy"
  },
  {
    "id": "TahmKench_Passive",
    "championId": "TahmKench",
    "championName": "Tahm Kench",
    "abilityName": "An Acquired Taste",
    "description": "Tahm Kench puts the heft of his immense body behind his attacks, gaining extra damage based on his total health. Damaging enemy champions builds stacks of <spellName>An Acquired Taste</spellName>. At three stacks, he can use <spellName>Devour</spellName> on an enemy champion.",
    "type": "Passive",
    "imageId": "TahmKenchP.png",
    "difficulty": "Hard"
  },
  {
    "id": "TahmKench_Q",
    "championId": "TahmKench",
    "championName": "Tahm Kench",
    "abilityName": "Tongue Lash",
    "description": "Tahm Kench lashes out with his tongue, damaging and slowing the first unit hit and healing himself if he strikes an enemy champion.<br><br>Applies a stack of  <spellName>An Acquired Taste</spellName> to enemy champions. If the champion already has 3 stacks of <spellName>An Acquired Taste</spellName>, they are stunned and the stacks are consumed.",
    "type": "Q",
    "imageId": "TahmKenchQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "TahmKench_W",
    "championId": "TahmKench",
    "championName": "Tahm Kench",
    "abilityName": "Abyssal Dive",
    "description": "Dive down and then re-appear at target location, damaging and knocking up all enemies in an area.",
    "type": "W",
    "imageId": "TahmKenchW.png",
    "difficulty": "Medium"
  },
  {
    "id": "TahmKench_E",
    "championId": "TahmKench",
    "championName": "Tahm Kench",
    "abilityName": "Thick Skin",
    "description": "<passive>Passive:</passive> Tahm Kench stores a percent of the damage he takes and heals based on it while out of combat.<br><br><active>Active:</active> Convert all stored damage into a temporary shield.",
    "type": "E",
    "imageId": "TahmKenchE.png",
    "difficulty": "Medium"
  },
  {
    "id": "TahmKench_R",
    "championId": "TahmKench",
    "championName": "Tahm Kench",
    "abilityName": "Devour",
    "description": "Tahm Kench devours a champion for a few seconds, dealing magic damage if they are an enemy, or shielding them if they are an ally.",
    "type": "R",
    "imageId": "TahmKenchRWrapper.png",
    "difficulty": "Easy"
  },
  {
    "id": "Taliyah_Passive",
    "championId": "Taliyah",
    "championName": "Taliyah",
    "abilityName": "Rock Surfing",
    "description": "Taliyah gains Move Speed near walls.",
    "type": "Passive",
    "imageId": "Taliyah_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Taliyah_Q",
    "championId": "Taliyah",
    "championName": "Taliyah",
    "abilityName": "Threaded Volley",
    "description": "Taliyah throws a volley of rocks in a target direction, moving freely as she casts. This creates Worked Ground below her. If Taliyah casts Threaded Volley on Worked Ground, she consumes the ground to throw a stronger boulder that slows enemies.",
    "type": "Q",
    "imageId": "TaliyahQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Taliyah_W",
    "championId": "Taliyah",
    "championName": "Taliyah",
    "abilityName": "Seismic Shove",
    "description": "Taliyah causes an area of ground to erupt and throws enemies within it in a direction of her choosing.",
    "type": "W",
    "imageId": "TaliyahWVC.png",
    "difficulty": "Medium"
  },
  {
    "id": "Taliyah_E",
    "championId": "Taliyah",
    "championName": "Taliyah",
    "abilityName": "Unraveled Earth",
    "description": "Taliyah creates a slowing minefield. If enemies dash through it or are knocked through it, the mines explode and stun them.",
    "type": "E",
    "imageId": "TaliyahE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Taliyah_R",
    "championId": "Taliyah",
    "championName": "Taliyah",
    "abilityName": "Weaver's Wall",
    "description": "Taliyah creates a very long wall and then surfs it.",
    "type": "R",
    "imageId": "TaliyahR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Talon_Passive",
    "championId": "Talon",
    "championName": "Talon",
    "abilityName": "Blade's End",
    "description": "Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time.",
    "type": "Passive",
    "imageId": "TalonP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Talon_Q",
    "championId": "Talon",
    "championName": "Talon",
    "abilityName": "Noxian Diplomacy",
    "description": "Talon stabs the target unit. If they are within melee range, this attack deals critical damage. If they are outside melee range, Talon will leap at his target before stabbing them. Talon refunds some health and cooldown if this ability kills the target.",
    "type": "Q",
    "imageId": "TalonQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Talon_W",
    "championId": "Talon",
    "championName": "Talon",
    "abilityName": "Rake",
    "description": "Talon sends out a volley of daggers that then return back to him, dealing physical damage every time it passes through an enemy. The returning blades deal bonus damage and slow units hit.",
    "type": "W",
    "imageId": "TalonW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Talon_E",
    "championId": "Talon",
    "championName": "Talon",
    "abilityName": "Assassin's Path",
    "description": "Talon vaults over any terrain or structure, up to a max distance. This ability has a low cooldown, but puts the used terrain on a long cooldown.",
    "type": "E",
    "imageId": "TalonE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Talon_R",
    "championId": "Talon",
    "championName": "Talon",
    "abilityName": "Shadow Assault",
    "description": "Talon disperses a ring of blades and becomes Invisible while gaining additional Move Speed. When Talon emerges from Invisibility, the blades converge on his location. Each time the blades move, Shadow Assault deals physical damage to enemies hit by at least one blade.",
    "type": "R",
    "imageId": "TalonR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Taric_Passive",
    "championId": "Taric",
    "championName": "Taric",
    "abilityName": "Bravado",
    "description": "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession.",
    "type": "Passive",
    "imageId": "Taric_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Taric_Q",
    "championId": "Taric",
    "championName": "Taric",
    "abilityName": "Starlight's Touch",
    "description": "Heals nearby allied champions based on charges stored. Bravado-empowered attacks grant a charge of Starlight's Touch.",
    "type": "Q",
    "imageId": "TaricQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Taric_W",
    "championId": "Taric",
    "championName": "Taric",
    "abilityName": "Bastion",
    "description": "Passively increase the Armor of Taric and any allied champion with Bastion.<br><br>Actively shields an ally and grants them Bastion for as long as they remain near Taric. Taric's spells also cast off the ally with Bastion.",
    "type": "W",
    "imageId": "TaricW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Taric_E",
    "championId": "Taric",
    "championName": "Taric",
    "abilityName": "Dazzle",
    "description": "Taric readies a beam of starlight that, after a brief delay, deals magic damage and stuns enemies.",
    "type": "E",
    "imageId": "TaricE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Taric_R",
    "championId": "Taric",
    "championName": "Taric",
    "abilityName": "Cosmic Radiance",
    "description": "Pulses cosmic energy onto nearby allied champions after a delay, making them invulnerable for a short duration.",
    "type": "R",
    "imageId": "TaricR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Teemo_Passive",
    "championId": "Teemo",
    "championName": "Teemo",
    "abilityName": "Guerrilla Warfare",
    "description": "If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for a few seconds.",
    "type": "Passive",
    "imageId": "TeemoPassive.ASU_Teemo.png",
    "difficulty": "Hard"
  },
  {
    "id": "Teemo_Q",
    "championId": "Teemo",
    "championName": "Teemo",
    "abilityName": "Blinding Dart",
    "description": "Obscures an enemy's vision with a powerful venom, dealing damage to the target unit and blinding it for the duration.",
    "type": "Q",
    "imageId": "TeemoQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Teemo_W",
    "championId": "Teemo",
    "championName": "Teemo",
    "abilityName": "Move Quick",
    "description": "Teemo scampers around, passively increasing his Move Speed until he is struck by an enemy champion or turret. Teemo can sprint to gain bonus Move Speed that isn't stopped by being struck for a short time.",
    "type": "W",
    "imageId": "TeemoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Teemo_E",
    "championId": "Teemo",
    "championName": "Teemo",
    "abilityName": "Toxic Shot",
    "description": "Each of Teemo's attacks will poison the target, dealing damage on impact and each second after for 4 seconds.",
    "type": "E",
    "imageId": "TeemoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Teemo_R",
    "championId": "Teemo",
    "championName": "Teemo",
    "abilityName": "Noxious Trap",
    "description": "Teemo throws an explosive poisonous trap using one of the mushrooms stored in his pack. If an enemy steps on the trap, it will release a poisonous cloud, slowing enemies and damaging them over time. If Teemo throws a mushroom onto another mushroom it will bounce, gaining additional range.",
    "type": "R",
    "imageId": "TeemoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Thresh_Passive",
    "championId": "Thresh",
    "championName": "Thresh",
    "abilityName": "Damnation",
    "description": "Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.",
    "type": "Passive",
    "imageId": "Thresh_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Thresh_Q",
    "championId": "Thresh",
    "championName": "Thresh",
    "abilityName": "Death Sentence",
    "description": "Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.",
    "type": "Q",
    "imageId": "ThreshQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Thresh_W",
    "championId": "Thresh",
    "championName": "Thresh",
    "abilityName": "Dark Passage",
    "description": "Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.",
    "type": "W",
    "imageId": "ThreshW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Thresh_E",
    "championId": "Thresh",
    "championName": "Thresh",
    "abilityName": "Flay",
    "description": "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.",
    "type": "E",
    "imageId": "ThreshE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Thresh_R",
    "championId": "Thresh",
    "championName": "Thresh",
    "abilityName": "The Box",
    "description": "A prison of walls that slow and deal damage if broken.",
    "type": "R",
    "imageId": "ThreshRPenta.png",
    "difficulty": "Easy"
  },
  {
    "id": "Tristana_Passive",
    "championId": "Tristana",
    "championName": "Tristana",
    "abilityName": "Draw a Bead",
    "description": "Increases Tristana's Attack Range as she levels.",
    "type": "Passive",
    "imageId": "Tristana_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Tristana_Q",
    "championId": "Tristana",
    "championName": "Tristana",
    "abilityName": "Rapid Fire",
    "description": "Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.",
    "type": "Q",
    "imageId": "TristanaQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Tristana_W",
    "championId": "Tristana",
    "championName": "Tristana",
    "abilityName": "Rocket Jump",
    "description": "Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.",
    "type": "W",
    "imageId": "TristanaW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Tristana_E",
    "championId": "Tristana",
    "championName": "Tristana",
    "abilityName": "Explosive Charge",
    "description": "When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.",
    "type": "E",
    "imageId": "TristanaE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Tristana_R",
    "championId": "Tristana",
    "championName": "Tristana",
    "abilityName": "Buster Shot",
    "description": "Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.",
    "type": "R",
    "imageId": "TristanaR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Trundle_Passive",
    "championId": "Trundle",
    "championName": "Trundle",
    "abilityName": "King's Tribute",
    "description": "When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.",
    "type": "Passive",
    "imageId": "Trundle_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Trundle_Q",
    "championId": "Trundle",
    "championName": "Trundle",
    "abilityName": "Chomp",
    "description": "Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.",
    "type": "Q",
    "imageId": "TrundleTrollSmash.png",
    "difficulty": "Medium"
  },
  {
    "id": "Trundle_W",
    "championId": "Trundle",
    "championName": "Trundle",
    "abilityName": "Frozen Domain",
    "description": "Trundle turns target location into his domain, gaining Attack Speed, Move Speed, and increased healing from all sources while on it.",
    "type": "W",
    "imageId": "trundledesecrate.png",
    "difficulty": "Medium"
  },
  {
    "id": "Trundle_E",
    "championId": "Trundle",
    "championName": "Trundle",
    "abilityName": "Pillar of Ice",
    "description": "Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.",
    "type": "E",
    "imageId": "TrundleCircle.png",
    "difficulty": "Medium"
  },
  {
    "id": "Trundle_R",
    "championId": "Trundle",
    "championName": "Trundle",
    "abilityName": "Subjugate",
    "description": "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
    "type": "R",
    "imageId": "TrundlePain.png",
    "difficulty": "Easy"
  },
  {
    "id": "Tryndamere_Passive",
    "championId": "Tryndamere",
    "championName": "Tryndamere",
    "abilityName": "Battle Fury",
    "description": "Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.",
    "type": "Passive",
    "imageId": "Tryndamere_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Tryndamere_Q",
    "championId": "Tryndamere",
    "championName": "Tryndamere",
    "abilityName": "Bloodlust",
    "description": "Tryndamere thrives on the thrills of combat, increasing his Attack Damage as he is more and more wounded. He can cast Bloodlust to consume his Fury and heal himself.",
    "type": "Q",
    "imageId": "TryndamereQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Tryndamere_W",
    "championId": "Tryndamere",
    "championName": "Tryndamere",
    "abilityName": "Mocking Shout",
    "description": "Tryndamere lets out an insulting cry, decreasing surrounding champions' Attack Damage. Enemies with their backs turned to Tryndamere also have their Move Speed reduced.",
    "type": "W",
    "imageId": "TryndamereW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Tryndamere_E",
    "championId": "Tryndamere",
    "championName": "Tryndamere",
    "abilityName": "Spinning Slash",
    "description": "Tryndamere slices toward a target unit, dealing damage to enemies in his path.",
    "type": "E",
    "imageId": "TryndamereE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Tryndamere_R",
    "championId": "Tryndamere",
    "championName": "Tryndamere",
    "abilityName": "Undying Rage",
    "description": "Tryndamere's lust for battle becomes so strong that he is unable to die, no matter how wounded he becomes.",
    "type": "R",
    "imageId": "UndyingRage.png",
    "difficulty": "Easy"
  },
  {
    "id": "TwistedFate_Passive",
    "championId": "TwistedFate",
    "championName": "Twisted Fate",
    "abilityName": "Loaded Dice",
    "description": "Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving 1 to 6 bonus gold.",
    "type": "Passive",
    "imageId": "Cardmaster_SealFate.png",
    "difficulty": "Hard"
  },
  {
    "id": "TwistedFate_Q",
    "championId": "TwistedFate",
    "championName": "Twisted Fate",
    "abilityName": "Wild Cards",
    "description": "Twisted Fate throws three cards, dealing damage to each enemy unit they pass through.",
    "type": "Q",
    "imageId": "WildCards.png",
    "difficulty": "Medium"
  },
  {
    "id": "TwistedFate_W",
    "championId": "TwistedFate",
    "championName": "Twisted Fate",
    "abilityName": "Pick a Card",
    "description": "Twisted Fate chooses a magic card from his deck, and uses that for his next attack, causing bonus effects.",
    "type": "W",
    "imageId": "PickACard.png",
    "difficulty": "Medium"
  },
  {
    "id": "TwistedFate_E",
    "championId": "TwistedFate",
    "championName": "Twisted Fate",
    "abilityName": "Stacked Deck",
    "description": "Every 4 attacks, Twisted Fate deals bonus damage. In addition, his Attack Speed is increased.",
    "type": "E",
    "imageId": "CardmasterStack.png",
    "difficulty": "Medium"
  },
  {
    "id": "TwistedFate_R",
    "championId": "TwistedFate",
    "championName": "Twisted Fate",
    "abilityName": "Destiny",
    "description": "Twisted Fate predicts the fortunes of his foes, revealing all enemy champions and enabling the use of Gate, which teleports Twisted Fate to any target location in 1.5 seconds.",
    "type": "R",
    "imageId": "Destiny.png",
    "difficulty": "Easy"
  },
  {
    "id": "Twitch_Passive",
    "championId": "Twitch",
    "championName": "Twitch",
    "abilityName": "Deadly Venom",
    "description": "Twitch's basic attacks infect the target, dealing true damage each second.",
    "type": "Passive",
    "imageId": "Twitch_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Twitch_Q",
    "championId": "Twitch",
    "championName": "Twitch",
    "abilityName": "Ambush",
    "description": "Twitch becomes Camouflaged for a short duration and gains Move Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration.<br><br>When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",
    "type": "Q",
    "imageId": "TwitchHideInShadows.png",
    "difficulty": "Medium"
  },
  {
    "id": "Twitch_W",
    "championId": "Twitch",
    "championName": "Twitch",
    "abilityName": "Venom Cask",
    "description": "Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.",
    "type": "W",
    "imageId": "TwitchVenomCask.png",
    "difficulty": "Medium"
  },
  {
    "id": "Twitch_E",
    "championId": "Twitch",
    "championName": "Twitch",
    "abilityName": "Contaminate",
    "description": "Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.",
    "type": "E",
    "imageId": "TwitchExpunge.png",
    "difficulty": "Medium"
  },
  {
    "id": "Twitch_R",
    "championId": "Twitch",
    "championName": "Twitch",
    "abilityName": "Spray and Pray",
    "description": "Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.",
    "type": "R",
    "imageId": "TwitchFullAutomatic.png",
    "difficulty": "Easy"
  },
  {
    "id": "Udyr_Passive",
    "championId": "Udyr",
    "championName": "Udyr",
    "abilityName": "Bridge Between",
    "description": "Udyr has four basic Abilities that swap between Stances and can Recast an Ability to renew it with Ultimate benefits. Additionally, after using an Ability, Udyr's next two Attacks gain Attack Speed.",
    "type": "Passive",
    "imageId": "Udyr_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Udyr_Q",
    "championId": "Udyr",
    "championName": "Udyr",
    "abilityName": "Wilding Claw",
    "description": "Udyr gains attack speed and his next two attacks deal bonus physical damage. Recast: Gain even more attack speed, and the next two attacks call lightning to strike the target.",
    "type": "Q",
    "imageId": "UdyrQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Udyr_W",
    "championId": "Udyr",
    "championName": "Udyr",
    "abilityName": "Iron Mantle",
    "description": "Udyr gains a shield and his next two attacks heal him. Recast: Gain an even bigger shield and heal based on max health over the next couple seconds.",
    "type": "W",
    "imageId": "UdyrW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Udyr_E",
    "championId": "Udyr",
    "championName": "Udyr",
    "abilityName": "Blazing Stampede",
    "description": "Udyr gains movement speed and his first attack against each target will Stun them. Recast: Gain even more movement speed and immunity to immobilizing effects for a couple seconds. ",
    "type": "E",
    "imageId": "UdyrE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Udyr_R",
    "championId": "Udyr",
    "championName": "Udyr",
    "abilityName": "Wingborne Storm",
    "description": "Udyr surrounds himself in a glacial storm, damaging and slowing nearby enemies. Recast: Empower and unleash the storm, causing it to track enemies and deal additional damage.",
    "type": "R",
    "imageId": "UdyrR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Urgot_Passive",
    "championId": "Urgot",
    "championName": "Urgot",
    "abilityName": "Echoing Flames",
    "description": "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage.",
    "type": "Passive",
    "imageId": "Urgot_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Urgot_Q",
    "championId": "Urgot",
    "championName": "Urgot",
    "abilityName": "Corrosive Charge",
    "description": "Fires an explosive charge at the target location, dealing physical damage and slowing enemies caught in the explosion.",
    "type": "Q",
    "imageId": "UrgotQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Urgot_W",
    "championId": "Urgot",
    "championName": "Urgot",
    "abilityName": "Purge",
    "description": "Urgot slows himself while he unloads his weapon on nearby enemies. Prioritizes enemy champions Urgot has recently struck with other abilities and triggers Echoing Flames.",
    "type": "W",
    "imageId": "UrgotW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Urgot_E",
    "championId": "Urgot",
    "championName": "Urgot",
    "abilityName": "Disdain",
    "description": "Urgot charges in a direction, shielding himself and trampling non-champion enemies. If he catches an enemy champion, he will stop and hurl them out of his way.",
    "type": "E",
    "imageId": "UrgotE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Urgot_R",
    "championId": "Urgot",
    "championName": "Urgot",
    "abilityName": "Fear Beyond Death",
    "description": "Urgot fires a chem-drill that impales the first enemy champion hit. If that champion falls below a health threshold, Urgot judges them weak and can execute them.",
    "type": "R",
    "imageId": "UrgotR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Varus_Passive",
    "championId": "Varus",
    "championName": "Varus",
    "abilityName": "Living Vengeance",
    "description": "On kill or assist, Varus temporarily gains Attack Damage and Ability Power. This bonus is larger if the enemy is a champion.",
    "type": "Passive",
    "imageId": "VarusPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Varus_Q",
    "championId": "Varus",
    "championName": "Varus",
    "abilityName": "Piercing Arrow",
    "description": "Varus readies and then fires a powerful shot that gains extra range and damage the longer he spends preparing to fire.",
    "type": "Q",
    "imageId": "VarusQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Varus_W",
    "championId": "Varus",
    "championName": "Varus",
    "abilityName": "Blighted Quiver",
    "description": "Passive: Varus' basic attacks deal bonus magic damage and apply Blight. Varus' other abilities detonate Blight, dealing magic damage based on the target's maximum Health. Active: Varus empowers his next Piercing Arrow.",
    "type": "W",
    "imageId": "VarusW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Varus_E",
    "championId": "Varus",
    "championName": "Varus",
    "abilityName": "Hail of Arrows",
    "description": "Varus fires a hail of arrows that deal physical damage and desecrate the ground. Desecrated ground slows enemies' Move Speed and reduces their self healing and regeneration.",
    "type": "E",
    "imageId": "VarusE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Varus_R",
    "championId": "Varus",
    "championName": "Varus",
    "abilityName": "Chain of Corruption",
    "description": "Varus flings out a damaging tendril of corruption that immobilizes the first enemy champion hit and then spreads towards nearby uninfected champions, immobilizing them too on contact.",
    "type": "R",
    "imageId": "VarusR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Vayne_Passive",
    "championId": "Vayne",
    "championName": "Vayne",
    "abilityName": "Night Hunter",
    "description": "Vayne ruthlessly hunts evil-doers, gaining Move Speed when moving toward nearby enemy champions.",
    "type": "Passive",
    "imageId": "Vayne_NightHunter.png",
    "difficulty": "Hard"
  },
  {
    "id": "Vayne_Q",
    "championId": "Vayne",
    "championName": "Vayne",
    "abilityName": "Tumble",
    "description": "Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.",
    "type": "Q",
    "imageId": "VayneTumble.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vayne_W",
    "championId": "Vayne",
    "championName": "Vayne",
    "abilityName": "Silver Bolts",
    "description": "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.",
    "type": "W",
    "imageId": "VayneSilveredBolts.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vayne_E",
    "championId": "Vayne",
    "championName": "Vayne",
    "abilityName": "Condemn",
    "description": "Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.",
    "type": "E",
    "imageId": "VayneCondemn.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vayne_R",
    "championId": "Vayne",
    "championName": "Vayne",
    "abilityName": "Final Hour",
    "description": "Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Move Speed from Night Hunter",
    "type": "R",
    "imageId": "VayneInquisition.png",
    "difficulty": "Easy"
  },
  {
    "id": "Veigar_Passive",
    "championId": "Veigar",
    "championName": "Veigar",
    "abilityName": "Phenomenal Evil Power",
    "description": "Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power.",
    "type": "Passive",
    "imageId": "VeigarEntropy.png",
    "difficulty": "Hard"
  },
  {
    "id": "Veigar_Q",
    "championId": "Veigar",
    "championName": "Veigar",
    "abilityName": "Baleful Strike",
    "description": "Veigar unleashes a bolt of dark energy that deals magic damage to the first two enemies hit. Units killed by this bolt grant Veigar some ability power permanently.",
    "type": "Q",
    "imageId": "VeigarBalefulStrike.png",
    "difficulty": "Medium"
  },
  {
    "id": "Veigar_W",
    "championId": "Veigar",
    "championName": "Veigar",
    "abilityName": "Dark Matter",
    "description": "Veigar calls a great mass of dark matter to fall from the sky to the target location, dealing magic damage when it lands. Stacks of Phenomenal Evil reduce Dark Matter's cooldown.",
    "type": "W",
    "imageId": "VeigarDarkMatter.png",
    "difficulty": "Medium"
  },
  {
    "id": "Veigar_E",
    "championId": "Veigar",
    "championName": "Veigar",
    "abilityName": "Event Horizon",
    "description": "Veigar twists the edges of space, creating a cage that Stuns enemies that pass through.",
    "type": "E",
    "imageId": "VeigarEventHorizon.png",
    "difficulty": "Medium"
  },
  {
    "id": "Veigar_R",
    "championId": "Veigar",
    "championName": "Veigar",
    "abilityName": "Primordial Burst",
    "description": "Blasts target enemy champion, dealing a large amount of magic damage, increasing based on the target's missing health.",
    "type": "R",
    "imageId": "VeigarR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Velkoz_Passive",
    "championId": "Velkoz",
    "championName": "Vel'Koz",
    "abilityName": "Organic Deconstruction",
    "description": "Vel'Koz's abilities apply <keywordName>Organic Deconstruction</keywordName> to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage.",
    "type": "Passive",
    "imageId": "VelKoz_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Velkoz_Q",
    "championId": "Velkoz",
    "championName": "Vel'Koz",
    "abilityName": "Plasma Fission",
    "description": "Vel'Koz shoots a bolt of plasma that splits in two on reactivation or upon hitting an enemy. The bolt slows and damages on hit.",
    "type": "Q",
    "imageId": "VelkozQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Velkoz_W",
    "championId": "Velkoz",
    "championName": "Vel'Koz",
    "abilityName": "Void Rift",
    "description": "Vel'Koz opens a rift to the void that deals an initial burst of damage, then explodes for a second burst of damage after a delay.",
    "type": "W",
    "imageId": "VelkozW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Velkoz_E",
    "championId": "Velkoz",
    "championName": "Vel'Koz",
    "abilityName": "Tectonic Disruption",
    "description": "Vel'Koz causes an area to explode, knocking up enemies, and knocking close enemies slightly away.",
    "type": "E",
    "imageId": "VelkozE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Velkoz_R",
    "championId": "Velkoz",
    "championName": "Vel'Koz",
    "abilityName": "Life Form Disintegration Ray",
    "description": "Vel'Koz unleashes a channelled beam that follows the cursor for 2.5 seconds that deals magic damage. Organic Deconstruction Researches enemy champions causing them to take true damage instead.",
    "type": "R",
    "imageId": "VelkozR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Vex_Passive",
    "championId": "Vex",
    "championName": "Vex",
    "abilityName": "Doom 'n Gloom",
    "description": "Vex periodically becomes empowered, causing her next basic Ability to fear enemies and interrupt dashes. Whenever a nearby enemy dashes, Vex applies a mark that can be consumed for bonus damage that also reduces the cooldown of her empowered state.",
    "type": "Passive",
    "imageId": "Icons_Vex_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Vex_Q",
    "championId": "Vex",
    "championName": "Vex",
    "abilityName": "Mistral Bolt",
    "description": "Launch a damaging missile that accelerates mid-flight.",
    "type": "Q",
    "imageId": "VexQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vex_W",
    "championId": "Vex",
    "championName": "Vex",
    "abilityName": "Personal Space",
    "description": "Gain a shield and damage nearby enemies.",
    "type": "W",
    "imageId": "VexW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vex_E",
    "championId": "Vex",
    "championName": "Vex",
    "abilityName": "Looming Darkness",
    "description": "Summon a damaging and slowing zone that applies Gloom to enemies.",
    "type": "E",
    "imageId": "VexE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vex_R",
    "championId": "Vex",
    "championName": "Vex",
    "abilityName": "Shadow Surge",
    "description": "Fire a missile that marks an enemy champion.  Recast to dash to them and deal damage.",
    "type": "R",
    "imageId": "VexR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Vi_Passive",
    "championId": "Vi",
    "championName": "Vi",
    "abilityName": "Blast Shield",
    "description": "Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.",
    "type": "Passive",
    "imageId": "ViPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Vi_Q",
    "championId": "Vi",
    "championName": "Vi",
    "abilityName": "Vault Breaker",
    "description": "Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.",
    "type": "Q",
    "imageId": "ViQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vi_W",
    "championId": "Vi",
    "championName": "Vi",
    "abilityName": "Denting Blows",
    "description": "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
    "type": "W",
    "imageId": "ViW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vi_E",
    "championId": "Vi",
    "championName": "Vi",
    "abilityName": "Relentless Force",
    "description": "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
    "type": "E",
    "imageId": "ViE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vi_R",
    "championId": "Vi",
    "championName": "Vi",
    "abilityName": "Cease and Desist",
    "description": "Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.",
    "type": "R",
    "imageId": "ViR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Viego_Passive",
    "championId": "Viego",
    "championName": "Viego",
    "abilityName": "Sovereign's Domination",
    "description": "Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own.",
    "type": "Passive",
    "imageId": "Viego_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Viego_Q",
    "championId": "Viego",
    "championName": "Viego",
    "abilityName": "Blade of the Ruined King",
    "description": "Viego's spectral blade passively deals bonus percent current Health damage <OnHit>On-Hit</OnHit> and strikes twice vs. enemies he recently hit with an Ability, stealing Health.<br><br>Viego can activate this Ability to thrust his zweihander forward, impaling enemies in front of him.",
    "type": "Q",
    "imageId": "ViegoQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Viego_W",
    "championId": "Viego",
    "championName": "Viego",
    "abilityName": "Spectral Maw",
    "description": "Viego charges up before dashing forward, releasing a ball of concentrated Black Mist that stuns the first enemy hit.",
    "type": "W",
    "imageId": "ViegoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Viego_E",
    "championId": "Viego",
    "championName": "Viego",
    "abilityName": "Harrowed Path",
    "description": "Viego commands the Black Mist to haunt and surround a piece of terrain. Viego can hide in the Mist as a wraith, gaining camouflage, Move Speed, and Attack Speed.",
    "type": "E",
    "imageId": "ViegoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Viego_R",
    "championId": "Viego",
    "championName": "Viego",
    "abilityName": "Heartbreaker",
    "description": "Viego teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.",
    "type": "R",
    "imageId": "ViegoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Viktor_Passive",
    "championId": "Viktor",
    "championName": "Viktor",
    "abilityName": "Glorious Evolution",
    "description": "Viktor can augment his basic abilities when he gets kills on enemies.",
    "type": "Passive",
    "imageId": "Viktor_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Viktor_Q",
    "championId": "Viktor",
    "championName": "Viktor",
    "abilityName": "Siphon Power",
    "description": "Viktor blasts an enemy unit dealing magic damage, gaining a shield and empowering his next basic attack.<br><br>Augment: Siphon Power's shield is increased by 60% and Viktor gains bonus Move Speed after casting.",
    "type": "Q",
    "imageId": "ViktorPowerTransfer.png",
    "difficulty": "Medium"
  },
  {
    "id": "Viktor_W",
    "championId": "Viktor",
    "championName": "Viktor",
    "abilityName": "Gravity Field",
    "description": "Viktor conjures a heavy gravitational field that slows enemies in its radius. Enemies who stay within the device for too long are stunned.<br><br>Augment: Viktor's non-periodic spells apply a slow to enemies.",
    "type": "W",
    "imageId": "ViktorGravitonField.png",
    "difficulty": "Medium"
  },
  {
    "id": "Viktor_E",
    "championId": "Viktor",
    "championName": "Viktor",
    "abilityName": "Death Ray",
    "description": "Viktor uses his robotic arm to fire a chaos beam that cuts across the field in a line, dealing damage to all enemies in its path.<br><br>Augment: An explosion follows the Death Ray's wake, dealing magic damage.",
    "type": "E",
    "imageId": "ViktorDeathRay.png",
    "difficulty": "Medium"
  },
  {
    "id": "Viktor_R",
    "championId": "Viktor",
    "championName": "Viktor",
    "abilityName": "Chaos Storm",
    "description": "Viktor conjures a singularity on the field which deals magic damage and interrupts enemy channels. The singularity then periodically does magic damage to all nearby enemies. Viktor can redirect the singularity.<br><br>Augment: The Chaos Storm moves 25% faster.",
    "type": "R",
    "imageId": "ViktorChaosStorm.png",
    "difficulty": "Easy"
  },
  {
    "id": "Vladimir_Passive",
    "championId": "Vladimir",
    "championName": "Vladimir",
    "abilityName": "Crimson Pact",
    "description": "Every 30 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.6 bonus Health (does not stack with itself).",
    "type": "Passive",
    "imageId": "VladimirP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Vladimir_Q",
    "championId": "Vladimir",
    "championName": "Vladimir",
    "abilityName": "Transfusion",
    "description": "Vladimir steals life from the target enemy. When Vladimir's resource is full, Transfusion will benefit from massively increased damage and healing for a brief time.",
    "type": "Q",
    "imageId": "VladimirQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vladimir_W",
    "championId": "Vladimir",
    "championName": "Vladimir",
    "abilityName": "Sanguine Pool",
    "description": "Vladimir sinks into a pool of blood, becoming untargetable for 2 seconds. Additionally, enemies on the pool are slowed and Vladimir siphons life from them.",
    "type": "W",
    "imageId": "VladimirSanguinePool.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vladimir_E",
    "championId": "Vladimir",
    "championName": "Vladimir",
    "abilityName": "Tides of Blood",
    "description": "Vladimir pays his own health to charge up a reservoir of blood which, when released, deals damage in the area around him but can be blocked by enemy units.",
    "type": "E",
    "imageId": "VladimirE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Vladimir_R",
    "championId": "Vladimir",
    "championName": "Vladimir",
    "abilityName": "Hemoplague",
    "description": "Vladimir infects an area with a virulent plague. Affected enemies take increased damage for the duration. After a few seconds, Hemoplague deals magic damage to infected enemies and heals Vladimir for each enemy Champion hit.",
    "type": "R",
    "imageId": "VladimirHemoplague.png",
    "difficulty": "Easy"
  },
  {
    "id": "Volibear_Passive",
    "championId": "Volibear",
    "championName": "Volibear",
    "abilityName": "The Relentless Storm",
    "description": "Volibear's Attacks and abilities grant Attack Speed, and eventually cause his Attacks to deal bonus magic damage to nearby enemies.",
    "type": "Passive",
    "imageId": "Volibear_Icon_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Volibear_Q",
    "championId": "Volibear",
    "championName": "Volibear",
    "abilityName": "Thundering Smash",
    "description": "Volibear gains speed towards enemies, <status>Stunning</status> and damaging the first one he Attacks.",
    "type": "Q",
    "imageId": "VolibearQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Volibear_W",
    "championId": "Volibear",
    "championName": "Volibear",
    "abilityName": "Frenzied Maul",
    "description": "Volibear damages an enemy, applying on-hit effects and marking them.  Casting this ability again on the same target deals bonus damage and Heals Volibear.",
    "type": "W",
    "imageId": "VolibearW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Volibear_E",
    "championId": "Volibear",
    "championName": "Volibear",
    "abilityName": "Sky Splitter",
    "description": "Volibear summons a lightning bolt at a location, dealing damage and Slowing enemies while granting Volibear a Shield if he's inside the blast radius.",
    "type": "E",
    "imageId": "VolibearE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Volibear_R",
    "championId": "Volibear",
    "championName": "Volibear",
    "abilityName": "Stormbringer",
    "description": "Volibear leaps to a target location, Slowing and damaging enemies beneath him while gaining bonus Health.  Enemy towers near his landing location become temporarily disabled.",
    "type": "R",
    "imageId": "VolibearR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Warwick_Passive",
    "championId": "Warwick",
    "championName": "Warwick",
    "abilityName": "Eternal Hunger",
    "description": "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples.",
    "type": "Passive",
    "imageId": "WarwickP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Warwick_Q",
    "championId": "Warwick",
    "championName": "Warwick",
    "abilityName": "Jaws of the Beast",
    "description": "Warwick lunges forward and bites his target, dealing damage based on their maximum health and healing for damage dealt.",
    "type": "Q",
    "imageId": "WarwickQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Warwick_W",
    "championId": "Warwick",
    "championName": "Warwick",
    "abilityName": "Blood Hunt",
    "description": "Warwick senses enemies below 50% health, gaining Move Speed toward and attack speed against them. When they fall below 20% health, he frenzies and these bonuses triple.",
    "type": "W",
    "imageId": "WarwickW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Warwick_E",
    "championId": "Warwick",
    "championName": "Warwick",
    "abilityName": "Primal Howl",
    "description": "Warwick gains damage reduction for 2.5 seconds. At the end, or if re-activated, he howls, causing nearby enemies to flee for 1 second.",
    "type": "E",
    "imageId": "WarwickE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Warwick_R",
    "championId": "Warwick",
    "championName": "Warwick",
    "abilityName": "Infinite Duress",
    "description": "Warwick leaps in a direction (scaling with his bonus Move Speed), suppressing the first champion he collides with for 1.5 seconds.",
    "type": "R",
    "imageId": "WarwickR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Xayah_Passive",
    "championId": "Xayah",
    "championName": "Xayah",
    "abilityName": "Clean Cuts",
    "description": "After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a <font color='#C200E1'>Feather</font>.",
    "type": "Passive",
    "imageId": "XayahPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Xayah_Q",
    "championId": "Xayah",
    "championName": "Xayah",
    "abilityName": "Double Daggers",
    "description": "Xayah throws two damaging daggers that also drop Feathers she can recall.",
    "type": "Q",
    "imageId": "XayahQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Xayah_W",
    "championId": "Xayah",
    "championName": "Xayah",
    "abilityName": "Deadly Plumage",
    "description": "Xayah creates a storm of blades that increase her Attack Speed and damage while also granting her Move Speed if she attacks a champion.",
    "type": "W",
    "imageId": "XayahW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Xayah_E",
    "championId": "Xayah",
    "championName": "Xayah",
    "abilityName": "Bladecaller",
    "description": "Xayah calls back all her dropped Feathers dealing damage and rooting enemies.",
    "type": "E",
    "imageId": "XayahE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Xayah_R",
    "championId": "Xayah",
    "championName": "Xayah",
    "abilityName": "Featherstorm",
    "description": "Xayah leaps into the air becoming untargetable and throwing out a fan of daggers, dropping Feathers she can recall.",
    "type": "R",
    "imageId": "XayahR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Xerath_Passive",
    "championId": "Xerath",
    "championName": "Xerath",
    "abilityName": "Mana Surge",
    "description": "Xerath's basic attacks periodically restore Mana. Whenever Xerath kills a unit, this cooldown is reduced.",
    "type": "Passive",
    "imageId": "Xerath_Passive1.png",
    "difficulty": "Hard"
  },
  {
    "id": "Xerath_Q",
    "championId": "Xerath",
    "championName": "Xerath",
    "abilityName": "Arcanopulse",
    "description": "Fires a long-range beam of energy, dealing magic damage to all targets hit.",
    "type": "Q",
    "imageId": "XerathArcanopulseChargeUp.png",
    "difficulty": "Medium"
  },
  {
    "id": "Xerath_W",
    "championId": "Xerath",
    "championName": "Xerath",
    "abilityName": "Eye of Destruction",
    "description": "Calls down a barrage of arcane energy, slowing and dealing magic damage to all enemies in an area. Targets in the middle receive additional damage and a stronger slow.",
    "type": "W",
    "imageId": "XerathArcaneBarrage2.png",
    "difficulty": "Medium"
  },
  {
    "id": "Xerath_E",
    "championId": "Xerath",
    "championName": "Xerath",
    "abilityName": "Shocking Orb",
    "description": "Deals magic damage to an enemy and stuns them.",
    "type": "E",
    "imageId": "XerathMageSpear.png",
    "difficulty": "Medium"
  },
  {
    "id": "Xerath_R",
    "championId": "Xerath",
    "championName": "Xerath",
    "abilityName": "Rite of the Arcane",
    "description": "Xerath immobilizes himself and gains numerous long-range barrages.",
    "type": "R",
    "imageId": "XerathLocusOfPower2.png",
    "difficulty": "Easy"
  },
  {
    "id": "XinZhao_Passive",
    "championId": "XinZhao",
    "championName": "Xin Zhao",
    "abilityName": "Determination",
    "description": "Every third attack deals bonus damage and heals Xin Zhao.",
    "type": "Passive",
    "imageId": "XinZhaoP.png",
    "difficulty": "Hard"
  },
  {
    "id": "XinZhao_Q",
    "championId": "XinZhao",
    "championName": "Xin Zhao",
    "abilityName": "Three Talon Strike",
    "description": "Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.",
    "type": "Q",
    "imageId": "XinZhaoQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "XinZhao_W",
    "championId": "XinZhao",
    "championName": "Xin Zhao",
    "abilityName": "Wind Becomes Lightning",
    "description": "Xin Zhao slashes in front of himself with his spear, then thrusts it forward, slowing affected enemies and marking them as Challenged.",
    "type": "W",
    "imageId": "XinZhaoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "XinZhao_E",
    "championId": "XinZhao",
    "championName": "Xin Zhao",
    "abilityName": "Audacious Charge",
    "description": "Xin Zhao charges to an enemy, gaining increased Attack Speed and dealing damage to all enemies in the area, slowing them briefly. Audacious Charge gains increased range against Challenged targets.",
    "type": "E",
    "imageId": "XinZhaoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "XinZhao_R",
    "championId": "XinZhao",
    "championName": "Xin Zhao",
    "abilityName": "Crescent Guard",
    "description": "Xin Zhao challenges an enemy he damaged recently. Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back, becoming impervious to damage dealt by champions outside of the circle created.",
    "type": "R",
    "imageId": "XinZhaoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Yasuo_Passive",
    "championId": "Yasuo",
    "championName": "Yasuo",
    "abilityName": "Way of the Wanderer",
    "description": "Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.",
    "type": "Passive",
    "imageId": "Yasuo_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Yasuo_Q",
    "championId": "Yasuo",
    "championName": "Yasuo",
    "abilityName": "Steel Tempest",
    "description": "Thrusts forward, damaging all enemies in a line.<br><br>On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks <font color='#6655CC'>Airborne</font>.<br><br>Steel Tempest is treated as a basic attack and scales with all the same things.",
    "type": "Q",
    "imageId": "YasuoQ1Wrapper.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yasuo_W",
    "championId": "Yasuo",
    "championName": "Yasuo",
    "abilityName": "Wind Wall",
    "description": "Creates a moving wall that blocks all enemy projectiles for 4 seconds.",
    "type": "W",
    "imageId": "YasuoW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yasuo_E",
    "championId": "Yasuo",
    "championName": "Yasuo",
    "abilityName": "Sweeping Blade",
    "description": "Dashes through target enemy, dealing magic damage. Each cast increases subsequent dash's damage, up to a max amount.<br><br>Cannot be re-cast on the same enemy for a few seconds.<br><br><font color='#99FF99'>If Steel Tempest is cast while dashing, it will strike as a circle.</font>",
    "type": "E",
    "imageId": "YasuoE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yasuo_R",
    "championId": "Yasuo",
    "championName": "Yasuo",
    "abilityName": "Last Breath",
    "description": "Blinks to an <factionIonia1>Airborne</factionIonia1> enemy champion, dealing physical damage and holding all <factionIonia1>Airborne</factionIonia1> enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm.<br><br>For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",
    "type": "R",
    "imageId": "YasuoR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Yone_Passive",
    "championId": "Yone",
    "championName": "Yone",
    "abilityName": "Way of the Hunter",
    "description": "Yone deals magic damage with every second Attack. In addition, his critical strike chance is increased.",
    "type": "Passive",
    "imageId": "YonePassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Yone_Q",
    "championId": "Yone",
    "championName": "Yone",
    "abilityName": "Mortal Steel",
    "description": "Thrusts forward, damaging all enemies in a line.<br><br>On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Mortal Steel dashes Yone forward with a gust of wind knocking enemies <status>Airborne</status>.<br><br>Mortal Steel is treated as a basic attack and scales with all the same things.",
    "type": "Q",
    "imageId": "YoneQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yone_W",
    "championId": "Yone",
    "championName": "Yone",
    "abilityName": "Spirit Cleave",
    "description": "Cleaves forward, damaging all enemies in a cone. Grants a shield to Yone, the value is increased by the number of champions hit by the swipe.<br><br>Spirit Cleave's cooldown and cast time scale with attack speed.",
    "type": "W",
    "imageId": "YoneW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yone_E",
    "championId": "Yone",
    "championName": "Yone",
    "abilityName": "Soul Unbound",
    "description": "Yone's spirit leaves his body behind, gaining Move Speed. When this ability ends, Yone's spirit is forced back to his body and he repeats a portion of the damage he dealt as a spirit.",
    "type": "E",
    "imageId": "YoneE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yone_R",
    "championId": "Yone",
    "championName": "Yone",
    "abilityName": "Fate Sealed",
    "description": "Yone blinks behind the last champion in a line with a slash so powerful it pulls all enemies hit towards him.",
    "type": "R",
    "imageId": "YoneR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Yorick_Passive",
    "championId": "Yorick",
    "championName": "Yorick",
    "abilityName": "Shepherd of Souls",
    "description": "<font color='#FF9900'>The Cursed Horde:</font> Yorick can summon Mist Walkers to swarm and attack nearby enemies.",
    "type": "Passive",
    "imageId": "Yorick_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Yorick_Q",
    "championId": "Yorick",
    "championName": "Yorick",
    "abilityName": "Last Rites",
    "description": "Yorick deals bonus damage on his next attack and heals himself. If the target dies a grave will be dug.",
    "type": "Q",
    "imageId": "YorickQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yorick_W",
    "championId": "Yorick",
    "championName": "Yorick",
    "abilityName": "Dark Procession",
    "description": "Yorick summons a destructible wall at target location that will block enemy movement.",
    "type": "W",
    "imageId": "YorickW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yorick_E",
    "championId": "Yorick",
    "championName": "Yorick",
    "abilityName": "Mourning Mist",
    "description": "Yorick throws a globule of Black Mist that damages, slows and marks enemies.",
    "type": "E",
    "imageId": "YorickE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yorick_R",
    "championId": "Yorick",
    "championName": "Yorick",
    "abilityName": "Eulogy of the Isles",
    "description": "Yorick summons the Maiden of the Mist that causes Yorick's attacks against the Maiden's target to deal bonus damage. The Maiden will also automatically raise Walkers from dead enemies.",
    "type": "R",
    "imageId": "YorickR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Yuumi_Passive",
    "championId": "Yuumi",
    "championName": "Yuumi",
    "abilityName": "Feline Friendship",
    "description": "Periodically, when Yuumi strikes a champion with an attack or ability, she restores health to herself and the next ally she Attaches to.<br><br>While Attached, Yuumi generates a special bond with her allies. The ally with the strongest bond enhances Yuumi's abilities while she is Attached to them.",
    "type": "Passive",
    "imageId": "YuumiP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Yuumi_Q",
    "championId": "Yuumi",
    "championName": "Yuumi",
    "abilityName": "Prowling Projectile",
    "description": "Yuumi fires a missile, dealing damage and slowing first target hit. It deals bonus damage and an enchanced slow if it takes at least 1.35 seconds to get to its target. While on her Best Friend, the slow is always enhanced and grants bonus On-Hit damage to her ally.<br><br>While Attached, the missile can be controlled with your cursor for a brief period.",
    "type": "Q",
    "imageId": "YuumiQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yuumi_W",
    "championId": "Yuumi",
    "championName": "Yuumi",
    "abilityName": "You and Me!",
    "description": "Yuumi dashes to a target ally, becoming untargetable from everything except turrets. While on her Best Friend, she gains Heal & Shield Power and grants her Ally On-Hit healing.",
    "type": "W",
    "imageId": "YuumiW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yuumi_E",
    "championId": "Yuumi",
    "championName": "Yuumi",
    "abilityName": "Zoomies",
    "description": "Shields Yuumi and boosts Move Speed and Attack Speed. If she's attached, she passes it to her ally instead.<br>",
    "type": "E",
    "imageId": "YuumiE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Yuumi_R",
    "championId": "Yuumi",
    "championName": "Yuumi",
    "abilityName": "Final Chapter",
    "description": "Yuumi channels five waves that damage enemies and heal allies. Yuumi can move, attach, and cast Zoomies! while channeling. While on her Best Friend, this spell also follows her mouse.",
    "type": "R",
    "imageId": "YuumiR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Zac_Passive",
    "championId": "Zac",
    "championName": "Zac",
    "abilityName": "Cell Division",
    "description": "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown.",
    "type": "Passive",
    "imageId": "ZacPassive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Zac_Q",
    "championId": "Zac",
    "championName": "Zac",
    "abilityName": "Stretching Strikes",
    "description": "Zac stretches an arm, grabbing an enemy. Attacking a different enemy will cause him to throw both targets towards each other.",
    "type": "Q",
    "imageId": "ZacQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zac_W",
    "championId": "Zac",
    "championName": "Zac",
    "abilityName": "Unstable Matter",
    "description": "Zac explodes outward towards nearby enemies, dealing a percentage of their maximum health as magic damage.",
    "type": "W",
    "imageId": "ZacW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zac_E",
    "championId": "Zac",
    "championName": "Zac",
    "abilityName": "Elastic Slingshot",
    "description": "Zac attaches his arms to the ground and stretches back, launching himself forward.",
    "type": "E",
    "imageId": "ZacE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zac_R",
    "championId": "Zac",
    "championName": "Zac",
    "abilityName": "Let's Bounce!",
    "description": "Zac bounces four times, knocking up enemies hit and slowing them.",
    "type": "R",
    "imageId": "ZacR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Zed_Passive",
    "championId": "Zed",
    "championName": "Zed",
    "abilityName": "Contempt for the Weak",
    "description": "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion.",
    "type": "Passive",
    "imageId": "ZedP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Zed_Q",
    "championId": "Zed",
    "championName": "Zed",
    "abilityName": "Razor Shuriken",
    "description": "Zed and his shadows throw their shurikens.<br><br>Each shuriken deals damage to every enemy hit.",
    "type": "Q",
    "imageId": "ZedQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zed_W",
    "championId": "Zed",
    "championName": "Zed",
    "abilityName": "Living Shadow",
    "description": "<font color='#FF9900'>Passive:</font> Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability.<br><br><font color='#FF9900'>Active:</font> Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
    "type": "W",
    "imageId": "ZedW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zed_E",
    "championId": "Zed",
    "championName": "Zed",
    "abilityName": "Shadow Slash",
    "description": "Zed and his Shadows slash, dealing damage to nearby enemies. Enemies hit by a Shadow's slash are slowed.",
    "type": "E",
    "imageId": "ZedE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zed_R",
    "championId": "Zed",
    "championName": "Zed",
    "abilityName": "Death Mark",
    "description": "Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.",
    "type": "R",
    "imageId": "ZedR.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zeri_Passive",
    "championId": "Zeri",
    "championName": "Zeri",
    "abilityName": "Living Battery",
    "description": "Zeri's Attacks deal magic damage and are treated as Abilities. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack deals bonus damage.",
    "type": "Passive",
    "imageId": "ZeriP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Zeri_Q",
    "championId": "Zeri",
    "championName": "Zeri",
    "abilityName": "Burst Fire",
    "description": "Burst Fire shoots a burst of 7 rounds that deal attack damage to the first enemy hit. This Ability is treated as an Attack.",
    "type": "Q",
    "imageId": "ZeriQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zeri_W",
    "championId": "Zeri",
    "championName": "Zeri",
    "abilityName": "Ultrashock Laser",
    "description": "Zeri fires an electric pulse that slows and damages the first enemy hit. If the pulse hits a wall it expands into a long range laser.",
    "type": "W",
    "imageId": "ZeriW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zeri_E",
    "championId": "Zeri",
    "championName": "Zeri",
    "abilityName": "Spark Surge",
    "description": "Zeri dashes a short distance and energizes her next 3 shots of Burst Fire, causing them to pierce through enemies. She will vault and grind over any terrain she touches.",
    "type": "E",
    "imageId": "ZeriE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zeri_R",
    "championId": "Zeri",
    "championName": "Zeri",
    "abilityName": "Lightning Crash",
    "description": "Zeri discharges a nova of electricity and overcharges herself, gaining increased damage and stacking Move Speed that refreshes and gets stronger every time she hits an enemy champion. While overcharged, Burst fire becomes a faster triple shot that chains lightning between enemies.",
    "type": "R",
    "imageId": "ZeriR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Ziggs_Passive",
    "championId": "Ziggs",
    "championName": "Ziggs",
    "abilityName": "Short Fuse",
    "description": "Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability.",
    "type": "Passive",
    "imageId": "ZiggsPassiveReady.png",
    "difficulty": "Hard"
  },
  {
    "id": "Ziggs_Q",
    "championId": "Ziggs",
    "championName": "Ziggs",
    "abilityName": "Bouncing Bomb",
    "description": "Ziggs throws a bouncing bomb that deals magic damage.",
    "type": "Q",
    "imageId": "ZiggsQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ziggs_W",
    "championId": "Ziggs",
    "championName": "Ziggs",
    "abilityName": "Satchel Charge",
    "description": "Ziggs flings an explosive charge that detonates after a delay, or when this ability is activated again. The explosion deals magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage. <br><br>Ziggs can use the Satchel to hexplode vulnerable enemy turrets.",
    "type": "W",
    "imageId": "ZiggsW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ziggs_E",
    "championId": "Ziggs",
    "championName": "Ziggs",
    "abilityName": "Hexplosive Minefield",
    "description": "Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and slowing. Successive mine detonations on the same target deal reduced damage.",
    "type": "E",
    "imageId": "ZiggsE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Ziggs_R",
    "championId": "Ziggs",
    "championName": "Ziggs",
    "abilityName": "Mega Inferno Bomb",
    "description": "Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take more damage than those farther away.",
    "type": "R",
    "imageId": "ZiggsR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Zilean_Passive",
    "championId": "Zilean",
    "championName": "Zilean",
    "abilityName": "Time In A Bottle",
    "description": "Zilean stores time as Experience and can grant it to his allies. When he has enough Experience to finish an ally's level up, he can right-click them to impart it. Zilean receives as much Experience as he gives.",
    "type": "Passive",
    "imageId": "Zilean_Passive.png",
    "difficulty": "Hard"
  },
  {
    "id": "Zilean_Q",
    "championId": "Zilean",
    "championName": "Zilean",
    "abilityName": "Time Bomb",
    "description": "Tosses a bomb to target area that sticks to units that come near it (prioritizes Champions). It detonates after 3 seconds, dealing area of effect damage. If a Time Bomb is detonated early by another Time Bomb, it also stuns enemies.",
    "type": "Q",
    "imageId": "ZileanQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zilean_W",
    "championId": "Zilean",
    "championName": "Zilean",
    "abilityName": "Rewind",
    "description": "Zilean can prepare himself for future confrontations, reducing the cooldowns of his other basic abilities.",
    "type": "W",
    "imageId": "ZileanW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zilean_E",
    "championId": "Zilean",
    "championName": "Zilean",
    "abilityName": "Time Warp",
    "description": "Zilean bends time around any unit, decreasing an enemy's Move Speed or increasing an ally's Move Speed for a short time.",
    "type": "E",
    "imageId": "TimeWarp.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zilean_R",
    "championId": "Zilean",
    "championName": "Zilean",
    "abilityName": "Chronoshift",
    "description": "Zilean places a protective time rune on an allied champion, teleporting the champion back in time if they take lethal damage.",
    "type": "R",
    "imageId": "ChronoShift.png",
    "difficulty": "Easy"
  },
  {
    "id": "Zoe_Passive",
    "championId": "Zoe",
    "championName": "Zoe",
    "abilityName": "More Sparkles!",
    "description": "Zoe's next basic attack after casting a spell deals bonus magic damage.",
    "type": "Passive",
    "imageId": "Zoe_P.png",
    "difficulty": "Hard"
  },
  {
    "id": "Zoe_Q",
    "championId": "Zoe",
    "championName": "Zoe",
    "abilityName": "Paddle Star!",
    "description": "Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.",
    "type": "Q",
    "imageId": "ZoeQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zoe_W",
    "championId": "Zoe",
    "championName": "Zoe",
    "abilityName": "Spell Thief",
    "description": "Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.",
    "type": "W",
    "imageId": "ZoeW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zoe_E",
    "championId": "Zoe",
    "championName": "Zoe",
    "abilityName": "Sleepy Trouble Bubble",
    "description": "Causes the target to become drowsy, then fall asleep. While asleep, the target's Magic Resist is reduced. The first source of damage that breaks the sleep is doubled, up to a cap.",
    "type": "E",
    "imageId": "ZoeE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zoe_R",
    "championId": "Zoe",
    "championName": "Zoe",
    "abilityName": "Portal Jump",
    "description": "Blink to a nearby position for 1 second. Then blink back.",
    "type": "R",
    "imageId": "ZoeR.png",
    "difficulty": "Easy"
  },
  {
    "id": "Zyra_Passive",
    "championId": "Zyra",
    "championName": "Zyra",
    "abilityName": "Garden of Thorns",
    "description": "Seeds spawn around Zyra periodically, becoming faster with level. Zyra can cast Deadly Spines or Grasping Roots near seeds to grow plants, who fight for Zyra.",
    "type": "Passive",
    "imageId": "ZyraP.png",
    "difficulty": "Hard"
  },
  {
    "id": "Zyra_Q",
    "championId": "Zyra",
    "championName": "Zyra",
    "abilityName": "Deadly Spines",
    "description": "Thick vines spread through the ground and explode into spines, dealing magic damage to enemies within the area. If cast near a seed, Deadly Spines grows a Thorn Spitter plant, which fires at enemies from afar.",
    "type": "Q",
    "imageId": "ZyraQ.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zyra_W",
    "championId": "Zyra",
    "championName": "Zyra",
    "abilityName": "Rampant Growth",
    "description": "Zyra plants a seed, lasting up to 60 seconds. Deadly Spines and Grasping Roots cast near seeds will turn them into plants who fight for Zyra. Zyra can store multiple seeds at once, and killing enemies reduces Rampant Growth's recharge time.",
    "type": "W",
    "imageId": "ZyraW.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zyra_E",
    "championId": "Zyra",
    "championName": "Zyra",
    "abilityName": "Grasping Roots",
    "description": "Zyra sends forth vines through the ground to ensnare her target, dealing damage and rooting enemies they come across. If cast near a seed, Grasping Roots grows a Vine Lasher, whose short range attacks reduce enemy Move Speed.",
    "type": "E",
    "imageId": "ZyraE.png",
    "difficulty": "Medium"
  },
  {
    "id": "Zyra_R",
    "championId": "Zyra",
    "championName": "Zyra",
    "abilityName": "Stranglethorns",
    "description": "Zyra summons a twisted thicket at her target location, dealing damage to enemies as it expands and knocking them airborne as it contracts. Plants within the thicket are enraged.",
    "type": "R",
    "imageId": "ZyraR.png",
    "difficulty": "Easy"
  }
];

// ============== UTILITY FUNCTIONS ==============

export function getAllAbilities(): AbilityData[] {
  return ABILITY_STATIC_DATA;
}

export function getAbilitiesByType(type: 'Passive' | 'Q' | 'W' | 'E' | 'R'): AbilityData[] {
  return ABILITY_STATIC_DATA.filter(ability => ability.type === type);
}

export function getAbilitiesByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): AbilityData[] {
  return ABILITY_STATIC_DATA.filter(ability => ability.difficulty === difficulty);
}

export function getAbilitiesByChampion(championName: string): AbilityData[] {
  return ABILITY_STATIC_DATA.filter(ability => 
    ability.championName.toLowerCase() === championName.toLowerCase()
  );
}

export function getRandomAbility(): AbilityData {
  const abilities = getAllAbilities();
  return abilities[Math.floor(Math.random() * abilities.length)];
}

export function getRandomAbilityByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): AbilityData {
  const abilities = getAbilitiesByDifficulty(difficulty);
  return abilities[Math.floor(Math.random() * abilities.length)];
}

// Funkcja do codziennego wyboru umiejętności (deterministyczna)
export function getDailyAbility(): AbilityData {
  const today = new Date();
  const warsawTime = new Date(today.toLocaleString("en-US", {timeZone: "Europe/Warsaw"}));
  const dateString = warsawTime.toISOString().split('T')[0]; // YYYY-MM-DD
  
  // Prosta funkcja hash dla daty
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  const abilities = getAllAbilities();
  const index = Math.abs(hash) % abilities.length;
  return abilities[index];
}

// Funkcja do uzyskania URL obrazka umiejętności z Data Dragon API
export function getAbilityImageUrl(ability: AbilityData): string {
  const version = '14.23.1';
  
  if (ability.type === 'Passive') {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${ability.imageId}`;
  } else {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${ability.imageId}`;
  }
}

// Statystyki bazy danych
export const ABILITY_STATS = {
  totalAbilities: 845,
  totalChampions: 169,
  byType: {
    Passive: 169,
    Q: 169,
    W: 169,
    E: 169,
    R: 169
  },
  byDifficulty: {
    Easy: 166,
    Medium: 510,
    Hard: 169
  }
};

// Lista wszystkich championów dla których mamy dane
export const CHAMPIONS_WITH_ABILITIES = [
  'Aatrox',
  'Ahri',
  'Akali',
  'Akshan',
  'Alistar',
  'Ambessa',
  'Amumu',
  'Anivia',
  'Annie',
  'Aphelios',
  'Ashe',
  'Aurelion Sol',
  'Aurora',
  'Azir',
  'Bard',
  "Bel'Veth",
  'Blitzcrank',
  'Brand',
  'Braum',
  'Briar',
  'Caitlyn',
  'Camille',
  'Cassiopeia',
  "Cho'Gath",
  'Corki',
  'Darius',
  'Diana',
  'Draven',
  'Dr. Mundo',
  'Ekko',
  'Elise',
  'Evelynn',
  'Ezreal',
  'Fiddlesticks',
  'Fiora',
  'Fizz',
  'Galio',
  'Gangplank',
  'Garen',
  'Gnar',
  'Gragas',
  'Graves',
  'Gwen',
  'Hecarim',
  'Heimerdinger',
  'Hwei',
  'Illaoi',
  'Irelia',
  'Ivern',
  'Janna',
  'Jarvan IV',
  'Jax',
  'Jayce',
  'Jhin',
  'Jinx',
  "Kai'Sa",
  'Kalista',
  'Karma',
  'Karthus',
  'Kassadin',
  'Katarina',
  'Kayle',
  'Kayn',
  'Kennen',
  "Kha'Zix",
  'Kindred',
  'Kled',
  "Kog'Maw",
  "K'Sante",
  'LeBlanc',
  'Lee Sin',
  'Leona',
  'Lillia',
  'Lissandra',
  'Lucian',
  'Lulu',
  'Lux',
  'Malphite',
  'Malzahar',
  'Maokai',
  'Master Yi',
  'Milio',
  'Miss Fortune',
  'Wukong',
  'Mordekaiser',
  'Morgana',
  'Naafiri',
  'Nami',
  'Nasus',
  'Nautilus',
  'Neeko',
  'Nidalee',
  'Nilah',
  'Nocturne',
  'Nunu & Willump',
  'Olaf',
  'Orianna',
  'Ornn',
  'Pantheon',
  'Poppy',
  'Pyke',
  'Qiyana',
  'Quinn',
  'Rakan',
  'Rammus',
  "Rek'Sai",
  'Rell',
  'Renata Glasc',
  'Renekton',
  'Rengar',
  'Riven',
  'Rumble',
  'Ryze',
  'Samira',
  'Sejuani',
  'Senna',
  'Seraphine',
  'Sett',
  'Shaco',
  'Shen',
  'Shyvana',
  'Singed',
  'Sion',
  'Sivir',
  'Skarner',
  'Smolder',
  'Sona',
  'Soraka',
  'Swain',
  'Sylas',
  'Syndra',
  'Tahm Kench',
  'Taliyah',
  'Talon',
  'Taric',
  'Teemo',
  'Thresh',
  'Tristana',
  'Trundle',
  'Tryndamere',
  'Twisted Fate',
  'Twitch',
  'Udyr',
  'Urgot',
  'Varus',
  'Vayne',
  'Veigar',
  "Vel'Koz",
  'Vex',
  'Vi',
  'Viego',
  'Viktor',
  'Vladimir',
  'Volibear',
  'Warwick',
  'Xayah',
  'Xerath',
  'Xin Zhao',
  'Yasuo',
  'Yone',
  'Yorick',
  'Yuumi',
  'Zac',
  'Zed',
  'Zeri',
  'Ziggs',
  'Zilean',
  'Zoe',
  'Zyra'
];

console.log('🎮 Załadowano kompletną bazę umiejętności:', ABILITY_STATS);
