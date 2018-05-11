const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');
const config = require('../../config.json');
const cb = '```';

class WeatherCommand extends Command {
    constructor() {
        super('weather', {
            aliases: ['weather', 'wthr'],
            channelRestriction: 'guild',
            args: [{
                id: 'suffix',
                type: 'string',
                match: 'rest'
            }]
        });
    }

    exec(message, args) {
        if (!args.suffix) {
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me a location. | \`m!weather {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        } else {
            request.get(`http://wttr.in/${args.suffix.replace(' ', '%20')}?T0`).then(data => {
                message.channel.send(`${cb}\n${data.text}\n${cb}`);
            });
        }
    }
}

module.exports = WeatherCommand;