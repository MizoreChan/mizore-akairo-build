const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const config = require('../../config.json');

class SayCommand extends Command {
    constructor() {
        super('say', {
            aliases: ['say'],
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
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me anything to say. | \`m!say {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        } else {
            message.delete();
            message.channel.send(args.input);
        }
    }
}

module.exports = SayCommand;