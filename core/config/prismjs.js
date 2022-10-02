/**
 * Prism configuration.
 * To add more css/js see: https://prismjs.com/
 */
const run = () => {
  const markdownItPrism = require('markdown-it-prism');
  require('prismjs/components/prism-javascript.js');
  require('prismjs/components/prism-bash.js');
  require('prismjs/components/prism-mongodb.js');
  require('prismjs/components/prism-jsx.js');
  require('prismjs/components/prism-tsx.js');

  return markdownItPrism;
};

module.exports = {
  run
}
