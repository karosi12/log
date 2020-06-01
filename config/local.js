require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  SPACE_ENDPOINT: process.env.SPACE_ENDPOINT,
  ACCESS_KEYID: process.env.ACCESS_KEYID,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  BUCKET: process.env.BUCKET,
  BUCKET_FILE_PATH: process.env.BUCKET_FILE_PATH,
};
