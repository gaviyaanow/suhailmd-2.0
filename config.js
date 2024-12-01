const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/p0adv4.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254755835054";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/p0adv4.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_32_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyQTVKc29YcGdRNmNRV1hFcXZvUStUZWUxUUsxRERheHo2S2ROekpERFZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1NTgzNTA1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTBDRTVGMjFBOThEMDA1NEY0OEE5RENGM0Y4OTQ1OUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMDYzNTI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImViZGo1U08tUnZhTlJYSlM5NkhkYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjY4NTE4ZTktMTU2ZC00YjJkLThiZTEtY2MwMjMyNTdhNTI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE2NixcbiAgICAgIDIzMCxcbiAgICAgIDQ1LFxuICAgICAgMjMsXG4gICAgICAxOTMsXG4gICAgICAxMjMsXG4gICAgICA3MCxcbiAgICAgIDIyLFxuICAgICAgMzAsXG4gICAgICAyMDcsXG4gICAgICAxNDEsXG4gICAgICAyMjcsXG4gICAgICAxNyxcbiAgICAgIDk0LFxuICAgICAgMTczLFxuICAgICAgOTUsXG4gICAgICAyMzAsXG4gICAgICAyMzAsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyMzEsXG4gICAgICAxMTgsXG4gICAgICAxNjUsXG4gICAgICA2MixcbiAgICAgIDUwLFxuICAgICAgMjQxLFxuICAgICAgNzYsXG4gICAgICA4LFxuICAgICAgMTA0LFxuICAgICAgMjMxLFxuICAgICAgMjUwLFxuICAgICAgMjM1LFxuICAgICAgNjIsXG4gICAgICAyMzEsXG4gICAgICA0NSxcbiAgICAgIDE1OSxcbiAgICAgIDQwLFxuICAgICAgMTc1LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUdLQ1RRM0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NTgzNTA1NDo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU2OTM0MDcwNDk3NDI1OjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05qNHFKRUZFTnJtc2JvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOEc2aWVhOWk2R1dINktKSFRoOHZCbFFWOExjS1dhMmxjd0Y2b0JuUGRYWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwMFJGYzY0U2JOOXoxL1lJbldBN1RKODQzRTBMQW01NytrSjR6bWQwM3FmN1NiSmt0N205QzNnS2dYQXEwWWtkRjFYdXgwZ3JucnlCc1lpM0tsYk9CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwVEc1S3FVdWt4QTZHNTlpeDVJRWlKdVpHeEZodGppTTdqRGYzVVJPTTc5RlYxNEFIV0hpVnBPNkg1aENWbjMzb1J6VVU3bUFmaGhMTmlEU1VQTFZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTU4MzUwNTQ6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMDYzNTIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSStIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJK0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsWlg3Q3JCcDJZR0pxU2tXMEY1NTUwMm84cDI1dmpuN09WZnZtR0FiRndFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzg0OTk2NjksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Gavi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
