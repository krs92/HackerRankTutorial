function makeAnagram(a, b) {
for (let i = 0; i < a.length; i++) {
   for (let j = 1; j < b.length; j++) {
      console.log(a[i],b[j])
       
   }
    
}

}


var a = "cde"
var b = "abc"


console.log(makeAnagram(a,b))