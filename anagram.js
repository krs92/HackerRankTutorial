var str1 = "listen"
var str2 = "silent"


function anagram(s1,s2) {
    if(s1.length != s2.length){
        return false
    }
    
   for (let index = 0; index < s1.length; index++) {
       
       console.log(s1[index] , s2[index])
      
       
   }
    return true
}


console.log(anagram(str1,str2));

