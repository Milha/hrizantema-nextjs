import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

// import { buketiKorpeItemData } from "../../../data/buketiKorpeItemData";
// import { similarsBuketiKorpeFinder } from "../../../utils/similarsFinder";
import { buketSetData } from "../../../utils/similarsFinder";
import { simBuketiTest } from "../../../utils/testSimilars";

export default function Slug({ pageItems, smallSimilarItems }) {
  return (
    <>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Buketi"
        addHttpaddress="https://hrizantema.rs/lists/list-ponuda-buketi-korpe"
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
  const data = buketSetData;
  const data2 = simBuketiTest;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simBuketiTest1 = data2.find((el) => el.sluglink == paramsSlug);

  // // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => buketiKorpeItemData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simBuketiTest1 },
  };
}

export async function getStaticPaths() {
  const data = buketSetData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
