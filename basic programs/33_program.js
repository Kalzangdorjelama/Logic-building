// Problem Statement - 33

// Q.No: Write a program that multiplies two matrices and returns the result
// Input: Two 2-dimensional array
// Output :
// -> One 2-dimensional array which is the multiplication result of 2 matrices

// Formula:
// --> C[i, j] = A[i][0] * B[0][j] + A[i][1] * B[1][j] + ... + A[i][n - 1] * B[n - 1][j]
// Input A is an m * n matrix (m rows and n columns)
// Input B is an n * p matrix (n rows and p columns)
// Output C is an m * p matrix

// Example:
// Problem statement 2 * 2
// ---> A: [[1, 2], [3, 4]] : m * n = 2 * 2
// ---> B: [[5, 6], [7, 8]] : n * p = 2 * 2
// ---> C: m * p matrix = 2 * 2
// ---> C: [[a, b], [c, d]]
// ---> a = C[0, 0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = (1 * 5) + (2 * 7) = 5 + 14 = 19
// ---> same as b, c, d

// C = [[19, 22], [43, 50]]