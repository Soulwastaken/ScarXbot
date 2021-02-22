const db = require ("quick.db")
const default_prefix = ("?")
module.exports = {
	name: 'prefix',
	aliases: [],
	description: 'set custom prefix of the bot',
	usage: '<new prefix>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (client, message, args) => {
    if(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermmission('MANAGE_GUILD'))
    {
      if (!args[0]) return message.reply("You must specify a new prefix");
      if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
     if(args[0].length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }
     if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
      db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)
    }


  }
}