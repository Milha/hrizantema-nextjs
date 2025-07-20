import Link from "next/link";

import clasees from "../styles/404.module.scss";

export default function PageNotFound() {
  return (
    <div className={clasees.cont}>
      <h2>Nažalost stranica nije pronadjena</h2>
      <div className={clasees.back_link}>
        <Link href="/">Povratak na glavnu stranu!!!</Link>
      </div>
    </div>
  );
}
