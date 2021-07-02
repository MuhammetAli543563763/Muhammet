const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
    var tema = ayarlar.tema;

  const embed = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL())
  .setColor(ayarlar.tema)
  .setTitle('Yardım Paneli')
  .setDescription('Yardım paneline hoşgeldin! Komutlar şunlardır;')
  .addField(`${ayarlar.prefix}eğlence`, 'Eğlence panelini gösterir.')
  .addField(`${ayarlar.prefix}sil`, 'Sohbete Yazdın Şeyi Hemen Siler.')
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL())
  .setTimestamp(message.createdAt)
  message.channel.send(embed)

  
}

  exports.conf = {
    aliases: ['yardım'], 
    permLevel: 0, 
    kategori: "Genel" 

  };

  exports.help = {
    name: 'yardım',  
    description: 'yardım', 
    usage: 'yardım', 
  };
