var db = require("../models");
// var fortnite = require("../public/assets/js/fnImport");
// var form = require("../public/assets/js/formhandler")
var express = require("express");
var axios = require("axios");
var router = express.Router();

// var epic_name = "iwafflesi";
var key = "92bf5651-fef6-494e-a03d-52081c2382e4";


// Routes


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

router.post("/leaderboard/save", function (req, res) {
	// console.log(req.req.params.user);
	var user = req.body;
	console.log("\n-------------- req.body", req.body);
	db.User.create({
		epicID: user.user,
		score: user.score,
		matches: user.matches,
		wins: user.wins,
		// winsRatio: user.winsRatio,
		kills: user.kills,
		// killRank: user.killRank,
		// kdRatio: user.kdRatio,
		// kdRank: user.kdRank,
		// kpm: user.kpm,
		// kpmRank: user.kpmRank,
		
		
		// scoreRank: user.scoreRank,
		// scorePerMatch: user.scorePerMatch,
		// trnRating: user.trnRating
	}).then(function (data) {
		res.redirect("/");
		// console.log("Res: ", res.res);

	});
});

module.exports = router;