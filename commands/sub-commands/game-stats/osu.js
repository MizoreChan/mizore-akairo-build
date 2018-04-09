const { Command } = require('discord-akairo');

class OsuCommand extends Command {
    constructor() {
        super('osu', {
            aliases: ['osu'],
            channelRestriction: 'guild',
            args: [{
                id: 'input',
                type: 'string',
                match: 'rest'
            }]
        });
    }

    exec(message, args) {
        if (!args.input) {
            message.channel.send({
                embed: {
                    color: 0xff2727,
                    description: `:warning: **${message.author.username}**, You didn't give me anything to search. {m!osu \`osu-username\`}`,
                    footer: {
                        text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
                    }
                }
            });
        } else {
            message.channel.send({
                files: [{
                    attachment: `https://lemmmy.pw/osusig/sig.php?colour=hex8866ee&uname=${args.input.replace(/ /g, '%20')}&pp=2&countryrank&rankedscore&xpbar&xpbarhex`,
                    name: "osu.png"
                }]
            });
        }
    }
}

module.exports = OsuCommand;