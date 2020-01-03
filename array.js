// 1. simple array 

// var myArray = [1, 2, 3];
// console.log(myArray[1]);


// 2. Push and pop
// Push and pop is used to push and delete element from an array (It deletes the last element)
// We use Shift and unshit to delete 
// var a = []

// a.push("a",1,2,3)
// console.log(a);
// a.shift()

// console.log(a);

var a = [0,1,2,3,9,9,4,5,6,7,8,9];
// console.log(myArray.splice(1,6));


function max(a){
    // var max= a[0]
    // var count = 0
    // for (let i = 0; i < a.length; i++) {
    //         if(a[i] >= max){
    //             max = a[i]
    //         }        
    // }
    // // console.log(max)
    // for (let j = 0; j < a.length; j++) {
    //         if(a[j]==max){
    //             count++
    //         }        
    // }
    // return count
    
}

function count(coins, sum, numCoins) {
	if (numCoins === undefined) {numCoins = coins.length;}
	if (sum == 0) {return 1;}
	if (sum < 0) {return 0;}
	if (numCoins <= 0 && sum > 0) {return 0;}
	return count(coins, sum, numCoins - 1) + count(coins, sum - coins[numCoins - 1], numCoins);
}

console.log(count([1,2,3], 4));


// console.log(max(a))
