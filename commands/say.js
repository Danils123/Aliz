exports.say = (client, message, args) => {
        const sayMessage = args.join(" ");
        message.channel.delete().catch(O_o=>{}); 
        message.channel.channel.send(sayMessage);
}

  