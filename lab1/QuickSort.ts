import { Shoes } from './Shoes';

export class QuickSort {

  private swap_counter = 0;
  private comparsion_counter = 0;

  quickSort(array, p: number, r: number) {

    if(p < r) { // check if size of array is greater then 1 element
      const q = this.partition(array, p, r); // partitioning array by pivot(last el)
      this.quickSort(array, p, q-1); // recursive sort left part(depended on pivot)
      this.quickSort(array, q+1, r); // recursive sort right part(depended on pivot)
    }

    return [array, this.swap_counter, this.comparsion_counter];
  }

  partition(array, p: number, r: number) {
    const x = array[r]; // pivot
    let i = p-1; // comparsion index

    for(let j = p; j < r; ++j) { // go from first el to last-1

      this.comparsion_counter++;
      
      if(array[j] <= x) { // check if iteration el is smaller then or equal to pivot
        ++i;                    // if true then increment comp. index and swap el[i] with iteration el
        this.swap(array, i, j);
        this.swap_counter++;
      }
    }

    this.swap(array, i+1, r); // after iteration set pivot at him place(between the array with lower and greater values)
    this.swap_counter++;

    return i+1; // return pivot(el that seted at him place in sorted array)
  }

  swap(array, first: number, second: number) {
    return [array[first], array[second]] = [array[second], array[first]];
  }
}

const testArr = [6, 5, 4, 3, 2, 1];

console.log(new QuickSort().quickSort(testArr, 0, 5)[1]);