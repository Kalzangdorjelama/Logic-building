// Problem statement - 9

// Q.No: Write a function that tells if provided year is a leap year or not
// Input: A Number, positive integer -> 1900, 2023, 2033
// Return: true if leap year, false if not leap year
// Leap year:
// Every 4th year is a leap year
// Leap year has 366 days
// Normal year has 365 days
// February has 28 days or 29 days
// Ignoring the exception of 1700, 1800, 1900 which are not leap year

//Example:
// 2000 -> leap year -> true
// 2023 -> not a leap year -> false
// 2024 -> leap year -> true

function isLeapYear(year) {
    // console.log(year);
    if (typeof year !== "number") {
        throw new TypeError("Input should be of type number");
    }
    if (Number.isNaN(year)) {
        throw new RangeError("Input should not be NaN");
    }
    if (!Number.isFinite(year)) {
        throw new RangeError("Input should be finite only");
    }
    if (!Number.isInteger(year)) {
        throw new TypeError("Input should be an integer only");
    }
    if (year <= 0) {
        throw new RangeError("Input should be a positive integer");
    }

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// test cases
const test = [
    1,      // false
    2000,   // true
    2023,   // false
    2024,   // true
    1900,   // false
    1700,   // false
    1800,   // false
    2400,   // true
    0,      // error
    -2003,  // error
    "karma",// error
    undefined, // error
    Infinity,  // error
    null,      // error
    NaN        // error
];

test.forEach((num, index) => {
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, isLeapYear(num));
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000);
});
