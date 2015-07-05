# jstransformer-html-beautify

[JS Beautifier HTML](https://github.com/beautify-web/js-beautify) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-html-beautify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-html-beautify)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-html-beautify/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-html-beautify?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-html-beautify/master.svg)](http://david-dm.org/jstransformers/jstransformer-html-beautify)
[![NPM version](https://img.shields.io/npm/v/jstransformer-html-beautify.svg)](https://www.npmjs.org/package/jstransformer-html-beautify)

## Installation

    npm install jstransformer-html-beautify

## API

```js
var beautify = require('jstransformer')(require('jstransformer-html-beautify'))

beautify.render('<strong > Hello World! </strong  >').body
//=> '<strong>Hello World!</strong>'
```

## License

MIT
