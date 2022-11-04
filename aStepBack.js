var passengers = [{name:"Sanya Ermolaev", paid: true, ticket: "firstclass"},
                  {name:"Pasha Snake", paid: true, ticket: "coach"},
                  {name:"Nastya Stepanova", paid: true, ticket: "improved 2nd"},
                  {name:"Kamilla Niggersha", paid: true, ticket: "coach"}];

var blackList = ["Doctor Evil","Valet228","Kamilla "];


function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].paid) {
            console.log(passengers[i].name + " - paid for ticket. All good.");
        }
        else {
            BLACKLISTEDPERSON = passengers[i].name;
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log(passengers[i].name + " - PIDOR BEZ BILETA");
            return false;
        }
    }
    console.log("...........................TICKETS_CHECKED........................")
    return true;
}
// checkPaid(passengers);


function onNoFlyList(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].name) {
            for (var j = 0; j < blackList.length; j++) {
            if (passengers[i].name == blackList[j]) {
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
            console.log("..........................................................................");
                console.log(passengers[i].name + " is on the BLACKLIST");
                BLACKLISTEDPERSON = passengers[i].name;
                return false;
                } 
            }
        }
    }
    console.log("...............................NO BLACKLISTED........................")
    return true;
}

// onNoFlyList(passengers);

function printPassengersList (passengers) {
    for (var i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name + " - passenger №" + i);
    }
    console.log("The list of passengers is over. Total number of passengers is - " + i)
    return true;
}

 // printPassengersList(passengers);

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers)) {
            return true;
        } else {
    console.log(BLACKLISTEDPERSON + " - this person is either on Black list or has no ticket. CHECKING PROGRAM STOP!!!!");
    return false;
        }
    }
}

function globalCheck () {
var check1 = processPassengers(passengers, printPassengersList);
var check2 = processPassengers(passengers, onNoFlyList);
var check3 = processPassengers(passengers, checkPaid);
    if (check1) {
    return true;
    } else return false; 
    if (check2) {
    return true;
    } else return false; 
    if (check3) {
    return true;
    } else return false;    
}

// globalCheck ();


function serveCustomers(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();

}

function createDrinkOrder(passenger) {
    var orderFunction;
     if (passenger.ticket === "firstclass") {
        orderFunction = function () {
        window.alert("Would you like a cocktail or wine? - 1st class");
        }
    } else if (passenger.ticket === "improved 2nd") {
        orderFunction = function () {
        window.alert("Maybe you'd like lemonade...or whisky? - 2nd class")
        }
    } 
    else {
        orderFunction = function () {
        window.alert("Your choice is cola or water? - 3rd class")
        }
    }
    return orderFunction;
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomers(passengers[i]);
    }
}
// servePassengers(passengers);



function createDinnerOrder(passenger) {
    var dinnerFunction; 
    if (passenger.ticket === "firstclass") {
        dinnerFunction = function() {
            window.alert("Would you like chicken or pasta? - 1st class");
        }
    } else if (passenger.ticket === "improved 2nd") {
        dinnerFunction = function () {
            window.alert("What about appetizers or you'd like a cheese plate? - 2nd class");
            }
    } else {
        dinnerFunction = function () {
            window.alert("We can offer you some nuts or french-fries. - 3rd class")
        }
    }
        return dinnerFunction;
};
