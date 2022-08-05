import { Coordinate } from "./interfaces";
import { Creature } from "./Creature";
import { Player } from "./Player";
/*

For this challenge, you will create a simple ai for a 2d rpg game. The specifics of the game are 
irrelevant for this challenge. Simply put, the ai will be used for monsters which will try to 
move as close to the player as possible. Each turn the monster only has 5 moves available.

An application example is provided as a png file in the repo.


DO NOT:
1. Collaborate
2. Ask questions already awnsered on this instruction set.

A lot of the required code to compile is provided. You are only expected
to implement two functions.
*/

export class Monster extends Creature {
	constructor(name: string, pos: Coordinate) {
		super(name, pos);
	}

	public moveMonster(p: Player): Coordinate {
		let bestMove: Coordinate = { x: 0, y: 0 };
		let moves = 5; // can only move 5 times per turn
		//TODO
		//Hint: the player inputed comes from the closestPlayer function in helpers.ts
		return bestMove;
	}
}

// To test your function, run:
// tsc index.ts
// node index.js
