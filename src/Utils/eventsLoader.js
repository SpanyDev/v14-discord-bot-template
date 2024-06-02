const fs = require('fs');
const consola = require('consola');

module.exports = (client) => {
    try {
        const categories = fs.readdirSync('./src/Events');

        for (const category of categories) {
            const Events = fs.readdirSync(`./src/Events/${category}`).filter(file => file.endsWith('.js'));

            for (const Event of Events) {
                const EventFile = require(`../Events/${category}/${Event}`);
                client.on(EventFile.name, EventFile.run.bind(null, client))
            }
        }
    } catch (error) {
        consola.error(error)
    }
}