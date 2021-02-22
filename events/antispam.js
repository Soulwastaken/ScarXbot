const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
	kickThreshold: 10, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 15, // Amount of messages sent in a row that will cause a ban.
	muteThreshold: 7, // Amount of messages sent in a row that will cause a mute.
	maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
	banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
	muteMessage: '**{user_tag}** has been muted for spamming.', // Message that will be sent in chat upon muting a user.
	maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 12, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 14, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesMute: 9, // Amount of duplicate messages that trigger a warning.
	// Discord permission flags: https://discord.js.org/#/docs/main/master/class/Permissions?scrollTo=s-FLAGS
	exemptPermissions: [ 'ADMINISTRATOR',"KICK_MEMBERS", "BAN_MEMBERS"," MANAGE_CHANNELS"," MANAGE_GUILD", "MANAGE_MESSAGES", "MANAGE_ROLES"," MANAGE_WEBHOOKS ","MANAGE_EMOJIS"], // Bypass users with any of these permissions(These are not roles so use the flags from link above).
	ignoreBots: false, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredUsers: [], // Array of User IDs that get ignored.
	// And many more options... See the documentation.
});
