const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const config = require('../../config.json');

class StatsCommand extends Command {
    constructor() {
        super('stats', {
            aliases: ['stats', 'stat'],
            channelRestriction: 'guild'
        });
    }

    exec(message) {
        let dur = moment.duration(this.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let embed = new Discord.RichEmbed()
            .addField("Synopsis", "**Mizore-Chan** is a multipurpose discord bot with *useful* and *fun* commands!\n`m!help` : DMs you a list of **Mizore-Chan's** commands.\nFor more information about **Mizore-Chan** visit [**Mizore.tk**](https://mizore.tk).")
            .addField("Helpful Links", "[**Website**](https://mizore.tk) | [**Invite**](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=339112443743698947) | [**Support Server**](https://discord.oblivionsan.tk)", true)
            .setDescription(`\`\`\`asciidoc\n❯ Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n❯ Uptime     :: ${dur}\n❯ Users      :: ${this.client.users.size.toLocaleString()}\n❯ Servers    :: ${this.client.guilds.size.toLocaleString()}\n❯ Channels   :: ${this.client.channels.size.toLocaleString()}\n❯ Discord.js :: v${Discord.version}\n❯ Node       :: ${process.version}\n❯ Ping       :: ${`${Date.now() - message.createdTimestamp} ms`}\`\`\``)
            .setColor(config.color.second)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
        message.channel.send({
            embed: embed
        });
    }
}

module.exports = StatsCommand;