var db = require("../models");
// var fortnite = require("../public/assets/js/fnImport");
// var form = require("../public/assets/js/formhandler")
var express = require("express");
var axios = require("axios");
var router = express.Router();

// var epic_name = "iwafflesi";
var key = "92bf5651-fef6-494e-a03d-52081c2382e4";


// Routes
//GET route
// router.get("/", function (req, res) {
// 	db.User.findAll().then(function (results) {
// 		console.log("Got here!");
// 		var userObj = {
// 			users: results
// 		};
// 		res.render("index", userObj);

// 		// res.json(results);
// 		// console.log(results);
// 	});
// });

/**
 * DEMO
 */

 router.get('/', function(req, res) {
	 res.render("index");
 })

// Another GET route for data from Fortnite Tracker API
// /api/character_data
router.post("/apiUserName", function (req, res) {
	// console.log("Leaderboard route");
	// console.log(req);
	// console.log(req.params);
	// console.log(req.body);
	axios({
		method: "get",
		url: "https://api.fortnitetracker.com/v1/profile/" + req.body.platform + "/" + req.body.epic_name,
		headers: {
			'TRN-Api-Key': key
		}
	}).then(function(response) {
		// console.log("Full Response: ", response);
		if(response.data.error) {
			return res.render("index", {error: response.data.error});
		}
		res.render("index", {response: response.data});
		console.log("Response data: ", response.data.stats);
	});
});

module.exports = router;