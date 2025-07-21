import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

// import { venciSetData } from "../../../utils/similarsFinder";
import { venciItemData } from "../../../data/venciItemData";
import { simVenciDataFind } from "../../../utils/testSimilars";

export default function Slug({ pageItems, smallSimilarItems }) {
  // console.log(pageItems);
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
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = venciItemData;
  const data2 = simVenciDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simVenciData = data2.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => venciItemData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simVenciData },
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
