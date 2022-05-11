import SmallCard from "../cards/SmallCard";
import classes from "./Sample.module.scss";

export default function Sample(props) {
  const inject = props.data;
  // console.log(inject, "from sample comp");
  return (
    <div className={classes.sample_cont}>
      <article className={classes.cont}>
        {inject.map((inj) => (
          <section key={inj.item.id}>
            <SmallCard data={inj.item}></SmallCard>
          </section>
        ))}
      </article>
    </div>
  );
}
