import ShareLinksCont from "../conts/ShareLinksCont";
import SimilarsCont from "../conts/SimilarsCont";
import classes from "./BigVerticalSingleCard.module.scss";
// import MiniSimilar from "./MiniSimilar";
import Includes from "./card-items/Includes";
import MoreText from "./card-items/MoreText";

export default function BigVerticalSingleCard({ data, similarPropData }) {
  return (
    <>
      <div className={classes.cont}>
        <div className={classes.img_cont}>
          <picture>
            <source
              srcSet={data.imageSmallWebP}
              media={"(max-width: 1000px)"}
              type="image/webp"
            />
            <source
              srcSet={data.imageSmall}
              media={"(max-width: 1000px)"}
              type="image/jpg"
            />

            <source srcSet={data.imageBigWebP} type="image/webp" />
            <source srcSet={data.imageBig} type="image/jpg" />

            <img src={data.imageBig} alt={data.alt} loading="lazy" />
          </picture>
        </div>
        <div className={classes.text_cont}>
          <p className={classes.price}>
            {data.price === "" ? data.priceRange : data.price} din*
          </p>
          <h2 className={classes.title}>{data.title}</h2>
          <p className={classes.desc}>{data.text}</p>
          {data.text2 ? <MoreText data={data.text2} /> : null}
          {data.includes ? <Includes includes={data.includes} /> : null}
          <p className={classes.code}>
            <span>šifra:</span> {data.prodId}
          </p>
          <p className={classes.similar_text}>Slično:</p>
          <SimilarsCont data={data} similarPropData={similarPropData} />
          <ShareLinksCont data={data} />
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
