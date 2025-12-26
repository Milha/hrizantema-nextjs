import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { venciItemData } from "../../data/venciItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { venciOptions } from "../../utils/constants/includings";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";
import SelectSearch from "../../components/ui/searchs/SelectSearch";
import { useState } from "react";

const reverte = [...venciItemData].reverse().map((item) => ({
  ...item,
  sample: typeof item.sample === "boolean" ? item.sample : false,
}));

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const listTitle = "Venci";
  const listDesc =
    "Venci za sahrane, ponuda naše cvećare. Prirodni venci od ruža, ljiljana, gerbera, hrizantema, margareta, ljiljana orijentala i drugih vrsta cveća unikatno izradjeni za prema vašoj želji.";

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
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-venci"
      />
      <OriginLinksNav
        list={listTitle}
        addHttpaddress="/lists/list-ponuda-venci"
      />
      <ListHeadline>{listTitle}</ListHeadline>
      <SelectSearch
        selectedFlower={selectedFlower}
        setSelectedFlower={setSelectedFlower}
        flowerOptions={venciOptions}
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
