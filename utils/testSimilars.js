import { buketiKorpeItemData } from "../data/buketiKorpeItemData";
import { venciItemData } from "../data/venciItemData";
import { suzeDvostranicneData } from "../data/suzeDvostranicneItemData";
import { suzeItemData } from "../data/suzeItemData";
import { rezanoItemData } from "../data/rezanoItemData";
import { ostaloUPonudiData } from "../data/ostaloUPonudiData";

export const simBuketiTest = buketiKorpeItemData.map((inj) => ({
  sluglink: inj.sluglink,
  similar: [
    {
      miniSimilarLink: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).link,
      miniSimilarTitle: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).title,
      miniSimilarAlt: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).alt,
      miniSimilarPrice: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).price,
      miniImageSimilar:
        buketiKorpeItemData.find((el) => el.title === inj.similarTo[0])
          .imageMini ?? "",
      miniImageWebPSimilar:
        buketiKorpeItemData.find((el) => el.title === inj.similarTo[0])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).link,
      miniSimilarTitle: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).title,
      miniSimilarAlt: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).alt,
      miniSimilarPrice: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).price,
      miniImageSimilar:
        buketiKorpeItemData.find((el) => el.title === inj.similarTo[1])
          .imageMini ?? "",
      miniImageWebPSimilar:
        buketiKorpeItemData.find((el) => el.title === inj.similarTo[1])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).link,
      miniSimilarTitle: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).title,
      miniSimilarAlt: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).alt,
      miniSimilarPrice: buketiKorpeItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).price,
      miniImageSimilar:
        buketiKorpeItemData.find((el) => el.title === inj.similarTo[2])
          .imageMini ?? "",
      miniImageWebPSimilar:
        buketiKorpeItemData.find((el) => el.title === inj.similarTo[2])
          .imageMiniWebP ?? "",
    },
  ],
}));

// export const simVenciDataFind = venciItemData.map((inj) => ({
//   sluglink: inj.sluglink,
//   similar: [
//     {
//       miniSimilarLink: venciItemData.find((el) => el.title === inj.similarTo[0])
//         .link,
//       miniSimilarTitle: venciItemData.find(
//         (el) => el.title === inj.similarTo[0]
//       ).title,
//       miniSimilarAlt: venciItemData.find((el) => el.title === inj.similarTo[0])
//         .alt,
//       miniSimilarPrice: venciItemData.find(
//         (el) => el.title === inj.similarTo[0]
//       ).price,
//       miniImageSimilar:
//         venciItemData.find((el) => el.title === inj.similarTo[0]).imageMini ??
//         "",
//       miniImageWebPSimilar:
//         venciItemData.find((el) => el.title === inj.similarTo[0])
//           .imageMiniWebP ?? "",
//     },
//     {
//       miniSimilarLink: venciItemData.find((el) => el.title === inj.similarTo[1])
//         .link,
//       miniSimilarTitle: venciItemData.find(
//         (el) => el.title === inj.similarTo[1]
//       ).title,
//       miniSimilarAlt: venciItemData.find((el) => el.title === inj.similarTo[1])
//         .alt,
//       miniSimilarPrice: venciItemData.find(
//         (el) => el.title === inj.similarTo[1]
//       ).price,
//       miniImageSimilar:
//         venciItemData.find((el) => el.title === inj.similarTo[1]).imageMini ??
//         "",
//       miniImageWebPSimilar:
//         venciItemData.find((el) => el.title === inj.similarTo[1])
//           .imageMiniWebP ?? "",
//     },
//     {
//       miniSimilarLink: venciItemData.find((el) => el.title === inj.similarTo[2])
//         .link,
//       miniSimilarTitle: venciItemData.find(
//         (el) => el.title === inj.similarTo[2]
//       ).title,
//       miniSimilarAlt: venciItemData.find((el) => el.title === inj.similarTo[2])
//         .alt,
//       miniSimilarPrice: venciItemData.find(
//         (el) => el.title === inj.similarTo[2]
//       ).price,
//       miniImageSimilar:
//         venciItemData.find((el) => el.title === inj.similarTo[2]).imageMini ??
//         "",
//       miniImageWebPSimilar:
//         venciItemData.find((el) => el.title === inj.similarTo[2])
//           .imageMiniWebP ?? "",
//     },
//   ],
// }));

export const simVenciDataFind = venciItemData.map((inj) => {
  const sim0 = venciItemData.find((el) => el.title === inj.similarTo[0]);
  const sim1 = venciItemData.find((el) => el.title === inj.similarTo[1]);
  const sim2 = venciItemData.find((el) => el.title === inj.similarTo[2]);

  return {
    sluglink: inj.sluglink,
    similar: [
      {
        miniSimilarLink: sim0?.link ?? "",
        miniSimilarTitle: sim0?.title ?? "",
        miniSimilarAlt: sim0?.alt ?? "",
        miniSimilarPrice: sim0?.price ?? "",
        miniImageSimilar: sim0?.imageMini ?? "",
        miniImageWebPSimilar: sim0?.imageMiniWebP ?? "",
      },
      {
        miniSimilarLink: sim1?.link ?? "",
        miniSimilarTitle: sim1?.title ?? "",
        miniSimilarAlt: sim1?.alt ?? "",
        miniSimilarPrice: sim1?.price ?? "",
        miniImageSimilar: sim1?.imageMini ?? "",
        miniImageWebPSimilar: sim1?.imageMiniWebP ?? "",
      },
      {
        miniSimilarLink: sim2?.link ?? "",
        miniSimilarTitle: sim2?.title ?? "",
        miniSimilarAlt: sim2?.alt ?? "",
        miniSimilarPrice: sim2?.price ?? "",
        miniImageSimilar: sim2?.imageMini ?? "",
        miniImageWebPSimilar: sim2?.imageMiniWebP ?? "",
      },
    ],
  };
});

export const simDvostranicneSuzeTest = suzeDvostranicneData.map((inj) => ({
  sluglink: inj.sluglink,
  similar: [
    {
      miniSimilarLink: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[0]
      ).link,
      miniSimilarTitle: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[0]
      ).title,
      miniSimilarAlt: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[0]
      ).alt,
      miniSimilarPrice: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[0]
      ).price,
      miniImageSimilar:
        suzeDvostranicneData.find((el) => el.title === inj.similarTo[0])
          .imageMini ?? "",
      miniImageWebPSimilar:
        suzeDvostranicneData.find((el) => el.title === inj.similarTo[0])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[1]
      ).link,
      miniSimilarTitle: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[1]
      ).title,
      miniSimilarAlt: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[1]
      ).alt,
      miniSimilarPrice: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[1]
      ).price,
      miniImageSimilar:
        suzeDvostranicneData.find((el) => el.title === inj.similarTo[1])
          .imageMini ?? "",
      miniImageWebPSimilar:
        suzeDvostranicneData.find((el) => el.title === inj.similarTo[1])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[2]
      ).link,
      miniSimilarTitle: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[2]
      ).title,
      miniSimilarAlt: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[2]
      ).alt,
      miniSimilarPrice: suzeDvostranicneData.find(
        (el) => el.title === inj.similarTo[2]
      ).price,
      miniImageSimilar:
        suzeDvostranicneData.find((el) => el.title === inj.similarTo[2])
          .imageMini ?? "",
      miniImageWebPSimilar:
        suzeDvostranicneData.find((el) => el.title === inj.similarTo[2])
          .imageMiniWebP ?? "",
    },
  ],
}));

export const simSuzeDataFind = suzeItemData.map((inj) => ({
  sluglink: inj.sluglink,
  similar: [
    {
      miniSimilarLink: suzeItemData.find((el) => el.title === inj.similarTo[0])
        .link,
      miniSimilarTitle: suzeItemData.find((el) => el.title === inj.similarTo[0])
        .title,
      miniSimilarAlt: suzeItemData.find((el) => el.title === inj.similarTo[0])
        .alt,
      miniSimilarPrice: suzeItemData.find((el) => el.title === inj.similarTo[0])
        .price,
      miniImageSimilar:
        suzeItemData.find((el) => el.title === inj.similarTo[0]).imageMini ??
        "",
      miniImageWebPSimilar:
        suzeItemData.find((el) => el.title === inj.similarTo[0])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: suzeItemData.find((el) => el.title === inj.similarTo[1])
        .link,
      miniSimilarTitle: suzeItemData.find((el) => el.title === inj.similarTo[1])
        .title,
      miniSimilarAlt: suzeItemData.find((el) => el.title === inj.similarTo[1])
        .alt,
      miniSimilarPrice: suzeItemData.find((el) => el.title === inj.similarTo[1])
        .price,
      miniImageSimilar:
        suzeItemData.find((el) => el.title === inj.similarTo[1]).imageMini ??
        "",
      miniImageWebPSimilar:
        suzeItemData.find((el) => el.title === inj.similarTo[1])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: suzeItemData.find((el) => el.title === inj.similarTo[2])
        .link,
      miniSimilarTitle: suzeItemData.find((el) => el.title === inj.similarTo[2])
        .title,
      miniSimilarAlt: suzeItemData.find((el) => el.title === inj.similarTo[2])
        .alt,
      miniSimilarPrice: suzeItemData.find((el) => el.title === inj.similarTo[2])
        .price,
      miniImageSimilar:
        suzeItemData.find((el) => el.title === inj.similarTo[2]).imageMini ??
        "",
      miniImageWebPSimilar:
        suzeItemData.find((el) => el.title === inj.similarTo[2])
          .imageMiniWebP ?? "",
    },
  ],
}));

export const simRezanoDataFind = rezanoItemData.map((inj) => ({
  sluglink: inj.sluglink,
  similar: [
    {
      miniSimilarLink: rezanoItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).link,
      miniSimilarTitle: rezanoItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).title,
      miniSimilarAlt: rezanoItemData.find((el) => el.title === inj.similarTo[0])
        .alt,
      miniSimilarPrice: rezanoItemData.find(
        (el) => el.title === inj.similarTo[0]
      ).price,
      miniImageSimilar:
        rezanoItemData.find((el) => el.title === inj.similarTo[0]).imageMini ??
        "",
      miniImageWebPSimilar:
        rezanoItemData.find((el) => el.title === inj.similarTo[0])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: rezanoItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).link,
      miniSimilarTitle: rezanoItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).title,
      miniSimilarAlt: rezanoItemData.find((el) => el.title === inj.similarTo[1])
        .alt,
      miniSimilarPrice: rezanoItemData.find(
        (el) => el.title === inj.similarTo[1]
      ).price,
      miniImageSimilar:
        rezanoItemData.find((el) => el.title === inj.similarTo[1]).imageMini ??
        "",
      miniImageWebPSimilar:
        rezanoItemData.find((el) => el.title === inj.similarTo[1])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: rezanoItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).link,
      miniSimilarTitle: rezanoItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).title,
      miniSimilarAlt: rezanoItemData.find((el) => el.title === inj.similarTo[2])
        .alt,
      miniSimilarPrice: rezanoItemData.find(
        (el) => el.title === inj.similarTo[2]
      ).price,
      miniImageSimilar:
        rezanoItemData.find((el) => el.title === inj.similarTo[2]).imageMini ??
        "",
      miniImageWebPSimilar:
        rezanoItemData.find((el) => el.title === inj.similarTo[2])
          .imageMiniWebP ?? "",
    },
  ],
}));

export const simOstaloUPonudiDataFind = ostaloUPonudiData.map((inj) => ({
  sluglink: inj.sluglink,
  similar: [
    {
      miniSimilarLink: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[0]
      ).link,
      miniSimilarTitle: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[0]
      ).title,
      miniSimilarAlt: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[0]
      ).alt,
      miniSimilarPrice: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[0]
      ).price,
      miniImageSimilar:
        ostaloUPonudiData.find((el) => el.title === inj.similarTo[0])
          .imageMini ?? "",
      miniImageWebPSimilar:
        ostaloUPonudiData.find((el) => el.title === inj.similarTo[0])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[1]
      ).link,
      miniSimilarTitle: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[1]
      ).title,
      miniSimilarAlt: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[1]
      ).alt,
      miniSimilarPrice: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[1]
      ).price,
      miniImageSimilar:
        ostaloUPonudiData.find((el) => el.title === inj.similarTo[1])
          .imageMini ?? "",
      miniImageWebPSimilar:
        ostaloUPonudiData.find((el) => el.title === inj.similarTo[1])
          .imageMiniWebP ?? "",
    },
    {
      miniSimilarLink: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[2]
      ).link,
      miniSimilarTitle: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[2]
      ).title,
      miniSimilarAlt: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[2]
      ).alt,
      miniSimilarPrice: ostaloUPonudiData.find(
        (el) => el.title === inj.similarTo[2]
      ).price,
      miniImageSimilar:
        ostaloUPonudiData.find((el) => el.title === inj.similarTo[2])
          .imageMini ?? "",
      miniImageWebPSimilar:
        ostaloUPonudiData.find((el) => el.title === inj.similarTo[2])
          .imageMiniWebP ?? "",
    },
  ],
}));
