import Head from "next/head";
import Offers from "../components/conts/Offers";
import HeroBanner from "../components/layout/HeroBanner";
import Sample from "../components/layout/Sample";

// import Hero from "../components/layout/Hero";
// import SubHero from "../components/layout/SubHero";
// import styles from "../styles/Home.module.css";
import { offersCardsData } from "../data/offersCardsData";
import { venciItemData } from "../data/venciItemData";

export default function Home({ propsData, sampleData }) {
  // console.log(propsData, "from PROPS");

  return (
    <div>
      <Head></Head>
      {/* <Hero /> */}
      {/* <SubHero /> */}
      <HeroBanner />
      <Offers data={propsData} />
      <Sample data={sampleData} />
    </div>
  );
}

export async function getStaticProps() {
  const propsData = offersCardsData;
  const sampleData = venciItemData;
  // console.log(propsData, "INSIDE PROPS");
  return {
    props: { propsData, sampleData },
  };
}
