function beautifulBinaryString(b) {
    var count = 0
for (let i = 0; i < b.length-2; i++) {
    if(b[i]==0 && b[i+1]==1 && b[2] == 0){
        count++
        i += 2;
    }    
   
}
return count

}


var b  = "010876543456010101101"
console.log(beautifulBinaryString(b))