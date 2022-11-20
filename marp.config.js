const {Marp} = require('@marp-team/marp-core');
const markdownItInclude = require('markdown-it-include');
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');
const {linksApply} = require("./core/rules/links");

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

  marp.customDirectives.local.layout = require('./core/directives/layout');

  marp
    .use(markdownItInclude)
    .use(markdownItAttrs)
    .use(require('./core/config/prismjs').run())
    .use(markdownItContainer, 'slideLink', require('./core/components/slideLink'))
    .use(markdownItContainer, 'group', require('./core/components/group'))
    .use(markdownItContainer, 'ribbon', require('./core/components/ribbon'))
  ;

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
