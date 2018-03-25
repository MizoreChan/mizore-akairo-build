const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

class InfoCommand extends Command {
    constructor() {
        super('info', {
            aliases: ['info'],
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
                .setColor(10181046)
                .addField(`❯ ${message.author.username} Member Details`, `• **Full Username**: ${message.author.tag}\n• **ID**: ${message.author.id}\n• **Joined At**: ${moment(message.member.joinedAt).utc().format('dddd, MMMM Do YYYY, h:mm:ss a')}`)
                .addField(`❯ ${message.author.username} User Details`, `• **Bot**: ${`${message.author.bot}`[0].toUpperCase() + `${message.author.bot}`.slice(1)}\n• **Status**: ${message.author.presence.status.toUpperCase() + message.author.presence.status.slice(9)}\n• **Game**: ${message.author.presence.game && message.author.presence.game.name || 'Not playing a game.'}\n• **Created At**: ${moment(message.author.createdAt).utc().format('dddd, MMMM Do YYYY, h:mm:ss a')}\n• **Avatar URL**: [${message.author.username} Avatar URL](${message.author.displayAvatarURL})\n• **Default Avatar URL**: [${message.author.username} Default Avatar URL](${message.author.defaultAvatarURL})`)
                .setTimestamp()
                .setFooter('API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms', message.author.displayAvatarURL)
                .setThumbnail(message.author.displayAvatarURL);
            message.channel.send({
                embed: embed
            });
        } else {
            let embed = new Discord.RichEmbed()
                .setColor(10181046)
                .addField(`❯ ${args.member.user.username} Member Details`, `• **Full Username**: ${args.member.user.tag}\n• **ID**: ${args.member.id}\n• **Joined At**: ${moment(args.member.joinedAt).utc().format('dddd, MMMM Do YYYY, h:mm:ss a')}`)
                .addField(`❯ ${args.member.user.username} User Details`, `• **Bot**: ${`${args.member.user.bot}`[0].toUpperCase() + `${args.member.user.bot}`.slice(1)}\n• **Status**: ${args.member.presence.status.toUpperCase() + args.member.presence.status.slice(9)}\n• **Game**: ${args.member.presence.game && args.member.presence.game.name || 'Not playing a game.'}\n• **Created At**: ${moment(args.member.user.createdAt).utc().format('dddd, MMMM Do YYYY, h:mm:ss a')}\n• **Avatar URL**: [${args.member.user.username} Avatar URL](${args.member.user.displayAvatarURL})\n• **Default Avatar URL**: [${args.member.user.username} Default Avatar URL](${args.member.user.defaultAvatarURL})`)
                .setTimestamp()
                .setFooter('API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms', args.member.user.displayAvatarURL)
                .setThumbnail(args.member.displayAvatarURL);
            message.channel.send({
                embed: embed
            });
        }
    }
}

module.exports = InfoCommand;