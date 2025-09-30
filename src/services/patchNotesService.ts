export interface ChampionStats {
  hp: number
  hpperlevel: number
  mp: number
  mpperlevel: number
  movespeed: number
  armor: number
  armorperlevel: number
  spellblock: number
  spellblockperlevel: number
  attackrange: number
  hpregen: number
  hpregenperlevel: number
  mpregen: number
  mpregenperlevel: number
  crit: number
  critperlevel: number
  attackdamage: number
  attackdamageperlevel: number
  attackspeedperlevel: number
  attackspeed: number
}

export interface ChampionData {
  id: string
  name: string
  title: string
  stats: ChampionStats
  spells: any[]
  passive: any
}

export interface ChampionComparison {
  championId: string
  championName: string
  changes: StatChange[]
  significance: 'major' | 'minor' | 'rework'
  ourComment: string
}

export interface StatChange {
  stat: string
  oldValue: number
  newValue: number
  change: number
  changePercent: number
  type: 'buff' | 'nerf' | 'neutral'
}

export interface RealPatchData {
  version: string
  previousVersion: string
  date: string
  championChanges: ChampionComparison[]
  itemChanges: any[] // TODO: implement later
}

class PatchNotesService {
  private static instance: PatchNotesService
  private cachedData: Map<string, RealPatchData> = new Map()

  private constructor() {}

  static getInstance(): PatchNotesService {
    if (!PatchNotesService.instance) {
      PatchNotesService.instance = new PatchNotesService()
    }
    return PatchNotesService.instance
  }

  async getRealPatchData(version: string): Promise<RealPatchData | null> {
    if (this.cachedData.has(version)) {
      return this.cachedData.get(version)!
    }

    try {
      const previousVersion = this.getPreviousVersion(version)
      if (!previousVersion) return null

      const [currentData, previousData] = await Promise.all([
        this.fetchChampionData(version),
        this.fetchChampionData(previousVersion)
      ])

      const championChanges = this.compareChampionData(currentData, previousData)
      
      const patchData: RealPatchData = {
        version,
        previousVersion,
        date: new Date().toISOString().split('T')[0], // Current date as placeholder
        championChanges,
        itemChanges: []
      }

      this.cachedData.set(version, patchData)
      return patchData
    } catch (error) {
      console.error('Error fetching real patch data:', error)
      return null
    }
  }

  private async fetchChampionData(version: string): Promise<Map<string, ChampionData>> {
    try {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/pl_PL/champion.json`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const championMap = new Map<string, ChampionData>()

      // Get detailed data for each champion
      for (const [championId, basicData] of Object.entries(data.data)) {
        try {
          const detailResponse = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${version}/data/pl_PL/champion/${championId}.json`
          )
          
          if (detailResponse.ok) {
            const detailData = await detailResponse.json()
            const championKey = Object.keys(detailData.data)[0]
            championMap.set(championId, detailData.data[championKey])
          }
        } catch (err) {
          console.warn(`Failed to fetch detailed data for ${championId}:`, err)
        }
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 50))
      }

      return championMap
    } catch (error) {
      console.error(`Error fetching champion data for version ${version}:`, error)
      return new Map()
    }
  }

  private compareChampionData(
    currentData: Map<string, ChampionData>, 
    previousData: Map<string, ChampionData>
  ): ChampionComparison[] {
    const comparisons: ChampionComparison[] = []

    for (const [championId, currentChamp] of currentData) {
      const previousChamp = previousData.get(championId)
      if (!previousChamp) continue

      const changes = this.compareStats(currentChamp.stats, previousChamp.stats)
      if (changes.length === 0) continue

      const significance = this.calculateSignificance(changes)
      const ourComment = this.generateOurComment(championId, changes, significance)

      comparisons.push({
        championId,
        championName: currentChamp.name,
        changes,
        significance,
        ourComment
      })
    }

    return comparisons.sort((a, b) => {
      const significanceOrder = { 'rework': 3, 'major': 2, 'minor': 1 }
      return significanceOrder[b.significance] - significanceOrder[a.significance]
    })
  }

  private compareStats(currentStats: ChampionStats, previousStats: ChampionStats): StatChange[] {
    const changes: StatChange[] = []
    const importantStats = [
      'hp', 'armor', 'spellblock', 'attackdamage', 'movespeed', 
      'attackspeed', 'hpregen', 'attackrange'
    ]

    for (const stat of importantStats) {
      const oldValue = previousStats[stat as keyof ChampionStats] as number
      const newValue = currentStats[stat as keyof ChampionStats] as number

      if (oldValue !== newValue && oldValue !== 0) {
        const change = newValue - oldValue
        const changePercent = (change / oldValue) * 100
        
        // Only include significant changes (>1% or absolute change > 2)
        if (Math.abs(changePercent) > 1 || Math.abs(change) > 2) {
          changes.push({
            stat: this.getStatDisplayName(stat),
            oldValue,
            newValue,
            change,
            changePercent,
            type: change > 0 ? 'buff' : 'nerf'
          })
        }
      }
    }

    return changes
  }

  private calculateSignificance(changes: StatChange[]): 'major' | 'minor' | 'rework' {
    if (changes.length >= 5) return 'rework'
    
    const majorChanges = changes.filter(change => 
      Math.abs(change.changePercent) > 10 || 
      (change.stat === 'Obrażenia od ataku' && Math.abs(change.change) > 5) ||
      (change.stat === 'Pancerz' && Math.abs(change.change) > 10)
    )

    return majorChanges.length > 0 ? 'major' : 'minor'
  }

  private generateOurComment(championId: string, changes: StatChange[], significance: string): string {
    const buffCount = changes.filter(c => c.type === 'buff').length
    const nerfCount = changes.filter(c => c.type === 'nerf').length

    const championComments: Record<string, string[]> = {
      'Yasuo': [
        'Yasuo znowu za mocny. Kto by pomyślał?',
        'Kolejny patch, kolejny nerf Yasuo. Tradycja.',
        'Yasuo players płaczą, wszyscy inni się cieszą.'
      ],
      'Katarina': [
        'Katarina dostaje buffa. Przygotujcie się na pentakille.',
        'Riot pamięta że Katarina istnieje!',
        'Czas wrócić do treningu combo na Katarinie.'
      ],
      'Akali': [
        'Akali changes. Pro play będzie inne.',
        'Kolejne próby zbalansowania Akali.',
        'Akali: nieśmiertelna w pro play, martwa w soloQ.'
      ]
    }

    const genericComments = {
      buff: [
        `${championId} dostaje miłość od Riota!`,
        `Czas wrócić do ${championId}!`,
        `${championId} mains się cieszą.`,
        `Buff ${championId}? W końcu!`
      ],
      nerf: [
        `RIP ${championId} mains.`,
        `${championId} był za mocny... znowu.`,
        `Kolejny nerf ${championId}. Smutne.`,
        `${championId} przestaje być OP.`
      ],
      mixed: [
        `${championId} dostaje adjustment. Mini-rework?`,
        `Riot nie wie co zrobić z ${championId}.`,
        `${championId} changes. Zobaczymy jak to wyjdzie.`,
        `Eksperymenty na ${championId} trwają.`
      ]
    }

    // Use champion-specific comments if available
    if (championComments[championId]) {
      const comments = championComments[championId]
      return comments[Math.floor(Math.random() * comments.length)]
    }

    // Use generic comments based on change type
    let commentType: 'buff' | 'nerf' | 'mixed'
    if (buffCount > nerfCount) {
      commentType = 'buff'
    } else if (nerfCount > buffCount) {
      commentType = 'nerf'
    } else {
      commentType = 'mixed'
    }

    const comments = genericComments[commentType]
    return comments[Math.floor(Math.random() * comments.length)]
  }

  private getStatDisplayName(stat: string): string {
    const statNames: Record<string, string> = {
      'hp': 'Punkty życia',
      'armor': 'Pancerz',
      'spellblock': 'Odporność magiczna',
      'attackdamage': 'Obrażenia od ataku',
      'movespeed': 'Szybkość ruchu',
      'attackspeed': 'Szybkość ataku',
      'hpregen': 'Regeneracja HP',
      'attackrange': 'Zasięg ataku'
    }
    return statNames[stat] || stat
  }

  private getPreviousVersion(version: string): string | null {
    // Handle 2025 season versions (format: 25.X.Y)
    const parts = version.split('.')
    if (parts.length < 2) return null

    const major = parseInt(parts[0])
    const minor = parseInt(parts[1])

    if (minor > 1) {
      return `${major}.${minor - 1}.1`
    } else if (major > 14) {
      // Go to previous year's last patch
      return `${major - 1}.24.1`
    } else {
      return null
    }
  }

  // Fallback method to get available versions
  async getAvailableVersions(): Promise<string[]> {
    try {
      const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
      const versions = await response.json()
      return versions.slice(0, 5) // Last 5 versions
    } catch (error) {
      console.error('Error fetching versions:', error)
      return ['15.19.1', '15.18.1', '15.17.1', '15.16.1', '15.15.1']
    }
  }
}

export default PatchNotesService