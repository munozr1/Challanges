import { Player } from "./Player";
import { Creature } from "./Creature";
import { Coordinate } from "./interfaces";
import { Monster } from "./Monster";
import { closestPlayer } from "./helpers";

// let map = Array.from(Array(25), () => new Array(25));

const n = 25;
let map = new Array(n); // create an empty array of length n
for (var i = 0; i < n; i++) {
	map[i] = new Array(n); // make each element an array
}

function main() {
	let player1 = new Player("player1", { x: 20, y: 20 });
	let player2 = new Player("player2", { x: 15, y: 15 });
	let player3 = new Player("player3", { x: 10, y: 10 });
	let monster = new Monster("monster", { x: 5, y: 5 });

	let players: Array<Player> = [player1, player2];

	let closest = closestPlayer(players, monster);
	console.log("\n\nThe closest player to the monster is: ", closest); // Should be player3

	console.log(
		"\n\nThe beset move for the monster to reach a player is ",
		monster.moveMonster(closest)
	);
}
