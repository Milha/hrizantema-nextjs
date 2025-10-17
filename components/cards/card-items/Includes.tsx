import classes from "./Includes.module.scss";

type IncludesProps = {
  includes: string[];
};

const Includes: React.FC<IncludesProps> = ({ includes }) => {
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
};

export default Includes;
