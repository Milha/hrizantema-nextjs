import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";

// import { ostaloUPonudiData } from "../../../data/ostaloUPonudiData";
// import { similarsOstaloFinder } from "../../../utils/similarsFinder";

import {
  ostaloUPonudiSetData,
  smallSimilarItems,
} from "../../../utils/similarsFinder";
import { simOstaloUPonudiDataFind } from "../../../utils/testSimilars";

export default function Slug({ pageItems, smallSimilarItems }) {
  return (
    <>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard
        data={pageItems}
        similarPropData={smallSimilarItems}
      />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = ostaloUPonudiSetData;
  const data2 = simOstaloUPonudiDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simOstaloUPonudiData = data2.find((el) => el.sluglink == paramsSlug);

  // // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => ostaloUPonudiData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simOstaloUPonudiData },
  };
}

export async function getStaticPaths() {
  const data = ostaloUPonudiSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
