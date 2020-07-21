const discord = require("discord.js");
const youtube = require("youtube-random-video");
require("dotenv").config();

const client = new discord.Client();

client.on("ready", function(){
  console.log("Uselessness is up on the web");
})

client.on("message", function(message){
  if(message.content.includes("useless") || message.content.includes("Useless"))
  {
    console.log("Useless detected, ingaging useless hyper drive");
    youtube.getRandomVid(process.env.YOUTUBE_DATA_KEY, function(err, data){
      var youtubeURL = "https://youtube.com/watch?v=" + data.id.videoId;
      message.channel.send(youtubeURL);
    })
  }
  if(message.content == "!help")
  {
    message.channel.send("Useless");
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);
