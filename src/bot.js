'use strict'

// Import Libraries
const DiscordJS = require('discord.js')
const path = require('path')
const fs = require('fs')

// Loading configs
try {
  var config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')))
} catch (err) {
  if (err) throw Error('Please make sure you have set up all the config files properly')
}

// Variable Declarations
let pf = config.prefix

// Creates discordjs object
const bot = new DiscordJS.Client()

// Bot login
bot.login(config.bot_token)

// Event: When bot is ready
bot.on('ready', () => {
  console.log('INFO > Bot started')
})

// Event: When the bot detects a message a channel
bot.on('message', (msg) => {
  // Returns when unnecessary messages are detected
  if (msg.author.bot || !msg.content.startsWith(pf)) return

  // Variable shortcuts
  let msgContent = msg.content
  let msgArray = msgContent.split(' ')
  let msgCommand = msgArray[0].slice(pf.length).toUpperCase()
  let msgArgs = msgArray
  let msgUser = msg.author
  let msgMember = msg.member

  if (msgCommand === 'DEBUG') {
    return
  }
})
