// Problem Statement - 31

// Q.No: Write a program that checks if a given number is a perfect number
// Perfect number : The sum of its proper divisors equals the number itself.
// Input : A positive integer
// Output :
// -> True if input number is a perfect number
// -> False if input number is not a perfect number

// Perfect number Example:
// 6, 28, 496, 8128
// The sum of its proper divisors, excluding itself, equal the number itself
// -> 6 : 1, 2, 3 -> 1 + 2 + 3 -> 6 -> true
// -> 28 : 1, 2, 4, 7, 14 -> 28 -> true
// -> 30 : 1, 2, 3, 5, 6, 10, 15 -> 42 -> false

function isPerfect(inputNum) {
    // console.log(inputNum)
    if (typeof inputNum !== "number") {
        throw new TypeError("Input should be an number")
    }
    if (inputNum <= 0) {
        throw new RangeError("Input should be greater than 0")
    }
    if (isNaN(inputNum)) {
        throw new TypeError("Input should not be NaN")
    }
    if (!isFinite(inputNum)) {
        throw new RangeError("Input should be a finite number")
    }
    const maxDivisor = Math.floor(inputNum / 2)
    let sumOfDivisors = 0
    for (let i = 1; i <= maxDivisor; i++) {
        // console.log(i)
        if (inputNum % i === 0) {
            sumOfDivisors += i
        }
    }
    // console.log(result)
    return inputNum === sumOfDivisors
}

// test cases
const test = [
    6,
    28,
    30,
    0,
    7,
    -6,
    "",
    undefined,
    null,
    NaN,
    Infinity
]

test.forEach((input, index) => {
    try {
        console.log(`Test ${index + 1} | input ${input} -> Success :`, isPerfect(input))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${input} -> Error :`, error.message)
    }
})

// ===========> more information
// 0 is not considered a perfect number because:

// Definition: A perfect number is a natural number (positive integer) equal to the sum of its proper divisors.

// Zero has infinitely many divisors:

// Every positive integer divides 0.

// So the sum of its proper divisors is effectively infinite.

// Conclusion: 0 cannot satisfy the “sum of proper divisors = number itself” rule.