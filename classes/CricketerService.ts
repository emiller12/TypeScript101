/// <reference path="references.ts" />

class CricketerService implements ICricketerService {

	private players: Cricketer[];

	constructor (
		cricketers: Cricketer[]
	) {
		this.players = cricketers;
	}

	public generateGreeting(playerId : number) : string {

		var player : Cricketer = this.getPlayer(playerId);
		var greeting : string = "Hello, my name is ";

		if (player.age) {
			greeting = greeting + player.firstname + " " + player.lastname + " and I am " + player.age.toString() + " years old.";
		} else {
			greeting = greeting + player.firstname + " " + player.lastname + ".";
		}

		return greeting;
	}

	public calculateBattingAverage(playerId : number) : number {
		var player : Cricketer = this.getPlayer(playerId);
		return player.runs / player.matches;
	}

	private getPlayers() : Cricketer[] {
		return this.players;
	}

	private getPlayer(id : number) : Cricketer {
		return this.players[id];
	}

}