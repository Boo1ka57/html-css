var cookies = {
 instructions: "Preheat oven to 350...",
 bake: function(time) {
 console.log("Baking the cookies.");
 setTimeout(done, time);
 }
};

window.onload = function () {
 var button = document.getElementById("bake");
 button.onclick = handleButton;
}

function handleButton() {
 console.log("Time to bake the cookies.");
 cookies.bake(2500);
}

function done() {
 alert("Cookies are ready, take them out to cool.");
 console.log("Cooling the cookies.");
 setTimeout(function() {
 alert("Cookies are cool, time to eat!");
 }, 1000);
}




// administer(patient, function () {
//  if (dosage > 0) {
//  inject(dosage);
//  }
// }, time);


function makePassword(password) {
 return function guess(passwordGuess) {
 return (passwordGuess === password);
 };
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));






// function makeCounter() {
//     var count = 0;

//     function counter() {
//         count = count + 1;
//         return count;
//     }
//     return counter;
// }

// var doCount = makeCounter();



function multiN(n) {
    return function multiply(num) {
        return num*n;
    }
};
var theNum = multiN(50);
theNum(3);




function makeCounter() {
 var count = 0;
    return {
        increment: function() {
        count++;
        return count;
        }
    }
};
var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());



// function makeTimer(doneMessage, n) {
//  setTimeout(function() {
//  alert(doneMessage);
//  }, n)
// };
// makeTimer("Cookies are done!", 1000);



// function handler() {
 // alert(doneMessage);
// }
function makeTimer(doneMessage, n) {
 setTimeout(handler, n);
}
makeTimer("Cookies are done!", 1000);



function setTimer(doneMessage, n) {
 setTimeout(function() {
 alert(doneMessage);
 }, n);
 doneMessage = "OUCH!";
}
setTimer("Cookies are done!", 1000);

