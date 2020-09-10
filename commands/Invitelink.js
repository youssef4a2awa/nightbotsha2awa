const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "helplink",
  aliases: ["invite", "inv"],
  description: "Display all commands and descriptions",
  async execute(message, args) {
    let embed = new MessageEmbed()
    .setTitle("Add bot to your Server")
    .addField(`**Invite Link**`, `[**Click Here**](https://discord.com/api/oauth2/authorize?client_id=721660466614501469&permissions=37748672&scope=bot)`, true)
    .addField(`**Support Server**`, `[**Click here**](https://discord.gg/FcnYjjj)`, true)
    .setThumbnail(message.client.user.displayAvatarURL())
    .setFooter(`Requestd by : ${message.author.username}`, message.author.displayAvatarURL())
    message.channel.send(embed)
    
  }
}