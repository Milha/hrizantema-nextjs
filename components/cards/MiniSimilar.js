import Link from "next/link";

import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ miniSimilarFinal }) {
  // console.log(miniSimilarFinal, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");
  return (
    <div className={classes.cont}>
      <Link href={miniSimilarFinal.miniLink} passHref>
        <picture>
          <source srcSet={miniSimilarFinal.miniImage} type="image/webp" />
          <img src={miniSimilarFinal.miniImage} alt={miniSimilarFinal.minAlt} />
        </picture>
      </Link>

      {/* <img src={miniSimilarFinal.miniImage} alt="" /> */}
      <p>{miniSimilarFinal.miniPrice}</p>
    </div>
  );
}
