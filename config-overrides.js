
const path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  //config.resolve.alias["react"] = "rax/lib/compat";
  //config.resolve.alias["react-dom"] = "rax-dom";
  config.resolve.alias['@'] = path.resolve(__dirname, 'src');

  return config;
}