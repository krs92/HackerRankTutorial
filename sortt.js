var a = [5, 3, 0, 2, 6, 2, 0, 7, 2, 5]

function sort(a) {
    // console.log(a)
    var temp
    for (let j = 0; j < a.length; j++) {
       for (let i = 0; i < a.length; i++) {
           if(a[i]>a[i+1]){
            temp = a[i]
            a[i] = a[i+1]
            a[i+1] = temp

           }
           
       }
console.log(a);

        
    }
}

console.log(sort(a))