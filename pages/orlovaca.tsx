import { marked } from "marked";
import { parseMarkdown } from "../lib/utils/parseMarkdownInformation";
import { NextPage, GetStaticProps } from "next";

import classes from "./orlovaca.module.scss";
import SpecialDistinctiveHeads from "../components/heads/SpecialDistinctiveHeads";

import { orlovachaSchema } from "../utils/schemas/orlovacaSchema";

type Props = {
  frontmatter: Record<string, any>;
  htmlContent: string;
};

const Orlovaca: NextPage<Props> = ({ frontmatter, htmlContent }) => {
  return (
    <>
      <div className={classes.contMain}>
        <SpecialDistinctiveHeads
          specilaJsonLdProps={orlovachaSchema}
          canonicalUrl="https://hrizantema.rs/orlovaca"
        />
        <h2 className={classes.title}>{frontmatter.title}</h2>
        <div
          className={classes.markdown}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <div className={classes.galeryCont}>
          <figure className={classes.figureImageContainer}>
            <picture>
              <source
                srcSet="/images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-mini.webp 240w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-small.webp 480w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-gmb.webp 720w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking.webp 1080w"
                sizes="(max-width: 600px) 100vw,
           (max-width: 1000px) 720px,
           1080px"
                type="image/webp"
              />

              <source
                srcSet="/images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-mini.jpg 240w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-small.jpg 480w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-gmb.jpg 720w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking.jpg 1080w"
                sizes="(max-width: 600px) 100vw,
           (max-width: 1000px) 720px,
           1080px"
                type="image/jpeg"
              />

              <img
                src="/images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking.jpg"
                alt="slika sa groblja orlovaca parking ispred glavne kapije i crkve Svetog Prokopija"
                loading="lazy"
              />
            </picture>
            <figcaption className={classes.figcaptionImage}>
              Parking ispred glavne kapije i crkve Svetog Prokopija
            </figcaption>
          </figure>
          {/* Ceka se .webp format  */}
          <figure className={classes.figureImageContainer}>
            <picture>
              <source
                srcSet="/images/orlovaca-place/slika-parking-kapija-kapela-orlovaca-mini.webp 240w, /images/orlovaca-place/slika-parking-kapija-kapela-orlovaca-small.webp 480w, /images/orlovaca-place/slika-parking-kapija-kapela-orlovaca-gmb.webp 720w, /images/orlovaca-place/slika-parking-kapija-kapela-orlovaca.webp 1080w"
                sizes="(max-width: 600px) 100vw,
           (max-width: 1000px) 720px,
           1080px"
                type="image/webp"
              />

              <source
                srcSet="/images/orlovaca-place/slika-parking-kapija-kapela-orlovaca-mini.jpg 240w, /images/orlovaca-place/slika-parking-kapija-kapela-orlovaca-small.jpg 480w, /images/orlovaca-place/slika-parking-kapija-kapela-orlovaca-gmb.jpg 720w, /images/orlovaca-place/slika-parking-kapija-kapela-orlovaca.jpg 1080w"
                sizes="(max-width: 600px) 100vw,
           (max-width: 1000px) 720px,
           1080px"
                type="image/jpeg"
              />

              <img
                src="/images/orlovaca-place/slika-parking-kapija-kapela-orlovaca.jpg"
                alt="slika sa groblja orlovaca parking ispred glavne kapije ispred ulaza u kapelu i upravnu zgradu"
                loading="lazy"
              />
            </picture>
            <figcaption className={classes.figcaptionImage}>
              Parking ispred glavne kapije ispred ulaza u kapelu na groblju
              Orlovača i upravnu zgradu
            </figcaption>
          </figure>
          {/* <figure className={classes.figureImageContainer}>
            <picture>
              <source
                srcSet="/images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-mini.webp 240w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-small.webp 480w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-gmb.webp 720w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking.webp 1080w"
                sizes="(max-width: 600px) 100vw,
           (max-width: 1000px) 720px,
           1080px"
                type="image/webp"
              />

              <source
                srcSet="/images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-mini.jpg 240w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-small.jpg 480w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking-gmb.jpg 720w, /images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking.jpg 1080w"
                sizes="(max-width: 600px) 100vw,
           (max-width: 1000px) 720px,
           1080px"
                type="image/jpeg"
              />

              <img
                src="/images/orlovaca-place/slika-orlovaca-crkava-svetog-prokopija-parking.jpg"
                alt="slika sa groblja orlovaca parking ispred glavne kapije i crkve Svetog Prokopija"
                loading="lazy"
              />
            </picture>
            <figcaption className={classes.figcaptionImage}>
              Parking ispred glavne kapije i crkve Svetog Prokopija
            </figcaption>
          </figure> */}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { frontmatter, content } = parseMarkdown("./data/informations.md");
  const htmlContent = marked(content);
  return {
    props: { frontmatter, htmlContent },
  };
};

export default Orlovaca;
