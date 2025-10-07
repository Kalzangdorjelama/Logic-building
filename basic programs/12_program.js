// Problem statement - 12

// Q.No: Write a function that finds and prints the maximum element in an array of numbers as floating-point numbers have  to excludes.
// Input: Array of numbers
// Return: Biggest number
// Example:
// [3, 6, 1, 8, 3, 7] => 8
// [7, 84, 16, 38, 45, 76] => 84
// Do not use Array Sort
// const arr = [3, 6, 1, 8, 3, 7]
// console.log("Sorted Array :",arr.sort());

function findMaxElement(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }
    if (arr.length === 0) {
        throw new RangeError("Array must not be empty");
    }

    for (const value of arr) {
        if (typeof value !== "number") {
            throw new TypeError("Array elements must be numbers");
        }
        if (Number.isNaN(value)) {
            throw new RangeError("Array elements must not be NaN");
        }
        if (!Number.isFinite(value)) {
            throw new RangeError("Array elements must be finite numbers");
        }
        if (!Number.isInteger(value)) {
            throw new TypeError("Array elements must be integers (no floats allowed)");
        }
    }

    let max = arr[0];

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }

    // another way to do
    for (const num of arr) {
        if (num > max) {
            max = num
        }
    }

    return max;
}


// test cases
const test = [
    [3, 6, 1, 8, 3, 7], // 8
    [7, 84, 16, 38, 45, 76], // 84
    [-6, 4, 1, -4, 5, 2], // 5
    [3, 5, 6.4, 9], // Array elements must be integers (no floats allowed) 
    2, // Input must be an array
    [], // Array must not be empty
    [7, "84"], // Array elements must be numbers
    [undefined, 6, 1, 7], // Array elements must be numbers
    [3, 2, 2, null], // Array elements must be numbers
    [4, NaN, 8, 1], // Array elements must be numbers
    [1, 9, Infinity, 7] // Array elements must be finite numbers
]

test.map((num, index) => {
    // console.log(num);
    // console.log(num[index]);
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, findMaxElement(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message)
        }
    }, index * 2000);
})