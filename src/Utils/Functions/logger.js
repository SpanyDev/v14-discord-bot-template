const chalk = require('chalk');
const consola = require('consola');

function bilgi(str) {
	consola.info(`${chalk.blue(str)}`)
}
function uyarı(str) {
	consola.warn(`${chalk.yellow(str)}`)
}
function hata(str) {
	consola.error(`${chalk.red(str)}`)
}
function başarılı(str) {
	consola.success(`${chalk.green(str)}`)
}

module.exports = {
	bilgi,
	uyarı,
	hata,
	başarılı
}