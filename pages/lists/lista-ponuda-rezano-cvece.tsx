import SmallCard from "../../components/cards/SmallCard";
import HeadList from "../../components/heads/HeadList";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import classes from "./ListsArticles.module.scss";

import { rezanoItemData } from "../../data/rezanoItemData";
import ArrowToTop from "../../components/ui/ArrowToTop";
import ListHeadline from "../../components/layout/Headlines/ListHeadline";

import { NextPage, GetStaticProps } from "next";

import { ProductProps } from "../../types/product";

const reverte = [...rezanoItemData].reverse().map((item) => ({
  ...item,
  sample: typeof item.sample === "boolean" ? item.sample : false,
}));

const listDesc =
  "Lista ponude rezanog cveća iz naše ponude, sveže rezano cveće za svaku koje možete kupiti kao komadno ili koristiti u našim aranžmanima";

const Lists: NextPage<ProductProps> = ({ inject }) => {
  const listTitle = "Rezano cveće";

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
};

// export const getStaticProps: GetStaticProps<ProductProps> = async () => {
//   const inject = reverte;

//   return {
//     props: { inject },
//   };
// };

export const getStaticProps: GetStaticProps<ProductProps> = async () => {
  const inject = reverte;

  return {
    props: { inject },
  };
};

export default Lists;
