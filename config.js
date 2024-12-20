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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233536246492";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_40_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInk1UkJOaFNIVFFmbGVFWDRiakdUdEE1enRyRVYxU1IwdHZ1S05TTXRzRk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlc0VGEyUWxMU2hlZ2dnSTV3SHM1VVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmNkMzRkYjAtNDA0YS00Yzg2LTkzODEtNmY1YmY1MTA0YTYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTY4LFxuICAgICAgMjE0LFxuICAgICAgMTAyLFxuICAgICAgODgsXG4gICAgICAyMSxcbiAgICAgIDI5LFxuICAgICAgMjQwLFxuICAgICAgNzcsXG4gICAgICAyMCxcbiAgICAgIDE2LFxuICAgICAgMjAzLFxuICAgICAgMTA0LFxuICAgICAgMTU3LFxuICAgICAgMTE4LFxuICAgICAgMSxcbiAgICAgIDEyOCxcbiAgICAgIDI1NSxcbiAgICAgIDM4LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDU0LFxuICAgICAgNTMsXG4gICAgICAyMzgsXG4gICAgICAxNTYsXG4gICAgICA1NSxcbiAgICAgIDIyNixcbiAgICAgIDYxLFxuICAgICAgMTAsXG4gICAgICAxNzMsXG4gICAgICAxNzEsXG4gICAgICAyMyxcbiAgICAgIDI0NSxcbiAgICAgIDIzNSxcbiAgICAgIDY4LFxuICAgICAgMTcyLFxuICAgICAgMjUsXG4gICAgICAxODQsXG4gICAgICAxMjcsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBOSEpTRDFOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzYyNDY0OTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3OTE0ODg1MDc1MDE1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW05Nk5nREVQUFhscnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyM0dXVXdtTmluVy93ZitFT0d3UFBmYy95eHU3Q2VUdldHOFo5aXdvMGpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRGbW41aXFoOEt3WjVyNVpxUUtrM2ZJc3N2UnpOclp0N3VWMkwrMU5GZkNuazhNeEM2SnJtT25ZUlZHNmlZaDE2R1g1RWNKeUs5eSs1MTliTkFPZENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlQNm13dldKNVZTNXovbjB1K25VcmhudzdKWmlWR0ExWGJwVFIvVXM0TURmT0Jkb0dUYVp6Zm9kWlFsN0hTTHhPckc5SFpuL3FrWFp3VHNZYW56VURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNjI0NjQ5MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzE2NDA3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
