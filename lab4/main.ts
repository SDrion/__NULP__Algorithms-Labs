import * as fs from 'fs';

import { adjecencyListBuilder, inputDataReader } from './GraphReader';
import { AllPathAlg } from './AllPath';

export function main(fileName: string) {
  const inputData = inputDataReader(fileName);
  const { adjecencyList, possiblePairs } = adjecencyListBuilder(
    inputData.inputMatrix,
    inputData.matrixW,
    inputData.matrixH
    );

  const allPath = new AllPathAlg(adjecencyList);

  possiblePairs.map(pair => {
    allPath.allPath(pair[0], pair[1]);
  });

  writeResult(allPath.result, fileName);

  return allPath.result;
}

function writeResult(result: number, outName: string) {
  fs.writeFile(`./output_files/output_${outName}.txt`, result.toString(), function (err) {
    if (err) throw err;
  });
}