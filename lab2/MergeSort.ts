import { Hamster } from './Hamster';

export class MergeSort {
  mergeSort(hamsters: Hamster[], l: number, r: number) {
    if(l < r) {
      console.log(hamsters);
      
      const m = Math.floor((l+r)/2);

      this.mergeSort(hamsters, l, m);
      this.mergeSort(hamsters, m + 1, r);

      this.merge(hamsters, l, m, r);
    }
  }

  merge(hamsters: Hamster[], start: number, mid: number, end: number) {
    let start2 = mid + 1;
    
    if(hamsters[mid].totalGreedinesValue <= hamsters[start2].totalGreedinesValue) {
      return;
    }

    while(start <= mid && start2 <= end) {
      if(hamsters[start].totalGreedinesValue <= hamsters[start2].totalGreedinesValue) {
        start++;
      } else {
        const value = hamsters[start2].totalGreedinesValue;
        let index = start2;

        while (index != start) { 
            hamsters[index].recalculateTotalGreedines(hamsters[index-1].totalGreedinesValue); 
            index--; 
        }

        hamsters[start].recalculateTotalGreedines(value);
        
        start++; 
        mid++; 
        start2++; 
      }
    }
  }
}