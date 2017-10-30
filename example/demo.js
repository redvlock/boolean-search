const bSearch = require('../index.js')
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`

const search = 'Lor AND ip OR @xsocial'
const resp = bSearch(text, search)
console.log(JSON.stringify(resp))


const search2 = 'Lorem AND @social'
const resp2 = bSearch(text, search2)
console.log(JSON.stringify(resp2))

const search3 = 'Texto AND @xsocial'
const resp3 = bSearch(text, search3)
console.log(JSON.stringify(resp3))

const search4 = 'Lorem AND @xsocial OR ipsum'
const resp4 = bSearch(text, search4)
console.log(JSON.stringify(resp4))
