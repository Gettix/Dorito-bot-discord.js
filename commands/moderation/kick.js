
module.exports.run = (client, message, args) => {

     if(message.guild === null)return;

      
  
   {
          
             let role = message.member.hasPermission('KICK_MEMBERS')
    if(!message.member.hasPermission('KICK_MEMBERS'))
      return message.reply("Sorry, you don't have permissions to use this... You seem to not have kick perms");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    
    // Now, time for a swift kick in the nuts!
     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} `);

      
    }
};

module.exports.help = {
    command: 'kick'
};