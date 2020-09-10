const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");
const Genius = new (require("genius-lyrics")).Client("Aq5WxsqtmQrQ2ECRMDwr0gB1cl1As_FqJALgR3rExsq7_Ra_BUjvelh3JPfLCFmf");

module.exports = {
  name: "lyrics",
  aliases: ["ly"],
  description: "Get Lyrics of Any Song",
 async execute (message, args) {

   let embed = new MessageEmbed()
   .setAuthor("🕒 Getting Lyrics... ")
   .setColor(COLOR)
    
   if(!args.length) {
   embed.setAuthor("Please Enter a Song Name")
     return message.channel.send(embed)
   }
   
   const queue = message.client.queue.get(message.guild.id);
   const msg = await message.channel.send(embed)
    try {
          const songs = await Genius.tracks.search(args.join(" "));
    let tet = await songs.forEach(m => m.title.full)
    console.log(tet)
          const lyrics = await songs[0].lyrics();
      
      if(lyrics.length > 4095) {
        msg.delete()
        return message.channel.send("Lyrics are too long to be Embed...")
    }
      if(lyrics.length < 2048) {
        const lyricsEmbed = new MessageEmbed()
        .setColor(COLOR)
        .setDescription(lyrics.trim());
        return msg.edit(lyricsEmbed);
      } else {
        //Lyrics Length > 2048
        const flyriscEmbed = new MessageEmbed()
        .setColor(COLOR)
        .setDescription(lyrics.slice(0, 2048));
        const slyricsEmbed = new MessageEmbed()
        .setColor(COLOR)
        .setDescription(lyrics.slice(2048, lyrics.length));
        msg.edit(flyriscEmbed);
        message.channel.send(slyricsEmbed);
        
      }
      return;
        
     
     } catch(e) {
       embed.setDescription("Got err : " + e)
       msg.edit(embed)
          console.log(e);
     }
   
   
   
   
  }
}