import classes from "./HeroBanner.module.scss";

export default function HeroBanner() {
  return (
    <div className={classes.cont}>
      <div className={classes.text_cont}>
        <p>LEPO CVEĆE DOVEO DO VAS</p>
        <p>
          Prelepi aranžmani, ručno vezani s ljubavlju. Svo naše cveće i buketi
          su trenutno dostupni u našim prodavnicama ili se isporučuju istog dana
          ili sledećeg dana
        </p>
      </div>
      <div className={classes.image_cont}></div>
    </div>
  );
}
