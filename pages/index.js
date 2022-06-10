import Head from "next/head";
import Offers from "../components/cards/Offers";
import HeroBanner from "../components/layout/HeroBanner";
import Sample from "../components/cards/Sample";

// import Hero from "../components/layout/Hero";
// import SubHero from "../components/layout/SubHero";
// import styles from "../styles/Home.module.css";
import { offersCardsData } from "../data/offersCardsData";
// import { sampleIndexItemData } from "../data/sampleIndexItemData";

import { sampleItems } from "../utils/sampleFinder";

export default function Home({ propsData, sampleFinderData }) {
  // console.log(sampleFinderData, "from PROPS");
  return (
    <div>
      <Head>
        {/* REL CANNONICAL */}
        <link rel="canonical" href="https://hrizantema.rs" />
      </Head>
      {/* <Hero /> */}
      {/* <SubHero /> */}
      <HeroBanner />
      <Offers data={propsData} />
      <Sample data={sampleFinderData} />
    </div>
  );
}

export async function getStaticProps() {
  const propsData = offersCardsData;
  // const sampleData = sampleIndexItemData;
  const sampleFinderData = sampleItems;

  // console.log(propsData, "INSIDE PROPS");
  return {
    props: { propsData, sampleFinderData },
  };
}
