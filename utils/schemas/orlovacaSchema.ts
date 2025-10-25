export const orlovachaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      name: "Orlovača",
      description:
        "Orlovača se nalazi u južnom delu Beograda i administrativno pripada opštini Čukarica. Ovo područje je poznato po svom strateškom položaju — na spoju Ibarske magistrale i autoputa A1 obilaznice oko Beograda, gde se nalazi poznata petlja Orlovača, jedna od najvažnijih saobraćajnih raskrsnica u ovom delu grada.",
      url: "https://hrizantema.rs/orlovaca",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beograd",
        addressRegion: "Čukarica",
        addressCountry: "RS",
        postalCode: "11000",
      },
    },
    {
      "@type": "Place",
      name: "Crkva Svetog Prokopija",
      description: "Crkva svetog Prokopija na groblju Orlovača",
      containedInPlace: {
        "@type": "Place",
        name: "Orlovača",
      },
      isAccessibleForFree: true,
    },
    {
      "@type": "Cemetery",
      name: "Groblje Orlovača",
      description:
        "Groblje Orlovača jedno je od najvećih gradskih grobalja u Beogradu i predstavlja važnu tačku za stanovnike prestonice i okolnih opština. Smešteno je na južnom delu grada, na izuzetno strateškoj saobraćajnoj lokaciji: direktno uz Ibarsku magistralu. Njegov položaj je dodatno naglašen zahvaljujući nedavno završenoj Petlji Orlovača, koja direktno povezuje Ibarsku magistralu sa novim krakom autoputa. Ova petlja omogućava izuzetno jednostavan i brz pristup groblju iz gotovo svih delova Beograda, kao i korisnicima koji dolaze iz pravca Novog Sada ili Čačka.",
      containedInPlace: {
        "@type": "Place",
        name: "Orlovača",
      },
      isAccessibleForFree: true,
    },
  ],
};
