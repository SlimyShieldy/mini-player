const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "!"

client.login('TokenHere');

client.on('message', msg => {
if (!msg.content = "!test") {
return console.log('Command not found');
}
if (msg.content = "!test") {
msg.reply('It was a test lol');
}
)};
