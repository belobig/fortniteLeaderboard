// $(document).ready(function () {

var FortniteAPI = require("fortnite-api-node");

var options = {
	key: "92bf5651-fef6-494e-a03d-52081c2382e4",
	platform: "pc"
}

var fortnite = new FortniteAPI(options);



// fortnite.getData(example_player)
// .then(function(result){
//     console.log(result);
// });

// var players = ["belobig", "waffles", "praxiSiphion"];

// fortnite.getPlayers(players)
// .then(function(result){
//     console.log(result);
// });

// module.exports = fortnite;

// var key = "92bf5651-fef6-494e-a03d-52081c2382e4";

// 	function getStats() {
// 		$.ajax({
// 			method: "GET",
// 			headers:  {
// 				'TRN-Api-Key': key,
// 				'Access-Control-Allow-Origin': '*'
// 			},
// 			url: "https://api.fortnitetracker.com/v1/profile/pc/belobig"
// 		}).then(function (response) {
// 			console.log(response);
// 		});
// 	}

// 	getStats();

// });