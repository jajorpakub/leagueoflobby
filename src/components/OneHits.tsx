import { useState } from 'react'
import './OneHits.css'

interface Champion {
  name: string
  icon: string
  title: string
  abilities: string[]
}

interface Item {
  name: string
  icon: string
  description: string
  effect: string
  stats?: string
}

interface Category {
  name: string
  description: string
  color: string
  icon: string
  champions?: Champion[]
  items?: Item[]
}

const oneHitsData: Category[] = [
  {
    name: 'Championni - Pasywne One-Hity',
    description: 'Championni z pasywnymi efektami proc na atakach',
    color: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    icon: '🗡️',
    champions: [
      {
        name: 'Jax',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jax.png',
        title: 'Grandmaster at Arms',
        abilities: ['Pasywna - Relentless Assault - Każdy 3. atak zadaje dodatkowe magic damage']
      },
      {
        name: 'Vayne',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vayne.png',
        title: 'The Night Hunter',
        abilities: ['W - Silver Bolts - Każdy 3. atak na tym samym celu zadaje % max HP jako true damage']
      },
      {
        name: 'Vel\'Koz',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Velkoz.png',
        title: 'The Eye of the Void',
        abilities: ['Pasywna - Organic Deconstruction - 3 stacki ability zadają true damage']
      },
      {
        name: 'Gnar',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Gnar.png',
        title: 'The Missing Link',
        abilities: ['W - Hyper/Wallop - 3. atak w Mini Gnar zadaje % max HP + speed boost']
      },
      {
        name: 'Kennen',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kennen.png',
        title: 'The Heart of the Tempest',
        abilities: ['Pasywna - Mark of the Storm - 3 marki = stun']
      },
      {
        name: 'Braum',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Braum.png',
        title: 'The Heart of the Freljord',
        abilities: ['Pasywna - Concussive Blows - Po Q, każdy kolejny atak sojusznika stackuje, 4 stacki = stun']
      },
      {
        name: 'Ekko',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ekko.png',
        title: 'The Boy Who Shattered Time',
        abilities: ['Pasywna - Z-Drive Resonance - Każdy 3. atak/ability na tym samym celu zadaje bonus damage + speed']
      }
    ]
  },
  {
    name: 'Championni - Aktywowane One-Hity',
    description: 'Championni z umiejętnościami które wzmacniają następny atak',
    color: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    icon: '⚔️',
    champions: [
      {
        name: 'Nasus',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nasus.png',
        title: 'The Curator of the Sands',
        abilities: ['Q - Siphoning Strike - Następny atak zadaje bonus damage, stackuje w nieskończoność']
      },
      {
        name: 'Darius',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Darius.png',
        title: 'The Hand of Noxus',
        abilities: ['W - Crippling Strike - Następny atak zadaje więcej damage i spowalnia']
      },
      {
        name: 'Garen',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Garen.png',
        title: 'The Might of Demacia',
        abilities: ['Q - Decisive Strike - Następny atak zadaje bonus damage i silence']
      },
      {
        name: 'Dr. Mundo',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/DrMundo.png',
        title: 'The Madman of Zaun',
        abilities: ['E - Blunt Force Trauma - Następny atak zadaje bonus damage']
      },
      {
        name: 'Trundle',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Trundle.png',
        title: 'The Troll King',
        abilities: ['Q - Chomp - Następny atak zadaje bonus damage i kradnie AD']
      },
      {
        name: 'Leona',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Leona.png',
        title: 'The Radiant Dawn',
        abilities: ['Q - Shield of Daybreak - Następny atak stun i bonus damage']
      },
      {
        name: 'Sheen Champions',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png',
        title: 'Sheen Users',
        abilities: ['Corki, Ezreal, Gangplank, Jax, Poppy - idealnie wykorzystują Sheen/Trinity/Essence Reaver']
      }
    ]
  },
  {
    name: 'Itemy - Sheen Line',
    description: 'Itemy bazowane na Sheen - następny atak po ability',
    color: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    icon: '✨',
    items: [
      {
        name: 'Sheen',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3057.png',
        description: 'Basic item dla one-hit builds',
        effect: 'Po użyciu ability, następny atak zadaje +100% base AD jako bonus damage',
        stats: 'Nie daje statów, tylko efekt'
      },
      {
        name: 'Trinity Force',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3078.png',
        description: 'Najlepszy all-around item',
        effect: 'Spellblade: +200% base AD jako bonus damage po ability (1.5s CD)',
        stats: '+25 AD, +25% AS, +200 HP, +20 AH, +5% MS'
      },
      {
        name: 'Divine Sunderer',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6632.png',
        description: 'Anti-tank option',
        effect: 'Spellblade: 12% target max HP (min 150% base AD) + heal za 65% damage',
        stats: '+35 AD, +20 AH, +400 HP'
      },
      {
        name: 'Essence Reaver',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3508.png',
        description: 'Dla ADC i crit builds',
        effect: 'Spellblade: +100% base AD + 40% bonus AD jako bonus damage',
        stats: '+60 AD, +20% Crit, +20 AH'
      },
      {
        name: 'Lich Bane',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3100.png',
        description: 'AP version Sheen',
        effect: 'Spellblade: +75% base AD + 50% AP jako magic damage',
        stats: '+80 AP, +10% MS, +8 Magic Pen'
      }
    ]
  },
  {
    name: 'Itemy - On-Hit Effects',
    description: 'Itemy dodające efekty do każdego ataku',
    color: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    icon: '🎯',
    items: [
      {
        name: 'Blade of the Ruined King',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3153.png',
        description: 'Najlepszy on-hit item',
        effect: '8% current HP magic damage per atak (min 15 vs monsters)',
        stats: '+40 AD, +25% AS, +8% lifesteal'
      },
      {
        name: 'Wit\'s End',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3091.png',
        description: 'Magic resist + on-hit',
        effect: '15-80 magic damage per atak (stacks up), +20 MR per atak (max 40)',
        stats: '+40 AD, +40% AS, +40 MR'
      },
      {
        name: 'Nashor\'s Tooth',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3115.png',
        description: 'AP on-hit item',
        effect: '+15 + 20% AP magic damage per atak',
        stats: '+100 AP, +50% AS, +15 AH'
      },
      {
        name: 'Guinsoo\'s Rageblade',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3124.png',
        description: 'Converts crit to on-hit',
        effect: 'Co 3. atak = Phantom Hit (aplicuje on-hit effects 2x), konwertuje crit',
        stats: '+25 AD, +25% AS, +25 AP'
      }
    ]
  },
  {
    name: 'Itemy - Proc Effects',
    description: 'Itemy z efektami na bazę cooldownu lub warunków',
    color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    icon: '🔥',
    items: [
      {
        name: 'Kraken Slayer',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6672.png',
        description: 'True damage co 3. atak',
        effect: 'Każdy 3. atak zadaje 60 + 45% bonus AD true damage',
        stats: '+65 AD, +25% AS, +20% Crit'
      },
      {
        name: 'Galeforce',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6671.png',
        description: 'Dash + damage active',
        effect: 'Active: dash + 3 fale zadające damage (90s CD)',
        stats: '+60 AD, +20% AS, +20% Crit, +7% MS'
      },
      {
        name: 'Immortal Shieldbow',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6673.png',
        description: 'Shield przy low HP',
        effect: 'Poniżej 30% HP = shield + lifesteal boost (90s CD)',
        stats: '+55 AD, +20% AS, +20% Crit, +10% lifesteal'
      },
      {
        name: 'Sterak\'s Gage',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3053.png',
        description: 'Shield przy burscie damage',
        effect: 'Po otrzymaniu 400+ damage w 2.5s = shield (60s CD)',
        stats: '+400 HP, AD scaling with bonus HP'
      }
    ]
  },
  {
    name: 'Itemy - Enchantments & Boots',
    description: 'Wzmocnienia i buty z one-hit effects',
    color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    icon: '👢',
    items: [
      {
        name: 'Statikk Shiv',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3095.png',
        description: 'Lightning chain co 4. atak',
        effect: 'Co 4. atak = chain lightning przez 4 targety (120-160 magic damage)',
        stats: '+45% AS, +20% Crit, +5% MS'
      },
      {
        name: 'Rapid Firecannon',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3094.png',
        description: 'Extended range co 4. atak',
        effect: 'Co 4. atak ma +150 range i zadaje 60-140 magic damage',
        stats: '+45% AS, +20% Crit, +7% MS'
      },
      {
        name: 'Phantom Dancer',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3046.png',
        description: 'Spektral stacks AS i MS',
        effect: 'Atakowanie stacks AS i MS (max 4 stacki), ghost przy low HP',
        stats: '+25% AS, +20% Crit, +7% MS'
      },
      {
        name: 'Boots of Swiftness',
        icon: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3009.png',
        description: 'MS i slow reduction',
        effect: 'Redukuje słowness o 25%',
        stats: '+60 MS'
      }
    ]
  }
]

function OneHits() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="one-hits">
      {!selectedCategory ? (
        <div className="hits-grid">
          {oneHitsData.map((category, index) => (
            <div
              key={category.name}
              className="hit-card"
              style={{ 
                background: category.color,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="hit-icon">{category.icon}</div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <div className="item-count">
                {category.champions ? category.champions.length + ' championów' : category.items!.length + ' itemów'}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="items-view">
          <div className="items-header">
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
                placeholder={selectedCategory.champions ? "Szukaj championa..." : "Szukaj itema..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="items-grid">
            {selectedCategory.champions ? (
              selectedCategory.champions.filter(champion =>
                champion.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((champion, index) => (
                <div
                  key={champion.name}
                  className="item-card champion-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="item-icon">
                    <img 
                      src={champion.icon} 
                      alt={champion.name}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo='
                      }}
                    />
                  </div>
                  <div className="item-info">
                    <h3>{champion.name}</h3>
                    <p className="item-title">{champion.title}</p>
                    <div className="abilities">
                      {champion.abilities.map((ability, i) => (
                        <div key={i} className="ability">
                          {ability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              selectedCategory.items!.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((item, index) => (
                <div
                  key={item.name}
                  className="item-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="item-icon">
                    <img 
                      src={item.icon} 
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo='
                      }}
                    />
                  </div>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="item-effect">
                      <strong>Efekt:</strong> {item.effect}
                    </div>
                    {item.stats && (
                      <div className="item-stats">
                        <strong>Staty:</strong> {item.stats}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default OneHits