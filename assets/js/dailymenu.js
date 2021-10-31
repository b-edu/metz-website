/*var MenuOption = {
    name : "",
    picture : "",
    description : "",

    MenuOption : function(name, picture, description){
        this.name = name;
        this.picture = picture;
        this.description = description;
    }
}*/
var openButton = document.getElementById("OpenButton");
var closeButton = document.getElementById("CloseButton");
var overlay = document.getElementById("overlay");
var saveButton = document.getElementById("SaveSelectedPreferencesButton");

var BreakfastButton = document.getElementById("BreakfastButton");
var LunchButton = document.getElementById("LunchButton");
var DinnerButton = document.getElementById("DinnerButton");

var vegetarian = document.getElementById("vegetarian");
var vegan = document.getElementById("vegan");
var halal = document.getElementById("halal");
var kosher = document.getElementById("kosher");
var gluten = document.getElementById("gluten-free");

BreakfastButton.onclick = function () {
    var breakfastItems = document.getElementsByClassName("Breakfast");
    var lunchItems = document.getElementsByClassName("Lunch");
    var dinnerItems = document.getElementsByClassName("Dinner");
    for(var i = 0; i < breakfastItems.length; i++){
        breakfastItems[i].classList.add("active");
    }
    for(var i = 0; i < lunchItems.length; i++){
        lunchItems[i].classList.remove("active");
    }
    for(var i = 0; i < dinnerItems.length; i++){
        dinnerItems[i].classList.remove("active");
    }
};
LunchButton.onclick = function () {
    var breakfastItems = document.getElementsByClassName("Breakfast");
    var lunchItems = document.getElementsByClassName("Lunch");
    var dinnerItems = document.getElementsByClassName("Dinner");
    for(var i = 0; i < breakfastItems.length; i++){
        breakfastItems[i].classList.remove("active");
    }
    for(var i = 0; i < lunchItems.length; i++){
        lunchItems[i].classList.add("active");
    }
    for(var i = 0; i < dinnerItems.length; i++){
        dinnerItems[i].classList.remove("active");
    }
};




DinnerButton.onclick = function () {
    var breakfastItems = document.getElementsByClassName("Breakfast");
    var lunchItems = document.getElementsByClassName("Lunch");
    var dinnerItems = document.getElementsByClassName("Dinner");
    for(var i = 0; i < breakfastItems.length; i++){
        breakfastItems[i].classList.remove("active");
    }
    for(var i = 0; i < lunchItems.length; i++){
        lunchItems[i].classList.remove("active");
    }
    for(var i = 0; i < dinnerItems.length; i++){
        dinnerItems[i].classList.add("active");
    }
};


vegetarian.addEventListener('clcik', () => {
    var option = document.getElementById("vegetarian");
    selected(option);
})

vegetarian.onclick = function () {selected(vegetarian)};
vegan.onclick = function () {selected(vegan)};
kosher.onclick = function () {selected(kosher)};
halal.onclick = function () {selected(halal)};
gluten.onclick = function () {selected(gluten)};

function selected(option){
    
    option.classList.toggle("active");
}

saveButton.addEventListener('click', () => {
    alert("Preferences saved!");
})
openButton.addEventListener('click', () => {
    var menu = document.getElementById("DietSelectionMenu");
    openMenu(menu);
})
closeButton.addEventListener('click', () => {
    var menu = document.getElementById("DietSelectionMenu");
    closeMenu(menu);
})
function openMenu(menu){
    if (menu == null){
        return;
    }
    menu.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu(menu){
    if (menu == null){
        return;
    }
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

function MenuOption (name, desc){
    this.name = name;
    //this.img = img;
    this.desc = desc;
}

var MenuOptionsNames = ["French Fries", "Cookies", "Belgian Wuffles", "Cheeseburger"]
//var MenuOptionsImages = ["assets\img\image_from_ios.jpg", "assets\img\image_from_ios (1).jpg", "assets\img\image_from_ios (2).jpg", "assets\img\image_from_ios (3).jpg"]
//console.log(MenuOptionsImages[1]);
for(var i = 1; i <= MenuOptionsNames.length; i++){
    var newMenuOption = new MenuOption(MenuOptionsNames[i-1], "");
    
    var option = document.getElementById("MenuOption" + i);
    
    option.children[1].innerHTML = newMenuOption.name;
    
    
}