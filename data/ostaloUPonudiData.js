const categorySchema = ["ostalo", "vestacko", "staklici", "saksijsko"];

const categoryOstaloUPonudi = `?category=${categorySchema[0]}`;
const categoryVestacko = `?category=${categorySchema[1]}`;
const categoryStaklici = `?category=${categorySchema[2]}`;
const categorySaksijsko = `?category=${categorySchema[3]}`;

export const ostaloUPonudiData = [
  {
    sample: true,
    similarTo: [
      "Suza od stakla ljubičaste ruže",
      "Srednja kućica za sveće - obla",
      "Krst od stakla mali - plave ruže",
    ],
    test: [2, 10, 16],
    id: 1,
    title: "Velika kućica za paljenje sveće",
    price: "2.500",
    priceRange: "1.800 - 2.200",
    includes: null,
    imageBig: "/images/ostalo-u-ponudi/kucica-za-svece-velika.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/kucica-za-svece-velika.webp",
    imageSmall: "/images/ostalo-u-ponudi/kucica-za-svece-velika-small.jpg",
    imageSmallWebP: "/images/ostalo-u-ponudi/kucica-za-svece-velika-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/kucica-za-svece-velika-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/kucica-za-svece-velika-small.jpg",
    imageMiniWebP: "/images/ostalo-u-ponudi/kucica-za-svece-velika-small.webp",
    alt: "Velika kucica za paljenje sveca na groblju",
    text: "Hrizantema cvećara Orlovača. Velika kućica za paljenje sveće. Kućica za paljenje sveća.",
    httpaddress: "https://hrizantema.rs/single/ostalo/kucica-za-svece-velika",
    link: "/single/ostalo/kucica-za-svece-velika",
    sluglink: "kucica-za-svece-velika",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-001",
    category: categorySchema[0],
  },

  {
    similarTo: [
      "Žuti ljiljan ~ žute ružice",
      "Bela kala ~ ružice ~ saksija",
      "Beli ljiljan ~ veštačko cveće",
    ],
    test: [4, 7, 8],
    id: 2,
    title: "Roze ljiljan ruže saksija",
    price: "3.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ljiljane orijentale", "veštački robelini"],
    imageBig:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips-small.webp",
    alt: "vestacko cvece roze ljiljan belo roze ruze saksija gips",
    text: "Roze ljiljani, belo - roze ruže, veštačko cveće u saksiji.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips",
    link: "/single/ostalo/roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips",
    sluglink: "roze-ljiljan-belo-roze-ruze-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-002",
    category: categorySchema[1],
  },
  {
    sample: true,
    similarTo: [
      "Velika piramida od stakla - crvene ruže",
      "Krst staklo crvene ruže",
      "Suza od stakla ljubičaste ruže",
    ],
    test: [5, 9, 3],
    id: 3,
    title: "Krst od stakla mali - plave ruže",
    price: "1.500",
    priceRange: "1.000 - 2.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze.webp",
    imageSmall: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze-small.jpg",
    imageSmallWebP: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze-small.jpg",
    imageMiniWebP: "/images/ostalo-u-ponudi/krst-staklo-plave-ruze-small.webp",
    alt: "Krst od stakla, za groblje, plave ruze",
    text: "Hrizantema cvećara Orlovača. Krst od stakla aranžiran plavim ružama.",
    httpaddress: "https://hrizantema.rs/single/ostalo/krst-staklo-plave-ruze",
    link: "/single/ostalo/krst-staklo-plave-ruze",
    sluglink: "krst-staklo-plave-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-003",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Krst od stakla mali - plave ruže",
      "Suza od stakla crvene i bele ruže",
      "Velika piramida od stakla - crvene ruže",
    ],
    test: [16, 2, 12],
    id: 4,
    title: "Suza od stakla ljubičaste ruže",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze.webp",
    imageSmall: "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-ruze-small.webp",
    alt: "Suza od stakla za groblje, ljubicaste ruze",
    text: "Hrizantema cvećara Orlovača. Suza od stakla, aranžirana ljubičastim ružama.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/staklo-suza-ljubicaste-ruze",
    link: "/single/ostalo/staklo-suza-ljubicaste-ruze",
    sluglink: "staklo-suza-ljubicaste-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-004",
    category: categorySchema[2],
  },

  {
    similarTo: [
      "Crveni ljiljan ~ veštačko gips",
      "Žuti ljiljan ~ žute ružice",
      "Roze ljiljan ruže saksija",
    ],
    test: [8, 1, 21],
    id: 5,
    title: "Bela kala ~ ružice ~ saksija",
    price: "3.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke kale", "veštačke ruže", "veštački robelini"],
    imageBig:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips-small.webp",
    alt: "vestacko cvece bele kale ljubicasto bele ruzice saksija gips",
    text: "Bele kale i ljubičaster ruže, veštačko cveće u saksiji. ",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips",
    link: "/single/ostalo/bela-kala-ljubicasto-bele-ruzice-saksijsko-gips",
    sluglink: "bela-kala-ljubicasto-bele-ruzice-saksijsko-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-005",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Krst staklo crvene ruže",
      "Piramida velika staklo crvene i bele ruže",
      "Suza od stakla crvene i bele ruže",
    ],
    test: [15, 11, 14],
    id: 6,
    title: "Velika piramida od stakla - crvene ruže",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/staklo-piramida-crvene-ruze-velika-small.webp",
    alt: "Piramida od stakla, za groblje, crvene ruze",
    text: "Velika piramida od stakla aranžiran crvenim ružama. ",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/staklo-piramida-crvene-ruze-velika",
    link: "/single/ostalo/staklo-piramida-crvene-ruze-velika",
    sluglink: "staklo-piramida-crvene-ruze-velika",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-006",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Velika piramida od stakla - crvene ruže",
      "Suza od stakla crvene i bele ruže",
      "Srce staklo crvene bele ruže",
    ],
    test: [3, 13, 12],
    id: 7,
    title: "Srce srednje staklo crvene ruže",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/staklo-srce-malo-crvene-ruze-small.webp",
    alt: "Srce malo od stakla crvene i bele ruze",
    text: "Hrizantema cvećara Orlovača. Srce od stakla malo crvene i bele ruže, veštačko cveće, veliki izbor.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/staklo-srce-malo-crvene-ruze",
    link: "/single/ostalo/staklo-srce-malo-crvene-ruze",
    sluglink: "staklo-srce-malo-crvene-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-007",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Roze orhideje",
      "Plave orhideje - veštačko",
      "Roze orhideje - veštačko",
    ],
    test: [4, 8, 1],
    id: 8,
    title: "Bele orhideje",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke orhideje"],
    imageBig:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/bele-orhideje-vestacko-cvece-saksija-gips-small.webp",
    alt: "vestacko cvece bele orhideje saksija gips",
    text: "Bele orhideje, veštačko cveće u saksiji.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/bele-orhideje-vestacko-cvece-saksija-gips",
    link: "/single/ostalo/bele-orhideje-vestacko-cvece-saksija-gips",
    sluglink: "bele-orhideje-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-008",
    category: categorySchema[1],
  },

  {
    similarTo: [
      "Bele orhideje",
      "Plave orhideje - veštačko",
      "Roze orhideje - veštačko",
    ],
    test: [1, 7, 4],
    id: 9,
    title: "Roze orhideje",
    price: "2.500",
    priceRange: "2.000 - 3.000",
    includes: ["veštačke orhideje"],
    imageBig:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/ljubicaste-roze-orhideje-vestacko-cvece-saksija-small.webp",
    alt: "vestacko cvece ljubicasto roze orhideje saksija gips",
    text: "Roze orhideje, veštačko cveće u saksiji.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/ljubicaste-roze-orhideje-vestacko-cvece-saksija",
    link: "/single/ostalo/ljubicaste-roze-orhideje-vestacko-cvece-saksija",
    sluglink: "ljubicaste-roze-orhideje-vestacko-cvece-saksija",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-009",
    category: categorySchema[1],
  },

  {
    similarTo: [
      "Suza od stakla ljubičaste ruže",
      "Krst od stakla mali - plave ruže",
      "Velika piramida od stakla - crvene ruže",
    ],
    test: [3, 2, 5],
    id: 10,
    title: "Krst staklo crvene ruže",
    price: "2.000",
    priceRange: "2.000 - 4.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze.webp",
    imageSmall: "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze-small.jpg",
    imageMiniWebP: "/images/ostalo-u-ponudi/staklo-krst-crvene-ruze-small.webp",
    alt: "Krst od stakla crvene i bele ruze",
    text: "Hrizantema cvećara Orlovača. Krst od stakla crvene i bele ruže, veštačko cveće, veliki izbor. ",
    httpaddress: "https://hrizantema.rs/single/ostalo/staklo-krst-crvene-ruze",
    link: "/single/ostalo/staklo-krst-crvene-ruze",
    sluglink: "staklo-krst-crvene-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-010",
    category: categorySchema[2],
  },

  {
    similarTo: [
      "Suza od stakla ljubičaste ruže",
      "Velika kućica za paljenje sveće",
      "Krst od stakla mali - plave ruže",
    ],
    test: [0, 4, 11],
    id: 11,
    title: "Srednja kućica za sveće - obla",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: null,
    imageBig: "/images/ostalo-u-ponudi/kucica-za-svece-mala.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/kucica-za-svece-mala.webp",
    imageSmall: "/images/ostalo-u-ponudi/kucica-za-svece-mala-small.jpg",
    imageSmallWebP: "/images/ostalo-u-ponudi/kucica-za-svece-mala-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/kucica-za-svece-mala-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/kucica-za-svece-mala-small.jpg",
    imageMiniWebP: "/images/ostalo-u-ponudi/kucica-za-svece-mala-small.webp",
    alt: "Mala kucica za svece",
    text: "Hrizantema cvećara Orlovača. Srednja kućica za sveće. Kućica za paljenje sveća.",
    httpaddress: "https://hrizantema.rs/single/ostalo/kucica-za-svece-mala",
    link: "/single/ostalo/kucica-za-svece-mala",
    sluglink: "kucica-za-svece-mala",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-011",
    category: categorySchema[0],
  },

  {
    similarTo: [
      "Suza od stakla ljubičaste ruže",
      "Krst staklo crvene ruže",
      "Velika piramida od stakla - crvene ruže",
    ],
    test: [14, 5, 15],
    id: 12,
    title: "Piramida velika staklo crvene i bele ruže",
    price: "2.500",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/staklo-piramida-velika-bele-ruze-crvene-ruze-small.webp",
    alt: "Piramida od stakla crvene i bele ruze",
    text: "Hrizantema cvećara Orlovača. Velika piramida od stakla crvene i bele ruže, veštačko cveće, veliki izbor. ",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/staklo-piramida-velika-bele-ruze-crvene-ruze",
    link: "/single/ostalo/staklo-piramida-velika-bele-ruze-crvene-ruze",
    sluglink: "staklo-piramida-velika-bele-ruze-crvene-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-012",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Suza od stakla ljubičaste i bele ruže",
      "Krst od stakla mali - plave ruže",
      "Suza od stakla ljubičaste ruže",
    ],
    test: [3, 16, 6],
    id: 13,
    title: "Suza od stakla crvene i bele ruže",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/staklo-suza-mala-bele-crvene-ruze-small.webp",
    alt: "Suza od stakla ljubicaste i bele ruze",
    text: "Hrizantema cvećara Orlovača. Suza od stakla ljubičaste i bele ruže, veštačko cveće, veliki izbor.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/staklo-suza-mala-bele-crvene-ruze",
    link: "/single/ostalo/staklo-suza-mala-bele-crvene-ruze",
    sluglink: "staklo-suza-mala-bele-crvene-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-013",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Krst od stakla mali - plave ruže",
      "Srce srednje staklo crvene ruže",
      "Suza od stakla ljubičaste ruže",
    ],
    test: [3, 6, 16],
    id: 14,
    title: "Srce staklo crvene bele ruže",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/srce-staklo-crveno-bele-ruze-small.webp",
    alt: "srce stakleno crvene i bele ruze",
    text: "Hrizantema cvećara Orlovača. Srce staklo crvene bele ruže, veštačko cveće, veliki izbor. ",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/srce-staklo-crveno-bele-ruze",
    link: "/single/ostalo/srce-staklo-crveno-bele-ruze",
    sluglink: "srce-staklo-crveno-bele-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-014",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Piramida velika staklo crvene i bele ruže",
      "Velika piramida od stakla - crvene ruže",
      "Staklo piramida ljubičaste i bele ruže",
    ],
    test: [11, 15, 5],
    id: 15,
    title: "Piramida crvene ruže - mala",
    price: "1.500",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze.jpg",
    imageBigWebP: "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze.webp",
    imageSmall: "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze-small.webp",
    imageGMB: "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze-gmb.jpg",
    imageMini: "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/mala-piramida-crvene-ruze-small.webp",
    alt: "Piramida od stakla crvene ruze",
    text: "Piramida od stakla crvene ruže, veštačko cveće - mala. Veliki izbor cveća.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/mala-piramida-crvene-ruze",
    link: "/single/ostalo/mala-piramida-crvene-ruze",
    sluglink: "mala-piramida-crvene-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-015",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Piramida velika staklo crvene i bele ruže",
      "Velika piramida od stakla - crvene ruže",
      "Piramida crvene ruže - mala",
    ],
    test: [11, 14, 5],
    id: 16,
    title: "Staklo piramida ljubičaste i bele ruže",
    price: "1.500",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/mala-piramida-ljubicaste-bele-ruze-small.webp",
    alt: "Piramida od stakla crvene ruze",
    text: "Hrizantema cvećara Orlovača. Staklo piramida ljubičaste i bele ruže, veštačko cveće, veliki izbor.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/mala-piramida-ljubicaste-bele-ruze",
    link: "/single/ostalo/mala-piramida-ljubicaste-bele-ruze",
    sluglink: "mala-piramida-ljubicaste-bele-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-016",
    category: categorySchema[2],
  },
  {
    similarTo: [
      "Srce srednje staklo crvene ruže",
      "Suza od stakla ljubičaste ruže",
      "Suza od stakla ljubičaste i bele ruže",
    ],
    test: [6, 3, 5],
    id: 17,
    title: "Suza od stakla ljubičaste i bele ruže",
    price: "1.800",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ruže"],
    imageBig: "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/staklo-suza-ljubicaste-bele-ruze-small.webp",
    alt: "Suza od stakla ljubicaste i bele ruze",
    text: "Hrizantema cvećara Orlovača. Suza od stakla ljubičaste i bele ruže, veštačko cveće, veliki izbor. ",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/staklo-suza-ljubicaste-bele-ruze",
    link: "/single/ostalo/staklo-suza-ljubicaste-bele-ruze",
    sluglink: "staklo-suza-ljubicaste-bele-ruze",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-017",
    category: categorySchema[2],
  },
  {
    similarTo: ["Bele orhideje", "Roze orhideje", "Roze orhideje - veštačko"],
    test: [20, 19, 18],
    id: 18,
    title: "Plave orhideje - veštačko",
    price: "1000",
    priceRange: "800 - 1200",
    includes: ["veštačke orhideje"],
    imageBig:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/plava-orhideja-vestacko-cvece-saksija-gips-small.webp",
    alt: "Plava orhideja vestacko cvece",
    text: "Plava orhideja, veštačko cveće, veliki izbor. ",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/plava-orhideja-vestacko-cvece-saksija-gips",
    link: "/single/ostalo/plava-orhideja-vestacko-cvece-saksija-gips",
    sluglink: "plava-orhideja-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-018",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Crvena ruža ~ crvene ružice",
      "Žuta ruža ~ žute ružice",
      "Crveni ljiljan ~ veštačko gips",
    ],
    test: [17, 20, 19],
    id: 19,
    title: "Crvene ružice - veštačko",
    price: "1.000",
    priceRange: "800 - 1400",
    includes: ["veštačke ruže"],
    imageBig:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/crvene-ruzice-vestacko-cvece-saksija-gips-small.webp",
    alt: "crvene ruzice vestacko cvece saksija gips",
    text: "Crvene ružice, veštačko cveće, veliki izbor.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/crvene-ruzice-vestacko-cvece-saksija-gips",
    link: "/single/ostalo/crvene-ruzice-vestacko-cvece-saksija-gips",
    sluglink: "crvene-ruzice-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-019",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Plave orhideje - veštačko",
      "Roze orhideje",
      "Crvene ružice - veštačko",
    ],
    test: [18, 17, 20],
    id: 20,
    title: "Roze orhideje - veštačko",
    price: "2.000",
    priceRange: "1200 - 2400",
    includes: ["veštačke orhideje"],
    imageBig:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/ljubicasta-orhideja-vestacko-cvece-saksija-gips-small.webp",
    alt: "Roze orhideja vestacko cvece",
    text: "Hrizantema cvećara Orlovača. Roze orhideja, veštačko cveće, veliki izbor.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/ljubicasta-orhideja-vestacko-cvece-saksija-gips",
    link: "/single/ostalo/ljubicasta-orhideja-vestacko-cvece-saksija-gips",
    sluglink: "ljubicasta-orhideja-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-020",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Bela kala ~ ružice ~ saksija",
      "Bele orhideje",
      "Roze orhideje",
    ],
    test: [17, 4, 19],
    id: 21,
    title: "Bele kale - veštačko",
    price: "1.500",
    priceRange: "1.200 - 2.400",
    includes: ["veštačke kale", "veštačke ruže"],
    imageBig:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips-small.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/bela-kala-vestacko-cvece-saksija-gips-small.webp",
    alt: "Bela kala vestacko cvece saksija gips",
    text: "Hrizantema cvećara Orlovača. Bela kala, veštačko cveće, veliki izbor.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/bela-kala-vestacko-cvece-saksija-gips",
    link: "/single/ostalo/bela-kala-vestacko-cvece-saksija-gips",
    sluglink: "bela-kala-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-021",
    category: categorySchema[1],
  },

  {
    sample: true,
    similarTo: [
      "Beli ljiljan ~ veštačko cveće",
      "Crvena ruža ~ crvene ružice",
      "Žuti ljiljan ~ žute ružice",
    ],
    test: [1, 4, 22],
    id: 22,
    title: "Crveni ljiljan ~ veštačko gips",
    price: "2.000",
    priceRange: "1.000 - 3.000",
    includes: ["veštačke ljiljane", "veštačke ruže", "veštački robelini"],
    imageBig:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips-mini.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips-mini.webp",
    alt: "vestacko crveni ljiljan crvene ruzice saksija gips",
    text: "Crveni ljiljan - crvene ružice, veštačko cveće u saksiji, gipsu.",
    httpaddress:
      "https://hrizantema.rs/single/ostalo/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips",
    link: "/single/ostalo/crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips",
    sluglink: "crveni-ljiljan-crvene-ruzice-vestacko-cvece-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-022",
    category: categorySchema[1],
  },

  {
    similarTo: [
      "Crveni ljiljan ~ veštačko gips",
      "Žuti ljiljan ~ žute ružice",
      "Crvena ruža ~ crvene ružice",
    ],
    test: [1, 4, 21],
    id: 23,
    title: "Žuta ruža ~ žute ružice",
    price: "1.500",
    priceRange: "1.000 - 3.500",
    includes: ["veštačke ruže"],
    imageBig:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips-mini.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips-mini.webp",
    alt: "vestacko cvece zute ruze zute ruzice saksija gips",
    text: "Žuta ruža je simbol prijateljstva koje izražava vašu podršku. Postoji mnogo različitih boja ruža, a svaka boja ima jedinstveno značenje, posebno kada birate boju ruže da izrazite saučešće.",
    httpaddress: `https://hrizantema.rs/single/ostalo/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips${categoryVestacko}`,
    link: `/single/ostalo/zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips${categoryVestacko}`,
    sluglink: "zuta-ruza-zute-ruzice-vestacko-cvece-saksija-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-023",
    category: categorySchema[1],
  },

  {
    similarTo: [
      "Crveni ljiljan ~ veštačko gips",
      "Roze ljiljan ruže saksija",
      "Žuti ljiljan ~ žute ružice",
    ],
    test: [1, 4, 21],
    id: 24,
    title: "Beli ljiljan ~ veštačko cveće",
    price: "2.500",
    priceRange: "2.000 - 3.500",
    includes: ["veštačke ljiljane", "veštačke ruže", "veštački robelini"],
    imageBig:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips-mini.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips-mini.webp",
    alt: "vestacko cvece beli ljiljan bele ruzice saksija gips",
    text: "Beli ljiljani su jedno od najpopularnijih pogrebnih cveća jer simbolizuju nevinost i čistotu duše koja je nedavno napustila ovaj svet. Bela ruža se kod saučešća koristi da označi nevinost i mladost. Oni takođe mogu označiti poštovanje prema osobi koja je preminula.",
    httpaddress: `https://hrizantema.rs/single/ostalo/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips${categoryVestacko}`,
    link: `/single/ostalo/beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips${categoryVestacko}`,
    sluglink:
      "beli-ljiljan-orijental-carski-ljiljan-bele-ruzice-saksijsko-vestacko-cvece-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-024",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Žuti ljiljan ~ žute ružice",
      "Crveni ljiljan ~ veštačko gips",
      "Žuta ruža ~ žute ružice",
    ],
    test: [18, 22, 21],
    id: 25,
    title: "Crvena ruža ~ crvene ružice",
    price: "1.500",
    priceRange: "1.000 - 2.500",
    includes: [],
    imageBig:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips-mini.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips-mini.webp",
    alt: "vestacko cvece zute ruze zute ruzice saksija gips",
    text: "Crvene ruže predstavljaju ljubav, poštovanje, hrabrost i tugu. Ruže se tradicionalno povezuju sa romantikom i strašću, ali su pogodne i za sahrane. Postoji mnogo različitih boja ruža, a svaka boja ima jedinstveno značenje, posebno kada birate boju ruže za sahranu. U pogrebnom okruženju, crvene ruže simbolizuju ljubav i tugu.",
    httpaddress: `https://hrizantema.rs/single/ostalo/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips${categoryVestacko}`,
    link: `/single/ostalo/crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips${categoryVestacko}`,
    sluglink: "crvena-ruza-crvene-ruzice-vestacko-cvece-saksije-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-025",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Beli ljiljan ~ veštačko cveće",
      "Crveni ljiljan ~ veštačko gips",
      "Žuta ruža ~ žute ružice",
    ],
    test: [1, 21, 23],
    id: 26,
    title: "Žuti ljiljan ~ žute ružice",
    price: "2.500",
    priceRange: "2.000 - 3.500",
    includes: ["vestacki ljiljan", "vestacke ruzice"],
    imageBig:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips-mini.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips-mini.webp",
    alt: "vestacko cvece zuti ljiljan zute ruzice saksija gips",
    text: "Žuti ljiljan je simbol zdravlja, blagostanja i čistoće. Zlatna boja ljiljana odiše izuzetnom lepotom i snagom van okolnosti i životnih napora. Kada se neko oseća loše, slanje buketa jarko žutih ruža je dobar način da im popravite raspoloženje i date im do znanja da ste tu za njih. Buket jarko žutog cveća takođe može da izrazi brigu i brigu za ljude koji su vam dragi i savršeno prenesu želje da se oporavite.",
    httpaddress: `https://hrizantema.rs/single/ostalo/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips${categoryVestacko}`,
    link: `/single/ostalo/zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips${categoryVestacko}`,
    sluglink:
      "zuti-ljiljan-orijental-carski-ljiljan-zute-ruzice-vestacko-cvece-gips",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-026",
    category: categorySchema[1],
  },
  {
    similarTo: [
      "Beli ljiljan ~ veštačko cveće",
      "Crveni ljiljan ~ veštačko gips",
      "Žuta ruža ~ žute ružice",
    ],
    test: [1, 4, 8],
    id: 27,
    title: "Bela hrizantema jesenka - saksija",
    price: "600",
    priceRange: "500 - 800",
    includes: [],
    imageBig:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema.jpg",
    imageBigWebP:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema.webp",
    imageSmall:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-small.jpg",
    imageSmallWebP:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-small.webp",
    imageGMB:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-gmb.jpg",
    imageMini:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-mini.jpg",
    imageMiniWebP:
      "/images/ostalo-u-ponudi/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-mini.webp",
    alt: "Bela hrizantema jesenka - saksija",
    text: "Na jeziku cveća, hrizantema nosi simboličko značenje odane ljubavi, odanosti, sreće, dugovečnosti i radosti. Ranije, žute hrizanteme su predstavljale tugu i zanemarenu ljubav - što je u suprotnosti sa njihovom svetlom, veselom nijansom.Međutim, danas se smatra žute hrizanteme simbolizuju sreću, radost, slavlje i dobro raspoloženje.Dobar su izbor za proslavu rođendana, aranžmane uz čestitke ili za razveseljenje pacijenta koji se oporavlja.",
    httpaddress: `https://hrizantema.rs/single/ostalo/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema${categorySaksijsko}`,
    link: `/single/ostalo/hrizantema-jesenja-ruza-saksija-cvecara-hrizantema${categorySaksijsko}`,
    sluglink: "hrizantema-jesenja-ruza-saksija-cvecara-hrizantema",
    availability: "https://schema.org/PreOrder",
    prodId: "OP-027",
    category: categorySchema[3],
  },
  // {
  //   similarTo: [
  //     "Beli ljiljan ~ veštačko cveće",
  //     "Bela hrizantema jesenka - saksija",
  //     "Žuta ruža ~ žute ružice",
  //   ],
  //   test: [1, 4, 8],
  //   id: 28,
  //   title: "Žuta hrizantema jesenka - saksija",
  //   price: "600",
  //   priceRange: "500 - 800",
  //   includes: [],
  //   imageBig:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema.jpg",
  //   imageBigWebP:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema.webp",
  //   imageSmall:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-small.jpg",
  //   imageSmallWebP:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-small.webp",
  //   imageGMB:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-gmb.jpg",
  //   imageMini:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-mini.jpg",
  //   imageMiniWebP:
  //     "/images/ostalo-u-ponudi/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema-mini.webp",
  //   alt: "Žuta hrizantema jesenka - saksija",
  //   text: "Na jeziku cveća, hrizantema nosi simboličko značenje odane ljubavi, odanosti, sreće, dugovečnosti i radosti. Bele hrizanteme imaju mnoga značenja. U nekim kulturama, cvet je strogo rezervisan za saosećanje i sećanje, jer bela često prenosi osećanja saučešća. Međutim, bele hrizanteme takođe simbolizuju čistoću, nevinost, duhovnost, odanost i poštenje. Dodatna simbolička značenja mogu se postići kombinovanjem sa drugim cvećem.",
  //   httpaddress: `https://hrizantema.rs/single/ostalo/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema${categorySaksijsko}`,
  //   link: `/single/ostalo/zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema${categorySaksijsko}`,
  //   sluglink: "zuta-hrizantema-jesenja-ruza-saksija-cvecara-hrizantema",
  //   availability: "https://schema.org/PreOrder",
  //   prodId: "OP-028",
  //   category: categorySchema[3],
  // },
  // {
  //   similarTo: [
  //     "Beli ljiljan ~ veštačko cveće",
  //     "Crveni ljiljan ~ veštačko gips",
  //     "Žuta ruža ~ žute ružice",
  //   ],
  //   test: [1, 4, 8],
  //   id: 1,
  //   title: "TITLE",
  //   price: "NA.000",
  //   priceRange: "4.000 - 5.500",
  //   includes: [],
  //   imageBig: "/images/ostalo-u-ponudi/INPUTIMAGE.jpg",
  //   imageBigWebP: "/images/ostalo-u-ponudi/INPUTIMAGE.webp",
  //   imageSmall: "/images/ostalo-u-ponudi/INPUTIMAGE-small.jpg",
  //   imageSmallWebP: "/images/ostalo-u-ponudi/INPUTIMAGE-small.webp",
  //   imageGMB: "/images/ostalo-u-ponudi/INPUTIMAGE-gmb.jpg",
  //   imageMini: "/images/ostalo-u-ponudi/INPUTIMAGE-mini.jpg",
  //   imageMiniWebP: "/images/ostalo-u-ponudi/INPUTIMAGE-mini.webp",
  //   alt: "ALTTTTTTT",
  //   text: "DESCCCCCCC",
  //   httpaddress: `https://hrizantema.rs/single/ostalo/LINKKKKK${categoryVestacko}`,
  //   link: `/single/ostalo/LINKKKKK${categoryVestacko}`,
  //   sluglink: "LINKKKKK",
  //   availability: "https://schema.org/PreOrder",
  //   prodId: "OP-111",
  //   category: categorySchema[1],
  // },
];

// export const ostaloUPonudiData = ostaloUPonudiDataPreReverse.reverse();
