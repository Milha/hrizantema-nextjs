import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

// import { venciSetData } from "../../../utils/similarsFinder";
import { venciItemData } from "../../../data/venciItemData";
import { simVenciDataFind } from "../../../utils/testSimilars";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { SlugPropsLoose } from "../../../types/product";

const Slug: NextPage<SlugPropsLoose> = ({ pageItems, smallSimilarItems }) => {
  return (
    <>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Venci"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-venci"
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

export const getStaticProps: GetStaticProps<SlugPropsLoose> = async (context) => {
  // pageItems LOGIC
  const data = venciItemData;
  const data2 = simVenciDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simVenciData = data2.find((el) => el.sluglink == paramsSlug);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simVenciData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = venciItemData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
