function twoStrings(s1, s2) {
    var ar1= s1.split("");
    var ar2= s2.split("");
   
    var string="abcdefghijklmnopqrstuvwxyz";
    var alphabets= string.split("");
    for(var i=0; i<alphabets.length; i++){
        if(ar1.indexOf(alphabets[i])>=0 && ar2.indexOf(alphabets[i])>=0){
            return "YES";
        }
    }
    return "NO";
}


var s1= "hi"
var s2 = "world"

console.log(twoStrings(s1,s2))


