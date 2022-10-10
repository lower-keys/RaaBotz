let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Axis 」
│Axis (083837261215
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6288269131506
│ _Hasil Donasi Buat Beli Gorengan_
│ _Dengan Donasi kamu membantu_
│ _owner untuk makan_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler