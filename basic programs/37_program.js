// Problem Statement - 37

// Q.NO: Write a program that finds all occurrences of a given word in a big string.
// Input: Big string, word to find
// Output:
// -> Array of all starting indexes where the word exists in the Big string

// Examples:
// -> Big String: "This is a big string with the word big repeated in the big string"
// -> Word to find: big
// Output: [10, 35, 55]

function findWordOccurrences(searchWord, text) {
    // console.log(searchWord, text)

    if (typeof searchWord !== "string" || typeof text !== "string") {
        throw new TypeError("Input should be string")
    }
    if (searchWord.length === 0 || text.length === 0) {
        throw new RangeError("Input should not be empty")
    }

    searchWord = searchWord.trim()
    text = text.trim()
    let occurrences = []

    let index = text.indexOf(searchWord)
    // console.log(index);
    while (index !== -1) {
        occurrences.push(index)
        index = text.indexOf(searchWord, index + 1)
    }
    return occurrences
}

// test cases
const test = [
    ["big", "This is a big string with the searchWord big repeated in the big string"],
    ["big", ""],
    ["big", "hello i am jack dai"],
    ["1", "234151"],
    ["big", undefined]
]

// test.forEach((input, index) => {
//     const [searchWord, text] = input
//     try {
//         console.log(`Test ${index + 1} | input ${JSON.stringify(input)} -> Success :`, findWordOccurrences(searchWord, text))
//     } catch (error) {
//         console.log(`Test ${index + 1} | input ${JSON.stringify(input)} -> Error :`, error.message)
//     }
// })

// 1. If input is an array
const input = [["big", "This is a big string"], ["hero", "james bond"]];
input.forEach((input) => {
    try {
        console.log(`${JSON.stringify(input)}`)
    } catch (error) {
        console.log(error.message)
    }
})

// ============================================= imp Notes ====================================================
// Template Literals & JSON.stringify() — Short Note

// Using an array inside a template literal (`${array}`)
// 👉 Converts the array implicitly with .toString(),
// 👉 Which joins elements with commas.

// `${["a", "b"]}`  // "a,b"
// ["a", "b"].toString()  // "a,b"

// Using JSON.stringify(array) inside a template literal
// 👉 Converts the array into a JSON string, preserving brackets and quotes.

// `${JSON.stringify(["a", "b"])}`  // "["a","b"]"

// JSON.stringify() keeps the structure (arrays → [], objects → {}),
// while implicit conversion just makes it a plain string.

// ✅ In short:

// `${array}` → comma-separated string

// `${JSON.stringify(array)}` → proper JSON with brackets

// ==============================================================================================================