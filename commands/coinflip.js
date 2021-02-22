var flipcoin = ["heads", "tails"];

module.exports = {
	name:'coinflip',
	aliases: [`cointoss`],
	description: 'Flips a coin',
	usage: '', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run(client, message, args)  {
     

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send( flipcoin[randomIndex]);
}
}