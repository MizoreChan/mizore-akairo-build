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
                console.log(message.guild.name + " ~ " + message.author.tag + " : " + message.content);
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