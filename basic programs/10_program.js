// Problem statement - 10

// Q.No: Write a function that calculates and prints the sum of the digits of a given number
// Input: A number, positive integer -> 12, 34, 123, 1234
// Return: sum of all digits
// Example:
// 12 -> 1 + 2 -> 3
// 34 -> 3 + 4 -> 7
// 123 -> 1 + 2 + 3 -> 6
// 477 -> 4 + 7 + 7 -> 18

function sumOfDigits(inputNumber) {
    // console.log(inputNumber);
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input should be of type number")
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("Input should not be NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("Input should be finite number")
    }
    if (!Number.isInteger(inputNumber)) {
        throw new TypeError("Input should be an integer")
    }
    if (inputNumber < 0) {
        throw new RangeError("Input should be a positive integer")
    }
    let inputNumberToString = inputNumber.toString()
    // console.log(inputNumberToString);
    // console.log(typeof inputNumberToString);

    let result = 0;
    for (const digit of inputNumberToString) {
        // console.log("DIGIT: ",digit);
        result += Number(digit);
    }
    // console.log(result)
    return result
}

// test cases
const test = [
    12, // 3
    34, // 7
    123, // 6
    477, // 18
    55.43, // Input should be integer type only
    "karma", // Input should be number type only
    "23", // Input should be number type only
    -7, // Input should be positive integers
    undefined, // Input should be number type only
    null, // Input should be number type only
    NaN, //Input should not be NaN
    Infinity // Input should be finite number
]

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, sumOfDigits(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000);
});
