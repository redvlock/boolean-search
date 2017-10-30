module.exports = (text, andarr) => {
  var desc = []
  for (let i = 0; i <andarr.length; i++) {
    if (text.indexOf(`-${andarr[i]}-`) > -1) {
      desc.push(andarr[i])
    } else return { res: false }
  }
  return {
    res: desc.length > 0,
    desc: desc
  }
}
