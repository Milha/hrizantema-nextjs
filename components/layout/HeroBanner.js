import classes from "./HeroBanner.module.scss";

export default function HeroBanner() {
  return (
    <div className={classes.cont}>
      <div className={classes.text_cont}>
        {/* <p>
          Verujte nam da ćemo vam pomoći da izrazite saučešće i saosećanje,
          pružajući utehu i podršku.
        </p> */}
        <p>
          Cvećara Hrizantema u Beogradu, na istoj adresi još od 1994. godine,
          stekla je poverenje brojnih kupaca zahvaljujući pažnji i posvećenosti.
          Specijalizovani smo za izradu komemorativnih aranžmana, gde svaka Vaša
          porudžbina dobija našu potpunu pažnju i ljubav.
        </p>
        <p>
          Nadamo se da vam se sviđa naš stil i naš način rada sa buketima,
          crvenim ružama, prelepim ljiljanima orijentalima, raznobojnim
          margaretama i ostalim vrstama rezanog i saksijskog cveća. Svaki
          aranžman može biti prilagođen Vašim željama.
        </p>
        {/* <p>
          Stavljamo Vam na raspolaganje široku i raznovrsnu ponudu cveća kako u
          pogledu vrsta koje se koriste, tako i posvećenosti, brige i puno
          ljubavi da pripremite cvetne kompozicije pogodne za svaku od Vaših
          prilika.
        </p> */}
        {/* <p>
          Cvećara Hrizantema Orlovača nudi veliki izbor cveća kojim bi preneli
          vašu ljubav i podršku zbog gubitka voljene osobe
        </p> */}
        <p>
          Prelepi aranžmani, ručno radjeni s ljubavlju. Naše cveće i buketi su
          trenutno dostupni u našoj radnji ili se isporučuju u vreme koje Vama
          odgovara.
        </p>
      </div>
      <div className={classes.image_cont}></div>
    </div>
  );
}
