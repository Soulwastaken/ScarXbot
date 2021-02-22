const Discord = require('discord.js');
const client = new Discord.Client({
	disableMentions: 'all',
});
const { MessageEmbed } = require('discord.js');

module.exports = {
	name:'userinfo',
	aliases: ['user-info'],
	description: 'Get information about a user',
	usage: '', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (bot, message, args) => {
    const userMention = message.mentions.users.first() || message.author;
    const memberMention = message.mentions.members.first() || message.member;

    let userinfo = {};
    userinfo.bot = userMention.bot;
    userinfo.createdat = userMention.createdAt;
    userinfo.discrim = userMention.discriminator;
    userinfo.id = userMention.id;
    userinfo.mfa = userMention.mfaEnabled;
    userinfo.pre = userMention.premium;
    userinfo.presen = userMention.presence;
    userinfo.tag = userMention.tag;
    userinfo.uname = userMention.username;
    userinfo.verified = userMention.verified;

    userinfo.avatar = userMention.avatarURL;

   
    var myInfo = new Discord.MessageEmbed()
        .setAuthor(userinfo.uname, userinfo.avatar)
        .addField("Bot?",userinfo.bot, true)
        .addField("Created At",userinfo.createdat, true)
        .addField("Discriminator",userinfo.discrim, true)
        .addField("Client ID",userinfo.id, true)
        
        .addField("Client Tag",userinfo.tag, true)
        .addField("Username",userinfo.uname, true)
        
        .setColor(0xf0e5da)
       
        .setThumbnail(userinfo.avatar)


        message.channel.send(myInfo);
  },
};