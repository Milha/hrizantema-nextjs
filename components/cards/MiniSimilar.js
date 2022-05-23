import classes from "./MiniSimilar.module.scss";

export default function MiniSimilar({ miniSimilarFinal }) {
  console.log(miniSimilarFinal.miniPrice, miniSimilarFinal.miniImage, "From MiniSimilar");
  return (
    <div className={classes.cont}>
      <picture>
        <source srcSet={miniSimilarFinal.miniImage} type="image/webp" />
        <img src={miniSimilarFinal.miniImage} alt={miniSimilarFinal.miniImage} />
      </picture>
      <p>{miniSimilarFinal.miniPrice}</p>
    </div>
  );
}
