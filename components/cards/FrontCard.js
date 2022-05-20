import Link from "next/link";
import classes from "./FrontCard.module.scss";

export default function FrontCard({ data }) {
  // console.log(data, "From CARDS");
  return (
    <article className={classes.cont}>
      <div className={classes.image_cont}>
        <img
          src={data.cardImage}
          width="15rem"
          height="30rem"
          alt="proizvodi u ponudi"
        />
      </div>

      <div className={classes.text_cont}>
        <Link href={data.offerLink}>
          <a>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </a>
        </Link>
      </div>
    </article>
  );
}
