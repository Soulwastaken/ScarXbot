const Discord = require('discord.js');

module.exports = {
	name: 'stats',
	aliases: [],
	guildOnly: false,
	ownerOnly: false,
	cooldown: 2,
	description: 'Get stats of the bot',
	usage: '',
	async run(client, message, args) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    function stats() {
		
			helpEmbed = new Discord.MessageEmbed()
			.setColor('#95E5FF')
			.setAuthor('BOT Stats', client.user.avatarURL())
			
      .addField("Servers" ,`${client.guilds.cache.size}`)
      .addField("Users",` ${client.users.cache.size}`)
      .addField("Uptime" ,`${uptime}`)
      
      
			message.channel.send({ embed: helpEmbed });
		};

    return stats();
  }
}