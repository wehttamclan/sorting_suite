function bubbleSort(array) {
  let swapsLeft = true;
  while (swapsLeft) {
    for(let i=0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      } else swapsLeft = false;
    }
  }
  console.log(array)
}

bubbleSort([1,3,4,5,2])