# Useless Bot - A Useless Discord Bot

[Add it to your server](discord.com/oauth2/authorize?client_id=733186628272783360&scope=bot)

## Table of contents
- [About](#About)
- [Technologies](#Technologies)
- [Installation](#Installation)
  - [Node.js](#Installing_Node.js)
  - [Download the Project](#Download_the_Project)
  - [Installing Packages](#Installing_Packages)
  - [Adding API Keys](#Adding_API_Keys)
  - [Adding the Bot to Your Server](#Adding_the_Bot_to_Your_Server)

## About {#About}
The bot looks for a message containing the word "useless" and then generates a random Youtube video and sends that video back in the channel. It also has a !help command that only outputs useless and a random Youtube video.

## Technologies {#Technologies}
This project was built with:
- [Node.js v12.18.2](https://nodejs.org/en/download/)
- [Discord.js v12.2.0](https://www.npmjs.com/package/discord.js)
- [Youtube-Random-Video v1.0.5](https://www.npmjs.com/package/youtube-random-video)

## Installation {#Installation}
If you don't want to host the bot, you can simply click this [link](discord.com/oauth2/authorize?client_id=733186628272783360&scope=bot) to simply add the bot to your server.

- ### Installing Node.js {#Installing_Node.js}
Go to the Node.js website [here](https://nodejs.org/en/download/) and simply click on the Windows or Macos installer. Download it, run, and follow the installation process in the setup window. Then open Terminal if you are Mac or open Command Prompt if you are on Windows and check to see if the installation was successful by running this command. (From here on out I will call both Command Prompt and Terminal "terminal").  
`node -v`  
If you get back a version number than you have successfully installed Node.

- ### Download the project {#Download_the_Project}
Simply press the green code button and download zip. Then unzip the file and place it in an easily accessible place. Then cd in your terminal to the project folder that you just downloaded

- ### Installing Packages {Installing_Packages}
Make sure you are in the project folder you downloaded. Then simply put the following commands into your terminal.  
`npm install discord.js`  
`npm install youtube-random-video`  
If this is successful, you will see a "node_modules" folder in the project folder.

- ### Adding API Keys {#Adding_API_Keys}
  - #### Getting the Youtube API
  Go to this [link](https://console.developers.google.com/), and sign into Google. Then click the credential tab on the side and click create credentials at the top of the page. Now go to the Library and look for the Youtube Data API. Click on it and then click enable. Now press the back arrow on the top left and go back to credentials. You should then see the key under the API Keys section and a copy symbol to the right. Save the key in your note taker of choice, but remember API keys are valuable and should never be shared.

  - #### Getting the Discord Bot Token
  Go to this [link](https://discord.com/developers/applications), and sign into Discord. Then click the New Application Button, add the name you want the bot to be and you should come to a page saying general information. Copy the client id and store it somewhere, then hit the bot tab. And click add bot. Then give your bot a username and copy the token and store it with Youtube API.

  - #### Adding the Keys to the project
  Open useless.js in the text editor of your choice and replace "process.env.YOUTUBE_DATA_KEY" with a string (adding quotes to the end and beginning) of your Youtube API Key. Then replace "process.env.DISCORD_BOT_TOKEN" with the Discord bot token not the Discord client id. Then save.

- #### Adding the Bot to Your Server {#Adding_the_Bot_to_Your_Server}
Now open your terminal and make navigate once again to the project folder. Run the following command `node useless.js`. Make sure that you keep the terminal window open by minimizing it. Then simply replace "YOUR_CLIENT_ID_HERE" in this url `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID_HERE&scope=bot` with your client ID and enter the URL in the web browser of your choice. Now select the server you want to add it to and you're done.
