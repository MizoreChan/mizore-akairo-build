const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const request = require("snekfetch");
const moment = require("moment");
require("moment-duration-format");

class CoinFlipCommand extends Command {
    constructor() {
        super("coin", {
            aliases: ["coin", "coinflip", "flip"],
            channelRestriction: "guild"
        });
    }

    exec(message) {
        request.get("https://weebs.cf/random/coin").then(body => {
            let result;
            if (body.text === "https://img.weebs.cf/img/coin/1.png") result = "Heads";
            if (body.text === "https://img.weebs.cf/img/coin/2.png") result = "Tails";
            let embed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** flipped a coin and got **${result}**\nFlipped a coin on\n\`${moment(new Date()).utc().format("dddd MMMM Do YYYY, hh:mm:ss A")}\``)
                .setThumbnail(body.text)
                .setColor(0xffffff);
            message.channel.send({
                embed: embed
            });
        });
    }
}

module.exports = CoinFlipCommand;