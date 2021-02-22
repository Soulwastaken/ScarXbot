const db = require ("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const math = require("mathjs")
module.exports = {
	name: 'bal',
	aliases: ['balance'],
	description: 'GET THE BALANCE OF SOMEONE',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.author;
   
  let bal = db.fetch(`money_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;
  const net = math.evaluate(bal+bank)
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
   .setDescription(`**${user}'s Balance   **\n\nPocket: ${bal}   bucks   \nBank: ${bank} bucks   \nNetWorth : ${net} bucks  `);
   message.channel.send(moneyEmbed)




  }
}
