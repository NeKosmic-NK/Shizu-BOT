let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let grupos =`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 GRUPOS 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ HOLA ${name} 💙*
*┃ AQUI TE DEJO MIS GRUPOS DE WHATSAPP*
*┃ SOPPORTE TECNICO DEL BOT:*
*┃ https://chat.whatsapp.com/DV9nquN0eSn2y0OnqHEPHw*
*┃ FAMILIA OTAKU:
*┃ https://chat.whatsapp.com/JC4Q6NAn4iEIsWJKNrvV4N*
*┃ GRUPO +18:*
*┃ https://chat.whatsapp.com/CapNGMtGwEZGRE8Wv8UpBO
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.instagram.com/invites/contact/?i=17oyfozpe6851&utm_content=paev3we', 'INSTAGRAM', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['grupos']
handler.tags = ['GRUPOS']
handler.command = /^grupos$/i
export default handler
