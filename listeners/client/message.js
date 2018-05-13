const { Listener } = require('discord-akairo');
const config = require('../../config.json');

class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            eventName: 'message'
        });
    }

    exec(message) {
        if (message.content.includes(config.prefix)) {
            try {
                console.log(`[CH NAME: ${message.guild.name} | USER: ${message.author.username}#${message.author.discriminator} | ID: ${message.author.id}] : ${message.content}`);
            } catch (error) {
                return;
            }
        } else {
            return;
        }

        if (message.author.bot) return;
    }
}

module.exports = MessageListener;