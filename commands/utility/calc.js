const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const utils = require('../utils');

module.exports.run = (client, message, args) => {

       if(message.guild === null)return;

  
    if(args.length < 1)
        return message.reply(`You must provide a equation to be solved on the calculator`);

    const question = args.join(' ');

    let answer;
    if(question.indexOf('9 + 10') > -1) {
        answer = '21';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
            message.channel.send(`Invalid math equation: ${err}`);
        }
    }

    message.channel.send({
        embed: utils.embed('', stripIndents`
        **Equation:**\n\`\`\`\n${question}\n\`\`\`
        **Answer:**\n\`\`\`\n${answer}\n\`\`\`
        `)
    });
};

module.exports.help = {
    command: 'calc'
};