import Head from "next/head";
import React from "react";

const GalleryHead = () => {
  return (
    <Head>
      <title>{`Cvećara Hrizantema Orlovača | Galerija slika`}</title>
      <meta
        name="description"
        content="Galerija slika proizvoda i aranžmana iz cvećare Hrizantema Orlovača. Slike venaca, suza, buketa i ostalih proizvoda. Venci za sahrane, suze za sahrane, pomene, parastose, buketi za sahrane, parastose, pomene i ostale prilike."
      />
      <meta
        property="og:url"
        content="https://hrizantema.rs/main-pages/gallery"
        key="url"
      />
      <meta property="og:type" content="website" key="type" />
      <meta
        property="og:title"
        content={`Cvećara Hrizantema Orlovača | Galerija slika`}
        key="title"
      />
      <meta
        property="og:description"
        content="Galerija slika proizvoda i aranžmana iz cvećare Hrizantema Orlovača. Slike venaca, suza, buketa i ostalih proizvoda. Venci za sahrane, suze za sahrane, pomene, parastose, buketi za sahrane, parastose, pomene i ostale prilike."
        key="description"
      />
      <meta
        property="og:site_name"
        content="Cvećara Hrizantema Orlovača"
        key="site_name"
      ></meta>
      <meta
        property="og:image"
        content="https://hrizantema.rs/images/buketi-korpe/drvena-kutijica-gerber-razne-boje-ruze-ljiljan-orijental-small.jpg"
        key="image"
      />
      <meta
        property="og:image"
        content="https://hrizantema.rs/images/rezano-cvece/beli-ljiljan-rezani-komadni-cvet-small.jpg"
        key="image"
      />
      <meta
        property="og:image"
        content="https://hrizantema.rs/images/buketi-korpe/beli-orijental-crveni-gerber-gipsofila-prirodna-pletena-korpa-small.jpg"
        key="image"
      />
    </Head>
  );
};

export default GalleryHead;
