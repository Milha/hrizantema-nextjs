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
          Nema sumnje da u Beogradu postoji veliki broj cvećara u koje možete da
          odete kada se ukaže potreba da naručite ili pošaljete buket za bilo
          koju vrstu komemoracije ili cvetnog dizajna, ali u mi u cvećari
          Hrizantema smo mi ti koji poklanjaju najviše pažnje i ljubavi vašim
          aranžmanima!
        </p>
        <p>
          Nadamo se da vam se sviđa naš stil i naš način rada sa buketima,
          crvenim ružama, prelepim ljiljanima orijentalima, raznobojnim
          margaretama i ostalim vrstama rezanog i saksijskog cveća.
        </p>
        <p>
          Stavljamo Vam na raspolaganje široku i raznovrsnu ponudu cveća kako u
          pogledu vrsta koje se koriste, tako i posvećenosti, brige i puno
          ljubavi da pripremite cvetne kompozicije pogodne za svaku od Vaših
          prilika.
        </p>
        {/* <p>
          Cvećara Hrizantema Orlovača nudi veliki izbor cveća kojim bi preneli
          vašu ljubav i podršku zbog gubitka voljene osobe
        </p> */}
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
