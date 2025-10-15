import Link from "next/link";
import classes from "./GalleryCard.module.scss";

import { GalleryCardProps } from "../../types/product";

const GalleryCard = ({ data }: GalleryCardProps) => {
  const { altText, prodId, cardImage, cardImageWeb, includes, title } = data;
  return (
    <figure className={classes.galleryFrame}>
      <picture>
        <source srcSet={cardImageWeb} type="image/webp" />
        <img
          className={classes.galleryImg}
          src={cardImage}
          alt={altText}
          loading="lazy"
        />
      </picture>
      <figcaption className={classes.figCaption}>{title}</figcaption>
    </figure>
  );
};

export default GalleryCard;
