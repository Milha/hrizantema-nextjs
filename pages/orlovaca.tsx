import { marked } from "marked";
import { parseMarkdown } from "../lib/utils/parseMarkdownInformation";
import { NextPage, GetStaticProps } from "next";

import classes from "./orlovaca.module.scss";

type Props = {
  frontmatter: Record<string, any>;
  htmlContent: string;
};

const Orlovaca: NextPage<Props> = ({ frontmatter, htmlContent }) => {
  console.log(frontmatter, htmlContent);
  return (
    <>
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
