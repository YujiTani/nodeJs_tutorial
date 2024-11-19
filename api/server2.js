// Node.js用のRedisクライアントライブラリ
const Redis = require("ioredis");
// Express フレームワークを使用
const express = require("express");
const app = express();

const redis = new Redis({
  host: "localhost", // デフォルトのホスト
  port: 6379, // デフォルトのポート
  password: process.env.REDIS_PASSWORD,
  enableOfflineQueue: false, // デフォルトのオフラインキュー
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World\n");
});

app.get("/users/:id", (req, res) => {
  res.status(200).send(`User id: ${req.params.id}`);
});

redis.once("ready", () => {
  try {
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