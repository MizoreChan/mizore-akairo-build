const { Command } = require('discord-akairo');

class CodeCommand extends Command {
    constructor() {
        super('code', {
            aliases: ['code'],
            args: [
            {
                id: 'type',
                type: 'string'
            },
            {
                id: 'input',
                type: 'string',
                match: 'rest'
            }
        ]
        });
    }

    exec(message, args) {
        if (!args.input || !args.type) {
            message.channel.send({
                embed: {
                    color: 0xff2727,
                    description: `:warning: **${message.author.username}**, You didn't give me anything to display. {m!code \`type\` \`input\`}`,
                    footer: {
                        text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
                    }
                }
            });
        } else {
            message.delete();
            message.channel.send(args.input, {
                code: args.type
            });
        }
    }
}

module.exports = CodeCommand;