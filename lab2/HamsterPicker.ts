import { Hamster } from './model/Hamster';
import { merge_sort } from './MergeSort';

export class HamsterPicker {
  hamsters: Hamster[] = [];
  availableFood: number;

  constructor(hamsters: Hamster[], availableFood: number, totalHamsters: number) {
    this.hamsters = hamsters;
    this.availableFood = availableFood;
  };

  filterBySelfGreedines() {
    this.hamsters = this.hamsters.filter((hamster) => {
      return hamster.dailyFood <= this.availableFood;
    });
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
      ham.totalGreedinesValue = ham.dailyFood + (ham.greedinesPerNeighbor * (this.hamsters.length-1));
      sumAllTotal += ham.totalGreedinesValue;
    }

    this.hamsters = [...merge_sort(this.hamsters)];

    return sumAllTotal <= this.availableFood;
  };
}