import classes from "./HeroBanner.module.scss";

import currentContent from "../../data/helpers/currentBannerContent";

export default function HeroBanner() {
  return (
    <section className={classes.cont}>
      <div className={classes.text_cont}>
        <h3>{currentContent.title}</h3>
        {currentContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={classes.image_cont}></div>
    </section>
  );
}
