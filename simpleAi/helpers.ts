import { Creature } from "./Creature";
import { Monster } from "./Monster";
import { Player } from "./Player";

/**
 * Generates a random number from 0-max.
 * This can be used to randomly generate monster or
 * player coordinates
 * @param max The largest number to generate
 * @return int
 */
export function randomInt(max: number) {
	return Math.floor(Math.random() * max);
}

/**
 * Determines the closest player to the monster
 * For a 2d plane, the formula for distance between two points is:
 * c = √(Xa − Xb)^2 + (Ya − Yb)^2
 * @param Array<Player>
 * @param Monster
 * @return Player
 */
export function closestPlayer(
	players: Array<Player>,
	monster: Monster
): Player {
	let closest: Player;
	//TODO
	//Hint: apply the distance formula to each player

	return players[0];
}

export function printMap(map: Array<Array<Creature>>) {
	for (let i = 0; i < map.length; i++) {
		let row = map[i];
		let rowString = "";
		for (let j = 0; j < row.length; j++) {
			let creature = row[j];
			if (creature.getName().length > 0) {
				rowString += creature.getName();
			} else {
				rowString += " ";
			}
		}
		console.log(rowString);
	}
}
