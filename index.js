const Discord = require('discord.js')

const client = new Discord.Client()

const formsOfUwu = ['owo', 'OwO', 'OWO', 'uwu', 'UwU', 'UWU', 'nwn', 'NwN', 'NWN']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


client.on("message", msg => {
  if (msg.author.bot) return
  
  if (formsOfUwu.some(word => msg.content.includes(word))) {
    msg.channel.send("NO UWU STOP IT I WILL BAN YOU")
  }

})


client.login(process.env.TOKEN)