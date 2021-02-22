const db = require ("quick.db")
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const math = require("mathjs")
const ms = require("parse-ms");
module.exports = {
	name: 'beg',
	aliases: [],
	description: 'Beg for 5 coins',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (client, message, args) => {
let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let beg = await db.fetch(`beg_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`  You've begged and received ${amount} bucks`);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`beg_${user.id}`, Date.now())
  }
  }
}