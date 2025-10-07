import SmallCardHorizontal from "../../components/cards/SmallCardHorizontal";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { suzeDvostranicneData } from "../../data/suzeDvostranicneItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";

const reverte = [...suzeDvostranicneData].reverse().map((item) => ({
  ...item,
  sample: typeof item.sample === "boolean" ? item.sample : false,
}));

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const listTitle = "Dvostranične Suza";
  const listDesc =
    "Ponuda dvostrančnih suza iz naše ponude, sveže rezano cveće iz naše ponude može biti ugradjeno u naše dvostrančne suze koje možete stataviti po vašoj želji.";

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
};

export const getStaticProps: GetStaticProps<ProductProps> = async () => {
  const inject = reverte;

  return {
    props: { inject },
  };
};

export default Lists;
