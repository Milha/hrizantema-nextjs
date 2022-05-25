import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";

// import { suzeItemData } from "../../../data/suzeItemData";
// import { similarsSuzeFinder } from "../../../utils/similarsFinder";

import { suzeSetData } from "../../../utils/similarsFinder";

export default function Slug({ pageItems }) {
  // console.log(pageItems);
  return (
    <>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = suzeSetData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => suzeSetData[el]);

  return {
    props: { pageItems: pageSlug },
  };
}

export async function getStaticPaths() {
  const data = suzeSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
