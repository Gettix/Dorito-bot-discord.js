const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports.run = (client, message, args) => {
  
    if(message.guild === null)return;

    async function work() {

let coolusertext = args.join(" ");
  if (!coolusertext) return message.channel.send('Please type some text to owoify.')
  if (coolusertext.length > 200) return message.channel.send(`I can't owoify your text, it is over 200 characters long!`)

        let owo = await neko.sfw.OwOify({text: coolusertext});
        console.log(owo);
        message.channel.send(owo.owo).catch(error => {
            console.error(error);
        });

      }

      work();
      

};

//Credit to Apacheli#7893 on Discord ily because without you this command would not exsist also ty
//Sharon#0429
//Jesus-S#3534
//Shawn#9145
//WildWolf#0001
//Sinister Rectus#0001
//You are all very cool people and ily <3 
module.exports.help = {
command: 'owoify'
};