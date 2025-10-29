import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { suzeItemData } from "../../data/suzeItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";

import { flowerOptions } from "../../utils/constants/includings";
import { useState } from "react";

const reverte = [...suzeItemData].reverse().map((item) => ({
  ...item,
  sample: typeof item.sample === "boolean" ? item.sample : false,
}));

const listDesc =
  "Lista prirodnih suza iz naše ponude, sveže rezano cveće se ugradjuje naše u aranžmane. Jednostranične suze za sahrane ili pomene, u više veličina i boja.";

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const [selectedFlower, setSelectedFlower] = useState("");

  const listTitle = "Ponuda Klasičnih Suza";

  // console.log(inject, "from list page");
  return (
    <>
      <HeadList
        listDesc={listDesc}
        data={inject}
        addTitle={listTitle}
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-suze"
      />
      <OriginLinksNav
        list={listTitle}
        addHttpaddress="/lists/list-ponuda-suze"
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
