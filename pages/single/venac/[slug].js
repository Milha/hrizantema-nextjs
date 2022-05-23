import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import { venciItemData } from "../../../data/venciItemData";
import { similarsVenciFinder } from "../../../utils/similarsFinder";

export default function Slug({ pageItems }) {
  console.log(similarsVenciFinder, "FROM VENCI SLUG");
  return (
    <>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} miniData={similarsVenciFinder} />
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
