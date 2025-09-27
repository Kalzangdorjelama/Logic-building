// Problem statement - 14

// Q.No: Write a function that returns the result of raising a given number to a specified power.
// Input: Two numbers
// -> Base
// -> Exponent
// Return: Base to the power of exponent
// Example:
// 2, 3 : 2 * 2 * 2 = 8
// 5, 4 : 5 * 5 * 5 * 5 = 625
// Do not use Math.pow()

function calculatePower(base, exponent) {
    // console.log(base, exponent);
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new TypeError("Input must be numbers")
    }
    if (Number.isNaN(base) || Number.isNaN(exponent)) {
        throw new RangeError("Input must not be NaN")
    }
    if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
        throw new RangeError("Input must be finite numbers")
    }
    if (base === 0 && exponent < 0) {
        throw new RangeError("0 cannot be raised to a negative power")
    }

    let result = 1;

    // let positiveExponent;
    // let isNegativeExponent = false;

    // if (exponent < 0) {
    //     isNegativeExponent = true;
    //     positiveExponent = -exponent;
    // } else {
    //     positiveExponent = exponent;
    // }

    const isNegativeExponent = exponent < 0
    const positiveExponent = isNegativeExponent ? -exponent : exponent

    for (let i = 0; i < positiveExponent; i++) {
        result *= base;
    }

    return isNegativeExponent ? 1 / result : result;
}

// test cases
const test = [
    [2, 3],
    [5, 4],
    [1, 0],
    [0, 4],
    [2, -3],
    [-2, -2],
    [-7, -2],
    [4.5, 3],
    [0, -3],   // 0 cannot be raised to a negative power
    ["2", 3],
    [],
    [NaN, 3],
    [1, Infinity],
    [undefined, undefined],
    [7, null]
]

test.forEach((num, index) => {
    // console.log(num);
    const [base, exponent] = num
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, calculatePower(base, exponent));
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})





