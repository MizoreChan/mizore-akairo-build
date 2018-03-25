const { Command } = require('discord-akairo');
const request = require('snekfetch');
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
            message.channel.send({
                embed: {
                    color: 0xff2727,
                    description: `:warning: **${message.author.username}**, You didn't give me a location. {m!lweather \`location\`}`,
                    footer: {
                        text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
                    }
                }
            });
        } else {
            request.get(`http://wttr.in/${args.suffix.replace(' ', '%20')}?T0`).then(data => {
                message.channel.send(`${cb}\n${data.text}\n${cb}`);
            });
        }
    }
}

module.exports = WeatherCommand;