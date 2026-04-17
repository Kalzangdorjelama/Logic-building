// Problem statement - 14

// Q.No: Write a function that returns the result of raising a given number to a specified power.
// Input: Two numbers
// -> Base
// -> Exponent
// Return: Base to the power of exponent
// Example:
// 2, 3 : 2 * 2 * 2 = 8
// 5, 4 : 5 * 5 * 5 * 5 = 625
// Do not use Math.pow()

function calculatePower(base, exponent) {
	// console.log(base, exponent);
	if (typeof base !== "number" || typeof exponent !== "number") {
		throw new TypeError("Input should be number type");
	}
	if (Number.isNaN(base) || Number.isNaN(exponent)) {
		throw new TypeError("Input should not be NaN");
	}
	if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
		throw new RangeError("Input should be finite number");
	}
    if (!Number.isInteger(exponent)) {
        throw new TypeError("Exponent must be an integer")
    }
	if (base === 0 && exponent < 0) {
		throw new RangeError("Zero cannot be raised to a negative power");
	}
	let idx = 0;
	let result = 1;
	const isNegativeExponent = exponent < 0;
	const positiveExponent = isNegativeExponent ? -exponent : exponent;

	while (idx < positiveExponent) {
		// console.log(idx)
		result *= base;
		idx++;
	}
	return isNegativeExponent ? 1 / result : result;
}

// test cases
const tests = [
	[2, 3], // 8
	[5, 4], // 625
	[1, 0], // 1
	[0, 4], // 0
	[2, -3], // 0.125
	[-2, -2], // 0.25
	[-7, -2], // 0.02040816326
	[4.5, 3], //  91.125
    [2, 2.5], // Error: Exponent must be an integer
	[0, -6], // Error:  Zero cannot be raised to a negative power
	["4", 2], // Error:  Input should be number type
	[4, "2"], // Error:  Input should be number type
	[], // Error:  Input should be number type
	[NaN, 3], // Error:  Input should not be NaN
	[4, Infinity], // Error:  Input should be finite number
	[null, 6], //  Error:  Input should be number type
];

tests.forEach((num, idx) => {
	let [base, exponent] = num;
	try {
		console.log(
			`Test: ${idx + 1} | value: ${base}, ${exponent} -> Success: `,
			calculatePower(base, exponent),
		);
	} catch (error) {
		console.log(
			`Test: ${idx + 1} | value: ${base}, ${exponent} -> Error: `,
			error.message,
		);
	}
});
