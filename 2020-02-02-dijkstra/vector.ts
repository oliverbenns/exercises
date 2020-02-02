class Vector {
	x: number;
	y: number;

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	static fromString(str: string): Vector {
		const coords = str.split(",").map(s => parseInt(s, 10));

		return new Vector(coords[0], coords[1]);
	}

	distanceTo(target: Vector): number {
		return Math.sqrt(
			Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2)
		);
	}

	clone(): Vector {
		return new Vector(this.x, this.y);
	}

	toString(): string {
		return `${this.x},${this.y}`;
	}

	add(x: number, y: number): Vector {
		return new Vector(this.x + x, this.y + y);
	}

	equals(v: Vector): boolean {
		return this.x === v.x && this.y === v.y;
	}
}

export default Vector;
