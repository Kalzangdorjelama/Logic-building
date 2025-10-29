// Problem Statement - 34

// Q.No: Tip Calculator
// Write a program that calculates the tip amounts based on the bill total and percentages entered by the user.

// Input:
// --> Total amount
// --> Tip percentages
// Output:
// --> Different Tip amounts

// Example:
// -> Input:
// ----> Amount: 1000
// ----> Tip percentages: [5, 10, 15]
// -> Output: Different tip amounts
// ----> [50, 100, 150] or if you want in object then {5: 50, 10: 100, 15: 150}

function tipAmountCalculate(amount, tipPercentages) {
    // console.log(amount, tipPercentages)
    if (typeof amount !== "number" || isNaN(amount)) {
        throw new TypeError("Amount should be a valid number")
    }
    if (amount <= 0) {
        throw new RangeError(`Amount ${amount} should be greater than zero`)
    }
    if (!Array.isArray(tipPercentages)) {
        throw new TypeError("The tipPrecentage should be an array")
    }
    if (!tipPercentages.every((element) => typeof element === "number")) {
        throw new TypeError("All tip percentage elements should be numbers")
    }
    if (!isFinite(amount)) {
        throw new RangeError("Amount should be finite number")
    }

    let tipAmounts = {}
    for (let i = 0; i < tipPercentages.length; i++) {
        const tipAmount = (amount * tipPercentages[i]) / 100
        tipAmounts[tipPercentages[i]] = tipAmount
    }
    // console.log(tipAmounts)
    return tipAmounts
}

// test cases
const test = [
    [1000, [5, 10, 15]],
    [2000, "namaste"],
    [2000, [4, 20, "john"]],
    [NaN, [2, 4, 10]],
    [Infinity, [20, 30, 10]],
    [-10, "carlo"],
    [0, ["katrin", 7]]
]

test.forEach((input, index) => {
    const [amount, tipPercentages] = input
    try {
        console.log(`Test ${index + 1} | input ${input} -> Success :`, tipAmountCalculate(amount, tipPercentages))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${input} -> Error :`, error.message)
    }
})