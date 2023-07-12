const  rotate = function(matrix){
    let n = matrix.length;
    let temp = 0;
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let i = 0; i < n;i++){
        for(let j = 0; j < n/2; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }
    return matrix;
}
    

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[1,2],[3,4]])); // [[3,1],[4,2]]
console.log(rotate([[1]])); // [[1]]
console.log(rotate([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]])); // [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]]
