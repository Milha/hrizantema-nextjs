import ShareLinksCont from "../conts/ShareLinksCont";
// import SimilarsCont from "../conts/SimilarsCont";
import classes from "./BigVerticalSingleCard.module.scss";
import MiniSimilar from "./MiniSimilar";

export default function BigVerticalSingleCard({ data }) {
  // console.log(data, "FROM BIG VERTICAl - Data");
  // console.log(miniData, "FROM BIG VERTICAl - Mini data");
  return (
    <div className={classes.cont}>
      <div className={classes.img_cont}>
        <picture>
          <source srcSet={data.imageBigWebP} type="image/webp" />
          <img src={data.imageBig} alt={data.alt} />
        </picture>
      </div>
      <div className={classes.text_cont}>
        <p className={classes.price}>
          {data.price === "" ? data.priceRange : data.price} din
        </p>
        <h2 className={classes.title}>{data.title}</h2>
        <p className={classes.desc}>{data.text}</p>
        <p className={classes.code}>šifra proizvoda: {data.prodId}</p>
        <MiniSimilar data={data}></MiniSimilar>
        <ShareLinksCont data={data} />
      </div>
    </div>
  );
}
