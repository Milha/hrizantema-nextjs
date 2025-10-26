import classes from "./Footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <div className={classes["footer-content"]}>
        <div className={classes["footer-contact"]}>
          <address className={classes["footer-address"]}>
            <strong>Hrizantema</strong>
            <br />
            Groblje Orlovača lok 30
            <br />
            11000 Beograd, Srbija
            <br />
            <a href="tel:+381692050441">+381 69 205 0441</a>
            <br />
            <a href="mailto:kontakt.sztrhrizantema@gmail.com">
              kontakt.sztrhrizantema@gmail.com
            </a>
          </address>
          <p>PIB: 111817197</p>
          <p>Matični broj: 65682478</p>
          <p>Radno vreme: svakog dana od 07:00 do 18:00 časova</p>
          <p></p>
        </div>
        <div className={classes["footer-links"]}>
          <h4>Navigacija</h4>
          <ul>
            <li>
              <Link href="/lists/list-ponuda-venci">Venci</Link>
            </li>
            <li>
              <Link href="/lists/list-ponuda-suze">Klasične suze</Link>
            </li>
            <li>
              <Link href="/lists/list-ponuda-dvostranicne-suze">
                Dvostranične suze
              </Link>
            </li>
            <li>
              <Link href="/lists/list-ponuda-buketi-korpe">Buketi</Link>
            </li>
            <li>
              <Link href="/lists/lista-ponuda-rezano-cvece">Rezano cveće</Link>
            </li>
            <li>
              <Link href="/lists/list-ostalo-u-ponudi">Ostalo u ponudi</Link>
            </li>
          </ul>
        </div>

        <div className={classes["footer-about"]}>
          <h4>O nama</h4>
          <p>
            Cvećara Hrizantema, koja se nalazi na groblju Orlovača, posluje još
            od 1994. godine. Specijalizovani smo za izradu svih vrsta cvetnih
            aranžmana i posvećeni smo pružanju najkvalitetnije usluge. 
          </p>
        </div>
      </div>

      <div className={classes["footer-rights"]}>
        {/* <h3>Hrizantema</h3> */}
        <p>© {new Date().getFullYear()} Sva prava zadržava hrizantema.</p>
      </div>
    </footer>
  );
}

export default Footer;
