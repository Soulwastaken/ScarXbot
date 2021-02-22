const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases: [],
	description: 'Get your own or someone elses avatar',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
   run: async (bot, message, args) => {
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      
      Embed.setTitle(`Your avatar!`);
      Embed.setImage(message.author.displayAvatarURL({size: 1024, dynamic : true }));
      Embed.setColor(`RANDOM`);
      
      
      
      
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      
      Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s avatar!`);
      Embed.setImage(bot.users.cache.get(User.id).displayAvatarURL({size: 1024 , dynamic : true}) )
   
      }
      Embed.setColor(`RANDOM`)
      
      
      return message.channel.send(Embed);
    }
  };
