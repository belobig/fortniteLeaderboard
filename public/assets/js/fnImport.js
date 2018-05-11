$(document).ready(function () {
var key = "92bf5651-fef6-494e-a03d-52081c2382e4"
	function getStats() {
		$.ajax({
			method: "GET",
			auth: key,
			url: "https://api.fortnitetracker.com/v1/profile/pc/belobig"
		}).then(function (response) {
			console.log(response);
		});
	}

	getStats();

});