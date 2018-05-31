const { Listener } = require('discord-akairo');
const chalk = require('chalk');

class CommandStartedListener extends Listener {
	constructor() {
		super('commandStarted', {
			eventName: 'commandStarted',
			emitter: 'commandHandler'
		});
	}

	exec(message) {
		console.log(`${chalk.green('[LOGS]')} [SERV_NAME: ${message.guild.name} | CHNL_NAME: ${message.channel.name} | CHNL_ID: ${message.channel.id} | USER: ${message.author.tag} | UID: ${message.author.id}] => ${message.content}`);
	}
}

module.exports = CommandStartedListener;