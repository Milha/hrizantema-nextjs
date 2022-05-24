import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ miniSimilarFinal }) {
  // console.log(miniSimilarFinal, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");
  return (
    <div className={classes.cont}>
      <picture>
        <source srcSet={miniSimilarFinal} type="image/webp" />
        <img src={miniSimilarFinal.miniImage} alt={miniSimilarFinal.minAlt} />
      </picture>
      {/* <img src={miniSimilarFinal.miniImage} alt="" /> */}
      <p>{miniSimilarFinal.miniPrice}</p>
    </div>
  );
}
