const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
	name: 'meme',
	aliases: [],
	description: 'Get a nice meme',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (bot, message, args) => {
     const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
  }
}