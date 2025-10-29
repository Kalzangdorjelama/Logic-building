const printFullPyramid = (getSize) => {
  // console.log(getSize);
  let k = 0;
  let n = Math.ceil(getSize / 2);
  for (let row = 1; row <= getSize; row++) {
    // console.log(row);
    if (getSize % 2 === 0) {
      if (row <= n) {
        k++;
      }
      if (row > n + 1) {
        k--;
      }
    } else {
      row <= n ? k++ : k--;
    }
    let line = "";
    for (let col = 1; col <= getSize; col++) {
      if (col >= n + 1 - k && col <= n - 1 + k) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};
printFullPyramid(10);

// Note
// console.log(Math.ceil(7/2));
// console.log(Math.floor(7/2));