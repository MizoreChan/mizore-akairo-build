const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            channelRestriction: 'guild',
            description: 'Gets API Lantancy',
        });
    }

    exec(message) {
        let embed = new Discord.RichEmbed()
            .setDescription(`💛 API : ** ${Date.now() - message.createdTimestamp} ms** | :heart: Client : **${Math.round(this.client.ping)} ms**`)
            .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
            .setColor(config.color.main);
        message.channel.send({
            embed: embed
        });
    }
}

module.exports = PingCommand;