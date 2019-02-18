
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
         if(message.guild === null)return;

  
  
  let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;  
  
      const user = message.mentions.users.first();
    if(!user)
        return message.reply('Mention someone to give an L to.');
  
  const images = [
'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1044x503/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fc2330fc2ad6507f0101a0377a614dcf3%2F200938541%2Fterr.jpg',
'http://www.smechannels.com/wp-content/uploads/2016/12/RAHUL-GOSWAMI-OF-HPE-GIVING-AWAY-SUPER50-AWARD-TO-KAMTRON-SYSTEMS-P.-L.jpg',
'https://media.istockphoto.com/photos/happy-male-holding-a-l-sign-and-giving-thumb-up-picture-id176879437'
]
  
  var random = Math.floor(Math.random() * images.length)
  var randomImage = images[random];
  
  let botembed = new Discord.RichEmbed()
    .setTitle(user.username + " Just got an L")
    .setColor("RANDOM")
    .setImage(randomImage)
    .setDescription((user.toString() + " got an L from " + message.author.toString()))


    message.channel.send(botembed);
   

   
  
}

module.exports.help = {
  name:"botinfo"
}