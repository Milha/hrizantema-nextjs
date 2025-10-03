import classes from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <div className={classes["footer-content"]}>
        <div className={classes["footer-left"]}>
          <h3>Hrizantema</h3>
          <p>© {new Date().getFullYear()} Sva prava zadržava hrizantema.</p>
        </div>
        <div className={classes["footer-center"]}>
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
          {/* <a href="/about">O nama</a>
          <a href="/contact">Kontakt</a>
          <a href="/privacy">Privatnost</a> */}
        </div>
        <div className={classes["footer-right"]}>
          <h4>O nama</h4>
          <p>
            Cvećara Hrizantema, koja se nalazi na groblju Orlovača, posluje još
            od 1994. godine. Specijalizovani smo za izradu svih vrsta cvetnih
            aranžmana i posvećeni smo pružanju najkvalitetnije usluge.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
