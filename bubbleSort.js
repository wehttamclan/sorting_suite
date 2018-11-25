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

module.exports = bubbleSort;