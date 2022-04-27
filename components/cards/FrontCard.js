import classes from "./FrontCard.module.scss";

export default function FrontCard({ data }) {
  // console.log(data, "From CARDS");
  return (
    <article className={classes.cont}>
      <div className={classes.image_cont}>
        <img src={data.cardImage} alt="" />
      </div>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </article>
  );
}
