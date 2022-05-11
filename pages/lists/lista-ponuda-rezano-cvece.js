import SmallCard from "../../components/cards/SmallCard";

import classes from "./listsArticles.module.scss";

import { komadnoItemData } from "../../data/rezanoItemData";

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <article className={classes.cont}>
      {inject.map((inj) => (
        <section key={inj.id}>
          {/* <SmallItem data={inj}></SmallItem> */}
          <SmallCard data={inj}></SmallCard>
        </section>
      ))}
    </article>
  );
}

export async function getStaticProps() {
  const inject = komadnoItemData;
  // const revInject = preinject.reverse();
  // const inject = preinject.reverse().slice(0, 20);

  return {
    props: { inject },
  };
}
