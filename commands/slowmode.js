module.exports = {
	name: 'slowmode',
	aliases: ['slow'],
	description: 'Set Slowmode for a channel(in secs sorry for that )',
	usage: '<time>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run: async (bot, message, args) => {
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      bot.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "No reason provided!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}** with the reason: **${reason}**`
    );
  },
};