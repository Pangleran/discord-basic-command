module.exports = {
    name: 'ping',
    aliases: [''],
    description: 'check latency ping bot',
    owner: true,
    async execute(client, message) {
        await message.channel.send('pong');
    }
}