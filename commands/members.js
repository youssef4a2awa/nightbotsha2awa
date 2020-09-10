const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "membersinfo",
  aliases: ["members", "اعضاء"],
  description: "Display Members Information",
  async execute(message) {

let pages = [`**Members info 
:green_heart: online:   ${message.guild.members.cache.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.cache.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.cache.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.cache.filter(m=>m.user.bot).size} **
`,` **معلومات عن اعضاء
:green_heart: المتواجدين :   ${message.guild.members.cache.filter(m=>m.presence.status == 'online').size}
:heart:  الخاملين :       ${message.guild.members.cache.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  مشغولين :     ${message.guild.members.cache.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   عدد اعضاء :  ${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size}
:bulb: عدد البوتات : ${message.guild.members.cache.filter(m=>m.user.bot).size} ** `]
    let page = 1;

    let alpha = new MessageEmbed()
    .setColor('RANDOM')
	            .setAuthor(message.client.user.username, message.client.user.avatarURL())
            .setThumbnail(message.client.user.avatarURL())
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(alpha).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwordsFilters = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwordsFilters = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwords = msg.createReactionCollector(backwordsFilters, { time: 20000000});
        const forwords = msg.createReactionCollector(forwordsFilters, { time: 20000000});



        backwords.on('collect', r => {
            if (page === 1) return;
            page--;
            alpha.setDescription(pages[page-1]);
            alpha.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(alpha)
        })
        forwords.on('collect', r => {
            if (page === pages.length) return;
            page++;
            alpha.setDescription(pages[page-1]);
            alpha.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(alpha)
        })
        })
    })
    }
}
