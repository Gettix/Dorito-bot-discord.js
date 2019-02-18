const stripIndents = require('common-tags').stripIndents;
const config = require('../ownerid.json');
const utils = require('../utils');

module.exports.run = async (client, message, args) => {
  
     if(message.guild === null)return;

  
    if(message.author.id !== ownerid.devID) {
        message.channel.send(`You don't have access to this command!`);
    } else {
    let parsed = utils.parseArgs(args, ['l:', 'i', 'q']);
    let lang = parsed.options.l || '';

    let code = parsed.leftover.join(' ');
    let output;

    try {
        output = await eval(code);
    } catch (err) {
        let message = err;
        if(err && err.response && err.response.body && err.response.body.message) {
            message = err.response.body.message;
        }

        return errorHandler(message, client, code, `${message}`);
    }

    if(parsed.options.q) {
        return;
    }

    if(typeof output !== 'string') {
        output = require('util').inspect(output);
    }

    if(!lang) {
        lang = 'javascript';
    }

    output = clean(output).replace(new RegExp(utils.quoteRegex(config.token), 'g'), 'BOT_TOKEN');

    message.channel.send({
        embed: utils.embed('', stripIndents`
        **Input:**\n\`\`\`js\n${code}\n\`\`\`
        **Output:**${output.length < 1500 ? `\n\`\`\`${lang}\n${output}\n\`\`\`` : `\n${url}\n`}
        `)
    });

    if(output.length > 1500)
        return errorHandler(message, client, code, `Output is over 1500 characters`);
    }
};

function errorHandler(message, client, code, err) {
    message.channel.send({
        embed: utils.embed('', `**Input:**\n\`\`\`js\n${code}\n\`\`\`\n:x: **Error!**\n\`\`\`xl\n${clean(err)}\n\`\`\``, [], {
            color: '#ff0000'
        })
    });
}

function clean(text) {
    return text.replace(/([`@#])/g, '$1\u200b');
}

module.exports.help = {
    command: 'eval'
};