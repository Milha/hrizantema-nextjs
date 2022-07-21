import Head from "next/head";

export default function HeadSingle({ data }) {
  const schemaSingleItemData = {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: {
      "@type": "Organization",
      name: "Hrizantema cvećara Orlovača",
      url: "https://hrizantema.rs",
      telephone: "+381692050441",
      email: "sztrhrizantema@gmail.com",
    },
    image: data.imageBig,
    description: data.text,
    name: data.title,
    category: data.category,
    material: data.includes,
    // category: data.category ? data.category : "/",
    offers: {
      "@type": "Offer",
      price: data.price,
      priceCurrency: "RSD",
      priceValidUntil: "2023-11-20",
      url: data.httpaddress,
      availability: data.availability,
    },
    url: data.httpaddress,
  };

  // console.log(data.includes, "From Head");
  return (
    <Head>
      {/* TITLE */}
      <title>Cvećara Hrizantema Orlovača | {data.title}</title>

      {/* REL CANNONICAL */}
      <link rel="canonical" href={data.httpaddress} />

      {/* META */}
      <meta name="description" content={data.text} />

      {/* META:OG */}
      <meta property="og:url" content={data.httpaddress} key="url" />
      <meta property="og:type" content="product" key="type" />
      <meta
        property="og:title"
        content={`Cvećara Hrizantema Orlovača | ${data.title}`}
        key="title"
      />
      <meta property="og:description" content={data.text} key="description" />
      <meta property="og:site_name" content="Zdrava" key="site_name"></meta>
      <meta property="og:image" content={data.imageSmall} key="image" />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaSingleItemData),
        }}
      />
    </Head>
  );
}
