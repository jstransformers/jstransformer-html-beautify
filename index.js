'use strict';

var beautify = require('js-beautify').html_beautify;

exports.name = 'html-beautify';
exports.outputFormat = 'html';

exports.render = beautify;
