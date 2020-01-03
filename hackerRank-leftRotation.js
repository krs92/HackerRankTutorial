// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .
//Sample input 
// 5 4
// 1 2 3 4 5
var length = 5, n = 3, array = [1, 2, 3, 4, 5]

function rotLeft(a, d) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;
}

console.log(rotLeft(array,n))