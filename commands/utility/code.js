const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class CodeCommand extends Command {
    constructor() {
        super('code', {
            aliases: ['code'],
            channelRestriction: 'guild',
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
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me anything to display. | \`m!code {type} {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
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