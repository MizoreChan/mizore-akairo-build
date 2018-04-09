const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class EmbedCommand extends Command {
    constructor() {
        super('embed', {
            aliases: ['embed'],
            channelRestriction: 'guild',
            args: [{
                id: 'input',
                type: 'string',
                match: 'rest'
            }]
        });
    }

    exec(message, args) {
        if (!args.input) {
            message.channel.send({
                embed: {
                    color: 0xff2727,
                    description: `:warning: **${message.author.username}**, You didn't give me anything to embed. {m!embed \`input\`}`,
                    footer: {
                        text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
                    }
                }
            });
        } else {
            message.delete();
            let color = ((1 << 24) * Math.random() | 0).toString(16);
            let embed = new Discord.RichEmbed()
                .setDescription(args.input)
                .setColor(`#${color}`);
            message.channel.send({
                embed: embed
            });
        }
    }
}

module.exports = EmbedCommand;