import type { Profile } from "../../domain/profile/profile.types";
import type { Region } from "../../types";
import styles from "./Hero.module.scss";

interface Props {
  profile: Profile;
}

export default function Hero({ profile }: Props) {
  const mid = Math.floor(profile.name.length / 2);
  const first = profile.name.slice(0, mid);
  const second = profile.name.slice(mid);

  const regionLabel: Record<Region, string> = {
    EUW: "Europe Ouest",
    NA: "Amérique du Nord",
    KR: "Corée",
    EUNE: "Europe Nord-Est",
  };

  return (
    <section className={styles.sectionHero}>
      {/* IMG BACKGROUND */}
      <div className={styles.heroSplash}></div>
      {/* AVATAR */}
      <div className={styles.avatarWrap}>
        <div className={styles.avatarRing}></div>
        <div className={styles.avatarHex}>
          <img src={profile.profileIconUrl} alt="Image de profil" />
        </div>
        <div className={styles.avatarLevel}>{profile.level}</div>
      </div>
      {/* INFOS */}
      <div className={styles.playerInfo}>
        <div className={styles.playerRegion}>
          {profile.region} · {regionLabel[profile.region]}
        </div>
        <div className={styles.playerName}>
          {first}
          <span>{second}</span>
        </div>
        <div className={styles.playerTag}>{profile.tag}</div>
        <div className={styles.playerBadge}>
          <span className={styles.badgeGold}>{profile.rank.tier}</span>
        </div>
      </div>
      {/* RANK CARD */}
      <div className={styles.rankCard}>
        <div className={styles.rankEmblem}>🏆</div>
        <div className={styles.rankName}>
          {profile.rank.tier}
          {profile.rank.division ? `${profile.rank.division}` : ""}
        </div>
        <div className={styles.rankLp}>{profile.rank.lp} LP</div>
        <div className={styles.glowDivider}></div>
        <div className={styles.season}>Saison 2026 - S16</div>
      </div>
    </section>
  );
}
