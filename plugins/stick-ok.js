let moment = require('moment-timezone')
let handler = async (m, { conn, command, text }) => { 
 await conn.sendFile(m.chat, 'https://bit.ly/3AUUure', 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `${ucapan()}`, body: `a`, sourceUrl: 'https://www.tiktok.com', thumbnail: await (await fetch(pickRandom(global.waifu))).buffer(),}} 
     })
 } 
 handler.customPrefix = /^(iya|ok|oke|okey)$/i
 handler.command = new RegExp 
  
 module.exports = handler 
 
 function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃"
    }
    return res
}
