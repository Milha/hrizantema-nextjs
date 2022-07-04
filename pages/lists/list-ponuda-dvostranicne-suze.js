import SmallCardHorizontal from "../../components/cards/SmallCardHorizontal";
import HeadList from "../../components/heads/HeadList";

import classes from "./ListsArticles.module.scss";

import { suzeDvostranicneData } from "../../data/suzeDvostranicneItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";

const reverte = suzeDvostranicneData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList
        data={inject}
        addTitle="Ponuda Klasičnih Suza"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-suze"
      />
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
