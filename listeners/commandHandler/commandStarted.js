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
		console.log(`${chalk.green('[LOGS]')} [CH NAME: ${message.guild.name} | USER: ${message.author.tag} | ID: ${message.author.id}] => ${message.content}`);
	}
}

module.exports = CommandStartedListener;