import SmallCardHorizontal from "../../components/cards/SmallCardHorizontal";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { suzeDvostranicneData } from "../../data/suzeDvostranicneItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";
import SelectSearch from "../../components/ui/searchs/SelectSearch";
import { useState } from "react";

const reverte = [...suzeDvostranicneData].reverse().map((item) => ({
  ...item,
  sample: item.sample ?? false,
}));

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const listTitle = "Dvostranične Suza";
  const listDesc =
    "Ponuda dvostrančnih suza iz naše ponude, sveže rezano cveće iz naše ponude može biti ugradjeno u naše dvostrančne suze koje možete stataviti po vašoj želji.";

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
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-dvostranicne-suze"
      />
      <OriginLinksNav
        list={listTitle}
        addHttpaddress="/lists/list-ponuda-dvostranicne-suze"
      />
      <ListHeadline>{listTitle}</ListHeadline>
      <SelectSearch
        selectedFlower={selectedFlower}
        setSelectedFlower={setSelectedFlower}
      />
      <article className={`${classes.cont} ${classes.horizontal_items}`}>
        {filteredItems.map((inj) => (
          <section key={inj.id}>
            <SmallCardHorizontal data={inj}></SmallCardHorizontal>
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
