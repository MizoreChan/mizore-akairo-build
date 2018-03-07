const { AkairoClient } = require('discord-akairo');
const config = require("./config.json");

const client = new AkairoClient({
    ownerID: config.ownerID,
    prefix: config.prefix,
    defaultCooldown: 2500,
    emitters: {
        process
    },
    commandDirectory: './commands/',
    listenerDirectory: './listeners/'
}, {
    disableEveryone: true
});

client.login(config.token);