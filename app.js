var express = require('express');
var app = express();
var morgan = require('morgan')

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// set up logging middleware
app.use(morgan('combined'))

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// GET '/' page
app.get('/', function(req, res) {
    res.render('index', {
      page: 'Home',
      siteTitle: 'Craft Faith',
      pageDesc: 'Share your God given talents to inspire others.'
    });
});

// GET '/about' page
app.get('/about', function(req, res) {
  res.render('about', {
    page: 'About',
    siteTitle: 'Craft Faith',
    pageDesc: 'Craft Faith is a social sharing site for Christians to share their creative art and inspire others.'
  });
});

//GET '/contact' page
app.get('/contact', function(req, res) {
  res.render('contact', {
    page: 'Contact',
    siteTitle: 'Craft Faith',
    pageDesc: 'Contact Craft Faith. Send us an email or connect with us on social media.'
  });
});

// Set port and console.log
app.listen(3000, function() {
  console.log('Site is running locally at http://localhost:3000');
});
