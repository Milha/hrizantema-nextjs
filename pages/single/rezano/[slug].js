import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
// import { rezanoItemData } from "../../../data/rezanoItemData";
import { rezanoSimilarData } from "../../../utils/similarsFinder";

export default function Slug({ pageItems }) {
  // console.log(rezanoSimilarData[3].test[2], "FROM norma datat");
  // console.log(pageItems, "FROM changed data");
  // console.log(pageItems, "FROM changed data");
  // console.log(rezanoSimilarData[0].test[0], "From changed data");
  // console.log(pageItems.test[2], "From changed data");
  return (
    <div>
      <HeadSingle data={pageItems} />
      <BigVerticalSingleCard data={pageItems} />
    </div>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = rezanoSimilarData;
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
  const data = rezanoSimilarData;

  const paths = data.map((way) => ({
    params: { slug: way.sluglink },
  }));

  return {
    paths,
    fallback: false,
  };
}
