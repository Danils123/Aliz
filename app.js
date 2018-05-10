const Discord = require("discord.js");

const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

const client = new Discord.Client();
client.config = require("./config.json");

client.logger = require("./util/Logger");
require("./modules/functions.js")(client);

client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({provider: new EnmapLevel({name: "settings"})});

const init = async () => {

  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });

  // Generate a cache of client permissions for pretty perms
  // client.levelCache = {};
  // for (let i = 0; i < client.config.permLevels.length; i++) {
  //   const thisLevel = client.config.permLevels[i];
  //   client.levelCache[thisLevel.name] = thisLevel.level;
  // }

  // Here we login the client.
  client.login(client.config.token);

// End top-level async/await function.
};

init();