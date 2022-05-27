const { Client, MessageEmbed, message  } = require("discord.js")
const client = new Client({intents: 3})
const prefix = '!'
const TOKEN = ""
const mysql = require(`mysql`)

const msauth = mysql.createConnection({

  host: ``,
  user: ``,
  password: ``,
  database: ``
  
});

msauth.connect(function(err) {

  if (err) {

  console.log(err)
  }
  else
  {
    console.log("connected to ms auth")
  }
    
})

client.on('ready', () => {
    console.log('MS Auth is Online!')




    client.user.setPresence({
        activity: {
            name: `MS Authenticator`,
            type: 'PLAYING',
        }
    })
  
})

client.on('message', message => {


  
   if(message.content.startsWith('!auth')) {

    if(message.channel.type === 'dm') return message.reply("Not in dms");

    if (message.member.roles.cache.some(role => role.id === 'YourID')) {

    
      const aergs = message.content.slice(prefix.length).trim().split(/ +/g);
      let firstArgs = aergs[1]; //first argument
      let secondArgs = aergs[2]; //second argument
      let thirdArgs = aergs[3]; //third argument
      let fourArgs = aergs[4]; //4 argument

    if (firstArgs && secondArgs && thirdArgs && fourArgs) {

      const args = message.content.slice(5).trim().split(/ +/g);
      const scriptname = args.shift().toLowerCase();
      const discordid = args.shift().toLowerCase();
      const serverip = args.shift().toLowerCase();
      const secretkey = args.shift().toLowerCase();
      const messagecontent = "The confirmation was sent in <#YourChannelID> "

    msauth.query(`INSERT INTO licenses (scriptname, discordid, serverip, endsat, activated, secretkey) VALUES ('${scriptname}', '${discordid}', '${serverip}', '1646828321', 1, '${secretkey}')`);


    let DeleteEmbed = new MessageEmbed()
    .setTitle("**MS LIZENZ**")
    .setColor("BLUE")
    .addField(`**Script:**`, `${scriptname}`)
    .addField(`**Discord:** `, `<@${discordid}>` )
    .addField(`**IP**:`, `${serverip}`)
    .addField(`**LIZENZKEY:**`, `${secretkey}`)
    .setThumbnail('https://i.imgur.com/EHE7POj.png')
    .setFooter(`MS License System`);

    let channelembed = new MessageEmbed()
    .setTitle("**MS LIZENZ**")
    .setColor("BLUE")
    .addField(`**Info:**`, `${messagecontent}`)
    .setThumbnail('https://i.imgur.com/EHE7POj.png')
    .setFooter(`MS License System`);

      message.delete()
      message.channel.send({ embed: channelembed })

    const channel = client.channels.cache.find(channel => channel.id === "YourChannelID")

    channel.send({ embed: DeleteEmbed }).catch(() => {}).then(function (message) {
      message.react("👍")

    });
  }
  else
  {
    message.reply("Incorrect use: Script name, Discord ID from the buyer, server IP, key")
  }  

    }
    else
    {
      message.reply("VALLAH NEIN")
    }
                    
    }
    else if(message.content.startsWith('!info')) {

      if(message.channel.type === 'dm') return message.reply("Not in dms");

      if (message.member.roles.cache.some(role => role.id === 'YourID')) {
        const messagecontent = "the info was sent in <#YourChannelID>"
        const args = message.content.slice(5).trim().split(/ +/g);
        const discordid = args.shift().toLowerCase();

        const aergs = message.content.slice(prefix.length).trim().split(/ +/g);
        let firstArgs = aergs[1]; //first argument
        let secondArgs = aergs[2]; //second argument
        let thirdArgs = aergs[3]; //third argument
        let fourArgs = aergs[4]; //4 argument
  
  
      if (firstArgs) {

        msauth.query(`SELECT * FROM licenses WHERE secretkey = '${discordid}' `  , (err, matrix) => {

          if(err){

            console.log(err)
              
          }
          else
          {
            if (matrix) {

              var secretkey = matrix[0].secretkey;
              var serverip = matrix[0].serverip;
              var scriptname = matrix[0].scriptname;
              var activated = matrix[0].activated;
              var discordid = matrix[0].discordid;
              let DeleteEmbed = new MessageEmbed()
              .setTitle(`**Customer Info!**`)
              .setColor("#ffd700")
              .addField(`**Secret Key**:`, `${secretkey}`)
              .addField(`**Server IP**:`, `${serverip}`)
              .addField(`**Discord**: `, `<@${discordid}>` )
              .addField(`**Scriptname**: `,`${scriptname}`)
              .addField(`**Activated**:`, ` ${activated}`)
              .setThumbnail('https://i.imgur.com/EHE7POj.png')
              .setFooter(`MS License System`);
        
              let channelembed = new MessageEmbed()
              .setTitle("**Customer Info!**")
              .setColor("#ffd700")
              .addField(`Message:`, `${messagecontent}`)
              .setThumbnail('https://i.imgur.com/EHE7POj.png')
              .setFooter(`MS License System`);
          
                message.delete()
                message.channel.send({ embed: channelembed })
              
              const channel = client.channels.cache.find(channel => channel.id === "YourChannelID")

              channel.send({ embed: DeleteEmbed }).catch(() => {}).then(function (message) {
                message.react("👍")
          
              });
  
            }
          }
          
  
        })
  
      }
      else
      {
        message.reply("Falsche Benutzung: Key")
      }
      }
    }

    else if(message.content.startsWith('!help')) {

      if(message.channel.type === 'dm') return message.reply("Not in dms");

      if (message.member.roles.cache.some(role => role.id === 'YourID')) {

        var messagecontent = "MS LIZENZ \n \n !auth [Scriptname, Discord ID vom Käufer, Server-IP, Key] \n !info [Key] zeigt die Infos der Lizenz an"

        let channelembed = new MessageEmbed()
        .setTitle("**Information**")
        .setColor("BLUE")
        .addField(`Message:`, `${messagecontent}`)
        .setThumbnail('https://i.imgur.com/EHE7POj.png')
        .setFooter(`MS License System`);
    
          message.delete()
          message.channel.send({ embed: channelembed })
        
      }
    }
})

client.login(TOKEN)