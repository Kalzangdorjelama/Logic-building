// Problem statement - 6

// Q.NO: Write a function smallestNumber that finds and returns the smallest number from an array of numbers.

// input : [7, 5, -8, 1]  // -8

function getSmallestNumber(inputArr) {
    // console.log(inputArr);
    const inputArrLength = inputArr.length;
    // console.log(inputArrLength);
    if (!Array.isArray(inputArr)) {
        throw new Error("Input must be a array");
    }
    if (inputArr.length === 0) {
        throw new RangeError("Input array should not be empty!")
    }
    for (let index = 0; index < inputArr.length; index++) {
        // console.log(inputArr[index]);
        if (typeof inputArr[index] !== "number") {
            throw new TypeError(`Element at index ${index} is not a number type`)
        }
        if (Number.isNaN(inputArr[index])) {
            throw new RangeError(`Element at index ${index} is a NaN`);
        }
        if (!Number.isFinite(inputArr[index])) {
            throw new RangeError(`Element at index ${index} is not a finite number`);
        }
        if (!Number.isInteger(inputArr[index])) {
            throw new TypeError(`Element at index ${index} is not a integer type of number`);
        }
    }

    let index = 1
    let smallestNumber = inputArr[0]  // 7
    while (inputArrLength >= index) {  // 4 > 0 , 4 > 1, 4 > 2 , 4 > 3 , 4 > 4
        // let element = inputArr[index]
        if (inputArr[index] < smallestNumber) {
            7 < 5
            smallestNumber = inputArr[index]
        }
        // console.log(inputArr[index]); // 7 , 5 , -8 , 1
        index++
    }
    // console.log(smallestNumber);
    return smallestNumber
}

// test cases
const test = [
    [7, 5, -8, 1],  // -8
    [3, 5, 6, 1.5],
    [3, 4, 5, "sorang"],  // Element at index 3 is not a number type
    [], // Input array should not be empty!
    [2.4, 6, 7], // Element at index 0 is not a integer type of number
    [undefined, 7, 1], // Element at index 0 is not a number type
    [2, 8, null], // Element at index 2 is not a number type
    [7, 2, NaN],  // Element at index 2 is a NaN
    [1, Infinity, 9] // Element at index 1 is not a finite number
]

test.forEach((num, index) => {
    // console.log(num);
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, getSmallestNumber(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
})

