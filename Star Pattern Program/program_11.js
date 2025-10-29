const printFullPyramid = (getSize) => {
  // console.log(getSize);
  let k = 0
  let n = Math.ceil(getSize / 2)
  // console.log(n);
  for (let row = 1; row <= getSize; row++) {
    let line = ""
    row <= n ? k++ : k--
    for (let col = 1; col <= getSize; col++) {
      if (col >= 5 - k && col <= 3 + k) {
        line += "*"
      } else {
        line += " "
      }
    }
    console.log(line);

  }

};
printFullPyramid(7);

// Note
// console.log(Math.ceil(7/2));
// console.log(Math.floor(7/2));
