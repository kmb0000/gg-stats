import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import MatchHistory from "../components/sections/MatchHistory";
import StatsCard from "../components/sections/Stats-card";
import { useProfile } from "../hooks/useProfile";
import type { Region } from "../types";
import styles from "./Profile.module.scss";

export default function ProfilePage() {
  const region: Region = "EUW";
  const { profile, loading, error, stats, matches } = useProfile(
    region,
    "KC NEXT ADKING",
    "EUW",
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  if (!profile || !stats) return null;
  return (
    <main className={styles.app}>
      <Background />

      {/* NAV */}
      <Navbar />
      {/* HERO SECTION */}
      <Hero profile={profile} />

      {/* STATS */}
      <StatsCard rank={profile.rank} stats={stats} />

      <MatchHistory matches={matches} />
    </main>
  );
}
