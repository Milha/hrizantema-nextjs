import { rezanoItemData } from "../data/rezanoItemData";
import { suzeItemData } from "../data//suzeItemData";
import { buketiKorpeItemData } from "../data/buketiKorpeItemData";
import { ostaloUPonudiData } from "../data/ostaloUPonudiData";
import { venciItemData } from "../data/venciItemData";
import { suzeDvostranicneData } from "../data/suzeDvostranicneItemData";

// Buketi SetData
const dataRezano = rezanoItemData;

export const rezanoSimilarData = dataRezano.map((inj) => ({
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageMini: inj.imageMini,
  imageMiniWebP: inj.imageMiniWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  availability: inj.availability,
  category: inj.category ? inj.category : "",
  includes: inj.includes ? inj.includes : null,
  similar: [
    {
      miniLink: rezanoItemData[inj.test[0]].link,
      miniImage: rezanoItemData[inj.test[0]].imageMini,
      miniImageWebP: rezanoItemData[inj.test[0]].imageMiniWebP,
      miniPrice: rezanoItemData[inj.test[0]].price,
      minAlt: rezanoItemData[inj.test[0]].alt,
    },
    {
      miniLink: rezanoItemData[inj.test[1]].link,
      miniImage: rezanoItemData[inj.test[1]].imageMini,
      miniImageWebP: rezanoItemData[inj.test[1]].imageMiniWebP,
      miniPrice: rezanoItemData[inj.test[1]].price,
      minAlt: rezanoItemData[inj.test[1]].alt,
    },
    {
      miniLink: rezanoItemData[inj.test[2]].link,
      miniImage: rezanoItemData[inj.test[2]].imageMini,
      miniImageWebP: rezanoItemData[inj.test[2]].imageMiniWebP,
      miniPrice: rezanoItemData[inj.test[2]].price,
      minAlt: rezanoItemData[inj.test[2]].alt,
    },
  ],
}));

// Suze SetData
const dataSuze = suzeItemData;

export const suzeSetData = dataSuze.map((inj) => ({
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageMini: inj.imageMini,
  imageMiniWebP: inj.imageMiniWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  availability: inj.availability,
  category: inj.category ? inj.category : "",
  includes: inj.includes ? inj.includes : null,
  similar: [
    {
      miniLink: suzeItemData[inj.test[0]].link,
      miniImage: suzeItemData[inj.test[0]].imageMini,
      miniImageWebP: suzeItemData[inj.test[0]].imageMiniWebP,
      miniPrice: suzeItemData[inj.test[0]].price,
      minAlt: suzeItemData[inj.test[0]].alt,
    },
    {
      miniLink: suzeItemData[inj.test[1]].link,
      miniImage: suzeItemData[inj.test[1]].imageMini,
      miniImageWebP: suzeItemData[inj.test[1]].imageMiniWebP,
      miniPrice: suzeItemData[inj.test[1]].price,
      minAlt: suzeItemData[inj.test[1]].alt,
    },
    {
      miniLink: suzeItemData[inj.test[2]].link,
      miniImage: suzeItemData[inj.test[2]].imageMini,
      miniImageWebP: suzeItemData[inj.test[2]].imageMiniWebP,
      miniPrice: suzeItemData[inj.test[2]].price,
      minAlt: suzeItemData[inj.test[2]].alt,
    },
  ],
}));

// Buketi SetData
const dataBuket = buketiKorpeItemData;

export const buketSetData = dataBuket.map((inj) => ({
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageMini: inj.imageMini,
  imageMiniWebP: inj.imageMiniWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  availability: inj.availability,
  category: inj.category ? inj.category : "",
  includes: inj.includes ? inj.includes : null,
  similar: [
    {
      miniLink: buketiKorpeItemData[inj.test[0]].link,
      miniImage: buketiKorpeItemData[inj.test[0]].imageMini,
      miniImageWebP: buketiKorpeItemData[inj.test[0]].imageMiniWebP,
      miniPrice: buketiKorpeItemData[inj.test[0]].price,
      minAlt: buketiKorpeItemData[inj.test[0]].alt,
    },
    {
      miniLink: buketiKorpeItemData[inj.test[1]].link,
      miniImage: buketiKorpeItemData[inj.test[1]].imageMini,
      miniImageWebP: buketiKorpeItemData[inj.test[1]].imageMiniWebP,
      miniPrice: buketiKorpeItemData[inj.test[1]].price,
      minAlt: buketiKorpeItemData[inj.test[1]].alt,
    },
    {
      miniLink: buketiKorpeItemData[inj.test[2]].link,
      miniImage: buketiKorpeItemData[inj.test[2]].imageMini,
      miniImageWebP: buketiKorpeItemData[inj.test[2]].imageMiniWebP,
      miniPrice: buketiKorpeItemData[inj.test[2]].price,
      minAlt: buketiKorpeItemData[inj.test[2]].alt,
    },
  ],
}));

// Ostalo u ponudi SetData
const dataOstaloUPonudi = ostaloUPonudiData;

export const ostaloUPonudiSetData = dataOstaloUPonudi.map((inj) => ({
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageMini: inj.imageMini,
  imageMiniWebP: inj.imageMiniWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  availability: inj.availability,
  category: inj.category ? inj.category : "",
  includes: inj.includes ? inj.includes : null,
  similar: [
    {
      miniLink: ostaloUPonudiData[inj.test[0]].link,
      miniImage: ostaloUPonudiData[inj.test[0]].imageMini,
      miniImageWebP: ostaloUPonudiData[inj.test[0]].imageMiniWebP,
      miniPrice: ostaloUPonudiData[inj.test[0]].price,
      minAlt: ostaloUPonudiData[inj.test[0]].alt,
    },
    {
      miniLink: ostaloUPonudiData[inj.test[1]].link,
      miniImage: ostaloUPonudiData[inj.test[1]].imageMini,
      miniImageWebP: ostaloUPonudiData[inj.test[1]].imageMiniWebP,
      miniPrice: ostaloUPonudiData[inj.test[1]].price,
      minAlt: ostaloUPonudiData[inj.test[1]].alt,
    },
    {
      miniLink: ostaloUPonudiData[inj.test[2]].link,
      miniImage: ostaloUPonudiData[inj.test[2]].imageMini,
      miniImageWebP: ostaloUPonudiData[inj.test[2]].imageMiniWebP,
      miniPrice: ostaloUPonudiData[inj.test[2]].price,
      minAlt: ostaloUPonudiData[inj.test[2]].alt,
    },
  ],
}));

// Venci SetData
const dataVenci = venciItemData;

export const venciSetData = dataVenci.map((inj) => ({
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageMini: inj.imageMini,
  imageMiniWebP: inj.imageMiniWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  availability: inj.availability,
  category: inj.category ? inj.category : "",
  includes: inj.includes ? inj.includes : null,
  similar: [
    {
      miniLink: venciItemData[inj.test[0]].link,
      miniImage: venciItemData[inj.test[0]].imageMini,
      miniImageWebP: venciItemData[inj.test[0]].imageMiniWebP,
      miniPrice: venciItemData[inj.test[0]].price,
      minAlt: venciItemData[inj.test[0]].alt,
    },
    {
      miniLink: venciItemData[inj.test[1]].link,
      miniImage: venciItemData[inj.test[1]].imageMini,
      miniImageWebP: venciItemData[inj.test[1]].imageMiniWebP,
      miniPrice: venciItemData[inj.test[1]].price,
      minAlt: venciItemData[inj.test[1]].alt,
    },
    {
      miniLink: venciItemData[inj.test[2]].link,
      miniImage: venciItemData[inj.test[2]].imageMini,
      miniImageWebP: venciItemData[inj.test[2]].imageMiniWebP,
      miniPrice: venciItemData[inj.test[2]].price,
      minAlt: venciItemData[inj.test[2]].alt,
    },
  ],
}));

// Dovstranicne Suze SetData
const dataDvostranicneSuze = suzeDvostranicneData;

export const dvostranicneSuzeSetData = dataDvostranicneSuze.map((inj) => ({
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageMini: inj.imageMini,
  imageMiniWebP: inj.imageMiniWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  availability: inj.availability,
  category: inj.category ? inj.category : "",
  includes: inj.includes ? inj.includes : null,
  similar: [
    {
      miniLink: suzeDvostranicneData[inj.test[0]].link,
      miniImage: suzeDvostranicneData[inj.test[0]].imageMini,
      miniImageWebP: suzeDvostranicneData[inj.test[0]].imageMiniWebP,
      miniPrice: suzeDvostranicneData[inj.test[0]].price,
      minAlt: suzeDvostranicneData[inj.test[0]].alt,
    },
    {
      miniLink: suzeDvostranicneData[inj.test[1]].link,
      miniImage: suzeDvostranicneData[inj.test[1]].imageMini,
      miniImageWebP: suzeDvostranicneData[inj.test[1]].imageMiniWebP,
      miniPrice: suzeDvostranicneData[inj.test[1]].price,
      minAlt: suzeDvostranicneData[inj.test[1]].alt,
    },
    {
      miniLink: suzeDvostranicneData[inj.test[2]].link,
      miniImage: suzeDvostranicneData[inj.test[2]].imageMini,
      miniImageWebP: suzeDvostranicneData[inj.test[2]].imageMiniWebP,
      miniPrice: suzeDvostranicneData[inj.test[2]].price,
      minAlt: suzeDvostranicneData[inj.test[2]].alt,
    },
  ],
}));
