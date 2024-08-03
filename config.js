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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOSxcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1LFxuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldZaCtqVnI5RlFpSDYxdlJrZ3RRNzBjRE5Yb1UrTDdqZmRSWWs3ZWtEbFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYtdUxKUWdRUUJldExSbFZKa1JsaGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2U5MmE2OTctNjlkOS00Y2M5LWI1ZDAtYjNlNzlkOGU1ZGNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDgwLFxuICAgICAgNjAsXG4gICAgICAzMCxcbiAgICAgIDE0NixcbiAgICAgIDIzMCxcbiAgICAgIDUxLFxuICAgICAgMTQxLFxuICAgICAgMjE1LFxuICAgICAgMTQ3LFxuICAgICAgMjQ1LFxuICAgICAgODksXG4gICAgICAyNTAsXG4gICAgICA5OSxcbiAgICAgIDEwNixcbiAgICAgIDE5MyxcbiAgICAgIDE1NCxcbiAgICAgIDE0OSxcbiAgICAgIDE4NCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAxNzMsXG4gICAgICAyNTQsXG4gICAgICAxMDYsXG4gICAgICA2NyxcbiAgICAgIDg3LFxuICAgICAgOTksXG4gICAgICAyNDcsXG4gICAgICA4MCxcbiAgICAgIDEyNSxcbiAgICAgIDk4LFxuICAgICAgMTAyLFxuICAgICAgMTgsXG4gICAgICAxOTIsXG4gICAgICA0OCxcbiAgICAgIDk4LFxuICAgICAgMTAyLFxuICAgICAgNzksXG4gICAgICAxMDksXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXRkc3SkgxUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjMwNDk4MDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5ODM4MzcwODA3OTg0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGY0ODdRSEVJM2Z0N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1bG9obHRicERsc0RDdFpFUHRXcFFpVEd3VWo1SHovRFY0cndrbGRRNFRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJiY24rOGJQQkdEOXNrMkdHcmduM0EwWWdGT2xJVGV3amY1K2xOUW4rbklXcXFBZ295ZVdVK0tHZlpnVDI0aVdldHg5ODZKc3B1bUdBaEt2N2tMRERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpjSWg4Q0dWMzVuQTNJbXVtcWkvdnpickVKWHEvUEZMWW1VWFUrbUZBZzhYeTZHeENDdkYrNi84UitFZ0NQbU0vS1M3TFdFbGxuOGZpbkdoMitGMUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYzMDQ5ODAzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NzUwODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp0aC5qc29uIjogIntcImtleURhdGFcIjpcImhBR0tkcWQwOTVRVDFwemN4V0JXZ0FEaUVJeWVUaGhaMVBYa1VPVU5uUlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4OTk5OTY3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjc1MDg5MTU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
