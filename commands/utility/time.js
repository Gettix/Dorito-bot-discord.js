const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
.addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
message.channel.send({ embed })

}