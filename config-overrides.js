const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {};
  config.resolve.fallback.url = path.resolve(__dirname, '/node_modules/url/url.js');
  return config;
};
