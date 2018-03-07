const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping'] 
        });
	}

    exec(message) {
			message.channel.send({
				embed: {
					color: 10181046,
					description: `:ping_pong: **PONG!** - API Lantancy is ** ${Date.now() - message.createdTimestamp} ms**`,
					timestamp: new Date(),
					footer: {
						icon_url: this.client.user.avatarURL,
						text: `Heartbeat - ${Math.round(this.client.ping)}ms.`
					}
				}
			});
    }
}

module.exports = PingCommand;