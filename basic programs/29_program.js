// Problem Statement - 29

// Q.No: Write a program that transposes a given matrix (swaps rows with columns)
// Input: 2 dimensional array(symmetric matrix)
// Output:
// -> Transposed matrix
// Example:
// --> [['a', 'c', 'e'], ['b', 'd', 'f']] -> [['a', 'b'], ['c', 'd'], ['e', 'f']]
// --> [[3, 4, 8], [5, 6, 9]] -> [[3, 5], [4, 6], [8, 9]]

function transposeMatrix(matrix) {
    // console.log(matrix)
    // console.log(matrix.length)
    if (!Array.isArray(matrix) || !matrix.every(element => Array.isArray(element))) {
        throw new TypeError("Input must be a 2D array (matrix)")
    }
    if (matrix.length <= 1) {
        throw new RangeError("Input should have more than one row")
    }

    const numberOfLengthOfRows = matrix.length
    // console.log(numberOfLengthOfColumns, numberOfLengthOfRows)
    let largestLengthArray = 0
    for (let i = 0; i < numberOfLengthOfRows; i++) {
        if (matrix[i].length > largestLengthArray) {
            largestLengthArray = matrix[i].length
        }
    }

    let transposesMatrixOfmatrix = []
    for (let i = 0; i < numberOfLengthOfRows; i++) {
        for (let j = 0; j < largestLengthArray; j++) {
            // console.log(matrix[i][j])
            if (!transposesMatrixOfmatrix[j]) {
                transposesMatrixOfmatrix[j] = []
            }
            transposesMatrixOfmatrix[j][i] = matrix[i][j]
        }
    }
    return transposesMatrixOfmatrix
}

// test cases
const test = [
    [[3, 4, 8], [5, 6, 9]],
    [['a', 'c', 'e'], ['b', 'd', 'f']],
    [[3, 4], [5, 6, 9], [5, 6, 9, 7]],
    [],
    [[3, 4, 8], [5, 6, 9], [1, 2], "hello", 1],
    [[1, 2, 3, 4]],
    [[NaN], [NaN, 2], [NaN], [NaN]],
    "hello"
]

test.forEach((input, index) => {
    try {
        console.log(`Test ${index + 1} | input ${JSON.stringify(input)} -> Success :`, transposeMatrix(input))
    } catch (error) {
        console.log(`Test ${index + 1} | input ${JSON.stringify(input)} -> Error :`, error.message)
    }
})

// Note:
// const obj = {
//     name: "John,
//     age: 22,
// }
// const JSONObj = JSON.stringify(obj)
// const jsObj = JSON.parse(JSONObj)

// console.log(JSONObj)
// console.log(jsObj)

