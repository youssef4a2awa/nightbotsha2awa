const { MessageEmbed } = require("discord.js");
const { COLOR  }= require("../config.json")
module.exports = {
  name: "uptime",
  aliases: ["ut", "up"],
  description: "Display `BOT` UPTIME",
  execute(message) {
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
    let embed = new MessageEmbed()
    .setDescription(`:clock1: | ${uptime}`)
    .setColor(COLOR)
    message.channel.send(embed)
    //باخد الكلام كوبي :D:clock1:
  }
}
