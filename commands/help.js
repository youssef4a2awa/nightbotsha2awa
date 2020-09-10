const { MessageEmbed } = require("discord.js");
const { COLOR, PREFIX, OWNER_ID  }= require("../config.json")
module.exports = {
  name: "help",
  aliases: ["h", "cmd", "cmds"],
  description: "Display all commands and descriptions",
  execute(message) {
   let HelpEmbed = new MessageEmbed()
   .setTitle(":sparkles: NightBot Help")
   .addField(`
> :robot: **INFO (13)**`,
`\`${PREFIX}help\`, \`${PREFIX}ping\`, \`${PREFIX}botinfo\`, \`${PREFIX}members\`, \`${PREFIX}contact\`, \`${PREFIX}avatar\`, \`${PREFIX}uptime\`, \`${PREFIX}avatarserver\`, \`${PREFIX}clear\`,\`${PREFIX}anime\`,\`${PREFIX}say\`,\`${PREFIX}userinfo\`,\`${PREFIX}setTime\`,\`${PREFIX}Kick\`

> :notes: **MUSIC (14)**  
\`${PREFIX}Play\`, \`${PREFIX}pause\`, \`${PREFIX}skip\`, \`${PREFIX}stop\`, \`${PREFIX}queue\`, \`${PREFIX}skipto\`, \`${PREFIX}playlist\`, \`${PREFIX}nowplaying\`, \`${PREFIX}loop\`, \`${PREFIX}shuffle\`, \`${PREFIX}lyrics\`, \`${PREFIX}search\`, \`${PREFIX}pruning\`,\`${PREFIX}Mute\`

> :credit_card: **COINS (2)**  
\`${PREFIX}daily\`, \`${PREFIX}credits\`

> :tickets: **Ticket(2)**  
\`${PREFIX}new\`, \`${PREFIX}close\`


> :video_game: **GAMES (1)**  
\`${PREFIX}Xo\`


`, true)
   
     
   
   .setColor(COLOR)
   .setThumbnail(message.client.user.displayAvatarURL())
   message.channel.send(HelpEmbed)
  }
}