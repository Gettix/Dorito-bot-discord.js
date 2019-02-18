const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const request = require('request');
const client = new Discord.Client();
const config = require("./config.json");
const music = require("./commands/music/music.js");


//attaching the config to the CLIENT so it's accessible everywhere.
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
//loading all commands
//loading fun
fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load Fun ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//loading utility
fs.readdir("./commands/utility/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utility/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load Utility ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//loading moderation
fs.readdir("./commands/moderation/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load moderation ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//loading bot owner commands aka eval
fs.readdir("./commands/botowner/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/botowner/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load botowner ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//loading 18+ NSFW commands
fs.readdir("./commands/nsfw/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load nsfw directory ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//loading Music Module
fs.readdir("./commands/music/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/music/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load Music module ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//loading Misc Module
fs.readdir("./commands/misc/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/misc/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load misc module ${commandName}`);
    client.commands.set(commandName, props);
  });
});

//loading Radio Module
fs.readdir("./commands/radio/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/radio/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load radio module ${commandName}`);
    client.commands.set(commandName, props);
  });
});

//Bot Status timer
var timer;
var i = 0;
  timer = client.setInterval(function () {
    var gamePresence = [
      `anime`,
      `sailor moon`,
      `earth`,
      `hentai`,
      `${client.guilds.size} Planets!`,
      `${client.users.size} stars!`
    ];
    client.user.setPresence({ game: { name: gamePresence[i%gamePresence.length], type: 3 } });
    i++;
  },7500);
//End of code

//Log the Bot in.

client.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('name', 'welcome');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("New member joined!") 
    .setDescription("Welcome to the server " + member.user.username.toString())
    .setColor('RANDOM')
    .setFooter("enjoy your stay", member.user.displayAvatarURL)
    .setTimestamp()
    logChannel.send(logEmbed);
  })
  client.on('guildMemberRemove', member => {
  let logChannel = member.guild.channels.find('name', 'welcome');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Member left the server") 
      .setDescription("Goodbye " + member.user.username )
    .setFooter("sorry to see you leave", member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    logChannel.send(logEmbed);
  })
  

client.login(config.token);