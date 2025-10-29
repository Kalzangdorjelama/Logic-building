const printLeftPyramid = (getSize) => {
  // console.log(getSize);
  for (let row = 1; row <= getSize; row++) {
    // console.log(row);
    let line = "";
    for (let col = 1; col <= getSize; col++) {
      col <= row ? (line += "*") : (line += " ");
    }
    console.log(line);
  }
};
printLeftPyramid(5);
