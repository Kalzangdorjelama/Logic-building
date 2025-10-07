// Problem Statement - 25

// Q.No: Write a program that prints a number pyramid
// Input: A positive number
// Output: Number Pyramid
// Example:
// -> input: 5
// -> output:
//      *
//     ***
//    *****
//   *******


function rightStarPattern(inputNumber) {
    for (let i = 1; i <= inputNumber; i++) {
        let row = ""
        for (let j = 1; j <= inputNumber * 2 - 1; j++) {
            if (inputNumber + 1 - i >= j && inputNumber - 1 + i <= j) {
                row += "*"
            }else{
                row += " "
            }
        }
        console.log(row)
    }
}
rightStarPattern(4)