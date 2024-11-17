import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// `import.meta.url` はURL形式で現在のモジュールの場所を示す
// `fileURLToPath` を使用してファイルパスに変換する
const __filename = fileURLToPath(import.meta.url);
// console.log("__filename", __filename);

// `path.dirname` を使用してディレクトリパスを取得する
const __dirname = path.dirname(__filename);
// console.log("__dirname", __dirname);

const packageStr = fs.readFileSync(
  path.resolve(__dirname, "../package.json"),
  "utf-8",
);
const packageJson = JSON.parse(packageStr);

export const getPackageName = () => packageJson.name;
