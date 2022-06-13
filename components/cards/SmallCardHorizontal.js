import Link from "next/link";
import classes from "./SmallCardHorizontal.module.scss";

export default function SmallCard({ data }) {
  return (
    <div className={classes.cont}>
      <div className={classes.image_cont}>
        <picture>
          <source srcSet={data.imageBigWebP} type="image/webp" />
          <img src={data.imageBig} alt={data.alt} loading="lazy" />
        </picture>
      </div>
      <div className={classes.text_cont}>
        <Link href={data.link}>
          <a>
            <h3>{data.title}</h3>
          </a>
        </Link>
        <p className={classes.desc}>{data.text}</p>
        <div className={classes.price_more_cont}>
          <p className={classes.price}>
            {data.price === "" ? data.priceRange : data.price} din
          </p>
          <p className={classes.more_a}>
            <Link href={data.link}>
              <a>detaljnije...</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
