import Link from "next/link";
import classes from "./FrontCard.module.scss";

import { FrontCardProps } from "../../types/component";

export default function FrontCard({ data }: FrontCardProps) {
  return (
    <article className={classes.cont}>
      <div className={classes.image_cont}>
        <picture>
          <source srcSet={data.cardImageWebP} type="image/webp" />
          <img src={data.cardImage} alt={data.altText} loading="lazy" />
        </picture>
      </div>

      <div className={classes.text_cont}>
        <Link href={data.offerLink}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </Link>
      </div>
    </article>
  );
}
