import Head from "next/head";
import { getDateXDayFromNow } from "../../lib/helpers/schema-helpers";

export default function HeadSingle({ data }) {
  const slicedDesc = data.text.slice(0, 152).concat("...");

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
    description: slicedDesc,
    name: data.title,
    category: data.category,
    material: data.includes,
    // category: data.category ? data.category : "/",
    offers: {
      "@type": "Offer",
      price: Number(data.price.replace(".", "")),
      priceCurrency: "RSD",
      priceValidUntil: getDateXDayFromNow(),
      url: data.httpaddress,
      availability: data.availability,
      itemCondition: "NewCondition",
    },
    url: data.httpaddress,
    isPartOf: {
      "@type": "WebPage",
      "@id": "https://hrizantema.rs",
      url: "https://hrizantema.rs",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://hrizantema.rs",
      url: "https://hrizantema.rs",
    },
  };

  // console.log(data.includes, "From Head");
  return (
    <Head>
      {/* TITLE */}
      <title>{`Cvećara Orlovača | ${data.title}`}</title>

      {/* REL CANNONICAL */}
      <link rel="canonical" href={data.httpaddress} />

      {/* META */}
      <meta name="description" content={slicedDesc} />

      {/* META:OG */}
      <meta property="og:url" content={data.httpaddress} key="url" />
      <meta property="og:type" content="product" key="type" />
      <meta
        property="og:title"
        content={`Cvećara Orlovača | ${data.title}`}
        key="title"
      />
      <meta property="og:description" content={slicedDesc} key="description" />
      <meta
        property="og:site_name"
        content="Hrizantema cvećara Orlovača"
        key="site_name"
      ></meta>
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
