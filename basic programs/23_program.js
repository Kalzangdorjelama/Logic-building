// Problem Statement - 23

// Q.No: Write a program that checks if a number is Armstrong or not
// Input: A number
// Output: True if a number is Armstrong and false if number is not a Armstrong
// Armstrong: Its a number that is equal to the sum of its own digits raised to the power of the number of digits
// Example:
// -> 153 = (1 ^ 3) + (5 ^ 3) + (3 ^ 3) = 1 + 125 + 27 = 153 = true
// -> 370 = (3 ^ 3) + (7 ^ 3) + (0 ^ 3) = 27 + 343 + 0 = 370 = true
// -> 243 = (2 ^ 3) + (4 ^ 3) + (3 ^ 3) = 8 + 64 + 27 = 99 = false
// More example : 371, 407, 1634, 8208, 9474, 54748, 92727

function isArmstrongNumber(inputNumber) {
    // console.log(inputNumber)
    if (typeof inputNumber !== "number") {
        throw new TypeError("Input should be number type")
    }
    if (inputNumber < 0) {
        throw new RangeError("Negative number are not armstrong")
    }
    if (Number.isNaN(inputNumber)) {
        throw new RangeError("input number should not be NaN")
    }
    if (!Number.isFinite(inputNumber)) {
        throw new RangeError("input should be a finite number")
    }
    const numberStr = inputNumber.toString()
    // console.log(typeof inputNumber)
    const numDigits = numberStr.length
    // console.log(typeof numDigits)
    let armstrongSum = 0
    let index = 0
    while (index < numDigits) {
        // console.log(typeof inputNumber[index])
        armstrongSum += Number(numberStr[index]) ** numDigits
        // console.log(armstrongSum)
        index++
    }
    // console.log(typeof armstrongSum)
    return inputNumber === armstrongSum
}

// Note:
// armstrongSum += numberStr[index] ** numDigits
// above code works numberStr[index] which is string type sometimes JavaScript implicitly converts the string digit to a number — and that's why your original code works without an explicit Number().

const test = [
    153,
    370,
    99,
    371,
    407,
    92727,
    0,
    -1,
    "",
    "hello",
    NaN,
    undefined,
    null,
    Infinity,
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, isArmstrongNumber(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})