import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import ArrowToTop from "../../components/ui/ArrowToTop";

import classes from "./ListsArticles.module.scss";

import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";

const reverte = [...ostaloUPonudiData]
  .map((item) => ({
    ...item,
    sample: typeof item.sample === "boolean" ? item.sample : false,
  }))
  .reverse();

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const listTitle = "Ostalo u ponudi";
  const listDesc =
    "Ostali proizvodi iz naše ponude, kućice za sveće, sveće, veštačko cveće, cveće u staklu i još mnogo toga";

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

export const getStaticProps: GetStaticProps<ProductProps> = async () => {
  const inject = reverte;

  return {
    props: { inject },
  };
};

export default Lists;
