const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const fetch = require ("node-fetch");
module.exports = {
	name: 'joke',
	aliases: ['jk'],
	description:'Get a joke ',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (client, message, args) =>{
    let getjoke = async () => {
      let result = await fetch ("https://official-joke-api.appspot.com/random_joke")
      let json = await result.json()
      return json 
    }
    let joke = await getjoke()
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('JOKE')
	
	.setAuthor(message.author.tag, message.author.displayAvatarURL({size: 1024, dynamic : true }))
	.setDescription('Here is your joke')
	
	.addField(joke.setup,joke.punchline,  false)
	
	.setTimestamp()
  
	

message.channel.send(exampleEmbed);
message.delete();

  }
}