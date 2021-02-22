const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require ("quick.db")
const ms = require("parse-ms");
module.exports = {
	name: 'pay',
	aliases: [],
	description: 'PAY bucks to users',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (bot, message, args) => {
let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setDescription(` You can't pay someone negative bucks`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You don't have that much bucks`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You have payed ${user.user.username} ${args[1]} bucks`);

  message.channel.send(embed5)
  db.add(`money_${user.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])






  }



}