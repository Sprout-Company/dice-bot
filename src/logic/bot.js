
const { Telegraf } = require('telegraf');
const { BOT_TOKEN } = require('../../config.js');
const { log } = require('../utils/console.js');

// New bot instance
const bot = new Telegraf(BOT_TOKEN);

module.exports = bot;