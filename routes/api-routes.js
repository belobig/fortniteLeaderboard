var db = require("../models");
var express = require("express");
var axios = require("axios");
var router = express.Router();


var key = "92bf5651-fef6-494e-a03d-52081c2382e4";


// Routes

// GET route that enables pulling data from database
router.get('/', function (req, res) {
	db.User.findAll().then(function (results) {
		// console.log("Results", results);
		var userObj = {
			users: results
		};
		res.render("index", userObj);
	})
	
});

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
	}).then(function (response) {
		// console.log("Full Response: ", response);
		if (response.data.error) {
			return res.render("index", {
				error: response.data.error
			});
		}
		// console.log(res);

		res.render("index", {
			response: response.data
		});
		// console.log("Response data: ", response.data.stats);
	});
});

// POST Route to add user data to the database
router.post("/leaderboard/save", function (req, res) {
	var user = req.body;
	console.log("\n-------------- req.body", req.body);
	db.User.create({
		epicID: user.user,
		score: user.score,
		matches: user.matches,
		wins: user.wins,
		kills: user.kills
	}).then(function (data) {
		res.redirect("/");
	});
});

module.exports = router;