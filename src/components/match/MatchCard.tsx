import type { PlayerMatch } from "../../domain/match/match.types";
import styles from "./MatchCard.module.scss";

interface Props {
  match: PlayerMatch;
}

export default function MatchCard({ match }: Props) {
  // KDA sécurisé (évite division par 0)
  const kda = ((match.kills + match.assists) / (match.deaths || 1)).toFixed(1);

  // Format simple du temps écoulé
  const timeAgo = getTimeAgo(match.gameEndTimestamp);

  return (
    <div
      className={`${styles.card} ${
        match.win ? styles.cardWin : styles.cardLoss
      }`}
    >
      {/* CHAMPION BLOCK */}
      <div className={styles.championBlock}>
        <div className={styles.championImageWrapper}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${match.championName}.png`}
            alt={match.championName}
            className={styles.championImage}
          />
          <span className={styles.championLevel}>{match.championLevel}</span>
        </div>
      </div>

      {/* RESULT + MODE */}
      <div className={styles.resultBlock}>
        <span className={match.win ? styles.victory : styles.defeat}>
          {match.win ? "VICTORY" : "DEFEAT"}
        </span>
        <span className={styles.queueType}>Ranked Solo</span>
      </div>

      {/* KDA BLOCK */}
      <div className={styles.kdaBlock}>
        <div className={styles.kdaScore}>
          {match.kills} / {match.deaths} / {match.assists}
        </div>
        <div className={styles.kdaRatio}>KDA {kda}</div>
      </div>

      {/* ITEMS BLOCK */}
      <div className={styles.itemsBlock}>
        {Object.values(match.items).map((itemId, index) => (
          <img
            key={index}
            src={`https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${itemId}.png`}
            alt="item"
            className={styles.item}
          />
        ))}
      </div>

      {/* STATS BLOCK */}
      <div className={styles.statsBlock}>
        <div className={styles.cs}>{match.totalCs} CS</div>
        <div className={styles.duration}>{match.durationMinutes}m</div>
        <div className={styles.timeAgo}>{timeAgo}</div>
      </div>
    </div>
  );
}

/* ---------------- UTIL ---------------- */

function getTimeAgo(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const hours = Math.floor(diff / (1000 * 60 * 60));

  if (hours < 1) return "Il y a moins d'1h";
  if (hours < 24) return `Il y a ${hours}h`;

  const days = Math.floor(hours / 24);
  return `Il y a ${days}j`;
}
