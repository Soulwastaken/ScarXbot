const rollDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
	name: 'roll',
	aliases: [],
	description: 'Roll a dice',
	usage: '',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
run: async(client, message) => {
        message.reply("rolled a " + rollDice());
    }
}