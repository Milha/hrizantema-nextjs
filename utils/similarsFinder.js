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
  test: inj.test,
  id: inj.id,
  title: inj.title,
  price: inj.price,
  priceRange: inj.priceRange,
  imageBig: inj.imageBig,
  imageBigWebP: inj.imageBigWebP,
  imageSmall: inj.imageSmall,
  imageSmallWebP: inj.imageSmallWebP,

  imageGMB: inj.imageGMB,
  alt: inj.alt,
  text: inj.text,
  httpaddress: inj.httpaddress,
  link: inj.link,
  sluglink: inj.sluglink,
  prodId: inj.prodId,
  similar: [
    {
      miniLink: rezanoItemData[inj.test[0]].link,
      miniImage: rezanoItemData[inj.test[0]].imageBig,
      miniPrice: rezanoItemData[inj.test[0]].price,
      minAlt: rezanoItemData[inj.test[0]].alt,
    },
    {
      miniLink: rezanoItemData[inj.test[1]].link,
      miniImage: rezanoItemData[inj.test[1]].imageBig,
      miniPrice: rezanoItemData[inj.test[1]].price,
      minAlt: rezanoItemData[inj.test[1]].alt,
    },
    {
      miniLink: rezanoItemData[inj.test[2]].link,
      miniImage: rezanoItemData[inj.test[2]].imageBig,
      miniPrice: rezanoItemData[inj.test[2]].price,
      minAlt: rezanoItemData[inj.test[2]].alt,
    },
  ],
  //   similar: inj.similar,

  //   rezanoSimilarData: inj.rezanoSimilarData,
  //   rezanoSimilarData: inj.rezanoSimilarData,
  //   rezanoSimilarData: inj.rezanoSimilarData,
  //   rezanoSimilarData: inj.rezanoSimilarData,
  //   rezanoSimilarData: inj.rezanoSimilarData,
}));
