var a = 5

function binary(n) {
var arr = [];
    
while(n != 0){
    if (n%2 == 0)
        arr.push(0);
    if (n%2 == 1)
        arr.push(1);
    n = Math.floor(n/2);
}



var max = 0;
    var cur = 0;
for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] == 1)
        cur++;
    else if (arr[i] == 0){
        if (cur > max)
            max = cur;
        cur = 0;
    }
}
console.log("cur",cur)
}

console.log(binary(a))