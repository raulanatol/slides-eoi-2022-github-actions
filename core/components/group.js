module.exports = {
  validate: params => params.trim().match(/^group\s+(.*)$/),
  render: function (tokens, idx) {
    const m = tokens[idx].info.trim().match(/^group\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      return `<div class="${m[1]}">`;
    } else {
      return '</div>\n';
    }
  }
};
