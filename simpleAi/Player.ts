import { Creature } from "./Creature";
import { Coordinate } from "./interfaces";

export class Player extends Creature {
	constructor(name: string, pos: Coordinate) {
		super(name, pos);
	}
}
