const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
    var tema = ayarlar.tema;

  const eğlence = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL())
  .setColor(ayarlar.tema)
  .setTitle('Eğlence Paneli')
  .setDescription('Eğlence paneline hoşgeldin! Komutlar şunlardır;')
  .addField(`${ayarlar.prefix}espiri`, `Bot size espiri yapar.`)
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL())
  .setTimestamp(message.createdAt)
  message.channel.send(eğlence)

  
}

  exports.conf = {
    aliases: ['eğlence'], 
    permLevel: 0, 
    kategori: "Genel" 

  };

  exports.help = {
    name: 'eğlence',  
    description: 'eğlence', 
    usage: 'eğlence', 
  };
