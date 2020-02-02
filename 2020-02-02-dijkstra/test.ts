import Vector from "./vector";
import dijkstra, { Node } from ".";

describe("dijkstra", () => {
	it("generates the correct path", () => {
		const a = new Node();
		a.pos = new Vector(0, 0);

		const b = new Node();
		b.pos = new Vector(2, 4);

		const c = new Node();
		c.pos = new Vector(6, 3);

		const d = new Node();
		d.pos = new Vector(8, 2);

		const e = new Node();
		e.pos = new Vector(10, 3);

		a.addNeighbour(b);
		a.addNeighbour(c);
		b.addNeighbour(c);
		c.addNeighbour(d);
		d.addNeighbour(e);

		const path = dijkstra(a, e);

		expect(path).toEqual([a.pos, c.pos, d.pos, e.pos]);
	});

	it("generates the correct path", () => {
		// B is first shortest, but B - E is longer than A-E via C and D
		const a = new Node();
		a.pos = new Vector(2, 2);

		const b = new Node();
		b.pos = new Vector(-3, 1);

		const c = new Node();
		c.pos = new Vector(5, 5);

		const d = new Node();
		d.pos = new Vector(7, 5);

		const e = new Node();
		e.pos = new Vector(10, 4);

		const f = new Node();
		f.pos = new Vector(12, 4);

		a.addNeighbour(b);
		b.addNeighbour(f);

		a.addNeighbour(c);
		c.addNeighbour(d);
		d.addNeighbour(e);
		e.addNeighbour(f);

		const path = dijkstra(a, f);

		expect(path).toEqual([a.pos, c.pos, d.pos, e.pos, f.pos]);
	});

	it("generates the correct path", () => {
		// C is first shortest, but B - E is tiny
		const a = new Node();
		a.pos = new Vector(2, 2);

		const b = new Node();
		b.pos = new Vector(11, 4);

		const c = new Node();
		c.pos = new Vector(5, 5);

		const d = new Node();
		d.pos = new Vector(7, 5);

		const e = new Node();
		e.pos = new Vector(10, 4);

		const f = new Node();
		f.pos = new Vector(12, 4);

		a.addNeighbour(b);
		b.addNeighbour(f);

		a.addNeighbour(c);
		c.addNeighbour(d);
		d.addNeighbour(e);
		e.addNeighbour(f);

		const path = dijkstra(a, f);

		expect(path).toEqual([a.pos, b.pos, f.pos]);
	});
});
