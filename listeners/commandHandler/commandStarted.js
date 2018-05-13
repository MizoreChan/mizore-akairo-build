const { Listener } = require('discord-akairo');
const chalk = require('chalk');
const config = require('../../config.json');

class CommandStartedListener extends Listener {
	constructor() {
		super('commandStarted', {
			eventName: 'commandStarted',
			emitter: 'commandHandler'
		});
	}

	exec(message, command) {
		console.log(`${chalk.green('[LOGS]')} (CH NAME: ${message.guild.name} | USER: ${message.author.tag} | ID: ${message.author.id}) => ${config.prefix}${command.id}`);
	}
}

module.exports = CommandStartedListener;