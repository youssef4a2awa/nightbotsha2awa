const { MessageEmbed } = require("discord.js");
const { COLOR , OWNER_ID }= require("../config.json")
module.exports = {
  name: "clear",
  aliases: ["cl", "prune"],
  description: "Clear Messages from TextChannel",
  async execute(message, args) {
  

const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

const fetched = await message.channel.messages.fetch({limit: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`))
  }
}