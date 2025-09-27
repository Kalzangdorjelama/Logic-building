// Problem Statement - 3

// Q.NO: program to calculate area of Rectangle

function getAreaOfRectangle(length, width) {
    // console.log(length, width);
    if (typeof length !== "number" || typeof width !== "number") {
        throw new TypeError("input should be number only")
    }
    if (!Number.isFinite(length) || !Number.isFinite(width)) {
        throw new RangeError("input must be finite")
    }
    if (Number.isNaN(length) || Number.isNaN(width)) {
        throw new RangeError("input must not be NaN")
    }
    if (length <= 0 || width <= 0) {
        throw new RangeError(`length: ${length} or width: ${width} is less than zero`);
    }
    return length * width;
}

// test cases
const test = [
    [7, 4], // 28
    [0, 5], // less than zero
    [4, -9], // less than zero 
    ["7", 7], // input should be number only
    [Infinity, 4], // input must be finite
    [7, undefined], // input should be number only
    [NaN, "number"], // input should be number only
    [null, 0] // input should be number only
]

test.forEach((num, index) => {
    // console.log("top :", index);
    const[length, width] = num
    setTimeout(() => {
        try {
            console.log(`Test ${index + 1} | input : ${num} -> Success :`, getAreaOfRectangle(length, width));   // (num[2], num[3])  --> (undefine, undefine)
            // console.log(num[index], num[index + 1]);
        } catch (error) {
            console.log(`Test ${index + 1} | input : ${num} -> Error :`, error.message);
        }
    }, index * 2000)
    // console.log("buttom :", index);
})

// console.log("NaN :",typeof NaN);
