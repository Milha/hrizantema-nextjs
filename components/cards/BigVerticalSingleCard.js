import classes from "./BigVerticalSingleCard.module.scss";
export default function BigVerticalSingleCard({ data }) {
  return (
    <div className={classes.cont}>
      <div className={classes.img_cont}>
        <img src={data.imageBig} alt={data.alt} />
      </div>
      <div className={classes.text_cont}>
        <p className={classes.price}>{data.price} din</p>
        <h2 className={classes.title}>{data.title}</h2>
        <p className={classes.desc}>{data.text}</p>
      </div>
    </div>
  );
}
