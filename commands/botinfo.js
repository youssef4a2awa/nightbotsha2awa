const { PREFIX, OWNER_ID, COLOR }  = require("../config.json")
const { discord, MessageEmbed } = require("discord.js");
const moment = require("moment")
module.exports = {
  name: "botinfo",
  aliases: ["info", "stats", "about","bot"],
  description: "Display all Information of `BOT`",
  async execute(message, args) {
    
    let week = 0;
     //----BOT UPTIME WITH Real Life
      let weeks = Math.floor(message.client.uptime / 604800000);
      let days = Math.floor(message.client.uptime / 86400000);
      let hours = Math.floor(message.client.uptime / 3600000) % 24;
      let minutes = Math.floor(message.client.uptime / 60000) % 60;
      let seconds = Math.floor(message.client.uptime / 1000) % 60;
    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        week = 0;
        weeks += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    let uptime = `\`${days}\` Days, \`${hours}\` Hours, \`${minutes}\` Minutes, \`${seconds}\` Seconds`
    
    let e = new MessageEmbed()
    .setThumbnail(message.client.user.displayAvatarURL())
    .setAuthor(`${message.author.username}`, message.author.avatarURL())
    .setDescription(`\`INFORMATION ABOUT\` **${message.client.user.username}** <:BOT:741708183508222023>`)
    .setColor(COLOR) // change it from config.json "COLOR": "your color here"
    .addField("SERVERS", message.client.guilds.cache.size, true)
    .addField("USERS", message.client.users.cache.size, true)
    .addField("PRESENCE", `${PREFIX}help`, true)
    .addField("STATUS", message.client.user.presence.status, true)
    .addField("PING" , `  ${Date.now() - message.createdTimestamp} ` + 'MS' , true)
    .addField('RAM', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("ID", `${message.client.user.id}`, true)
    .addField("OWNER", `<@!${OWNER_ID}>` , true) 
    .addField("UPTIME", `${uptime}`, false) 
     return message.channel.send(e)
  }
}