var passengers = [{name:"Sanya Ermolaev", paid: true, ticket: "firstclass"},
                  {name:"Pasha Snake", paid: true, ticket: "coach"},
                  {name:"Nastya Stepanova", paid: true, ticket: "improved 2nd"},
                  {name:"Kamilla Niggersha", paid: false, ticket: "coach"}];
var blackList = ["Doctor Evil","Valet228","Kamilla Niggersha"];

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}



function serveCustomer(passenger) {
var getDrinkOrderFunction = createDrinkOrder(passenger);
getDrinkOrderFunction();
// offfer dinner
getDrinkOrderFunction()
//offer a film
getDrinkOrderFunction()
}


function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or a wine?");
        }
    } else if (passenger.ticket === "improved 2nd") {
        orderFunction = function() {
            alert("Would you like some lemonade, water or wine?")
        }
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water?");
        }
    }
    return orderFunction;
}




function onNoFlyList(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].name) {
            for (var j = 0; j < blackList.length; j++) {
            if (passengers[i].name == blackList[j]) {
                console.log(passengers[i].name + " is on the BLACKLIST");
                return false;
            } 
        }
    }
}

return true;
}


function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].paid) {
            console.log(passengers[i].name + " - paid for ticket. All good.");
        }
        else {
            console.log(passengers[i].name + " - HASN'T PAID FOR THE TICKET!!!");
            return console.log(passangers[i] - "PIDOR BEZ BILETA");
        }
    }

}
checkPaid();

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}





var allCanFly = processPassengers(passengers, checkPaid);
// if (allCanFly) {
//     console.log("All good. There's noone on the Black List");
// } else {
//     console.log("The plane can't take off. There's somebody on Black List");
// }






