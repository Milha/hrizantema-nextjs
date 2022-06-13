import SmallCard from '../../components/cards/SmallCard';
import HeadList from '../../components/heads/HeadList';

import classes from './ListsArticles.module.scss';

import { venciItemData } from '../../data/venciItemData';

const reverte = venciItemData.reverse();

export default function Lists({ inject }) {
  // console.log(inject, "from list page");
  return (
    <>
      <HeadList
        data={inject}
        addTitle="Ponuda Venaca"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-venci"
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
