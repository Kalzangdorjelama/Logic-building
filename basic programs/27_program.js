// Problem Statement - 27

// Q.No: Write a program that checks if a given string is in alphabetical order
// Input: A string
// Output:
// -> true if all characters are in alphabetical order
// -> false if characters are NOT in alphabetical order
// Example:
// -> "acehkosvz" : true
// -> "abcab" : false

// Note:
// console.log("a".charCodeAt()); // 97
// console.log("z".charCodeAt()); // 122

// console.log("A".charCodeAt()); // 65
// console.log("Z".charCodeAt()); // 90

function checkAlphabeticalOrder(charCodes) {
    // console.log(result)
    for (let index = 0; index < charCodes.length - 1; index++) {
        if (!(charCodes[index] <= charCodes[index + 1])) {
            return false
        }
    }
    return true
}

function isStringInAlphabeticOrder(inputString) {
    // console.log(inputString)
    if (typeof inputString !== "string") {
        throw new TypeError("Input should be a string type")
    }
    if (inputString.trim() === "") {
        throw new RangeError("Input should not be empty")
    }
    const normalized = inputString.toLowerCase().replace(/ /g, "")


    let charCodes = []
    for (let index = 0; index < normalized.length; index++) {
        // console.log(inputString[index], inputString[index].charCodeAt())
        // We use this numeric ordering to check if the string is in order.
        charCodes.push(normalized[index].charCodeAt())
    }
    // console.log(result);
    return checkAlphabeticalOrder(charCodes)


    // ================== More readability=====================
    // const charCodes = [...normalized].map(ch => ch.charCodeAt())
    // return checkAlphabeticalOrder(charCodes)
    // ========================================================
}

// test cases
const test = [
    "acehkosvz", // true
    "abcab", // false
    "abdfghijkz", // true
    "opqrsta", // false
    "acehkosv z", // true
    "a ce hko sv z", // true
    "AcE hkOSv z", // true
    "", // Input should not be a empty
    77, // Input should be a string type
    undefined, // Input should be a string type
    -2, // Input should be a string type
    null, // Input should be a string type
    Infinity, // Input should be a string type
    NaN // Input should be a string type
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, isStringInAlphabeticOrder(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})

// Note:
// Normalize = clean + standardize the data so your logic works consistently without worrying about variations (like uppercase vs lowercase, spaces, or special symbols).