import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { rezanoItemData } from "../../data/rezanoItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

// import { rezanoItemData } from "../../data/rezanoItemData";

const reverte = rezanoItemData.reverse();
const listDesc =
  "Odabrite najlepše cveće svih vrsta, uvek sveže za sve Vaše prilike";

export default function Lists({ inject }) {
  const listTitle = "Rezano cveće";

  // console.log(inject, "from list page");
  // console.log(inject);

  return (
    <>
      <HeadList
        listDesc={listDesc}
        data={inject}
        addTitle={listTitle}
        addHttpaddress="https://hrizantema.rs/lists/lista-ponuda-rezano-cvece"
      />
      <OriginLinksNav
        list={listTitle}
        addHttpaddress="/lists/lista-ponuda-rezano-cvece"
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
