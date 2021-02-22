const db = require ("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'add',
	aliases: [],
	description: 'ADD money in pocket/bank (OWNERONLY)',
	usage: '<bank/pocket><amount>',
	cooldown: 2,
	ownerOnly: true,
	guildOnly: false,
  run: async (client, message, args) => {
    const area = args[1]
    const amount = args[2]
    let user = message.mentions.members.first()
    
    if(!area)return message.reply("You should provide where the money should be added")
    if(area === "bank"){
      db.add(`bank_${user.id}`, amount)
      let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(`**Succesfuuly added ${amount} bucks to ${user}'s bank  **`);
   message.channel.send(moneyEmbed)
      

    }
    if(area === "pocket"){
      db.add(`money_${user.id}`, amount)
      let moneyEmbedd = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(`**Succesfuuly added ${amount} bucks to ${user}'s pocket  **`);
   message.channel.send(moneyEmbedd)

    }


  }
}