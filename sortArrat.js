var a = [9,8,3,4,2]

// function sort(a) {
//     var temp
//     for (let i = 0; i < a.length-1; i++) {
//         for (let j = 0; j < a.length-1; j++) {
//             if(a[i] > a[i+1]){
//                  temp = a[i+1] 
//                 a[i+1] = a[i]
//                 a[i] = temp
//             }     
//         }
              
//         console.log(a)  
//     }
//     // console.log(a)
// }


// function sort(a) {
//     var temp
//     for (let j = 0; j < a.length-1; j++) {
//       for (let i = 0; i < a.length-1; i++) {
//           console.log(a[i],a[i+1])
//             if(a[i]>a[i+1]){
//                 temp = a[i+1] 
//                 a[i+1] = a[i]
//                 a[i] = temp
//             }

//       }
        
//     }
//     console.log(a)
    
// }

function sort(array) {
    var done = false
    while(!done){
        done = true
        for (let i = 1; i < array.length; i++) {
            // console.log(a[i])

            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
              }
              console.log(array)
        }
    }    
}
console.log(sort(a))
