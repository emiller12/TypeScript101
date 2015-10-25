/// <reference path="references.ts" />

// Create some Players
var thePlayers : Cricketer[] = [
	{firstname: "Steve", lastname: "Smith", age: 26, matches: 33, runs: 3095, wickets: 16},
	{firstname: "David", lastname: "Warner", age: 28, matches: 43, runs: 3649, wickets: 4},
	{firstname: "Mitchell", lastname: "Johnson", matches: 71, runs: 2034, wickets: 306, role: "Fast Bowler"}
];

// Create the Service
var service : ICricketerService;
service = new CricketerService(thePlayers);


/***************************************
 * Generate some greetings and averages
 ***************************************/

 console.log(service.generateGreeting(2) + " My average is: " + service.calculateBattingAverage(2));
