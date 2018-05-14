const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
client.on('ready', () => {
  console.log('---------------');
  console.log('games Bot Is Online')
  console.log('---------------')
});

let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
var prefix = "#";//البريفكس

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'لغز')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk/quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لحل هذه الغز**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author;
            points[won.id].points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});

client.on('message', message => {
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    };
  if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
  
  const type = require('./fkk/fkk.json');
  const item = type[Math.floor(Math.random() * type.length)];
  const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
  };
  message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {
  
        
  msg.channel.send(`${item.type}`).then(() => {
          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
          .then((collected) => {
      message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
      console.log(`[Typing] ${collected.first().author} typed the word.`);
              let won = collected.first().author;
              points[won.id].points++;
            })
            .catch(collected => {
              message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
        console.log('[Typing] Error: No one type the word.');
            })
      })
    })
  }
  });


  client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
      points: 0,
      };
    if (message.content.startsWith(prefix + 'ركب')) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./fkk/RKB.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 15 ثانيه لتركيب الكلمه**').then(msg => {
    
          
    msg.channel.send(`${item.type}`).then(() => {
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => {
                message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
          console.log('[Typing] Error: No one type the word.');
              })
        })
      })
    }
    });

  client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
      points: 0,
      };
    if (message.content.startsWith(prefix + 'رياضيات')) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./fkk/math.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 15 ثانيه لحل المسئله**').then(msg => {
    
          
    msg.channel.send(`${item.type}`).then(() => {
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => {
                message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
          console.log('[Typing] Error: No one type the word.');
              })
        })
      })
    }
    });
    client.on('message', message => {
      if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
      if (message.content.startsWith(prefix + 'كتابه')) {
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
      
      const type = require('./fkk/type.json');
      const item = type[Math.floor(Math.random() * type.length)];
      const filter = response => {
          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
      };
      message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
      
            
      msg.channel.send(`${item.type}`).then(() => {
              message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
              .then((collected) => {
          message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
          console.log(`[Typing] ${collected.first().author} typed the word.`);
                  let won = collected.first().author;
                  points[won.id].points++;
                })
                .catch(collected => {
                  message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
            console.log('[Typing] Error: No one type the word.');
                })
          })
        })
      }
      });
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./fkk/3wasmPTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});

client.on('message', message => {
    var prefix = "+";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 358499171810148372) return;
    
    
    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '368456032399392768') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '368456032399392768') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '368456032399392768') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'watching')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });

client.login(process.env.BOT_TOKEN);

