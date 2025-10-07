// Problem Statement - 28

// Anagram is a word that's formed by rearranging the letters of another word.
// Q.No: Write a program that checks if two given string are anagrams of each other
// Input: Two string
// Output:
// -> true if two string are anagrams
// -> false if two string are not anagrams

// Example:
// -> cat, act
// -> elbow, below
// -> night, thing
// -> heart, earth
// -> pools, spool

function isAnagram(str1, str2) {
    // console.log(str1, str2)
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new TypeError("Input should be string type")
    }
    str1 = str1.toLowerCase().replace(/ /g, "")
    str2 = str2.toLowerCase().replace(/ /g, "")

    if (str1.length !== str2.length) {
        return false
    }
    let objStr1 = {}
    let objStr2 = {}

    for (let index = 0; index < str1.length; index++) {
        if (!objStr1[str1[index]]) {
            objStr1[str1[index]] = 0
        }
        if (!objStr2[str2[index]]) {
            objStr2[str2[index]] = 0
        }
        objStr1[str1[index]]++
        objStr2[str2[index]]++
    }
    // console.log(objStr1);
    // console.log(objStr2);

    for (let key in objStr1) {
        // console.log(objStr1.hasOwnProperty(key));
        if (objStr1[key] !== objStr2[key]) return false
    }
    return true
}

// console.log(isAnagram("cat", "act"))

// console.log(isAnagram("pools", "spoool"))

// console.log(isAnagram("night", "thing"))

// console.log(isAnagram("elbow", "below"))

// console.log(isAnagram("heart", "earth"))


const test = [
    ["cat", "act"],
    ["pools", "spoool"],
    ["night", "thing"],
    ["elbow", "below"],
    ["heart", "earth"]
    ["", ""],
    [1, 4],
    [undefined],
    ["hero", "heros"]
]

test.forEach((num, index) => {
    try {
        const [str1, str2] = num
        // console.log(str1, str2);
        console.log(`Test ${index + 1} | input ${num} -> Success :`, isAnagram(str1, str2))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})



