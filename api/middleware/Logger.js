exports.logTime = (req, res, next) => {
  console.log(`UnixTime: ${Date.now()}`);
  next();
};

exports.logMethodAndUrl = (req, res, next) => {
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next();
};