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
      <SpecialDistinctiveHeads
        specilaJsonLdProps={orlovachaSchema}
        canonicalUrl="https://hrizantema.rs/orlovaca"
      />
      <h2 className={classes.title}>{frontmatter.title}</h2>
      <div
        className={classes.markdown}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
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
