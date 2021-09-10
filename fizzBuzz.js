// Write your code here
        //if i is a multiple of 3/ i %3 === 0 && i % 5 {return 'FizzBuzz'}
        //if i is a multiple of 3 but NOT 5/i %5 === 0 && i % 3!==0 {return Fizz} 
        //if i is a multiple of 5 but NOT 3/i %3 === 0 && i % 5!==0 {return Buzz}
        //if i is NOT multiple of 3 && if i is NOT multiple of 5/ i %3 !== 0 && i % 5!==0 {return value of i}
function fizzBuzz(n) {
    for (let i=1; i<=n; i++) {
        let flagVar = true
        switch (flagVar) {
            case i % 3 === 0 && i % 5 === 0:
                console.log('FizzBuzz')
                break;
            case i % 3 === 0:
                console.log('Fizz')
                break;
            case i % 5 === 0:
                console.log('Buzz')
                break;
            default:
                console.log(i)
                break;
        }
    }
}

fizzBuzz(15)