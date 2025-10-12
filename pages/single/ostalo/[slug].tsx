import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

import { ostaloUPonudiSetData } from "../../../utils/similarsFinder";
import { simOstaloUPonudiDataFind } from "../../../utils/testSimilars";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { SlugProps } from "../../../types/product";

const Slug: NextPage<SlugProps> = ({ pageItems, smallSimilarItems }) => {
  return (
    <>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Ostalo u ponudi"
        addHttpaddress="https://hrizantema.rs/lists/list-ostalo-u-ponudi"
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
  const data = ostaloUPonudiSetData;
  const data2 = simOstaloUPonudiDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simOstaloUPonudiData = data2.find((el) => el.sluglink == paramsSlug);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simOstaloUPonudiData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = ostaloUPonudiSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
