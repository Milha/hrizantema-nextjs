import SmallCard from "../../components/cards/SmallCard";

import classes from "./listsArticles.module.scss";

import { venciItemData } from "../../data/venciItemData";
import HeadList from "../../components/heads/HeadList";

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList data={venciItemData} addTitle="Ponuda Venaca" />
      <article className={classes.cont}>
        {inject.map((inj) => (
          <section key={inj.id}>
            {/* <SmallItem data={inj}></SmallItem> */}
            <SmallCard data={inj}></SmallCard>
          </section>
        ))}
      </article>
    </>
  );
}

export async function getStaticProps() {
  const inject = venciItemData;
  // const revInject = preinject.reverse();
  // const inject = preinject.reverse().slice(0, 20);

  return {
    props: { inject },
  };
}
