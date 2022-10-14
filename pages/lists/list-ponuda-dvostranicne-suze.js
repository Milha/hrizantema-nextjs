import SmallCardHorizontal from "../../components/cards/SmallCardHorizontal";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { suzeDvostranicneData } from "../../data/suzeDvostranicneItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

const reverte = suzeDvostranicneData.reverse();

export default function Lists({ inject }) {
  const listTitle = "Dvostranične Suza";
  const listDesc =
    "Odabrite najlepše cveće svih vrsta, uvek sveže za sve Vaše prilike";
  // console.log(inject, "from list page");

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
      <article className={`${classes.cont} ${classes.horizontal_items}`}>
        {inject.map((inj) => (
          <section key={inj.id}>
            <SmallCardHorizontal data={inj}></SmallCardHorizontal>
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
