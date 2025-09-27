// Problem statement - 15

// Q.No: Write a function that counts and prints the number of vowels and consonants in a given string
// Input : String
// Return : Vowel and Consonant count
// Vowel : a, e, i, o, u
// Consonant : All other character
// Example :
// --> "Hello World" => 3 vowels and 7 consonants
// --> "kalzang Dorje lama" => 6 vowels and 10 consonants

function countVowelsConsonants(inputString) {
    // console.log(inputString);
    if (typeof inputString !== "string") {
        throw new TypeError("Input must be string")
    }
    const vowels = "aeiou";
    let vowelsCount = 0;
    let consonantsCount = 0;

    inputString = inputString.toLowerCase().replace(/[^a-z]/g, "")

    for (let index = 0; index < inputString.length; index++) {
        if (vowels.includes(inputString[index])) {
            vowelsCount++
        } else if (/^[a-z]$/.test(inputString[index])) {
            consonantsCount++
        } else {
            console.log(inputString[index], "Neither vowels nor consonent")
        }
    }
    // console.log("vowelsCount :", vowelsCount, "consonantsCount :", consonantsCount);
    return { vowelsCount, consonantsCount }
}
console.log(countVowelsConsonants("Hello World"));

const test = [
    "Hello World",
    "Kalzang Dorje lama",
    "Hello Worl d",
    "kalzang Dorje lama@$",
    "7",
    7,
    7.7,
    NaN,
    undefined,
    null,
    Infinity
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, countVowelsConsonants(num))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message);
    }
})

// Note:
// [a-z] → lowercase letters a through z
// Meaning: Matches any single lowercase letter from a to z.
// Character class: The square brackets [] define a set of characters to match.
// Range: The hyphen - specifies a range from a to z.

// Note:
// [^a-z] → anything that is not a lowercase letter
// Caret ^ inside []: Negates the class.
// Meaning: Matches any character that is NOT in the range a–z.