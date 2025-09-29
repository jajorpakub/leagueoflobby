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
  riotIdName: string
  riotIdTagline: string
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
  summonerName: string
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

  async getMatchHistory(puuid: string, count: number = 10, region: string = 'eun1'): Promise<string[]> {
    if (!this.useRealAPI) {
      return this.getMockMatchHistory(count)
    }

    try {
      const continentalRegion = this.getContinentalRegion(region)
      const url = `https://${continentalRegion}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}`
      
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
}

export default MatchHistoryService