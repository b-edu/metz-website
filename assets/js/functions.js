var HamiltonHoursButton = document.getElementById("HamiltonHoursButton");
var BoarHoursButton = document.getElementById("BoarHoursButton");
var HamiltonHours = document.getElementById("HamiltonHours");
var BoarHours = document.getElementById("BoarHours");

function changeHours(what){
    if(what.value == "Ham"){
        HamiltonHours.style.visibility = "visible";
        BoarHours.style.visibility = "hidden";

    }
    else{
        BoarHours.style.visibility = "visible";
        HamiltonHours.style.visibility = "hidden";
        console.log("herer");
    }
}

HamiltonHoursButton.addEventListener("click", function(){ changeHours("Ham");}, false);
BoarHoursButton.addEventListener("click", function(){ changeHours("Boar");}, false);

