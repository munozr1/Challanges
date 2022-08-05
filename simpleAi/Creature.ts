import { Coordinate } from "./interfaces";

export class Creature {
	private name: string;
	private position: Coordinate = { x: 0, y: 0 };

	constructor(name: string, pos: Coordinate) {
		this.position = pos;
		this.name = name;
	}

	public getPosition(): Coordinate {
		return this.position;
	}

	public getName(): string {
		return this.name;
	}
}
