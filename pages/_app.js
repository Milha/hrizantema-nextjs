import "../styles/globals.scss";

import Head from "next/head";

import { firmSchema } from "../utils/firmSchema";
import Header from "../components/layout/Header";
import Hero from "../components/icons/Hero";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hrizantema Cvećara Orlovača</title>
        {/* META */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hrizantema je cvećara na groblju Orlovača, prodaja cveća i izrada cvetnih aranžmana. Prirodni i vestački venci, suze, buketi."
        />

        {/* META:OG */}

        <meta
          property="og:title"
          content="Hrizantema Cvećara Orlovača"
          key="title"
        />
        <meta
          property="og:description"
          content="Hrizantema je cvećara na groblju Orlovača, prodaja cveća i izrada cvetnih aranžmana. Prirodni i vestački venci, suze, buketi."
          key="description"
        />

        <meta property="og:url" content="https://hrizantema.rs" key="url" />
        <meta property="og:type" content="website" key="type" />

        <meta
          property="og:site_name"
          content="Hrizantema Cvećara Orlovača"
          key="site_name"
        ></meta>
        <meta
          property="og:image"
          content="../images/aside/hrizantema-cvecara-gmb.jpg"
          key="image"
        />
        {/* NEW Favicon ico */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(firmSchema) }}
        />
      </Head>

      <Header />

      <Hero />

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
