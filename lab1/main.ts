import * as fs from 'fs';
import * as papa from 'papaparse';
import { performance } from 'perf_hooks'

import { InsertionSort } from './InsertionSort';
import { QuickSort } from './QuickSort';
import { Shoes } from './Shoes';

function insertionSortedByDescShoes(filename: string): void {
  const file = fs.readFileSync(filename, 'utf8'); // write csv in file var

  const insertion_csv = papa.parse(file, {  // parsing csv string in object array
    header: true,
    dynamicTyping: true,
  });

  const csv_insertion_dataArray: any = insertion_csv.data;

  const shoesArray: Shoes[] = [];

  for(let i = 0; i < csv_insertion_dataArray.length; ++i) { // creating array of shoes
    shoesArray.push(new Shoes(csv_insertion_dataArray[i].brand, csv_insertion_dataArray[i].color, csv_insertion_dataArray[i].size, csv_insertion_dataArray[i].price));
  }

  const t0 = performance.now(); // stop-watch on
  const result = (new InsertionSort).insertion_sort(shoesArray); // writing result of insertion sort in var
  const t1 = performance.now(); // stop-watch off

  console.log('\x1b[33m%s\x1b[0m', '########        INSERTION SORT        ########');
  console.log('Number of elements:', shoesArray.length);
  console.log('Time:', t1-t0, 'ms');
  console.log('Comparsions:', result[2]);
  console.log('Swaps:', result[1]);
  console.log('Result:', result[0]);
  console.log('\x1b[33m%s\x1b[0m', '########           END           ########')
} 

function quickSortedByAscShoes(filename: string): void {
  const file = fs.readFileSync(filename, 'utf8'); // write csv in file var

  const insertion_csv = papa.parse(file, {  // parsing csv string in object array
    header: true,
    dynamicTyping: true,
  });

  const csv_insertion_dataArray: any = insertion_csv.data;

  const shoesArray: Shoes[] = [];

  for(let i = 0; i < csv_insertion_dataArray.length; ++i) { // creating array of shoes
    shoesArray.push(new Shoes(csv_insertion_dataArray[i].brand, csv_insertion_dataArray[i].color, csv_insertion_dataArray[i].size, csv_insertion_dataArray[i].price));
  }

  const t0 = performance.now(); // stop-watch on
  const result = (new QuickSort).quickSort(shoesArray, 0, shoesArray.length-1); // writing result of insertion sort in var
  const t1 = performance.now(); // stop-watch off

  console.log('\x1b[33m%s\x1b[0m', '########        QUICK SORT        ########');
  console.log('Number of elements:', shoesArray.length);
  console.log('Time:', t1-t0, 'ms');
  console.log('Comparsions:', result[2]);
  console.log('Swaps:', result[1]);
  console.log('Result:', result[0]);
  console.log('\x1b[33m%s\x1b[0m', '########           END           ########')
}


insertionSortedByDescShoes('./shoes.csv');
quickSortedByAscShoes('./shoes.csv');