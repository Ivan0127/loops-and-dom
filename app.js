const menuItems =["Patty Melt" , " Monterey Melt", " Sweet and Spicy Bacon", " Triple Meat Whataburger "];
const sides =["Fries ", "Onion Rings ", "Nuggets"]
const drinks =["soda ","shake ","water"]
//for loop
let text = "";
for (let i = 0; i < menuItems.length; i++) {
  text += menuItems[i] + "<br>";
}

//another for loop
let i = 0;
let text2 = "";
for(name of sides) { 
    console.log(sides);

}


window.alert(menuItems)
//setting for variable value
function chBackcolor(color) {
  document.body.style.background = color;
}

