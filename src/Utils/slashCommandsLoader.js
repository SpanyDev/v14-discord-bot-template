const {
    ApplicationCommandType,
} = require('discord.js');
const fs = require('fs');
const config = require('../config');
const consola = require('consola');
const CommandArray = [];

module.exports = (client) => {
    try {
        const categories = fs.readdirSync('./src/Commands');

        for (const category of categories) {
            const commands = fs.readdirSync(`./src/Commands/${category}`).filter(file => file.endsWith('.js'));

            for (const command of commands) {
                const commandFile = require(`../Commands/${category}/${command}`);

                if ([ApplicationCommandType.Message, ApplicationCommandType.User].includes(commandFile.data?.type)) {
                    client.context.set(commandFile.data.name, commandFile);
                } else {
                    client.commands.set(commandFile.data.name, commandFile);
                    CommandArray.push(commandFile.data.toJSON());
                }
            }
        }

        client.on("ready", () => {
            if (config.bot.komutları_sil === false) {
                if (config.bot.global_komutlar === true) {
                    client.application.commands.set(CommandArray);
                } else if (config.bot.global_komutlar === false) {
                    client.guilds.cache.get(config.developerServer)?.commands.set(CommandArray);
                }
            } else if (config.bot.komutları_sil === true) {
                client.application.commands.set([]);
                client.guilds.cache.get(config.developerServer)?.commands.set([]);
            }
        });


    } catch (error) {
        consola.error(error);
    }
};
