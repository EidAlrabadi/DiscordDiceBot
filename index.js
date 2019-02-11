const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const tokenfile = require("./token.json")

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is Online !`);
    bot.user.setGame("This Server")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }



    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAT);  //change AT to At For Real Bot Created Time

        return message.channel.send(botembed);
    }

    if(cmd === `${prefix}owner`){
        return message.channel.send("Eid A.");
    }


        if(cmd === `${prefix}rollDice`){

        var dice = Math.floor((Math.random() * 6) + 1);
        return message.channel.send({files: ["./"+dice+".png"]});
        }



        function emoji (id){
          return client.emojis.get(id).toString();

        }

        if(cmd === `${prefix}roll2Dice`){

        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);
        message.channel.send({files: ["./"+dice1+".png"]});
        return message.channel.send({files: ["./"+dice2+".png"]});
        }



        function emoji (id){
          return client.emojis.get(id).toString();

        }




});

bot.login(tokenfile.token);
