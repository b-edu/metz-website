var week1 = document.getElementById("week1");
var week2 = document.getElementById("week2");
var week3 = document.getElementById("week3");
var week4 = document.getElementById("week4");
var week5 = document.getElementById("week5");

var sept = document.getElementById("September");
var oct = document.getElementById("October");
var nov = document.getElementById("November");

sept.onclick = function () {
    var months = document.getElementsByClassName("monthButton");
    for(var i = 0; i < months.length; i++){
        months[i].classList.remove("active");
    }
    sept.classList.add("active");
};
oct.onclick = function () {
    var months = document.getElementsByClassName("monthButton");
    for(var i = 0; i < months.length; i++){
        months[i].classList.remove("active");
    }
    oct.classList.add("active");
};
nov.onclick = function () {
    var months = document.getElementsByClassName("monthButton");
    for(var i = 0; i < months.length; i++){
        months[i].classList.remove("active");
    }
    nov.classList.add("active");
};


week1.onclick = function () {
    var weeks = document.getElementsByClassName("weekButton");
    for(var i = 0; i < weeks.length; i++){
        weeks[i].classList.remove("active");
    }
    week1.classList.add("active");
};
week2.onclick = function () {
    var weeks = document.getElementsByClassName("weekButton");
    for(var i = 0; i < weeks.length; i++){
        weeks[i].classList.remove("active");
    }
    week2.classList.add("active");
};
week3.onclick = function () {
    var weeks = document.getElementsByClassName("weekButton");
    for(var i = 0; i < weeks.length; i++){
        weeks[i].classList.remove("active");
    }
    week3.classList.add("active");
};
week4.onclick = function () {
    var weeks = document.getElementsByClassName("weekButton");
    for(var i = 0; i < weeks.length; i++){
        weeks[i].classList.remove("active");
    }
    week4.classList.add("active");
};
week5.onclick = function () {
    var weeks = document.getElementsByClassName("weekButton");
    for(var i = 0; i < weeks.length; i++){
        weeks[i].classList.remove("active");
    }
    week5.classList.add("active");
};