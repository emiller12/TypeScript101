
// The person interface

interface Person {
	firstname : string,
	lastname : string,
	age? : number
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


/***********************
 * Generate some greetings
 ***********************/

var result1 : string;
var person1 : Person = {firstname: "Steve", lastname: "Smith"};
person1.age = 26;
result1 = generateGreeting(person1);
console.log(result1);

var result2 : string;
var person2 : Person;
person2 = {name: "David Warner", age: "28"};
result2 = generateGreeting(person2);
console.log(result2);

var result3 : string;
var person3 : Person;
person3 = {firstname: "Mitchell", lastname: "Johnson"};
result3 = generateGreeting(person3);
console.log(result3);