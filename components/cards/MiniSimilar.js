import Link from "next/link";

import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ miniSimilarFinal }) {
  // console.log(miniSimilarFinal, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");

  return (
    <div className={classes.cont}>
      <Link href={miniSimilarFinal.miniLink} passHref>
        <picture>
          <source srcSet={miniSimilarFinal.miniImageWebP} type="image/webp" />
          <source
            srcSet={miniSimilarFinal.miniImminiImageageWebP}
            type="image/jpg"
          />
          <img
            src={miniSimilarFinal.miniImage}
            alt={miniSimilarFinal.minAlt}
            loading="lazy"
          />
        </picture>
      </Link>

      {/* <img src={miniSimilarFinal.miniImage} alt="" /> */}
      <p>{miniSimilarFinal.miniPrice}</p>
    </div>
  );
}
