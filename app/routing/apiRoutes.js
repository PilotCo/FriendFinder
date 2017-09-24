/* Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST route /api/friends. This will be used to handle incoming survey results. 
This route will also be used to handle the compatibility logic.
*/

var friendData = require("../data/friends.js");

module.exports = function(app) {
	//whenever we are on our /api/friends page display our friend data.
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function(req,res) {
		friendData.push(req.body);
	});
};

