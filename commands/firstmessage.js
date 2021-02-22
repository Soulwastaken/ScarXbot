const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
	name: 'first-message',
	aliases: ['firstmessage'],
	description: 'Get the first message ever send in the channel',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (client, message, args) => {
    const channel = message.channel

		const messages = await channel.messages.fetch({ after: 1, limit: 1 });
		const messagess = messages.first();
		const format = messagess.author.avatar && messagess.author.avatar.startsWith('a_') ? 'gif' : 'png';
		const embed = new MessageEmbed()
			.setColor(messagess.member ? messagess.member.displayHexColor : 0x00AE86)
			.setThumbnail(messagess.author.displayAvatarURL({ format }))
			.setAuthor(messagess.author.tag, messagess.author.displayAvatarURL({ format }))
			.setDescription(messagess.content)
			.setTimestamp(messagess.createdAt)
			.setFooter(`ID: ${messagess.id}`)
			.addField('❯ Jump', messagess.url)
      
		return message.channel.send(embed);
    message.delete();


  }
}