import Vector from "./vector";

describe("Vector", () => {
	it("should construct the correct values", () => {
		const vector = new Vector(3, 5);

		expect(vector.x).toEqual(3);
		expect(vector.y).toEqual(5);
	});

	describe("distanceTo()", () => {
		it("should calculate the correct distance", () => {
			const a = new Vector(5, 0);
			const b = new Vector(10, -10);

			expect(a.distanceTo(b)).toBe(11.180339887498949);
		});
	});

	describe("clone()", () => {
		it("should create a new vector", () => {
			const a = new Vector();
			const b = a.clone();

			expect(a).not.toBe(b);
		});

		it("should have the same coordinates", () => {
			const a = new Vector(9, 2);
			const b = a.clone();

			expect(b.x).toBe(9);
			expect(b.y).toBe(2);
		});
	});

	describe("toString()", () => {
		it("comma seperates coordinates", () => {
			const vector = new Vector(5, 7);

			expect(vector.toString()).toBe("5,7");
		});
	});

	describe("add()", () => {
		it("should not mutate", () => {
			const vector = new Vector();
			vector.add(2, 3);

			expect(vector.x).toBe(0);
			expect(vector.y).toBe(0);
		});

		it("should add values", () => {
			const a = new Vector(6, 4);
			const b = a.add(2, 3);

			expect(b.x).toBe(8);
			expect(b.y).toBe(7);
		});
	});

	describe("equals()", () => {
		it("should compare coordinates", () => {
			const a = new Vector(4, 6);
			const b = new Vector(4, 6);

			expect(a.equals(b)).toBe(true);
		});
	});
});
