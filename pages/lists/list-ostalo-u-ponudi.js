import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";

import classes from "./listsArticles.module.scss";

import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList data={ostaloUPonudiData} addTitle="Ostalo u ponudi" />
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
  const inject = ostaloUPonudiData;

  return {
    props: { inject },
  };
}
