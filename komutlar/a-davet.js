const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
    var tema = ayarlar.tema;

  const embed = new Discord.MessageEmbed()
  .setColor(ayarlar.tema)
  .setTitle('Sunucuna Davet Et!')
  .setURL('https://discord.com/oauth2/authorize?client_id=847100446149836860&scope=bot&permissions=8')
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL())
  .setTimestamp(message.createdAt)
  message.channel.send(embed)

  
}

  exports.conf = {
    aliases: ['davet'], 
    permLevel: 0, 
    kategori: "Genel" 

  };

  exports.help = {
    name: 'davet',  
    description: 'davet', 
    usage: 'davet', 
  };
