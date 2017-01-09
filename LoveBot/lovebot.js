var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!");
    }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("MjU5MTA5MDMwNTQxMjYyODU5.CzTHCA.r6F_1H5Ct0fEw4Mhyk_LrwLzljc");