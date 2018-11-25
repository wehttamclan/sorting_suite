function bubbleSort(array) {
  let swaps = true;
  while (swaps) {
    swaps = false
    for(let i=0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swaps = true;
      }
    }
  }
  return array
}

console.log(bubbleSort([1,3,4,6,2,5,2]))