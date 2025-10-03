import Head from "next/head";
import Offers from "../components/cards/Offers";
import HeroBanner from "../components/layout/HeroBanner";
import Sample from "../components/cards/Sample";

import { offersCardsData } from "../data/offersCardsData";

import { sampleItems } from "../utils/sampleFinder";
import ArrowToTop from "../components/ui/ArrowToTop";
import MapButton from "../components/ui/MapButton";
import ReminderCard from "../components/vary-components/ReminderCard";
import ButtonWide from "../components/ui/buttons/ButtonWide";

export default function Home({ propsData, sampleFinderData }) {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://hrizantema.rs" />
      </Head>
      {/* <Hero /> */}
      {/* <SubHero /> */}
      <HeroBanner />
      <ReminderCard></ReminderCard>
      <Offers data={propsData} />
      <MapButton
        hrefData={
          "https://www.google.com/maps/place/Hrizantema+Cve%C4%87ara+Orlova%C4%8Da/@44.7158874,20.4169648,14.71z/data=!4m5!3m4!1s0x0:0xbf13ca7f0a30e621!8m2!3d44.7095133!4d20.4124528"
        }
      />
      <Sample data={sampleFinderData} />
      <ButtonWide />
      <ArrowToTop />
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
