function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
const sum = (arr)=>{
       return arr.reduce((sum, value) => sum + value, 0)
   }

   let sum1 = sum(h1);
   let sum2 = sum(h2);
   let sum3 = sum(h3);
   let min = Math.min(sum1,sum2,sum3); 
    
   console.log(sum1,sum2,sum3,min)
   while(true){
       if(sum1>min){
           sum1 -= h1.shift();
           console.log("After Sfigt",sum1)
       }
       if(sum2>min){
           sum2 -= h2.shift();
           console.log("After Sfigt2",sum2)
       }
       if(sum3>min){
           sum3 -= h3.shift();
           console.log("After Sfigt3",sum3)
       }
       
       if(sum1 === sum2 && sum2 === sum3){
          return min
       }
       min = Math.min(sum1,sum2,sum3);
   } 
    
}

var h1 = [3, 2, 1, 1, 1]
var h2 = [ 4, 3, 2]
var h3 = [1, 1, 4, 1]

console.log(equalStacks(h1,h2,h3))