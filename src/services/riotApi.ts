import type { RiotMatch } from "../domain/match/match.types";
import type { RiotAccount, RiotRank, RiotSummoner } from "../types";

const HEADERSAPI = { "X-Riot-Token": import.meta.env.VITE_RIOT_API_KEY };
export async function getPuuid(
  gameName: string,
  tagLine: string,
): Promise<RiotAccount> {
  try {
    const response = await fetch(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: HEADERSAPI,
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur getPuuid:", error);
    throw error;
  }
}

export async function getSummoner(puuid: string): Promise<RiotSummoner> {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: HEADERSAPI,
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur getSummoner", error);
    throw error;
  }
}

export async function getRank(puuid: string): Promise<RiotRank[]> {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`,
      {
        headers: HEADERSAPI,
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur getRank", error);
    throw error;
  }
}

export async function getMatchIds(puuid: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
      {
        headers: HEADERSAPI,
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur getMatchIds", error);
    throw error;
  }
}

export async function getMatchById(matchId: string): Promise<RiotMatch> {
  try {
    const response = await fetch(
      `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}`,
      {
        headers: HEADERSAPI,
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur getMatchId", error);
    throw error;
  }
}
