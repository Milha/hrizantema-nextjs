import classes from "./IconStyle.module.scss";

export default function ChevronSingleRight() {
  return (
    <div className={classes.cont}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="0.5em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m8 4l8 8l-8 8"
        />
      </svg>
    </div>
  );
}
