// Problem Statement - 21

// Q.No: Write a program that swap two numbers
// Input: Two numbers a & b
// Output: Interchange the values of a and b
// Example:
// -> Input: a = 5 , b = 6
// -> Input: a = 6 , b = 5

let a = 5;
let b = 6;

console.log(`Value before swapping a = ${a} and b = ${b}`);

let temp = a
a = b;
b = temp;

console.log(`Value after swapping a = ${a} and b = ${b}`);


// ---------------- > Another way to do < ------------------

// without third variable
// does not work with all data types like string


let c = 6;
let d = 5;

console.log(`Value before swapping c = ${c} and d = ${d}`);

c = c + d
d = c - d
c = c - d

console.log(`Value after swapping c = ${c} and d = ${d}`);
