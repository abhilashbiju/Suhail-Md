const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919409081149";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia1U4UUhQNkJyMUFUTzFxY3lyVjBpMGI2SzZQNlhLak00TmZxbUkxRVlYVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk0MDkwODExNDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2RTMxQTRDQTE4NEFGQjA1NzkwOTg0NTI0OEYyMzM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc4MTYxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTQwOTA4MTE0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTQzN0RERUY4Mzk2MzAzQjYwODhENDU2NjgxQkE3QkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzgxNjE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NDA5MDgxMTQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QzJBQTk5RTlGNTI2M0E0NTk0RTBDQjBCMkU5MzY5OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3ODE2MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk0MDkwODExNDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVFNkY5OTAwNTIxRDNDOTUwNEYxNDgxQkRFMEU1NEQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc4MTYyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuVjBTdnh0U1RVdVdRQWdvQzJFOXZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyMDg0NmIzLTU5ODUtNGFkZi04ODRjLWU1Yjg0NmQ3ZTM5MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAyMzksXG4gICAgICAxNDksXG4gICAgICAxNDQsXG4gICAgICAzNCxcbiAgICAgIDg1LFxuICAgICAgMjE0LFxuICAgICAgMTEwLFxuICAgICAgMTEwLFxuICAgICAgMjE1LFxuICAgICAgMTk0LFxuICAgICAgMTU5LFxuICAgICAgMTY0LFxuICAgICAgMTMyLFxuICAgICAgMTIwLFxuICAgICAgMTQzLFxuICAgICAgNzIsXG4gICAgICAyMjUsXG4gICAgICA1NCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxNTAsXG4gICAgICAxNTksXG4gICAgICAzNCxcbiAgICAgIDIxMCxcbiAgICAgIDg3LFxuICAgICAgMTIxLFxuICAgICAgMTY2LFxuICAgICAgMTk5LFxuICAgICAgMTE0LFxuICAgICAgMjM5LFxuICAgICAgMjcsXG4gICAgICAxOSxcbiAgICAgIDgyLFxuICAgICAgMTE3LFxuICAgICAgMTU1LFxuICAgICAgMTM1LFxuICAgICAgMTEwLFxuICAgICAgMTUwLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNQVEdGTk43XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk0MDkwODExNDk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTAzODI2Mzc4ODY4OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQUJISUxBU0hcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM3ZxYmdIRU9xUmg3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjV4cU0zcUpvbTNFWko5NkhPUFkrVDN0YWowTWVGTW5BcmdlTlkyZ3F0M289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzNSRUZXdW5rc0NDQUV0N1hEMUVSdjlwV3N1TkVLMmc5aGZNbXliRHZEZ3Y3V2NvZ2pQeEtOT1AyMExmNmJmcUpqNHdXTEtQM1FjQjh4bUp5SzZwQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiODUyOVB4U1dHc1E2MWl3RjVXbGlvVDFBK1doaVdzSHArcGQ3RWwyVVViTExPRFhwTi9GTGExbTRTVnQraDJXK1l2TXVFNlR6Y3B0dGRndTBWZGtCQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NDA5MDgxMTQ5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzgxNjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDlMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIOUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzazlWaUYwcm1hSXJmQ3RFWHpLT3dXbXNYQlVDUzlwUkNObm5TUldsbWVjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTcxNzQ3NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Abilash",
  ownername:process.env.OWNER_NAME|| "Abilash",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
