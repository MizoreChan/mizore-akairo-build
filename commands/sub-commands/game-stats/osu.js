const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../../config.json');

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
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me a user to search. | \`m!osu {username}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
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