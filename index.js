var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = process.env.PORT || 3000;
var publicPath = path.resolve(__dirname, 'dist/');


app.use(express.static(publicPath));

if (!isProduction) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/dist',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));
   
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}


app.get('/*', function (req, res) {
  res.sendFile(publicPath + '/index.html', { root: __dirname });
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

