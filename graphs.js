max_tic = 20
var y_val = [9, 8, 6, 5, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0]

// Chart 1
const start = document.getElementById('start').getContext('2d');
start_chart = new Chart(start, {
	type: 'bar',
	data: {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		datasets: [{
			minBarLength: 1,
			label: 'Amount of individuals',
			data: y_val,
			backgroundColor: [
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black"
			],
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Before (Generation 1)',
			fontSize: 28,
		},

		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.29,
			}, {
				display: true,
			}],
			yAxes: [{
				ticks: {
					max: max_tic,
					beginAtZero:true
				}
			}]
		}
	}
});

// Chart 2
const end = document.getElementById('end').getContext('2d');
ec = new Chart(end, {
	type: 'bar',
	data: {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		datasets: [{
			minBarLength: 1,
			label: 'Amount of individuals',
			data: [0, 0, 0, 1, 4, 5, 6, 9, 0, 0, 10, 0, 0, 0, 0],
			backgroundColor: [
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black",
				"gray",
				"black"
			],
		}]
	},
	options: {
		title: {
			display: true,
			text: 'After (Generation 21)',
			fontSize: 28,
		},
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.30,
				beginAtZero: true
			}, 
			{
				display: true,
			}],
			yAxes: [{
				ticks: {
					max: max_tic,
					beginAtZero:true
				}
			}]
		}
	}
});