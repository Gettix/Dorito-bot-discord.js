exports.run = function(client, message, args) {
         if(message.guild === null)return;
  
             let role = message.member.hasPermission('MANAGE_MESSAGES')
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("Sorry, you don't have permissions to use this! please have MANAGE_MESSAGES perm");
  
  let messagecount = parseInt(args.join(' '));
  message.channel.send("Deleting " + messagecount + " messages..." + "If you still see this message then the amount was over 100 or the messages are more than 14 days old.")
  
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge <number>'
};