import classes from "./BigVerticalSingleCard.module.scss";
export default function BigVerticalSingleCard({ data }) {
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
      </div>
    </div>
  );
}
