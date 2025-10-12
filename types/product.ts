export type Product = {
  sample?: boolean;
  similarTo: string[];
  test: number[];
  id: number;
  title: string;
  price: string;
  priceRange: string;
  includes: string[] | null;
  imageBig: string;
  imageBigWebP: string;
  imageSmall: string;
  imageSmallWebP: string;
  imageGMB: string;
  imageMini: string;
  imageMiniWebP: string;
  alt: string;
  text: string;
  httpaddress: string;
  link: string;
  sluglink: string;
  availability: string;
  prodId: string;
  category: string | string[];
};

export type ProductProps = {
  inject: Product[];
};

export type MiniSimilar = {
  miniSimilarLink: string;
  miniSimilarTitle: string;
  miniSimilarAlt: string;
  miniSimilarPrice: string;
  miniImageSimilar: string;
  miniImageWebPSimilar: string;
};

export type SimProductSimilar = {
  miniLink: string;
  miniImage: string;
  miniImageWebP: string;
  miniPrice: string;
  minAlt: string;
};

export type SimProduct = {
  test: number[];
  id: number;
  title: string;
  price: string;
  priceRange: string;
  imageBig: string;
  imageBigWebP: string;
  imageSmall: string;
  imageSmallWebP: string;
  imageMini: string;
  imageMiniWebP: string;
  imageGMB: string;
  alt: string;
  text: string;
  httpaddress: string;
  link: string;
  sluglink: string;
  prodId: string;
  availability: string;
  category: string | string[];
  includes: string[] | null;
  similar: SimProductSimilar[];
};

export type SmallSimilarGroup = {
  sluglink: string;
  similar: MiniSimilar[];
};

export type SlugProps = {
  pageItems: SimProduct;
  smallSimilarItems: SmallSimilarGroup;
};
