import { venciItemData } from "../../../data/venciItemData";

export default function Slug({ pageItems }) {
  return (
    <div>
      <h2>{pageItems.title}</h2>
    </div>
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
