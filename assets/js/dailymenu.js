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