const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servericon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("RANDOM")
    .setThumbnail(servericon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}