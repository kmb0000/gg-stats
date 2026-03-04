import type { PlayerMatch, RiotMatch } from "./match.types";

export function infoGame(matchData: RiotMatch, puuid: string): PlayerMatch {
  const player = matchData.info.participants.find((p) => p.puuid === puuid);

  if (!player) throw new Error("Aucun joueur trouvé");

  const {
    kills,
    deaths,
    assists,
    totalMinionsKilled,
    neutralMinionsKilled,
    win,
    championName,
    champLevel,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
  } = player;
  const durationMinutes = Math.floor(matchData.info.gameDuration / 60);

  const totalCs = totalMinionsKilled + neutralMinionsKilled;

  return {
    championName,
    championLevel: champLevel,
    kills,
    deaths,
    assists,
    totalCs,
    durationMinutes,
    win,
    items: {
      item0,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
    },
    gameEndTimestamp: matchData.info.gameEndTimestamp,
  };
}
