import Link from "next/link";

import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ miniSimilarFinal, small }) {
  // console.log(miniSimilarFinal, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");

  return (
    <div className={small ? classes.cont_horiz : classes.cont}>
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
