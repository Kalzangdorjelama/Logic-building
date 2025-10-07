// Problem statement - 7

// Q.NO: Write a function that returns the reverse of a string
// Input: A string
// Return: reversed string
// Example: "Baburao Ganpatrao Apte" -> etpA oartapnaG oarubaB

function reverseString(inputString) {
    // console.log(inputString);
    // console.log(inputString.length);
    if (inputString.length <= 0) {
        throw new RangeError("Input length must be greater than 0")
    }
    if (typeof inputString !== "string") {
        throw new TypeError("Input must be string type only")
    }
    const inputLengthString = inputString.length - 1
    let result = ""
    for (let index = inputLengthString; index >= 0; index--) {
        // console.log(inputString[index]);
        result += inputString[index]
    }
    // console.log(result);
    return result

}

// test cases
const test = [
    "Baburao Ganpatrao Apte", // etpA oartapnaG oarubaB
    "7", // 7
    "4.44", // 44.4
    "-1", // 1-
    "", // Input length must be greater than 0
    undefined, // Input must be string type only
    null, // Input must be string type only
    NaN, // Input must be string type only
    Infinity // Input must be string type only
]

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, reverseString(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
})

// another way to do
function reverseString2(inputString) {
    return typeof inputString === "string" ? inputString.split("").reverse().join("") : "Error input must be a string.";
}

console.log(reverseString2("kalzang"));


// Note:
// split("") = break each character apart
// join("") = concatenate them back with nothing in between
