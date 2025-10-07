// Problem Statement - 18

// Q.No: Write a function that calculates and prints the simple interest on a loan amount
// Input:
// --> Principle amount
// --> Interest rate (yearly)
// --> Time duration
// Return: interest amount
// Simple interest:
// Formula(Principal * Interest Rate * Time Duration ) / 100
// Example:
// 1000, 5%, 1 year = (1000 * 5 * 1) / 100 = 50
// 20000, 10%, 5 = (20000 * 10 * 5) / 100 = 10000

function calculateSimpleInterest(principalAmount, interestRate, timeDuration) {
    // console.log(principalAmount, interestRate, timeDuration);
    if (typeof principalAmount !== "number" || typeof interestRate !== "number" || typeof timeDuration !== "number") {
        throw new TypeError(`principalAmount=${principalAmount} or interestRate=${interestRate} or timeDuration=${timeDuration} must be number`)
    }
    if (Number.isNaN(principalAmount) || Number.isNaN(interestRate) || Number.isNaN(timeDuration)) {
        throw new TypeError(`principalAmount=${principalAmount} or interestRate=${interestRate} or timeDuration=${timeDuration} should not be NaN`)
    }
    if (!Number.isFinite(principalAmount) || !Number.isFinite(interestRate) || !Number.isFinite(timeDuration)) {
        throw new TypeError(`principalAmount=${principalAmount} or interestRate=${interestRate} or timeDuration=${timeDuration} should be finite number`)
    }
    if (principalAmount <= 0 || interestRate <= 0 || timeDuration <= 0) {
        throw new RangeError(`principalAmount=${principalAmount} or interestRate=${interestRate} or timeDuration=${timeDuration} should be greater than zero`)
    }
    const simpleInterest = (principalAmount * interestRate * timeDuration) / 100
    return simpleInterest
}

// console.log(calculateSimpleInterest(1000, 5, 1));

// console.log(calculateSimpleInterest(20000, 10, 5));

// console.log(calculateSimpleInterest("1000", 5, 1));

// console.log(calculateSimpleInterest(20000, NaN, 5));

// console.log(calculateSimpleInterest(20000, 3, Infinity));

// console.log(calculateSimpleInterest(0, 3, 1));

// console.log(calculateSimpleInterest(7000, undefined, 2));

// console.log(calculateSimpleInterest(8000, null, 2));

// console.log(calculateSimpleInterest(8000, 3.4, 1.7));

const test = [
    [1000, 5, 1],
    [20000, 10, 5],
    ["1000", 5, 1],
    [20000, NaN, 5],
    [20000, 3, Infinity],
    [0, 3, 1],
    [7000, undefined, 2],
    [8000, null, 2],
    [8000, 3.4, 1.7]
]

test.forEach((num, index) => {
    const [principalAmount, interestRate, timeDuration] = num;
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input ${num} -> Success :`, calculateSimpleInterest(principalAmount, interestRate, timeDuration))
        } catch (error) {
            console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
        }
    }, index * 2000)
})







