import classes from "./MoreText.module.scss";

type MoreTextProps = {
  data: string;
};

const MoreText: React.FC<MoreTextProps> = ({ data }) => {
  return <div className={classes.cont}>{data}</div>;
};

export default MoreText;
