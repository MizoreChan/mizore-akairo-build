const { Listener } = require('discord-akairo');

class guildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            eventName: 'guildMemberAdd'
        });
    }

    exec(member) {
        let guild = member.guild.channels;
        if (!guild.filter(c => c.name.toLowerCase().includes("log")).first()) return;
        guild.filter(c => c.name.toLowerCase().includes("log")).first().send({
            embed: {
                color: 0x9b3bff,
                description: `:tada: Welcome, **${member.user.username}** has joined **${guild.name}**!`
            }
        });
    }
}

module.exports = guildMemberAddListener;