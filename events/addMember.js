module.exports = (client, member) => {
    let channel = client.channels.find("name", "lobby");
    let output = member.user.toString();
  
    console.log(`Bienvenido "${member.user.username}" se has unido a la familia "${member.guild.name}"` );
    member.guild.channels.get(channel.id).send(`${output} , Bienvenido(a) a ${member.guild.name}! Que disfrutes :wink:`).catch(console.error);
}