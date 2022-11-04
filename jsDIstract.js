var products = [ 
 { name: "Grapefruit",  calories: 170,      color: "red",       sold: 8200 },
 { name: "Orange",      calories: 160,      color: "orange",    sold: 12101 },
 { name: "Cola",        calories: 210,      color: "caramel",   sold: 25412 },
 { name: "Diet Cola",   calories: 0,        color: "caramel",   sold: 43922 },
 { name: "Lemon",       calories: 200,      color: "clear",     sold: 14983 },
 { name: "Raspberry",   calories: 180,      color: "pink",      sold: 9427 },
 { name: "Root Beer",   calories: 200,      color: "caramel",   sold: 9909 },
 { name: "Water",       calories: 0,        color: "clear",     sold: 62123 }
               ];

// window.onload = function () {alert("This page is loaded")};




function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else return -1;
}
function compareColorDecrease(colaA, colaB) {
    if (colaA.color < colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else return -1;
}


function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else return -1;
}
function compareCaloriesDecrease(colaA, colaB) {
    if (colaA.calories < colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else return -1;
}

function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else return -1;
}
function compareNameDecrease(colaA, colaB) {
    if (colaA.name < colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else return -1;
}



function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
        ", Calories: " + products[i].calories +
        ", Color: " +products[i].color + 
        ", Sold:" + products[i].sold);
    }
}

// products.sort(compareSold); 
                                            // from LOW to HIGH  
 function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA === colaB) {
        return 0;
    } else return -1;
 }

// products.sort(compareSolfFromBIG);       
                                            // from HIGH to LOW 
  function compareSoldFromBIG(colaA, colaB) {
    if (colaA.sold < colaB.sold) {
        return 1;
    } else if (colaA === colaB) {
        return 0;
    } else return -1;
 }




var secret = "007";

function getSecret() {
 var secret = "008";
 function getValue() {
 return secret;
 }
 return getValue();
}

getSecret();
//
//
var secret = "007";

function getSecret() {
 var secret = "008";
 function getValue() {
 return secret;
 }
 return getValue;
}

var getValueFun = getSecret();
getValueFun();