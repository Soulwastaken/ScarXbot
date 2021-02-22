const Discord = require('discord.js');

module.exports = {
	name: 'achivement',
	aliases: ["achive"],
	description: ".. get a message like clyde",
	usage: '',
	cooldown: 3,
	guildOnly: true,
	ownerOnly: false,
	async run(client, message, args) {
    content = args[0]
    if(!content) return message.channel.send(`**:x: | No Args**`);
        message.channel.send(`https://api.alexflipnote.dev/achievement?text=${args}`)


  }
}