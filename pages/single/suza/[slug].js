import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";

import { suzeItemData } from "../../../data/suzeItemData";
// import { similarsSuzeFinder } from "../../../utils/similarsFinder";

export default function Slug({ pageItems, miniData }) {
  return (
    <>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} miniData={miniData} />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = suzeItemData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  const arrayTest = pageSlug.test;
  const newMiniData = arrayTest.map((el) => suzeItemData[el]);

  return {
    props: { pageItems: pageSlug, miniData: newMiniData },
  };
}

export async function getStaticPaths() {
  const data = suzeItemData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
