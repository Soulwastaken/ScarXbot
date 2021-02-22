const Discord = require('discord.js');
const client = new Discord.Client({
	disableMentions: 'all',
});
const { MessageEmbed } = require('discord.js');

module.exports = {
	name:'warn',
	aliases: [],
	description: 'CAN be used to warn a user',
	usage: '', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (bot, message, args) => {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
        if(!args[0]) return message.channel.send('Please specify a user');
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t Warn yourself!');
        let reason = args.slice(1).join(" ");
        if(!reason) reason = 'Unspecified';
        const warnembed = new Discord.MessageEmbed()
        .setTitle('Member Warn')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Warned', member)
        .addField('Warned by', message.author)
        .addField('Reason:', reason)
        .setFooter('Time Warned', bot.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(warnembed);
  }
}