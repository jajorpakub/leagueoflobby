export interface Champion {
  id: string;
  name: string;
  title: string;
  tags: string[];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface ChampionData {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: Champion };
}

class ChampionService {
  private static instance: ChampionService;
  private champions: Champion[] | null = null;
  private loading: Promise<Champion[]> | null = null;

  static getInstance(): ChampionService {
    if (!ChampionService.instance) {
      ChampionService.instance = new ChampionService();
    }
    return ChampionService.instance;
  }

  async getLatestVersion(): Promise<string> {
    try {
      const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
      const versions = await response.json();
      return versions[0]; // Najnowsza wersja
    } catch (error) {
      console.error('Error fetching version:', error);
      return '15.19.1'; // Fallback version
    }
  }

  async getAllChampions(): Promise<Champion[]> {
    if (this.champions) {
      return this.champions;
    }

    if (this.loading) {
      return this.loading;
    }

    this.loading = this.fetchChampions();
    this.champions = await this.loading;
    this.loading = null;
    return this.champions;
  }

  private async fetchChampions(): Promise<Champion[]> {
    try {
      const version = await this.getLatestVersion();
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
      const data: ChampionData = await response.json();
      
      const championsList = Object.values(data.data);
      console.log(`Loaded ${championsList.length} champions from Data Dragon API (version ${version})`);
      
      return championsList;
    } catch (error) {
      console.error('Error fetching champions:', error);
      return this.getFallbackChampions();
    }
  }

  getChampionImageUrl(champion: Champion, version?: string): string {
    const v = version || '15.19.1';
    return `https://ddragon.leagueoflegends.com/cdn/${v}/img/champion/${champion.image.full}`;
  }

  private getFallbackChampions(): Champion[] {
    // Fallback data w przypadku problemów z API
    return [
      {
        id: 'Aatrox',
        name: 'Aatrox',
        title: 'the Darkin Blade',
        tags: ['Fighter'],
        info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
        image: { full: 'Aatrox.png', sprite: 'champion0.png', group: 'champion', x: 0, y: 0, w: 48, h: 48 }
      },
      // ... więcej championów można dodać tutaj jako fallback
    ];
  }

  // Funkcja do kategoryzacji championów
  getCategorizedChampions(champions: Champion[]): { [key: string]: Champion[] } {
    const categories: { [key: string]: Champion[] } = {
      'Assassin': [],
      'Fighter': [],
      'Mage': [],
      'Marksman': [],
      'Support': [],
      'Tank': []
    };

    champions.forEach(champion => {
      champion.tags.forEach(tag => {
        if (categories[tag]) {
          categories[tag].push(champion);
        }
      });
    });

    return categories;
  }

  // Funkcja do filtrowania championów według trudności
  getChampionsByDifficulty(champions: Champion[], minDifficulty: number, maxDifficulty: number): Champion[] {
    return champions.filter(champion => 
      champion.info.difficulty >= minDifficulty && 
      champion.info.difficulty <= maxDifficulty
    );
  }

  // Funkcja do wyszukiwania championów
  searchChampions(champions: Champion[], query: string): Champion[] {
    const searchTerm = query.toLowerCase();
    return champions.filter(champion => 
      champion.name.toLowerCase().includes(searchTerm) ||
      champion.title.toLowerCase().includes(searchTerm) ||
      champion.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
}

export default ChampionService;