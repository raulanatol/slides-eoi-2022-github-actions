const {Marp} = require('@marp-team/marp-core');
const markdownItInclude = require('markdown-it-include');
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');
const {linksApply} = require("./lib/rules/links");

const canonicalUrl = process.env.URL || undefined
const ogImage = (() => {
  if (canonicalUrl) return `${canonicalUrl}/og-image.jpg`
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}/og-image.jpg`

  return undefined
})();

const loadEngine = (options) => {
  const marp = new Marp({
    ...options,
    emoji: {
      shortcode: false,
      unicode: false
    }
  });

  marp.customDirectives.local.layout = require('./lib/directives/layout');

  marp
    .use(markdownItInclude)
    .use(markdownItAttrs)
    .use(require('./core/config/prismjs').run())
    .use(markdownItContainer, 'slideLink', require('./lib/components/slideLink'))
    .use(markdownItContainer, 'group', require('./lib/components/group'));

  linksApply(marp.markdown);

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
