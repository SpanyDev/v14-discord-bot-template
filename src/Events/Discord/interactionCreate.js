const { Collection, EmbedBuilder } = require('discord.js');
const config = require('../../config');
const consola = require('consola');

module.exports = {
    name: "interactionCreate",
    run: async (client, interaction) => {

        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        if (interaction.guild == null) return;

        interaction.selectedValue = (interaction.options._hoistedOptions[0]) ? interaction.options._hoistedOptions[0].value : undefined;

        try {
            await command.run(client, interaction);
        } catch (error) {
            consola.error(error);
            await interaction.reply({
                embeds: [new EmbedBuilder().setTitle("An error occurred!").setDescription("An error occurred while executing this command!")],
            });
        }

    }
}
