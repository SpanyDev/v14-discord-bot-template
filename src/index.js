const {
    ActivityType,
    Client,
    Collection,
    GatewayIntentBits,
    Partials,
    ApplicationCommandType,
    EmbedBuilder,
    Message,
} = require('discord.js');
const fs = require('fs');
const path = require('path');
const configFile = require('./config');
const consola = require('consola');
const AntiCrash = require('./Utils/Functions/AntiCrash.js');
const { embed } = require('./Utils/Functions/embed.js');


const client = new Client({
    intents: Object.values(GatewayIntentBits),
    partials: Object.values(Partials),
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    presence: {
        status: 'dnd',
        activities: [
            {
                name: 'with the APIa',
                type: ActivityType.Playing,
            },
        ],
    },
});

client.commands = new Collection();
client.context = new Collection();
client.config = configFile;
client.embed = embed;

require("./Utils/slashCommandsLoader.js")(client);
require("./Utils/eventsLoader.js")(client);

AntiCrash()
client.login(client.config.token);
