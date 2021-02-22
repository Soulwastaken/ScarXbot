const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
	name: 'dankrate',
	aliases: [],
	description: 'Find your or your friends dankrate',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (bot, message, args) => {
   let target =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0])||message.author.tag;
   const rating = Math.floor(Math.random() * 100) + 1   
      const embed = new Discord.MessageEmbed()
        .setColor("#15f153")
        .setTitle("dank r8 machine")
    
        .setDescription(`${target} is ${rating}% dank`)
        

    return message.channel.send(embed);    





  }
}