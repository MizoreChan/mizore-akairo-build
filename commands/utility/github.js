const { Command } = require('discord-akairo');
const request = require('snekfetch');
const Discord = require('discord.js');
const config = require('../../config.json');

class GithubCommand extends Command {
    constructor() {
        super('github', {
            aliases: ['github'],
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
                .setDescription(`\`⛔\` **${message.author.username} :** You didn't give me anything to lookup. | \`m!github {input}\``)
                .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                .setColor(config.color.err);
            message.channel.send({
                embed: embed
            });
        } else {
            request.get(`https://api.github.com/users/${args.input}`).then(body => {
                let user = JSON.parse(body.text);
                let embed = new Discord.RichEmbed()
                    .setTitle(`${user.login} | ${user.name || 'N/A'} | ${user.id} | ${user.type}`)
                    .setDescription(`**Bio:** ${user.bio || 'N/A'}\n**Website:** ${user.blog || 'N/A'}\n**Location:** ${user.location}`)
                    .setURL(user.html_url)
                    .addField('Repositories', user.public_repos, true)
                    .addField('Gists', user.public_gists, true)
                    .addField('Followers', user.followers, true)
                    .addField('Following', user.following, true)
                    .setThumbnail(user.avatar_url)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(config.color.second);
                message.channel.send({
                    embed: embed
                });
            }).catch (err => {
                let embed = new Discord.RichEmbed()
                    .setDescription(`\`⛔\` **${message.author.username} :** ${err.message}`)
                    .setFooter(`Requested by ${message.author.username} | 💛 API : ${Date.now() - message.createdTimestamp} ms`)
                    .setColor(config.color.err);
                message.channel.send({
                    embed: embed
                 });
            });
        }
    }
}

module.exports = GithubCommand;