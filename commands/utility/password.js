const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class PingCommand extends Command {
	constructor() {
		super('password', {
			aliases: ['password'],
			channelRestriction: 'guild',
		});
	}

    exec(message) {
		let embed = new Discord.RichEmbed()
			.setDescription(`\`🔐\` Password Generated : \`${password()}\``)
			.setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
			.setColor(config.color.second);
		message.author.send({
			embed: embed
		}).catch(err => {
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** ${err.message}`)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        });
    }
}

function password() {
	var length = 24,
		charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><,./-=",
		retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}


module.exports = PingCommand;