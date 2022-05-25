import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
// import { venciItemData } from "../../../data/venciItemData";
import { venciSetData } from "../../../utils/similarsFinder";
// import { similarsVenciFinder } from "../../../utils/similarsFinder";
// import { findInUtils } from "../../../utils/similarsFinder";

export default function Slug({ pageItems }) {
  // miniData LOGIC
  // const arrayTest = pageItems.test;
  // const newMiniData = arrayTest.map((el) => venciItemData[el]);
  // console.log(arrayTest);
  return (
    <>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = venciSetData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => venciItemData[el]);

  return {
    props: { pageItems: pageSlug },
  };
}

export async function getStaticPaths() {
  const data = venciSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
