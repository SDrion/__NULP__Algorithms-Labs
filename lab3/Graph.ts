import { PriorityQueue } from './PriorityQueue';

export class Graph {
  _adjacencyList: {};
  infinity = 1/0;

  constructor() {
    this._adjacencyList = {};
  }

  addVertex(vertex: string) {
    if(!this._adjacencyList[vertex]) {
      this._adjacencyList[vertex] = {};
    }
  }

  addEdge(source: string, destination: string, value: number) {
    if(!this._adjacencyList[source]) {
      this.addVertex(source);
    }

    if(!this._adjacencyList[destination]) {
      this.addVertex(destination);
    }

    this._adjacencyList[source][destination] = value;
    this._adjacencyList[destination][source] = value;
  }

  shortestPath(start: string, finish: string) {
    let nodes = new PriorityQueue(),
    distances = {},
    previous = {},
    path = [],
    smallest,
    vertex,
    neighbor,
    alt;


    // Init the distances and queues variables
    for(vertex in this._adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = this.infinity;
        nodes.enqueue(this.infinity, vertex);
      }

      previous[vertex] = null;
    }


    // Continue as long as the queue haven't been emptied
    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();


      // Last node is finish
      if(smallest === finish) {

        // Calculate path
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }


      // If we dont know distanse -> skip
      if(!smallest || distances[smallest] === this.infinity) {
        continue;
      }


      // Calculate distance for each neighbour
      for(neighbor in this._adjacencyList[smallest]) {
        alt = distances[smallest] + this._adjacencyList[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }


    // Add start to solution,
    // and reverse it(it is from end to start)
    return path.concat(start).reverse();
  }
  
}