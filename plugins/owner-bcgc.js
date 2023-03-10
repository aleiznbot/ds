import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*โโโโฐ ๐๐๐๐๐๐๐๐๐๐ โฑโโโ*\n*โ*\n*โ โง* ${text}\n*โ*\n*โโโโโโโโโโโโโโโโ*`, '๐๐๐๐ ๐๐ ๐๐ ๐พ๐๐๐๐๐๐พ๐ผ๐ฟ๐ ๐๐๐๐พ๐๐ผ๐\n' + wm, fs.readFileSync('./src/comunicado_ofc.png'), [['๐ค ๐พ๐๐ฝ๐ด๐ ๐ค', '.owner'],['๐ ๐ธ๐ฝ๐๐๐ฐ๐ถ๐๐ฐ๐ผ ๐', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'แดแดแดแดษดษชแดแดแดแด แดาษชแดษชแดส แด ษขสแดแดแดs',
body: 'สส ๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ', 
sourceUrl: `https://github.com/aleizn`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[โ๐๐๐๐โ] ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด ๐ด๐ฝ๐๐ธ๐ฐ๐ณ๐พ ๐ฐ ${groups.length} ๐ถ๐๐๐ฟ๐พ/๐*\n\n*๐๐๐๐: ๐ด๐ ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด ๐๐๐ด ๐๐ด๐ฝ๐ถ๐ฐ ๐ต๐ฐ๐ป๐ป๐พ๐ ๐ด๐๐๐ด ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ ๐ฝ๐พ ๐๐ด ๐ด๐ฝ๐๐ธ๐ด ๐ฐ ๐๐พ๐ณ๐พ๐ ๐ป๐พ๐ ๐ฒ๐ท๐ฐ๐๐, ๐ณ๐ธ๐๐ฒ๐๐ป๐ฟ๐ด ๐ฟ๐พ๐ ๐ด๐ป ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
