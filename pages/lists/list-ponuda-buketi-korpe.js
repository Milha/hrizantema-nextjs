import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";

import classes from "./listsArticles.module.scss";

import { buketiKorpeItemData } from "../../data/buketiKorpeItemData";

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList data={buketiKorpeItemData} addTitle="Ponuda Buketa i Korpi" />
      <article className={classes.cont}>
        {inject.map((inj) => (
          <section key={inj.id}>
            <SmallCard data={inj}></SmallCard>
          </section>
        ))}
      </article>
    </>
  );
}

export async function getStaticProps() {
  const inject = buketiKorpeItemData;

  return {
    props: { inject },
  };
}
