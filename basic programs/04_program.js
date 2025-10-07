// Problem Statement - 4

// Q.NO: Write a program to find weather checkNumberIfEvenOrOdd is even or odd
// The modulus operator, typically represented by the symbol %, calculates the remainder of a division operation

function checkNumberIfEvenOrOdd(inputNum) {
    // console.log(inputNum)
    if (typeof inputNum !== "number") {
        throw new TypeError("Input should be number type!")
    }
    if (Number.isNaN(inputNum)) {
        throw new RangeError("Input should not be NaN")
    }
    if (!Number.isFinite(inputNum)) {
        throw new RangeError("Input should be finite")
    }
    if (!Number.isInteger(inputNum)) {
        throw new TypeError("Neither odd nor even (not an integer)")
    }
    if (inputNum < -1) {
        throw new RangeError("Input must be greater or equal than zero")
    }
    return inputNum % 2 === 0 ? "Even" : "Odd";
}

// test cases
const test = [
    6, // Even
    11, // Odd
    -7, // input must be greater or equal than zero
    4.4, // Neither odd nor even (not an integer)
    "string", // Input should be number type!
    undefined, // Input should be number type!
    Infinity, // Input should be finite only
    null, // Input should be number type!
    NaN // Input should not be NaN
]

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, checkNumberIfEvenOrOdd(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
})
