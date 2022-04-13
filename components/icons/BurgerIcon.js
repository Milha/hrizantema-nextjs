import classes from "./IconStyle.module.scss";

export default function BurgerIcon() {
  return (
    <div className={classes.cont}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M5 8h22M5 16h22M5 24h22"
        />
      </svg>
    </div>
  );
}
