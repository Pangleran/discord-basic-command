console.clear();

const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');

const client = new Discord.Client({ checkUpdate : false });
const config = require('./config.js');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const allcmds = [];
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    allcmds.push({ name: command.name, description: command.description });
}
console.table(allcmds);

fs.readdirSync('./events/client/').forEach(file => {
    const event = require(`./events/client/${file}`);
    client.on(event.name, (...args) => event.execute(client, ...args));
});

client.login('YOUR_TOKEN').then(() => {
    require('./error/processError.js').loadError(client);
}).catch((error) => {
    console.clear();
    console.error(error);
});