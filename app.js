var express = require('express');
var app = express();

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// GET '/' page
app.get('/', function(req, res) {
    res.render('index', {
      title: 'Craft Faith'
    });
});

// GET '/about' page
app.get('/about', function(req, res) {
  res.render('about', {
    title: 'Craft Faith'
  });
});

// Set port and console.log
app.listen(3000, function() {
  console.log('Site is running locally at http://localhost:3000');
});