import type { Region, RiotAccount, RiotRank, RiotSummoner } from "../../types";
import type { Division, Profile, Rank, Tier } from "./profile.types";

export function adaptProfile(
  account: RiotAccount,
  summoner: RiotSummoner,
  ranks: RiotRank[],
  region: Region,
): Profile {
  const { gameName, tagLine, puuid } = account;
  const { summonerLevel, profileIconId } = summoner;

  const soloQueue = ranks.find((r) => r.queueType === "RANKED_SOLO_5x5");

  const wins = soloQueue?.wins ?? 0;
  const losses = soloQueue?.losses ?? 0;
  const totalGames = wins + losses;

  const winrate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;

  const rank: Rank = {
    tier: soloQueue?.tier as Tier,
    division: soloQueue?.rank ? (soloQueue.rank as Division) : null,
    lp: soloQueue?.leaguePoints ?? 0,
    wins: wins,
    losses: losses,
    winrate: winrate,
    gamesPlayed: totalGames,
  };

  return {
    id: puuid,
    name: gameName,
    tag: tagLine,
    level: summonerLevel,
    profileIconUrl: `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/${profileIconId}.png`,
    rank,
    region,
  };
}
