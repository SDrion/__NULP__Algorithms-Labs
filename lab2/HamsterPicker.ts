import { Hamster } from './Hamster';
import { MergeSort } from './MergeSort';

export class HamsterPicker {
  hamsters: Hamster[] = [];
  availableFood: number;

  constructor(hamsters: Hamster[], availableFood: number) {
    this.hamsters = hamsters;
    this.availableFood = availableFood;
  };

  filterBySelfGreedines() {
    this.hamsters = this.hamsters.filter((hamster) => 
      hamster.dailyFood <= this.availableFood);
  };

  picker() {
    while(!(this.checkForAllNeigbors())) {
      this.hamsters.pop();
    }

    return this.hamsters.length;
  }

  checkForAllNeigbors() {
    let sumAllTotal = 0;
    
    for(const ham of this.hamsters) {
      ham.recalculateTotalGreedines(this.hamsters.length-1);
      sumAllTotal += ham.totalGreedinesValue;
    }

    console.log(new MergeSort().mergeSort(this.hamsters, 0, this.hamsters.length-1));

    return sumAllTotal <= this.availableFood;
  };
}