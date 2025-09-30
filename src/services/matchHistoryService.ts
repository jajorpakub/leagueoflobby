export interface AccountInfo {
  puuid: string
  gameName: string
  tagLine: string
}

export interface SummonerInfo {
  id: string
  accountId: string
  puuid: string
  name: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
}

export interface MatchInfo {
  metadata: {
    dataVersion: string
    matchId: string
    participants: string[]
  }
  info: {
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: number
    gameType: string
    gameVersion: string
    mapId: number
    participants: Participant[]
    platformId: string
    queueId: number
    teams: Team[]
    tournamentCode: string
  }
}

export interface Participant {
  assists: number
  baronKills: number
  bountyLevel: number
  champExperience: number
  champLevel: number
  championId: number
  championName: string
  championTransform: number
  consumablesPurchased: number
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  goldEarned: number
  goldSpent: number
  individualPosition: string
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: string
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  neutralMinionsKilled: number
  nexusKills: number
  nexusLost: number
  nexusTakedowns: number
  objectivesStolen: number
  objectivesStolenAssists: number
  participantId: number
  pentaKills: number
  perks: {
    statPerks: {
      defense: number
      flex: number
      offense: number
    }
    styles: Array<{
      description: string
      selections: Array<{
        perk: number
        var1: number
        var2: number
        var3: number
      }>
      style: number
    }>
  }
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  profileIcon: number
  puuid: string
  quadraKills: number
  riotIdName?: string
  riotIdTagline?: string
  role: string
  sightWardsBought: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  summoner1Casts: number
  summoner1Id: number
  summoner2Casts: number
  summoner2Id: number
  summonerId: string
  summonerLevel: number
  summonerName?: string
  teamEarlySurrendered: boolean
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  timePlayed: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionScore: number
  visionWardsBought: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
}

export interface Team {
  bans: Array<{
    championId: number
    pickTurn: number
  }>
  objectives: {
    baron: { first: boolean; kills: number }
    champion: { first: boolean; kills: number }
    dragon: { first: boolean; kills: number }
    inhibitor: { first: boolean; kills: number }
    riftHerald: { first: boolean; kills: number }
    tower: { first: boolean; kills: number }
  }
  teamId: number
  win: boolean
}

export interface LeagueEntry {
  leagueId: string
  summonerId: string
  summonerName: string
  queueType: string
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
  hotStreak: boolean
  veteran: boolean
  freshBlood: boolean
  inactive: boolean
  miniSeries?: {
    target: number
    wins: number
    losses: number
    progress: string
  }
}

export interface ChampionMastery {
  championId: number
  championLevel: number
  championPoints: number
  lastPlayTime: number
  championPointsSinceLastLevel: number
  championPointsUntilNextLevel: number
  chestGranted: boolean
  tokensEarned: number
  summonerId: string
}

export interface AdditionalStats {
  rank: {
    tier: string
    division: string
    lp: number
    wins: number
    losses: number
  } | null
  overallKDA: {
    kills: number
    deaths: number
    assists: number
    ratio: number
  }
  winRate: {
    total: number
    wins: number
    percentage: number
  }
  mainChampions: Array<{
    name: string
    championId: number
    games: number
    winRate: number
    mastery: number
  }>
}

class MatchHistoryService {
  private static instance: MatchHistoryService
  private apiKey: string = ''
  private version: string = '15.19.1'
  private useRealAPI: boolean = false

  private constructor() {
    // Sprawdź czy mamy klucz API z environment variables
    try {
      // @ts-ignore - Vite env variables
      this.apiKey = import.meta.env?.VITE_RIOT_API_KEY || 'RGAPI-2ae07381-ea16-4e1d-a42d-35e279cc7252'
      this.useRealAPI = !!this.apiKey && this.apiKey !== 'your_api_key_here'
      console.log('API Key loaded:', this.useRealAPI ? 'YES' : 'NO', 'Length:', this.apiKey.length)
    } catch {
      // Fallback dla production
      this.apiKey = 'RGAPI-2ae07381-ea16-4e1d-a42d-35e279cc7252'
      this.useRealAPI = true
      console.log('Using fallback API key')
    }
  }

  static getInstance(): MatchHistoryService {
    if (!MatchHistoryService.instance) {
      MatchHistoryService.instance = new MatchHistoryService()
    }
    return MatchHistoryService.instance
  }

  setApiKey(apiKey: string): void {
    this.apiKey = apiKey
    this.useRealAPI = !!apiKey
  }

  async getSummonerByRiotId(gameName: string, tagLine: string = 'EUN1'): Promise<{ account: AccountInfo; summoner: SummonerInfo }> {
    console.log('API Key status:', this.useRealAPI ? 'Using real API' : 'Using mock data')
    console.log('API Key length:', this.apiKey.length)
    console.log(`Searching for: ${gameName}#${tagLine}`)
    
    if (!this.useRealAPI) {
      return this.getMockSummonerByRiotId(gameName, tagLine)
    }

    try {
      // Najpierw pobieramy dane konta przez Riot ID
      const continentalRegion = this.getContinentalRegion('eun1')
      const accountUrl = `https://${continentalRegion}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`
      
      const accountResponse = await fetch(accountUrl, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!accountResponse.ok) {
        const errorText = await accountResponse.text()
        console.error(`Account API Error ${accountResponse.status}:`, errorText)
        
        if (accountResponse.status === 404) {
          throw new Error('Gracz nie został znaleziony. Sprawdź czy nick#tag jest poprawny')
        }
        if (accountResponse.status === 401) {
          throw new Error('Nieprawidłowy klucz API')
        }
        if (accountResponse.status === 403) {
          throw new Error('Brak uprawnień do API - sprawdź czy klucz API jest ważny')
        }
        if (accountResponse.status === 429) {
          throw new Error('Zbyt wiele zapytań - spróbuj ponownie za chwilę')
        }
        throw new Error(`Błąd Account API: ${accountResponse.status} - ${errorText}`)
      }

      const accountData: AccountInfo = await accountResponse.json()
      
      // Teraz pobieramy dane summoner przez PUUID
      const summonerUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${accountData.puuid}`
      
      const summonerResponse = await fetch(summonerUrl, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!summonerResponse.ok) {
        const errorText = await summonerResponse.text()
        console.error(`Summoner API Error ${summonerResponse.status}:`, errorText)
        throw new Error(`Błąd Summoner API: ${summonerResponse.status} - ${errorText}`)
      }

      const summonerData: SummonerInfo = await summonerResponse.json()
      
      return {
        account: accountData,
        summoner: summonerData
      }
    } catch (error) {
      console.error('Error fetching summoner by Riot ID:', error)
      throw error
    }
  }

  // Backward compatibility - parsuje nick#tag lub używa domyślnego tagu
  async getSummonerByName(summonerName: string, region: string = 'eun1'): Promise<SummonerInfo> {
    const parts = summonerName.split('#')
    const gameName = parts[0]
    const tagLine = parts[1] || 'EUN1' // Domyślny tag dla EUNE
    
    const result = await this.getSummonerByRiotId(gameName, tagLine)
    return result.summoner
  }

  async getMatchHistory(puuid: string, count: number = 10, region: string = 'eun1', startIndex: number = 0): Promise<string[]> {
    if (!this.useRealAPI) {
      return this.getMockMatchHistory(count)
    }

    try {
      const continentalRegion = this.getContinentalRegion(region)
      const url = `https://${continentalRegion}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${startIndex}&count=${count}`
      
      console.log('Fetching match history from:', url)
      
      const response = await fetch(url, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Match History API Error ${response.status}:`, errorText)
        throw new Error(`Błąd pobierania historii: ${response.status} - ${errorText}`)
      }

      const matchIds = await response.json()
      console.log('Match IDs received:', matchIds)
      return matchIds
    } catch (error) {
      console.error('Error fetching match history:', error)
      throw error
    }
  }

  async getMatchDetails(matchId: string): Promise<MatchInfo> {
    if (!this.useRealAPI) {
      return this.getMockMatchDetails(matchId)
    }

    try {
      const continentalRegion = this.getContinentalRegionFromMatchId(matchId)
      const url = `https://${continentalRegion}.api.riotgames.com/lol/match/v5/matches/${matchId}`
      
      const response = await fetch(url, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!response.ok) {
        throw new Error(`Błąd pobierania szczegółów meczu: ${response.status}`)
      }

      const matchData = await response.json()
      return matchData
    } catch (error) {
      console.error('Error fetching match details:', error)
      throw error
    }
  }

  async getLeagueEntries(summonerId: string, region: string = 'eun1'): Promise<LeagueEntry[]> {
    if (!this.useRealAPI) {
      return this.getMockLeagueEntries()
    }

    try {
      const url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`
      
      const response = await fetch(url, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!response.ok) {
        if (response.status === 404) {
          return [] // Gracz nie ma rangi
        }
        throw new Error(`Błąd pobierania rangi: ${response.status}`)
      }

      const leagueData = await response.json()
      return leagueData
    } catch (error) {
      console.error('Error fetching league entries:', error)
      return [] // Zwracamy pustą tablicę zamiast rzucać błąd
    }
  }

  async getChampionMastery(summonerId: string, region: string = 'eun1'): Promise<ChampionMastery[]> {
    if (!this.useRealAPI) {
      return this.getMockChampionMastery()
    }

    try {
      const url = `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`
      
      const response = await fetch(url, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!response.ok) {
        if (response.status === 404) {
          return [] // Gracz nie ma champion mastery
        }
        throw new Error(`Błąd pobierania champion mastery: ${response.status}`)
      }

      const masteryData = await response.json()
      return masteryData.slice(0, 5) // Top 5 championów
    } catch (error) {
      console.error('Error fetching champion mastery:', error)
      return [] // Zwracamy pustą tablicę zamiast rzucać błąd
    }
  }

  async calculateStatsFromMatches(matches: MatchInfo[], targetPuuid: string, region: string = 'eun1'): Promise<{ overallKDA: any; winRate: any; mainChampions: any[]; csScore: any; damageScore: any; mostPlayedRole: any; teammates: any[] }> {
    if (matches.length === 0) {
      return {
        overallKDA: { kills: 0, deaths: 0, assists: 0, ratio: 0 },
        winRate: { total: 0, wins: 0, percentage: 0 },
        mainChampions: [],
        csScore: { average: 0, perMinute: 0, total: 0 },
        damageScore: { average: 0, total: 0 },
        mostPlayedRole: { role: 'N/A', games: 0, percentage: 0 },
        teammates: []
      }
    }

    let totalKills = 0
    let totalDeaths = 0
    let totalAssists = 0
    let totalWins = 0
    let totalCS = 0
    let totalGameTime = 0
    let totalDamage = 0
    const championStats: { [key: string]: { games: number; wins: number; championId: number } } = {}
    const teammateStats: { [key: string]: { games: number; wins: number; puuid: string; displayName?: string } } = {}
    const roleStats: { [key: string]: number } = {}

    matches.forEach(match => {
      const participant = match.info.participants.find(p => p.puuid === targetPuuid)
      if (participant) {
        // Podstawowe statystyki
        totalKills += participant.kills
        totalDeaths += participant.deaths
        totalAssists += participant.assists
        if (participant.win) totalWins++

        // CS statystyki
        const cs = participant.totalMinionsKilled + participant.neutralMinionsKilled
        totalCS += cs
        totalGameTime += match.info.gameDuration
        
        // Damage statystyki
        totalDamage += participant.totalDamageDealtToChampions

        // Champion statystyki
        const champName = participant.championName
        if (!championStats[champName]) {
          championStats[champName] = { games: 0, wins: 0, championId: participant.championId }
        }
        championStats[champName].games++
        if (participant.win) championStats[champName].wins++

        // Role statystyki
        const role = participant.teamPosition || 'UNKNOWN'
        roleStats[role] = (roleStats[role] || 0) + 1

        // Analiza współgraczy (ci z tego samego teamu)
        const playerTeamId = participant.teamId
        const teammates = match.info.participants.filter(p => 
          p.teamId === playerTeamId && p.puuid !== targetPuuid
        )

        teammates.forEach(teammate => {
          const key = teammate.puuid
          if (!teammateStats[key]) {
            // Użyj danych z match data (priorytet: riotIdName#riotIdTagline > summonerName > PUUID)
            let displayName = 'Unknown Player'
            if (teammate.riotIdName && teammate.riotIdTagline) {
              displayName = `${teammate.riotIdName}#${teammate.riotIdTagline}`
            } else if (teammate.summonerName) {
              displayName = teammate.summonerName
            } else if (teammate.riotIdName && !teammate.riotIdTagline) {
              // Czasami mamy tylko riotIdName bez tagline
              displayName = teammate.riotIdName
            } else if (teammate.puuid) {
              // Fallback - użyj krótkiego identyfikatora zamiast długiego PUUID
              const shortId = teammate.puuid.substring(0, 8).toUpperCase()
              displayName = `Gracz_${shortId}`
            }
            
            teammateStats[key] = { 
              games: 0, 
              wins: 0, 
              puuid: teammate.puuid,
              displayName: displayName
            }
          }
          teammateStats[key].games++
          if (participant.win) teammateStats[key].wins++
        })
      }
    })

    const overallKDA = {
      kills: totalKills / matches.length,
      deaths: totalDeaths / matches.length,
      assists: totalAssists / matches.length,
      ratio: totalDeaths > 0 ? (totalKills + totalAssists) / totalDeaths : totalKills + totalAssists
    }

    const winRate = {
      total: matches.length,
      wins: totalWins,
      percentage: (totalWins / matches.length) * 100
    }

    const csScore = {
      average: totalCS / matches.length,
      perMinute: totalGameTime > 0 ? (totalCS / (totalGameTime / 60)) : 0,
      total: totalCS
    }

    const damageScore = {
      average: totalDamage / matches.length,
      total: totalDamage
    }

    // Znajdź najczęściej graną rolę
    let mostPlayedRole = { role: 'N/A', games: 0, percentage: 0 }
    if (Object.keys(roleStats).length > 0) {
      const sortedRoles = Object.entries(roleStats).sort((a, b) => b[1] - a[1])
      const topRole = sortedRoles[0]
      mostPlayedRole = {
        role: topRole[0],
        games: topRole[1],
        percentage: (topRole[1] / matches.length) * 100
      }
    }

    const mainChampions = Object.entries(championStats)
      .map(([name, stats]) => ({
        name,
        championId: stats.championId,
        games: stats.games,
        winRate: (stats.wins / stats.games) * 100,
        mastery: 0 // Zostanie uzupełnione przez champion mastery API
      }))
      .sort((a, b) => b.games - a.games)
      .slice(0, 3)

    // Top współgracze (minimum 2 gry, posortowani po liczbie gier)
    console.log('🤝 Processing teammates...')
    const teammatesWithNames = await Promise.all(
      Object.entries(teammateStats)
        .map(async ([puuid, stats]) => {
          let displayName = stats.displayName || 'Unknown Player'
          
          console.log(`👥 Processing teammate ${puuid}, current name: ${displayName}`)
          
          // Jeśli nie mamy nazwy z meczu, spróbuj pobrać z API
          if (displayName === 'Unknown Player' && this.useRealAPI) {
            try {
              console.log(`🔍 Fetching account for teammate ${puuid}`)
              const accountInfo = await this.getAccountByPuuid(stats.puuid, region)
              if (accountInfo) {
                displayName = `${accountInfo.gameName}#${accountInfo.tagLine}`
                console.log(`✅ Found teammate name: ${displayName}`)
              } else {
                console.log(`⚠️ Could not find account for ${puuid}`)
              }
            } catch (error) {
              console.warn(`❌ Error fetching account for PUUID ${stats.puuid}:`, error)
            }
          }
          
          return {
            puuid: stats.puuid,
            name: displayName,
            games: stats.games,
            wins: stats.wins,
            winRate: (stats.wins / stats.games) * 100
          }
        })
    )
    
    const teammates = teammatesWithNames
      .filter(teammate => teammate.games >= 2) // Minimum 2 gry żeby się liczyło
      .sort((a, b) => b.games - a.games)
      .slice(0, 5) // Top 5 współgraczy

    return { overallKDA, winRate, mainChampions, csScore, damageScore, mostPlayedRole, teammates }
  }

  private getContinentalRegion(region: string): string {
    const continentalMap: { [key: string]: string } = {
      'eun1': 'europe',
      'euw1': 'europe',
      'tr1': 'europe',
      'ru': 'europe',
      'na1': 'americas',
      'br1': 'americas',
      'la1': 'americas',
      'la2': 'americas',
      'kr': 'asia',
      'jp1': 'asia',
      'oc1': 'sea'
    }
    return continentalMap[region.toLowerCase()] || 'europe'
  }

  private getContinentalRegionFromMatchId(matchId: string): string {
    if (matchId.startsWith('EUN1_') || matchId.startsWith('EUW1_') || matchId.startsWith('TR1_') || matchId.startsWith('RU_')) {
      return 'europe'
    }
    if (matchId.startsWith('NA1_') || matchId.startsWith('BR1_') || matchId.startsWith('LA1_') || matchId.startsWith('LA2_')) {
      return 'americas'
    }
    if (matchId.startsWith('KR_') || matchId.startsWith('JP1_')) {
      return 'asia'
    }
    if (matchId.startsWith('OC1_')) {
      return 'sea'
    }
    return 'europe'
  }

  // Mock methods for demo purposes
  private async getMockSummonerByRiotId(gameName: string, tagLine: string): Promise<{ account: AccountInfo; summoner: SummonerInfo }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (gameName.toLowerCase().includes('error')) {
          reject(new Error('Gracz nie został znaleziony'))
          return
        }
        
        const puuid = 'mock_puuid_' + Math.random().toString(36).substr(2, 9)
        
        resolve({
          account: {
            puuid: puuid,
            gameName: gameName,
            tagLine: tagLine
          },
          summoner: {
            id: 'mock_id_' + Math.random().toString(36).substr(2, 9),
            accountId: 'mock_account_' + Math.random().toString(36).substr(2, 9),
            puuid: puuid,
            name: gameName, // Dla kompatybilności
            profileIconId: Math.floor(Math.random() * 100) + 1,
            revisionDate: Date.now(),
            summonerLevel: Math.floor(Math.random() * 400) + 30
          }
        })
      }, 1000)
    })
  }

  private async getMockSummoner(summonerName: string): Promise<SummonerInfo> {
    const parts = summonerName.split('#')
    const gameName = parts[0]
    const tagLine = parts[1] || 'EUN1'
    
    const result = await this.getMockSummonerByRiotId(gameName, tagLine)
    return result.summoner
  }

  private async getMockMatchHistory(count: number): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const matchIds = Array.from({ length: count }, (_, i) => 
          `EUN1_${Math.random().toString(36).substr(2, 9)}_${i}`
        )
        resolve(matchIds)
      }, 500)
    })
  }

  private async getMockMatchDetails(matchId: string): Promise<MatchInfo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const gameModes = ['CLASSIC', 'ARAM', 'URF', 'ARENA']
        const champions = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Azir']
        const gameMode = gameModes[Math.floor(Math.random() * gameModes.length)]
        
        const participants: Participant[] = Array.from({ length: gameMode === 'ARAM' ? 10 : (gameMode === 'ARENA' ? 8 : 10) }, (_, i) => ({
          assists: Math.floor(Math.random() * 20),
          baronKills: 0,
          bountyLevel: 0,
          champExperience: Math.floor(Math.random() * 20000) + 5000,
          champLevel: Math.floor(Math.random() * 10) + 10,
          championId: Math.floor(Math.random() * 150) + 1,
          championName: champions[Math.floor(Math.random() * champions.length)],
          championTransform: 0,
          consumablesPurchased: Math.floor(Math.random() * 10),
          damageDealtToBuildings: Math.floor(Math.random() * 5000),
          damageDealtToObjectives: Math.floor(Math.random() * 10000),
          damageDealtToTurrets: Math.floor(Math.random() * 3000),
          damageSelfMitigated: Math.floor(Math.random() * 30000),
          deaths: Math.floor(Math.random() * 15),
          detectorWardsPlaced: Math.floor(Math.random() * 10),
          doubleKills: Math.floor(Math.random() * 3),
          dragonKills: 0,
          firstBloodAssist: Math.random() > 0.8,
          firstBloodKill: Math.random() > 0.9,
          firstTowerAssist: Math.random() > 0.8,
          firstTowerKill: Math.random() > 0.9,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: Math.random() > 0.8,
          goldEarned: Math.floor(Math.random() * 20000) + 8000,
          goldSpent: Math.floor(Math.random() * 18000) + 7000,
          individualPosition: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'][Math.floor(Math.random() * 5)],
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 0,
          item0: Math.floor(Math.random() * 3000) + 1000,
          item1: Math.floor(Math.random() * 3000) + 1000,
          item2: Math.floor(Math.random() * 3000) + 1000,
          item3: Math.floor(Math.random() * 3000) + 1000,
          item4: Math.floor(Math.random() * 3000) + 1000,
          item5: Math.floor(Math.random() * 3000) + 1000,
          item6: Math.floor(Math.random() * 3000) + 3000,
          itemsPurchased: Math.floor(Math.random() * 30) + 10,
          killingSprees: Math.floor(Math.random() * 3),
          kills: Math.floor(Math.random() * 20),
          lane: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM'][Math.floor(Math.random() * 4)],
          largestCriticalStrike: Math.floor(Math.random() * 2000),
          largestKillingSpree: Math.floor(Math.random() * 5),
          largestMultiKill: Math.floor(Math.random() * 3) + 1,
          longestTimeSpentLiving: Math.floor(Math.random() * 1000),
          magicDamageDealt: Math.floor(Math.random() * 50000),
          magicDamageDealtToChampions: Math.floor(Math.random() * 30000),
          magicDamageTaken: Math.floor(Math.random() * 25000),
          neutralMinionsKilled: Math.floor(Math.random() * 200),
          nexusKills: 0,
          nexusLost: 0,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          participantId: i + 1,
          pentaKills: Math.random() > 0.95 ? 1 : 0,
          perks: {
            statPerks: { defense: 5008, flex: 5008, offense: 5005 },
            styles: []
          },
          physicalDamageDealt: Math.floor(Math.random() * 50000),
          physicalDamageDealtToChampions: Math.floor(Math.random() * 30000),
          physicalDamageTaken: Math.floor(Math.random() * 25000),
          profileIcon: Math.floor(Math.random() * 100) + 1,
          puuid: `mock_puuid_${i}`,
          quadraKills: Math.random() > 0.9 ? 1 : 0,
          riotIdName: `Player${i + 1}`,
          riotIdTagline: 'EUN1',
          role: ['SOLO', 'CARRY', 'SUPPORT'][Math.floor(Math.random() * 3)],
          sightWardsBought: Math.floor(Math.random() * 5),
          spell1Casts: Math.floor(Math.random() * 50),
          spell2Casts: Math.floor(Math.random() * 50),
          spell3Casts: Math.floor(Math.random() * 50),
          spell4Casts: Math.floor(Math.random() * 20),
          summoner1Casts: Math.floor(Math.random() * 10),
          summoner1Id: 4,
          summoner2Casts: Math.floor(Math.random() * 10),
          summoner2Id: Math.floor(Math.random() * 20) + 1,
          summonerId: `summoner_${i}`,
          summonerLevel: Math.floor(Math.random() * 400) + 30,
          summonerName: `Player${i + 1}`,
          teamEarlySurrendered: false,
          teamId: i < 5 ? 100 : 200,
          teamPosition: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'][i % 5],
          timeCCingOthers: Math.floor(Math.random() * 100),
          timePlayed: Math.floor(Math.random() * 3000) + 1200,
          totalDamageDealt: Math.floor(Math.random() * 150000) + 50000,
          totalDamageDealtToChampions: Math.floor(Math.random() * 50000) + 10000,
          totalDamageShieldedOnTeammates: Math.floor(Math.random() * 5000),
          totalDamageTaken: Math.floor(Math.random() * 40000) + 10000,
          totalHeal: Math.floor(Math.random() * 10000),
          totalHealsOnTeammates: Math.floor(Math.random() * 5000),
          totalMinionsKilled: Math.floor(Math.random() * 300) + 50,
          totalTimeCCDealt: Math.floor(Math.random() * 200),
          totalTimeSpentDead: Math.floor(Math.random() * 300),
          totalUnitsHealed: Math.floor(Math.random() * 10),
          tripleKills: Math.floor(Math.random() * 2),
          trueDamageDealt: Math.floor(Math.random() * 10000),
          trueDamageDealtToChampions: Math.floor(Math.random() * 5000),
          trueDamageTaken: Math.floor(Math.random() * 5000),
          turretKills: Math.floor(Math.random() * 3),
          turretTakedowns: Math.floor(Math.random() * 5),
          turretsLost: Math.floor(Math.random() * 5),
          unrealKills: 0,
          visionScore: Math.floor(Math.random() * 80) + 10,
          visionWardsBought: Math.floor(Math.random() * 10),
          wardsKilled: Math.floor(Math.random() * 20),
          wardsPlaced: Math.floor(Math.random() * 30),
          win: Math.random() > 0.5
        }))

        resolve({
          metadata: {
            dataVersion: '2',
            matchId: matchId,
            participants: participants.map(p => p.puuid)
          },
          info: {
            gameCreation: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
            gameDuration: Math.floor(Math.random() * 2400) + 900,
            gameEndTimestamp: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
            gameId: Math.floor(Math.random() * 1000000),
            gameMode: gameMode,
            gameName: 'teambuilder-match-' + Math.random().toString(36).substr(2, 9),
            gameStartTimestamp: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
            gameType: 'MATCHED_GAME',
            gameVersion: this.version,
            mapId: gameMode === 'ARAM' ? 12 : (gameMode === 'ARENA' ? 30 : 11),
            participants: participants,
            platformId: 'EUN1',
            queueId: gameMode === 'ARAM' ? 450 : (gameMode === 'ARENA' ? 1700 : 420),
            teams: [
              {
                bans: [],
                objectives: {
                  baron: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  champion: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 50) },
                  dragon: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 5) },
                  inhibitor: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  riftHerald: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 2) },
                  tower: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 10) }
                },
                teamId: 100,
                win: Math.random() > 0.5
              },
              {
                bans: [],
                objectives: {
                  baron: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  champion: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 50) },
                  dragon: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 5) },
                  inhibitor: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  riftHerald: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 2) },
                  tower: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 10) }
                },
                teamId: 200,
                win: Math.random() > 0.5
              }
            ],
            tournamentCode: ''
          }
        })
      }, 800)
    })
  }

  getQueueName(queueId: number): string {
    const queues: { [key: number]: string } = {
      420: 'Ranked Solo/Duo',
      440: 'Ranked Flex',
      450: 'ARAM',
      400: 'Normal Draft',
      430: 'Normal Blind',
      1700: 'Arena',
      900: 'URF',
      1020: 'One for All'
    }
    return queues[queueId] || 'Niestandardowy tryb'
  }

  formatGameDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  getTimeAgo(timestamp: number): string {
    const now = Date.now()
    const diff = now - timestamp
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor(diff / (1000 * 60))

    if (days > 0) return `${days} dni temu`
    if (hours > 0) return `${hours} godzin temu`
    if (minutes > 0) return `${minutes} minut temu`
    return 'Przed chwilą'
  }

  isUsingRealAPI(): boolean {
    return this.useRealAPI
  }

  private async getMockLeagueEntries(): Promise<LeagueEntry[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{
          leagueId: 'mock-league',
          summonerId: 'mock-summoner',
          summonerName: 'MockPlayer',
          queueType: 'RANKED_SOLO_5x5',
          tier: 'GOLD',
          rank: 'II',
          leaguePoints: 45,
          wins: 67,
          losses: 53,
          hotStreak: false,
          veteran: false,
          freshBlood: false,
          inactive: false
        }])
      }, 300)
    })
  }

  private async getMockChampionMastery(): Promise<ChampionMastery[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            championId: 222, // Jinx
            championLevel: 7,
            championPoints: 125000,
            lastPlayTime: Date.now() - 86400000,
            championPointsSinceLastLevel: 0,
            championPointsUntilNextLevel: 0,
            chestGranted: true,
            tokensEarned: 3,
            summonerId: 'mock-summoner'
          },
          {
            championId: 51, // Caitlyn
            championLevel: 6,
            championPoints: 85000,
            lastPlayTime: Date.now() - 172800000,
            championPointsSinceLastLevel: 0,
            championPointsUntilNextLevel: 40000,
            chestGranted: false,
            tokensEarned: 2,
            summonerId: 'mock-summoner'
          },
          {
            championId: 81, // Ezreal
            championLevel: 5,
            championPoints: 45000,
            lastPlayTime: Date.now() - 259200000,
            championPointsSinceLastLevel: 0,
            championPointsUntilNextLevel: 15000,
            chestGranted: true,
            tokensEarned: 0,
            summonerId: 'mock-summoner'
          }
        ])
      }, 400)
    })
  }

  async getChampionNameById(championId: number): Promise<string> {
    const championMap: { [key: number]: string } = {
      1: 'Annie', 2: 'Olaf', 3: 'Galio', 4: 'TwistedFate', 5: 'XinZhao',
      6: 'Urgot', 7: 'LeBlanc', 8: 'Vladimir', 9: 'Fiddlesticks', 10: 'Kayle',
      11: 'MasterYi', 12: 'Alistar', 13: 'Ryze', 14: 'Sion', 15: 'Sivir',
      16: 'Soraka', 17: 'Teemo', 18: 'Tristana', 19: 'Warwick', 20: 'Nunu',
      21: 'MissFortune', 22: 'Ashe', 23: 'Tryndamere', 24: 'Jax', 25: 'Morgana',
      26: 'Zilean', 27: 'Singed', 28: 'Evelynn', 29: 'Twitch', 30: 'Karthus',
      31: 'Chogath', 32: 'Amumu', 33: 'Rammus', 34: 'Anivia', 35: 'Shaco',
      36: 'DrMundo', 37: 'Sona', 38: 'Kassadin', 39: 'Irelia', 40: 'Janna',
      41: 'Gangplank', 42: 'Corki', 43: 'Karma', 44: 'Taric', 45: 'Veigar',
      48: 'Trundle', 50: 'Swain', 51: 'Caitlyn', 53: 'Blitzcrank', 54: 'Malphite',
      55: 'Katarina', 56: 'Nocturne', 57: 'Maokai', 58: 'Renekton', 59: 'JarvanIV',
      60: 'Elise', 61: 'Orianna', 62: 'Wukong', 63: 'Brand', 64: 'LeeSin',
      67: 'Vayne', 68: 'Rumble', 69: 'Cassiopeia', 72: 'Skarner', 74: 'Heimerdinger',
      75: 'Nasus', 76: 'Nidalee', 77: 'Udyr', 78: 'Poppy', 79: 'Gragas',
      80: 'Pantheon', 81: 'Ezreal', 82: 'Mordekaiser', 83: 'Yorick', 84: 'Akali',
      85: 'Kennen', 86: 'Garen', 89: 'Leona', 90: 'Malzahar', 91: 'Talon',
      92: 'Riven', 96: 'KogMaw', 98: 'Shen', 99: 'Lux', 101: 'Xerath',
      102: 'Shyvana', 103: 'Ahri', 104: 'Graves', 105: 'Fizz', 106: 'Volibear',
      107: 'Rengar', 110: 'Varus', 111: 'Nautilus', 112: 'Viktor', 113: 'Sejuani',
      114: 'Fiora', 115: 'Ziggs', 117: 'Lulu', 119: 'Draven', 120: 'Hecarim',
      121: 'Khazix', 122: 'Darius', 126: 'Jayce', 127: 'Lissandra', 131: 'Diana',
      133: 'Quinn', 134: 'Syndra', 136: 'AurelionSol', 141: 'Kayn', 142: 'Zoe',
      143: 'Zyra', 145: 'Kaisa', 147: 'Seraphine', 150: 'Gnar', 154: 'Zac',
      157: 'Yasuo', 161: 'Velkoz', 163: 'Taliyah', 164: 'Camille', 166: 'Akshan',
      200: 'Belveth', 201: 'Braum', 202: 'Jhin', 203: 'Kindred', 221: 'Zeri',
      222: 'Jinx', 223: 'TahmKench', 234: 'Viego', 235: 'Senna', 236: 'Lucian',
      238: 'Zed', 240: 'Kled', 245: 'Ekko', 246: 'Qiyana', 254: 'Vi',
      266: 'Aatrox', 267: 'Nami', 268: 'Azir', 350: 'Yuumi', 360: 'Samira',
      412: 'Thresh', 420: 'Illaoi', 421: 'RekSai', 427: 'Ivern', 429: 'Kalista',
      432: 'Bard', 516: 'Ornn', 517: 'Sylas', 518: 'Neeko', 523: 'Aphelios',
      526: 'Rell', 555: 'Pyke', 777: 'Yone', 875: 'Sett', 876: 'Lillia',
      887: 'Gwen', 888: 'Renata', 895: 'Nilah', 897: 'KSante', 901: 'Smolder',
      902: 'Milio', 910: 'Hwei', 950: 'Naafiri'
    }
    
    return championMap[championId] || `Champion${championId}`
  }

  async getAccountByPuuid(puuid: string, region: string = 'eun1'): Promise<AccountInfo | null> {
    if (!this.useRealAPI) {
      return null // Nie robimy mock data dla account info
    }

    try {
      const continentalRegion = this.getContinentalRegion(region)
      const url = `https://${continentalRegion}.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`
      
      console.log(`🔍 Fetching account for PUUID ${puuid} in region ${continentalRegion}`)
      
      const response = await fetch(url, {
        headers: {
          'X-Riot-Token': this.apiKey
        }
      })

      if (!response.ok) {
        console.warn(`Could not fetch account for PUUID ${puuid}: ${response.status}`)
        return null
      }

      const accountData: AccountInfo = await response.json()
      console.log(`✅ Found account: ${accountData.gameName}#${accountData.tagLine}`)
      return accountData
    } catch (error) {
      console.warn('Error fetching account by PUUID:', error)
      return null
    }
  }
}

export default MatchHistoryService