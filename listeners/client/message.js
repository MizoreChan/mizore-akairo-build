const { Listener } = require('discord-akairo');

class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            eventName: 'message'
        });
    }

    exec(message) {
        if (message.author.bot) return;
    }
}

module.exports = MessageListener;