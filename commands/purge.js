const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
	name: 'purge',
	aliases: ['prune'],
	description:'delte messages',
	usage: '<amount of messages>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (client, message, args) =>{
     const deleteCount = parseInt(args[0], 10)+1;

  // get the delete count, as an actual number.
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.send("You don't have the permissions to use this command!");
  }
  
  else{        
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount <= 1 || deleteCount > 100){
      return message.channel.send("Please provide a number between 1 and 100 for the number of messages to delete");
    }
    
    await message.channel.bulkDelete(deleteCount).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }   

  }
}
