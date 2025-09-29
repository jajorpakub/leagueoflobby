export interface ItemStats {
  FlatHPPoolMod?: number
  FlatMPPoolMod?: number
  FlatArmorMod?: number
  FlatSpellBlockMod?: number
  FlatPhysicalDamageMod?: number
  FlatMagicDamageMod?: number
  FlatMovementSpeedMod?: number
  PercentAttackSpeedMod?: number
  PercentLifeStealMod?: number
  PercentSpellVampMod?: number
  FlatCritChanceMod?: number
  FlatCritDamageMod?: number
  FlatEnergyPoolMod?: number
  FlatEnergyRegenMod?: number
  PercentMovementSpeedMod?: number
  [key: string]: number | undefined
}

export interface ItemGold {
  base: number
  purchasable: boolean
  total: number
  sell: number
}

export interface Item {
  id: string
  name: string
  description: string
  plaintext: string
  image: {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
  }
  gold: ItemGold
  tags: string[]
  stats: ItemStats
  from?: string[]
  into?: string[]
  maps: { [key: string]: boolean }
  depth?: number
  colloq: string
  consumed?: boolean
  consumeOnFull?: boolean
  hideFromAll?: boolean
  inStore?: boolean
  requiredChampion?: string
  requiredAlly?: string
  specialRecipe?: number
  stacks?: number
}

export interface ItemsResponse {
  type: string
  version: string
  data: { [key: string]: Item }
}

class ItemService {
  private static instance: ItemService
  private items: Item[] = []
  private itemsMap: Map<string, Item> = new Map()
  private version: string = '15.19.1'

  private constructor() {}

  static getInstance(): ItemService {
    if (!ItemService.instance) {
      ItemService.instance = new ItemService()
    }
    return ItemService.instance
  }

  async getAllItems(): Promise<Item[]> {
    if (this.items.length > 0) {
      return this.items
    }

    try {
      // Get latest version first
      const versionResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
      const versions = await versionResponse.json()
      this.version = versions[0]

      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${this.version}/data/pl_PL/item.json`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: ItemsResponse = await response.json()
      
      this.items = Object.entries(data.data).map(([id, item]) => ({
        ...item,
        id
      }))

      // Create map for quick lookup
      this.itemsMap.clear()
      this.items.forEach(item => {
        this.itemsMap.set(item.id, item)
      })

      return this.items
    } catch (error) {
      console.error('Error fetching items:', error)
      throw new Error('Nie udało się pobrać danych o itemach')
    }
  }

  getItemImageUrl(item: Item): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/item/${item.image.full}`
  }

  getItemById(id: string): Item | undefined {
    return this.itemsMap.get(id)
  }

  getItemsByTag(tag: string): Item[] {
    return this.items.filter(item => item.tags.includes(tag))
  }

  getItemsByMap(mapId: string): Item[] {
    return this.items.filter(item => item.maps[mapId] === true)
  }

  // Filter items by game mode
  getItemsByGameMode(showSR: boolean = true, showARAM: boolean = true, showArena: boolean = true, showOther: boolean = true): Item[] {
    return this.items.filter(item => {
      // Summoner's Rift (map 11)
      const onSR = item.maps['11'] === true
      // ARAM (map 12) 
      const onARAM = item.maps['12'] === true
      // Arena/Nexus Blitz/etc (other maps)
      const onArena = item.maps['30'] === true || item.maps['21'] === true
      // Other special items
      const onOther = !onSR && !onARAM && !onArena

      return (
        (showSR && onSR) ||
        (showARAM && onARAM) ||
        (showArena && onArena) ||
        (showOther && onOther)
      )
    })
  }

  // Get build path for item
  getBuildPath(itemId: string): Item[] {
    const item = this.getItemById(itemId)
    if (!item || !item.from) return []

    return item.from
      .map(id => this.getItemById(id))
      .filter((item): item is Item => item !== undefined)
  }

  // Get items that build into this item
  getBuildsInto(itemId: string): Item[] {
    const item = this.getItemById(itemId)
    if (!item || !item.into) return []

    return item.into
      .map(id => this.getItemById(id))
      .filter((item): item is Item => item !== undefined)
  }

  // Format stats for display
  formatStats(stats: ItemStats): string[] {
    const formatted: string[] = []
    
    if (stats.FlatHPPoolMod) formatted.push(`+${stats.FlatHPPoolMod} HP`)
    if (stats.FlatMPPoolMod) formatted.push(`+${stats.FlatMPPoolMod} Mana`)
    if (stats.FlatPhysicalDamageMod) formatted.push(`+${stats.FlatPhysicalDamageMod} AD`)
    if (stats.FlatMagicDamageMod) formatted.push(`+${stats.FlatMagicDamageMod} AP`)
    if (stats.FlatArmorMod) formatted.push(`+${stats.FlatArmorMod} Armor`)
    if (stats.FlatSpellBlockMod) formatted.push(`+${stats.FlatSpellBlockMod} MR`)
    if (stats.FlatMovementSpeedMod) formatted.push(`+${stats.FlatMovementSpeedMod} MS`)
    if (stats.PercentAttackSpeedMod) formatted.push(`+${(stats.PercentAttackSpeedMod * 100).toFixed(0)}% AS`)
    if (stats.FlatCritChanceMod) formatted.push(`+${(stats.FlatCritChanceMod * 100).toFixed(0)}% Crit`)
    if (stats.PercentLifeStealMod) formatted.push(`+${(stats.PercentLifeStealMod * 100).toFixed(0)}% Life Steal`)
    if (stats.PercentSpellVampMod) formatted.push(`+${(stats.PercentSpellVampMod * 100).toFixed(0)}% Spell Vamp`)

    return formatted
  }

  // Clean HTML from description
  cleanDescription(description: string): string {
    return description
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
  }
}

export default ItemService