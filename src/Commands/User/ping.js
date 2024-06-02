const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    run: async (client, interaction) => {
        await interaction.reply({
            embeds: [new EmbedBuilder().setTitle("Pong!")],
        });
    },
};
