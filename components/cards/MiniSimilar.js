import Link from "next/link";

import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({
  miniSimilarFinal,
  small,
  miniSimilarFinal1,
}) {
  // console.log(miniSimilarFinal1, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");

  return (
    <div className={small ? classes.cont_horiz : classes.cont}>
      <Link href={miniSimilarFinal1.miniSimilarLink} passHref>
        <picture>
          <source
            srcSet={miniSimilarFinal1.miniImageWebPSimilar}
            type="image/webp"
          />
          <source
            srcSet={miniSimilarFinal1.miniImminiImageageWebP}
            type="image/jpg"
          />
          <img
            src={miniSimilarFinal1.miniImageSimilar}
            alt={miniSimilarFinal1.miniSimilarAlt}
            loading="lazy"
          />
        </picture>
      </Link>

      {/* <img src={miniSimilarFinal.miniImage} alt="" /> */}
      <p>{miniSimilarFinal1.miniSimilarPrice}</p>
    </div>
  );
}
