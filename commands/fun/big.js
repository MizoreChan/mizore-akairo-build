const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const config = require('../../config.json');

class BigCommand extends Command {
    constructor() {
        super('big', {
            aliases: ['big'],
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
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me anything to say. | \`m!big {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        } else {
          message.delete();
          let bigText = args.input.replace(/[a-z]/g, ':regional_indicator_$&:').replace(/1/g, ':one:').replace(/2/g, ':two:').replace(/3/g, ':three:').replace(/4/g, ':four:').replace(/5/g, ':five:').replace(/6/g, ':six:').replace(/7/g, ':seven:').replace(/8/g, ':eight:').replace(/9/g, ':nine:').replace(/0/g, ':zero:');
          message.channel.send(bigText);
        }
    }
}

module.exports = BigCommand;