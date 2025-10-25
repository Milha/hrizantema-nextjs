import "../styles/globals.scss";

import Head from "next/head";

import { firmSchema } from "../utils/firmSchema";
import HeaderNew from "../components/layout/HeaderNew";
import GoogleAnalytics from "../components/diverse/GoogleAnalytics";
import Footer from "../components/layout/Footer";

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
        {/* <meta name="robots" content="index, follow" /> */}

        {/* Yandex Meta registration */}
        <meta name="yandex-verification" content="a2ab817209920ace" />

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
          content="https://hrizantema.rs/images/aside/logo.png"
          key="image"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="360" />
        <meta property="og:image:height" content="360" />

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

      <GoogleAnalytics />

      <HeaderNew />

      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
