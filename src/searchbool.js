module.exports = query => {
  query = query.replace(new RegExp("\\sOR\\s", "g"), "~or~")
  query = query.replace(new RegExp("\\sAND\\s", "g"), "~and~")
  const cleanquery = query.toLowerCase()
  const splitor = cleanquery.split('~or~')
  const splitand = splitor.map(exp => {
    return exp.split('~and~')
  })
  return splitand
}
