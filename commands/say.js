const { PREFIX, OWNER_ID, COLOR }  = require("../config.json")
const { discord, MessageEmbed } = require("discord.js");
const moment = require("moment")
module.exports = {
  name: "say",
  aliases: ["s"],
  description: "`Control bot messages`",
  execute(message) {

    let args = message.content.split(" ").slice(1);

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحيات :rolling_eyes:**"
      );

    message.channel.send("" + args.join("  "));
    message.delete();
  }    
  }


