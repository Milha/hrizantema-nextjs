import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";

import { ostaloUPonudiData } from "../../../data/ostaloUPonudiData";

export default function Slug({ pageItems }) {
  return (
    <>
      <BigVerticalSingleCard data={pageItems} />
    </>
  );
}

export async function getStaticProps(context) {
  const data = ostaloUPonudiData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  return {
    props: { pageItems: pageSlug },
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
