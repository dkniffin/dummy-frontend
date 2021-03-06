var webpack = require('webpack');
var config = require('./webpack.config.base');

config.entry.unshift('webpack/hot/only-dev-server');
config.entry.unshift('webpack-dev-server/client?http://localhost:8080');

config.devServer = {
  hot: true,
  inline: true,
  proxy: {
    '/api/*': {
      target: 'http://dummybackend_api_1:3000'
    }
  }
};

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

module.exports = config;
