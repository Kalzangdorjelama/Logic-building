// Problem statement - 8

// Q.No: Write a function that calculate factorial of a given number
// Input: A number, positive integer -> 0, 1, 4, 7....
// Return: Factorial of that number
// Factorial: Multiplication of all positive integers from 1 to a given number
// Example:
// 0! -> 1
// 1! -> 1 = 1
// 2! -> 2 * 1 = 2
// 3! -> 3 * 2 * 1 = 6
// 4! -> 4 * 3 * 2 * 1 = 24

function factorial(inputNumber) {
    // console.log(inputNumber);
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input should be a number type")
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("Input should not be NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("Input should be finite number")
    }
    if (!Number.isInteger(inputNumber)) {
        throw new TypeError("Input should be integer type only")
    }
    if (inputNumber < 0) {
        throw new RangeError("Input should be positive integer")
    }

    let result = 1;
    // console.log(typeof result);

    for (let index = inputNumber; index > 0; index--) {
        // console.log(index);
        result *= index
    }
    // console.log(result);
    return result

}

// test cases
const test = [
    0, // 1
    1, // 1
    2, // 2
    3, // 6
    4, // 24
    -7, // Input should be postitive integer
    4.4, // Input should be integer type only
    undefined, // Input should be a number type
    "karma", // Input should be a number type
    null, // Input should be a number type
    NaN, // Input should not be NaN
    Infinity // Input should be finite number
]

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, factorial(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
})
