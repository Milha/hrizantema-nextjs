import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import ArrowToTop from "../../components/ui/ArrowToTop";

import classes from "./ListsArticles.module.scss";

import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { NextPage, GetStaticProps } from "next";

// types/data.ts

export type Item = {
  sample: boolean;
  similarTo: string[];
  test: number[];
  id: number;
  title: string;
  price: string;
  priceRange: string;
  includes: string[] | null;
  imageBig: string;
  imageBigWebP: string;
  imageSmall: string;
  imageSmallWebP: string;
  imageGMB: string;
  imageMini: string;
  imageMiniWebP: string;
  alt: string;
  text: string;
  httpaddress: string;
  link: string;
  sluglink: string;
  availability: string;
  prodId: string;
  category: string; // ili ako imaš poseban tip za categorySchema, koristi njega
};

type ListsProps = {
  inject: Item[];
};

const reverte = ostaloUPonudiData
  .map((item) => ({
    ...item,
    sample: typeof item.sample === "boolean" ? item.sample : false,
  }))
  .reverse();

const Lists: NextPage<ListsProps> = ({ inject }) => {
  // console.log(inject, "from list page");
  const listTitle = "Ostalo u ponudi";
  const listDesc =
    "Odabrite najlepše cveće svih vrsta, uvek sveže za sve Vaše prilike";

  return (
    <>
      <HeadList
        listDesc={listDesc}
        data={inject}
        addTitle={listTitle}
        addHttpaddress="https://hrizantema.rs/lists/list-ostalo-u-ponudi"
      />
      <OriginLinksNav
        list="Ostalo u ponudi"
        addHttpaddress="/lists/list-ostalo-u-ponudi"
      />
      <ListHeadline>{listTitle}</ListHeadline>
      {/* <h2 style={{ textAlign: "center", backgroundColor: "red" }}>
        {listTitle}
      </h2> */}
      <article className={classes.cont}>
        {inject.map((inj) => (
          <section key={inj.id}>
            <SmallCard data={inj}></SmallCard>
          </section>
        ))}
      </article>
      <ArrowToTop />
    </>
  );
};

export const getStaticProps: GetStaticProps<ListsProps> = async () => {
  const inject = reverte;

  return {
    props: { inject },
  };
};

export default Lists;
