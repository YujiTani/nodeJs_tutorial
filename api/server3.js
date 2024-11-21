// requireでインポートしたモジュールは、任意の名前で使用できる
const redisModule = require("./libs/redis");
// Express フレームワークを使用
const express = require("express");
const app = express();

const redis = redisModule.getClient()

redis.connect()
.once('ready', async () => {
  try {
    await redis.init();

    app.listen('3020', () => {
      console.log('start server on port 3020')
    })
  } catch (error) {
    // サーバーが立ち上がらなかった場合ここにはいる
    console.error(error);
    process.exit(1);
  }
})
.on('error', (err) => {
  console.error(err);
  process.exit(1);
})

app.get("/", (req, res) => {
  res.status(200).send("Hello World\n");
});

const getUser = async (req, res) => {
  const key = `users:${req.params.id}`;
  const result = await redis.get(key);
  const user = JSON.parse(result);
  return user;
}

const getUsers = async (req, res) => {
  const stream = redis.scanStream({
    match: "users:*",
    count: 10,
  })

  const users = []
  for await ( const resultKey of stream) {
    for (const key of resultKey) {
      const user = await redis.get(key);
      users.push(JSON.parse(user));
    }
  }
  return { users: users };
}

app.get("/users/:id", async (req, res) => {
  try {
    const user = await getUser(req);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers(req, res);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
