import classes from "./BigVerticalCard.module.scss";
export default function BigVerticalCard({ data }) {
  return (
    <div className={classes.cont}>
      <div className={classes.img_cont}>
        <img src={data.imageBig} alt={data.alt} />
      </div>
      <div className={classes.text_cont}>
        <p className={classes.price}>{data.price}</p>
        <h2 className={classes.title}>{data.title}</h2>
        <p className={classes.desc}>{data.text}</p>
      </div>
    </div>
  );
}
