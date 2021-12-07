const { Client, Intents } = require("discord.js");
const { config } = require("./config");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

return {
  discord: {
    joinServer: async (serverId) => null,
    start: async () => null,
  },
};
