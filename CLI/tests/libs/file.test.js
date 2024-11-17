import { readMarkdownFileSync } from "../../libs/file.js";

test("readMarkdownFileSync はMarkdownファイルを読み込む", () => {
  const markdownStr = readMarkdownFileSync("./test.md");
  expect(markdownStr).toContain("# タイトル");
});