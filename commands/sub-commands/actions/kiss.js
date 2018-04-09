const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');

class KissCommand extends Command {
    constructor() {
        super('kiss', {
            aliases: ['kiss'],
            args: [{
                id: 'input',
                type: 'string',
                match: 'rest'
            }]
        });
    }

    exec(message, args) {
        if (!args.input) {
            request.get(`https://weebs.cf/random/kiss`).then(body => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`**${this.client.user.username}** kisses **${message.author.username}**`)
                    .setImage(body.text)
                    .setColor(0xffffff);
                message.channel.send({
                    embed: embed
                });
            });
        } else {
            request.get(`https://weebs.cf/random/kiss`).then(body => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`**${message.author.username}** kisses **${args.input}**`)
                    .setImage(body.text)
                    .setColor(0xffffff);
                message.channel.send({
                    embed: embed
                });
            });
        }
    }
    }

module.exports = KissCommand;