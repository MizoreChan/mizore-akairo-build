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
            console.log(message.guild.name + " ~ " + message.author.tag + " : " + message.content);
        } else {
            return;
        }

        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    }
}

module.exports = MessageListener;