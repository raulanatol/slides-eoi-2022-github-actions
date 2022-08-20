const {Marp} = require('@marp-team/marp-core');
const markdownItInclude = require('markdown-it-include');
const canonicalUrl = process.env.URL || undefined
const ogImage = (() => {
  if (canonicalUrl) return `${canonicalUrl}/og-image.jpg`
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}/og-image.jpg`

  return undefined
})()

module.exports = {
  allowLocalFiles: true,
  ogImage,
  html: true,
  themeSet: 'themes',
  url: canonicalUrl,
  engine: opts => new Marp(opts).use(markdownItInclude)
}
