r

module.exports = {
  TOKEN: "MTI5MzM1NTcyODM1ODIxNTY4MA.GXanxh.Annn7shXbvOjvPGyWwA85d2Lwl3viEw1RqJCWg",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Koi Node V4",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    {
      name: "ChalresNaig Node4",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
