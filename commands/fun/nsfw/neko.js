const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');
const color = require('../../../color.json');

class NekoCommand extends Command {
	constructor() {
		super('neko', {
            aliases: ['neko'],
            channelRestriction: 'guild',
            args: [{
                id: 'options',
                type: ['nsfw']
            }]
		});
	}

    exec(message, args) {
        if (!args.options) {
            request.get('https://nekos.life/api/v2/img/neko').then(body => {
                let embed = new Discord.RichEmbed()
                    .setImage(JSON.parse(body.text).url)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(color.second);
                message.channel.send({
                    embed: embed
                });
            });
        }
        if (args.options === 'nsfw') {
        if (message.channel.nsfw === true) {
            request.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(body => {
                let embed = new Discord.RichEmbed()
                    .setImage(JSON.parse(body.text).url)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(color.second);
                message.channel.send({
                    embed: embed
                });
            });
        } else {
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** \`#${message.channel.name}\` must have \`NSFW\` enabled.`)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(color.err);
            message.channel.send({
                embed: embed
            });
        }
        }
    }
}

module.exports = NekoCommand;