exports.dofus = (client, message, args) => {
    let channel_id = args[1];
    let channel = client.channels.find("name", "" + channel_id);
    let response = '';
    
    if(channel !== '' && channel !== null && channel !== undefined){
        const xz = client.channels.get(channel.id).send('Comentando en otro canal');
    }else   {
        const xz = client.channels.get('439987469367377930').send('Comentando en otro canal');
    }
}
