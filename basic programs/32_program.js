// Problem Statement - 32

// Q.No: Write a program that checks if the provided password is strong or not
// Input : A password string
// Output :
// -> True if password string is strong
// -> False if password string is not strong

// Strong Password
// It should contain :
// -> Minimum 8 characters
// -> One small case character a-z // a to z any one
// -> One big case character A-Z // A to Z any one
// -> One hadDigit 0-9 // 0 to 9 any one
// -> one special character - !@

// Example:
// -> marVal7! -> true
// -> john@ -> false

// Note:
// console.log("a :", "a".charCodeAt());
// console.log("b :", "z".charCodeAt());

// console.log("A :", "A".charCodeAt());
// console.log("Z :", "Z".charCodeAt());

function isPasswordIsStrong(password) {
    // console.log(password)
    if (typeof password !== "string") {
        throw new TypeError("Input should be a string")
    }
    const normalized = password.trim().replace(/ /g, "")
    if (normalized.length <= 7) {
        throw new RangeError("PASSWORD should be minimum 8 characters")
    }
    let hasLower = false
    let hasUpper = false
    let hadDigit = false
    let hasSpecial = false

    const number = "0123456789"
    const specialChar = "!@"

    for (let i = 0; i < password.length; i++) {
        // console.log(password[i])
        let charCode = password[i].charCodeAt()
        // console.log(charCode);
        if (charCode >= 97 && charCode <= 122) {
            hasLower = true
        } else if (charCode >= 65 && charCode <= 90) {
            hasUpper = true
        } else if (number.includes(password[i])) {
            hadDigit = true
        } else if (specialChar.includes(password[i])) {
            hasSpecial = true
        }

        // else {
        //     for (let index = 0; index < specialChar.length; index++) {
        //         if (specialChar[index] === password[i]) {
        //             hasSpecial = true
        //         }
        //     }
        // }
    }
    if (!hasUpper) {
        throw new Error("One big case character A-Z is requird!")
    }
    if (!hasLower) {
        throw new Error("One big case character a-z is requird!")
    }
    if (!hasSpecial) {
        throw new Error("One special character - !@ is required!")
    }
    if (!hadDigit) {
        throw new Error("One numberber 0-9 is required!")
    }
    return hasUpper && hasLower && hadDigit && hasSpecial

}

// test cases
const test = [
    "marVal7!",
    "john@",
    "Hero 2 @ ",
    "Hero 2 @ no",
    " Hero 2 @ no ",
    "",
    7,
    undefined,
    "131231231231",
    null,
    NaN,
    Infinity,
    []
]

test.forEach((input, index) => {
    try {
        console.log(`Test ${index + 1} | input ${input} -> Success :`, isPasswordIsStrong(input))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${input} -> Error :`, error.message)
    }
})


// ==========================>   another way to do   <=============================
function isPasswordIsStrong2(password) {
    // console.log(password)
    if (typeof password !== "string") {
        throw new TypeError("Input should be a string")
    }
    const normalized = password.trim().replace(/ /g, "")
    if (normalized.length <= 7) {
        throw new RangeError("PASSWORD should be minimum 8 characters")
    }
    let hasLower = /[a-z]/.test(password)
    let hasUpper = /[A-Z]/.test(password)
    let hadDigit = /[0-9]/.test(password)
    let hasSpecial = /[!@]/.test(password)

    if (!hasUpper) {
        throw new Error("One big case character A-Z is requird!")
    }
    if (!hasLower) {
        throw new Error("One big case character a-z is requird!")
    }
    if (!hasSpecial) {
        throw new Error("One special character - !@ is required!")
    }
    if (!hadDigit) {
        throw new Error("One number 0-9 is required!")
    }
    return hasUpper && hasLower && hadDigit && hasSpecial

}

// test cases
const test2 = [
    "marVal7!",
    "john@",
    "Hero 2 @ ",
    "Hero 2 @ no",
    " Hero 2 @ no ",
    "",
    7,
    undefined,
    "131231231231"
]

test2.forEach((input, index) => {
    try {
        console.log(`Test ${index + 1} | input ${input} -> Success :`, isPasswordIsStrong2(input))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${input} -> Error :`, error.message)
    }
})


// ==================== Internally working of .test()  =========================
function myTest(str) {
    const regexStart = 'a'.charCodeAt(0); // 97
    const regexEnd = 'z'.charCodeAt(0);   // 122

    // Step 1: convert argument to string (test does this too)
    const input = String(str);

    // Step 2: iterate through each character
    for (let i = 0; i < input.length; i++) {
        const code = input.charCodeAt(i);

        // Step 3: check if the character fits the regex [a-z]
        if (code >= regexStart && code <= regexEnd) {
            return true;  // found match
        }
    }

    // Step 4: no match found
    return false;
}

// console.log(myTest("HeLLo123"));
// console.log(myTest("HELLO123")); 