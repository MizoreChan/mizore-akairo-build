const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../config.json');

class IconCommand extends Command {
    constructor() {
        super('icon', {
            aliases: ['icon'],
            channelRestriction: 'guild'
        });
    }

    exec(message) {
        let embed = new Discord.RichEmbed()
            .setTitle(message.guild.name)
            .setURL(message.guild.iconURL)
            .setImage(message.guild.iconURL)
            .setColor(config.color.secondary);
        message.channel.send({
            embed: embed
        });
    }
}

module.exports = IconCommand;