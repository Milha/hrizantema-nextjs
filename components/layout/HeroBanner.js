import classes from "./HeroBanner.module.scss";

import currentContent from "../../data/helpers/currentBannerContent";

export default function HeroBanner() {
  return (
    <div className={classes.cont}>
      <div className={classes.text_cont}>
        {/* NEW VERSION 01. 2026 */}
        {currentContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={classes.image_cont}></div>
    </div>
  );
}
