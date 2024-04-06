
const { BOT_TOKEN, MONGO_URI } = require('../config.js');
const bot = require('./logic/bot.js');
const mongo = require('./logic/database.js');
const { log } = require('./utils/console.js');

// Get bot routers
require('./router/start.js');
require('./router/menu.js');

// Main function 
const main = async () => {
  
  // Start bot
  log('w', 'Create a new bot instance'); 
  log('w', `Using bot token -> ${BOT_TOKEN}`);
  bot.launch();
  log('sx', 'Bot is successful launched ! \n');
  
  
  // Start db
  log('w', `Connecting to database -> ${MONGO_URI}`)
  await mongo.connectDb();
  log('sx', 'Database connection is successful !');
  
} 

main();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))