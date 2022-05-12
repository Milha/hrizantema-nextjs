import classes from "./HeroBanner.module.scss";

export default function HeroBanner() {
  return (
    <div className={classes.cont}>
      <div className={classes.text_cont}>
        <p>PRELEPO CVEĆE ZA SVE VAŠE ARANŽMANE</p>
        <p>
          Prelepi aranžmani, ručno radjeni s ljubavlju. Naše cveće i buketi su
          trenutno dostupni u našoj radnji ili se isporučuju istog ili sledećeg
          dana
        </p>
      </div>
      <div className={classes.image_cont}></div>
    </div>
  );
}
