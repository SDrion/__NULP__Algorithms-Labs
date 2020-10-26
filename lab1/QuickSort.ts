import { Shoes } from './Shoes';

export class QuickSort {

  private swap_counter = 0;
  private comparsion_counter = 0;

  quickSort(array: Shoes[], p: number, r: number) {

    if(p < r) { // check if size of array is greater then 1 element
      const q = this.partition(array, p, r); // partitioning array by pivot(last el)
      this.quickSort(array, p, q-1); // recursive sort left part(depended on pivot)
      this.quickSort(array, q+1, r); // recursive sort right part(depended on pivot)
    }

    return [array, this.swap_counter, this.comparsion_counter];
  }

  partition(array: Shoes[], p: number, r: number) {
    const x = array[r].price;
    let i = p-1;

    for(let j = p; j < r; ++j) {
      this.comparsion_counter++;
      if(array[j].price <= x) {
        ++i;
        this.swap(array, i, j);
        this.swap_counter++;
      }
    }

    this.swap(array, i+1, r);

    return i+1;
  }

  swap(array, first: number, second: number) {
    return [array[first], array[second]] = [array[second], array[first]];
  }
}