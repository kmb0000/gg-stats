import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import styles from "./Profile.module.scss";

export default function ProfilePage() {
  return (
    <main className={styles.app}>
      <Background />

      {/* NAV */}
      <Navbar />
      {/* HERO SECTION */}
      <Hero />
    </main>
  );
}
