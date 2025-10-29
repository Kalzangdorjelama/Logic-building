const printFullPyramid  = (getSize) => {
  // console.log(getSize);
  for (let row = 1; row <= getSize; row++) {
    // console.log(row);
    let line = "";
    for (let col = 1; col <= getSize * 2; col++) {
      if (col >= getSize + 1 - row && col <= getSize - 1 + row) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};
printFullPyramid(5);
