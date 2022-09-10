/**
 * Prism configuration.
 * To add more css/js see: https://prismjs.com/
 */
const run = () => {
  const markdownItPrism = require('markdown-it-prism');
  require('prismjs/components/prism-javascript.js');
  require('prismjs/components/prism-bash.js');

  return markdownItPrism;
};

module.exports = {
  run
}
