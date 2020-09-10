const Discord = module.require('discord.js');
const moment = require('moment');
const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "userinfo",
  aliases: ["user", "ui"],
  description: "Display `User` Info",
 execute(message, args) {
   
let member = message.mentions.members.first() || message.member,
  user = member.user;
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(message.author.avatarURL())
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${message.member.nickname !== null ? `${message.member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField('Roles:', `<@&${message.guild.member(message.author)._roles.join('> <@&')}>`, true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(embed);
    return;


 }
}
   