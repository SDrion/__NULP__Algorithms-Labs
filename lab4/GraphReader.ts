import * as fs from 'fs';

export const inputDataReader = (fileName: string) => {
  const input = fs.readFileSync(`./input_files/${fileName}.txt`, 'utf8');
  const inputLines = input.split(/\r?\n/);

  const [matrixW, matrixH] = inputLines[0].split(' ').map(sizeValue => { return Number(sizeValue) });

  const inputMatrix = [];
  const nodeStorage = {};

  for (let i = 1; i < inputLines.length; i++) {
    const curInputNodes = inputLines[i].split('');
    curInputNodes.forEach(node => {
      if (nodeStorage[node]) {
        inputMatrix.push(`${node}${nodeStorage[node]}`);
        nodeStorage[node]++;
      } else {
        inputMatrix.push(node);
        nodeStorage[node] = 1;
      }
    });
  }

  return { inputMatrix, matrixW, matrixH };
}

export const adjecencyListBuilder = (inputMatrix, matrixW, matrixH) => {

  const adjecencyList = {};

  for (let row = 0; row < inputMatrix.length; row++) {
    adjecencyList[inputMatrix[row]] = [];
    if (row === inputMatrix.length - 1) {
      break;
    } else if ((row + 1) % matrixW <= row % matrixW) {
      continue;
    } else {
      adjecencyList[inputMatrix[row]].push(inputMatrix[row + 1]);
      inputMatrix.forEach((el, index) => {
        if (
          el.includes(inputMatrix[row].slice(0, 1))
          &&
          row % matrixW < index % matrixW
          &&
          inputMatrix[row] !== el
          &&
          index - row !== 1
        ) {
          adjecencyList[inputMatrix[row]].push(el);
        }
      });
    }
  }

  const starts = inputMatrix.filter((el, index) => {
    return index % matrixW === 0;
  });

  const ends = matrixH !== 1 ?
    [
      inputMatrix[matrixW - 1],
      inputMatrix[inputMatrix.length - 1]
    ] : [inputMatrix[inputMatrix.length - 1]];

  const possiblePairs = [];

  for (let i = 0; i < starts.length; i++) {
    for (let j = 0; j < ends.length; j++) {
      possiblePairs.push([
        starts[i], ends[j]
      ])
    }
  }

  return {
    adjecencyList,
    possiblePairs: possiblePairs
  };
}