const Discord = require('discord.js');
module.exports = {
	name: 'roast',
	aliases: [],
	description: 'Roasts the mentioned user',
	usage: '', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run(client, message, args)  {
    let fortunes = [
      "were you born on the highway? That is where most accidents happen.",
    "i was going to give you a nasty look... but I see you already have one.",
    "remember when I asked for your opinion? Me neither.",
    "everyone's entitled to act stupid once in awhile, but you really abuse the privilege.",
    "i'm trying to see things from your point of view, but I can't get my head that far up my ass.",
    "i haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
    "two wrongs don't make a right, take your parents as an example.",
    "just looking at you, I now understand why some animals eat their young offspring.",
    "does time actually fly when you're having sex, or was it just one minute after all?",
    "you should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
    "this is why you dont have nice things",
    "my teacher told me to erase mistakes, i'm going to need a bigger eraser.",
    "you're IQ's lower than your dick size.",
    "are you always such an idiot, or do you just show off when I'm around?",
    "there are some remarkably dumb people in this world. Thanks for helping me understand that.",
    "i could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
    "you're about as useful as a screen door on a submarine.",
    "you always bring me so much joy'as soon as you leave the room.",
    "stupidity's not a crime, so feel free to go.",
    "if laughter is the best medicine, your face must be curing the world.",
    "the only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
    "it looks like your face caught fire and someone tried to put it out with a hammer.",
    "scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
    "why is it acceptable for you to be an idiot but not for me to point it out?",
    "you're so fat you could sell shade.",
    "your family tree must be a cactus because everyone on it is a prick.",
    "you'll never be the man your mother is.",
    "just because you have an ass doesn't mean you need to act like one.",
    "which sexual position produces the ugliest children? Ask your mother she knows.",
    "if I had a face like yours I'd sue my parents.",
    "the zoo called. They're wondering how you got out of your cage?",
    "hey, you have something on your chin... no, the 3rd one down.",
    "aww, it's so cute when you try to talk about things you don't understand.",
    "you are proof that evolution can go in reverse.",
    "brains aren't everything. In your case they're nothing.",
    "you're so ugly when you look in the mirror, your reflection looks away.",
    "i'm sorry I didn't get that - I don't speak idiot.",
    "it's better to let someone think you're stupid than opening your mouth and prove it.",
    "were you born this stupid or did you take lessons?",
    "you're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
    "don't you get tired of putting make up on two faces every morning?",
    "hey, I'm straighter than the pole your mom dances on.",
    "if ugliness were measured in bricks, you would be the Great Wall of China.",
    "i thought I said goodbye to you this morning when I flushed the toilet",
    "if you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
    "zombies are looking for brains. Don't worry. You're safe.",
    "spreading rumors? At least you found a hobby spreading something other than your legs.",
    "i would tell you to eat trash but that's cannibalism",
    "if you spoke your mind, you would be speechless",
    "i can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
    "acting like a dick won't make yours any bigger",
    "if I wanted to hear from an asshole, I would have farted",
    "roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
    "you remind me of a penny, two faced and worthless!",
    "i've met some pricks in my time but you my friend, are the f*cking cactus",
    "i'd slap you, but that would be animal abuse",
    "if you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
    "i know I�m talking like an idiot. I have to, other wise you wouldn't understand me.",
    "you're so dumb, your brain cell died of loneliness",
    "you shouldn't let your mind wander..its way to small to be out on its own",
    "i don't know what makes you so dumb, but its working",
    "you should put the diaper on your mouth, that's where the craps comin' out.",
    "you would be much more likable if it wasn't for that hole in your mouth that stupid stuff comes out of. ",
    "could you go away please, I'm allergic to douchebags",
    "if you had any intelligence to question I would have questioned it already.",
    "i wish I had a lower I.Q,  maybe then I could enjoy your company.",
    "i would answer you back but life is too short, just like your d*ck",
    "mirrors don't lie. Lucky for you, they can't laugh either.",
    "i was right there are no humans in this channel",
    "you have a face not even a mother could love....",
    "you know what I would find if I looked up idiot in the dictionary a picture of you?",
    "you make the guys on Jackass look like Einstein.....",
    "i would slap you but I don't want to make your face look any better",
    "sorry, I can't put small objects in my mouth or Ill choke",
    "you should wear a condom on your head, if you're going to be a dick you might as well dress like one",
    "have you been shopping lately? They're selling lives at the mall, you should get one",
	"*Puts you in the oven.*",
	"You're so stupid.",
	"Sorry, I can't hear you over how annoying you are.",
	"I've got better things to do.",
	"You're as dumb as Cleverbot.",
	"Your IQ is lower than the Mariana Trench.",
	"You're so annoying even the flies stay away from your stench.",
	"Go away, please.",
	"I'd give you a nasty look but you've already got one.",
	"It looks like your face caught fire and someone tried to put it out with a hammer.",
	"Your family tree must be a cactus because everyone on it is a prick.",
	"Someday you will go far, and I hope you stay there.",
	"The zoo called. They're wondering how you got out of your cage.",
	"I was hoping for a battle of wits, but you appear to be unarmed.",
	"You are proof that evolution can go in reverse.",
	"Brains aren't everything, in your case, they're nothing.",
	"Sorry I didn't get that, I don't speak idiot.",
	"Why is it acceptable for you to be an idiot, but not for me to point it out?",
	"We all sprang from apes, but you did not spring far enough.",
	"Even monkeys can go to space, so clearly you lack some potential.",
	"It's brains over brawn, yet you have neither.",
	"You look like a monkey, and you smell like one too.",
	"Even among idiots you're lacking.",
	"You fail even when you're doing absolutely nothing.",
	"If there was a vote for 'least likely to succeed' you'd win first prize.",
	"I'm surrounded by idiots... Or, wait, that's just you.",
	"I wanna go home. Well, really I just want to get away from the awful aroma you've got going there.",
	"Every time you touch me I have to go home and wash all my clothes nine times just to get a normal smell back.",
	"If I had a dollar for every brain you don't have, I'd have one dollar.",
	"I'd help you succeed but you're incapable.",
	"Your hairline is built like a graph chart, positive and negative forces attract but the clippers and your hair repel.",
	"I know a good joke! You!",
	"You have two parts of your brain, 'left' and 'right'. In the left side, there's nothing right. In the right side, there's nothing left.",
	"Is your ass jealous of the amount of shit that just came out of your mouth?",
	"I don't engage in mental combat with the unarmed.",
	"Two wrongs don't make a right, take your parents as an example.",
	"Your birth certificate is an apology letter from the condom factory.",
	"You sound reasonable. It must be time to up my medication!",
	"You must have been born on a highway because that's where most accidents happen.",
	"You're so ugly, when your mom dropped you off at school she got a fine for littering.",
	"If laughter is the best medicine, your face must be curing the world.",
	"I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
	"The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
	"I'm jealous of all the people that haven't met you!",
	"If I had a face like yours, I'd sue my parents.",
	"There's only one problem with your face. I can see it.",
	"Don't you love nature, despite what it did to you?",
	"What language are you speaking? Cause it sounds like bullshit.",
	"Stupidity is not a crime so you are free to go.",
	"So, a thought crossed your mind? Must have been a long and lonely journey.",
	"You have a room temperature IQ - if the room is in Antarctica.",
	"If you really want to know about mistakes, you should ask your parents.",
	"I would ask you how old you are but I know you can't count that high.",
	"Do you want to know how I get all these insults? I use something called intelligence.",
	"I was going to give you a nasty look, but you already have one.",
	"I don't know what your problem is, but I'll bet it's hard to pronounce.",
	"Brains aren't everything. In your case they're nothing.",
	"As an outsider, what do you think of the human race?",
	"You look like a before picture.",
	"Oh, what? Sorry. I was trying to imagine you with a personality.",
	"You're the reason the gene pool needs a lifeguard.",
	"We can always tell when you are lying. Your lips move.",
	"I may love to shop but I'm not buying your bullshit.",
	"Hell is wallpapered with all your deleted selfies.",
	"You are living proof that manure can sprout legs and walk.",
	"You do realize makeup isn't going to fix your stupidity?",
	"Calling you an idiot would be an insult to all stupid people.",
	"You have the perfect face for radio.",
	"Aww, it's so cute when you try to talk about things you don't understand.",
	"If I wanted to hear from an asshole, I'd fart.",
	"What's the difference between you and an egg? Eggs get laid!",
	"You look like a rock smashed into a pile of sand, rolled into a blunt, and got smoked through an asthma inhaler.",
	"Your advice is about as useful as a paper-mache bomb shelter.",
	"Is it sad that your theme song might as well have a 0/0 signature?",
	"You're so fat, you make the galaxy look like it's on the molecular scale."
]
    let user =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]);
		if (!user)
			return message.channel.send(
				`You did not mention a user, or you gave an invalid id`
			);
      const embed = new Discord.MessageEmbed()
        .setColor("#15f153")
    
        .addField(`${message.author.tag} roasted ${user.user.tag}`,fortunes[Math.floor(Math.random()*fortunes.length)])
        

    return message.channel.send(embed);    


  }
}