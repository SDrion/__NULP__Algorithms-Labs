export class PriorityQueue {
  nodes: PriorityNode[] = [];

  enqueue(priority: number, key: number) {
    this.nodes.push(new PriorityNode(key, priority));
    this.nodes.sort(
      function(a, b) {
        return a.priority - b.priority;
      }
    );
  }

  dequeue(): number {
    return this.nodes.shift().key;
  }

  isEmpty(): boolean {
    return !(this.nodes.length);
  }
}

class PriorityNode {
  key: number;
	priority: number;

	constructor(key: number,priority: number){
		this.key = key;
		this.priority = priority;
	}
}