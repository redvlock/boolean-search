module.exports = query => {
  query = query.replace(new RegExp(" OR ", "gi"), "[or]")
  query = query.replace(new RegExp(" AND ", "gi"), "[and]")
  const cleanquery = query.toLowerCase()
  const splitor = cleanquery.split('[or]')
  const splitand = splitor.map(exp => {
    return exp.split('[and]')
  })
  return splitand
}
