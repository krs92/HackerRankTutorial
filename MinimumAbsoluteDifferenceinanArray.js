// Minimum Absolute Difference in an Array



function minimumAbsoluteDifference(arr) {
    var min = 9999999999999999999
for (let i = 0; i < arr.length-1; i++) {
 for (let j = i+1; j < arr.length; j++) {
     console.log(arr[i],arr[i+1])
        if(Math.abs(arr[i]-arr[j]) <min){
        min =  Math.abs(arr[i]-arr[j])
        }
     
 }

}
console.log(min);

}

var arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]


minimumAbsoluteDifference(arr)
