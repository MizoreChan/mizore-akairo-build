const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');
const config = require('../../config.json');

class LookupCommand extends Command {
    constructor() {
        super('lookup', {
            aliases: ['lookup'],
            channelRestriction: 'guild',
            args: [{
                id: 'input',
                type: 'string'
            }]
        });
    }

    exec(message, args) {
        if (!args.input) {
            let embed = new Discord.RichEmbed()
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me anything to lookup. | \`m!lookup {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        } else {
            request.get(`http://json.geoiplookup.io/${args.input}`).then(body => {
                let ip = JSON.parse(body.text);
                let embed = new Discord.RichEmbed()
                    .addField(`🔎 IP Lookup for "${args.input}"`, `• **Continent Code** : ${ip.continent_code}\n• **Country Code** : ${ip.country_code}\n• **Country Name** : ${ip.country_name}\n• **Region** : ${ip.region}\n• **City** : ${ip.city}\n• **Postal Code** : ${ip.postal_code}\n• **Latitude** : ${ip.latitude}\n• **Longitude** : ${ip.longitude}\n• **Area Code** : ${ip.area_code}\n• **ISP** : ${ip.isp}\n• **Organization** : ${ip.org}\n• **Hostname** : ${ip.hostname}\n• **Successful** : ${ip.success}\n`)
                    .setThumbnail(`https://maxcdn.icons8.com/Share/icon/ultraviolet/Network/ip_address1600.png`)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(config.color.second);
                message.channel.send({
                    embed: embed
                });
            });
        }
    }
}

module.exports = LookupCommand;