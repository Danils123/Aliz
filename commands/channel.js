exports.channels = (client, message, args) => {
    let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    let channel = args[1];
    let channel_id = client.channels.find("name", "" + channel);
    let response = '';

    if(channel_id !== '' && channel_id !== null && channel_id !== undefined){
        response = 'Id: ' + channel_id;
    }else   {
        response = "No encuentro ningun canal con ese nombre";
    }
    await message.channel.send(response);
}