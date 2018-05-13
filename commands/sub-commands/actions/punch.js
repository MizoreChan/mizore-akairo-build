const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');
const config = require('../../../config.json');

class PunchCommand extends Command {
    constructor() {
        super('punch', {
            aliases: ['punch'],
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
            request.get('https://weebs.cf/random/punch').then(body => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`**${this.client.user.username}** punches **${message.author.username}**`)
                    .setImage(body.text)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(config.color.second);
                message.channel.send({
                    embed: embed
                });
            });
        } else {
            request.get('https://weebs.cf/random/punch').then(body => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`**${message.author.username}** punches **${args.input}**`)
                    .setImage(body.text)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(config.color.second);
                message.channel.send({
                    embed: embed
                });
            });
        }
    }
}

module.exports = PunchCommand;