require('dotenv').config();

const {
  PORT,
  CLIENT_SECRET,
  CLIENT_ID,
  REDDIT_USERNAME,
  REDDIT_PASSWORD,
} = process.env;

let { MONGODB_URI } = process.env;

if (process.env.NODE_ENV === 'development') {
  MONGODB_URI = process.env.DEV_MONGODB_URI;
}

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  PORT,
  CLIENT_SECRET,
  CLIENT_ID,
  REDDIT_PASSWORD,
  REDDIT_USERNAME,
  MONGODB_URI,
};
