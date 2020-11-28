import * as fs from 'fs';

import { Graph } from './Graph';


function graphBuilder() {
  const input = fs.readFileSync('./input.txt', 'utf8');
  const inputLines = input.split(/\r?\n/);

  const clientNodes = inputLines[1].split(' ');

  const graph = new Graph();

  for(let i = 2; i < inputLines.length; i++) {
    const curRoute = inputLines[i].split(' ');
    graph.addEdge(curRoute[0], curRoute[1], Number(curRoute[2]));
  }

  return {graph, clientNodes};
};

function delayCalculate(path, list) {
  let result = 0;
  for(let node = 1; node < path.length; node++) {
    result += list[path[node-1]][path[node]];
  }

  return result;
}

(function searchServerPosition() {
  const {graph, clientNodes} = graphBuilder();
  const possibleServerPositions = [];

  for(let ver in graph._adjacencyList) {
    if(clientNodes.includes(ver)) {
      continue;
    } else {
      possibleServerPositions.push(ver);
    }
  }

  let result = 10e9 + 1;

  for(let possiblePos = 0; possiblePos < possibleServerPositions.length; possiblePos++) {
    let delaysArray: number[] = [];
    for(let clientNode = 0; clientNode < clientNodes.length; clientNode++) {
      const curPath = graph.shortestPath(possibleServerPositions[possiblePos], clientNodes[clientNode]);
      delaysArray.push(delayCalculate(curPath, graph._adjacencyList));
    }
    result = result > Math.max(...delaysArray) ? Math.max(...delaysArray) : result;
  }

  writeResult(result);

}) ();

function writeResult(result: number) {
  fs.writeFile('output.txt', result.toString(), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}