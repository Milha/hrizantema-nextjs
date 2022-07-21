import classes from "./Includes.module.scss";

function Includes({ includes }) {
  //   console.log(includes, "From Includes");
  return (
    <div className={classes.include_cont}>
      <p>Sadrži:</p>
      <div className={classes.include_items}>
        {includes.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Includes;
