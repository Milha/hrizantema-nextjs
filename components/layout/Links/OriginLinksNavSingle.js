import Link from "next/link";

import HomeHeart from "../../icons/HomeHeart";
import ChevronSingleRight from "../../icons/ChevronSingleRight";

import classes from "./OriginLinksNavSingle.module.scss";

function OriginLinksNavSingle({
  list,
  addHttpaddress,
  linksSingle,
  titleSingle,
}) {
  // console.log(list);
  return (
    <div className={classes.cont}>
      <Link href="/">
        <a>
          <HomeHeart />
        </a>
      </Link>
      <span className={classes.chevron_arrow}>
        <ChevronSingleRight />
      </span>
      <Link href={addHttpaddress}>
        <a>{list}</a>
      </Link>
      <span className={classes.chevron_arrow}>
        <ChevronSingleRight />
      </span>
      <Link href={linksSingle}>
        <a>{titleSingle}</a>
      </Link>
    </div>
  );
}

export default OriginLinksNavSingle;
