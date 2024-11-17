import fs from "fs";

export const readMarkdownFileSync = (filePath) => {
  const markdownStr = fs.readFileSync(filePath, "utf-8");
  return markdownStr;
};

export const writeHtmlFileSync = (filePath, html) => {
  fs.writeFileSync(filePath, html, "utf-8");
};
