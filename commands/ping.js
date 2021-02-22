const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	aliases: ['pong'],
	description: 'PING PONG GET ping',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (bot, message, args) => {
    message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\nLatency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("RANDOM")
        
      msg.edit(_);
      msg.edit("\u200B");
    });
  },
};
