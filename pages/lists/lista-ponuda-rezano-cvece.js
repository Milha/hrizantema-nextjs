import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";

import classes from "./ListsArticles.module.scss";

import { rezanoItemData } from "../../data/rezanoItemData";

// import { rezanoItemData } from "../../data/rezanoItemData";

const reverte = rezanoItemData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  // console.log(inject);

  return (
    <>
      <HeadList
        data={inject}
        addTitle="Ponuda rezanog cveća"
        addHttpaddress="https://hrizantema.rs/lists/lista-ponuda-rezano-cvece"
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
  const inject = reverte;

  return {
    props: { inject },
  };
}
