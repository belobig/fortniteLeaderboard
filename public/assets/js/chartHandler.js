$(document).ready(function () {
	$('.tooltipped').tooltip();
	var p2kills = $("#p2kills").text();
	var p10kills = $("#p10kills").text();
	var p9kills = $("#p9kills").text();
	var nickname = $("#nickname").text();


	var p2killsPercentile = $("#p2killsPercentile").text();
	if (!p2killsPercentile) {
		p2killsPercentile = 100;
	}
	var p10killsPercentile = $("#p10killsPercentile").text();
	if (!p10killsPercentile) {
		p10killsPercentile = 100;
	}
	var p9killsPercentile = $("#p9killsPercentile").text();
	if (!p9killsPercentile) {
		p9killsPercentile = 100;
	}

	var p2kdPercentile = $("#p2kdPercentile").text();
	if (!p2kdPercentile) {
		p2kdPercentile = 100;
	}
	var p10kdPercentile = $("#p10kdPercentile").text();
	if (!p10kdPercentile) {
		p10kdPercentile = 100;
	}
	var p9kdPercentile = $("#p9kdPercentile").text();
	if (!p9kdPercentile) {
		p9kdPercentile = 100;
	}

	var p2kpgPercentile = $("#p2kpgPercentile").text();
	if (!p2kpgPercentile) {
		p2kpgPercentile = 100;
	}
	var p10kpgPercentile = $("#p10kpgPercentile").text();
	if (!p10kpgPercentile) {
		p10kpgPercentile = 100;
	}
	var p9kpgPercentile = $("#p9kpgPercentile").text();
	if (!p9kpgPercentile) {
		p9kpgPercentile = 100;
	}


	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Solo", "Duo", "Squad", "Green", "Purple", "Orange"],
			datasets: [{
				label: 'Kills',
				data: [p2kills, p10kills, p9kills, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 206, 86, 0.5)',
					'rgba(75, 192, 192, 0.5)',
					'rgba(153, 102, 255, 0.5)',
					'rgba(255, 159, 64, 0.5)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});

	document.getElementById("p2KillsFill").style.width = 100 - p2killsPercentile + "%";
	$("#p2KillsBar").attr("data-tooltip", "Top " + p2killsPercentile + "%, " + (100 - p2killsPercentile) + "th perecentile");

	document.getElementById("p10KillsFill").style.width = 100 - p10killsPercentile + "%";
	$("#p10KillsBar").attr("data-tooltip", "Top " + p10killsPercentile + "%, " + (100 - p10killsPercentile) + "th perecentile");

	document.getElementById("p9KillsFill").style.width = 100 - p9killsPercentile + "%";
	$("#p9KillsBar").attr("data-tooltip", "Top " + p9killsPercentile + "%, " + (100 - p9killsPercentile) + "th perecentile");


	document.getElementById("p2kdFill").style.width = 100 - p2kdPercentile + "%";
	$("#p2KDBar").attr("data-tooltip", "Top " + p2kdPercentile + "%, " + (100 - p2kdPercentile) + "th perecentile");

	document.getElementById("p10kdFill").style.width = 100 - p10kdPercentile + "%";
	$("#p10KDBar").attr("data-tooltip", "Top " + p10kdPercentile + "%, " + (100 - p10kdPercentile) + "th perecentile");

	document.getElementById("p9kdFill").style.width = 100 - p9kdPercentile + "%";
	$("#p9KDBar").attr("data-tooltip", "Top " + p9kdPercentile + "%, " + (100 - p9kdPercentile) + "th perecentile");


	document.getElementById("p2kpgFill").style.width = 100 - p2kpgPercentile + "%";
	$("#p2kpgBar").attr("data-tooltip", "Top " + p2kpgPercentile + "%, " + (100 - p2kpgPercentile) + "th perecentile");

	document.getElementById("p10kpgFill").style.width = 100 - p10kpgPercentile + "%";
	$("#p10kpgBar").attr("data-tooltip", "Top " + p10kpgPercentile + "%, " + (100 - p10kpgPercentile) + "th perecentile");

	document.getElementById("p9kpgFill").style.width = 100 - p9kpgPercentile + "%";
	$("#p9kpgBar").attr("data-tooltip", "Top " + p9kpgPercentile + "%, " + (100 - p9kpgPercentile) + "th perecentile");

});