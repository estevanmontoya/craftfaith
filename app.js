var express = require('express');
var app = express();

let siteName = 'Craft Faith';

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// GET '/' initial response
app.get('/', function(req, res) {
    res.render('index', {
      title: "Craft Faith"
    });
})

// Set port and console.log
app.listen(3000, function() {
  console.log(`${siteName} is running locally at http://localhost:3000`);
});