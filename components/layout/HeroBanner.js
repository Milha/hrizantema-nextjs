import classes from './HeroBanner.module.scss';

export default function HeroBanner() {
  return (
    <div className={classes.cont}>
      <div className={classes.text_cont}>
        
        <p>
          Verujte nam da ćemo vam pomoći da izrazite saučešće i saosećanje,
          pružajući utehu i podršku.
        </p>
        <p>
          Cvećara Hrizantema Orlovača nudi veliki izbor cveća kojim bi preneli
          vašu ljubav i podršku zbog gubitka voljene osobe
        </p>
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
