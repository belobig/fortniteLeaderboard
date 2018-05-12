var db = require("../models");
// var fortnite = require("../public/assets/js/fnImport");
var express = require("express");
var axios = require("axios");
var router = express.Router();

var example_player = "belobig";
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

// Another GET route for data from Fortnite Tracker API
router.get("/", function (req, res) {
	console.log("Leaderboard route");
	axios({
		method: "get",
		url: "https://api.fortnitetracker.com/v1/profile/pc/belobig",
		headers: {
			'TRN-Api-Key': key
		}
	}).then(function(response) {
		res.render("index", {stats: response.data.stats});
		console.log("Response: ", response.data.stats);
	});
});

// POST route
router.post("/", function (res, req) {
	var user = req.body;
	db.User.create({
		nickname: user.nickname,
		awesomeness_level: user.awesomeness_level,
		age: user.age,
		class: user.class
	}).then(function (dbUser) {
		res.json(dbUser);
		console.log(dbUser);
	});
});
module.exports = router;