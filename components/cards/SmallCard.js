import Link from "next/link";
import classes from "./SmallCard.module.scss";

export default function SmallCard({ data }) {
  return (
    <div className={classes.cont}>
      <div className={classes.image_cont}>
        <img src={data.imageBig} alt={data.alt} />
      </div>
      <div className={classes.text_cont}>
        <Link href={data.link}>
          <a>
            <h3>{data.title}</h3>
          </a>
        </Link>
        <p className={classes.desc}>{data.text}</p>
        <p className={classes.price}>{data.price} din</p>
      </div>
    </div>
  );
}
