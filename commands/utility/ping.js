const { Command } = require('discord-akairo');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping'],
			channelRestriction: 'guild',
			description: 'Gets API Lantancy',
		});
	}

    exec(message) {
			message.channel.send({
				embed: {
					color: 10181046,
					description: `💛 API : ** ${Date.now() - message.createdTimestamp} ms** | :heart: Client : **${Math.round(this.client.ping)} ms**`,
					footer: {
						text: `Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`
					}
				}
			});
    }
}

module.exports = PingCommand;