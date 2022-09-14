import Link from "next/link";

import HomeHeart from "../../icons/HomeHeart";
import ChevronSingleRight from "../../icons/ChevronSingleRight";

import classes from "./OriginLinksNav.module.scss";

function OriginLinksNav({ list, addHttpaddress }) {
  console.log(list);
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
    </div>
  );
}

export default OriginLinksNav;
