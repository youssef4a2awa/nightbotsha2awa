const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
let embed = new MessageEmbed()
.setColor(COLOR)

module.exports = {
  name: "ping",
  description: "Pinging the bot",
 async execute(message) {
   embed.setAuthor(`:Pinging...`, "https://storage.googleapis.com/discordstreet/emojis/acec5afe-54f0-46ab-b503-d341fc0d2665.gif")
  const r = await message.channel.send(embed)
 setTimeout(() => {
        r.delete();
      }, 500);
      
   let pingembed = new MessageEmbed()
     const PinG =  `${Date.now() - r.createdTimestamp}`
     const ApL =  `${Date.now() - message.createdTimestamp}`
     pingembed.setAuthor(`Status.`, `https://storage.googleapis.com/discordstreet/emojis/5d139fb9-7f60-48f4-b513-e43fd21570ce.gif`)
     pingembed.setDescription(`\`\`\`javascript\n› Time : ${ApL} ms.\n› Ping : ${PinG} ms.\`\`\``)
     pingembed.setColor(COLOR)

     return  message.channel.send(pingembed)
  }
};