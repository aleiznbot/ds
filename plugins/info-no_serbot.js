let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
*[βππππβ] π»π°π π΅ππ½π²πΈπΎπ½π΄π πΏπ°ππ° ππ΄π π±πΎπ (#ππππππ, #πππππππ, #ππππ, #πππππππ, #πππππππ, #πππππππππ) π½πΎ π΄πππ°π½ π°π²πππ°π»πΌπ΄π½ππ΄ π΅ππ½π²πΈπΎπ½π°π»π΄π πΏπ°ππ° π΄πππ΄ π±πΎπ (NotJhuz-MD)*

*ββ πΏππ΄π³π΄ πΏππΎπ±π°π πΈπ½πππ°π»π°π π³π΄ππ³π΄ π²π΄ππΎ π΄π» π±πΎπ ππΈπΆππΈπ΄π½π³πΎ ππ½πΎ π³π΄ π»πΎπ ππππΎππΈπ°π»π΄π πππ΄ π·π°π π΄π½ π΄π» π²π°π½π°π» π³π΄ πΉπ·ππ*
*β https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw*`
let buttonMessage= {
'document': { url: `https://github.com/aleizn/Ale.izn` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/aleizn',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalabot`, buttonText: {displayText: 'πΈπ½πππ°π»π°π π±πΎπ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler

