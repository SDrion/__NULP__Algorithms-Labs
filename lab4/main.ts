import * as fs from 'fs';

import { adjecencyListBuilder } from './GraphReader';
import { AllPathAlg } from './AllPath';

export function main(fileName: string) {
  const inputData = adjecencyListBuilder(fileName);

  const allPath = new AllPathAlg(inputData.adjecencyList);

  inputData.possiblePairs.map(pair => {
    allPath.DFS(pair[0], pair[1]);
  });

  writeResult(allPath.simplePaths.length, fileName); 
}

function writeResult(result: number, outName: string) {
  fs.writeFile(`./output_files/output_${outName}.txt`, result.toString(), function (err) {
    if (err) throw err;
  });
}