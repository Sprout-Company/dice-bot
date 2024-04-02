
require("dotenv").config();

// 
if (!process.env.BOT_TOKEN) {
  throw new Error("Expected BOT_TOKEN env variable.");
}

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  DB_FOLDER: __dirname + '/src/db',
}