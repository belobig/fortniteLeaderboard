$(document).ready(function () {
	setTimeout(() => {
		var p2kills = $("#p2kills").text();
		var p10kills = $("#p10kills").text();
		var p9kills = $("#p9kills").text();
		var nickname = $("#nickname").text();


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
	}, 1000);



});