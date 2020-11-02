import { Shoes } from './Shoes';

export class InsertionSort {
  insertion_sort(array: Shoes[]) {
    let swap_counter = 0;
    let comparsion_counter = 0;

    for (let i = 0; i < array.length; ++i) { // start iteration through the array
      for (let j = i; j > 0; --j) { // go from i to 0 index in array

        ++comparsion_counter;
        
        if (array[j].price > array[j-1].price) { // if true then swap this els(greater value go to the end of arr)
          this.swap(array, j, j-1); 
          ++swap_counter;
        } else { // if false then stop iteration
          break;
        }
    }
  }
  return [array, swap_counter, comparsion_counter];
}

swap(array, first: number, second: number) {
  return [array[first], array[second]] = [array[second], array[first]];
}
   
}