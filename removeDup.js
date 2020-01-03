function geeksforgeeks(str) {
    var result = "";
    var freq = {};
    for(i=0;i<str.length;i++){
       let char = str[i];
       console.log(freq[char])

       if(freq[char]) {
        //    console.log(freq[char])
        freq[char]++;      
       } else {
        //    console.log("freq[char]",freq[char])
        freq[char] =1
        result = result+char;
       }
    }
    return result;
    
}


var s = "geeksforgeeks"

console.log(geeksforgeeks(s))
