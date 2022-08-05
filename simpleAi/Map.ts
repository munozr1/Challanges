import { Creature } from "./Creature";

class Map {
	// create a 2d array of creatures
	private map: Creature[];

	constructor(m: Creature[]) {
		this.map = m;
	}
}
