const chalk = require('chalk');
const { hata, başarılı, uyarı, bilgi } = require('./logger');

function AntiCrash() {
    process.on('unhandledRejection', (reason, promise) => {
        uyarı(reason, promise)
    })
    process.on('uncaughtException', (err, promise) => {
        if (
            err === 'DiscordAPIError[10062]: Unknown interaction' ||
            err === 'DiscordAPIError[40060]: Interaction has already been acknowledged.'
        )
            return
        hata(err, promise)
    })
    process.on('uncaughtExceptionMonitor', (err, promise) => {
        if (
            err === 'DiscordAPIError[10062]: Unknown interaction' ||
            err === 'DiscordAPIError[40060]: Interaction has already been acknowledged.'
        )
            return
        hata(err, promise)
    })
}

module.exports = AntiCrash;