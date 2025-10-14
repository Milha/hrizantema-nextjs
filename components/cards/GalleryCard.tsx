import Link from "next/link";
import classes from "./FrontCard.module.scss";

type GalleryCardProps = {
  data: {
    cardImage: string;
    cardImageWeb: string;
    altText: string;
    prodId: string;
    includes?: string[] | null;
  };
};

const GalleryCard = ({ data }: GalleryCardProps) => {
  const { altText, prodId, cardImage, cardImageWeb, includes } = data;
  return (
    <article className={classes.cont}>
      <div className={classes.image_cont}>
        {/* <img
          src={data.cardImage}
          width="15rem"
          height="30rem"
          alt="proizvodi u ponudi"
          loading="lazy"
        /> */}
        {/* <p>{altText}</p> */}

        {includes && includes.map((item, idx) => <h2 key={item}>1</h2>)}
        <p>{prodId}</p>

        <picture>
          <source srcSet={cardImageWeb} type="image/webp" />
          <img src={cardImage} alt={altText} loading="lazy" />
        </picture>
      </div>
    </article>
  );
};

export default GalleryCard;
