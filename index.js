const { Telegraf } = require('telegraf')
const fetch = require('node-fetch')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.launch()

fetch(`https://${process.env.RAILWAY_STATIC_URL}/`).then(console.log).catch(console.error)
