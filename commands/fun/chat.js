const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports.run = (client, message, args) => {
  
    if(message.guild === null)return;

    async function work() {

let coolusertext2 = args.join(" ");
  if (!coolusertext2) return message.channel.send('Please at least enter some text to talk to the bot.')
  if (coolusertext2.length > 200) return message.channel.send(`To many characters please keep it 200 and under pls.`)

        let owo = await neko.sfw.chat({text: coolusertext2});
        message.channel.send(owo.response).catch(error => {
            console.error(error);
        });

      }

      work();
      

};

module.exports.help = {
command: 'chat'
};