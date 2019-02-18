const utils = require('../utils');
const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("If you can see this the bot is slow or the discord api is slow");
m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

 
};
 


module.exports.help = {
    command: 'ping'
};