const {Marp} = require('@marp-team/marp-core');
const markdownItInclude = require('markdown-it-include');
const markdownItContainer = require('markdown-it-container');

const canonicalUrl = process.env.URL || undefined
const ogImage = (() => {
  if (canonicalUrl) return `${canonicalUrl}/og-image.jpg`
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}/og-image.jpg`

  return undefined
})();

const loadEngine = (options) => {
  const marp = new Marp(options);

  marp.customDirectives.local.layout = require('./lib/directives/layout');

  marp
    .use(markdownItInclude)
    .use(require('./core/config/prismjs').run())
    .use(markdownItContainer, 'slideLink', require('./lib/components/slideLink'))

  return marp;
}


module.exports = {
  allowLocalFiles: true,
  ogImage,
  html: true,
  themeSet: 'themes',
  url: canonicalUrl,
  engine: loadEngine
}
