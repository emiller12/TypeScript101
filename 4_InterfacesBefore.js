
// An addition function to add two numbers together and return the result.

function generateGreeting(thePerson) {
	return "Hello, my name is " + thePerson.firstname + " " + thePerson.lastname + " and I am " + thePerson.age.toString() + " years old.";
}


/***********************
 * Generate some greetings
 ***********************/

var result1;
var person1 = {firstname: "Steve", lastname: "Smith"};
person1.age = 26;
result1 = generateGreeting(person1);
console.log(result1);

var result2;
var person2;
person2 = {name: "David Warner", age: "28"};
result2 = generateGreeting(person2);
console.log(result2);

var result3;
var person3;
person3 = {firstname: "Mitchell", lastname: "Johnson"};
result3 = generateGreeting(person3);
console.log(result3);