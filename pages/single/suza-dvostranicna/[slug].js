import BigHorizontalSingleCard from "../../../components/cards/BigHorizontalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";

// import { suzeItemData } from "../../../data/suzeItemData";
// import { similarsSuzeFinder } from "../../../utils/similarsFinder";

import { dvostranicneSuzeSetData } from "../../../utils/similarsFinder";

export default function Slug({ pageItems }) {
  // console.log(pageItems, "From single / suza dvostranicna");
  // console.log(pageItems.includes, "From single / suza dvostranicna");
  return (
    <>
      <HeadSingle data={pageItems} />
      {/* <BigVerticalSingleCard data={pageItems} /> */}
      <BigHorizontalSingleCard data={pageItems} />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = dvostranicneSuzeSetData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => dvostranicneSuzeSetData[el]);

  return {
    props: { pageItems: pageSlug },
  };
}

export async function getStaticPaths() {
  const data = dvostranicneSuzeSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
