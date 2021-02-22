const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: ["support"],
	description: "Get the invite of the bot",
	usage: '',
	ownerOnly: false,
	guildOnly: false,
	cooldown: 3,
	run(client, message, args) {
    let embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(`INVITE for BOT`) //Change this to your bots invite and support server link
    embed.addField("Recommended Bot Invite", " [Regular Invite](https://discord.com/api/oauth2/authorize?client_id=746385733891391550&permissions=2147483639&scope=bot)")
		
    embed.addField("Admin Bot Invite"," [ADMIN INVITE](https://discord.com/api/oauth2/authorize?client_id=746385733891391550&permissions=8&scope=bot)")
     .addField("SUPPORT SERVER","[Support Server Link](https://discord.gg/H6yDStu)")
    
   .addField("This bot is an open source bot made by ItzSoul#0001","Source code at [GitHub](https://github.com/Soulwastaken/ScarXbot)") 
//You are not allowed to remove the credit

		message.channel.send({ embed });
	},
};
