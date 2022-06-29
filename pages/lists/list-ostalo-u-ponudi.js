import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import ArrowToTop from '../../components/ui/ArrowToTop'

import classes from "./ListsArticles.module.scss";

import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";

const reverte = ostaloUPonudiData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");

  return (
    <>
      <HeadList
        data={inject}
        addTitle="Ostalo u ponudi"
        addHttpaddress="https://hrizantema.rs/lists/list-ostalo-u-ponudi"
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
