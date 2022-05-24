import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";

import { buketiKorpeItemData } from "../../../data/buketiKorpeItemData";
// import { similarsBuketiKorpeFinder } from "../../../utils/similarsFinder";

export default function Slug({ pageItems, miniData }) {
  return (
    <div>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} miniData={miniData} />
    </div>
  );
}

export async function getStaticProps(context) {
  const data = buketiKorpeItemData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // miniData LOGIC
  const arrayTest = pageSlug.test;
  const newMiniData = arrayTest.map((el) => buketiKorpeItemData[el]);

  return {
    props: { pageItems: pageSlug, miniData: newMiniData },
  };
}

export async function getStaticPaths() {
  const data = buketiKorpeItemData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
