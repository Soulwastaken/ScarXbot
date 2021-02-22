const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'dm',
	aliases: ['dm'],
	description:
		'Dm anyone in the server for admins',
	usage: '<usermention>',
	cooldown: 2,
	ownerOnly: true,
	guildOnly: true,
	run: async (bot, message, args) => {
		if (!message.member.permissions.has('ADMINISTRATOR'))
			return message.channel.send('You do not have enough permissions!');
		let user =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]);
		if (!user)
			return message.channel.send(
				`You did not mention a user, or you gave an invalid id`
			);
		if (!args.slice(1))
			return message.channel.send('You did not specify your message');
		user.user
			.send(args.slice(1).join("  "))
		user.user.send(`-${message.author.tag}`)
			.catch(() => message.channel.send('That user could not be DMed!'))
      .then(message.channel.send(`Sent a message to ${user.user.tag}`));
      message.delete();
    

    }  
	}

