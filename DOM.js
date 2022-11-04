Я возвращаюсь из функции при отсутствии				- undefined
команды return.	

Я считаюсь значением переменной, которой			- undefined
еще не было присвоено значение.

Я — значение элемента, несуществующего				- undefined
в разреженном массиве.

Я — значение несуществующего свойства.				- undefined

Я — значение удаленного свойства.					- undefined
 
Я — значение, которое не может быть задано			- 
свойству при создании объекта.




Infinity - "1"					- Infinity
"42" + 42						- 84
2 + "1 1"						- NaN
99 + 101						- 200
"1" - "1"						- 0
console.log("Result: " + 10/2)	- NaN
3 + " bananas " + 2 + " apples"	- "3 bananas + 2 apples" 










var chevy = {
 make: "Chevy",
 model: "Bel Air"
};

var taxi = {
 make: "Webville Motors",
 model: "Taxi"
};

var fiat1 = {
 make: "Fiat",
 model: "500"
};

var fiat2 = {
 make: "Fiat",
 model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

function findCarInLot(car) {
 for (var i = 0; i < lot.length; i++) {
 if (car === lot[i]) {
 return i;
 }
 } return -1;
};





var loc1 = findCarInLot(fiat2);		- 3;
var loc2 = findCarInLot(taxi);		- 1;
var loc3 = findCarInLot(chevy);		- 0;
var loc4 = findCarInLot(fiat1);		- 2;








 var car = {
 			keysInPocket: null
 };
 var foundYouAtTheCrimeScene = [ ];
 var yourName = "";

function lieDetectorTest() {
 var lies = 0;
 var stolenDiamond = { };
 	if (stolenDiamond) {
 		console.log("You stole the diamond");
 	lies++;
 } // пустой объект - true +1

  if (car.keysInPocket) {
 		console.log("Uh oh, guess you stole the car!");
 	lies++;

 }  // тип null - false;
 	if (car.emptyGasTank) {
 		console.log("You drove the car after you stole it!");
 	lies++; 
 	// тип undefined, несуществующее свойство объекта, значит false;
 	
 } 


	if (foundYouAtTheCrimeScene) {
 		console.log("A sure sign of guilt");
 	lies++; // пустой массив - true +1
 }
 	if (foundYouAtTheCrimeScene[0]) {
 		console.log("Caught with a stolen item!");
 	lies++;
 } // undefined значение по индексу 0, значит false;

 	if (yourName) {
 		console.log("Guess you lied about your name");
 	lies++;  // пустая строка возвращает false, НО ТУТ БЛЯТЬ ЕСТЬ ПРОБЕЛ - ЭТО TRUE SUKA BLYAAAA; 
 } return lies;
}

var numberOfLies = lieDetectorTest();
		console.log("You told " + numberOfLies + " lies!");
		if (numberOfLies >= 3) {
 			console.log("Guilty as charged");
} else {
	console.log("You're innocent, ma man. There must be more than 3 lies to be proven guilty. YOu said only " + 
		numberOfLies);
};




var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
	if (presentableText.length > 0) {
 		alert(presentableText);
	}


 var emot = "XOxxOO";
 var hugs = 0;
 var kisses = 0;

 emot = emot.trim();
 emot = emot.toUpperCase();
 for(var i = 0; i < emot.length ; i++) {
 if (emot.charAt(i) === "X") {
 hugs++;
 } else if (emot.charAt(i) == "O") {
 kisses++;
 }
 }


 var name = "Jenny";
 var phone = "867-5309";
 var fact = "This is a prime number";
 var songName = phone + "/" + name;
 var index = phone.indexOf("-");
 
    if (fact.substring(10, 15) === "prime") {
        alert(fact);
    }






var randomString = "you don't haff to bi mad. This is only a game!))"

// length + charAt() от переменной-строки
for (var i = 0; i < randomString.length; i++) {
   if (randomString.charAt(i) === "m"){
      console.log("There's letter 'm' at index " + i);
      }
}
//indexOf() - просто найти символ в строке, 
//indexOf("f", 6) - найти символ в строке после такого-тио индекса
var wordMAD = randomString.indexOf("mad");
console.log("There's a letter 'm' at indexes " + wordMAD );

//substring() - от индекса вернуть всю оставшуюся строку,
//substring(5,10) - вернуть часть строки между индексами
randomString.substring(21);

//split("|") - вернёт значения через запятую, если есть символ-ограничитель







// Larry
function validate(phoneNumber) {
 if (phoneNumber.length !== 8) {
 return false;
 }
 for (var i = 0; i < phoneNumber.length; i++) {
 if (i === 3) {
 if (phoneNumber.charAt(i) !== '-') {
 return false;
 }
 } else if (isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 }
 return true;
}

“123-4567”
// Bred

function validate(phoneNumber) {
 if (phoneNumber.length !== 8) {
 return false;
 }
 var first = phoneNumber.substring(0,3);
 var second = phoneNumber.substring(4);
 if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
 return false;
 }
 return true;
}

“123-4567”

//Larry#2
function validate(phoneNumber) {
 if (phoneNumber.length > 8 ||
         phoneNumber.length < 7) {
 return false;
 }
 for (var i = 0; i < phoneNumber.length; i++) {
 if (i === 3) {
 if (phoneNumber.length === 8 &&
phoneNumber.charAt(i) !== '-') {
 return false;
 } else if (phoneNumber.length === 7 &&
 isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 } else if (isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 }
 return true;
}

//Bred#2
“123-4567”
function validate(phoneNumber) {
 if (phoneNumber.length > 8 ||
 phoneNumber.length < 7) {
 return false;
 }
 var first = phoneNumber.substring(0,3);
 var second = phoneNumber.substring(phoneNumber.length - 4);
 if (isNaN(first) || isNaN(second)) {
 return false;
 }
 if (phoneNumber.length === 8) {
 return (phoneNumber.charAt(3) === "-");
 }
 return true;
}


// С методом split;
“123-4567”
function validate(phoneNumber) {
 if (phoneNumber.length > 8 ||
 phoneNumber.length < 7) {
 return false;
 }
 var first = phoneNumber.substring(0,3);
 var second = phoneNumber.substring(phoneNumber.length - 4);
 if (isNaN(first) || isNaN(second)) {
 return false;
 }
 if (phoneNumber.length === 8) {
 return (phoneNumber.charAt(3) === "-");
 }
 return true;
}

function validate(phoneNumber) {
  if (phoneNumber.length > 8 ||
      phoneNumber.length < 7) {
    return false;
 }
 var first = phoneNumber.split("-");
 var firstPart = first[0];
 var secondPart = first[1];
  if (isNaN(firstPart) || isNaN(secondPart)) {
   return false;
  }
  if (phoneNumber.length === 8) {
    return (phoneNumber.charAt(3) === "-");
 }
 return true;
}









function Duck(sound) {
 this.sound = sound;
 this.quack = function() {
                console.log(this.sound);
             }
}
var toy = new Duck("quack quack"); // new создаёт новый объект Duck и присваивает его toy;
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);










