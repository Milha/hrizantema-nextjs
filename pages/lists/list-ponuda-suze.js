import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { suzeItemData } from "../../data/suzeItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

const reverte = suzeItemData.reverse();
const listDesc =
  "Odabrite najlepše cveće svih vrsta, uvek sveže za sve Vaše prilike";

export default function Lists({ inject }) {
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
}

export async function getStaticProps() {
  const inject = reverte;

  return {
    props: { inject },
  };
}
