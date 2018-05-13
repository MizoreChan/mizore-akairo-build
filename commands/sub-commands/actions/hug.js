const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');
const config = require('../../../config.json');

class HugCommand extends Command {
    constructor() {
        super('hug', {
            aliases: ['hug'],
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
            request.get('https://weebs.cf/random/hug').then(body => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`**${this.client.user.username}** hugs **${message.author.username}**`)
                    .setImage(body.text)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(config.color.second);
                message.channel.send({
                    embed: embed
                });
            });
        } else {
            request.get('https://weebs.cf/random/hug').then(body => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`**${message.author.username}** hugs **${args.input}**`)
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

module.exports = HugCommand;