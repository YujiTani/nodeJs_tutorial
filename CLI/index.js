#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { marked } from "marked";
import { getPackageName } from "./libs/name.js";
import { readMarkdownFileSync, writeHtmlFileSync } from "./libs/file.js";

const { argv } = yargs(hideBin(process.argv))
  .option("name", {
    type: "string",
    describe: "名前を表示します",
  })
  .option("file", {
    type: "string",
    describe: "MarkDownファイルのパス",
  })
  .option("out", {
    describe: "出力するファイルのパス",
    default: "article.html",
  });

if (argv.name) {
  console.log(getPackageName());
  process.exit(0);
}

const markdownStr = readMarkdownFileSync(argv.file);
const html = marked(markdownStr);
writeHtmlFileSync(argv.out, html);
