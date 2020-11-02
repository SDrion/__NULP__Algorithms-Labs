import * as fs from 'fs';

import { Hamster } from './model/Hamster';
import { HamsterPicker } from './HamsterPicker';

function readHamster() { // read data from file 
  const data = fs.readFileSync('./hamstr_in.txt', 'utf8');
  const dataLines = data.split(/\r?\n/);
  const availableFood = Number(dataLines[0]);
  const totalHamsters = Number(dataLines[1]);
  const hamsters: Hamster[] = [];
  for(let i = 2; i < dataLines.length; i++) {
    hamsters.push(new Hamster(
      Number(dataLines[i].split(" ")[0]),
      Number(dataLines[i].split(" ")[1]),
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
    fileData.availableFood,
    fileData.totalHamsters
    );

  
  picker.filterBySelfGreedines();
  if(picker.hamsters.length !== 0) {
    writeResult(`You can buy: ${picker.picker()} hamster`)
  } else {
    writeResult('You cant afford a hamster')
  }
}

launcher();