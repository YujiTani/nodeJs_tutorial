import { readMarkdownFileSync } from "../../libs/file.js";

test("readMarkdownFileSync はファイルを読み込む", () => {
  const markdownStr = readMarkdownFileSync("./sample.md");
  expect(markdownStr).toContain("# タイトル");
});