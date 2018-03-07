const { Listener } = require('discord-akairo');

class guildMemberRemoveListener extends Listener {
    constructor() {
        super('guildMemberRemove', {
            emitter: 'client',
            eventName: 'guildMemberRemove'
        });
    }

    exec(member) {
        let guild = member.guild.channels;
        if (!guild.filter(c => c.name.toLowerCase().includes("log")).first()) return;
        guild.filter(c => c.name.toLowerCase().includes("log")).first().send({
            embed: {
                color: 0x9b3bff,
                description: `:wave: Goodbye, **${member.user.username}** has left **${guild.name}**.`
            }
        });
    }
}

module.exports = guildMemberRemoveListener;