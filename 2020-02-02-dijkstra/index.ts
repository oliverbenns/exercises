import Vector from "./vector";

interface Edge {
	weight: number;
	target: string;
}

export class Node {
	pos: Vector;
	neighbours: Node[];

	constructor() {
		this.pos = new Vector();
		this.neighbours = [];
	}

	addNeighbour(node: Node) {
		this.neighbours.push(node);
	}
}

type Graph = { [key: string]: Edge };

const dijkstra = (start: Node, end: Node) => {
	const graph: Graph = {};
	const queue = [start];

	while (queue.length > 0) {
		const node = queue.pop()!;
		const neighbours = node.neighbours.sort((a, b) =>
			a.pos.distanceTo(node.pos) > b.pos.distanceTo(node.pos) ? 1 : -1
		);

		neighbours.forEach(neighbour => {
			const id = neighbour.pos.toString();
			const existingNode = graph[id];

			if (!existingNode) {
				graph[id] = {
					weight: node.pos.distanceTo(neighbour.pos),
					target: node.pos.toString()
				};
			} else {
				const totalDistance =
					graph[node.pos.toString()].weight +
					node.pos.distanceTo(neighbour.pos);

				if (totalDistance < existingNode.weight) {
					existingNode.weight = totalDistance;
					existingNode.target = node.pos.toString();
				}
			}

			queue.push(neighbour);
		});
	}

	return getPath(graph, end);
};

const getPath = (graph: Graph, endNode: Node): Vector[] => {
	let edge: Edge = graph[endNode.pos.toString()];
	const paths = [endNode.pos];
	while (edge) {
		const vector = Vector.fromString(edge.target);
		paths.unshift(vector);
		edge = graph[edge.target];
	}

	return paths;
};

export default dijkstra;
