import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import { rezanoItemData } from "../../../data/rezanoItemData";
import { rezanoSimilarData } from "../../../utils/similarsFinder";

export default function Slug({ pageItems }) {
  console.log(rezanoItemData, "FROM norma datat");
  console.log(rezanoSimilarData, "From changed data");
  return (
    <div>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} />
    </div>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = rezanoItemData;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);

  // // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => rezanoItemData[el]);

  return {
    props: { pageItems: pageSlug },
  };
}

export async function getStaticPaths() {
  const data = rezanoItemData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
