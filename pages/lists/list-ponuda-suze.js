import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";

import classes from "./listsArticles.module.scss";

import { suzeItemData } from "../../data/suzeItemData";

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList
        data={suzeItemData}
        addTitle="Ponuda Suza"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-suze"
      />
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
  const inject = suzeItemData;

  return {
    props: { inject },
  };
}
