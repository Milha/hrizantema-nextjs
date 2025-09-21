import Link from "next/link";
import classes from "./ButtonWide.module.scss";
import { useRouter } from "next/router";

function ButtonWide() {
  const route = useRouter();

  const path = "/main-pages/contact-forma";
  // console.log(path, "From Route Arrow Top");
  return (
    <div className={classes.cont}>
      <Link href={path} passHref>
        <div className={classes.icon_cont}>
          Postavite pitanje{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1-4.75c0 .41-.34.75-.75.75h-1.5a.75.75 0 0 1-.75-.75c0-1.52 1.23-2.25 2.25-2.75.89-.43 1.5-1.03 1.5-1.75 0-1.1-.9-2-2-2s-2 .9-2 2a.75.75 0 0 1-1.5 0c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.45-1.02 2.47-2.25 3.06-.84.4-1.25.72-1.25 1.24z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ButtonWide;
