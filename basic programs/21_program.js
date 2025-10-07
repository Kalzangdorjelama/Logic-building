// Problem Statement - 21

// Q.No: Write a function that counts and returns the number of words in a sentence
// Input: A sentence
// Return: number of words
// Example:
// --> "This is a sentence" : 4
// --> "What is the date today" : 5

function countWords(inputWord) {
    // console.log(inputWord)
    if (typeof inputWord !== "string") {
        throw new TypeError("Input must be a string")
    }
    if (inputWord.trim().length === 0) {
        throw new RangeError("Input string is empty, please provide a sentence")
    }
    const inputWordSplitted = inputWord.trim().split(" ")
    // console.log(inputWordSplitted);

    const words = inputWordSplitted.filter(element => element !== "")
    // console.log(nonemptyElement);
    return words.length
}

// test cases
const test = [
    "This is a sentence",
    "What is the date today",
    "   This   is a  sentence ",
    "hello are good to go for hiking",
    "",
    " ",
    "Hello\tworld",
    "Hello\nworld",
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, countWords(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})


