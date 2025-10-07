// Problem Statement - 24

// Q.No: Write a program that prints numbers from 1 to N , replacing
// -> multiples of 3 with "Fizz"
// -> multiples of 5 with "Buzz"
// -> multiples of both 3 & 5 with "FizzBuzz"
// Input: A positive number
// Example:
// -> Input: 15
// -> output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

function printFizzBuzz(inputNumber) {
    // console.log(inputNumber)
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input should be a number only")
    }
    if (inputNumber <= 0) {
        throw new RangeError("input should be a positive number")
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("Input should not be a NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("Input should be a finite number")
    }
    let fizzBuzzResult = []
    for (let index = 1; index <= inputNumber; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            fizzBuzzResult.push("FizzBuzz")
        } else if (index % 3 === 0) {
            fizzBuzzResult.push("Fizz")
        } else if (index % 5 === 0) {
            fizzBuzzResult.push("Buzz")
        } else {
            fizzBuzzResult.push(index)
        }
    }
    return fizzBuzzResult
}

const test = [
    15,
    25,
    5,
    "hello",
    -7,
    0,
    "",
    "20",
    undefined,
    null,
    Infinity,
    NaN
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, printFizzBuzz(num).join(", "))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})