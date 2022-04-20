import Head from "next/head";
import Offers from "../components/conts/Offers";

import Hero from "../components/layout/Hero";
import SubHero from "../components/layout/SubHero";
// import styles from "../styles/Home.module.css";
import { offersCardsData } from "../data/offersCardsData";

export default function Home({ propsData }) {
  // console.log(propsData, "from PROPS");
  return (
    <div>
      <Head></Head>
      <Hero />
      <SubHero />
      <Offers data={propsData} />
      <p>DUMMY BODY</p>
    </div>
  );
}

export async function getStaticProps() {
  const propsData = offersCardsData;
  // console.log(propsData, "INSIDE PROPS");
  return {
    props: { propsData },
  };
}
