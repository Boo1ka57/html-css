function Dog(name, breed, weight) {
 this.name = name;
 this.breed = breed;
 this.weight = weight;
 this.bark = function () {
 	if (this.weight > 25) {
 		window.alert(this.name + " says: 'WOOF! WOOF!!'")

 	} else {
 		window.alert(this.name + " says: 'woof woof'")
 	}
 }
};

function Car(make, model, year, color, passengers, convertible, mileage, started) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = started;
    this.start = function() {
                 this.started = true;
    },

    this.stop = function() {
                 this.started = false;
    },
    this.drive = function() {
                 // count = 0;
                 if (this.started) {
                 console.log(this.make + " " +
                 this.model + " goes zoom zoom!");
                 } else {
                 console.log("Start the engine first.");
                         }
    }
};


 