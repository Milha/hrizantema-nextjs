import Head from "next/head";

export default function HeadList({ data, addTitle }) {
  const eleMap = data.map((inj) => ({
    "@type": "ListItem",
    position: inj.id + 1,
    name: inj.title,
    item: inj.httpaddress,
    image: inj.imageBig,
  }));

  const schemaDataItemList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Lista venaca",
    itemListElement: eleMap,
  };
  return (
    <Head>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaDataItemList),
        }}
      />

      {/* META */}
      <title>Cvećara Hrizantema Orlovača | {addTitle}</title>
    </Head>
  );
}
