const utils = require('../utils');

module.exports.run = async (client, message, args) => {


  
{
    const user = message.mentions.users.first();
    if(!user)
        return message.reply('Please mention the user who you want the avatar from.');

    if(!user.avatarURL)
        return message.channel.send(`That user does not have an avatar`);

    (await message.channel.send({
        embed: utils.embed(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`, [], { image: user.avatarURL })
    }));
    }
};

module.exports.help = {
    command: 'avatar'
};