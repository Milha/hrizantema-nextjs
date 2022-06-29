import classes from "./IconStyle.module.scss";

export default function ChevronDoubleUp() {
  return (
    <div className={classes.cont}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="m5 11l7-7l7 7M5 19l7-7l7 7"
        />
      </svg>
    </div>
  );
}
