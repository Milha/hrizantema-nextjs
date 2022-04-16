import classes from "./SubHero.module.scss";

export default function Hero() {
  return (
    <div className={classes.cont}>
      <div className={classes.itemcont}>
        {/* <img
          src="/images/social-imgs/viber-img-link.webp"
          alt="oglas za nekretnine"
        /> */}
        <h3>Aranžmani od uvek svežeg prirodnog cveća</h3>
        <p>
          Prelepi aranžmani, ručno izradjeni s ljubavlju. Naše cveće i buketi su
          trenutno dostupni u našoj radnjami ili se isporučuju istog ili
          sledećeg dana
        </p>
      </div>
    </div>
  );
}
