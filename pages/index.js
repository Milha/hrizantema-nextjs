import Head from "next/head";

import Hero from "../components/layout/Hero";
import SubHero from "../components/layout/SubHero";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Hero />
      <SubHero />
      <p>DUMMY BODY</p>
    </div>
  );
}
