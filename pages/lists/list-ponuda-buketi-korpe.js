import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { buketiKorpeItemData } from "../../data/buketiKorpeItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

const reverte = buketiKorpeItemData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  const listTitle = "Buketi i Korpe";
  const listDesc =
    "Odabrite najlepše cveće svih vrsta, uvek sveže za sve Vaše prilike";

  return (
    <>
      <HeadList
        listDesc={listDesc}
        data={inject}
        addTitle={listTitle}
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-buketi-korpe"
      />
      <OriginLinksNav
        list={listTitle}
        addHttpaddress="/lists/list-ponuda-buketi-korpe"
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
}

export async function getStaticProps() {
  const inject = reverte;

  return {
    props: { inject },
  };
}
