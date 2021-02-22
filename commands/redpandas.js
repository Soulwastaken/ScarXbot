const { stripIndents } = require('common-tags');

const Discord = require('discord.js');
module.exports = {
	name: 'redpandas',
	aliases: ['redpanda', 'redboi'],
	description: 'See some cute red pandas!.',
	usage: '<>', 
	cooldown: 2,
	ownerOnly: false,
	guildOnly: true,
  run(client, message, args)  {
    let fortunes = ["https://i.imgur.com/VsYsGVU.gif",
        "https://i.redd.it/jk268tqcv3h01.jpg",
        "https://i.redd.it/0vbx9fw2hpd01.jpg",
        "https://i.redd.it/9j4od1qccpg01.png",
        "https://i.redd.it/mjbiop0vv8f01.png",
        "https://i.redd.it/peuu9h1qqud01.jpg",
        "https://thumbs.gfycat.com/ThirdUnfinishedHorsemouse-size_restricted.gif",
        "https://i.redd.it/lz6jgzkt1bh01.jpg",
        "https://thumbs.gfycat.com/SillyCooperativeDunnart-size_restricted.gif",
        "https://i.imgur.com/onx6k9u.gif",
        "https://i.redd.it/02b821sjure01.jpg",
        "https://i.imgur.com/vB49wV0.gif",
        "https://i.redd.it/7eezvv62d8g01.jpg",
        "https://i.redd.it/e89dkz3tc2f01.jpg",
        "https://i.redd.it/116zv532kmf01.jpg",
        "https://i.redd.it/rrob42c1iug01.jpg",
        "https://i.redd.it/06nq0tbkgbg01.png",
        "https://i.imgur.com/Shub2cb.gif",
        "https://i.redd.it/hhl3aswpxvg01.jpg",
        "https://i.redd.it/7pcvt967vrh01.jpg",
        "https://i.redd.it/8i7eytam4we01.jpg",
        "https://thumbs.gfycat.com/ClearcutQueasyCrane-size_restricted.gif",
        "https://i.redd.it/gdbqzv9k69e01.png",
        "https://4.bp.blogspot.com/-0Egoh-25Uis/U8gTuoaXKtI/AAAAAAABBB8/LdCPJ3nwjQY/s1600/cute-red-panda-20.jpg",
        "https://i.redd.it/0z81yx21l4e01.png",
        "https://thumbs.gfycat.com/TeemingAmusingFawn-size_restricted.gif",
        "https://i.imgur.com/3ezzwVA.gif",
        "https://i.redd.it/hpd2yxywcyh01.jpg",
        "https://i.imgur.com/T1GTSJC.gif",
        "https://i.imgur.com/kBByQr3.jpg",
        "https://i.redd.it/wlfmlanbrnf01.jpg",
        "https://i.imgur.com/6yqMp5i.jpg",
        "https://i.redd.it/xs0in8qa4xd01.jpg",
        "https://i.imgur.com/oAStinY.gif",
        "https://i.imgur.com/oH90gSK.gif",
        "https://i.redd.it/s45it4x2fhc01.jpg",
        "https://i.redd.it/nu2g5fexqgg01.jpg",
        "https://i.redd.it/hr33xt633lhz.jpg",
        "https://i.redd.it/z9beb1av93nz.jpg",
        "https://thumbs.gfycat.com/NeedyInfamousBluefintuna-size_restricted.gif",
        "https://i.imgur.com/ROW6AMB.png",
        "http://i.imgur.com/LZwS953.gif",
        "https://i.redd.it/q48p5rmt3p6z.jpg",
        "https://i.redd.it/plohs60g9klz.jpg",
        "https://thumbs.gfycat.com/DearestIllinformedBlackbird-size_restricted.gif",
        "https://i.imgur.com/gUzh8xE.jpg",
        "http://i.imgur.com/JFaa1ow.jpg",
        "https://i.imgur.com/wzsjfUK.gif",
        "https://i.redd.it/blgr4m8shjzy.jpg",
        "https://i.imgur.com/yHaDq3X.gif",
        "http://i.imgur.com/UfL6wKE.jpg",
        "https://i.redd.it/s5guvbw2rzdz.jpg",
        "https://i.imgur.com/Sdjivix.gif",
        "https://thumbs.gfycat.com/ImmenseFriendlyCaecilian-size_restricted.gif",
        "https://i.redd.it/182b42umweg01.jpg",
        "https://i.imgur.com/DJwfSkw.gif",
        "https://i.imgur.com/IR6O2b8.gif",
        "https://i.redd.it/scu3l0d3zk101.jpg",
        "https://i.imgur.com/UmJlgVW.jpg",
        "https://i.redd.it/g6vfgo7mc65z.jpg",
        "http://i.imgur.com/IWGPEH3.gif",
        "https://thumbs.gfycat.com/RepulsiveSpecificBullmastiff-size_restricted.gif",
        "https://i.imgur.com/p9ZEea3.jpg",
        "https://i.redd.it/h5yc5hhtz76z.jpg",
        "https://i.imgur.com/Qb9YSUJ.gif",
        "https://thumbs.gfycat.com/TautSphericalDuckbillcat-size_restricted.gif",
        "http://i.imgur.com/tMGJMaD.gif",
        "https://i.imgur.com/zaTrvul.gif",
        "https://i.redd.it/sv35p4hijclz.jpg",
        "https://i.redd.it/kv96k2imkbzy.jpg",
        "https://i.redd.it/scl4a0afunzz.jpg",
        "https://i.redd.it/mhq78dt7p7vz.jpg",
        "https://i.redd.it/6xby2lvwzqb01.jpg",
        "http://i.imgur.com/mEHLsn6.jpg"
	
]

    const embed = new Discord.MessageEmbed()
        .setColor("#15f153")
        
        .setImage( fortunes[Math.floor(Math.random()*fortunes.length)]);



    return message.channel.send(embed);    
  }
}