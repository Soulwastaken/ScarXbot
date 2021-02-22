const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const db = require ("quick.db")
const ms = require("parse-ms");
module.exports = {
	name: 'rob',
	aliases: [],
	description: 'ROB bucks from users',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (bot, message, args) => {
    let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${user.id}`)
let author = await db.fetch(`rob_${user.id}`)
let author2 = await db.fetch(`money_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You need at least 200 coins in your wallet to rob someone`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` ${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}



let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.RichEmbed()
.setDescription(`You robbed ${user} and got away with ${random} coins`)
.setColor("#FFFFFF")
message.channel.send(embed)

db.subtract(`money_${user.id}`, random)
db.add(`money_${user.id}`, random)
db.set(`rob_${user.id}`, Date.now())
  
};

  }
}