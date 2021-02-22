const env = require('dotenv')

const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client({
	disableMentions: 'all',
});
const sqlite = require ("sqlite")
const { VultrexDB } = require("vultrex.db");

const db = require ("quick.db")

 

client.commands = new Discord.Collection();
cooldowns = new Discord.Collection();
client.snipes = new Map();



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);	client.commands.set(command.name, command);
}
// config (DO NOT DELET)

client.owners = ["723805387639488584","721606237988454402","722018027587239947"];
client.premium = ["723805387639488584","721606237988454402"]
 // put your discord user ID in here. can be unlimited
colors = {
	red: '#da0000',
};
client.getUserFromMention = (mention) => {
	if (!mention) return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
			mention = mention.slice(2, -1);
			if (mention.startsWith('!')) {
					mention = mention.slice(1);
			};
			return client.users.cache.get(mention);
	};	
};
guilds = client.guilds.cache.size
// error handling 
process.on('unhandledRejection', err => console.error(err));
client.on('error', err => console.error(err));
client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
	console.log(`Invite Me! ${await client.generateInvite(8)}
  `)
  client.user.setActivity(`?help    `, { type: "WATCHING" }) 
 
  console.log("Servers "+ (client.guilds.cache.size))
  
  
});
client.on('message', async(message) => {
  const default_prefix = ("?")
	 let prefix = db.get(`prefix_${message.guild.id}`)
   if(prefix === null) prefix = default_prefix;
  
  
	if (!message.content.startsWith(prefix)) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	};

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			embed = new Discord.MessageEmbed()
			.setDescription(`You need to wait another **${timeLeft.toFixed(1)}** seconds before using the **${command.name}** command again!`)
			.setColor(colors.red)
			return message.channel.send(embed);
		};		
	}; 

client.noperms = new Discord.MessageEmbed()
  
  .setTitle("You dont have perms to use the command");
  
  client.dmonly = new Discord.MessageEmbed()
  
  .setTitle("You cannot use this command in dms");
	timestamps.set(message.author.id, now);
  const premiumembed = new Discord.MessageEmbed()
  .setDescription(`You have discoverd a premium feature contact us at the support server for knowing more. You can get the link by doing [ ${prefix}invite]`)
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

	if (command.ownerOnly && (!client.owners.includes(message.author.id))) {
		return message.reply(client.noperms);
	};

	if (command.guildOnly && (message.channel.type == 'dm')) {
		return message.channel.send(client.dmonly);
	};
  if (command.premiumOnly && (!client.premium.includes(message.author.id))) {
		return message.reply(premiumembed);
	};

	try {
		command.run(client, message, args);
	} catch (error) {
		message.channel.send(`There was an error whilst executing that command: \`${error}\``)
	}
});

client.login(process.env.token); 
