// Problem statement - 17

// Q.No: Write a function that calculates and returns the average of a set of numbers.
// Input: Array of positive integer numbers
// Return: Average of numbers
// Average: Calculated by dividing the total of all the values by the number of values
// Example:
// [1, 2, 4] : (1 + 2 + 4)/3 = 2.3333...
// [1, 2, 7, 14] : (1 + 2 + 7 + 14)/4 = 6
// [1, 5, 7, 35] : (1, 5, 7, 35)/4 = 12

function getAverage(inputArr) {
    // console.log(inputArr);
    const inputArrLength = inputArr.length;

    if (!Array.isArray(inputArr)) {
        throw new Error("Input should be an array")
    }
    if (inputArr.length === 0) {
        throw new RangeError("Input array length must be greater than 0")
    }
    for (let index = 0; index < inputArrLength; index++) {
        if (typeof inputArr[index] !== "number") {
            throw new TypeError(`index=${index} of element=${inputArr[index]} is not an number type`)
        }
        if (Number.isNaN(inputArr[index])) {
            throw new RangeError(`index=${index} of element=${inputArr[index]} should not be NaN`)
        }
        if (!Number.isFinite(inputArr[index])) {
            throw new RangeError(`index=${index} of element=${inputArr[index]} should not be infinite number`)
        }
        if (!Number.isInteger(inputArr[index])) {
            throw new TypeError(`index=${index} of element=${inputArr[index]} must be integer type`)
        }
        if (inputArr[index] < 0) {
            throw new RangeError(`index=${index} of element=${inputArr[index]} must be positive integer number`)
        }
    }

    let index = 0;
    let sum = 0
    while (inputArrLength > index) {
        sum = sum + inputArr[index]
        index++
    }
    return sum / inputArrLength
}

// test cases
const test = [
    [1, 2, 4],
    [1, 2, 7, 14],
    [1, 5, 7, 35],
    [],
    "kalzang",
    [1, -8, 2, 5],
    [1, 2, 6.4],
    [1, 2, "4"],
    [1, NaN, 7],
    [1, Infinity, 7]
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, getAverage(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message);
    }
})







