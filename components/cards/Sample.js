import SmallCard from "../cards/SmallCard";
import classes from "./Sample.module.scss";

export default function Sample(props) {
  const inject = props.data;
  return (
    <div className={classes.sample_cont}>
      <article className={classes.cont}>
        {inject.map((inj) => (
          <section key={inj.prodId}>
            <SmallCard data={inj}></SmallCard>
          </section>
        ))}
      </article>
    </div>
  );
}
