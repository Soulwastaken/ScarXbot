const db = require ("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'subtract',
	aliases: ["sub"],
	description: 'SUBTRACT money in pocket/bank (OWNERONLY)',
	usage: '<bank/pocket><amount>',
	cooldown: 2,
	ownerOnly: true,
	guildOnly: false,
  run: async (client, message, args) => {
    const area = args[1]
    const amount = args[2]
    let user = message.mentions.members.first() 
    if(!area)return message.reply("You should provide where the money should be added")
    let bot = new Discord.MessageEmbed()
  
    let bal = db.fetch(`money_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;
    if(area === "bank"){
      let moneyEmbeddd = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(` ${user} has less than ${amount} in their pocket.They has only ${bal} in their pocket`);
      if (amount > bank ) return message.channel.send(moneyEmbeddd);
      db.subtract(`bank_${user.id}`, amount)
      let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(`**Succesfuuly removed ${amount}bucks from ${user}'s bank **`);
   message.channel.send(moneyEmbed)
      

    }
    if(area === "pocket"){
      let moneyEmbedddd = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(` ${user} has less than ${amount} in their pocket.They has only ${bal} bucks in their pocket`);
    if (amount > bal ) return message.channel.send(moneyEmbedddd);
      db.subtract(`money_${user.id}`, amount)
      let moneyEmbedd = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(`**Succesfuuly removed ${amount} from ${user}'s pocket**`);
   message.channel.send(moneyEmbedd)

    }


  }
}