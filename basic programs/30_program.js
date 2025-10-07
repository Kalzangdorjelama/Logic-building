// Problem Statement - 30
// Q.No: Write a program that gives largest Number in an array

// Example:
// Input: [20, 10, 30, 15]
// Output: 30

function largestNumberInArray(inputArray) {
    // console.log(inputArray)
    if (!Array.isArray(inputArray)) {
        throw new TypeError("Input should be an array")
    }
    if (inputArray.length === 0) {
        throw new RangeError("Input should not be empty")
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] !== "number") {
            throw new TypeError(`${JSON.stringify(inputArray[i])} element in array is not a number`)
        }
        if (isNaN(inputArray[i])) {
            throw new TypeError(`${inputArray[i]} element in array is a NaN`)
        }
        if (!isFinite(inputArray[i])) {
            throw new RangeError(`${inputArray[i]} element in an array is not a finite number`)
        }
    }
    let largestElementInArray = inputArray[0]
    for (let num of inputArray) {
        // console.log(inputArray[num])
        if (num > largestElementInArray) largestElementInArray = num
    }
    // console.log(largestElementInArray)
    return largestElementInArray
}

// test cases
const test = [
    [20, 10, 30, "15"],
    [0, -10, 2, -15],
    [0, -10, 2, NaN],
    [0, -10, 2, Infinity]
]

test.forEach((input, index) => {
    try {
        console.log(`Test ${index + 1} | input ${JSON.stringify(input)} -> Success :`, largestNumberInArray(input))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${JSON.stringify(input)} -> Error :`, error.message)
    }
})


// Note:
// const arr = [0, -10, 2, -15]
// console.log(Math.max(...arr))