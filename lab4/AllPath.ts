export class AllPathAlg {
  visited = {};
  currentPath = [];
  simplePaths = [];
  graph = {};

  constructor (graph: {}) {
    this.graph = graph;
  }

  DFS(start, end) {

    if (this.visited[start]) {
      return;
    }

    this.visited[start] = true;

    this.currentPath.push(start);

    if (start == end) {
      this.simplePaths.push(this.currentPath);
      this.visited[start] = false;
      this.currentPath.pop();
    }

    this.graph[start].map(node => {
      this.DFS(node, end);
    });

    this.currentPath.pop();

    this.visited[start] = false;
  }

  
  public get result(): number {
    return this.simplePaths.length;
  }
  
}