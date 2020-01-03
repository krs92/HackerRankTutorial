
function partitionArray(k, arr) {
// console.log(numbers)
// let arr = [1, 2, 3, 4];
count = 0
       for (let i = 0; i <= arr.length; i++) {
          let a = [];
          for (let j = i; j < arr.length; j++) {
            a.push(arr[j]);    
            //   console.log(a);  
              if(a.length == k){
                  console.log(a)

                  count++
              }   
          }  
         
        }
        console.log("aunb",count)
}


var k = 2

var numbers = [1,2,3,4]


console.log(partitionArray(k,numbers))