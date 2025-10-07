// Problem statement - 11

// Q.No: Write a program to print Multiplication Table
// Input: 7
// Output:
// -> 7 * 1 = 7
// -> 7 * 2 = 14
// -> 7 * 3 = 21
// -> 7 * 4 = 28
// -> 7 * 5 = 35
// -> 7 * 6 = 42
// -> 7 * 7 = 49
// -> 7 * 8 = 56
// -> 7 * 9 = 63
// -> 7 * 10 = 70

function printMultiplicationTable(inputNumber) {
    // console.log(inputNumber)
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input should be a number type only")
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("Input should not be a NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("Input should be a finite number")
    }
    if (!Number.isInteger(inputNumber)) {
        throw new TypeError("Input should be integer type")
    }
    if (inputNumber <= 0) {
        throw new RangeError("Input should be a positive integer greater than 0")
    }
    let index = 1
    console.log(`Multiplication Table of ${inputNumber} :`);
    let result = []
    while (10 >= index) {
        if (index == 1) {
            result.push(`\n||  ${inputNumber} * ${index} = ${inputNumber * index}      ||`);
        } else if (index == 10) {
            result.push(`\n||  ${inputNumber} * ${index} = ${inputNumber * index}    ||`);
        } else {
            result.push(`\n||  ${inputNumber} * ${index} = ${inputNumber * index}     ||`);
        }
        index++
    }
    return result;
}

// test cases
const test = [
    7, // success
    99, // success
    0, // error : Input should be greater than 0 and positive integer number
    -3, // error : Input should be greater than 0 and positive integer number
    "9", // error : Input should be a number type only
    5.5, // error : Input should be integer type
    undefined, // error : Input should be a number type only
    null, // error : Input should be a number type only
    NaN, // error : Input should not be a NaN
    Infinity // error : Input should be a finite number
]

test.map((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, printMultiplicationTable(num).join(""));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
})
