
const { BOT_TOKEN } = require('../config');
const { Telegraf } = require('telegraf');
const { log } = require('./utils/console');

// New bot instance
const bot = new Telegraf(BOT_TOKEN);

log('w', 'Create a new bot instance');
log('w', `Using bot token -> ${BOT_TOKEN}`);

module.exports = bot;