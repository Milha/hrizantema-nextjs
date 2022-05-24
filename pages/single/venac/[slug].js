import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import { venciItemData } from "../../../data/venciItemData";
import { similarsVenciFinder } from "../../../utils/similarsFinder";
import { findInUtils } from "../../../utils/similarsFinder";

export default function Slug({ pageItems, miniData }) {
  // console.log(similarsVenciFinder, "FROM VENCI SLUG");
  // console.log(pageItems, "FROM VENCI SLUG");
  // console.log(pageItems.test, "Testing find test array");
  // const arrayTest = pageItems.test;
  // console.log(
  //   arrayTest.map((el) => similarsVenciFinder[el]),
  //   "Maybe use map"
  // );
  // const newMiniData = arrayTest.map((el) => similarsVenciFinder[el]);
  // console.log(pageItems, "From page props");
  // console.log(findInUtils, "Just Array");
  // console.log(Object.assign({}, findInUtils), "From utils");
  // const assigned = Object.assign({}, findInUtils);
  // console.log(assigned[1], "From Objected");
  return (
    <>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} miniData={miniData} />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = venciItemData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  const arrayTest = pageSlug.test;
  const newMiniData = arrayTest.map((el) => similarsVenciFinder[el]);

  return {
    props: { pageItems: pageSlug, miniData: newMiniData },
  };
}

export async function getStaticPaths() {
  const data = venciItemData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
