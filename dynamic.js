storygraph = document.getElementById('story_graph').getContext('2d');
y_val = [9, 8, 6, 5, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0]
x = []
y = []
end_chart = new Chart(storygraph, {
	type: 'bar',
	data: {
		labels: x,
		datasets: [{
			minBarLength: 1,
			label: 'Amount of individuals',
			data: y,
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
		scales: {
			xAxes: [{
				display: true,
				barPercentage: 1.30,
				beginAtZero: true,

			}, 
			{
				display: true,
			}],
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});
function arr_sum(arr){
	try{
		return arr.reduce((partialSum, a) => partialSum + a, 0);
	}catch(err){
		return 0
	}
}
const storyline = (text, x_data, y_data, type="add") => {
	if (type === "add"){
		x = x.concat(x_data)
		y = y_val = y.concat(y_data)
	}else if (type == "replace") {
		x = x_data;
		y = y_val = y_data;
	} /*else if (type == "reproduce") {
		y_data = y_data.map((x)=>x * 2);
		y_val = y_data;
		y = y_val
	}*/
	if (!type == "nothing") {
		y_val = y_data.map((x) => x);
	}
	end_chart.destroy()
	end_chart = new Chart(storygraph, {
		type: 'bar',
		data: {
			labels: x,
			datasets: [{
				minBarLength: 1,
				label: 'Amount of individuals',
				data: y,
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
				text: `E. Coli population (${arr_sum(y)})`,
				fontSize: 28,
			},
			animation: {
        		duration: 0, // general animation time
    		},
			scales: {
				xAxes: [{
					display: false,
					barPercentage: 1.25,
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
	end_chart.update()
	document.getElementById("chatbox__content").innerHTML += `<div class="story_el">${text + "<br><hr>"}</div>`
	document.getElementById("chatbox__content").scrollTo(0, document.getElementById("chatbox__content").scrollHeight, {behavior: 'smooth'})
}
function cyv(yy, component, change) {
	y_val = yy.slice()
	y_val[component - 1] = change + y_val[component - 1];
	return y_val;
}
function reproduce(y){
	y_val = y.slice().map((x)=> x * 2);
	return y_val
}
const x_val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
async function view_story(){
	seq = [
		["Welcome to the story of the E. Coli", x_val, y_val, "replace"],
		["E. Coli with poison level 3 died.", x_val, cyv(y_val, 3, -1), "replace"],
		["E. Coli has reproduced, doubling the population!", x_val, reproduce(y_val), "replace"],
		["Human has noticed the increasing amount of E-Coli and is now taking antibiotics.", x_val, y_val, "nothing"],
		["2 E. Coli with poison level 1 died along with another E-Coli with poison level 2.", x_val, cyv(cyv(y_val, 2, -1), 1, -2), "replace"],
		["8 E. Coli with poison level 1 died. <br> 5 E. Coli with poison level 2 died. <br> 3 E. Coli with poison level 3 died. <br> 2 E. Coli with poison level 4 died. <br> 1 E. Coli with poison level 5 died.", x_val, cyv(cyv(cyv(cyv(cyv(y_val, 5, -1), 4, -2), 3, -3), 2, -5), 1, -8), "replace"],
		["The E. Coli reproduce.<br> An E. Coli with poison level 8 has a child that has a mutation of poison level 11.", x_val, cyv(cyv(reproduce(y_val), 11, 1), 8, -1), "replace"],
		[
			"Human takes more antibiotics. <br>14 E. Coli with poison level 1 die from this surplus amount of antibiotics.<br>14 E. Coli with poison level 2 also die for the same reason.<br>10 E. Coli with poison level 3 also die.<br>11 E. Coli with poison level 4 die.<br>5 E. Coli with poison level 5 die.", 
			x_val, 
			cyv(cyv(cyv(cyv(cyv(y_val, 5, -5), 3, -10), 4, -11), 2, -14), 1, -14),
			"replace"
		],
		["2 E. Coli with poison level 1 die.<br>4 E. Coli with poison level 2 die.<br>2 E. Coli with poison level 3 die.",
			x_val,
			cyv(cyv(cyv(y_val, 3, -2), 2, -4), 1, -2),
			"replace"
		],
		["The E. Coli reproduce once again.", 
		 	x_val, 
		 	reproduce(y_val), 
		 	"replace"
		],
		["3 E. Coli with poison level 2 die.<br>2 E. Coli with poison level 3 die.<br>6 E. Coli with poison level 4 die.<br>5 E. Coli with poison level 5 die.<br>8 E. Coli with poison level 6 die.<br>1 E. Coli with poison level 7 dies.",
			x_val,
			cyv(cyv(cyv(cyv(cyv(cyv(y_val, 7, -1), 6, -8), 5, -5), 4, -6), 3, -2), 2, -3),
			"replace"
		],
		["1 E. Coli with poison level 2 dies.<br>2 E. Coli with poison level 3 die.<br>2 E. Coli with poison level 4 die.<br>1 E. Coli with poison level 5 die.<br>2 E. Coli with poison level 6 die.",
			x_val,
			cyv(cyv(cyv(cyv(cyv(y_val, 6, -2), 5, -1), 4, -2), 3, -2), 2, -1),
			"replace"
		],
		["The E. Coli reproduce.",
			x_val,
			reproduce(y_val),
			"replace"
		],
		["2 E. Coli with poison level 4 die.<br>3 E. Coli with poison level 5 die.<br>4 E. Coli with poison level 6 die.<br>5 E. Coli with poison level 7 die.<br>6 E. Coli with poison level 8 die.",
			x_val,
			cyv(cyv(cyv(cyv(cyv(y_val, 8, -6), 7, -5), 6, -4), 5, -3), 4, -2),
			"replace"
		],
		["1 E. Coli with poison level 4 dies.<br>1 E. Coli with poison level 5 dies.<br>3 E. Coli with poison level 6 die.<br>2 E. Coli with poison level 7 die.<br>1 E. Coli with poison level 8 dies.",
			x_val,
			cyv(cyv(cyv(cyv(cyv(y_val, 8, -1), 7, -2), 6, -3), 5, 1), 4, -1),
			"replace"
		],
		["The E. Coli reproduce, but there is a mutation and a child of a E. Coli with poison level 4 has poison level 3.",
			x_val,
			cyv(cyv(reproduce(y_val), 3, 1), 4, -1),
			"replace"
		]
	]
	for (let i = 0; i < seq.length; i++){
		event = seq[i]
		//console.log(i, event)
		storyline(event[0], event[1], event[2], event[3])
		await new Promise((resolve, reject) => {
			document.getElementById("next_event").onclick = function(){
				resolve("Button clicked!")
			}
		});

	}
}
view_story()