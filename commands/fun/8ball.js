const { Command } = require('discord-akairo');
const request = require('snekfetch');

class eightBallCommand extends Command {
    constructor() {
        super('8ball', {
            aliases: ['8ball'],
            channelRestriction: 'guild',
        });
    }

    exec(message) {
        request.get('https://nekos.life/api/v2/8ball').then(body => {
            message.reply(JSON.parse(body.text).response);
        });
    }
}

module.exports = eightBallCommand;