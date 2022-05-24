import { venciItemData } from "../data/venciItemData";
import { rezanoItemData } from "../data/rezanoItemData";
import { buketiKorpeItemData } from "../data/buketiKorpeItemData";
import { suzeItemData } from "../data/suzeItemData";
import { ostaloUPonudiData } from "../data/ostaloUPonudiData";

export const similarsVenciFinder = venciItemData;
export const similarsRezanoFinder = rezanoItemData;
export const similarsBuketiKorpeFinder = buketiKorpeItemData;
export const similarsSuzeFinder = suzeItemData;
export const similarsOstaloFinder = ostaloUPonudiData;

const indexing = [0, 12, 13];

export const findInUtils = indexing.map((el) => similarsVenciFinder[el]);
// export const findInUtils = indexing.map((el) => similarsVenciFinder[el]);
