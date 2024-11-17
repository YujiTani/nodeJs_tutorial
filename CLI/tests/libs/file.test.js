import { readMarkdownFileSync } from "../../libs/file.js";
import path from "path";
import __dirname from "./dirname.cjs";
import { test, expect } from "jest";

test("readMarkdownFileSync はMarkdownファイルを読み込む", () => {
  // ルートディレクトリからのパス
  const markdownStr = readMarkdownFileSync(
    path.resolve(__dirname, "../test.md"),
  );
  expect(markdownStr).toContain("## test.md");
  expect(markdownStr).toContain("- テストファイル");
});