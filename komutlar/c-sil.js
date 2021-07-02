const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {

  let dogruklnm = new Discord.MessageEmbed()
  .setColor(ayarlar.tema) 
    .setTitle('Yanlış Kullanım :no:')
  .addField('**Doğru kullanım:**', '`!sil [sayı]`')
    .setThumbnail(client.user.avatarURL())
  .setTimestamp(message.createdAt)
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL())
  

  if(!args[0]) return message.channel.send(dogruklnm);
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(new Discord.MessageEmbed()
  .setColor(ayarlar.tema) 
  .setTitle("Mesaj Silme") 
  .addField("**Silinen mesaj sayısı:**" , `${args[0]}`) 
  .setTimestamp(message.createdAt)
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL())).then(x => x.delete({timeout: 5000}))
  })
  }
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2,
  };
  exports.help = {
  name:'sil',
  description: 'sil',
  usage: 'sil <silinicek mesaj sayısı>'
  };