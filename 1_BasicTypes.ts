// Basic Types
var aString : string;
var aNumber : number;
var aBoolean : boolean;

// Arrays
var someStrings : string[];
var someNumbers : number[];

// The ANY type
var whatIsThis : any;
var mixedArray : any[];



/***********************
 * Use the variables
 ***********************/
aString = "this is a string";
console.log(aString);

aNumber = 12;
console.log(aNumber);

aBoolean = true;
console.log(aBoolean);

someStrings = [];
someStrings.push("TypeScript");
someStrings.push("is");
someStrings.push("fun!");
console.log(someStrings);

whatIsThis = 12;
console.log(whatIsThis);
whatIsThis = "String now...";
console.log(whatIsThis);

mixedArray = [];
mixedArray.push(aString);
mixedArray.push(aNumber);
console.log(mixedArray);


