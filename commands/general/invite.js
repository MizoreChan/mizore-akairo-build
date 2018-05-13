const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class InviteCommand extends Command {
	constructor() {
		super('invite', {
			aliases: ['invite', 'inv'],
			channelRestriction: 'guild'
		});
	}

    exec(message) {
		let embed = new Discord.RichEmbed()
			.setDescription(`\`📩\` **Once invited, type \`m!help\` to see my commands.**\n[ [**Main Invite**](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=${this.client.user.id}) | [**Discord Bot List**](https://discordbots.org/bot/339112443743698947) | [**bots.discord.pw**](https://bots.discord.pw/bots/339112443743698947) ]`)
			.setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
			.setColor(config.color.main);
		message.author.send ({
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

module.exports = InviteCommand;