const cleanchar = require("cleanchar")
const searchbool = require("./src/searchbool.js")
const andfind = require("./src/andfind.js")
const tck = require('tck')

module.exports = (text, search) => {
  if (tck.isEmpty(text)) return { res: false }
  else if (tck.isEmpty(search) || !tck.isString(search)) return { res: true }
  else if (tck.isString(search)) {
    const cleantext = ` ${cleanchar(text, { social: true, spanish: true })} `
    const boolres = searchbool(search)
    if (boolres.length === 1 && boolres[0].length === 1) {
      return cleantext.indexOf(` ${boolres[0][0]} `) > -1? { res: true, desc: boolres[0][0] } : { res: false }
    } else {
      if (boolres.length > 1) {
        for (let i = 0; i < boolres.length; i++) {
          const finder = andfind(cleantext, boolres[i])
          if (finder.res) {
            return { res: true, des: finder.desc }
          }
        }
        return { res: false }
      } else if (boolres[0].length > 1) {
        const res = andfind(cleantext, boolres[0])
        return res
      }
    }
  }
}
