import Head from "next/head";

export default function HeadList({ data, addTitle, addHttpaddress, listDesc }) {
  const eleMap = data.map((inj, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: inj.title,
    item: inj.httpaddress,
    image: inj.imageBig,
  }));

  const schemaDataItemList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: addTitle,
    itemListElement: eleMap,
  };

  const ogImage = data[0].imageGMB;

  // console.log(ogImage);

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
      <title>{`Cvećara Hrizantema Orlovača | ${addTitle}`}</title>
      {/* REL CANNONICAL */}
      <link rel="canonical" href={addHttpaddress} />

      {/* META */}
      <meta name="description" content={listDesc} />

      {/* META:OG */}
      <meta property="og:url" content={addHttpaddress} key="url" />
      <meta property="og:type" content="product list" key="type" />
      <meta
        property="og:title"
        content={`Cvećara Orlovača | ${addTitle}`}
        key="title"
      />
      <meta property="og:description" content={listDesc} key="description" />
      <meta
        property="og:site_name"
        content="Hrizantema cvećara Orlovača"
        key="site_name"
      ></meta>
      <meta
        property="og:image"
        content={`https://hrizantema.rs${ogImage}`}
        key="image"
      />
    </Head>
  );
}
