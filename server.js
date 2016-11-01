
// require dependencies
var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var port = 8089;
var bodyParser = require('body-parser');

//use ejs and express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes');
app.use('/',router);


//set static files (css and images) location
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function(){
	console.log('app started');
});

