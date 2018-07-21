const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class AvatarCommand extends Command {
    constructor() {
        super('avatar', {
            aliases: ['avatar'],
            channelRestriction: 'guild',
            args: [{
                id: 'member',
                type: 'member',
                match: 'content',
                default: message => message.member
            }]
        });
    }

    exec(message, args) {
        if (!args.member) {
            let embed = new Discord.RichEmbed()
                .setColor(config.color.second)
                .setTitle(message.author.username)
                .setDescription(`ID: ${message.author.avatar}`)
				.setURL(message.author.displayAvatarURL)
				.setImage(message.author.displayAvatarURL)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`);
            message.channel.send({
                embed: embed
            });
        } else {
            let embed = new Discord.RichEmbed()
                .setColor(config.color.second)
                .setTitle(args.member.user.username)
                .setDescription(`ID: ${args.member.user.avatar}`)
                .setURL(args.member.user.displayAvatarURL)
                .setImage(args.member.user.displayAvatarURL)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`);
            message.channel.send({
                embed: embed
            });
        }
    }
}

module.exports = AvatarCommand;