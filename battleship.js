var view = {

displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
    },

displayHit: function (location) {
    var getSquare = document.getElementById(location);
    getSquare.setAttribute("class", "hit");
    },

displayMiss: function (location) {
    var getSquare = document.getElementById(location);
    getSquare.setAttribute("class", "miss");
    }
};



var model = {
             boardSize:7,
             numShips:3,
             shipLength:3,
             shipsSunk:0,
             ships: [{locations: ["0","0","0"], hits: ["","",""]},
                     {locations: ["0","0","0"], hits: ["","",""]},
                     {locations: ["0","0","0"], hits: ["","",""]}],

             fire: function(guess) {
                for (var i = 0; i < this.numShips; i++) {
                    var ship = this.ships[i];
                    var index = ship.locations.indexOf(guess);
                    if (index >= 0) {
                        ship.hits[index] = "hit";
                        view.displayHit(guess);
                        view.displayMessage("THAT'S A HIT!");
                        if (this.isSunk(ship)){
                            this.shipsSunk++;
                        }
                        return true;
                        }
                    }
                    view.displayMiss(guess);
                    view.displayMessage("Unfortunately, that's a miss...");
                     return false;
                    },

             isSunk: function(ship) {
                 for (var i = 0; i < this.shipLength; i++) {
                    if (ship.hits[i] !== "hit") {
                        return false;
                            }
                 }
                return true;
             },

             generateShipLocations : function () {
                var locations;
                for (var i = 0; i < this.numShips; i++) {
                    do {
                        locations = this.generateShip();
                     } while (this.collision(locations));
                     this.ships[i].locations = locations;
                     
                }
             },

             generateShip: function () {
                var direction = Math.floor(Math.random() * 2);
                var row, col;

                if (direction === 1){
                row = Math.floor(Math.random() * this.boardSize);
                col = Math.floor(Math.random()* (this.boardSize - this.shipLength));
                } else {
                row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
                col = Math.floor(Math.random()* this.boardSize);
                }
         

                var newShipLocations = [];
                for (var i = 0; i < this.shipLength; i++){
                if (direction === 1) {
                    newShipLocations.push(row + "" + (col + i));
                } else {
                    newShipLocations.push((row + i) + "" + col);    
                }
             }
             return newShipLocations;
         },

         collision: function (locations) { 
            for (var i = 0; i < this.numShips; i++){
                var ship = model.ships[i];
                for (var j = 0; j < locations.length; j++){
                    if (ship.locations.indexOf(locations[j]) >= 0) {
                        return true;
                    }
                }
            }
            return false;
         }


};
    function parseGuess(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            window.alert("OPSIE! Please enter 1 letter and 1 number!!");
        } else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize || 
                column < 0 || column >= model.boardSize) {
                alert ("OOps, that's off the board!");
            } else return row + column;
        } return null;
    }
    

var controller = {
                  guesses: 0,

                  processGuess: function(guess) {
                    var location = parseGuess(guess);
                    if (location) {
                        this.guesses++;
                        var hit = model.fire(location);
                        if  (hit && model.shipsSunk === model.numShips) {
                            view.displayMessage("You sank all the battleships in " +
                                this.guesses + " guesses. Congratulations!");
                            var form = document.getElementById("form");
                            form.innerHTML = "";
                            form.setAttribute("class","disappear");
                            }
                        }
                      }
};

function handleFireButton () {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

function handleKeyPress (e) {
    var fireButton = document.getElementById("buttonInput");
    if (e.keyCode === 13){
        fireButton.click();
        return false;
    }

}

function init() { 
    var fireButton = document.getElementById("buttonInput");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
    

}
window.onload = init;


