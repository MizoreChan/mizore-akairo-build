const { Listener } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            eventName: 'ready'
        });
    }

    exec() {
        console.log(`[Bot is online | Node: ${process.version} | Discord.js: ${Discord.version}]\nConnected as: ${this.client.user.username} (ID: ${this.client.user.id})\nGuilds Connected: ${this.client.guilds.size}`);
        this.client.user.setActivity(`${this.client.guilds.size} Servers | ${config.prefix}help`, {
            type: 'WATCHING'
        });
    }
}

module.exports = ReadyListener;