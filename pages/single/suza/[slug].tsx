import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

import { suzeSetData } from "../../../utils/similarsFinder";
import { simSuzeDataFind } from "../../../utils/testSimilars";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { SlugProps } from "../../../types/product";

const Slug: NextPage<SlugProps> = ({ pageItems, smallSimilarItems }) => {
  // const listLink = pageItems.category;
  return (
    <>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Klasične suze"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-suze"
        linksSingle={pageItems.httpaddress}
        titleSingle={pageItems.title}
      />
      <BigVerticalSingleCard
        data={pageItems}
        similarPropData={smallSimilarItems}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<SlugProps> = async (context) => {
  // pageItems LOGIC
  const data = suzeSetData;
  const data2 = simSuzeDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simSuzeData = data2.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => suzeSetData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simSuzeData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = suzeSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
