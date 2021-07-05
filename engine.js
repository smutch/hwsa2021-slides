// engine.js
const { Marp } = require('@marp-team/marp-core')
const markdownItAttrs = require('markdown-it-attrs');
const highlightLines = require('markdown-it-highlight-lines');

module.exports = (opts) => new Marp(opts).use(
  markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '[[',
    rightDelimiter: ']]',
    allowedAttributes: ['id', 'class']  // empty array = all attributes are allowed
  }).use(highlightLines);
