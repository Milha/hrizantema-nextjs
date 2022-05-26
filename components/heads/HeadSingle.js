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
    offers: {
      "@type": "Offer",
      price: data.price,
      priceCurrency: "RSD",
      url: data.httpaddress,
      availability: data.stock,
    },
  };

  console.log(data.httpaddress);
  return (
    <Head>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaSingleItemData),
        }}
      />

      {/* META */}
      <title>Cvećara Hrizantema Orlovača | {data.title}</title>

      {/* REL CANNONICAL */}
      <link rel="canonical" href={data.httpaddress} />
    </Head>
  );
}
