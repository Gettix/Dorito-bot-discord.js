const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {


    await message.channel.send("Rolling the dice...")
        .then(message => message.edit(`The dice rolled ${rand()}`));



}

module.exports.help = {
    name: "dice"
}