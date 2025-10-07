export type Product = {
  sample: boolean;
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
