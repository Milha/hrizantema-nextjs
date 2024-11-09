import QandAs from "../../components/vary-components/QandAs";
import classes from "./contact.module.scss";
import OriginLinksNav from "../../components/layout/Links/OriginLinksNav";

import { qandasData } from "../../data/qandas-data";

import ContactHead from "../../components/heads/ContactHead";

export default function Contact({ qandasData }) {
  return (
    <>
      <ContactHead qandasProps={qandasData} />
      <main>
        <div className={classes.origin_cont}>
          <OriginLinksNav list="Kontak" addHttpaddress="/main-pages/contact" />
        </div>
        <div className={classes.contact_cont}>
          <div className={classes.contact_item}>
            <p>Možete nas kontaktirati:</p>
            <div className={classes.text_span}>
              <span>Telefon:</span>{" "}
              <address>
                <a href="tel:+381692050441">069 20 50 441</a>
              </address>
            </div>

            <div className={classes.text_span}>
              <span>Email: </span>
              <address>
                <a href="mailto:sztrhrizantema@gmail.com">
                  sztrhrizantema@gmail.com
                </a>{" "}
                &nbsp;
              </address>
            </div>
            <div className={classes.text_span}>
              <span>Adresa: </span>
              <address> &nbsp; groblje Orlovača, lokal 30</address>
            </div>
            <p>
              Vršimo dostavu na teritoriji celog Beograda, uz prethodni kontakt
              telefonom.
            </p>
            <p>Radno vreme:</p>
            <p>ponedeljak - nedelja: 06:30 - 16:00</p>
          </div>
          <div className={classes.contact_item}>
            <div className={classes.map_big}>
              <iframe
                title="Putanja do Hrizantema cvecara Orlovaca"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11341.951244482452!2d20.41253785788562!3d44.709654957227194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf13ca7f0a30e621!2sCve%C4%87ara%20Hrizantema%20Orlovaca!5e0!3m2!1ssr!2srs!4v1622286393572!5m2!1ssr!2srs"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className={classes.map_small}>
              <iframe
                title="Putanja i lokacija do Hrizantema cvecara Orlovaca"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11341.977396494049!2d20.4124423!3d44.7095215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf13ca7f0a30e621!2sCve%C4%87ara%20Hrizantema%20Orlovaca!5e0!3m2!1ssr!2srs!4v1622285181475!5m2!1ssr!2srs"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className={classes.contact_item}>
            <p className={classes.contact_about_us}>
              Cvećara otvorena još davne 1994 u tržnom centru pored glavnog
              ulaza i neposrednoj blizini crkve. Bavimo se izradom svih vrsta
              prirodnih i veštačkih cvetnih aranžmana, venaca, suza, ikebana,
              korpi. Svi aranžmani mogu biti izradjeni prema vašoj želji,
              kombinacijom cveća po vašem izboru.
            </p>
          </div>
        </div>
        {qandasData.map((item) => (
          <div key={item.question}>
            <QandAs singleQandA={item} />
          </div>
        ))}
        <div className={classes.pusher}></div>

        {/* <QandAs singleQandA={qandasData[1]} /> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { qandasData },
  };
}
