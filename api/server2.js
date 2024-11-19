// Node.js用のRedisクライアントライブラリ
const Redis = require("ioredis");
// Express フレームワークを使用
const express = require("express");
const app = express();

const redis = new Redis({
  host: "localhost", // デフォルトのホスト
  port: 6379, // デフォルトのポート
  password: process.env.REDIS_PASSWORD, // 一旦実行時に環境変数を設定する
  enableOfflineQueue: false, // デフォルトのオフラインキュー
});

// 初期データをRedisに挿入
const init = async () => {
  await Promise.all([
    redis.set("users:1", JSON.stringify({ id: 1, name: "alpha" })),
    redis.set("users:2", JSON.stringify({ id: 2, name: "bravo" })),
    redis.set("users:3", JSON.stringify({ id: 3, name: "charlie" })),
    redis.set("users:4", JSON.stringify({ id: 4, name: "delta" })),
  ]);
};

app.get("/", (req, res) => {
  res.status(200).send("Hello World\n");
});

app.get("/users/:id", (req, res) => {
  res.status(200).send(`User id: ${req.params.id}`);
});

redis.once("ready", async () => {
  try {
    // 初期データをRedisに挿入してからサーバーを起動
    await init();

    app.listen(3010, () => {
      console.log("Server is running on port 3010");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

redis.on('error', (err) => {
  console.error("err", err);
  process.exit(1);
});

// 接続切断時
redis.on("end", () => {
  console.log("Redis接続が切断されました");
});