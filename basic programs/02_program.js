// Problem Statement - 2

// Q.NO: program to Sum Of Two Numbers

function addTwoNumbers(number1, number2) {
    // console.log(number1, number2);
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new TypeError("Both inputs must be numbers.");
    }
    if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
        throw new RangeError("Inputs must be finite numbers (not NaN or Infinity).");
    }
    return number1 + number2;
}

// test cases

// Normal cases
console.log(addTwoNumbers(2, 3));       // 5
console.log(addTwoNumbers(-2, 3));      // 1
console.log(addTwoNumbers(0.1, 0.2));   // 0.30000000000000004 (floating point issue)

// Edge cases
console.log(addTwoNumbers(0, 0));       // 0
console.log(addTwoNumbers(-0, +0));     // 0
console.log(addTwoNumbers(1e10, 1e10)); // 20000000000

// Error cases
try {
    console.log(addTwoNumbers("5", 3));
}
catch (e) {
    console.log("ERROR:", e.message);
}

try { console.log(addTwoNumbers(undefined, 3)); }
catch (e) { console.log("ERROR:", e.message); }

try { console.log(addTwoNumbers(null, 3)); }
catch (e) { console.log("ERROR:", e.message); }

try { console.log(addTwoNumbers(NaN, 3)); }
catch (e) { console.log("ERROR:", e.message); }

try { console.log(addTwoNumbers(Infinity, 3)); }
catch (e) { console.log("ERROR:", e.message); }

console.log("=========== NOTES ===========");
console.log("typeof NaN:", typeof NaN);
console.log("typeof null:", typeof null);




