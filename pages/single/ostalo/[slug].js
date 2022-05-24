import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";

import { ostaloUPonudiData } from "../../../data/ostaloUPonudiData";
// import { similarsOstaloFinder } from "../../../utils/similarsFinder";

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
  const data = ostaloUPonudiData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  const arrayTest = pageSlug.test;
  const newMiniData = arrayTest.map((el) => ostaloUPonudiData[el]);

  return {
    props: { pageItems: pageSlug, miniData: newMiniData },
  };
}

export async function getStaticPaths() {
  const data = ostaloUPonudiData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
