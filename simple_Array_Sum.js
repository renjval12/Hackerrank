let array = [1, 2, 3, 4, 10, 11]
function simpleArraySum(ar) {
    let sumOfArray = 0
    for (let i = 0; i < ar.length; i++) {
        sumOfArray += ar[i]
    }
    return sumOfArray
}

console.log(simpleArraySum(array))