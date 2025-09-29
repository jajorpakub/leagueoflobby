import { useState } from 'react'
import './Auguments.css'

interface Augument {
  name: string
  description: string
  tier: 'Silver' | 'Gold' | 'Prismatic'
}

const auguments: Augument[] = [
  // Silver Auguments - Prawdziwe nazwy z Arena wiki
  { name: 'ADAPt', description: 'Convert 100% of your bonus AD into ability power. Additionally, increase your ability power by 15%.', tier: 'Silver' },
  { name: 'Blunt Force', description: 'Increases attack damage by 15%.', tier: 'Silver' },
  { name: 'Buff Buddies', description: 'Grants Crest of Cinders and Crest of Insight permanently.', tier: 'Silver' },
  { name: 'Castle', description: 'Replaces Flee with Castle. CASTLE: Dash to your ally\'s location while they do so to yours, swapping places with them. You then gain 60% bonus movement speed for 4 seconds.', tier: 'Silver' },
  { name: 'Clothesline', description: 'Form a tether between you and your ally that Burns enemies in a 50 radius width, dealing 5-75 magic damage every 0.25 seconds.', tier: 'Silver' },
  { name: 'Contract Killer', description: 'At the start of the combat phase in each round, mark a champion on the enemy team. The mark causes them to take 15% increased damage from your team and have a kill bounty of 150 Gold.', tier: 'Silver' },
  { name: 'Deft', description: 'Grants 60% bonus attack speed.', tier: 'Silver' },
  { name: 'Dematerialize', description: 'Scoring a champion takedown grants a permanent 9 bonus Attack Damage or 15 Ability Power (Adaptive). This effect can be triggered only once per champion per round.', tier: 'Silver' },
  { name: 'Don\'t Blink', description: 'Deal 1% increased damage per 10 movement speed you have more than the target.', tier: 'Silver' },
  { name: 'Don\'t Chase', description: 'Gain and activate Singed\'s Poison Trail. POISON TRAIL: Gain ghosting and continually create a toxic cloud behind you that lingers for 3.25 seconds.', tier: 'Silver' },
  { name: 'EscAPADe', description: 'Convert 100% of your AP into bonus attack damage. Additionally, increase your attack damage by 10%.', tier: 'Silver' },
  { name: 'Erosion', description: 'Each instance of damage dealt to an enemy reduces their armor and magic resistance by 1.5% for 4 seconds, stacking up to 20 times for a total of 30% resistances reduction.', tier: 'Silver' },
  { name: 'Executioner', description: 'Deal 15% increased damage to enemies below 50% of their maximum health. Scoring a champion takedown resets the cooldown of all your basic abilities.', tier: 'Silver' },
  { name: 'Fallen Aegis', description: 'At the start of the combat phase in each round, gain Morgana\'s Black Shield, granting you a shield for 12 seconds that absorbs 50-350 magic damage and grants crowd control immunity while it holds.', tier: 'Silver' },
  { name: 'Fire Sale', description: 'Upon selecting this augment, all of your items are sold at the shop for 100% of their gold value (STARTER ITEMS & BOOTS: 500 Gold, LEGENDARY ITEM: 2500 Gold, PRISMATIC ITEM: 4000 Gold).', tier: 'Silver' },
  { name: 'First-Aid Kit', description: 'Grants 20% heal and shield power.', tier: 'Silver' },
  { name: 'Flashbang', description: 'Using Flash creates an explosion around the blink location that deals 70-240 magic damage to nearby enemies and slows them by 35% for 1.25 seconds.', tier: 'Silver' },
  { name: 'Flashy', description: 'Your Flash now has 3 charges with a 3-second cooldown between casts, gaining maximum charges at the start of each phase in a round. Additionally, your Flash\'s cooldown is now reset every round.', tier: 'Silver' },
  { name: 'Frozen Foundations', description: 'Replaces Flee with Frozen Foundations. FROZEN FOUNDATIONS: Summons a wall of ice at the target location for 5 seconds, knocking aside enemies in the area.', tier: 'Silver' },
  { name: 'Frost Wraith', description: 'Automatically casts a cold pulse that roots enemies within 450 units for 1.25 seconds (6.5 second cooldown).', tier: 'Silver' },
  { name: 'Goredrink', description: 'Gain 20% omnivamp.', tier: 'Silver' },
  { name: 'Heavy Hitter', description: 'Basic attacks deal bonus physical damage equal to 3.5% of your maximum health.', tier: 'Silver' },
  { name: 'Hold Very Still', description: 'Gain Teemo\'s Guerrilla Warfare. GUERRILLA WARFARE: Gain invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth, channeling, or being in stasis.', tier: 'Silver' },
  { name: 'Homeguard', description: 'Gain 100% bonus movement speed. This bonus is lost for 3 seconds after taking damage.', tier: 'Silver' },
  { name: 'Ice Cold', description: 'Your slowing effects reduce the movement speed of targets by an additional 100.', tier: 'Silver' },
  { name: 'Infernal Soul', description: 'Grants the Infernal Dragon Soul.', tier: 'Silver' },
  { name: 'Juice Box', description: 'Each round, you and your ally gain a Juice for free that is automatically consumed at the start of the combat phase.', tier: 'Silver' },
  { name: 'Light \'em Up!', description: 'Basic attacks generate a stack, up to 4. The fourth stack consumes them all to quickly launch 4 fireworks at the target that each deal 11-80 bonus magic damage on-hit.', tier: 'Silver' },
  { name: 'Mind to Matter', description: 'Grants bonus health equal to 50% maximum mana.', tier: 'Silver' },
  { name: 'Mirror Image', description: 'Gain LeBlanc\'s Mirror Image. MIRROR IMAGE: Upon being damaged to 30% maximum health, create a clone of yourself, after which you both instantly become invisible for 1.25 seconds (60 second cooldown).', tier: 'Silver' },
  { name: 'Mountain Soul', description: 'Grants the Mountain Dragon Soul.', tier: 'Silver' },
  { name: 'Ocean Soul', description: 'Grants the Ocean Dragon Soul, which has a modified base heal value of 100.', tier: 'Silver' },
  { name: 'Scoped Weapons', description: 'Gain (75 / 50) bonus attack range.', tier: 'Silver' },
  { name: 'Self Destruct', description: 'At the start of the combat phase in each round, you have a bomb attached to you that detonates after 15 seconds, creating an explosion that deals true damage equal to 20% of the target\'s maximum health to enemies within 350 units.', tier: 'Silver' },
  { name: 'Shadow Runner', description: 'After dashing, blinking, or exiting stealth, gain 300 bonus movement speed for 2 seconds.', tier: 'Silver' },
  { name: 'Snowball Fight!', description: 'Replaces Flee with Mark / Dash. MARK: Throws a snowball in the target direction that deals 15-100 true damage to the first enemy hit and marks them for 3 seconds (6 second cooldown).', tier: 'Silver' },
  { name: 'Spin To Win', description: 'Your spinning abilities deal 30% increased damage and benefit from 30 ability haste.', tier: 'Silver' },
  { name: 'Stackosaurus Rex', description: 'Increase the number of permanent stacks you gain from abilities by 75%.', tier: 'Silver' },
  { name: 'Stats!', description: 'Upon selecting this augment, gain 2 Stat Bonus Anvils for free.', tier: 'Silver' },
  { name: 'Tank It Or Leave It', description: 'Gain Critical Defend Chance equal to 100% critical strike chance, up to 50%. Additionally, gain 25% critical strike chance.', tier: 'Silver' },
  { name: 'Tormentor', description: 'Immobilizing an enemy champion inflicts them with a Burn for 5 seconds, dealing magic damage every second equal to 0.8% of the target\'s maximum health over the duration.', tier: 'Silver' },
  { name: 'Typhoon', description: 'Basic attacks fire a bolt at an additional target that deals 30% AD and applies on-hit effects at 100% effectiveness.', tier: 'Silver' },
  { name: 'Ultimate Unstoppable', description: 'Casting your ultimate ability grants you crowd control immunity for 3 seconds (8 second cooldown).', tier: 'Silver' },
  { name: 'Vulnerability', description: 'Damage dealt by items and damage over time effects can now critically strike for (145% + 40%) bonus damage. Additionally, gain 25% critical strike chance.', tier: 'Silver' },
  { name: 'Warmup Routine', description: 'Replaces Flee with Warmup Routine. WARMUP ROUTINE: Channel for up to 12 seconds to increase your damage output by 2% per second, up to 24%.', tier: 'Silver' },
  { name: 'Witchful Thinking', description: 'Grants 70 ability power.', tier: 'Silver' },

  // Gold Auguments - Prawdziwe nazwy z Arena wiki
  { name: 'All For You', description: 'Your heals and shields on allied champions are increased in effectiveness by 30%.', tier: 'Gold' },
  { name: 'Apex Inventor', description: 'Grants 300 item haste, which is equivalent to 75% cooldown reduction for items.', tier: 'Gold' },
  { name: 'Banner of Command', description: 'Replaces Flee with Banner of Command. BANNER OF COMMAND: Grants your ally 15% size, bonus health, attack damage, ability power, and attack speed for 10 seconds.', tier: 'Gold' },
  { name: 'Big Brain', description: 'At the start of the combat phase in each round, gain a shield that absorbs damage equal to 300% AP and lasts until destroyed.', tier: 'Gold' },
  { name: 'Blood Brother', description: 'Gain Darius\' Hemorrhage. PASSIVE: Damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.', tier: 'Gold' },
  { name: 'Bread And Butter', description: 'Your champion\'s first basic ability (Q) gains 200 ability haste.', tier: 'Gold' },
  { name: 'Bread And Cheese', description: 'Your champion\'s third basic ability (E) gains 200 ability haste.', tier: 'Gold' },
  { name: 'Bread And Jam', description: 'Your champion\'s second basic ability (W) gains 200 ability haste.', tier: 'Gold' },
  { name: 'Cannon Fodder', description: 'At the start of the combat phase in each round, launch yourself from a catapult. The catapult lasts for up to 20 seconds before expiring.', tier: 'Gold' },
  { name: 'Celestial Body', description: 'Gain 1250 bonus health, but reduce your damage output by 10%.', tier: 'Gold' },
  { name: 'Combo Master', description: 'Gain the Electrocute and Phase Rush keystone runes.', tier: 'Gold' },
  { name: 'Critical Healing', description: 'Your heals and shields now have a chance equal to 100% critical strike chance to increase in effectiveness by 40%. Additionally, gain 25% critical strike chance.', tier: 'Gold' },
  { name: 'Dawnbringer\'s Resolve', description: 'Upon dropping below 50% maximum health for the first time, you are healed for 30% maximum health over 3 seconds.', tier: 'Gold' },
  { name: 'Defensive Maneuvers', description: 'Replaces Flee with Defensive Maneuvers. DEFENSIVE MANEUVERS: Casts both Barrier and Heal on you and your ally.', tier: 'Gold' },
  { name: 'Demon\'s Dance', description: 'Gain the Fleet Footwork and Grasp of the Undying keystone runes.', tier: 'Gold' },
  { name: 'Die Another Day', description: 'Replaces Flee with Die Another Day. DIE ANOTHER DAY: Blesses the ground underneath you, summoning a zone for 4 seconds that grants a minimum health threshold to all units inside equal to 10% of their maximum health.', tier: 'Gold' },
  { name: 'Dive Bomber', description: 'Your team\'s first death each round creates an explosion at the location of the champion that died, dealing true damage equal to 20% of the target\'s maximum health to enemies within 500 units.', tier: 'Gold' },
  { name: 'Ethereal Weapon', description: 'Your abilities apply on-hit effects at 100% effectiveness (1 second cooldown per target).', tier: 'Gold' },
  { name: 'Extendo-Arm', description: 'Automatically casts Blitzcrank\'s Rocket Grab at a nearby enemy champion, pulling the first target hit towards you and stunning them for 0.65 seconds (12 second cooldown).', tier: 'Gold' },
  { name: 'Firebrand', description: 'Basic attacks apply a Burn for 5 seconds that deals bonus magic damage per second equal to 0.4% of the target\'s maximum health over the duration. The Burn stacks infinitely and refreshes with each application.', tier: 'Gold' },
  { name: 'From Beginning to End', description: 'Gain the Dark Harvest and First Strike keystone runes.', tier: 'Gold' },
  { name: 'Fruits of Your Labor', description: 'Increase the effects of Power Flowers by 25%. Additionally, hitting a Power Flower now grants its effects to your ally if they are within 700 units of you.', tier: 'Gold' },
  { name: 'Holy Fire', description: 'Your heals and shields cause you to fire a missile to the nearest enemy champion within 650 units over 0.32 seconds, applying a Burn upon arrival that deals magic damage equal to 0.2% of the target\'s maximum health every second over 5 seconds.', tier: 'Gold' },
  { name: 'Impassable', description: 'Gain the Aftershock and Glacial Augment keystone runes.', tier: 'Gold' },
  { name: 'It\'s Critical', description: 'Grants 40% critical strike chance.', tier: 'Gold' },
  { name: 'It\'s Killing Time', description: 'Upon casting your ultimate ability, you apply Zed\'s Death Mark to all enemy champions (8 second cooldown). The mark stores 40% of all pre-mitigation damage, excluding true damage, dealt to the affected target.', tier: 'Gold' },
  { name: 'Keystone Conjurer', description: 'Gain the Arcane Comet and Summon Aery keystone runes.', tier: 'Gold' },
  { name: 'Light Warden', description: 'Automatically casts a warding light towards your ally, which grants a shield for 40-100 to you and your ally for 2.5 seconds upon coming into contact with it.', tier: 'Gold' },
  { name: 'Lightning Strikes', description: 'Gain 2.5 bonus attack damage per 10% attack speed.', tier: 'Gold' },
  { name: 'Magic Missile', description: 'Dealing damage to an enemy with an ability within 1000 units fires 3 missiles at them that each deal true damage equal to 0.33% of the target\'s maximum health, increased to up to 1% based on distance travelled.', tier: 'Gold' },
  { name: 'Marksmage', description: 'Basic attacks deal bonus physical damage equal to 100% AP.', tier: 'Gold' },
  { name: 'Minionmancer', description: 'Your pets deal 40% increased damage as well as gain 40% bonus health and size.', tier: 'Gold' },
  { name: 'Oathsworn', description: 'Replaces Flee with Kalista\'s Fate\'s Call. FATE\'S CALL: Retrieve your ally and hold them for 4 seconds, pulling them to yourself over 1 second and cleansing them from all crowd control.', tier: 'Gold' },
  { name: 'OK Boomerang', description: 'Automatically casts Sivir\'s Boomerang Blade at a nearby enemy, dealing 40-200 adaptive damage to enemies hit (7 second cooldown).', tier: 'Gold' },
  { name: 'Outlaw\'s Grit', description: 'Dashing or blinking grants 12 bonus armor and bonus magic resistance, stacking up to 5 times for a total of 60 bonus resistances. This effect lasts indefinitely until the end of the current round phase.', tier: 'Gold' },
  { name: 'Parasitic Relationship', description: 'You heal for 15% of the damage dealt by your ally.', tier: 'Gold' },
  { name: 'Perseverance', description: 'Grants 800% base health regeneration, increased to 1600% while below 25% maximum health.', tier: 'Gold' },
  { name: 'Phenomenal Evil', description: 'Gain Veigar\'s Phenomenal Evil Power. PHENOMENAL EVIL POWER: Generate a permanent stack of Phenomenal Evil for each enemy you hit with your abilities (0.75-second cooldown per ability).', tier: 'Gold' },
  { name: 'Quest: Angel of Retribution', description: 'QUEST: Heal allied champions for 2500 in total, or mitigate 2500 damage for them. REWARD: Upon completing your QUEST, gain 100% bonus attack speed and empower your basic attacks to deal bonus magic damage equal to 350% of your heal and shield power.', tier: 'Gold' },
  { name: 'Quest: Steel Your Heart', description: 'QUEST: Obtain Heartsteel and accumulate over 325 bonus health from Colossal Consumption. REWARD: Upon completing your QUEST, increase the bonus health gained from Heartsteel\'s Colossal Consumption by 500%.', tier: 'Gold' },
  { name: 'Quest: Urf\'s Champion', description: 'QUEST: Score 10 champion takedowns. Takedowns scored prior to the quest do count for this effect. REWARD: Upon completing your QUEST, you receive The Golden Spatula.', tier: 'Gold' },
  { name: 'Rabble Rousing', description: 'Casting an ability heals you for 5-60 (+ 1% maximum health).', tier: 'Gold' },
  { name: 'Recursion', description: 'Grants 60 ability haste.', tier: 'Gold' },
  { name: 'Restart', description: 'Your basic abilities\' cooldowns are refreshed every 10 seconds.', tier: 'Gold' },
  { name: 'Restless Restoration', description: 'Heal for 0.2-1.2 (+ 0.02% maximum health) per 10 units travelled.', tier: 'Gold' },
  { name: 'Scopier Weapons', description: 'Gain (200 / 100) bonus attack range.', tier: 'Gold' },
  { name: 'Searing Dawn', description: 'Gain Leona\'s Sunlight. SUNLIGHT: Your abilities mark enemies, causing them to take 40-200 bonus magic damage from your ally\'s next basic attack or ability hit against them (0.5-second cooldown per target).', tier: 'Gold' },
  { name: 'Shrink Ray', description: 'Basic attacks reduce the target\'s damage dealt by 15% for 3 seconds, refreshing with each hit. Their size is also reduced significantly for the duration.', tier: 'Gold' },
  { name: 'Skilled Sniper', description: 'Hitting an enemy with a basic ability at over 700 units reduces the current cooldown of that ability to 0.5 seconds.', tier: 'Gold' },
  { name: 'Soul Siphon', description: 'Your critical strikes heal you for 12% of damage dealt. Additionally, gain 25% critical strike chance.', tier: 'Gold' },
  { name: 'Stats on Stats!', description: 'Upon selecting this augment, gain 3 Stat Bonus Anvils for free.', tier: 'Gold' },
  { name: 'Summoner Revolution', description: 'Using a summoner spell resets its cooldown immediately after its effect starts or has elapsed. This may occur only once per phase in a round.', tier: 'Gold' },
  { name: 'The Brutalizer', description: 'Grants 25 bonus attack damage, 10 ability haste, and 5 lethality.', tier: 'Gold' },
  { name: 'Thread the Needle', description: 'Grants 20% armor penetration and magic penetration.', tier: 'Gold' },
  { name: 'Twice Thrice', description: 'Basic attacks generate a stack, up to 2 times. At 2 stacks, your next basic attack consumes all stacks to apply on-hit effects again at 150% effectiveness.', tier: 'Gold' },
  { name: 'Vanish', description: 'Replaces Flee with Vanish. VANISH: Grants invisibility for 4 seconds. Attacking or casting abilities ends the stealth immediately.', tier: 'Gold' },
  { name: 'Vengeance', description: 'After your ally dies once, gain 28% increased damage and 28% omnivamp for the remainder of the round.', tier: 'Gold' },
  { name: 'Willing Sacrifice', description: 'When your ally drops below 25% of their maximum health, reduce your current health by 25% to grant them a shield equal to that same amount for 10 seconds.', tier: 'Gold' },
  { name: 'With Haste', description: 'Grants bonus movement speed equal to 150% ability haste.', tier: 'Gold' },

  // Prismatic Auguments - Prawdziwe nazwy z Arena wiki
  { name: 'Accelerating Sorcery', description: 'Casting an ability grants 12 ability haste. This effect stacks infinitely and lasts until the end of the current round phase.', tier: 'Prismatic' },
  { name: 'Back to Basics', description: 'Gain 35% increased damage, healing, and shielding, and 70 ability haste, but you can no longer cast your ultimate ability.', tier: 'Prismatic' },
  { name: 'Blade Waltz', description: 'Replaces Flee with Blade Waltz. BLADE WALTZ: Blink to the target enemy champion. After 0.25 seconds, you then blink to the nearest enemy champion every 0.25 seconds over the next 1.75 seconds, blinking up to 7 additional times.', tier: 'Prismatic' },
  { name: 'Can\'t Touch This', description: 'Casting your ultimate grants you invulnerability for 2 seconds (8 second cooldown).', tier: 'Prismatic' },
  { name: 'Center of the Universe', description: 'Gain Aurelion Sol\'s Center of the Universe. CENTER OF THE UNIVERSE: You are now constantly orbited by 6 Stars that exist at your attack range and each have a width of 50.', tier: 'Prismatic' },
  { name: 'Chain Lightning', description: 'Dealing damage to an enemy champion also damages the nearest other champion within 1000 units of them for true damage equal to 50% of the damage instance post-mitigation.', tier: 'Prismatic' },
  { name: 'Chauffeur', description: 'Become attached to your ally for the rest of the game, granting them 100% of your bonus movement speed as well as granting you 130 ability haste and 65% bonus attack speed.', tier: 'Prismatic' },
  { name: 'Circle of Death', description: 'Healing you do causes you to deal 70% of that value in magic damage to the nearest enemy champion.', tier: 'Prismatic' },
  { name: 'Courage of the Colossus', description: 'Immobilizing an enemy champion grants a shield for 3 seconds that absorbs 100-300 (+ 5% maximum health) damage. Shields can stack between multiple triggers of this effect.', tier: 'Prismatic' },
  { name: 'Dashing', description: 'Abilities with dashes or blinks gain 250 ability haste.', tier: 'Prismatic' },
  { name: 'Draw Your Sword', description: 'Become melee, modifying your attack range to 200 units. Additionally, gain 35% bonus attack damage, 25% bonus attack speed, 35% bonus health, 25% bonus movement speed, and 25% life steal.', tier: 'Prismatic' },
  { name: 'Dual Wield', description: 'Increase your total attack speed by 100%, but your attacks and on-hit effects are modified to deal 55% damage.', tier: 'Prismatic' },
  { name: 'Earthwake', description: 'Dashing or blinking causes you to leave behind a trail from the location you moved from that detonates after 0.75 seconds in a 300 width radius, dealing up to 80-2000 physical damage to enemies hit.', tier: 'Prismatic' },
  { name: 'Eureka', description: 'Gain ability haste equal to 30% AP.', tier: 'Prismatic' },
  { name: 'Fan the Hammer', description: 'Your next basic attack in each cardinal direction within 750 range additionally on-attack fires 5 bolts at the target that each deal 10-52.5 (+ 15% bonus AD) physical damage, for a total of 50-262.5 (+ 75% bonus AD) physical damage.', tier: 'Prismatic' },
  { name: 'Feel the Burn', description: 'Replaces Flee with Feel the Burn. FEEL THE BURN: Casts both Exhaust and Ignite on all enemy champions within 1000 units, with the former having its slow strength increased to 50%.', tier: 'Prismatic' },
  { name: 'Fey Magic', description: 'Damaging enemies with your ultimate ability polymorphs them into harmless critters for 2 seconds, during which their base movement speed is reduced by 60, and disarms them for the same duration (15 second cooldown).', tier: 'Prismatic' },
  { name: 'Gamba Anvil', description: 'Gain 1000 Gold. Additionally, Prismatic Item Anvils now have their cost reduced to 3000 Gold, and the resale value of Prismatic Items are reduced to 1500 Gold.', tier: 'Prismatic' },
  { name: 'Giant Slayer', description: 'Become tiny, reducing your size by 75% and gaining 30% bonus movement speed. Additionally, deal 10/15/25/30% (based on target\'s size) bonus damage against enemy champions with greater size than you.', tier: 'Prismatic' },
  { name: 'Goliath', description: 'Grants 35% bonus health, 15% adaptive force, and 50% increased size.', tier: 'Prismatic' },
  { name: 'Infernal Conduit', description: 'Your abilities apply a Burn for 5 seconds that deals 1.2-12 (+ 2.8% bonus AD)(+ 6% AP) bonus magic damage per second over the duration (1 second cooldown). This Burn stacks infinitely and refreshes with each application.', tier: 'Prismatic' },
  { name: 'Jeweled Gauntlet', description: 'Your abilities can now critically strike for (140% + 40%) damage. Additionally, gain 25%(+ 4.5% AP) critical strike chance.', tier: 'Prismatic' },
  { name: 'Laser Eyes', description: 'Continuously fire a laser in a line 700 units from your facing direction, dealing 5-60 (+ 14% AD)(+ 9% AP) magic damage every 0.25 seconds to enemies in its width of 80 units.', tier: 'Prismatic' },
  { name: 'Mad Scientist', description: 'At the start of the combat phase in each round, gain either 30% adaptive force, 20% bonus health, and 40% increased size or 70 ability haste, 40% bonus movement speed, and 40% reduced size.', tier: 'Prismatic' },
  { name: 'Master of Duality', description: 'Basic attacks grant 6-18 ability power and ability casts grant 3-9 bonus attack damage. This effect stacks infinitely and lasts until the end of the current round phase.', tier: 'Prismatic' },
  { name: 'Mystic Punch', description: 'Basic attacks on-hit reduce the cooldowns of all your abilities by 1.25 seconds.', tier: 'Prismatic' },
  { name: 'Nesting Doll', description: 'Upon taking fatal damage, you enter a downed state as normal but modify the arm time for the revive to 2 seconds and automatically revive yourself without the help of your ally over 8 seconds.', tier: 'Prismatic' },
  { name: 'Omni Soul', description: 'Grants 3 random Dragon Souls.', tier: 'Prismatic' },
  { name: 'Orbital Laser', description: 'Replaces Flee with Orbital Laser. ORBITAL LASER: Call upon an orbital laser to fire down on the target location after 2.5 seconds, immediately dealing true damage equal to the 30% of the target\'s maximum health.', tier: 'Prismatic' },
  { name: 'Prismatic Egg', description: 'Scoring a champion takedown generates a stack, once per champion per round. Gain a free Prismatic Item Anvil at 5 stacks and every 6 stacks thereafter.', tier: 'Prismatic' },
  { name: 'Quantum Computing', description: 'Automatically slash in a 650 radius around you over 0.75 seconds, afterwards dealing 200-350 (+ 85% bonus AD)(+ 50% AP) physical damage to enemies within the area (10 second cooldown).', tier: 'Prismatic' },
  { name: 'Quest: Wooglet\'s Witchcap', description: 'Gain a Needlessly Large Rod that has its ability power stat modified to 120 AP. QUEST: Obtain Rabadon\'s Deathcap and Zhonya\'s Hourglass. REWARD: Upon completing your QUEST, convert the items you obtained for the quest into Wooglet\'s Witchcap.', tier: 'Prismatic' },
  { name: 'Raid Boss', description: 'At the start of the combat phase in each round, you are now imprisoned in the center of the battlefield for 9 seconds, becoming suppressed in the duration. While imprisoned, you gain 40%-70% damage reduction and crowd control immunity.', tier: 'Prismatic' },
  { name: 'Scopiest Weapons', description: 'Gain (250 / 150) bonus attack range.', tier: 'Prismatic' },
  { name: 'Slow Cooker', description: 'Surrounds you in flames, causing you to apply a Burn every second to enemies within 500 units for 5 seconds that deals magic damage every second equal to 0.35% of your maximum health over the duration.', tier: 'Prismatic' },
  { name: 'Spellwake', description: 'Hitting an enemy champion with an ability sends a trail from you to the location they were hit, detonating in a 100 width radius after 0.75 seconds to deal up to 80-200 (+ 165% bonus AD)(+ 30% AP) magic damage to enemies within.', tier: 'Prismatic' },
  { name: 'Spirit Link', description: 'Redirect 15% of the damage dealt to your ally to you, and heal yourself equal to 50% of the healing they receive.', tier: 'Prismatic' },
  { name: 'Stats on Stats on Stats!', description: 'Upon selecting this augment, gain 4 Stat Bonus Anvils for free.', tier: 'Prismatic' },
  { name: 'Summoner\'s Roulette', description: 'Replace both of your summoner spells with random ones available in a pool. After using a summoner spell during the combat phase, replace the spell in the respective slot with another random one (5 second cooldown per slot).', tier: 'Prismatic' },
  { name: 'Symphony of War', description: 'Gain the Conqueror and Lethal Tempo keystone runes.', tier: 'Prismatic' },
  { name: 'Tap Dancer', description: 'Basic attacks grant 10 bonus movement speed, stacking infinitely and lasting until the end of the current round phase. Additionally, gain bonus attack speed equal to 10% movement speed.', tier: 'Prismatic' },
  { name: 'Trueshot Prodigy', description: 'Automatically cast Ezreal\'s Trueshot Barrage in the direction of an enemy upon damaging them from over 700 units away, which deals 250-750 (+ 140% bonus AD)(+ 100% AP) magic damage to enemies hit (5 second cooldown).', tier: 'Prismatic' },
  { name: 'Ultimate Revolution', description: 'Casting your ultimate ability resets its cooldown immediately after its effect starts or has elapsed. This may occur only once per phase in a round.', tier: 'Prismatic' },
  { name: 'Ultimate Roulette', description: 'Replaces Flee with a random champion\'s ultimate ability, available from a pool. After using the granted ultimate ability during the combat phase, replace the ultimate in the respective slot with another random one after the cooldown for this effect elapses.', tier: 'Prismatic' },
  { name: 'Wisdom of Ages', description: 'Grants 1 level for the current round and an additional level at the start of every other round. Additionally, the level cap for your champion is removed, allowing them to benefit from effects that scale past level 18.', tier: 'Prismatic' }
]

function Auguments() {
  const [selectedTier, setSelectedTier] = useState<'All' | 'Silver' | 'Gold' | 'Prismatic'>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAuguments = auguments.filter(augument => {
    const matchesTier = selectedTier === 'All' || augument.tier === selectedTier
    const matchesSearch = augument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         augument.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTier && matchesSearch
  })

  const tierCounts = {
    Silver: auguments.filter(a => a.tier === 'Silver').length,
    Gold: auguments.filter(a => a.tier === 'Gold').length,
    Prismatic: auguments.filter(a => a.tier === 'Prismatic').length
  }

  return (
    <div className="auguments-container">
      <div className="auguments-header">
        <h1>Arena Auguments</h1>
        <p className="auguments-description">
          Przeglądaj wszystkie augumenty dostępne w Arena - od Silver przez Gold do Prismatic!
        </p>
        <p className="auguments-count">Łącznie {auguments.length} augmentów</p>
      </div>

      <div className="auguments-filters">
        <div className="filter-group">
          <label>Szukaj augumentów:</label>
          <input
            type="text"
            placeholder="Wpisz nazwę lub opis augumentu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label>Filtruj po tier:</label>
          <div className="tier-buttons">
            <button
              className={`tier-button ${selectedTier === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedTier('All')}
            >
              Wszystkie <span className="tier-count">({auguments.length})</span>
            </button>
            <button
              className={`tier-button silver ${selectedTier === 'Silver' ? 'active' : ''}`}
              onClick={() => setSelectedTier('Silver')}
            >
              Silver <span className="tier-count">({tierCounts.Silver})</span>
            </button>
            <button
              className={`tier-button gold ${selectedTier === 'Gold' ? 'active' : ''}`}
              onClick={() => setSelectedTier('Gold')}
            >
              Gold <span className="tier-count">({tierCounts.Gold})</span>
            </button>
            <button
              className={`tier-button prismatic ${selectedTier === 'Prismatic' ? 'active' : ''}`}
              onClick={() => setSelectedTier('Prismatic')}
            >
              Prismatic <span className="tier-count">({tierCounts.Prismatic})</span>
            </button>
          </div>
        </div>
      </div>

      <div className="auguments-grid">
        {filteredAuguments.map((augument, index) => (
          <div key={index} className={`augument-card ${augument.tier.toLowerCase()}`}>
            <div className="augument-header">
              <h3 className="augument-name">{augument.name}</h3>
              <span className={`augument-tier-badge ${augument.tier.toLowerCase()}`}>
                {augument.tier}
              </span>
            </div>
            <div className="augument-content">
              <p className="augument-description">{augument.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredAuguments.length === 0 && (
        <div className="no-results">
          <h3>Nie znaleziono augumentów</h3>
          <p>Spróbuj zmienić kryteria wyszukiwania.</p>
          <button 
            className="reset-filters-button"
            onClick={() => {
              setSearchTerm('')
              setSelectedTier('All')
            }}
          >
            Resetuj filtry
          </button>
        </div>
      )}

      <div className="auguments-info">
        <h2>O Arena Augments</h2>
        <div className="info-sections">
          <div className="info-section">
            <h3>Silver Tier ({tierCounts.Silver})</h3>
            <p>Podstawowe augumenty zapewniające solidne bonusy i nowe mechaniki. Idealne na start rozgrywki Arena.</p>
          </div>
          <div className="info-section">
            <h3>Gold Tier ({tierCounts.Gold})</h3>
            <p>Potężniejsze augumenty z zaawansowanymi efektami. Znacznie wpływają na styl gry i strategię.</p>
          </div>
          <div className="info-section">
            <h3>Prismatic Tier ({tierCounts.Prismatic})</h3>
            <p>Najbardziej wpływowe augumenty w grze. Mogą całkowicie zmienić sposób działania twojego championsa.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auguments