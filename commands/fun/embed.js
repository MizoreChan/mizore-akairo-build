const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const config = require('../../config.json');

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
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me anything to embed. | \`m!embed {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        } else {
            message.delete();
            let color = ((1 << 24) * Math.random() | 0).toString(16);
            let embed = new Discord.RichEmbed()
                .setDescription(args.input)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(`#${color}`);
            message.channel.send({
                embed: embed
            });
        }
    }
}

module.exports = EmbedCommand;