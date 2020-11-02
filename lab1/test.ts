export class TestSort {

    /**
   * deeps down to the children, and check if children is less then parent
   */
   sink(array, i, max){
    let big_index, childl, childr;
    while( i < max ) {
      big_index = i;
      childl = 2 * i + 1;
      childr = childl + 1;
      if (childl < max && array[childl] > array[big_index])
        big_index = childl;

      if (childr < max && array[childr] > array[big_index])
        big_index = childr;

      if (big_index == i) return;

      this.swap(array, i, big_index);
      i = big_index;
    }
  }
  /**
  * build heap from the array
  */
  build_heap(array){
    let index = Math.floor((array.length / 2) - 1) ;
    while ( index >= 0 ){
     this.sink(array, index, array.length);
     index --;
    }
  }

  heapSort(array){
    this.build_heap(array);
    var end = array.length - 1;
  
    while(end >= 0) {
      this.swap(array, 0, end);
      this.sink(array, 0, end);
      end -= 1
    }
    return array;
  }

  swap(array, first, second) {
    return [array[first], array[second]] = [array[second], array[first]];
  }
    
}

const testArray = [];

for(let i = 0; i < 15; i++) {
  testArray.push(getRandomInt(0, 100));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(new TestSort().heapSort(testArray));