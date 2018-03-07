const { Listener } = require('discord-akairo');
const chalk = require('chalk');
const err = console.error;

class UnhandledRejectionListener extends Listener {
    constructor() {
        super('unhandledRejection', {
            eventName: 'unhandledRejection',
            emitter: 'process'
        });
    }

    exec(error) {
        if (error.message === 'Missing Permissions') return;
        else {
            err(`${chalk.red('ERROR_NAME')}     : ${error.name}`);
            err(`${chalk.red('ERROR_MESSAGE')}  : ${error.message}`);
            err(`${chalk.red('ERROR_PATH')}     : ${error.path}`);
            err(`${chalk.red('ERROR_CODE')}     : ${error.code}`);
        }
    }
}

module.exports = UnhandledRejectionListener;