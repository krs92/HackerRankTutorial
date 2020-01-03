// function maxSubsetSum(arr) {
//     var incl = arr[0], excl = 0, excl_new,i

// // console.log(arr);
//         for (let index = 1; index < arr.length; index++) {
//             excl_new = incl > excl ? incl: excl;
//             incl = excl + arr[index]; 
//             excl = excl_new;
//         }
//         return ((incl > excl)? incl : excl); 

// }


var a =[1, 2, 3, 4, 4] 
var b =[3, 7, 4 ,6, 5]




console.log("MAxsum",maxSubsetSum(a,6))

function maxSubsetSum(a,k) {
   var low = 0
   var high = a.length -1
    while (low<high){
        console.log(low,high)
        if(a[low] + a[high] == k){
            console.log(a[low] , a[high])
            return true
        }
       
    }
}