// Problem Statement - 26

// Q.No: Write a program that counts the occurrences of each character in a given string
// Input: A string
// Output: count of each character in the string
// Example:
//  -> "kalzang lama"
// k -> 1
// a -> 4
// l -> 2
// z -> 1
// n -> 1
// g -> 1
// " " -> 1
// m -> 1

function countCharacter(inputString) {
    // console.log(typeof charCount)
    if (typeof inputString !== "string") {
        throw new TypeError("Input must be string")
    }
    if (inputString.trim() === "") {
        throw new Error("Input should not be empty")
    }
    const normalized = inputString.toLowerCase()

    let charCount = {}
    for (let i = 0; i < normalized.length; i++) {
        if (!charCount[normalized[i]]) {
            charCount[normalized[i]] = 0
        }
        charCount[normalized[i]]++
    }
    // console.log(charCount);
    return charCount
}

const test = [
    "kalzang lama",
    "121312",
    127,
    "",
    " ",
    -99,
    undefined,
    NaN,
    null,
    Infinity
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, countCharacter(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})

// another way to do
// function countCharacter(inputString) {
//     if (typeof inputString !== "string") {
//         throw new TypeError("Input must be string")
//     }
//     if (inputString.trim() === "") {
//         throw new Error("Input should not be empty")
//     }
//     inputString = inputString.toLowerCase()
//     const splittedInputString = inputString.split("")
//     const charCount = splittedInputString.reduce((acc, char) => {
//         if (!acc[char]) {
//             acc[char] = 0
//         }
//         acc[char]++
//         return acc
//     }, {})
//     return charCount
// }