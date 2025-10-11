import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { buketSetData } from "../../../utils/similarsFinder";
import { simBuketiTest } from "../../../utils/testSimilars";
import { SlugProps } from "../../../types/product";

const Slug: NextPage<SlugProps> = ({ pageItems, smallSimilarItems }) => {
  return (
    <>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Buketi"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-buketi-korpe"
        linksSingle={pageItems.link}
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
  const data = buketSetData;
  const data2 = simBuketiTest;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simBuketiTest1 = data2.find((el) => el.sluglink == paramsSlug);

  // // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => buketiKorpeItemData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simBuketiTest1 },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = buketSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
