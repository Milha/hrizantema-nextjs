import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";

import classes from "./listsArticles.module.scss";

import { rezanoItemData } from "../../data/rezanoItemData";

// import { rezanoItemData } from "../../data/rezanoItemData";

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList data={rezanoItemData} addTitle="Ponuda rezanog cveća" />
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
  const inject = rezanoItemData;

  return {
    props: { inject },
  };
}
