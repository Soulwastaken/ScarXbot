const Discord = require('discord.js');

module.exports = {
	name: 'cats',
	aliases: [],
	description: 'Get some cats imgs',
	usage: '', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  async run(client, message, args) {
     var dogs = ['https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
     'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=620&quality=85&auto=format&fit=max&s=e1f28d0e381223012ef09f3181c06f60',
     'https://ichef.bbci.co.uk/news/660/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
     'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/4/13/ecab8c7af42a439d9043b0ade6e1f05b_18.jpg',
     'https://miro.medium.com/max/700/1*qyAOepULOa_kVehhEIySKA.jpeg',
     'https://cdn.britannica.com/s:800x1000/67/197567-050-DA8E36D5/Scottish-fold-cat-feline.jpg'
     ];
     const embed = new Discord.MessageEmbed()
        .setColor("#15f153")
        .setDescription(`Oh look i found a cute cat ` )
        .setImage(dogs[Math.floor(Math.random()*dogs.length)])
        

    return message.channel.send(embed);    
}
}