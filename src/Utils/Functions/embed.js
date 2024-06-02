const { EmbedBuilder } = require('discord.js');
const { botCustom } = require('../../config');

function embed(description = null, title) {
    let color = botCustom.color;
    if (title.toLowerCase() === 'standart') {
        title = 'Axium';
        color = botCustom.color;
    } else if (title === 'hatalı') {
        title = 'İşlem Hatalı!';
        color = botCustom.redColor;
    } else if (title === 'başarılı') {
        title = 'İşlem Başarılı!';
        color = botCustom.greenColor;
    } else {
        color = botCustom.color;
    }
    return new EmbedBuilder()
        .setColor(color)
        .setTitle(title)
        .setDescription(description);
};

module.exports = {
    embed
};
