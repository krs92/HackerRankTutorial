function buildMaxHeap(array) {
    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);
  
    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
      heapify(array, i, array.length);
      i -= 1;
    }
  }


  

  function heapify(heap, i, max) {
    var index, leftChild, righChild;
    
    while(i < max) {
      index = i;
  
      leftChild = 2*i + 1;
      righChild = leftChild + 1;
  
      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }
  
      if (righChild < max && heap[righChild] > heap[index]) {
        index = righChild;
      }
        
      if (index == i) {
        return;
      }
  
      swap(heap,i, index);
      
      i = index;
    }
  }
  function swap(array, firstItemIndex, lastItemInde) {
    var tmp = array[firstItemIndex];
    
    // Swap first and last items in the array.
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
  }


  var a  = [9,9,6,4,33,21,1]

  console.log("heapSort",heapSort(a))



  function heapSort(array) {
   console.log("1",array)
    buildMaxHeap(array);
    console.log("after build",array)
  
    // Find last element.
    lastElement = array.length - 1;
  
    // Continue heap sorting until we have
    // just one element left in the array.
    while(lastElement > 0) {
        console.log("before swap",array,0,lastElement)
      swap(array, 0, lastElement);
      console.log("after swap",array,0,lastElement)
      heapify(array, 0, lastElement);
      console.log("heapify",array,0,lastElement)
  
      lastElement -= 1
    }
  return array
  }