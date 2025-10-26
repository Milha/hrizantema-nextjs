import classes from "./ListHeadline.module.scss";

function ListHeadline({ children }) {
  return (
    <>
      <h2 className={classes.headline}>{children}</h2>
      <hr className={classes.borderBottom} />
    </>
  );
}

export default ListHeadline;
