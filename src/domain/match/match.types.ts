export interface PlayerMatch {
  kills: number;
  deaths: number;
  assists: number;
  totalCs: number;
  durationMinutes: number;
  win: boolean;
}

export interface AggregatedStats {
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgKda: number;
  csPerMin: number;
}

export interface RiotParticipant {
  puuid: string;
  kills: number;
  deaths: number;
  assists: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  win: boolean;
}

export interface RiotMatch {
  info: {
    gameDuration: number;
    participants: RiotParticipant[];
  };
}
