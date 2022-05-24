import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ data }) {
  // console.log(miniSimilarFinal, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");
  return (
    <div className={classes.cont}>
      <picture>
        <source srcSet={data.similar[0].miniImage} type="image/webp" />
        <img src={data.similar[0].miniImage} alt={data.minAlt} />
      </picture>
      {/* <img src={miniSimilarFinal.miniImage} alt="" /> */}
      <p>{data.similar[0].miniPrice}</p>
    </div>
  );
}
