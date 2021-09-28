

function diagonalDifference() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let len = arr.length;
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    let difference = 0
    for (let i = 0, j = len - 1; i < len; i++, j--) {
        leftDiagSum += arr[i][i]
        rightDiagSum += arr[i][j];
        difference = leftDiagSum - rightDiagSum
    }
    return Math.abs(difference)
}

console.log(diagonalDifference())
