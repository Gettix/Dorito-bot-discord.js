const utils = require('../utils');

module.exports.run = async (client, message, args) => {  

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
  

  
      message.reply("Here is the bots invite link " + "https://discordapp.com/oauth2/authorize?client_id=444904032243417091&scope=bot&permissions=2146823422")
      

        
        .catch(console.error);
};
 


module.exports.help = {
    command: 'betaintesting'
};