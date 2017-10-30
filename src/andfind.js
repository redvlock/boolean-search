const cleanchar = require("cleanchar")

module.exports = (text, andarr) => {
  var desc = []
  for (let i = 0; i <andarr.length; i++) {
    const stringtocheck = cleanchar(andarr[i], { spanish: true, social: true })
    if (text.indexOf(` ${stringtocheck} `) > -1) {
      desc.push(andarr[i])
    } else return { res: false }
  }
  return {
    res: desc.length > 0,
    desc: desc
  }
}
