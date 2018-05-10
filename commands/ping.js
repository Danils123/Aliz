exports.ping = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}