module.exports = (cliente, guild) => {
    // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  //   client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setActivity(`+help`);
}