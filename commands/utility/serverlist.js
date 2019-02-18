const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("The bot is currently in these servers", string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servers"
}