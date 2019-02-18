const utils = require('../utils');

module.exports.run = async (client, message, args) => {
  
     if(message.guild === null)return;

  
function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  
// Later in the code:
var msg1 = Array(5); 
		msg1[1] = "Yes";
	    msg1[2] = "No";
		msg1[3] = "Maybe";
		msg1[4] = "Without a doubt.";
		msg1[5] = "I don't care"
		msg1[6] = ":)" 
        var x = getRandomInt(0, 20);
		if (x < 5){ 
         if (x < 3){
			message.channel.sendMessage(msg1[1]);
		}
		else {
               message.channel.sendMessage(msg1[3]);
		}
		}
		else if (x<= 9) {
			if (x >= 7){
			message.channel.sendMessage(msg1[2]); }
				else{
                   message.channel.sendMessage(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			message.channel.sendMessage(msg1[5]);
		}
		else {
			message.channel.sendMessage(msg1[6])
		}
		

  
};

module.exports.help = {
    command: '8ball'
};