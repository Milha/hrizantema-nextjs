import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

// import { suzeItemData } from "../../../data/suzeItemData";
// import { similarsSuzeFinder } from "../../../utils/similarsFinder";

import { suzeSetData } from "../../../utils/similarsFinder";
import { simSuzeDataFind } from "../../../utils/testSimilars";

export default function Slug({ pageItems, smallSimilarItems }) {
  // console.log(pageItems);
  const listLink = pageItems.category;
  // console.log(listLink);
  return (
    <>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Klasične suze"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-suze"
        linksSingle={pageItems.httpaddress}
        titleSingle={pageItems.title}
      />
      <BigVerticalSingleCard
        data={pageItems}
        similarPropData={smallSimilarItems}
      />
    </>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = suzeSetData;
  const data2 = simSuzeDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simSuzeData = data2.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => suzeSetData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simSuzeData },
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
