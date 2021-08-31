let alice = [1, 2, 3]
let bob = [3, 2, 1]


function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < b.length; j++) {
            if (a[i] > b[j]) {
                ++alicePoints
                break
            }
            if (b[j] > a[i]) {
                ++bobPoints
                break
            }
            if (a[i] === b[j]) {
                break
            }
        }
    }
    return [alicePoints, bobPoints]
}

console.log(compareTriplets(alice,bob))
