import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import { venciItemData } from "../../../data/venciItemData";

export default function Slug({ pageItems }) {
  return (
    <>
      <BigVerticalSingleCard data={pageItems} />
    </>
  );
}

export async function getStaticProps(context) {
  const data = venciItemData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  return {
    props: { pageItems: pageSlug },
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
