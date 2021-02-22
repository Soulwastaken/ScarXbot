const Discord = require('discord.js');
module.exports = {
	name: 'say',
	aliases: ['say'],
	description: 'say something using the bot',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
   run: async (client, message,args) => {
    const sayMessage = args.join(" ");
    message.delete();
    message.channel.send(sayMessage + ' - ' + message.author.tag)
  
  },
};