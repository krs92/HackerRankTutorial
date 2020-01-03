
var arr = [4, 3, 1, 2]
function minimumSwaps(arr) {

    var counter = 0;
 
    for (var i = arr.length; i > 0; i--) {
       var minval = Math.min(...arr); 
    //    console.log("before", arr);
       var minIndex = arr.indexOf(minval);
       if (minval !== arr[0]) {
          var temp = arr[0];
          arr[0] = arr[minIndex];
          arr[minIndex] = temp; 
        //   console.log("after", arr);
          arr.splice(0, 1);
          counter++;
       } else {
          arr.splice(0, 1); 
        //   console.log("in else case")
       }
 
    } return counter;
 }

// console.log(minimumSwaps(arr))

function sum(a) {
   // var result = a => a.reduce((a,b)=>{a+b,0})
   // console.log(result)
   var sum =0 
   for(var i=0; i<a.length;i++){
      sum += a[i]
      // console.log(sum)
   }
   console.log(sum);
   

}

sum(arr)



function name(params) {
   var arrLength = arr.length;

    // create two new Arrays 
    // one record value and key separately
    // second to keep visited node count (default set false to all)

    var newArr = [];
    var newArrVisited = [];
    for (let i = 0; i < arrLength; i++) {
        newArr[i]= [];
        newArr[i].value = arr[i];
        newArr[i].key = i;
        newArrVisited[i] = false;
    }

    // sort new array by value

    newArr.sort(function (a, b) {
        return a.value - b.value;
    })

    var swp = 0;
    for (let i = 0; i < arrLength; i++) {

        // check if already visited or swapped
        if (newArr[i].key == i || newArrVisited[i]) {
            continue;
        }

        var cycle = 0;
        var j = i;
        while (!newArrVisited[j]) {

            // mark as visited
            newArrVisited[j] = true;
            j = newArr[j].key; //assign next key
            cycle++;
        }
        if (cycle > 0) {
            swp += (cycle > 1) ? cycle - 1 : cycle;
        } 

    }
    return swp;
   
}