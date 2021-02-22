const Discord = require('discord.js');

module.exports = {
	name: 'howsmart',
	aliases: [],
	description: "Get How smart or a person is",
	usage: '',
	ownerOnly: false,
	guildOnly: false,
	cooldown: 3,
	run(client, message, args) {
    let random = (Math.floor(Math.random() * Math.floor(100)));
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])||message.author
        if (!user) return message.channel.send("Mention a user! Dumb Dumb")
        if (user.id === "723805387639488584"){
          let random = ("100");
        }



        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Smart Meter")
            .setDescription(` This guy ${user} is ${random}% Smart!`)
        if (user) return message.channel.send(embed)
     

  }
}