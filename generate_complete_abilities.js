import fs from 'fs';
import axios from 'axios';

// Wszystkie możliwe wersje API na wypadek gdyby 13.24.1 nie działała
const API_VERSIONS = ['14.23.1', '14.22.1', '14.21.1', '13.24.1', '13.23.1'];

// Najpierw pobierz listę wszystkich championów
async function getAllChampions() {
    for (const version of API_VERSIONS) {
        try {
            console.log(`Próbuję pobrać listę championów z wersji ${version}...`);
            const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
            console.log(`✅ Udało się! Znaleziono ${Object.keys(response.data.data).length} championów`);
            return { data: response.data.data, version };
        } catch (error) {
            console.log(`❌ Wersja ${version} nie działa:`, error.message);
        }
    }
    throw new Error('Żadna wersja API nie działa!');
}

// Pobierz szczegółowe dane championa
async function getChampionDetails(championKey, version) {
    try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championKey}.json`);
        return response.data.data[championKey];
    } catch (error) {
        console.log(`❌ Błąd pobierania ${championKey}:`, error.message);
        return null;
    }
}

// Główna funkcja
async function generateCompleteAbilities() {
    try {
        console.log('🚀 ZACZYNAMY POBIERANIE WSZYSTKICH UMIEJĘTNOŚCI!');
        
        // Pobierz listę wszystkich championów
        const { data: championsData, version } = await getAllChampions();
        const championKeys = Object.keys(championsData);
        
        console.log(`📋 Będę pobierał dane dla ${championKeys.length} championów używając wersji ${version}`);
        
        const allAbilities = [];
        let processedCount = 0;
        
        // Dla każdego championa pobierz szczegółowe dane
        for (const championKey of championKeys) {
            try {
                console.log(`⚡ Pobieram ${championKey}... (${processedCount + 1}/${championKeys.length})`);
                
                const championDetails = await getChampionDetails(championKey, version);
                if (!championDetails) continue;
                
                const championName = championDetails.name;
                
                // Dodaj pasywkę
                if (championDetails.passive) {
                    allAbilities.push({
                        id: `${championKey}_Passive`,
                        championId: championKey,
                        championName: championName,
                        abilityName: championDetails.passive.name,
                        description: championDetails.passive.description,
                        type: 'Passive',
                        imageId: championDetails.passive.image?.full || `${championKey}_Passive.png`,
                        difficulty: getAbilityDifficulty(championName, 'Passive', championDetails.passive.name)
                    });
                }
                
                // Dodaj spelle (Q, W, E, R)
                if (championDetails.spells && championDetails.spells.length >= 4) {
                    const spellTypes = ['Q', 'W', 'E', 'R'];
                    
                    championDetails.spells.slice(0, 4).forEach((spell, index) => {
                        allAbilities.push({
                            id: `${championKey}_${spellTypes[index]}`,
                            championId: championKey,
                            championName: championName,
                            abilityName: spell.name,
                            description: spell.description,
                            type: spellTypes[index],
                            imageId: spell.image?.full || `${spell.id}.png`,
                            difficulty: getAbilityDifficulty(championName, spellTypes[index], spell.name)
                        });
                    });
                }
                
                processedCount++;
                
                // Małe opóźnienie żeby nie zabić API
                await new Promise(resolve => setTimeout(resolve, 100));
                
            } catch (error) {
                console.log(`❌ Błąd z ${championKey}:`, error.message);
            }
        }
        
        console.log(`✅ Pobrano łącznie ${allAbilities.length} umiejętności od ${processedCount} championów!`);
        
        // Wygeneruj plik TypeScript
        const tsContent = generateTypeScriptFile(allAbilities, version);
        
        // Zapisz do pliku
        const outputPath = 'src/data/completeAbilityData.ts';
        fs.writeFileSync(outputPath, tsContent, 'utf8');
        
        console.log(`🎉 GOTOWE! Zapisano ${allAbilities.length} umiejętności do pliku: ${outputPath}`);
        console.log(`📊 Statystyki:`);
        console.log(`   - Passive: ${allAbilities.filter(a => a.type === 'Passive').length}`);
        console.log(`   - Q: ${allAbilities.filter(a => a.type === 'Q').length}`);
        console.log(`   - W: ${allAbilities.filter(a => a.type === 'W').length}`);
        console.log(`   - E: ${allAbilities.filter(a => a.type === 'E').length}`);
        console.log(`   - R: ${allAbilities.filter(a => a.type === 'R').length}`);
        console.log(`   - Easy: ${allAbilities.filter(a => a.difficulty === 'Easy').length}`);
        console.log(`   - Medium: ${allAbilities.filter(a => a.difficulty === 'Medium').length}`);
        console.log(`   - Hard: ${allAbilities.filter(a => a.difficulty === 'Hard').length}`);
        
    } catch (error) {
        console.error('💥 BŁĄD KRYTYCZNY:', error);
    }
}

// Funkcja do określania trudności umiejętności
function getAbilityDifficulty(championName, abilityType, abilityName) {
    // Ikończne ultimaty (łatwe)
    const iconicUltimates = [
        'Death Lotus', 'Requiem', 'Explosive Shot', 'Ace in the Hole', 'Crescendo',
        'Hemoplague', 'Idol of Durand', 'Bullet Time', 'Mega Inferno Bomb', 
        'Final Spark', 'Soul Shackles', 'Explosive Cask', 'Cannon Barrage',
        'The Culling', 'Cyclone', 'Realm Warp', 'Super Mega Death Rocket!',
        'Last Breath', 'Emperor\'s Divide', 'Weaver\'s Wall', 'Tempered Fate',
        'Grand Challenge', 'Chum the Waters', 'Solar Flare', 'Intervention',
        'Chronoshift', 'Subjugate', 'Ragnarok', 'Wish', 'Highlander'
    ];
    
    // Charakterystyczne umiejętności (średnie)
    const characteristicAbilities = [
        'Steel Tempest', 'Death Mark', 'Sweeping Blade', 'Living Shadow',
        'Razor Shuriken', 'Shadow Clone', 'Hook', 'Flay', 'Dark Passage',
        'Rocket Jump', 'Zap!', 'Flame Chompers!', 'Get Excited!',
        'Charm', 'Fox-Fire', 'Spirit Rush', 'Orb of Deception',
        'Devastating Charge', 'Onslaught of Shadows', 'Shadow Dash',
        'Twilight Shroud', 'Mark of the Assassin', 'Crescent Strike',
        'Shunpo', 'Bouncing Blade', 'Preparation', 'Sinister Steel'
    ];
    
    // Pasywki i złożone mechaniki (trudne)
    if (abilityType === 'Passive') {
        return 'Hard';
    }
    
    // Sprawdź czy to ikoniczny ultimate
    if (abilityType === 'R' && iconicUltimates.includes(abilityName)) {
        return 'Easy';
    }
    
    // Sprawdź czy to charakterystyczna umiejętność
    if (characteristicAbilities.includes(abilityName)) {
        return 'Medium';
    }
    
    // Defaultowe przypisania
    if (abilityType === 'R') return 'Easy';
    if (abilityType === 'Q') return 'Medium';
    if (['W', 'E'].includes(abilityType)) return 'Medium';
    
    return 'Medium';
}

// Funkcja do wygenerowania pliku TypeScript
function generateTypeScriptFile(abilities, version) {
    return `// KOMPLETNA BAZA WSZYSTKICH UMIEJĘTNOŚCI LEAGUE OF LEGENDS
// Wygenerowano automatycznie ze wszystkich ${abilities.length} umiejętności
// Data Dragon API wersja: ${version}
// Data generacji: ${new Date().toISOString()}
// AUTOR: GENIUSZ PROGRAMOWANIA! 🔥

export interface CompleteAbilityData {
  id: string;
  championId: string;
  championName: string;
  abilityName: string;
  description: string;
  type: 'Passive' | 'Q' | 'W' | 'E' | 'R';
  imageId: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const COMPLETE_ABILITY_DATABASE: CompleteAbilityData[] = ${JSON.stringify(abilities, null, 2)};

// ============== UTILITY FUNCTIONS ==============

export function getAllAbilities(): CompleteAbilityData[] {
  return COMPLETE_ABILITY_DATABASE;
}

export function getAbilitiesByType(type: 'Passive' | 'Q' | 'W' | 'E' | 'R'): CompleteAbilityData[] {
  return COMPLETE_ABILITY_DATABASE.filter(ability => ability.type === type);
}

export function getAbilitiesByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): CompleteAbilityData[] {
  return COMPLETE_ABILITY_DATABASE.filter(ability => ability.difficulty === difficulty);
}

export function getAbilitiesByChampion(championName: string): CompleteAbilityData[] {
  return COMPLETE_ABILITY_DATABASE.filter(ability => 
    ability.championName.toLowerCase() === championName.toLowerCase()
  );
}

export function getRandomAbility(): CompleteAbilityData {
  const abilities = getAllAbilities();
  return abilities[Math.floor(Math.random() * abilities.length)];
}

export function getRandomAbilityByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): CompleteAbilityData {
  const abilities = getAbilitiesByDifficulty(difficulty);
  return abilities[Math.floor(Math.random() * abilities.length)];
}

// Funkcja do codziennego wyboru umiejętności (deterministyczna)
export function getDailyAbility(): CompleteAbilityData {
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
export function getAbilityImageUrl(ability: CompleteAbilityData): string {
  const version = '${version}';
  
  if (ability.type === 'Passive') {
    return \`https://ddragon.leagueoflegends.com/cdn/\${version}/img/passive/\${ability.imageId}\`;
  } else {
    return \`https://ddragon.leagueoflegends.com/cdn/\${version}/img/spell/\${ability.imageId}\`;
  }
}

// Statystyki bazy danych
export const ABILITY_STATS = {
  totalAbilities: ${abilities.length},
  totalChampions: ${new Set(abilities.map(a => a.championName)).size},
  byType: {
    Passive: ${abilities.filter(a => a.type === 'Passive').length},
    Q: ${abilities.filter(a => a.type === 'Q').length},
    W: ${abilities.filter(a => a.type === 'W').length},
    E: ${abilities.filter(a => a.type === 'E').length},
    R: ${abilities.filter(a => a.type === 'R').length}
  },
  byDifficulty: {
    Easy: ${abilities.filter(a => a.difficulty === 'Easy').length},
    Medium: ${abilities.filter(a => a.difficulty === 'Medium').length},
    Hard: ${abilities.filter(a => a.difficulty === 'Hard').length}
  }
};

// Lista wszystkich championów dla których mamy dane
export const CHAMPIONS_WITH_ABILITIES = [
  ${Array.from(new Set(abilities.map(a => `'${a.championName}'`))).join(',\n  ')}
];

console.log('🎮 Załadowano kompletną bazę umiejętności:', ABILITY_STATS);
`;
}

// Uruchom automatycznie
generateCompleteAbilities().catch(console.error);