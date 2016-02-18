var rides;
var month;


function rideCalc(){
	rides = document.getElementById("rides").value;
	month = rides * 30
	alert("You have used the subway approximately" + month +
		"times per month");
		rightRide();
}

function rightRide(){
	if(month>48) {
	alert("You should get a monthly card");
	} else {
		alert("You shouldn't get the monthly card and just pay $2.75 per ride");
	}
}