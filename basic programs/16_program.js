// Problem statement - 16

// Q.No: Write a function that finds all the factors of a given number.
// Input: number, positive integer
// Return: Factors of a number
// Factor: Is a number that divides the given number evenly or exactly, leaving no remainder
// Example:
// 4: 1, 2, 4
// 14: 1, 2, 7, 14
// 35: 1, 5, 7, 35

function findFactors(inputNumber) {
    // console.log(inputNumber);
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input must be number");
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("Input should not be NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("Input must be finite numbers")
    }
    if (!Number.isInteger(inputNumber)) {
        throw new TypeError("Input must be integer")
    }
    if (inputNumber < 0) {
        throw new RangeError(`inputNumber = ${inputNumber} must be greater than zero`)
    }
    let factors = []
    for (let index = 1; index <= inputNumber; index++) {
        // console.log(index);
        if (inputNumber % index === 0) {
            factors.push(index)
        }
    }
    // console.log(factors);
    return factors
}

// test cases
const test = [
    4, // [ 1, 2, 4 ]
    14, // [ 1, 2, 7, 14 ]
    35, // [ 1, 5, 7, 35 ]
    8.5, // Input must be integer
    "12", // Input must be number
    -18, // inputNumber = -18 must be greater than zero
    "kalzang", // Input must be number
    undefined, // Input must be number
    null, // Input must be number
    NaN, // Input should not be NaN
    Infinity // Input must be finite numbers
]

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input ${num} -> Success :`, findFactors(num))
        } catch (error) {
            console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
        }
    }, index * 2000)
})
