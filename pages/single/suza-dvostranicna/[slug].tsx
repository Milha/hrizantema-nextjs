import BigHorizontalSingleCard from "../../../components/cards/BigHorizontalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

import { suzeDvostranicneData } from "../../../data/suzeDvostranicneItemData";
import { simDvostranicneSuzeTest } from "../../../utils/testSimilars";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { SlugProps } from "../../../types/product";
import { dvostranicneSuzeSetData } from "../../../utils/similarsFinder";

const Slug: NextPage<SlugProps> = ({ pageItems, smallSimilarItems }) => {
  return (
    <>
      <HeadSingle data={pageItems} />
      {/* <BigVerticalSingleCard data={pageItems} /> */}
      <OriginLinksNavSingle
        list="Dvostranične suze"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-dvostranicne-suze"
        linksSingle={pageItems.httpaddress}
        titleSingle={pageItems.title}
      />
      <BigHorizontalSingleCard
        data={pageItems}
        similarPropData={smallSimilarItems}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<SlugProps> = async (context) => {
  // pageItems LOGIC
  const data = dvostranicneSuzeSetData;
  const data2 = simDvostranicneSuzeTest;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simDvostraniceneSuzeTest1 = data2.find(
    (el) => el.sluglink == paramsSlug
  );

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => dvostranicneSuzeSetData[el]);

  return {
    props: {
      pageItems: pageSlug,
      smallSimilarItems: simDvostraniceneSuzeTest1,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = suzeDvostranicneData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
