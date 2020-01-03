function reverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
        console.log(arr)
    }
}

var a = [1,2,3,4]
console.log(reverse(a))