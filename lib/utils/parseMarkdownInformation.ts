import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function parseMarkdown(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter,
    content,
  };
}


