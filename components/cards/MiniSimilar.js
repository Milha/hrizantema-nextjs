import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ miniSimilarFinal }) {
  console.log(miniSimilarFinal, "From MiniSimilar");
  // console.log(miniSimilarFinal, "From MiniSimilar");
  return (
    <div className={classes.cont}>
      <picture>
        <source srcSet={miniSimilarFinal.imageBig} type="image/webp" />
        <img src={miniSimilarFinal.miniImage} alt={miniSimilarFinal.alt} />
      </picture>
      <p>{miniSimilarFinal.price}</p>
    </div>
  );
}
