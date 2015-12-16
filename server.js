var express = require('express');
var app = express();
var path = require('path');

// var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function () {
  console.log('Listening on port 3000 :)');
})

app.get('/', function (req, res) {
  res.render('index');
})
