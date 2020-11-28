import * as fs from 'fs';

import { Hamster } from './Hamster';
import { HamsterPicker } from './HamsterPicker';

const firstHamsterValuesLine = 2;

function readHamster() { // read data from file 
  const data = fs.readFileSync('./test_cases/hamstr_in_1.txt', 'utf8');
  const dataLines = data.split(/\r?\n/);
  const availableFood = Number(dataLines[0]);
  const totalHamsters = Number(dataLines[1]);
  const hamsters: Hamster[] = [];
  for(let i = firstHamsterValuesLine; i < dataLines.length; i++) {
    const hamsterValues = dataLines[i].split(" ");
    hamsters.push(new Hamster(
      Number(hamsterValues[0]),
      Number(hamsterValues[1]),
      0));
  }

  return { availableFood, totalHamsters, hamsters };
}

function writeResult(result: string) {
  fs.writeFile('hamstr_out.txt', result, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

function launcher() {
  const fileData = readHamster();
  const picker = new HamsterPicker(
    fileData.hamsters,
    fileData.availableFood
    );

  
  picker.filterBySelfGreedines();
  if(picker.hamsters.length !== 0) {
    writeResult(`You can buy: ${picker.picker()} hamster`);
  } else {
    writeResult('You cant afford a hamster');
  }
}

launcher();