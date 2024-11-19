// Express フレームワークを使用
const express = require("express");
// ミドルウェアを使用
const { logTime, logMethodAndUrl } = require("./middleware/Logger");
const app = express();
const router = express.Router()

// エラーハンドリング
const errorMiddleware = (err, req, res, next) => {
  next(new Error("ミドルウェアからのエラー"));
};

app.use(logTime);
app.use(logMethodAndUrl);

// Routerオブジェクトに設定
router.use(logTime);
router.use(logMethodAndUrl);

app.get(
  "/",
  (req, res) => {
    res.status(200).send("Hello World\n");
  }
);

app.get(
  "/users/:id",
  (req, res) => {
    res.status(200).send(`User id: ${req.params.id}`);
  }
);

app.get(
  "/err",
  async (req, res) => {
    throw new Error("同期的なエラー");
    console.log("errorルート");
    res.status(200).send("Errorルート");
  }
);

// 包括的エラーハンドリング
// 4つの引数を持つミドルウェアとして定義する
// app.useの中でも最後に定義する
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
