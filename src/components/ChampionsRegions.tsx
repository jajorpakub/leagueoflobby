import { useState } from 'react'
import './ChampionsRegions.css'

interface Champion {
  name: string
  icon: string
  title: string
}

interface Region {
  name: string
  description: string
  color: string
  champions: Champion[]
}

const regionsData: Region[] = [
  {
    name: 'Demacja',
    description: 'Królestwo sprawiedliwości i honoru',
    color: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    champions: [
      { name: 'Garen', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Garen.png', title: 'Potęga Demacji' },
      { name: 'Lux', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lux.png', title: 'Pani Światła' },
      { name: 'Jarvan IV', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/JarvanIV.png', title: 'Wzór Demacji' },
      { name: 'Fiora', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiora.png', title: 'Wielka Duelerka' },
      { name: 'Galio', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Galio.png', title: 'Kolos' },
      { name: 'Lucian', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lucian.png', title: 'Czyściciel' },
      { name: 'Poppy', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Poppy.png', title: 'Strażniczka Młota' },
      { name: 'Quinn', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Quinn.png', title: 'Skrzydła Demacji' },
      { name: 'Shyvana', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Shyvana.png', title: 'Pół-Smok' },
      { name: 'Sona', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sona.png', title: 'Wirtualoz Strun' },
      { name: 'Sylas', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sylas.png', title: 'Uwolniony' },
      { name: 'Vayne', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vayne.png', title: 'Nocny Łowca' },
      { name: 'Xin Zhao', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/XinZhao.png', title: 'Seneszal Demacji' },
      { name: 'Morgana', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png', title: 'Upadły Anioł' },
      { name: 'Kayle', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kayle.png', title: 'Sprawiedliwy' },
      { name: 'Wukong', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MonkeyKing.png', title: 'Król Małp' }
    ]
  },
  {
    name: 'Noxus',
    description: 'Imperium siły i ekspansji',
    color: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    champions: [
      { name: 'Darius', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Darius.png', title: 'Ręka Noxusa' },
      { name: 'Katarina', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Katarina.png', title: 'Złowieszcze Ostrze' },
      { name: 'Draven', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Draven.png', title: 'Chwalebny Kat' },
      { name: 'Swain', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Swain.png', title: 'Wielki Generał Noxusa' },
      { name: 'Cassiopeia', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Cassiopeia.png', title: 'Uciśnięcie Węża' },
      { name: 'Sion', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sion.png', title: 'Nieumarły Niszczyciel' },
      { name: 'Talon', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Talon.png', title: 'Cienie Ostrzy' },
      { name: 'Vladimir', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vladimir.png', title: 'Karmazynowy Żniwiarz' },
      { name: 'LeBlanc', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Leblanc.png', title: 'Oszustka' },
      { name: 'Urgot', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Urgot.png', title: 'Drednaught' },
      { name: 'Kled', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kled.png', title: 'Konwersacyjny Kawalerzysta' },
      { name: 'Samira', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Samira.png', title: 'Róża Pustyni' },
      { name: 'Rell', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Rell.png', title: 'Żelazna Dziewczyna' },
      { name: 'Riven', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Riven.png', title: 'Wygnaniec' }
    ]
  },
  {
    name: 'Ionia',
    description: 'Kraina magii i równowagi',
    color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    champions: [
      { name: 'Yasuo', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png', title: 'The Unforgiven' },
      { name: 'Ahri', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png', title: 'The Nine-Tailed Fox' },
      { name: 'Akali', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Akali.png', title: 'The Rogue Assassin' },
      { name: 'Irelia', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Irelia.png', title: 'The Blade Dancer' },
      { name: 'Kennen', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kennen.png', title: 'The Heart of the Tempest' },
      { name: 'Lee Sin', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png', title: 'The Blind Monk' },
      { name: 'Master Yi', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MasterYi.png', title: 'The Wuju Bladesman' },
      { name: 'Shen', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Shen.png', title: 'The Eye of Twilight' },
      { name: 'Zed', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png', title: 'The Master of Shadows' },
      { name: 'Karma', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Karma.png', title: 'The Enlightened One' },
      { name: 'Varus', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Varus.png', title: 'The Arrow of Retribution' },
      { name: 'Jhin', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jhin.png', title: 'The Virtuoso' },
      { name: 'Kayn', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kayn.png', title: 'The Shadow Reaper' }
    ]
  },
  {
    name: 'Freljord',
    description: 'Lodowe królestwo Północy',
    color: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    champions: [
      { name: 'Ashe', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ashe.png', title: 'Mroźny Łucznik' },
      { name: 'Sejuani', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sejuani.png', title: 'Furia Północy' },
      { name: 'Lissandra', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lissandra.png', title: 'Lodowa Czarownica' },
      { name: 'Braum', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Braum.png', title: 'Serce Freljordu' },
      { name: 'Tryndamere', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Tryndamere.png', title: 'Król Barbarzyńców' },
      { name: 'Anivia', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Anivia.png', title: 'Kryofeniks' },
      { name: 'Volibear', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Volibear.png', title: 'Nieugięta Burza' },
      { name: 'Nunu & Willump', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nunu.png', title: 'Chłopiec i jego Yeti' },
      { name: 'Gragas', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Gragas.png', title: 'Burzyciel Szumu' },
      { name: 'Olaf', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Olaf.png', title: 'Berserker' },
      { name: 'Udyr', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Udyr.png', title: 'Wędrowiec Duchów' },
      { name: 'Ornn', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ornn.png', title: 'Ognie Piekarni' },
      { name: 'Gnar', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Gnar.png', title: 'Zagubiony Link' }
    ]
  },
  {
    name: 'Zaun',
    description: 'Podziemne miasto chemu i technologii',
    color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    champions: [
      { name: 'Jinx', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png', title: 'Luczna Armata' },
      { name: 'Vi', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vi.png', title: 'Strażniczka Piltover' },
      { name: 'Ekko', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ekko.png', title: 'Chłopiec Który Rozbijał Czas' },
      { name: 'Dr. Mundo', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/DrMundo.png', title: 'Szaleniec z Zaun' },
      { name: 'Singed', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Singed.png', title: 'Szalony Chemik' },
      { name: 'Warwick', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Warwick.png', title: 'Uwolniona Furia Zaun' },
      { name: 'Zac', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zac.png', title: 'Tajna Broń' },
      { name: 'Twitch', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Twitch.png', title: 'Szczur Zarazy' },
      { name: 'Viktor', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Viktor.png', title: 'Herold Maszyn' },
      { name: 'Blitzcrank', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Blitzcrank.png', title: 'Wielki Golem Parowy' },
      { name: 'Janna', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Janna.png', title: 'Furia Burzy' },
      { name: 'Zilean', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zilean.png', title: 'Chronostrzępica' },
      { name: 'Zeri', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zeri.png', title: 'Iskra Zaun' }
    ]
  },
  {
    name: 'Piltover',
    description: 'Miasto postępu i innowacji',
    color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    champions: [
      { name: 'Jayce', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jayce.png', title: 'Obronica Jutra' },
      { name: 'Caitlyn', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Caitlyn.png', title: 'Szeryf Piltover' },
      { name: 'Heimerdinger', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Heimerdinger.png', title: 'Czczony Wynalazca' },
      { name: 'Ezreal', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png', title: 'Marnotrawny Eksplorator' },
      { name: 'Orianna', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Orianna.png', title: 'Pani Zegarowa' },
      { name: 'Camille', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Camille.png', title: 'Stalowy Cień' },
      { name: 'Corki', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Corki.png', title: 'Odważny Bombowiec' }
    ]
  },
  {
    name: 'Pustka/Void',
    description: 'Wymiar poza rzeczywistością, źródło kosmicznego horroru',
    color: 'linear-gradient(135deg, #7c3aed 0%, #3b0764 100%)',
    champions: [
      { name: 'Vel\'Koz', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Velkoz.png', title: 'Oko Pustki' },
      { name: 'Cho\'Gath', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Chogath.png', title: 'Terror Pustki' },
      { name: 'Kha\'Zix', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Khazix.png', title: 'Pustynny Łupieżca' },
      { name: 'Kassadin', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kassadin.png', title: 'Wędrowiec Pustki' },
      { name: 'Malzahar', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Malzahar.png', title: 'Prorok Pustki' },
      { name: 'Kog\'Maw', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/KogMaw.png', title: 'Paszcza Otchłani' },
      { name: 'Rek\'Sai', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/RekSai.png', title: 'Przejściowa Pustka' },
      { name: 'Kai\'Sa', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png', title: 'Córka Pustki' },
            { name: 'Bel\'Veth', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Belveth.png', title: 'Cesarzowa Pustki' }
    ]
  },
  {
    name: 'Shurima',
    description: 'Starożytne imperium pustyni',
    color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    champions: [
      { name: 'Azir', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Azir.png', title: 'Cesarz Pustyni' },
      { name: 'Nasus', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nasus.png', title: 'Kustosz Piasku' },
      { name: 'Renekton', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Renekton.png', title: 'Rzeźnik Piasku' },
      { name: 'Sivir', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sivir.png', title: 'Mistrzyni Bitwy' },
      { name: 'Xerath', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Xerath.png', title: 'Magus Wzniosły' },
      { name: 'Skarner', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Skarner.png', title: 'Kryształowy Żądło' },
      { name: 'Ammu', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Amumu.png', title: 'Smutna Mumia' },
      { name: 'Rammus', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Rammus.png', title: 'Opancerzony Jeż' },
      { name: 'Taliyah', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Taliyah.png', title: 'Tkaczka Kamienia' },
      { name: 'K\'Sante', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/KSante.png', title: 'Duma Nazumah' }
    ]
  },
  {
    name: 'Bilgewater',
    description: 'Piracki port i miasto bezprawia',
    color: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    champions: [
      { name: 'Gangplank', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Gangplank.png', title: 'Pogrom Słonych Wód' },
      { name: 'Miss Fortune', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MissFortune.png', title: 'Łowczyni Nagród' },
      { name: 'Pyke', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pyke.png', title: 'Pogromca z Otchłani' },
      { name: 'Fizz', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fizz.png', title: 'Żywiołak Pływów' },
      { name: 'Nautilus', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nautilus.png', title: 'Tytan Głębin' },
      { name: 'Graves', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Graves.png', title: 'Banita' },
      { name: 'Twisted Fate', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png', title: 'Mistrz Kart' },
      { name: 'Tahm Kench', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TahmKench.png', title: 'Król Rzek' },
      { name: 'Illaoi', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Illaoi.png', title: 'Kapłanka Krakena' }
    ]
  },
  {
    name: 'Targon',
    description: 'Święta góra i siedlisko Aspektów',
    color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    champions: [
      { name: 'Leona', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Leona.png', title: 'Promień Świtu' },
      { name: 'Diana', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Diana.png', title: 'Gniew Księżyca' },
      { name: 'Pantheon', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pantheon.png', title: 'Nieugięty Włócznik' },
      { name: 'Aurelion Sol', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/AurelionSol.png', title: 'Gwiezdny Kuźnia' },
      { name: 'Soraka', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Soraka.png', title: 'Gwiazdożyca' },
      { name: 'Taric', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Taric.png', title: 'Tarcza Valoran' },
      { name: 'Zoe', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zoe.png', title: 'Aspekt Zmierzchu' },
      { name: 'Aphelios', icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Aphelios.png', title: 'Broń Wiernych' }
    ]
  }
]

function ChampionsRegions() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChampions = selectedRegion?.champions.filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="champions-regions">
      {!selectedRegion ? (
        <div className="regions-grid">
          {regionsData.map((region, index) => (
            <div
              key={region.name}
              className="region-card"
              style={{ 
                background: region.color,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedRegion(region)}
            >
              <h2>{region.name}</h2>
              <p>{region.description}</p>
              <div className="champion-count">
                {region.champions.length} championów
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="champions-view">
          <div className="champions-header">
            <button 
              className="back-btn"
              onClick={() => setSelectedRegion(null)}
            >
              ← Powrót do regionów
            </button>
            <div className="region-info">
              <h2 style={{ background: selectedRegion.color, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {selectedRegion.name}
              </h2>
              <p>{selectedRegion.description}</p>
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
                  <p>{champion.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChampionsRegions