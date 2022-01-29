const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  basePath: '',
  compress: false,
  poweredByHeader: false,
});
