const consola = require('consola');
const Chalk = require('chalk');
const { Collection, Colors, PermissionFlagsBits, Role, version } = require('discord.js');
const Moment = require('moment');
Moment.locale('tr');

module.exports = {
    name: "ready",
    run: async (client) => {
        console.log(Chalk.red.bold('——————————[Başlangıç]——————————'))
        console.log(Chalk.white(`Durum:`), Chalk.green.bold('Başarılı,'), Chalk.gray.bold(Moment().format('LLLL')))
        console.log(Chalk.white('Bağlanıldı:'), Chalk.yellow(`${client.user.tag}`))
        console.log(Chalk.white(`Ping: `) + Chalk.red(`${client.ws.ping}ms`))
        console.log(Chalk.red.bold('——————————[Bot Bilgisi]——————————'))
        console.log(Chalk.white(`Toplam Sunucu: `) + Chalk.red(`${client.guilds.cache.size}`))
        console.log(Chalk.white(`Toplam Kullanıcı: `) + Chalk.red(`${client.users.cache.size}`))
        console.log(Chalk.white(`Toplam Komut: `) + Chalk.red(`${client.commands.size}`))
        console.log(Chalk.red.bold('——————————[İstatistik]——————————'))
        console.log(
            Chalk.gray(
                `Discord.js Versiyonu: ${version}\nNode versiyonu: ${process.version}\nPlatform: ${process.platform} ${process.arch}`,
            ),
        )
    }
}
