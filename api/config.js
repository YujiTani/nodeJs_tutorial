const redisConfig = {
  port: 6379,
  host: "localhost",
  password: process.env.REDIS_PASSWORD || "", // 一旦実行時に環境変数を設定する
  enableOfflineQueue: false, // デフォルトのオフラインキュー
}

exports.redisConfig = redisConfig;
