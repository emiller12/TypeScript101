
// The person interfaces

interface Person {
	firstname : string,
	lastname : string,
	age? : number
}

interface Cricketer extends Person {
	matches : number,
	runs : number,
	wickets : number,
	role? : string
}

// An addition function to add two numbers together and return the result.

function generateGreeting(thePerson : Person) : string {
	var greeting : string = "Hello, my name is ";

	if (thePerson.age) {
		greeting = greeting + thePerson.firstname + " " + thePerson.lastname + " and I am " + thePerson.age.toString() + " years old.";
	} else {
		greeting = greeting + thePerson.firstname + " " + thePerson.lastname + ".";
	}

	return greeting;
}

function calculateBattingAverage(player : Cricketer) : number {
	return player.runs / player.matches;
}


/***************************************
 * Generate some greetings and averages
 ***************************************/

var result1 : string;
var person1 : Cricketer = {firstname: "Steve", lastname: "Smith", matches: 33, runs: 3095, wickets: 16};
person1.age = 26;
result1 = generateGreeting(person1);
console.log(result1);
console.log("My batting average is " + calculateBattingAverage(person1));