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


    if(cmd === `${prefix}owner`){             //Who is the owner command
        return message.channel.send("Eid A.");
    }


        if(cmd === `${prefix}rollDice` || cmd === `${prefix}rolldice`){        //roll one dice command

        var dice = Math.floor((Math.random() * 6) + 1);
        return message.channel.send({files: ["./"+dice+".png"]});
        }


        if(cmd === `${prefix}roll2Dice` || cmd === `${prefix}roll2dice` ){        //roll two dice command

        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);
        message.channel.send({files: ["./"+dice1+".png"]});
        return message.channel.send({files: ["./"+dice2+".png"]});
        }





        if(cmd === `${prefix}google`){        //google search algorithm
        var searchTerm = ""
        for(i = 1; i < messageArray.length; i++){    //figure out the javascript of doing this
          searchTerm += " "

        }

        
        return message.channel.send(searchTerm);
        }


});

bot.login(tokenfile.token);
