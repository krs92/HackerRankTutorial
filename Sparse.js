

function triplets(a, b, c) {
    var count = 0
for (let i = 0; i < a.length; i++) {
   for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        
         if(a[i]<=b[j] && b[j] >=c[k]){
            console.log(a[i],b[j],c[k])
            // console.log(count++)
         }
        
      }
       
   }
 

}
// console.log(count++)
}


var a = [1, 3, 5, 7]
var b =[5, 7, 9]
var c =[7, 9, 11, 13]
triplets(a, b, c)
// console.log(triplets(a, b, c));
