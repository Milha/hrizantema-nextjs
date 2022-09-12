import classes from './MoreText.module.scss';

function MoreText({ data }) {
  // console.log(data, 'From more text');
  return <div className={classes.cont}>{data}</div>;
}

export default MoreText;
