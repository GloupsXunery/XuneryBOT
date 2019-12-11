const Discord = require("discord.js")
const bot = new Discord.Client()
var prefix = "x!"

var blue = "0101DF"
var db = "0B0B3B"
var red = "FF0000"
var dr = "610B0B"
var yellow = "FFFF00"
var dy = "AEB404"
var dark = "000000"
var grey = "848484"
var white = "FFFFFF"
var rose = "FE2E64"
var dro = "FE2E64"
var sky = "58FAF4"
var cyan = "0B3B39"
var purple = "8A0886"
var dpu = "2A0A29"
var green = "00FF00"
var dgr = "0B3B0B"

bot.on("message", message =>{
  if(message.content === prefix + "help") {
    var help_embed = new Discord.RichEmbed()
    .setColor(blue)
    .setTitle("*__Help__*")
    .setDescription("__**Les commandes :**__")
    .addField("__x!say__", "Dis un ***message*** que vous voulez!")
    .setTimestamp()
    .setFooter("Créer par @Gloups_Xunery #1906")
    message.channel.send(help_embed)
    console.log("oui oui oui help")
  }
});

bot.on("message", message =>{
  if(!message.guild) return
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply("j'abandonne y a pas de text 🤦‍♂️")
    message.channel.send(text)
    message.delete()
  }
});

bot.login("process.env.TOKEN")
