var matrix = [[2, 3, 4,1],
              [5, 3, -1,2],
              [9, 8, -2,3],
              [9, 8, -2,4]]

function diagnolMatrix(matrix) {
    var diag1 =0,diag2=0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(i == j){
                console.log(matrix[i][j])
                diag1 += matrix[i][j]

            }
            if(i + j ===  matrix.length - 1){
                diag2 += matrix[i][j];
            }
            
            
        }
       
        
    }
    console.log("--->",diag1, "<--->",diag2+diag1)

}


diagnolMatrix(matrix)