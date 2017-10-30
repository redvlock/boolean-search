module.exports = query => {
  const cleanquery = query.toLowerCase()
  const splitor = cleanquery.split(' or ')
  const splitand = splitor.map(exp => {
    return exp.split(' and ')
  })
  return splitand
}
