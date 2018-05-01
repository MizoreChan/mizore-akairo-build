const { Command } = require('discord-akairo');

class InviteCommand extends Command {
	constructor() {
		super('invite', {
			aliases: ['invite', 'inv'],
			channelRestriction: 'guild',
			description: 'Gets API Lantancy',
		});
	}

    exec(message) {
			message.channel.send({
				embed: {
                    color: 10181046,
                    title: "Invite links to Mizore-Chan",
					description: `Once invited, type \`m!help\` to see my commands.\n[ [**Main Invite**](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=${this.client.user.id}) | [**Discord Bot List**](https://discordbots.org/bot/339112443743698947) | [**bots.discord.pw**](https://bots.discord.pw/bots/339112443743698947) ]`,
					footer: {
						text: `Requested by ${message.author.username} | ` + 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms'
					}
				}
			});
    }
}

module.exports = InviteCommand;