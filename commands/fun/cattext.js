const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports.run = (client, message, args) => {
  
    if(message.guild === null)return;

    async function work() {

        let owo = (await neko.sfw.catText());
        message.channel.send(owo.cat).catch(error => {
            console.error(error);
        });

      }

      work();
      

};

module.exports.help = {
command: 'fact'
};