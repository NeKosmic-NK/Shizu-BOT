let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 DISNEY+ 」─*\n*“${pickRandom(global.disney)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['disney']
handler.tags = ['fun']
handler.command = /^disney/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.disney = [
  "Correo: rhcomets34@gmail.com Contraseña: Panthers23",
  "Correo:jaylenwalker15@gmail.com Contraseña: Motorcycle12",
  "Correo: smitetha987@gmail.com Contraseña: smith1234",
  "Correo: morganpjason@gmail.com Contraseña: Jasonmorgan12",
  "Correo: nilesbanks@gmail.com Contraseña: niles.25",
  "Correo: julien.bestron@gmail.com Contraseña: Sucesmoi54",
  "Correo: natalie@nativeno.com Contraseña: 4Me2know",

] 
