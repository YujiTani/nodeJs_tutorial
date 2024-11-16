const fs = require("fs");
const path = require("path");

const packageStr = fs.readFileSync(
  path.resolve(__dirname, "../package.json"),
  "utf-8",
);
const packageJson = JSON.parse(packageStr);

exports.getPackageName = () => packageJson.name;
