const utils = require('../utils');

module.exports.run = async (client, message, args) => {

       if(message.guild === null)return;
  
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  
var msg1 = Array(3);
		msg1[1] = "Rock :black_circle:";
	    msg1[2] = "Paper :page_facing_up:";
		msg1[3] = "Scissors :scissors:"
        var x = getRandomInt(0, 9);
		if (x < 6){
         if (x < 3){
			message.channel.sendMessage(msg1[1]);
		}
		else{
               message.channel.sendMessage(msg1[3]);
		}
		}
		else{ 
			message.channel.sendMessage(msg1[2]);
}
 
};
 


module.exports.help = {
    command: 'rps'
};