// function fibonacci(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
    
//     return fibonacci(n-1) + fibonacci(n-2)
//     }

// }


// console.log(fibonacci(9))

var str = "CAATTCXXXYYYXI";
var match = 'CAT'
var data = {}
var min = 0;
for (var i = str.length - 1; i >= 0; i--) {
	if (match.indexOf(str[i]) >= 0) {
		data[`${str[i]}`] = 0
	}
}
Object.keys(data).forEach(key => {
	for (var i = str.length - 1; i >= 0; i--) {
		if (key == str[i]) {
			data[`${str[i]}`] += 1;
		}
	}
});
if (Object.keys(data).length == match.length) {
	Object.keys(data).forEach((x, i) => {
		Object.keys(data).forEach((y, j) => {
			min = data[x]
			if (data[x] < data[y]) {
				min = data[x]
			}
		})
	})
}
console.log(data);
console.log(`${min} Times`);


