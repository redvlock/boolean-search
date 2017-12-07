# boolean-search
Boolean Query Search

[![npm version](https://badge.fury.io/js/boolean-search.svg)](https://badge.fury.io/js/boolean-search)
[![GitHub version](https://badge.fury.io/gh/warlock%2Fboolean-search.svg)](https://badge.fury.io/gh/warlock%2Fboolean-search)
[![Build Status](https://travis-ci.org/warlock/boolean-search.svg?branch=master)](https://travis-ci.org/warlock/boolean-search)

### Repository

[NPM](https://www.npmjs.com/package/boolean-search)

[Github](https://github.com/warlock/boolean-search)


### NPM Install
```sh
npm i boolean-search -S
```

### Yarn Install
```sh
yarn add boolean-search
```

#### bSearch(text, query, options)
Enable "[cleanchar](https://www.npmjs.com/package/cleanchar)" options for clean query and text special characters.
* social
* spanish

#### Demo:
```js
const bSearch = require("boolean-search")
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`
const searchres = bSearch(text, "ipsum AND @social", { social: true })
console.log(JSON.stringify(searchres))
```

#### Return:
```
{"res":true,"desc":["ipsum","@social"]}
```

## License
The MIT License (MIT)
Copyright (c) 2017 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 