
module.exports = function (app){

	// GET route
	router.get("/", (res, req)=> {
		
	});
	
	// POST route
router.post("/", function (res, req) {
	var user = req.body;
	db.User.create({
		epicID: user.epicID,
		kills: user.kills,
		killRank: user.killRank,
		kdRatio: user.kdRatio,
		kdRank: user.kdRank,
		kpm: user.kpm,
		kpmRank: user.kpmRank,
		matches: user.matches,
		score: user.score,
		scoreRank: user.scoreRank,
		scorePerMatch: user.scorePerMatch,
		trnRating: user.trnRating,
	}).then(function (dbUser) {
		res.json(dbUser);
		console.log(dbUser);
	});
});
 
}

