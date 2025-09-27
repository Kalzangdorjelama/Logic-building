// Problem statement - 13

// Q.No: Write a function that checks if a string is palindrome or not
// Input: A string
// Return: boolean, true if Palindrome and false if not palindrome
// A palindrome is a word that reads the same backward or forward
// Example:
// madam
// level
// abba

function isPalindrome(inputString) {
    // console.log(inputString);
    if (typeof inputString !== "string") {
        throw new TypeError("Input must be string")
    }

    inputString = inputString.toLowerCase().trim()
    const inputStringLength = inputString.length
    const halfLengthOfString = Math.floor(inputStringLength / 2)
    // console.log(inputStringLength, halfLengthOfString);

    for (let index = 0; index < halfLengthOfString; index++) {
        // console.log(inputString[index], inputString[inputStringLength - index]);
        if (inputString[index] !== inputString[inputStringLength - 1 - index]) {
            return false
        }
    }
    return true
}

// test cases
const test = [
    "abca",  // false
    "madam", // true
    "level", // true
    "abba", // true
    "A man, a plan! Panama", // true
    "ab", // false
    "-abba-", // true
    "aPpA", // true
    " aPpA ", // true
    "marval", // false
    "77", // true
    "776", // fasle
    77, // Input must be string
    "7.7", // true
    "7.73", // false
    NaN, // Input must be string
    undefined, // Input must be string
    null, // Input must be string
    Infinity // Input must be string
]

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, isPalindrome(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message)
        }
    }, index * 2000)
})








