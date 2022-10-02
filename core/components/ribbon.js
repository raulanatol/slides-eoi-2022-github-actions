module.exports = {
  validate: params => params.trim().match(/^ribbon\s+(.*)$/),
  render: function (tokens, idx) {
    const m = tokens[idx].info.trim().match(/^ribbon\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      return `<div class="ribbon-box"></div><div class="ribbon ribbon-${m[1]}">`;
    } else {
      return '</div></div>\n';
    }
  }
};
