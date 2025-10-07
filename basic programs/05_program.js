// Problem statement - 5

// Q.NO: Write a function that finds and prints the smallest number among three given numbers.
// input: 3 numbers
// Return: Smallest number
// Example: 3, 1, 6 -> 1
//         -1, -6, 9 -> -6
// Math.min is not allowed

// step - 1  ---> user bata input kasari lene which is 3 input here
// step - 2 ---> tyo input kasri calculate gar ne
// step - 3 ---> output Smallest number

function calculteSmallestNumber(inputnum1, inputnum2, inputnum3) {
    // console.log(inputnum1, inputnum2, inputnum3);
    if (typeof inputnum1 !== "number" || typeof inputnum2 !== "number" || typeof inputnum3 !== "number") {
        throw new TypeError("Input should be number only")
    }
    if (Number.isNaN(inputnum1) || Number.isNaN(inputnum2) || Number.isNaN(inputnum3)) {
        throw new RangeError("Input should not be NaN")
    }
    if (!Number.isInteger(inputnum1) || !Number.isInteger(inputnum2) || !Number.isInteger(inputnum3)) {
        throw new TypeError(`${inputnum1} or ${inputnum2} or ${inputnum3} should be a interger only`)
    }
    let smallestNum = inputnum1; // 1
    if (inputnum2 < smallestNum) smallestNum = inputnum2; // 1 < 3
    if (inputnum3 < smallestNum) smallestNum = inputnum3; // 6 < 1
    return smallestNum
}

// test cases
const tests = [
    [3, 1, 6],
    // [-1, -6, 9],
    // [3.3, 7, 1],
    // ["8", 6, 4],
    // ["string", 7, 9],
    // [9, 2, 7],
    // [NaN, 7, 0],
    // [null, 6, -1],
]

tests.forEach((num, index) => {
    const [num1, num2, num3] = num
    // console.log(num1, num2, num3);
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, calculteSmallestNumber(num1, num2, num3));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
})





