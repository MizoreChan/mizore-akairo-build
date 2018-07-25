const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class HexCommand extends Command {
	constructor() {
		super('hex', {
			aliases: ['hex'],
			channelRestriction: 'guild'
		});
	}

    exec(message) {
		let color = ((1 << 24) * Math.random() | 0).toString(16);
		let embed = new Discord.RichEmbed()
			.setTitle(`#${color}`)
			.setColor(`#${color}`);
		message.channel.send({
			embed: embed
		});
    }
}

module.exports = HexCommand;