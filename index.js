require('dotenv').config();
var express = require('express');
var path = require('path');
var https = require('https');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var fetch = require('node-fetch');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = process.env.PORT || 3000;
var key = process.env.EVENTBRITE_KEY;
var publicPath = path.resolve(__dirname, 'dist/');


var eventbrite = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=Oakland&venue.region=CA&categories=103&token=' + key;


const eData;
const value = (val1) => {
  return val
}

const getData = () => {
  return new Promise((resolve, reject) => {
    https.get(eventbrite, (res) => {
      res.on('data', (d) => {
        resolve(d);       
      });
    })
    https.request.end()
    .on('error', (e) => {
      console.error(e);
    });

  })
  
}



  

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use((req, res, next) => {
//   fetch(eventbrite)
//   .then(data => {
//     console.log(data.toString())
    
//   })
//   res.end();
// })
const testObj = { test: 'testing 123'}
app.use('/events', function(req, res, next) {
  console.log('hello');
  console.log(eData);
  fetch(eventbrite)
  .then(function(res) {
    return res.json();
  }).then(function(json) {
    res.send(json);
  });
  // res.end();  // next('hello');
  
})

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

// app.get('/', function (req, res) {
//   res.sendFile(publicPath + '/index.html', { root: __dirname });
// });

app.get('/events', function (err, req, res, next) {
  // 

  res.send('hello')

})



app.listen(port, function () {
  console.log(key)

  console.log('Server running on port ' + port);
});

