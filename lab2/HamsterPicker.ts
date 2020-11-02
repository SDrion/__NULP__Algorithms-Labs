import { Hamster } from './model/Hamster';

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

    this.bubbleSortByTotalValue();

    return sumAllTotal <= this.availableFood;
  };

  bubbleSortByTotalValue() {
    let array = [...this.hamsters]
    let length = array.length;

    for (let i = 0; i < length; i++){
      for ( let j = 0; j < length - i - 1; j++){
        if (array[j].totalGreedinesValue > array[j + 1].totalGreedinesValue ){
          this.swap(array, j, j + 1);
        } 
      }
    }
    this.hamsters = [...array];
  };

  swap(array, f: number, s: number) {
    return [array[f], array[s]] = [array[s], array[f]];
  };
}