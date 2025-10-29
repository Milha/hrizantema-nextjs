export type CardData = {
  cardImage: string;
  cardImageWebP: string;
  altText: string;
  offerLink: string;
  title: string;
  text: string;
};

export type FrontCardProps = {
  data: CardData;
};

export type OfferCardData = {
  title: string;
  cardImage: string;
  cardImageWebP: string;
  text: string;
  altText: string;
  offerLink: string;
};

export type OfferCardDataProps = {
  propsData: OfferCardData[];
};
