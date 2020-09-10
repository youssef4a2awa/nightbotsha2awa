const { MessageEmbed } = require("discord.js");
const { COLOR , OWNER_ID }= require("../config.json")
module.exports = {
  name: "contact",
  aliases: ["تواصل", "owner"],
  description: "Contact to `BOT` Owner || تواصل مع صاحب البوت",
  async execute(message) {
    
if (message.author.bot) return;
if (!message.channel.guild) return;

let args = message.content.split(" ").slice(1).join(" ");

message.client.users.cache.get("593232818222399530").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + `<@!${message.author.id}>` + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**").catch(error => message.channel.send(":x: Message Not Deliverd Cause `BOT` Owner is Closed Direct Message"))
let embed = new MessageEmbed()
     .setAuthor(message.author.username, message.author.avatarURL())
     .addField(':mailbox_with_mail: **تم ارسال الرسالة الى صاحب البوت بنجاح**', `**Message Deliverd to \`BOT\` OWNER** <@!${OWNER_ID}>`, true)
     .setThumbnail(message.author.avatarURL())
     .setColor(COLOR)
                                                
message.channel.send(embed).then(message.delete({ timeout: 1000}))
    
     

}
}
