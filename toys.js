var t =[1, 12, 5, 111, 200, 1000, 10]




function sort(a) {
    var temp
    for (let j = 0; j < a.length; j++) {
        
       for (let i = 0; i < a.length; i++) {
        //    console.log(a[i])
           if(a[i]>a[i+1]){
            temp = a[i]
            a[i] = a[i+1]
            a[i+1] = temp
           }
       }
        
    }
    console.log(a)
}




console.log(sort(t))