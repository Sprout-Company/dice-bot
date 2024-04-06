
const dotenv = require('dotenv');

dotenv.config();

// 
if (!process.env.BOT_TOKEN) {
  throw new Error("Expected BOT_TOKEN env variable.");
}

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_DB: process.env.MONGO_DB,
  
  DB_FOLDER: __dirname + '/src/db',
  ASSETS_FOLDER: __dirname + '/src/assets',
}