
const bot = require('./bot');
const tf = require('telegraf/filters');
const { log } = require('./utils/console');

// Get bot routers
require('./router/start');

// Start bot
bot.launch();
log('sx', 'Bot is successful launched ! \n\n\n');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))