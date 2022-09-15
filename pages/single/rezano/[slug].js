import BigVerticalSingleCard from "../../../components/cards/BigVerticalSingleCard";
import HeadSingle from "../../../components/heads/HeadSingle";
import OriginLinksNavSingle from "../../../components/layout/Links/OriginLinksNavSingle";

// import { rezanoItemData } from "../../../data/rezanoItemData";
import { rezanoSimilarData } from "../../../utils/similarsFinder";
import { simRezanoDataFind } from "../../../utils/testSimilars";

export default function Slug({ pageItems, smallSimilarItems }) {
  // console.log(pageItems, "From slug Rezano");
  // console.log(rezanoSimilarData[3].test[2], "FROM norma datat");
  return (
    <div>
      <HeadSingle data={pageItems} />
      <OriginLinksNavSingle
        list="Rezano cveće"
        addHttpaddress="https://hrizantema.rs/lists/lista-ponuda-rezano-cvece"
        linksSingle={pageItems.httpaddress}
        titleSingle={pageItems.title}
      />
      <BigVerticalSingleCard
        data={pageItems}
        similarPropData={smallSimilarItems}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  // pageItems LOGIC
  const data = rezanoSimilarData;
  const data2 = simRezanoDataFind;
  const paramsSlug = context.params.slug;
  const pageSlug = data.find((el) => el.sluglink == paramsSlug);
  const simRezanoData = data2.find((el) => el.sluglink == paramsSlug);

  // // miniData LOGIC
  // const arrayTest = pageSlug.test;
  // const newMiniData = arrayTest.map((el) => rezanoItemData[el]);

  return {
    props: { pageItems: pageSlug, smallSimilarItems: simRezanoData },
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
