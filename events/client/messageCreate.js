module.exports = {
    name: 'messageCreate',
    async execute(client, message) {
        if (message.author.bot) return;

        const command = client.commands.get(message.content.toLowerCase()) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(message.content.toLowerCase()));
        
        if (!command) return;
        
        if (command.owner && message.author.id !== client.user.id) {
            return;
        }

        try {
            command.execute(client, message);
        } catch (error) {
            console.clear();
            console.error(error);
        }
    }
}