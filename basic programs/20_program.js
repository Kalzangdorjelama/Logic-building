// Problem Statement - 20

// Q.No: Write a function that weather a number is prime or not.
// Input: A number
// Return: true if prime and false if not prime
// Prime number: A number that can only be divided by itself and 1 without remainders

// Example of 5:
// --> 1 -> 5 % 1 -> 0
// --> 2 -> 5 % 2 -> 1
// --> 3 -> 5 % 3 -> 2
// --> 4 -> 5 % 3 -> 1
// --> 5 -> 5 % 5 -> 0
// The prime numbers from 1 to 100 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

function isPrimeNumber(inputNumber) {
    // console.log(inputNumber)
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input must be number")
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("Input should not be NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("Input must be a finite number")
    }
    if (!Number.isInteger(inputNumber)) {
        throw new TypeError("Input must be integer number")
    }
    if (inputNumber <= 1) {
        throw new RangeError("Input must be greater than 1")
    }
    if (inputNumber === 2) {
        return true
    }

    for (let index = 2; index <= Math.sqrt(inputNumber); index++) {
        // console.log(index);
        if (inputNumber % index === 0) {
            return false
        }
    }
    return true
}

// console.log(isPrimeNumber(9))

// console.log(isPrimeNumber(1))

// console.log(isPrimeNumber(2))

// console.log(isPrimeNumber(5))

// console.log(isPrimeNumber(-8))

// console.log(isPrimeNumber("1"))

// console.log(isPrimeNumber(7.8))

// console.log(isPrimeNumber("kalzang"))

// console.log(isPrimeNumber(undefined))

// console.log(isPrimeNumber(null))

// console.log(isPrimeNumber(Infinity))

// console.log(isPrimeNumber(NaN))

// test Cases

const test = [
    2,
    5,
    29,
    97,
    1,
    9,
    34,
    -8,
    "1",
    7.8,
    "kalzang",
    undefined,
    null,
    Infinity,
    NaN
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, isPrimeNumber(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})









