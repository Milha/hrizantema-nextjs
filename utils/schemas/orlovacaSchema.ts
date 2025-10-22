export const orlovachaSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Orlovača",
  description:
    "Orlovača se nalazi u južnom delu Beograda i administrativno pripada opštini Čukarica. Ovo područje je poznato po svom strateškom položaju — na spoju Ibarske magistrale i autoputa A1 obilaznice oko Beograda, gde se nalazi poznata petlja Orlovača, jedna od najvažnijih saobraćajnih raskrsnica u ovom delu grada.",
  url: "https://hrizantema.rs/orlovaca",
  //   image: "https://hrizantema.rs/images/orlovaca.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressRegion: "Čukarica",
    addressCountry: "RS",
    postalCode: "11000",
  },
  //   geo: {
  //     "@type": "GeoCoordinates",
  //     latitude: 44.765,
  //     longitude: 20.392,
  //   },
  hasPart: [
    {
      "@type": "Place",
      name: "Crkva Svetog Prokopija",
      description:
        "Pravoslavna crkva posvećena Svetom Prokopiju, koja se nalazi na glavnoj kapiji ulaza u groblje Orlovača.",
      //   url: "https://example.com/orlovaca/crkva-svetog-prokopija",
      //   image: "https://example.com/images/crkva-svetog-prokopija.jpg",
      //   geo: {
      //     "@type": "GeoCoordinates",
      //     latitude: 44.7648,
      //     longitude: 20.3912,
      //   },
      isAccessibleForFree: true,
    },
    {
      "@type": "Cemetery",
      name: "Groblje Orlovača",
      description:
        "Groblje Orlovača jedno je od najvećih gradskih grobalja u Beogradu i predstavlja važnu tačku za stanovnike prestonice i okolnih opština. Smešteno je na južnom delu grada, na izuzetno strateškoj saobraćajnoj lokaciji: direktno uz Ibarsku magistralu. Njegov položaj je dodatno naglašen zahvaljujući nedavno završenoj Petlji Orlovača, koja direktno povezuje Ibarsku magistralu sa novim krakom autoputa.",
      //   url: "https://example.com/orlovaca/groblje-orlovaca",
      //   image: "https://example.com/images/groblje-orlovaca.jpg",
      //   geo: {
      //     "@type": "GeoCoordinates",
      //     latitude: 44.7655,
      //     longitude: 20.3925,
      //   },
      isAccessibleForFree: true,
    },
  ],
};
