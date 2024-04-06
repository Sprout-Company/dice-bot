
const { createReadStream } = require('fs');
const { Markup } = require('telegraf');
const tf = require('telegraf/filters');
const { ASSETS_FOLDER } = require('../../config.js');
const bot = require('../logic/bot.js');

bot.start(async (ctx) => { 
  /*
  const buttons = Markup.inlineKeyboard([
    [Markup.button.callback('👾 Echar un vistazo', 'create_profile')],
  ])
  */
  
  await ctx.replyWithPhoto(
    { source: createReadStream( ASSETS_FOLDER + '/welcome.jpg') }, 
    { caption: 
        '🏆 Bienvenido al lugar donde los dados son protagonistas.'
      + '\n\n 👀🕹️ Gana recompensas JUGANDO aquí mismo o apostando a participantes reales !'
    }
  );
  await ctx.reply(
    'Para comenzar, envía un emoji que te represente (otros jugadores lo verán y te identificará)'
  );
});

bot.command('/me', async (ctx) => {
  
})

bot.action('option1', (ctx) => {
  ctx.answerCbQuery('You selected Option 1!')
})

bot.action('option2', (ctx) => {
  ctx.answerCbQuery('You selected Option 2!')
})

bot.action('option3', (ctx) => {
  ctx.answerCbQuery('You selected Option 3!')
})