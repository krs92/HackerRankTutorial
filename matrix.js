


// function matrix(n) {
//     let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
//     let counter = 1;
//     let startCol = 0;
//     let endCol = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while (startCol <= endCol && startRow <= endRow) {
//         for (let i = startCol; i <= endCol; i++) {
//             result[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;
//         for (let j = startRow; j <= endRow; j++) {
//             result[j][endCol] = counter;
//             counter++;
//         }

//         endCol--;

//         for (let i = endCol; i >= startCol; i--) {
//             result[endRow][i] = counter;
//             counter++;
//         }

//         endRow--;
//         for (let i = endRow; i >= startRow; i--) {
//             result[i][startCol] = counter;
//             counter++;
//         }

//         startCol++;

//     }

//     return result;

// }

// console.log(matrix(4))


// var matrix = [],
//     H = 4, // 4 rows
//     W = 6; // of 6 cells

// for ( var y = 0; y < H; y++ ) {
//     matrix[ y ] = [];
//     // console.log(matrix);
    
//     for ( var x = 0; x < W; x++ ) {
//         matrix[ y ][ x ] = "foo";
//     }
// }

// console.log( matrix);




function mat(m,n){
    var array = []
    for (let i = 0; i < m; i++) {
    //    console.log();
    array[i] = []
    for (let j = 0; j < n; j++) {
        array[i][j]= "ss"
        //   console.log("
        
           
       }
       
       console.log(array)
    }

}

console.log(mat(4,4))