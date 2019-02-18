const Discord = require('discord.js'); // Require the Discord.js library.
const Music = require('discord.js-musicbot-addon');


class Bot extends Discord.Client {
  constructor(options) {
    super(options);
    this.music = require("discord.js-musicbot-addon");
  }
}
const client = new Bot();

var randomhex = '#'+Math.floor(Math.random()*16777215).toString(16);

Music.start(client, {
  youtubeKey: "AIzaSyBzFfJ-Ng1zBs0C4EH4OPkEhxd6TEOIlnw",
  botPrefix: '-', // Prefix for the commands.
  helpCmd: 'mhelp',  
  global: false,            // Non-server-specific queues.
  maxQueueSize: 0,        // Maximum queue size of 25.
  clearInvoker: true, 
  disableLoop: false,
  requesterName: true,
  defVolume: 100,
  bitRate: 16000,
  clearInvoker: true,
  embedColor: '#f700ff',
  thumbnailType: 'high',
  anyoneCanLeave: false,
  anyoneCanLeave: false,
  anyoneCanSkip: false,
  bigPicture: false,
help: {
    alt: ["mhelp"],
    help: "Shows the helpmenu.",
    name: "mhelp"
  },  
});

const config = require("../../config.json");

client.login(config.token); // Connect the bot.