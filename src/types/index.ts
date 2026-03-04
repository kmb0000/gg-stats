export type Region = "EUW" | "NA" | "KR" | "EUNE";

export interface RiotAccount {
  puuid: string;
  gameName: string;
  tagLine: string;
}

export interface RiotSummoner {
  id: string;
  puuid: string;
  profileIconId: number;
  summonerLevel: number;
}

export interface RiotRank {
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}
