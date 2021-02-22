const Discord = require('discord.js');
const client = new Discord.Client({
	disableMentions: 'all',
});
module.exports = {
	name:'embed',
	aliases: [],
	description: 'Send an embed using the bot',
	usage: '', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run(client, message, args)  {
  let MSG = (args.slice(0).join("  "))
   
    
    

    const report = new Discord.MessageEmbed()
     .setColor('#ff003c')
     .setAuthor(`${message.author.tag} `, message.author.displayAvatarURL())
      
      
      .setTitle(MSG)

      message.channel.send({ embed: report});
      message.delete();
       
     
    
     

     
     
		
		

  }
}
      
