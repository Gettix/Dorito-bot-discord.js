
const Discord = require("discord.js");
const superagent = require("snekfetch");
     
        exports.run = async (client, message, args, level) => {
            if(message.guild === null)return;

            superagent.get('https://nekos.life/api/v2/img/waifu')
                .end((err, response) => {
              const lewdembed = new Discord.RichEmbed()
              .setDescription(message.author.toString() + " This is your waifu!")
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setURL(response.body.url);
          message.channel.send(lewdembed);
            })
          
        }

