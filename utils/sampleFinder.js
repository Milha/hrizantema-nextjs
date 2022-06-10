import { venciItemData } from "../data/venciItemData";
import { buketiKorpeItemData } from "../data/buketiKorpeItemData";
import { ostaloUPonudiData } from "../data/ostaloUPonudiData";
import { rezanoItemData } from "../data/rezanoItemData";
import { suzeItemData } from "../data/suzeItemData";
// import { suzeDvostranicneData } from "./data/suzeDvostranicneData";

const findVenciSample = venciItemData.filter(({ sample }) => sample === true);
const findRezanoSample = rezanoItemData.filter(({ sample }) => sample === true);
const findOstaloSample = ostaloUPonudiData.filter(
  ({ sample }) => sample === true
);
const findBuketiSample = buketiKorpeItemData.filter(
  ({ sample }) => sample === true
);
const findSuzeSample = suzeItemData.filter(({ sample }) => sample === true);

export const sampleItems = findVenciSample
  .concat(findRezanoSample)
  .concat(findOstaloSample)
  .concat(findBuketiSample)
  .concat(findSuzeSample);
