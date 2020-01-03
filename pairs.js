function pairs(k, arr) {
  // console.log("insdie",arr.length)
  var count = 0
     for (let index = 0; index < arr.length; index++) {
        //  console.log("i----->",arr[index]);
        for (let j = index + 1; j < arr.length; j++) {
          //  console.log("j----->",arr[j]);
           if(arr[index] - arr[j] == k || arr[j] - arr[index] == k || arr[j] ==k){
               console.log("Found",arr[index],arr[j])
               count++
           }
          
          
        }
        return count
     }
 
 }

var a  = [1, 5, 3, 4, 2]
// 1 5 3 4 2  

k = 2

console.log(pairs(k,a))