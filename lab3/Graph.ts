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

    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if(!smallest || distances[smallest] === this.infinity) {
        continue;
      }

      for(neighbor in this._adjacencyList[smallest]) {
        alt = distances[smallest] + this._adjacencyList[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path.concat(start).reverse();
  }
  
}