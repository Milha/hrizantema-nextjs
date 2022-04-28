import classes from "./SmallCard.module.scss";

export default function SmallCard({ data }) {
  return (
    <div className={classes.cont}>
      <div>
        <img src={data.imageBig} alt="" />
      </div>
      <h3>{data.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto
        fugiat ipsum repellat ab voluptatem vero, rerum quae ea autem?
      </p>
      <p className={classes.price}>{data.price} din</p>
    </div>
  );
}
