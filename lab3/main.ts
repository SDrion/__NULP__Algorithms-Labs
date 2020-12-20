import * as fs from 'fs';

import { Graph } from './Graph';


function graphBuilder(fileName: string) {
  const input = fs.readFileSync(`./${fileName}.txt`, 'utf8');
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

function searchServerPosition(fileName: string) {
  const {graph, clientNodes} = graphBuilder(fileName);
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

  writeResult(result, fileName);

}

function writeResult(result: number, outName: string) {
  fs.writeFile(`output_${outName}.txt`, result.toString(), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

const tesFiles = [
  'input_1',
  'input_2',
  'input_3'
];

for(let i = 0; i < tesFiles.length; i++) {
  searchServerPosition(tesFiles[i]);
}