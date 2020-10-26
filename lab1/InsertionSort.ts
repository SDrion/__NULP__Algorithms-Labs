import { Shoes } from './Shoes';

export class InsertionSort {
  insertion_sort(array: Shoes[]) {
    let swap_counter = 0;
    let comparsion_counter = 0;

    for (let i = 0; i < array.length; ++i) {
      for (let j = i; j > 0; --j) {

        ++comparsion_counter;
        
        if (array[j].price > array[j-1].price) {
          this.swap(array, j, j-1); 
          ++swap_counter;
      } else {
        break;
      }
    }
  }
  return [array, swap_counter, comparsion_counter];
}

  swap(array, first, second) {
    return [array[first], array[second]] = [array[second], array[first]];
  }
}