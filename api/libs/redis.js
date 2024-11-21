// Node.js用のRedisクライアントライブラリ
const Redis = require("ioredis");
const { redisConfig } = require("../config");

let redis = null;

const getClient = () => {
  if(!redis) {
    throw new Error('redis is not connected')
  }
  return redis
}

exports.getClient = getClient;

const connect = () => {
  if (!redis) {
    redis = new Redis(redisConfig);
  }
  return redis;
}

exports.connect = connect;

// 初期データをRedisに挿入
const init = async () => {
  await Promise.all([
    redis.set("users:1", JSON.stringify({ id: 1, name: "alpha" })),
    redis.set("users:2", JSON.stringify({ id: 2, name: "bravo" })),
    redis.set("users:3", JSON.stringify({ id: 3, name: "charlie" })),
    redis.set("users:4", JSON.stringify({ id: 4, name: "delta" })),
  ]);
};

// 初期データをリスト方に変更
// redisを使ったページネーション処理には、lrangeを使ってリスト形式でデータを管理する
// const init = async () => {
//   await redis.lpush("users", JSON.stringify({ id: 1, name: "alpha" }));
//   await redis.lpush("users", JSON.stringify({ id: 2, name: "bravo" }));
//   await redis.lpush("users", JSON.stringify({ id: 3, name: "charlie" }));
//   await redis.lpush("users", JSON.stringify({ id: 4, name: "delta" }));
// };

exports.init = init;