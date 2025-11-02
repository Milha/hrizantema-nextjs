import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { suzeItemData } from "../../data/suzeItemData";
import { klasicneSuzeOptions } from "../../utils/constants/includings";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { useState } from "react";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";

import SelectSearch from "../../components/ui/searchs/SelectSearch";

const reverte = [...suzeItemData].reverse().map((item) => ({
  ...item,
  sample: typeof item.sample === "boolean" ? item.sample : false,
}));

const listDesc =
  "Lista prirodnih suza iz naše ponude, sveže rezano cveće se ugradjuje naše u aranžmane. Jednostranične suze za sahrane ili pomene, u više veličina i boja.";

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const listTitle = "Ponuda Klasičnih Suza";

  const [selectedFlower, setSelectedFlower] = useState("");

  const filteredItems = selectedFlower
    ? inject.filter((item) => item.includes?.includes(selectedFlower))
    : inject;
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
      <SelectSearch
        selectedFlower={selectedFlower}
        setSelectedFlower={setSelectedFlower}
        flowerOptions={klasicneSuzeOptions}
      />
      <article className={classes.cont}>
        {filteredItems.map((inj) => (
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
