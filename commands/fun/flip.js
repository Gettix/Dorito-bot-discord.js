const utils = require('../utils');

module.exports.run = async (client, message, args) => {

     if(message.guild === null)return;

  
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  
{
var msg2 = Array(2);
		msg2[1] = "Heads";
	    msg2[2] = "Tails";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.sendMessage(msg2[1]);
		}
		else{
			message.channel.sendMessage(msg2[2]);
		}
	}
		
    
};

module.exports.help = {
    command: 'flip'
};