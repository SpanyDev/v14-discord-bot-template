const consola = require('consola');
const Chalk = require('chalk');
const { Collection, Colors, PermissionFlagsBits, Role, discordjsVersion } = require('discord.js');
const Moment = require('moment');
Moment.locale('tr');

module.exports = {
    name: "ready",
    run: async (client) => {
        console.log(Chalk.red.bold('——————————[Başlangıç]——————————'))
        console.log(Chalk.white(`Durum:`), Chalk.green.bold('Başarılı,'), Chalk.gray.bold(Moment().format('LLLL')))
        console.log(Chalk.white('Bağlanıldı:'), Chalk.yellow(`${client.user.tag}`))
        console.log(Chalk.white(`Geliştirici Sunucusu: `) + Chalk.red(`Bulunmuyor`))
        console.log(Chalk.red.bold('——————————[İstatistik]——————————'))
        console.log(
            Chalk.gray(
                `Discord.js Versiyonu: ${discordjsVersion}\nNode versiyonu: ${process.version}\nPlatform: ${process.platform} ${process.arch}`,
            ),
        )
    }
}