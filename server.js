var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var methodOverride = require('method-override');

//set up the express app
var app = express();

var PORT = 3500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('app'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(process.env.PORT || PORT, function() {
	console.log("App listening on PORT: " + PORT);
}); 