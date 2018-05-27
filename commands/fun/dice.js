const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class DiceCommand extends Command {
	constructor() {
		super('dice', {
			aliases: ['dice'],
			channelRestriction: 'guild'
		});
	}

    exec(message) {
		let roll = Math.floor(Math.random() * 6) + 1;
		let embed = new Discord.RichEmbed()
			.setDescription(`\`🎲\` **${message.author.username}**, you rolled the dice and got a **${roll}**`)
			.setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
			.setColor(config.color.second);
		message.channel.send({
			embed: embed
		});
    }
}

module.exports = DiceCommand;