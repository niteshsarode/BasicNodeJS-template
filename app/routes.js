//require express
var express = require('express');
var path = require('path');
//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route for homepage
router.get('/', function(req, res) {
	res.render('pages/index');
});

//route for about page
router.get('/about', function(req, res){
	var users = [
	{name: "Abc", email: "abc@xyz.com"},
	{name: "Jack", email: "jack@xyz.com"},
	{name: "Williams", email: "williams@xyz.com"},
	{name: "Kevin", email: "kevin@xyz.com"}
	];

	res.render('pages/about', {users: users});
});

//route for contact page
router.get('/contact', function(req, res){
	res.render('pages/contact');
});

router.post('/contact', function(req, res){
	res.send("Thanks for contacting us, " + req.body.name + "! We'll respond shortly.");
});