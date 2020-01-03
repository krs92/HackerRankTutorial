// Perform the Havel-Hakimi algorithm on a given sequence of answers.
//  This algorithm will return true if the answers are consistent (i.e. it's possible that everyone is telling the truth) and false if the answers are inconsistent (i.e. someone must be lying):



function hh(arr) {
// console.log(arr)
    for (let i = arr.length-1; i >= 0; i--) {
        // console.log(arr[i])
       if(arr[i] === 0){
        arr.splice(i,1)

       }
    }
    console.log(arr)
}
    



console.log(hh([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]))