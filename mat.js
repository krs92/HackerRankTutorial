var c = 4;
var r = 4
var a = []
var count = 1;
for (var i = 0; i < r; i++) {
    a.push([0])
    for (var j = 1; j < c; j++) {
        a[i][j] = 0
    }
}

for (var i = 0; i < r; i++) {
    for (var j = 0; j < c; j++) {
        if (i !== j) {
            a[i][j] = count;
            count++;

        }
    }
}

console.log(a)
