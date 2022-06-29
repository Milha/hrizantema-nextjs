import Link from "next/link";
import classes from "./ArrowToTop.module.scss";
import { useRouter } from "next/router";
import ChevronDoubleUp from "../icons/ChevronDoubleUp";

function ArrowToTop({ top }) {
  const route = useRouter();

  const path = route.route;
  // console.log(path, "From Route Arrow Top");
  return (
    <div className={classes.cont}>
      <Link href={path}>
        <div className={classes.icon_cont}>
          <ChevronDoubleUp />
        </div>
      </Link>
    </div>
  );
}

export default ArrowToTop;
