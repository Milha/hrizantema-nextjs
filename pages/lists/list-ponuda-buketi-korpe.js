import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";

import classes from "./ListsArticles.module.scss";

import { buketiKorpeItemData } from "../../data/buketiKorpeItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";

const reverte = buketiKorpeItemData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList
        data={inject}
        addTitle="Ponuda Buketa i Korpi"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-buketi-korpe"
      />
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
