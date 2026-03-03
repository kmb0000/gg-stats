import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.sectionHero}>
      {/* IMG BACKGROUND */}
      <div className={styles.heroSplash}></div>
      {/* AVATAR */}
      <div className={styles.avatarWrap}>
        <div className={styles.avatarRing}></div>
        <div className={styles.avatarHex}>
          <img
            src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/5765.png"
            alt=""
          />
        </div>
        <div className={styles.avatarLevel}>Niv. 487</div>
      </div>
      {/* INFOS */}
      <div className={styles.playerInfo}>
        <div className={styles.playerRegion}>EUW · Europe Ouest</div>
        <div className={styles.playerName}>
          Dark<span>Rift</span>
        </div>
        <div className={styles.playerTag}>
          #EUW1 · Dernière activité il y a 2h
        </div>
        <div className={styles.playerBadge}>
          <span className={styles.badgeGold}>Challenger</span>
          <span className={styles.badgeBlue}>Main ADC</span>
          <span className={styles.badgeRed}>
            <span className={styles.liveDot}></span>
            En jeu
          </span>
        </div>
      </div>
      {/* RANK CARD */}
      <div className={styles.rankCard}>
        <div className={styles.rankEmblem}>🏆</div>
        <div className={styles.rankName}>Challenger</div>
        <div className={styles.rankLp}>1 284 LP · Rang #47</div>
        <div className={styles.glowDivider}></div>
        <div className={styles.season}>Saison 2024 - S14</div>
      </div>
    </section>
  );
}
