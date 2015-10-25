/// <reference path="references.ts" />

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

interface ICricketerService {
	generateGreeting(id : number) : string,
	calculateBattingAverage(id : number) : number
}