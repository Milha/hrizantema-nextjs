// import { venciItemData } from "../data/venciItemData";
// import { rezanoItemData } from "../data/rezanoItemData";
// import { buketiKorpeItemData } from "../data/buketiKorpeItemData";
// import { suzeItemData } from "../data/suzeItemData";
// import { ostaloUPonudiData } from "../data/ostaloUPonudiData";

// export const similarsVenciFinder = venciItemData;
// export const miniDatasimilarsRezanoFinder = rezanoItemData;
// export const similarsBuketiKorpeFinder = buketiKorpeItemData;
// export const similarsSuzeFinder = suzeItemData;
// export const similarsOstaloFinder = ostaloUPonudiData;

// const indexing = [0, 12, 13];

// export const findInUtils = indexing.map((el) => similarsVenciFinder[el]);
// export const findInUtils = indexing.map((el) => similarsVenciFinder[el]);
import { rezanoItemData } from "../data/rezanoItemData";

const dataRezano = rezanoItemData;

export const rezanoSimilarData = dataRezano.map((inj) => ({
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,
  imageSmallWebP: inj.rezanoSimilarData,
  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  similar: inj.similar,
//   rezanoSimilarData: inj.rezanoSimilarData,
//   rezanoSimilarData: inj.rezanoSimilarData,
//   rezanoSimilarData: inj.rezanoSimilarData,
//   rezanoSimilarData: inj.rezanoSimilarData,
//   rezanoSimilarData: inj.rezanoSimilarData,
}));
