import ShareLinksCont from "../conts/ShareLinksCont";
import SimilarsCont from "../conts/SimilarsCont";
import classes from "./BigHorizontalSingleCard.module.scss";
// import MiniSimilar from "./MiniSimilar";
import Includes from "./card-items/Includes";

import { SlugProps } from "../../types/product";

type Props = Pick<SlugProps, "pageItems" | "smallSimilarItems">;

export default function BigVerticalSingleCard({
  pageItems,
  smallSimilarItems,
}) {
  return (
    <>
      <div className={classes.cont}>
        <div className={classes.img_cont}>
          <picture>
            <source
              srcSet={pageItems.imageSmallWebP}
              media={"(max-width: 1000px)"}
              type="image/webp"
            />
            <source
              srcSet={pageItems.imageSmall}
              media={"(max-width: 1000px)"}
              type="image/jpg"
            />

            <source srcSet={pageItems.imageBigWebP} type="image/webp" />
            <source srcSet={pageItems.imageBig} type="image/jpg" />

            <img src={pageItems.imageBig} alt={pageItems.alt} loading="lazy" />
          </picture>
        </div>
        <div className={classes.text_cont}>
          <p className={classes.price}>
            {pageItems.price === "" ? pageItems.priceRange : pageItems.price}{" "}
            din*
          </p>
          <h2 className={classes.title}>{pageItems.title}</h2>
          <p className={classes.desc}>{pageItems.text}</p>
          {pageItems.includes ? (
            <Includes includes={pageItems.includes} />
          ) : null}
          <p className={classes.code}>
            <span>šifra:</span> {pageItems.prodId}
          </p>
          <p className={classes.similar_text}>Slično:</p>
          <SimilarsCont
            data={pageItems}
            small={true}
            similarPropData={smallSimilarItems}
          />
          <ShareLinksCont data={pageItems} />
        </div>
      </div>
      <div className={classes.additional_cont}>
        <p>
          * prikazane cene su informativnog karaktera i zasnovane na vrednostima
          u trenutku izrade aranžmana. Iste se mogu neznatno razlikovati u
          zavisnosti od veličine ili dostupnosti materijala. Aranžmani mogu biti
          izradjeni u manjem ili većem formatu po želji kupca.
        </p>
      </div>
    </>
  );
}
