import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import ArrowToTop from "../../components/ui/ArrowToTop";

import classes from "./ListsArticles.module.scss";

import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

const reverte = ostaloUPonudiData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  const listTitle = "Ostalo u ponudi";
  const listDesc =
    "Odabrite najlepše cveće svih vrsta, uvek sveže za sve Vaše prilike";

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
      {/* <h2 style={{ textAlign: "center", backgroundColor: "red" }}>
        {listTitle}
      </h2> */}
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
