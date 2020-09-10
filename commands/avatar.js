const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "avatar",
  aliases: ["صورة", "افتار"],
  description: "Display Avatar of your or @SomeOne",
  execute(message, args) {
    try{
      if (!args[0]) {
       const mm = message.mentions.members.first() || message.member;

    let embed = new MessageEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL())
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL())
        .setImage(mm.user.avatarURL({ format: 'png', size: 1024 }))
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL())
          return message.channel.send(embed);
    } else { 
      (!args[0] == "server") 
           const doma = new MessageEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL())
    .setImage(message.guild.iconURL(({ format: 'png', size: 1024 })))
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
          return message.channel.send(doma);
    }
         
   
      } catch(e) { e => message.channel.send("somthing Wrong with Avatar") }
  
}
}
