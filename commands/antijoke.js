const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
	name: 'antijoke',
	aliases: ['badjoke', 'notajoke'],
	description: 'not even funny',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
  run: async (bot, message, args) => {
const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/AntiJokes/top/.json?sort=top&t=week&limit=100'
 https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                var text = index.selftext
                
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

               
                const imageembed = new Discord.MessageEmbed()
                   
                    
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .addField("Ans:",text,false)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })




  }
}