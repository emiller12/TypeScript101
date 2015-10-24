
// An addition function to add two numbers together and return the result.

function addition(num1 : number, num2 : number) : number {
	return num1 + num2;
}


/***********************
 * Do some calculations
 ***********************/

var result1 : number;
result1 = addition(5,7);
console.log(result1);

var result2 : number;
result2 = addition("nine", 3);
console.log(result2);

var result3 : number;
result3 = addition(6);
console.log(result3);