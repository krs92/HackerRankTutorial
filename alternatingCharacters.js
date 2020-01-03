function alternatingCharacters(s) {
 var count = 0
var pre = s[0]
// console.log(pre)
for (let i = 1; i < s.length; i++) {
   if (s[i]== pre) {
       count++
   }
   else {
       pre = s[i]
   }
    console.log(count)
}
}


var s = "AAABBB"
console.log(alternatingCharacters(s))