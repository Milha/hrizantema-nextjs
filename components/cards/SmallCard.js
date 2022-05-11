import classes from "./SmallCard.module.scss";

export default function SmallCard({ data }) {
  return (
    <div className={classes.cont}>
      <div className={classes.image_cont}>
        <img src={data.imageBig} alt={data.alt} />
      </div>
      <div className={classes.text_cont}>
        <h3>{data.title}</h3>
        <p className={classes.desc}>{data.text}</p>
        <p className={classes.price}>{data.price} din</p>
      </div>
    </div>
  );
}
