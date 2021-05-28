const Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: ['help', 'commands', 'cmds'],
	description: "Get a list of commands",
	usage: '<commandName>',
	ownerOnly: false,
	guildOnly: false,
	cooldown: 3,
	run(client, message, args) {
		function sendHelp() {
		
			helpEmbed = new Discord.MessageEmbed()
			.setColor('#95E5FF')
			.setAuthor('Command Help', client.user.avatarURL())
			.setDescription('Here is a list of all the commands')
      
      .addField("Moderation","Ban・Kick・Purge・Warn",false )
      .addField("Utility","Avatar・Embed・Emoji・FirstMessage・Say・ServerInfo・Prefix・SlowMode・UserInfo",false )
      .addField("FUN","Achivement・CoinFlip・Fortune・Roast・Roll",false)
      
      
      .addField("MEME","Antijoke・AskTrump・Aww・BlackTwitter・Cats・Comic・DankRate・Dogs・FacePlam・HowSmart・Joke・Meme・Rabbit・RedPandas",false)
      .addField("Economy","Bal・Beg・Daily・Deposit・Pay・Rob・Roullete・WithDraw・Work",false)
      .addField("BotInfo","Invite・Ping・Stats",false)
       //Made the help command better? Open a pull request
      .addField("To know about a command","Use ?help (Commandname)")
      .addField("This bot is an open source bot made by definitelynotsoul#7357","Source code at [GitHub](https://github.com/Soulwastaken/ScarXbot)") 
//You are not allowed to remove the credit
			message.channel.send({ embed: helpEmbed });
     
		}
		if (!args.length) return sendHelp(); 
   

		commandName = args[0].toLowerCase();
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
		let embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(`Command: ${command.name}`)
		.addField('Description', command.description || "None set")
		.addField('Expected Usage', command.usage || "none set", true)
                .addField("This bot is an open source bot made by ItzSoul#0001","Source code at [GitHub](https://github.com/Soulwastaken/ScarXbot)") 
//You are not allowed to remove the credit
		message.channel.send({ embed });
    message.delete();
	},
};
