
// var db = require("../models");
// var express = require("express");
// var htmlrouter = express.Router();



	// // GET route
	// router.get("/", (res, req)=> {
		
	// });
	//GET route
// htmlrouter.get("/", function (req, res) {
// 	db.User.findAll().then(function (results) {
// 		console.log("Got here!");
// 		var userObj = {
// 			users: results
// 		};
// 		res.render("index", userObj);

// 		// res.redirect("/");
// 		// console.log(results);
// 	});
// });
// $(document).ready((e)=>{
// 	$.ajax({
// 		url: "../config/config.json",
// 		data: {"config.json": "development"},
// 		method: "GET"
// 	}).then((response)=>{
// 		var dbDiv = $("#db");
// 	console.log(response);
	
// 	dbDiv.append(response.epicID);
	
// 	});

// });
	
	// POST route
// htmlrouter.post("/leaderboard/:user", function (res, req) {
// 	var user = req.body;
// 	console.log(user);
	
// 	db.User.create({
// 		epicID: user.epicID
		// kills: user.kills,
		// killRank: user.killRank,
		// kdRatio: user.kdRatio,
		// kdRank: user.kdRank,
		// kpm: user.kpm,
		// kpmRank: user.kpmRank,
		// matches: user.matches,
		// score: user.score,
		// scoreRank: user.scoreRank,
		// scorePerMatch: user.scorePerMatch,
		// trnRating: user.trnRating,
// 	}).then(function(data){
// 		res.redirect("/");
// 	});
// });
 
// module.exports = htmlrouter;

