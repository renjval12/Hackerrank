
let leftDiagSum = 0;
let rightDiagSum = 0;
let difference = 0
function diagonalDifference(arr) {
    let len = arr[0].length;
    
    for (let i = 0, j = len - 1; i < len; i++, j--) {
        leftDiagSum += arr[i][i]
        rightDiagSum += arr[i][j];
    difference = leftDiagSum - rightDiagSum

    }
    return Math.abs(difference)
}

console.log(diagonalDifference())
