import classes from "./FrontCard.module.scss";

export default function FrontCard({ data }) {
  console.log(data, "From CARDS");
  return (
    <article className={classes.cont}>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <img src={data.cardImage} alt="" />
    </article>
  );
}
