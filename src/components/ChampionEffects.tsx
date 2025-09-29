import { useState } from 'react'
import './ChampionEffects.css'

interface Champion {
  name: string
  icon: string
  title: string
  abilities: string[]
}

interface EffectCategory {
  name: string
  description: string
  color: string
  icon: string
  champions: Champion[]
}

const effectsData: EffectCategory[] = [
  {
    name: 'Niewidzialność',
    description: 'Championni którzy mogą stać się niewidzialni',
    color: 'linear-gradient(135deg, #4c1d95 0%, #6b21a8 100%)',
    icon: '👻',
    champions: [
      {
        name: 'Akali',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Akali.png',
        title: 'The Rogue Assassin',
        abilities: ['W - Twilight Shroud - Niewidzialność i ruch']
      },
      {
        name: 'Evelynn',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Evelynn.png',
        title: 'Agony\'s Embrace',
        abilities: ['Pasywna - Demon Shade - Niewidzialność po poziomie 6']
      },
      {
        name: 'Kha\'Zix',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Khazix.png',
        title: 'The Voidreaver',
        abilities: ['R - Void Assault - Krótka niewidzialność']
      },
      {
        name: 'Rengar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Rengar.png',
        title: 'The Pridestalker',
        abilities: ['R - Thrill of the Hunt - Niewidzialność i prędkość']
      },
      {
        name: 'Shaco',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Shaco.png',
        title: 'The Demon Jester',
        abilities: ['Q - Deceive - Niewidzialność i teleport']
      },
      {
        name: 'Talon',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Talon.png',
        title: 'The Blade\'s Shadow',
        abilities: ['R - Shadow Assault - Niewidzialność podczas ruchu']
      },
      {
        name: 'Teemo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png',
        title: 'The Swift Scout',
        abilities: ['Pasywna - Guerrilla Warfare - Niewidzialność w krzakach']
      },
      {
        name: 'Twitch',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Twitch.png',
        title: 'The Plague Rat',
        abilities: ['Q - Ambush - Niewidzialność i prędkość ataku']
      },
      {
        name: 'Vayne',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vayne.png',
        title: 'The Night Hunter',
        abilities: ['R + Q - Final Hour + Tumble - Krótka niewidzialność']
      },
      {
        name: 'Wukong',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MonkeyKing.png',
        title: 'The Monkey King',
        abilities: ['W - Warrior Trickster - Niewidzialność z klonem']
      }
    ]
  },
  {
    name: 'Damage Over Time',
    description: 'Umiejętności zadające obrażenia w czasie (trucizna, krwawienie, spalenie)',
    color: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    icon: '☠️',
    champions: [
      {
        name: 'Cassiopeia',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Cassiopeia.png',
        title: 'The Serpent\'s Embrace',
        abilities: ['Q - Noxious Blast - Trucizna', 'W - Miasma - Trucizna w obszarze']
      },
      {
        name: 'Teemo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png',
        title: 'The Swift Scout',
        abilities: ['E - Toxic Shot - Trucizna na atakach', 'R - Noxious Trap - Grzyby z trucizną']
      },
      {
        name: 'Singed',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Singed.png',
        title: 'The Mad Chemist',
        abilities: ['Q - Poison Trail - Ślad trucizny']
      },
      {
        name: 'Twitch',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Twitch.png',
        title: 'The Plague Rat',
        abilities: ['Pasywna - Deadly Venom - Trucizna na atakach', 'E - Contaminate - Wybuch trucizny']
      },
      {
        name: 'Brand',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Brand.png',
        title: 'The Burning Vengeance',
        abilities: ['Pasywna - Blaze - Spalenie', 'Wszystkie umiejętności - Efekt spalenia']
      },
      {
        name: 'Malzahar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Malzahar.png',
        title: 'The Prophet of the Void',
        abilities: ['E - Malefic Visions - DoT z rozprzestrzenianiem', 'W - Void Swarm - Voidlingi DoT']
      },
      {
        name: 'Darius',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Darius.png',
        title: 'The Hand of Noxus',
        abilities: ['Pasywna - Hemorrhage - Krwawienie na atakach']
      }
    ]
  },
  {
    name: 'Stun / Unieruchomienie',
    description: 'Championni z umiejętnościami ogluszającymi przeciwników',
    color: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    icon: '⚡',
    champions: [
      {
        name: 'Annie',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Annie.png',
        title: 'The Dark Child',
        abilities: ['Pasywna - Pyromania - Stun co 4 umiejętności']
      },
      {
        name: 'Leona',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Leona.png',
        title: 'The Radiant Dawn',
        abilities: ['Q - Shield of Daybreak - Stun', 'R - Solar Flare - AOE stun']
      },
      {
        name: 'Twisted Fate',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png',
        title: 'The Card Master',
        abilities: ['W - Pick A Card - Złota karta stun']
      },
      {
        name: 'Veigar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png',
        title: 'The Tiny Master of Evil',
        abilities: ['E - Event Horizon - Cage z stun']
      },
      {
        name: 'Renekton',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Renekton.png',
        title: 'The Butcher of the Sands',
        abilities: ['W - Ruthless Predator - Stun po empowerment']
      },
      {
        name: 'Pantheon',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pantheon.png',
        title: 'The Unbreakable Spear',
        abilities: ['W - Shield Vault - Stun i skok']
      }
    ]
  },
  {
    name: 'Tarcze / Shieldy',
    description: 'Championni z umiejętnościami tarczy chroniącymi przed obrażeniami',
    color: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    icon: '🛡️',
    champions: [
      {
        name: 'Lux',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lux.png',
        title: 'The Lady of Luminosity',
        abilities: ['W - Prismatic Barrier - Tarcza dla sojuszników']
      },
      {
        name: 'Janna',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Janna.png',
        title: 'The Storm\'s Fury',
        abilities: ['E - Eye of the Storm - Tarcza + AD boost']
      },
      {
        name: 'Karma',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Karma.png',
        title: 'The Enlightened One',
        abilities: ['E - Inspire - Tarcza i przyspieszenie']
      },
      {
        name: 'Orianna',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Orianna.png',
        title: 'The Lady of Clockwork',
        abilities: ['E - Command: Protect - Tarcza i przeniesienie piłki']
      },
      {
        name: 'Diana',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Diana.png',
        title: 'Scorn of the Moon',
        abilities: ['W - Pale Cascade - Tarcza + exploding orbs']
      },
      {
        name: 'Morgana',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png',
        title: 'The Fallen',
        abilities: ['E - Black Shield - Tarcza na magic damage i CC']
      }
    ]
  },
  {
    name: 'Leczenie / Healing',
    description: 'Umiejętności przywracające punkty życia sobie lub sojusznikom',
    color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    icon: '💚',
    champions: [
      {
        name: 'Soraka',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Soraka.png',
        title: 'The Starchild',
        abilities: ['W - Astral Infusion - Heal sojusznika', 'R - Wish - Globalne leczenie']
      },
      {
        name: 'Sona',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sona.png',
        title: 'Maven of the Strings',
        abilities: ['W - Aria of Perseverance - Heal i tarcza']
      },
      {
        name: 'Nami',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nami.png',
        title: 'The Tidecaller',
        abilities: ['W - Ebb and Flow - Bouncing heal/damage']
      },
      {
        name: 'Taric',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Taric.png',
        title: 'The Shield of Valoran',
        abilities: ['Q - Starlight\'s Touch - Heal based on charges']
      },
      {
        name: 'Dr. Mundo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/DrMundo.png',
        title: 'The Madman of Zaun',
        abilities: ['R - Maximum Dosage - Masywne leczenie i regeneracja']
      },
      {
        name: 'Vladimir',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vladimir.png',
        title: 'The Crimson Reaper',
        abilities: ['Q - Transfusion - Leczenie na podstawie obrażeń']
      }
    ]
  },
  {
    name: 'Umiejętności Globalne',
    description: 'Ultimaty i umiejętności działające na całej mapie',
    color: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    icon: '🌍',
    champions: [
      {
        name: 'Soraka',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Soraka.png',
        title: 'The Starchild',
        abilities: ['R - Wish - Leczy wszystkich sojuszników']
      },
      {
        name: 'Karthus',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Karthus.png',
        title: 'The Deathsinger',
        abilities: ['R - Requiem - Globalny damage do wszystkich wrogów']
      },
      {
        name: 'Shen',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Shen.png',
        title: 'The Eye of Twilight',
        abilities: ['R - Stand United - Teleport do sojusznika z tarczą']
      },
      {
        name: 'Twisted Fate',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png',
        title: 'The Card Master',
        abilities: ['R - Destiny - Widzi wszystkich wrogów i może się teleportować']
      },
      {
        name: 'Pantheon',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pantheon.png',
        title: 'The Unbreakable Spear',
        abilities: ['R - Grand Starfall - Semi-globalny skok']
      },
      {
        name: 'Gangplank',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Gangplank.png',
        title: 'The Saltwater Scourge',
        abilities: ['R - Cannon Barrage - Globalny AOE damage']
      }
    ]
  },
  {
    name: 'Dash / Mobility',
    description: 'Championni z umiejętnościami ruchu i przemieszczania się',
    color: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    icon: '💨',
    champions: [
      {
        name: 'Yasuo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png',
        title: 'The Unforgiven',
        abilities: ['E - Sweeping Blade - Dash przez miniony']
      },
      {
        name: 'Lee Sin',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png',
        title: 'The Blind Monk',
        abilities: ['Q - Sonic Wave/Resonating Strike - Dash do celu']
      },
      {
        name: 'Zed',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png',
        title: 'The Master of Shadows',
        abilities: ['W - Living Shadow - Dash i shadow swap', 'R - Death Mark - Dash za wroga']
      },
      {
        name: 'Akali',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Akali.png',
        title: 'The Rogue Assassin',
        abilities: ['E - Shuriken Flip - Two-part dash', 'R - Perfect Execution - Two dashes']
      },
      {
        name: 'Katarina',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Katarina.png',
        title: 'The Sinister Blade',
        abilities: ['E - Shunpo - Instant dash do celu']
      },
      {
        name: 'Irelia',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Irelia.png',
        title: 'The Blade Dancer',
        abilities: ['Q - Bladesurge - Dash z resetem na kill']
      }
    ]
  },
  {
    name: 'Spowolnienia',
    description: 'Championni z umiejętnościami spowalniającymi przeciwników',
    color: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    icon: '🐌',
    champions: [
      {
        name: 'Ashe',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ashe.png',
        title: 'The Frost Archer',
        abilities: ['Pasywna - Frost Shot - Spowolnienie na atakach', 'W - Volley - AOE spowolnienie']
      },
      {
        name: 'Nasus',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nasus.png',
        title: 'The Curator of the Sands',
        abilities: ['W - Wither - Silne spowolnienie']
      },
      {
        name: 'Zilean',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zilean.png',
        title: 'The Chronokeeper',
        abilities: ['E - Time Warp - Spowolnienie lub przyspieszenie']
      },
      {
        name: 'Thresh',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png',
        title: 'The Chain Warden',
        abilities: ['E - Flay - Spowolnienie i knockback']
      },
      {
        name: 'Trundle',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Trundle.png',
        title: 'The Troll King',
        abilities: ['E - Pillar of Ice - Blokuje ścieżkę i spowalnia']
      },
      {
        name: 'Sejuani',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sejuani.png',
        title: 'Fury of the North',
        abilities: ['Pasywna - Frost Armor - Spowolnienie po atakach sojuszników']
      }
    ]
  },
  {
    name: 'Podrzucenie / Airborne',
    description: 'Umiejętności podrzucające przeciwników w powietrze',
    color: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    icon: '🌪️',
    champions: [
      {
        name: 'Yasuo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png',
        title: 'The Unforgiven',
        abilities: ['Q3 - Steel Tempest - Tornado podrzuca', 'R - Last Breath - Wymaga airborne do aktivacji']
      },
      {
        name: 'Malphite',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Malphite.png',
        title: 'Shard of the Monolith',
        abilities: ['R - Unstoppable Force - AOE knockup']
      },
      {
        name: 'Alistar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Alistar.png',
        title: 'The Minotaur',
        abilities: ['Q - Pulverize - Knockup w okolicy', 'W+Q combo - Headbutt + knockup']
      },
      {
        name: 'Cho\'Gath',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Chogath.png',
        title: 'The Terror of the Void',
        abilities: ['Q - Rupture - Knockup z opóźnieniem']
      },
      {
        name: 'Riven',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Riven.png',
        title: 'The Exile',
        abilities: ['Q3 - Broken Wings - Trzeci cast knockup']
      },
      {
        name: 'Janna',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Janna.png',
        title: 'The Storm\'s Fury',
        abilities: ['Q - Howling Gale - Charged tornado knockup']
      }
    ]
  },
  {
    name: 'Fear / Strach',
    description: 'Efekty powodujące ucieczkę przeciwnika w losowym kierunku',
    color: 'linear-gradient(135deg, #581c87 0%, #7c3aed 100%)',
    icon: '😱',
    champions: [
      {
        name: 'Fiddlesticks',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/FiddleSticks.png',
        title: 'The Ancient Fear',
        abilities: ['Q - Terrify - Fear na jednego wroga', 'R - Crowstorm - Fear w obszarze po channeling']
      },
      {
        name: 'Nocturne',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nocturne.png',
        title: 'The Eternal Nightmare',
        abilities: ['E - Unspeakable Horror - Fear po tether time']
      },
      {
        name: 'Hecarim',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Hecarim.png',
        title: 'The Shadow of War',
        abilities: ['R - Onslaught of Shadows - Fear w linii + dash']
      },
      {
        name: 'Shaco',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Shaco.png',
        title: 'The Demon Jester',
        abilities: ['W - Jack In The Box - Fear po activation']
      },
      {
        name: 'Warwick',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Warwick.png',
        title: 'The Uncaged Wrath of Zaun',
        abilities: ['E - Primal Howl - Fear wrogów patrzących na niego']
      }
    ]
  },
  {
    name: 'Silence / Uciszenie',
    description: 'Efekty uniemożliwiające używanie umiejętności',
    color: 'linear-gradient(135deg, #be185d 0%, #ec4899 100%)',
    icon: '🤫',
    champions: [
      {
        name: 'Malzahar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Malzahar.png',
        title: 'The Prophet of the Void',
        abilities: ['Q - Call of the Void - Silence w linii']
      },
      {
        name: 'Soraka',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Soraka.png',
        title: 'The Starchild',
        abilities: ['E - Equinox - Silence w obszarze z opóźnieniem']
      },
      {
        name: 'Garen',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Garen.png',
        title: 'The Might of Demacia',
        abilities: ['Q - Decisive Strike - Silence na następny atak']
      },
      {
        name: 'Kassadin',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kassadin.png',
        title: 'The Void Walker',
        abilities: ['Q - Null Sphere - Silence + magic damage']
      },
      {
        name: 'Cho\'Gath',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Chogath.png',
        title: 'The Terror of the Void',
        abilities: ['W - Feral Scream - Cone silence']
      }
    ]
  },
  {
    name: 'Oślepienie / Blind',
    description: 'Efekty powodujące miss przy atakach podstawowych',
    color: 'linear-gradient(135deg, #365314 0%, #65a30d 100%)',
    icon: '🙈',
    champions: [
      {
        name: 'Teemo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png',
        title: 'The Swift Scout',
        abilities: ['Q - Blinding Dart - Oślepienie na czas']
      },
      {
        name: 'Quinn',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Quinn.png',
        title: 'Demacia\'s Wings',
        abilities: ['Q - Blinding Assault - Oślepienie i spowolnienie']
      },
      {
        name: 'Graves',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Graves.png',
        title: 'The Outlaw',
        abilities: ['W - Smoke Screen - Blind i spowolnienie w obszarze']
      },
      {
        name: 'Heimerdinger',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Heimerdinger.png',
        title: 'The Revered Inventor',
        abilities: ['E - CH-2 Electron Storm Grenade - Blind w obszarze']
      }
    ]
  },
  {
    name: 'Charm / Urok',
    description: 'Efekty zmuszające do poruszania się w kierunku castera',
    color: 'linear-gradient(135deg, #be123c 0%, #f43f5e 100%)',
    icon: '💕',
    champions: [
      {
        name: 'Ahri',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png',
        title: 'The Nine-Tailed Fox',
        abilities: ['E - Charm - Przyciąga wroga i zwiększa damage']
      },
      {
        name: 'Evelynn',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Evelynn.png',
        title: 'Agony\'s Embrace',
        abilities: ['W - Allure - Charm po czasie channeling']
      },
      {
        name: 'Rakan',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Rakan.png',
        title: 'The Charmer',
        abilities: ['R - The Quickness - AOE charm podczas biegu']
      },
      {
        name: 'Seraphine',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Seraphine.png',
        title: 'The Starry-Eyed Songstress',
        abilities: ['R - Encore - Charm w linii, rozszerza się przez championów']
      }
    ]
  },
  {
    name: 'Hook / Grab',
    description: 'Umiejętności przyciągające wrogów do siebie',
    color: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)',
    icon: '🪝',
    champions: [
      {
        name: 'Thresh',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png',
        title: 'The Chain Warden',
        abilities: ['Q - Death Sentence - Hook z możliwością follow-up']
      },
      {
        name: 'Blitzcrank',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Blitzcrank.png',
        title: 'The Great Steam Golem',
        abilities: ['Q - Rocket Grab - Natychmiastowe przyciągnięcie']
      },
      {
        name: 'Nautilus',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nautilus.png',
        title: 'The Titan of the Depths',
        abilities: ['Q - Dredge Line - Hook do wroga lub ściany']
      },
      {
        name: 'Pyke',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pyke.png',
        title: 'The Bloodharbor Ripper',
        abilities: ['Q - Bone Skewer - Hook z charge lub tap']
      },
      {
        name: 'Swain',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Swain.png',
        title: 'The Noxian Grand General',
        abilities: ['E - Nevermove - Hook powracający przez championów']
      }
    ]
  },
  {
    name: 'Knockback / Odrzut',
    description: 'Umiejętności odpychające przeciwników',
    color: 'linear-gradient(135deg, #92400e 0%, #ea580c 100%)',
    icon: '💥',
    champions: [
      {
        name: 'Lee Sin',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png',
        title: 'The Blind Monk',
        abilities: ['R - Dragon\'s Rage - Potężny kick z knockback']
      },
      {
        name: 'Alistar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Alistar.png',
        title: 'The Minotaur',
        abilities: ['W - Headbutt - Knockback w kierunku Alistara']
      },
      {
        name: 'Janna',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Janna.png',
        title: 'The Storm\'s Fury',
        abilities: ['R - Monsoon - AOE knockback z heal']
      },
      {
        name: 'Azir',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Azir.png',
        title: 'The Emperor of Shurima',
        abilities: ['R - Emperor\'s Divide - Ściana żołnierzy z knockback']
      },
      {
        name: 'Gragas',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Gragas.png',
        title: 'The Rabble Rouser',
        abilities: ['R - Explosive Cask - AOE knockback z centrum']
      },
      {
        name: 'Tristana',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Tristana.png',
        title: 'The Yordle Gunner',
        abilities: ['R - Buster Shot - Knockback z huge damage']
      }
    ]
  }
]

function ChampionEffects() {
  const [selectedCategory, setSelectedCategory] = useState<EffectCategory | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChampions = selectedCategory?.champions.filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="champion-effects">
      {!selectedCategory ? (
        <div className="effects-grid">
          {effectsData.map((category, index) => (
            <div
              key={category.name}
              className="effect-card"
              style={{ 
                background: category.color,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="effect-icon">{category.icon}</div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <div className="champion-count">
                {category.champions.length} championów
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="champions-view">
          <div className="champions-header">
            <button 
              className="back-btn"
              onClick={() => setSelectedCategory(null)}
            >
              ← Powrót do kategorii
            </button>
            <div className="category-info">
              <h2 style={{ background: selectedCategory.color, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {selectedCategory.icon} {selectedCategory.name}
              </h2>
              <p>{selectedCategory.description}</p>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Szukaj championa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="champions-grid">
            {filteredChampions.map((champion, index) => (
              <div
                key={champion.name}
                className="champion-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="champion-icon">
                  <img 
                    src={champion.icon} 
                    alt={champion.name}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo='
                    }}
                  />
                </div>
                <div className="champion-info">
                  <h3>{champion.name}</h3>
                  <p className="champion-title">{champion.title}</p>
                  <div className="abilities">
                    {champion.abilities.map((ability, i) => (
                      <div key={i} className="ability">
                        {ability}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChampionEffects